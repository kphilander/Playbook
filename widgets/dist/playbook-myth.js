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
