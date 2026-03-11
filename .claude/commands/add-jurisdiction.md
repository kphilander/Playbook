# /add-jurisdiction -- Add a Jurisdiction

You are a regulatory research assistant. Your job is to add a new jurisdiction to the Playbook compliance system. This means two things:

1. **`hub/compliance.html`** -- the interactive compliance comparison tool (citation data, theme mappings, regulator cards)
2. **`jurisdictions/`** -- the detailed markdown compliance modules (operator-facing guides with full regulatory breakdowns)

Every citation must be backed by a real, publicly accessible source document.

## Workflow

### Step 1: Research the jurisdiction

Before writing any code, research the jurisdiction thoroughly. You MUST use web search to find and verify:

1. **Regulator name and abbreviation** -- the official body that regulates gambling
2. **Primary legislation** -- the gambling act, statute, or administrative code
3. **Minimum gambling age** -- and whether it differs by gambling type
4. **Legal verticals** -- which of these exist: land-based casino, online casino, sports betting
5. **Helpline** -- official problem gambling helpline name and number, website, hours, languages
6. **Self-exclusion scheme** -- name, durations, scope (property vs. statewide vs. national), enrollment method, reinstatement rules
7. **Advertising rules** -- specific restrictions, required disclosures, channel-specific rules, mandatory messaging
8. **Staff training requirements** -- mandatory certifications or training programs
9. **Signage requirements** -- specific venue signage mandates
10. **Player protection tools** -- deposit limits, session limits, activity statements, cool-off periods
11. **AML/KYC requirements** -- reporting thresholds, player-facing impact
12. **Age verification** -- methods, documents accepted, reverification
13. **Licensing model** -- monopoly vs. competitive, license types
14. **Mandatory messaging** -- any word-for-word required statements and where they must appear
15. **Existing player education programs** -- programs like GameSense (BC) that {{PROGRAM_NAME}} would work alongside

For EACH item, find the specific regulatory reference (section, article, or code number) and a publicly accessible URL to the source document.

**Primary source rule:** All research must be grounded in primary sources — legislation, regulations, regulator-published standards, government gazettes, or official industry codes of practice administered by a recognized standards body. You may use secondary sources (law firm summaries, news articles, industry publications) to identify where the rules are maintained, but every fact that enters a citation or the compliance module must be verified against the primary source. Never cite a blog post, news article, or law firm summary as the source — trace back to the legislation, regulation, or official standard it references.

### Step 2: Classify and present findings

Before editing any files, classify the jurisdiction and present your findings.

#### 2a. Regulatory approach classification

Classify the jurisdiction's regulatory approach. This determines how the module is structured:

| Approach | Characteristics | Module emphasis | Examples |
|----------|----------------|-----------------|----------|
| **Principles-based** | Few broad rules, case-by-case enforcement, operator discretion expected | "Practical interpretation" sections explaining how broad principles apply; "What's NOT prohibited" tables showing where operators have flexibility; fewer but deeper citations | Nevada (Reg 5.011(1)(d) — five principles) |
| **Prescriptive** | Many specific numbered standards, enumerated prohibitions, detailed per-item requirements | Standard-by-standard enumeration; detailed requirement tables with specific section refs; advertising-rules.md almost always needed | Ontario (AGCO Registrar's Standards — 25+ numbered standards) |
| **Hybrid** | Mix of broad principles and specific rules, often with an industry code layered on top | Both interpretive and enumerative sections; clear separation of which layer is principles vs. prescriptive | UK (LCCP licence conditions + ASA/CAP advertising codes) |

State your classification and explain why, citing the evidence from your research.

#### 2b. Vertical coverage

Identify which verticals exist and whether the jurisdiction has **separate regulatory regimes** for different verticals. This is critical for structuring the module:

| Pattern | Description | Module impact | Examples |
|---------|-------------|---------------|----------|
| **Single regime** | One set of rules covers all verticals | Sections don't need vertical splits | Most jurisdictions with only land-based gambling |
| **Separate regimes** | Different regulations for land-based vs. interactive | Player protection, self-exclusion, messaging, and age verification sections split by vertical | Nevada (Reg 5 vs. Reg 5A), Ontario (Standards for Gaming vs. Standards for Internet Gaming) |
| **Layered regimes** | Base rules plus additional rules for specific verticals | Base requirements documented first, then vertical-specific additions | UK (LCCP base + remote-specific codes) |

State the pattern and list which verticals are covered by which regulatory instrument.

#### 2c. Summary tables

Present a summary table of findings per theme:

| Theme | Regulatory Reference | Description | Verticals | Source URL |
|-------|---------------------|-------------|-----------|------------|

Present a jurisdiction profile summary:

| Field | Value |
|-------|-------|
| **Country** | |
| **Sub-jurisdiction** | |
| **Regulator** | |
| **Legislation** | |
| **Regulatory approach** | (principles-based / prescriptive / hybrid) |
| **Regulatory model** | (monopoly / competitive / mixed) |
| **Vertical pattern** | (single regime / separate regimes / layered regimes) |
| **Legal age** | |
| **Helpline** | (name, number, website) |
| **Self-exclusion** | (program name, durations, scope) |
| **Mandatory messaging** | (exact wording, or "none — obligation-based") |
| **Online gambling** | (legal / not legal / details) |
| **Existing RG program** | (name, or "none") |

Ask the user to confirm or correct before proceeding.

### Step 3: Edit `hub/compliance.html`

There are **6 data structures** that must be updated. All are in `hub/compliance.html`:

#### 3a. SOURCES object (~line 1026)
Add source URL entries. Key format: `'{reg-key}-{doc}'`
```javascript
var SOURCES = {
  // ... existing entries ...
  'newreg-act':   'https://example.gov/gambling-act.pdf',
  'newreg-rg':    'https://example.gov/responsible-gambling',
};
```

For jurisdictions with separate regimes, use separate source keys for each regulatory instrument (e.g., `ngc-reg5` and `ngc-reg5a` for Nevada's two regulation sets).

#### 3b. LAND_BASED_ONLY / NO_ONLINE_SPORTS (~line 1058)
If the jurisdiction has NO legal online gambling or sports betting:
```javascript
var LAND_BASED_ONLY = { ca: true, dicj: true, gra_sg: true, newreg: true };
var NO_ONLINE_SPORTS = {
  // ... existing entries ...
  newreg: 'Explanation of why online/sports are not available.'
};
```

#### 3c. THEMES array (~line 1070)
For EACH of the 10 themes, evaluate whether this jurisdiction has a relevant requirement. Add the reg key to the `regs` array AND add a citation object:
```javascript
regs: ['ngc','njdge','newreg', ...],
citations: [
  // ... existing citations ...
  { reg:'newreg', label:'New Regulator', ref:'Act Section 42', src:'newreg-act', verticals:['casino','online','sports'],
    text:'Brief, factual description of the requirement. Not a quote unless it is verbatim from the source.' },
]
```

The 10 themes are:
1. **Game Information & Odds Disclosure** -- rules about providing game info to patrons
2. **Responsible Gambling Messaging** -- RG messaging/advertising content requirements
3. **Helpline & Crisis Support** -- helpline display mandates
4. **Self-Exclusion Program Communications** -- self-exclusion scheme requirements
5. **Limit-Setting & Player Controls** -- deposit/loss/time limits
6. **Advertising Compliance** -- advertising restrictions and approval rules
7. **Age Restriction Display** -- minimum age requirements
8. **Venue & Environmental Signage** -- physical signage mandates
9. **Staff Training & Customer Interaction** -- training/certification requirements
10. **Activity Statements & Transparency** -- player account info/statement requirements

**Critical rules for citations:**
- `verticals` must only include verticals that legally exist in the jurisdiction
- `text` must be a factual description, NOT a fake quote. Do not put text in quotation marks unless it is verbatim regulatory language.
- `src` must match a key in the SOURCES object. For separate-regime jurisdictions, point each citation to the correct regime's source (e.g., land-based citations to the land-based regulation, interactive citations to the interactive regulation).
- `ref` must cite a specific section, article, or code number -- not a vague chapter reference
- Only add the jurisdiction to themes where you found a REAL, SPECIFIC regulatory requirement. Do not pad coverage.

#### 3d. JURISDICTIONS object (~line 1422)
Add a jurisdiction detail entry:
```javascript
newreg: {
  name: 'Full Regulator Name',
  jurisdiction: 'State/Province, Country',
  legislation: 'Primary Act; Secondary Regulations',
  unique: 'Key distinguishing features of this jurisdiction\'s RG requirements.',
  verticals: 'Land-based Casino, Online Casino, Sports Betting',
  source: 'https://main-regulator-url.gov'
},
```

#### 3e. Regulator card in HTML (~line 728)
Add a card in the appropriate region's `.reg-grid`. If the jurisdiction was previously "in development" (a `.reg-card-cs`), replace that card:

```html
<div class="reg-card" data-reg="newreg">
  <div class="reg-card-name">Full Regulator Name</div>
  <div class="reg-card-juris">State, Country</div>
  <div class="reg-card-desc">Brief legislation description</div>
</div>
```

Also update the region header count (e.g., "5 regulators + 3 in development" -> "6 regulators + 2 in development").

#### 3f. Region collapse grid height
If the region containing the new card has `style="max-height:0;..."` (collapsed by default), the max-height does not need changing since it is toggled by JavaScript. But if the region is the United States (expanded by default), update the `max-height` value if needed.

### Step 4: Scaffold `jurisdictions/` module

Use the research from Step 1 and the classification from Step 2 to create the full markdown compliance module. The `jurisdictions/_template/` directory contains three scaffold files. Read each template before filling it in.

#### 4a. Determine directory structure

Identify the country slug and sub-jurisdiction slug:
- Country examples: `united-states`, `canada`, `united-kingdom`, `australia`
- Sub-jurisdiction examples: `nevada`, `british-columbia`, `ontario`

Check whether the country directory already exists:
```
jurisdictions/{country}/README.md      -- country overview
jurisdictions/{country}/_brand-{country}.yml  -- country config overrides
```

If the country directory does NOT exist, create it by copying `jurisdictions/_template/jurisdiction-overview.md` to `jurisdictions/{country}/README.md` and filling in the country-level content.

#### 4b. Create sub-jurisdiction compliance module

Create the directory `jurisdictions/{country}/{sub-jurisdiction}/` and populate it:

1. **`README.md`** -- Copy `jurisdictions/_template/compliance-module.md` and fill in ALL sections using the Step 1 research. Apply the regulatory approach and vertical pattern from Step 2:

   **All jurisdictions:**
   - Replace all `{{PLACEHOLDER}}` tokens with researched values
   - Set YAML front matter: `verticals`, `regulatory_approach`, `cultural_profile`, `presentation`
   - Fill in every table (regulatory authority, legal requirements, helpline, etc.)
   - Write on-brand messaging examples (bare compliance vs. {{PROGRAM_NAME}} approach)
   - Map self-exclusion terminology to {{PROGRAM_NAME}} Tier 1/Tier 2 language
   - Include the staff FAQ addition
   - Complete the collateral adaptation table (tag each row with its vertical)
   - Include `_brand.yml` update snippets
   - Fill in the complete compliance checklist
   - Set `last_updated` to today's date and `Next review due` to +3 months

   **Principles-based jurisdictions (e.g., Nevada):**
   - Add a "Practical interpretation" subsection to advertising and messaging explaining how broad principles apply in practice
   - Add a "What's NOT prohibited" table where the jurisdiction gives operators more flexibility than prescriptive regimes
   - Citations reference the broad regulatory provision; the module provides interpretive depth

   **Prescriptive jurisdictions (e.g., Ontario):**
   - Enumerate standards in tables (standard number, title, requirement summary)
   - Where standards are numerous, consider grouping by topic rather than listing sequentially
   - advertising-rules.md is almost always needed — create it with standard-by-standard breakdown

   **Separate-regime jurisdictions (e.g., Nevada with Reg 5 vs. 5A, Ontario with iGaming vs. Gaming standards):**
   - Split "Player protection" into "Player protection — land-based" and "Player protection — interactive"
   - Split "Self-exclusion" into land-based and interactive subsections if the programs differ
   - In "Messaging requirements," distinguish general/venue obligations from digital/account-specific obligations
   - In "Age verification," split land-based (ID check) from interactive (registration + verification flow)
   - In "Collateral adaptation," tag each row with its applicable vertical
   - In "Compliance checklist," separate land-based and interactive items so operators can skip irrelevant sections
   - Mark skippable sections clearly: *"Skip this section if your deployment is [land-based/interactive]-only."*

   **Single-regime jurisdictions:**
   - Use the template sections as-is without splitting by vertical
   - Collapse the two player protection sections into one

2. **`advertising-rules.md`** -- If the jurisdiction has complex advertising requirements (multi-layer rules, channel-specific restrictions, mandatory disclosures), create a detailed advertising reference. Follow the pattern of `jurisdictions/united-states/nevada/advertising-rules.md`. Include:
   - Regulatory framework overview
   - Channel-by-channel rules (broadcast, digital, print, direct, in-venue, sponsorship)
   - Prohibited content table
   - Required disclosures table
   - {{PROGRAM_NAME}} content compliance matrix
   - On-brand disclosure integration examples

   If the jurisdiction's advertising rules are simple (few restrictions, no mandatory disclosures beyond age/helpline), skip this file and cover advertising adequately in the README.

#### 4c. Update country-level files

1. **Country README** (`jurisdictions/{country}/README.md`):
   - Add the new sub-jurisdiction to the sub-jurisdictions table
   - Update module status from "Planned" to "Complete"
   - Add helpline entry if the sub-jurisdiction has its own

2. **Country brand config** (`jurisdictions/{country}/_brand-{country}.yml`):
   - Add helpline sub-entry for the new sub-jurisdiction
   - Add legal age entry
   - Add mandatory messaging entry if applicable (note the obligation type)

#### 4d. Update jurisdictions index

Update `jurisdictions/README.md`:
- Add the new sub-jurisdiction to the "Available jurisdictions" table with status "Complete"

### Step 5: Validate

After all edits, run this validation for compliance.html:

```python
python3 -c "
import re
content = open('hub/compliance.html').read()
sources = set(re.findall(r\"'([^']+)'\s*:\", content[content.index('var SOURCES'):content.index('};', content.index('var SOURCES'))]))
refs = set(re.findall(r\"src:'([^']+)'\", content))
missing = refs - sources
if missing: print('MISSING source keys:', missing)
else: print('All source keys valid.')
themes = content[content.index('var THEMES = ['):content.index('];', content.index('var THEMES = ['))+2]
for block in re.split(r'/\* ------- THEME \d+:', themes)[1:]:
    title = re.search(r\"title: '([^']+)'\", block)
    regs = set(re.findall(r\"'([^']+)'\", re.search(r'regs: \[([^\]]+)\]', block).group(1)))
    citation_regs = set(re.findall(r\"reg:'([^']+)'\", block))
    if regs != citation_regs:
        print(f'{title.group(1)}: regs mismatch - in regs not cited: {regs-citation_regs}, cited not in regs: {citation_regs-regs}')
print('Validation complete.')
"
```

Then validate the jurisdiction module:

```python
python3 -c "
import os, sys
country = '{{COUNTRY_SLUG}}'
sub = '{{SUB_JURISDICTION_SLUG}}'
base = f'jurisdictions/{country}/{sub}'
files = [f'{base}/README.md']
for f in files:
    if not os.path.exists(f):
        print(f'MISSING: {f}')
    else:
        content = open(f).read()
        placeholders = [m for m in __import__('re').findall(r'\{\{[A-Z_]+\}\}', content) if m not in ['{{PROGRAM_NAME}}', '{{HELPLINE_NUMBER}}', '{{MIN_AGE}}', '{{MANDATORY_STATEMENT}}']]
        if placeholders:
            print(f'UNFILLED placeholders in {f}: {placeholders}')
        else:
            print(f'OK: {f}')
# Check index table
idx = open('jurisdictions/README.md').read()
if sub.replace('-', ' ') not in idx.lower() and sub not in idx:
    print(f'WARNING: {sub} not found in jurisdictions/README.md table')
else:
    print('OK: jurisdictions/README.md updated')
print('Module validation complete.')
"
```

### Step 6: Copy to preview and test

```bash
cp hub/compliance.html /tmp/playbook-preview/tools/playbook/compliance.html
```

Then instruct the user to:
- Select ONLY the new jurisdiction and verify themes appear
- Toggle each vertical and verify filtering
- Click "View source" links to confirm they open real documents
- Expand the jurisdiction detail card
- Review the jurisdiction module at `jurisdictions/{country}/{sub-jurisdiction}/README.md`

## Quality Standards

- **No fabricated citations.** If you cannot find a specific regulatory reference for a theme, do NOT add that jurisdiction to that theme. It is better to have 5 honest themes than 10 padded ones.
- **No AI-paraphrased quotes.** Text in the `text` field should be a factual description of the requirement, not text in quotation marks pretending to be regulatory language.
- **Primary sources only.** Every SOURCES entry and every `ref` in a citation must point to a primary source: legislation, regulation, regulator-published standards, or an official industry code of practice. Secondary sources (law firm articles, news, blogs) may be used during research to locate the rules, but must never appear as a citation source. Trace every fact back to the authoritative document.
- **Verify every URL.** Use curl or web fetch to confirm source URLs return 200 and point to the correct document.
- **Check vertical accuracy.** If a jurisdiction does not have legal online gambling, never assign `'online'` to a citation's verticals array.
- **Use established naming patterns.** Source keys follow `{reg}-{doc}` format. Reg keys are short lowercase identifiers.
- **Follow existing module patterns.** Match the depth, structure, and voice of existing completed compliance modules. Use the regulatory approach classification to choose the right pattern: Nevada for principles-based, Ontario for prescriptive.
- **Split by vertical where regimes differ.** If research reveals separate regulatory instruments for land-based vs. interactive, the module must reflect this split in player protection, self-exclusion, messaging, age verification, collateral adaptation, and the compliance checklist. Tag sections clearly so operators deploying in only one vertical can skip irrelevant content.
- **Fill every section.** Do not leave template placeholder text in the compliance module. If you lack data for a section, note "Not applicable" or "Data not found — verify with legal counsel" rather than leaving `{{PLACEHOLDER}}` tokens. Mark sections as "N/A — [vertical] not legal in this jurisdiction" where appropriate.
- **Set dates.** Every module must have a `Last verified` date (today) and a `Next review due` date (+3 months).

## Your Task

Add the jurisdiction specified by the user. Follow every step above. Research first, classify the regulatory approach and vertical pattern, present findings, get confirmation, then edit both `hub/compliance.html` and the `jurisdictions/` module.

$ARGUMENTS
