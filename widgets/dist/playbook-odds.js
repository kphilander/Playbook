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

    const isDark = theme === 'dark';
    const bg = isDark ? 'var(--pb-bg, #1B2838)' : 'var(--pb-bg, #fff)';
    const text = isDark ? 'var(--pb-text, #fff)' : 'var(--pb-text, #1B2838)';
    const muted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(27,40,56,0.5)';
    const accent = 'var(--pb-accent, #FF6B35)';
    const teal = 'var(--pb-teal, #00D4AA)';
    const cardBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: var(--pb-font, 'Inter', system-ui, sans-serif); max-width: 320px; }
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
