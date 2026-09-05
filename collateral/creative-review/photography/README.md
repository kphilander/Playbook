# Photography for the creative refresh

Five new photographs were generated with Google's `gemini-3-pro-image` through the repository's [Google photography command](../../../lib/google-photography.mjs). The credential was read privately from the authorized `playbook-gemini` Keychain item. No credential is stored in this directory.

The direction comes from the main repository's [photography guide](../../../visual-identity/photography/photography.md) and [brand personality](../../../brand-book/02-brand-personality.md): warm, social entertainment; adult friends with agency; deliberate lighting; natural faces and hands; no alcohol or money spectacle. Photos establish the human setting. HTML carries numbers, game diagrams and factual claims.

| Photo | Editorial job | Selection and crop |
|---|---|---|
| Sports friends | Make price and score explanations feel part of the fan experience. | Keep all three friends in the frame; use a separate scoreboard for the calculation. |
| Casino conversation | Give independent-spin myths a relaxed social setting. | Keep the people prominent; distant machines provide context without pretending to illustrate game mechanics. |
| Café plan | Frame budget and session planning as an ordinary choice. | Preserve the conversation, phone and natural daylight; the display is turned away. |
| Slots social | Connect credit value, total bet and pace to the game setting. | Keep both faces; blurred machine details are never used to demonstrate a rule. |
| Birthday friends | Give the meaningful-number myth a recognizable human context. | The wider composition keeps both faces intact in social crops. The production lottery poster also shows the cake. |

[Request files](requests/) contain the exact prompts. [Settings](settings.json) record 4:3 / 2K output and a maximum of two attempts per image. All five images succeeded on the first attempt; no retry was used. The returned files are 2400 × 1792 JPEGs. Each attempt in [output](output/) has a request, sanitized provider metadata, usage, image hash and result record. The shared command's `shared-input` field is an interface value; this is editorial production, not a new model competition.

The HTML concepts link to these source JPEGs directly. [Production uses](production-uses.json) records the four core photo posters that also use them. [Concept metadata](../concepts.json) records each concept's selected photo and original source. Earlier experiment submissions remain unchanged.
