export const engagementGap = {
  exists: [
    'Clinical, compliance-driven language',
    'Buried in page footers and legal disclaimers',
    'One-size-fits-all messaging',
    'Treated as a regulatory checkbox',
    'Near-zero player engagement',
  ],
  needed: [
    'Entertainment-grade production quality',
    'Integrated into the player experience',
    'Marketing-driven, not compliance-driven',
    'Personalized and shareable',
    'Content players actually seek out',
  ],
};

export const solutionCards = [
  {
    title: 'Woven In, Not Bolted On',
    body: 'Literacy content integrated into the player journey — deposit screens, game lobbies, post-session recaps. Not a buried link in the footer.',
    accent: 'teal',
  },
  {
    title: 'Entertainment-Grade Quality',
    body: 'Social cards, interactive quizzes, myth-buster stories. Produced at the same quality as the gaming product itself.',
    accent: 'orange',
  },
  {
    title: 'White-Label: Your Brand, Our System',
    body: 'Fork the repo. Edit one config file. Deploy under your brand. Open source, CC0 Public Domain — no licensing, no fees.',
    accent: 'teal',
  },
];

export const twoTiers = {
  tier1: {
    label: 'Tier 1',
    pct: '95%',
    title: 'Entertainment Literacy',
    voice: 'Playbook voice — confident myth-buster',
    items: [
      'Game mechanics & math',
      'Myth-busting content',
      'Tools reframed as features',
      'Shareable quizzes & challenges',
    ],
  },
  tier2: {
    label: 'Tier 2',
    pct: '5%',
    title: 'Support & Crisis',
    voice: 'Support voice — warm, direct',
    items: [
      'Support service referrals',
      'Take-a-break flows',
      'Crisis touchpoints',
      'Helpline integration',
    ],
  },
};

export const pillars = {
  open: {
    tagline: 'No fine print.',
    description: 'Transparency is the product. Real odds, honest math, no buried disclaimers.',
    items: [
      'House edge disclosure for every game',
      'Myth vs. math content',
      'Plain-language odds breakdowns',
      'Bonus wagering explained',
    ],
  },
  social: {
    tagline: 'Worth sharing.',
    description: 'Knowledge becomes social currency. Peer learning beats top-down lectures.',
    items: [
      'Game IQ quizzes and challenges',
      'Shareable myth-buster cards',
      'Friend vs. friend leaderboards',
      'Community-driven content',
    ],
  },
};

export const archetypes = {
  sharp: {
    name: 'Playbook Voice',
    role: 'Primary',
    tagline: 'Knows the game. Shares the real story.',
    traits: [
      'Knowledgeable without being academic',
      'Confident without being arrogant',
      'Generous with information',
      'At the table, not in the booth',
    ],
    example: '"Think you\'ve got a \'system\' that beats the house? Cool. The house has a system too. It\'s called math."',
  },
  friend: {
    name: 'Support Voice',
    role: 'Secondary',
    tagline: 'Has your back. No judgment.',
    traits: [
      'Supportive without being pushy',
      'Practical without being clinical',
      'Present without being intrusive',
      'Knows when to be serious',
    ],
    example: '"Your bankroll planner is ready. Want to see how far your $200 can go this weekend?"',
  },
};

export const voicePrinciples = [
  { num: '01', title: 'Informed, not alarming', desc: 'Lead with knowledge, not warnings. Make players smarter, not anxious.' },
  { num: '02', title: 'Your choice, your tools', desc: 'Provide information and tools. Never tell players what to do.' },
  { num: '03', title: 'Specific, not sloganeering', desc: 'Name concrete behaviors — not generic labels like "responsible gambling."' },
  { num: '04', title: 'Fun is the point', desc: 'Gambling is entertainment. Content should reflect that.' },
  { num: '05', title: 'Real talk', desc: 'Grade 6–8 reading level. Short sentences. No corporate hedging.' },
  { num: '06', title: 'Inclusive by default', desc: 'Every player, every game, every background. No assumptions.' },
];

export const personalitySpectrum = [
  { is: 'Witty', not: 'Preachy' },
  { is: 'Confident', not: 'Condescending' },
  { is: 'Sharp', not: 'Clinical' },
  { is: 'Engaging', not: 'Nagging' },
  { is: 'Honest', not: 'Alarming' },
  { is: 'Inclusive', not: 'Exclusive' },
];

export const logoVariants = [
  { name: 'Full color', play: 'Navy', book: 'Navy', bg: 'White' },
  { name: 'On light', play: 'Navy', book: 'Teal', bg: 'Light' },
  { name: 'Reversed', play: 'White', book: 'Teal', bg: 'Navy' },
  { name: 'Mono white', play: 'White', book: 'Neutral', bg: 'Dark' },
  { name: 'Mono dark', play: 'Navy', book: 'Navy', bg: 'Light' },
];

export const colorPalette = {
  primary: [
    { name: 'Deep Navy', hex: '#1B2838', role: 'Primary' },
    { name: 'Navy Light', hex: '#2A3F56', role: 'Hover / Secondary' },
    { name: 'Midnight', hex: '#0F1923', role: 'High Contrast' },
  ],
  secondary: [
    { name: 'Electric Teal', hex: '#00D4AA', role: 'Interactive' },
    { name: 'Teal Light', hex: '#33DDBB', role: 'Hover States' },
    { name: 'Teal Dark', hex: '#00A888', role: 'Pressed States' },
  ],
  accent: [
    { name: 'Bold Orange', hex: '#FF6B35', role: 'CTAs / Attention' },
    { name: 'Orange Light', hex: '#FF8A5C', role: 'Hover States' },
    { name: 'Orange Dark', hex: '#E55A2B', role: 'Pressed States' },
  ],
  semantic: [
    { name: 'Success', hex: '#00C853' },
    { name: 'Warning', hex: '#FFB300' },
    { name: 'Danger', hex: '#FF3D00' },
    { name: 'Info', hex: '#2979FF' },
  ],
};

export const typeFamilies = [
  { family: 'Inter', role: 'Headings, UI, Logo', weights: '300–900', sample: 'Aa' },
  { family: 'Source Sans 3', role: 'Body text', weights: '300–600', sample: 'Aa' },
  { family: 'Source Code Pro', role: 'Data, Odds, Helplines', weights: '400–600', sample: '0O 1lI' },
];

export const typeScale = [
  { level: 'Display', size: '48px', weight: '700' },
  { level: 'H1', size: '40px', weight: '700' },
  { level: 'H2', size: '32px', weight: '600' },
  { level: 'H3', size: '24px', weight: '600' },
  { level: 'Body', size: '16px', weight: '400' },
  { level: 'Small', size: '14px', weight: '400' },
];

export const iconCategories = [
  { name: 'Game Types', count: 7, examples: 'Cards, Dice, Roulette, Slots, Sports, Lottery, Table' },
  { name: 'Odds & Math', count: 4, examples: 'Percentage, Edge, RNG, Equal' },
  { name: 'Player Tools', count: 7, examples: 'Timer, Limit, Budget, Bell, History, Check, Activity' },
  { name: 'Content & Education', count: 4, examples: 'Quiz, Myth, Fact, Info' },
  { name: 'Social & Sharing', count: 4, examples: 'Share, Challenge, Score, QR' },
  { name: 'Support & Safety', count: 5, examples: 'Phone, Warning, Help, External, Playbook' },
];

export const photographyDos = [
  'Real, diverse people having a good time',
  'Natural lighting — warm, energetic',
  'Social moments — friends, groups',
  'Confident, relaxed body language',
  'Candid, editorial-quality shots',
];

export const photographyDonts = [
  'Distressed or defeated people',
  'Stereotypical "problem gambler" imagery',
  'Generic, lifeless stock photography',
  'Alcohol alongside gambling education',
  'Images of minors',
];

export const taglineSystem = {
  open: [
    'Here\'s how it actually works.',
    'No fine print. Just facts.',
    'Every game has math. Here\'s yours.',
  ],
  social: [
    'Share the facts.',
    'Challenge your friends.',
    'The best players know the game.',
  ],
};

export const sampleRewrites = [
  {
    label: 'Deposit limit',
    before: '"Players may elect to establish voluntary deposit restriction parameters via account settings."',
    after: '"Set your deposit limit. It takes 10 seconds. Go on, we\'ll wait."',
  },
  {
    label: 'Session awareness',
    before: '"This notification is to inform you that you have been actively engaged in gambling for 2 hours."',
    after: '"You\'ve been playing for 2 hours. Most sessions average about 45 minutes. Set a session reminder?"',
  },
];

export const ctaLibrary = {
  literacy: ['Take the quiz', 'Test your game IQ', 'See the real odds', 'Read the breakdown'],
  features: ['Set your limits', 'Try the bankroll planner', 'Check your stats', 'Set a session reminder'],
  content: ['Share this', 'Challenge a friend', 'Explore more', 'Get the facts'],
  support: ['Talk to someone — free & confidential', 'Pause your account', 'Find support'],
};

export const digitalTouchpoints = [
  { channel: 'Website', integration: 'Content hub, tools overview, helpline above the fold, footer strip' },
  { channel: 'Mobile App', integration: 'Onboarding, deposit flow, session awareness, settings dashboard' },
  { channel: 'Email', integration: 'Welcome series, deposit confirmations, monthly activity summary' },
  { channel: 'Social Media', integration: 'Myth-buster reels, quiz hooks, odds breakdowns, community content' },
];

export const printFormats = [
  { format: 'Poster', size: 'A2 / 18×24"', placement: 'Entrances, restrooms, ATMs' },
  { format: 'Rack Card', size: '4×9"', placement: 'Exits, host desks' },
];

export const campaigns = [
  { name: 'Slots Myths Week', duration: '2 weeks', posts: 10, desc: 'RNG, hot/cold streaks, and why "due" machines don\'t exist.', channels: 'Social, email, in-app' },
  { name: 'Table Game Truths', duration: '10 days', posts: 8, desc: 'House edge by game, basic strategy facts, card counting reality.', channels: 'Social, blog, video' },
  { name: 'Sports Betting Reality', duration: '2 weeks', posts: 10, desc: 'Vig explained, parlay math, tipster accuracy data.', channels: 'Social, push, email' },
  { name: 'Lottery & Numbers', duration: '1 week', posts: 6, desc: 'Odds visualization, "lucky numbers" myths, jackpot math.', channels: 'Social, infographic' },
  { name: 'The Money Myths', duration: '10 days', posts: 8, desc: 'Bankroll management, sunk cost fallacy, budget framing.', channels: 'Social, email, blog' },
  { name: 'Game IQ Challenge', duration: '1 week', posts: 7, desc: 'Interactive quiz series with shareable scorecard results.', channels: 'Social, in-app, web' },
];

export const accessibilityChecklist = [
  { category: 'Visual', items: ['4.5:1 contrast (normal text)', '3:1 contrast (large text)', 'Color never sole indicator', '200% text resize support'] },
  { category: 'Cognitive', items: ['Grade 6–8 reading level', 'Key info above the fold', 'No auto-dismissed messages', 'One idea per sentence'] },
  { category: 'Motor', items: ['Full keyboard navigation', 'Visible focus indicators', '44×44px touch targets', '8px target spacing'] },
  { category: 'Screen Reader', items: ['Semantic HTML hierarchy', 'ARIA labels on actions', 'Alt text on all images', 'Helpline as real text'] },
];

export const governanceModel = {
  reviews: [
    { cadence: 'Annual', scope: 'Full brand review — foundation, visual identity, voice, messaging' },
    { cadence: 'Quarterly', scope: 'Regulatory check — jurisdiction requirements, helpline numbers, ad rules' },
    { cadence: 'Continuous', scope: 'Content performance — underperforming content revised within 2 weeks' },
  ],
  versioning: [
    { level: 'MAJOR', trigger: 'Breaking changes — rebrand, new pillar system' },
    { level: 'MINOR', trigger: 'New content — jurisdiction module, collateral templates' },
    { level: 'PATCH', trigger: 'Corrections — helpline update, typo fix, contrast fix' },
  ],
};

export const adoptionPhases = [
  { phase: '1', name: 'Immediate Value', desc: 'Voice & tone guidelines, language dos/don\'ts' },
  { phase: '2', name: 'Quick Wins', desc: 'Messaging framework, taglines, CTAs, copy templates' },
  { phase: '3', name: 'Brand Build', desc: 'Visual identity, design assets, quizzes, myth-busters' },
  { phase: '4', name: 'Full Integration', desc: 'In-product content — onboarding, deposits, sessions' },
];

export const getStartedSteps = [
  { num: '1', title: 'Fork the repo', desc: 'Clone the Playbook repository to your own GitHub.' },
  { num: '2', title: 'Edit _brand.yml', desc: 'Set your colors, fonts, logo, and program name.' },
  { num: '3', title: 'Customize messaging', desc: 'Adapt taglines and copy for your market.' },
  { num: '4', title: 'Design & deploy', desc: 'Generate collateral and launch across channels.' },
];
