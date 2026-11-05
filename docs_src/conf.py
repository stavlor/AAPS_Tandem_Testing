# Sphinx configuration for the AAPS Tandem Mobi driver documentation.
#
# Build locally:
#   pip install -r docs_src/requirements.txt
#   sphinx-build -b html docs_src _build/html
#
# Pages are written in MyST Markdown (.md), the same format used by the
# official AndroidAPS documentation, so pages can be moved upstream later
# with minimal changes.

from datetime import date

# -- Project information -----------------------------------------------------

project = "AAPS Tandem Mobi Driver"
author = "Andy Rozman (AAPS driver) and James Woglom (PumpX2 library)"
copyright = f"2025-{date.today():%y}, {author}"

# Driver version this documentation describes. Bump with each tagged release.
version = "0.9.x"
release = "0.9.x (Phase 5 / Beta)"

# -- General configuration ---------------------------------------------------

extensions = [
    "myst_parser",
    "sphinx.ext.autosectionlabel",
]

source_suffix = {".md": "markdown"}
root_doc = "index"
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store", "SCREENSHOTS.md", "TODO.md", "README.md"]

# Allow :ref:`page:Section title` cross-references without explicit labels.
autosectionlabel_prefix_document = True
autosectionlabel_maxdepth = 3

myst_enable_extensions = [
    "colon_fence",   # ::: fences for directives
    "deflist",
    "attrs_inline",  # {width=...} on inline images
    "attrs_block",
    "substitution",
]
myst_heading_anchors = 3

myst_substitutions = {
    "controlx2_version": "1.0.0-20251224",
    "version": version,
}

# Treat broken internal references as errors during CI (sphinx-build -W).
nitpicky = False

# -- HTML output -------------------------------------------------------------

html_theme = "sphinx_rtd_theme"
html_title = "AAPS Tandem Mobi Driver"
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_js_files = ["legacy-anchors.js"]
html_last_updated_fmt = "%B %d, %Y"
html_show_sourcelink = False

html_theme_options = {
    "navigation_depth": 3,
    "collapse_navigation": False,
    "style_external_links": True,
}

html_context = {
    "display_github": True,
    "github_user": "andyrozman",
    "github_repo": "AAPS_Tandem_Testing",
    "github_version": "testing",
    "conf_py_path": "/docs_src/",
}
