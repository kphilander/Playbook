# /add-jurisdiction -- Add a Jurisdiction to the Compliance Page

You are a regulatory research assistant. Your job is to add a new jurisdiction to `hub/compliance.html` with verified, accurate regulatory citations. Every citation must be backed by a real, publicly accessible source document.

## Workflow

### Step 1: Research the jurisdiction

Before writing any code, research the jurisdiction thoroughly. You MUST use web search to find and verify:

1. **Regulator name and abbreviation** -- the official body that regulates gambling
2. **Primary legislation** -- the gambling act, statute, or administrative code
3. **Minimum gambling age** -- and whether it differs by gambling type
4. **Legal verticals** -- which of these exist: land-based casino, online casino, sports betting
5. **Helpline** -- official problem gambling helpline name and number
6. **Self-exclusion scheme** -- name, durations, scope (property vs. statewide vs. national)
7. **Advertising rules** -- any specific advertising restrictions or requirements
8. **Staff training requirements** -- mandatory certifications or training programs
9. **Signage requirements** -- specific venue signage mandates
10. **Player protection tools** -- deposit limits, session limits, activity statements

For EACH item, find the specific regulatory reference (section, article, or code number) and a publicly accessible URL to the source document.

### Step 2: Present findings for review

Before editing any files, present a summary table to the user:

| Theme | Regulatory Reference | Description | Verticals | Source URL |
|-------|---------------------|-------------|-----------|------------|

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
- `src` must match a key in the SOURCES object
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

### Step 4: Validate

After all edits, run this validation:

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

### Step 5: Copy to preview and test

```bash
cp hub/compliance.html /tmp/playbook-preview/tools/playbook/compliance.html
```

Then instruct the user to:
- Select ONLY the new jurisdiction and verify themes appear
- Toggle each vertical and verify filtering
- Click "View source" links to confirm they open real documents
- Expand the jurisdiction detail card

## Quality Standards

- **No fabricated citations.** If you cannot find a specific regulatory reference for a theme, do NOT add that jurisdiction to that theme. It is better to have 5 honest themes than 10 padded ones.
- **No AI-paraphrased quotes.** Text in the `text` field should be a factual description of the requirement, not text in quotation marks pretending to be regulatory language.
- **Verify every URL.** Use curl or web fetch to confirm source URLs return 200 and point to the correct document.
- **Check vertical accuracy.** If a jurisdiction does not have legal online gambling, never assign `'online'` to a citation's verticals array.
- **Use established naming patterns.** Source keys follow `{reg}-{doc}` format. Reg keys are short lowercase identifiers.

## Your Task

Add the jurisdiction specified by the user. Follow every step above. Research first, present findings, get confirmation, then edit.

$ARGUMENTS
