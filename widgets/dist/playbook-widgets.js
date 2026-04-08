/**
 * Playbook Widgets — Drop-in Web Components for responsible gambling
 * License: CC0-1.0 (Public Domain)
 * https://github.com/kphilander/Playbook
 */
(function() {
"use strict";

// ─── playbook-helpline.js ───
/**
 * <playbook-helpline> — Helpline badge/banner Web Component
 *
 * Usage:
 *   <playbook-helpline
 *     number="1-800-522-4700"
 *     text-number="800522"
 *     chat-url="https://ncpg.org/chat"
 *     label="Free, confidential support 24/7"
 *     theme="dark"
 *   ></playbook-helpline>
 *
 * Themes: "dark" (navy bg), "light" (white bg), "minimal" (transparent)
 * Modes: "banner" (full-width), "badge" (compact inline) — set via `mode` attribute
 */

class PlaybookHelpline extends HTMLElement {
  static get observedAttributes() {
    return ['number', 'text-number', 'chat-url', 'label', 'theme', 'mode'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const number = this.getAttribute('number') || '1-800-522-4700';
    const textNumber = this.getAttribute('text-number') || '';
    const chatUrl = this.getAttribute('chat-url') || '';
    const label = this.getAttribute('label') || 'Free, confidential support 24/7';
    const theme = this.getAttribute('theme') || 'dark';
    const mode = this.getAttribute('mode') || 'banner';

    // Read from the Playbook brand system's canonical variables first, fall back
    // to the legacy widget-specific `--pb-bg` / `--pb-text` / `--pb-accent` names
    // for any external consumers that theme via those, then hard defaults.
    const colors = {
      dark: {
        bg:     'var(--pb-color-primary, var(--pb-bg, #1B2838))',
        text:   'var(--pb-color-white, var(--pb-text, #fff))',
        accent: 'var(--pb-color-secondary, var(--pb-accent, #00D4AA))',
        border: 'transparent'
      },
      light: {
        bg:     'var(--pb-color-white, var(--pb-bg, #fff))',
        text:   'var(--pb-color-primary, var(--pb-text, #1B2838))',
        accent: 'var(--pb-color-secondary, var(--pb-accent, #00D4AA))',
        border: 'var(--pb-color-neutral-100, #e5e5e5)'
      },
      minimal: {
        bg:     'var(--pb-bg, transparent)',
        text:   'var(--pb-text, inherit)',
        accent: 'var(--pb-color-secondary, var(--pb-accent, #00D4AA))',
        border: 'transparent'
      },
    };
    const c = colors[theme] || colors.dark;

    const isBadge = mode === 'badge';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: var(--pb-font-body, var(--pb-font, 'Inter', system-ui, sans-serif)); }
        .helpline {
          background: ${c.bg};
          color: ${c.text};
          border: 1px solid ${c.border};
          border-radius: ${isBadge ? '12px' : '8px'};
          padding: ${isBadge ? '12px 20px' : '16px 24px'};
          display: flex;
          align-items: center;
          gap: ${isBadge ? '12px' : '16px'};
          flex-wrap: wrap;
          justify-content: ${isBadge ? 'flex-start' : 'center'};
          ${isBadge ? 'display: inline-flex;' : ''}
        }
        .label {
          font-size: ${isBadge ? '0.82rem' : '0.88rem'};
          opacity: 0.8;
          white-space: nowrap;
        }
        .contacts {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }
        a {
          color: ${c.accent};
          text-decoration: none;
          font-weight: 700;
          font-size: ${isBadge ? '0.88rem' : '1rem'};
          white-space: nowrap;
          transition: opacity 0.2s;
        }
        a:hover { opacity: 0.8; }
        a:focus-visible { outline: 2px solid ${c.accent}; outline-offset: 2px; border-radius: 4px; }
        .sep { opacity: 0.3; font-size: 0.7rem; }
      </style>
      <div class="helpline" role="complementary" aria-label="Support resources">
        <span class="label">${escapeHtml(label)}</span>
        <div class="contacts">
          <a href="tel:${number.replace(/[^+\d]/g, '')}" aria-label="Call ${number}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.4a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.7a2 2 0 0 1 1.7 2z"/></svg>${escapeHtml(number)}</a>
          ${textNumber ? `<span class="sep">|</span><a href="sms:${textNumber}" aria-label="Text ${textNumber}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Text ${escapeHtml(textNumber)}</a>` : ''}
          ${chatUrl ? `<span class="sep">|</span><a href="${escapeHtml(chatUrl)}" target="_blank" rel="noopener" aria-label="Live chat support"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Live Chat</a>` : ''}
        </div>
      </div>
    `;
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

customElements.define('playbook-helpline', PlaybookHelpline);


// ─── playbook-myth.js ───
/**
 * <playbook-myth> — Myth/Fact card Web Component
 *
 * Usage:
 *   <playbook-myth category="slots" theme="dark"></playbook-myth>
 *   <playbook-myth myth-id="3" theme="light"></playbook-myth>
 *   <playbook-myth api-url="/tools/playbook/api/myths.json"></playbook-myth>
 *
 * Shows a random myth from the category (or specific myth by ID).
 * Includes a "Next myth" button for cycling.
 */

class PlaybookMyth extends HTMLElement {
  static get observedAttributes() {
    return ['category', 'myth-id', 'theme', 'api-url'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._myths = [];
    this._currentIndex = 0;
  }

  connectedCallback() {
    this.render(); // Show loading state
    this.loadMyths();
  }

  async loadMyths() {
    const apiUrl = this.getAttribute('api-url') || '/tools/playbook/api/myths.json';
    try {
      const resp = await fetch(apiUrl);
      const data = await resp.json();
      let myths = data.myths || [];

      // Filter by category if specified
      const category = this.getAttribute('category');
      if (category) {
        myths = myths.filter(m =>
          m.gameType.some(t => t.includes(category.toLowerCase())) ||
          m.category.toLowerCase().includes(category.toLowerCase())
        );
      }

      // Filter by specific ID
      const mythId = this.getAttribute('myth-id');
      if (mythId) {
        myths = myths.filter(m => m.id === parseInt(mythId, 10));
      }

      this._myths = myths;
      this._currentIndex = Math.floor(Math.random() * myths.length);
      this.render();
    } catch (e) {
      this.renderError();
    }
  }

  next() {
    if (this._myths.length <= 1) return;
    this._currentIndex = (this._currentIndex + 1) % this._myths.length;
    this.render();
  }

  render() {
    const theme = this.getAttribute('theme') || 'dark';
    const myth = this._myths[this._currentIndex];

    // Brand-system variables win; legacy widget-local names are fallbacks.
    const isDark = theme === 'dark';
    const bg = isDark
      ? 'var(--pb-color-primary, var(--pb-bg, #1B2838))'
      : 'var(--pb-color-white, var(--pb-bg, #fff))';
    const text = isDark
      ? 'var(--pb-color-white, var(--pb-text, #fff))'
      : 'var(--pb-color-primary, var(--pb-text, #1B2838))';
    const muted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(27,40,56,0.5)';
    const accent = 'var(--pb-color-accent, var(--pb-accent, #FF6B35))';
    const teal = 'var(--pb-color-secondary, var(--pb-teal, #00D4AA))';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: var(--pb-font-body, var(--pb-font, 'Inter', system-ui, sans-serif)); max-width: 400px; }
        .card {
          background: ${bg};
          color: ${text};
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(27,40,56,0.12), 0 8px 24px rgba(27,40,56,0.08);
        }
        .gradient-bar { height: 4px; background: linear-gradient(90deg, ${accent}, ${teal}); }
        .body { padding: 24px; }
        .label {
          font-size: 0.62rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: ${accent}; margin-bottom: 12px;
        }
        .myth-text {
          font-size: 1.1rem; font-weight: 800; line-height: 1.25;
          margin-bottom: 14px; letter-spacing: -0.02em;
        }
        .strike {
          text-decoration: line-through; text-decoration-color: ${accent};
          text-decoration-thickness: 3px; opacity: 0.4;
        }
        .fact {
          font-size: 0.85rem; line-height: 1.55; color: ${muted};
          margin-bottom: 14px;
        }
        .fact strong { color: ${teal}; font-weight: 600; }
        .stat { display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px; }
        .stat-num { font-size: 1.8rem; font-weight: 900; color: ${accent}; line-height: 1; }
        .stat-unit { font-size: 0.62rem; font-weight: 600; color: ${muted}; line-height: 1.3; }
        .footer {
          padding: 12px 24px; display: flex; justify-content: space-between; align-items: center;
          background: ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'};
          border-top: 1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'};
        }
        .category { font-size: 0.68rem; color: ${muted}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }
        button {
          background: none; border: 1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'};
          color: ${text}; padding: 6px 14px; border-radius: 6px; cursor: pointer;
          font-family: inherit; font-size: 0.72rem; font-weight: 600;
          transition: background 0.2s, border-color 0.2s;
        }
        button:hover { background: ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)'}; border-color: ${teal}; }
        button:focus-visible { outline: 2px solid ${teal}; outline-offset: 2px; }
        .loading { padding: 32px; text-align: center; color: ${muted}; font-size: 0.85rem; }
      </style>
      <div class="card">
        <div class="gradient-bar"></div>
        ${myth ? this.renderMyth(myth) : '<div class="loading">Loading myths\u2026</div>'}
      </div>
    `;

    // Attach event listener to button
    const btn = this.shadowRoot.querySelector('button');
    if (btn) btn.addEventListener('click', () => this.next());
  }

  renderMyth(myth) {
    const sc = myth.socialCard;
    if (!sc) return '<div class="body">No social card data available.</div>';

    return `
      <div class="body">
        <div class="label">Myth vs. Math</div>
        <div class="myth-text"><span class="strike">\u201C${this.esc(sc.myth)}\u201D</span></div>
        <div class="fact">${this.esc(sc.fact)}</div>
        ${sc.stat ? `
          <div class="stat">
            <span class="stat-num">${this.esc(sc.stat.match(/^[\d.%]+/)?.[0] || '')}</span>
            <span class="stat-unit">${this.esc(sc.stat.replace(/^[\d.%]+\s*/, ''))}</span>
          </div>
        ` : ''}
      </div>
      <div class="footer">
        <span class="category">${this.esc(myth.category)}</span>
        ${this._myths.length > 1 ? '<button aria-label="Show next myth">Next myth \u2192</button>' : ''}
      </div>
    `;
  }

  renderError() {
    this.shadowRoot.innerHTML = `
      <style>:host { display: block; } .error { padding: 16px; color: #cc4444; font-size: 0.85rem; }</style>
      <div class="error">Could not load myth data.</div>
    `;
  }

  esc(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }
}

customElements.define('playbook-myth', PlaybookMyth);


// ─── playbook-odds.js ───
/**
 * <playbook-odds> — Game odds quick reference card Web Component
 *
 * Usage:
 *   <playbook-odds game="slots" theme="dark"></playbook-odds>
 *   <playbook-odds game="blackjack" show-bets></playbook-odds>
 *
 * Shows house edge, RTP, and key facts for a specific game.
 * Data is embedded (no API fetch needed) for instant rendering.
 */

class PlaybookOdds extends HTMLElement {
  static get observedAttributes() {
    return ['game', 'theme'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const gameName = (this.getAttribute('game') || 'slots').toLowerCase();
    const theme = this.getAttribute('theme') || 'dark';
    const game = GAME_DATA[gameName];

    if (!game) {
      this.shadowRoot.innerHTML = `<style>:host{display:block;} .err{padding:16px;color:#cc4444;font-size:0.85rem;}</style>
        <div class="err">Unknown game: "${this.esc(gameName)}". Available: ${Object.keys(GAME_DATA).join(', ')}</div>`;
      return;
    }

    // Brand-system variables win; legacy widget-local names are fallbacks.
    const isDark = theme === 'dark';
    const bg = isDark
      ? 'var(--pb-color-primary, var(--pb-bg, #1B2838))'
      : 'var(--pb-color-white, var(--pb-bg, #fff))';
    const text = isDark
      ? 'var(--pb-color-white, var(--pb-text, #fff))'
      : 'var(--pb-color-primary, var(--pb-text, #1B2838))';
    const muted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(27,40,56,0.5)';
    const accent = 'var(--pb-color-accent, var(--pb-accent, #FF6B35))';
    const teal = 'var(--pb-color-secondary, var(--pb-teal, #00D4AA))';
    const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: var(--pb-font-body, var(--pb-font, 'Inter', system-ui, sans-serif)); max-width: 320px; }
        .card { background: ${bg}; color: ${text}; border-radius: 16px; overflow: hidden;
          box-shadow: 0 2px 8px rgba(27,40,56,0.12), 0 8px 24px rgba(27,40,56,0.08); }
        .gradient-bar { height: 4px; background: linear-gradient(90deg, ${accent}, ${teal}); }
        .header { padding: 20px 24px 0; display: flex; justify-content: space-between; align-items: center; }
        .game-name { font-size: 1.1rem; font-weight: 800; letter-spacing: -0.02em; }
        .badge { font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
          padding: 4px 10px; border-radius: 100px; background: ${teal}; color: #1B2838; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 16px 24px; }
        .stat-box { background: ${cardBg}; border-radius: 10px; padding: 14px; }
        .stat-label { font-size: 0.58rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: ${muted}; margin-bottom: 4px; }
        .stat-value { font-size: 1.3rem; font-weight: 900; color: ${accent}; }
        .stat-value.positive { color: ${teal}; }
        .facts { padding: 0 24px 20px; }
        .fact { font-size: 0.78rem; line-height: 1.5; color: ${muted}; padding: 6px 0;
          border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}; }
        .fact:last-child { border-bottom: none; }
        .fact strong { color: ${text}; font-weight: 600; }
        .source { padding: 12px 24px; font-size: 0.6rem; color: ${muted}; opacity: 0.6;
          background: ${cardBg}; text-align: center; }
      </style>
      <div class="card">
        <div class="gradient-bar"></div>
        <div class="header">
          <span class="game-name">${this.esc(game.name)}</span>
          <span class="badge">Know the Odds</span>
        </div>
        <div class="stats">
          <div class="stat-box">
            <div class="stat-label">House Edge</div>
            <div class="stat-value">${this.esc(game.houseEdge)}</div>
          </div>
          <div class="stat-box">
            <div class="stat-label">RTP</div>
            <div class="stat-value positive">${this.esc(game.rtp)}</div>
          </div>
        </div>
        <div class="facts">
          ${game.facts.map(f => `<div class="fact">${f}</div>`).join('')}
        </div>
        <div class="source">Source: Playbook \u00B7 CC0 Licensed \u00B7 Verify for your jurisdiction</div>
      </div>
    `;
  }

  esc(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }
}

const GAME_DATA = {
  slots: {
    name: 'Slots',
    houseEdge: '2\u201315%',
    rtp: '85\u201398%',
    facts: [
      '<strong>Every spin is independent.</strong> The machine has no memory.',
      '<strong>RTP is set in software</strong> and regulated. Time of day is irrelevant.',
      'Higher bets = bigger swings, <strong>not better odds.</strong>',
      'Near misses are not \u201Calmost winning.\u201D The result was already decided.',
    ],
  },
  blackjack: {
    name: 'Blackjack',
    houseEdge: '0.5\u20132%',
    rtp: '98\u201399.5%',
    facts: [
      '<strong>Lowest house edge</strong> of any casino game with basic strategy.',
      'Basic strategy reduces house edge. <strong>It\u2019s math, not intuition.</strong>',
      'Card counting is real but yields <strong>a tiny 0.5\u20131.5% edge</strong> over thousands of hands.',
      'The dealer follows mandatory rules with <strong>zero discretion.</strong>',
    ],
  },
  roulette: {
    name: 'Roulette',
    houseEdge: '2.7\u20135.3%',
    rtp: '94.7\u201397.3%',
    facts: [
      '<strong>American roulette (00):</strong> 5.26% house edge.',
      '<strong>European roulette (single 0):</strong> 2.70% house edge.',
      'Every spin is independent. The ball doesn\u2019t know where it landed before.',
      'No number is \u201Cdue.\u201D <strong>All 37/38 slots are equally likely.</strong>',
    ],
  },
  'sports-betting': {
    name: 'Sports Betting',
    houseEdge: '4\u201310%',
    rtp: '90\u201396%',
    facts: [
      'The <strong>vig (juice)</strong> is the sportsbook\u2019s margin. Standard: -110 on both sides.',
      'Knowing the sport helps, but <strong>the line already prices in expertise.</strong>',
      'Parlays compound the vig per leg. <strong>More legs = worse math.</strong>',
      'Tipsters show highlights, not losses. <strong>Survivorship bias is real.</strong>',
    ],
  },
  baccarat: {
    name: 'Baccarat',
    houseEdge: '1.06\u201314.4%',
    rtp: '85.6\u201398.9%',
    facts: [
      '<strong>Banker bet:</strong> 1.06% house edge (best bet in the game).',
      '<strong>Player bet:</strong> 1.24% house edge.',
      '<strong>Tie bet:</strong> 14.4% house edge \u2014 avoid it.',
      'Pattern tracking doesn\u2019t change the odds. <strong>Each hand is independent.</strong>',
    ],
  },
  'video-poker': {
    name: 'Video Poker',
    houseEdge: '0.5\u20135%',
    rtp: '95\u201399.5%',
    facts: [
      'With optimal strategy, some variants offer <strong>RTP over 99%.</strong>',
      '<strong>Jacks or Better (9/6)</strong> is the gold standard: 99.54% RTP.',
      'Unlike slots, <strong>your decisions actually affect the outcome.</strong>',
      'Always play <strong>max coins</strong> \u2014 the Royal Flush bonus requires it.',
    ],
  },
  craps: {
    name: 'Craps',
    houseEdge: '1.4\u201316.7%',
    rtp: '83.3\u201398.6%',
    facts: [
      '<strong>Pass/Don\u2019t Pass:</strong> 1.41% house edge (best bets).',
      '<strong>Odds bet:</strong> 0% house edge \u2014 the only fair bet in the casino.',
      'Proposition bets look exciting but carry <strong>house edges up to 16.7%.</strong>',
      'Dice are random. <strong>Controlled shooting is a myth.</strong>',
    ],
  },
  lottery: {
    name: 'Lottery',
    houseEdge: '40\u201360%',
    rtp: '40\u201360%',
    facts: [
      'Lotteries have the <strong>highest house edge</strong> of any gambling product.',
      'Buying 10 tickets multiplies near-zero odds. <strong>10 \u00D7 near-zero \u2248 near-zero.</strong>',
      'No number combination is more likely than any other. <strong>Randomness doesn\u2019t have favorites.</strong>',
      'The expected return is typically <strong>$0.40\u2013$0.60 per $1 spent.</strong>',
    ],
  },
  bingo: {
    name: 'Bingo',
    houseEdge: '5\u201325%',
    rtp: '75\u201395%',
    facts: [
      'Odds depend on <strong>how many cards are in play,</strong> not which ones you hold.',
      'More cards = slightly better odds, but <strong>you\u2019re competing against all players.</strong>',
      'Numbers are drawn randomly. <strong>No pattern or strategy changes the math.</strong>',
      'The house takes its cut from the prize pool \u2014 typically <strong>5\u201325%.</strong>',
    ],
  },
};

customElements.define('playbook-odds', PlaybookOdds);


})();