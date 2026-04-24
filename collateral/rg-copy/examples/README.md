# Sample `_brand.yml` files for testing the i18n PoC

Drop any of these into the **Upload _brand.yml** zone inside the "Try your brand"
modal on [rg-page.html](../../rg-page.html). The page will swap copy, layout
direction, fonts, and quiz content based on the `meta.primary_jurisdictions[0]`
value.

| File                                            | Market                 | Result |
|-------------------------------------------------|------------------------|--------|
| [brand-japan.yml](brand-japan.yml)              | `japan`                | Japanese (elder/reserved tone), LTR, Noto Sans JP |
| [brand-macau.yml](brand-macau.yml)              | `macau`                | Simplified Chinese (authority/private tone), LTR, Noto Sans SC |
| [brand-uae.yml](brand-uae.yml)                  | `united-arab-emirates` | Arabic (authority/understated tone), **RTL**, Noto Sans Arabic |
| [brand-fallthrough.yml](brand-fallthrough.yml)  | `united-kingdom`       | No-op fallback. Stays English. Confirms the fall-through path. |

What translates when you drop one of these:
- Nav + helpline strip + hero preamble + section headings + tool cards + break
  cards + support cards + footer
- Glossary tooltips (hover any defined term in the page body)
- Hero quiz question + options + feedback (from the per-language `api/myths.<lang>.json`)
- Myth walkthrough (5-question quiz, score summary)
- Progress-ring milestones
- Odds-comparison insight sentence when you select two game chips

What stays English in every language (by design):
- Game chip labels ("Slots", "Blackjack", ...) — these are proper nouns in
  international casino branding and stay Latin.
- Demo-mode banner + hotspot overlays — those explain how the Playbook system
  works to operators, kept English as preview tooling.
- The "Try your brand" modal itself.

**Combined upload tip.** If you upload `brand-inject.css` (from the Playbook
configurator at `/tools/playbook/configurator/`) *alongside* one of these
YAMLs, the `{{PROGRAM_NAME}}`, `{{ORGANIZATION}}`, `{{MIN_AGE}}`, etc. tokens
will resolve from the CSS — so the Arabic footer will read e.g.
`21+ فقط. © <your org> · <your website>`. The two uploads are independent:
CSS controls visuals + operator strings, YAML controls language + RTL.

**Reset.** Click the Reset button in the TYB modal to return everything
(language, CSS overrides, font, dir, glossary, quizzes) to the English
defaults in a single action.
