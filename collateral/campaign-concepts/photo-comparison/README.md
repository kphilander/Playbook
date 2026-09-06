# Same cover. Three moments.

[Open the comparison](index.html).

Three photographic executions of **“Leave room for the rest.”** use the same
1080 × 1350 composition, Social Club skin, English copy, contact profile and
soft shadow. Only the registered photograph changes. They are recipes for
the existing `campaign-rest` template, rather than separate template families.

| Execution | Photograph | Creative choice | Selected source |
|---|---|---|---|
| A / Joining the table | [Original JPEG](../photography/output/campaign-photo-scenes-20260906/creative-campaign/shared-input/rest-dinner/attempt-2/candidate-1-image-1.jpg) | The pulled-out chair and the friend's greeting make a dinner plan visible. The warm wall gives the headline a quiet setting. | Attempt 2; the first image placed the standing woman's face inside the headline area. |
| B / Before the show | [Original JPEG](../photography/output/campaign-photo-scenes-20260906/creative-campaign/shared-input/rest-show/attempt-1/candidate-1-image-1.jpg) | The open auditorium supplies a specific next destination. Walnut, a curtain and warm light carry the hospitality expression. | Attempt 1; faces sit below the headline and the seats remain visible between them. |
| C / Heading out together | [Original JPEG](../photography/output/campaign-photo-scenes-20260906/creative-campaign/shared-input/rest-night-out/attempt-2/candidate-1-image-1.jpg) | Conversation and the warm restaurant entrance put another plan into the evening. Cooler architecture gives the image a more contemporary setting. | Attempt 2; the first image placed heads too high for the fixed headline. |

These are creative options for the user to compare. No scene has been made
the preferred/default photograph. The earlier terrace photograph, recipe,
saved skin choices and historical poster references are retained.

## Assets and generation

All three selected source JPEGs are **3712 × 4608**. Their **3240 × 4050** PNG
executions are rendered at 3× directly from live HTML/SVG and the original
photo. The selected crop provides approximately 3.41× native density; the
photos are not enlarged to make these exports. There is no raster editing,
upscaling, generated text or baked-in template design.

Generation used the user's authorized **Google Gemini 3 Pro Image** API route
through `lib/google-photography.mjs`, with the credential kept in the process.
Five images were generated: three initial scenes and two targeted framing
revisions. [Shared settings](../photography/round-5/settings.json) requested
4:5 / 4K output with at most two attempts per scene. The unchanged
[photography brief](../photography/art-direction.md) supplies the direction.

Final prompts:

- [Dinner — corrected framing](../photography/round-5/rest-dinner-revision-2.json)
- [Before the show](../photography/round-5/rest-show.json)
- [Heading out — corrected framing](../photography/round-5/rest-night-out-revision-2.json)

The [initial dinner](../photography/round-5/rest-dinner.json) and
[initial street](../photography/round-5/rest-night-out.json) prompts and all
attempt records are retained under
`../photography/output/campaign-photo-scenes-20260906/`. Each attempt has its
exact request, image hash, settings hash and sanitized response. Opaque
continuation signatures are omitted from response files.

## Reuse and verification

The asset registry contains `rest-dinner`, `rest-show` and `rest-night-out`,
each with source dimensions, alt text, crop coordinates and provenance.
The studio's `asset` query parameter accepts only an asset registered for
the selected template's slot and resets the previous crop when the link
selects a different photograph. Reloading the same photo preserves the user's
crop edits. The photograph can then be replaced and the CSS skin
changed through the existing controls. Portable HTML and recipe exports use
the same platform.

Run `npm run build:photo-comparison` to render the three PNGs, three recipes,
nine live HTML treatments and review page. The build verifies identical
comparison recipes except for the asset, stable article markup across the
three CSS skins, fit/contrast, source dimensions and native 3× photo detail.
Run `npm run check:photo-comparison` to exercise the review, saved choices,
studio links and raster decoding. The generated reports sit beside this file.

The scene-choice key is `campaign-rest-photo-scene` inside the existing
`playbook-campaign-preferences-v1` browser record. It is independent of the
earlier template/skin choices. The artwork retains the same English
contact-and-age context; these photographs do not change market requirements.
