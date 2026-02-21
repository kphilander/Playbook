import PptxGenJS from "pptxgenjs";
import { writeFileSync } from "fs";

// ─── Brand tokens ───────────────────────────────────────────
const C = {
  navy:        "1B2838",
  navyLight:   "2A3F56",
  midnight:    "0F1923",
  teal:        "00D4AA",
  tealDark:    "00A888",
  orange:      "FF6B35",
  orangeLight: "FF8A5C",
  white:       "FFFFFF",
  n900:        "1A1A2E",
  n700:        "3D3D5C",
  n500:        "6B6B8A",
  n300:        "A8A8C0",
  n100:        "E8E8F0",
  n50:         "F5F5FA",
};

const FONT = { head: "Inter", body: "Source Sans 3", mono: "Source Code Pro" };

// ─── Helpers ────────────────────────────────────────────────
const pres = new PptxGenJS();
pres.defineLayout({ name: "16x9", width: 13.33, height: 7.5 });
pres.layout = "16x9";

function accentBar(slide) {
  // 4px ≈ 0.055"  — gradient left orange → right teal
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 13.33, h: 0.055,
    fill: { type: "solid", color: C.orange },
  });
  // overlay right half with teal to fake gradient
  slide.addShape(pres.ShapeType.rect, {
    x: 6.66, y: 0, w: 6.67, h: 0.055,
    fill: { type: "solid", color: C.teal },
  });
  // blend middle third
  slide.addShape(pres.ShapeType.rect, {
    x: 4.44, y: 0, w: 4.45, h: 0.055,
    fill: { type: "solid", color: C.orangeLight },
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.55, y: 0, w: 3.34, h: 0.055,
    fill: { type: "solid", color: C.tealDark },
  });
}

function darkSlide(title) {
  const s = pres.addSlide();
  s.background = { fill: C.navy };
  accentBar(s);
  return s;
}

function lightSlide() {
  const s = pres.addSlide();
  s.background = { fill: C.white };
  accentBar(s);
  return s;
}

function slideNum(slide, num) {
  slide.addText(String(num), {
    x: 12.5, y: 7.05, w: 0.6, h: 0.3,
    fontSize: 10, fontFace: FONT.mono, color: C.n500, align: "right",
  });
}

function pillBadge(slide, label, x, y, opts = {}) {
  const bg = opts.bg || C.teal;
  const fg = opts.fg || C.navy;
  const w = opts.w || 1.1;
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h: 0.32, rectRadius: 0.16,
    fill: { type: "solid", color: bg },
  });
  slide.addText(label.toUpperCase(), {
    x, y, w, h: 0.32,
    fontSize: 10, fontFace: FONT.head, bold: true, color: fg,
    align: "center", valign: "middle", letterSpacing: 2,
  });
}

function footerStrip(slide) {
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 6.9, w: 13.33, h: 0.6,
    fill: { type: "solid", color: C.navyLight },
  });
  slide.addText("Free, confidential support 24/7 — [HELPLINE NUMBER]  •  [CHAT URL]", {
    x: 0.6, y: 6.95, w: 12.13, h: 0.45,
    fontSize: 11, fontFace: FONT.mono, color: C.n300, align: "center", valign: "middle",
  });
}

// ─── SLIDE 1: Title ─────────────────────────────────────────
{
  const s = darkSlide();
  s.addText("Playbook", {
    x: 0, y: 2.0, w: 13.33, h: 1.2,
    fontSize: 64, fontFace: FONT.head, bold: true, color: C.white,
    align: "center",
  });
  s.addText("Brand Overview", {
    x: 0, y: 3.2, w: 13.33, h: 0.6,
    fontSize: 24, fontFace: FONT.head, color: C.teal,
    align: "center",
  });
  s.addText("Gambling Entertainment Literacy — A White-Label Brand System", {
    x: 1.5, y: 4.1, w: 10.33, h: 0.5,
    fontSize: 16, fontFace: FONT.body, color: C.n300,
    align: "center",
  });
  // bottom brand line
  s.addText("Open  ·  Social", {
    x: 0, y: 5.8, w: 13.33, h: 0.4,
    fontSize: 14, fontFace: FONT.head, bold: true, color: C.n500,
    align: "center", letterSpacing: 3,
  });
  slideNum(s, 1);
}

// ─── SLIDE 2: The Engagement Gap ────────────────────────────
{
  const s = darkSlide();
  s.addText("The Engagement Gap", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("Current player education is failing — not because the information is wrong, but because nobody reads it.", {
    x: 0.8, y: 1.3, w: 8, h: 0.5,
    fontSize: 15, fontFace: FONT.body, color: C.n300,
  });

  // Left column - What Exists
  const colL = 0.8, colR = 7.1, colW = 5.3, topY = 2.3;
  s.addText("WHAT EXISTS", {
    x: colL, y: topY, w: colW, h: 0.4,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.orange, letterSpacing: 2,
  });
  const existItems = [
    "Clinical, compliance-driven language",
    "Buried in page footers and legal disclaimers",
    "One-size-fits-all messaging",
    "Treated as a regulatory checkbox",
    "Near-zero player engagement",
  ];
  existItems.forEach((t, i) => {
    s.addText(`→  ${t}`, {
      x: colL, y: topY + 0.55 + i * 0.48, w: colW, h: 0.42,
      fontSize: 14, fontFace: FONT.body, color: C.n300,
    });
  });

  // Right column - What's Needed
  s.addText("WHAT'S NEEDED", {
    x: colR, y: topY, w: colW, h: 0.4,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.teal, letterSpacing: 2,
  });
  const needItems = [
    "Entertainment-grade production quality",
    "Integrated into the player experience",
    "Marketing-driven, not compliance-driven",
    "Personalized and shareable",
    "Content players actually seek out",
  ];
  needItems.forEach((t, i) => {
    s.addText(`→  ${t}`, {
      x: colR, y: topY + 0.55 + i * 0.48, w: colW, h: 0.42,
      fontSize: 14, fontFace: FONT.body, color: C.n300,
    });
  });

  // divider line
  s.addShape(pres.ShapeType.line, {
    x: 6.66, y: topY, w: 0, h: 3.2,
    line: { color: C.navyLight, width: 1 },
  });
  slideNum(s, 2);
}

// ─── SLIDE 3: The Solution ──────────────────────────────────
{
  const s = darkSlide();
  s.addText("Player Education That Players Actually Want", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });

  const cards = [
    { title: "Woven In, Not Bolted On", body: "Literacy content integrated into the player journey — deposit screens, game lobbies, post-session recaps. Not a buried link in the footer.", accent: C.teal },
    { title: "Entertainment-Grade Quality", body: "Social cards, interactive quizzes, myth-buster stories. Produced at the same quality as the gaming product itself.", accent: C.orange },
    { title: "White-Label: Your Brand, Our System", body: "Fork the repo. Edit one config file. Deploy under your brand. Open source, CC0 Public Domain — no licensing, no fees.", accent: C.teal },
  ];
  cards.forEach((c, i) => {
    const x = 0.8 + i * 4.0;
    // card bg
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.8, w: 3.7, h: 4.2, rectRadius: 0.12,
      fill: { type: "solid", color: C.navyLight },
    });
    // top accent line
    s.addShape(pres.ShapeType.rect, {
      x: x + 0.05, y: 1.8, w: 3.6, h: 0.05,
      fill: { type: "solid", color: c.accent },
    });
    s.addText(c.title, {
      x: x + 0.3, y: 2.2, w: 3.1, h: 0.8,
      fontSize: 20, fontFace: FONT.head, bold: true, color: C.white,
    });
    s.addText(c.body, {
      x: x + 0.3, y: 3.1, w: 3.1, h: 2.4,
      fontSize: 14, fontFace: FONT.body, color: C.n300, lineSpacingMultiple: 1.4,
    });
  });
  slideNum(s, 3);
}

// ─── SLIDE 4: Two Brand Pillars ─────────────────────────────
{
  const s = darkSlide();
  s.addText("Two Brand Pillars", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("Every piece of content maps to one or both pillars.", {
    x: 0.8, y: 1.25, w: 8, h: 0.4,
    fontSize: 15, fontFace: FONT.body, color: C.n300,
  });

  // OPEN card
  const cardW = 5.4, cardH = 4.5;
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 2.0, w: cardW, h: cardH, rectRadius: 0.12,
    fill: { type: "solid", color: C.navyLight },
  });
  pillBadge(s, "Open", 1.2, 2.4);
  s.addText('"No fine print."', {
    x: 1.2, y: 3.0, w: 4.6, h: 0.55,
    fontSize: 22, fontFace: FONT.head, bold: true, color: C.white, italic: true,
  });
  s.addText(
    "Transparency is the product. Real odds, honest math,\nno buried disclaimers.\n\n• House edge disclosure for every game\n• Myth vs. math content\n• Plain-language odds breakdowns\n• Bonus wagering explained", {
    x: 1.2, y: 3.6, w: 4.6, h: 2.5,
    fontSize: 14, fontFace: FONT.body, color: C.n300, lineSpacingMultiple: 1.4,
  });

  // SOCIAL card
  s.addShape(pres.ShapeType.roundRect, {
    x: 7.0, y: 2.0, w: cardW, h: cardH, rectRadius: 0.12,
    fill: { type: "solid", color: C.navyLight },
  });
  pillBadge(s, "Social", 7.4, 2.4);
  s.addText('"Worth sharing."', {
    x: 7.4, y: 3.0, w: 4.6, h: 0.55,
    fontSize: 22, fontFace: FONT.head, bold: true, color: C.white, italic: true,
  });
  s.addText(
    "Knowledge becomes social currency.\nPeer learning beats top-down lectures.\n\n• Game IQ quizzes and challenges\n• Shareable myth-buster cards\n• Friend vs. friend leaderboards\n• Community-driven content", {
    x: 7.4, y: 3.6, w: 4.6, h: 2.5,
    fontSize: 14, fontFace: FONT.body, color: C.n300, lineSpacingMultiple: 1.4,
  });
  slideNum(s, 4);
}

// ─── SLIDE 5: Brand Personality ─────────────────────────────
{
  const s = darkSlide();
  s.addText("Brand Personality", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });

  // The Sharp
  s.addText("THE SHARP", {
    x: 0.8, y: 1.5, w: 4, h: 0.4,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.teal, letterSpacing: 3,
  });
  s.addText("Primary Archetype", {
    x: 0.8, y: 1.85, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT.body, color: C.n500,
  });
  s.addText("The friend who knows the game.", {
    x: 0.8, y: 2.3, w: 5.5, h: 0.5,
    fontSize: 20, fontFace: FONT.head, bold: true, color: C.white,
  });

  const sharpTraits = [
    ["Confident, not condescending", "Shares knowledge because they respect you"],
    ["Specific, not sloganeering", '"The house edge on American roulette is 5.26%"'],
    ["Corrects without judgment", "Myth-busting without making you feel stupid"],
    ["Treats gambling as entertainment", "Neither pro- nor anti-gambling"],
  ];
  sharpTraits.forEach(([trait, desc], i) => {
    const y = 3.1 + i * 0.7;
    s.addText(trait, {
      x: 0.8, y, w: 5.5, h: 0.3,
      fontSize: 14, fontFace: FONT.head, bold: true, color: C.white,
    });
    s.addText(desc, {
      x: 0.8, y: y + 0.28, w: 5.5, h: 0.3,
      fontSize: 13, fontFace: FONT.body, color: C.n300,
    });
  });

  // Quote card
  s.addShape(pres.ShapeType.roundRect, {
    x: 7.0, y: 1.8, w: 5.5, h: 2.4, rectRadius: 0.12,
    fill: { type: "solid", color: C.navyLight },
  });
  s.addShape(pres.ShapeType.rect, {
    x: 7.0, y: 1.8, w: 0.06, h: 2.4,
    fill: { type: "solid", color: C.teal },
  });
  s.addText("THE SHARP VOICE", {
    x: 7.4, y: 2.1, w: 4.8, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.teal, letterSpacing: 2,
  });
  s.addText('"Set your deposit limit.\nIt takes 10 seconds.\nGo on, we\'ll wait."', {
    x: 7.4, y: 2.5, w: 4.8, h: 1.4,
    fontSize: 18, fontFace: FONT.body, italic: true, color: C.white, lineSpacingMultiple: 1.4,
  });

  // The Good Friend
  s.addShape(pres.ShapeType.roundRect, {
    x: 7.0, y: 4.6, w: 5.5, h: 2.0, rectRadius: 0.12,
    fill: { type: "solid", color: C.navyLight },
  });
  s.addShape(pres.ShapeType.rect, {
    x: 7.0, y: 4.6, w: 0.06, h: 2.0,
    fill: { type: "solid", color: C.orange },
  });
  s.addText("THE GOOD FRIEND", {
    x: 7.4, y: 4.85, w: 4.8, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.orange, letterSpacing: 2,
  });
  s.addText("Secondary archetype — warm, supportive.\nSteps in for Tier 2 (support/crisis) content.", {
    x: 7.4, y: 5.2, w: 4.8, h: 0.5,
    fontSize: 14, fontFace: FONT.body, color: C.n300, lineSpacingMultiple: 1.3,
  });
  s.addText('"No judgment. Just here if you need us."', {
    x: 7.4, y: 5.8, w: 4.8, h: 0.4,
    fontSize: 16, fontFace: FONT.body, italic: true, color: C.white,
  });
  slideNum(s, 5);
}

// ─── SLIDE 6: Color Palette ─────────────────────────────────
{
  const s = lightSlide();
  s.addText("Color Palette", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.n900,
  });
  s.addText("All combinations tested for WCAG 2.1 AA contrast compliance.", {
    x: 0.8, y: 1.2, w: 8, h: 0.4,
    fontSize: 14, fontFace: FONT.body, color: C.n500,
  });

  const swatches = [
    { label: "Primary\nDeep Navy", hex: "#1B2838", color: C.navy, textColor: C.white },
    { label: "Primary Light", hex: "#2A3F56", color: C.navyLight, textColor: C.white },
    { label: "Primary Dark\nMidnight", hex: "#0F1923", color: C.midnight, textColor: C.white },
    { label: "Secondary\nElectric Teal", hex: "#00D4AA", color: C.teal, textColor: C.navy },
    { label: "Accent\nBold Orange", hex: "#FF6B35", color: C.orange, textColor: C.white },
  ];
  swatches.forEach((sw, i) => {
    const x = 0.8 + i * 2.4;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.0, w: 2.1, h: 2.5, rectRadius: 0.12,
      fill: { type: "solid", color: sw.color },
    });
    s.addText(sw.label, {
      x, y: 2.2, w: 2.1, h: 0.8,
      fontSize: 12, fontFace: FONT.head, bold: true, color: sw.textColor, align: "center",
    });
    s.addText(sw.hex, {
      x, y: 3.8, w: 2.1, h: 0.4,
      fontSize: 14, fontFace: FONT.mono, color: sw.textColor, align: "center",
    });
  });

  // Neutral scale
  s.addText("NEUTRAL SCALE", {
    x: 0.8, y: 5.0, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.n500, letterSpacing: 2,
  });
  const neutrals = [
    { hex: "#1A1A2E", c: C.n900 }, { hex: "#3D3D5C", c: C.n700 },
    { hex: "#6B6B8A", c: C.n500 }, { hex: "#A8A8C0", c: C.n300 },
    { hex: "#E8E8F0", c: C.n100 }, { hex: "#F5F5FA", c: C.n50 },
  ];
  neutrals.forEach((n, i) => {
    const x = 0.8 + i * 1.9;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 5.5, w: 1.6, h: 1.0, rectRadius: 0.08,
      fill: { type: "solid", color: n.c },
      line: { color: C.n100, width: 0.5 },
    });
    s.addText(n.hex, {
      x, y: 6.55, w: 1.6, h: 0.3,
      fontSize: 10, fontFace: FONT.mono, color: C.n500, align: "center",
    });
  });
  slideNum(s, 6);
}

// ─── SLIDE 7: Typography ────────────────────────────────────
{
  const s = lightSlide();
  s.addText("Typography", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.n900,
  });

  // Inter specimen
  s.addText("HEADINGS", {
    x: 0.8, y: 1.6, w: 2, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.n500, letterSpacing: 2,
  });
  s.addText("Inter", {
    x: 0.8, y: 1.95, w: 4, h: 0.5,
    fontSize: 28, fontFace: FONT.head, bold: true, color: C.n900,
  });
  s.addText("400 Regular  ·  600 Semi  ·  700 Bold  ·  800 Extra", {
    x: 0.8, y: 2.5, w: 6, h: 0.3,
    fontSize: 12, fontFace: FONT.body, color: C.n500,
  });
  s.addText("Every game has math. Here's yours.", {
    x: 0.8, y: 2.95, w: 8, h: 0.6,
    fontSize: 24, fontFace: FONT.head, bold: true, color: C.n900,
  });

  // Source Sans 3 specimen
  s.addText("BODY", {
    x: 0.8, y: 3.8, w: 2, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.n500, letterSpacing: 2,
  });
  s.addText("Source Sans 3", {
    x: 0.8, y: 4.15, w: 5, h: 0.5,
    fontSize: 28, fontFace: FONT.body, color: C.n900,
  });
  s.addText("300 Light  ·  400 Regular  ·  600 Semi", {
    x: 0.8, y: 4.7, w: 6, h: 0.3,
    fontSize: 12, fontFace: FONT.body, color: C.n500,
  });
  s.addText("Your brain sees patterns. The math doesn't. Each spin is statistically independent — the machine has no memory of previous results.", {
    x: 0.8, y: 5.1, w: 7, h: 0.7,
    fontSize: 15, fontFace: FONT.body, color: C.n700, lineSpacingMultiple: 1.5,
  });

  // Source Code Pro specimen
  s.addText("DATA / STATS", {
    x: 7.5, y: 1.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.n500, letterSpacing: 2,
  });
  s.addText("Source Code Pro", {
    x: 7.5, y: 1.95, w: 5, h: 0.5,
    fontSize: 28, fontFace: FONT.mono, color: C.n900,
  });
  s.addText("400 Regular  ·  600 Semi", {
    x: 7.5, y: 2.5, w: 5, h: 0.3,
    fontSize: 12, fontFace: FONT.body, color: C.n500,
  });

  // Data example card
  s.addShape(pres.ShapeType.roundRect, {
    x: 7.5, y: 3.0, w: 4.8, h: 2.8, rectRadius: 0.12,
    fill: { type: "solid", color: C.navy },
  });
  s.addText("$110 in  →  $100 out", {
    x: 7.8, y: 3.3, w: 4.2, h: 0.5,
    fontSize: 22, fontFace: FONT.mono, bold: true, color: C.white,
  });
  s.addText("0.5%  ·  2.7%  ·  5.26%", {
    x: 7.8, y: 3.9, w: 4.2, h: 0.4,
    fontSize: 20, fontFace: FONT.mono, color: C.teal,
  });
  s.addText("1-800-522-4700", {
    x: 7.8, y: 4.5, w: 4.2, h: 0.4,
    fontSize: 18, fontFace: FONT.mono, bold: true, color: C.orange,
  });
  s.addText("Monospace signals factual,\nprecise information — stats,\nodds, and helpline numbers.", {
    x: 7.8, y: 5.0, w: 4.2, h: 0.7,
    fontSize: 12, fontFace: FONT.body, color: C.n300, lineSpacingMultiple: 1.3,
  });

  // Scale note
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 6.2, w: 11.73, h: 0.6, rectRadius: 0.06,
    fill: { type: "solid", color: C.n50 },
  });
  s.addText("Min body: 16px digital, 10pt print   ·   Helpline numbers always in monospace bold   ·   All fonts open source (Google Fonts)", {
    x: 1.0, y: 6.2, w: 11.33, h: 0.6,
    fontSize: 12, fontFace: FONT.body, color: C.n500, align: "center", valign: "middle",
  });
  slideNum(s, 7);
}

// ─── SLIDE 8: Voice & Tone ──────────────────────────────────
{
  const s = darkSlide();
  s.addText("Voice & Tone", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("Specific, not sloganeering. Every word earns its place.", {
    x: 0.8, y: 1.2, w: 8, h: 0.4,
    fontSize: 15, fontFace: FONT.body, color: C.n300,
  });

  // Two-column table
  const colLx = 0.8, colRx = 7.0, colW = 5.5;
  s.addText("WE SAY", {
    x: colLx, y: 1.9, w: colW, h: 0.4,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.teal, letterSpacing: 3,
  });
  s.addText("WE DON'T SAY", {
    x: colRx, y: 1.9, w: colW, h: 0.4,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.orange, letterSpacing: 3,
  });

  // divider
  s.addShape(pres.ShapeType.line, {
    x: 6.66, y: 1.9, w: 0, h: 4.7,
    line: { color: C.navyLight, width: 1 },
  });

  const pairs = [
    ["Player", "Gambler"],
    ["Set a budget", "Responsible gambling"],
    ["Know the odds", "Smart play"],
    ["Tools / features", "Interventions / measures"],
    ["Check in", "Self-assess"],
    ["Take a break", "Self-exclude"],
    ["Your limits", "Restrictions"],
    ["Entertainment budget", "Losses / spending"],
  ];
  pairs.forEach(([good, bad], i) => {
    const y = 2.45 + i * 0.55;
    // row bg
    if (i % 2 === 0) {
      s.addShape(pres.ShapeType.rect, {
        x: 0.6, y, w: 12.13, h: 0.5,
        fill: { type: "solid", color: C.navyLight },
      });
    }
    s.addText(good, {
      x: colLx, y, w: colW, h: 0.5,
      fontSize: 15, fontFace: FONT.body, bold: true, color: C.white, valign: "middle",
    });
    s.addText(bad, {
      x: colRx, y, w: colW, h: 0.5,
      fontSize: 15, fontFace: FONT.body, color: C.n500, valign: "middle",
      strike: true,
    });
  });
  slideNum(s, 8);
}

// ─── SLIDE 9: Messaging Framework ───────────────────────────
{
  const s = darkSlide();
  s.addText("Messaging Framework", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });

  // Open taglines
  pillBadge(s, "Open", 0.8, 1.6);
  const openTags = [
    "Here's how it actually works.",
    "No fine print. Just facts.",
    "Every game has math. Here's yours.",
    "The odds are public. Now you know them.",
  ];
  openTags.forEach((t, i) => {
    s.addText(`"${t}"`, {
      x: 0.8, y: 2.15 + i * 0.55, w: 5.5, h: 0.5,
      fontSize: 17, fontFace: FONT.body, color: C.white, italic: true,
    });
  });

  // Social taglines
  pillBadge(s, "Social", 7.0, 1.6);
  const socialTags = [
    "Share the facts. Start a conversation.",
    "Challenge your friends.",
    "How well do you really know the odds?",
    "Worth sharing.",
  ];
  socialTags.forEach((t, i) => {
    s.addText(`"${t}"`, {
      x: 7.0, y: 2.15 + i * 0.55, w: 5.5, h: 0.5,
      fontSize: 17, fontFace: FONT.body, color: C.white, italic: true,
    });
  });

  // divider
  s.addShape(pres.ShapeType.line, {
    x: 6.66, y: 1.6, w: 0, h: 3.0,
    line: { color: C.navyLight, width: 1 },
  });

  // Two-tier model
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 5.0, w: 11.73, h: 1.8, rectRadius: 0.12,
    fill: { type: "solid", color: C.navyLight },
  });
  s.addText("TWO-TIER CONTENT MODEL", {
    x: 1.2, y: 5.2, w: 5, h: 0.3,
    fontSize: 11, fontFace: FONT.head, bold: true, color: C.teal, letterSpacing: 2,
  });
  s.addText("Tier 1 — 95%  Entertainment Literacy", {
    x: 1.2, y: 5.65, w: 5.5, h: 0.35,
    fontSize: 15, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("Odds, myths, how games work. Voice: The Sharp. Engaging, shareable, fun.", {
    x: 1.2, y: 6.0, w: 5.5, h: 0.35,
    fontSize: 13, fontFace: FONT.body, color: C.n300,
  });
  s.addText("Tier 2 — 5%  Support & Crisis", {
    x: 7.0, y: 5.65, w: 5.5, h: 0.35,
    fontSize: 15, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("Helplines, self-assessment, cooling off. Voice: The Good Friend. Warm, non-judgmental.", {
    x: 7.0, y: 6.0, w: 5.5, h: 0.35,
    fontSize: 13, fontFace: FONT.body, color: C.n300,
  });
  slideNum(s, 9);
}

// ─── SLIDE 10: Collateral System ────────────────────────────
{
  const s = darkSlide();
  s.addText("Collateral System", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("Every touchpoint gets equal design investment.", {
    x: 0.8, y: 1.2, w: 8, h: 0.4,
    fontSize: 15, fontFace: FONT.body, color: C.n300,
  });

  const items = [
    { title: "Social Cards", sub: "Instagram Feed 1080×1080", desc: "Myth-busters, odds\ninfographics, stat cards", icon: "◻" },
    { title: "Stories", sub: "Instagram/TikTok 1080×1920", desc: "Quick myths, house\nedge breakdowns", icon: "▯" },
    { title: "Posters", sub: "A2 / 18×24\"", desc: "Venue awareness,\nevent signage", icon: "▮" },
    { title: "Emails", sub: "Responsive HTML", desc: "Onboarding, weekly\nsummaries, nudges", icon: "✉" },
    { title: "UI Components", sub: "In-App Widgets", desc: "Deposit limits, session\ntimers, quizzes", icon: "⊞" },
  ];
  items.forEach((item, i) => {
    const x = 0.5 + i * 2.5;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.0, w: 2.2, h: 4.2, rectRadius: 0.12,
      fill: { type: "solid", color: C.navyLight },
    });
    // placeholder graphic area
    s.addShape(pres.ShapeType.roundRect, {
      x: x + 0.2, y: 2.3, w: 1.8, h: 1.6, rectRadius: 0.08,
      fill: { type: "solid", color: C.midnight },
    });
    s.addText(item.icon, {
      x: x + 0.2, y: 2.5, w: 1.8, h: 1.2,
      fontSize: 36, color: C.navyLight, align: "center", valign: "middle",
    });
    s.addText(item.title, {
      x: x + 0.2, y: 4.1, w: 1.8, h: 0.4,
      fontSize: 15, fontFace: FONT.head, bold: true, color: C.white,
    });
    s.addText(item.sub, {
      x: x + 0.2, y: 4.45, w: 1.8, h: 0.3,
      fontSize: 10, fontFace: FONT.mono, color: C.teal,
    });
    s.addText(item.desc, {
      x: x + 0.2, y: 4.9, w: 1.8, h: 0.8,
      fontSize: 12, fontFace: FONT.body, color: C.n300, lineSpacingMultiple: 1.3,
    });
  });
  slideNum(s, 10);
}

// ─── SLIDE 11: White-Label Model ────────────────────────────
{
  const s = darkSlide();
  s.addText("Your Brand. Our System.", {
    x: 0.8, y: 0.5, w: 11.73, h: 0.8,
    fontSize: 36, fontFace: FONT.head, bold: true, color: C.white,
  });
  s.addText("One config file. Infinite operator brands.", {
    x: 0.8, y: 1.2, w: 8, h: 0.4,
    fontSize: 15, fontFace: FONT.body, color: C.n300,
  });

  // Three color scheme cards showing the same layout in different palettes
  const schemes = [
    { name: "LuckyDraw Casino", bg: "1B2838", accent: "00D4AA", cta: "FF6B35" },
    { name: "BetSmart", bg: "1A1A2E", accent: "7C6AFF", cta: "FF4D6A" },
    { name: "GreenField Gaming", bg: "0D2818", accent: "4ADE80", cta: "FACC15" },
  ];
  schemes.forEach((sc, i) => {
    const x = 0.8 + i * 4.1;
    // card
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.0, w: 3.8, h: 2.5, rectRadius: 0.12,
      fill: { type: "solid", color: sc.bg },
      line: { color: C.navyLight, width: 0.5 },
    });
    // accent bar
    s.addShape(pres.ShapeType.rect, {
      x: x + 0.05, y: 2.0, w: 3.7, h: 0.04,
      fill: { type: "solid", color: sc.accent },
    });
    s.addText(sc.name, {
      x: x + 0.3, y: 2.3, w: 3.2, h: 0.4,
      fontSize: 14, fontFace: FONT.head, bold: true, color: C.white,
    });
    // mini pill
    s.addShape(pres.ShapeType.roundRect, {
      x: x + 0.3, y: 2.8, w: 0.7, h: 0.22, rectRadius: 0.11,
      fill: { type: "solid", color: sc.accent },
    });
    s.addText("OPEN", {
      x: x + 0.3, y: 2.8, w: 0.7, h: 0.22,
      fontSize: 7, fontFace: FONT.head, bold: true, color: sc.bg, align: "center", valign: "middle",
    });
    // placeholder text
    s.addText("Know your game →", {
      x: x + 0.3, y: 3.2, w: 3.2, h: 0.3,
      fontSize: 12, fontFace: FONT.head, bold: true, color: sc.cta,
    });
    s.addText("Same layout pattern.\nDifferent brand.", {
      x: x + 0.3, y: 3.6, w: 3.2, h: 0.5,
      fontSize: 11, fontFace: FONT.body, color: C.n300,
    });
  });

  // Two columns: You customize / You keep
  const botY = 5.0;
  s.addText("YOU CUSTOMIZE", {
    x: 0.8, y: botY, w: 5.5, h: 0.35,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.orange, letterSpacing: 2,
  });
  const customize = ["Colors and gradients", "Fonts and type scale", "Logo and program name", "Taglines and CTA copy", "Helpline numbers and jurisdiction"];
  customize.forEach((t, i) => {
    s.addText(`→  ${t}`, {
      x: 0.8, y: botY + 0.45 + i * 0.38, w: 5.5, h: 0.35,
      fontSize: 13, fontFace: FONT.body, color: C.n300,
    });
  });

  s.addText("YOU KEEP", {
    x: 7.0, y: botY, w: 5.5, h: 0.35,
    fontSize: 13, fontFace: FONT.head, bold: true, color: C.teal, letterSpacing: 2,
  });
  const keep = ["Layout patterns and hierarchy", "Voice framework and tone", "Content structure (pillars, tiers)", "Accessibility standards (WCAG 2.1 AA)", "Proven engagement patterns"];
  keep.forEach((t, i) => {
    s.addText(`→  ${t}`, {
      x: 7.0, y: botY + 0.45 + i * 0.38, w: 5.5, h: 0.35,
      fontSize: 13, fontFace: FONT.body, color: C.n300,
    });
  });
  slideNum(s, 11);
}

// ─── SLIDE 12: Get Started ──────────────────────────────────
{
  const s = darkSlide();
  s.addText("Start Building.", {
    x: 0, y: 0.8, w: 13.33, h: 1.0,
    fontSize: 44, fontFace: FONT.head, bold: true, color: C.white, align: "center",
  });

  const steps = [
    { num: "1", title: "Fork the repo", desc: "Clone the Playbook repository\nto your own GitHub." },
    { num: "2", title: "Edit _brand.yml", desc: "Set your colors, fonts,\nlogo, and program name." },
    { num: "3", title: "Customize messaging", desc: "Adapt taglines and copy\nfor your market." },
    { num: "4", title: "Design & deploy", desc: "Generate collateral and\nlaunch across channels." },
  ];
  steps.forEach((st, i) => {
    const x = 0.9 + i * 3.1;
    // number circle
    s.addShape(pres.ShapeType.ellipse, {
      x: x + 0.85, y: 2.3, w: 0.6, h: 0.6,
      fill: { type: "solid", color: C.teal },
    });
    s.addText(st.num, {
      x: x + 0.85, y: 2.3, w: 0.6, h: 0.6,
      fontSize: 22, fontFace: FONT.head, bold: true, color: C.navy, align: "center", valign: "middle",
    });
    s.addText(st.title, {
      x: x, y: 3.1, w: 2.3, h: 0.4,
      fontSize: 17, fontFace: FONT.head, bold: true, color: C.white, align: "center",
    });
    s.addText(st.desc, {
      x: x, y: 3.55, w: 2.3, h: 0.8,
      fontSize: 13, fontFace: FONT.body, color: C.n300, align: "center", lineSpacingMultiple: 1.3,
    });
    // connector arrow
    if (i < 3) {
      s.addText("→", {
        x: x + 2.5, y: 2.35, w: 0.4, h: 0.5,
        fontSize: 20, color: C.n500, align: "center", valign: "middle",
      });
    }
  });

  // URL
  s.addText("playbook.org", {
    x: 0, y: 4.8, w: 13.33, h: 0.6,
    fontSize: 28, fontFace: FONT.mono, bold: true, color: C.teal, align: "center",
  });
  s.addText("Open Source  ·  CC0 Public Domain  ·  No Licensing Fees", {
    x: 0, y: 5.4, w: 13.33, h: 0.4,
    fontSize: 14, fontFace: FONT.body, color: C.n500, align: "center",
  });

  // Helpline footer
  footerStrip(s);
  slideNum(s, 12);
}

// ─── Write file ─────────────────────────────────────────────
const outPath = "/Users/ksr/Branding/collateral/render/playbook-brand-deck.pptx";
await pres.writeFile({ fileName: outPath });
console.log(`✓ Written to ${outPath}`);
