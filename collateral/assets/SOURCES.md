# Hero video sources

The four hero background videos in this directory are stock clips from
Pixabay, downloaded under the Pixabay Content License (free for commercial
and non-commercial use; attribution not required but provided here as a
matter of practice).

| File | Source | What it shows |
|---|---|---|
| `hero-bg-1.mp4` | <https://pixabay.com/videos/las-vegas-usa-america-vegas-nevada-132638/> | Las Vegas — generic / default |
| `hero-bg-jp.mp4` | <https://pixabay.com/videos/downtown-night-waterway-ship-235285/> | Osaka — paired with the JP locale |
| `hero-bg-mo.mp4` | <https://pixabay.com/videos/sunset-cityscape-night-sky-macau-187670/> | Macau — paired with the MO locale |
| `hero-bg-ae.mp4` | <https://pixabay.com/videos/dubai-city-country-building-road-111239/> | Dubai — paired with the AE locale |

## License

Pixabay Content License — <https://pixabay.com/service/license-summary/>

> Content on Pixabay is made available to you on the following terms
> (Pixabay License). Under the Pixabay License you are granted an
> irrevocable, worldwide, non-exclusive and royalty free right to use,
> download, copy, modify or adapt the Content for commercial and
> non-commercial purposes. Attribution of the artist or Pixabay is not
> required but is always appreciated.

## Encoding

Each clip was re-encoded for web delivery:

```bash
ffmpeg -i input.mp4 \
  -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -crf 28 -preset slow \
  -movflags +faststart -an \
  output.mp4
```

This produces 1280×720 H.264 at CRF 28, faststart (so the browser can
decode the first frame after downloading the first ~5 KB), audio stripped
(hero is muted anyway). Combined size of the four clips is ~22 MB.

The source URL and Pixabay license are also embedded in each MP4 as
container metadata (`comment` and `copyright` atoms). Inspect with
`ffprobe -show_format <file>` or any media player that reads tags.

---

# Hero photo source

| File | Source | What it shows |
|---|---|---|
| `rg-hero-photo.jpg` | AI-generated (Google `gemini-3-pro-image`, 16:9, 2K) | Friends around a lounge table playing a casual card game — default photographic hero for `rg-page.html` |

Art-directed to [`visual-identity/photography/photography.md`](../../visual-identity/photography/photography.md)
(warm cinematic key light, navy shadows, dark negative space top/edges for the
hero overlay). Owned outright — no stock license applies. Generation prompt:

```
A lively, warm group of five diverse friends around a table in a modern lounge in the evening, all mid-laugh, one casually fanning three playing cards for a friendly game while another playfully objects. No chips, no cash, no drinks anywhere. Warm cinematic key light models their faces; the surroundings fall away into deep, dark, softly defocused tones toward the top and edges of the frame — generous dark negative space in the upper half for interface text overlay. Candid editorial lifestyle photograph, full-frame camera, 50mm lens at f/2.8. [full Tier 1 style block — see collateral/render/photos/PROMPTS.md]
```
