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

Every push to the `testing` branch that changes `docs_src` rebuilds and publishes the site with
GitHub Actions.

## Layout

| Path | Contents |
| --- | --- |
| `docs_src/conf.py` | Sphinx configuration, including the driver version shown on the home page |
| `docs_src/index.md` | Home page and table of contents |
| `docs_src/setup/`, `using/`, `reference/`, `testing/` | Pages |
| `docs_src/images/` | Screenshots |
| `docs_src/_static/` | Custom CSS, and a script that redirects links to the old single-page docs |
| `docs_src/SCREENSHOTS.md` | Screenshot inventory and refresh shot list (not published) |
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
