/* <![CDATA[ */
var gform;
gform ||
  (document.addEventListener("gform_main_scripts_loaded", function () {
    gform.scriptsLoaded = !0;
  }),
  window.addEventListener("DOMContentLoaded", function () {
    gform.domLoaded = !0;
  }),
  (gform = {
    domLoaded: !1,
    scriptsLoaded: !1,
    initializeOnLoaded: function (o) {
      gform.domLoaded && gform.scriptsLoaded
        ? o()
        : !gform.domLoaded && gform.scriptsLoaded
        ? window.addEventListener("DOMContentLoaded", o)
        : document.addEventListener("gform_main_scripts_loaded", o);
    },
    hooks: { action: {}, filter: {} },
    addAction: function (o, n, r, t) {
      gform.addHook("action", o, n, r, t);
    },
    addFilter: function (o, n, r, t) {
      gform.addHook("filter", o, n, r, t);
    },
    doAction: function (o) {
      gform.doHook("action", o, arguments);
    },
    applyFilters: function (o) {
      return gform.doHook("filter", o, arguments);
    },
    removeAction: function (o, n) {
      gform.removeHook("action", o, n);
    },
    removeFilter: function (o, n, r) {
      gform.removeHook("filter", o, n, r);
    },
    addHook: function (o, n, r, t, i) {
      null == gform.hooks[o][n] && (gform.hooks[o][n] = []);
      var e = gform.hooks[o][n];
      null == i && (i = n + "_" + e.length),
        gform.hooks[o][n].push({
          tag: i,
          callable: r,
          priority: (t = null == t ? 10 : t),
        });
    },
    doHook: function (n, o, r) {
      var t;
      if (
        ((r = Array.prototype.slice.call(r, 1)),
        null != gform.hooks[n][o] &&
          ((o = gform.hooks[n][o]).sort(function (o, n) {
            return o.priority - n.priority;
          }),
          o.forEach(function (o) {
            "function" != typeof (t = o.callable) && (t = window[t]),
              "action" == n ? t.apply(null, r) : (r[0] = t.apply(null, r));
          })),
        "filter" == n)
      )
        return r[0];
    },
    removeHook: function (o, n, t, i) {
      var r;
      null != gform.hooks[o][n] &&
        ((r = (r = gform.hooks[o][n]).filter(function (o, n, r) {
          return !!(
            (null != i && i != o.tag) ||
            (null != t && t != o.priority)
          );
        })),
        (gform.hooks[o][n] = r));
    },
  }));
/* ]]> */
