# Union Arena Wiki — Starter Project

A minimal MkDocs Material site, ready to host on GitHub Pages.

## First-time setup

1. **Create a new repo on GitHub** (public), e.g. `union-arena-wiki`. Don't add a README/license there (you already have files).
2. **Upload these files** into the repo. Easiest way if you're not familiar with git:
   - Go to your repo on github.com → "Add file" → "Upload files" → drag in everything from this folder (keep the folder structure).
   - Or, if you have git installed locally:
     ```
     cd union-arena-wiki
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/union-arena-wiki.git
     git push -u origin main
     ```
3. **Turn on GitHub Pages with Actions as the source:**
   - Go to your repo → Settings → Pages
   - Under "Build and deployment" → Source → choose **GitHub Actions**
4. **Edit `mkdocs.yml`**: replace `YOUR-USERNAME` in `site_url` with your actual GitHub username.
5. Push (or upload again) — this triggers the workflow in `.github/workflows/deploy.yml`, which builds and publishes the site automatically.
6. After a minute or two, your site will be live at:
   `https://YOUR-USERNAME.github.io/union-arena-wiki/`

## Editing the site day-to-day

- All content lives in the `docs/` folder as `.md` (Markdown) files.
- Add a new page: create a new `.md` file under `docs/`, then add it to the `nav:` section in `mkdocs.yml` so it shows up in the sidebar.
- Every time you push changes to `main`, the site rebuilds and updates automatically — no manual build step.

## Previewing locally (optional)

If you want to see changes before pushing, install Python, then:
```
pip install mkdocs-material
mkdocs serve
```
This opens a local preview at `http://127.0.0.1:8000`.

## Folder structure

```
union-arena-wiki/
├── mkdocs.yml              # site config + navigation menu
├── docs/
│   ├── index.md            # home page
│   ├── about.md
│   ├── getting-started/
│   │   ├── how-to-play.md
│   │   └── glossary.md
│   └── cards/
│       └── index.md        # card database section (placeholder for now)
└── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
```

## What's next (future versions)

- Searchable/filterable card database (JSON/CSV data + a JS table)
- Community contributions via GitHub pull requests
