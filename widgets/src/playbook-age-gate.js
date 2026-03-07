/**
 * <playbook-age-gate> — Age verification prompt Web Component
 *
 * Usage:
 *   <playbook-age-gate min-age="21" redirect="/not-eligible"></playbook-age-gate>
 *
 * Shows a modal overlay asking user to confirm they meet the minimum age.
 * On confirmation, sets a cookie/localStorage flag.
 * On rejection, redirects to the specified URL.
 */

class PlaybookAgeGate extends HTMLElement {
  static get observedAttributes() {
    return ['min-age', 'redirect', 'theme', 'program-name'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Check if already verified
    if (this.isVerified()) {
      this.shadowRoot.innerHTML = '';
      return;
    }
    this.render();
  }

  isVerified() {
    try {
      return localStorage.getItem('playbook-age-verified') === 'true';
    } catch {
      return false;
    }
  }

  confirm() {
    try {
      localStorage.setItem('playbook-age-verified', 'true');
    } catch { /* noop */ }
    this.shadowRoot.innerHTML = '';
    this.dispatchEvent(new CustomEvent('age-verified', { bubbles: true }));
  }

  decline() {
    const redirect = this.getAttribute('redirect') || '/';
    this.dispatchEvent(new CustomEvent('age-declined', { bubbles: true }));
    window.location.href = redirect;
  }

  render() {
    const minAge = this.getAttribute('min-age') || '21';
    const programName = this.getAttribute('program-name') || 'this site';
    const theme = this.getAttribute('theme') || 'dark';

    const isDark = theme === 'dark';
    const bg = isDark ? '#1B2838' : '#fff';
    const text = isDark ? '#fff' : '#1B2838';
    const muted = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(27,40,56,0.5)';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; font-family: var(--pb-font, 'Inter', system-ui, sans-serif); }
        .overlay {
          position: fixed; inset: 0; z-index: 99999;
          background: rgba(0,0,0,0.75); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
        }
        .dialog {
          background: ${bg}; color: ${text};
          border-radius: 20px; padding: 48px; max-width: 420px; width: 100%;
          text-align: center; box-shadow: 0 24px 80px rgba(0,0,0,0.4);
        }
        h2 { font-size: 1.4rem; font-weight: 800; margin: 0 0 12px; letter-spacing: -0.02em; }
        p { font-size: 0.92rem; line-height: 1.55; color: ${muted}; margin: 0 0 32px; }
        .actions { display: flex; gap: 12px; justify-content: center; }
        button {
          padding: 14px 32px; border-radius: 10px; border: none; cursor: pointer;
          font-family: inherit; font-size: 0.95rem; font-weight: 700;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        button:focus-visible { outline: 2px solid var(--pb-accent, #00D4AA); outline-offset: 2px; }
        .confirm {
          background: var(--pb-accent, #00D4AA); color: #1B2838;
          box-shadow: 0 4px 16px rgba(0,212,170,0.3);
        }
        .confirm:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,212,170,0.4); }
        .decline {
          background: transparent; color: ${muted};
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'};
        }
        .decline:hover { background: ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}; }
        .legal { font-size: 0.72rem; color: ${muted}; margin-top: 20px; opacity: 0.7; }
      </style>
      <div class="overlay" role="dialog" aria-modal="true" aria-label="Age verification">
        <div class="dialog">
          <h2>Are you ${minAge} or older?</h2>
          <p>You must be at least ${minAge} years old to access ${this.esc(programName)}. This is a legal requirement.</p>
          <div class="actions">
            <button class="confirm" aria-label="I am ${minAge} or older">Yes, I\u2019m ${minAge}+</button>
            <button class="decline" aria-label="I am under ${minAge}">No</button>
          </div>
          <p class="legal">By continuing, you confirm that you meet the minimum age requirement for your jurisdiction.</p>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.confirm').addEventListener('click', () => this.confirm());
    this.shadowRoot.querySelector('.decline').addEventListener('click', () => this.decline());

    // Trap focus inside dialog
    this.shadowRoot.querySelector('.confirm').focus();
  }

  esc(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }
}

customElements.define('playbook-age-gate', PlaybookAgeGate);
