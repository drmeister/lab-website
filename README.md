# Spiroligomer Nanostructures Lab — website

A simple static website (plain HTML + one CSS file, no build step). Anyone who can
edit a text file can update it. Hosted for free on GitHub Pages.

```
lab-webpage/
├── index.html        Home
├── research.html     Research (4 areas + publications)
├── people.html       People (PI, members, alumni)
├── news.html         News (newest first)
├── css/style.css     All styling — edit variables at the top to reskin
├── assets/
│   ├── figures/      Research figures (drop images here)
│   └── img/          People photos, logo
└── README.md         This file
```

---

## How to keep it up to date

Everything is designed so a routine update is **"edit one file, save, push."** Each
page has clearly commented blocks with `<!-- TODO -->` markers and copy-paste templates.

### Common tasks

| I want to…                | Do this                                                                 |
|---------------------------|-------------------------------------------------------------------------|
| **Post a news item**      | Open `news.html`, copy the "news item" block, paste it at the **top**, edit the date + text. |
| **Add a lab member**      | Open `people.html`, copy a `.person` block, add a photo to `assets/img/`. |
| **Add a publication**     | Open `research.html`, copy a `<li>` in the "Selected publications" list. Numbers renumber automatically. |
| **Add/replace a figure**  | Put the image in `assets/figures/`, then point the matching `<img src="…">` at it. |
| **Change wording**        | Find the `<!-- TODO -->` comment in the relevant page and edit the text. |
| **Change the whole look** | Edit the color/spacing variables at the top of `css/style.css`.         |

Missing figures **hide themselves automatically** (the `onerror` on each `<img>`), so
the site always looks clean even before you've added every image.

### Figures you already have
`~/work/website/` has lab renderings that would work well here — e.g.
`spiroligomer.png`, `symba.png`, `macrocycle-*`. Copy the ones you want into
`assets/figures/` and rename them to match the `src` in the HTML (or update the `src`).

### Suggested cadence
- **News:** whenever something happens (paper, award, new member, talk). 2 minutes.
- **People:** start of each semester.
- **Publications:** when a paper is accepted.
- A good habit: make website updates part of the same moment you announce lab news.

---

## Editing options (pick what's comfortable)

1. **On GitHub in the browser** — click a file → pencil icon → edit → "Commit changes."
   No tools needed; good for quick text/news edits.
2. **Locally with any editor** — edit files, then:
   ```sh
   git add -A && git commit -m "Update news" && git push
   ```
3. **Ask Claude** — "add a news item about our new Nature paper" or "add postdoc Jane Doe
   to the people page" and it edits the files for you.

---

## Preview locally before publishing

From this folder:
```sh
python3 -m http.server 8000
```
Then open <http://localhost:8000> in a browser. Stop with Ctrl-C.

---

## Publishing to GitHub Pages (one-time setup)

1. Create a free account at <https://github.com> if you don't have one.
2. Create a new repository, e.g. `lab-webpage` (public).
3. From this folder, push the files:
   ```sh
   cd ~/work/lab-webpage
   git init
   git add -A
   git commit -m "Initial lab website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/lab-webpage.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Build and deployment**. Source = **Deploy from a
   branch**, Branch = `main`, Folder = `/ (root)`. Save.
5. Wait ~1 minute. Your site is live at `https://USERNAME.github.io/lab-webpage/`.
   That Settings → Pages panel shows the live link.

Every `git push` after that updates the live site automatically.

### Custom / Temple domain (optional)
Ask Temple IT whether they'll host you under a `*.temple.edu` subdomain — it looks more
official. They point a DNS record at GitHub, and you enter the domain under
**Settings → Pages → Custom domain**. GitHub provides free HTTPS.

---

## Notes
- No build step, no dependencies, nothing to break. The files you see are exactly what
  ships.
- The nav bar and footer are copied into each page. If you add a page, copy those two
  blocks and add a link in the nav of every page.
# lab-website
