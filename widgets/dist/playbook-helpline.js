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

    const colors = {
      dark:    { bg: 'var(--pb-bg, #1B2838)', text: 'var(--pb-text, #fff)', accent: 'var(--pb-accent, #00D4AA)', border: 'transparent' },
      light:   { bg: 'var(--pb-bg, #fff)', text: 'var(--pb-text, #1B2838)', accent: 'var(--pb-accent, #00D4AA)', border: '#e5e5e5' },
      minimal: { bg: 'var(--pb-bg, transparent)', text: 'var(--pb-text, inherit)', accent: 'var(--pb-accent, #00D4AA)', border: 'transparent' },
    };
    const c = colors[theme] || colors.dark;

    const isBadge = mode === 'badge';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: var(--pb-font, 'Inter', system-ui, sans-serif); }
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
          <a href="tel:${number.replace(/[^+\d]/g, '')}" aria-label="Call ${number}">📞 ${escapeHtml(number)}</a>
          ${textNumber ? `<span class="sep">|</span><a href="sms:${textNumber}" aria-label="Text ${textNumber}">💬 Text ${escapeHtml(textNumber)}</a>` : ''}
          ${chatUrl ? `<span class="sep">|</span><a href="${escapeHtml(chatUrl)}" target="_blank" rel="noopener" aria-label="Live chat support">💻 Live Chat</a>` : ''}
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
