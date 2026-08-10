/**
 * Named collateral output profiles.
 *
 * CSS pixels are logical layout units. deviceScaleFactor converts them to the
 * required delivery resolution without forcing production-sized typography
 * into the source templates. Print targets include 0.125in / ~3mm bleed.
 */

const uiSelectors = new Set([
  '.mobile-onboarding',
  '.deposit-interstitial',
  '.withdrawal-confirm',
  '.mobile-screen',
  '.self-exclusion',
  '.cooldown-screen',
  '.web-popup',
  '.session-summary',
  '.limit-reached',
  '.in-play-overlay',
  '.betslip-rg',
  '.live-overlay',
  '.support-page',
]);

const commonPrint = {
  '.rack-card': { width: 800, height: 1800, scale: 1.5, bleed: 25 },
  '.table-tent': { width: 800, height: 2400, scale: 1.5, bleed: 25 },
  '.helpline-card': { width: 700, height: 400, scale: 1.5, bleed: 25 },
};

const printUs = {
  ...commonPrint,
  '.poster': { width: 1800, height: 2400, scale: 3, bleed: 12.5 },
  '.brochure-inside': { width: 2200, height: 1700, scale: 1.5, bleed: 25, className: 'pb-profile-brochure-letter' },
  '.brochure-outside': { width: 2200, height: 1700, scale: 1.5, bleed: 25, className: 'pb-profile-brochure-letter' },
  '.sign-entrance': { width: 900, height: 1200, scale: 6, bleed: 6.25 },
  '.sign-atm': { width: 850, height: 1100, scale: 3, bleed: 12.5 },
  '.sign-floor': { width: 1100, height: 1700, scale: 3, bleed: 12.5 },
  '.sign-restroom': { width: 550, height: 850, scale: 3, bleed: 12.5 },
  '.sign-staff': { width: 1100, height: 1700, scale: 3, bleed: 12.5 },
};

const printIso = {
  ...commonPrint,
  '.poster': { width: 1800, height: 2546, scale: 2.756, bleed: 12.85 },
  '.brochure-inside': { width: 2400, height: 1697, scale: 1.462, bleed: 24.25, className: 'pb-profile-brochure-a4' },
  '.brochure-outside': { width: 2400, height: 1697, scale: 1.462, bleed: 24.25, className: 'pb-profile-brochure-a4' },
  '.sign-entrance': { width: 900, height: 1273, scale: 5.512, bleed: 6.43 },
  '.sign-atm': { width: 700, height: 990, scale: 3.543, bleed: 10 },
  '.sign-floor': { width: 900, height: 1273, scale: 3.898, bleed: 9.1 },
  '.sign-restroom': { width: 550, height: 780, scale: 3.178, bleed: 11.15 },
  '.sign-staff': { width: 900, height: 1273, scale: 3.898, bleed: 9.1 },
};

export const outputProfiles = {
  preview: {
    description: 'Existing manageable-size PNG previews.',
    resolve: (card) => ({ width: card.w, height: card.h, scale: 1, bleed: 0, naturalHeight: true }),
  },
  'social-square': {
    description: '1:1 social feed master, 1080 x 1080.',
    className: 'pb-profile-social-square',
    resolve: (card) => card.selector === '.social-card'
      ? { width: 1080, height: 1080, scale: 1, bleed: 0 }
      : null,
  },
  'social-feed': {
    description: '4:5 social feed master, 1080 x 1350.',
    className: 'pb-profile-social-feed',
    resolve: (card) => card.selector === '.social-card'
      ? { width: 1080, height: 1350, scale: 1, bleed: 0 }
      : null,
  },
  story: {
    description: '9:16 story/reel master, 1080 x 1920 with UI-safe composition.',
    resolve: (card) => card.selector === '.story-card'
      ? { width: 1080, height: 1920, scale: 1, bleed: 0 }
      : null,
  },
  display: {
    description: 'Native 16:9 and 9:16 digital display masters.',
    resolve: (card) => {
      if (card.selector === '.display-screen') return { width: 1920, height: 1080, scale: 1, bleed: 0 };
      if (card.selector === '.display-portrait') return { width: 1080, height: 1920, scale: 1, bleed: 0 };
      return null;
    },
  },
  'banner-728x90': {
    description: 'Desktop leaderboard/banner, 728 x 90.',
    resolve: (card) => card.selector === '.app-banner'
      ? { width: 728, height: 90, scale: 1, bleed: 0 }
      : null,
  },
  'banner-320x50': {
    description: 'Mobile banner, 320 x 50.',
    className: 'pb-profile-banner-320x50',
    resolve: (card) => card.selector === '.app-banner'
      ? { width: 320, height: 50, scale: 1, bleed: 0 }
      : null,
  },
  'banner-320x100': {
    description: 'Large mobile banner, 320 x 100.',
    className: 'pb-profile-banner-320x100',
    resolve: (card) => card.selector === '.app-banner'
      ? { width: 320, height: 100, scale: 1, bleed: 0 }
      : null,
  },
  'banner-300x50': {
    description: 'Compact mobile banner, 300 x 50.',
    className: 'pb-profile-banner-300x50',
    resolve: (card) => card.selector === '.app-banner'
      ? { width: 300, height: 50, scale: 1, bleed: 0 }
      : null,
  },
  'email-320': {
    description: 'Responsive email QA reference at 320px viewport width.',
    resolve: (card) => card.selector === '.email'
      ? { width: 320, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'email-375': {
    description: 'Responsive email QA reference at 375px viewport width.',
    resolve: (card) => card.selector === '.email'
      ? { width: 375, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'email-600': {
    description: 'Responsive email QA reference at the 600px desktop maximum.',
    resolve: (card) => card.selector === '.email'
      ? { width: 600, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'ui-360': {
    description: 'Responsive product UI reference at 360px viewport width.',
    resolve: (card) => uiSelectors.has(card.selector)
      ? { width: 360, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'ui-390': {
    description: 'Responsive product UI reference at 390px viewport width.',
    resolve: (card) => uiSelectors.has(card.selector)
      ? { width: 390, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'ui-412': {
    description: 'Responsive product UI reference at 412px viewport width.',
    resolve: (card) => uiSelectors.has(card.selector)
      ? { width: 412, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'ui-430': {
    description: 'Responsive product UI reference at 430px viewport width.',
    resolve: (card) => uiSelectors.has(card.selector)
      ? { width: 430, height: 1200, scale: 1, bleed: 0, naturalHeight: true }
      : null,
  },
  'restroom-mirror': {
    description: 'Separate 7 x 5in landscape mirror-cling artboard preview.',
    className: 'pb-profile-restroom-mirror',
    resolve: (card) => card.selector === '.sign-restroom'
      ? { width: 700, height: 500, scale: 1, bleed: 0 }
      : null,
  },
  'restroom-mirror-print': {
    description: '7 x 5in mirror cling at 300dpi with 0.125in bleed.',
    className: 'pb-profile-restroom-mirror',
    production: true,
    resolve: (card) => card.selector === '.sign-restroom'
      ? { width: 700, height: 500, scale: 3, bleed: 12.5 }
      : null,
  },
  'print-us': {
    description: 'US finished sizes at 300dpi with 0.125in bleed.',
    className: 'pb-profile-print-us',
    production: true,
    resolve: (card) => printUs[card.selector] || null,
  },
  'print-iso': {
    description: 'ISO A-series finished sizes at 300dpi with 3mm bleed.',
    className: 'pb-profile-print-iso',
    production: true,
    resolve: (card) => printIso[card.selector] || null,
  },
};

export function listProfiles() {
  return Object.entries(outputProfiles).map(([name, profile]) => ({
    name,
    description: profile.description,
  }));
}

export function resolveOutputProfile(name, card) {
  const profile = outputProfiles[name];
  if (!profile) return null;
  const target = profile.resolve(card);
  if (!target) return null;
  return {
    ...target,
    production: Boolean(profile.production),
    classNames: [profile.className, target.className].filter(Boolean),
  };
}
