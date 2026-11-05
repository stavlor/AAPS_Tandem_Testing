# Contributing to these docs

The documentation is built with [Sphinx](https://www.sphinx-doc.org/) from
[MyST Markdown](https://myst-parser.readthedocs.io/) files in the `docs_src` folder of the
[AAPS_Tandem_Testing repository](https://github.com/andyrozman/AAPS_Tandem_Testing). MyST
Markdown is also used by the official AndroidAPS documentation, which makes it easier to move
these pages upstream when the driver is released.

## Building locally

```bash
pip install -r docs_src/requirements.txt
sphinx-build -W --keep-going -b html docs_src _build/html
```

Open `_build/html/index.html` in a browser. For automatic rebuilds while editing, install
`sphinx-autobuild` and run `sphinx-autobuild docs_src _build/html`.

## Publishing

The same sources publish to two places:

GitHub Pages
: Every push to the `testing` branch that changes `docs_src` rebuilds and publishes the site with
  GitHub Actions (`.github/workflows/docs.yml`). Pull requests are built but not published.

Read the Docs
: Configured by `.readthedocs.yaml` at the repo root. Read the Docs rebuilds on every push to the
  branches it tracks, and can build a preview of each pull request.

Both builds fail on any Sphinx warning, so a broken link or missing image never reaches the
published site.

### Previewing on your fork

The GitHub Pages workflow publishes to whichever repo runs it, so a fork gets its own preview
site at `https://<your-user>.github.io/AAPS_Tandem_Testing/`, with "Edit on GitHub" links pointing
at the fork. To set it up, in your fork:

1. **Actions** tab: enable workflows.
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
3. Push to `testing`, or run the **Documentation** workflow by hand from the Actions tab. To
   publish from another branch, allow it in **Settings → Environments → github-pages**.

## Layout

| Path | Contents |
| --- | --- |
| `docs_src/conf.py` | Sphinx configuration, including the driver version shown on the home page |
| `docs_src/index.md` | Home page and table of contents |
| `docs_src/setup/`, `using/`, `reference/`, `testing/` | Pages |
| `docs_src/images/` | Screenshots |
| `docs_src/_static/` | Custom CSS, and a script that redirects links to the old single-page docs |
| `docs_src/SCREENSHOTS.md` | Screenshot inventory and refresh shot list (not published) |
| `docs_src/TODO.md` | Screenshot checklist and open questions (not published) |
| `.readthedocs.yaml` | Read the Docs build configuration |
| `.github/workflows/docs.yml` | GitHub Pages build and deploy |
| `docs_src/tools/screenshots.py` | Capture, redact and resize screenshots |

## Screenshots

Phone screenshots go in `docs_src/images/`, named `v4_<screen>.jpg` for the current AAPS 4 UI.
Always redact the pump serial number and Bluetooth address.

A single screenshot beside text:

````md
:::{figure} ../images/v4_pump_info.jpg
:class: screenshot
:align: right

Pump Info screen.
:::
````

A row of screenshots:

````md
:::{container} screens
```{figure} ../images/v4_filltubing_step1.jpg
Step 1: before you start.
```
```{figure} ../images/v4_filltubing_step2a.jpg
Step 2: hold the pump button to fill.
```
:::
````

See `docs_src/SCREENSHOTS.md` for the list of screenshots that still need to be retaken.
