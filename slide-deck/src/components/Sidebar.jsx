import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar({ sections, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && mobileOpen) {
      setMobileOpen(false);
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 flex items-center justify-center
          rounded-lg bg-midnight/90 backdrop-blur border border-white/10 text-white"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
        aria-controls="sidebar-nav"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar panel */}
      <nav
        id="sidebar-nav"
        aria-label="Brand guide sections"
        className={`fixed top-0 left-0 w-64 h-screen bg-midnight/95 backdrop-blur-sm
          border-r border-white/[0.06] z-40 flex flex-col
          transition-transform duration-300 ease-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="px-6 pt-8 pb-6 border-b border-white/[0.06]">
          <a href="#hero" onClick={() => setMobileOpen(false)} className="block">
            <div className="mb-1">
              <span className="font-heading text-xl font-extrabold text-white">Play</span>
              <span className="font-heading text-xl font-light text-teal">BOOK</span>
            </div>
            <p className="font-body text-xs text-n500 tracking-wide uppercase">Brand Guide</p>
          </a>
        </div>

        {/* Section links */}
        <div className="flex-1 overflow-y-auto py-4 scrollbar-thin" role="list">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              role="listitem"
              onClick={() => setMobileOpen(false)}
              aria-current={s.id === activeSection ? 'true' : undefined}
              className={`block px-6 py-2.5 text-[13px] font-heading font-medium transition-all duration-200
                border-l-2
                ${s.id === activeSection
                  ? 'text-teal border-teal bg-teal/[0.06]'
                  : 'text-n500 hover:text-n300 border-transparent hover:border-white/10'
                }`}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/[0.06]">
          <p className="font-mono text-[11px] text-n700">Creative Commons</p>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
