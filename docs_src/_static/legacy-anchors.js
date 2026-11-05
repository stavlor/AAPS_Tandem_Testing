// The old documentation was a single index.html page. Existing links such as
// .../AAPS_Tandem_Testing/#connection-setup point at sections that now live on
// their own pages. Redirect those old anchors to the new location.
(function () {
  var map = {
    "t-mobi-documentation": "index.html",
    "powering-on-mobi": "setup/powering-on.html",
    "connection-setup": "setup/connection.html",
    "a-using-shared-connection": "setup/connection.html#a-shared-connection-with-controlx2",
    "b-using-only-aaps": "setup/connection.html#b-pairing-with-aaps-only",
    "overview": "using/overview-tab.html",
    "configuration-options": "using/preferences.html",
    "mobi-details": "reference/how-it-works.html",
    "mobi-details-limitations": "reference/how-it-works.html#mobi-specific-limitations",
    "mobi-details-startup-sequence": "reference/how-it-works.html#startup-sequence",
    "mobi-details-pump-notifications": "reference/how-it-works.html#pump-notifications",
    "mobi-details-events": "reference/how-it-works.html#events",
    "mobi-details-pump-refresh": "reference/how-it-works.html#data-refresh-schedule",
    "mobi-details-bolus": "reference/how-it-works.html#bolus",
    "actions": "using/overview-tab.html#buttons",
    "actions-refresh": "using/overview-tab.html#buttons",
    "data-button": "using/data.html",
    "data-notifiction": "using/data.html#notifications",
    "data-events": "using/data.html#events",
    "data-history": "using/data.html#pump-history",
    "settings-button": "using/actions.html",
    "currently-implemented-functionalities": "reference/features.html",
    "troubleshooting": "troubleshooting.html"
  };
  function redirect() {
    var hash = window.location.hash.replace(/^#/, "");
    if (!hash || !map[hash]) return;
    // Only redirect from the site root / index page.
    var path = window.location.pathname;
    if (!/(\/|index\.html)$/.test(path)) return;
    if (document.getElementById(hash)) return; // anchor exists on this page
    var base = path.replace(/index\.html$/, "");
    window.location.replace(base + map[hash]);
  }
  // On load (a link from elsewhere), and when only the hash changes
  // (an old link followed while already on the home page).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", redirect);
  } else {
    redirect();
  }
  window.addEventListener("hashchange", redirect);
})();
