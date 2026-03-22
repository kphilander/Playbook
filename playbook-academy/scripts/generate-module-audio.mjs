/**
 * Generate audio narration for all module lessons using node-edge-tts.
 * Run: node scripts/generate-module-audio.mjs
 */

import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

// All modules use Ava (female voice)
const VOICE = 'en-US-AvaNeural';
const getVoice = () => VOICE;

const RATE = '-15%';
const OUT_DIR = join(import.meta.dirname, '..', 'public', 'audio', 'modules');

const LESSONS = [
  // ── Module 1: RG Foundations ──
  {
    file: 'm1-what-does-rg-mean',
    text: `What does responsible gambling actually mean? It's one of the most used phrases in the industry — and one of the least understood. Ask ten people and you'll get ten answers. That ambiguity isn't harmless. When a phrase means everything, it means nothing. So let's nail it down. At its core, responsible gambling means helping players manage how they spend their time and money on gambling. That's the through-line. Every compliance framework, every helpline number, every piece of educational content exists to serve that single goal. But different stakeholders come at it from very different angles. The public expects transparency, accessible support, and genuine effort — not a checkbox exercise. Regulators set the compliance floor — helpline numbers, self-exclusion flows, age verification, mandatory messaging. And consumers — the players — want the information and tools to make good decisions. They don't want to be lectured. They want to be equipped. This is where Playbook lives — giving players the information they need to make their own choices well. Now here's the problem Playbook exists to solve. Every operator invests heavily in commercial content — sleek apps, polished ads, generous bonuses. World-class creative. And their player education content? A wall of text buried in the footer. Written by compliance. Designed by nobody. This is the engagement gap — the gulf between the quality of commercial content and the quality of player education. Playbook closes that gap by treating player education as a marketing communications challenge, not a compliance requirement. Now try the exercise below.`,
  },
  {
    file: 'm1-informed-choice-model',
    text: `The Informed Choice Model. Gambling is a complicated product. Every game involves probability, expected value, house edge, variance, and game-specific mechanics. A minus-110 betting line, a 35-to-1 roulette payout, a 96% RTP on a slot machine — these numbers carry real financial meaning, but most players can't decode them without help. Operators understand this math deeply — their business model depends on it. Players generally don't. This Information Gap means players can't make fully informed choices — and that means they're more likely to put themselves at risk. Closing that gap is Playbook's core job. The informed choice framework rests on four premises. First, most people who gamble do so recreationally, without problems. Second, gambling is entertainment with a cost — the house edge. Understanding that cost doesn't ruin the experience, it makes it more informed. Third, difficulties arise from lack of information and lack of control — not from the activity itself. And fourth, responsibility is shared across multiple stakeholders — players, operators, regulators, and support services. Where does this come from? Three fields. Consumer psychology shows people make better purchasing decisions when product information is clear and honest. Economic adverse selection tells us that when one party knows far more than the other, outcomes suffer. And liberal ethics — the balance between personal liberty and duty of care. Informed choice is the middle path: equip people to make their own decisions, then respect those decisions. Three complementary layers work together. Compliance sets the floor — mandatory standards every operator meets. Public health addresses population-level outcomes — prevalence research, advertising restrictions, harm monitoring. And informed choice empowers individual consumers through education and tools. These aren't competing alternatives. Playbook operates at the informed choice layer while respecting the others. Now try the exercise below.`,
  },
  {
    file: 'm1-two-tier-system',
    text: `The Two-Tier System. The informed choice model makes a critical assumption: that players are making rational decisions. For the vast majority, that holds. But not always. Some players gamble in ways that suggest difficulty — not because they lack information, but because impulse, habit, or loss of control overrides their ability to act on what they know. A player who understands house edge intellectually may still chase losses when emotions take over. Information alone doesn't fix this. It's a fundamentally different problem. That's why Playbook operates on two tiers. Tier 1 covers about 95% of what you'll create. It assumes rational decision-making with good information and equips players with knowledge and tools — deposit limits, session reminders, odds education, myth-busting, game guides. This is the engaging, personality-driven content that makes players actually want to interact. Tier 2 covers the remaining 5%. It exists for players experiencing difficulty or loss of control. Tier 2 is warm, direct, stripped of all decoration, and focused on one thing: connecting people to support with zero friction. How do you know when a player has moved from Tier 1 into Tier 2? You look for behavioral indicators — escalating deposits, chasing losses, increasing session length, repeated limit increases, or searching for support content. Notice what's not on this list: clinical diagnostic criteria. Players don't self-diagnose from clinical checklists. What works is behavioral description — language like "spending more than you planned" rather than clinical terminology. Most operators get the ratio backwards. They treat all player education as crisis prevention — making it feel clinical and irrelevant to the majority. Playbook's approach: make Tier 1 content so genuinely engaging that players choose to interact with it, while Tier 2 support stays always one tap away. Both tiers are essential. And the non-negotiable rule: Tier 2 is always accessible from any Tier 1 context. Now try the exercise below.`,
  },
  {
    file: 'm1-knowledge-check',
    text: `Time to test what you've learned. Five questions covering responsible gambling foundations, the informed choice model, and the two-tier system. You need 70 percent to mark this module complete. Take your time — this isn't a speed test.`,
  },

  // ── Module 2: Voice & Tone ──
  {
    file: 'm2-playbook-voice',
    text: `Most player education sounds like it was written by a committee of lawyers told to "make it sound helpful." The result: material nobody reads, nobody shares, and nobody acts on. Playbook sounds like somebody. Specifically, it sounds like a knowledgeable friend at the table with you — someone who knows the odds, has read the fine print, understands the math behind every game, but doesn't lecture. Five traits define this voice. Knowledgeable — it knows the math but explains it like something interesting at a bar. Confident — it doesn't hedge or equivocate. Generous — it shares information because you should have it. At the table — the perspective comes from inside the experience. And non-judgmental — it will tell you your system doesn't work, but never makes you feel stupid for trying it. Then there's what the voice is NOT. Not a teacher — this is conversation, not class. Not a doctor — it shares information, you decide. Not a parent — it trusts you to be an adult. And not a killjoy — gambling is fun, eyes open. Beyond those traits, five voice dimensions shape how Playbook sounds in practice. Voice — peer, not authority. Framing — opportunity, not warning. Humor — witty, not preachy. And here's an important guardrail: humor is on for Tier 1 education material and completely off for Tier 2 support and crisis material. Directness — blunt, not hedging. And Comfort — open and comfortable, not stigmatizing. Each dimension has a default setting and a guardrail. Read through the examples and comparisons on the page now. When you're ready, scroll down or press the forward button to continue to the next lesson.`,
  },
  {
    file: 'm2-stigma-free-language',
    text: `Language shapes perception. When players encounter clinical terms like "problem gambler," "warning signs," or "gambling addiction," they assume the material isn't for them. So they leave. This isn't about being polite — it's about being effective. The gambling industry relies on language that stigmatizes players and puts the burden on the individual. Playbook replaces that with stigma-free alternatives. Instead of "problem gambler," say "player." Instead of "responsible gambling," use specific actions — "set a budget," "know the odds," "check your session." Instead of "gambling addiction," say "difficulty with gambling." Instead of "self-exclude," say "take a break" or "pause your account." These aren't cosmetic changes. Research shows stigmatizing language makes people less likely to seek help. When someone reads "If you have a gambling problem, call this number," they have to self-identify as having a problem before they can pick up the phone. That's a barrier. "Free, confidential support — for any question about gambling" removes that barrier entirely. There are ten essential swaps that apply to all Tier 1 material — social posts, app copy, emails, print, in-venue signage. Work through the interactive swap game now to learn them, then explore the full 35-term reference tool below it.`,
  },
  {
    file: 'm2-tone-spectrum',
    text: `Playbook has one voice but four tone registers. Same person, different conversations. Knowing when to use each one is what separates competent brand writing from great brand writing. The four registers. Playful and Witty — your myth-busting, quiz, and social media register. The personality shines here. Sarcasm, wordplay, and confident challenges earn attention instead of demanding it. This register is Tier 1 only. Confident and Informative — your educational workhorse. Odds explanations, game guides, how-to material. Clear, direct, no fluff. Warm and Direct — Tier 2 territory. Support pages, session reminders, check-in moments. This is where humor drops to zero. The voice stays generous and non-judgmental, but the tone is plain, clear, and immediate. No jokes. No cleverness. Just the information the player needs. This is one of the most important guardrails in the system: humor is on for education, off for support. And Celebratory — for quiz results, milestones, and positive moments. Restrained enthusiasm. "You scored nine out of ten. Sharper than most. Challenge a friend?" Not "Amazing! You're a champion!" Matching registers to the situation isn't a creative choice — it follows rules. Myth-busting gets Playful. Odds education gets Confident. Self-exclusion pages get Warm and Direct. Quiz results get Celebratory. The voice never changes; the register always matches the moment. Now try the tone matching exercise below to build your ear for the difference.`,
  },
  {
    file: 'm2-cultural-adaptation',
    text: `The Playbook voice principles are universal. The expression adapts to the market. Five things never change regardless of audience, language, or geography — the Brand DNA: generous with information, respectful of intelligence, honest about how things work, treats gambling as entertainment, and corrects without judgment. What adapts is how those traits are expressed. Two dimensions matter most: humor register and directness level. Humor can be bold — irreverent sarcasm common in Australia and the US. It can be understated — dry wit for the UK. Or minimal — warm and clean for Asian and Nordic markets. All three registers are valid as long as the material doesn't read like a compliance form. Directness follows a similar spectrum. Direct markets like Australia and the Nordics get plain facts with no softening: "This bet is terrible. Here's why." Diplomatic markets like the UK and parts of Asia get the same information wrapped in comparison: "If you compare the major bets side by side, you'll notice some give up significantly more." Contextual markets like Japan frame information through social proof. Same information, different cultural wrapping. Use the Cultural Dial tool below to see how the same message adapts across these dimensions. Try the market presets, then adjust the sliders to find your own market's sweet spot.`,
  },
  {
    file: 'm2-knowledge-check',
    text: `Time to test what you've learned. Five questions covering the Playbook voice, stigma-free language, tone registers, and cultural adaptation. You need 80 percent to mark this module complete. Take your time and think about the principles behind each answer.`,
  },

  // ── Module 3: Player Segmentation ──
  {
    file: 'm3-new-segmentation-model',
    text: `Traditional gambling segmentation groups players by demographics — age, gender, location — or by product preference — sports bettors, casino players, lottery buyers. These categories describe what people do but tell you nothing about what content they actually need. A 22-year-old and a 55-year-old who both play recreationally and understand the odds need the same content. But a sports bettor who just placed their first parlay and one who tracks the vig across 15 sportsbooks need completely different content — even though both are "sports bettors." Playbook uses a relationship-based model instead. Six segments, defined by the player's knowledge level, engagement pattern, and behavioral indicators. Three engagement-focused segments: New or Novice players encountering a product for the first time who need foundational education. Recreational players who play within their means with moderate knowledge and steady patterns — this is the majority of any player base. And Enthusiasts — highly engaged, deep product knowledge, they track their own play and want advanced content. Then three support-focused segments: At-Risk players showing behavioral warning signs who need tool visibility, not lectures. In-Crisis players actively seeking help who need immediate, frictionless access to support. And Friends and Family — people who aren't players at all, who arrive searching "how to help someone who gambles too much" and need a completely separate entry point. Three things make this model different from traditional approaches. It's relational, not demographic. It's product-contextual — a player can be Recreational in casino and New or Novice in sports simultaneously. And it's dynamic — players move between segments as their behavior changes. Now try the ranking exercise below to test your understanding of how these segments compare in size.`,
  },
  {
    file: 'm3-product-vertical-overlay',
    text: `Segments describe who the player is in relationship to gambling. Product verticals describe what they're playing. These are independent dimensions that overlay each other — think of it as a grid. Playbook covers five verticals: sports betting, casino, lottery, poker, and bingo. Each has its own knowledge domains, its own misconceptions, and its own tool categories. A Recreational casino player needs session management tools and myth-busting about hot and cold machines. A Recreational sports bettor needs bankroll planning and education about vig and parlay margins. Same segment, completely different content. Without this overlay, you end up with generic content like "Know the odds!" — which is too vague for anyone to act on. Which odds? Parlay odds? Slot RTP? Lottery jackpot probability? Each requires a completely different explanation. Or you end up with product-only segments like "Sports Bettors" — which ignores that a first-time sports bettor and a five-year veteran need totally different things. The overlay gives you specificity. A New or Novice plus Sports player needs to learn what a minus-110 line means. A Recreational plus Sports player already knows that — they need bankroll planning for their NFL season. Same product, different relationships, different content. Use the Vertical Explorer tool below to see how each vertical breaks down across segments, core knowledge areas, common misconceptions, and key tool categories.`,
  },
  {
    file: 'm3-identifying-segments',
    text: `You don't need perfect data to segment your players. Playbook uses three levels of identification that work at any level of data sophistication. Level 1 is structural identification — no data needed. Your product already tells you who's where. A player in onboarding? New or Novice. Browsing the sportsbook? Sports vertical. On the support page? Potentially In-Crisis. Arrived via a "worried about someone" link? Friends and Family. Structural identification isn't a compromise — it's often more accurate than predictive models because it's based on what players are actually doing right now. Level 2 uses basic data — account age, deposit frequency, session counts. Consistent activity over months with no escalation points to Recreational. Multi-vertical usage with high frequency suggests Enthusiast. First deposit and first session is reliably New or Novice. Level 3 is behavioral analytics — the most powerful level. With full behavioral data, you can detect At-Risk patterns: escalating deposits, chasing losses, increasing session length, repeated limit increases, late-night play spikes, and out-of-pattern behavior. No single indicator is definitive. Patterns matter. A one-time large bet during the Super Bowl is normal. A sustained increase in stake size over three weeks is a signal. Start at Level 1. Move to Level 2 when you have the data. Level 3 is a long-term goal. Now try the scenario practice exercise below — you'll identify the segment and vertical for eight real-world player situations.`,
  },
  {
    file: 'm3-adapting-messages',
    text: `The same core message adapts to different segments by changing tone, depth, and framing — not the underlying information. The fact doesn't change. The lens does. Five rules govern adaptation. Same fact, different depth — New or Novice needs the definition, Recreational needs the comparison, Enthusiast needs the advanced angle. Match their language — sports bettors say "vig," poker players say "rake," casino players know "RTP." Respect what they already know — don't explain house edge to an Enthusiast. At-Risk and In-Crisis get tools, not education — when behavioral indicators suggest difficulty, more information isn't the answer. And the general voice works for most content — only adapt when the touchpoint or data demands it. Use the Message Adapter tool below to see this in action. Start with the core message "Every game has a house edge" and click each segment to see how the same truth adapts. Then add the vertical overlay to see how even a single segment's message changes by product. After that, you'll see the segment movement patterns — how players transition between segments and how your content should respond to those transitions. The most important content moments happen at these inflection points, not during steady states. Time to test what you've learned.`,
  },
  {
    file: 'm3-knowledge-check',
    text: `Time to test what you've learned. Six questions covering the segmentation model, product vertical overlay, identifying segments, and adapting messages. You need 80 percent to mark this module complete. Take your time — several questions test the product-contextual nature of the model.`,
  },

  // ── Module 4: Visual Identity ──
  {
    file: 'm4-visual-system-principles',
    text: `Playbook's visual system uses three core colors. Navy — the primary brand color — conveys trust and authority. Teal is the accent for interactive elements, links, and CTAs. Bold orange brings energy to Tier 1 content, but disappears completely in Tier 2. The visual system is designed for maximum contrast and accessibility. Every color combination must meet WCAG double-A standards. The typography uses a heading font for hierarchy and a body font for readability. Icons follow a consistent line-weight style. The system is deliberately restrained — visual noise is the enemy of player education.`,
  },
  {
    file: 'm4-tier-visual-rules',
    text: `Tier 1 and Tier 2 use the same brand quality — the difference is restraint, not quality. Tier 1 gets the full visual system: navy backgrounds, teal accents, bold orange highlights, playful iconography, and branded illustrations. This is where the personality lives. Tier 2 strips everything back. Orange disappears. Decorative elements disappear. The palette reduces to neutrals plus teal for essential actions. Layout goes single-column, maximum 640 pixels wide. White space increases dramatically. And critically — Tier 2 always renders in light mode, even if the user has dark mode enabled. When someone needs help, every unnecessary visual element is friction.`,
  },
  {
    file: 'm4-accessibility',
    text: `Accessibility isn't optional — it's the foundation of inclusive player education. Every layout must support keyboard navigation and screen readers. Color contrast ratios must meet WCAG double-A minimum — 4.5 to 1 for body text, 3 to 1 for large text. Never use color alone to convey meaning. All images need descriptive alt text. Touch targets on mobile must be at least 44 pixels. Interactive elements need visible focus indicators. And Tier 2 pages always render in light mode, because dark mode can feel isolating in crisis contexts. The goal: every player, regardless of ability, can access every piece of content.`,
  },
  {
    file: 'm4-case-study',
    text: `LuckyDraw Casino redesigned their responsible gambling page using the tier-based visual system. Before: cluttered layout, gray text on white with poor contrast, decorative gambling imagery mixed with support information, helpline buried at the bottom. Accessibility score: 47 out of 100. After: clean layout with Tier 1 tools and literacy content using the full brand visual system, and a dedicated Tier 2 support section with stripped-back design — no orange, no decoration, maximum restraint. Accessibility score: 94 out of 100. The information was reorganized, not rewritten. Visual design did the heavy lifting.`,
  },

  // ── Module 5: Customer Journey ──
  {
    file: 'm5-player-journey',
    text: `Playbook follows what we call a material escalation model. It starts with what every player actually wants, which is learning how to play, and builds toward what long-term regulars eventually need. Most players never reach the later stages. That is by design. There are five stages. At Awareness, the player has not signed up yet. Playbook appears as a companion brand alongside the product. It teaches how the game works. Odds, rules, what the numbers mean. It makes gambling less intimidating. This is not a safety section. It is a product feature. At the New Player stage, once they know the basic rules, you introduce myth-busting. Cognitive distortions like "I am due for a win" or "this machine is hot." This builds gambling resilience indirectly through education, not through warnings. At the Active Player stage, the player is settled in. This is where entertainment literacy lives. Finer points, strategy where it applies, product-specific knowledge. Quizzes, game guides, articles. The player is engaged enough to want more. At the Regular stage, and only at this stage, you introduce self-management tools. Activity tracking, budgeting, limit-setting. The relationship is established, so these feel like a natural upgrade, not a warning sign. And Support Seeking can happen at any point. This is Tier 2. Direct path to support resources. No friction, no forms, no questions asked. This is not a funnel. Most players engage with the first two stages only. Some reach stage three. A minority become Regulars. The framework tells you what to have ready, not that every player will need all of it. Notice what Playbook does not do. It does not push deposit limits on Day One. It does not surface self-exclusion tools during onboarding. That is the generic responsible gambling approach, and it fails because players do not have a relationship with the brand yet. Instead, Playbook earns the relationship in stages. Education first, then tools. Use the touchpoint map and the worked example below to explore how this plays out across real channels and real timelines. Then try the game guides to see what players actually experience at the Awareness stage.`,
  },
  {
    file: 'm5-content-and-campaigns',
    text: `Playbook ships with a complete campaign framework. Pre-built campaigns, a myth-busting library, and a message hierarchy that scales from a tagline to a five-hundred-word article. The message hierarchy has four levels. Level one is taglines. Interchangeable lines organized by pillar, used in ads and hero banners. Level two is pillar messages. One core message per pillar, used in campaign themes and landing pages. Level three is contextual messages. Specific to a touchpoint, audience, or action, like deposit screens and email subject lines. Level four is long-form. Educational, explanatory, or interactive material for articles, video scripts, and quiz experiences. Playbook ships with pre-built campaigns. Each one maps to specific verticals, including both retail and online casino. Slots Myths Week and Beat the House translate directly to online casino because the myths are identical whether the game is on a physical floor or a screen. The only adaptation is swapping physical references for digital ones. Scheduling rules. Avoid peak gambling periods. Allow one week between campaigns. Plan for four campaigns per year. Start with one well-executed campaign rather than trying to launch everything at once. Myth-busting is Playbook's core material category. The library holds researched myths organized by game type, each pre-written in multiple formats. Social cards are fifty to eighty words, punchy and shareable. Article explainers are three hundred to five hundred words with links to tools and quizzes. Quiz questions have four options with instant feedback. One myth per week gives you months of material across multiple channels simultaneously. Each myth in the library is tagged with the underlying cognitive distortion, like the Gambler's Fallacy or the Near-Miss Effect. You can filter by game type or by distortion to find exactly the right piece for your campaign. Now explore the myth-busting library below.`,
  },
  {
    file: 'm5-knowledge-check',
    text: `Time to test what you have learned. Five questions covering the player journey and the campaign strategy. You need eighty percent to mark this module complete. Take your time.`,
  },

  // ── Module 6: Measuring Success ──
  {
    file: 'm6-content-scorecard',
    text: `You A/B test email subject lines. You measure campaign net promoter score. Your Playbook material should get the same treatment. Because Tier 1 material is a product, not a pamphlet. Playbook material competes for the same player attention as your sportsbook promos, casino loyalty emails, and brand campaigns. If you would measure those with net promoter score, measure this with net promoter score. The quality bar is commercial-grade, not good enough for compliance. The anchor metric is one question. How likely would you recommend this material to a friend who gambles. Scored zero to ten, calculated as percent Promoters, which are nines and tens, minus percent Detractors, which are zeros through sixes. Here are the benchmarks. Fifty or above is Exceptional. Players are sharing the material organically. Thirty to forty-nine is Strong, on par with gaming and sportsbook apps. Zero to twenty-nine is positive but below target. Run diagnostics. Below zero means more detractors than promoters. Revise before shipping. For perspective, streaming apps like Netflix and Spotify score fifty to seventy. Gaming and sportsbook apps score thirty to fifty. Traditional compliance material is unmeasured. Nobody even asks players what they think. Playbook targets the same range as the products it sits alongside. Net promoter score tells you whether material is working. The semantic pairs tell you why, or why not. There are five pairs, each scored one to seven. Forgettable versus Memorable measures stickiness. Boring versus Engaging measures entertainment value. Preachy versus Respectful measures voice register, and this is the critical pair. Confusing versus Clear measures comprehension. Generic versus Made for me measures cultural resonance. If Preachy versus Respectful scores below four point zero, stop. Your material may be lecturing players. This is the Brand D-N-A alarm. It overrides an otherwise strong scorecard. Revise against the voice principles from Module 3 before shipping. Now try the Scorecard Simulator below. Drag the sliders to see how the decision tree responds in real time.`,
  },
  {
    file: 'm6-running-a-scorecard',
    text: `Three surveys. One decision tree. The entire process takes three to four hours spread across two weeks. The Pulse is your default. Three items, under a minute, target thirty responses. It gives you the net promoter score, the Forgettable versus Memorable pair, and one open-ended question. Send it after every launch. The Full is your diagnostic. Seven items, about two minutes, target thirty responses or sixty if you are A/B testing two versions. It adds all five semantic pairs so you can pinpoint which dimension needs work. Run it when the Pulse flags a problem. The Recall goes out seven to fourteen days after players saw the material. It tests three things the other surveys cannot measure. Free recall, which is simply asking what do you remember. True-or-false knowledge checks. And behavioral follow-through, which asks did you actually do anything differently. Material that scores well on Pulse but fails on Recall is engaging but not memorable. The decision tree is straightforward. Step one, send the Pulse. Step two-A, if net promoter score is thirty or above and all pairs are four point zero or above, ship it. Schedule the Recall survey in seven to fourteen days. Step two-B, if net promoter score is zero to twenty-nine or any pair is below four, run the Full to diagnose. Step two-C, if net promoter score is below zero or if Preachy versus Respectful is below three point zero, stop shipping and revise. Sample sizes matter. Target thirty responses for reliable results. If you are comparing two versions of the same material, you need sixty, which is thirty per variant. Playbook ships a ready-to-use survey widget that auto-calculates scores with color-coded results. You can embed it as an iframe in about five minutes. Or use Google Forms in about ten minutes with manual scoring. Or use Typeform or SurveyMonkey in about fifteen minutes for a polished experience. Try the actual survey widget below to see how it works.`,
  },
  {
    file: 'm6-knowledge-check',
    text: `Time to test what you have learned. Five questions on the Scorecard framework. You need eighty percent to mark this module complete. Take your time.`,
  },

  // ── Module 7: Deploying Playbook ──
  {
    file: 'm7-phase-1-mvp',
    text: `Your first deployment targets two segments: New or Novice and Recreational. These are the largest groups and most receptive to education. The MVP includes four essential elements: a configured brand.yml file with your program name, helpline, and brand colors; a set of core templates — welcome email, deposit screen prompt, session reminder, and helpline footer; one launch campaign, ideally Game IQ Challenge; and a basic content hub landing page. The "done when" checklist: deposit limit prompt appears on first deposit, session reminders are in account settings, helpline is visible on every screen, and your welcome email goes out on registration.`,
  },
  {
    file: 'm7-configuring-brand-yml',
    text: `The brand.yml file is where every placeholder token in Playbook resolves. Instead of hunting through 41 templates to update a phone number, you change it once in brand.yml and it cascades everywhere. The fields that matter most: your program name, your organization name, the helpline number and chat URL, your primary and accent colors, your tagline, your cultural profile, and legal minimums like gambling age. The most critical field? Your helpline number. Get this wrong and every support touchpoint fails. Common pitfalls: wrong helpline per market, brand colors that fail contrast checks, and leaving placeholder tokens in production.`,
  },
  {
    file: 'm7-selecting-templates',
    text: `Templates serve segments — not the other way around. Start with your priority segments and work backward to the templates they need. For New or Novice players: onboarding templates — welcome email, deposit limit prompt, content hub intro, registration screens. For session engagement: session reminders, cool-off suggestions, activity summaries. For campaigns: Game IQ quiz, myth-busting social cards, odds explainers. For support: helpline footer strip, self-exclusion flow, support page. Your MVP set is roughly 10 to 12 templates focused on onboarding and session management for New or Novice and Recreational segments.`,
  },
  {
    file: 'm7-campaign-selection',
    text: `Your launch campaign sets the tone for your entire program. Game IQ Challenge is the recommended first campaign because it works across all verticals, it's highly shareable, and it drives traffic to your content hub. If you're a single-vertical operator, you might pair it with a vertical-specific campaign in month two — Slots Myths Week for casinos, Sports Reality Check for sportsbooks, or Luck Numbers and Lotteries for lottery operators. The campaign calendar should build: month one is Game IQ, month two adds a vertical-specific campaign, month three introduces a third. Each campaign builds on awareness from the previous one.`,
  },
  {
    file: 'm7-case-study',
    text: `QuickLotto, a small lottery operator with 15,000 monthly users, deployed Playbook in six weeks. Weeks one and two: configured brand.yml — program name, helpline, lottery-specific colors, tagline. Week three: selected MVP templates — welcome email, session reminder, helpline footer, content hub landing page. Week four: adapted content for lottery vertical — localized myths about lucky numbers and winning stores, wrote four Game IQ questions about lottery odds. Week five: integration — embedded helpline footer on all pages, connected email templates to their CRM. Week six: soft launch to 10% of users. Results at 30 days: quiz completion 23%, helpline footer clicks up 340%, and one self-exclusion completion — their first ever through a digital channel.`,
  },

  // ── Module 8: Measuring Success ──
  {
    file: 'm8-success-metrics',
    text: `Measuring Playbook's success requires three categories of metrics. Engagement metrics: quiz completion rates, content hub visits, email open rates, social shares. These tell you whether players are actually interacting with your content. Tool adoption metrics: deposit limit usage, session reminder activation, activity dashboard views. These tell you whether education translates to behavior. And support accessibility metrics: helpline visibility, self-exclusion flow completion, cooling-off usage. These tell you whether players in difficulty can find help. The three questions: Are players engaging? Are they using tools? Can they find help when they need it?`,
  },
  {
    file: 'm8-dashboard-interpretation',
    text: `Reading a dashboard correctly is more important than building one. A spike in helpline clicks is almost always a win — it means players can now find the support link. Don't treat Tier 2 metric increases as negative without context. A quiz completion rate of 15 to 25% in the first three months is strong. Tool adoption above 10% is meaningful. The most common misread: treating all metrics as "higher is better" or "lower is better." Context matters. A drop in session reminder dismissals might mean players are finding them useful, or it might mean the UI changed. Always ask why before reacting to a number.`,
  },
  {
    file: 'm8-troubleshooting',
    text: `When metrics miss their targets, use a diagnostic approach. Low quiz engagement? Check distribution — is the quiz actually visible? Check content — are the questions interesting or clinical? Check targeting — are you reaching the right segments? Low tool adoption? Check onboarding — are tools introduced during registration? Check visibility — can players find tools in two taps? Check friction — is the setup process too complex? High Tier 2 bounce rate? Check the flow — is self-exclusion more than three clicks? Check the language — is it clinical and intimidating? Check mobile — does the support page work on a phone screen?`,
  },
  {
    file: 'm8-quarterly-review',
    text: `The quarterly review is your optimization engine. Every three months, compare all engagement, tool adoption, and support metrics against your baselines. Flag anything below target. For each flagged metric, run the troubleshooting diagnostic. Then prioritize: which fixes will have the biggest impact? A typical quarterly review takes half a day and should involve your marketing, compliance, and product teams. The output: an updated content calendar, a list of template or tool improvements, and revised metric targets for the next quarter. Playbook deployment isn't a one-time project — it's an ongoing program.`,
  },
  {
    file: 'm8-player-testing',
    text: `Player testing closes the loop between what you think works and what actually works. Test your content with real players from each segment. Can a New or Novice player find the deposit limit tool within 30 seconds? Can a Recreational player understand the house edge explanation? Can a player in difficulty complete self-exclusion in under 60 seconds? Use task-based testing: give players a specific goal and watch what happens. The insights will surprise you. What feels clear to your team almost always needs simplification for real users. Test early, test often, and let player behavior override internal opinions.`,
  },
];

async function generate() {
  await mkdir(OUT_DIR, { recursive: true });

  const { EdgeTTS } = await import('node-edge-tts');
  const manifest = [];

  for (const lesson of LESSONS) {
    const outPath = join(OUT_DIR, `${lesson.file}.mp3`);
    const voice = getVoice();
    process.stdout.write(`Generating ${lesson.file} (${voice})...`);

    try {
      const tts = new EdgeTTS({
        voice,
        lang: 'en-US',
        outputFormat: 'audio-24khz-96kbitrate-mono-mp3',
        rate: RATE,
        timeout: 60000,
      });

      await tts.ttsPromise(lesson.text, outPath);

      const audioBuffer = await readFile(outPath);
      const wordCount = lesson.text.split(/\s+/).length;
      const estimatedDuration = Math.round((wordCount / 150) * 60);

      manifest.push({
        file: `${lesson.file}.mp3`,
        module: lesson.file.split('-')[0],
        wordCount,
        estimatedDuration,
        fileSize: audioBuffer.length,
      });

      console.log(` OK (${Math.round(audioBuffer.length / 1024)} KB, ~${estimatedDuration}s)`);
    } catch (err) {
      console.log(` FAILED: ${err.message}`);
    }
  }

  const manifestPath = join(OUT_DIR, 'manifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${manifestPath}`);
  console.log(`Total: ${manifest.length} files generated`);
}

generate().catch(console.error);
