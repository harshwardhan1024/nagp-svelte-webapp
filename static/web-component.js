function F() {
}
function Ce(t) {
  return t();
}
function Re() {
  return /* @__PURE__ */ Object.create(null);
}
function L(t) {
  t.forEach(Ce);
}
function _e(t) {
  return typeof t == "function";
}
function he(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let se;
function Ze(t, e) {
  return se || (se = document.createElement("a")), se.href = e, t === se.href;
}
function Je(t) {
  return Object.keys(t).length === 0;
}
function Te(t, ...e) {
  if (t == null)
    return F;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ze(t, e, n) {
  t.$$.on_destroy.push(Te(e, n));
}
const et = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in et;
function a(t, e) {
  t.appendChild(e);
}
function U(t, e, n) {
  t.insertBefore(e, n || null);
}
function H(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ve(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function m(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createTextNode(t);
}
function Q() {
  return Y(" ");
}
function ye() {
  return Y("");
}
function Z(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function f(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function tt(t) {
  return Array.from(t.childNodes);
}
function ie(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function v(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
function Qe(t, e, n) {
  for (let l = 0; l < t.options.length; l += 1) {
    const i = t.options[l];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function nt(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function we(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let ke;
function re(t) {
  ke = t;
}
const ee = [], Be = [];
let te = [];
const De = [], lt = /* @__PURE__ */ Promise.resolve();
let be = !1;
function it() {
  be || (be = !0, lt.then(oe));
}
function de(t) {
  te.push(t);
}
const Ae = /* @__PURE__ */ new Set();
let J = 0;
function oe() {
  if (J !== 0)
    return;
  const t = ke;
  do {
    try {
      for (; J < ee.length; ) {
        const e = ee[J];
        J++, re(e), rt(e.$$);
      }
    } catch (e) {
      throw ee.length = 0, J = 0, e;
    }
    for (re(null), ee.length = 0, J = 0; Be.length; )
      Be.pop()();
    for (let e = 0; e < te.length; e += 1) {
      const n = te[e];
      Ae.has(n) || (Ae.add(n), n());
    }
    te.length = 0;
  } while (ee.length);
  for (; De.length; )
    De.pop()();
  be = !1, Ae.clear(), re(t);
}
function rt(t) {
  if (t.fragment !== null) {
    t.update(), L(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(de);
  }
}
function ot(t) {
  const e = [], n = [];
  te.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), te = e;
}
const ae = /* @__PURE__ */ new Set();
let z;
function ge() {
  z = {
    r: 0,
    c: [],
    p: z
    // parent group
  };
}
function pe() {
  z.r || L(z.c), z = z.p;
}
function G(t, e) {
  t && t.i && (ae.delete(t), t.i(e));
}
function j(t, e, n, l) {
  if (t && t.o) {
    if (ae.has(t))
      return;
    ae.add(t), z.c.push(() => {
      ae.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const st = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...st];
function Le(t) {
  t && t.c();
}
function Ee(t, e, n, l) {
  const { fragment: i, after_update: u } = t.$$;
  i && i.m(e, n), l || de(() => {
    const r = t.$$.on_mount.map(Ce).filter(_e);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : L(r), t.$$.on_mount = [];
  }), u.forEach(de);
}
function Ie(t, e) {
  const n = t.$$;
  n.fragment !== null && (ot(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ct(t, e) {
  t.$$.dirty[0] === -1 && (ee.push(t), it(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Fe(t, e, n, l, i, u, r, c = [-1]) {
  const o = ke;
  re(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: F,
    not_equal: i,
    bound: Re(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Re(),
    dirty: c,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  r && r(s.root);
  let A = !1;
  if (s.ctx = n ? n(t, e.props || {}, (d, w, ...P) => {
    const B = P.length ? P[0] : w;
    return s.ctx && i(s.ctx[d], s.ctx[d] = B) && (!s.skip_bound && s.bound[d] && s.bound[d](B), A && ct(t, d)), w;
  }) : [], s.update(), A = !0, L(s.before_update), s.fragment = l ? l(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = tt(e.target);
      s.fragment && s.fragment.l(d), d.forEach(H);
    } else
      s.fragment && s.fragment.c();
    e.intro && G(t.$$.fragment), Ee(t, e.target, e.anchor, e.customElement), oe();
  }
  re(o);
}
let me;
typeof HTMLElement == "function" && (me = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Ce).filter(_e);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    L(this.$$.on_disconnect);
  }
  $destroy() {
    Ie(this, 1), this.$destroy = F;
  }
  $on(t, e) {
    if (!_e(e))
      return F;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !Je(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const T = [];
function ut(t, e = F) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(c) {
    if (he(t, c) && (t = c, n)) {
      const o = !T.length;
      for (const s of l)
        s[1](), T.push(s, t);
      if (o) {
        for (let s = 0; s < T.length; s += 2)
          T[s][0](T[s + 1]);
        T.length = 0;
      }
    }
  }
  function u(c) {
    i(c(t));
  }
  function r(c, o = F) {
    const s = [c, o];
    return l.add(s), l.size === 1 && (n = e(i) || F), c(t), () => {
      l.delete(s), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: u, subscribe: r };
}
const fe = ut([]);
let ce;
const at = new Uint8Array(16);
function ft() {
  if (!ce && (ce = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ce))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ce(at);
}
const I = [];
for (let t = 0; t < 256; ++t)
  I.push((t + 256).toString(16).slice(1));
function dt(t, e = 0) {
  return (I[t[e + 0]] + I[t[e + 1]] + I[t[e + 2]] + I[t[e + 3]] + "-" + I[t[e + 4]] + I[t[e + 5]] + "-" + I[t[e + 6]] + I[t[e + 7]] + "-" + I[t[e + 8]] + I[t[e + 9]] + "-" + I[t[e + 10]] + I[t[e + 11]] + I[t[e + 12]] + I[t[e + 13]] + I[t[e + 14]] + I[t[e + 15]]).toLowerCase();
}
const ht = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), $e = {
  randomUUID: ht
};
function gt(t, e, n) {
  if ($e.randomUUID && !e && !t)
    return $e.randomUUID();
  t = t || {};
  const l = t.random || (t.rng || ft)();
  if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, e) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      e[n + i] = l[i];
    return e;
  }
  return dt(l);
}
function He(t, e, n) {
  const l = t.slice();
  return l[13] = e[n], l;
}
function Oe(t) {
  let e, n = (
    /*node*/
    t[13].name + ""
  ), l, i;
  return {
    c() {
      e = m("option"), l = Y(n), e.__value = i = /*node*/
      t[13].id, e.value = e.__value;
    },
    m(u, r) {
      U(u, e, r), a(e, l);
    },
    p(u, r) {
      r & /*$fileStore*/
      32 && n !== (n = /*node*/
      u[13].name + "") && ie(l, n), r & /*$fileStore*/
      32 && i !== (i = /*node*/
      u[13].id) && (e.__value = i, e.value = e.__value);
    },
    d(u) {
      u && H(e);
    }
  };
}
function Ve(t) {
  let e;
  return {
    c() {
      e = m("p"), e.textContent = "Please add a directory to enable these options.", f(e, "class", "warning-text");
    },
    m(n, l) {
      U(n, e, l);
    },
    d(n) {
      n && H(e);
    }
  };
}
function Ge(t) {
  let e;
  return {
    c() {
      e = m("p"), e.textContent = "Name must be unique among siblings.", f(e, "class", "error");
    },
    m(n, l) {
      U(n, e, l);
    },
    d(n) {
      n && H(e);
    }
  };
}
function pt(t) {
  let e, n, l, i, u, r, c, o, s, A, d, w, P, B, M, _, y, O, K = (
    /*$fileStore*/
    t[5].filter(Ke).length === 0
  ), S, N, X, k, W, D, q, ne, $, C, le, g, b = (
    /*$fileStore*/
    t[5].filter(Xe)
  ), h = [];
  for (let p = 0; p < b.length; p += 1)
    h[p] = Oe(He(t, b, p));
  let x = K && Ve(), V = (
    /*error*/
    t[4] && Ge()
  );
  return {
    c() {
      e = m("div"), n = m("input"), l = Q(), i = m("span"), u = m("input"), r = Q(), c = m("label"), c.textContent = "Is File", o = Q(), s = m("div"), A = m("span"), d = m("input"), P = Q(), B = m("label"), B.textContent = "Save at Root", M = Q(), _ = m("select");
      for (let p = 0; p < h.length; p += 1)
        h[p].c();
      O = Q(), x && x.c(), N = Q(), X = m("div"), k = m("button"), W = Y("Save"), ne = Q(), $ = m("button"), $.textContent = "Cancel", C = Q(), V && V.c(), this.c = F, f(n, "type", "text"), f(n, "maxlength", "150"), f(n, "part", "name-input"), f(n, "class", "margin-bottom"), f(n, "placeholder", "File/Directory Name"), n.value = /*name*/
      t[0], f(u, "name", "isFile"), f(u, "type", "checkbox"), f(c, "for", "isFile"), f(i, "class", "margin-bottom flex flex-row items-center column-gap-sm"), f(d, "name", "saveAtRoot"), f(d, "type", "checkbox"), d.disabled = w = /*$fileStore*/
      t[5].filter(Pe).length === 0, f(B, "for", "saveAtRoot"), f(A, "class", "flex flex-row items-center column-gap-sm margin-bottom"), _.disabled = /*saveAtRoot*/
      t[2], f(_, "part", y = /*saveAtRoot*/
      t[2] ? "parent-input-disabled" : "parent-input"), /*parentDirectoryIdToSaveIn*/
      t[3] === void 0 && de(() => (
        /*select_change_handler*/
        t[11].call(_)
      )), f(s, "class", S = /*$fileStore*/
      t[5].filter(Ye).length === 0 ? "warning flex-column margin-top-md" : "flex-column margin-top-md"), f(k, "class", "flex-one"), f(k, "part", D = ue(
        /*name*/
        t[0],
        /*saveAtRoot*/
        t[2],
        /*parentDirectoryIdToSaveIn*/
        t[3]
      ) ? "save-btn-disabled" : "save-btn"), k.disabled = q = ue(
        /*name*/
        t[0],
        /*saveAtRoot*/
        t[2],
        /*parentDirectoryIdToSaveIn*/
        t[3]
      ), f($, "class", "flex-one"), f($, "part", "cancel-btn"), f(X, "class", "margin-top-lg flex-row column-gap"), f(e, "class", "flex-column");
    },
    m(p, R) {
      U(p, e, R), a(e, n), a(e, l), a(e, i), a(i, u), u.checked = /*isFile*/
      t[1], a(i, r), a(i, c), a(e, o), a(e, s), a(s, A), a(A, d), d.checked = /*saveAtRoot*/
      t[2], a(A, P), a(A, B), a(s, M), a(s, _);
      for (let E = 0; E < h.length; E += 1)
        h[E] && h[E].m(_, null);
      Qe(
        _,
        /*parentDirectoryIdToSaveIn*/
        t[3],
        !0
      ), a(s, O), x && x.m(s, null), a(e, N), a(e, X), a(X, k), a(k, W), a(X, ne), a(X, $), a(e, C), V && V.m(e, null), le || (g = [
        Z(
          n,
          "input",
          /*onNameInput*/
          t[6]
        ),
        Z(
          u,
          "change",
          /*input1_change_handler*/
          t[9]
        ),
        Z(
          d,
          "change",
          /*input2_change_handler*/
          t[10]
        ),
        Z(
          _,
          "change",
          /*select_change_handler*/
          t[11]
        ),
        Z(
          k,
          "click",
          /*updateFileStore*/
          t[7]
        ),
        Z(
          $,
          "click",
          /*resetForm*/
          t[8]
        )
      ], le = !0);
    },
    p(p, [R]) {
      if (R & /*name*/
      1 && n.value !== /*name*/
      p[0] && (n.value = /*name*/
      p[0]), R & /*isFile*/
      2 && (u.checked = /*isFile*/
      p[1]), R & /*$fileStore*/
      32 && w !== (w = /*$fileStore*/
      p[5].filter(Pe).length === 0) && (d.disabled = w), R & /*saveAtRoot*/
      4 && (d.checked = /*saveAtRoot*/
      p[2]), R & /*$fileStore*/
      32) {
        b = /*$fileStore*/
        p[5].filter(Xe);
        let E;
        for (E = 0; E < b.length; E += 1) {
          const Ue = He(p, b, E);
          h[E] ? h[E].p(Ue, R) : (h[E] = Oe(Ue), h[E].c(), h[E].m(_, null));
        }
        for (; E < h.length; E += 1)
          h[E].d(1);
        h.length = b.length;
      }
      R & /*saveAtRoot*/
      4 && (_.disabled = /*saveAtRoot*/
      p[2]), R & /*saveAtRoot*/
      4 && y !== (y = /*saveAtRoot*/
      p[2] ? "parent-input-disabled" : "parent-input") && f(_, "part", y), R & /*parentDirectoryIdToSaveIn, $fileStore*/
      40 && Qe(
        _,
        /*parentDirectoryIdToSaveIn*/
        p[3]
      ), R & /*$fileStore*/
      32 && (K = /*$fileStore*/
      p[5].filter(Ke).length === 0), K ? x || (x = Ve(), x.c(), x.m(s, null)) : x && (x.d(1), x = null), R & /*$fileStore*/
      32 && S !== (S = /*$fileStore*/
      p[5].filter(Ye).length === 0 ? "warning flex-column margin-top-md" : "flex-column margin-top-md") && f(s, "class", S), R & /*name, saveAtRoot, parentDirectoryIdToSaveIn, $fileStore*/
      45 && D !== (D = ue(
        /*name*/
        p[0],
        /*saveAtRoot*/
        p[2],
        /*parentDirectoryIdToSaveIn*/
        p[3]
      ) ? "save-btn-disabled" : "save-btn") && f(k, "part", D), R & /*name, saveAtRoot, parentDirectoryIdToSaveIn, $fileStore*/
      45 && q !== (q = ue(
        /*name*/
        p[0],
        /*saveAtRoot*/
        p[2],
        /*parentDirectoryIdToSaveIn*/
        p[3]
      )) && (k.disabled = q), /*error*/
      p[4] ? V || (V = Ge(), V.c(), V.m(e, null)) : V && (V.d(1), V = null);
    },
    i: F,
    o: F,
    d(p) {
      p && H(e), ve(h, p), x && x.d(), V && V.d(), le = !1, L(g);
    }
  };
}
function ue(t, e, n) {
  return t.trim().length === 0 || !e && n === null;
}
const Ke = (t) => !t.isFile, Pe = (t) => !t.isFile, Xe = (t) => !t.isFile, Ye = (t) => !t.isFile;
function mt(t, e, n) {
  let l;
  ze(t, fe, (_) => n(5, l = _));
  let i = "", u = !0, r = !0, c = null, o = !1;
  function s(_) {
    const y = _.target;
    n(0, i = y.value), n(4, o = !1);
  }
  function A() {
    const _ = {
      id: gt(),
      name: i.trim(),
      isFile: u,
      children: []
    };
    if (r) {
      if (!d(_.name, null)) {
        n(4, o = !0);
        return;
      }
      fe.update((y) => [...y, _]);
    } else {
      const y = l.find((O) => O.id == c);
      if (!y)
        return;
      if (!d(_.name, y)) {
        n(4, o = !0);
        return;
      }
      y.children = [...y.children, _], fe.update((O) => [...O]);
    }
    w();
  }
  function d(_, y) {
    let O = 0;
    return y ? O = y.children.findIndex((K) => K.name === _) : O = l.findIndex((K) => K.name === _), O === -1;
  }
  function w() {
    n(0, i = ""), n(1, u = !0), n(2, r = !0), n(3, c = null);
  }
  function P() {
    u = this.checked, n(1, u);
  }
  function B() {
    r = this.checked, n(2, r);
  }
  function M() {
    c = nt(this), n(3, c);
  }
  return [
    i,
    u,
    r,
    c,
    o,
    l,
    s,
    A,
    w,
    P,
    B,
    M
  ];
}
class At extends me {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".flex-column{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.flex-one{flex:1}.column-gap{column-gap:16px}.column-gap-sm{column-gap:8px}.margin-bottom{margin-bottom:8px}.margin-top-md{margin-top:16px}.margin-top-lg{margin-top:32px}.warning{padding:8px;border:2px dotted #fcd34d;border-radius:8px}.warning-text{background-color:#fde68a;padding:8px;color:#000;margin-bottom:0px;border-radius:8px}.error{width:100%;text-align:center;color:#b91c1c}", this.shadowRoot.appendChild(n), Fe(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      mt,
      pt,
      he,
      {},
      null
    ), e && e.target && U(e.target, this, e.anchor);
  }
}
customElements.define("file-input", At);
const _t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nO2bOW4UYRhEKwLugC+AZzEE2DkkSCD1OCDmAiyxF3EDJMhB4hZwAITlCPCCkAMGsHoyB8hEBPxonCEIPPOrp0RVPeld4HWp5xsvQAghhBBCCCGEEEIIIYQQQgghhBBCcOfeuFwateVR05bdUVt+jCalqHj9+fgNu68068dlaTQpH9gPuiuvbO9lRJ2+eYTHM5qUsry9lxF1xfRji/2AFzGg5YyoG85uHvkB7WdEXdG05VR+QFv7f4/oxZedzqI6wX64i7A3HVBGlAHVDKiXEWVAtQPqZUT5CKsdUC8jyg1UO6BeRpQjepYB9bcOMqJ8C6sbUD8jyhFdO6B+RpQjunZA/YwoR/SsAxps/jmgjChH9MwDGmREuYFqBzTIiHID1Q5okBHlBpp1QMPNw4woPweqG9AwI8oNVDugYUaUG6h2QMOMKDdQ7YCGGVF+mTrLgFb+MaCMKH/Sev4BbRxmRPkWVjmgjYwof1Q/54CuPf6UEeUNNP8baO3puKxsfFzYiFZffvX5X/x5H8r/5I1XJ+Xq2YAyogxojgE1x7/K6pPPGVHeQPO/he4c/cyIMqD6N9HN1ydl7dl4oYe19E3Evk9chCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6FK05ZTdlx52/IdqjRt2aUHFrdpyw5UWW/LQ3ZgedtyH6rcOioXm0l5T4+s67u7B+UClFk/LksZUelkPLe/lctw4OxN1JYH08/rHNZl7tFM2zWT8nb6sSX/5gkhhBBCCCGEEEIIIYQQQgghhBBCCDgHvwHDGQwojgVeUQAAAABJRU5ErkJggg==", bt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2ZwWodZQCFf7A73RRbk9RUIeidUUQE8RkspQ+iFp9B3XXrQlBUJsWKXXSjxlizCIUW0xnr0iiCD6CbWusmJPbIjQs3EgQz859z/T44DzD/9/WfzG0pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwv0UflVV15aLWy5daL9+rK79rvajKuvJm7fOAf4k+LKe1Xt5WV/arBfPPEV1Cojm6XC6oK/eqx8JNlIcul9fUlYPqkRBRHurKuYh4eJ35oQ/KGevXFq8zb9SV96vHwE0U/anu9bXFTZSDuvJ69QC4iXJRVzary+cmykXr5cfq4rmJclFX7leXTkS5HCnvygnps5PS9lnp5pp0eyYNLRsqnsHcwc21Pd148hdtrVzV5qMv+QV05SHp+pI0NMQymP+D6Vtpe/UnbZx+wSOga49w0wyB25k90PXlN+oG9OnJ+gfB9J/OYGv5kzoBXXsYecOCvNK+Wnpr2oA+PsFra9FeZ5uPPT9dQFvL9R+a6VjPYHv1u2kCmn+q87W1eAH3jbRx6sXxA5r/zlP7YZlGOYOtlavjBzT/kRCBi3kGN574efyAbq3Vf1CmUc7g1tre+AHx3xOLG/DO7MH4AdV+SKYxz4CACEwERASqdQbcQMQnAiICcQMRgRLPgFeYgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCR0AGEhQ8AjKQoOARkIEEBY+ADCQoeARkIEHBIyADCQoeARlIUPAIyECCgkdABhIUPAIykKDgEZCBBAWPgAwkKHgEZCBBwSMgAwkKHgEZSFDwCMhAgoJHQAYSFDwCMpCg4BGQgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCR0AGEhQ8AjKQoOARkIEEBY+ADCQoeARkIEHBIyADCQoeARlIUPAIyECCgkdABhIUPAIykKDgEZCBBAWPgAwkKHgEZCBBwSMgAwkKHgEZSFDwCMhAgoJHQAYSFDwCMpCg4BGQgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCN0VAv9V+SNaOdQb3xg+ob39A4MJGvDtBQM0XBg/KhjHOoPl8/ICG9iICFzTgvnll/IBuP7Wqodmv/rBMx3z77Ovb5szoAR1G1LfvInDBIu6bdyaJ5zCgO+2K+vbX6g/NdEzx3NXOc0uTBXQYUd+8rKE9QGKbHXLf/qG+vTBpPH9HNHuViNrkHUzyh/OREX3zzHleZ23gzdPcVT87VxzQndkpDc0l9c1e9YNhOvoMmn317Xvqn10ubujrpx8/fK399WPjrvrmPkLb2jfN3MGuhmZj/rqa7FMdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKI38CFedrXWsWOhwAAAAASUVORK5CYII=";
function je(t, e, n) {
  const l = t.slice();
  return l[4] = e[n], l;
}
function Ct(t) {
  let e, n, l, i, u, r, c, o = (
    /*node*/
    t[0].name + ""
  ), s, A, d, w, P, B = (
    /*node*/
    t[0].children.filter(Se).length + ""
  ), M, _, y, O, K = (
    /*node*/
    t[0].children.filter(qe).length + ""
  ), S, N, X, k, W, D, q, ne, $ = (
    /*node*/
    t[0].children
  ), C = [];
  for (let g = 0; g < $.length; g += 1)
    C[g] = Me(je(t, $, g));
  const le = (g) => j(C[g], 1, 1, () => {
    C[g] = null;
  });
  return {
    c() {
      e = m("div"), n = m("div"), l = m("img"), u = Q(), r = m("div"), c = m("p"), s = Y(o), A = Q(), d = m("div"), w = m("p"), P = Y("Directories: "), M = Y(B), _ = Q(), y = m("p"), O = Y("Files: "), S = Y(K), X = Q(), k = m("div");
      for (let g = 0; g < C.length; g += 1)
        C[g].c();
      f(l, "width", "24"), f(l, "height", "24"), v(l, "margin-right", "8px"), Ze(l.src, i = bt) || f(l, "src", i), f(l, "alt", "Directory icon"), v(c, "margin", "0"), v(c, "font-size", "16px"), v(c, "font-weight", "500"), v(w, "margin", "0"), v(y, "margin", "0"), v(d, "font-size", "12px"), v(d, "display", "flex"), v(d, "flex-direction", "row"), v(d, "column-gap", "10px"), v(d, "color", "#6b7280"), v(r, "display", "flex"), v(r, "flex-direction", "column"), v(n, "display", "flex"), v(n, "flex-direction", "row"), v(n, "align-items", "center"), f(e, "style", N = `margin-left: ${/*level*/
      t[1] * 64}px; padding: 16px; background-color: white; cursor: pointer;`), f(k, "style", W = `transition: max-height 0.75s ease-in-out; overflow: hidden; max-height: ${/*showChildren*/
      t[2] ? "1000px" : "0px"}; `);
    },
    m(g, b) {
      U(g, e, b), a(e, n), a(n, l), a(n, u), a(n, r), a(r, c), a(c, s), a(r, A), a(r, d), a(d, w), a(w, P), a(w, M), a(d, _), a(d, y), a(y, O), a(y, S), U(g, X, b), U(g, k, b);
      for (let h = 0; h < C.length; h += 1)
        C[h] && C[h].m(k, null);
      D = !0, q || (ne = Z(
        e,
        "click",
        /*toggleShowChildren*/
        t[3]
      ), q = !0);
    },
    p(g, b) {
      if ((!D || b & /*node*/
      1) && o !== (o = /*node*/
      g[0].name + "") && ie(s, o), (!D || b & /*node*/
      1) && B !== (B = /*node*/
      g[0].children.filter(Se).length + "") && ie(M, B), (!D || b & /*node*/
      1) && K !== (K = /*node*/
      g[0].children.filter(qe).length + "") && ie(S, K), (!D || b & /*level*/
      2 && N !== (N = `margin-left: ${/*level*/
      g[1] * 64}px; padding: 16px; background-color: white; cursor: pointer;`)) && f(e, "style", N), b & /*node, level*/
      3) {
        $ = /*node*/
        g[0].children;
        let h;
        for (h = 0; h < $.length; h += 1) {
          const x = je(g, $, h);
          C[h] ? (C[h].p(x, b), G(C[h], 1)) : (C[h] = Me(x), C[h].c(), G(C[h], 1), C[h].m(k, null));
        }
        for (ge(), h = $.length; h < C.length; h += 1)
          le(h);
        pe();
      }
      (!D || b & /*showChildren*/
      4 && W !== (W = `transition: max-height 0.75s ease-in-out; overflow: hidden; max-height: ${/*showChildren*/
      g[2] ? "1000px" : "0px"}; `)) && f(k, "style", W);
    },
    i(g) {
      if (!D) {
        for (let b = 0; b < $.length; b += 1)
          G(C[b]);
        D = !0;
      }
    },
    o(g) {
      C = C.filter(Boolean);
      for (let b = 0; b < C.length; b += 1)
        j(C[b]);
      D = !1;
    },
    d(g) {
      g && H(e), g && H(X), g && H(k), ve(C, g), q = !1, ne();
    }
  };
}
function vt(t) {
  let e, n, l, i, u, r, c, o = (
    /*node*/
    t[0].name + ""
  ), s, A;
  return {
    c() {
      e = m("div"), n = m("div"), l = m("img"), u = Q(), r = m("div"), c = m("p"), s = Y(o), f(l, "width", "24"), f(l, "height", "24"), v(l, "margin-right", "8px"), Ze(l.src, i = _t) || f(l, "src", i), f(l, "alt", "File icon"), v(c, "margin", "0"), v(c, "font-size", "16px"), v(c, "font-weight", "500"), v(n, "display", "flex"), v(n, "flex-direction", "row"), v(n, "align-items", "center"), f(e, "style", A = `margin-left: ${/*level*/
      t[1] * 64}px; padding: 16px; background-color: white; cursor: default;`);
    },
    m(d, w) {
      U(d, e, w), a(e, n), a(n, l), a(n, u), a(n, r), a(r, c), a(c, s);
    },
    p(d, w) {
      w & /*node*/
      1 && o !== (o = /*node*/
      d[0].name + "") && ie(s, o), w & /*level*/
      2 && A !== (A = `margin-left: ${/*level*/
      d[1] * 64}px; padding: 16px; background-color: white; cursor: default;`) && f(e, "style", A);
    },
    i: F,
    o: F,
    d(d) {
      d && H(e);
    }
  };
}
function Me(t) {
  let e, n, l, i;
  return n = new xe({
    props: {
      node: (
        /*childNode*/
        t[4]
      ),
      level: (
        /*level*/
        t[1] + 1
      )
    }
  }), {
    c() {
      e = m("div"), Le(n.$$.fragment), l = Q(), v(e, "border-top", "1px solid #e2e8f0");
    },
    m(u, r) {
      U(u, e, r), Ee(n, e, null), a(e, l), i = !0;
    },
    p(u, r) {
      const c = {};
      r & /*node*/
      1 && (c.node = /*childNode*/
      u[4]), r & /*level*/
      2 && (c.level = /*level*/
      u[1] + 1), n.$set(c);
    },
    i(u) {
      i || (G(n.$$.fragment, u), i = !0);
    },
    o(u) {
      j(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && H(e), Ie(n);
    }
  };
}
function yt(t) {
  let e, n, l, i;
  const u = [vt, Ct], r = [];
  function c(o, s) {
    return (
      /*node*/
      o[0].isFile ? 0 : 1
    );
  }
  return e = c(t), n = r[e] = u[e](t), {
    c() {
      n.c(), l = ye(), this.c = F;
    },
    m(o, s) {
      r[e].m(o, s), U(o, l, s), i = !0;
    },
    p(o, [s]) {
      let A = e;
      e = c(o), e === A ? r[e].p(o, s) : (ge(), j(r[A], 1, 1, () => {
        r[A] = null;
      }), pe(), n = r[e], n ? n.p(o, s) : (n = r[e] = u[e](o), n.c()), G(n, 1), n.m(l.parentNode, l));
    },
    i(o) {
      i || (G(n), i = !0);
    },
    o(o) {
      j(n), i = !1;
    },
    d(o) {
      r[e].d(o), o && H(l);
    }
  };
}
const Se = (t) => !t.isFile, qe = (t) => t.isFile;
function wt(t, e, n) {
  let { node: l = {
    id: "",
    name: "",
    isFile: !1,
    children: []
  } } = e, { level: i = 0 } = e, u = !1;
  function r() {
    n(2, u = !u);
  }
  return t.$$set = (c) => {
    "node" in c && n(0, l = c.node), "level" in c && n(1, i = c.level);
  }, [l, i, u, r];
}
class xe extends me {
  constructor(e) {
    super(), Fe(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      wt,
      yt,
      he,
      { node: 0, level: 1 },
      null
    ), e && (e.target && U(e.target, this, e.anchor), e.props && (this.$set(e.props), oe()));
  }
  static get observedAttributes() {
    return ["node", "level"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), oe();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), oe();
  }
}
customElements.define("file-hierarchy-item", xe);
function Ne(t, e, n) {
  const l = t.slice();
  return l[1] = e[n], l;
}
function kt(t) {
  let e, n, l = (
    /*$fileStore*/
    t[0]
  ), i = [];
  for (let r = 0; r < l.length; r += 1)
    i[r] = We(Ne(t, l, r));
  const u = (r) => j(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = ye();
    },
    m(r, c) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, c);
      U(r, e, c), n = !0;
    },
    p(r, c) {
      if (c & /*$fileStore*/
      1) {
        l = /*$fileStore*/
        r[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = Ne(r, l, o);
          i[o] ? (i[o].p(s, c), G(i[o], 1)) : (i[o] = We(s), i[o].c(), G(i[o], 1), i[o].m(e.parentNode, e));
        }
        for (ge(), o = l.length; o < i.length; o += 1)
          u(o);
        pe();
      }
    },
    i(r) {
      if (!n) {
        for (let c = 0; c < l.length; c += 1)
          G(i[c]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        j(i[c]);
      n = !1;
    },
    d(r) {
      ve(i, r), r && H(e);
    }
  };
}
function Et(t) {
  let e;
  return {
    c() {
      e = m("div"), e.innerHTML = "<p>Empty. Please add a file or directory.</p>", f(e, "class", "empty");
    },
    m(n, l) {
      U(n, e, l);
    },
    p: F,
    i: F,
    o: F,
    d(n) {
      n && H(e);
    }
  };
}
function We(t) {
  let e, n;
  return e = new xe({ props: { node: (
    /*node*/
    t[1]
  ) } }), {
    c() {
      Le(e.$$.fragment);
    },
    m(l, i) {
      Ee(e, l, i), n = !0;
    },
    p(l, i) {
      const u = {};
      i & /*$fileStore*/
      1 && (u.node = /*node*/
      l[1]), e.$set(u);
    },
    i(l) {
      n || (G(e.$$.fragment, l), n = !0);
    },
    o(l) {
      j(e.$$.fragment, l), n = !1;
    },
    d(l) {
      Ie(e, l);
    }
  };
}
function It(t) {
  let e, n, l, i;
  const u = [Et, kt], r = [];
  function c(o, s) {
    return (
      /*$fileStore*/
      o[0].length === 0 ? 0 : 1
    );
  }
  return e = c(t), n = r[e] = u[e](t), {
    c() {
      n.c(), l = ye(), this.c = F;
    },
    m(o, s) {
      r[e].m(o, s), U(o, l, s), i = !0;
    },
    p(o, [s]) {
      let A = e;
      e = c(o), e === A ? r[e].p(o, s) : (ge(), j(r[A], 1, 1, () => {
        r[A] = null;
      }), pe(), n = r[e], n ? n.p(o, s) : (n = r[e] = u[e](o), n.c()), G(n, 1), n.m(l.parentNode, l));
    },
    i(o) {
      i || (G(n), i = !0);
    },
    o(o) {
      j(n), i = !1;
    },
    d(o) {
      r[e].d(o), o && H(l);
    }
  };
}
function Ft(t, e, n) {
  let l;
  return ze(t, fe, (i) => n(0, l = i)), [l];
}
class xt extends me {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".empty{width:100%;min-height:400px;display:flex;flex-direction:row;align-items:center;justify-content:center}", this.shadowRoot.appendChild(n), Fe(
      this,
      {
        target: this.shadowRoot,
        props: we(this.attributes),
        customElement: !0
      },
      Ft,
      It,
      he,
      {},
      null
    ), e && e.target && U(e.target, this, e.anchor);
  }
}
customElements.define("file-hierarchy", xt);
