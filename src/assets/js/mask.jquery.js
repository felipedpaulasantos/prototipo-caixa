/*! Copyright (c) 2014 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt)
 */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
  a.extend(a.fn, {
    livequery: function (b, c, d) {
      var e = a.livequery.findorcreate(this, b, c, d);
      return e.run(), this
    },
    expire: function (b, c, d) {
      var e = a.livequery.find(this, b, c, d);
      return e && e.stop(), this
    }
  }), a.livequery = function (b, c, d, e) {
    this.selector = c, this.jq = b, this.context = b.context, this.matchedFn = d, this.unmatchedFn = e, this.stopped = !1, this.id = a.livequery.queries.push(this) - 1, d.$lqguid = d.$lqguid || a.livequery.guid++, e && (e.$lqguid = e.$lqguid || a.livequery.guid++)
  }, a.livequery.prototype = {
    run: function () {
      this.stopped = !1, this.jq.find(this.selector).each(a.proxy(function (a, b) {
        this.added(b)
      }, this))
    },
    stop: function () {
      this.jq.find(this.selector).each(a.proxy(function (a, b) {
        this.removed(b)
      }, this)), this.stopped = !0
    },
    matches: function (b) {
      return !this.isStopped() && a(b, this.context).is(this.selector) && this.jq.has(b).length
    },
    added: function (a) {
      this.isStopped() || this.isMatched(a) || (this.markAsMatched(a), this.matchedFn.call(a, a))
    },
    removed: function (a) {
      !this.isStopped() && this.isMatched(a) && (this.removeMatchedMark(a), this.unmatchedFn && this.unmatchedFn.call(a, a))
    },
    getLQArray: function (b) {
      var c = a.data(b, a.livequery.key) || [],
        d = a.inArray(this.id, c);
      return c.index = d, c
    },
    markAsMatched: function (b) {
      var c = this.getLQArray(b); - 1 === c.index && (c.push(this.id), a.data(b, a.livequery.key, c))
    },
    removeMatchedMark: function (b) {
      var c = this.getLQArray(b);
      c.index > -1 && (c.splice(c.index, 1), a.data(b, a.livequery.key, c))
    },
    isMatched: function (a) {
      var b = this.getLQArray(a);
      return -1 !== b.index
    },
    isStopped: function () {
      return this.stopped === !0
    }
  }, a.extend(a.livequery, {
    version: "2.0.0-pre",
    guid: 0,
    queries: [],
    watchAttributes: !0,
    attributeFilter: ["class", "className"],
    setup: !1,
    timeout: null,
    method: "none",
    prepared: !1,
    key: "livequery",
    htcPath: !1,
    prepare: {
      mutationobserver: function () {
        var b = new MutationObserver(a.livequery.handle.mutationobserver);
        b.observe(document, {
          childList: !0,
          attributes: a.livequery.watchAttributes,
          subtree: !0,
          attributeFilter: a.livequery.attributeFilter
        }), a.livequery.prepared = !0
      },
      mutationevent: function () {
        document.addEventListener("DOMNodeInserted", a.livequery.handle.mutationevent, !1), document.addEventListener("DOMNodeRemoved", a.livequery.handle.mutationevent, !1), a.livequery.watchAttributes && document.addEventListener("DOMAttrModified", a.livequery.handle.mutationevent, !1), a.livequery.prepared = !0
      },
      iebehaviors: function () {
        a.livequery.htcPath && (a("head").append("<style>body *{behavior:url(" + a.livequery.htcPath + ")}</style>"), a.livequery.prepared = !0)
      }
    },
    handle: {
      added: function (b) {
        a.each(a.livequery.queries, function (a, c) {
          c.matches(b) && setTimeout(function () {
            c.added(b)
          }, 1)
        })
      },
      removed: function (b) {
        a.each(a.livequery.queries, function (a, c) {
          c.isMatched(b) && setTimeout(function () {
            c.removed(b)
          }, 1)
        })
      },
      modified: function (b) {
        a.each(a.livequery.queries, function (a, c) {
          c.isMatched(b) ? c.matches(b) || c.removed(b) : c.matches(b) && c.added(b)
        })
      },
      mutationevent: function (b) {
        var c = {
            DOMNodeInserted: "added",
            DOMNodeRemoved: "removed",
            DOMAttrModified: "modified"
          },
          d = c[b.type];
        "modified" === d ? a.livequery.attributeFilter.indexOf(b.attrName) > -1 && a.livequery.handle.modified(b.target) : a.livequery.handle[d](b.target)
      },
      mutationobserver: function (b) {
        a.each(b, function (b, c) {
          "attributes" === c.type ? a.livequery.handle.modified(c.target) : a.each(["added", "removed"], function (b, d) {
            a.each(c[d + "Nodes"], function (b, c) {
              a.livequery.handle[d](c)
            })
          })
        })
      }
    },
    find: function (b, c, d, e) {
      var f;
      return a.each(a.livequery.queries, function (a, g) {
        return c !== g.selector || b !== g.jq || d && d.$lqguid !== g.matchedFn.$lqguid || e && e.$lqguid !== g.unmatchedFn.$lqguid ? void 0 : (f = g) && !1
      }), f
    },
    findorcreate: function (b, c, d, e) {
      return a.livequery.find(b, c, d, e) || new a.livequery(b, c, d, e)
    }
  }), a(function () {
    if ("MutationObserver" in window ? a.livequery.method = "mutationobserver" : "MutationEvent" in window ? a.livequery.method = "mutationevent" : "behavior" in document.documentElement.currentStyle && (a.livequery.method = "iebehaviors"), !a.livequery.method) throw new Error("Could not find a means to monitor the DOM");
    a.livequery.prepare[a.livequery.method]()
  })
});
var $jscomp = {
  scope: {},
  findInternal: function (t, a, e) {
    t instanceof String && (t = String(t));
    for (var n = t.length, s = 0; s < n; s++) {
      var r = t[s];
      if (a.call(e, r, s, t)) return {
        i: s,
        v: r
      }
    }
    return {
      i: -1,
      v: void 0
    }
  }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, a, e) {
    if (e.get || e.set) throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[a] = e.value)
  }, $jscomp.getGlobal = function (t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
  }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function (t, a, e, n) {
    if (a) {
      for (e = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
        var s = t[n];
        s in e || (e[s] = {}), e = e[s]
      }(a = a(n = e[t = t[t.length - 1]])) != n && null != a && $jscomp.defineProperty(e, t, {
        configurable: !0,
        writable: !0,
        value: a
      })
    }
  }, $jscomp.polyfill("Array.prototype.find", function (t) {
    return t || function (t, a) {
      return $jscomp.findInternal(this, t, a).v
    }
  }, "es6-impl", "es3"),
  function (t, a, e) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(a || e)
  }(function (t) {
    var a = function (a, e, n) {
      var s = {
        invalid: [],
        getCaret: function () {
          try {
            var t, e = 0,
              n = a.get(0),
              r = document.selection,
              o = n.selectionStart;
            return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = r.createRange()).moveStart("character", -s.val().length), e = t.text.length) : (o || "0" === o) && (e = o), e
          } catch (t) {}
        },
        setCaret: function (t) {
          try {
            if (a.is(":focus")) {
              var e, n = a.get(0);
              n.setSelectionRange ? n.setSelectionRange(t, t) : ((e = n.createTextRange()).collapse(!0), e.moveEnd("character", t), e.moveStart("character", t), e.select())
            }
          } catch (t) {}
        },
        events: function () {
          a.on("keydown.mask", function (t) {
            a.data("mask-keycode", t.keyCode || t.which), a.data("mask-previus-value", a.val()), a.data("mask-previus-caret-pos", s.getCaret()), s.maskDigitPosMapOld = s.maskDigitPosMap
          }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", s.behaviour).on("paste.mask drop.mask", function () {
            setTimeout(function () {
              a.keydown().keyup()
            }, 100)
          }).on("change.mask", function () {
            a.data("changed", !0)
          }).on("blur.mask", function () {
            i === s.val() || a.data("changed") || a.trigger("change"), a.data("changed", !1)
          }).on("blur.mask", function () {
            i = s.val()
          }).on("focus.mask", function (a) {
            !0 === n.selectOnFocus && t(a.target).select()
          }).on("focusout.mask", function () {
            n.clearIfNotMatch && !r.test(s.val()) && s.val("")
          })
        },
        getRegexMask: function () {
          for (var t, a, n, s, r = [], i = 0; i < e.length; i++)(t = o.translation[e.charAt(i)]) ? (a = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (t = t.recursive) ? (r.push(e.charAt(i)), s = {
            digit: e.charAt(i),
            pattern: a
          }) : r.push(n || t ? a + "?" : a)) : r.push(e.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          return r = r.join(""), s && (r = r.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit, "g"), s.pattern)), new RegExp(r)
        },
        destroyEvents: function () {
          a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
        },
        val: function (t) {
          var e = a.is("input") ? "val" : "text";
          return 0 < arguments.length ? (a[e]() !== t && a[e](t), e = a) : e = a[e](), e
        },
        calculateCaretPosition: function () {
          var t = a.data("mask-previus-value") || "",
            e = s.getMasked(),
            n = s.getCaret();
          if (t !== e) {
            var r, o = a.data("mask-previus-caret-pos") || 0,
              i = (e = e.length, t.length),
              l = t = 0,
              c = 0,
              u = 0;
            for (r = n; r < e && s.maskDigitPosMap[r]; r++) l++;
            for (r = n - 1; 0 <= r && s.maskDigitPosMap[r]; r--) t++;
            for (r = n - 1; 0 <= r; r--) s.maskDigitPosMap[r] && c++;
            for (r = o - 1; 0 <= r; r--) s.maskDigitPosMapOld[r] && u++;
            n > i ? n = 10 * e : o >= n && o !== i ? s.maskDigitPosMapOld[n] || (o = n, n = n - (u - c) - t, s.maskDigitPosMap[n] && (n = o)) : n > o && (n = n + (c - u) + l)
          }
          return n
        },
        behaviour: function (e) {
          e = e || window.event, s.invalid = [];
          var n = a.data("mask-keycode");
          if (-1 === t.inArray(n, o.byPassKeys)) {
            n = s.getMasked();
            var r = s.getCaret();
            return setTimeout(function () {
              s.setCaret(s.calculateCaretPosition())
            }, t.jMaskGlobals.keyStrokeCompensation), s.val(n), s.setCaret(r), s.callbacks(e)
          }
        },
        getMasked: function (t, a) {
          var r, i, l, c = [],
            u = void 0 === a ? s.val() : a + "",
            p = 0,
            f = e.length,
            d = 0,
            k = u.length,
            h = 1,
            v = "push",
            g = -1,
            m = 0,
            y = [];
          for (n.reverse ? (v = "unshift", h = -1, r = 0, p = f - 1, d = k - 1, i = function () {
              return -1 < p && -1 < d
            }) : (r = f - 1, i = function () {
              return p < f && d < k
            }); i();) {
            var M = e.charAt(p),
              b = u.charAt(d),
              j = o.translation[M];
            j ? (b.match(j.pattern) ? (c[v](b), j.recursive && (-1 === g ? g = p : p === r && p !== g && (p = g - h), r === g && (p -= h)), p += h) : b === l ? (m--, l = void 0) : j.optional ? (p += h, d -= h) : j.fallback ? (c[v](j.fallback), p += h, d -= h) : s.invalid.push({
              p: d,
              v: b,
              e: j.pattern
            }), d += h) : (t || c[v](M), b === M ? (y.push(d), d += h) : (l = M, y.push(d + m), m++), p += h)
          }
          return u = e.charAt(r), f !== k + 1 || o.translation[u] || c.push(u), c = c.join(""), s.mapMaskdigitPositions(c, y, k), c
        },
        mapMaskdigitPositions: function (t, a, e) {
          for (t = n.reverse ? t.length - e : 0, s.maskDigitPosMap = {}, e = 0; e < a.length; e++) s.maskDigitPosMap[a[e] + t] = 1
        },
        callbacks: function (t) {
          var r = s.val(),
            o = r !== i,
            l = [r, t, a, n],
            c = function (t, a, e) {
              "function" == typeof n[t] && a && n[t].apply(this, e)
            };
          c("onChange", !0 === o, l), c("onKeyPress", !0 === o, l), c("onComplete", r.length === e.length, l), c("onInvalid", 0 < s.invalid.length, [r, t, a, s.invalid, n])
        }
      };
      a = t(a);
      var r, o = this,
        i = s.val();
      e = "function" == typeof e ? e(s.val(), void 0, a, n) : e, o.mask = e, o.options = n, o.remove = function () {
        var t = s.getCaret();
        return o.options.placeholder && a.removeAttr("placeholder"), a.data("mask-maxlength") && a.removeAttr("maxlength"), s.destroyEvents(), s.val(o.getCleanVal()), s.setCaret(t), a
      }, o.getCleanVal = function () {
        return s.getMasked(!0)
      }, o.getMaskedVal = function (t) {
        return s.getMasked(!1, t)
      }, o.init = function (i) {
        if (i = i || !1, n = n || {}, o.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, o.byPassKeys = t.jMaskGlobals.byPassKeys, o.translation = t.extend({}, t.jMaskGlobals.translation, n.translation), o = t.extend(!0, {}, o, n), r = s.getRegexMask(), i) s.events(), s.val(s.getMasked());
        else {
          n.placeholder && a.attr("placeholder", n.placeholder), a.data("mask") && a.attr("autocomplete", "off"), i = 0;
          for (var l = !0; i < e.length; i++) {
            var c = o.translation[e.charAt(i)];
            if (c && c.recursive) {
              l = !1;
              break
            }
          }
          l && a.attr("maxlength", e.length).data("mask-maxlength", !0), s.destroyEvents(), s.events(), i = s.getCaret(), s.val(s.getMasked()), s.setCaret(i)
        }
      }, o.init(!a.is("input"))
    };
    t.maskWatchers = {};
    var e = function () {
        var e = t(this),
          s = {},
          r = e.attr("data-mask");
        if (e.attr("data-mask-reverse") && (s.reverse = !0), e.attr("data-mask-clearifnotmatch") && (s.clearIfNotMatch = !0), "true" === e.attr("data-mask-selectonfocus") && (s.selectOnFocus = !0), n(e, r, s)) return e.data("mask", new a(this, r, s))
      },
      n = function (a, e, n) {
        n = n || {};
        var s = t(a).data("mask"),
          r = JSON.stringify;
        a = t(a).val() || t(a).text();
        try {
          return "function" == typeof e && (e = e(a)), "object" != typeof s || r(s.options) !== r(n) || s.mask !== e
        } catch (t) {}
      },
      s = function (t) {
        var a, e = document.createElement("div");
        return (a = (t = "on" + t) in e) || (e.setAttribute(t, "return;"), a = "function" == typeof e[t]), a
      };
    t.fn.mask = function (e, s) {
      s = s || {};
      var r = this.selector,
        o = (i = t.jMaskGlobals).watchInterval,
        i = s.watchInputs || i.watchInputs,
        l = function () {
          if (n(this, e, s)) return t(this).data("mask", new a(this, e, s))
        };
      return t(this).each(l), r && "" !== r && i && (clearInterval(t.maskWatchers[r]), t.maskWatchers[r] = setInterval(function () {
        t(document).find(r).each(l)
      }, o)), this
    }, t.fn.masked = function (t) {
      return this.data("mask").getMaskedVal(t)
    }, t.fn.unmask = function () {
      return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function () {
        var a = t(this).data("mask");
        a && a.remove().removeData("mask")
      })
    }, t.fn.cleanVal = function () {
      return this.data("mask").getCleanVal()
    }, t.applyDataMask = function (a) {
      ((a = a || t.jMaskGlobals.maskElements) instanceof t ? a : t(a)).filter(t.jMaskGlobals.dataMaskAttr).each(e)
    }, s = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      keyStrokeCompensation: 10,
      useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && s("input"),
      watchDataMask: !1,
      byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
      translation: {
        0: {
          pattern: /\d/
        },
        9: {
          pattern: /\d/,
          optional: !0
        },
        "#": {
          pattern: /\d/,
          recursive: !0
        },
        A: {
          pattern: /[a-zA-Z0-9]/
        },
        S: {
          pattern: /[a-zA-Z]/
        }
      }
    }, t.jMaskGlobals = t.jMaskGlobals || {}, (s = t.jMaskGlobals = t.extend(!0, {}, s, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function () {
      t.jMaskGlobals.watchDataMask && t.applyDataMask()
    }, s.watchInterval)
  }, window.jQuery, window.Zepto);

/*!
 * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
! function (a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function (a) {
    return b(a)
  }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function (a) {
  ! function (a) {
    "use strict";

    function b(b) {
      var c = [{
        re: /[\xC0-\xC6]/g,
        ch: "A"
      }, {
        re: /[\xE0-\xE6]/g,
        ch: "a"
      }, {
        re: /[\xC8-\xCB]/g,
        ch: "E"
      }, {
        re: /[\xE8-\xEB]/g,
        ch: "e"
      }, {
        re: /[\xCC-\xCF]/g,
        ch: "I"
      }, {
        re: /[\xEC-\xEF]/g,
        ch: "i"
      }, {
        re: /[\xD2-\xD6]/g,
        ch: "O"
      }, {
        re: /[\xF2-\xF6]/g,
        ch: "o"
      }, {
        re: /[\xD9-\xDC]/g,
        ch: "U"
      }, {
        re: /[\xF9-\xFC]/g,
        ch: "u"
      }, {
        re: /[\xC7-\xE7]/g,
        ch: "c"
      }, {
        re: /[\xD1]/g,
        ch: "N"
      }, {
        re: /[\xF1]/g,
        ch: "n"
      }];
      return a.each(c, function () {
        b = b ? b.replace(this.re, this.ch) : ""
      }), b
    }

    function c(b) {
      var c = arguments,
        d = b;
      [].shift.apply(c);
      var e, f = this.each(function () {
        var b = a(this);
        if (b.is("select")) {
          var f = b.data("selectpicker"),
            g = "object" == typeof d && d;
          if (f) {
            if (g)
              for (var h in g) g.hasOwnProperty(h) && (f.options[h] = g[h])
          } else {
            var i = a.extend({}, l.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), g);
            i.template = a.extend({}, l.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, g.template), b.data("selectpicker", f = new l(this, i))
          }
          "string" == typeof d && (e = f[d] instanceof Function ? f[d].apply(f, c) : f.options[d])
        }
      });
      return "undefined" != typeof e ? e : f
    }
    String.prototype.includes || ! function () {
      var a = {}.toString,
        b = function () {
          try {
            var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b
          } catch (a) {}
          return c
        }(),
        c = "".indexOf,
        d = function (b) {
          if (null == this) throw new TypeError;
          var d = String(this);
          if (b && "[object RegExp]" == a.call(b)) throw new TypeError;
          var e = d.length,
            f = String(b),
            g = f.length,
            h = arguments.length > 1 ? arguments[1] : void 0,
            i = h ? Number(h) : 0;
          i != i && (i = 0);
          var j = Math.min(Math.max(i, 0), e);
          return !(g + j > e) && c.call(d, f, i) != -1
        };
      b ? b(String.prototype, "includes", {
        value: d,
        configurable: !0,
        writable: !0
      }) : String.prototype.includes = d
    }(), String.prototype.startsWith || ! function () {
      var a = function () {
          try {
            var a = {},
              b = Object.defineProperty,
              c = b(a, a, a) && b
          } catch (a) {}
          return c
        }(),
        b = {}.toString,
        c = function (a) {
          if (null == this) throw new TypeError;
          var c = String(this);
          if (a && "[object RegExp]" == b.call(a)) throw new TypeError;
          var d = c.length,
            e = String(a),
            f = e.length,
            g = arguments.length > 1 ? arguments[1] : void 0,
            h = g ? Number(g) : 0;
          h != h && (h = 0);
          var i = Math.min(Math.max(h, 0), d);
          if (f + i > d) return !1;
          for (var j = -1; ++j < f;)
            if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
          return !0
        };
      a ? a(String.prototype, "startsWith", {
        value: c,
        configurable: !0,
        writable: !0
      }) : String.prototype.startsWith = c
    }(), Object.keys || (Object.keys = function (a, b, c) {
      c = [];
      for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
      return c
    });
    var d = {
      useDefault: !1,
      _set: a.valHooks.select.set
    };
    a.valHooks.select.set = function (b, c) {
      return c && !d.useDefault && a(b).data("selected", !0), d._set.apply(this, arguments)
    };
    var e = null,
      f = function () {
        try {
          return new Event("change"), !0
        } catch (a) {
          return !1
        }
      }();
    a.fn.triggerNative = function (a) {
      var b, c = this[0];
      c.dispatchEvent ? (f ? b = new Event(a, {
        bubbles: !0
      }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a)
    }, a.expr.pseudos.icontains = function (b, c, d) {
      var e = a(b).find("a"),
        f = (e.data("tokens") || e.text()).toString().toUpperCase();
      return f.includes(d[3].toUpperCase())
    }, a.expr.pseudos.ibegins = function (b, c, d) {
      var e = a(b).find("a"),
        f = (e.data("tokens") || e.text()).toString().toUpperCase();
      return f.startsWith(d[3].toUpperCase())
    }, a.expr.pseudos.aicontains = function (b, c, d) {
      var e = a(b).find("a"),
        f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();
      return f.includes(d[3].toUpperCase())
    }, a.expr.pseudos.aibegins = function (b, c, d) {
      var e = a(b).find("a"),
        f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();
      return f.startsWith(d[3].toUpperCase())
    };
    var g = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
      h = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`"
      },
      i = function (a) {
        var b = function (b) {
            return a[b]
          },
          c = "(?:" + Object.keys(a).join("|") + ")",
          d = RegExp(c),
          e = RegExp(c, "g");
        return function (a) {
          return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
        }
      },
      j = i(g),
      k = i(h),
      l = function (b, c) {
        d.useDefault || (a.valHooks.select.set = d._set, d.useDefault = !0), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title"));
        var e = this.options.windowPadding;
        "number" == typeof e && (this.options.windowPadding = [e, e, e, e]), this.val = l.prototype.val, this.render = l.prototype.render, this.refresh = l.prototype.refresh, this.setStyle = l.prototype.setStyle, this.selectAll = l.prototype.selectAll, this.deselectAll = l.prototype.deselectAll, this.destroy = l.prototype.destroy, this.remove = l.prototype.remove, this.show = l.prototype.show, this.hide = l.prototype.hide, this.init()
      };
    l.VERSION = "1.12.4", l.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function (a, b) {
        return 1 == a ? "{0} item selected" : "{0} items selected"
      },
      maxOptionsText: function (a, b) {
        return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: "btn-cancel",
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: "glyphicon",
      tickIcon: "glyphicon-ok",
      showTick: !1,
      template: {
        caret: '<span class="caret"></span>'
      },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1,
      windowPadding: 0
    }, l.prototype = {
      constructor: l,
      init: function () {
        var b = this,
          c = this.$element.attr("id");
        this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
          a.preventDefault(), b.$button.focus()
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function (a) {
            b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a)
          },
          "hidden.bs.dropdown": function (a) {
            b.$element.trigger("hidden.bs.select", a)
          },
          "show.bs.dropdown": function (a) {
            b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a)
          },
          "shown.bs.dropdown": function (a) {
            b.$element.trigger("shown.bs.select", a)
          }
        }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
          b.$button.addClass("bs-invalid"), b.$element.on({
            "focus.bs.select": function () {
              b.$button.focus(), b.$element.off("focus.bs.select")
            },
            "shown.bs.select": function () {
              b.$element.val(b.$element.val()).off("shown.bs.select")
            },
            "rendered.bs.select": function () {
              this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
            }
          }), b.$button.on("blur.bs.select", function () {
            b.$element.focus().blur(), b.$button.off("blur.bs.select")
          })
        }), setTimeout(function () {
          b.$element.trigger("loaded.bs.select")
        })
      },
      createDropdown: function () {
        var b = this.multiple || this.options.showTick ? " show-tick" : "",
          c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
          d = this.autofocus ? " autofocus" : "",
          e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
          f = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + j(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
          g = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-cancel">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-cancel">' + this.options.deselectAllText + "</button></div></div>" : "",
          h = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-cancel">' + this.options.doneButtonText + "</button></div></div>" : "",
          i = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + d + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + e + f + g + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + h + "</div></div>";
        return a(i)
      },
      createView: function () {
        var a = this.createDropdown(),
          b = this.createLi();
        return a.find("ul")[0].innerHTML = b, a
      },
      reloadLi: function () {
        var a = this.createLi();
        this.$menuInner[0].innerHTML = a
      },
      createLi: function () {
        var c = this,
          d = [],
          e = 0,
          f = document.createElement("option"),
          g = -1,
          h = function (a, b, c, d) {
            return "<li" + ("undefined" != typeof c && "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b && null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d && null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
          },
          i = function (d, e, f, g) {
            return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + (f ? ' style="' + f + '"' : "") + (c.options.liveSearchNormalize ? ' data-normalized-text="' + b(j(a(d).html())) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + d + '<span class="' + c.options.iconBase + " " + c.options.tickIcon + ' check-mark"></span></a>'
          };
        if (this.options.title && !this.multiple && (g--, !this.$element.find(".bs-title-option").length)) {
          var k = this.$element[0];
          f.className = "bs-title-option", f.innerHTML = this.options.title, f.value = "", k.insertBefore(f, k.firstChild);
          var l = a(k.options[k.selectedIndex]);
          void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (f.selected = !0)
        }
        var m = this.$element.find("option");
        return m.each(function (b) {
          var f = a(this);
          if (g++, !f.hasClass("bs-title-option")) {
            var k, l = this.className || "",
              n = j(this.style.cssText),
              o = f.data("content") ? f.data("content") : f.html(),
              p = f.data("tokens") ? f.data("tokens") : null,
              q = "undefined" != typeof f.data("subtext") ? '<small class="text-muted">' + f.data("subtext") + "</small>" : "",
              r = "undefined" != typeof f.data("icon") ? '<span class="' + c.options.iconBase + " " + f.data("icon") + '"></span> ' : "",
              s = f.parent(),
              t = "OPTGROUP" === s[0].tagName,
              u = t && s[0].disabled,
              v = this.disabled || u;
            if ("" !== r && v && (r = "<span>" + r + "</span>"), c.options.hideDisabled && (v && !t || u)) return k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), void g--;
            if (f.data("content") || (o = r + '<span class="text">' + o + q + "</span>"), t && f.data("divider") !== !0) {
              if (c.options.hideDisabled && v) {
                if (void 0 === s.data("allOptionsDisabled")) {
                  var w = s.children();
                  s.data("allOptionsDisabled", w.filter(":disabled").length === w.length)
                }
                if (s.data("allOptionsDisabled")) return void g--
              }
              var x = " " + s[0].className || "";
              if (0 === f.index()) {
                e += 1;
                var y = s[0].label,
                  z = "undefined" != typeof s.data("subtext") ? '<small class="text-muted">' + s.data("subtext") + "</small>" : "",
                  A = s.data("icon") ? '<span class="' + c.options.iconBase + " " + s.data("icon") + '"></span> ' : "";
                y = A + '<span class="text">' + j(y) + z + "</span>", 0 !== b && d.length > 0 && (g++, d.push(h("", null, "divider", e + "div"))), g++, d.push(h(y, null, "dropdown-header" + x, e))
              }
              if (c.options.hideDisabled && v) return void g--;
              d.push(h(i(o, "opt " + l + x, n, p), b, "", e))
            } else if (f.data("divider") === !0) d.push(h("", b, "divider"));
            else if (f.data("hidden") === !0) k = f.data("prevHiddenIndex"), f.next().data("prevHiddenIndex", void 0 !== k ? k : b), d.push(h(i(o, l, n, p), b, "hidden is-hidden"));
            else {
              var B = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
              if (!B && c.options.hideDisabled && (k = f.data("prevHiddenIndex"), void 0 !== k)) {
                var C = m.eq(k)[0].previousElementSibling;
                C && "OPTGROUP" === C.tagName && !C.disabled && (B = !0)
              }
              B && (g++, d.push(h("", null, "divider", e + "div"))), d.push(h(i(o, l, n, p), b))
            }
            c.liObj[b] = g
          }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), d.join("")
      },
      findLis: function () {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
      },
      render: function (b) {
        var c, d = this,
          e = this.$element.find("option");
        b !== !1 && e.each(function (a) {
          var b = d.findLis().eq(d.liObj[a]);
          d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
        }), this.togglePlaceholder(), this.tabIndex();
        var f = e.map(function () {
            if (this.selected) {
              if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
              var b, c = a(this),
                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
              return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content").toString() : e + c.html() + b
            }
          }).toArray(),
          g = this.multiple ? f.join(this.options.multipleSeparator) : f[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
          var h = this.options.selectedTextFormat.split(">");
          if (h.length > 1 && f.length > h[1] || 1 == h.length && f.length >= 2) {
            c = this.options.hideDisabled ? ", [disabled]" : "";
            var i = e.not('[data-divider="true"], [data-hidden="true"]' + c).length,
              j = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(f.length, i) : this.options.countSelectedText;
            g = j.replace("{0}", f.length.toString()).replace("{1}", i.toString())
          }
        }
        void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (g = this.options.title), g || (g = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", k(a.trim(g.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(g), this.$element.trigger("rendered.bs.select")
      },
      setStyle: function (a, b) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
        var c = a ? a : this.options.style;
        "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
      },
      liHeight: function (b) {
        if (b || this.options.size !== !1 && !this.sizeInfo) {
          var c = document.createElement("div"),
            d = document.createElement("div"),
            e = document.createElement("ul"),
            f = document.createElement("li"),
            g = document.createElement("li"),
            h = document.createElement("a"),
            i = document.createElement("span"),
            j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
            k = this.options.liveSearch ? document.createElement("div") : null,
            l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
            m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
          if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
            var n = document.createElement("input");
            k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
          }
          l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
          var o = h.offsetHeight,
            p = j ? j.offsetHeight : 0,
            q = k ? k.offsetHeight : 0,
            r = l ? l.offsetHeight : 0,
            s = m ? m.offsetHeight : 0,
            t = a(f).outerHeight(!0),
            u = "function" == typeof getComputedStyle && getComputedStyle(d),
            v = u ? null : a(d),
            w = {
              vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
              horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth"))
            },
            x = {
              vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2,
              horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2
            };
          document.body.removeChild(c), this.sizeInfo = {
            liHeight: o,
            headerHeight: p,
            searchHeight: q,
            actionsHeight: r,
            doneButtonHeight: s,
            dividerHeight: t,
            menuPadding: w,
            menuExtras: x
          }
        }
      },
      setSize: function () {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
          var b, c, d, e, f, g, h, i, j = this,
            k = this.$menu,
            l = this.$menuInner,
            m = a(window),
            n = this.$newElement[0].offsetHeight,
            o = this.$newElement[0].offsetWidth,
            p = this.sizeInfo.liHeight,
            q = this.sizeInfo.headerHeight,
            r = this.sizeInfo.searchHeight,
            s = this.sizeInfo.actionsHeight,
            t = this.sizeInfo.doneButtonHeight,
            u = this.sizeInfo.dividerHeight,
            v = this.sizeInfo.menuPadding,
            w = this.sizeInfo.menuExtras,
            x = this.options.hideDisabled ? ".disabled" : "",
            y = function () {
              var b, c = j.$newElement.offset(),
                d = a(j.options.container);
              j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = {
                top: 0,
                left: 0
              };
              var e = j.options.windowPadding;
              f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top - e[2], h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left - e[1], f -= e[0], h -= e[3]
            };
          if (y(), "auto" === this.options.size) {
            var z = function () {
              var m, n = function (b, c) {
                  return function (d) {
                    return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                  }
                },
                u = j.$menuInner[0].getElementsByTagName("li"),
                x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"),
                z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");
              y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({
                "max-height": b + "px",
                overflow: "hidden",
                "min-height": m + q + r + s + t + "px"
              }), l.css({
                "max-height": b - q - r - s - t - v.vert + "px",
                "overflow-y": "auto",
                "min-height": Math.max(m - v.vert, 0) + "px"
              })
            };
            z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z)
          } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) {
            var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(),
              B = this.$lis.slice(0, A + 1).filter(".divider").length;
            b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({
              "max-height": b + q + r + s + t + "px",
              overflow: "hidden",
              "min-height": ""
            }), l.css({
              "max-height": b - v.vert + "px",
              "overflow-y": "auto",
              "min-height": ""
            })
          }
        }
      },
      setWidth: function () {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");
          var a = this.$menu.parent().clone().appendTo("body"),
            b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
            c = a.children(".dropdown-menu").outerWidth(),
            d = b.css("width", "auto").children("button").outerWidth();
          a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
      },
      selectPosition: function () {
        this.$bsContainer = a('<div class="bs-container" />');
        var b, c, d, e = this,
          f = a(this.options.container),
          g = function (a) {
            e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = {
              top: 0,
              left: 0
            } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({
              top: b.top - c.top + d,
              left: b.left - c.left,
              width: a[0].offsetWidth
            })
          };
        this.$button.on("click", function () {
          var b = a(this);
          e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu))
        }), a(window).on("resize scroll", function () {
          g(e.$newElement)
        }), this.$element.on("hide.bs.select", function () {
          e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach()
        })
      },
      setSelected: function (a, b, c) {
        c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b)
      },
      setDisabled: function (a, b, c) {
        c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
      },
      isDisabled: function () {
        return this.$element[0].disabled
      },
      checkDisabled: function () {
        var a = this;
        this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
          return !a.isDisabled()
        })
      },
      togglePlaceholder: function () {
        var a = this.$element.val();
        this.$button.toggleClass("bs-placeholder", null === a || "" === a || a.constructor === Array && 0 === a.length)
      },
      tabIndex: function () {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
      },
      clickListener: function () {
        var b = this,
          c = a(document);
        c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
          /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
        }), this.$button.on("click", function () {
          b.setSize()
        }), this.$element.on("shown.bs.select", function () {
          if (b.options.liveSearch || b.multiple) {
            if (!b.multiple) {
              var a = b.liObj[b.$element[0].selectedIndex];
              if ("number" != typeof a || b.options.size === !1) return;
              var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
              c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
            }
          } else b.$menuInner.find(".selected a").focus()
        }), this.$menuInner.on("click", "li a", function (c) {
          var d = a(this),
            f = d.parent().data("originalIndex"),
            g = b.$element.val(),
            h = b.$element.prop("selectedIndex"),
            i = !0;
          if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
            var j = b.$element.find("option"),
              k = j.eq(f),
              l = k.prop("selected"),
              m = k.parent("optgroup"),
              n = b.options.maxOptions,
              o = m.data("maxOptions") || !1;
            if (b.multiple) {
              if (k.prop("selected", !l), b.setSelected(f, !l), d.blur(), n !== !1 || o !== !1) {
                var p = n < j.filter(":selected").length,
                  q = o < m.find("option:selected").length;
                if (n && p || o && q)
                  if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(f, !0);
                  else if (o && 1 == o) {
                  m.find("option:selected").prop("selected", !1), k.prop("selected", !0);
                  var r = d.parent().data("optgroup");
                  b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(f, !0)
                } else {
                  var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                    t = "function" == typeof s ? s(n, o) : s,
                    u = t[0].replace("{n}", n),
                    v = t[1].replace("{n}", o),
                    w = a('<div class="notify"></div>');
                  t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                    b.setSelected(f, !1)
                  }, 10), w.delay(750).fadeOut(300, function () {
                    a(this).remove()
                  })
                }
              }
            } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(f, !0);
            !b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (e = [f, k.prop("selected"), l], b.$element.triggerNative("change"))
          }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
          c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
          a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
        }), this.$menu.on("click", ".popover-title .close", function () {
          b.$button.click()
        }), this.$searchbox.on("click", function (a) {
          a.stopPropagation()
        }), this.$menu.on("click", ".actions-btn", function (c) {
          b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
        }), this.$element.change(function () {
          b.render(!1), b.$element.trigger("changed.bs.select", e), e = null
        })
      },
      liveSearchListener: function () {
        var c = this,
          d = a('<li class="no-results"></li>');
        this.$button.on("click.dropdown.data-api", function () {
          c.$menuInner.find(".active").removeClass("active"), c.$searchbox.val() && (c.$searchbox.val(""), c.$lis.not(".is-hidden").removeClass("hidden"), d.parent().length && d.remove()), c.multiple || c.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
            c.$searchbox.focus()
          }, 10)
        }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
          a.stopPropagation()
        }), this.$searchbox.on("input propertychange", function () {
          if (c.$lis.not(".is-hidden").removeClass("hidden"), c.$lis.filter(".active").removeClass("active"), d.remove(), c.$searchbox.val()) {
            var e, f = c.$lis.not(".is-hidden, .divider, .dropdown-header");
            if (e = c.options.liveSearchNormalize ? f.not(":a" + c._searchStyle() + '("' + b(c.$searchbox.val()) + '")') : f.not(":" + c._searchStyle() + '("' + c.$searchbox.val() + '")'), e.length === f.length) d.html(c.options.noneResultsText.replace("{0}", '"' + j(c.$searchbox.val()) + '"')), c.$menuInner.append(d), c.$lis.addClass("hidden");
            else {
              e.addClass("hidden");
              var g, h = c.$lis.not(".hidden");
              h.each(function (b) {
                var c = a(this);
                c.hasClass("divider") ? void 0 === g ? c.addClass("hidden") : (g && g.addClass("hidden"), g = c) : c.hasClass("dropdown-header") && h.eq(b + 1).data("optgroup") !== c.data("optgroup") ? c.addClass("hidden") : g = null
              }), g && g.addClass("hidden"), f.not(".hidden").first().addClass("active"), c.$menuInner.scrollTop(0)
            }
          }
        })
      },
      _searchStyle: function () {
        var a = {
          begins: "ibegins",
          startsWith: "ibegins"
        };
        return a[this.options.liveSearchStyle] || "icontains"
      },
      val: function (a) {
        return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
      },
      changeAll: function (b) {
        if (this.multiple) {
          "undefined" == typeof b && (b = !0), this.findLis();
          var c = this.$element.find("option"),
            d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
            e = d.length,
            f = [];
          if (b) {
            if (d.filter(".selected").length === d.length) return
          } else if (0 === d.filter(".selected").length) return;
          d.toggleClass("selected", b);
          for (var g = 0; g < e; g++) {
            var h = d[g].getAttribute("data-original-index");
            f[f.length] = c.eq(h)[0]
          }
          a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
        }
      },
      selectAll: function () {
        return this.changeAll(!0)
      },
      deselectAll: function () {
        return this.changeAll(!1)
      },
      toggle: function (a) {
        a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
      },
      keydown: function (b) {
        var c, d, e, f, g = a(this),
          h = g.is("input") ? g.parent().parent() : g.parent(),
          i = h.data("this"),
          j = ":not(.disabled, .hidden, .dropdown-header, .divider)",
          k = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
          };
        if (f = i.$newElement.hasClass("open"), !f && (b.keyCode >= 48 && b.keyCode <= 57 || b.keyCode >= 96 && b.keyCode <= 105 || b.keyCode >= 65 && b.keyCode <= 90)) return i.options.container ? i.$button.trigger("click") : (i.setSize(), i.$menu.parent().addClass("open"), f = !0), void i.$searchbox.focus();
        if (i.options.liveSearch && /(^9$|27)/.test(b.keyCode.toString(10)) && f && (b.preventDefault(), b.stopPropagation(), i.$menuInner.click(), i.$button.focus()), /(38|40)/.test(b.keyCode.toString(10))) {
          if (c = i.$lis.filter(j), !c.length) return;
          d = i.options.liveSearch ? c.index(c.filter(".active")) : c.index(c.find("a").filter(":focus").parent()), e = i.$menuInner.data("prevIndex"), 38 == b.keyCode ? (!i.options.liveSearch && d != e || d == -1 || d--, d < 0 && (d += c.length)) : 40 == b.keyCode && ((i.options.liveSearch || d == e) && d++, d %= c.length), i.$menuInner.data("prevIndex", d), i.options.liveSearch ? (b.preventDefault(), g.hasClass("dropdown-toggle") || (c.removeClass("active").eq(d).addClass("active").children("a").focus(), g.focus())) : c.eq(d).children("a").focus()
        } else if (!g.is("input")) {
          var l, m, n = [];
          c = i.$lis.filter(j), c.each(function (c) {
            a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == k[b.keyCode] && n.push(c)
          }), l = a(document).data("keycount"), l++, a(document).data("keycount", l), m = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), m != k[b.keyCode] ? (l = 1, a(document).data("keycount", l)) : l >= n.length && (a(document).data("keycount", 0), l > n.length && (l = 1)), c.eq(n[l - 1]).children("a").focus()
        }
        if ((/(13|32)/.test(b.keyCode.toString(10)) || /(^9$)/.test(b.keyCode.toString(10)) && i.options.selectOnTab) && f) {
          if (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), i.options.liveSearch) /(32)/.test(b.keyCode.toString(10)) || (i.$menuInner.find(".active a").click(), g.focus());
          else {
            var o = a(":focus");
            o.click(), o.focus(), b.preventDefault(), a(document).data("spaceSelect", !0)
          }
          a(document).data("keycount", 0)
        }(/(^9$|27)/.test(b.keyCode.toString(10)) && f && (i.multiple || i.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !f) && (i.$menu.parent().removeClass("open"), i.options.container && i.$newElement.removeClass("open"), i.$button.focus())
      },
      mobile: function () {
        this.$element.addClass("mobile-device")
      },
      refresh: function () {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(),
          this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
      },
      hide: function () {
        this.$newElement.hide()
      },
      show: function () {
        this.$newElement.show()
      },
      remove: function () {
        this.$newElement.remove(), this.$element.remove()
      },
      destroy: function () {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
      }
    };
    var m = a.fn.selectpicker;
    a.fn.selectpicker = c, a.fn.selectpicker.Constructor = l, a.fn.selectpicker.noConflict = function () {
      return a.fn.selectpicker = m, this
    }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', l.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (a) {
      a.stopPropagation()
    }), a(window).on("load.bs.select.data-api", function () {
      a(".selectpicker").each(function () {
        var b = a(this);
        c.call(b, b.data())
      })
    })
  }(a)
});
(function ($) {
  'use strict';

  //<editor-fold desc="Shims">
  if (!String.prototype.includes) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var toString = {}.toString;
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {}
        return result;
      }());
      var indexOf = ''.indexOf;
      var includes = function (search) {
        if (this == null) {
          throw new TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw new TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        return indexOf.call(string, searchString, pos) != -1;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'includes', {
          'value': includes,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.includes = includes;
      }
    }());
  }

  if (!String.prototype.startsWith) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {}
        return result;
      }());
      var toString = {}.toString;
      var startsWith = function (search) {
        if (this == null) {
          throw new TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw new TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        var index = -1;
        while (++index < searchLength) {
          if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
            return false;
          }
        }
        return true;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'startsWith', {
          'value': startsWith,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.startsWith = startsWith;
      }
    }());
  }

  if (!Object.keys) {
    Object.keys = function (
      o, // object
      k, // key
      r // result array
    ) {
      // initialize object and result
      r = [];
      // iterate over object keys
      for (k in o)
        // fill result array with non-prototypical keys
        r.hasOwnProperty.call(o, k) && r.push(k);
      // return result
      return r;
    };
  }

  // set data-selected on select element if the value has been programmatically selected
  // prior to initialization of bootstrap-select
  // * consider removing or replacing an alternative method *
  var valHooks = {
    useDefault: false,
    _set: $.valHooks.select.set
  };

  $.valHooks.select.set = function (elem, value) {
    if (value && !valHooks.useDefault) $(elem).data('selected', true);

    return valHooks._set.apply(this, arguments);
  };

  var changed_arguments = null;

  var EventIsSupported = (function () {
    try {
      new Event('change');
      return true;
    } catch (e) {
      return false;
    }
  })();

  $.fn.triggerNative = function (eventName) {
    var el = this[0],
      event;

    if (el.dispatchEvent) { // for modern browsers & IE9+
      if (EventIsSupported) {
        // For modern browsers
        event = new Event(eventName, {
          bubbles: true
        });
      } else {
        // For IE since it doesn't support Event constructor
        event = document.createEvent('Event');
        event.initEvent(eventName, true, false);
      }

      el.dispatchEvent(event);
    } else if (el.fireEvent) { // for IE8
      event = document.createEventObject();
      event.eventType = eventName;
      el.fireEvent('on' + eventName, event);
    } else {
      // fall back to jQuery.trigger
      this.trigger(eventName);
    }
  };
  //</editor-fold>

  // Case insensitive contains search
  $.expr.pseudos.icontains = function (obj, index, meta) {
    var $obj = $(obj).find('a');
    var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
    return haystack.includes(meta[3].toUpperCase());
  };

  // Case insensitive begins search
  $.expr.pseudos.ibegins = function (obj, index, meta) {
    var $obj = $(obj).find('a');
    var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
    return haystack.startsWith(meta[3].toUpperCase());
  };

  // Case and accent insensitive contains search
  $.expr.pseudos.aicontains = function (obj, index, meta) {
    var $obj = $(obj).find('a');
    var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
    return haystack.includes(meta[3].toUpperCase());
  };

  // Case and accent insensitive begins search
  $.expr.pseudos.aibegins = function (obj, index, meta) {
    var $obj = $(obj).find('a');
    var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
    return haystack.startsWith(meta[3].toUpperCase());
  };

  /**
   * Remove all diatrics from the given text.
   * @access private
   * @param {String} text
   * @returns {String}
   */
  function normalizeToBase(text) {
    var rExps = [{
        re: /[\xC0-\xC6]/g,
        ch: "A"
      },
      {
        re: /[\xE0-\xE6]/g,
        ch: "a"
      },
      {
        re: /[\xC8-\xCB]/g,
        ch: "E"
      },
      {
        re: /[\xE8-\xEB]/g,
        ch: "e"
      },
      {
        re: /[\xCC-\xCF]/g,
        ch: "I"
      },
      {
        re: /[\xEC-\xEF]/g,
        ch: "i"
      },
      {
        re: /[\xD2-\xD6]/g,
        ch: "O"
      },
      {
        re: /[\xF2-\xF6]/g,
        ch: "o"
      },
      {
        re: /[\xD9-\xDC]/g,
        ch: "U"
      },
      {
        re: /[\xF9-\xFC]/g,
        ch: "u"
      },
      {
        re: /[\xC7-\xE7]/g,
        ch: "c"
      },
      {
        re: /[\xD1]/g,
        ch: "N"
      },
      {
        re: /[\xF1]/g,
        ch: "n"
      }
    ];
    $.each(rExps, function () {
      text = text ? text.replace(this.re, this.ch) : '';
    });
    return text;
  }


  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  var unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`'
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function (map) {
    var escaper = function (match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + Object.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };

  var htmlEscape = createEscaper(escapeMap);
  var htmlUnescape = createEscaper(unescapeMap);

  var Selectpicker = function (element, options) {
    // bootstrap-select has been initialized - revert valHooks.select.set back to its original function
    if (!valHooks.useDefault) {
      $.valHooks.select.set = valHooks._set;
      valHooks.useDefault = true;
    }

    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
    this.$lis = null;
    this.options = options;

    // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
    // data-attribute)
    if (this.options.title === null) {
      this.options.title = this.$element.attr('title');
    }

    // Format window padding
    var winPad = this.options.windowPadding;
    if (typeof winPad === 'number') {
      this.options.windowPadding = [winPad, winPad, winPad, winPad];
    }

    //Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.destroy = Selectpicker.prototype.destroy;
    this.remove = Selectpicker.prototype.remove;
    this.show = Selectpicker.prototype.show;
    this.hide = Selectpicker.prototype.hide;

    this.init();
  };

  Selectpicker.VERSION = '1.12.4';

  // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
  Selectpicker.DEFAULTS = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results matched {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
        (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
      ];
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    doneButton: false,
    doneButtonText: 'Close',
    multipleSeparator: ', ',
    styleBase: 'btn',
    style: 'btn-cancel',
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    liveSearchPlaceholder: null,
    liveSearchNormalize: false,
    liveSearchStyle: 'contains',
    actionsBox: false,
    iconBase: 'glyphicon',
    tickIcon: 'glyphicon-ok',
    showTick: false,
    template: {
      caret: '<span class="caret"></span>'
    },
    maxOptions: false,
    mobile: false,
    selectOnTab: false,
    dropdownAlignRight: false,
    windowPadding: 0
  };

  Selectpicker.prototype = {

    constructor: Selectpicker,

    init: function () {
      var that = this,
        id = this.$element.attr('id');

      // remember that we are doing the init
      this.options.initInProcess = true;
      if (this.options.width === 'auto' && this.options.lazyLoadLiElements === true) {
        // creates a bit of a problem for us. we would need to render the LIs to figure out their width
        // that is what lazyLoading is all about avoiding.  these options are incompatible
        // tell somebody and opt out of lazy load
        console.log('Selectpicker option lazyLoadLiElements=true is incompatible with option width="auto".  Option \'lazyLoadLiElements\' has been reset to false, however this may cause serious performance degradation.');
        this.options.lazyLoadLiElements = false;
      }

      this.$element.addClass('bs-select-hidden');

      // store originalIndex (key) and newIndex (value) in this.liObj for fast accessibility
      // allows us to do this.$lis.eq(that.liObj[index]) instead of this.$lis.filter('[data-original-index="' + index + '"]')
      this.liObj = {};
      this.multiple = this.$element.prop('multiple');
      this.autofocus = this.$element.prop('autofocus');
      this.$newElement = this.createView();
      this.$element
        .after(this.$newElement)
        .appendTo(this.$newElement);
      this.$button = this.$newElement.children('button');
      this.$menu = this.$newElement.children('.dropdown-menu');
      this.$menuInner = this.$menu.children('.inner');
      this.$searchbox = this.$menu.find('input');

      this.$element.removeClass('bs-select-hidden');

      if (this.options.dropdownAlignRight === true) this.$menu.addClass('dropdown-menu-right');

      if (typeof id !== 'undefined') {
        this.$button.attr('data-id', id);
        $('label[for="' + id + '"]').click(function (e) {
          e.preventDefault();
          that.$button.focus();
        });
      }

      this.checkDisabled();
      this.clickListener();

      // we lazy loaded this select picker, so we need to make sure
      // that we finish the rendering the first time someone actually activates
      // the menu
      if (this.options.lazyLoadLiElements === true) {
        this.$button.one('click.dropdown.data-api', function (e) {
          // render the menu
          that.$lis = null;
          that.liObj = {};
          that.reloadLi();
          that.render();
          that.checkDisabled();
          that.liHeight(true);
          that.setStyle();
          that.setWidth();
        });
      }

      if (this.options.liveSearch) this.liveSearchListener();
      this.render();
      this.setStyle();
      this.setWidth();
      if (this.options.container) this.selectPosition();
      this.$menu.data('this', this);
      this.$newElement.data('this', this);
      if (this.options.mobile) this.mobile();

      this.$newElement.on({
        'hide.bs.dropdown': function (e) {
          that.$menuInner.attr('aria-expanded', false);
          that.$element.trigger('hide.bs.select', e);
        },
        'hidden.bs.dropdown': function (e) {
          that.$element.trigger('hidden.bs.select', e);
        },
        'show.bs.dropdown': function (e) {
          that.$menuInner.attr('aria-expanded', true);
          that.$element.trigger('show.bs.select', e);
        },
        'shown.bs.dropdown': function (e) {
          that.$element.trigger('shown.bs.select', e);
        }
      });

      if (that.$element[0].hasAttribute('required')) {
        this.$element.on('invalid', function () {
          that.$button.addClass('bs-invalid');

          that.$element.on({
            'focus.bs.select': function () {
              that.$button.focus();
              that.$element.off('focus.bs.select');
            },
            'shown.bs.select': function () {
              that.$element
                .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
                .off('shown.bs.select');
            },
            'rendered.bs.select': function () {
              // if select is no longer invalid, remove the bs-invalid class
              if (this.validity.valid) that.$button.removeClass('bs-invalid');
              that.$element.off('rendered.bs.select');
            }
          });

          that.$button.on('blur.bs.select', function () {
            that.$element.focus().blur();
            that.$button.off('blur.bs.select');
          });
        });
      }

      setTimeout(function () {
        that.$element.trigger('loaded.bs.select');
      });

      this.options.initInProcess = false;
    },

    createDropdown: function () {
      // Options
      // If we are multiple or showTick option is set, then add the show-tick class
      var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
        inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
        autofocus = this.autofocus ? ' autofocus' : '';
      // Elements
      var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
      var searchbox = this.options.liveSearch ?
        '<div class="bs-searchbox">' +
        '<input type="text" class="form-control" autocomplete="off"' +
        (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' +
        '</div>' :
        '';
      var actionsbox = this.multiple && this.options.actionsBox ?
        '<div class="bs-actionsbox">' +
        '<div class="btn-group btn-group-sm btn-block">' +
        '<button type="button" class="actions-btn bs-select-all btn btn-cancel">' +
        this.options.selectAllText +
        '</button>' +
        '<button type="button" class="actions-btn bs-deselect-all btn btn-cancel">' +
        this.options.deselectAllText +
        '</button>' +
        '</div>' +
        '</div>' :
        '';
      var donebutton = this.multiple && this.options.doneButton ?
        '<div class="bs-donebutton">' +
        '<div class="btn-group btn-block">' +
        '<button type="button" class="btn btn-sm btn-cancel">' +
        this.options.doneButtonText +
        '</button>' +
        '</div>' +
        '</div>' :
        '';
      var drop =
        '<div class="btn-group bootstrap-select' + showTick + inputGroup + '">' +
        '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button" aria-labelledby="' + this.$element.attr("aria-labelledby") + '">' +
        '<span class="filter-option pull-left"></span>&nbsp;' +
        '<span class="bs-caret">' +
        this.options.template.caret +
        '</span>' +
        '</button>' +
        '<div class="dropdown-menu open" role="combobox">' +
        header +
        searchbox +
        actionsbox +
        '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false">' +
        '</ul>' +
        donebutton +
        '</div>' +
        '</div>';

      return $(drop);
    },

    createView: function () {
      var $drop = this.createDropdown(),
        li = this.createLi();

      $drop.find('ul')[0].innerHTML = li;
      return $drop;
    },

    reloadLi: function () {
      // rebuild
      var li = this.createLi();
      this.$menuInner[0].innerHTML = li;
    },

    createLi: function () {
      var that = this,
        _li = [],
        optID = 0,
        titleOption = document.createElement('option'),
        liIndex = -1; // increment liIndex whenever a new <li> element is created to ensure liObj is correct

      // Helper functions
      /**
       * @param content
       * @param [index]
       * @param [classes]
       * @param [optgroup]
       * @returns {string}
       */
      var generateLI = function (content, index, classes, optgroup) {
        return '<li' +
          ((typeof classes !== 'undefined' && '' !== classes) ? ' class="' + classes + '"' : '') +
          ((typeof index !== 'undefined' && null !== index) ? ' data-original-index="' + index + '"' : '') +
          ((typeof optgroup !== 'undefined' && null !== optgroup) ? 'data-optgroup="' + optgroup + '"' : '') +
          '>' + content + '</li>';
      };

      /**
       * @param text
       * @param [classes]
       * @param [inline]
       * @param [tokens]
       * @returns {string}
       */
      var generateA = function (text, classes, inline, tokens) {
        return '<a tabindex="0"' +
          (typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
          (inline ? ' style="' + inline + '"' : '') +
          (that.options.liveSearchNormalize ? ' data-normalized-text="' + normalizeToBase(htmlEscape($(text).html())) + '"' : '') +
          (typeof tokens !== 'undefined' || tokens !== null ? ' data-tokens="' + tokens + '"' : '') +
          ' role="option">' + text +
          '<span class="' + that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark"></span>' +
          '</a>';
      };

      if (this.options.title && !this.multiple) {
        // this option doesn't create a new <li> element, but does add a new option, so liIndex is decreased
        // since liObj is recalculated on every refresh, liIndex needs to be decreased even if the titleOption is already appended
        liIndex--;

        if (!this.$element.find('.bs-title-option').length) {
          // Use native JS to prepend option (faster)
          var element = this.$element[0];
          titleOption.className = 'bs-title-option';
          titleOption.innerHTML = this.options.title;
          titleOption.value = '';
          element.insertBefore(titleOption, element.firstChild);
          // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
          // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
          // if so, the select will have the data-selected attribute
          var $opt = $(element.options[element.selectedIndex]);
          if ($opt.attr('selected') === undefined && this.$element.data('selected') === undefined) {
            titleOption.selected = true;
          }
        }
      }

      if (!this.options.initInProcess || this.options.lazyLoadLiElements !== true) { // skip LI creation when lazy loading

        var $selectOptions = this.$element.find('option');

        $selectOptions.each(function (index) {
          var $this = $(this);

          liIndex++;

          if ($this.hasClass('bs-title-option')) return;

          // Get the class and text for the option
          var optionClass = this.className || '',
            inline = htmlEscape(this.style.cssText),
            text = $this.data('content') ? $this.data('content') : $this.html(),
            tokens = $this.data('tokens') ? $this.data('tokens') : null,
            subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.data('subtext') + '</small>' : '',
            icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
            $parent = $this.parent(),
            isOptgroup = $parent[0].tagName === 'OPTGROUP',
            isOptgroupDisabled = isOptgroup && $parent[0].disabled,
            isDisabled = this.disabled || isOptgroupDisabled,
            prevHiddenIndex;

          if (icon !== '' && isDisabled) {
            icon = '<span>' + icon + '</span>';
          }

          if (that.options.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) {
            // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
            // used to determine whether or not a divider should be placed after an optgroup if there are
            // hidden options between the optgroup and the first visible option
            prevHiddenIndex = $this.data('prevHiddenIndex');
            $this.next().data('prevHiddenIndex', (prevHiddenIndex !== undefined ? prevHiddenIndex : index));

            liIndex--;
            return;
          }

          if (!$this.data('content')) {
            // Prepend any icon and append any subtext to the main text.
            text = icon + '<span class="text">' + text + subtext + '</span>';
          }

          if (isOptgroup && $this.data('divider') !== true) {
            if (that.options.hideDisabled && isDisabled) {
              if ($parent.data('allOptionsDisabled') === undefined) {
                var $options = $parent.children();
                $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
              }

              if ($parent.data('allOptionsDisabled')) {
                liIndex--;
                return;
              }
            }

            var optGroupClass = ' ' + $parent[0].className || '';

            if ($this.index() === 0) { // Is it the first option of the optgroup?
              optID += 1;

              // Get the opt group label
              var label = $parent[0].label,
                labelSubtext = typeof $parent.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $parent.data('subtext') + '</small>' : '',
                labelIcon = $parent.data('icon') ? '<span class="' + that.options.iconBase + ' ' + $parent.data('icon') + '"></span> ' : '';

              label = labelIcon + '<span class="text">' + htmlEscape(label) + labelSubtext + '</span>';

              if (index !== 0 && _li.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
                liIndex++;
                _li.push(generateLI('', null, 'divider', optID + 'div'));
              }
              liIndex++;
              _li.push(generateLI(label, null, 'dropdown-header' + optGroupClass, optID));
            }

            if (that.options.hideDisabled && isDisabled) {
              liIndex--;
              return;
            }

            _li.push(generateLI(generateA(text, 'opt ' + optionClass + optGroupClass, inline, tokens), index, '', optID));
          } else if ($this.data('divider') === true) {
            _li.push(generateLI('', index, 'divider'));
          } else if ($this.data('hidden') === true) {
            // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
            // used to determine whether or not a divider should be placed after an optgroup if there are
            // hidden options between the optgroup and the first visible option
            prevHiddenIndex = $this.data('prevHiddenIndex');
            $this.next().data('prevHiddenIndex', (prevHiddenIndex !== undefined ? prevHiddenIndex : index));

            _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, 'hidden is-hidden'));
          } else {
            var showDivider = this.previousElementSibling && this.previousElementSibling.tagName === 'OPTGROUP';

            // if previous element is not an optgroup and hideDisabled is true
            if (!showDivider && that.options.hideDisabled) {
              prevHiddenIndex = $this.data('prevHiddenIndex');

              if (prevHiddenIndex !== undefined) {
                // select the element **before** the first hidden element in the group
                var prevHidden = $selectOptions.eq(prevHiddenIndex)[0].previousElementSibling;

                if (prevHidden && prevHidden.tagName === 'OPTGROUP' && !prevHidden.disabled) {
                  showDivider = true;
                }
              }
            }

            if (showDivider) {
              liIndex++;
              _li.push(generateLI('', null, 'divider', optID + 'div'));
            }
            _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
          }

          that.liObj[index] = liIndex;
        });

      } // end if for skipping li creation when lazy loading

      //If we are not multiple, we don't have a selected item, and we don't have a title, select the first element so something is set in the button
      if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.options.title) {
        this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
      }

      return _li.join('');
    },

    findLis: function () {
      if (this.$lis == null) this.$lis = this.$menu.find('li');
      return this.$lis;
    },

    /**
     * @param [updateLi] defaults to true
     */
    render: function (updateLi) {
      var that = this,
        notDisabled,
        $selectOptions = this.$element.find('option');

      //Update the LI to match the SELECT
      if (updateLi !== false && (!this.options.initInProcess || this.options.lazyLoadLiElements !== true)) { // skip this if we are lazy loading
        $selectOptions.each(function (index) {
          var $lis = that.findLis().eq(that.liObj[index]);

          that.setDisabled(index, this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled, $lis);
          that.setSelected(index, this.selected, $lis);
        });
      }

      this.togglePlaceholder();

      this.tabIndex();

      var createOptionText = function (opt) {
        if (that.options.hideDisabled && (opt.disabled || opt.parentNode.tagName === 'OPTGROUP' && opt.parentNode.disabled)) return;

        var $this = $(opt),
          icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '',
          subtext;

        if (that.options.showSubtext && $this.data('subtext') && !that.multiple) {
          subtext = ' <small class="text-muted">' + $this.data('subtext') + '</small>';
        } else {
          subtext = '';
        }
        if (typeof $this.attr('title') !== 'undefined') {
          return $this.attr('title');
        } else if ($this.data('content') && that.options.showContent) {
          return $this.data('content').toString();
        } else {
          return icon + $this.html() + subtext;
        }
      };

      var selectedItems = (this.multiple || this.options.singleSelectPerfTweak !== true ? $selectOptions.map(function () {
          if (this.selected) {
            return createOptionText(this);
          }
        }).toArray() :
        // only single select - do not need to iterate every single option
        [createOptionText(this.$element[0][this.$element[0].selectedIndex])]
      );

      //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
      //Convert all the values into a comma delimited string
      var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

      //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
      if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
        var max = this.options.selectedTextFormat.split('>');
        if ((max.length > 1 && selectedItems.length > max[1]) || (max.length == 1 && selectedItems.length >= 2)) {
          notDisabled = this.options.hideDisabled ? ', [disabled]' : '';
          var totalCount = $selectOptions.not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
            tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
          title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
        }
      }

      if (this.options.title == undefined) {
        this.options.title = this.$element.attr('title');
      }

      if (this.options.selectedTextFormat == 'static') {
        title = this.options.title;
      }

      //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
      if (!title) {
        title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
      }

      //strip all HTML tags and trim the result, then unescape any escaped tags
      this.$button.attr('title', htmlUnescape($.trim(title.replace(/<[^>]*>?/g, ''))));
      this.$button.children('.filter-option').html(title);

      if (!this.options.initInProcess || this.options.lazyLoadLiElements !== true) { // this is very expensive on IE and we haven;t really rendered the select if we are lazy loading, so hold off on this event
        this.$element.trigger('rendered.bs.select');
      };
    },

    /**
     * @param [style]
     * @param [status]
     */
    setStyle: function (style, status) {
      if (this.$element.attr('class')) {
        this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
      }

      var buttonClass = style ? style : this.options.style;

      if (status == 'add') {
        this.$button.addClass(buttonClass);
      } else if (status == 'remove') {
        this.$button.removeClass(buttonClass);
      } else {
        this.$button.removeClass(this.options.style);
        this.$button.addClass(buttonClass);
      }
    },

    liHeight: function (refresh) {
      if (!refresh && (this.options.size === false || this.sizeInfo)) return;

      var newElement = document.createElement('div'),
        menu = document.createElement('div'),
        menuInner = document.createElement('ul'),
        divider = document.createElement('li'),
        li = document.createElement('li'),
        a = document.createElement('a'),
        text = document.createElement('span'),
        header = this.options.header && this.$menu.find('.popover-title').length > 0 ? this.$menu.find('.popover-title')[0].cloneNode(true) : null,
        search = this.options.liveSearch ? document.createElement('div') : null,
        actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
        doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;

      text.className = 'text';
      newElement.className = this.$menu[0].parentNode.className + ' open';
      menu.className = 'dropdown-menu open';
      menuInner.className = 'dropdown-menu inner';
      divider.className = 'divider';

      text.appendChild(document.createTextNode('Inner text'));
      a.appendChild(text);
      li.appendChild(a);
      menuInner.appendChild(li);
      menuInner.appendChild(divider);
      if (header) menu.appendChild(header);
      if (search) {
        var input = document.createElement('input');
        search.className = 'bs-searchbox';
        input.className = 'form-control';
        search.appendChild(input);
        menu.appendChild(search);
      }
      if (actions) menu.appendChild(actions);
      menu.appendChild(menuInner);
      if (doneButton) menu.appendChild(doneButton);
      newElement.appendChild(menu);

      document.body.appendChild(newElement);

      var liHeight = a.offsetHeight,
        headerHeight = header ? header.offsetHeight : 0,
        searchHeight = search ? search.offsetHeight : 0,
        actionsHeight = actions ? actions.offsetHeight : 0,
        doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
        dividerHeight = $(divider).outerHeight(true),
        // fall back to jQuery if getComputedStyle is not supported
        menuStyle = typeof getComputedStyle === 'function' ? getComputedStyle(menu) : false,
        $menu = menuStyle ? null : $(menu),
        menuPadding = {
          vert: parseInt(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) +
            parseInt(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) +
            parseInt(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) +
            parseInt(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
          horiz: parseInt(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) +
            parseInt(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) +
            parseInt(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) +
            parseInt(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
        },
        menuExtras = {
          vert: menuPadding.vert +
            parseInt(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) +
            parseInt(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
          horiz: menuPadding.horiz +
            parseInt(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) +
            parseInt(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
        }

      document.body.removeChild(newElement);

      this.sizeInfo = {
        liHeight: liHeight,
        headerHeight: headerHeight,
        searchHeight: searchHeight,
        actionsHeight: actionsHeight,
        doneButtonHeight: doneButtonHeight,
        dividerHeight: dividerHeight,
        menuPadding: menuPadding,
        menuExtras: menuExtras
      };
    },

    setSize: function () {
      this.findLis();
      this.liHeight();

      if (this.options.header) this.$menu.css('padding-top', 0);
      if (this.options.size === false) return;

      var that = this,
        $menu = this.$menu,
        $menuInner = this.$menuInner,
        $window = $(window),
        selectHeight = this.$newElement[0].offsetHeight,
        selectWidth = this.$newElement[0].offsetWidth,
        liHeight = this.sizeInfo['liHeight'],
        headerHeight = this.sizeInfo['headerHeight'],
        searchHeight = this.sizeInfo['searchHeight'],
        actionsHeight = this.sizeInfo['actionsHeight'],
        doneButtonHeight = this.sizeInfo['doneButtonHeight'],
        divHeight = this.sizeInfo['dividerHeight'],
        menuPadding = this.sizeInfo['menuPadding'],
        menuExtras = this.sizeInfo['menuExtras'],
        notDisabled = this.options.hideDisabled ? '.disabled' : '',
        menuHeight,
        menuWidth,
        getHeight,
        getWidth,
        selectOffsetTop,
        selectOffsetBot,
        selectOffsetLeft,
        selectOffsetRight,
        getPos = function () {
          var pos = that.$newElement.offset(),
            $container = $(that.options.container),
            containerPos;

          if (that.options.container && !$container.is('body')) {
            containerPos = $container.offset();
            containerPos.top += parseInt($container.css('borderTopWidth'));
            containerPos.left += parseInt($container.css('borderLeftWidth'));
          } else {
            containerPos = {
              top: 0,
              left: 0
            };
          }

          var winPad = that.options.windowPadding;
          selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
          selectOffsetBot = $window.height() - selectOffsetTop - selectHeight - containerPos.top - winPad[2];
          selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
          selectOffsetRight = $window.width() - selectOffsetLeft - selectWidth - containerPos.left - winPad[1];
          selectOffsetTop -= winPad[0];
          selectOffsetLeft -= winPad[3];
        };

      getPos();

      if (this.options.size === 'auto') {
        var getSize = function () {
          var minHeight,
            hasClass = function (className, include) {
              return function (element) {
                if (include) {
                  return (element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                } else {
                  return !(element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                }
              };
            },
            lis = that.$menuInner[0].getElementsByTagName('li'),
            lisVisible = Array.prototype.filter ? Array.prototype.filter.call(lis, hasClass('hidden', false)) : that.$lis.not('.hidden'),
            optGroup = Array.prototype.filter ? Array.prototype.filter.call(lisVisible, hasClass('dropdown-header', true)) : lisVisible.filter('.dropdown-header');

          getPos();
          menuHeight = selectOffsetBot - menuExtras.vert;
          menuWidth = selectOffsetRight - menuExtras.horiz;

          if (that.options.container) {
            if (!$menu.data('height')) $menu.data('height', $menu.height());
            getHeight = $menu.data('height');

            if (!$menu.data('width')) $menu.data('width', $menu.width());
            getWidth = $menu.data('width');
          } else {
            getHeight = $menu.height();
            getWidth = $menu.width();
          }

          if (that.options.dropupAuto) {
            that.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
          }

          if (that.$newElement.hasClass('dropup')) {
            menuHeight = selectOffsetTop - menuExtras.vert;
          }

          if (that.options.dropdownAlignRight === 'auto') {
            $menu.toggleClass('dropdown-menu-right', selectOffsetLeft > selectOffsetRight && (menuWidth - menuExtras.horiz) < (getWidth - selectWidth));
          }

          if ((lisVisible.length + optGroup.length) > 3) {
            minHeight = liHeight * 3 + menuExtras.vert - 2;
          } else {
            minHeight = 0;
          }

          $menu.css({
            'max-height': menuHeight + 'px',
            'overflow': 'hidden',
            'min-height': minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px'
          });
          $menuInner.css({
            'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert + 'px',
            'overflow-y': 'auto',
            'min-height': Math.max(minHeight - menuPadding.vert, 0) + 'px'
          });
        };
        getSize();
        this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
        $window.off('resize.getSize scroll.getSize').on('resize.getSize scroll.getSize', getSize);
      } else if (this.options.size && this.options.size != 'auto' && this.$lis.not(notDisabled).length > this.options.size) {
        var optIndex = this.$lis.not('.divider').not(notDisabled).children().slice(0, this.options.size).last().parent().index(),
          divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
        menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;

        if (that.options.container) {
          if (!$menu.data('height')) $menu.data('height', $menu.height());
          getHeight = $menu.data('height');
        } else {
          getHeight = $menu.height();
        }

        if (that.options.dropupAuto) {
          //noinspection JSUnusedAssignment
          this.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
        }
        $menu.css({
          'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
          'overflow': 'hidden',
          'min-height': ''
        });
        $menuInner.css({
          'max-height': menuHeight - menuPadding.vert + 'px',
          'overflow-y': 'auto',
          'min-height': ''
        });
      }
    },

    setWidth: function () {
      if (this.options.width === 'auto') {
        this.$menu.css('min-width', '0');

        // Get correct width if element is hidden
        var $selectClone = this.$menu.parent().clone().appendTo('body'),
          $selectClone2 = this.options.container ? this.$newElement.clone().appendTo('body') : $selectClone,
          ulWidth = $selectClone.children('.dropdown-menu').outerWidth(),
          btnWidth = $selectClone2.css('width', 'auto').children('button').outerWidth();

        $selectClone.remove();
        $selectClone2.remove();

        // Set width to whatever's larger, button title or longest option
        this.$newElement.css('width', Math.max(ulWidth, btnWidth) + 'px');
      } else if (this.options.width === 'fit') {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '').addClass('fit-width');
      } else if (this.options.width) {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', this.options.width);
      } else {
        // Remove inline min-width/width so width can be changed
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '');
      }
      // Remove fit-width class if width is changed programmatically
      if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
        this.$newElement.removeClass('fit-width');
      }
    },

    selectPosition: function () {
      this.$bsContainer = $('<div class="bs-container" />');

      var that = this,
        $container = $(this.options.container),
        pos,
        containerPos,
        actualHeight,
        getPlacement = function ($element) {
          that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
          pos = $element.offset();

          if (!$container.is('body')) {
            containerPos = $container.offset();
            containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
            containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
          } else {
            containerPos = {
              top: 0,
              left: 0
            };
          }

          actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;

          that.$bsContainer.css({
            'top': pos.top - containerPos.top + actualHeight,
            'left': pos.left - containerPos.left,
            'width': $element[0].offsetWidth
          });
        };

      this.$button.on('click', function () {
        var $this = $(this);

        if (that.isDisabled()) {
          return;
        }

        getPlacement(that.$newElement);

        that.$bsContainer
          .appendTo(that.options.container)
          .toggleClass('open', !$this.hasClass('open'))
          .append(that.$menu);
      });

      $(window).on('resize scroll', function () {
        getPlacement(that.$newElement);
      });

      this.$element.on('hide.bs.select', function () {
        that.$menu.data('height', that.$menu.height());
        that.$bsContainer.detach();
      });
    },

    /**
     * @param {number} index - the index of the option that is being changed
     * @param {boolean} selected - true if the option is being selected, false if being deselected
     * @param {JQuery} $lis - the 'li' element that is being modified
     */
    setSelected: function (index, selected, $lis) {
      if (!$lis) {
        this.togglePlaceholder(); // check if setSelected is being called by changing the value of the select
        $lis = this.findLis().eq(this.liObj[index]);
      }

      $lis.toggleClass('selected', selected).find('a').attr('aria-selected', selected);
    },

    /**
     * @param {number} index - the index of the option that is being disabled
     * @param {boolean} disabled - true if the option is being disabled, false if being enabled
     * @param {JQuery} $lis - the 'li' element that is being modified
     */
    setDisabled: function (index, disabled, $lis) {
      if (!$lis) {
        $lis = this.findLis().eq(this.liObj[index]);
      }

      if (disabled) {
        $lis.addClass('disabled').children('a').attr('href', '#').attr('tabindex', -1).attr('aria-disabled', true);
      } else {
        $lis.removeClass('disabled').children('a').removeAttr('href').attr('tabindex', 0).attr('aria-disabled', false);
      }
    },

    isDisabled: function () {
      return this.$element[0].disabled;
    },

    checkDisabled: function () {
      var that = this;

      if (this.isDisabled()) {
        this.$newElement.addClass('disabled');
        this.$button.addClass('disabled').attr('tabindex', -1).attr('aria-disabled', true);
      } else {
        if (this.$button.hasClass('disabled')) {
          this.$newElement.removeClass('disabled');
          this.$button.removeClass('disabled').attr('aria-disabled', false);
        }

        if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
          this.$button.removeAttr('tabindex');
        }
      }

      this.$button.click(function () {
        return !that.isDisabled();
      });
    },

    togglePlaceholder: function () {
      var value = this.$element.val();
      this.$button.toggleClass('bs-placeholder', value === null || value === '' || (value.constructor === Array && value.length === 0));
    },

    tabIndex: function () {
      if (this.$element.data('tabindex') !== this.$element.attr('tabindex') &&
        (this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98')) {
        this.$element.data('tabindex', this.$element.attr('tabindex'));
        this.$button.attr('tabindex', this.$element.data('tabindex'));
      }

      this.$element.attr('tabindex', -98);
    },

    clickListener: function () {
      var that = this,
        $document = $(document);

      $document.data('spaceSelect', false);

      this.$button.on('keyup', function (e) {
        if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
          e.preventDefault();
          $document.data('spaceSelect', false);
        }
      });

      //TODO: this should not happen before the list is initialised in case
      //lazy loading option is used.
      this.$button.on('click', function () {
        that.setSize();
      });

      this.$element.on('shown.bs.select', function () {
        if (!that.options.liveSearch && !that.multiple) {
          that.$menuInner.find('.selected a').focus();
        } else if (!that.multiple) {
          var selectedIndex = that.liObj[that.$element[0].selectedIndex];

          if (typeof selectedIndex !== 'number' || that.options.size === false) return;

          // scroll to selected option
          var offset = that.$lis.eq(selectedIndex)[0].offsetTop - that.$menuInner[0].offsetTop;
          offset = offset - that.$menuInner[0].offsetHeight / 2 + that.sizeInfo.liHeight / 2;
          that.$menuInner[0].scrollTop = offset;
        }
      });

      this.$menuInner.on('click', 'li a', function (e) {
        var $this = $(this),
          clickedIndex = $this.parent().data('originalIndex'),
          prevValue = that.$element.val(),
          prevIndex = that.$element.prop('selectedIndex'),
          triggerChange = true;

        // Don't close on multi choice menu
        if (that.multiple && that.options.maxOptions !== 1) {
          e.stopPropagation();
        }

        e.preventDefault();

        //Don't run if we have been disabled
        if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
          var $options = that.$element.find('option'),
            $option = $options.eq(clickedIndex),
            state = $option.prop('selected'),
            $optgroup = $option.parent('optgroup'),
            maxOptions = that.options.maxOptions,
            maxOptionsGrp = $optgroup.data('maxOptions') || false;

          if (!that.multiple) { // Deselect all others if not multi select box
            $options.prop('selected', false);
            $option.prop('selected', true);
            that.$menuInner.find('.selected').removeClass('selected').find('a').attr('aria-selected', false);
            that.setSelected(clickedIndex, true);
          } else { // Toggle the one we have chosen if we are multi select.
            $option.prop('selected', !state);
            that.setSelected(clickedIndex, !state);
            $this.blur();

            if (maxOptions !== false || maxOptionsGrp !== false) {
              var maxReached = maxOptions < $options.filter(':selected').length,
                maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

              if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                if (maxOptions && maxOptions == 1) {
                  $options.prop('selected', false);
                  $option.prop('selected', true);
                  that.$menuInner.find('.selected').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                  $optgroup.find('option:selected').prop('selected', false);
                  $option.prop('selected', true);
                  var optgroupID = $this.parent().data('optgroup');
                  that.$menuInner.find('[data-optgroup="' + optgroupID + '"]').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else {
                  var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                    maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                    maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                    maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                    $notify = $('<div class="notify"></div>');
                  // If {var} is set in array, replace it
                  /** @deprecated */
                  if (maxOptionsArr[2]) {
                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                  }

                  $option.prop('selected', false);

                  that.$menu.append($notify);

                  if (maxOptions && maxReached) {
                    $notify.append($('<div>' + maxTxt + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReached.bs.select');
                  }

                  if (maxOptionsGrp && maxReachedGrp) {
                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReachedGrp.bs.select');
                  }

                  setTimeout(function () {
                    that.setSelected(clickedIndex, false);
                  }, 10);

                  $notify.delay(750).fadeOut(300, function () {
                    $(this).remove();
                  });
                }
              }
            }
          }

          if (!that.multiple || (that.multiple && that.options.maxOptions === 1)) {
            that.$button.focus();
          } else if (that.options.liveSearch) {
            that.$searchbox.focus();
          }

          // Trigger select 'change'
          if (triggerChange) {
            if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
              // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
              changed_arguments = [clickedIndex, $option.prop('selected'), state];
              that.$element
                .triggerNative('change');
            }
          }
        }
      });

      this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function (e) {
        if (e.currentTarget == this) {
          e.preventDefault();
          e.stopPropagation();
          if (that.options.liveSearch && !$(e.target).hasClass('close')) {
            that.$searchbox.focus();
          } else {
            that.$button.focus();
          }
        }
      });

      this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }
      });

      this.$menu.on('click', '.popover-title .close', function () {
        that.$button.click();
      });

      this.$searchbox.on('click', function (e) {
        e.stopPropagation();
      });

      this.$menu.on('click', '.actions-btn', function (e) {
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }

        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass('bs-select-all')) {
          that.selectAll();
        } else {
          that.deselectAll();
        }
      });

      this.$element.change(function () {
        that.render(false);
        that.$element.trigger('changed.bs.select', changed_arguments);
        changed_arguments = null;
      });
    },

    liveSearchListener: function () {
      var that = this,
        $no_results = $('<li class="no-results"></li>');

      this.$button.on('click.dropdown.data-api', function () {
        that.$menuInner.find('.active').removeClass('active');
        if (!!that.$searchbox.val()) {
          that.$searchbox.val('');
          that.$lis.not('.is-hidden').removeClass('hidden');
          if (!!$no_results.parent().length) $no_results.remove();
        }
        if (!that.multiple) that.$menuInner.find('.selected').addClass('active');
        setTimeout(function () {
          that.$searchbox.focus();
        }, 10);
      });

      this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function (e) {
        e.stopPropagation();
      });

      this.$searchbox.on('input propertychange', function () {
        that.$lis.not('.is-hidden').removeClass('hidden');
        that.$lis.filter('.active').removeClass('active');
        $no_results.remove();

        if (that.$searchbox.val()) {
          var $searchBase = that.$lis.not('.is-hidden, .divider, .dropdown-header'),
            $hideItems;
          if (that.options.liveSearchNormalize) {
            $hideItems = $searchBase.not(':a' + that._searchStyle() + '("' + normalizeToBase(that.$searchbox.val()) + '")');
          } else {
            $hideItems = $searchBase.not(':' + that._searchStyle() + '("' + that.$searchbox.val() + '")');
          }

          if ($hideItems.length === $searchBase.length) {
            $no_results.html(that.options.noneResultsText.replace('{0}', '"' + htmlEscape(that.$searchbox.val()) + '"'));
            that.$menuInner.append($no_results);
            that.$lis.addClass('hidden');
          } else {
            $hideItems.addClass('hidden');

            var $lisVisible = that.$lis.not('.hidden'),
              $foundDiv;

            // hide divider if first or last visible, or if followed by another divider
            $lisVisible.each(function (index) {
              var $this = $(this);

              if ($this.hasClass('divider')) {
                if ($foundDiv === undefined) {
                  $this.addClass('hidden');
                } else {
                  if ($foundDiv) $foundDiv.addClass('hidden');
                  $foundDiv = $this;
                }
              } else if ($this.hasClass('dropdown-header') && $lisVisible.eq(index + 1).data('optgroup') !== $this.data('optgroup')) {
                $this.addClass('hidden');
              } else {
                $foundDiv = null;
              }
            });
            if ($foundDiv) $foundDiv.addClass('hidden');

            $searchBase.not('.hidden').first().addClass('active');
            that.$menuInner.scrollTop(0);
          }
        }
      });
    },

    _searchStyle: function () {
      var styles = {
        begins: 'ibegins',
        startsWith: 'ibegins'
      };

      return styles[this.options.liveSearchStyle] || 'icontains';
    },

    val: function (value) {
      if (typeof value !== 'undefined') {
        this.$element.val(value);
        this.render();

        return this.$element;
      } else {
        return this.$element.val();
      }
    },

    changeAll: function (status) {
      if (!this.multiple) return;
      if (typeof status === 'undefined') status = true;

      this.findLis();

      var $options = this.$element.find('option'),
        $lisVisible = this.$lis.not('.divider, .dropdown-header, .disabled, .hidden'),
        lisVisLen = $lisVisible.length,
        selectedOptions = [];

      if (status) {
        if ($lisVisible.filter('.selected').length === $lisVisible.length) return;
      } else {
        if ($lisVisible.filter('.selected').length === 0) return;
      }

      $lisVisible.toggleClass('selected', status);

      for (var i = 0; i < lisVisLen; i++) {
        var origIndex = $lisVisible[i].getAttribute('data-original-index');
        selectedOptions[selectedOptions.length] = $options.eq(origIndex)[0];
      }

      $(selectedOptions).prop('selected', status);

      this.render(false);

      this.togglePlaceholder();

      this.$element
        .triggerNative('change');
    },

    selectAll: function () {
      return this.changeAll(true);
    },

    deselectAll: function () {
      return this.changeAll(false);
    },

    toggle: function (e) {
      e = e || window.event;

      if (e) e.stopPropagation();

      this.$button.trigger('click');
    },

    keydown: function (e) {
      var $this = $(this),
        $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
        $items,
        that = $parent.data('this'),
        index,
        prevIndex,
        isActive,
        selector = ':not(.disabled, .hidden, .dropdown-header, .divider)',
        keyCodeMap = {
          32: ' ',
          48: '0',
          49: '1',
          50: '2',
          51: '3',
          52: '4',
          53: '5',
          54: '6',
          55: '7',
          56: '8',
          57: '9',
          59: ';',
          65: 'a',
          66: 'b',
          67: 'c',
          68: 'd',
          69: 'e',
          70: 'f',
          71: 'g',
          72: 'h',
          73: 'i',
          74: 'j',
          75: 'k',
          76: 'l',
          77: 'm',
          78: 'n',
          79: 'o',
          80: 'p',
          81: 'q',
          82: 'r',
          83: 's',
          84: 't',
          85: 'u',
          86: 'v',
          87: 'w',
          88: 'x',
          89: 'y',
          90: 'z',
          96: '0',
          97: '1',
          98: '2',
          99: '3',
          100: '4',
          101: '5',
          102: '6',
          103: '7',
          104: '8',
          105: '9'
        };


      isActive = that.$newElement.hasClass('open');

      if (!isActive && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90)) {
        if (!that.options.container) {
          that.setSize();
          that.$menu.parent().addClass('open');
          isActive = true;
        } else {
          that.$button.trigger('click');
        }
        that.$searchbox.focus();
        return;
      }

      if (that.options.liveSearch) {
        if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive) {
          e.preventDefault();
          e.stopPropagation();
          that.$menuInner.click();
          that.$button.focus();
        }
      }

      if (/(38|40)/.test(e.keyCode.toString(10))) {
        $items = that.$lis.filter(selector);
        if (!$items.length) return;

        if (!that.options.liveSearch) {
          index = $items.index($items.find('a').filter(':focus').parent());
        } else {
          index = $items.index($items.filter('.active'));
        }

        prevIndex = that.$menuInner.data('prevIndex');

        if (e.keyCode == 38) {
          if ((that.options.liveSearch || index == prevIndex) && index != -1) index--;
          if (index < 0) index += $items.length;
        } else if (e.keyCode == 40) {
          if (that.options.liveSearch || index == prevIndex) index++;
          index = index % $items.length;
        }

        that.$menuInner.data('prevIndex', index);

        if (!that.options.liveSearch) {
          $items.eq(index).children('a').focus();
        } else {
          e.preventDefault();
          if (!$this.hasClass('dropdown-toggle')) {
            $items.removeClass('active').eq(index).addClass('active').children('a').focus();
            $this.focus();
          }
        }

      } else if (!$this.is('input')) {
        var keyIndex = [],
          count,
          prevKey;

        $items = that.$lis.filter(selector);
        $items.each(function (i) {
          if ($.trim($(this).children('a').text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
            keyIndex.push(i);
          }
        });

        count = $(document).data('keycount');
        count++;
        $(document).data('keycount', count);

        prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);

        if (prevKey != keyCodeMap[e.keyCode]) {
          count = 1;
          $(document).data('keycount', count);
        } else if (count >= keyIndex.length) {
          $(document).data('keycount', 0);
          if (count > keyIndex.length) count = 1;
        }

        $items.eq(keyIndex[count - 1]).children('a').focus();
      }

      // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
      if ((/(13|32)/.test(e.keyCode.toString(10)) || (/(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab)) && isActive) {
        if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
        if (!that.options.liveSearch) {
          var elem = $(':focus');
          elem.click();
          // Bring back focus for multiselects
          elem.focus();
          // Prevent screen from scrolling if the user hit the spacebar
          e.preventDefault();
          // Fixes spacebar selection of dropdown items in FF & IE
          $(document).data('spaceSelect', true);
        } else if (!/(32)/.test(e.keyCode.toString(10))) {
          that.$menuInner.find('.active a').click();
          $this.focus();
        }
        $(document).data('keycount', 0);
      }

      if ((/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode.toString(10)) && !isActive)) {
        that.$menu.parent().removeClass('open');
        if (that.options.container) that.$newElement.removeClass('open');
        that.$button.focus();
      }
    },

    mobile: function () {
      this.$element.addClass('mobile-device');
    },

    refresh: function () {
      this.$lis = null;
      this.liObj = {};
      this.reloadLi();
      this.render();
      this.checkDisabled();
      this.liHeight(true);
      this.setStyle();
      this.setWidth();
      if (this.$lis) this.$searchbox.trigger('propertychange');

      this.$element.trigger('refreshed.bs.select');
    },

    hide: function () {
      this.$newElement.hide();
    },

    show: function () {
      this.$newElement.show();
    },

    remove: function () {
      this.$newElement.remove();
      this.$element.remove();
    },

    destroy: function () {
      this.$newElement.before(this.$element).remove();

      if (this.$bsContainer) {
        this.$bsContainer.remove();
      } else {
        this.$menu.remove();
      }

      this.$element
        .off('.bs.select')
        .removeData('selectpicker')
        .removeClass('bs-select-hidden selectpicker');
    }
  };

  // SELECTPICKER PLUGIN DEFINITION
  // ==============================
  function Plugin(option) {
    // get the args of the outer function..
    var args = arguments;
    // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
    // to get lost/corrupted in android 2.3 and IE9 #715 #775
    var _option = option;

    [].shift.apply(args);

    var value;
    var chain = this.each(function () {
      var $this = $(this);
      if ($this.is('select')) {
        var data = $this.data('selectpicker'),
          options = typeof _option == 'object' && _option;

        if (!data) {
          var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
          config.template = $.extend({}, Selectpicker.DEFAULTS.template, ($.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}), $this.data().template, options.template);
          $this.data('selectpicker', (data = new Selectpicker(this, config)));
        } else if (options) {
          for (var i in options) {
            if (options.hasOwnProperty(i)) {
              data.options[i] = options[i];
            }
          }
        }

        if (typeof _option == 'string') {
          if (data[_option] instanceof Function) {
            value = data[_option].apply(data, args);
          } else {
            value = data.options[_option];
          }
        }
      }
    });

    if (typeof value !== 'undefined') {
      //noinspection JSUnusedAssignment
      return value;
    } else {
      return chain;
    }
  }

  var old = $.fn.selectpicker;
  $.fn.selectpicker = Plugin;
  $.fn.selectpicker.Constructor = Selectpicker;

  // SELECTPICKER NO CONFLICT
  // ========================
  $.fn.selectpicker.noConflict = function () {
    $.fn.selectpicker = old;
    return this;
  };

  $(document)
    .data('keycount', 0)
    .on('keydown.bs.select', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', Selectpicker.prototype.keydown)
    .on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function (e) {
      e.stopPropagation();
    });

  // SELECTPICKER DATA-API
  // =====================
  $(window).on('load.bs.select.data-api', function () {
    $('.selectpicker').each(function () {
      var $selectpicker = $(this);
      Plugin.call($selectpicker, $selectpicker.data());
    })
  });
})(jQuery);

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }

  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
  }

  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe
  }

  function p(e) {
    if (!e) return document.documentElement;
    for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode)
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host)
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      n = e.nodeName;
    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i;
      return r[o]
    }
    return e[o]
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = l(t, 'top'),
      i = l(t, 'left'),
      r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
  }

  function h(e, t, o, n) {
    return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
  }

  function c() {
    var e = document.body,
      t = document.documentElement,
      o = r(10) && getComputedStyle(t);
    return {
      height: h('Height', e, t, o),
      width: h('Width', e, t, o)
    }
  }

  function g(e) {
    return le({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    })
  }

  function u(e) {
    var o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
          i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i
      } else o = e.getBoundingClientRect()
    } catch (t) {}
    var p = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      },
      s = 'HTML' === e.nodeName ? c() : {},
      d = s.width || e.clientWidth || p.right - p.left,
      a = s.height || e.clientHeight || p.bottom - p.top,
      f = e.offsetWidth - d,
      h = e.offsetHeight - a;
    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
    }
    return g(p)
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      p = r(10),
      s = 'HTML' === o.nodeName,
      d = u(e),
      a = u(o),
      l = n(e),
      m = t(o),
      h = parseFloat(m.borderTopWidth, 10),
      c = parseFloat(m.borderLeftWidth, 10);
    i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });
    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var y = parseFloat(m.marginTop, 10),
        w = parseFloat(m.marginLeft, 10);
      b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
    }
    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
  }

  function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = b(e, o),
      i = $(o.clientWidth, window.innerWidth || 0),
      r = $(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : l(o),
      s = t ? 0 : l(o, 'left'),
      d = {
        top: p - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: i,
        height: r
      };
    return g(d)
  }

  function w(e) {
    var n = e.nodeName;
    return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
    return o || document.documentElement
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = {
        top: 0,
        left: 0
      },
      d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = y(d, p);
    else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);
      if ('HTML' === l.nodeName && !w(d)) {
        var m = c(),
          h = m.height,
          g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
      } else s = f
    }
    return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
  }

  function x(e) {
    var t = e.width,
      o = e.height;
    return t * o
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
      s = {
        top: {
          width: p.width,
          height: t.top - p.top
        },
        right: {
          width: p.right - t.right,
          height: p.height
        },
        bottom: {
          width: p.width,
          height: p.bottom - t.bottom
        },
        left: {
          width: t.left - p.left,
          height: p.height
        }
      },
      d = Object.keys(s).map(function (e) {
        return le({
          key: e
        }, s[e], {
          area: x(s[e])
        })
      }).sort(function (e, t) {
        return t.area - e.area
      }),
      a = d.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= o.clientWidth && n >= o.clientHeight
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '')
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? E(t) : a(t, o);
    return b(o, i, n)
  }

  function S(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      i = {
        width: e.offsetWidth + n,
        height: e.offsetHeight + o
      };
    return i
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }

  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
      i = {
        width: n.width,
        height: n.height
      },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
  }

  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o
    });
    var n = D(e, function (e) {
      return e[t] === o
    });
    return e.indexOf(n)
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
    }), o
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        n = e.enabled;
      return n && o === t
    })
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r
    }
    return null
  }

  function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p)
  }

  function I(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
  }

  function F() {
    this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound)
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
    })
  }

  function K(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
    })
  }

  function q(e, t, o) {
    var n = D(e, function (e) {
        var o = e.name;
        return o === t
      }),
      i = !!n && e.some(function (e) {
        return e.name === o && e.enabled && e.order < n.order
      });
    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
    }
    return i
  }

  function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }

  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = me.indexOf(e),
      n = me.slice(o + 1).concat(me.slice(0, o));
    return t ? n.reverse() : n
  }

  function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = n;
      }
      var d = g(s);
      return d[t] / 100 * r
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
    }
    return r
  }

  function _(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(n),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim()
      }),
      s = p.indexOf(D(p, function (e) {
        return -1 !== e.search(/,|\s/)
      }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
        p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
      }, []).map(function (e) {
        return V(e, i, t, o)
      })
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
      })
    }), i
  }

  function X(e, t) {
    var o, n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
  }
  for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
    if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
      oe = 1;
      break
    }
  var i = ee && window.Promise,
    ie = i ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e()
        }))
      }
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e()
        }, oe))
      }
    },
    re = ee && !!(window.MSInputMethodContext && document.documentMode),
    pe = ee && /MSIE 10/.test(navigator.userAgent),
    se = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    },
    de = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    }(),
    ae = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    },
    le = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++)
        for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    },
    fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    me = fe.slice(3),
    he = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    ce = function () {
      function t(o, n) {
        var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        se(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(i.update)
        }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return le({
            name: e
          }, i.options.modifiers[e])
        }).sort(function (e, t) {
          return e.order - t.order
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p
      }
      return de(t, [{
        key: 'update',
        value: function () {
          return k.call(this)
        }
      }, {
        key: 'destroy',
        value: function () {
          return H.call(this)
        }
      }, {
        key: 'enableEventListeners',
        value: function () {
          return F.call(this)
        }
      }, {
        key: 'disableEventListeners',
        value: function () {
          return U.call(this)
        }
      }]), t
    }();
  return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function () {},
    onUpdate: function () {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            n = t.split('-')[1];
          if (n) {
            var i = e.offsets,
              r = i.reference,
              p = i.popper,
              s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top',
              a = s ? 'width' : 'height',
              l = {
                start: ae({}, d, r[d]),
                end: ae({}, d, r[d] + r[a] - p[a])
              };
            e.offsets.popper = le({}, p, l[n])
          }
          return e
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: X,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = B('transform'),
            i = e.instance.popper.style,
            r = i.top,
            s = i.left,
            d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
            f = e.offsets.popper,
            m = {
              primary: function (e) {
                var o = f[e];
                return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o)
              },
              secondary: function (e) {
                var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
                return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
              }
            };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = le({}, f, m[t](e))
          }), e.offsets.popper = f, e
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
            o = t.popper,
            n = t.reference,
            i = e.placement.split('-')[0],
            r = Z,
            p = -1 !== ['top', 'bottom'].indexOf(i),
            s = p ? 'right' : 'bottom',
            d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, o) {
          var n;
          if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;
          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          var r = e.placement.split('-')[0],
            p = e.offsets,
            s = p.popper,
            d = p.reference,
            a = -1 !== ['left', 'right'].indexOf(r),
            l = a ? 'height' : 'width',
            f = a ? 'Top' : 'Left',
            m = f.toLowerCase(),
            h = a ? 'left' : 'top',
            c = a ? 'bottom' : 'right',
            u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
            y = t(e.instance.popper),
            w = parseFloat(y['margin' + f], 10),
            E = parseFloat(y['border' + f + 'Width'], 10),
            v = b - e.offsets.popper[m] - w - E;
          return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
            n = e.placement.split('-')[0],
            i = T(n),
            r = e.placement.split('-')[1] || '',
            p = [];
          switch (t.behavior) {
            case he.FLIP:
              p = [n, i];
              break;
            case he.CLOCKWISE:
              p = z(n);
              break;
            case he.COUNTERCLOCKWISE:
              p = z(n, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
              l = e.offsets.reference,
              f = Z,
              m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
              h = f(a.left) < f(o.left),
              c = f(a.right) > f(o.right),
              g = f(a.top) < f(o.top),
              u = f(a.bottom) > f(o.bottom),
              b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
              y = -1 !== ['top', 'bottom'].indexOf(n),
              w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
          }), e
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            n = e.offsets,
            i = n.popper,
            r = n.reference,
            p = -1 !== ['left', 'right'].indexOf(o),
            s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            o = D(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name
            }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
          }
          return e
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var o = t.x,
            n = t.y,
            i = e.offsets.popper,
            r = D(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name
            }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s, d, a = void 0 === r ? t.gpuAcceleration : r,
            l = p(e.instance.popper),
            f = u(l),
            m = {
              position: i.position
            },
            h = {
              left: Z(i.left),
              top: Q(i.top),
              bottom: Q(i.bottom),
              right: Z(i.right)
            },
            c = 'bottom' === o ? 'top' : 'bottom',
            g = 'right' === n ? 'left' : 'right',
            b = B('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
          else {
            var y = 'bottom' == c ? -1 : 1,
              w = 'right' == g ? -1 : 1;
            m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
        },
        onLoad: function (e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
            p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), j(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o
        },
        gpuAcceleration: void 0
      }
    }
  }, ce
});
