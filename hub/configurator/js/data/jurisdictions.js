/* jurisdictions.js — Jurisdiction presets and sub-region tree.
   Regulatory details verified per jurisdiction; confirm with counsel before deployment. */

export const JURISDICTION_PRESETS = {
  // --- United States ---
  us: {
    number: '1-800-522-4700', textNumber: 'Text 800GAM', chatUrl: 'https://www.ncpgambling.org/chat',
    label: 'National Council on Problem Gambling', helplineWebsite: 'www.ncpgambling.org',
    age: 21, regulatorName: '', regulatorUrl: '',
    selfExclusionName: 'State self-exclusion program', selfExclusionUrl: '',
    supportOrgName: 'National Council on Problem Gambling', supportOrgUrl: 'https://www.ncpgambling.org',
    verticals: 'Varies by state', mandatoryMessaging: '',
    jurisdictionKey: 'united-states',
    disclaimerGeneral: 'If you or someone you know has a gambling problem and wants help, call 1-800-GAMBLER. 21+ and present in a state where wagering is legal.',
    notes: 'National defaults. Select a state below for state-specific helplines, regulators, and requirements.'
  },
  'us-nv': {
    number: '1-800-522-4700', textNumber: 'Text 800GAM', chatUrl: 'https://www.ncpgambling.org/chat',
    label: 'NCPG National Helpline', helplineWebsite: 'www.ncpgambling.org',
    age: 21, regulatorName: 'Nevada Gaming Control Board / Nevada Gaming Commission',
    regulatorUrl: 'https://gaming.nv.gov',
    selfExclusionName: 'Property-level self-limitation (no statewide program)',
    selfExclusionUrl: '',
    supportOrgName: 'Nevada Council on Problem Gambling', supportOrgUrl: 'https://www.nevadacouncil.org',
    verticals: 'Land-based Casino, Sports Betting',
    mandatoryMessaging: 'Wagering accounts: verbatim message required per Reg 5.225(18)(b)',
    jurisdictionKey: 'united-states-nevada',
    disclaimerGeneral: 'If you or someone you know has a gambling problem, crisis counseling and referral services can be accessed by calling 1-800-522-4700. 21+ to wager. (NGC Reg 5.225(18)(b) prescribes verbatim language for wagering accounts — confirm with counsel.)',
    notes: 'Nevada uses the NCPG national helpline (no separate state helpline). Two regulatory regimes: Reg 5 (land-based) and Reg 5A (interactive gaming). No online casino; no lottery.'
  },
  'us-ma': {
    number: '1-800-327-5050', textNumber: 'Text GAMB to 800327', chatUrl: '',
    label: 'Massachusetts Problem Gambling Helpline', helplineWebsite: 'gamblinghelplinema.org',
    age: 21, regulatorName: 'Massachusetts Gaming Commission (MGC)',
    regulatorUrl: 'https://www.mass.gov/orgs/massachusetts-gaming-commission',
    selfExclusionName: 'Massachusetts Voluntary Self-Exclusion (statewide)',
    selfExclusionUrl: 'https://massgaming.com/about/responsible-gaming/self-exclusion/',
    supportOrgName: 'GameSense', supportOrgUrl: 'https://gamesensema.com',
    verticals: 'Land-based Casino, Sports Betting',
    mandatoryMessaging: 'Sports ads: helpline required per 205 CMR 256.06(2) with font size minimums. DPH provides language.',
    jurisdictionKey: 'united-states-massachusetts',
    disclaimerGeneral: 'Gambling Problem? Call (800) 327-5050 or visit GamblingHelpLineMA.org. 21+ to gamble. (Sports ads: use DPH-prescribed language with font-size minimums per 205 CMR 256.06.)',
    notes: 'Massachusetts has its own state helpline (not NCPG). Separate regimes: Chapter 23K (casino) and Chapter 23N (sports wagering). GameSense Info Centers at every licensed casino. No online casino.'
  },
  'us-nj': {
    number: '1-800-GAMBLER', textNumber: 'Text 800GAM', chatUrl: 'https://www.800gambler.org/chat',
    label: 'Council on Compulsive Gambling of New Jersey', helplineWebsite: 'www.800gambler.org',
    age: 21, regulatorName: 'New Jersey Division of Gaming Enforcement (DGE)',
    regulatorUrl: 'https://www.nj.gov/oag/ge/',
    selfExclusionName: 'New Jersey Statewide Self-Exclusion (1yr / 5yr / lifetime)',
    selfExclusionUrl: 'https://www.nj.gov/oag/ge/selfexclusion.html',
    supportOrgName: 'Council on Compulsive Gambling of NJ', supportOrgUrl: 'https://www.800gambler.org',
    verticals: 'Land-based Casino, Online Casino, Sports Betting',
    mandatoryMessaging: '1-800-GAMBLER required on all platforms and in all advertising. DGE Advertising Best Practices apply.',
    jurisdictionKey: 'united-states-new-jersey',
    disclaimerGeneral: 'If you or someone you know has a gambling problem and wants help, call 1-800-GAMBLER. Bet With Your Head, Not Over It. 21+ and physically present in NJ.',
    notes: '1-800-GAMBLER originated in NJ (now used widely across the US). One of the first US states with legal online gaming.'
  },
  'us-oh': {
    number: '1-800-589-9966', textNumber: 'Text 4HOPE to 741741', chatUrl: '',
    label: 'Ohio for Responsible Gambling', helplineWebsite: 'problemgambling.ohio.gov',
    age: 21, regulatorName: 'Ohio Casino Control Commission (OCCC)',
    regulatorUrl: 'https://casinocontrol.ohio.gov',
    selfExclusionName: 'Ohio Statewide Voluntary Exclusion (1yr / 5yr / lifetime)',
    selfExclusionUrl: 'https://casinocontrol.ohio.gov/About/VoluntaryExclusionProgram.aspx',
    supportOrgName: 'Ohio for Responsible Gambling', supportOrgUrl: 'https://problemgambling.ohio.gov',
    verticals: 'Land-based Casino, Sports Betting',
    mandatoryMessaging: 'Sports gaming ads must include problem-gambling prevention messages and helpline per OAC 3775-16-08.',
    jurisdictionKey: 'united-states-ohio',
    disclaimerGeneral: 'Gambling Problem? Call 1-800-589-9966 or visit ohioforresponsiblegambling.org. 21+ and physically present in Ohio.',
    notes: 'Statewide voluntary exclusion covers casinos and sports gaming. No online casino.'
  },
  'us-mi': {
    number: '1-800-GAMBLER', textNumber: '', chatUrl: '',
    label: 'Michigan statewide problem gambling helpline', helplineWebsite: 'www.michigan.gov/mgcb/resources/responsible-gaming',
    age: 21, regulatorName: 'Michigan Gaming Control Board (MGCB)',
    regulatorUrl: 'https://www.michigan.gov/mgcb',
    selfExclusionName: 'DPL (Detroit casinos, lifetime w/ 5-yr removal option) and RGD (online + sports, 1yr / 5yr)',
    selfExclusionUrl: 'https://www.michigan.gov/mgcb/resources/responsible-gaming/self-exclusion-forms',
    supportOrgName: 'MDHHS / Michigan Responsible Gaming', supportOrgUrl: 'https://www.michigan.gov/mgcb/resources/responsible-gaming',
    verticals: 'Land-based Casino, Online Casino, Sports Betting',
    mandatoryMessaging: '1-800-GAMBLER required on all licensed platforms (Feb 2024 adoption). Responsible Gaming page required per R 432.654 (iGaming) and R 432.754 (sports betting). MDHHS treatment line: 1-800-270-7117.',
    jurisdictionKey: 'united-states-michigan',
    disclaimerGeneral: 'If you or someone you know has a gambling problem and wants help, call 1-800-GAMBLER. 21+ and physically present in Michigan.',
    notes: 'Two separate SE programs: DPL for the three Detroit commercial casinos; RGD for online + sports. Compulsive Gaming Prevention Fund receives $2M annually.'
  },
  'us-pa': {
    number: '1-800-GAMBLER', textNumber: '', chatUrl: '',
    label: 'PA DDAP (1-800-GAMBLER)', helplineWebsite: 'responsibleplay.pa.gov',
    age: 21, regulatorName: 'Pennsylvania Gaming Control Board (PGCB)',
    regulatorUrl: 'https://www.gamingcontrolboard.pa.gov',
    selfExclusionName: 'PA SE — casino (§ 503a) and interactive (§ 815a); 1yr / 5yr / lifetime',
    selfExclusionUrl: 'https://gamingcontrolboard.pa.gov/?p=458',
    supportOrgName: 'Council on Compulsive Gambling of PA', supportOrgUrl: 'https://www.pacouncil.com',
    verticals: 'Land-based Casino, Online Casino, Online Poker, Sports Betting',
    mandatoryMessaging: 'Verbatim required per 58 Pa. Code § 501a.7(d): "IF YOU OR SOMEONE YOU KNOW HAS A GAMBLING PROBLEM, HELP IS AVAILABLE, CALL 1-800-GAMBLER." Font-size minimums apply (2% print, etc.). At least 20 signs within 50 ft of entrances/exits and at ATMs (§ 501a.5).',
    jurisdictionKey: 'united-states-pennsylvania',
    disclaimerGeneral: 'IF YOU OR SOMEONE YOU KNOW HAS A GAMBLING PROBLEM, HELP IS AVAILABLE, CALL 1-800-GAMBLER. 21+ and physically present in Pennsylvania. (Verbatim required per 58 Pa. Code § 501a.7(d).)',
    notes: 'Largest US online gambling revenue state. iGaming platforms must surface hourly pop-ups with elapsed session time and amount wagered (§ 814a.1).'
  },
  'us-ca': {
    number: '1-800-GAMBLER', textNumber: '', chatUrl: '',
    label: 'California Office of Problem Gambling (OPG)', helplineWebsite: 'www.problemgambling.ca.gov',
    age: 21, regulatorName: 'California (Tribal Compacts; OAG oversight)',
    regulatorUrl: 'https://oag.ca.gov/gambling/tribal',
    selfExclusionName: 'Tribal self-exclusion — varies by compact',
    selfExclusionUrl: '',
    supportOrgName: 'California Office of Problem Gambling', supportOrgUrl: 'https://www.problemgambling.ca.gov',
    verticals: 'Land-based Casino (tribal only) — no online casino, no state-regulated sports betting',
    mandatoryMessaging: 'Most tribal-state compacts require display of 1-800-GAMBLER and RG signage at casino entrances and gaming floors. Specific terms vary by compact.',
    jurisdictionKey: 'united-states-california',
    disclaimerGeneral: 'If you or someone you know has a gambling problem, call 1-800-GAMBLER. Must be 21+ where alcohol is served; 18+ at some tribal venues. (Specific tribal compact terms vary — confirm against your operator\'s compact.)',
    notes: 'No legal online casino or sports betting in California. Land-based tribal casinos only. Age varies by compact (18 or 21; alcohol-serving venues typically 21+).'
  },
  'us-az': {
    number: '1-800-NEXT-STEP', textNumber: 'Text NEXTSTEP to 53342', chatUrl: '',
    label: 'ADG Division of Problem Gambling', helplineWebsite: 'problemgambling.az.gov',
    age: 21, regulatorName: 'Arizona Department of Gaming (ADG)',
    regulatorUrl: 'https://gaming.az.gov',
    selfExclusionName: 'ADG Voluntary Self-Exclusion (1 / 5 / 10 years; irrevocable for elected period)',
    selfExclusionUrl: 'https://gaming.az.gov/resources/responsible-gaming/self-exclusion',
    supportOrgName: 'ADG Division of Problem Gambling', supportOrgUrl: 'https://problemgambling.az.gov',
    verticals: 'Land-based Casino (tribal), Sports Betting',
    mandatoryMessaging: 'Event wagering ads must include the problem-gambling helpline per A.A.C. R19-4-110 (Responsible Advertising). 1-800-GAMBLER also widely used.',
    jurisdictionKey: 'united-states-arizona',
    disclaimerGeneral: 'Gambling Problem? Call 1-800-NEXT-STEP (1-800-639-8783). 21+ and physically present in Arizona. 1-800-GAMBLER is also widely accepted.',
    notes: 'Event wagering live since 9 September 2021 (retail and mobile concurrent launch). No legal online casino. 21+ for event wagering; tribal compacts under A.R.S. § 5-601 also require 21+.'
  },
  // --- Canada ---
  ca: {
    number: '1-866-531-2600', textNumber: '', chatUrl: '',
    label: 'ConnexOntario', helplineWebsite: 'www.connexontario.ca',
    age: 19, regulatorName: '', regulatorUrl: '',
    selfExclusionName: 'Provincial self-exclusion', selfExclusionUrl: '',
    supportOrgName: 'Responsible Gambling Council', supportOrgUrl: 'https://www.responsiblegambling.org',
    verticals: 'Varies by province', mandatoryMessaging: '',
    jurisdictionKey: 'canada',
    disclaimerGeneral: 'Know your limit, play within it. Gambling support varies by province — visit ConnexOntario.ca, GamblingSupportBC.ca, or your provincial helpline. 19+ in most provinces; 18+ in Alberta, Manitoba, Quebec.',
    notes: 'Gambling regulated provincially. Select a province below for specific requirements.'
  },
  'ca-on': {
    number: '1-866-531-2600', textNumber: '', chatUrl: 'https://www.connexontario.ca/en-ca/chat',
    label: 'ConnexOntario', helplineWebsite: 'www.connexontario.ca',
    age: 19, regulatorName: 'Alcohol and Gaming Commission of Ontario (AGCO)',
    regulatorUrl: 'https://www.agco.ca',
    selfExclusionName: 'AGCO Centralized Self-Exclusion (BetGuard, live 14 May 2026)',
    selfExclusionUrl: 'https://www.agco.ca/en/lottery-and-gaming/responsible-gambling/self-exclusion',
    supportOrgName: 'ConnexOntario', supportOrgUrl: 'https://www.connexontario.ca',
    verticals: 'Land-based Casino, Online Casino, Sports Betting',
    mandatoryMessaging: 'ConnexOntario must be prominently displayed on iGaming registration pages. Sport betting inducements prohibited in public advertising.',
    jurisdictionKey: 'canada-ontario',
    disclaimerGeneral: 'Gambling Problem? ConnexOntario provides free, confidential support 24/7: 1-866-531-2600 or connexontario.ca. 19+ Ontario residents. Play responsibly.',
    notes: 'Open competitive iGaming market (live 4 April 2022). ~44 registered operators running ~77-82 sites. BetGuard centralized self-exclusion launched 14 May 2026 covering all licensed iGaming sites.'
  },
  'ca-ab': {
    number: '1-866-332-2322', textNumber: '', chatUrl: '',
    label: 'Alberta Health Services Addiction Helpline', helplineWebsite: 'albertahealthservices.ca/amh',
    age: 18, regulatorName: 'Alberta Gaming, Liquor and Cannabis Commission (AGLC)',
    regulatorUrl: 'https://aglc.ca',
    selfExclusionName: 'AGLC Self-Exclusion (6mo / 1yr / 2yr / 3yr)',
    selfExclusionUrl: 'https://aglc.ca/gaming/self-exclusion',
    supportOrgName: 'GameSense Alberta / AHS Addiction Helpline', supportOrgUrl: 'https://www.gamesensealberta.com',
    verticals: 'Land-based Casino, Online Casino (PlayAlberta)',
    mandatoryMessaging: 'GameSense materials and AHS helpline must be accessible at every venue. iGaming Alberta Act establishes a competitive private market (in implementation; private operators not yet live as of May 2026).',
    jurisdictionKey: 'canada-alberta',
    disclaimerGeneral: 'Know your limit. Play within it. AHS Addiction Helpline: 1-866-332-2322 (24/7, free, confidential). 18+ to gamble in Alberta. GameSenseAlberta.com.',
    notes: 'Deal Us In staff certification mandatory for all gaming workers. PlayAlberta is the AGLC-operated online platform.'
  },
  // --- Other countries ---
  uk: {
    number: '0808 8020 133', textNumber: '', chatUrl: '',
    label: 'GambleAware', helplineWebsite: 'www.begambleaware.org',
    age: 18, regulatorName: 'UK Gambling Commission (UKGC)',
    regulatorUrl: 'https://www.gamblingcommission.gov.uk',
    selfExclusionName: 'GAMSTOP', selfExclusionUrl: 'https://www.gamstop.co.uk',
    supportOrgName: 'GambleAware', supportOrgUrl: 'https://www.begambleaware.org',
    verticals: 'Land-based Casino, Online Casino, Sports Betting',
    mandatoryMessaging: 'Must comply with ASA/CAP advertising codes. GAMSTOP participation required for remote operators.',
    jurisdictionKey: 'united-kingdom',
    disclaimerGeneral: '18+. Please gamble responsibly. begambleaware.org | GAMSTOP self-exclusion: gamstop.co.uk. Take time to think.',
    notes: ''
  },
  au: {
    number: '1800 858 858', textNumber: '', chatUrl: '',
    label: 'Gambling Help Online', helplineWebsite: 'www.gamblinghelponline.org.au',
    age: 18, regulatorName: 'Australian Communications and Media Authority (ACMA)',
    regulatorUrl: 'https://www.acma.gov.au',
    selfExclusionName: 'BetStop', selfExclusionUrl: 'https://www.betstop.gov.au',
    supportOrgName: 'Gambling Help Online', supportOrgUrl: 'https://www.gamblinghelponline.org.au',
    verticals: 'Land-based Casino, Sports Betting (online casino prohibited)',
    mandatoryMessaging: '',
    jurisdictionKey: 'australia',
    disclaimerGeneral: '18+. Set a deposit limit. Chances are you\'re about to lose. Gambler\'s Help: 1800 858 858 | gamblinghelponline.org.au | National Self-Exclusion: betstop.gov.au.',
    notes: ''
  },
  dk: {
    number: '+45 70 22 28 25', textNumber: '', chatUrl: '',
    label: 'StopSpillet', helplineWebsite: 'stopspillet.dk',
    age: 18, regulatorName: 'Spillemyndigheden (Danish Gambling Authority)',
    regulatorUrl: 'https://www.spillemyndigheden.dk',
    selfExclusionName: 'ROFUS — national self-exclusion register',
    selfExclusionUrl: 'https://www.rofus.nu',
    supportOrgName: 'StopSpillet', supportOrgUrl: 'https://stopspillet.dk',
    verticals: 'Land-based Casino, Online Casino, Sports Betting',
    mandatoryMessaging: 'Players MUST set a deposit limit before play. Age limit + ROFUS info required in all marketing. 2025-26 advertising reform package effective 1 January 2027: under-25 in-ad ban, 200m school-proximity ban, live-sports whistle-to-whistle ban.',
    jurisdictionKey: 'denmark',
    disclaimerGeneral: 'Spil ansvarligt. 18+. Hjælp og rådgivning: StopSpillet 70 22 28 25 | Selvudelukkelse: rofus.nu. (Age limit + ROFUS info required in all marketing per Spillemyndigheden.)',
    notes: 'ROFUS is mandatory for all licensees. Executive Orders 1274/1276 (as amended by EOs 682/684 of 2025) govern online play.'
  },
  mt: {
    number: '1777', textNumber: '', chatUrl: '',
    label: 'Responsible Gaming Foundation (RGF) Supportline', helplineWebsite: 'rgf.org.mt',
    age: 18, regulatorName: 'Malta Gaming Authority (MGA)',
    regulatorUrl: 'https://www.mga.org.mt',
    selfExclusionName: 'MGA Self-Barring (6mo / 12mo / 12mo auto-renew; irrevocable until period expires)',
    selfExclusionUrl: 'https://www.mga.org.mt/player-hub/self-barring/',
    supportOrgName: 'Responsible Gaming Foundation', supportOrgUrl: 'https://rgf.org.mt',
    verticals: 'Land-based Casino, Online Casino, Sports Betting',
    mandatoryMessaging: 'All ads must display licensee name, licence number, minimum age, and RG message (S.L. 583.09). Responsible gaming page must be within one click from anywhere on the site (PPD Art. 10). Penalties up to EUR 25,000 per breach.',
    jurisdictionKey: 'malta',
    disclaimerGeneral: 'Play responsibly. 18+. {{OPERATOR_NAME}} | Licence: {{LICENCE_NUMBER}}. Helpline 1777 (24/7) | rgf.org.mt. (S.L. 583.09 requires licensee name, licence number, minimum age, and RG message in all advertising.)',
    notes: 'Helpline 1777 operates 24/7 (RGF). Sedqa national line: 179. Land-based casino age split: 18+ non-Maltese, 25+ Maltese citizens.'
  },
  sg: {
    number: '1800-6-668-668', textNumber: '', chatUrl: 'https://www.ncpg.org.sg/webchat',
    label: 'National Council on Problem Gambling (NCPG) Helpline', helplineWebsite: 'www.ncpg.org.sg',
    age: 21, regulatorName: 'Gambling Regulatory Authority of Singapore (GRA)',
    regulatorUrl: 'https://www.gra.gov.sg',
    selfExclusionName: 'NCPG self-exclusion + casino-control family exclusion orders + visit-limit scheme',
    selfExclusionUrl: 'https://www.gra.gov.sg/casino-exclusion',
    supportOrgName: 'National Council on Problem Gambling', supportOrgUrl: 'https://www.ncpg.org.sg',
    verticals: 'Land-based Casino only (two integrated resorts — online gambling largely prohibited)',
    mandatoryMessaging: 'All casino advertising must be GRA-approved. Entry levy applies to Singapore Citizens and PRs: S$150 per 24-hour visit or S$3,000 annual (Casino Control (Entry Levy) Regs). Compulsory staff training.',
    jurisdictionKey: 'singapore',
    disclaimerGeneral: 'Restricted to persons 21 years of age and above. If you or someone you know has a gambling problem, call the National Problem Gambling Helpline at 1800-6-668-668. (All casino advertising must be GRA-approved.)',
    notes: 'GRA created by Gambling Regulatory Authority of Singapore Act 2022 (effective 1 August 2022). NCPG helpline staffed daily 08:00–23:00 SGT (not 24/7).'
  },
  mo: {
    number: '2823-0101', textNumber: '', chatUrl: '',
    label: '24-hr Gambling Counseling Hotline (Macau IAS / Sheng Kung Hui)', helplineWebsite: 'www.dicj.gov.mo',
    age: 21, regulatorName: 'DICJ (Gaming Inspection and Coordination Bureau)',
    regulatorUrl: 'https://www.dicj.gov.mo',
    selfExclusionName: 'Self-exclusion and third-party (family) exclusion (max 2 years per Law 10/2012, as amended by Law 17/2018)',
    selfExclusionUrl: 'https://www.dicj.gov.mo/web/en/responsible/responsible01/content.html',
    supportOrgName: 'Macau IAS (Social Welfare Bureau) / Sheng Kung Hui Macau Social Service',
    supportOrgUrl: 'https://www.ias.gov.mo',
    verticals: 'Land-based Casino only (no legal online gambling)',
    mandatoryMessaging: 'RG messages required in promotional pamphlets and on casino-floor kiosks. 24-hr Gambling Counseling Hotline displayed on ATM screensavers at all casinos. Advertising must comply with DICJ guidelines (Law 7/2022 amending Law 16/2001).',
    jurisdictionKey: 'macau',
    disclaimerGeneral: 'Don\'t be a slave to gambling. Gambling restricted to those 21 years of age and over. 24-hr Gambling Counseling Hotline: 2823-0101 (verify against current DICJ-published materials).',
    notes: 'No legal online gambling. 21+ to enter casinos (raised from 18 by Law 10/2012). Verify the IAS counseling hotline number against current DICJ-published materials before deployment.'
  },
  custom: {
    number: '', textNumber: '', chatUrl: '',
    label: '', helplineWebsite: '',
    age: 18, regulatorName: '', regulatorUrl: '',
    selfExclusionName: '', selfExclusionUrl: '',
    supportOrgName: '', supportOrgUrl: '',
    verticals: '', mandatoryMessaging: '',
    jurisdictionKey: '',
    disclaimerGeneral: '',
    notes: ''
  }
};

/* Suggested currency formatting per jurisdiction preset (drives the Currency group
   on the Jurisdiction step; values follow the currency: section of _brand.yml). */
export const JURISDICTION_CURRENCY = {
  us: { symbol: '$', code: 'USD', position: 'before', thousands: ',', decimal: '.' },
  ca: { symbol: '$', code: 'CAD', position: 'before', thousands: ',', decimal: '.' },
  uk: { symbol: '£', code: 'GBP', position: 'before', thousands: ',', decimal: '.' },
  dk: { symbol: 'kr.', code: 'DKK', position: 'after', thousands: '.', decimal: ',' },
  mt: { symbol: '€', code: 'EUR', position: 'before', thousands: ',', decimal: '.' },
  au: { symbol: '$', code: 'AUD', position: 'before', thousands: ',', decimal: '.' },
  sg: { symbol: 'S$', code: 'SGD', position: 'before', thousands: ',', decimal: '.' },
  mo: { symbol: 'MOP$', code: 'MOP', position: 'before', thousands: ',', decimal: '.' },
  custom: { symbol: '$', code: 'USD', position: 'before', thousands: ',', decimal: '.' },
};

export const JURISDICTION_CHILDREN = {
  us: [
    { id: 'us',    label: 'National (NCPG)' },
    { id: 'us-nv', label: 'Nevada' },
    { id: 'us-nj', label: 'New Jersey' },
    { id: 'us-ma', label: 'Massachusetts' },
    { id: 'us-oh', label: 'Ohio' },
    { id: 'us-mi', label: 'Michigan' },
    { id: 'us-pa', label: 'Pennsylvania' },
    { id: 'us-ca', label: 'California (Tribal)' },
    { id: 'us-az', label: 'Arizona' }
  ],
  ca: [
    { id: 'ca-on', label: 'Ontario' },
    { id: 'ca-ab', label: 'Alberta' }
  ]
};
