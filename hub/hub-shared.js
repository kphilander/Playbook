/* ============================================================
   hub-shared.js — Scroll reveal for Playbook hub pages
   ============================================================ */
(function() {
  'use strict';

  var revealEls = document.querySelectorAll('.pb-reveal, .pb-reveal-stagger');
  if (!revealEls.length) return;

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function(el) { el.classList.add('revealed'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function(el) { observer.observe(el); });
})();
