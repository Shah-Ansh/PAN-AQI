# PAN-AQI — Project Landing Page

This repository contains a lightweight, conference-ready landing page for "PAN-AQI: A Panoramic Dataset and Framework for Urban Air Quality Estimation".

The site is adapted from the Nerfies template and tailored to showcase dataset artifacts and figures for a conference attachment. It intentionally keeps the paper and BibTeX out of the public page while providing clear places to add assets for reviewers and collaborators.

## Quick links

- Site entry: `index.html` (root)
- Placeholder images: `resources/images/`
- (Optional) Paper: `resources/paper/` — keep private until submission

## Local preview (recommended)

To preview the site locally (serves files over HTTP so PDF embeds and image loads work reliably):

```bash
# from project root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Alternatively, use any static file server or deploy to GitHub Pages for a live preview.

## Where to add your assets

- Put dataset images / figures (PNG, JPG, SVG) into `resources/images/`. Use descriptive filenames (no spaces), e.g. `architecture.png`.
- Put any PDFs (e.g. full paper, extended figures) into `resources/paper/`. Link to them from `index.html` or the Resources section. Note: browsers handle PDFs differently when opened from `file://`; use the local server above.
- Update the dataset link (the "Sample Dataset" button) in `index.html` when you upload the dataset to a hosting service (GitHub, Zenodo, OSF, etc.).

## Styling and behavior notes (for maintainers)

- Main stylesheet: `static/css/index.css` — contains theme variables and layout rules.
- Small site JS: `static/js/main.js` — implements scroll progress, back-to-top, TOC highlighting, and small helpers.
- Replace or add images in `resources/images/` and they will automatically appear where referenced in `index.html`.

## Deployment

Recommended for reviewers and public hosting:

1. Push to a Git branch (e.g. `main`).
2. Enable GitHub Pages from repository settings (serve from the `main` branch or `gh-pages` branch).

Or deploy via any static hosting platform (Netlify, Vercel, Surge) by pointing to this repository's build directory (root).

## Citation & Credits

Template credit:

- Nerfies GitHub Pages template — https://github.com/nerfies/nerfies.github.io

Please include the above link in any acknowledgements for the site template.

Suggested citation for this page (if needed):

```
PAN-AQI: A Panoramic Dataset and Framework for Urban Air Quality Estimation — Project landing page derived from Nerfies template.
```

## Privacy & submission notes

- Because this project includes a paper in preparation/submission, do NOT publish the paper PDF publicly until after submission acceptance (or when allowed by your submission policy). Keep the PDF in `resources/paper/` locally or on a private server and only link it after approval.

## Quick edits you may want to make

- Update authors/affiliations in `index.html` (search for `.publication-authors` / `.publication-affiliation`).
- Update the dataset external link in the hero (`Sample Dataset` button).
- Replace placeholder images in `resources/images/` with final figures.

## Contact / Maintainers

Maintained by: PAN-AQI authors (update `index.html` to reflect contact info).

---
This README is intentionally concise so you can push changes quickly — tell me if you want a longer contributor guide, CI/deploy steps, or a LICENSE file added.# Nerfies

This is the repository that contains source code for the [Nerfies website](https://nerfies.github.io).

If you find Nerfies useful for your work please cite:
```
@article{park2021nerfies
  author    = {Park, Keunhong and Sinha, Utkarsh and Barron, Jonathan T. and Bouaziz, Sofien and Goldman, Dan B and Seitz, Steven M. and Martin-Brualla, Ricardo},
  title     = {Nerfies: Deformable Neural Radiance Fields},
  journal   = {ICCV},
  year      = {2021},
}
```

# Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
