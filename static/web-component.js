function x() {
}
function pe(e) {
  return e();
}
function Ee() {
  return /* @__PURE__ */ Object.create(null);
}
function q(e) {
  e.forEach(pe);
}
function he(e) {
  return typeof e == "function";
}
function se(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let le;
function Se(e, t) {
  return le || (le = document.createElement("a")), le.href = t, e === le.href;
}
function Ne(e) {
  return Object.keys(e).length === 0;
}
function Ze(e, ...t) {
  if (e == null)
    return x;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function qe(e, t, n) {
  e.$$.on_destroy.push(Ze(t, n));
}
const ze = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in ze;
function d(e, t) {
  e.appendChild(t);
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function U(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function me(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function m(e) {
  return document.createElement(e);
}
function K(e) {
  return document.createTextNode(e);
}
function F() {
  return K(" ");
}
function Ae() {
  return K("");
}
function M(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Le(e) {
  return Array.from(e.childNodes);
}
function ee(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function xe(e, t) {
  e.value = t ?? "";
}
function b(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
function Ie(e, t, n) {
  for (let l = 0; l < e.options.length; l += 1) {
    const i = e.options[l];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Je(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function _e(e) {
  const t = {};
  for (const n of e)
    t[n.name] = n.value;
  return t;
}
let be;
function te(e) {
  be = e;
}
const J = [], Fe = [];
let T = [];
const Ue = [], Te = /* @__PURE__ */ Promise.resolve();
let ge = !1;
function et() {
  ge || (ge = !0, Te.then(ne));
}
function ce(e) {
  T.push(e);
}
const de = /* @__PURE__ */ new Set();
let z = 0;
function ne() {
  if (z !== 0)
    return;
  const e = be;
  do {
    try {
      for (; z < J.length; ) {
        const t = J[z];
        z++, te(t), tt(t.$$);
      }
    } catch (t) {
      throw J.length = 0, z = 0, t;
    }
    for (te(null), J.length = 0, z = 0; Fe.length; )
      Fe.pop()();
    for (let t = 0; t < T.length; t += 1) {
      const n = T[t];
      de.has(n) || (de.add(n), n());
    }
    T.length = 0;
  } while (J.length);
  for (; Ue.length; )
    Ue.pop()();
  ge = !1, de.clear(), te(e);
}
function tt(e) {
  if (e.fragment !== null) {
    e.update(), q(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ce);
  }
}
function nt(e) {
  const t = [], n = [];
  T.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), T = t;
}
const re = /* @__PURE__ */ new Set();
let S;
function ue() {
  S = {
    r: 0,
    c: [],
    p: S
    // parent group
  };
}
function ae() {
  S.r || q(S.c), S = S.p;
}
function R(e, t) {
  e && e.i && (re.delete(e), e.i(t));
}
function P(e, t, n, l) {
  if (e && e.o) {
    if (re.has(e))
      return;
    re.add(e), S.c.push(() => {
      re.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
const lt = [
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
[...lt];
function We(e) {
  e && e.c();
}
function Ce(e, t, n, l) {
  const { fragment: i, after_update: u } = e.$$;
  i && i.m(t, n), l || ce(() => {
    const r = e.$$.on_mount.map(pe).filter(he);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : q(r), e.$$.on_mount = [];
  }), u.forEach(ce);
}
function ye(e, t) {
  const n = e.$$;
  n.fragment !== null && (nt(n.after_update), q(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function it(e, t) {
  e.$$.dirty[0] === -1 && (J.push(e), et(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ve(e, t, n, l, i, u, r, s = [-1]) {
  const o = be;
  te(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: x,
    not_equal: i,
    bound: Ee(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Ee(),
    dirty: s,
    skip_bound: !1,
    root: t.target || o.$$.root
  };
  r && r(c.root);
  let _ = !1;
  if (c.ctx = n ? n(e, t.props || {}, (h, C, ...H) => {
    const w = H.length ? H[0] : C;
    return c.ctx && i(c.ctx[h], c.ctx[h] = w) && (!c.skip_bound && c.bound[h] && c.bound[h](w), _ && it(e, h)), C;
  }) : [], c.update(), _ = !0, q(c.before_update), c.fragment = l ? l(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = Le(t.target);
      c.fragment && c.fragment.l(h), h.forEach(U);
    } else
      c.fragment && c.fragment.c();
    t.intro && R(e.$$.fragment), Ce(e, t.target, t.anchor, t.customElement), ne();
  }
  te(o);
}
let fe;
typeof HTMLElement == "function" && (fe = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(pe).filter(he);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, n) {
    this[e] = n;
  }
  disconnectedCallback() {
    q(this.$$.on_disconnect);
  }
  $destroy() {
    ye(this, 1), this.$destroy = x;
  }
  $on(e, t) {
    if (!he(t))
      return x;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const l = n.indexOf(t);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !Ne(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
const L = [];
function rt(e, t = x) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(s) {
    if (se(e, s) && (e = s, n)) {
      const o = !L.length;
      for (const c of l)
        c[1](), L.push(c, e);
      if (o) {
        for (let c = 0; c < L.length; c += 2)
          L[c][0](L[c + 1]);
        L.length = 0;
      }
    }
  }
  function u(s) {
    i(s(e));
  }
  function r(s, o = x) {
    const c = [s, o];
    return l.add(c), l.size === 1 && (n = t(i) || x), s(e), () => {
      l.delete(c), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: u, subscribe: r };
}
const oe = rt([]);
let ie;
const ot = new Uint8Array(16);
function ct() {
  if (!ie && (ie = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ie))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ie(ot);
}
const E = [];
for (let e = 0; e < 256; ++e)
  E.push((e + 256).toString(16).slice(1));
function st(e, t = 0) {
  return (E[e[t + 0]] + E[e[t + 1]] + E[e[t + 2]] + E[e[t + 3]] + "-" + E[e[t + 4]] + E[e[t + 5]] + "-" + E[e[t + 6]] + E[e[t + 7]] + "-" + E[e[t + 8]] + E[e[t + 9]] + "-" + E[e[t + 10]] + E[e[t + 11]] + E[e[t + 12]] + E[e[t + 13]] + E[e[t + 14]] + E[e[t + 15]]).toLowerCase();
}
const ut = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Re = {
  randomUUID: ut
};
function at(e, t, n) {
  if (Re.randomUUID && !t && !e)
    return Re.randomUUID();
  e = e || {};
  const l = e.random || (e.rng || ct)();
  if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, t) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      t[n + i] = l[i];
    return t;
  }
  return st(l);
}
function Qe(e, t, n) {
  const l = e.slice();
  return l[11] = t[n], l;
}
function Be(e) {
  let t, n = (
    /*node*/
    e[11].name + ""
  ), l, i;
  return {
    c() {
      t = m("option"), l = K(n), t.__value = i = /*node*/
      e[11].id, t.value = t.__value;
    },
    m(u, r) {
      I(u, t, r), d(t, l);
    },
    p(u, r) {
      r & /*$fileStore*/
      16 && n !== (n = /*node*/
      u[11].name + "") && ee(l, n), r & /*$fileStore*/
      16 && i !== (i = /*node*/
      u[11].id) && (t.__value = i, t.value = t.__value);
    },
    d(u) {
      u && U(t);
    }
  };
}
function De(e) {
  let t;
  return {
    c() {
      t = m("p"), t.textContent = "Please add a directory to enable these options.", g(t, "class", "warning-text");
    },
    m(n, l) {
      I(n, t, l);
    },
    d(n) {
      n && U(t);
    }
  };
}
function ft(e) {
  let t, n, l, i, u, r, s, o, c, _, h, C, H, w, Q, v, j, W = (
    /*$fileStore*/
    e[4].filter(He).length === 0
  ), X, N, $, B, O, Y, D, V, Z, G, A = (
    /*$fileStore*/
    e[4].filter(Ve)
  ), k = [];
  for (let a = 0; a < A.length; a += 1)
    k[a] = Be(Qe(e, A, a));
  let f = W && De();
  return {
    c() {
      t = m("div"), n = m("input"), l = F(), i = m("span"), u = m("input"), r = F(), s = m("label"), s.textContent = "Is File", o = F(), c = m("div"), _ = m("span"), h = m("input"), H = F(), w = m("label"), w.textContent = "Save at Root", Q = F(), v = m("select");
      for (let a = 0; a < k.length; a += 1)
        k[a].c();
      j = F(), f && f.c(), N = F(), $ = m("div"), B = m("button"), O = K("Save"), D = F(), V = m("button"), V.textContent = "Cancel", this.c = x, g(n, "type", "text"), g(n, "maxlength", "150"), g(n, "part", "name-input"), g(n, "class", "margin-bottom"), g(n, "placeholder", "File/Directory Name"), g(u, "name", "isFile"), g(u, "type", "checkbox"), g(s, "for", "isFile"), g(i, "class", "margin-bottom flex flex-row items-center column-gap-sm"), g(h, "name", "saveAtRoot"), g(h, "type", "checkbox"), h.disabled = C = /*$fileStore*/
      e[4].filter(Oe).length === 0, g(w, "for", "saveAtRoot"), g(_, "class", "flex flex-row items-center column-gap-sm margin-bottom"), v.disabled = /*saveAtRoot*/
      e[2], g(v, "part", "parent-input"), /*parentDirectoryIdToSaveIn*/
      e[3] === void 0 && ce(() => (
        /*select_change_handler*/
        e[10].call(v)
      )), g(c, "class", X = /*$fileStore*/
      e[4].filter(Ge).length === 0 ? "warning flex-column margin-top-md" : "flex-column margin-top-md"), g(B, "class", "flex-one"), g(B, "part", "save-btn"), B.disabled = Y = $e(
        /*name*/
        e[0],
        /*saveAtRoot*/
        e[2],
        /*parentDirectoryIdToSaveIn*/
        e[3]
      ), g(V, "class", "flex-one"), g(V, "part", "cancel-btn"), g($, "class", "margin-top-lg flex-row column-gap"), g(t, "class", "flex-column");
    },
    m(a, p) {
      I(a, t, p), d(t, n), xe(
        n,
        /*name*/
        e[0]
      ), d(t, l), d(t, i), d(i, u), u.checked = /*isFile*/
      e[1], d(i, r), d(i, s), d(t, o), d(t, c), d(c, _), d(_, h), h.checked = /*saveAtRoot*/
      e[2], d(_, H), d(_, w), d(c, Q), d(c, v);
      for (let y = 0; y < k.length; y += 1)
        k[y] && k[y].m(v, null);
      Ie(
        v,
        /*parentDirectoryIdToSaveIn*/
        e[3],
        !0
      ), d(c, j), f && f.m(c, null), d(t, N), d(t, $), d($, B), d(B, O), d($, D), d($, V), Z || (G = [
        M(
          n,
          "input",
          /*input0_input_handler*/
          e[7]
        ),
        M(
          u,
          "change",
          /*input1_change_handler*/
          e[8]
        ),
        M(
          h,
          "change",
          /*input2_change_handler*/
          e[9]
        ),
        M(
          v,
          "change",
          /*select_change_handler*/
          e[10]
        ),
        M(
          B,
          "click",
          /*updateFileStore*/
          e[5]
        ),
        M(
          V,
          "click",
          /*resetForm*/
          e[6]
        )
      ], Z = !0);
    },
    p(a, [p]) {
      if (p & /*name*/
      1 && n.value !== /*name*/
      a[0] && xe(
        n,
        /*name*/
        a[0]
      ), p & /*isFile*/
      2 && (u.checked = /*isFile*/
      a[1]), p & /*$fileStore*/
      16 && C !== (C = /*$fileStore*/
      a[4].filter(Oe).length === 0) && (h.disabled = C), p & /*saveAtRoot*/
      4 && (h.checked = /*saveAtRoot*/
      a[2]), p & /*$fileStore*/
      16) {
        A = /*$fileStore*/
        a[4].filter(Ve);
        let y;
        for (y = 0; y < A.length; y += 1) {
          const ke = Qe(a, A, y);
          k[y] ? k[y].p(ke, p) : (k[y] = Be(ke), k[y].c(), k[y].m(v, null));
        }
        for (; y < k.length; y += 1)
          k[y].d(1);
        k.length = A.length;
      }
      p & /*saveAtRoot*/
      4 && (v.disabled = /*saveAtRoot*/
      a[2]), p & /*parentDirectoryIdToSaveIn, $fileStore*/
      24 && Ie(
        v,
        /*parentDirectoryIdToSaveIn*/
        a[3]
      ), p & /*$fileStore*/
      16 && (W = /*$fileStore*/
      a[4].filter(He).length === 0), W ? f || (f = De(), f.c(), f.m(c, null)) : f && (f.d(1), f = null), p & /*$fileStore*/
      16 && X !== (X = /*$fileStore*/
      a[4].filter(Ge).length === 0 ? "warning flex-column margin-top-md" : "flex-column margin-top-md") && g(c, "class", X), p & /*name, saveAtRoot, parentDirectoryIdToSaveIn, $fileStore*/
      29 && Y !== (Y = $e(
        /*name*/
        a[0],
        /*saveAtRoot*/
        a[2],
        /*parentDirectoryIdToSaveIn*/
        a[3]
      )) && (B.disabled = Y);
    },
    i: x,
    o: x,
    d(a) {
      a && U(t), me(k, a), f && f.d(), Z = !1, q(G);
    }
  };
}
function $e(e, t, n) {
  return e.trim().length === 0 || !t && n === null;
}
const He = (e) => !e.isFile, Oe = (e) => !e.isFile, Ve = (e) => !e.isFile, Ge = (e) => !e.isFile;
function dt(e, t, n) {
  let l;
  qe(e, oe, (w) => n(4, l = w));
  let i = "", u = !0, r = !0, s = null;
  function o() {
    const w = { id: at(), name: i, isFile: u, children: [] };
    if (r)
      oe.update((Q) => [...Q, w]);
    else {
      const Q = l.find((v) => v.id == s);
      if (!Q)
        return;
      Q.children = [...Q.children, w], oe.update((v) => [...v]);
    }
    c();
  }
  function c() {
    n(0, i = ""), n(1, u = !0), n(2, r = !0), n(3, s = null);
  }
  function _() {
    i = this.value, n(0, i);
  }
  function h() {
    u = this.checked, n(1, u);
  }
  function C() {
    r = this.checked, n(2, r);
  }
  function H() {
    s = Je(this), n(3, s);
  }
  return [
    i,
    u,
    r,
    s,
    l,
    o,
    c,
    _,
    h,
    C,
    H
  ];
}
class ht extends fe {
  constructor(t) {
    super();
    const n = document.createElement("style");
    n.textContent = ".flex-column{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.flex-one{flex:1}.column-gap{column-gap:16px}.column-gap-sm{column-gap:8px}.margin-bottom{margin-bottom:8px}.margin-top-md{margin-top:16px}.margin-top-lg{margin-top:32px}.warning{padding:8px;border:2px dotted #fcd34d;border-radius:8px}.warning-text{background-color:#fcd34d;padding:8px;color:#000;margin-bottom:0px;border-radius:8px}", this.shadowRoot.appendChild(n), ve(
      this,
      {
        target: this.shadowRoot,
        props: _e(this.attributes),
        customElement: !0
      },
      dt,
      ft,
      se,
      {},
      null
    ), t && t.target && I(t.target, this, t.anchor);
  }
}
customElements.define("file-input", ht);
const gt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nO2bOW4UYRhEKwLugC+AZzEE2DkkSCD1OCDmAiyxF3EDJMhB4hZwAITlCPCCkAMGsHoyB8hEBPxonCEIPPOrp0RVPeld4HWp5xsvQAghhBBCCCGEEEIIIYQQQgghhBBCcOfeuFwateVR05bdUVt+jCalqHj9+fgNu68068dlaTQpH9gPuiuvbO9lRJ2+eYTHM5qUsry9lxF1xfRji/2AFzGg5YyoG85uHvkB7WdEXdG05VR+QFv7f4/oxZedzqI6wX64i7A3HVBGlAHVDKiXEWVAtQPqZUT5CKsdUC8jyg1UO6BeRpQjepYB9bcOMqJ8C6sbUD8jyhFdO6B+RpQjunZA/YwoR/SsAxps/jmgjChH9MwDGmREuYFqBzTIiHID1Q5okBHlBpp1QMPNw4woPweqG9AwI8oNVDugYUaUG6h2QMOMKDdQ7YCGGVF+mTrLgFb+MaCMKH/Sev4BbRxmRPkWVjmgjYwof1Q/54CuPf6UEeUNNP8baO3puKxsfFzYiFZffvX5X/x5H8r/5I1XJ+Xq2YAyogxojgE1x7/K6pPPGVHeQPO/he4c/cyIMqD6N9HN1ydl7dl4oYe19E3Evk9chCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6FK05ZTdlx52/IdqjRt2aUHFrdpyw5UWW/LQ3ZgedtyH6rcOioXm0l5T4+s67u7B+UClFk/LksZUelkPLe/lctw4OxN1JYH08/rHNZl7tFM2zWT8nb6sSX/5gkhhBBCCCGEEEIIIYQQQgghhBBCCDgHvwHDGQwojgVeUQAAAABJRU5ErkJggg==", pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2ZwWodZQCFf7A73RRbk9RUIeidUUQE8RkspQ+iFp9B3XXrQlBUJsWKXXSjxlizCIUW0xnr0iiCD6CbWusmJPbIjQs3EgQz859z/T44DzD/9/WfzG0pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwv0UflVV15aLWy5daL9+rK79rvajKuvJm7fOAf4k+LKe1Xt5WV/arBfPPEV1Cojm6XC6oK/eqx8JNlIcul9fUlYPqkRBRHurKuYh4eJ35oQ/KGevXFq8zb9SV96vHwE0U/anu9bXFTZSDuvJ69QC4iXJRVzary+cmykXr5cfq4rmJclFX7leXTkS5HCnvygnps5PS9lnp5pp0eyYNLRsqnsHcwc21Pd148hdtrVzV5qMv+QV05SHp+pI0NMQymP+D6Vtpe/UnbZx+wSOga49w0wyB25k90PXlN+oG9OnJ+gfB9J/OYGv5kzoBXXsYecOCvNK+Wnpr2oA+PsFra9FeZ5uPPT9dQFvL9R+a6VjPYHv1u2kCmn+q87W1eAH3jbRx6sXxA5r/zlP7YZlGOYOtlavjBzT/kRCBi3kGN574efyAbq3Vf1CmUc7g1tre+AHx3xOLG/DO7MH4AdV+SKYxz4CACEwERASqdQbcQMQnAiICcQMRgRLPgFeYgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCR0AGEhQ8AjKQoOARkIEEBY+ADCQoeARkIEHBIyADCQoeARlIUPAIyECCgkdABhIUPAIykKDgEZCBBAWPgAwkKHgEZCBBwSMgAwkKHgEZSFDwCMhAgoJHQAYSFDwCMpCg4BGQgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCR0AGEhQ8AjKQoOARkIEEBY+ADCQoeARkIEHBIyADCQoeARlIUPAIyECCgkdABhIUPAIykKDgEZCBBAWPgAwkKHgEZCBBwSMgAwkKHgEZSFDwCMhAgoJHQAYSFDwCMpCg4BGQgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCN0VAv9V+SNaOdQb3xg+ob39A4MJGvDtBQM0XBg/KhjHOoPl8/ICG9iICFzTgvnll/IBuP7Wqodmv/rBMx3z77Ovb5szoAR1G1LfvInDBIu6bdyaJ5zCgO+2K+vbX6g/NdEzx3NXOc0uTBXQYUd+8rKE9QGKbHXLf/qG+vTBpPH9HNHuViNrkHUzyh/OREX3zzHleZ23gzdPcVT87VxzQndkpDc0l9c1e9YNhOvoMmn317Xvqn10ubujrpx8/fK399WPjrvrmPkLb2jfN3MGuhmZj/rqa7FMdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKI38CFedrXWsWOhwAAAAASUVORK5CYII=";
function Ke(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function mt(e) {
  let t, n, l, i, u, r, s, o = (
    /*node*/
    e[0].name + ""
  ), c, _, h, C, H, w = (
    /*node*/
    e[0].children.filter(Xe).length + ""
  ), Q, v, j, W, X = (
    /*node*/
    e[0].children.filter(Ye).length + ""
  ), N, $, B, O, Y, D, V, Z, G = (
    /*node*/
    e[0].children
  ), A = [];
  for (let f = 0; f < G.length; f += 1)
    A[f] = Pe(Ke(e, G, f));
  const k = (f) => P(A[f], 1, 1, () => {
    A[f] = null;
  });
  return {
    c() {
      t = m("div"), n = m("div"), l = m("img"), u = F(), r = m("div"), s = m("p"), c = K(o), _ = F(), h = m("div"), C = m("p"), H = K("Directories: "), Q = K(w), v = F(), j = m("p"), W = K("Files: "), N = K(X), B = F(), O = m("div");
      for (let f = 0; f < A.length; f += 1)
        A[f].c();
      g(l, "width", "24"), g(l, "height", "24"), b(l, "margin-right", "8px"), Se(l.src, i = pt) || g(l, "src", i), g(l, "alt", "Directory icon"), b(s, "margin", "0"), b(s, "font-size", "16px"), b(s, "font-weight", "500"), b(C, "margin", "0"), b(j, "margin", "0"), b(h, "font-size", "12px"), b(h, "display", "flex"), b(h, "flex-direction", "row"), b(h, "column-gap", "10px"), b(h, "color", "#6b7280"), b(r, "display", "flex"), b(r, "flex-direction", "column"), b(n, "display", "flex"), b(n, "flex-direction", "row"), b(n, "align-items", "center"), g(t, "style", $ = `margin-left: ${/*level*/
      e[1] * 64}px; padding: 16px; background-color: white; cursor: pointer;`), g(O, "style", Y = `transition: max-height 0.75s ease-in-out; overflow: hidden; max-height: ${/*showChildren*/
      e[2] ? "1000px" : "0px"}; `);
    },
    m(f, a) {
      I(f, t, a), d(t, n), d(n, l), d(n, u), d(n, r), d(r, s), d(s, c), d(r, _), d(r, h), d(h, C), d(C, H), d(C, Q), d(h, v), d(h, j), d(j, W), d(j, N), I(f, B, a), I(f, O, a);
      for (let p = 0; p < A.length; p += 1)
        A[p] && A[p].m(O, null);
      D = !0, V || (Z = M(
        t,
        "click",
        /*toggleShowChildren*/
        e[3]
      ), V = !0);
    },
    p(f, a) {
      if ((!D || a & /*node*/
      1) && o !== (o = /*node*/
      f[0].name + "") && ee(c, o), (!D || a & /*node*/
      1) && w !== (w = /*node*/
      f[0].children.filter(Xe).length + "") && ee(Q, w), (!D || a & /*node*/
      1) && X !== (X = /*node*/
      f[0].children.filter(Ye).length + "") && ee(N, X), (!D || a & /*level*/
      2 && $ !== ($ = `margin-left: ${/*level*/
      f[1] * 64}px; padding: 16px; background-color: white; cursor: pointer;`)) && g(t, "style", $), a & /*node, level*/
      3) {
        G = /*node*/
        f[0].children;
        let p;
        for (p = 0; p < G.length; p += 1) {
          const y = Ke(f, G, p);
          A[p] ? (A[p].p(y, a), R(A[p], 1)) : (A[p] = Pe(y), A[p].c(), R(A[p], 1), A[p].m(O, null));
        }
        for (ue(), p = G.length; p < A.length; p += 1)
          k(p);
        ae();
      }
      (!D || a & /*showChildren*/
      4 && Y !== (Y = `transition: max-height 0.75s ease-in-out; overflow: hidden; max-height: ${/*showChildren*/
      f[2] ? "1000px" : "0px"}; `)) && g(O, "style", Y);
    },
    i(f) {
      if (!D) {
        for (let a = 0; a < G.length; a += 1)
          R(A[a]);
        D = !0;
      }
    },
    o(f) {
      A = A.filter(Boolean);
      for (let a = 0; a < A.length; a += 1)
        P(A[a]);
      D = !1;
    },
    d(f) {
      f && U(t), f && U(B), f && U(O), me(A, f), V = !1, Z();
    }
  };
}
function At(e) {
  let t, n, l, i, u, r, s, o = (
    /*node*/
    e[0].name + ""
  ), c, _;
  return {
    c() {
      t = m("div"), n = m("div"), l = m("img"), u = F(), r = m("div"), s = m("p"), c = K(o), g(l, "width", "24"), g(l, "height", "24"), b(l, "margin-right", "8px"), Se(l.src, i = gt) || g(l, "src", i), g(l, "alt", "File icon"), b(s, "margin", "0"), b(s, "font-size", "16px"), b(s, "font-weight", "500"), b(n, "display", "flex"), b(n, "flex-direction", "row"), b(n, "align-items", "center"), g(t, "style", _ = `margin-left: ${/*level*/
      e[1] * 64}px; padding: 16px; background-color: white; cursor: default;`);
    },
    m(h, C) {
      I(h, t, C), d(t, n), d(n, l), d(n, u), d(n, r), d(r, s), d(s, c);
    },
    p(h, C) {
      C & /*node*/
      1 && o !== (o = /*node*/
      h[0].name + "") && ee(c, o), C & /*level*/
      2 && _ !== (_ = `margin-left: ${/*level*/
      h[1] * 64}px; padding: 16px; background-color: white; cursor: default;`) && g(t, "style", _);
    },
    i: x,
    o: x,
    d(h) {
      h && U(t);
    }
  };
}
function Pe(e) {
  let t, n, l, i;
  return n = new we({
    props: {
      node: (
        /*childNode*/
        e[4]
      ),
      level: (
        /*level*/
        e[1] + 1
      )
    }
  }), {
    c() {
      t = m("div"), We(n.$$.fragment), l = F(), b(t, "border-top", "1px solid #e2e8f0");
    },
    m(u, r) {
      I(u, t, r), Ce(n, t, null), d(t, l), i = !0;
    },
    p(u, r) {
      const s = {};
      r & /*node*/
      1 && (s.node = /*childNode*/
      u[4]), r & /*level*/
      2 && (s.level = /*level*/
      u[1] + 1), n.$set(s);
    },
    i(u) {
      i || (R(n.$$.fragment, u), i = !0);
    },
    o(u) {
      P(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && U(t), ye(n);
    }
  };
}
function _t(e) {
  let t, n, l, i;
  const u = [At, mt], r = [];
  function s(o, c) {
    return (
      /*node*/
      o[0].isFile ? 0 : 1
    );
  }
  return t = s(e), n = r[t] = u[t](e), {
    c() {
      n.c(), l = Ae(), this.c = x;
    },
    m(o, c) {
      r[t].m(o, c), I(o, l, c), i = !0;
    },
    p(o, [c]) {
      let _ = t;
      t = s(o), t === _ ? r[t].p(o, c) : (ue(), P(r[_], 1, 1, () => {
        r[_] = null;
      }), ae(), n = r[t], n ? n.p(o, c) : (n = r[t] = u[t](o), n.c()), R(n, 1), n.m(l.parentNode, l));
    },
    i(o) {
      i || (R(n), i = !0);
    },
    o(o) {
      P(n), i = !1;
    },
    d(o) {
      r[t].d(o), o && U(l);
    }
  };
}
const Xe = (e) => !e.isFile, Ye = (e) => e.isFile;
function bt(e, t, n) {
  let { node: l = {
    id: "",
    name: "",
    isFile: !1,
    children: []
  } } = t, { level: i = 0 } = t, u = !1;
  function r() {
    n(2, u = !u);
  }
  return e.$$set = (s) => {
    "node" in s && n(0, l = s.node), "level" in s && n(1, i = s.level);
  }, [l, i, u, r];
}
class we extends fe {
  constructor(t) {
    super(), ve(
      this,
      {
        target: this.shadowRoot,
        props: _e(this.attributes),
        customElement: !0
      },
      bt,
      _t,
      se,
      { node: 0, level: 1 },
      null
    ), t && (t.target && I(t.target, this, t.anchor), t.props && (this.$set(t.props), ne()));
  }
  static get observedAttributes() {
    return ["node", "level"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(t) {
    this.$$set({ node: t }), ne();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(t) {
    this.$$set({ level: t }), ne();
  }
}
customElements.define("file-hierarchy-item", we);
function je(e, t, n) {
  const l = e.slice();
  return l[1] = t[n], l;
}
function Ct(e) {
  let t, n, l = (
    /*$fileStore*/
    e[0]
  ), i = [];
  for (let r = 0; r < l.length; r += 1)
    i[r] = Me(je(e, l, r));
  const u = (r) => P(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = Ae();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, s);
      I(r, t, s), n = !0;
    },
    p(r, s) {
      if (s & /*$fileStore*/
      1) {
        l = /*$fileStore*/
        r[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = je(r, l, o);
          i[o] ? (i[o].p(c, s), R(i[o], 1)) : (i[o] = Me(c), i[o].c(), R(i[o], 1), i[o].m(t.parentNode, t));
        }
        for (ue(), o = l.length; o < i.length; o += 1)
          u(o);
        ae();
      }
    },
    i(r) {
      if (!n) {
        for (let s = 0; s < l.length; s += 1)
          R(i[s]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        P(i[s]);
      n = !1;
    },
    d(r) {
      me(i, r), r && U(t);
    }
  };
}
function yt(e) {
  let t;
  return {
    c() {
      t = m("div"), t.innerHTML = "<p>Empty. Please add a file or directory.</p>", g(t, "class", "empty");
    },
    m(n, l) {
      I(n, t, l);
    },
    p: x,
    i: x,
    o: x,
    d(n) {
      n && U(t);
    }
  };
}
function Me(e) {
  let t, n;
  return t = new we({ props: { node: (
    /*node*/
    e[1]
  ) } }), {
    c() {
      We(t.$$.fragment);
    },
    m(l, i) {
      Ce(t, l, i), n = !0;
    },
    p(l, i) {
      const u = {};
      i & /*$fileStore*/
      1 && (u.node = /*node*/
      l[1]), t.$set(u);
    },
    i(l) {
      n || (R(t.$$.fragment, l), n = !0);
    },
    o(l) {
      P(t.$$.fragment, l), n = !1;
    },
    d(l) {
      ye(t, l);
    }
  };
}
function vt(e) {
  let t, n, l, i;
  const u = [yt, Ct], r = [];
  function s(o, c) {
    return (
      /*$fileStore*/
      o[0].length === 0 ? 0 : 1
    );
  }
  return t = s(e), n = r[t] = u[t](e), {
    c() {
      n.c(), l = Ae(), this.c = x;
    },
    m(o, c) {
      r[t].m(o, c), I(o, l, c), i = !0;
    },
    p(o, [c]) {
      let _ = t;
      t = s(o), t === _ ? r[t].p(o, c) : (ue(), P(r[_], 1, 1, () => {
        r[_] = null;
      }), ae(), n = r[t], n ? n.p(o, c) : (n = r[t] = u[t](o), n.c()), R(n, 1), n.m(l.parentNode, l));
    },
    i(o) {
      i || (R(n), i = !0);
    },
    o(o) {
      P(n), i = !1;
    },
    d(o) {
      r[t].d(o), o && U(l);
    }
  };
}
function wt(e, t, n) {
  let l;
  return qe(e, oe, (i) => n(0, l = i)), [l];
}
class kt extends fe {
  constructor(t) {
    super();
    const n = document.createElement("style");
    n.textContent = ".empty{width:100%;min-height:400px;display:flex;flex-direction:row;align-items:center;justify-content:center}", this.shadowRoot.appendChild(n), ve(
      this,
      {
        target: this.shadowRoot,
        props: _e(this.attributes),
        customElement: !0
      },
      wt,
      vt,
      se,
      {},
      null
    ), t && t.target && I(t.target, this, t.anchor);
  }
}
customElements.define("file-hierarchy", kt);
