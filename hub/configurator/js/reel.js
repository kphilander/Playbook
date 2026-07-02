/* reel.js — the brand showcase that opens the configurator.
 *
 * Auto-plays a sequence of complete brands, alternating LIGHT and DARK surfaces
 * (the whole screen flips, with adaptive text), across different collateral
 * layouts — so consecutive frames differ by mode, palette, type and surface,
 * not just hue. "Customize this brand" hands the shown brand straight to the
 * editor in place; "Start from scratch" dismisses it. Reuses the same
 * generator the random-brand button uses, so the reel and the tool agree.
 */
import { generateRandomBrand } from './random-brand.js';

const CSS = `
.reel-ov{position:fixed;inset:0;z-index:1000;overflow:hidden;background:#06070b;color:#fff;opacity:0;visibility:hidden;transition:opacity .5s,visibility .5s}
.reel-ov.open{opacity:1;visibility:visible}
@property --rp{syntax:'<color>';inherits:true;initial-value:#0a0b10}
@property --rd{syntax:'<color>';inherits:true;initial-value:#05060a}
@property --rs{syntax:'<color>';inherits:true;initial-value:#1b2838}
@property --ra{syntax:'<color>';inherits:true;initial-value:#1b2838}
.reel-amb{position:absolute;inset:0;z-index:0;--rp:#101c35;--rd:#070b16;--rs:#39beff;--ra:#fa5fa1;
  transition:--rp 1.1s cubic-bezier(.4,0,.2,1),--rd 1.1s cubic-bezier(.4,0,.2,1),--rs 1.1s cubic-bezier(.4,0,.2,1),--ra 1.1s cubic-bezier(.4,0,.2,1);
  background:linear-gradient(150deg,var(--rp),var(--rd))}
.reel-amb::before,.reel-amb::after{content:'';position:absolute;inset:-20%;border-radius:50%;filter:blur(64px);will-change:transform}
.reel-amb::before{background:radial-gradient(closest-side,var(--rs),transparent 70%);width:70%;height:70%;left:-6%;top:-10%;opacity:.5;animation:rdrift1 22s ease-in-out infinite}
.reel-amb::after{background:radial-gradient(closest-side,var(--ra),transparent 70%);width:65%;height:65%;right:-8%;bottom:-12%;opacity:.36;animation:rdrift2 26s ease-in-out infinite}
.reel-ov.lightframe .reel-amb::before{opacity:.28}.reel-ov.lightframe .reel-amb::after{opacity:.2}
@keyframes rdrift1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(8%,6%) scale(1.12)}}
@keyframes rdrift2{0%,100%{transform:translate(0,0) scale(1.05)}50%{transform:translate(-7%,-5%) scale(1)}}
.reel-grain{position:absolute;inset:0;z-index:5;pointer-events:none;opacity:.05;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.reel-vig{position:absolute;inset:0;z-index:5;pointer-events:none;background:radial-gradient(130% 100% at 50% 40%,transparent 55%,rgba(0,0,0,.45))}
.reel-ov.lightframe .reel-vig{background:radial-gradient(130% 100% at 50% 40%,transparent 60%,rgba(0,0,0,.12))}
.reel-prog{position:absolute;top:0;left:0;right:0;height:3px;z-index:25;background:rgba(125,125,140,.18)}
.reel-prog i{display:block;height:100%;transform-origin:left;transform:scaleX(0);background:linear-gradient(90deg,var(--rs),var(--ra))}
.reel-prog i.run{animation:rfill var(--rdur,4600ms) linear forwards}
@keyframes rfill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.reel-head{position:absolute;top:0;left:0;right:0;z-index:20;padding:26px 40px;display:flex;justify-content:space-between;align-items:flex-start}
.reel-mark{font:800 15px Inter,system-ui,sans-serif}.reel-mark b{color:#00d4aa}
.reel-hr{display:flex;flex-direction:column;align-items:flex-end;gap:13px;max-width:430px;text-align:right}
.reel-pitch h1{margin:0;font:800 19px/1.1 Inter,sans-serif;letter-spacing:-.01em}
.reel-pitch p{margin:5px 0 0;font:13px/1.5 Inter,sans-serif;opacity:.55}
.reel-use{font:800 14px Inter,sans-serif;color:#06070b;background:#fff;border:0;border-radius:11px;padding:12px 18px;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.35);transition:transform .15s,box-shadow .2s}
.reel-use:hover{transform:translateY(-2px);box-shadow:0 16px 36px rgba(0,0,0,.45)}
.reel-skip{position:absolute;top:30px;left:50%;transform:translateX(-50%);z-index:21;font:600 12.5px Inter,sans-serif;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);color:inherit;border-radius:999px;padding:7px 16px;cursor:pointer}
.reel-ov.lightframe{color:#111}
.reel-ov.lightframe .reel-skip{background:rgba(0,0,0,.06);border-color:rgba(0,0,0,.14)}
.reel-ov.lightframe .reel-use{background:#111;color:#fff}
.reel-stage{position:absolute;inset:0;z-index:10;display:flex;align-items:center;justify-content:center;padding:0 6vw}
.reel-content{width:100%;max-width:1280px}
.reel-brand{--ink:#fff;--mut:rgba(255,255,255,.74)}
.rl{--ink:#fff;--mut:rgba(255,255,255,.74)} .rd-mode{} /* placeholder */
.reel-kick{display:inline-block;font:700 12px var(--fb);letter-spacing:.24em;text-transform:uppercase;color:var(--s)}
.reel-wm{font:800 clamp(46px,8vw,108px)/.93 var(--fh);letter-spacing:-.03em;color:var(--ink);margin:16px 0 0}
.reel-wm i{font-style:normal;color:var(--a)}
.reel-tag{font:clamp(17px,1.9vw,24px)/1.4 var(--fb);color:var(--mut);max-width:22ch;margin:22px 0 30px}
.reel-chips{display:flex;gap:11px}.reel-chips.c{justify-content:center}
.reel-chip{display:flex;flex-direction:column;gap:6px}
.reel-chip i{width:54px;height:34px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.28),inset 0 0 0 1px rgba(125,125,140,.18)}
.reel-chip span{font:10px 'Source Code Pro',monospace;opacity:.5}
.reel-tspec{font:12.5px var(--fb);opacity:.6}.reel-tspec b{opacity:1;font-weight:700}.reel-tspec .aa{font:800 20px var(--fh);margin-left:9px;vertical-align:-3px}
/* layouts */
.L-lockup{position:relative;text-align:center;max-width:920px;margin:0 auto}
.L-lockup .reel-wm{font-size:clamp(54px,9.4vw,124px)}.L-lockup .reel-tag{margin:24px auto 30px}
.L-split{display:grid;grid-template-columns:1.04fr .96fr;gap:50px;align-items:center}
.L-split .reel-wm{font-size:clamp(44px,6vw,84px)}
.surf{border-radius:22px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.45);max-width:460px;width:100%;margin-left:auto;animation:rfloat 7.5s ease-in-out infinite}
@keyframes rfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
.surf .bar{height:10px;background:linear-gradient(90deg,var(--a),var(--s))}
.surf .pad{padding:28px 30px 30px;background:var(--card);color:var(--cink)}
.surf .top{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px}
.surf .logo{font:800 21px var(--fh)}.surf .logo i{font-style:normal;color:var(--s)}
.surf .pill{font:800 11px var(--fb);letter-spacing:.06em;text-transform:uppercase;color:var(--card);background:var(--s);padding:5px 13px;border-radius:999px}
.surf .lab{font:700 12px var(--fb);letter-spacing:.13em;text-transform:uppercase;color:var(--a);margin-bottom:12px}
.surf .h{font:800 26px/1.12 var(--fh);margin-bottom:15px}
.surf .h s{text-decoration-color:var(--a);text-decoration-thickness:3px}
.surf .f{font:14px/1.55 var(--fb);opacity:.78;margin-bottom:22px}.surf .f b{color:var(--s);opacity:1}
.surf .st{display:flex;align-items:baseline;gap:12px;margin-bottom:24px}
.surf .st .n{font:800 46px/1 var(--fh);color:var(--a)}.surf .st span{font:12.5px var(--fb);opacity:.65}
.surf .cta{font:800 14px var(--fb);border:0;border-radius:12px;padding:13px 21px;background:var(--a);color:var(--card)}
.L-poster{max-width:560px;margin:0 auto;text-align:center}.L-poster .reel-kick{margin-bottom:16px}
.poster-p{border-radius:20px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.45);text-align:left;background:var(--ppbg);color:var(--ppink);animation:rfloat 8s ease-in-out infinite}
.poster-p .bar{height:10px;background:linear-gradient(90deg,var(--a),var(--s))}
.poster-p .pp{padding:32px 34px 28px}
.poster-p .pl{font:800 20px var(--fh);margin-bottom:22px}.poster-p .pl i{font-style:normal;color:var(--s)}
.poster-p .ph{font:800 29px/1.12 var(--fh);letter-spacing:-.02em;margin:0 0 22px}
.poster-p .row{display:grid;grid-template-columns:1fr auto;gap:5px 14px;padding:12px 0;border-top:1px solid var(--pln)}
.poster-p .g{font:14px var(--fb)}.poster-p .e{font:800 22px var(--fh);color:var(--a);text-align:right;grid-row:span 2}.poster-p .nt{font:11.5px var(--fb);opacity:.55}
.poster-p .pf{margin-top:20px;padding-top:16px;border-top:1px solid var(--pln);font:600 12.5px 'Source Code Pro',monospace;color:var(--s)}
.L-stat{text-align:center;max-width:1000px;margin:0 auto;position:relative}.L-stat .reel-kick{margin-bottom:6px}
.L-stat .huge{font:800 clamp(108px,20vw,272px)/.86 var(--fh);letter-spacing:-.04em;color:var(--a);text-shadow:0 12px 70px rgba(0,0,0,.25)}
.L-stat .huge small{font-size:.42em;vertical-align:.18em}
.L-stat .cap{font:clamp(16px,1.8vw,22px) var(--fb);color:var(--mut);max-width:30ch;margin:16px auto 24px}
.L-stat .reel-wm{font-size:30px}.L-stat .reel-chips{justify-content:center}
.L-editorial{max-width:760px;margin:0 auto}
.L-editorial .ekick{font:700 12px var(--fb);letter-spacing:.24em;text-transform:uppercase;color:var(--a)}
.L-editorial .eh{font:800 clamp(36px,5.4vw,68px)/1.05 var(--fh);letter-spacing:-.02em;color:var(--ink);margin:18px 0 22px}
.L-editorial .erule{height:4px;width:64px;background:var(--a);border-radius:2px;margin-bottom:22px}
.L-editorial .ed{font:clamp(16px,1.7vw,20px)/1.6 var(--fb);color:var(--mut);max-width:52ch;margin-bottom:26px}
.L-editorial .eby{font:700 13px var(--fb);color:var(--s)}
/* entrance */
.reel-content.in .reel-brand > *:not(.glow){animation:rrise .68s both cubic-bezier(.2,.7,.2,1)}
.reel-content.in .reel-brand > *:nth-child(2){animation-delay:.07s}
.reel-content.in .reel-brand > *:nth-child(3){animation-delay:.15s}
.reel-content.in .reel-brand > *:nth-child(4){animation-delay:.23s}
.reel-content.in .reel-brand > *:nth-child(5){animation-delay:.31s}
.reel-content.in .surf,.reel-content.in .poster-p{animation:rrisecard .9s .12s both cubic-bezier(.2,.75,.2,1),rfloat 7.5s 1s ease-in-out infinite}
.reel-content.out .reel-brand > *{animation:rleave .42s both cubic-bezier(.4,0,1,1)}
@keyframes rrise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@keyframes rrisecard{from{opacity:0;transform:translateY(34px) scale(.97)}to{opacity:1;transform:none}}
@keyframes rleave{from{opacity:1;transform:none}to{opacity:0;transform:translateY(-16px)}}
.reel-ctrl{position:absolute;bottom:0;left:0;right:0;z-index:20;padding:0 40px 26px;display:flex;align-items:center;gap:15px}
.reel-dots{display:flex;gap:7px;flex:1;flex-wrap:wrap}
.reel-dot{width:7px;height:7px;border-radius:999px;background:currentColor;opacity:.28;border:0;padding:0;cursor:pointer;transition:.25s}
.reel-dot.on{opacity:1;width:20px}
.reel-now{font:12.5px Inter,sans-serif;opacity:.55;white-space:nowrap}.reel-now b{opacity:1;font-weight:700}
.reel-cbtn{background:rgba(125,125,140,.14);border:1px solid rgba(125,125,140,.28);color:inherit;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:14px;display:grid;place-items:center}
@media(max-width:860px){.L-split{grid-template-columns:1fr;gap:24px}.L-split .reel-collat{display:none}.reel-pitch{display:none}}
`;

const STATS = [['5.26', '%', 'American roulette'], ['0.5', '%', 'Blackjack · basic strategy'], ['2–15', '%', 'Slots, average'], ['1.41', '%', 'Craps · pass line'], ['1.06', '%', 'Baccarat · banker']];
const TAGS = ['Know the odds. Own your play.', 'Every game has a house edge.', 'No fine print. Just the facts.', 'Play with your eyes open.', "The math doesn't change. Your strategy can.", 'Worth knowing. Worth sharing.'];
const pick = a => a[Math.floor(Math.random() * a.length)];
const NM = b => b.name[0] + b.name[1];
const wmHTML = b => `${b.name[0]}<i>${b.name[1]}</i>`;
const chips = (b, c) => `<div class="reel-chips${c ? ' c' : ''}">${[b.primary, b.secondary, b.accent].map(h => `<div class="reel-chip"><i style="background:${h}"></i><span>${h}</span></div>`).join('')}</div>`;
const tspec = b => `<div class="reel-tspec"><b>${b.fontHeading}</b> / ${b.fontBody}<span class="aa">Aa</span></div>`;

function vars(b, light) {
  const ink = light ? b.n900 : '#fff';
  const mut = light ? b.n700 : 'rgba(255,255,255,.74)';
  return `--p:${b.primary};--pd:${b.primaryLight};--s:${b.secondary};--a:${b.accent};--fh:'${b.fontHeading}',sans-serif;--fb:'${b.fontBody}',sans-serif;--ink:${ink};--mut:${mut}`;
}

/* Each entry: {light:bool, html:fn}. Mix alternates light/dark. */
const LAYOUTS = [
  { light: false, html: b => `<div class="reel-brand L-lockup" style="${vars(b, false)}"><span class="reel-kick">Identity</span><h2 class="reel-wm">${wmHTML(b)}</h2><p class="reel-tag">${b.tag}</p>${chips(b, true)}${tspec(b)}</div>` },
  { light: true, html: b => `<div class="reel-brand L-split" style="${vars(b, true)};--card:${b.n50};--cink:${b.n900}">
      <div><span class="reel-kick">Support · light</span><h2 class="reel-wm">${wmHTML(b)}</h2><p class="reel-tag">${b.tag}</p>${chips(b)}${tspec(b)}</div>
      <div class="reel-collat"><div class="surf"><div class="bar"></div><div class="pad">
        <div class="top"><span class="logo">${wmHTML(b)}</span><span class="pill">Help</span></div>
        <div class="h" style="color:${b.n900}">No question is too small.</div>
        <div class="f" style="color:${b.n700};opacity:1">Free, confidential support for anything about gambling. No judgment, ever.</div>
        <div class="st"><span class="n">24/7</span><span style="color:${b.n700}">someone&rsquo;s here — call, text or chat</span></div>
        <button class="cta">Get support &rarr;</button></div></div></div></div>` },
  { light: false, html: b => `<div class="reel-brand L-stat" style="${vars(b, false)}"><span class="reel-kick">The number</span>${(s => `<div class="huge">${s[0]}<small>${s[1]}</small></div><p class="cap">${s[2]} — what the house keeps, on average.</p>`)(pick(STATS))}<div class="reel-wm">${wmHTML(b)}</div>${chips(b, true)}</div>` },
  { light: true, html: b => `<div class="reel-brand L-editorial" style="${vars(b, true)}"><span class="ekick">Article · explainer</span><h2 class="eh">Every game has a house edge. Here&rsquo;s what you&rsquo;re really playing.</h2><div class="erule"></div><p class="ed">The odds aren&rsquo;t hidden — they&rsquo;re just rarely shown. Once you can see the math, every choice at the table gets a little clearer.</p><div class="eby">${NM(b)} · Entertainment literacy</div></div>` },
  { light: false, html: b => `<div class="reel-brand L-split" style="${vars(b, false)};--card:${b.primary};--cink:#fff">
      <div><span class="reel-kick">Social card</span><h2 class="reel-wm">${wmHTML(b)}</h2><p class="reel-tag">${b.tag}</p>${chips(b)}${tspec(b)}</div>
      <div class="reel-collat"><div class="surf"><div class="bar"></div><div class="pad">
        <div class="top"><span class="logo">${wmHTML(b)}</span><span class="pill">Open</span></div>
        <div class="lab">Myth vs. Math</div><div class="h"><s>&ldquo;I&rsquo;m on a hot streak&rdquo;</s></div>
        <div class="f">Every spin is independent. <b>Your brain sees patterns. The math doesn&rsquo;t.</b></div>
        <div class="st"><span class="n">0%</span><span>chance past results affect the next spin</span></div>
        <button class="cta">Know your odds &rarr;</button></div></div></div></div>` },
  { light: true, html: b => `<div class="reel-brand L-poster" style="${vars(b, true)};--ppbg:${b.n50};--ppink:${b.n900};--pln:${b.n200}"><span class="reel-kick">Poster · venue</span><div class="poster-p"><div class="bar"></div><div class="pp">
      <div class="pl" style="color:${b.n900}">${wmHTML(b)}</div><h3 class="ph" style="color:${b.n900}">Every game has a house edge. Here&rsquo;s yours.</h3>
      ${[['Blackjack', '0.5%', 'Best odds in the house'], ['American Roulette', '5.26%', 'Double zero = double edge'], ['Slots', '2–15%', 'Varies by machine']].map(r => `<div class="row"><div class="g" style="color:${b.n900}">${r[0]}</div><div class="e">${r[1]}</div><div class="nt" style="color:${b.n700}">${r[2]}</div></div>`).join('')}
      <div class="pf">Free support 24/7 · 1-800-522-4700</div></div></div></div>` },
];

export function initReel(container, { onPick, onClose }) {
  if (!document.getElementById('reel-style')) {
    const st = document.createElement('style'); st.id = 'reel-style'; st.textContent = CSS; document.head.appendChild(st);
  }
  container.className = 'reel-ov';
  container.innerHTML = `
    <div class="reel-amb"></div><div class="reel-grain"></div><div class="reel-vig"></div>
    <div class="reel-prog"><i></i></div>
    <button class="reel-skip">Start from scratch instead</button>
    <div class="reel-head"><div class="reel-mark"><b>Play</b>book · brand system</div>
      <div class="reel-hr"><div class="reel-pitch"><h1>One config. Every brand.</h1><p>A single brand file restyles the whole system — light or dark, every surface, colour and type. Like one? Make it yours.</p></div>
      <button class="reel-use">Customize this brand &rarr;</button></div></div>
    <div class="reel-stage"><div class="reel-content"></div></div>
    <div class="reel-ctrl"><div class="reel-dots"></div><span class="reel-now"></span>
      <button class="reel-cbtn" data-d="-1">&#8249;</button><button class="reel-cbtn rl-play">&#10073;&#10073;</button><button class="reel-cbtn" data-d="1">&#8250;</button></div>`;

  const amb = container.querySelector('.reel-amb'), content = container.querySelector('.reel-content'),
        prog = container.querySelector('.reel-prog i'), dotsEl = container.querySelector('.reel-dots'),
        nowEl = container.querySelector('.reel-now');
  const N = 18, DUR = 4600, OUT = 440;
  const SEQ = Array.from({ length: N }, () => { const b = generateRandomBrand(); b.tag = pick(TAGS); return b; });
  container.style.setProperty('--rdur', DUR + 'ms');
  dotsEl.innerHTML = SEQ.map((_, i) => `<button class="reel-dot" data-i="${i}"></button>`).join('');
  let cur = 0, playing = true, timer = null;

  function paint(i) {
    const b = SEQ[i], lay = LAYOUTS[i % LAYOUTS.length];
    container.classList.toggle('lightframe', lay.light);
    amb.style.setProperty('--rp', lay.light ? b.n50 : b.primary);
    amb.style.setProperty('--rd', lay.light ? b.n100 : b.primaryLight);
    amb.style.setProperty('--rs', b.secondary);
    amb.style.setProperty('--ra', b.accent);
    content.innerHTML = lay.html(b);
    content.classList.remove('out'); void content.offsetWidth; content.classList.add('in');
    dotsEl.querySelectorAll('.reel-dot').forEach((d, k) => d.classList.toggle('on', k === i));
    nowEl.innerHTML = `<b>${NM(b)}</b> &nbsp;·&nbsp; ${String(i + 1).padStart(2, '0')} / ${N}`;
    cur = i; prog.classList.remove('run'); void prog.offsetWidth; if (playing) prog.classList.add('run');
  }
  function show(i) { i = (i + N) % N; content.classList.remove('in'); content.classList.add('out'); setTimeout(() => paint(i), OUT); }
  function schedule() { clearTimeout(timer); if (playing) timer = setTimeout(() => show(cur + 1), DUR); }
  function advance(d) { show(cur + d); schedule(); }

  container.querySelector('.reel-use').addEventListener('click', () => onPick(SEQ[cur]));
  container.querySelector('.reel-skip').addEventListener('click', () => onClose());
  dotsEl.addEventListener('click', e => { const d = e.target.closest('.reel-dot'); if (d) { show(+d.dataset.i); schedule(); } });
  container.querySelectorAll('.reel-cbtn[data-d]').forEach(b => b.addEventListener('click', () => advance(+b.dataset.d)));
  const playBtn = container.querySelector('.rl-play');
  playBtn.addEventListener('click', () => { playing = !playing; playBtn.innerHTML = playing ? '&#10073;&#10073;' : '&#9658;'; prog.style.animationPlayState = playing ? 'running' : 'paused'; schedule(); });
  container.addEventListener('mouseenter', () => { clearTimeout(timer); prog.style.animationPlayState = 'paused'; });
  container.addEventListener('mouseleave', () => { if (playing) { prog.style.animationPlayState = 'running'; schedule(); } });

  function open() { container.classList.add('open'); paint(cur); schedule(); }
  function close() { container.classList.remove('open'); clearTimeout(timer); }
  return { open, close };
}
