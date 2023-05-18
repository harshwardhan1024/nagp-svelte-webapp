function E() {
}
function Ae(t) {
  return t();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function Z(t) {
  t.forEach(Ae);
}
function pe(t) {
  return typeof t == "function";
}
function fe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let re;
function Ne(t, e) {
  return re || (re = document.createElement("a")), re.href = e, t === re.href;
}
function ze(t) {
  return Object.keys(t).length === 0;
}
function Le(t, ...e) {
  if (t == null)
    return E;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function We(t, e, n) {
  t.$$.on_destroy.push(Le(e, n));
}
const Je = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Je;
function a(t, e) {
  t.appendChild(e);
}
function I(t, e, n) {
  t.insertBefore(e, n || null);
}
function Q(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _e(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function A(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createTextNode(t);
}
function F() {
  return Y(" ");
}
function be() {
  return Y("");
}
function N(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Te(t) {
  return Array.from(t.childNodes);
}
function ne(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function y(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
function Fe(t, e, n) {
  for (let l = 0; l < t.options.length; l += 1) {
    const i = t.options[l];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function et(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function Ce(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let ye;
function le(t) {
  ye = t;
}
const T = [], Ue = [];
let ee = [];
const Re = [], tt = /* @__PURE__ */ Promise.resolve();
let me = !1;
function nt() {
  me || (me = !0, tt.then(ie));
}
function ue(t) {
  ee.push(t);
}
const ge = /* @__PURE__ */ new Set();
let L = 0;
function ie() {
  if (L !== 0)
    return;
  const t = ye;
  do {
    try {
      for (; L < T.length; ) {
        const e = T[L];
        L++, le(e), lt(e.$$);
      }
    } catch (e) {
      throw T.length = 0, L = 0, e;
    }
    for (le(null), T.length = 0, L = 0; Ue.length; )
      Ue.pop()();
    for (let e = 0; e < ee.length; e += 1) {
      const n = ee[e];
      ge.has(n) || (ge.add(n), n());
    }
    ee.length = 0;
  } while (T.length);
  for (; Re.length; )
    Re.pop()();
  me = !1, ge.clear(), le(t);
}
function lt(t) {
  if (t.fragment !== null) {
    t.update(), Z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ue);
  }
}
function it(t) {
  const e = [], n = [];
  ee.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), ee = e;
}
const ce = /* @__PURE__ */ new Set();
let W;
function ae() {
  W = {
    r: 0,
    c: [],
    p: W
    // parent group
  };
}
function de() {
  W.r || Z(W.c), W = W.p;
}
function $(t, e) {
  t && t.i && (ce.delete(t), t.i(e));
}
function j(t, e, n, l) {
  if (t && t.o) {
    if (ce.has(t))
      return;
    ce.add(t), W.c.push(() => {
      ce.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const rt = [
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
[...rt];
function Ze(t) {
  t && t.c();
}
function ve(t, e, n, l) {
  const { fragment: i, after_update: u } = t.$$;
  i && i.m(e, n), l || ue(() => {
    const r = t.$$.on_mount.map(Ae).filter(pe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : Z(r), t.$$.on_mount = [];
  }), u.forEach(ue);
}
function we(t, e) {
  const n = t.$$;
  n.fragment !== null && (it(n.after_update), Z(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(t, e) {
  t.$$.dirty[0] === -1 && (T.push(t), nt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ke(t, e, n, l, i, u, r, s = [-1]) {
  const o = ye;
  le(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: E,
    not_equal: i,
    bound: Ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Ie(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  r && r(c.root);
  let _ = !1;
  if (c.ctx = n ? n(t, e.props || {}, (d, v, ...K) => {
    const U = K.length ? K[0] : v;
    return c.ctx && i(c.ctx[d], c.ctx[d] = U) && (!c.skip_bound && c.bound[d] && c.bound[d](U), _ && ot(t, d)), v;
  }) : [], c.update(), _ = !0, Z(c.before_update), c.fragment = l ? l(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Te(e.target);
      c.fragment && c.fragment.l(d), d.forEach(Q);
    } else
      c.fragment && c.fragment.c();
    e.intro && $(t.$$.fragment), ve(t, e.target, e.anchor, e.customElement), ie();
  }
  le(o);
}
let he;
typeof HTMLElement == "function" && (he = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(Ae).filter(pe);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    Z(this.$$.on_disconnect);
  }
  $destroy() {
    we(this, 1), this.$destroy = E;
  }
  $on(t, e) {
    if (!pe(e))
      return E;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const l = n.indexOf(e);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !ze(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
const J = [];
function ct(t, e = E) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(s) {
    if (fe(t, s) && (t = s, n)) {
      const o = !J.length;
      for (const c of l)
        c[1](), J.push(c, t);
      if (o) {
        for (let c = 0; c < J.length; c += 2)
          J[c][0](J[c + 1]);
        J.length = 0;
      }
    }
  }
  function u(s) {
    i(s(t));
  }
  function r(s, o = E) {
    const c = [s, o];
    return l.add(c), l.size === 1 && (n = e(i) || E), s(t), () => {
      l.delete(c), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: u, subscribe: r };
}
const se = ct([]);
let oe;
const st = new Uint8Array(16);
function ut() {
  if (!oe && (oe = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !oe))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return oe(st);
}
const x = [];
for (let t = 0; t < 256; ++t)
  x.push((t + 256).toString(16).slice(1));
function ft(t, e = 0) {
  return (x[t[e + 0]] + x[t[e + 1]] + x[t[e + 2]] + x[t[e + 3]] + "-" + x[t[e + 4]] + x[t[e + 5]] + "-" + x[t[e + 6]] + x[t[e + 7]] + "-" + x[t[e + 8]] + x[t[e + 9]] + "-" + x[t[e + 10]] + x[t[e + 11]] + x[t[e + 12]] + x[t[e + 13]] + x[t[e + 14]] + x[t[e + 15]]).toLowerCase();
}
const at = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Qe = {
  randomUUID: at
};
function dt(t, e, n) {
  if (Qe.randomUUID && !e && !t)
    return Qe.randomUUID();
  t = t || {};
  const l = t.random || (t.rng || ut)();
  if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, e) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
      e[n + i] = l[i];
    return e;
  }
  return ft(l);
}
function Be(t, e, n) {
  const l = t.slice();
  return l[13] = e[n], l;
}
function De(t) {
  let e, n = (
    /*node*/
    t[13].name + ""
  ), l, i;
  return {
    c() {
      e = A("option"), l = Y(n), e.__value = i = /*node*/
      t[13].id, e.value = e.__value;
    },
    m(u, r) {
      I(u, e, r), a(e, l);
    },
    p(u, r) {
      r & /*$fileStore*/
      32 && n !== (n = /*node*/
      u[13].name + "") && ne(l, n), r & /*$fileStore*/
      32 && i !== (i = /*node*/
      u[13].id) && (e.__value = i, e.value = e.__value);
    },
    d(u) {
      u && Q(e);
    }
  };
}
function $e(t) {
  let e;
  return {
    c() {
      e = A("p"), e.textContent = "Please add a directory to enable these options.", h(e, "class", "warning-text");
    },
    m(n, l) {
      I(n, e, l);
    },
    d(n) {
      n && Q(e);
    }
  };
}
function He(t) {
  let e;
  return {
    c() {
      e = A("p"), e.textContent = "Name must be unique among siblings.", h(e, "class", "error");
    },
    m(n, l) {
      I(n, e, l);
    },
    d(n) {
      n && Q(e);
    }
  };
}
function ht(t) {
  let e, n, l, i, u, r, s, o, c, _, d, v, K, U, S, b, w, R = (
    /*$fileStore*/
    t[5].filter(Ve).length === 0
  ), B, z, V, H, P, M, O, X, te, G, C, q = (
    /*$fileStore*/
    t[5].filter(Ke)
  ), f = [];
  for (let m = 0; m < q.length; m += 1)
    f[m] = De(Be(t, q, m));
  let p = R && $e(), g = (
    /*error*/
    t[4] && He()
  );
  return {
    c() {
      e = A("div"), n = A("input"), l = F(), i = A("span"), u = A("input"), r = F(), s = A("label"), s.textContent = "Is File", o = F(), c = A("div"), _ = A("span"), d = A("input"), K = F(), U = A("label"), U.textContent = "Save at Root", S = F(), b = A("select");
      for (let m = 0; m < f.length; m += 1)
        f[m].c();
      w = F(), p && p.c(), z = F(), V = A("div"), H = A("button"), P = Y("Save"), O = F(), X = A("button"), X.textContent = "Cancel", te = F(), g && g.c(), this.c = E, h(n, "type", "text"), h(n, "maxlength", "150"), h(n, "part", "name-input"), h(n, "class", "margin-bottom"), h(n, "placeholder", "File/Directory Name"), n.value = /*name*/
      t[0], h(u, "name", "isFile"), h(u, "type", "checkbox"), h(s, "for", "isFile"), h(i, "class", "margin-bottom flex flex-row items-center column-gap-sm"), h(d, "name", "saveAtRoot"), h(d, "type", "checkbox"), d.disabled = v = /*$fileStore*/
      t[5].filter(Ge).length === 0, h(U, "for", "saveAtRoot"), h(_, "class", "flex flex-row items-center column-gap-sm margin-bottom"), b.disabled = /*saveAtRoot*/
      t[2], h(b, "part", "parent-input"), /*parentDirectoryIdToSaveIn*/
      t[3] === void 0 && ue(() => (
        /*select_change_handler*/
        t[11].call(b)
      )), h(c, "class", B = /*$fileStore*/
      t[5].filter(Pe).length === 0 ? "warning flex-column margin-top-md" : "flex-column margin-top-md"), h(H, "class", "flex-one"), h(H, "part", "save-btn"), H.disabled = M = Oe(
        /*name*/
        t[0],
        /*saveAtRoot*/
        t[2],
        /*parentDirectoryIdToSaveIn*/
        t[3]
      ), h(X, "class", "flex-one"), h(X, "part", "cancel-btn"), h(V, "class", "margin-top-lg flex-row column-gap"), h(e, "class", "flex-column");
    },
    m(m, D) {
      I(m, e, D), a(e, n), a(e, l), a(e, i), a(i, u), u.checked = /*isFile*/
      t[1], a(i, r), a(i, s), a(e, o), a(e, c), a(c, _), a(_, d), d.checked = /*saveAtRoot*/
      t[2], a(_, K), a(_, U), a(c, S), a(c, b);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(b, null);
      Fe(
        b,
        /*parentDirectoryIdToSaveIn*/
        t[3],
        !0
      ), a(c, w), p && p.m(c, null), a(e, z), a(e, V), a(V, H), a(H, P), a(V, O), a(V, X), a(e, te), g && g.m(e, null), G || (C = [
        N(
          n,
          "input",
          /*onNameInput*/
          t[6]
        ),
        N(
          u,
          "change",
          /*input1_change_handler*/
          t[9]
        ),
        N(
          d,
          "change",
          /*input2_change_handler*/
          t[10]
        ),
        N(
          b,
          "change",
          /*select_change_handler*/
          t[11]
        ),
        N(
          H,
          "click",
          /*updateFileStore*/
          t[7]
        ),
        N(
          X,
          "click",
          /*resetForm*/
          t[8]
        )
      ], G = !0);
    },
    p(m, [D]) {
      if (D & /*name*/
      1 && n.value !== /*name*/
      m[0] && (n.value = /*name*/
      m[0]), D & /*isFile*/
      2 && (u.checked = /*isFile*/
      m[1]), D & /*$fileStore*/
      32 && v !== (v = /*$fileStore*/
      m[5].filter(Ge).length === 0) && (d.disabled = v), D & /*saveAtRoot*/
      4 && (d.checked = /*saveAtRoot*/
      m[2]), D & /*$fileStore*/
      32) {
        q = /*$fileStore*/
        m[5].filter(Ke);
        let k;
        for (k = 0; k < q.length; k += 1) {
          const Ee = Be(m, q, k);
          f[k] ? f[k].p(Ee, D) : (f[k] = De(Ee), f[k].c(), f[k].m(b, null));
        }
        for (; k < f.length; k += 1)
          f[k].d(1);
        f.length = q.length;
      }
      D & /*saveAtRoot*/
      4 && (b.disabled = /*saveAtRoot*/
      m[2]), D & /*parentDirectoryIdToSaveIn, $fileStore*/
      40 && Fe(
        b,
        /*parentDirectoryIdToSaveIn*/
        m[3]
      ), D & /*$fileStore*/
      32 && (R = /*$fileStore*/
      m[5].filter(Ve).length === 0), R ? p || (p = $e(), p.c(), p.m(c, null)) : p && (p.d(1), p = null), D & /*$fileStore*/
      32 && B !== (B = /*$fileStore*/
      m[5].filter(Pe).length === 0 ? "warning flex-column margin-top-md" : "flex-column margin-top-md") && h(c, "class", B), D & /*name, saveAtRoot, parentDirectoryIdToSaveIn, $fileStore*/
      45 && M !== (M = Oe(
        /*name*/
        m[0],
        /*saveAtRoot*/
        m[2],
        /*parentDirectoryIdToSaveIn*/
        m[3]
      )) && (H.disabled = M), /*error*/
      m[4] ? g || (g = He(), g.c(), g.m(e, null)) : g && (g.d(1), g = null);
    },
    i: E,
    o: E,
    d(m) {
      m && Q(e), _e(f, m), p && p.d(), g && g.d(), G = !1, Z(C);
    }
  };
}
function Oe(t, e, n) {
  return t.trim().length === 0 || !e && n === null;
}
const Ve = (t) => !t.isFile, Ge = (t) => !t.isFile, Ke = (t) => !t.isFile, Pe = (t) => !t.isFile;
function gt(t, e, n) {
  let l;
  We(t, se, (b) => n(5, l = b));
  let i = "", u = !0, r = !0, s = null, o = !1;
  function c(b) {
    const w = b.target;
    n(0, i = w.value), n(4, o = !1);
  }
  function _() {
    const b = {
      id: dt(),
      name: i.trim(),
      isFile: u,
      children: []
    };
    if (r) {
      if (!d(b.name, null)) {
        n(4, o = !0);
        return;
      }
      se.update((w) => [...w, b]);
    } else {
      const w = l.find((R) => R.id == s);
      if (!w)
        return;
      if (!d(b.name, w)) {
        n(4, o = !0);
        return;
      }
      w.children = [...w.children, b], se.update((R) => [...R]);
    }
    v();
  }
  function d(b, w) {
    let R = 0;
    return w ? R = w.children.findIndex((B) => B.name === b) : R = l.findIndex((B) => B.name === b), R === -1;
  }
  function v() {
    n(0, i = ""), n(1, u = !0), n(2, r = !0), n(3, s = null);
  }
  function K() {
    u = this.checked, n(1, u);
  }
  function U() {
    r = this.checked, n(2, r);
  }
  function S() {
    s = et(this), n(3, s);
  }
  return [
    i,
    u,
    r,
    s,
    o,
    l,
    c,
    _,
    v,
    K,
    U,
    S
  ];
}
class pt extends he {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".flex-column{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.flex-one{flex:1}.column-gap{column-gap:16px}.column-gap-sm{column-gap:8px}.margin-bottom{margin-bottom:8px}.margin-top-md{margin-top:16px}.margin-top-lg{margin-top:32px}.warning{padding:8px;border:2px dotted #fcd34d;border-radius:8px}.warning-text{background-color:#fde68a;padding:8px;color:#000;margin-bottom:0px;border-radius:8px}.error{width:100%;text-align:center;color:#b91c1c}", this.shadowRoot.appendChild(n), ke(
      this,
      {
        target: this.shadowRoot,
        props: Ce(this.attributes),
        customElement: !0
      },
      gt,
      ht,
      fe,
      {},
      null
    ), e && e.target && I(e.target, this, e.anchor);
  }
}
customElements.define("file-input", pt);
const mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADo0lEQVR4nO2bOW4UYRhEKwLugC+AZzEE2DkkSCD1OCDmAiyxF3EDJMhB4hZwAITlCPCCkAMGsHoyB8hEBPxonCEIPPOrp0RVPeld4HWp5xsvQAghhBBCCCGEEEIIIYQQQgghhBBCcOfeuFwateVR05bdUVt+jCalqHj9+fgNu68068dlaTQpH9gPuiuvbO9lRJ2+eYTHM5qUsry9lxF1xfRji/2AFzGg5YyoG85uHvkB7WdEXdG05VR+QFv7f4/oxZedzqI6wX64i7A3HVBGlAHVDKiXEWVAtQPqZUT5CKsdUC8jyg1UO6BeRpQjepYB9bcOMqJ8C6sbUD8jyhFdO6B+RpQjunZA/YwoR/SsAxps/jmgjChH9MwDGmREuYFqBzTIiHID1Q5okBHlBpp1QMPNw4woPweqG9AwI8oNVDugYUaUG6h2QMOMKDdQ7YCGGVF+mTrLgFb+MaCMKH/Sev4BbRxmRPkWVjmgjYwof1Q/54CuPf6UEeUNNP8baO3puKxsfFzYiFZffvX5X/x5H8r/5I1XJ+Xq2YAyogxojgE1x7/K6pPPGVHeQPO/he4c/cyIMqD6N9HN1ydl7dl4oYe19E3Evk9chCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6EKO6yLUIUd1kWowg7rIlRhh3URqrDDughV2GFdhCrssC5CFXZYF6FK05ZTdlx52/IdqjRt2aUHFrdpyw5UWW/LQ3ZgedtyH6rcOioXm0l5T4+s67u7B+UClFk/LksZUelkPLe/lctw4OxN1JYH08/rHNZl7tFM2zWT8nb6sSX/5gkhhBBCCCGEEEIIIYQQQgghhBBCCDgHvwHDGQwojgVeUQAAAABJRU5ErkJggg==", At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO2ZwWodZQCFf7A73RRbk9RUIeidUUQE8RkspQ+iFp9B3XXrQlBUJsWKXXSjxlizCIUW0xnr0iiCD6CbWusmJPbIjQs3EgQz859z/T44DzD/9/WfzG0pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwv0UflVV15aLWy5daL9+rK79rvajKuvJm7fOAf4k+LKe1Xt5WV/arBfPPEV1Cojm6XC6oK/eqx8JNlIcul9fUlYPqkRBRHurKuYh4eJ35oQ/KGevXFq8zb9SV96vHwE0U/anu9bXFTZSDuvJ69QC4iXJRVzary+cmykXr5cfq4rmJclFX7leXTkS5HCnvygnps5PS9lnp5pp0eyYNLRsqnsHcwc21Pd148hdtrVzV5qMv+QV05SHp+pI0NMQymP+D6Vtpe/UnbZx+wSOga49w0wyB25k90PXlN+oG9OnJ+gfB9J/OYGv5kzoBXXsYecOCvNK+Wnpr2oA+PsFra9FeZ5uPPT9dQFvL9R+a6VjPYHv1u2kCmn+q87W1eAH3jbRx6sXxA5r/zlP7YZlGOYOtlavjBzT/kRCBi3kGN574efyAbq3Vf1CmUc7g1tre+AHx3xOLG/DO7MH4AdV+SKYxz4CACEwERASqdQbcQMQnAiICcQMRgRLPgFeYgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCR0AGEhQ8AjKQoOARkIEEBY+ADCQoeARkIEHBIyADCQoeARlIUPAIyECCgkdABhIUPAIykKDgEZCBBAWPgAwkKHgEZCBBwSMgAwkKHgEZSFDwCMhAgoJHQAYSFDwCMpCg4BGQgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCR0AGEhQ8AjKQoOARkIEEBY+ADCQoeARkIEHBIyADCQoeARlIUPAIyECCgkdABhIUPAIykKDgEZCBBAWPgAwkKHgEZCBBwSMgAwkKHgEZSFDwCMhAgoJHQAYSFDwCMpCg4BGQgQQFj4AMJCh4BGQgQcEjIAMJCh4BGUhQ8AjIQIKCN0VAv9V+SNaOdQb3xg+ob39A4MJGvDtBQM0XBg/KhjHOoPl8/ICG9iICFzTgvnll/IBuP7Wqodmv/rBMx3z77Ovb5szoAR1G1LfvInDBIu6bdyaJ5zCgO+2K+vbX6g/NdEzx3NXOc0uTBXQYUd+8rKE9QGKbHXLf/qG+vTBpPH9HNHuViNrkHUzyh/OREX3zzHleZ23gzdPcVT87VxzQndkpDc0l9c1e9YNhOvoMmn317Xvqn10ubujrpx8/fK399WPjrvrmPkLb2jfN3MGuhmZj/rqa7FMdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKI38CFedrXWsWOhwAAAAASUVORK5CYII=";
function Xe(t, e, n) {
  const l = t.slice();
  return l[4] = e[n], l;
}
function _t(t) {
  let e, n, l, i, u, r, s, o = (
    /*node*/
    t[0].name + ""
  ), c, _, d, v, K, U = (
    /*node*/
    t[0].children.filter(je).length + ""
  ), S, b, w, R, B = (
    /*node*/
    t[0].children.filter(Me).length + ""
  ), z, V, H, P, M, O, X, te, G = (
    /*node*/
    t[0].children
  ), C = [];
  for (let f = 0; f < G.length; f += 1)
    C[f] = Ye(Xe(t, G, f));
  const q = (f) => j(C[f], 1, 1, () => {
    C[f] = null;
  });
  return {
    c() {
      e = A("div"), n = A("div"), l = A("img"), u = F(), r = A("div"), s = A("p"), c = Y(o), _ = F(), d = A("div"), v = A("p"), K = Y("Directories: "), S = Y(U), b = F(), w = A("p"), R = Y("Files: "), z = Y(B), H = F(), P = A("div");
      for (let f = 0; f < C.length; f += 1)
        C[f].c();
      h(l, "width", "24"), h(l, "height", "24"), y(l, "margin-right", "8px"), Ne(l.src, i = At) || h(l, "src", i), h(l, "alt", "Directory icon"), y(s, "margin", "0"), y(s, "font-size", "16px"), y(s, "font-weight", "500"), y(v, "margin", "0"), y(w, "margin", "0"), y(d, "font-size", "12px"), y(d, "display", "flex"), y(d, "flex-direction", "row"), y(d, "column-gap", "10px"), y(d, "color", "#6b7280"), y(r, "display", "flex"), y(r, "flex-direction", "column"), y(n, "display", "flex"), y(n, "flex-direction", "row"), y(n, "align-items", "center"), h(e, "style", V = `margin-left: ${/*level*/
      t[1] * 64}px; padding: 16px; background-color: white; cursor: pointer;`), h(P, "style", M = `transition: max-height 0.75s ease-in-out; overflow: hidden; max-height: ${/*showChildren*/
      t[2] ? "1000px" : "0px"}; `);
    },
    m(f, p) {
      I(f, e, p), a(e, n), a(n, l), a(n, u), a(n, r), a(r, s), a(s, c), a(r, _), a(r, d), a(d, v), a(v, K), a(v, S), a(d, b), a(d, w), a(w, R), a(w, z), I(f, H, p), I(f, P, p);
      for (let g = 0; g < C.length; g += 1)
        C[g] && C[g].m(P, null);
      O = !0, X || (te = N(
        e,
        "click",
        /*toggleShowChildren*/
        t[3]
      ), X = !0);
    },
    p(f, p) {
      if ((!O || p & /*node*/
      1) && o !== (o = /*node*/
      f[0].name + "") && ne(c, o), (!O || p & /*node*/
      1) && U !== (U = /*node*/
      f[0].children.filter(je).length + "") && ne(S, U), (!O || p & /*node*/
      1) && B !== (B = /*node*/
      f[0].children.filter(Me).length + "") && ne(z, B), (!O || p & /*level*/
      2 && V !== (V = `margin-left: ${/*level*/
      f[1] * 64}px; padding: 16px; background-color: white; cursor: pointer;`)) && h(e, "style", V), p & /*node, level*/
      3) {
        G = /*node*/
        f[0].children;
        let g;
        for (g = 0; g < G.length; g += 1) {
          const m = Xe(f, G, g);
          C[g] ? (C[g].p(m, p), $(C[g], 1)) : (C[g] = Ye(m), C[g].c(), $(C[g], 1), C[g].m(P, null));
        }
        for (ae(), g = G.length; g < C.length; g += 1)
          q(g);
        de();
      }
      (!O || p & /*showChildren*/
      4 && M !== (M = `transition: max-height 0.75s ease-in-out; overflow: hidden; max-height: ${/*showChildren*/
      f[2] ? "1000px" : "0px"}; `)) && h(P, "style", M);
    },
    i(f) {
      if (!O) {
        for (let p = 0; p < G.length; p += 1)
          $(C[p]);
        O = !0;
      }
    },
    o(f) {
      C = C.filter(Boolean);
      for (let p = 0; p < C.length; p += 1)
        j(C[p]);
      O = !1;
    },
    d(f) {
      f && Q(e), f && Q(H), f && Q(P), _e(C, f), X = !1, te();
    }
  };
}
function bt(t) {
  let e, n, l, i, u, r, s, o = (
    /*node*/
    t[0].name + ""
  ), c, _;
  return {
    c() {
      e = A("div"), n = A("div"), l = A("img"), u = F(), r = A("div"), s = A("p"), c = Y(o), h(l, "width", "24"), h(l, "height", "24"), y(l, "margin-right", "8px"), Ne(l.src, i = mt) || h(l, "src", i), h(l, "alt", "File icon"), y(s, "margin", "0"), y(s, "font-size", "16px"), y(s, "font-weight", "500"), y(n, "display", "flex"), y(n, "flex-direction", "row"), y(n, "align-items", "center"), h(e, "style", _ = `margin-left: ${/*level*/
      t[1] * 64}px; padding: 16px; background-color: white; cursor: default;`);
    },
    m(d, v) {
      I(d, e, v), a(e, n), a(n, l), a(n, u), a(n, r), a(r, s), a(s, c);
    },
    p(d, v) {
      v & /*node*/
      1 && o !== (o = /*node*/
      d[0].name + "") && ne(c, o), v & /*level*/
      2 && _ !== (_ = `margin-left: ${/*level*/
      d[1] * 64}px; padding: 16px; background-color: white; cursor: default;`) && h(e, "style", _);
    },
    i: E,
    o: E,
    d(d) {
      d && Q(e);
    }
  };
}
function Ye(t) {
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
      e = A("div"), Ze(n.$$.fragment), l = F(), y(e, "border-top", "1px solid #e2e8f0");
    },
    m(u, r) {
      I(u, e, r), ve(n, e, null), a(e, l), i = !0;
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
      i || ($(n.$$.fragment, u), i = !0);
    },
    o(u) {
      j(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && Q(e), we(n);
    }
  };
}
function Ct(t) {
  let e, n, l, i;
  const u = [bt, _t], r = [];
  function s(o, c) {
    return (
      /*node*/
      o[0].isFile ? 0 : 1
    );
  }
  return e = s(t), n = r[e] = u[e](t), {
    c() {
      n.c(), l = be(), this.c = E;
    },
    m(o, c) {
      r[e].m(o, c), I(o, l, c), i = !0;
    },
    p(o, [c]) {
      let _ = e;
      e = s(o), e === _ ? r[e].p(o, c) : (ae(), j(r[_], 1, 1, () => {
        r[_] = null;
      }), de(), n = r[e], n ? n.p(o, c) : (n = r[e] = u[e](o), n.c()), $(n, 1), n.m(l.parentNode, l));
    },
    i(o) {
      i || ($(n), i = !0);
    },
    o(o) {
      j(n), i = !1;
    },
    d(o) {
      r[e].d(o), o && Q(l);
    }
  };
}
const je = (t) => !t.isFile, Me = (t) => t.isFile;
function yt(t, e, n) {
  let { node: l = {
    id: "",
    name: "",
    isFile: !1,
    children: []
  } } = e, { level: i = 0 } = e, u = !1;
  function r() {
    n(2, u = !u);
  }
  return t.$$set = (s) => {
    "node" in s && n(0, l = s.node), "level" in s && n(1, i = s.level);
  }, [l, i, u, r];
}
class xe extends he {
  constructor(e) {
    super(), ke(
      this,
      {
        target: this.shadowRoot,
        props: Ce(this.attributes),
        customElement: !0
      },
      yt,
      Ct,
      fe,
      { node: 0, level: 1 },
      null
    ), e && (e.target && I(e.target, this, e.anchor), e.props && (this.$set(e.props), ie()));
  }
  static get observedAttributes() {
    return ["node", "level"];
  }
  get node() {
    return this.$$.ctx[0];
  }
  set node(e) {
    this.$$set({ node: e }), ie();
  }
  get level() {
    return this.$$.ctx[1];
  }
  set level(e) {
    this.$$set({ level: e }), ie();
  }
}
customElements.define("file-hierarchy-item", xe);
function Se(t, e, n) {
  const l = t.slice();
  return l[1] = e[n], l;
}
function vt(t) {
  let e, n, l = (
    /*$fileStore*/
    t[0]
  ), i = [];
  for (let r = 0; r < l.length; r += 1)
    i[r] = qe(Se(t, l, r));
  const u = (r) => j(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = be();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, s);
      I(r, e, s), n = !0;
    },
    p(r, s) {
      if (s & /*$fileStore*/
      1) {
        l = /*$fileStore*/
        r[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = Se(r, l, o);
          i[o] ? (i[o].p(c, s), $(i[o], 1)) : (i[o] = qe(c), i[o].c(), $(i[o], 1), i[o].m(e.parentNode, e));
        }
        for (ae(), o = l.length; o < i.length; o += 1)
          u(o);
        de();
      }
    },
    i(r) {
      if (!n) {
        for (let s = 0; s < l.length; s += 1)
          $(i[s]);
        n = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        j(i[s]);
      n = !1;
    },
    d(r) {
      _e(i, r), r && Q(e);
    }
  };
}
function wt(t) {
  let e;
  return {
    c() {
      e = A("div"), e.innerHTML = "<p>Empty. Please add a file or directory.</p>", h(e, "class", "empty");
    },
    m(n, l) {
      I(n, e, l);
    },
    p: E,
    i: E,
    o: E,
    d(n) {
      n && Q(e);
    }
  };
}
function qe(t) {
  let e, n;
  return e = new xe({ props: { node: (
    /*node*/
    t[1]
  ) } }), {
    c() {
      Ze(e.$$.fragment);
    },
    m(l, i) {
      ve(e, l, i), n = !0;
    },
    p(l, i) {
      const u = {};
      i & /*$fileStore*/
      1 && (u.node = /*node*/
      l[1]), e.$set(u);
    },
    i(l) {
      n || ($(e.$$.fragment, l), n = !0);
    },
    o(l) {
      j(e.$$.fragment, l), n = !1;
    },
    d(l) {
      we(e, l);
    }
  };
}
function kt(t) {
  let e, n, l, i;
  const u = [wt, vt], r = [];
  function s(o, c) {
    return (
      /*$fileStore*/
      o[0].length === 0 ? 0 : 1
    );
  }
  return e = s(t), n = r[e] = u[e](t), {
    c() {
      n.c(), l = be(), this.c = E;
    },
    m(o, c) {
      r[e].m(o, c), I(o, l, c), i = !0;
    },
    p(o, [c]) {
      let _ = e;
      e = s(o), e === _ ? r[e].p(o, c) : (ae(), j(r[_], 1, 1, () => {
        r[_] = null;
      }), de(), n = r[e], n ? n.p(o, c) : (n = r[e] = u[e](o), n.c()), $(n, 1), n.m(l.parentNode, l));
    },
    i(o) {
      i || ($(n), i = !0);
    },
    o(o) {
      j(n), i = !1;
    },
    d(o) {
      r[e].d(o), o && Q(l);
    }
  };
}
function xt(t, e, n) {
  let l;
  return We(t, se, (i) => n(0, l = i)), [l];
}
class Et extends he {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".empty{width:100%;min-height:400px;display:flex;flex-direction:row;align-items:center;justify-content:center}", this.shadowRoot.appendChild(n), ke(
      this,
      {
        target: this.shadowRoot,
        props: Ce(this.attributes),
        customElement: !0
      },
      xt,
      kt,
      fe,
      {},
      null
    ), e && e.target && I(e.target, this, e.anchor);
  }
}
customElements.define("file-hierarchy", Et);
