import { r as react, c as create, R as React, a as React$1, W as We$1, g as gt, b as reactDom, u as useAnimationControls, m as motion, d as useNavigate, e as useLocation, p as pt, f as be$1, q as qe, S as Slider, h as useReactTable, i as flexRender, j as mt, k as getCoreRowModel, l as getSortedRowModel, O as Oe, n as jsx, o as jsxs, F as Fragment, s as useQuery, t as useSubscription, v as dist, L as Lo, C as ChevronDownIcon, w as useMutation, x as CogIcon, y as CheckCircleIcon, z as LockClosedIcon, A as createColumnHelper, B as ArrowsUpDownIcon, D as DateTime, E as Link, X as XMarkIcon, G as ChevronUpIcon, M as MagnifyingGlassIcon, H as ArrowDownIcon, I as ArrowLongLeftIcon, J as DocumentDuplicateIcon, K as ArrowLongRightIcon, T as Tooltip, N as InformationCircleIcon, P as linear, Q as ArrowLongRightIcon$1, U as NavLink, V as HttpLink, Y as GraphQLWsLink, Z as createClient, _ as split, $ as getMainDefinition, a0 as ApolloClient, a1 as InMemoryCache, a2 as useGeoLocation, a3 as ApolloProvider, a4 as BrowserRouter, a5 as Routes, a6 as Route, a7 as client$1 } from "./vendor.4ab8720b.js";
import "./__commonjsHelpers__.4516dc8a.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const tailwind = "";
const App$1 = "";
const index$1 = "";
var rt = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function ta() {
  if (ar)
    return Pe;
  ar = 1;
  var e2 = React, t2 = Symbol.for("react.element"), n2 = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o2 = e2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i2 = { key: true, ref: true, __self: true, __source: true };
  function s2(c, l, u) {
    var g, h = {}, f = null, m = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (g in l)
      r.call(l, g) && !i2.hasOwnProperty(g) && (h[g] = l[g]);
    if (c && c.defaultProps)
      for (g in l = c.defaultProps, l)
        h[g] === void 0 && (h[g] = l[g]);
    return { $$typeof: t2, type: c, key: f, ref: m, props: h, _owner: o2.current };
  }
  return Pe.Fragment = n2, Pe.jsx = s2, Pe.jsxs = s2, Pe;
}
(function(e2) {
  e2.exports = ta();
})(rt);
const J = rt.exports.Fragment, a = rt.exports.jsx, b = rt.exports.jsxs;
function na({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      fillRule: "evenodd",
      d: "M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",
      clipRule: "evenodd"
    })]
  });
}
const oa = react.exports.forwardRef(na), aa = oa;
function ia({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd"
    })]
  });
}
const sa = react.exports.forwardRef(ia), la = sa;
function ca({}) {
  return /* @__PURE__ */ b("div", {
    role: "status",
    className: "flex flex-col gap-2 p-4 w-full h-full animate-pulse overflow-hidden",
    children: [/* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("div", {
      className: "h-6 bg-primary-200 rounded-md dark:bg-primary-700"
    }), /* @__PURE__ */ a("span", {
      className: "sr-only",
      children: "Loading..."
    })]
  });
}
function sr({}) {
  return /* @__PURE__ */ b("div", {
    role: "status",
    className: "flex flex-col gap-2 p-4 w-full h-full animate-pulse overflow-hidden",
    children: [/* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("div", {
      className: "h-20 bg-primary-200 rounded-md dark:bg-primary-700 mb-4"
    }), /* @__PURE__ */ a("span", {
      className: "sr-only",
      children: "Loading..."
    })]
  });
}
function da({}) {
  return /* @__PURE__ */ b("div", {
    role: "status",
    className: "p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700",
    children: [/* @__PURE__ */ b("div", {
      className: "flex items-center mt-4 space-x-3",
      children: [/* @__PURE__ */ a("svg", {
        className: "w-14 h-14 text-gray-200 dark:text-gray-700",
        "aria-hidden": "true",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ a("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
          clipRule: "evenodd"
        })
      }), /* @__PURE__ */ b("div", {
        children: [/* @__PURE__ */ a("div", {
          className: "h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"
        }), /* @__PURE__ */ a("div", {
          className: "w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
        })]
      })]
    }), /* @__PURE__ */ a("span", {
      className: "sr-only",
      children: "Loading..."
    })]
  });
}
function ua({}) {
  return /* @__PURE__ */ b("div", {
    role: "status",
    className: "p-4 max-w-sm rounded border border-primary-200 shadow animate-pulse md:p-6 dark:border-primary-700",
    children: [/* @__PURE__ */ a("div", {
      className: "h-2.5 bg-primary-200 rounded-full dark:bg-primary-700 w-32 mb-2.5"
    }), /* @__PURE__ */ a("div", {
      className: "mb-10 w-48 h-2 bg-primary-200 rounded-full dark:bg-primary-700"
    }), /* @__PURE__ */ b("div", {
      className: "flex items-baseline mt-4 space-x-6",
      children: [/* @__PURE__ */ a("div", {
        className: "w-full h-72 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      }), /* @__PURE__ */ a("div", {
        className: "w-full h-56 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      }), /* @__PURE__ */ a("div", {
        className: "w-full h-72 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      }), /* @__PURE__ */ a("div", {
        className: "w-full h-64 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      }), /* @__PURE__ */ a("div", {
        className: "w-full h-80 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      }), /* @__PURE__ */ a("div", {
        className: "w-full h-72 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      }), /* @__PURE__ */ a("div", {
        className: "w-full h-80 bg-primary-200 rounded-t-lg dark:bg-primary-700"
      })]
    }), /* @__PURE__ */ a("span", {
      className: "sr-only",
      children: "Loading..."
    })]
  });
}
function Or({
  variant: e2
}) {
  return (() => {
    switch (e2) {
      case "table":
        return /* @__PURE__ */ a(ca, {});
      case "list":
        return /* @__PURE__ */ a(sr, {});
      case "card":
        return /* @__PURE__ */ a(da, {});
      case "tv":
        return /* @__PURE__ */ a(ua, {});
      default:
        return /* @__PURE__ */ a(sr, {});
    }
  })();
}
function fa({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
    })]
  });
}
const ga = react.exports.forwardRef(fa), ha = ga;
function ma({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
    })]
  });
}
const pa = react.exports.forwardRef(ma), ba = pa;
function ya({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })]
  });
}
const va = react.exports.forwardRef(ya), Pr = va;
function wa({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    })]
  });
}
const xa = react.exports.forwardRef(wa), ka = xa;
function Ca({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    })]
  });
}
const Na = react.exports.forwardRef(Ca), Ea = Na;
function Ra({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    })]
  });
}
const Ta = react.exports.forwardRef(Ra), Lr = Ta;
function Sa({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    })]
  });
}
const Oa = react.exports.forwardRef(Sa), Mr = Oa;
function Pa({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })]
  });
}
const La = react.exports.forwardRef(Pa), _r = La;
function Ma({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12"
    })]
  });
}
const _a = react.exports.forwardRef(Ma), Ia = _a;
function Ir({
  title: e2,
  message: t2,
  variant: n2,
  details: r
}) {
  const o2 = "flex w-full h-auto self-start items-center text-primary-100 bg-primary-900 p-4 border-l-4 rounded-sm border-y border-y-primary-700 border-r border-r-primary-700", i2 = {
    basic: " border-l-secondary-400",
    success: " border-l-green-400",
    error: " border-l-red-400",
    warning: " border-l-orange-400",
    info: " border-l-blue-500"
  }, s2 = o2 + (n2 ? i2[n2] : i2.basic);
  return /* @__PURE__ */ b("div", {
    role: "alert",
    className: s2,
    children: [n2 === "error" ? /* @__PURE__ */ a(_r, {
      className: "w-10 h-10 text-red-400"
    }) : n2 === "success" ? /* @__PURE__ */ a(Pr, {
      className: "w-10 h-10 text-green-400"
    }) : n2 === "warning" ? /* @__PURE__ */ a(Lr, {
      className: "w-10 h-10 text-orange-400"
    }) : n2 === "info" ? /* @__PURE__ */ a(Mr, {
      className: "w-10 h-10 text-secondary-400"
    }) : null, /* @__PURE__ */ b("div", {
      className: "flex flex-col justify-between ml-3 w-full",
      children: [e2 && /* @__PURE__ */ a("div", {
        className: "text-lg font-semibold",
        children: e2
      }), t2 && /* @__PURE__ */ a("div", {
        className: "text-primary-300",
        children: t2
      }), r && /* @__PURE__ */ a("div", {
        className: "text-primary-400 text-sm",
        children: r
      })]
    })]
  });
}
const Aa = ({
  children: e2,
  className: t2,
  id: n2,
  padding: r,
  loading: o2,
  error: i2,
  onClick: s2
}) => /* @__PURE__ */ a(J, {
  children: o2 ? /* @__PURE__ */ a(Or, {
    variant: "card"
  }) : i2 ? /* @__PURE__ */ a(Ir, {
    title: "Error",
    message: "Uh Oh. Please try again.",
    variant: "error",
    details: i2
  }) : /* @__PURE__ */ a("div", {
    onClick: s2,
    id: n2,
    className: `rounded-2xl bg-primary-900 p-${r != null ? r : 6} shadow-md ${t2 != null ? t2 : ""}`,
    children: e2
  })
});
function ja({
  summary: e2,
  content: t2
}) {
  return /* @__PURE__ */ a(Aa, {
    className: "w-full rounded-2xl",
    padding: 0,
    children: /* @__PURE__ */ a(Oe, {
      children: ({
        open: n2
      }) => /* @__PURE__ */ b(J, {
        children: [/* @__PURE__ */ b(Oe.Button, {
          className: " flex w-full justify-between rounded-lg px-4 py-2 bg-transparent text-left text-sm font-medium text-accent-100 hover:bg-accent-700 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75",
          children: [e2, /* @__PURE__ */ a(aa, {
            className: `${n2 ? "" : "rotate-180 transform"} h-5 w-5 text-accent-500`
          })]
        }), /* @__PURE__ */ a(Oe.Panel, {
          children: t2
        })]
      })
    })
  });
}
function ul(e2) {
  return /* @__PURE__ */ a(ja, {
    ...e2
  });
}
function fl({
  children: e2,
  triggerNode: t2
}) {
  return /* @__PURE__ */ a(mt, {
    className: "relative",
    children: ({
      open: n2
    }) => /* @__PURE__ */ b(J, {
      children: [/* @__PURE__ */ a(mt.Button, {
        className: "outline-none",
        children: t2
      }), /* @__PURE__ */ a(We$1, {
        as: react.exports.Fragment,
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
        children: /* @__PURE__ */ a(mt.Panel, {
          className: "absolute z-10 mt-1 right-0 w-screen max-w-sm drop-shadow-xl",
          children: e2
        })
      })]
    })
  });
}
function ke(e2, t2) {
  if (Object.is(e2, t2))
    return true;
  if (typeof e2 != "object" || e2 === null || typeof t2 != "object" || t2 === null)
    return false;
  const n2 = Object.keys(e2);
  if (n2.length !== Object.keys(t2).length)
    return false;
  for (let r = 0; r < n2.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t2, n2[r]) || !Object.is(e2[n2[r]], t2[n2[r]]))
      return false;
  return true;
}
let Ve;
const Fa = new Uint8Array(16);
function $a() {
  if (!Ve && (Ve = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ve))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ve(Fa);
}
const Z = [];
for (let e2 = 0; e2 < 256; ++e2)
  Z.push((e2 + 256).toString(16).slice(1));
function Da(e2, t2 = 0) {
  return (Z[e2[t2 + 0]] + Z[e2[t2 + 1]] + Z[e2[t2 + 2]] + Z[e2[t2 + 3]] + "-" + Z[e2[t2 + 4]] + Z[e2[t2 + 5]] + "-" + Z[e2[t2 + 6]] + Z[e2[t2 + 7]] + "-" + Z[e2[t2 + 8]] + Z[e2[t2 + 9]] + "-" + Z[e2[t2 + 10]] + Z[e2[t2 + 11]] + Z[e2[t2 + 12]] + Z[e2[t2 + 13]] + Z[e2[t2 + 14]] + Z[e2[t2 + 15]]).toLowerCase();
}
const Ba = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), lr = {
  randomUUID: Ba
};
function za(e2, t2, n2) {
  if (lr.randomUUID && !t2 && !e2)
    return lr.randomUUID();
  e2 = e2 || {};
  const r = e2.random || (e2.rng || $a)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t2) {
    n2 = n2 || 0;
    for (let o2 = 0; o2 < 16; ++o2)
      t2[n2 + o2] = r[o2];
    return t2;
  }
  return Da(r);
}
var ie = /* @__PURE__ */ ((e2) => (e2.basic = "basic", e2.error = "error", e2.warning = "warning", e2.info = "info", e2.success = "success", e2))(ie || {});
const bt = create((e2) => ({
  notifications: [],
  addNotification(t2) {
    return e2((n2) => ({
      ...n2,
      notifications: n2.notifications.concat({
        ...t2,
        id: za()
      })
    }));
  },
  removeNotification(t2) {
    return e2((n2) => ({
      ...n2,
      notifications: n2.notifications.filter((r) => t2 !== r)
    }));
  }
}));
function Ha() {
  const e2 = bt((l) => l.notifications, ke), t2 = bt((l) => l.addNotification, ke), n2 = (l, u) => t2({
    title: u != null ? u : "Success",
    type: "success",
    message: l
  }), r = (l, u) => t2({
    title: u != null ? u : "Error",
    type: "error",
    message: l
  }), o2 = (l, u) => t2({
    title: u != null ? u : "Info",
    type: "info",
    message: l
  }), i2 = (l, u) => t2({
    title: u != null ? u : "Warning",
    type: "warning",
    message: l
  }), s2 = (l, u) => t2({
    title: u != null ? u : "",
    type: "basic",
    message: l
  });
  return {
    removeNotification: bt((l) => l.removeNotification, ke),
    addNotification: t2,
    notifications: e2,
    addErrorNotification: r,
    addSuccessNotification: n2,
    addInfoNotification: o2,
    addWarningNotification: i2,
    addBasicNotification: s2
  };
}
const Ue = create((e2) => ({
  params: new URLSearchParams(window.location.search),
  setParams: (t2) => e2((n2) => ({
    params: new URLSearchParams(t2)
  })),
  addParams: (...t2) => e2((n2) => {
    const r = n2.params;
    return t2.forEach(({
      key: o2,
      value: i2
    }) => {
      if (!r.has(o2))
        r.append(o2, i2);
      else {
        const s2 = r.get(o2), c = encodeURIComponent(`${s2},${i2}`);
        r.set(o2, c);
      }
    }), {
      params: new URLSearchParams(r)
    };
  }),
  removeParams: (...t2) => e2((n2) => {
    const r = n2.params;
    return t2.forEach(({
      key: o2,
      value: i2
    }) => {
      if (r.has(o2)) {
        const s2 = r.get(o2);
        if (s2) {
          const c = encodeURIComponent(s2.split(",").filter((l) => l !== i2).join(","));
          c.length ? r.set(o2, c) : r.delete(o2);
        }
      }
    }), {
      params: new URLSearchParams(r)
    };
  })
}));
function hl() {
  const e2 = useNavigate(), t2 = useLocation(), n2 = Ue((s2) => s2.params, ke), r = Ue((s2) => s2.setParams, ke), o2 = Ue((s2) => s2.addParams, ke), i2 = Ue((s2) => s2.removeParams, ke);
  return react.exports.useEffect(() => {
    const s2 = `${t2.pathname}?${new URLSearchParams(t2.search).toString()}`;
    `${t2.pathname}?${n2.toString()}` !== s2 && e2(`${t2.pathname}?${n2.toString()}`, {
      replace: true
    });
  }, [n2.toString(), t2]), {
    params: n2,
    setParams: r,
    addParams: o2,
    removeParams: i2
  };
}
function Ar(e2) {
  var t2, n2, r = "";
  if (typeof e2 == "string" || typeof e2 == "number")
    r += e2;
  else if (typeof e2 == "object")
    if (Array.isArray(e2))
      for (t2 = 0; t2 < e2.length; t2++)
        e2[t2] && (n2 = Ar(e2[t2])) && (r && (r += " "), r += n2);
    else
      for (t2 in e2)
        e2[t2] && (r && (r += " "), r += t2);
  return r;
}
function Va() {
  for (var e2, t2, n2 = 0, r = ""; n2 < arguments.length; )
    (e2 = arguments[n2++]) && (t2 = Ar(e2)) && (r && (r += " "), r += t2);
  return r;
}
const Ua = (e2) => typeof e2 == "boolean", Wa = (e2) => Ua(e2) ? String(e2) : e2, Ya = (e2, t2) => Object.entries(e2).every(([n2, r]) => t2[n2] === r);
function Ga(e2) {
  return (t2, n2) => {
    const r = Object.entries(t2).reduce((c, [l, u]) => u === void 0 ? c : {
      ...c,
      [l]: u
    }, {}), o2 = {
      ...e2.defaultVariants,
      ...r
    }, i2 = Object.keys(e2.variants).map((c) => {
      var l;
      return (l = e2.variants[c]) == null ? void 0 : l[Wa(t2[c]) || e2.defaultVariants[c]];
    }), s2 = e2.compoundVariants.reduce((c, {
      classes: l,
      ...u
    }) => (Ya(u, o2) && l && c.push(l), c), []);
    return Va([e2.base, i2, s2, n2]);
  };
}
const Za = Ga({
  base: "text-white text-center bg-gradient-to-br from-primary-800 to-primary-900 border-2 rounded-full shadow-md align-middle hover:bg-gray-800 hover:cursor-pointer disabled:cursor-auto disabled:opacity-50",
  variants: {
    variant: {
      buy: "border-green-500 hover:border-green-400",
      sell: "border-red-500 hover:border-red-400",
      basic: "border-primary-600 hover:border-primary-400",
      default: "border-brand hover:border-accent-400"
    },
    size: {
      xs: "py-1 px-2 text-xs",
      sm: "py-2 px-4 text-sm",
      md: "py-3 px-6",
      lg: "py-4 px-8 text-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  },
  compoundVariants: []
});
function cr({
  className: e2,
  children: t2,
  variant: n2,
  size: r,
  onClick: o2,
  disabled: i2
}) {
  const s2 = Za({
    size: r,
    variant: n2
  }, e2);
  return /* @__PURE__ */ a("button", {
    role: "button",
    disabled: i2,
    onClick: o2,
    className: s2,
    children: t2
  });
}
function ml() {
  var h;
  const {
    removeNotification: e2,
    notifications: t2
  } = Ha(), n2 = react.exports.useRef(t2[0]), r = useAnimationControls(), [o2, i2] = react.exports.useState(t2[0]), s2 = "flex items-start absolute bottom-8 right-8 bg-primary-800 w-[400px] h-auto p-4 text-cyan-700 z-50 opacity-0 border-l-4", c = {
    [ie.basic]: " border-l-secondary-400",
    [ie.error]: " border-l-red-400",
    [ie.success]: " border-l-green-400",
    [ie.info]: " border-l-secondary-400",
    [ie.warning]: " border-l-orange-400"
  }, l = {
    duration: 0.3,
    ease: "easeInOut"
  }, u = react.exports.useRef(false);
  react.exports.useEffect(() => (u.current = true, () => {
    u.current = false;
  }), []), react.exports.useEffect(() => {
    o2 && r.start({
      opacity: 1,
      x: [200, 0],
      transition: l
    });
  }, [o2]), react.exports.useEffect(() => {
    var f;
    if (t2.length && JSON.stringify(n2.current) !== JSON.stringify(t2[0])) {
      const m = t2[0];
      i2(m), n2.current = m;
      const p = setTimeout(async () => {
        await r.start({
          opacity: [1, 0],
          x: [0, 200],
          transition: l
        }), e2(m), i2(void 0);
      }, (f = m.dismissAfter) != null ? f : 3e3);
      return () => {
        r.stop(), u.current || clearTimeout(p);
      };
    }
  }, [t2, e2, r]);
  const g = react.exports.useCallback(async (f) => {
    f.preventDefault(), o2 && (e2(o2), await r.start({
      opacity: [1, 0],
      x: [0, 200],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }), i2(void 0));
  }, [r, e2, o2]);
  return /* @__PURE__ */ b(motion.div, {
    className: s2 + ((o2 == null ? void 0 : o2.type) != null ? c[o2 == null ? void 0 : o2.type] : c.info),
    animate: r,
    children: [(o2 == null ? void 0 : o2.type) === ie.error ? /* @__PURE__ */ a(_r, {
      className: "w-10 h-10 text-red-400"
    }) : (o2 == null ? void 0 : o2.type) === ie.success ? /* @__PURE__ */ a(Pr, {
      className: "w-10 h-10 text-green-400"
    }) : (o2 == null ? void 0 : o2.type) === ie.warning ? /* @__PURE__ */ a(Lr, {
      className: "w-10 h-10 text-orange-400"
    }) : (o2 == null ? void 0 : o2.type) === ie.info ? /* @__PURE__ */ a(Mr, {
      className: "w-10 h-10 text-secondary-400"
    }) : null, /* @__PURE__ */ b("div", {
      className: "flex flex-col ml-3 w-full",
      children: [/* @__PURE__ */ b("div", {
        className: "flex items-center justify-between text-lg font-semibold",
        children: [/* @__PURE__ */ a("div", {
          className: "mr-auto",
          children: o2 == null ? void 0 : o2.title
        }), /* @__PURE__ */ a(cr, {
          size: "xs",
          variant: "basic",
          className: "border-0 bg-none",
          onClick: g,
          children: /* @__PURE__ */ a(Ia, {
            className: "w-4 h-4"
          })
        })]
      }), /* @__PURE__ */ a("div", {
        className: "text-white",
        children: o2 == null ? void 0 : o2.message
      }), /* @__PURE__ */ a("div", {
        children: (h = o2 == null ? void 0 : o2.actions) == null ? void 0 : h.map((f, m) => /* @__PURE__ */ a(cr, {
          ...f
        }, m))
      })]
    })]
  });
}
function pl({
  children: e2,
  className: t2,
  id: n2
}) {
  const r = `font-semibold text-lg text-white ${t2}`;
  return /* @__PURE__ */ a("div", {
    id: n2,
    className: r,
    children: e2
  });
}
function nt({
  children: e2,
  className: t2,
  htmlFor: n2
}) {
  const r = `font-bold text-xs text-primary-400 uppercase mb-1 ${t2}`, i2 = (() => n2 ? "label" : "div")();
  return /* @__PURE__ */ a(i2, {
    htmlFor: n2,
    className: r,
    children: e2
  });
}
const Xa = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  width: e2,
  height: e2,
  baseProfile: "tiny",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 112 112",
  xmlSpace: "preserve",
  children: [/* @__PURE__ */ a("circle", {
    fill: "#FFFFFF",
    cx: "56",
    cy: "56",
    r: "56"
  }), /* @__PURE__ */ a("path", {
    fill: "black",
    d: "M86.6 37.4h-9.9c-1.1 0-2.2-.5-3-1.3l-4-4.5c-1.2-1.3-3.1-1.4-4.5-.3l-.3.3-3.4 3.9c-1.1 1.3-2.8 2-4.5 2H2.9C1.4 41.9.4 46.6 0 51.3h51.2c.9 0 1.8-.4 2.4-1l4.8-5c.6-.6 1.4-1 2.3-1h.2c.9 0 1.8.4 2.4 1.1l4 4.5c.8.9 1.9 1.4 3 1.4H112c-.4-4.7-1.4-9.4-2.9-13.8H86.6zM53.8 65l-4-4.5c-1.2-1.3-3.1-1.4-4.5-.3l-.3.3-3.5 3.9c-1.1 1.3-2.7 2-4.4 2H.8c.9 4.8 2.5 9.5 4.6 14h25.5c.9 0 1.7-.4 2.4-1l4.8-5c.6-.6 1.4-1 2.3-1h.2c.9 0 1.8.4 2.4 1.1l4 4.5c.8.9 1.9 1.4 3 1.4h56.6c2.1-4.4 3.7-9.1 4.6-14H56.8c-1.2 0-2.3-.5-3-1.4zm19.6-43.6 4.8-5c.6-.6 1.4-1 2.3-1h.2c.9 0 1.8.4 2.4 1l4 4.5c.8.9 1.9 1.3 3 1.3h10.8c-18.8-24.8-54.1-29.7-79-11-4.1 3.1-7.8 6.8-11 11H71c1 .2 1.8-.2 2.4-.8zM34.7 94.2c-1.2 0-2.3-.5-3-1.3l-4-4.5c-1.2-1.3-3.2-1.4-4.5-.2l-.2.2-3.5 3.9c-1.1 1.3-2.7 2-4.4 2h-.2C36 116.9 71.7 118 94.4 96.7c.9-.8 1.7-1.7 2.6-2.6H34.7z"
  })]
}), dr = ({
  size: e2
}) => /* @__PURE__ */ a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  height: e2,
  width: e2,
  children: /* @__PURE__ */ b("g", {
    fill: "none",
    fillRule: "evenodd",
    children: [/* @__PURE__ */ a("circle", {
      cx: "16",
      cy: "16",
      r: "16",
      fill: "#F7931A"
    }), /* @__PURE__ */ a("path", {
      fill: "#FFF",
      fillRule: "nonzero",
      d: "M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
    })]
  })
}), ur = ({
  size: e2
}) => /* @__PURE__ */ a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  width: e2,
  height: e2,
  children: /* @__PURE__ */ b("g", {
    fill: "none",
    fillRule: "evenodd",
    children: [/* @__PURE__ */ a("circle", {
      cx: "16",
      cy: "16",
      r: "16",
      fill: "#627EEA"
    }), /* @__PURE__ */ b("g", {
      fill: "#FFF",
      fillRule: "nonzero",
      children: [/* @__PURE__ */ a("path", {
        fillOpacity: ".602",
        d: "M16.498 4v8.87l7.497 3.35z"
      }), /* @__PURE__ */ a("path", {
        d: "M16.498 4L9 16.22l7.498-3.35z"
      }), /* @__PURE__ */ a("path", {
        fillOpacity: ".602",
        d: "M16.498 21.968v6.027L24 17.616z"
      }), /* @__PURE__ */ a("path", {
        d: "M16.498 27.995v-6.028L9 17.616z"
      }), /* @__PURE__ */ a("path", {
        fillOpacity: ".2",
        d: "M16.498 20.573l7.497-4.353-7.497-3.348z"
      }), /* @__PURE__ */ a("path", {
        fillOpacity: ".602",
        d: "M9 16.22l7.498 4.353v-7.701z"
      })]
    })]
  })
}), Ka = ({
  size: e2
}) => /* @__PURE__ */ a("svg", {
  width: e2,
  height: e2,
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ b("g", {
    fill: "none",
    children: [/* @__PURE__ */ a("circle", {
      fill: "#66F9A1",
      cx: "16",
      cy: "16",
      r: "16"
    }), /* @__PURE__ */ a("path", {
      d: "M9.925 19.687a.59.59 0 01.415-.17h14.366a.29.29 0 01.207.497l-2.838 2.815a.59.59 0 01-.415.171H7.294a.291.291 0 01-.207-.498l2.838-2.815zm0-10.517A.59.59 0 0110.34 9h14.366c.261 0 .392.314.207.498l-2.838 2.815a.59.59 0 01-.415.17H7.294a.291.291 0 01-.207-.497L9.925 9.17zm12.15 5.225a.59.59 0 00-.415-.17H7.294a.291.291 0 00-.207.498l2.838 2.815c.11.109.26.17.415.17h14.366a.291.291 0 00.207-.498l-2.838-2.815z",
      fill: "#FFF"
    })]
  })
}), We = ({
  size: e2
}) => /* @__PURE__ */ a("svg", {
  width: e2,
  height: e2,
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ b("g", {
    fill: "none",
    children: [/* @__PURE__ */ a("circle", {
      fill: "#3E73C4",
      cx: "16",
      cy: "16",
      r: "16"
    }), /* @__PURE__ */ b("g", {
      fill: "#FFF",
      children: [/* @__PURE__ */ a("path", {
        d: "M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"
      }), /* @__PURE__ */ a("path", {
        d: "M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z"
      })]
    })]
  })
}), qa = ({
  size: e2
}) => /* @__PURE__ */ a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  width: e2,
  height: e2,
  children: /* @__PURE__ */ b("g", {
    fill: "none",
    fillRule: "evenodd",
    children: [/* @__PURE__ */ a("circle", {
      cx: "16",
      cy: "16",
      r: "16",
      fill: "#26A17B"
    }), /* @__PURE__ */ a("path", {
      fill: "#FFF",
      d: "M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"
    })]
  })
}), Ja = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32",
  height: e2,
  width: e2,
  children: [/* @__PURE__ */ a("circle", {
    cx: "16",
    cy: "16",
    r: "16",
    fill: "#00aeef"
  }), /* @__PURE__ */ a("path", {
    d: "M13,18c.0002431,.0002387,5.9999166-.0003275,6,0l1.9313197,6.759619c.0377742,.1322095,.1811803,.240381,.3186803,.240381h5.5c.1375,0,.2213695-.1087959,.1863767-.2417686L22.0636233,6.2417686c-.0349928-.1329727-.1761233-.2417686-.3136233-.2417686H10.25c-.1375,0-.2786305,.1087959-.3136233,.2417686L5.0636233,24.7582314c-.0349928,.1329727,.0488767,.2417686,.1863767,.2417686h5.5c.1375,0,.2809061-.1081714,.3186803-.240381l1.9313197-6.759619m-.75-4c-.1375,0-.2279369-.1103153-.200971-.2451452l.7019419-3.5097097c.026966-.1348298,.161529-.2451452,.299029-.2451452h5.9c.1375,0,.2720631,.1103153,.299029,.2451452l.7019419,3.5097097c.026966,.1348298-.063471,.2451452-.200971,.2451452h-7.5Z",
    fill: "#1e293b"
  }), /* @__PURE__ */ a("path", {
    d: "M26.1893661,14.7574644c.0333486,.1333946-.0518661,.2425356-.1893661,.2425356h-1c-.1375,0-.2772853-.109141-.3106339-.2425356l-.8787322-3.5149287c-.0333486-.1333946,.0518661-.2425356,.1893661-.2425356h1c.1375,0,.2772853,.109141,.3106339,.2425356l.8787322,3.5149287Z",
    fill: "#1e293b"
  }), /* @__PURE__ */ a("path", {
    d: "M7.3106339,14.7574644c-.0333486,.1333946-.1731339,.2425356-.3106339,.2425356h-1c-.1375,0-.2227147-.109141-.1893661-.2425356l.8787322-3.5149287c.0333486-.1333946,.1731339-.2425356,.3106339-.2425356h1c.1375,0,.2227147,.109141,.1893661,.2425356l-.8787322,3.5149287Z",
    fill: "#1e293b"
  }), /* @__PURE__ */ a("rect", {
    x: "15.5",
    y: "3.9999997",
    width: "1",
    height: "2",
    fill: "#1e293b",
    opacity: ".5"
  }), /* @__PURE__ */ a("rect", {
    x: "14.0000005",
    y: "3",
    width: "3.9999953",
    height: "1",
    rx: ".4999994",
    ry: ".4999994",
    fill: "#1e293b"
  })]
}), Qa = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  width: e2,
  height: e2,
  viewBox: "0 0 153 153",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ a("g", {
    filter: "url(#filter0_d_565_36)",
    children: /* @__PURE__ */ a("circle", {
      cx: "76.1387",
      cy: "76",
      r: "76",
      fill: "url(#paint0_linear_565_36)"
    })
  }), /* @__PURE__ */ a("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M 70.208 15.03 C 58.525 16.289 47.607 20.752 38.604 27.947 C 34.466 31.254 28.362 37.684 28.529 38.558 C 28.618 39.022 91.748 39.274 93.327 38.816 C 93.977 38.628 94.906 37.82 97.264 35.39 C 102.282 30.219 102.899 30.219 107.508 35.376 C 110.879 39.148 110.264 38.931 117.554 38.931 C 124.625 38.931 124.42 39.043 122.212 36.388 C 109.788 21.449 89.179 12.986 70.208 15.03 Z M 86.628 48.265 C 86.257 48.493 84.917 49.856 83.65 51.295 C 81.815 53.38 81.084 54.041 80.052 54.55 L 78.756 55.189 L 49.194 55.25 C 28 55.294 19.546 55.382 19.331 55.561 C 18.303 56.418 15.669 69.06 16.348 69.881 C 16.577 70.159 20.539 70.205 44.152 70.205 C 76.363 70.205 72.055 70.723 76.158 66.353 C 80.755 61.455 81.558 61.456 85.941 66.361 C 87.779 68.418 88.907 69.49 89.536 69.777 C 90.804 70.355 135.299 70.446 135.773 69.872 C 136.458 69.043 134.012 56.948 132.907 55.697 C 132.581 55.327 131.448 55.301 115.329 55.292 C 94.499 55.28 96.945 55.699 93.165 51.495 C 89.733 47.678 88.545 47.091 86.628 48.265 Z M 65.372 79.337 C 65.063 79.506 63.716 80.875 62.38 82.378 C 60.64 84.336 59.618 85.288 58.781 85.731 L 57.612 86.349 L 37.559 86.411 C 20.411 86.463 17.468 86.519 17.238 86.798 C 16.508 87.681 20.896 100.994 22.065 101.445 C 22.732 101.701 49.758 101.615 50.455 101.354 C 50.803 101.224 52.556 99.654 54.35 97.865 C 59.4 92.83 59.909 92.821 64.271 97.684 C 66.162 99.793 67.297 100.869 67.935 101.16 C 69.113 101.697 129.503 101.842 130.226 101.309 C 131.517 100.356 135.585 87.656 134.874 86.796 C 134.633 86.505 130.895 86.462 105.44 86.457 C 71.169 86.452 75.638 86.96 71.76 82.627 C 68.46 78.94 67.243 78.313 65.372 79.337 Z M 41.614 109.474 C 41.228 109.71 39.917 111.039 38.7 112.426 C 36.432 115.012 35.386 115.815 33.712 116.259 C 32.284 116.636 32.45 117.082 34.837 119.291 C 58.564 141.243 94.277 141.18 117.467 119.145 C 118.6 118.068 119.349 117.182 119.308 116.968 C 119.245 116.64 116.205 116.597 85.726 116.494 C 54.237 116.388 52.169 116.357 51.486 115.982 C 51.086 115.763 49.57 114.255 48.116 112.631 C 44.765 108.886 43.543 108.293 41.614 109.474 Z",
    fill: "white"
  }), /* @__PURE__ */ b("defs", {
    children: [/* @__PURE__ */ b("filter", {
      id: "filter0_d_565_36",
      x: "0.138672",
      y: "0.0325317",
      width: "152",
      height: "152",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [/* @__PURE__ */ a("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /* @__PURE__ */ a("feColorMatrix", {
        in: "SourceAlpha",
        type: "matrix",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
        result: "hardAlpha"
      }), /* @__PURE__ */ a("feOffset", {
        dy: "8"
      }), /* @__PURE__ */ a("feGaussianBlur", {
        stdDeviation: "10"
      }), /* @__PURE__ */ a("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /* @__PURE__ */ a("feColorMatrix", {
        type: "matrix",
        values: "0 0 0 0 0.952941 0 0 0 0 0.262745 0 0 0 0 0.592157 0 0 0 0.2 0"
      }), /* @__PURE__ */ a("feBlend", {
        mode: "normal",
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_565_36"
      }), /* @__PURE__ */ a("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "effect1_dropShadow_565_36",
        result: "shape"
      })]
    }), /* @__PURE__ */ b("linearGradient", {
      id: "paint0_linear_565_36",
      x1: "76.1387",
      y1: "12.0325",
      x2: "42.0056",
      y2: "152.531",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ a("stop", {
        stopColor: "#FFA8D2"
      }), /* @__PURE__ */ a("stop", {
        offset: "0.9271",
        stopColor: "#FF007A"
      })]
    })]
  })]
}), ei = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  width: e2,
  height: e2,
  viewBox: "0 0 510 510",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ a("circle", {
    x: "0.816406",
    y: "0.0366211",
    width: "509",
    height: "509.927",
    fill: "black"
  }), /* @__PURE__ */ a("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M304.903 59.8335C304.669 60.0192 303.691 61.4258 302.728 62.9593C292.436 79.3562 265.475 115.573 255.731 126.091C255.212 126.651 254.982 126.415 249.356 119.557C233.063 99.697 218.323 79.6886 208.226 63.726C205.147 58.8583 205.873 58.4236 180.902 80.0814C148.214 108.432 148.911 107.548 155.809 111.88C166.925 118.861 178.223 126.717 191.076 136.402C204.146 146.251 223.281 161.764 223.281 162.512C223.281 164.346 164.951 222.577 163.113 222.577C162.54 222.577 157.691 216.865 148.676 205.57C133.622 186.709 121.877 170.342 111.963 154.408C109.111 149.826 108.845 149.487 108.261 149.711C107.894 149.852 98.5034 159.945 91.957 167.233C63.0165 199.456 59.3262 204.506 63.0215 206.833C80.4551 217.813 108.324 238.491 124.931 252.769C127.395 254.887 127.728 254.334 120.331 260.398C99.7553 277.266 79.0772 292.423 61.8151 303.292C60.8409 303.905 60.007 304.601 59.9621 304.837C59.7382 306.016 91.3208 342.477 105.838 357.799C108.58 360.693 108.343 360.773 111.282 355.966C122.203 338.104 139.222 314.921 158.293 291.93C163.836 285.248 161.318 283.538 193.882 316.102C226.192 348.412 224.583 346.116 218.471 351.195C195.678 370.137 173.576 386.417 155.015 397.936C152.202 399.682 149.827 401.299 149.739 401.529C149.161 403.037 203.416 450.8 205.011 450.188C205.229 450.104 206.254 448.698 207.29 447.063C217.014 431.709 229.397 414.598 243.742 396.693C249 390.129 254.657 383.283 254.993 383.075C255.388 382.832 255.64 383.103 260.409 388.886C276.265 408.117 293.038 430.85 302.323 445.693C303.25 447.175 303.844 447.854 304.213 447.854C306.241 447.854 358.95 401.466 358.438 400.132C358.348 399.899 356.413 398.535 354.137 397.102C335.604 385.431 314.034 369.503 292.495 351.584C286.4 346.513 286.715 347.014 288.434 345.142C305.293 326.782 345.735 286.703 347.404 286.703C347.679 286.703 350.01 289.285 353.004 292.906C371.024 314.705 386.987 336.382 397.813 353.756C400.53 358.116 400.791 358.444 401.311 358.129C402.639 357.327 422.978 334.854 433.531 322.53C451.518 301.523 450.659 304.682 440.263 297.772C422.869 286.212 398.702 268.003 385.338 256.386C383.116 254.455 382.841 254.993 388.405 250.371C407.967 234.119 428.585 218.866 446.031 207.74C450.757 204.726 451.04 204.455 450.422 203.533C449.294 201.849 437.614 187.896 429.618 178.68C420.699 168.402 403.618 149.695 402.663 149.161C402.035 148.809 401.908 148.974 398.161 154.966C388.713 170.077 376.168 187.546 362.195 205.051C355.293 213.697 347.708 222.856 347.451 222.856C345.787 222.856 287.128 164.137 287.128 162.471C287.128 161.757 308.468 144.555 321.56 134.714C333.446 125.781 350.297 114.298 358.569 109.496C361.173 107.984 361.21 107.672 359.029 105.654C334.012 82.5093 306.1 58.8809 304.903 59.8335ZM261.533 134.125C267.441 141.003 278.114 153.046 283.462 158.869C287.014 162.736 287.248 162.002 280.645 167.677C274.187 173.227 264.048 182.206 259.036 186.815C254.951 190.57 255.514 190.51 252.268 187.542C246.922 182.654 234.397 171.567 229.332 167.238C223.048 161.867 222.98 163.309 229.875 155.732C235.659 149.377 246.195 137.403 251.833 130.779C255.588 126.367 254.565 126.014 261.533 134.125ZM263.07 197.617C272.393 206.31 302.476 236.349 310.823 245.3C314.255 248.98 317.625 252.581 318.312 253.302L319.562 254.614L317.076 257.324C303.785 271.819 278.692 297.049 262.521 312.178C258.572 315.873 255.373 318.983 255.412 319.089C255.579 319.541 272.02 334.231 280.785 341.76C287.403 347.445 287.384 346.135 280.954 353.198C274.656 360.118 265.747 370.225 259.943 377.037C255.576 382.16 255.364 382.38 255.01 382.16C254.888 382.085 252.188 378.988 249.011 375.278C243.154 368.441 232.482 356.402 227.089 350.55C223.474 346.627 223.465 347.055 227.235 343.856C235.907 336.497 255.065 319.415 255.065 319.041C255.065 318.942 251.332 315.361 246.77 311.083C242.208 306.805 231.565 296.402 223.12 287.964C209.161 274.019 204.122 268.834 194.18 258.185L190.87 254.64L194.459 250.815C213.053 231.001 230.406 213.631 250.883 194.337C255.76 189.741 254.161 189.31 263.07 197.617ZM168.102 229.059C173.294 235.101 181.87 244.793 187.318 250.775C191.249 255.092 191.082 254.456 188.902 256.795C183.977 262.084 170.908 276.864 165.479 283.288C162.92 286.315 163.144 286.256 161.145 284.425C152.644 276.629 140.691 266.041 132.459 259.011C126.654 254.054 126.402 255.482 134.271 248.748C141.427 242.623 153.553 231.868 159.155 226.676C163.449 222.696 162.391 222.415 168.102 229.059ZM350.975 226.386C356.648 231.614 368.764 242.357 375.874 248.465C379.679 251.732 382.752 254.558 382.705 254.745C382.658 254.931 379.42 257.83 375.51 261.187C368.027 267.611 359.316 275.321 352.09 281.918C346.834 286.717 348.198 287.035 341.728 279.506C335.885 272.708 328.745 264.648 323.171 258.556C321.284 256.494 319.773 254.713 319.813 254.6C319.854 254.487 322.477 251.533 325.641 248.035C331.996 241.012 340.548 231.282 344.566 226.506C347.695 222.785 347.08 222.797 350.975 226.386Z",
    fill: "white"
  })]
}), ti = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  width: e2,
  height: e2,
  viewBox: "0 0 480 480",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ b("g", {
    clipPath: "url(#clip0_3135_111)",
    children: [/* @__PURE__ */ a("path", {
      d: "M470 240C470 367.025 367.025 470 240 470C112.975 470 10 367.025 10 240C10 112.975 112.975 10 240 10C367.025 10 470 112.975 470 240Z",
      fill: "url(#paint0_linear_3135_111)"
    }), /* @__PURE__ */ a("path", {
      d: "M480 240C480 372.548 372.548 480 240 480C107.452 480 0 372.548 0 240C0 107.452 107.452 0 240 0C372.548 0 480 107.452 480 240ZM40.08 240C40.08 350.413 129.587 439.92 240 439.92C350.413 439.92 439.92 350.413 439.92 240C439.92 129.587 350.413 40.08 240 40.08C129.587 40.08 40.08 129.587 40.08 240Z",
      fill: "url(#paint1_linear_3135_111)"
    }), /* @__PURE__ */ a("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M260 102C260 100.895 259.105 100 258 100H222C220.895 100 220 100.895 220 102V127.591C220 128.558 219.307 129.384 218.358 129.573C212.655 130.705 207.329 132.298 202.38 134.352C191.46 138.824 182.984 145.584 176.952 154.632C170.92 163.576 167.904 174.808 167.904 188.328C167.904 200.288 170.556 210.532 175.86 219.06C181.164 227.484 188.6 234.712 198.168 240.744C207.736 246.672 218.916 251.924 231.708 256.5C243.46 260.66 252.82 264.508 259.788 268.044C266.756 271.58 271.748 275.272 274.764 279.12C277.78 282.968 279.288 287.544 279.288 292.848C279.288 297.944 277.884 302.364 275.076 306.108C272.268 309.852 268.212 312.712 262.908 314.688C257.708 316.664 251.312 317.652 243.72 317.652C235.088 317.652 227.548 316.3 221.1 313.596C214.756 310.892 209.712 306.836 205.968 301.428C202.607 296.339 200.532 290.142 199.742 282.837C199.63 281.798 198.765 280.992 197.72 280.992H162.65C161.515 280.992 160.606 281.937 160.67 283.07C161.528 298.37 165.291 311.145 171.96 321.396C178.928 332.004 188.392 339.908 200.352 345.108C205.963 347.527 211.968 349.383 218.367 350.677C219.312 350.868 220 351.693 220 352.657V378C220 379.105 220.895 380 222 380H258C259.105 380 260 379.105 260 378V353.524C260 352.522 260.743 351.676 261.734 351.529C269.645 350.351 276.9 348.419 283.5 345.732C295.252 340.948 304.3 333.876 310.644 324.516C317.092 315.052 320.264 303.508 320.16 289.884C320.056 279.484 318.132 270.904 314.388 264.144C310.644 257.28 305.496 251.612 298.944 247.14C292.496 242.564 285.008 238.56 276.48 235.128C267.952 231.592 258.904 227.952 249.336 224.208C238 219.632 229.368 215.472 223.44 211.728C217.512 207.984 213.456 204.188 211.272 200.34C209.192 196.492 208.152 192.176 208.152 187.392C208.152 179.28 211.012 173.196 216.732 169.14C222.452 164.98 230.252 162.9 240.132 162.9C247.308 162.9 253.236 163.992 257.916 166.176C262.7 168.36 266.392 171.636 268.992 176.004C271.345 179.864 272.889 184.619 273.624 190.268C273.756 191.289 274.614 192.072 275.644 192.072H310.628C311.807 192.072 312.732 191.055 312.601 189.882C311.124 176.7 307.872 165.574 302.844 156.504C297.54 146.936 289.844 139.708 279.756 134.82C274.495 132.271 268.469 130.387 261.681 129.167C260.714 128.993 260 128.159 260 127.177V102Z",
      fill: "white"
    })]
  }), /* @__PURE__ */ b("defs", {
    children: [/* @__PURE__ */ b("linearGradient", {
      id: "paint0_linear_3135_111",
      x1: "240",
      y1: "10",
      x2: "240",
      y2: "470",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ a("stop", {
        offset: "0.09375",
        stopColor: "#00A9F2"
      }), /* @__PURE__ */ a("stop", {
        offset: "0.927083",
        stopColor: "#00CDFF"
      })]
    }), /* @__PURE__ */ b("linearGradient", {
      id: "paint1_linear_3135_111",
      x1: "240",
      y1: "0",
      x2: "240",
      y2: "480",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ a("stop", {
        stopColor: "#00C8FF"
      }), /* @__PURE__ */ a("stop", {
        offset: "1",
        stopColor: "#00A0EC"
      })]
    }), /* @__PURE__ */ a("clipPath", {
      id: "clip0_3135_111",
      children: /* @__PURE__ */ a("rect", {
        width: "480",
        height: "480",
        fill: "white"
      })
    })]
  })]
}), ri = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  id: "Layer_1",
  width: e2,
  height: e2,
  viewBox: "0 0 1000 1000",
  children: [/* @__PURE__ */ a("path", {
    fill: "#ff5f5f",
    d: "M473.73,933.7h0c-158.66,0-287.28-128.62-287.28-287.28V170.77S473.73,66.3,473.73,66.3V933.7Z"
  }), /* @__PURE__ */ a("path", {
    fill: "#ff5f5f",
    d: "M526.27,576.86h0c158.66,0,287.28-128.62,287.28-287.28v-118.81s-287.28-104.47-287.28-104.47v510.56Z"
  })]
}), ni = ({
  size: e2
}) => /* @__PURE__ */ b("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e2,
  height: e2,
  viewBox: "0 0 103 103",
  fill: "none",
  children: [/* @__PURE__ */ a("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.9502 10.2643C22.5477 11.0133 21.7426 13.105 21.4397 14.1883C19.8648 19.8224 21.3755 26.3702 25.3503 31.1377L26.0965 32.0326L29.0759 59.395C30.7146 74.4442 32.1004 87.0127 32.1552 87.3248C32.2101 87.637 32.5069 88.4128 32.8147 89.0488C33.7536 90.9892 35.6743 92.4326 37.855 92.8365C38.4057 92.9387 44.2607 93 53.4499 93C69.2309 93 69.0815 93.0071 70.744 92.1786C71.5853 91.7592 72.7659 90.7069 73.3908 89.8198C74.4169 88.3626 74.3583 88.7945 77.6089 58.7058C79.2949 43.0991 80.7113 30.1293 80.7562 29.8841L80.8379 29.4382H74.7298H68.6217L70.0594 23.3172L71.4971 17.1961L76.8355 17.1533L82.1739 17.1105V15.3214V13.5324L76.3237 13.5805L70.4735 13.6289L69.6896 14.0791C68.3996 14.82 68.257 15.2002 66.5758 22.3848C65.7412 25.9521 65.0208 28.9983 64.9748 29.1545C64.8966 29.4201 64.331 29.4382 56.1173 29.4382H47.3432L47.8958 28.2627C49.2297 25.4256 49.7438 22.8705 49.5976 19.8049C49.4849 17.445 48.9596 15.2967 48.0125 13.3219C47.3963 12.0372 47.3135 11.9395 46.7527 11.8368C46.4226 11.7762 45.5753 11.7771 44.87 11.8389C41.8951 12.0992 39.2387 12.9005 37.0063 14.2115C36.2609 14.6491 35.6172 15.0071 35.5757 15.0071C35.5342 15.0071 35.0793 14.6549 34.565 14.2244C31.8855 11.9824 28.6739 10.6017 25.0825 10.1479C23.35 9.92899 23.1236 9.94131 22.9502 10.2643ZM29.0508 14.9374C34.2926 17.3454 37.5575 22.8873 36.9578 28.3587L36.8395 29.4382H32.706H28.5725L27.8458 28.5334C26.3627 26.6874 25.0461 23.6969 24.575 21.104C24.2245 19.1754 24.5275 15.9596 25.2289 14.1641L25.3996 13.7266L26.6103 14.0495C27.2762 14.227 28.3744 14.6266 29.0508 14.9374ZM45.336 16.2336C45.8631 17.7536 46.0442 19.2551 45.9532 21.3526C45.8324 24.1368 45.13 26.2444 43.5466 28.5743L42.9596 29.4382H41.7155H40.4714L40.5838 28.0853C40.8135 25.3186 40.1057 22.0793 38.6842 19.3927C37.7435 17.6149 37.6859 17.7879 39.5213 16.878C40.8349 16.2266 41.9147 15.8571 43.3385 15.572C44.9161 15.2562 45.0074 15.2865 45.336 16.2336ZM64.0436 33.2082C64.0019 33.3197 63.5292 35.2898 62.9933 37.5861L62.0188 41.7614H46.4015H30.784L30.4209 38.3969C30.2212 36.5464 30.0106 34.5764 29.953 34.0189L29.8481 33.0055H46.9838C60.6221 33.0055 64.104 33.0468 64.0436 33.2082ZM76.7001 33.2892C76.7016 33.4454 76.5023 35.4155 76.2571 37.6672L75.8112 41.7614H70.7594H65.7075L65.8225 41.3155C66.0379 40.4795 67.7351 33.185 67.7351 33.095C67.7351 33.0458 69.7515 33.0055 72.2161 33.0055C76.372 33.0055 76.6973 33.0261 76.7001 33.2892ZM75.3682 45.6124C75.3649 46.5115 70.8778 86.8446 70.7425 87.1922C70.4824 87.8606 69.5393 88.809 68.8153 89.1303C68.1877 89.4089 67.3092 89.4256 53.2963 89.4256C39.1597 89.4256 38.4097 89.411 37.7616 89.1235C36.9434 88.7605 36.2588 88.0939 35.9194 87.3302C35.7541 86.9584 34.9181 79.8526 33.4489 66.3321C32.2275 55.0924 31.2271 45.7686 31.2256 45.6124C31.2233 45.3436 32.3839 45.3287 53.2963 45.3287C74.208 45.3287 75.3694 45.3436 75.3682 45.6124ZM52.0091 52.9911L47.1556 57.7351L52.011 62.4767L56.8666 67.2186L61.7604 62.4352L66.6542 57.6519L61.8434 52.9496C59.1974 50.3633 56.9943 48.2473 56.9475 48.2473C56.9007 48.2473 54.6784 50.382 52.0091 52.9911ZM59.2716 60.0009L56.9475 62.2716L54.584 59.9625L52.2205 57.6533L54.5403 55.3825L56.8602 53.1116L59.228 55.4209L61.5959 57.7302L59.2716 60.0009ZM42.5086 78.8121V85.8655H49.7281H56.9475V78.8121V71.7587H49.7281H42.5086V78.8121ZM53.2963 78.8964V82.4667L49.6866 82.4231L46.0769 82.3793L46.0319 79.0597C46.007 77.2339 46.0234 75.6468 46.0681 75.533C46.1306 75.3739 46.9769 75.3259 49.7229 75.3259H53.2963V78.8964Z",
    fill: "url(#paint0_linear_131_1710)"
  }), /* @__PURE__ */ a("defs", {
    children: /* @__PURE__ */ b("linearGradient", {
      id: "paint0_linear_131_1710",
      x1: "20.6216",
      y1: "48.6705",
      x2: "82.1739",
      y2: "48.6705",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ a("stop", {
        stopColor: "#296D38"
      }), /* @__PURE__ */ a("stop", {
        offset: "1",
        stopColor: "#3FA78E"
      })]
    })
  })]
});
function oi({
  symbol: e2,
  size: t2
}) {
  switch (e2.toLowerCase()) {
    case "apt":
      return /* @__PURE__ */ a(Xa, {
        size: t2
      });
    case "btc":
      return /* @__PURE__ */ a(dr, {
        size: t2
      });
    case "wbtc":
      return /* @__PURE__ */ a(dr, {
        size: t2
      });
    case "eth":
      return /* @__PURE__ */ a(ur, {
        size: t2
      });
    case "weth":
      return /* @__PURE__ */ a(ur, {
        size: t2
      });
    case "sol":
      return /* @__PURE__ */ a(Ka, {
        size: t2
      });
    case "usdt":
      return /* @__PURE__ */ a(qa, {
        size: t2
      });
    case "usdc":
      return /* @__PURE__ */ a(We, {
        size: t2
      });
    case "usdcso":
      return /* @__PURE__ */ a(We, {
        size: t2
      });
    case "usdc (eth)":
      return /* @__PURE__ */ a(We, {
        size: t2
      });
    case "usdc (sol)":
      return /* @__PURE__ */ a(We, {
        size: t2
      });
    case "aux":
      return /* @__PURE__ */ a(Ja, {
        size: t2
      });
    case "martian":
      return /* @__PURE__ */ a(ei, {
        size: t2
      });
    case "tapt":
      return /* @__PURE__ */ a(Qa, {
        size: t2
      });
    case "usda":
      return /* @__PURE__ */ a(ti, {
        size: t2
      });
    case "petra":
      return /* @__PURE__ */ a(ri, {
        size: t2
      });
    case "mojo":
      return /* @__PURE__ */ a(ni, {
        size: t2
      });
    default:
      return console.warn("No icon present for coin:", e2), null;
  }
}
function ai({
  coin: e2,
  size: t2
}) {
  return e2 ? /* @__PURE__ */ a(oi, {
    symbol: e2,
    size: t2 != null ? t2 : 32
  }) : null;
}
function bl({
  coins: e2,
  size: t2 = 32
}) {
  return /* @__PURE__ */ a("div", {
    className: "flex items-center -space-x-2",
    children: e2.map((n2, r) => /* @__PURE__ */ a("div", {
      className: "inline-block rounded-full drop-shadow-lg ring-2 ring-primary-200",
      children: /* @__PURE__ */ a(ai, {
        coin: n2,
        size: t2
      })
    }, `avatar-${n2}-${r}`))
  });
}
function yl({
  children: e2,
  className: t2,
  variant: n2,
  size: r,
  onClick: o2
}) {
  const i2 = () => {
    switch (n2) {
      case "success":
        return "bg-green-300 text-green-900";
      case "warning":
        return "bg-yellow-300 text-yellow-900";
      case "error":
        return "bg-red-300 text-red-900";
      case "basic":
        return "bg-secondary-300 text-secondary-800";
      case "dark":
        return "bg-gray-700 text-gray-300";
      default:
        return "bg-secondary-200 text-secondary-800";
    }
  }, s2 = () => {
    switch (r) {
      case "xs":
        return "py-1 px-2 text-xs";
      case "sm":
        return "py-0.5 px-1 text-sm";
      case "md":
        return "py-1 px-2 text-md";
      case "lg":
        return "py-1.5 px-3 text-lg";
      default:
        return "py-1 px-2 text-md";
    }
  }, l = (() => {
    const u = "font-semibold rounded shadow-sm", g = s2(), h = i2();
    return `${u} ${g} ${h} ${t2 != null ? t2 : ""}`;
  })();
  return /* @__PURE__ */ a("span", {
    onClick: o2,
    className: l,
    children: e2
  });
}
function ii({
  valueChange: e2,
  percentChange: t2,
  priceDirection: n2
}) {
  const o2 = (() => {
    const i2 = "inline-flex items-center font-bold text-xs";
    return n2 && n2 === "up" ? `${i2} text-green-400` : n2 && n2 === "down" ? `${i2} text-red-400` : `${i2} text-primary-400`;
  })();
  return /* @__PURE__ */ b("div", {
    className: o2,
    children: [n2 && n2 === "up" ? /* @__PURE__ */ a(ba, {
      className: "w-[14px] h-[14px] mr-1"
    }) : n2 && n2 === "down" ? /* @__PURE__ */ a(ha, {
      className: "w-[14px] h-[14px] mr-1"
    }) : null, t2 !== void 0 && /* @__PURE__ */ b("div", {
      className: "mr-2",
      children: [t2, "%"]
    }), e2 !== void 0 && /* @__PURE__ */ a("div", {
      children: e2
    })]
  });
}
function vl({
  title: e2,
  value: t2,
  valueChange: n2,
  percentChange: r,
  priceDirection: o2,
  variant: i2,
  className: s2,
  onClick: c
}) {
  const l = () => {
    switch (i2) {
      case "card":
        return "bg-primary-800 shadow-md";
      case "basic":
        return "border-2 border-primary-800";
      default:
        return "";
    }
  }, g = (() => {
    const h = "p-3 rounded-lg", f = l();
    return `${h} ${f} ${s2 != null ? s2 : ""}`;
  })();
  return /* @__PURE__ */ b("div", {
    className: g,
    onClick: c,
    children: [/* @__PURE__ */ a(nt, {
      children: e2
    }), /* @__PURE__ */ a("div", {
      className: "text-2xl",
      children: t2
    }), r || n2 ? /* @__PURE__ */ a(ii, {
      percentChange: r,
      valueChange: n2,
      priceDirection: o2
    }) : null]
  });
}
var jr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e2) {
  (function() {
    var t2 = {}.hasOwnProperty;
    function n2() {
      for (var r = [], o2 = 0; o2 < arguments.length; o2++) {
        var i2 = arguments[o2];
        if (!!i2) {
          var s2 = typeof i2;
          if (s2 === "string" || s2 === "number")
            r.push(i2);
          else if (Array.isArray(i2)) {
            if (i2.length) {
              var c = n2.apply(null, i2);
              c && r.push(c);
            }
          } else if (s2 === "object") {
            if (i2.toString !== Object.prototype.toString && !i2.toString.toString().includes("[native code]")) {
              r.push(i2.toString());
              continue;
            }
            for (var l in i2)
              t2.call(i2, l) && i2[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e2.exports ? (n2.default = n2, e2.exports = n2) : window.classNames = n2;
  })();
})(jr);
const T = jr.exports;
var Fr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, fr = React.createContext && React.createContext(Fr), pe = globalThis && globalThis.__assign || function() {
  return pe = Object.assign || function(e2) {
    for (var t2, n2 = 1, r = arguments.length; n2 < r; n2++) {
      t2 = arguments[n2];
      for (var o2 in t2)
        Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
    }
    return e2;
  }, pe.apply(this, arguments);
}, si = globalThis && globalThis.__rest || function(e2, t2) {
  var n2 = {};
  for (var r in e2)
    Object.prototype.hasOwnProperty.call(e2, r) && t2.indexOf(r) < 0 && (n2[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o2 = 0, r = Object.getOwnPropertySymbols(e2); o2 < r.length; o2++)
      t2.indexOf(r[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[o2]) && (n2[r[o2]] = e2[r[o2]]);
  return n2;
};
function $r(e2) {
  return e2 && e2.map(function(t2, n2) {
    return React.createElement(t2.tag, pe({
      key: n2
    }, t2.attr), $r(t2.child));
  });
}
function ge(e2) {
  return function(t2) {
    return /* @__PURE__ */ a(li, {
      ...pe({
        attr: pe({}, e2.attr)
      }, t2),
      children: $r(e2.child)
    });
  };
}
function li(e2) {
  var t2 = function(n2) {
    var r = e2.attr, o2 = e2.size, i2 = e2.title, s2 = si(e2, ["attr", "size", "title"]), c = o2 || n2.size || "1em", l;
    return n2.className && (l = n2.className), e2.className && (l = (l ? l + " " : "") + e2.className), /* @__PURE__ */ b("svg", {
      ...pe({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, n2.attr, r, s2, {
        className: l,
        style: pe(pe({
          color: e2.color || n2.color
        }, n2.style), e2.style),
        height: c,
        width: c,
        xmlns: "http://www.w3.org/2000/svg"
      }),
      children: [i2 && /* @__PURE__ */ a("title", {
        children: i2
      }), e2.children]
    });
  };
  return fr !== void 0 ? /* @__PURE__ */ a(fr.Consumer, {
    children: function(n2) {
      return t2(n2);
    }
  }) : t2(Fr);
}
function Dr(e2) {
  return ge({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" } }] })(e2);
}
function ci(e2) {
  return ge({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" } }] })(e2);
}
function di(e2) {
  return ge({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" } }] })(e2);
}
function Br(e2) {
  return ge({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" } }] })(e2);
}
function ui(e2) {
  return ge({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15 19l-7-7 7-7" } }] })(e2);
}
function zr(e2) {
  return ge({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" } }] })(e2);
}
function fi(e2) {
  return ge({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 15l7-7 7 7" } }] })(e2);
}
function gi(e2) {
  return ge({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" } }] })(e2);
}
const P = (e2) => hi({
  key: "className",
  source: e2
}), hi = ({ key: e2, source: t2 }) => (delete t2[e2], t2), mi = {
  accordion: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    content: {
      base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
    },
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180"
        }
      },
      base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "!bg-transparent dark:!bg-transparent"
      },
      heading: "",
      open: {
        off: "",
        on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
      }
    }
  },
  alert: {
    base: "flex flex-col gap-2 p-4 text-sm",
    borderAccent: "border-t-4",
    closeButton: {
      base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
      color: {
        info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
        gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
        failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
        success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
        warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300"
      }
    },
    color: {
      info: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
      gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
      failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
      success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
      warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800"
    },
    icon: "mr-3 inline h-5 w-5 flex-shrink-0",
    rounded: "rounded-lg"
  },
  avatar: {
    base: "flex items-center space-x-4",
    bordered: "p-1 ring-2 ring-gray-300 dark:ring-gray-500",
    img: {
      off: "rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "rounded"
    },
    rounded: "!rounded-full",
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-botton-1 center",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-top-1 -left-1",
      "top-center": "-top-1 center",
      "top-right": "-top-1 -right-1",
      "center-right": "center -right-1",
      center: "center center",
      "center-left": "center -left-1"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 dark:bg-gray-600"
    }
  },
  badge: {
    base: "flex h-fit items-center gap-1 font-semibold",
    color: {
      info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300"
    },
    href: "group",
    icon: {
      off: "rounded px-2 py-0.5",
      on: "rounded-full p-1.5",
      size: {
        xs: "w-3 h-3",
        sm: "w-3.5 h-3.5"
      }
    },
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  breadcrumb: {
    item: {
      base: "group flex items-center",
      chevron: "mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2",
      href: {
        off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      },
      icon: "mr-2 h-4 w-4"
    },
    list: "flex items-center"
  },
  button: {
    base: "w-full group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10",
    color: {
      dark: "text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800",
      failure: "text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600",
      gray: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800",
      info: "text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600",
      light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
      purple: "text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600",
      success: "text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600",
      warning: "text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400"
    },
    disabled: "cursor-not-allowed opacity-50",
    gradient: {
      cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
      failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
      info: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ",
      lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
      pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
      purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
      success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
      teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
    },
    gradientDuoTone: {
      cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
      greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
      pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
      purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",
      purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
      redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
      tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
    },
    inner: {
      base: "flex items-center",
      position: {
        none: "",
        start: "rounded-r-none",
        middle: "!rounded-none",
        end: "rounded-l-none"
      },
      outline: "border border-transparent"
    },
    label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800",
    outline: {
      color: {
        gray: "border border-gray-900 dark:border-white",
        default: "border-0",
        light: ""
      },
      off: "",
      on: "bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white",
      pill: {
        off: "rounded-md",
        on: "rounded-full"
      }
    },
    pill: {
      off: "rounded-lg",
      on: "rounded-full"
    },
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3"
    }
  },
  buttonGroup: {
    base: "inline-flex",
    position: {
      none: "focus:!ring-2",
      start: "rounded-r-none",
      middle: "!rounded-none border-l-0 pl-0",
      end: "rounded-l-none border-l-0 pl-0"
    }
  },
  card: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  },
  carousel: {
    base: "relative h-full w-full",
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800"
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center"
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
    },
    leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x"
    }
  },
  darkThemeToggle: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  },
  dropdown: {
    floating: {
      target: "w-fit",
      base: "z-10 w-fit rounded divide-y divide-gray-100 shadow",
      animation: "transition-opacity",
      hidden: "invisible opacity-0",
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
      },
      header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700"
        },
        placement: "-4px"
      },
      item: {
        base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "mr-2 h-4 w-4"
      },
      divider: "my-1 h-px bg-gray-100 dark:bg-gray-600"
    },
    arrowIcon: "ml-2 h-4 w-4",
    inlineWrapper: "flex items-center",
    content: "py-1"
  },
  footer: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800",
    groupLink: {
      base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
      link: {
        base: "last:mr-0 md:mr-6",
        href: "hover:underline"
      },
      col: "flex-col space-y-4"
    },
    icon: {
      base: "text-gray-500 dark:hover:text-white",
      size: "h-5 w-5"
    },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
    },
    divider: {
      base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
    },
    copyright: {
      base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1"
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
    }
  },
  formControls: {
    helperText: {
      base: "mt-2 text-sm",
      colors: {
        gray: "text-gray-500 dark:text-gray-400",
        info: "text-blue-700 dark:text-blue-800",
        success: "text-green-600 dark:text-green-500",
        failure: "text-red-600 dark:text-red-500",
        warning: "text-yellow-500 dark:text-yellow-600"
      }
    },
    label: {
      base: "text-sm font-medium",
      colors: {
        default: "text-gray-900 dark:text-gray-300",
        info: "text-blue-500 dark:text-blue-600",
        failure: "text-red-700 dark:text-red-500",
        warning: "text-yellow-500 dark:text-yellow-600",
        success: "text-green-700 dark:text-green-500"
      },
      disabled: "opacity-50"
    },
    radio: {
      base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600"
    },
    checkbox: {
      base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
    },
    textInput: {
      base: "flex",
      addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
      field: {
        base: "relative w-full",
        icon: {
          base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
        },
        input: {
          base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          sizes: {
            sm: "p-2 sm:text-xs",
            md: "p-2.5 text-sm",
            lg: "sm:text-md p-4"
          },
          colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
          },
          withIcon: {
            on: "pl-10",
            off: ""
          },
          withAddon: {
            on: "rounded-r-lg",
            off: "rounded-lg"
          },
          withShadow: {
            on: "shadow-sm dark:shadow-sm-light",
            off: ""
          }
        }
      }
    },
    fileInput: {
      base: "flex",
      field: {
        base: "relative w-full",
        input: {
          base: "rounded-lg block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          sizes: {
            sm: "sm:text-xs",
            md: "text-sm",
            lg: "sm:text-md"
          },
          colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
          }
        }
      }
    },
    toggleSwitch: {
      base: "group relative flex items-center rounded-lg focus:outline-none",
      active: {
        on: "cursor-pointer",
        off: "cursor-not-allowed opacity-50"
      },
      toggle: {
        base: "toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25",
        checked: {
          on: "border-blue-700 bg-blue-700 after:translate-x-full after:border-white",
          off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700"
        }
      },
      label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    },
    textarea: {
      base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    },
    select: {
      base: "flex",
      addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
      field: {
        base: "relative w-full",
        icon: {
          base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
        },
        select: {
          base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          withIcon: {
            on: "pl-10",
            off: ""
          },
          withAddon: {
            on: "rounded-r-lg",
            off: "rounded-lg"
          },
          withShadow: {
            on: "shadow-sm dark:shadow-sm-light",
            off: ""
          },
          sizes: {
            sm: "p-2 sm:text-xs",
            md: "p-2.5 text-sm",
            lg: "sm:text-md p-4"
          },
          colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
          }
        }
      }
    }
  },
  listGroup: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white",
    item: {
      active: {
        off: "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-blue-700 text-white dark:bg-gray-800"
      },
      base: "flex w-full cursor-pointer border-b border-gray-200 py-2 px-4 first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600",
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4 fill-current"
    }
  },
  modal: {
    base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      off: "hidden"
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner: "relative rounded-lg bg-white shadow dark:bg-gray-700"
    },
    body: {
      base: "p-6",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
      popup: "!p-2 !border-b-0",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t"
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  navbar: {
    base: "border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    },
    brand: "flex items-center",
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: ""
      }
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0",
      active: {
        on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: ""
      }
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0"
    }
  },
  rating: {
    base: "flex items-center",
    star: {
      sizes: {
        sm: "w-5 h-5",
        md: "w-7 h-7",
        lg: "w-10 h-10"
      },
      filled: "text-yellow-400",
      empty: "text-gray-300 dark:text-gray-500"
    },
    advanced: {
      base: "flex items-center",
      label: "text-sm font-medium text-blue-600 dark:text-blue-500",
      progress: {
        base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
        fill: "h-5 rounded bg-yellow-400",
        label: "text-sm font-medium text-blue-600 dark:text-blue-500"
      }
    }
  },
  pagination: {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white"
      }
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        icon: "h-5 w-5"
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        icon: "h-5 w-5"
      },
      selector: {
        base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        active: "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      }
    }
  },
  sidebar: {
    base: "h-full",
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    collapse: {
      button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      icon: {
        base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        open: {
          off: "",
          on: "text-gray-900"
        }
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left",
        icon: "h-6 w-6"
      },
      list: "space-y-2 py-2"
    },
    cta: {
      base: "mt-6 rounded-lg p-4",
      color: {
        blue: "bg-blue-50 dark:bg-blue-900",
        dark: "bg-dark-50 dark:bg-dark-900",
        failure: "bg-red-50 dark:bg-red-900",
        gray: "bg-alternative-50 dark:bg-alternative-900",
        green: "bg-green-50 dark:bg-green-900",
        light: "bg-light-50 dark:bg-light-900",
        red: "bg-red-50 dark:bg-red-900",
        purple: "bg-purple-50 dark:bg-purple-900",
        success: "bg-green-50 dark:bg-green-900",
        yellow: "bg-yellow-50 dark:bg-yellow-900",
        warning: "bg-yellow-50 dark:bg-yellow-900"
      }
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      active: "bg-gray-100 dark:bg-gray-700",
      collapsed: {
        insideCollapse: "group w-full pl-8 transition duration-75",
        noIcon: "font-bold"
      },
      content: {
        base: "px-3 flex-1 whitespace-nowrap"
      },
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        active: "text-gray-700 dark:text-gray-100"
      }
    },
    items: "",
    itemGroup: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
    logo: {
      base: "mb-5 flex items-center pl-2.5",
      collapsed: {
        on: "hidden",
        off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      },
      img: "mr-3 h-6 sm:h-7"
    }
  },
  progress: {
    base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100",
    color: {
      dark: "bg-gray-600 dark:bg-gray-300",
      blue: "bg-blue-600",
      red: "bg-red-600 dark:bg-red-500",
      green: "bg-green-600 dark:bg-green-500",
      yellow: "bg-yellow-400",
      indigo: "bg-indigo-600 dark:bg-indigo-500",
      purple: "bg-purple-600 dark:bg-purple-500"
    },
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6"
    }
  },
  spinner: {
    base: "inline animate-spin text-gray-200",
    color: {
      failure: "fill-red-600",
      gray: "fill-gray-600",
      info: "fill-blue-600",
      pink: "fill-pink-600",
      purple: "fill-purple-600",
      success: "fill-green-500",
      warning: "fill-yellow-400"
    },
    light: {
      off: {
        base: "dark:text-gray-600",
        color: {
          failure: "",
          gray: "dark:fill-gray-300",
          info: "",
          pink: "",
          purple: "",
          success: "",
          warning: ""
        }
      },
      on: {
        base: "",
        color: {
          failure: "",
          gray: "",
          info: "",
          pink: "",
          purple: "",
          success: "",
          warning: ""
        }
      }
    },
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10"
    }
  },
  tab: {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
        pills: "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400",
        fullWidth: "hidden text-sm font-medium rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
      },
      tabitem: {
        base: "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
            }
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            }
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-blue-600 text-white",
              off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          },
          fullWidth: {
            base: "ml-2 first:ml-0 w-full first:rounded-l-lg last:rounded-r-lg",
            active: {
              on: "inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white",
              off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            }
          }
        },
        icon: "mr-2 h-5 w-5"
      }
    },
    tabpanel: "p-4"
  },
  toast: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out",
    removed: "hidden",
    toggle: {
      base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      icon: "h-5 w-5 shrink-0"
    }
  },
  tooltip: {
    target: "w-fit",
    base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
    animation: "transition-opacity",
    hidden: "invisible opacity-0",
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    content: "relative z-20",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700"
      },
      placement: "-4px"
    }
  }
}, pi = react.exports.createContext({
  theme: mi
});
function R() {
  return react.exports.useContext(pi);
}
const Hr = react.exports.createContext(void 0);
function Vr() {
  const e2 = react.exports.useContext(Hr);
  if (!e2)
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  return e2;
}
const Ur = ({ children: e2, ...t2 }) => {
  const n2 = P(t2), { isOpen: r } = Vr(), o2 = R().theme.accordion.content;
  return a("div", { className: o2.base, "data-testid": "flowbite-accordion-content", hidden: !r, ...n2, children: e2 });
}, Wr = ({ children: e2, ...t2 }) => {
  const { alwaysOpen: n2 } = t2, [r, o2] = react.exports.useState(t2.isOpen), i2 = n2 ? {
    ...t2,
    isOpen: r,
    setOpen: () => o2(!r)
  } : t2;
  return a(Hr.Provider, { value: i2, children: e2 });
}, Yr = ({ as: e2 = "h2", children: t2, ...n2 }) => {
  const r = P(n2), { arrowIcon: o2, flush: i2, isOpen: s2, setOpen: c } = Vr(), l = R().theme.accordion.title, u = () => typeof c < "u" && c();
  return b("button", { className: T(l.base, l.flush[i2 ? "on" : "off"], l.open[s2 ? "on" : "off"]), onClick: u, type: "button", ...r, children: [a(e2, { className: l.heading, "data-testid": "flowbite-accordion-heading", children: t2 }), o2 && a(o2, { "aria-hidden": true, className: T(l.arrow.base, l.arrow.open[s2 ? "on" : "off"]), "data-testid": "flowbite-accordion-arrow" })] });
}, Gr = ({ alwaysOpen: e2 = false, arrowIcon: t2 = Dr, children: n2, flush: r = false, ...o2 }) => {
  const i2 = P(o2), [s2, c] = react.exports.useState(0), l = react.exports.useMemo(() => react.exports.Children.map(n2, (g, h) => react.exports.cloneElement(g, { alwaysOpen: e2, arrowIcon: t2, flush: r, isOpen: s2 === h, setOpen: () => c(h) })), [e2, t2, n2, r, s2]), u = R().theme.accordion;
  return a("div", { className: T(u.base, u.flush[r ? "on" : "off"]), "data-testid": "flowbite-accordion", ...i2, children: l });
};
Gr.displayName = "Accordion";
Wr.displayName = "Accordion.Panel";
Yr.displayName = "Accordion.Title";
Ur.displayName = "Accordion.Content";
Object.assign(Gr, {
  Panel: Wr,
  Title: Yr,
  Content: Ur
});
const Zr = ({ children: e2 }) => a("div", { "data-testid": "avatar-group-element", className: "mb-5 flex -space-x-4", children: e2 });
Zr.displayName = "Avatar.Group";
const Xr = ({ total: e2, href: t2 }) => b("a", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600  dark:ring-gray-500 ", href: t2, children: ["+", e2] });
Xr.displayName = "Avatar.GroupCounter";
const Kr = ({ alt: e2 = "", bordered: t2 = false, children: n2, img: r, rounded: o2 = false, size: i2 = "md", stacked: s2 = false, status: c, statusPosition: l = "top-left", placeholderInitials: u = "", ...g }) => {
  const h = P(g), f = R().theme.avatar;
  return b("div", { className: f.base, "data-testid": "flowbite-avatar", ...h, children: [b("div", { className: "relative", children: [r ? a("img", { alt: e2, className: T(t2 && f.bordered, o2 && f.rounded, s2 && f.stacked, f.img.on, f.size[i2]), "data-testid": "flowbite-avatar-img", src: r }) : u ? a("div", { className: T(f.img.off, f.initials.base, o2 && f.rounded, s2 && f.stacked, t2 && f.bordered), children: a("span", { className: T(f.initials.text), "data-testid": "flowbite-avatar-initials-placeholder", children: u }) }) : a("div", { className: T(t2 && f.bordered, o2 && f.rounded, s2 && f.stacked, f.img.off, f.size[i2]), "data-testid": "flowbite-avatar-img", children: a("svg", { className: "absolute -bottom-1 h-auto w-auto text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: a("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }), c && a("span", { className: T(f.status.base, f.status[c], f.statusPosition[l]) })] }), n2 && a("div", { children: n2 })] });
};
Kr.displayName = "Avatar";
Object.assign(Kr, {
  Group: Zr,
  Counter: Xr
});
const bi = ({ children: e2, color: t2 = "info", href: n2, icon: r, size: o2 = "xs", ...i2 }) => {
  const s2 = P(i2), c = R().theme.badge, l = () => b("span", { className: T(c.base, c.color[t2], c.icon[r ? "on" : "off"], c.size[o2]), "data-testid": "flowbite-badge", ...s2, children: [r && a(r, { "aria-hidden": true, className: c.icon.size[o2], "data-testid": "flowbite-badge-icon" }), e2 && a("span", { children: e2 })] });
  return n2 ? a("a", { className: c.href, href: n2, children: a(l, {}) }) : a(l, {});
}, qr = ({ children: e2, href: t2, icon: n2, ...r }) => {
  const o2 = typeof t2 < "u", i2 = P(r), s2 = R().theme.breadcrumb.item, c = o2 ? "a" : "span";
  return b("li", { className: s2.base, ...i2, children: [a(zr, { "aria-hidden": true, className: s2.chevron, "data-testid": "flowbite-breadcrumb-separator" }), b(c, { className: s2.href[o2 ? "on" : "off"], "data-testid": "flowbite-breadcrumb-item", href: t2, children: [n2 && a(n2, { "aria-hidden": true, className: s2.icon }), e2] })] });
};
qr.displayName = "Breadcrumb.Item";
const Jr = ({ children: e2, ...t2 }) => {
  const n2 = R().theme.breadcrumb;
  return a("nav", { "aria-label": "Breadcrumb", ...t2, children: a("ol", { className: n2.list, children: e2 }) });
};
Jr.displayName = "Breadcrumb";
Object.assign(Jr, { Item: qr });
const Qr = ({ children: e2, outline: t2, pill: n2, ...r }) => {
  const o2 = P(r), i2 = react.exports.useMemo(() => react.exports.Children.map(e2, (c, l) => react.exports.cloneElement(c, {
    outline: t2,
    pill: n2,
    positionInGroup: l === 0 ? "start" : l === e2.length - 1 ? "end" : "middle"
  })), [e2, t2, n2]), s2 = R().theme.buttonGroup;
  return a("div", { className: s2.base, role: "group", ...o2, children: i2 });
};
Qr.displayName = "Button.Group";
const en = react.exports.forwardRef(({ children: e2, color: t2 = "info", disabled: n2 = false, gradientDuoTone: r, gradientMonochrome: o2, href: i2, label: s2, outline: c = false, pill: l = false, positionInGroup: u = "none", size: g = "md", ...h }, f) => {
  var E;
  const m = typeof i2 < "u", p = P(h), { buttonGroup: N, button: x } = R().theme;
  return a(m ? "a" : "button", { className: T(n2 && x.disabled, !r && !o2 && x.color[t2], r && !o2 && x.gradientDuoTone[r], !r && o2 && x.gradient[o2], N.position[u], c && ((E = x.outline.color[t2]) != null ? E : x.outline.color.default), x.base, x.pill[l ? "on" : "off"]), disabled: n2, href: i2, type: m ? void 0 : "button", ref: f, ...p, children: a("span", { className: T(x.inner.base, x.inner.position[u], x.outline[c ? "on" : "off"], x.outline.pill[c && l ? "on" : "off"], x.size[g], c && !x.outline.color[t2] && x.inner.outline), children: b(J, { children: [typeof e2 < "u" && e2, typeof s2 < "u" && a("span", { className: x.label, "data-testid": "flowbite-button-label", children: s2 })] }) }) });
});
en.displayName = "Button";
const yi = Object.assign(en, {
  Group: Qr
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var tn = function(e2, t2) {
  return (tn = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(n2, r) {
    n2.__proto__ = r;
  } || function(n2, r) {
    for (var o2 in r)
      r.hasOwnProperty(o2) && (n2[o2] = r[o2]);
  })(e2, t2);
}, vi, Ye, wi = (function(e2) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var t2 = {}.hasOwnProperty;
    function n2() {
      for (var r = [], o2 = 0; o2 < arguments.length; o2++) {
        var i2 = arguments[o2];
        if (i2) {
          var s2 = typeof i2;
          if (s2 === "string" || s2 === "number")
            r.push(i2);
          else if (Array.isArray(i2) && i2.length) {
            var c = n2.apply(null, i2);
            c && r.push(c);
          } else if (s2 === "object")
            for (var l in i2)
              t2.call(i2, l) && i2[l] && r.push(l);
        }
      }
      return r.join(" ");
    }
    e2.exports ? (n2.default = n2, e2.exports = n2) : window.classNames = n2;
  })();
}(Ye = {
  path: vi,
  exports: {},
  require: function(e2, t2) {
    return function() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }(t2 == null && Ye.path);
  }
}, Ye.exports), Ye.exports);
function kt(e2, t2, n2) {
  var r, o2, i2, s2, c;
  function l() {
    var g = Date.now() - s2;
    g < t2 && g >= 0 ? r = setTimeout(l, t2 - g) : (r = null, n2 || (c = e2.apply(i2, o2), i2 = o2 = null));
  }
  t2 == null && (t2 = 100);
  var u = function() {
    i2 = this, o2 = arguments, s2 = Date.now();
    var g = n2 && !r;
    return r || (r = setTimeout(l, t2)), g && (c = e2.apply(i2, o2), i2 = o2 = null), c;
  };
  return u.clear = function() {
    r && (clearTimeout(r), r = null);
  }, u.flush = function() {
    r && (c = e2.apply(i2, o2), i2 = o2 = null, clearTimeout(r), r = null);
  }, u;
}
kt.debounce = kt;
var xi = kt;
(function(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2.insertAt;
  if (e2 && typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0], o2 = document.createElement("style");
    o2.type = "text/css", n2 === "top" && r.firstChild ? r.insertBefore(o2, r.firstChild) : r.appendChild(o2), o2.styleSheet ? o2.styleSheet.cssText = e2 : o2.appendChild(document.createTextNode(e2));
  }
})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);
var yt, ki = (yt = "indiana-scroll-container", function(e2, t2) {
  if (!e2)
    return yt;
  var n2;
  typeof e2 == "string" ? n2 = e2 : t2 = e2;
  var r = yt;
  return n2 && (r += "__" + n2), r + (t2 ? Object.keys(t2).reduce(function(o2, i2) {
    var s2 = t2[i2];
    return s2 && (o2 += " " + (typeof s2 == "boolean" ? r + "--" + i2 : r + "--" + i2 + "_" + s2)), o2;
  }, "") : "");
});
(function(e2) {
  function t2(n2) {
    var r = e2.call(this, n2) || this;
    return r.onEndScroll = function() {
      r.scrolling = false, !r.pressed && r.started && r.processEnd();
    }, r.onScroll = function(o2) {
      var i2 = r.container.current;
      i2.scrollLeft === r.scrollLeft && i2.scrollTop === r.scrollTop || (r.scrolling = true, r.processScroll(o2), r.onEndScroll());
    }, r.onTouchStart = function(o2) {
      var i2 = r.props.nativeMobileScroll;
      if (r.isDraggable(o2.target))
        if (r.internal = true, i2 && r.scrolling)
          r.pressed = true;
        else {
          var s2 = o2.touches[0];
          r.processClick(o2, s2.clientX, s2.clientY), !i2 && r.props.stopPropagation && o2.stopPropagation();
        }
    }, r.onTouchEnd = function(o2) {
      var i2 = r.props.nativeMobileScroll;
      r.pressed && (!r.started || r.scrolling && i2 ? r.pressed = false : r.processEnd(), r.forceUpdate());
    }, r.onTouchMove = function(o2) {
      var i2 = r.props.nativeMobileScroll;
      if (r.pressed && (!i2 || !r.isMobile)) {
        var s2 = o2.touches[0];
        s2 && r.processMove(o2, s2.clientX, s2.clientY), o2.preventDefault(), r.props.stopPropagation && o2.stopPropagation();
      }
    }, r.onMouseDown = function(o2) {
      r.isDraggable(o2.target) && r.isScrollable() && (r.internal = true, r.props.buttons.indexOf(o2.button) !== -1 && (r.processClick(o2, o2.clientX, o2.clientY), o2.preventDefault(), r.props.stopPropagation && o2.stopPropagation()));
    }, r.onMouseMove = function(o2) {
      r.pressed && (r.processMove(o2, o2.clientX, o2.clientY), o2.preventDefault(), r.props.stopPropagation && o2.stopPropagation());
    }, r.onMouseUp = function(o2) {
      r.pressed && (r.started ? r.processEnd() : (r.internal = false, r.pressed = false, r.forceUpdate(), r.props.onClick && r.props.onClick(o2)), o2.preventDefault(), r.props.stopPropagation && o2.stopPropagation());
    }, r.container = React.createRef(), r.onEndScroll = xi(r.onEndScroll, 300), r.scrolling = false, r.started = false, r.pressed = false, r.internal = false, r.getRef = r.getRef.bind(r), r;
  }
  return function(n2, r) {
    function o2() {
      this.constructor = n2;
    }
    tn(n2, r), n2.prototype = r === null ? Object.create(r) : (o2.prototype = r.prototype, new o2());
  }(t2, e2), t2.prototype.componentDidMount = function() {
    var n2 = this.props.nativeMobileScroll, r = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
      passive: false
    }), window.addEventListener("touchend", this.onTouchEnd), r.addEventListener("touchstart", this.onTouchStart, {
      passive: false
    }), r.addEventListener("mousedown", this.onMouseDown, {
      passive: false
    }), n2 && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, t2.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, t2.prototype.getElement = function() {
    return this.container.current;
  }, t2.prototype.isMobileDevice = function() {
    return window.orientation !== void 0 || navigator.userAgent.indexOf("IEMobile") !== -1;
  }, t2.prototype.isDraggable = function(n2) {
    var r = this.props.ignoreElements;
    if (r) {
      var o2 = n2.closest(r);
      return o2 === null || o2.contains(this.getElement());
    }
    return true;
  }, t2.prototype.isScrollable = function() {
    var n2 = this.container.current;
    return n2 && (n2.scrollWidth > n2.clientWidth || n2.scrollHeight > n2.clientHeight);
  }, t2.prototype.processClick = function(n2, r, o2) {
    var i2 = this.container.current;
    this.scrollLeft = i2.scrollLeft, this.scrollTop = i2.scrollTop, this.clientX = r, this.clientY = o2, this.pressed = true;
  }, t2.prototype.processStart = function(n2) {
    n2 === void 0 && (n2 = true);
    var r = this.props.onStartScroll;
    this.started = true, n2 && document.body.classList.add("indiana-dragging"), r && r({
      external: !this.internal
    }), this.forceUpdate();
  }, t2.prototype.processScroll = function(n2) {
    if (this.started) {
      var r = this.props.onScroll;
      r && r({
        external: !this.internal
      });
    } else
      this.processStart(false);
  }, t2.prototype.processMove = function(n2, r, o2) {
    var i2 = this.props, s2 = i2.horizontal, c = i2.vertical, l = i2.activationDistance, u = i2.onScroll, g = this.container.current;
    this.started ? (s2 && (g.scrollLeft -= r - this.clientX), c && (g.scrollTop -= o2 - this.clientY), u && u({
      external: !this.internal
    }), this.clientX = r, this.clientY = o2, this.scrollLeft = g.scrollLeft, this.scrollTop = g.scrollTop) : (s2 && Math.abs(r - this.clientX) > l || c && Math.abs(o2 - this.clientY) > l) && (this.clientX = r, this.clientY = o2, this.processStart());
  }, t2.prototype.processEnd = function() {
    var n2 = this.props.onEndScroll;
    this.container.current && n2 && n2({
      external: !this.internal
    }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, t2.prototype.getRef = function(n2) {
    [this.container, this.props.innerRef].forEach(function(r) {
      r && (typeof r == "function" ? r(n2) : r.current = n2);
    });
  }, t2.prototype.render = function() {
    var n2 = this.props, r = n2.children, o2 = n2.draggingClassName, i2 = n2.className, s2 = n2.style, c = n2.hideScrollbars, l = n2.component;
    return React.createElement(l, {
      className: wi(i2, this.pressed && o2, ki({
        dragging: this.pressed,
        "hide-scrollbars": c,
        "native-scroll": this.isMobile
      })),
      style: s2,
      ref: this.getRef,
      onScroll: this.onScroll
    }, r);
  }, t2.defaultProps = {
    nativeMobileScroll: true,
    hideScrollbars: true,
    activationDistance: 10,
    vertical: true,
    horizontal: true,
    stopPropagation: false,
    style: {},
    component: "div",
    buttons: [0]
  }, t2;
})(react.exports.PureComponent);
function Ci() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e2) {
    const t2 = Math.random() * 16 | 0;
    return (e2 == "x" ? t2 : t2 & 3 | 8).toString(16);
  });
}
function Ee(e2) {
  return e2.split("-")[0];
}
function Ce(e2) {
  return e2.split("-")[1];
}
function Ae(e2) {
  return ["top", "bottom"].includes(Ee(e2)) ? "x" : "y";
}
function Ot(e2) {
  return e2 === "y" ? "height" : "width";
}
function gr(e2, t2, n2) {
  let {
    reference: r,
    floating: o2
  } = e2;
  const i2 = r.x + r.width / 2 - o2.width / 2, s2 = r.y + r.height / 2 - o2.height / 2, c = Ae(t2), l = Ot(c), u = r[l] / 2 - o2[l] / 2, g = Ee(t2), h = c === "x";
  let f;
  switch (g) {
    case "top":
      f = {
        x: i2,
        y: r.y - o2.height
      };
      break;
    case "bottom":
      f = {
        x: i2,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: s2
      };
      break;
    case "left":
      f = {
        x: r.x - o2.width,
        y: s2
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ce(t2)) {
    case "start":
      f[c] -= u * (n2 && h ? -1 : 1);
      break;
    case "end":
      f[c] += u * (n2 && h ? -1 : 1);
      break;
  }
  return f;
}
const Ni = async (e2, t2, n2) => {
  const {
    placement: r = "bottom",
    strategy: o2 = "absolute",
    middleware: i2 = [],
    platform: s2
  } = n2, c = await (s2.isRTL == null ? void 0 : s2.isRTL(t2));
  let l = await s2.getElementRects({
    reference: e2,
    floating: t2,
    strategy: o2
  }), {
    x: u,
    y: g
  } = gr(l, r, c), h = r, f = {}, m = 0;
  for (let p = 0; p < i2.length; p++) {
    const {
      name: N,
      fn: x
    } = i2[p], {
      x: C,
      y: E,
      data: O,
      reset: v
    } = await x({
      x: u,
      y: g,
      initialPlacement: r,
      placement: h,
      strategy: o2,
      middlewareData: f,
      rects: l,
      platform: s2,
      elements: {
        reference: e2,
        floating: t2
      }
    });
    if (u = C != null ? C : u, g = E != null ? E : g, f = {
      ...f,
      [N]: {
        ...f[N],
        ...O
      }
    }, v && m <= 50) {
      m++, typeof v == "object" && (v.placement && (h = v.placement), v.rects && (l = v.rects === true ? await s2.getElementRects({
        reference: e2,
        floating: t2,
        strategy: o2
      }) : v.rects), {
        x: u,
        y: g
      } = gr(l, h, c)), p = -1;
      continue;
    }
  }
  return {
    x: u,
    y: g,
    placement: h,
    strategy: o2,
    middlewareData: f
  };
};
function Ei(e2) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e2
  };
}
function rn(e2) {
  return typeof e2 != "number" ? Ei(e2) : {
    top: e2,
    right: e2,
    bottom: e2,
    left: e2
  };
}
function Je(e2) {
  return {
    ...e2,
    top: e2.y,
    left: e2.x,
    right: e2.x + e2.width,
    bottom: e2.y + e2.height
  };
}
async function Pt(e2, t2) {
  var n2;
  t2 === void 0 && (t2 = {});
  const {
    x: r,
    y: o2,
    platform: i2,
    rects: s2,
    elements: c,
    strategy: l
  } = e2, {
    boundary: u = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: h = "floating",
    altBoundary: f = false,
    padding: m = 0
  } = t2, p = rn(m), x = c[f ? h === "floating" ? "reference" : "floating" : h], C = Je(await i2.getClippingRect({
    element: (n2 = await (i2.isElement == null ? void 0 : i2.isElement(x))) == null || n2 ? x : x.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: g,
    strategy: l
  })), E = Je(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: h === "floating" ? {
      ...s2.floating,
      x: r,
      y: o2
    } : s2.reference,
    offsetParent: await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(c.floating)),
    strategy: l
  }) : s2[h]);
  return {
    top: C.top - E.top + p.top,
    bottom: E.bottom - C.bottom + p.bottom,
    left: C.left - E.left + p.left,
    right: E.right - C.right + p.right
  };
}
const Ri = Math.min, Ti = Math.max;
function Ct(e2, t2, n2) {
  return Ti(e2, Ri(t2, n2));
}
const Si = (e2) => ({
  name: "arrow",
  options: e2,
  async fn(t2) {
    const {
      element: n2,
      padding: r = 0
    } = e2 != null ? e2 : {}, {
      x: o2,
      y: i2,
      placement: s2,
      rects: c,
      platform: l
    } = t2;
    if (n2 == null)
      return {};
    const u = rn(r), g = {
      x: o2,
      y: i2
    }, h = Ae(s2), f = Ce(s2), m = Ot(h), p = await l.getDimensions(n2), N = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", C = c.reference[m] + c.reference[h] - g[h] - c.floating[m], E = g[h] - c.reference[h], O = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n2));
    let v = O ? h === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0;
    v === 0 && (v = c.floating[m]);
    const _ = C / 2 - E / 2, F = u[N], W = v - p[m] - u[x], B = v / 2 - p[m] / 2 + _, D = Ct(F, B, W), G = (f === "start" ? u[N] : u[x]) > 0 && B !== D && c.reference[m] <= c.floating[m] ? B < F ? F - B : W - B : 0;
    return {
      [h]: g[h] - G,
      data: {
        [h]: D,
        centerOffset: B - D
      }
    };
  }
}), Oi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qe(e2) {
  return e2.replace(/left|right|bottom|top/g, (t2) => Oi[t2]);
}
function nn(e2, t2, n2) {
  n2 === void 0 && (n2 = false);
  const r = Ce(e2), o2 = Ae(e2), i2 = Ot(o2);
  let s2 = o2 === "x" ? r === (n2 ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t2.reference[i2] > t2.floating[i2] && (s2 = Qe(s2)), {
    main: s2,
    cross: Qe(s2)
  };
}
const Pi = {
  start: "end",
  end: "start"
};
function Nt(e2) {
  return e2.replace(/start|end/g, (t2) => Pi[t2]);
}
const Li = ["top", "right", "bottom", "left"], Mi = /* @__PURE__ */ Li.reduce((e2, t2) => e2.concat(t2, t2 + "-start", t2 + "-end"), []);
function _i(e2, t2, n2) {
  return (e2 ? [...n2.filter((o2) => Ce(o2) === e2), ...n2.filter((o2) => Ce(o2) !== e2)] : n2.filter((o2) => Ee(o2) === o2)).filter((o2) => e2 ? Ce(o2) === e2 || (t2 ? Nt(o2) !== o2 : false) : true);
}
const Ii = function(e2) {
  return e2 === void 0 && (e2 = {}), {
    name: "autoPlacement",
    options: e2,
    async fn(t2) {
      var n2, r, o2, i2, s2;
      const {
        x: c,
        y: l,
        rects: u,
        middlewareData: g,
        placement: h,
        platform: f,
        elements: m
      } = t2, {
        alignment: p = null,
        allowedPlacements: N = Mi,
        autoAlignment: x = true,
        ...C
      } = e2, E = _i(p, x, N), O = await Pt(t2, C), v = (n2 = (r = g.autoPlacement) == null ? void 0 : r.index) != null ? n2 : 0, _ = E[v];
      if (_ == null)
        return {};
      const {
        main: F,
        cross: W
      } = nn(_, u, await (f.isRTL == null ? void 0 : f.isRTL(m.floating)));
      if (h !== _)
        return {
          x: c,
          y: l,
          reset: {
            placement: E[0]
          }
        };
      const B = [O[Ee(_)], O[F], O[W]], D = [...(o2 = (i2 = g.autoPlacement) == null ? void 0 : i2.overflows) != null ? o2 : [], {
        placement: _,
        overflows: B
      }], U = E[v + 1];
      if (U)
        return {
          data: {
            index: v + 1,
            overflows: D
          },
          reset: {
            placement: U
          }
        };
      const Y = D.slice().sort((L, j) => L.overflows[0] - j.overflows[0]), G = (s2 = Y.find((L) => {
        let {
          overflows: j
        } = L;
        return j.every((ee) => ee <= 0);
      })) == null ? void 0 : s2.placement, H = G != null ? G : Y[0].placement;
      return H !== h ? {
        data: {
          index: v + 1,
          overflows: D
        },
        reset: {
          placement: H
        }
      } : {};
    }
  };
};
function Ai(e2) {
  const t2 = Qe(e2);
  return [Nt(e2), t2, Nt(t2)];
}
const ji = function(e2) {
  return e2 === void 0 && (e2 = {}), {
    name: "flip",
    options: e2,
    async fn(t2) {
      var n2;
      const {
        placement: r,
        middlewareData: o2,
        rects: i2,
        initialPlacement: s2,
        platform: c,
        elements: l
      } = t2, {
        mainAxis: u = true,
        crossAxis: g = true,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        flipAlignment: m = true,
        ...p
      } = e2, N = Ee(r), C = h || (N === s2 || !m ? [Qe(s2)] : Ai(s2)), E = [s2, ...C], O = await Pt(t2, p), v = [];
      let _ = ((n2 = o2.flip) == null ? void 0 : n2.overflows) || [];
      if (u && v.push(O[N]), g) {
        const {
          main: D,
          cross: U
        } = nn(r, i2, await (c.isRTL == null ? void 0 : c.isRTL(l.floating)));
        v.push(O[D], O[U]);
      }
      if (_ = [..._, {
        placement: r,
        overflows: v
      }], !v.every((D) => D <= 0)) {
        var F, W;
        const D = ((F = (W = o2.flip) == null ? void 0 : W.index) != null ? F : 0) + 1, U = E[D];
        if (U)
          return {
            data: {
              index: D,
              overflows: _
            },
            reset: {
              placement: U
            }
          };
        let Y = "bottom";
        switch (f) {
          case "bestFit": {
            var B;
            const G = (B = _.map((H) => [H, H.overflows.filter((L) => L > 0).reduce((L, j) => L + j, 0)]).sort((H, L) => H[1] - L[1])[0]) == null ? void 0 : B[0].placement;
            G && (Y = G);
            break;
          }
          case "initialPlacement":
            Y = s2;
            break;
        }
        if (r !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
async function Fi(e2, t2) {
  const {
    placement: n2,
    platform: r,
    elements: o2
  } = e2, i2 = await (r.isRTL == null ? void 0 : r.isRTL(o2.floating)), s2 = Ee(n2), c = Ce(n2), l = Ae(n2) === "x", u = ["left", "top"].includes(s2) ? -1 : 1, g = i2 && l ? -1 : 1, h = typeof t2 == "function" ? t2(e2) : t2;
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: p
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return c && typeof p == "number" && (m = c === "end" ? p * -1 : p), l ? {
    x: m * g,
    y: f * u
  } : {
    x: f * u,
    y: m * g
  };
}
const $i = function(e2) {
  return e2 === void 0 && (e2 = 0), {
    name: "offset",
    options: e2,
    async fn(t2) {
      const {
        x: n2,
        y: r
      } = t2, o2 = await Fi(t2, e2);
      return {
        x: n2 + o2.x,
        y: r + o2.y,
        data: o2
      };
    }
  };
};
function Di(e2) {
  return e2 === "x" ? "y" : "x";
}
const Bi = function(e2) {
  return e2 === void 0 && (e2 = {}), {
    name: "shift",
    options: e2,
    async fn(t2) {
      const {
        x: n2,
        y: r,
        placement: o2
      } = t2, {
        mainAxis: i2 = true,
        crossAxis: s2 = false,
        limiter: c = {
          fn: (x) => {
            let {
              x: C,
              y: E
            } = x;
            return {
              x: C,
              y: E
            };
          }
        },
        ...l
      } = e2, u = {
        x: n2,
        y: r
      }, g = await Pt(t2, l), h = Ae(Ee(o2)), f = Di(h);
      let m = u[h], p = u[f];
      if (i2) {
        const x = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", E = m + g[x], O = m - g[C];
        m = Ct(E, m, O);
      }
      if (s2) {
        const x = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", E = p + g[x], O = p - g[C];
        p = Ct(E, p, O);
      }
      const N = c.fn({
        ...t2,
        [h]: m,
        [f]: p
      });
      return {
        ...N,
        data: {
          x: N.x - n2,
          y: N.y - r
        }
      };
    }
  };
};
function on(e2) {
  return e2 && e2.document && e2.location && e2.alert && e2.setInterval;
}
function he(e2) {
  if (e2 == null)
    return window;
  if (!on(e2)) {
    const t2 = e2.ownerDocument;
    return t2 && t2.defaultView || window;
  }
  return e2;
}
function be(e2) {
  return he(e2).getComputedStyle(e2);
}
function ye(e2) {
  return on(e2) ? "" : e2 ? (e2.nodeName || "").toLowerCase() : "";
}
function an() {
  const e2 = navigator.userAgentData;
  return e2 != null && e2.brands ? e2.brands.map((t2) => t2.brand + "/" + t2.version).join(" ") : navigator.userAgent;
}
function oe(e2) {
  return e2 instanceof he(e2).HTMLElement;
}
function le(e2) {
  return e2 instanceof he(e2).Element;
}
function zi(e2) {
  return e2 instanceof he(e2).Node;
}
function Ie(e2) {
  if (typeof ShadowRoot > "u")
    return false;
  const t2 = he(e2).ShadowRoot;
  return e2 instanceof t2 || e2 instanceof ShadowRoot;
}
function je(e2) {
  const {
    overflow: t2,
    overflowX: n2,
    overflowY: r,
    display: o2
  } = be(e2);
  return /auto|scroll|overlay|hidden/.test(t2 + r + n2) && !["inline", "contents"].includes(o2);
}
function Hi(e2) {
  return ["table", "td", "th"].includes(ye(e2));
}
function sn(e2) {
  const t2 = /firefox/i.test(an()), n2 = be(e2);
  return n2.transform !== "none" || n2.perspective !== "none" || t2 && n2.willChange === "filter" || t2 && (n2.filter ? n2.filter !== "none" : false) || ["transform", "perspective"].some((r) => n2.willChange.includes(r)) || ["paint", "layout", "strict", "content"].some(
    (r) => {
      const o2 = n2.contain;
      return o2 != null ? o2.includes(r) : false;
    }
  );
}
function ln() {
  return !/^((?!chrome|android).)*safari/i.test(an());
}
function Lt(e2) {
  return ["html", "body", "#document"].includes(ye(e2));
}
const hr = Math.min, Me = Math.max, et = Math.round;
function fe(e2, t2, n2) {
  var r, o2, i2, s2;
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  const c = e2.getBoundingClientRect();
  let l = 1, u = 1;
  t2 && oe(e2) && (l = e2.offsetWidth > 0 && et(c.width) / e2.offsetWidth || 1, u = e2.offsetHeight > 0 && et(c.height) / e2.offsetHeight || 1);
  const g = le(e2) ? he(e2) : window, h = !ln() && n2, f = (c.left + (h && (r = (o2 = g.visualViewport) == null ? void 0 : o2.offsetLeft) != null ? r : 0)) / l, m = (c.top + (h && (i2 = (s2 = g.visualViewport) == null ? void 0 : s2.offsetTop) != null ? i2 : 0)) / u, p = c.width / l, N = c.height / u;
  return {
    width: p,
    height: N,
    top: m,
    right: f + p,
    bottom: m + N,
    left: f,
    x: f,
    y: m
  };
}
function we(e2) {
  return ((zi(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
}
function ot(e2) {
  return le(e2) ? {
    scrollLeft: e2.scrollLeft,
    scrollTop: e2.scrollTop
  } : {
    scrollLeft: e2.pageXOffset,
    scrollTop: e2.pageYOffset
  };
}
function cn(e2) {
  return fe(we(e2)).left + ot(e2).scrollLeft;
}
function Vi(e2) {
  const t2 = fe(e2);
  return et(t2.width) !== e2.offsetWidth || et(t2.height) !== e2.offsetHeight;
}
function Ui(e2, t2, n2) {
  const r = oe(t2), o2 = we(t2), i2 = fe(
    e2,
    r && Vi(t2),
    n2 === "fixed"
  );
  let s2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if (r || !r && n2 !== "fixed")
    if ((ye(t2) !== "body" || je(o2)) && (s2 = ot(t2)), oe(t2)) {
      const l = fe(t2, true);
      c.x = l.x + t2.clientLeft, c.y = l.y + t2.clientTop;
    } else
      o2 && (c.x = cn(o2));
  return {
    x: i2.left + s2.scrollLeft - c.x,
    y: i2.top + s2.scrollTop - c.y,
    width: i2.width,
    height: i2.height
  };
}
function Mt(e2) {
  return ye(e2) === "html" ? e2 : e2.assignedSlot || e2.parentNode || (Ie(e2) ? e2.host : null) || we(e2);
}
function mr(e2) {
  return !oe(e2) || be(e2).position === "fixed" ? null : e2.offsetParent;
}
function Wi(e2) {
  let t2 = Mt(e2);
  for (Ie(t2) && (t2 = t2.host); oe(t2) && !Lt(t2); ) {
    if (sn(t2))
      return t2;
    {
      const n2 = t2.parentNode;
      t2 = Ie(n2) ? n2.host : n2;
    }
  }
  return null;
}
function Et(e2) {
  const t2 = he(e2);
  let n2 = mr(e2);
  for (; n2 && Hi(n2) && be(n2).position === "static"; )
    n2 = mr(n2);
  return n2 && (ye(n2) === "html" || ye(n2) === "body" && be(n2).position === "static" && !sn(n2)) ? t2 : n2 || Wi(e2) || t2;
}
function pr(e2) {
  if (oe(e2))
    return {
      width: e2.offsetWidth,
      height: e2.offsetHeight
    };
  const t2 = fe(e2);
  return {
    width: t2.width,
    height: t2.height
  };
}
function Yi(e2) {
  let {
    rect: t2,
    offsetParent: n2,
    strategy: r
  } = e2;
  const o2 = oe(n2), i2 = we(n2);
  if (n2 === i2)
    return t2;
  let s2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = {
    x: 0,
    y: 0
  };
  if ((o2 || !o2 && r !== "fixed") && ((ye(n2) !== "body" || je(i2)) && (s2 = ot(n2)), oe(n2))) {
    const l = fe(n2, true);
    c.x = l.x + n2.clientLeft, c.y = l.y + n2.clientTop;
  }
  return {
    ...t2,
    x: t2.x - s2.scrollLeft + c.x,
    y: t2.y - s2.scrollTop + c.y
  };
}
function Gi(e2, t2) {
  const n2 = he(e2), r = we(e2), o2 = n2.visualViewport;
  let i2 = r.clientWidth, s2 = r.clientHeight, c = 0, l = 0;
  if (o2) {
    i2 = o2.width, s2 = o2.height;
    const u = ln();
    (u || !u && t2 === "fixed") && (c = o2.offsetLeft, l = o2.offsetTop);
  }
  return {
    width: i2,
    height: s2,
    x: c,
    y: l
  };
}
function Zi(e2) {
  var t2;
  const n2 = we(e2), r = ot(e2), o2 = (t2 = e2.ownerDocument) == null ? void 0 : t2.body, i2 = Me(n2.scrollWidth, n2.clientWidth, o2 ? o2.scrollWidth : 0, o2 ? o2.clientWidth : 0), s2 = Me(n2.scrollHeight, n2.clientHeight, o2 ? o2.scrollHeight : 0, o2 ? o2.clientHeight : 0);
  let c = -r.scrollLeft + cn(e2);
  const l = -r.scrollTop;
  return be(o2 || n2).direction === "rtl" && (c += Me(n2.clientWidth, o2 ? o2.clientWidth : 0) - i2), {
    width: i2,
    height: s2,
    x: c,
    y: l
  };
}
function dn(e2) {
  const t2 = Mt(e2);
  return Lt(t2) ? e2.ownerDocument.body : oe(t2) && je(t2) ? t2 : dn(t2);
}
function _e(e2, t2) {
  var n2;
  t2 === void 0 && (t2 = []);
  const r = dn(e2), o2 = r === ((n2 = e2.ownerDocument) == null ? void 0 : n2.body), i2 = he(r), s2 = o2 ? [i2].concat(i2.visualViewport || [], je(r) ? r : []) : r, c = t2.concat(s2);
  return o2 ? c : c.concat(_e(s2));
}
function Xi(e2, t2) {
  const n2 = t2.getRootNode == null ? void 0 : t2.getRootNode();
  if (e2.contains(t2))
    return true;
  if (n2 && Ie(n2)) {
    let r = t2;
    do {
      if (r && e2 === r)
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function Ki(e2, t2) {
  let n2 = e2;
  for (; n2 && !Lt(n2) && !t2.includes(n2) && !(le(n2) && ["absolute", "fixed"].includes(be(n2).position)); ) {
    const r = Mt(n2);
    n2 = Ie(r) ? r.host : r;
  }
  return n2;
}
function qi(e2, t2) {
  const n2 = fe(e2, false, t2 === "fixed"), r = n2.top + e2.clientTop, o2 = n2.left + e2.clientLeft;
  return {
    top: r,
    left: o2,
    x: o2,
    y: r,
    right: o2 + e2.clientWidth,
    bottom: r + e2.clientHeight,
    width: e2.clientWidth,
    height: e2.clientHeight
  };
}
function br(e2, t2, n2) {
  return t2 === "viewport" ? Je(Gi(e2, n2)) : le(t2) ? qi(t2, n2) : Je(Zi(we(e2)));
}
function Ji(e2) {
  const t2 = _e(e2), n2 = Ki(e2, t2);
  let r = null;
  if (n2 && oe(n2)) {
    const o2 = Et(n2);
    je(n2) ? r = n2 : oe(o2) && (r = o2);
  }
  return le(r) ? t2.filter((o2) => r && le(o2) && Xi(o2, r) && ye(o2) !== "body") : [];
}
function Qi(e2) {
  let {
    element: t2,
    boundary: n2,
    rootBoundary: r,
    strategy: o2
  } = e2;
  const s2 = [...n2 === "clippingAncestors" ? Ji(t2) : [].concat(n2), r], c = s2[0], l = s2.reduce((u, g) => {
    const h = br(t2, g, o2);
    return u.top = Me(h.top, u.top), u.right = hr(h.right, u.right), u.bottom = hr(h.bottom, u.bottom), u.left = Me(h.left, u.left), u;
  }, br(t2, c, o2));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const es = {
  getClippingRect: Qi,
  convertOffsetParentRelativeRectToViewportRelativeRect: Yi,
  isElement: le,
  getDimensions: pr,
  getOffsetParent: Et,
  getDocumentElement: we,
  getElementRects: (e2) => {
    let {
      reference: t2,
      floating: n2,
      strategy: r
    } = e2;
    return {
      reference: Ui(t2, Et(n2), r),
      floating: {
        ...pr(n2),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e2) => Array.from(e2.getClientRects()),
  isRTL: (e2) => be(e2).direction === "rtl"
};
function ts(e2, t2, n2, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o2 = true,
    ancestorResize: i2 = true,
    elementResize: s2 = true,
    animationFrame: c = false
  } = r, l = o2 && !c, u = l || i2 ? [...le(e2) ? _e(e2) : e2.contextElement ? _e(e2.contextElement) : [], ..._e(t2)] : [];
  u.forEach((p) => {
    l && p.addEventListener("scroll", n2, {
      passive: true
    }), i2 && p.addEventListener("resize", n2);
  });
  let g = null;
  if (s2) {
    let p = true;
    g = new ResizeObserver(() => {
      p || n2(), p = false;
    }), le(e2) && !c && g.observe(e2), !le(e2) && e2.contextElement && !c && g.observe(e2.contextElement), g.observe(t2);
  }
  let h, f = c ? fe(e2) : null;
  c && m();
  function m() {
    const p = fe(e2);
    f && (p.x !== f.x || p.y !== f.y || p.width !== f.width || p.height !== f.height) && n2(), f = p, h = requestAnimationFrame(m);
  }
  return n2(), () => {
    var p;
    u.forEach((N) => {
      l && N.removeEventListener("scroll", n2), i2 && N.removeEventListener("resize", n2);
    }), (p = g) == null || p.disconnect(), g = null, c && cancelAnimationFrame(h);
  };
}
const rs = (e2, t2, n2) => Ni(e2, t2, {
  platform: es,
  ...n2
});
var Rt = typeof document < "u" ? react.exports.useLayoutEffect : react.exports.useEffect;
function tt(e2, t2) {
  if (e2 === t2)
    return true;
  if (typeof e2 != typeof t2)
    return false;
  if (typeof e2 == "function" && e2.toString() === t2.toString())
    return true;
  let n2, r, o2;
  if (e2 && t2 && typeof e2 == "object") {
    if (Array.isArray(e2)) {
      if (n2 = e2.length, n2 != t2.length)
        return false;
      for (r = n2; r-- !== 0; )
        if (!tt(e2[r], t2[r]))
          return false;
      return true;
    }
    if (o2 = Object.keys(e2), n2 = o2.length, n2 !== Object.keys(t2).length)
      return false;
    for (r = n2; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t2, o2[r]))
        return false;
    for (r = n2; r-- !== 0; ) {
      const i2 = o2[r];
      if (!(i2 === "_owner" && e2.$$typeof) && !tt(e2[i2], t2[i2]))
        return false;
    }
    return true;
  }
  return e2 !== e2 && t2 !== t2;
}
function ns(e2) {
  const t2 = react.exports.useRef(e2);
  return Rt(() => {
    t2.current = e2;
  }), t2;
}
function os(e2) {
  let {
    middleware: t2,
    placement: n2 = "bottom",
    strategy: r = "absolute",
    whileElementsMounted: o2
  } = e2 === void 0 ? {} : e2;
  const [i2, s2] = react.exports.useState({
    x: null,
    y: null,
    strategy: r,
    placement: n2,
    middlewareData: {}
  }), [c, l] = react.exports.useState(t2);
  tt(c == null ? void 0 : c.map((v) => {
    let {
      name: _,
      options: F
    } = v;
    return {
      name: _,
      options: F
    };
  }), t2 == null ? void 0 : t2.map((v) => {
    let {
      name: _,
      options: F
    } = v;
    return {
      name: _,
      options: F
    };
  })) || l(t2);
  const u = react.exports.useRef(null), g = react.exports.useRef(null), h = react.exports.useRef(null), f = react.exports.useRef(i2), m = ns(o2), p = react.exports.useCallback(() => {
    !u.current || !g.current || rs(u.current, g.current, {
      middleware: c,
      placement: n2,
      strategy: r
    }).then((v) => {
      N.current && !tt(f.current, v) && (f.current = v, reactDom.exports.flushSync(() => {
        s2(v);
      }));
    });
  }, [c, n2, r]);
  Rt(() => {
    N.current && p();
  }, [p]);
  const N = react.exports.useRef(false);
  Rt(() => (N.current = true, () => {
    N.current = false;
  }), []);
  const x = react.exports.useCallback(() => {
    if (typeof h.current == "function" && (h.current(), h.current = null), u.current && g.current)
      if (m.current) {
        const v = m.current(u.current, g.current, p);
        h.current = v;
      } else
        p();
  }, [p, m]), C = react.exports.useCallback((v) => {
    u.current = v, x();
  }, [x]), E = react.exports.useCallback((v) => {
    g.current = v, x();
  }, [x]), O = react.exports.useMemo(() => ({
    reference: u,
    floating: g
  }), []);
  return react.exports.useMemo(() => ({
    ...i2,
    update: p,
    refs: O,
    reference: C,
    floating: E
  }), [i2, p, O, C, E]);
}
var Se = typeof document < "u" ? react.exports.useLayoutEffect : react.exports.useEffect;
function as() {
  const e2 = /* @__PURE__ */ new Map();
  return {
    emit(t2, n2) {
      var r;
      (r = e2.get(t2)) == null || r.forEach((o2) => o2(n2));
    },
    on(t2, n2) {
      e2.set(t2, [...e2.get(t2) || [], n2]);
    },
    off(t2, n2) {
      e2.set(t2, (e2.get(t2) || []).filter((r) => r !== n2));
    }
  };
}
let vt = false, is = 0;
const yr = () => "floating-ui-" + is++;
function ss() {
  const [e2, t2] = react.exports.useState(() => vt ? yr() : void 0);
  return Se(() => {
    e2 == null && t2(yr());
  }, []), react.exports.useEffect(() => {
    vt || (vt = true);
  }, []), e2;
}
const vr = React$1[/* @__PURE__ */ "useId".toString()], wr = vr != null ? vr : ss, ls = /* @__PURE__ */ react.exports.createContext(null), cs = /* @__PURE__ */ react.exports.createContext(null), ds = () => {
  var e2, t2;
  return (e2 = (t2 = react.exports.useContext(ls)) == null ? void 0 : t2.id) != null ? e2 : null;
}, un = () => react.exports.useContext(cs);
function xe(e2) {
  var t2;
  return (t2 = e2 == null ? void 0 : e2.ownerDocument) != null ? t2 : document;
}
function fn(e2) {
  var t2;
  return (t2 = xe(e2).defaultView) != null ? t2 : window;
}
function Tt(e2) {
  return e2 ? e2 instanceof fn(e2).Element : false;
}
function _t(e2) {
  return e2 ? e2 instanceof fn(e2).HTMLElement : false;
}
const xr = React$1[/* @__PURE__ */ "useInsertionEffect".toString()];
function us(e2) {
  const t2 = react.exports.useRef(() => {
  });
  return xr ? xr(() => {
    t2.current = e2;
  }) : t2.current = e2, react.exports.useCallback(function() {
    for (var n2 = arguments.length, r = new Array(n2), o2 = 0; o2 < n2; o2++)
      r[o2] = arguments[o2];
    return t2.current == null ? void 0 : t2.current(...r);
  }, []);
}
function fs(e2) {
  let {
    open: t2 = false,
    onOpenChange: n2,
    whileElementsMounted: r,
    placement: o2,
    middleware: i2,
    strategy: s2,
    nodeId: c
  } = e2 === void 0 ? {} : e2;
  const [l, u] = react.exports.useState(null), g = un(), h = react.exports.useRef(null), f = react.exports.useRef({}), m = react.exports.useState(() => as())[0], p = os({
    placement: o2,
    middleware: i2,
    strategy: s2,
    whileElementsMounted: r
  }), N = us(n2), x = react.exports.useMemo(() => ({
    ...p.refs,
    domReference: h
  }), [p.refs]), C = react.exports.useMemo(() => ({
    ...p,
    refs: x,
    dataRef: f,
    nodeId: c,
    events: m,
    open: t2,
    onOpenChange: N,
    _: {
      domReference: l
    }
  }), [p, c, m, t2, N, x, l]);
  Se(() => {
    const v = g == null ? void 0 : g.nodesRef.current.find((_) => _.id === c);
    v && (v.context = C);
  });
  const {
    reference: E
  } = p, O = react.exports.useCallback((v) => {
    (Tt(v) || v === null) && (C.refs.domReference.current = v, u(v)), E(v);
  }, [E, C.refs]);
  return react.exports.useMemo(() => ({
    ...p,
    context: C,
    refs: x,
    reference: O
  }), [p, x, C, O]);
}
function wt(e2, t2, n2) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n2 === "floating" && {
      tabIndex: -1
    },
    ...e2,
    ...t2.map((o2) => o2 ? o2[n2] : null).concat(e2).reduce((o2, i2) => (i2 && Object.entries(i2).forEach((s2) => {
      let [c, l] = s2;
      if (c.indexOf("on") === 0) {
        if (r.has(c) || r.set(c, []), typeof l == "function") {
          var u;
          (u = r.get(c)) == null || u.push(l), o2[c] = function() {
            for (var g, h = arguments.length, f = new Array(h), m = 0; m < h; m++)
              f[m] = arguments[m];
            (g = r.get(c)) == null || g.forEach((p) => p(...f));
          };
        }
      } else
        o2[c] = l;
    }), o2), {})
  };
}
const gs = function(e2) {
  return e2 === void 0 && (e2 = []), {
    getReferenceProps: (t2) => wt(t2, e2, "reference"),
    getFloatingProps: (t2) => wt(t2, e2, "floating"),
    getItemProps: (t2) => wt(t2, e2, "item")
  };
}, hs = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function ms(e2) {
  return _t(e2) && e2.matches(hs);
}
function kr(e2) {
  const t2 = react.exports.useRef(e2);
  return Se(() => {
    t2.current = e2;
  }), t2;
}
function ps(e2) {
  const t2 = react.exports.useRef();
  return Se(() => {
    t2.current = e2;
  }, [e2]), t2.current;
}
function xt(e2, t2, n2) {
  return n2 && n2 !== "mouse" ? 0 : typeof e2 == "number" ? e2 : e2 == null ? void 0 : e2[t2];
}
const bs = function(e2, t2) {
  let {
    enabled: n2 = true,
    delay: r = 0,
    handleClose: o2 = null,
    mouseOnly: i2 = false,
    restMs: s2 = 0,
    move: c = true
  } = t2 === void 0 ? {} : t2;
  const {
    open: l,
    onOpenChange: u,
    dataRef: g,
    events: h,
    refs: f,
    _: m
  } = e2, p = un(), N = ds(), x = kr(o2), C = kr(r), E = ps(l), O = react.exports.useRef(), v = react.exports.useRef(), _ = react.exports.useRef(), F = react.exports.useRef(), W = react.exports.useRef(true), B = react.exports.useRef(false), D = react.exports.useCallback(() => {
    var L;
    const j = (L = g.current.openEvent) == null ? void 0 : L.type;
    return (j == null ? void 0 : j.includes("mouse")) && j !== "mousedown";
  }, [g]);
  react.exports.useEffect(() => {
    if (!n2)
      return;
    function L() {
      clearTimeout(v.current), clearTimeout(F.current), W.current = true;
    }
    return h.on("dismiss", L), () => {
      h.off("dismiss", L);
    };
  }, [n2, h, f]), react.exports.useEffect(() => {
    if (!n2 || !x.current)
      return;
    function L() {
      D() && u(false);
    }
    const j = xe(f.floating.current).documentElement;
    return j.addEventListener("mouseleave", L), () => {
      j.removeEventListener("mouseleave", L);
    };
  }, [f, u, n2, x, g, D]);
  const U = react.exports.useCallback(function(L) {
    L === void 0 && (L = true);
    const j = xt(C.current, "close", O.current);
    j && !_.current ? (clearTimeout(v.current), v.current = setTimeout(() => u(false), j)) : L && (clearTimeout(v.current), u(false));
  }, [C, u]), Y = react.exports.useCallback(() => {
    _.current && (xe(f.floating.current).removeEventListener("pointermove", _.current), _.current = void 0);
  }, [f]), G = react.exports.useCallback(() => {
    xe(f.floating.current).body.style.pointerEvents = "", B.current = false;
  }, [f]);
  if (react.exports.useEffect(() => {
    if (!n2)
      return;
    function L() {
      return g.current.openEvent ? ["click", "mousedown"].includes(g.current.openEvent.type) : false;
    }
    function j(re) {
      if (clearTimeout(v.current), W.current = false, i2 && O.current !== "mouse" || s2 > 0 && xt(C.current, "open") === 0)
        return;
      g.current.openEvent = re;
      const me = xt(C.current, "open", O.current);
      me ? v.current = setTimeout(() => {
        u(true);
      }, me) : u(true);
    }
    function ee(re) {
      if (L())
        return;
      const me = xe(f.floating.current);
      if (clearTimeout(F.current), x.current) {
        clearTimeout(v.current), _.current && me.removeEventListener("pointermove", _.current), _.current = x.current({
          ...e2,
          tree: p,
          x: re.clientX,
          y: re.clientY,
          onClose() {
            G(), Y(), U();
          }
        }), me.addEventListener("pointermove", _.current);
        return;
      }
      U();
    }
    function te(re) {
      L() || x.current == null || x.current({
        ...e2,
        tree: p,
        x: re.clientX,
        y: re.clientY,
        leave: true,
        onClose() {
          G(), Y(), U();
        }
      })(re);
    }
    const ae = f.floating.current, K = f.domReference.current;
    if (Tt(K))
      return l && K.addEventListener("mouseleave", te), ae == null || ae.addEventListener("mouseleave", te), c && K.addEventListener("mousemove", j, {
        once: true
      }), K.addEventListener("mouseenter", j), K.addEventListener("mouseleave", ee), () => {
        l && K.removeEventListener("mouseleave", te), ae == null || ae.removeEventListener("mouseleave", te), c && K.removeEventListener("mousemove", j), K.removeEventListener("mouseenter", j), K.removeEventListener("mouseleave", ee);
      };
  }, [
    m.domReference,
    n2,
    e2,
    i2,
    s2,
    c,
    U,
    Y,
    G,
    u,
    l,
    p,
    f,
    C,
    x,
    g
  ]), Se(() => {
    if (!!n2 && l && x.current && x.current.__options.blockPointerEvents && D()) {
      xe(f.floating.current).body.style.pointerEvents = "none", B.current = true;
      const ee = f.domReference.current, te = f.floating.current;
      if (Tt(ee) && te) {
        var L, j;
        const ae = p == null || (L = p.nodesRef.current.find((K) => K.id === N)) == null || (j = L.context) == null ? void 0 : j.refs.floating.current;
        return ae && (ae.style.pointerEvents = ""), ee.style.pointerEvents = "auto", te.style.pointerEvents = "auto", () => {
          ee.style.pointerEvents = "", te.style.pointerEvents = "";
        };
      }
    }
  }, [n2, l, N, f, p, x, g, D]), Se(() => {
    E && !l && (O.current = void 0, Y(), G());
  }), react.exports.useEffect(() => () => {
    Y(), clearTimeout(v.current), clearTimeout(F.current), B.current && G();
  }, [n2, Y, G]), !n2)
    return {};
  function H(L) {
    O.current = L.pointerType;
  }
  return {
    reference: {
      onPointerDown: H,
      onPointerEnter: H,
      onMouseMove() {
        l || s2 === 0 || (clearTimeout(F.current), F.current = setTimeout(() => {
          W.current || u(true);
        }, s2));
      }
    },
    floating: {
      onMouseEnter() {
        clearTimeout(v.current);
      },
      onMouseLeave() {
        U(false);
      }
    }
  };
}, ys = function(e2, t2) {
  let {
    open: n2
  } = e2, {
    enabled: r = true,
    role: o2 = "dialog"
  } = t2 === void 0 ? {} : t2;
  const i2 = wr(), s2 = wr(), c = {
    id: i2,
    role: o2
  };
  return r ? o2 === "tooltip" ? {
    reference: {
      "aria-describedby": n2 ? i2 : void 0
    },
    floating: c
  } : {
    reference: {
      "aria-expanded": n2 ? "true" : "false",
      "aria-haspopup": o2 === "alertdialog" ? "dialog" : o2,
      "aria-controls": n2 ? i2 : void 0,
      ...o2 === "listbox" && {
        role: "combobox"
      },
      ...o2 === "menu" && {
        id: s2
      }
    },
    floating: {
      ...c,
      ...o2 === "menu" && {
        "aria-labelledby": s2
      }
    }
  } : {};
};
function Cr(e2) {
  return _t(e2.target) && e2.target.tagName === "BUTTON";
}
const vs = function(e2, t2) {
  let {
    open: n2,
    onOpenChange: r,
    dataRef: o2,
    refs: i2
  } = e2, {
    enabled: s2 = true,
    pointerDown: c = false,
    toggle: l = true,
    ignoreMouse: u = false,
    keyboardHandlers: g = true
  } = t2 === void 0 ? {} : t2;
  const h = react.exports.useRef();
  function f() {
    return ms(i2.domReference.current);
  }
  return s2 ? {
    reference: {
      onPointerDown(m) {
        h.current = m.pointerType;
      },
      onMouseDown(m) {
        m.button === 0 && (h.current === "mouse" && u || !c || (n2 ? l && (o2.current.openEvent ? o2.current.openEvent.type === "mousedown" : true) && r(false) : r(true), o2.current.openEvent = m.nativeEvent));
      },
      onClick(m) {
        if (c && h.current) {
          h.current = void 0;
          return;
        }
        h.current === "mouse" && u || (n2 ? l && (o2.current.openEvent ? o2.current.openEvent.type === "click" : true) && r(false) : r(true), o2.current.openEvent = m.nativeEvent);
      },
      onKeyDown(m) {
        h.current = void 0, g && (Cr(m) || (m.key === " " && !f() && m.preventDefault(), m.key === "Enter" && (n2 ? l && r(false) : r(true))));
      },
      onKeyUp(m) {
        !g || Cr(m) || f() || m.key === " " && (n2 ? l && r(false) : r(true));
      }
    }
  } : {};
}, ws = function(e2, t2) {
  let {
    open: n2,
    onOpenChange: r,
    dataRef: o2,
    refs: i2,
    events: s2
  } = e2, {
    enabled: c = true,
    keyboardOnly: l = true
  } = t2 === void 0 ? {} : t2;
  const u = react.exports.useRef(""), g = react.exports.useRef(false), h = react.exports.useRef();
  return react.exports.useEffect(() => {
    var f;
    if (!c)
      return;
    const p = (f = xe(i2.floating.current).defaultView) != null ? f : window;
    function N() {
      !n2 && _t(i2.domReference.current) && i2.domReference.current.blur();
    }
    return p.addEventListener("blur", N), () => {
      p.removeEventListener("blur", N);
    };
  }, [i2, n2, c]), react.exports.useEffect(() => {
    if (!c)
      return;
    function f() {
      g.current = true;
    }
    return s2.on("dismiss", f), () => {
      s2.off("dismiss", f);
    };
  }, [s2, c]), react.exports.useEffect(() => () => {
    clearTimeout(h.current);
  }, []), c ? {
    reference: {
      onPointerDown(f) {
        let {
          pointerType: m
        } = f;
        u.current = m, g.current = !!(m && l);
      },
      onPointerLeave() {
        g.current = false;
      },
      onFocus(f) {
        var m, p, N;
        g.current || f.type === "focus" && ((m = o2.current.openEvent) == null ? void 0 : m.type) === "mousedown" && (p = i2.domReference.current) != null && p.contains((N = o2.current.openEvent) == null ? void 0 : N.target) || (o2.current.openEvent = f.nativeEvent, r(true));
      },
      onBlur(f) {
        const m = f.relatedTarget;
        h.current = setTimeout(() => {
          var p, N;
          (p = i2.floating.current) != null && p.contains(m) || (N = i2.domReference.current) != null && N.contains(m) || (g.current = false, r(false));
        });
      }
    }
  } : {};
}, xs = ({ arrowRef: e2, placement: t2 }) => {
  const n2 = [];
  return n2.push($i(8)), n2.push(t2 === "auto" ? Ii() : ji()), n2.push(Bi({ padding: 8 })), e2.current && n2.push(Si({ element: e2.current })), n2;
}, ks = ({ placement: e2 }) => e2 === "auto" ? void 0 : e2, Cs = ({ placement: e2 }) => ({
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
})[e2.split("-")[0]], gn = ({ children: e2, content: t2, theme: n2, animation: r = "duration-300", arrow: o2 = true, placement: i2 = "top", style: s2 = "dark", trigger: c = "hover", closeRequestKey: l, ...u }) => {
  const g = P(u), h = react.exports.useRef(null), [f, m] = react.exports.useState(false), p = fs({
    middleware: xs({ arrowRef: h, placement: i2 }),
    onOpenChange: m,
    open: f,
    placement: ks({ placement: i2 })
  }), { context: N, floating: x, middlewareData: { arrow: { x: C, y: E } = {} }, reference: O, refs: v, strategy: _, update: F, x: W, y: B } = p, { getFloatingProps: D, getReferenceProps: U } = gs([
    vs(N, { enabled: c === "click" }),
    ws(N),
    bs(N, { enabled: c === "hover" }),
    ys(N, { role: "tooltip" })
  ]);
  return react.exports.useEffect(() => {
    if (v.reference.current && v.floating.current && f)
      return ts(v.reference.current, v.floating.current, F);
  }, [f, v.floating, v.reference, F]), react.exports.useEffect(() => {
    l !== void 0 && m(false);
  }, [l]), b(J, { children: [a("div", { className: n2.target, ...U({ ref: O }), "data-testid": "flowbite-tooltip-target", children: e2 }), b("div", { "data-testid": "flowbite-tooltip", ...D({
    className: T(n2.base, r && `${n2.animation} ${r}`, !f && n2.hidden, n2.style[s2]),
    ref: x,
    style: {
      position: _,
      top: B != null ? B : " ",
      left: W != null ? W : " "
    },
    ...g
  }), children: [a("div", { className: n2.content, children: t2 }), o2 && a("div", { className: T(n2.arrow.base, {
    [n2.arrow.style.dark]: s2 === "dark",
    [n2.arrow.style.light]: s2 === "light",
    [n2.arrow.style.auto]: s2 === "auto"
  }), "data-testid": "flowbite-tooltip-arrow", ref: h, style: {
    top: E != null ? E : " ",
    left: C != null ? C : " ",
    right: " ",
    bottom: " ",
    [Cs({ placement: p.placement })]: n2.arrow.placement
  }, children: "\xA0" })] })] });
}, It = () => {
  const e2 = R().theme.dropdown.floating.divider;
  return a("div", { className: e2 });
}, hn = ({ children: e2, ...t2 }) => {
  const n2 = R().theme.dropdown.floating.header, r = P(t2);
  return b(J, { children: [a("div", { className: n2, ...r, children: e2 }), a(It, {})] });
}, At = ({ children: e2, onClick: t2, icon: n2 }) => {
  const r = R().theme.dropdown.floating.item;
  return b("li", { className: r.base, onClick: t2, children: [n2 && a(n2, { className: r.icon }), e2] });
}, Ns = {
  top: fi,
  right: zr,
  bottom: Br,
  left: ui
}, mn = ({ children: e2, ...t2 }) => {
  const n2 = R().theme.dropdown, r = P(t2), { placement: o2 = t2.inline ? "bottom-start" : "bottom", trigger: i2 = "click", label: s2, inline: c, floatingArrow: l = false, arrowIcon: u = true, ...g } = r, h = react.exports.useMemo(() => {
    var E;
    const [C] = o2.split("-");
    return (E = Ns[C]) != null ? E : Br;
  }, [o2]), [f, m] = react.exports.useState(void 0), p = (C) => React.isValidElement(C) ? C.type === At ? React.cloneElement(C, {
    onClick: () => {
      var E, O;
      (O = (E = C.props).onClick) == null || O.call(E), m(Ci());
    }
  }) : C.props.children && typeof C.props.children == "object" ? React.cloneElement(C, { children: react.exports.Children.map(C.props.children, p) }) : C : C, N = react.exports.useMemo(() => a("ul", { className: n2.content, children: react.exports.Children.map(e2, p) }), [e2, n2]), x = ({ children: C }) => c ? a("button", { className: n2.inlineWrapper, children: C }) : a(yi, { ...g, children: C });
  return a(gn, { content: N, style: "auto", animation: "duration-100", placement: o2, arrow: l, trigger: i2, theme: n2.floating, closeRequestKey: f, children: b(x, { children: [s2, u && a(h, { className: n2.arrowIcon })] }) });
};
mn.displayName = "Dropdown";
At.displayName = "Dropdown.Item";
hn.displayName = "Dropdown.Header";
It.displayName = "Dropdown.Divider";
Object.assign(mn, {
  Item: At,
  Header: hn,
  Divider: It
});
const pn = ({ alt: e2, children: t2, href: n2, name: r, src: o2 }) => {
  const i2 = R().theme.footer.brand;
  return a("div", { children: n2 ? b("a", { "data-testid": "flowbite-footer-brand", href: n2, className: i2.base, children: [a("img", { alt: e2, src: o2, className: i2.img }), a("span", { "data-testid": "flowbite-footer-brand-span", className: i2.span, children: r }), t2] }) : a("img", { alt: e2, "data-testid": "flowbite-footer-brand", src: o2, className: i2.img }) });
}, bn = ({ href: e2, by: t2, year: n2 }) => {
  const r = R().theme.footer.copyright;
  return a("div", { children: b("span", { className: r.base, "data-testid": "flowbite-footer-copyright", children: ["\xA9 ", n2, e2 ? a("a", { href: e2, className: r.href, children: t2 }) : a("span", { "data-testid": "flowbite-footer-copyright-span", className: r.span, children: t2 })] }) });
}, yn = () => {
  const e2 = R().theme.footer.divider;
  return a("hr", { "data-testid": "footer-divider", className: e2.base });
}, vn = ({ href: e2, ariaLabel: t2, icon: n2 }) => {
  const r = R().theme.footer.icon;
  return a("div", { children: e2 ? a("a", { "aria-label": t2, "data-testid": "flowbite-footer-icon", href: e2, className: r.base, children: a(n2, { className: r.size }) }) : a(n2, { "data-testid": "flowbite-footer-icon", className: r.size }) });
}, wn = ({ children: e2, href: t2 }) => {
  const n2 = R().theme.footer.groupLink.link;
  return a("li", { className: n2.base, children: a("a", { href: t2, className: n2.href, children: e2 }) });
}, xn = ({ children: e2, col: t2 = false }) => {
  const n2 = R().theme.footer.groupLink;
  return a("ul", { "data-testid": "footer-groupLink", className: T(n2.base, t2 && n2.col), children: e2 });
}, kn = ({ title: e2 }) => {
  const t2 = R().theme.footer.title;
  return a("h2", { "data-testid": "flowbite-footer-title", className: t2.base, children: e2 });
}, Cn = ({ children: e2, bgDark: t2 = false, container: n2 = false }) => {
  const r = R().theme.footer;
  return a("footer", { "data-testid": "flowbite-footer", className: T(r.base, t2 && r.bgDark, n2 && r.container), children: e2 });
};
Cn.displayName = "Footer";
bn.displayName = "Footer.Copyright";
wn.displayName = "Footer.Link";
pn.displayName = "Footer.Brand";
xn.displayName = "Footer.LinkGroup";
vn.displayName = "Footer.Icon";
kn.displayName = "Footer.Title";
yn.displayName = "Footer.Divider";
Object.assign(Cn, {
  Copyright: bn,
  Link: wn,
  LinkGroup: xn,
  Brand: pn,
  Icon: vn,
  Title: kn,
  Divider: yn
});
const Es = react.exports.forwardRef((e2, t2) => {
  const n2 = R().theme.formControls.checkbox, r = P(e2);
  return a("input", { ref: t2, className: n2.base, type: "checkbox", ...r });
});
Es.displayName = "Checkbox";
const at = ({ value: e2, children: t2, color: n2 = "default", ...r }) => {
  var s2;
  const o2 = R().theme.formControls.helperText, i2 = P(r);
  return a("p", { className: T(o2.base, o2.colors[n2]), ...i2, children: (s2 = e2 != null ? e2 : t2) != null ? s2 : "" });
}, Rs = react.exports.forwardRef(({ sizing: e2 = "md", helperText: t2, color: n2 = "gray", ...r }, o2) => {
  const i2 = R().theme.formControls.fileInput, s2 = P(r);
  return b(J, { children: [a("div", { className: i2.base, children: a("div", { className: i2.field.base, children: a("input", { className: T(i2.field.input.base, i2.field.input.colors[n2], i2.field.input.sizes[e2]), ...s2, type: "file", ref: o2 }) }) }), t2 && a(at, { color: n2, children: t2 })] });
});
Rs.displayName = "FileInput";
const Ts = react.exports.forwardRef((e2, t2) => {
  const n2 = R().theme.formControls.radio, r = P(e2);
  return a("input", { ref: t2, className: n2.base, type: "radio", ...r });
});
Ts.displayName = "Radio";
const Ss = react.exports.forwardRef(({ children: e2, sizing: t2 = "md", shadow: n2, helperText: r, addon: o2, icon: i2, color: s2 = "gray", ...c }, l) => {
  const u = R().theme.formControls.select, g = P(c);
  return b("div", { className: u.base, children: [o2 && a("span", { className: u.addon, children: o2 }), b("div", { className: u.field.base, children: [i2 && a("div", { className: u.field.icon.base, children: a(i2, { className: u.field.icon.svg }) }), a("select", { className: T(u.field.select.base, u.field.select.colors[s2], u.field.select.withIcon[i2 ? "on" : "off"], u.field.select.withAddon[o2 ? "on" : "off"], u.field.select.withShadow[n2 ? "on" : "off"], u.field.select.sizes[t2]), ...g, ref: l, children: e2 }), r && a(at, { color: s2, children: r })] })] });
});
Ss.displayName = "Select";
const Os = react.exports.forwardRef(({ shadow: e2, helperText: t2, color: n2 = "gray", ...r }, o2) => {
  const i2 = R().theme.formControls.textarea, s2 = P(r);
  return b(J, { children: [a("textarea", { ref: o2, className: T(i2.base, i2.colors[n2], i2.withShadow[e2 ? "on" : "off"]), ...s2 }), t2 && a(at, { color: n2, children: t2 })] });
});
Os.displayName = "Textarea";
const Ps = react.exports.forwardRef(({ sizing: e2 = "md", shadow: t2, helperText: n2, addon: r, icon: o2, color: i2 = "gray", ...s2 }, c) => {
  const l = R().theme.formControls.textInput, u = P(s2);
  return b(J, { children: [b("div", { className: l.base, children: [r && a("span", { className: l.addon, children: r }), b("div", { className: l.field.base, children: [o2 && a("div", { className: l.field.icon.base, children: a(o2, { className: l.field.icon.svg }) }), a("input", { className: T(l.field.input.base, l.field.input.colors[i2], l.field.input.withIcon[o2 ? "on" : "off"], l.field.input.withAddon[r ? "on" : "off"], l.field.input.withShadow[t2 ? "on" : "off"], l.field.input.sizes[e2]), ...u, ref: c })] })] }), n2 && a(at, { color: i2, children: n2 })] });
});
Ps.displayName = "TextInput";
const Nn = ({ active: e2, children: t2, href: n2, icon: r, onClick: o2, ...i2 }) => {
  const s2 = typeof n2 < "u", c = s2 ? "a" : "button", l = P(i2), u = R().theme.listGroup.item;
  return a("li", { children: b(c, { className: T(u.active[e2 ? "on" : "off"], u.base, u.href[s2 ? "on" : "off"]), href: n2, onClick: o2, type: s2 ? void 0 : "button", ...l, children: [r && a(r, { "aria-hidden": true, className: u.icon, "data-testid": "flowbite-list-group-item-icon" }), t2] }) });
}, En = ({ children: e2, ...t2 }) => {
  const n2 = P(t2), r = R().theme.listGroup.base;
  return a("ul", { className: r, ...n2, children: e2 });
};
En.displayName = "ListGroup";
Nn.displayName = "ListGroup.Item";
Object.assign(En, { Item: Nn });
const Rn = react.exports.createContext(void 0);
function jt() {
  const e2 = react.exports.useContext(Rn);
  if (!e2)
    throw new Error("useModalContext should be used within the ModalContext provider!");
  return e2;
}
const Tn = ({ children: e2, ...t2 }) => {
  const { popup: n2 } = jt(), r = R().theme.modal.body, o2 = P(t2);
  return a("div", { className: T(r.base, {
    [r.popup]: n2
  }), ...o2, children: e2 });
}, Sn = ({ children: e2, ...t2 }) => {
  const { popup: n2 } = jt(), r = R().theme.modal.footer, o2 = P(t2);
  return a("div", { className: T(r.base, {
    [r.popup]: !n2
  }), ...o2, children: e2 });
}, On = ({ children: e2, ...t2 }) => {
  const { popup: n2, onClose: r } = jt(), o2 = R().theme.modal.header, i2 = P(t2);
  return b("div", { className: T(o2.base, {
    [o2.popup]: n2
  }), ...i2, children: [a("h3", { className: o2.title, children: e2 }), a("button", { "aria-label": "Close", className: o2.close.base, type: "button", onClick: r, children: a(gi, { "aria-hidden": true, className: o2.close.icon }) })] });
}, Pn = ({ children: e2, show: t2, root: n2, popup: r, size: o2 = "2xl", position: i2 = "center", onClose: s2, ...c }) => {
  const [l, u] = react.exports.useState(n2), [g, h] = react.exports.useState(), f = R().theme.modal, m = P(c);
  return react.exports.useEffect(() => {
    l || u(document.body), g || h(document.createElement("div"));
  }, []), react.exports.useEffect(() => {
    if (!(!g || !l || !t2))
      return l.appendChild(g), () => {
        g && l.removeChild(g);
      };
  }, [g, l, t2]), g ? reactDom.exports.createPortal(a(Rn.Provider, { value: { popup: r, onClose: s2 }, children: a("div", { "aria-hidden": !t2, className: T(f.base, f.positions[i2], t2 ? f.show.on : f.show.off), "data-testid": "modal", role: "dialog", ...m, children: a("div", { className: T(f.content.base, f.sizes[o2]), children: a("div", { className: f.content.inner, children: e2 }) }) }) }), g) : null;
};
Pn.displayName = "Modal";
On.displayName = "Modal.Header";
Tn.displayName = "Modal.Body";
Sn.displayName = "Modal.Footer";
Object.assign(Pn, { Header: On, Body: Tn, Footer: Sn });
const Ln = ({ children: e2, href: t2, ...n2 }) => {
  const r = R().theme.navbar, o2 = P(n2);
  return a("a", { href: t2, className: r.brand, ...o2, children: e2 });
}, Mn = react.exports.createContext(void 0);
function _n() {
  const e2 = react.exports.useContext(Mn);
  if (!e2)
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  return e2;
}
const In = ({ children: e2, ...t2 }) => {
  const { isOpen: n2 } = _n(), r = R().theme.navbar.collapse, o2 = P(t2);
  return a("div", { className: T(r.base, r.hidden[n2 ? "off" : "on"]), "data-testid": "flowbite-navbar-collapse", ...o2, children: a("ul", { className: r.list, children: e2 }) });
}, An = ({ active: e2, disabled: t2, href: n2, children: r, ...o2 }) => {
  const i2 = R().theme.navbar.link, s2 = P(o2);
  return a("li", { children: a("a", { href: n2, className: T(i2.base, {
    [i2.active.on]: e2,
    [i2.active.off]: !e2 && !t2
  }, i2.disabled[t2 ? "on" : "off"]), ...s2, children: r }) });
};
function Ls(e2) {
  return ge({ tag: "svg", attr: { viewBox: "0 0 12 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" } }] })(e2);
}
const jn = ({ barIcon: e2 = Ls, ...t2 }) => {
  const { isOpen: n2, setIsOpen: r } = _n(), o2 = () => {
    r(!n2);
  }, i2 = R().theme.navbar.toggle, s2 = P(t2);
  return b("button", { className: i2.base, "data-testid": "flowbite-navbar-toggle", onClick: o2, ...s2, children: [a("span", { className: "sr-only", children: "Open main menu" }), a(e2, { className: i2.icon })] });
}, Fn = ({ children: e2, menuOpen: t2, fluid: n2 = false, rounded: r, border: o2, ...i2 }) => {
  const [s2, c] = react.exports.useState(t2), l = R().theme.navbar, u = P(i2);
  return a(Mn.Provider, { value: { isOpen: s2, setIsOpen: c }, children: a("nav", { className: T(l.base, l.bordered[o2 ? "on" : "off"], l.rounded[r ? "on" : "off"]), ...u, children: a("div", { className: T(l.inner.base, l.inner.fluid[n2 ? "on" : "off"]), children: e2 }) }) });
};
Fn.displayName = "Navbar";
Ln.displayName = "Navbar.Brand";
In.displayName = "Navbar.Collapse";
An.displayName = "Navbar.Link";
jn.displayName = "Navbar.Toggle";
Object.assign(Fn, {
  Brand: Ln,
  Collapse: In,
  Link: An,
  Toggle: jn
});
const $n = ({ percentFilled: e2 = 0, children: t2, ...n2 }) => {
  const r = R().theme.rating.advanced, o2 = P(n2);
  return b("div", { className: r.base, ...o2, children: [a("span", { className: r.label, children: t2 }), a("div", { className: r.progress.base, children: a("div", { className: r.progress.fill, "data-testid": "flowbite-rating-fill", style: { width: `${e2}%` } }) }), a("span", { className: r.progress.label, children: `${e2}%` })] });
}, Dn = react.exports.createContext(void 0);
function Ms() {
  const e2 = react.exports.useContext(Dn);
  if (!e2)
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  return e2;
}
const Bn = ({ filled: e2 = true, starIcon: t2 = ci }) => {
  const { size: n2 = "sm" } = Ms(), r = R().theme.rating.star;
  return a(t2, { className: T(r.sizes[n2], r[e2 ? "filled" : "empty"]), "data-testid": "flowbite-rating-star" });
}, zn = ({ children: e2, size: t2 = "sm", ...n2 }) => {
  const r = R().theme.rating, o2 = P(n2);
  return a(Dn.Provider, { value: { size: t2 }, children: a("div", { className: r.base, ...o2, children: e2 }) });
};
zn.displayName = "Rating";
Bn.displayName = "Rating.Star";
$n.displayName = "Rating.Advanced";
Object.assign(zn, {
  Star: Bn,
  Advanced: $n
});
const Ft = ({ animation: e2 = "duration-300", arrow: t2 = true, children: n2, content: r, placement: o2 = "top", style: i2 = "dark", trigger: s2 = "hover", ...c }) => {
  const l = R().theme.tooltip, u = P(c);
  return a(gn, { content: r, style: i2, animation: e2, placement: o2, arrow: t2, trigger: s2, theme: l, ...u, children: n2 });
}, Hn = react.exports.createContext(void 0);
function it() {
  const e2 = react.exports.useContext(Hn);
  if (!e2)
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  return e2;
}
const $t = react.exports.createContext(void 0);
function _s() {
  const e2 = react.exports.useContext($t);
  if (!e2)
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  return e2;
}
const Vn = ({ children: e2, icon: t2, label: n2, ...r }) => {
  const o2 = P(r), i2 = react.exports.useId(), { isCollapsed: s2 } = it(), [c, l] = react.exports.useState(false), u = R().theme.sidebar.collapse;
  return b(({ children: h }) => a("li", { children: s2 ? a(Ft, { content: n2, placement: "right", children: h }) : h }), { children: [b("button", { className: u.button, id: `flowbite-sidebar-collapse-${i2}`, onClick: () => l(!c), type: "button", ...o2, children: [t2 && a(t2, { "aria-hidden": true, className: T(u.icon.base, u.icon.open[c ? "on" : "off"]), "data-testid": "flowbite-sidebar-collapse-icon" }), s2 ? a("span", { className: "sr-only", children: n2 }) : b(J, { children: [a("span", { className: u.label.base, "data-testid": "flowbite-sidebar-collapse-label", children: n2 }), a(Dr, { "aria-hidden": true, className: u.label.icon })] })] }), a("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${i2}`, className: u.list, hidden: !c, children: a($t.Provider, { value: { isInsideCollapse: true }, children: e2 }) })] });
};
Vn.displayName = "Sidebar.Collapse";
const Un = ({ children: e2, color: t2 = "info", ...n2 }) => {
  const r = P(n2), { isCollapsed: o2 } = it(), i2 = R().theme.sidebar.cta;
  return a("div", { className: T(i2.base, i2.color[t2]), "data-testid": "sidebar-cta", hidden: o2, ...r, children: e2 });
};
Un.displayName = "Sidebar.CTA";
const Wn = ({ as: e2 = "a", children: t2, icon: n2, active: r, label: o2, labelColor: i2 = "info", ...s2 }) => {
  var N;
  const c = P(s2), l = react.exports.useId(), { isCollapsed: u } = it(), { isInsideCollapse: g } = _s(), h = R().theme.sidebar.item, f = ({ children: x }) => a("li", { children: u ? a(Ft, { content: a(m, { children: t2 }), placement: "right", children: x }) : x }), m = ({ children: x }) => a(p, { children: x }), p = ({ children: x }) => a("span", { className: T(h.content.base), "data-testid": "flowbite-sidebar-item-content", id: `flowbite-sidebar-item-${l}`, children: x });
  return a(f, { children: b(e2, { "aria-labelledby": `flowbite-sidebar-item-${l}`, className: T(h.base, r && h.active, !u && g && h.collapsed.insideCollapse), ...c, children: [n2 && a(n2, { "aria-hidden": true, className: T(h.icon.base, r && h.icon.active), "data-testid": "flowbite-sidebar-item-icon" }), u && !n2 && a("span", { className: h.collapsed.noIcon, children: (N = t2.charAt(0).toLocaleUpperCase()) != null ? N : "?" }), !u && a(p, { children: t2 }), !u && o2 && a(bi, { color: i2, "data-testid": "flowbite-sidebar-label", hidden: u, children: o2 })] }) });
};
Wn.displayName = "Sidebar.Item";
const Yn = ({ children: e2, ...t2 }) => {
  const n2 = P(t2), r = R().theme.sidebar.itemGroup;
  return a("ul", { className: r, "data-testid": "flowbite-sidebar-item-group", ...n2, children: a($t.Provider, { value: { isInsideCollapse: false }, children: e2 }) });
};
Yn.displayName = "Sidebar.ItemGroup";
const Gn = ({ children: e2, ...t2 }) => {
  const n2 = P(t2), r = R().theme.sidebar.items;
  return a("div", { className: r, "data-testid": "flowbite-sidebar-items", ...n2, children: e2 });
};
Gn.displayName = "Sidebar.Items";
const Zn = ({ children: e2, href: t2, img: n2, imgAlt: r = "", ...o2 }) => {
  const i2 = P(o2), s2 = react.exports.useId(), { isCollapsed: c } = it(), l = R().theme.sidebar.logo;
  return b("a", { "aria-labelledby": `flowbite-sidebar-logo-${s2}`, className: l.base, href: t2, ...i2, children: [a("img", { alt: r, className: l.img, src: n2 }), a("span", { className: l.collapsed[c ? "on" : "off"], id: `flowbite-sidebar-logo-${s2}`, children: e2 })] });
};
Zn.displayName = "Sidebar.Logo";
const Xn = ({ children: e2, collapseBehavior: t2 = "collapse", collapsed: n2 = false, ...r }) => {
  const o2 = P(r), i2 = R().theme.sidebar;
  return a(Hn.Provider, { value: { isCollapsed: n2 }, children: a("aside", { "aria-label": "Sidebar", className: T(i2.base, i2.collapsed[n2 ? "on" : "off"]), hidden: n2 && t2 === "hide", ...o2, children: a("div", { className: i2.inner, children: e2 }) }) });
};
Xn.displayName = "Sidebar";
Object.assign(Xn, {
  Collapse: Vn,
  CTA: Un,
  Item: Wn,
  Items: Gn,
  ItemGroup: Yn,
  Logo: Zn
});
const Kn = ({ children: e2, ...t2 }) => a("tbody", { ...t2, children: e2 }), qn = ({ children: e2, className: t2, ...n2 }) => a("td", { className: T("px-6 py-4", t2), ...n2, children: e2 }), Jn = react.exports.createContext(void 0);
function Is() {
  const e2 = react.exports.useContext(Jn);
  if (!e2)
    throw new Error("useTableContext should be used within the TableContext provider!");
  return e2;
}
const Qn = ({ children: e2, className: t2, ...n2 }) => a("thead", { className: T("bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400", t2), ...n2, children: a("tr", { children: e2 }) }), eo = ({ children: e2, className: t2, ...n2 }) => a("th", { className: T("px-6 py-3", t2), ...n2, children: e2 }), to = ({ children: e2, className: t2, ...n2 }) => {
  const { striped: r, hoverable: o2 } = Is();
  return a("tr", { "data-testid": "table-row-element", className: T({
    "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700": r,
    "hover:bg-gray-50 dark:hover:bg-gray-600": o2
  }, t2), ...n2, children: e2 });
}, ro = ({ children: e2, striped: t2, hoverable: n2, className: r, ...o2 }) => a("div", { "data-testid": "table-element", className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: a(Jn.Provider, { value: { striped: t2, hoverable: n2 }, children: a("table", { className: T("w-full text-left text-sm text-gray-500 dark:text-gray-400", r), ...o2, children: e2 }) }) });
ro.displayName = "Table";
Qn.displayName = "Table.Head";
Kn.displayName = "Table.Body";
to.displayName = "Table.Row";
qn.displayName = "Table.Cell";
eo.displayName = "Table.HeadCell";
Object.assign(ro, {
  Head: Qn,
  Body: Kn,
  Row: to,
  Cell: qn,
  HeadCell: eo
});
const no = ({ children: e2, className: t2, ...n2 }) => a("p", { className: T("mb-4 text-base font-normal text-gray-500 dark:text-gray-400", t2), ...n2, children: e2 }), oo = react.exports.createContext(void 0);
function Dt() {
  const e2 = react.exports.useContext(oo);
  if (!e2)
    throw new Error("useTimelineContext should be used within the TimelineContext providor!");
  return e2;
}
const ao = ({ children: e2, className: t2, ...n2 }) => {
  const { horizontal: r } = Dt();
  return a("div", { "data-testid": "timeline-content", className: T({ "mt-3 sm:pr-8": r }, t2), ...n2, children: e2 });
}, io = ({ children: e2, className: t2, ...n2 }) => {
  const { horizontal: r } = Dt();
  return a("li", { "data-testid": "timeline-item", className: T({ "mb-10 ml-6": !r, "relative mb-6 sm:mb-0": r }, t2), ...n2, children: e2 });
}, so = ({ children: e2, className: t2, icon: n2, ...r }) => {
  const { horizontal: o2 } = Dt();
  return b("div", { "data-testid": "timeline-point", className: T({ "flex items-center": o2 }, t2), ...r, children: [e2, n2 ? a("span", { className: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900", children: a(n2, { "aria-hidden": true, className: "h-3 w-3 text-blue-600 dark:text-blue-300" }) }) : a("div", { className: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" }), o2 ? a("div", { className: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex" }) : ""] });
}, lo = ({ children: e2, className: t2, ...n2 }) => a("time", { className: T("mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500", t2), ...n2, children: e2 }), co = ({ children: e2, className: t2, as: n2 = "h3", ...r }) => a(n2, { className: T("text-lg font-semibold text-gray-900 dark:text-white", t2), ...r, children: e2 }), uo = ({ children: e2, horizontal: t2 }) => a(oo.Provider, { value: { horizontal: t2 }, children: a("ol", { "data-testid": "timeline-component", className: T({
  "relative border-l border-gray-200 dark:border-gray-700": !t2,
  "items-center sm:flex": t2
}), children: e2 }) });
uo.displayName = "Timeline";
io.displayName = "Timeline.Item";
so.displayName = "Timeline.Point";
ao.displayName = "Timeline.Content";
lo.displayName = "Timeline.Time";
co.displayName = "Timeline.Title";
no.displayName = "Timeline.Body";
Object.assign(uo, {
  Item: io,
  Point: so,
  Content: ao,
  Time: lo,
  Title: co,
  Body: no
});
const fo = react.exports.createContext(void 0);
function As() {
  const e2 = react.exports.useContext(fo);
  if (!e2)
    throw new Error("useToastContext should be used within the ToastContext provider!");
  return e2;
}
const go = ({ xIcon: e2 = di }) => {
  const { duration: t2, isClosed: n2, isRemoved: r, setIsClosed: o2, setIsRemoved: i2 } = As(), s2 = R().theme.toast.toggle;
  return a("button", { "aria-label": "Close", onClick: () => {
    o2(!n2), setTimeout(() => i2(!r), t2);
  }, type: "button", className: s2.base, children: a(e2, { className: s2.icon }) });
}, js = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
}, ho = ({ children: e2, duration: t2 = 300, ...n2 }) => {
  const [r, o2] = react.exports.useState(false), [i2, s2] = react.exports.useState(false), c = R().theme.toast, l = P(n2);
  return a(fo.Provider, { value: { duration: t2, isClosed: r, isRemoved: i2, setIsClosed: o2, setIsRemoved: s2 }, children: a("div", { "data-testid": "flowbite-toast", className: T(c.base, js[t2], { [c.closed]: r }, { [c.removed]: i2 }), ...l, children: e2 }) });
};
ho.displayName = "Toast";
go.displayName = "Toast.Toggle";
Object.assign(ho, {
  Toggle: go
});
const mo = react.exports.memo(function({
  tip: t2,
  children: n2
}) {
  return /* @__PURE__ */ a("div", {
    style: {
      cursor: "pointer",
      zIndex: 9
    },
    children: /* @__PURE__ */ a(Ft, {
      id: t2,
      content: /* @__PURE__ */ a("span", {
        className: "opacity-100 font-bold",
        children: t2
      }),
      placement: "right",
      animation: false,
      children: /* @__PURE__ */ a("div", {
        style: {
          width: 24,
          height: 24,
          padding: 3,
          maxWidth: 24,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ a(la, {
          fontSize: 32,
          color: "white"
        })
      })
    }, t2)
  });
});
function wl({
  value: e2,
  onChange: t2,
  name: n2,
  placeholder: r = "0.00",
  label: o2,
  prefix: i2,
  suffix: s2,
  className: c,
  inputClass: l,
  autoFocus: u = false,
  toolTip: g,
  ...h
}) {
  const m = (() => `bg-primary-800 p-3 block w-full rounded-md outline-none border border-transparent focus:border-brand focus-visible:border-brand sm:text-sm ${i2 ? "pl-7" : ""} ${s2 ? "pr-12" : ""} ${l}`)();
  return /* @__PURE__ */ b("div", {
    className: c,
    children: [o2 ? /* @__PURE__ */ b(nt, {
      htmlFor: n2,
      children: [o2, g ? /* @__PURE__ */ a(mo, {
        tip: g
      }) : null]
    }) : null, /* @__PURE__ */ b("div", {
      className: "relative rounded-md shadow-sm ",
      children: [/* @__PURE__ */ a("div", {
        className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        children: i2
      }), /* @__PURE__ */ a("input", {
        autoFocus: u,
        name: n2,
        id: n2,
        value: e2,
        placeholder: r,
        onChange: t2,
        className: m,
        ...h
      }), /* @__PURE__ */ a("div", {
        className: "absolute inset-y-0 right-3 flex items-center text-gray-300 pointer-events-none",
        children: s2
      })]
    })]
  });
}
function Fs(...e2) {
  return e2.filter(Boolean).join(" ");
}
function xl({
  options: e2,
  onChange: t2,
  label: n2,
  value: r,
  className: o2,
  inputClass: i2,
  toolTip: s2
}) {
  const [c, l] = react.exports.useState(r), u = react.exports.useCallback((f) => {
    t2 == null || t2(f.value), l(f);
  }, [t2]), h = (() => `text-white relative w-full h-[44px] cursor-default rounded-md bg-primary-800 py-2 pl-3 pr-10 text-left truncate outline-none border border-transparent focus:border-brand focus-visible:border-brand hover:cursor-pointer sm:text-sm ${i2}`)();
  return /* @__PURE__ */ a(pt, {
    value: c,
    onChange: u,
    children: ({
      open: f
    }) => /* @__PURE__ */ a(J, {
      children: /* @__PURE__ */ b("div", {
        className: `relative mt-1 w-56 ${o2}`,
        children: [n2 && /* @__PURE__ */ b("div", {
          className: "flex gap-3 items-end mb-1",
          children: [/* @__PURE__ */ a(nt, {
            className: "block",
            children: n2
          }), s2 ? /* @__PURE__ */ a(mo, {
            tip: s2
          }) : null]
        }), /* @__PURE__ */ b(pt.Button, {
          className: h,
          children: [c.label, /* @__PURE__ */ a("span", {
            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
            children: f ? /* @__PURE__ */ a(Ea, {
              className: "h-4 w-4 text-primary-400",
              "aria-hidden": "true"
            }) : /* @__PURE__ */ a(ka, {
              className: "h-4 w-4 text-primary-400",
              "aria-hidden": "true"
            })
          })]
        }), /* @__PURE__ */ a(pt.Options, {
          className: " absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-primary-700 py-1 text-white shadow-lg ring-1 border-none ring-black ring-opacity-5 outline-none sm:text-sm ",
          children: e2.map((m) => /* @__PURE__ */ a(pt.Option, {
            value: m,
            className: ({
              active: p
            }) => Fs(p ? "text-white bg-secondary-600" : "text-white", "relative cursor-pointer select-none py-2 pl-3 pr-9"),
            children: m.label
          }, m.label))
        })]
      })
    })
  });
}
function kl({
  enabled: e2,
  onChange: t2
}) {
  return /* @__PURE__ */ a(be$1, {
    checked: e2,
    onChange: t2,
    className: `${e2 ? "bg-green-600" : "bg-accent-900"}
        relative 
        inline-flex 
        h-[24px] 
        w-[48px] 
        shrink-0 
        cursor-pointer 
        rounded-full 
        border-2 
        border-transparent 
        transition-colors 
        duration-200 
        ease-in-out 
        focus:outline-none 
        focus-visible:ring-2  
        focus-visible:ring-white
        focus-visible:ring-opacity-75`,
    children: /* @__PURE__ */ a("span", {
      "aria-hidden": "true",
      className: `
          ${e2 ? "translate-x-[23px]" : "translate-x-0"}
          pointer-events-none 
          inline-block 
          h-[20px] 
          w-[20px] 
          transform 
          rounded-full
          bg-white 
          shadow-lg 
          ring-0 
          transition 
          duration-200 
          ease-in-out`
    })
  });
}
function Cl({
  tabs: e2
}) {
  const t2 = (r) => r === "buy" ? "border-b-green-500 text-green-400" : r === "sell" ? "border-b-red-500 text-red-400" : "border-b-secondary-500 text-secondary-400", n2 = (r, o2) => {
    const i2 = "w-full py-2.5 text-sm font-semibold leading-5 border-b-2 border-primary-700 outline-none rounded-t-2xl";
    if (r) {
      const s2 = t2(o2);
      return `${i2} ${s2}`;
    } else
      return `${i2} text-primary-300 hover:bg-white/[0.05]`;
  };
  return /* @__PURE__ */ a(qe.List, {
    className: "flex",
    children: e2.map((r) => /* @__PURE__ */ a(qe, {
      className: ({
        selected: o2
      }) => n2(o2, r.variant),
      onClick: r.onClick,
      children: r.label
    }, r.label))
  });
}
function Nl({
  max: e2,
  min: t2,
  value: n2,
  onChange: r
}) {
  return /* @__PURE__ */ a("div", {
    className: "Slider-root",
    children: /* @__PURE__ */ a(Slider, {
      dotStyle: {},
      railStyle: {
        backgroundColor: "dodgersecondary"
      },
      trackStyle: {
        backgroundColor: "rgba(255,255,255,0.5)"
      },
      handleStyle: {
        height: 25,
        width: 25,
        top: 0
      },
      activeDotStyle: {},
      value: n2,
      max: e2,
      min: t2,
      onChange: r
    })
  });
}
const El = react.exports.forwardRef(function({
  children: t2,
  trigger: n2
}, r) {
  const [o2, i2] = react.exports.useState(false), s2 = react.exports.useRef(null);
  return react.exports.useImperativeHandle(r, () => ({
    isOpen: o2,
    openModal() {
      i2(true);
    },
    closeModal() {
      i2(false);
    }
  }), [o2]), /* @__PURE__ */ b(J, {
    children: [n2 ? /* @__PURE__ */ a("div", {
      onClick: () => i2(true),
      children: n2
    }) : null, /* @__PURE__ */ a(We$1.Root, {
      show: o2,
      as: react.exports.Fragment,
      children: /* @__PURE__ */ b(gt, {
        as: "div",
        className: "relative z-10",
        initialFocus: s2,
        onClose: i2,
        children: [/* @__PURE__ */ a(We$1.Child, {
          as: react.exports.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ a("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          })
        }), /* @__PURE__ */ a("div", {
          className: "fixed inset-0 z-10 overflow-y-auto",
          children: /* @__PURE__ */ a("div", {
            className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
            children: /* @__PURE__ */ a(We$1.Child, {
              as: react.exports.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              enterTo: "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
              leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              children: /* @__PURE__ */ a(gt.Panel, {
                className: "relative transform overflow-hidden bg-transparent text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-4xl",
                children: t2
              })
            })
          })
        })]
      })
    })]
  });
});
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ge(e2, t2, n2) {
  let r = [], o2;
  return () => {
    let i2;
    n2.key && n2.debug != null && n2.debug() && (i2 = Date.now());
    const s2 = e2();
    if (!(s2.length !== r.length || s2.some((u, g) => r[g] !== u)))
      return o2;
    r = s2;
    let l;
    if (n2.key && n2.debug != null && n2.debug() && (l = Date.now()), o2 = t2(...s2), n2 == null || n2.onChange == null || n2.onChange(o2), n2.key && n2.debug != null && n2.debug()) {
      const u = Math.round((Date.now() - i2) * 100) / 100, g = Math.round((Date.now() - l) * 100) / 100, h = g / 16, f = (m, p) => {
        for (m = String(m); m.length < p; )
          m = " " + m;
        return m;
      };
      console.info("%c\u23F1 " + f(g, 5) + " /" + f(u, 5) + " ms", `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(` + Math.max(0, Math.min(120 - 120 * h, 120)) + "deg 100% 31%);", n2 == null ? void 0 : n2.key);
    }
    return o2;
  };
}
const $s = (e2) => e2, Ds = (e2) => {
  const t2 = Math.max(e2.startIndex - e2.overscan, 0), n2 = Math.min(e2.endIndex + e2.overscan, e2.count - 1), r = [];
  for (let o2 = t2; o2 <= n2; o2++)
    r.push(o2);
  return r;
}, Bs = (e2, t2) => {
  const n2 = new ResizeObserver((r) => {
    var o2, i2;
    t2({
      width: (o2 = r[0]) == null ? void 0 : o2.contentRect.width,
      height: (i2 = r[0]) == null ? void 0 : i2.contentRect.height
    });
  });
  if (!!e2.scrollElement)
    return t2(e2.scrollElement.getBoundingClientRect()), n2.observe(e2.scrollElement), () => {
      n2.unobserve(e2.scrollElement);
    };
}, Nr = {
  element: ["scrollLeft", "scrollTop"],
  window: ["scrollX", "scrollY"]
}, zs = (e2) => (t2, n2) => {
  if (!t2.scrollElement)
    return;
  const r = Nr[e2][0], o2 = Nr[e2][1];
  let i2 = t2.scrollElement[r], s2 = t2.scrollElement[o2];
  const c = () => {
    n2(t2.scrollElement[t2.options.horizontal ? r : o2]);
  };
  c();
  const l = (u) => {
    const g = u.currentTarget, h = g[r], f = g[o2];
    (t2.options.horizontal ? i2 - h : s2 - f) && c(), i2 = h, s2 = f;
  };
  return t2.scrollElement.addEventListener("scroll", l, {
    capture: false,
    passive: true
  }), () => {
    t2.scrollElement.removeEventListener("scroll", l);
  };
}, Hs = zs("element"), Vs = (e2, t2) => e2.getBoundingClientRect()[t2.options.horizontal ? "width" : "height"], Us = (e2, t2, n2) => {
  var r;
  (r = n2.scrollElement) == null || r.scrollTo == null || r.scrollTo({
    [n2.options.horizontal ? "left" : "top"]: e2,
    behavior: t2 ? "smooth" : void 0
  });
};
class Ws {
  constructor(t2) {
    var n2 = this;
    this.unsubs = [], this.scrollElement = null, this.measurementsCache = [], this.itemMeasurementsCache = {}, this.pendingMeasuredCacheIndexes = [], this.measureElementCache = {}, this.range = {
      startIndex: 0,
      endIndex: 0
    }, this.setOptions = (r) => {
      Object.entries(r).forEach((o2) => {
        let [i2, s2] = o2;
        typeof s2 > "u" && delete r[i2];
      }), this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: $s,
        rangeExtractor: Ds,
        enableSmoothScroll: true,
        onChange: () => {
        },
        measureElement: Vs,
        initialRect: {
          width: 0,
          height: 0
        },
        ...r
      };
    }, this.notify = () => {
      var r, o2;
      (r = (o2 = this.options).onChange) == null || r.call(o2, this);
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((r) => r()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      const r = this.options.getScrollElement();
      this.scrollElement !== r && (this.cleanup(), this.scrollElement = r, this._scrollToOffset(this.scrollOffset, false), this.unsubs.push(this.options.observeElementRect(this, (o2) => {
        this.scrollRect = o2, this.calculateRange();
      })), this.unsubs.push(this.options.observeElementOffset(this, (o2) => {
        this.scrollOffset = o2, this.calculateRange();
      })));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.getMeasurements = Ge(() => [this.options.count, this.options.paddingStart, this.options.getItemKey, this.itemMeasurementsCache], (r, o2, i2, s2) => {
      const c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [];
      const l = this.measurementsCache.slice(0, c);
      for (let u = c; u < r; u++) {
        const g = i2(u), h = s2[g], f = l[u - 1] ? l[u - 1].end : o2, m = typeof h == "number" ? h : this.options.estimateSize(u), p = f + m;
        l[u] = {
          index: u,
          start: f,
          size: m,
          end: p,
          key: g
        };
      }
      return this.measurementsCache = l, l;
    }, {
      key: false,
      debug: () => this.options.debug
    }), this.calculateRange = Ge(() => [this.getMeasurements(), this.getSize(), this.scrollOffset], (r, o2, i2) => {
      const s2 = Gs({
        measurements: r,
        outerSize: o2,
        scrollOffset: i2
      });
      return (s2.startIndex !== this.range.startIndex || s2.endIndex !== this.range.endIndex) && (this.range = s2, this.notify()), this.range;
    }, {
      key: false,
      debug: () => this.options.debug
    }), this.getIndexes = Ge(() => [this.options.rangeExtractor, this.range, this.options.overscan, this.options.count], (r, o2, i2, s2) => r({
      ...o2,
      overscan: i2,
      count: s2
    }), {
      key: false,
      debug: () => this.options.debug
    }), this.getVirtualItems = Ge(() => [this.getIndexes(), this.getMeasurements(), this.options.measureElement], (r, o2, i2) => {
      const s2 = (g) => (h) => {
        var f;
        const m = this.measurementsCache[g];
        if (!h)
          return;
        const p = i2(h, this), N = (f = this.itemMeasurementsCache[m.key]) != null ? f : m.size;
        p !== N && (m.start < this.scrollOffset && (this.destinationOffset || this._scrollToOffset(this.scrollOffset + (p - N), false)), this.pendingMeasuredCacheIndexes.push(g), this.itemMeasurementsCache = {
          ...this.itemMeasurementsCache,
          [m.key]: p
        }, this.notify());
      }, c = [], l = {};
      for (let g = 0, h = r.length; g < h; g++) {
        var u;
        const f = r[g], p = {
          ...o2[f],
          measureElement: l[f] = (u = this.measureElementCache[f]) != null ? u : s2(f)
        };
        c.push(p);
      }
      return this.measureElementCache = l, c;
    }, {
      key: false,
      debug: () => this.options.debug
    }), this.scrollToOffset = function(r, o2) {
      let {
        align: i2 = "start",
        smoothScroll: s2 = n2.options.enableSmoothScroll
      } = o2 === void 0 ? {} : o2;
      const c = n2.scrollOffset, l = n2.getSize();
      i2 === "auto" && (r <= c ? i2 = "start" : r >= c + l ? i2 = "end" : i2 = "start"), i2 === "start" ? n2._scrollToOffset(r, s2) : i2 === "end" ? n2._scrollToOffset(r - l, s2) : i2 === "center" && n2._scrollToOffset(r - l / 2, s2);
    }, this.scrollToIndex = function(r, o2) {
      let {
        align: i2 = "auto",
        smoothScroll: s2 = n2.options.enableSmoothScroll,
        ...c
      } = o2 === void 0 ? {} : o2;
      const l = n2.getMeasurements(), u = n2.scrollOffset, g = n2.getSize(), {
        count: h
      } = n2.options, f = l[Math.max(0, Math.min(r, h - 1))];
      if (!f)
        return;
      if (i2 === "auto")
        if (f.end >= u + g - n2.options.scrollPaddingEnd)
          i2 = "end";
        else if (f.start <= u + n2.options.scrollPaddingStart)
          i2 = "start";
        else
          return;
      const m = i2 === "end" ? f.end + n2.options.scrollPaddingEnd : f.start - n2.options.scrollPaddingStart;
      n2.scrollToOffset(m, {
        align: i2,
        smoothScroll: s2,
        ...c
      });
    }, this.getTotalSize = () => {
      var r;
      return (((r = this.getMeasurements()[this.options.count - 1]) == null ? void 0 : r.end) || this.options.paddingStart) + this.options.paddingEnd;
    }, this._scrollToOffset = (r, o2) => {
      clearTimeout(this.scrollCheckFrame), this.destinationOffset = r, this.options.scrollToFn(r, o2, this);
      let i2;
      const s2 = () => {
        let c = this.scrollOffset;
        this.scrollCheckFrame = i2 = setTimeout(() => {
          if (this.scrollCheckFrame === i2) {
            if (this.scrollOffset === c) {
              this.destinationOffset = void 0;
              return;
            }
            c = this.scrollOffset, s2();
          }
        }, 100);
      };
      s2();
    }, this.measure = () => {
      this.itemMeasurementsCache = {}, this.notify();
    }, this.setOptions(t2), this.scrollRect = this.options.initialRect, this.scrollOffset = this.options.initialOffset, this.calculateRange();
  }
}
const Ys = (e2, t2, n2, r) => {
  for (; e2 <= t2; ) {
    const o2 = (e2 + t2) / 2 | 0, i2 = n2(o2);
    if (i2 < r)
      e2 = o2 + 1;
    else if (i2 > r)
      t2 = o2 - 1;
    else
      return o2;
  }
  return e2 > 0 ? e2 - 1 : 0;
};
function Gs(e2) {
  let {
    measurements: t2,
    outerSize: n2,
    scrollOffset: r
  } = e2;
  const o2 = t2.length - 1, s2 = Ys(0, o2, (l) => t2[l].start, r);
  let c = s2;
  for (; c < o2 && t2[c].end < r + n2; )
    c++;
  return {
    startIndex: s2,
    endIndex: c
  };
}
const Zs = typeof window < "u" ? react.exports.useLayoutEffect : react.exports.useEffect;
function Xs(e2) {
  const t2 = react.exports.useReducer(() => ({}), {})[1], n2 = {
    ...e2,
    onChange: (o2) => {
      t2(), e2.onChange == null || e2.onChange(o2);
    }
  }, [r] = react.exports.useState(() => new Ws(n2));
  return r.setOptions(n2), react.exports.useEffect(() => r._didMount(), []), Zs(() => r._willUpdate()), r;
}
function Ks(e2) {
  return Xs({
    observeElementRect: Bs,
    observeElementOffset: Hs,
    scrollToFn: Us,
    ...e2
  });
}
function qs({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      fillRule: "evenodd",
      d: "M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z",
      clipRule: "evenodd"
    })]
  });
}
const Js = react.exports.forwardRef(qs), Qs = Js;
function el({
  title: e2,
  titleId: t2,
  ...n2
}, r) {
  return /* @__PURE__ */ b("svg", {
    ...Object.assign({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ref: r,
      "aria-labelledby": t2
    }, n2),
    children: [e2 ? /* @__PURE__ */ a("title", {
      id: t2,
      children: e2
    }) : null, /* @__PURE__ */ a("path", {
      fillRule: "evenodd",
      d: "M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z",
      clipRule: "evenodd"
    })]
  });
}
const tl = react.exports.forwardRef(el), rl = tl;
function Rl({
  data: e2,
  columns: t2,
  customRowRender: n2,
  virtualizeOptions: r,
  className: o2,
  loading: i2,
  error: s2,
  noData: c,
  initialScrollIdx: l
}) {
  const [u, g] = react.exports.useState([]), h = useReactTable({
    columns: t2,
    data: e2,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: g,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: u
    }
  }), f = react.exports.useRef(null), {
    rows: m
  } = h.getRowModel(), p = Ks(r != null ? r : {
    getScrollElement: () => f.current,
    count: m.length,
    estimateSize: () => m.length,
    overscan: 10
  }), {
    getVirtualItems: N,
    getTotalSize: x,
    scrollToIndex: C
  } = p, E = N();
  return react.exports.useEffect(() => {
    l && C(l);
  }, [l, C]), x(), /* @__PURE__ */ a(J, {
    children: i2 ? /* @__PURE__ */ a(Or, {
      variant: "table"
    }) : s2 ? /* @__PURE__ */ a(Ir, {
      title: "Error",
      message: "Uh Oh. Please try again.",
      variant: "error",
      details: s2
    }) : e2.length === 0 && c ? c : e2.length === 0 ? null : /* @__PURE__ */ b("table", {
      className: `border-collapse table-auto max-w-full w-full text-sm capitalize relative ${o2}`,
      ref: f,
      children: [/* @__PURE__ */ a("thead", {
        children: h.getHeaderGroups().map((O) => /* @__PURE__ */ a("tr", {
          children: O.headers.map((v) => /* @__PURE__ */ a("th", {
            onClick: v.column.getToggleSortingHandler(),
            className: "border-b dark:border-primary-600 font-medium pr-2 pl-4 pt-3 pb-3 text-primary-400 dark:text-primary-200 text-left",
            children: /* @__PURE__ */ b(nt, {
              className: "mb-0",
              children: [flexRender(v.column.columnDef.header, v.getContext()), v.column.getIsSorted() ? v.column.getIsSorted() === "desc" ? /* @__PURE__ */ a("span", {
                className: "w-3 h-3 ml-3 text-brand inline-block",
                children: /* @__PURE__ */ a(Qs, {})
              }) : /* @__PURE__ */ a("span", {
                className: "w-3 h-3 ml-3 text-brand inline-block",
                children: /* @__PURE__ */ a(rl, {})
              }) : null]
            })
          }, v.id))
        }, O.id))
      }), /* @__PURE__ */ a("tbody", {
        children: E.map((O) => {
          var _;
          const v = m[O == null ? void 0 : O.index];
          return v ? (_ = n2 == null ? void 0 : n2(v)) != null ? _ : /* @__PURE__ */ a("tr", {
            children: v ? v.getVisibleCells().map((F) => /* @__PURE__ */ a("td", {
              className: "border-b border-primary-100 dark:border-primary-700 p-3 pl-4 text-primary-500 dark:text-primary-200 text-left",
              children: flexRender(F.column.columnDef.cell, F.getContext())
            }, F.id)) : /* @__PURE__ */ a("td", {
              className: "border-b border-primary-100 dark:border-primary-700 p-3 pl-4 text-primary-500 dark:text-primary-200 text-left",
              children: " "
            }, O.index)
          }, v == null ? void 0 : v.id) : null;
        })
      })]
    })
  });
}
function SwapDetailsView({
  minReceived,
  networkFee,
  outputCoin,
  priceImpact,
  expectedOutput
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "w-full mt-5",
    children: /* @__PURE__ */ jsx(ul, {
      summary: /* @__PURE__ */ jsx("div", {
        children: "Swap Details"
      }),
      content: /* @__PURE__ */ jsxs(Aa, {
        className: "gap-2",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex justify-between mb-2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-primary-100",
            children: "Expected Output"
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-primary-100 font-bold",
            children: [expectedOutput == null ? void 0 : expectedOutput.toLocaleString(), " ", outputCoin == null ? void 0 : outputCoin.symbol, " "]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between mb-2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-primary-100",
            children: "Price Impact"
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-primary-100 font-bold",
            children: [priceImpact == null ? void 0 : priceImpact.toLocaleString(), "%"]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between mb-2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-primary-500",
            children: "Minimum received after slippage"
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-primary-500 font-bold",
            children: [minReceived == null ? void 0 : minReceived.toLocaleString(), " ", outputCoin == null ? void 0 : outputCoin.symbol]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between mb-2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-primary-500",
            children: "Protocol Fee Dollars"
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-primary-500 font-bold",
            children: ["~", networkFee == null ? void 0 : networkFee.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })]
          })]
        })]
      })
    })
  });
}
function SwapDetailsContainer(props) {
  return /* @__PURE__ */ jsx(SwapDetailsView, {
    ...props
  });
}
const AppStatsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "AppStats"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "summaryMetrics"
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "dollarTVL"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "dollarVolume24H"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "dollarVolume7D"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "transactions24H"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "transactions7D"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "users24H"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "users7D"
            }
          }]
        }
      }]
    }
  }]
};
function AppStatsView({
  stats,
  loading
}) {
  const appTitle = window.appTitle;
  return /* @__PURE__ */ jsx(Fragment, {
    children: loading ? /* @__PURE__ */ jsxs(Aa, {
      className: "w-auto self-start my-8 w-[500px]",
      padding: 0,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-2xl p-4",
        children: [appTitle, " Stats"]
      }), /* @__PURE__ */ jsx(Or, {
        variant: "table"
      })]
    }) : /* @__PURE__ */ jsxs(Aa, {
      className: "w-auto self-start my-8 w-[500px]",
      padding: 0,
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-2xl px-4 pt-4",
        children: [appTitle, " Stats"]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-full p-4 border-b border-b-primary-700",
        children: /* @__PURE__ */ jsx(vl, {
          title: "Total Value Locked",
          value: `${stats == null ? void 0 : stats.dollarTVL.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}`,
          variant: "card"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "w-full p-4 border-b border-b-primary-700",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-lg mb-2",
          children: "Volume"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center gap-2",
          children: [/* @__PURE__ */ jsx(vl, {
            title: "24H Volume",
            value: `${stats == null ? void 0 : stats.dollarVolume24H.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}`,
            variant: "card",
            className: "w-full"
          }), /* @__PURE__ */ jsx(vl, {
            title: "7D Volume",
            value: `${stats == null ? void 0 : stats.dollarVolume7D.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}`,
            variant: "card",
            className: "w-full"
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "w-full p-4 border-b border-b-primary-700",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-lg mb-2",
          children: "Transactions"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex gap-2",
          children: [/* @__PURE__ */ jsx(vl, {
            title: "24H Transactions ",
            value: `${stats == null ? void 0 : stats.transactions24H.toLocaleString()}`,
            variant: "card",
            className: "w-full"
          }), /* @__PURE__ */ jsx(vl, {
            title: "7D Transactions ",
            value: `${stats == null ? void 0 : stats.transactions7D.toLocaleString()}`,
            variant: "card",
            className: "w-full"
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "w-full p-4",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-lg mb-2",
          children: "Users"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center gap-2",
          children: [/* @__PURE__ */ jsx(vl, {
            title: "24H Users",
            value: `${stats == null ? void 0 : stats.users24H.toLocaleString()}`,
            variant: "card",
            className: "w-full"
          }), /* @__PURE__ */ jsx(vl, {
            title: "7D Users",
            value: `${stats == null ? void 0 : stats.users7D.toLocaleString()}`,
            variant: "card",
            className: "w-full"
          })]
        })]
      })]
    })
  });
}
function AppStatsContainer({}) {
  var _a2;
  const statsQuery = useQuery(AppStatsDocument);
  const stats = (_a2 = statsQuery.data) == null ? void 0 : _a2.summaryMetrics;
  return /* @__PURE__ */ jsx(AppStatsView, {
    stats,
    loading: statsQuery.loading
  });
}
const LastTradePriceDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "LastTradePrice"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MarketInput"
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "lastTradePrice"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "price"
            }
          }]
        }
      }]
    }
  }]
};
function useLastTradePrice(marketInputs) {
  const ltp = useSubscription(LastTradePriceDocument, {
    variables: {
      marketInputs: marketInputs.filter((obj) => Object.values(obj).find((x) => Boolean(x)))
    }
  });
  return ltp;
}
const CoinQueryDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "CoinQuery"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "coins"
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "decimals"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "symbol"
            }
          }]
        }
      }]
    }
  }]
};
function useCoins() {
  const poolCoins = useQuery(CoinQueryDocument);
  return poolCoins;
}
const CoinXYParamCtx = react.exports.createContext({
  firstCoin: null,
  secondCoin: null,
  setFirstCoin() {
  },
  setSecondCoin() {
  },
  onFirstCoinSelect() {
  },
  onSecondCoinSelect() {
  },
  coins: []
});
const CoinXYParamCtxProvider = ({
  children
}) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j;
  const {
    params,
    setParams
  } = hl();
  const coinsQuery = useCoins();
  const coins = (_b = (_a2 = coinsQuery.data) == null ? void 0 : _a2.coins) != null ? _b : [];
  const defaultCoinX = (_c = coins == null ? void 0 : coins[0]) == null ? void 0 : _c.coinType;
  const defaultCoinY = (_d = coins == null ? void 0 : coins[1]) == null ? void 0 : _d.coinType;
  const coinx = (_e2 = params.get("coinx")) != null ? _e2 : defaultCoinX;
  const coiny = (_f = params.get("coiny")) != null ? _f : defaultCoinY;
  const [firstCoin, setFirstCoin] = react.exports.useState(null);
  const [secondCoin, setSecondCoin] = react.exports.useState(null);
  react.exports.useEffect(() => {
    var _a3;
    if (!firstCoin) {
      setFirstCoin((_a3 = coins.find((c) => c.coinType === coinx)) != null ? _a3 : null);
    }
  }, [coinx, coins, firstCoin]);
  react.exports.useEffect(() => {
    var _a3;
    if (!secondCoin) {
      setSecondCoin((_a3 = coins.find((c) => c.coinType === coiny)) != null ? _a3 : null);
    }
  }, [coinx, coins, secondCoin]);
  react.exports.useEffect(() => {
    if ((firstCoin == null ? void 0 : firstCoin.coinType) && firstCoin.coinType !== coinx) {
      params.set("coinx", firstCoin == null ? void 0 : firstCoin.coinType);
      setParams(params);
    }
  }, [firstCoin, coinx, setParams, params]);
  react.exports.useEffect(() => {
    if ((secondCoin == null ? void 0 : secondCoin.coinType) && secondCoin.coinType !== coiny) {
      params.set("coiny", secondCoin == null ? void 0 : secondCoin.coinType);
      setParams(params);
    }
  }, [secondCoin, coiny, setParams, params]);
  const onFirstCoinSelect = (coin) => {
    setFirstCoin(coin);
    params.set("coinx", coin.coinType);
    setParams(params);
  };
  const onSecondCoinSelect = (coin) => {
    setSecondCoin(coin);
    params.set("coiny", coin.coinType);
    setParams(params);
  };
  const priceQuery = useLastTradePrice([{
    baseCoinType: (_g = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _g : "",
    quoteCoinType: (_h = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _h : ""
  }]);
  return /* @__PURE__ */ jsx(CoinXYParamCtx.Provider, {
    value: {
      firstCoin,
      secondCoin,
      setFirstCoin,
      setSecondCoin,
      onFirstCoinSelect,
      onSecondCoinSelect,
      coins,
      lastTradePrice: (_j = (_i2 = priceQuery.data) == null ? void 0 : _i2.lastTradePrice) == null ? void 0 : _j.price
    },
    children
  });
};
function useCoinXYParamState() {
  const ctx = react.exports.useContext(CoinXYParamCtx);
  return ctx;
}
const PositionsQueryDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "PositionsQuery"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "poolPositions"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfoX"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfoY"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfoLP"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountX"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountY"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountLP"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "share"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function usePositions() {
  var _a2, _b;
  const wallet = dist.useWallet();
  const positionQuery = useQuery(PositionsQueryDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_b = wallet.account) == null ? void 0 : _b.address)
  });
  return positionQuery;
}
const PoolSpotPriceDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "PoolSpotPrice"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "poolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PoolInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "poolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "poolInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "priceX"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "priceY"
            }
          }]
        }
      }]
    }
  }]
};
function usePoolSpotPrice(input, skip) {
  const poolPrice = useQuery(PoolSpotPriceDocument, {
    variables: input,
    fetchPolicy: "network-only",
    skip
  });
  return poolPrice;
}
const AddLiquidityDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "AddLiquidity"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "addLiquidityInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "AddLiquidityInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "addLiquidity"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "addLiquidityInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "addLiquidityInput"
            }
          }
        }]
      }]
    }
  }]
};
const SimplePoolDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "SimplePool"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "poolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PoolInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "poolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "poolInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountX"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountY"
            }
          }]
        }
      }]
    }
  }]
};
const CreatePoolDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "CreatePool"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "createPoolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "CreatePoolInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "createPool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "createPoolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "createPoolInput"
            }
          }
        }]
      }]
    }
  }]
};
const AddLiquidity = "";
const CoinList = "";
function CoinListItem({
  onCoinSelect,
  ...coinInfo
}) {
  react.exports.useCallback(() => onCoinSelect(coinInfo), [onCoinSelect, coinInfo]);
  return /* @__PURE__ */ jsxs(Lo.Option, {
    value: coinInfo,
    className: "h-[60px] w-full flex items-center space-x-4 bg-primary-800 cursor-pointer p-4 my-2 rounded-lg hover:cursor-pointer hover:bg-secondary-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
    children: [/* @__PURE__ */ jsx(ai, {
      coin: coinInfo.symbol
    }), /* @__PURE__ */ jsx("p", {
      className: "text-xl font-medium text-primary-100",
      children: coinInfo.symbol
    }), /* @__PURE__ */ jsx("p", {
      className: "text-xs text-primary-200",
      children: coinInfo.name
    })]
  }, coinInfo.symbol);
}
function CoinListView({
  onCoinSelect,
  coins
}) {
  return /* @__PURE__ */ jsx(Lo.Options, {
    className: "bg-transparent",
    children: coins.map((info) => /* @__PURE__ */ jsx(CoinListItem, {
      onCoinSelect,
      ...info
    }, info.symbol))
  });
}
function CoinListContainer({
  onCoinSelect,
  coins
}) {
  return /* @__PURE__ */ jsx(CoinListView, {
    onCoinSelect,
    coins
  });
}
const CoinSearchModal = "";
function CoinSearchModalView({
  onCoinSelect,
  trigger,
  onQueryChange,
  query,
  coins
}) {
  var _a2;
  const modalRef = react.exports.useRef(null);
  react.exports.useRef(null);
  const selectCoinAndCloseModal = react.exports.useCallback((coin) => {
    var _a3;
    onCoinSelect(coin);
    (_a3 = modalRef.current) == null ? void 0 : _a3.closeModal();
  }, []);
  return /* @__PURE__ */ jsx(El, {
    trigger,
    ref: modalRef,
    children: /* @__PURE__ */ jsx(ModalContents, {
      coins,
      onQueryChange,
      query,
      selectCoinAndCloseModal,
      modalOpen: Boolean((_a2 = modalRef.current) == null ? void 0 : _a2.isOpen)
    })
  });
}
function ModalContents({
  coins,
  onQueryChange,
  query,
  selectCoinAndCloseModal,
  modalOpen
}) {
  const buttonRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const interval = setInterval(() => {
      var _a2;
      if (buttonRef.current) {
        (_a2 = buttonRef.current) == null ? void 0 : _a2.click();
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs(Aa, {
    className: "min-w-[400px] max-w-[700px] mx-auto border border-slate-700 overflow-hidden",
    padding: 0,
    children: [/* @__PURE__ */ jsx(pl, {
      id: "headlessui-dialog-title-:rh:",
      className: "px-4 pt-4",
      children: "Select Token"
    }), /* @__PURE__ */ jsxs(Lo, {
      onChange: selectCoinAndCloseModal,
      children: [/* @__PURE__ */ jsx("div", {
        className: "p-4",
        children: /* @__PURE__ */ jsx(Lo.Input, {
          placeholder: "Search Tokens",
          className: "w-full h-[56px] rounded-[16px] p-3 bg-primary-800 text-white font-azeret outline-brand",
          value: query,
          tabIndex: 0,
          onChange: onQueryChange
        })
      }), /* @__PURE__ */ jsx(Lo.Button, {
        ref: buttonRef,
        className: "hidden"
      }), /* @__PURE__ */ jsx(Lo.Options, {
        className: "overflow-y-auto min-h-[200px] max-h-[550px] border-t border-t-primary-700 px-4 py-2 rounded-br-xl",
        children: coins ? /* @__PURE__ */ jsx(CoinListContainer, {
          onCoinSelect: selectCoinAndCloseModal,
          coins
        }) : null
      })]
    })]
  });
}
function CoinSearchModalContainer({
  onCoinSelect,
  trigger,
  coins
}) {
  const [query, setQuery] = react.exports.useState("");
  const filteredCoins = coins.filter((c) => {
    var _a2;
    return query === "" ? true : (_a2 = c.name.toLowerCase().match(query.toLowerCase())) != null ? _a2 : c.symbol.toLowerCase().match(query.toLowerCase());
  });
  const onQueryChange = react.exports.useCallback((e2) => setQuery(e2.currentTarget.value), []);
  return /* @__PURE__ */ jsx(CoinSearchModalView, {
    onCoinSelect,
    trigger,
    onQueryChange,
    query,
    coins: filteredCoins
  });
}
function CoinSelectButton({
  coin,
  className
}) {
  return /* @__PURE__ */ jsx("div", {
    className,
    children: /* @__PURE__ */ jsxs("button", {
      className: "relative text-sm bg-primary-700 rounded-xl p-3 flex items-center min-h-[50px] min-w-[150px] hover:bg-primary-600",
      children: [coin ? /* @__PURE__ */ jsx(ai, {
        coin: coin.symbol,
        size: 24
      }) : null, /* @__PURE__ */ jsx("span", {
        className: "ml-2 mr-7",
        children: coin == null ? void 0 : coin.symbol
      }), /* @__PURE__ */ jsx("div", {
        className: "absolute w-4 right-4",
        children: /* @__PURE__ */ jsx(ChevronDownIcon, {})
      })]
    })
  });
}
const BalancesDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Balances"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "balances"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfo"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "balance"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "availableBalance"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "walletBalances"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfo"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "balance"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "availableBalance"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function useBalances() {
  var _a2, _b;
  const wallet = dist.useWallet();
  const balancesQuery = useQuery(BalancesDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_b = wallet.account) == null ? void 0 : _b.address)
  });
  return balancesQuery;
}
function DepositInput({
  coins,
  coin,
  onCoinSelect,
  onChange,
  value
}) {
  var _a2, _b;
  const balances = useBalances();
  const findBalance = (coin2) => {
    var _a3, _b2;
    return (_b2 = (_a3 = balances.data) == null ? void 0 : _a3.account) == null ? void 0 : _b2.walletBalances.find((b2) => b2.coinInfo.symbol === coin2);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "relative w-full",
    children: [/* @__PURE__ */ jsx("input", {
      className: "bg-primary-800 focus:outline-none h-[70px] text-2xl md:text-4xl placeholder:text-bds-dark-secondarys-DB500 text-white font-azeret w-full md:text-left pl-3 rounded-2xl",
      placeholder: "0.00",
      onChange,
      value,
      type: "number"
    }), /* @__PURE__ */ jsx(CoinSearchModalContainer, {
      coins,
      trigger: /* @__PURE__ */ jsx(CoinSelectButton, {
        className: "absolute top-2 right-2",
        coin
      }),
      onCoinSelect
    }), /* @__PURE__ */ jsxs("span", {
      className: "absolute right-2 mt-1 font-semibold text-primary-400",
      children: ["Wallet Balance:", " ", (coin == null ? void 0 : coin.coinType) ? (_b = (_a2 = findBalance(coin == null ? void 0 : coin.symbol)) == null ? void 0 : _a2.balance) != null ? _b : "-" : "-"]
    })]
  });
}
function CreatePoolView({
  coins,
  createPool,
  firstCoin,
  firstCoinAu,
  handleChangeFirstCoinAu,
  handleChangeSecondCoinAu,
  onFirstCoinSelect,
  onSecondCoinSelect,
  secondCoin,
  secondCoinAu,
  fee,
  setFee
}) {
  var _a2;
  const options = [{
    label: "0.10%",
    value: "10"
  }, {
    label: "0.30%",
    value: "30"
  }];
  const value = (_a2 = options.find((o2) => o2.value === fee)) != null ? _a2 : void 0;
  return /* @__PURE__ */ jsxs(Aa, {
    className: "w-[600px] mx-auto self-center border border-slate-700",
    children: [/* @__PURE__ */ jsx(pl, {
      className: "mb-4",
      children: "Create Pool"
    }), /* @__PURE__ */ jsx(nt, {
      className: "mb-4 mt-4",
      children: "Deposit Amounts"
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-10",
      children: [/* @__PURE__ */ jsx(DepositInput, {
        coin: firstCoin,
        coins,
        onCoinSelect: onFirstCoinSelect,
        onChange: handleChangeFirstCoinAu,
        value: firstCoinAu
      }), /* @__PURE__ */ jsx(DepositInput, {
        coin: secondCoin,
        coins,
        onCoinSelect: onSecondCoinSelect,
        onChange: handleChangeSecondCoinAu,
        value: secondCoinAu
      }), /* @__PURE__ */ jsx(xl, {
        className: "min-w-full",
        label: "Fee Tier",
        toolTip: "When swapping, this fee is paid by the swapper to the liquidity providers in the pool. Higher fees can attract liquidity providers but may reduce swap volume. Lower fees may attract swap volume but reduce incentives for liquidity providers.",
        options,
        value,
        onChange: (e2) => setFee(e2)
      })]
    }), /* @__PURE__ */ jsx(cr, {
      className: "mt-12 w-full",
      onClick: createPool,
      children: "Create Pool"
    })]
  });
}
function CreatePoolContainer() {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l;
  const [createPool] = useMutation(CreatePoolDocument);
  const wallet = dist.useWallet();
  const navigate = useNavigate();
  const [firstCoinAu, setFirstCoinAu] = react.exports.useState(0);
  const [secondCoinAu, setSecondCoinAu] = react.exports.useState(0);
  const [fee, setFee] = react.exports.useState("10");
  const {
    firstCoin,
    secondCoin,
    onFirstCoinSelect,
    onSecondCoinSelect,
    coins
  } = useCoinXYParamState();
  const poolQuery = useQuery(SimplePoolDocument, {
    variables: {
      poolInput: {
        coinTypeX: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        coinTypeY: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }
    },
    skip: !firstCoin || !secondCoin
  });
  const poolNoAmount = !((_d = (_c = poolQuery.data) == null ? void 0 : _c.pool) == null ? void 0 : _d.amountX);
  const coinSpotPrice = usePoolSpotPrice({
    poolInput: {
      coinTypeX: (_e2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _e2 : "",
      coinTypeY: (_f = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _f : ""
    }
  });
  const conversionIn = firstCoinAu * ((_i2 = (_h = (_g = coinSpotPrice.data) == null ? void 0 : _g.pool) == null ? void 0 : _h.priceX) != null ? _i2 : 0);
  const conversionOut = secondCoinAu * ((_l = (_k = (_j = coinSpotPrice.data) == null ? void 0 : _j.pool) == null ? void 0 : _k.priceY) != null ? _l : 0);
  const notifications = Ha();
  async function createPoolHandler() {
    var _a3, _b2;
    if (firstCoin && secondCoin) {
      return await createPool({
        variables: {
          createPoolInput: {
            feeBasisPoints: fee,
            poolInput: {
              coinTypeX: (_a3 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a3 : "",
              coinTypeY: (_b2 = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b2 : ""
            }
          }
        }
      }).then(async (res) => {
        var _a4;
        await (wallet == null ? void 0 : wallet.signAndSubmitTransaction((_a4 = res.data) == null ? void 0 : _a4.createPool).then(() => notifications.addSuccessNotification("Successfully created pool.")).catch((e2) => notifications.addErrorNotification("Error creating pool.")));
      }).catch((e2) => notifications.addErrorNotification("Error creating pool.")).finally(() => navigate("/pools"));
    }
  }
  const handleChangeSecondCoinAu = (e2) => {
    const v = Number(Number.parseFloat(e2.currentTarget.value));
    setSecondCoinAu(v);
    setTouched("second");
  };
  const [touched, setTouched] = react.exports.useState("first");
  react.exports.useEffect(() => {
    if (touched === "first" && !poolNoAmount)
      setSecondCoinAu(conversionIn != null ? conversionIn : 0);
  }, [conversionIn, firstCoinAu, touched]);
  react.exports.useEffect(() => {
    if (touched === "second" && !poolNoAmount)
      setFirstCoinAu(conversionOut != null ? conversionOut : 0);
  }, [conversionOut, secondCoinAu, touched]);
  const handleChangeFirstCoinAu = (e2) => {
    const v = Number(Number.parseFloat(e2.currentTarget.value));
    setFirstCoinAu(v);
    setTouched("first");
  };
  return /* @__PURE__ */ jsx(CreatePoolView, {
    coins,
    onFirstCoinSelect,
    onSecondCoinSelect,
    firstCoin,
    secondCoin,
    createPool: createPoolHandler,
    setFee,
    handleChangeFirstCoinAu,
    handleChangeSecondCoinAu,
    firstCoinAu,
    secondCoinAu,
    fee
  });
}
function SlippagePopoverView({
  onChangeSlippage,
  slippage
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "max-w-sm",
    children: /* @__PURE__ */ jsx(fl, {
      triggerNode: /* @__PURE__ */ jsx(CogIcon, {
        width: 24,
        height: 24,
        className: "text-accent-400 outline-none hover:text-accent-400"
      }),
      children: /* @__PURE__ */ jsx("div", {
        className: "bg-slate-700 p-6 text-white max-w-sm rounded-xl drop-shadow-xl",
        children: /* @__PURE__ */ jsx(wl, {
          placeholder: "0.00",
          type: "number",
          label: "Slippage Tolerance",
          value: slippage,
          name: "Slippage",
          step: 0.1,
          onChange: onChangeSlippage,
          suffix: "%"
        })
      })
    })
  });
}
function SlippagePopoverContainer({}) {
  var _a2;
  const [slippage, setSlippage] = react.exports.useState(parseFloat((_a2 = localStorage.getItem("slippage_tolerance")) != null ? _a2 : "0.5"));
  react.exports.useEffect(() => {
    localStorage.setItem("slippage_tolerance", `${slippage}`);
  }, [slippage]);
  return /* @__PURE__ */ jsx(SlippagePopoverView, {
    slippage,
    onChangeSlippage: (e2) => setSlippage(parseFloat(e2.currentTarget.value))
  });
}
const HasAuxAccountDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "HasAuxAccount"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "hasAuxAccount"
            }
          }]
        }
      }]
    }
  }]
};
function useHasAccount() {
  var _a2, _b;
  const wallet = dist.useWallet();
  const hasAccountQuery = useQuery(HasAuxAccountDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_b = wallet.account) == null ? void 0 : _b.address)
  });
  return hasAccountQuery;
}
const CreateAuxAccountDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "CreateAuxAccount"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "createAuxAccount"
        }
      }]
    }
  }]
};
async function delayRefetchQuery(delay, queries) {
  return await new Promise((res) => setTimeout(async () => await client.refetchQueries({
    include: queries
  }).then((x) => {
    res(x);
  }), delay));
}
const ConnectWalletView = function ConnectWalletView2({
  trigger
}) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j;
  const modalRef = react.exports.useRef(null);
  const [options, setOptions] = react.exports.useState([]);
  const wallet = dist.useWallet();
  const suggestedBadge = /* @__PURE__ */ jsx(yl, {
    size: "xs",
    children: "Recommended"
  });
  const connectedBadge = /* @__PURE__ */ jsx(yl, {
    size: "xs",
    variant: "success",
    children: "Connected"
  });
  const detectedBadge = /* @__PURE__ */ jsx(yl, {
    size: "xs",
    variant: "basic",
    children: "Detected"
  });
  function onClickWalletFactory(w) {
    return async () => {
      var _a3;
      const detected = w.adapter.readyState === dist.WalletReadyState.Installed;
      if (detected) {
        await wallet.connect(w.adapter.name);
        setOptions(getOptions());
        (_a3 = modalRef.current) == null ? void 0 : _a3.closeModal();
      } else {
        window.open(w.adapter.url);
      }
    };
  }
  function getOptions() {
    const walletOptions = wallet.wallets.map((w) => ({
      ...w,
      onClick: onClickWalletFactory(w)
    }));
    const _options = walletOptions.map(({
      adapter,
      onClick
    }) => {
      const suggested = adapter.name === dist.MartianWalletName;
      const suggestedLink = /* @__PURE__ */ jsx("a", {
        href: "https://martianwallet.xyz/",
        target: "_blank",
        rel: "noreferrer",
        title: "Learn More About Martian Wallet",
        className: "text-xs inline-flex items-center",
        children: "martianwallet.xyz"
      });
      const extLink = /* @__PURE__ */ jsx("a", {
        href: adapter.url,
        target: "_blank",
        rel: "noreferrer",
        title: `Learn More About ${adapter.name} Wallet`,
        className: "text-xs inline-flex items-center",
        children: "Installation Required"
      });
      const detected = adapter.readyState === dist.WalletReadyState.Installed;
      return {
        name: adapter.name,
        onClick,
        link: suggested ? suggestedLink : !detected ? extLink : null,
        suggested,
        connected: adapter.connected,
        detected,
        icon: adapter.icon
      };
    });
    const result = _options.sort((a2, b2) => {
      if (a2.connected)
        return -1;
      return 1;
    });
    return result;
  }
  react.exports.useEffect(() => {
    setOptions(getOptions());
  }, []);
  const renderTrigger = (defaultTrigger, walletType, address, isConnected, icon) => {
    if (walletType && address) {
      let addressResult = "";
      addressResult += address.slice(0, 4);
      addressResult += "...";
      addressResult += address.slice(address.length - 4, address.length);
      switch (walletType) {
        default:
          return /* @__PURE__ */ jsxs(cr, {
            variant: "basic",
            size: "sm",
            className: "pl-2 mr-3 inline-flex items-center",
            onClick: () => {
            },
            children: [/* @__PURE__ */ jsx("img", {
              src: icon,
              height: 24,
              width: 24,
              className: "rounded-full"
            }), /* @__PURE__ */ jsxs("div", {
              className: "ml-2",
              children: [walletType, ": ", addressResult]
            })]
          });
      }
    }
    return defaultTrigger;
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(El, {
      trigger: renderTrigger(trigger, (_a2 = wallet == null ? void 0 : wallet.wallet) == null ? void 0 : _a2.adapter.name, (_e2 = (_d = (_c = (_b = wallet.wallet) == null ? void 0 : _b.adapter) == null ? void 0 : _c.publicAccount) == null ? void 0 : _d.address) != null ? _e2 : "", true, (_f = wallet == null ? void 0 : wallet.wallet) == null ? void 0 : _f.adapter.icon),
      ref: modalRef,
      children: /* @__PURE__ */ jsxs(Aa, {
        className: "h-[575px] max-w-[700px] mx-auto border border-primary-700 overflow-hidden",
        padding: 0,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex flex-row items-center justify-between p-4  border-b border-b-slate-700",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-xl bg-stripes-secondary",
            children: "Select Wallet"
          }), ((_g = wallet.account) == null ? void 0 : _g.address) ? /* @__PURE__ */ jsxs("div", {
            className: "inline-flex items-center gap-2",
            children: [/* @__PURE__ */ jsx("span", {
              children: "Active Wallet:"
            }), /* @__PURE__ */ jsxs("div", {
              className: "pl-2 pt-1 pb-1 pr-1 text-sm rounded-full bg-primary-900 border border-primary-700 flex justify-between items-center",
              children: [/* @__PURE__ */ jsx("img", {
                src: (_h = wallet == null ? void 0 : wallet.wallet) == null ? void 0 : _h.adapter.icon,
                height: 24,
                width: 24
              }), /* @__PURE__ */ jsx("span", {
                className: "ml-2 mr-4",
                children: (_j = (_i2 = wallet == null ? void 0 : wallet.wallet) == null ? void 0 : _i2.adapter.name) != null ? _j : "None"
              }), /* @__PURE__ */ jsx(cr, {
                size: "xs",
                onClick: async () => await wallet.disconnect(),
                children: "Disconnect"
              })]
            })]
          }) : null]
        }), /* @__PURE__ */ jsx("div", {
          className: "overflow-y-scroll max-h-[500px]",
          children: options.map((w) => {
            var _a3;
            return /* @__PURE__ */ jsx("div", {
              onClick: () => {
                var _a4;
                w.onClick();
                (_a4 = modalRef.current) == null ? void 0 : _a4.closeModal();
              },
              className: `rounded-lg p-4 hover:bg-secondary-800 hover:cursor-pointer ${w.suggested && "bg-brand-purple/60"}`,
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex items-center",
                children: [/* @__PURE__ */ jsx("img", {
                  src: w.icon,
                  height: 48,
                  width: 48
                }), /* @__PURE__ */ jsxs("div", {
                  className: "ml-3 mr-auto flex flex-col",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "font-semibold",
                    children: w.name
                  }), w.link]
                }), /* @__PURE__ */ jsxs("div", {
                  className: "inline-flex gap-2",
                  children: [w.suggested ? suggestedBadge : null, w.name === ((_a3 = wallet == null ? void 0 : wallet.wallet) == null ? void 0 : _a3.adapter.name) ? connectedBadge : null, !w.connected && w.detected ? detectedBadge : null]
                })]
              })
            }, w.name);
          })
        })]
      })
    })
  });
};
function ConnectWalletContainer({
  trigger
}) {
  return /* @__PURE__ */ jsx(ConnectWalletView, {
    trigger
  });
}
const RegisteredCoinsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "RegisteredCoins"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "registeredCoins"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfo"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "registered"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function useRegisteredCoins() {
  var _a2, _b, _c;
  const wallet = dist.useWallet();
  const hasAccount = useHasAccount();
  const registeredCoinsQuery = useQuery(RegisteredCoinsDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_c = (_b = hasAccount.data) == null ? void 0 : _b.account) == null ? void 0 : _c.hasAuxAccount)
  });
  return registeredCoinsQuery;
}
const SwapInDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "SwapIn"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "swapInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "SwapExactInInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "swapExactIn"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "swapExactInInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "swapInput"
            }
          }
        }]
      }]
    }
  }]
};
const SwapOutDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "SwapOut"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "swapInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "SwapExactOutInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "swapExactOut"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "swapExactOutInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "swapInput"
            }
          }
        }]
      }]
    }
  }]
};
const IsCoinRegisteredDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "isCoinRegistered"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "coinType"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "isCoinRegistered"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "coinType"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }
            }]
          }]
        }
      }]
    }
  }]
};
const RegisterCoinDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "RegisterCoin"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "registerCoinInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "RegisterCoinInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "registerCoin"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "registerCoinInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "registerCoinInput"
            }
          }
        }]
      }]
    }
  }]
};
const DepositDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "Deposit"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "depositInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "DepositInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "deposit"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "depositInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "depositInput"
            }
          }
        }]
      }]
    }
  }]
};
function DepositView({
  trigger,
  deposit,
  coin: _coin
}) {
  var _a2, _b, _c;
  const [amount, setAmount] = react.exports.useState(0);
  const {
    account
  } = dist.useWallet();
  const coinsQuery = useCoins();
  const balances = useBalances();
  const fullBalances = (_b = (_a2 = balances.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.walletBalances;
  const coins = (_c = fullBalances == null ? void 0 : fullBalances.map((b2) => b2.coinInfo)) != null ? _c : [];
  const [coin, selectCoin] = react.exports.useState(_coin);
  const [balance, setBalance] = react.exports.useState("-");
  const modalRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (!coin && coinsQuery.data) {
      const found = coinsQuery.data.coins.find((c) => c.symbol === "USDC");
      if (found)
        selectCoin(found);
    }
  }, [coins, coinsQuery.data]);
  react.exports.useEffect(() => {
    const currentCoin = fullBalances == null ? void 0 : fullBalances.find((b2) => b2.coinInfo.symbol === (coin == null ? void 0 : coin.symbol));
    if (currentCoin)
      setBalance(currentCoin.availableBalance.toString());
  }, [coin, fullBalances]);
  const notifications = Ha();
  return /* @__PURE__ */ jsx(El, {
    ref: modalRef,
    trigger,
    children: /* @__PURE__ */ jsxs(Aa, {
      className: "w-[700px] mx-auto gap-4 flex flex-col",
      padding: 6,
      children: [/* @__PURE__ */ jsx(pl, {
        className: "mb-4",
        children: "Deposit"
      }), !coins.length && /* @__PURE__ */ jsx(Ir, {
        title: "Nothing to deposit.",
        message: "Cannot find existing balances in your wallet. Please add some money."
      }), /* @__PURE__ */ jsxs("div", {
        className: "rounded-xl p-6 flex bg-primary-800 shadow-md justify-between text-white font-bold",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex justify-between flex-auto flex-col gap-2",
          children: [/* @__PURE__ */ jsx(nt, {
            className: "text-primary-300",
            children: "Enter Deposit Amount"
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(CoinSearchModalContainer, {
              coins,
              trigger: /* @__PURE__ */ jsx(CoinSelectButton, {
                coin
              }),
              onCoinSelect: (c) => selectCoin(c)
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between flex-auto flex-col gap-4",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-sm text-right",
            children: ["Available Wallet Balance: ", balance]
          }), /* @__PURE__ */ jsx("input", {
            disabled: false,
            inputMode: "decimal",
            min: "0",
            type: "number",
            onChange: (e2) => setAmount(Number(e2.currentTarget.value)),
            value: amount,
            className: "bg-transparent focus:outline-none h-[44px] text-2xl md:text-4xl placeholder:text-bds-dark-secondarys-DB500 text-white font-azeret w-full md:text-right",
            placeholder: "0.00"
          })]
        })]
      }), /* @__PURE__ */ jsx(cr, {
        disabled: !coin || Number(balance) < amount,
        onClick: () => {
          if (coin)
            deposit({
              amount,
              coinType: coin.coinType,
              from: account == null ? void 0 : account.address,
              to: account == null ? void 0 : account.address
            }).then(() => {
              var _a3;
              (_a3 = modalRef.current) == null ? void 0 : _a3.closeModal();
              notifications.addSuccessNotification("Successfully added balance!");
            }).catch(() => notifications.addErrorNotification("Failed to add balance!"));
        },
        children: "Submit Deposit"
      })]
    })
  });
}
function DepositContainer({
  trigger,
  coin
}) {
  const wallet = dist.useWallet();
  const [depositMutation] = useMutation(DepositDocument);
  const deposit = async (depositInput) => {
    var _a2;
    const tx = await depositMutation({
      variables: {
        depositInput
      }
    });
    await (wallet == null ? void 0 : wallet.signAndSubmitTransaction((_a2 = tx.data) == null ? void 0 : _a2.deposit));
    await delayRefetchQuery(1e3, ["Balances"]);
  };
  return /* @__PURE__ */ jsx(DepositView, {
    coin,
    deposit,
    trigger: trigger != null ? trigger : /* @__PURE__ */ jsx(cr, {
      size: "sm",
      onClick: () => {
      },
      children: "Deposit"
    })
  });
}
function RegisterCoinList({
  coins
}) {
  const wallet = dist.useWallet();
  const [registerCoin] = useMutation(RegisterCoinDocument);
  const notifications = Ha();
  const depositTrigger = /* @__PURE__ */ jsx(cr, {
    size: "xs",
    onClick: () => {
    },
    children: "Deposit"
  });
  const handleRegister = async (c) => {
    var _a2;
    const tx = (_a2 = (await registerCoin({
      variables: {
        registerCoinInput: {
          coinType: c == null ? void 0 : c.coinInfo.coinType
        }
      }
    })).data) == null ? void 0 : _a2.registerCoin;
    await wallet.signAndSubmitTransaction(tx).then((x) => {
      delayRefetchQuery(1500, ["RegisteredCoins"]);
      notifications.addSuccessNotification(`${c.coinInfo.symbol} successfully registered.`);
    }).catch(() => {
      notifications.addErrorNotification(`Failed To Register ${c.coinInfo.symbol}.`);
    });
  };
  return /* @__PURE__ */ jsx("div", {
    className: "pt-3",
    children: coins == null ? void 0 : coins.map((c, idx) => /* @__PURE__ */ jsxs("div", {
      className: "flex flex-row items-center w-full p-3 my-2 bg-primary-800 rounded-lg",
      children: [/* @__PURE__ */ jsx(ai, {
        coin: c.coinInfo.symbol
      }), /* @__PURE__ */ jsx("div", {
        className: "ml-2",
        children: c.coinInfo.name
      }), c.registered ? /* @__PURE__ */ jsxs("div", {
        className: "inline-flex items-center gap-3 ml-auto",
        children: [/* @__PURE__ */ jsx(DepositContainer, {
          coin: c.coinInfo,
          trigger: depositTrigger
        }), /* @__PURE__ */ jsx(yl, {
          size: "xs",
          variant: "success",
          className: "ml-auto",
          children: "Registered"
        })]
      }) : /* @__PURE__ */ jsx(cr, {
        size: "xs",
        onClick: async () => await handleRegister(c),
        className: "ml-auto",
        children: "Register"
      })]
    }, idx))
  });
}
function CreateAccountWizard({
  title,
  subTitle
}) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2;
  const wallet = dist.useWallet();
  const navigate = useNavigate();
  const connectWallet = () => {
  };
  const walletTrigger = /* @__PURE__ */ jsx(cr, {
    onClick: connectWallet,
    size: "sm",
    children: "Connect Your Wallet"
  });
  const [createAuxAccount] = useMutation(CreateAuxAccountDocument);
  const hasAuxAccount = useHasAccount();
  const hasAccount = (_b = (_a2 = hasAuxAccount.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.hasAuxAccount;
  const notifications = Ha();
  const registeredCoins = useRegisteredCoins();
  const coins = (_d = (_c = registeredCoins.data) == null ? void 0 : _c.account) == null ? void 0 : _d.registeredCoins;
  const [allCoinsRegistered, setAllCoinsRegistered] = react.exports.useState(false);
  const appTitle = window.appTitle;
  react.exports.useEffect(() => {
    if (coins == null ? void 0 : coins.length) {
      const allCoins = coins.every((i2) => i2.registered);
      setAllCoinsRegistered(allCoins);
    }
  }, [coins]);
  const createAccount = async () => {
    const tx = await createAuxAccount().then((x) => {
      var _a3;
      return (_a3 = x.data) == null ? void 0 : _a3.createAuxAccount;
    }).catch(() => {
      notifications.addErrorNotification(`Failed to create ${appTitle} account!`);
    });
    await wallet.signAndSubmitTransaction(tx).then(() => {
      delayRefetchQuery(1500, ["HasAuxAccount"]);
      notifications.addSuccessNotification(`${appTitle} account created!`);
    }).catch(() => {
      notifications.addErrorNotification(`Failed to create ${appTitle} account!`);
    });
  };
  return /* @__PURE__ */ jsx("div", {
    className: "w-full min-h-full h-full my-12",
    children: /* @__PURE__ */ jsxs(Aa, {
      className: "flex flex-col items-stretch mx-auto gap-6 w-[800px] border border-primary-700",
      children: [
        /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-3xl mb-2",
            children: title != null ? title : `Create Your ${appTitle} Account`
          }), /* @__PURE__ */ jsx("div", {
            className: "text-base text-slate-400",
            children: subTitle != null ? subTitle : `Register for an ${appTitle} account to unlock the power to trade on the central limit order book.`
          })]
        }),
        !((_e2 = wallet.account) == null ? void 0 : _e2.address) ? /* @__PURE__ */ jsxs("div", {
          className: "border border-brand rounded-2xl",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex items-center w-full p-4 font-bold text-xl",
            children: /* @__PURE__ */ jsx("div", {
              children: "Connect your wallet"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-slate-400 px-4 pb-4 flex flex-col gap-3",
            children: ["Click the button below to select your wallet.", /* @__PURE__ */ jsx(ConnectWalletContainer, {
              trigger: walletTrigger
            })]
          })]
        }) : /* @__PURE__ */ jsx("div", {
          className: "border border-green-600 rounded-2xl",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center w-full p-4 font-bold text-xl",
            children: [/* @__PURE__ */ jsx("div", {
              className: "font-bold rounded-full pr-3",
              children: /* @__PURE__ */ jsx(CheckCircleIcon, {
                className: "w-8 h-8 ml-auto text-green-400"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "mr-auto",
              children: "Wallet Connected"
            }), /* @__PURE__ */ jsx(ConnectWalletContainer, {
              trigger: walletTrigger
            })]
          })
        }),
        !((_f = wallet.account) == null ? void 0 : _f.address) ? /* @__PURE__ */ jsx("div", {
          className: "border border-primary-600 rounded-2xl",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center w-full p-4 font-bold text-xl",
            children: [/* @__PURE__ */ jsxs("div", {
              children: ["Create Your ", appTitle, " Account"]
            }), /* @__PURE__ */ jsx(LockClosedIcon, {
              className: "w-4 h-4 ml-auto mr-2"
            })]
          })
        }) : ((_g = wallet.account) == null ? void 0 : _g.address) && !hasAccount ? /* @__PURE__ */ jsxs("div", {
          className: "border border-brand rounded-2xl",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex items-center w-full p-4 font-bold text-xl",
            children: /* @__PURE__ */ jsxs("div", {
              children: ["Create Your ", appTitle, " Account"]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "text-slate-400 px-4 pb-4 flex flex-col gap-3",
            children: ["Registering this on-chain account enables trading without approval dialogs.", /* @__PURE__ */ jsxs(cr, {
              onClick: createAccount,
              size: "sm",
              className: "self-start",
              children: ["Create ", appTitle, " Account"]
            })]
          })]
        }) : /* @__PURE__ */ jsx("div", {
          className: "border border-green-600 rounded-2xl",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center w-full p-4 font-bold text-xl",
            children: [/* @__PURE__ */ jsx("div", {
              className: "font-bold rounded-full pr-3",
              children: /* @__PURE__ */ jsx(CheckCircleIcon, {
                className: "w-8 h-8 ml-auto text-green-400"
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "mr-4",
              children: [appTitle, " Account Created"]
            })]
          })
        }),
        !((_h = wallet.account) == null ? void 0 : _h.address) || !hasAccount ? /* @__PURE__ */ jsx("div", {
          className: "border border-primary-600 rounded-2xl",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center w-full p-4 font-bold text-xl",
            children: [/* @__PURE__ */ jsxs("div", {
              children: ["Register And Deposit Coins Into Your ", appTitle, " Account"]
            }), /* @__PURE__ */ jsx(LockClosedIcon, {
              className: "w-4 h-4 ml-auto mr-2"
            })]
          })
        }) : /* @__PURE__ */ jsxs("div", {
          className: "border border-brand rounded-2xl",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex items-center w-full p-4 gap-2 font-bold text-xl",
            children: /* @__PURE__ */ jsxs("div", {
              children: ["Register And Deposit Coins Into Your ", appTitle, " Account"]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "px-4 pb-4",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "text-primary-400",
              children: ["Coins into your ", appTitle, " Account are used for trading on the Trade page."]
            }), hasAccount && /* @__PURE__ */ jsx(RegisterCoinList, {
              activeAccount: hasAccount,
              coins,
              allCoinsRegistered,
              setAllCoinsRegistered
            })]
          })]
        }),
        ((_i2 = wallet.account) == null ? void 0 : _i2.address) && hasAccount && /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row gap-4",
          children: [/* @__PURE__ */ jsx(cr, {
            size: "sm",
            onClick: () => navigate("/trade"),
            children: "Start Trading"
          }), /* @__PURE__ */ jsx(cr, {
            size: "sm",
            variant: "basic",
            onClick: () => navigate("/portfolio"),
            children: "View Portfolio"
          })]
        })
      ]
    })
  });
}
const PoolsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Pools"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pools"
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "featuredStatus"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoX"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoY"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoLP"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountX"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountY"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountLP"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "feePercent"
            }
          }]
        }
      }]
    }
  }]
};
function usePools() {
  const pools = useQuery(PoolsDocument);
  return pools;
}
const columnHelper$1 = createColumnHelper();
function usePoolsTable() {
  var _a2;
  const poolsQuery = usePools();
  const navigate = useNavigate();
  const {
    onFirstCoinSelect,
    onSecondCoinSelect
  } = useCoinXYParamState();
  const pools = (_a2 = poolsQuery.data) == null ? void 0 : _a2.pools;
  const tableRef = react.exports.useRef(null);
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b;
    return {
      loading: poolsQuery.loading,
      error: (_a3 = poolsQuery.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(Ir, {
        message: "No Pools With Liquidity.",
        variant: "basic"
      }),
      data: pools != null ? pools : [],
      className: "border border-primary-700 rounded-lg overflow-auto w-full max-w-full",
      columns: [columnHelper$1.accessor("amountX", {
        header: "Pool",
        cell(cell) {
          var _a4, _b2, _c, _d, _e2, _f;
          const rowValues = cell.row.original;
          const onClick = () => {
            navigate("/pool");
            if (rowValues.coinInfoX)
              onFirstCoinSelect(rowValues.coinInfoX);
            if (rowValues.coinInfoY)
              onSecondCoinSelect(rowValues.coinInfoY);
          };
          return /* @__PURE__ */ jsx("a", {
            role: "button",
            className: "flex items-center gap-3 py-2",
            onClick,
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex py-3",
              children: [/* @__PURE__ */ jsx("div", {
                className: "flex items-center",
                children: /* @__PURE__ */ jsx(bl, {
                  coins: [(_b2 = (_a4 = rowValues == null ? void 0 : rowValues.coinInfoX) == null ? void 0 : _a4.symbol) != null ? _b2 : "", (_d = (_c = rowValues == null ? void 0 : rowValues.coinInfoY) == null ? void 0 : _c.symbol) != null ? _d : ""].filter(Boolean),
                  size: 32
                })
              }), /* @__PURE__ */ jsx("div", {
                className: "self-center ml-4 mr-2 md:text-lg sm:text-sm",
                children: `${(_e2 = rowValues.coinInfoX) == null ? void 0 : _e2.name} / ${(_f = rowValues.coinInfoY) == null ? void 0 : _f.name}`
              }), rowValues.featuredStatus !== "NONE" ? /* @__PURE__ */ jsx(yl, {
                variant: "success",
                size: "sm",
                className: "self-center",
                children: rowValues.featuredStatus
              }) : null]
            })
          });
        }
      }), columnHelper$1.accessor("amountX", {
        header: "Base Coins Locked",
        cell(cell) {
          var _a4;
          const value = cell.getValue();
          const rowValues = cell.row.original;
          return /* @__PURE__ */ jsxs("div", {
            className: "inline-flex gap-1 sm:text-sm md:text-base font-medium",
            children: [/* @__PURE__ */ jsx("div", {
              children: value ? value.toLocaleString() : "-"
            }), /* @__PURE__ */ jsx("div", {
              children: (_a4 = rowValues.coinInfoX) == null ? void 0 : _a4.symbol
            })]
          });
        }
      }), columnHelper$1.accessor("amountY", {
        header: "Quote Coins Locked",
        cell(cell) {
          var _a4;
          const value = cell.getValue();
          const rowValues = cell.row.original;
          return /* @__PURE__ */ jsxs("div", {
            className: "inline-flex gap-1 sm:text-sm md:text-base font-medium",
            children: [/* @__PURE__ */ jsx("div", {
              children: value ? value.toLocaleString() : "-"
            }), /* @__PURE__ */ jsx("div", {
              children: (_a4 = rowValues.coinInfoY) == null ? void 0 : _a4.symbol
            })]
          });
        }
      }), columnHelper$1.accessor("feePercent", {
        header: "Fee Percent",
        cell(cell) {
          const value = cell.getValue();
          return /* @__PURE__ */ jsx("div", {
            className: "sm:text-sm md:text-base font-medium",
            children: value ? `${value.toFixed(2)}%` : "Not Available"
          });
        }
      })],
      virtualizeOptions: {
        count: (_b = pools == null ? void 0 : pools.length) != null ? _b : 0,
        estimateSize: () => {
          var _a4;
          return (_a4 = pools == null ? void 0 : pools.length) != null ? _a4 : 0;
        },
        getScrollElement: () => tableRef.current,
        overscan: 20
      }
    };
  }, [pools, poolsQuery.error, poolsQuery.loading]);
  return [tableProps, tableRef];
}
function PoolsTable({
  globalFilter
}) {
  var _a2;
  const [poolsTableProps] = usePoolsTable();
  const filtered = (_a2 = poolsTableProps.data) == null ? void 0 : _a2.filter((p) => {
    var _a3, _b, _c;
    return globalFilter && globalFilter.length > 1 ? (_c = (_b = (_a3 = p.coinInfoX.name.toLowerCase().match(globalFilter.toLowerCase())) != null ? _a3 : p.coinInfoY.name.toLowerCase().match(globalFilter.toLowerCase())) != null ? _b : p.coinInfoX.symbol.toLowerCase().match(globalFilter.toLowerCase())) != null ? _c : p.coinInfoY.symbol.toLowerCase().match(globalFilter.toLowerCase()) : true;
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Rl, {
      loading: poolsTableProps.loading,
      error: poolsTableProps.error,
      noData: poolsTableProps.noData,
      columns: poolsTableProps.columns,
      data: filtered,
      virtualizeOptions: poolsTableProps.virtualizeOptions,
      customRowRender: poolsTableProps.customRowRender,
      className: poolsTableProps.className
    })
  });
}
const SwapForm = "";
function SwapPanel({
  coin,
  onCoinSelect,
  setValue,
  value,
  disabled,
  coins,
  title
}) {
  var _a2, _b;
  const balances = useBalances();
  const findBalance = (coin2) => {
    var _a3, _b2;
    return (_b2 = (_a3 = balances.data) == null ? void 0 : _a3.account) == null ? void 0 : _b2.walletBalances.find((b2) => b2.coinInfo.coinType === coin2);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "rounded-xl p-6 flex bg-primary-800 shadow-md justify-between text-white font-bold",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex justify-between flex-auto flex-col gap-2",
      children: [/* @__PURE__ */ jsx(nt, {
        className: "text-primary-300",
        children: title
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(CoinSearchModalContainer, {
          coins,
          trigger: /* @__PURE__ */ jsx(CoinSelectButton, {
            coin
          }),
          onCoinSelect
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex justify-between flex-auto flex-col gap-4",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-sm text-right",
        children: ["Wallet Balance:", " ", (coin == null ? void 0 : coin.coinType) ? (_b = (_a2 = findBalance(coin == null ? void 0 : coin.coinType)) == null ? void 0 : _a2.balance) != null ? _b : "-" : "-"]
      }), /* @__PURE__ */ jsx("input", {
        disabled: !!disabled,
        inputMode: "decimal",
        min: "0",
        type: "number",
        onChange: setValue,
        value,
        className: "bg-transparent focus:outline-none h-[44px] text-2xl md:text-4xl placeholder:text-bds-dark-secondarys-DB500 text-white font-azeret w-full md:text-right",
        placeholder: "0.00"
      })]
    })]
  });
}
function SwapButton({
  onClick
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "text-center h-4 flex justify-center",
    children: /* @__PURE__ */ jsx("div", {
      className: "absolute mt-[-1rem] w-12 text-brand bg-primary-900 shadow-md rounded-[50%] p-3 cursor-pointer hover:bg-primary-900/60",
      onClick,
      role: "button",
      children: /* @__PURE__ */ jsx(ArrowsUpDownIcon, {})
    })
  });
}
function SwapFormView({
  handleSwap,
  invertSelections,
  valueIn,
  valueOut,
  onChangeValueIn,
  onChangeValueOut,
  onSelectPrimary,
  onSelectSecondary,
  coins,
  primaryCoin,
  secondaryCoin,
  loading,
  helperText,
  quoteIn,
  quoteOut
}) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h;
  const wallet = dist.useWallet();
  return /* @__PURE__ */ jsxs(Aa, {
    className: "w-[700px] mx-auto self-center justify-self-center border border-primary-700",
    children: [/* @__PURE__ */ jsxs(pl, {
      className: "mb-4 flex justify-between",
      children: [/* @__PURE__ */ jsx("span", {
        children: "Swap"
      }), /* @__PURE__ */ jsx(SlippagePopoverContainer, {})]
    }), /* @__PURE__ */ jsx(SwapPanel, {
      title: "From",
      coins,
      coin: primaryCoin,
      onCoinSelect: onSelectPrimary,
      setValue: onChangeValueIn,
      value: valueIn
    }), /* @__PURE__ */ jsx(SwapButton, {
      onClick: invertSelections
    }), /* @__PURE__ */ jsx(SwapPanel, {
      title: "To",
      coins,
      coin: secondaryCoin,
      onCoinSelect: onSelectSecondary,
      value: valueOut,
      setValue: onChangeValueOut
    }), /* @__PURE__ */ jsx(SwapDetailsContainer, {
      expectedOutput: (_a2 = quoteIn == null ? void 0 : quoteIn.pool) == null ? void 0 : _a2.quoteExactIn.expectedAmountOut,
      minReceived: (_c = (_b = quoteIn == null ? void 0 : quoteIn.pool) == null ? void 0 : _b.quoteExactIn) == null ? void 0 : _c.minAmountOut,
      networkFee: (_f = (_e2 = (_d = quoteIn == null ? void 0 : quoteIn.pool) == null ? void 0 : _d.quoteExactIn) == null ? void 0 : _e2.feeAmountDollars) != null ? _f : void 0,
      outputCoin: secondaryCoin != null ? secondaryCoin : void 0,
      priceImpact: (_h = (_g = quoteIn == null ? void 0 : quoteIn.pool) == null ? void 0 : _g.quoteExactIn) == null ? void 0 : _h.priceImpactPct
    }), helperText ? /* @__PURE__ */ jsx("div", {
      className: "mt-6 text-red-300 text-left w-full",
      children: helperText
    }) : null, !wallet ? /* @__PURE__ */ jsx(ConnectWalletContainer, {
      trigger: /* @__PURE__ */ jsx(cr, {
        className: "mt-6 min-w-full",
        onClick: () => {
        },
        children: "Connect Wallet To Swap"
      })
    }) : /* @__PURE__ */ jsx(cr, {
      disabled: loading || !!helperText,
      className: "mt-6 min-w-full",
      onClick: handleSwap,
      children: "Swap"
    })]
  });
}
const PoolPriceInDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "PoolPriceIn"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "poolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PoolInput"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "coinTypeIn"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "amount"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Float"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "poolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "poolInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteExactIn"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "coinTypeIn"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "coinTypeIn"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "amountIn"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "amount"
                }
              }
            }],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "expectedAmountOut"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "minAmountOut"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "feeAmount"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "priceImpactPct"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "priceOut"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "priceIn"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "feeAmountDollars"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "pythRating"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "price"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "color"
                    }
                  }]
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const PoolPriceOutDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "PoolPriceOut"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "poolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PoolInput"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "coinTypeOut"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "amount"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Float"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "poolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "poolInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteExactOut"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "coinTypeOut"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "coinTypeOut"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "amountOut"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "amount"
                }
              }
            }],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "expectedAmountIn"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "maxAmountIn"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "maxFeeAmount"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "priceImpactPct"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "priceOut"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "priceIn"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "maxFeeAmountDollars"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "pythRating"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "price"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "color"
                    }
                  }]
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function usePoolPriceIn(input, skip) {
  const poolPrice = useQuery(PoolPriceInDocument, {
    variables: input,
    fetchPolicy: "network-only",
    skip
  });
  return poolPrice;
}
function usePoolPriceOut(input, skip) {
  const poolPrice = useQuery(PoolPriceOutDocument, {
    variables: input,
    fetchPolicy: "network-only",
    skip
  });
  return poolPrice;
}
function SwapFormContainer({}) {
  var _a2, _b, _c, _d, _e2, _f;
  const [lastTouchedInput, setLastTouched] = react.exports.useState("in");
  const {
    firstCoin,
    secondCoin,
    onFirstCoinSelect,
    onSecondCoinSelect,
    coins
  } = useCoinXYParamState();
  const wallet = dist.useWallet();
  const notifications = Ha();
  const [valueIn, setValueIn] = react.exports.useState("1");
  const [valueOut, setValueOut] = react.exports.useState("1");
  const firstCoinPrice = usePoolPriceIn({
    amount: parseFloat(valueIn),
    coinTypeIn: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
    poolInput: {
      coinTypeX: (_b = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _b : "",
      coinTypeY: (_c = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _c : ""
    }
  }, !firstCoin || !secondCoin);
  const secondCoinPrice = usePoolPriceOut({
    amount: parseFloat(valueOut),
    coinTypeOut: (_d = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _d : "",
    poolInput: {
      coinTypeX: (_e2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _e2 : "",
      coinTypeY: (_f = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _f : ""
    }
  }, !firstCoin || !secondCoin);
  react.exports.useEffect(() => {
    var _a3, _b2, _c2, _d2, _e3, _f2;
    if (lastTouchedInput === "in")
      setValueOut((_c2 = (_b2 = (_a3 = firstCoinPrice.data) == null ? void 0 : _a3.pool) == null ? void 0 : _b2.quoteExactIn.expectedAmountOut.toFixed(secondCoin == null ? void 0 : secondCoin.decimals).toString()) != null ? _c2 : "0");
    else
      setValueIn((_f2 = (_e3 = (_d2 = secondCoinPrice.data) == null ? void 0 : _d2.pool) == null ? void 0 : _e3.quoteExactOut.expectedAmountIn.toFixed(firstCoin == null ? void 0 : firstCoin.decimals).toString()) != null ? _f2 : "0");
  }, [firstCoinPrice, secondCoinPrice, lastTouchedInput]);
  const invertSelections = () => {
    const pc = firstCoin;
    const sc = secondCoin;
    if (sc)
      onFirstCoinSelect(sc);
    if (pc)
      onSecondCoinSelect(pc);
    setValueIn("1");
  };
  const [swapInMutation] = useMutation(SwapInDocument);
  const [swapOutMutation] = useMutation(SwapOutDocument);
  const handleSwap = async () => {
    var _a3, _b2, _c2, _d2, _e3, _f2, _g, _h, _i2, _j;
    let swapTx;
    if (lastTouchedInput === "in")
      swapTx = (_e3 = (await swapInMutation({
        variables: {
          swapInput: {
            amountIn: parseFloat(valueIn),
            coinTypeIn: (_a3 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a3 : "",
            quoteAmountOut: parseFloat(valueOut),
            poolInput: {
              coinTypeX: (_b2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _b2 : "",
              coinTypeY: (_c2 = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _c2 : ""
            },
            slippagePct: parseFloat((_d2 = localStorage.getItem("slippage_tolerance")) != null ? _d2 : "0.5")
          }
        }
      })).data) == null ? void 0 : _e3.swapExactIn;
    else
      swapTx = (_j = (await swapOutMutation({
        variables: {
          swapInput: {
            amountOut: parseFloat(valueOut),
            coinTypeOut: (_f2 = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _f2 : "",
            quoteAmountIn: parseFloat(valueIn),
            poolInput: {
              coinTypeX: (_g = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _g : "",
              coinTypeY: (_h = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _h : ""
            },
            slippagePct: parseFloat((_i2 = localStorage.getItem("slippage_tolerance")) != null ? _i2 : "0.5")
          }
        }
      })).data) == null ? void 0 : _j.swapExactOut;
    await (wallet == null ? void 0 : wallet.signAndSubmitTransaction(swapTx).then(() => {
      notifications.addSuccessNotification("Swap successful");
      setValueIn("0");
      setValueOut("0");
      delayRefetchQuery(1e3, ["Balances"]);
    }).catch(() => notifications.addErrorNotification("Swap unsuccessful")));
  };
  const onSelectPrimary = (c) => {
    onFirstCoinSelect(c);
    setValueIn("1");
  };
  const onSelectSecondary = (c) => {
    onSecondCoinSelect(c);
    setValueIn("1");
  };
  const onChangeAmountIn = (e2) => {
    setValueIn(e2.currentTarget.value);
    setLastTouched("in");
  };
  const onChangeAmountOut = (e2) => {
    setValueOut(e2.currentTarget.value);
    setLastTouched("out");
  };
  const error = react.exports.useMemo(() => {
    var _a3, _b2, _c2;
    return (_c2 = (_a3 = firstCoinPrice.error) == null ? void 0 : _a3.message) != null ? _c2 : (_b2 = secondCoinPrice.error) == null ? void 0 : _b2.message;
  }, [firstCoinPrice, secondCoinPrice]);
  return /* @__PURE__ */ jsx(SwapFormView, {
    coins,
    handleSwap,
    invertSelections,
    onSelectPrimary,
    onSelectSecondary,
    primaryCoin: firstCoin,
    secondaryCoin: secondCoin,
    onChangeValueIn: onChangeAmountIn,
    onChangeValueOut: onChangeAmountOut,
    valueIn,
    valueOut,
    loading: firstCoinPrice.loading,
    helperText: error,
    quoteIn: firstCoinPrice.data,
    quoteOut: secondCoinPrice.data
  });
}
function SwapModalView({}) {
  return /* @__PURE__ */ jsx(El, {
    trigger: /* @__PURE__ */ jsx(cr, {
      size: "sm",
      onClick: () => {
      },
      children: "Swap"
    }),
    children: /* @__PURE__ */ jsx(SwapFormContainer, {})
  });
}
function SwapModalContainer({}) {
  return /* @__PURE__ */ jsx(SwapModalView, {});
}
function RegisterCoinModalView({
  coins,
  trigger,
  executeSwap
}) {
  const [registerCoin] = useMutation(RegisterCoinDocument);
  const wallet = dist.useWallet();
  const notifications = Ha();
  const [registered, setRegistered] = react.exports.useState(/* @__PURE__ */ new Map());
  const clearRegistered = (_coins) => {
    const state = /* @__PURE__ */ new Map();
    _coins == null ? void 0 : _coins.forEach((c) => state.set(c == null ? void 0 : c.symbol, false));
    setRegistered(state);
  };
  react.exports.useEffect(() => {
    const newState = /* @__PURE__ */ new Map();
    coins == null ? void 0 : coins.forEach((c) => newState.set(c.symbol, false));
    setRegistered(newState);
  }, [coins]);
  const allRegistered = react.exports.useMemo(() => {
    let res = true;
    registered.forEach((x) => {
      if (!x)
        res = false;
    });
    return res;
  }, [registered, coins]);
  const modalRef = react.exports.useRef(null);
  const handleRegister = async (c) => {
    var _a2;
    const tx = (_a2 = (await registerCoin({
      variables: {
        registerCoinInput: {
          coinType: c == null ? void 0 : c.coinType
        }
      }
    })).data) == null ? void 0 : _a2.registerCoin;
    await (wallet == null ? void 0 : wallet.signAndSubmitTransaction(tx).then((x) => {
      setRegistered((prev) => {
        prev.set(c == null ? void 0 : c.symbol, true);
        return new Map(prev);
      });
      notifications.addSuccessNotification("Coin successfully registered.");
    }).catch((e2) => notifications.addErrorNotification("Failed to register coin.")));
  };
  const submitSwap = async () => {
    await executeSwap().then(() => {
      var _a2;
      clearRegistered(coins);
      (_a2 = modalRef.current) == null ? void 0 : _a2.closeModal();
    }).catch(() => notifications.addErrorNotification("Failed to execute swap."));
  };
  return !coins || !coins.length ? null : /* @__PURE__ */ jsx(El, {
    trigger,
    ref: modalRef,
    children: /* @__PURE__ */ jsx("div", {
      className: "w-full flex justify-center items-center",
      children: /* @__PURE__ */ jsxs(Aa, {
        className: "flex flex-col gap-4 w-[600px] max-w-[600px] border border-primary-700",
        children: [/* @__PURE__ */ jsx(pl, {
          children: /* @__PURE__ */ jsx("span", {
            className: "font-bold",
            children: "Coin Registration"
          })
        }), /* @__PURE__ */ jsx("p", {
          className: "text-primary-300",
          children: "Please register your coin(s) to transact within the DEX."
        }), coins.map((c) => c && /* @__PURE__ */ jsxs("div", {
          className: " flex gap-4 items-center font-semibold text-xl bg-primary-800 p-4 rounded-lg text-primary-300",
          children: [/* @__PURE__ */ jsx(ai, {
            coin: c == null ? void 0 : c.symbol
          }), c == null ? void 0 : c.symbol, registered.get(c == null ? void 0 : c.symbol) ? /* @__PURE__ */ jsx(yl, {
            size: "sm",
            variant: "success",
            className: "ml-auto",
            children: "Registered"
          }) : /* @__PURE__ */ jsxs(cr, {
            size: "sm",
            className: "ml-auto",
            onClick: async () => await handleRegister(c),
            children: ["Register ", c == null ? void 0 : c.symbol]
          })]
        })), allRegistered ? /* @__PURE__ */ jsx(cr, {
          onClick: submitSwap,
          children: "Submit Swap"
        }) : null]
      })
    })
  });
}
react.exports.memo(RegisterCoinModalView);
function NetworkToggle() {
  const location = window.location;
  const networkOptions = [{
    label: "Mainnet",
    value: "https://mainnet.aux.exchange"
  }, {
    label: "Testnet",
    value: "https://testnet.aux.exchange"
  }, {
    label: "Devnet",
    value: "https://devnet.aux.exchange"
  }, {
    label: "Localnet",
    value: "http://localhost:5173"
  }];
  const currentNetwork = networkOptions.find((n2) => location.origin === n2.value);
  const onNetworkChange = (e2) => location.assign(`${e2.value}${location.pathname}`);
  return /* @__PURE__ */ jsx(Fragment, {
    children: currentNetwork && /* @__PURE__ */ jsx(xl, {
      label: "",
      className: "w-[120px] mt-0 mr-3 bg-slate-900",
      inputClass: "rounded-full border-2 border-slate-600 py-2",
      value: currentNetwork,
      onChange: onNetworkChange,
      options: networkOptions
    })
  });
}
const TradeHistoryDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "TradeHistory"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "tradeHistory"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "baseCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quoteCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "side"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "value"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function useTradeHistory() {
  var _a2, _b;
  const wallet = dist.useWallet();
  const tradeHistoryQuery = useQuery(TradeHistoryDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_b = wallet.account) == null ? void 0 : _b.address)
  });
  return tradeHistoryQuery;
}
function useTradeHistoryTable() {
  var _a2, _b;
  const columnHelper2 = createColumnHelper();
  const tradeHistoryQuery = useTradeHistory();
  const tableRef = react.exports.useRef(null);
  const marketCoins = useCoins();
  const getMarketCoinByType = (coinType) => {
    var _a3;
    return (_a3 = marketCoins.data) == null ? void 0 : _a3.coins.find((mc) => mc.coinType === coinType);
  };
  const tradeHistory = (_b = (_a2 = tradeHistoryQuery.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.tradeHistory;
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b2;
    return {
      loading: tradeHistoryQuery.loading,
      error: (_a3 = tradeHistoryQuery.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(NoTradeHistory, {}),
      data: tradeHistory != null ? tradeHistory : [],
      columns: [columnHelper2.accessor("side", {
        header: "Side",
        cell(cell) {
          const value = cell.getValue();
          return /* @__PURE__ */ jsx("span", {
            className: value === "BUY" ? "text-green-500" : "text-red-500",
            children: value
          });
        }
      }), columnHelper2.accessor("baseCoinType", {
        header: "Base",
        cell(cell) {
          var _a4;
          const val = cell.getValue();
          if (typeof val === "string")
            return (_a4 = getMarketCoinByType(val)) == null ? void 0 : _a4.name;
          return "-";
        }
      }), columnHelper2.accessor("quoteCoinType", {
        header: "Quote",
        cell(cell) {
          var _a4;
          const val = cell.getValue();
          if (typeof val === "string")
            return (_a4 = getMarketCoinByType(val)) == null ? void 0 : _a4.name;
          return "-";
        }
      }), columnHelper2.accessor("price", {
        header: "Price",
        cell({
          getValue
        }) {
          return Number(getValue()).toLocaleString();
        }
      }), {
        accessorKey: "quantity",
        header: "Quantity"
      }, columnHelper2.accessor("value", {
        header: "Value",
        cell({
          getValue
        }) {
          return Number(getValue()).toLocaleString();
        }
      }), columnHelper2.accessor("time", {
        header: "Time",
        cell(cell) {
          return DateTime.fromJSDate(new Date(Number(cell.getValue()))).toRelative();
        }
      })],
      virtualizeOptions: {
        count: (_b2 = tradeHistory == null ? void 0 : tradeHistory.length) != null ? _b2 : 0,
        estimateSize: () => {
          var _a4;
          return (_a4 = tradeHistory == null ? void 0 : tradeHistory.length) != null ? _a4 : 0;
        },
        getScrollElement: () => tableRef.current,
        overscan: 20
      }
    };
  }, [tradeHistory, getMarketCoinByType, tradeHistoryQuery.loading, tradeHistoryQuery.error]);
  return [tableProps, tableRef];
}
function NoTradeHistory() {
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: /* @__PURE__ */ jsx("div", {
        className: "text-lg",
        children: "No recent trades for this market."
      })
    })
  });
}
function TradeTable({}) {
  const [tradeTableProps, tradeTableRef] = useTradeHistoryTable();
  return /* @__PURE__ */ jsx(Rl, {
    loading: tradeTableProps.loading,
    error: tradeTableProps.error,
    noData: tradeTableProps.noData,
    columns: tradeTableProps.columns,
    data: tradeTableProps.data,
    virtualizeOptions: tradeTableProps.virtualizeOptions,
    customRowRender: tradeTableProps.customRowRender,
    className: tradeTableProps.className
  });
}
function usePoolPositionsTable() {
  var _a2, _b;
  const poolsQuery = usePositions();
  const pools = (_b = (_a2 = poolsQuery.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.poolPositions;
  const tableRef = react.exports.useRef(null);
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b2;
    return {
      loading: poolsQuery.loading,
      error: (_a3 = poolsQuery.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(NoPositions, {}),
      data: pools != null ? pools : [],
      columns: [{
        accessorKey: "name",
        header: "Pool",
        cell: (cell) => {
          var _a4, _b3;
          const value = cell.getValue();
          const rowValues = cell.row.original;
          const poolUrl = `/pool?coinx=${rowValues.coinInfoX.coinType}?coiny=${rowValues.coinInfoY.coinType}`;
          return /* @__PURE__ */ jsxs(Link, {
            to: poolUrl,
            className: "flex items-center gap-3 py-2",
            children: [/* @__PURE__ */ jsx(bl, {
              size: 32,
              coins: [(_a4 = rowValues.coinInfoX) == null ? void 0 : _a4.symbol, (_b3 = rowValues.coinInfoY) == null ? void 0 : _b3.symbol]
            }), value]
          });
        }
      }, {
        accessorKey: "coinInfoX.symbol",
        header: "Coin X"
      }, {
        accessorKey: "amountX",
        header: "Amount X"
      }, {
        accessorKey: "coinInfoY.symbol",
        header: "Coin Y"
      }, {
        accessorKey: "amountY",
        header: "Amount Y"
      }, {
        accessorKey: "share",
        header: "Share"
      }],
      virtualizeOptions: {
        count: (_b2 = pools == null ? void 0 : pools.length) != null ? _b2 : 0,
        estimateSize: () => {
          var _a4;
          return (_a4 = pools == null ? void 0 : pools.length) != null ? _a4 : 0;
        },
        getScrollElement: () => tableRef.current,
        overscan: 20
      }
    };
  }, [pools, poolsQuery.error, poolsQuery.loading]);
  return [tableProps, tableRef];
}
function NoPositions() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-lg",
        children: "You have not added liquidity to any pools."
      }), /* @__PURE__ */ jsx(cr, {
        size: "sm",
        onClick: () => navigate("/pools"),
        children: "Browse Pools"
      })]
    })
  });
}
function PoolPositionsTable({}) {
  const [poolPositionsTableProps] = usePoolPositionsTable();
  return /* @__PURE__ */ jsx(Rl, {
    loading: poolPositionsTableProps.loading,
    error: poolPositionsTableProps.error,
    noData: poolPositionsTableProps.noData,
    columns: poolPositionsTableProps.columns,
    data: poolPositionsTableProps.data,
    virtualizeOptions: poolPositionsTableProps.virtualizeOptions,
    customRowRender: poolPositionsTableProps.customRowRender,
    className: poolPositionsTableProps.className
  });
}
function useBalancesTable() {
  var _a2, _b;
  const balancesQuery = useBalances();
  const tableRef = react.exports.useRef(null);
  const balances = (_b = (_a2 = balancesQuery.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.balances;
  const depositTrigger = /* @__PURE__ */ jsx(cr, {
    size: "xs",
    variant: "buy",
    onClick: () => {
    },
    children: "Deposit"
  });
  const withdrawTrigger = /* @__PURE__ */ jsx(cr, {
    size: "xs",
    variant: "sell",
    onClick: () => {
    },
    children: "Withdraw"
  });
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b2;
    return {
      loading: balancesQuery.loading,
      error: (_a3 = balancesQuery.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(NoBalances$1, {}),
      data: balances != null ? balances : [],
      columns: [{
        accessorKey: "coinInfo",
        header: "Coin",
        cell(cell) {
          const coinInfo = cell.getValue();
          return /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-3 w-[280px]",
            children: [/* @__PURE__ */ jsx(ai, {
              coin: coinInfo == null ? void 0 : coinInfo.symbol,
              size: 32
            }), coinInfo == null ? void 0 : coinInfo.symbol]
          });
        }
      }, {
        accessorKey: "availableBalance",
        header: "Available Balance",
        cell(cell) {
          const value = cell.getValue();
          return /* @__PURE__ */ jsx("div", {
            className: "w-44",
            children: value
          });
        }
      }, {
        accessorKey: "balance",
        header: "Total Balance",
        cell(cell) {
          const value = cell.getValue();
          return /* @__PURE__ */ jsx("div", {
            className: "w-44",
            children: value
          });
        }
      }, {
        accessorKey: "coinInfo.symbol",
        header: "",
        cell(cell) {
          const rowValues = cell.row.original;
          return /* @__PURE__ */ jsxs("div", {
            className: "flex items-end w-full gap-2 ml-auto",
            children: [/* @__PURE__ */ jsx(DepositContainer, {
              trigger: depositTrigger
            }), rowValues.availableBalance ? /* @__PURE__ */ jsx(WithdrawalContainer, {
              coin: rowValues.coinInfo,
              trigger: withdrawTrigger
            }) : null]
          });
        }
      }],
      virtualizeOptions: {
        count: (_b2 = balances == null ? void 0 : balances.length) != null ? _b2 : 0,
        estimateSize: () => {
          var _a4;
          return (_a4 = balances == null ? void 0 : balances.length) != null ? _a4 : 0;
        },
        getScrollElement: () => tableRef.current,
        overscan: 20
      }
    };
  }, [balances, balancesQuery.loading, balancesQuery.error]);
  return [tableProps, tableRef];
}
function NoBalances$1() {
  const depositTrigger = /* @__PURE__ */ jsx(cr, {
    size: "xs",
    onClick: () => {
    },
    children: "Deposit From Wallet"
  });
  const appTitle = window.appTitle;
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full border-b border-b-primary-700",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-lg",
        children: ["No balances in your ", appTitle, " Account. Deposit some coins to start trading."]
      }), /* @__PURE__ */ jsx(DepositContainer, {
        trigger: depositTrigger
      })]
    })
  });
}
const WalletBalancesDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "WalletBalances"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "walletBalances"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfo"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "balance"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "availableBalance"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function useWalletBalances() {
  var _a2, _b;
  const wallet = dist.useWallet();
  const walletBalancesQuery = useQuery(WalletBalancesDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_b = wallet.account) == null ? void 0 : _b.address)
  });
  return walletBalancesQuery;
}
function useWalletBalancesTable() {
  var _a2, _b;
  const walletBalancesQuery = useWalletBalances();
  const walletBalances = (_b = (_a2 = walletBalancesQuery.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.walletBalances;
  const tableRef = react.exports.useRef(null);
  const columnHelper2 = createColumnHelper();
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b2;
    return {
      loading: walletBalancesQuery.loading,
      error: (_a3 = walletBalancesQuery.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(NoBalances, {}),
      data: walletBalances != null ? walletBalances : [],
      columns: [columnHelper2.accessor("coinInfo", {
        header: "Coin",
        cell(cell) {
          const coinInfo = cell.getValue();
          return /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-3 w-[280px] max-w-[280px]",
            children: [/* @__PURE__ */ jsx(ai, {
              coin: coinInfo == null ? void 0 : coinInfo.symbol,
              size: 32
            }), coinInfo == null ? void 0 : coinInfo.symbol]
          });
        }
      }), columnHelper2.accessor("availableBalance", {
        header: "Available Balance",
        cell(cell) {
          const value = cell.getValue();
          return /* @__PURE__ */ jsx("div", {
            className: "w-44 max-w-[176px]",
            children: value
          });
        }
      }), columnHelper2.accessor("balance", {
        header: "Total Balance",
        cell(cell) {
          const value = cell.getValue();
          return /* @__PURE__ */ jsx("div", {
            className: "w-[360px]",
            children: value
          });
        }
      })],
      virtualizeOptions: {
        count: (_b2 = walletBalances == null ? void 0 : walletBalances.length) != null ? _b2 : 0,
        estimateSize: () => {
          var _a4;
          return (_a4 = walletBalances == null ? void 0 : walletBalances.length) != null ? _a4 : 0;
        },
        getScrollElement: () => tableRef.current,
        overscan: 20
      }
    };
  }, [walletBalances, walletBalancesQuery.loading, walletBalancesQuery.error]);
  return [tableProps, tableRef];
}
function NoBalances() {
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-lg",
        children: "No balances in your wallet."
      }), /* @__PURE__ */ jsx(DepositContainer, {})]
    })
  });
}
function BalancesTable({
  variant
}) {
  const [balanceTableProps] = variant && variant === "wallet" ? useWalletBalancesTable() : useBalancesTable();
  return /* @__PURE__ */ jsx(Rl, {
    loading: balanceTableProps.loading,
    error: balanceTableProps.error,
    noData: balanceTableProps.noData,
    columns: balanceTableProps.columns,
    data: balanceTableProps.data,
    virtualizeOptions: balanceTableProps.virtualizeOptions,
    customRowRender: balanceTableProps.customRowRender,
    className: balanceTableProps.className
  });
}
const OrdersDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Orders"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "account"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "owner"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "owner"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "openOrders"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "baseCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quoteCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "orderId"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "owner"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "orderType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "orderStatus"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "side"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "auxBurned"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "orderHistory"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "baseCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quoteCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "orderId"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "owner"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "orderType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "orderStatus"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "side"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "auxBurned"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function useOrders() {
  var _a2, _b;
  const wallet = dist.useWallet();
  const ordersQuery = useQuery(OrdersDocument, {
    variables: {
      owner: (_a2 = wallet.account) == null ? void 0 : _a2.address
    },
    skip: !((_b = wallet.account) == null ? void 0 : _b.address)
  });
  return ordersQuery;
}
const MarketSimpleDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "MarketSimple"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "MarketInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "market"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "lotSize"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "tickSize"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "tickSizeString"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "lotSizeString"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "tickSizeDecimals"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "lotSizeDecimals"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const PlaceOrderDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "PlaceOrder"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "placeOrderInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PlaceOrderInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "placeOrder"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "placeOrderInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "placeOrderInput"
            }
          }
        }]
      }]
    }
  }]
};
const CancelOrderDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "CancelOrder"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "cancelOrderInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "CancelOrderInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "cancelOrder"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "cancelOrderInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "cancelOrderInput"
            }
          }
        }]
      }]
    }
  }]
};
const TradingViewMarketsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "TradingViewMarkets"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "markets"
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const TradingViewQueryDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "TradingViewQuery"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "resolution"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Resolution"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MarketInput"
            }
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "from"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Int"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "to"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Int"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "firstDataRequest"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Boolean"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "countBack"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Int"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "markets"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "bars"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "resolution"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "resolution"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "from"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "from"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "to"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "firstDataRequest"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "firstDataRequest"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "countBack"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "countBack"
                }
              }
            }],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "ohlcv"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "open"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "high"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "low"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "close"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "volume"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const PythRatingDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "PythRating"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "price"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Float"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "side"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Side"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "MarketInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "market"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "pythRating"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "price"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }
            }, {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "side"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "side"
                }
              }
            }],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "color"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "message"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const TvBarsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "TVBars"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "resolution"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Resolution"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MarketInput"
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "bar"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "resolution"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "resolution"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "time"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "ohlcv"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "open"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "high"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "low"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "close"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "volume"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const getBadgeVariant = (val) => {
  switch (val) {
    case "open":
      return "default";
    case "filled":
      return "success";
    case "canceled":
      return "error";
    default:
      return "default";
  }
};
const columnHelper = createColumnHelper();
const marketCol = columnHelper.accessor("market", {
  header: "Market",
  cell: (cell) => {
    var _a2, _b;
    const value = cell.getValue();
    const rowValues = cell.row.original;
    return /* @__PURE__ */ jsxs(Link, {
      to: "/trade",
      className: "flex items-center gap-3 py-2",
      children: [rowValues.baseCoinInfo && rowValues.quoteCoinInfo ? /* @__PURE__ */ jsx(bl, {
        size: 20,
        coins: [(_a2 = rowValues.baseCoinInfo) == null ? void 0 : _a2.symbol, (_b = rowValues.quoteCoinInfo) == null ? void 0 : _b.symbol]
      }) : null, value]
    });
  }
});
const sideCol = columnHelper.accessor("side", {
  header: "Side",
  cell: (cell) => {
    const value = cell.getValue();
    return /* @__PURE__ */ jsx("span", {
      className: value === "BUY" ? "text-green-500" : "text-red-500",
      children: value
    });
  }
});
const quantityCol = columnHelper.accessor("quantity", {
  header: "Amount"
});
const priceCol = columnHelper.accessor("price", {
  header: "Price"
});
const orderTypeCol = columnHelper.accessor("orderType", {
  header: "Type"
});
const timeCol = columnHelper.accessor("time", {
  header: "Time",
  cell(cell) {
    return DateTime.fromJSDate(new Date(Number(cell.getValue()))).toRelative();
  }
});
const orderStatusCol = columnHelper.accessor("orderStatus", {
  header: "Status",
  cell: (cell) => {
    const value = cell.getValue();
    if (value) {
      const variant = getBadgeVariant(value);
      return /* @__PURE__ */ jsx(yl, {
        size: "xs",
        variant,
        children: value
      });
    }
    return null;
  }
});
const baseColumns = [marketCol, sideCol, quantityCol, priceCol, orderTypeCol, timeCol, orderStatusCol];
function useOpenOrdersTable() {
  var _a2, _b, _c;
  const wallet = dist.useWallet();
  const marketCoins = useCoins();
  const [cancelOrder] = useMutation(CancelOrderDocument);
  const orders = useOrders();
  const tableRef = react.exports.useRef(null);
  const getCoin = (a2) => {
    var _a3;
    return (_a3 = marketCoins == null ? void 0 : marketCoins.data) == null ? void 0 : _a3.coins.find((m) => m.coinType === a2);
  };
  const orderIdCol = columnHelper.accessor("orderId", {
    header: "",
    cell: (cell) => {
      var _a3, _b2, _c2;
      const value = cell.getValue();
      const idx = cell.row.index;
      const cellValue = (_c2 = (_b2 = (_a3 = orders.data) == null ? void 0 : _a3.account) == null ? void 0 : _b2.openOrders) == null ? void 0 : _c2[idx];
      const onCancelOrder = async () => {
        var _a4, _b3;
        if ((cellValue == null ? void 0 : cellValue.baseCoinType) && (cellValue == null ? void 0 : cellValue.quoteCoinType)) {
          const tx = await cancelOrder({
            variables: {
              cancelOrderInput: {
                orderId: value != null ? value : "",
                sender: (_a4 = wallet.account) == null ? void 0 : _a4.address,
                marketInput: {
                  baseCoinType: cellValue == null ? void 0 : cellValue.baseCoinType,
                  quoteCoinType: cellValue == null ? void 0 : cellValue.quoteCoinType
                }
              }
            },
            refetchQueries: ["Orders"]
          });
          await (wallet == null ? void 0 : wallet.signAndSubmitTransaction((_b3 = tx.data) == null ? void 0 : _b3.cancelOrder));
        }
      };
      return /* @__PURE__ */ jsx("button", {
        onClick: onCancelOrder,
        className: "flex items-center w-[24px] h-[24px] color-primary-300 rounded-full p-1 ml-2 cursor-pointer hover:bg-primary-700 hover:color-white",
        children: /* @__PURE__ */ jsx(XMarkIcon, {
          className: "w-4 h-4"
        })
      });
    }
  });
  const openOrders = (_b = (_a2 = orders.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.openOrders;
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b2, _c2;
    return {
      loading: orders.loading,
      error: (_a3 = orders.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(NoOpenOrders, {}),
      data: (_b2 = openOrders == null ? void 0 : openOrders.map((order) => {
        const baseCoinInfo = getCoin(order.baseCoinType);
        const quoteCoinInfo = getCoin(order.quoteCoinType);
        const market = baseCoinInfo && quoteCoinInfo ? `${baseCoinInfo.symbol}/${quoteCoinInfo.symbol}` : null;
        return {
          ...order,
          baseCoinInfo,
          quoteCoinInfo,
          market
        };
      })) != null ? _b2 : [],
      columns: [...baseColumns, orderIdCol],
      virtualizeOptions: {
        count: (_c2 = openOrders == null ? void 0 : openOrders.length) != null ? _c2 : 200,
        estimateSize: () => {
          var _a4;
          return (_a4 = openOrders == null ? void 0 : openOrders.length) != null ? _a4 : 200;
        },
        getScrollElement: () => tableRef.current,
        overscan: 200
      }
    };
  }, [(_c = wallet.account) == null ? void 0 : _c.address, orders.data, orders.loading]);
  return [tableProps, tableRef];
}
function useOrderHistoryTable(displayMarket) {
  var _a2, _b;
  const orders = useOrders();
  const marketCoins = useCoins();
  const tableRef = react.exports.useRef(null);
  const orderHistory = (_b = (_a2 = orders.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.orderHistory;
  const getCoin = (a2) => {
    var _a3;
    return (_a3 = marketCoins == null ? void 0 : marketCoins.data) == null ? void 0 : _a3.coins.find((m) => m.coinType === a2);
  };
  const tableProps = react.exports.useMemo(() => {
    var _a3, _b2, _c;
    return {
      loading: orders.loading,
      error: (_a3 = orders.error) == null ? void 0 : _a3.message,
      noData: /* @__PURE__ */ jsx(NoOrderHistory, {}),
      data: (_b2 = orderHistory == null ? void 0 : orderHistory.map((order) => {
        const baseCoinInfo = getCoin(order.baseCoinType);
        const quoteCoinInfo = getCoin(order.quoteCoinType);
        const market = baseCoinInfo && quoteCoinInfo ? `${baseCoinInfo.symbol}/${quoteCoinInfo.symbol}` : null;
        return {
          ...order,
          baseCoinInfo,
          quoteCoinInfo,
          market
        };
      })) != null ? _b2 : [],
      columns: baseColumns,
      virtualizeOptions: {
        count: (_c = orderHistory == null ? void 0 : orderHistory.length) != null ? _c : 200,
        estimateSize: () => {
          var _a4;
          return (_a4 = orderHistory == null ? void 0 : orderHistory.length) != null ? _a4 : 200;
        },
        getScrollElement: () => tableRef.current,
        overscan: 200
      }
    };
  }, [orders.data, orders.loading, orders.error]);
  return [tableProps, tableRef];
}
function NoOpenOrders() {
  const navigate = useNavigate();
  const location = useLocation();
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-lg",
        children: "You have no open orders. Submit one and it will show up here."
      }), location.pathname !== "/trade" && /* @__PURE__ */ jsx(cr, {
        size: "sm",
        onClick: () => navigate("/trade"),
        children: "Start Trading"
      })]
    })
  });
}
function NoOrderHistory() {
  const navigate = useNavigate();
  const location = useLocation();
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-lg",
        children: "No past orders. Once an order completes it will show up here."
      }), location.pathname !== "/trade" && /* @__PURE__ */ jsx(cr, {
        size: "sm",
        onClick: () => navigate("/trade"),
        children: "Start Trading"
      })]
    })
  });
}
function OrdersTable({
  variant,
  market
}) {
  const [orderTableProps] = variant && variant === "open" ? useOpenOrdersTable() : useOrderHistoryTable();
  return /* @__PURE__ */ jsx(Rl, {
    noData: orderTableProps.noData,
    loading: orderTableProps.loading,
    columns: orderTableProps.columns,
    data: orderTableProps.data,
    virtualizeOptions: orderTableProps.virtualizeOptions,
    customRowRender: orderTableProps.customRowRender,
    className: orderTableProps.className
  });
}
const WithdrawDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "Withdraw"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "withdrawInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "WithdrawInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "withdraw"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "withdrawInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "withdrawInput"
            }
          }
        }]
      }]
    }
  }]
};
function WithdrawalView({
  withdraw,
  trigger,
  coin: _coin
}) {
  var _a2, _b, _c, _d, _e2;
  const [amount, setAmount] = react.exports.useState(0);
  const wallet = dist.useWallet();
  const balances = useBalances();
  const coinsQuery = useCoins();
  const fullBalances = (_b = (_a2 = balances.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.balances;
  const coins = (_c = fullBalances == null ? void 0 : fullBalances.map((b2) => b2.coinInfo)) != null ? _c : [];
  const [coin, selectCoin] = react.exports.useState(_coin);
  const [balance, setBalance] = react.exports.useState("-");
  const isCoinRegistered = useQuery(IsCoinRegisteredDocument, {
    variables: {
      coinType: (_d = coin == null ? void 0 : coin.coinType) != null ? _d : "",
      owner: (_e2 = wallet.account) == null ? void 0 : _e2.address
    },
    skip: !(coin == null ? void 0 : coin.coinType)
  });
  react.exports.useEffect(() => {
    if (!coin && coinsQuery.data) {
      const found = coinsQuery.data.coins.find((c) => c.symbol === "USDC");
      if (found)
        selectCoin(found);
    }
  }, [coins, coinsQuery.data]);
  const [registerCoin] = useMutation(RegisterCoinDocument);
  const modalRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const currentCoin = fullBalances == null ? void 0 : fullBalances.find((b2) => b2.coinInfo.symbol === (coin == null ? void 0 : coin.symbol));
    if (currentCoin)
      setBalance(currentCoin.availableBalance.toString());
  }, [coin, fullBalances]);
  const notifications = Ha();
  return /* @__PURE__ */ jsx(El, {
    ref: modalRef,
    trigger: trigger != null ? trigger : /* @__PURE__ */ jsx(cr, {
      size: "sm",
      onClick: () => {
      },
      children: "Withdraw"
    }),
    children: /* @__PURE__ */ jsxs(Aa, {
      className: "w-[700px] mx-auto gap-4 flex flex-col",
      padding: 6,
      children: [/* @__PURE__ */ jsx(pl, {
        className: "mb-4",
        children: "Withdraw"
      }), !coins.length && /* @__PURE__ */ jsx(Ir, {
        title: "Nothing to withdraw.",
        message: "Cannot find existing balances in your wallet. Please add some money."
      }), /* @__PURE__ */ jsxs("div", {
        className: "rounded-xl p-6 flex bg-primary-800 shadow-md justify-between text-white font-bold",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex justify-between flex-auto flex-col gap-2",
          children: [/* @__PURE__ */ jsx(nt, {
            className: "text-primary-300",
            children: "Enter Withdrawal Amount"
          }), /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsx(CoinSearchModalContainer, {
              coins,
              trigger: /* @__PURE__ */ jsx(CoinSelectButton, {
                coin
              }),
              onCoinSelect: (c) => selectCoin(c)
            })
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between flex-auto flex-col gap-4",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "text-sm text-right",
            children: ["Available Balance: ", balance]
          }), /* @__PURE__ */ jsx("input", {
            disabled: false,
            inputMode: "decimal",
            min: "0",
            type: "number",
            onChange: (e2) => setAmount(Number(e2.currentTarget.value)),
            value: amount,
            className: "bg-transparent focus:outline-none h-[44px] text-2xl md:text-4xl placeholder:text-bds-dark-secondarys-DB500 text-white font-azeret w-full md:text-right",
            placeholder: "0.00"
          })]
        })]
      }), /* @__PURE__ */ jsx(cr, {
        disabled: !coin || Number(balance) < amount,
        onClick: async () => {
          var _a3, _b2, _c2;
          if (coin) {
            if (!((_a3 = isCoinRegistered.data) == null ? void 0 : _a3.account)) {
              const tx = await registerCoin({
                variables: {
                  registerCoinInput: {
                    coinType: coin == null ? void 0 : coin.coinType
                  }
                }
              });
              await (wallet == null ? void 0 : wallet.signAndSubmitTransaction((_b2 = tx.data) == null ? void 0 : _b2.registerCoin));
            }
            await withdraw({
              amount,
              coinType: coin.coinType,
              from: (_c2 = wallet.account) == null ? void 0 : _c2.address
            }).then(() => {
              var _a4;
              (_a4 = modalRef.current) == null ? void 0 : _a4.closeModal();
              notifications.addSuccessNotification("Successfully withdrew balance!");
            }).catch(() => notifications.addErrorNotification("Failed to withdraw balance!"));
          }
        },
        children: "Submit Withdrawal"
      })]
    })
  });
}
function WithdrawalContainer({
  trigger,
  coin
}) {
  const wallet = dist.useWallet();
  const [withdrawMutation] = useMutation(WithdrawDocument);
  const withdraw = async (withdrawInput) => {
    var _a2;
    const tx = await withdrawMutation({
      variables: {
        withdrawInput
      }
    });
    await (wallet == null ? void 0 : wallet.signAndSubmitTransaction((_a2 = tx.data) == null ? void 0 : _a2.withdraw));
    await delayRefetchQuery(1e3, ["Balances"]);
  };
  return /* @__PURE__ */ jsx(WithdrawalView, {
    withdraw,
    coin,
    trigger: trigger ? /* @__PURE__ */ jsx(Fragment, {
      children: trigger
    }) : /* @__PURE__ */ jsx(cr, {
      size: "sm",
      onClick: () => {
      },
      children: "Withdraw"
    })
  });
}
function MarketListItem({
  market,
  className,
  onMarketSelect
}) {
  const baseClasses = "flex justify-between items-center rounded-lg p-4 transition duration-150 ease-in-out hover:cursor-pointer hover:bg-secondary-800 active:bg-secondary-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50";
  const getPriceTextColor = () => {
    return "text-primary-400";
  };
  const priceTextColor = getPriceTextColor();
  const metaClasses = `text-xs font-bold flex flex-row justify-end w-full ${priceTextColor}`;
  const onMarketSelectHandler = react.exports.useCallback(() => onMarketSelect == null ? void 0 : onMarketSelect(market), [market, onMarketSelect]);
  return /* @__PURE__ */ jsxs("div", {
    className: `${baseClasses} ${className}`,
    onClick: onMarketSelectHandler,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex shrink-0 items-center justify-center",
      children: [/* @__PURE__ */ jsx(bl, {
        coins: [market == null ? void 0 : market.baseCoinInfo.symbol, market == null ? void 0 : market.quoteCoinInfo.symbol].filter(Boolean),
        size: 32
      }), /* @__PURE__ */ jsxs("div", {
        className: "ml-3",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "text-xl font-medium text-white mb-1",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "",
            children: [market == null ? void 0 : market.baseCoinInfo.symbol, "/", market == null ? void 0 : market.quoteCoinInfo.symbol]
          }), /* @__PURE__ */ jsx("div", {
            className: "text-sm text-primary-400",
            children: market == null ? void 0 : market.name
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "text-xs font-bold text-primary-400 uppercase"
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col items-center text-right",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-xl text-primary-200 mb-1"
      }), /* @__PURE__ */ jsx("div", {
        className: metaClasses
      })]
    })]
  });
}
function MarketList({
  markets,
  onMarketSelect
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: markets == null ? void 0 : markets.map((item, index2) => /* @__PURE__ */ jsx(MarketListItem, {
      market: item,
      onMarketSelect
    }, `${item.name}-${index2}`))
  });
}
const GetMarketNameDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "GetMarketName"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "MarketInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "market"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
const MarketsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Markets"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "markets"
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "name"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinInfo"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function useMarkets() {
  const markets = useQuery(MarketsDocument);
  return markets;
}
function e(t2, i2) {
  const n2 = { ...t2 };
  for (const o2 in i2)
    "object" != typeof t2[o2] || null === t2[o2] || Array.isArray(t2[o2]) ? void 0 !== i2[o2] && (n2[o2] = i2[o2]) : n2[o2] = e(t2[o2], i2[o2]);
  return n2;
}
const t = { mobile: { disabled_features: ["left_toolbar", "header_widget", "timeframes_toolbar", "edit_buttons_in_legend", "context_menus", "control_bar", "border_around_the_chart"], enabled_features: [] } }, i = { width: 800, height: 500, interval: "1D", timezone: "Etc/UTC", container: "", library_path: "", locale: "en", widgetbar: { details: false, watchlist: false, watchlist_settings: { default_symbols: [] } }, overrides: { "mainSeriesProperties.showCountdown": false }, studies_overrides: {}, trading_customization: { position: {}, order: {} }, brokerConfig: { configFlags: {} }, fullscreen: false, autosize: false, disabled_features: [], enabled_features: [], debug: false, logo: {}, time_frames: [{ text: "5y", resolution: "1W" }, { text: "1y", resolution: "1W" }, { text: "6m", resolution: "120" }, { text: "3m", resolution: "60" }, { text: "1m", resolution: "30" }, { text: "5d", resolution: "5" }, { text: "1d", resolution: "1" }], client_id: "0", user_id: "0", charts_storage_api_version: "1.0", favorites: { intervals: [], chartTypes: [] } };
let n = false;
function o() {
  return "CL v22.032 (internal id e2a841ff @ 2022-07-06T11:53:07.702Z)";
}
const s = class {
  constructor(o2) {
    if (this._id = `tradingview_${(1048576 * (1 + Math.random()) | 0).toString(16).substring(1)}`, this._ready = false, this._readyHandlers = [], this._onWindowResize = this._autoResizeChart.bind(this), !o2.datafeed)
      throw new Error("Datafeed is not defined");
    if (this._options = e(i, o2), o2.preset) {
      const e2 = t[o2.preset];
      e2 ? (void 0 !== this._options.disabled_features ? this._options.disabled_features = this._options.disabled_features.concat(e2.disabled_features) : this._options.disabled_features = e2.disabled_features, void 0 !== this._options.enabled_features ? this._options.enabled_features = this._options.enabled_features.concat(e2.enabled_features) : this._options.enabled_features = e2.enabled_features) : console.warn("Unknown preset: `" + o2.preset + "`");
    }
    "Dark" === this._options.theme && void 0 === this._options.loading_screen && (this._options.loading_screen = { backgroundColor: "#131722" }), this._options.debug && (n || (n = true, console.log("Using CL v22.032 (internal id e2a841ff @ 2022-07-06T11:53:07.702Z)"))), this._create();
  }
  onChartReady(e2) {
    this._ready ? e2.call(this) : this._readyHandlers.push(e2);
  }
  headerReady() {
    return this._innerWindowLoaded.then(() => this._innerWindow().headerReady());
  }
  onGrayedObjectClicked(e2) {
    this._doWhenInnerApiLoaded((t2) => {
      t2.onGrayedObjectClicked(e2);
    });
  }
  onShortcut(e2, t2) {
    this._doWhenInnerWindowLoaded((i2) => {
      i2.createShortcutAction(e2, t2);
    });
  }
  subscribe(e2, t2) {
    this._doWhenInnerApiLoaded((i2) => {
      i2.subscribe(e2, t2);
    });
  }
  unsubscribe(e2, t2) {
    this._doWhenInnerApiLoaded((i2) => {
      i2.unsubscribe(e2, t2);
    });
  }
  chart(e2) {
    return this._innerAPI().chart(e2);
  }
  getLanguage() {
    return this._options.locale;
  }
  setSymbol(e2, t2, i2) {
    this._innerAPI().changeSymbol(e2, t2, i2);
  }
  remove() {
    window.removeEventListener("resize", this._onWindowResize), this._readyHandlers.splice(0, this._readyHandlers.length), delete window[this._id], this._iFrame.parentNode && this._iFrame.parentNode.removeChild(this._iFrame);
  }
  closePopupsAndDialogs() {
    this._doWhenInnerApiLoaded((e2) => {
      e2.closePopupsAndDialogs();
    });
  }
  selectLineTool(e2) {
    this._innerAPI().selectLineTool(e2);
  }
  selectedLineTool() {
    return this._innerAPI().selectedLineTool();
  }
  save(e2) {
    this._innerAPI().saveChart(e2);
  }
  load(e2, t2) {
    this._innerAPI().loadChart({ json: e2, extendedData: t2 });
  }
  getSavedCharts(e2) {
    this._innerAPI().getSavedCharts(e2);
  }
  loadChartFromServer(e2) {
    this._innerAPI().loadChartFromServer(e2);
  }
  saveChartToServer(e2, t2, i2) {
    this._innerAPI().saveChartToServer(e2, t2, i2);
  }
  removeChartFromServer(e2, t2) {
    this._innerAPI().removeChartFromServer(e2, t2);
  }
  onContextMenu(e2) {
    this._doWhenInnerApiLoaded((t2) => {
      t2.onContextMenu(e2);
    });
  }
  createButton(e2) {
    return this._innerWindow().createButton(e2);
  }
  createDropdown(e2) {
    return this._innerWindow().createDropdown(e2);
  }
  showNoticeDialog(e2) {
    this._doWhenInnerApiLoaded((t2) => {
      t2.showNoticeDialog(e2);
    });
  }
  showConfirmDialog(e2) {
    this._doWhenInnerApiLoaded((t2) => {
      t2.showConfirmDialog(e2);
    });
  }
  showLoadChartDialog() {
    this._innerAPI().showLoadChartDialog();
  }
  showSaveAsChartDialog() {
    this._innerAPI().showSaveAsChartDialog();
  }
  symbolInterval() {
    return this._innerAPI().getSymbolInterval();
  }
  mainSeriesPriceFormatter() {
    return this._innerAPI().mainSeriesPriceFormatter();
  }
  getIntervals() {
    return this._innerAPI().getIntervals();
  }
  getStudiesList() {
    return this._innerAPI().getStudiesList();
  }
  getStudyInputs(e2) {
    return this._innerAPI().getStudyInputs(e2);
  }
  addCustomCSSFile(e2) {
    this._innerWindow().addCustomCSSFile(e2);
  }
  applyOverrides(t2) {
    this._options = e(this._options, { overrides: t2 }), this._doWhenInnerWindowLoaded((e2) => {
      e2.applyOverrides(t2);
    });
  }
  applyStudiesOverrides(e2) {
    this._doWhenInnerWindowLoaded((t2) => {
      t2.applyStudiesOverrides(e2);
    });
  }
  watchList() {
    return this._innerAPI().watchlist();
  }
  news() {
    return this._innerAPI().news();
  }
  widgetbar() {
    return this._innerAPI().widgetbar();
  }
  activeChart() {
    return this._innerAPI().activeChart();
  }
  chartsCount() {
    return this._innerAPI().chartsCount();
  }
  layout() {
    return this._innerAPI().layout();
  }
  setLayout(e2) {
    this._innerAPI().setLayout(e2);
  }
  layoutName() {
    return this._innerAPI().layoutName();
  }
  changeTheme(e2, t2) {
    return this._innerWindow().changeTheme(e2, t2);
  }
  getTheme() {
    return this._innerWindow().getTheme();
  }
  takeScreenshot() {
    this._doWhenInnerApiLoaded((e2) => {
      e2.takeScreenshot();
    });
  }
  lockAllDrawingTools() {
    return this._innerAPI().lockAllDrawingTools();
  }
  hideAllDrawingTools() {
    return this._innerAPI().hideAllDrawingTools();
  }
  drawOnAllCharts(e2) {
    this._innerAPI().drawOnAllCharts(e2);
  }
  magnetEnabled() {
    return this._innerAPI().magnetEnabled();
  }
  magnetMode() {
    return this._innerAPI().magnetMode();
  }
  undoRedoState() {
    return this._innerAPI().undoRedoState();
  }
  setIntervalLinkingEnabled(e2) {
    this._innerAPI().setIntervalLinkingEnabled(e2);
  }
  setTimeFrame(e2) {
    this._innerAPI().setTimeFrame(e2);
  }
  symbolSync() {
    return this._innerAPI().symbolSync();
  }
  intervalSync() {
    return this._innerAPI().intervalSync();
  }
  crosshairSync() {
    return this._innerAPI().crosshairSync();
  }
  timeSync() {
    return this._innerAPI().timeSync();
  }
  getAllFeatures() {
    return this._innerWindow().getAllFeatures();
  }
  clearUndoHistory() {
    return this._innerAPI().clearUndoHistory();
  }
  undo() {
    return this._innerAPI().undo();
  }
  redo() {
    return this._innerAPI().redo();
  }
  startFullscreen() {
    this._innerAPI().startFullscreen();
  }
  exitFullscreen() {
    this._innerAPI().exitFullscreen();
  }
  takeClientScreenshot(e2) {
    return this._innerAPI().takeClientScreenshot(e2);
  }
  navigationButtonsVisibility() {
    return this._innerWindow().getNavigationButtonsVisibility();
  }
  paneButtonsVisibility() {
    return this._innerWindow().getPaneButtonsVisibility();
  }
  dateFormat() {
    return this._innerWindow().getDateFormat();
  }
  _innerAPI() {
    return this._innerWindow().tradingViewApi;
  }
  _innerWindow() {
    return this._iFrame.contentWindow;
  }
  _doWhenInnerWindowLoaded(e2) {
    this._ready ? e2(this._innerWindow()) : this._innerWindowLoaded.then(() => {
      e2(this._innerWindow());
    });
  }
  _doWhenInnerApiLoaded(e2) {
    this._doWhenInnerWindowLoaded((t2) => {
      t2.doWhenApiIsReady(() => e2(this._innerAPI()));
    });
  }
  _autoResizeChart() {
    this._options.fullscreen && (this._iFrame.style.height = window.innerHeight + "px");
  }
  _create() {
    const e2 = this._render();
    this._options.container_id && console.warn("`container_id` is now deprecated. Please use `container` instead to either still pass a string or an `HTMLElement`.");
    const t2 = this._options.container_id || this._options.container, i2 = "string" == typeof t2 ? document.getElementById(t2) : t2;
    if (null === i2)
      throw new Error(`There is no such element - #${this._options.container}`);
    i2.innerHTML = e2, this._iFrame = i2.querySelector(`#${this._id}`);
    const n2 = this._iFrame;
    (this._options.autosize || this._options.fullscreen) && (n2.style.width = "100%", this._options.fullscreen || (n2.style.height = "100%")), window.addEventListener("resize", this._onWindowResize), this._onWindowResize(), this._innerWindowLoaded = new Promise((e3) => {
      const t3 = () => {
        n2.removeEventListener("load", t3, false), e3();
      };
      n2.addEventListener("load", t3, false);
    }), this._innerWindowLoaded.then(() => {
      this._innerWindow().widgetReady(() => {
        this._ready = true;
        for (const e3 of this._readyHandlers)
          try {
            e3.call(this);
          } catch (e4) {
            console.error(e4);
          }
        this._innerWindow().initializationFinished();
      });
    });
  }
  _render() {
    const e2 = window;
    if (e2[this._id] = { datafeed: this._options.datafeed, customFormatters: this._options.custom_formatters || this._options.customFormatters, brokerFactory: this._options.broker_factory || this._options.brokerFactory, overrides: this._options.overrides, studiesOverrides: this._options.studies_overrides, tradingCustomization: this._options.trading_customization, disabledFeatures: this._options.disabled_features, enabledFeatures: this._options.enabled_features, brokerConfig: this._options.broker_config || this._options.brokerConfig, restConfig: this._options.restConfig, favorites: this._options.favorites, logo: this._options.logo, numeric_formatting: this._options.numeric_formatting, rss_news_feed: this._options.rss_news_feed, newsProvider: this._options.news_provider, loadLastChart: this._options.load_last_chart, saveLoadAdapter: this._options.save_load_adapter, loading_screen: this._options.loading_screen, settingsAdapter: this._options.settings_adapter, getCustomIndicators: this._options.custom_indicators_getter, additionalSymbolInfoFields: this._options.additional_symbol_info_fields, headerWidgetButtonsMode: this._options.header_widget_buttons_mode, customTranslateFunction: this._options.custom_translate_function, symbolSearchComplete: this._options.symbol_search_complete, contextMenu: this._options.context_menu, settingsOverrides: this._options.settings_overrides }, this._options.saved_data)
      e2[this._id].chartContent = { json: this._options.saved_data }, this._options.saved_data_meta_info && (e2[this._id].chartContentExtendedData = this._options.saved_data_meta_info);
    else if (!this._options.load_last_chart && !this._options.symbol)
      throw new Error("Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set");
    const t2 = (this._options.library_path || "") + `${encodeURIComponent(this._options.locale)}-tv-chart.e2a841ff.html#symbol=` + encodeURIComponent(this._options.symbol || "") + "&interval=" + encodeURIComponent(this._options.interval) + (this._options.timeframe ? "&timeframe=" + encodeURIComponent(this._options.timeframe) : "") + (this._options.toolbar_bg ? "&toolbarbg=" + encodeURIComponent(this._options.toolbar_bg.replace("#", "")) : "") + (this._options.studies_access ? "&studiesAccess=" + encodeURIComponent(JSON.stringify(this._options.studies_access)) : "") + "&widgetbar=" + encodeURIComponent(JSON.stringify(this._options.widgetbar)) + (this._options.drawings_access ? "&drawingsAccess=" + encodeURIComponent(JSON.stringify(this._options.drawings_access)) : "") + "&timeFrames=" + encodeURIComponent(JSON.stringify(this._options.time_frames)) + "&locale=" + encodeURIComponent(this._options.locale) + "&uid=" + encodeURIComponent(this._id) + "&clientId=" + encodeURIComponent(String(this._options.client_id)) + "&userId=" + encodeURIComponent(String(this._options.user_id)) + (this._options.charts_storage_url ? "&chartsStorageUrl=" + encodeURIComponent(this._options.charts_storage_url) : "") + (this._options.charts_storage_api_version ? "&chartsStorageVer=" + encodeURIComponent(this._options.charts_storage_api_version) : "") + (this._options.custom_css_url ? "&customCSS=" + encodeURIComponent(this._options.custom_css_url) : "") + (this._options.custom_font_family ? "&customFontFamily=" + encodeURIComponent(this._options.custom_font_family) : "") + (this._options.auto_save_delay ? "&autoSaveDelay=" + encodeURIComponent(String(this._options.auto_save_delay)) : "") + "&debug=" + encodeURIComponent(String(this._options.debug)) + (this._options.snapshot_url ? "&snapshotUrl=" + encodeURIComponent(this._options.snapshot_url) : "") + (this._options.timezone ? "&timezone=" + encodeURIComponent(this._options.timezone) : "") + (this._options.study_count_limit ? "&studyCountLimit=" + encodeURIComponent(String(this._options.study_count_limit)) : "") + (this._options.symbol_search_request_delay ? "&ssreqdelay=" + encodeURIComponent(String(this._options.symbol_search_request_delay)) : "") + (this._options.compare_symbols ? "&compareSymbols=" + encodeURIComponent(JSON.stringify(this._options.compare_symbols)) : "") + (this._options.theme ? "&theme=" + encodeURIComponent(String(this._options.theme)) : "") + (this._options.header_widget_buttons_mode ? "&header_widget_buttons_mode=" + encodeURIComponent(String(this._options.header_widget_buttons_mode)) : "") + (this._options.time_scale ? "&time_scale=" + encodeURIComponent(JSON.stringify(this._options.time_scale)) : "");
    return '<iframe id="' + this._id + '" name="' + this._id + '"  src="' + t2 + '"' + (this._options.autosize || this._options.fullscreen ? "" : ' width="' + this._options.width + '" height="' + this._options.height + '"') + ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>';
  }
};
window.TradingView = window.TradingView || {}, window.TradingView.version = o;
var OrderType = /* @__PURE__ */ ((OrderType2) => {
  OrderType2["FillOrKill"] = "FILL_OR_KILL";
  OrderType2["ImmediateOrCancel"] = "IMMEDIATE_OR_CANCEL";
  OrderType2["Limit"] = "LIMIT";
  OrderType2["PassiveJoin"] = "PASSIVE_JOIN";
  OrderType2["PostOnly"] = "POST_ONLY";
  return OrderType2;
})(OrderType || {});
var Resolution = /* @__PURE__ */ ((Resolution2) => {
  Resolution2["Days_1"] = "DAYS_1";
  Resolution2["Hours_1"] = "HOURS_1";
  Resolution2["Hours_4"] = "HOURS_4";
  Resolution2["Minutes_1"] = "MINUTES_1";
  Resolution2["Minutes_5"] = "MINUTES_5";
  Resolution2["Minutes_15"] = "MINUTES_15";
  Resolution2["Seconds_15"] = "SECONDS_15";
  Resolution2["Weeks_1"] = "WEEKS_1";
  return Resolution2;
})(Resolution || {});
var Side = /* @__PURE__ */ ((Side2) => {
  Side2["Buy"] = "BUY";
  Side2["Sell"] = "SELL";
  return Side2;
})(Side || {});
const ResolutionFormats = {
  [Resolution.Seconds_15]: "15S",
  [Resolution.Days_1]: "1D",
  [Resolution.Hours_1]: "1H",
  [Resolution.Hours_4]: "4H",
  [Resolution.Minutes_1]: "1",
  [Resolution.Minutes_15]: "15",
  [Resolution.Minutes_5]: "5",
  [Resolution.Weeks_1]: "1W"
};
[
  {
    text: "1 Minute",
    resolution: ResolutionFormats.MINUTES_1,
    description: "1 Minute"
  },
  {
    text: "5 Minutes",
    resolution: ResolutionFormats.MINUTES_5,
    description: "5 Minutes"
  },
  {
    text: "15 Seconds",
    resolution: "15S",
    description: "15 Seconds"
  }
];
const RevResolutionFormats = Object.entries(ResolutionFormats).reduce((acc, [k, v]) => ({
  ...acc,
  [v]: k
}), {});
const supportedResolution = Object.values(ResolutionFormats);
const configurationData = {
  supported_resolutions: supportedResolution,
  exchanges: [{
    value: "AUX",
    name: "AUX Exchange",
    desc: "Aux Exchange"
  }],
  symbols_types: [{
    name: "crypto",
    value: "crypto"
  }]
};
const DataFeedCtx = react.exports.createContext({
  getBars() {
  },
  onReady() {
  },
  resolveSymbol() {
  },
  searchSymbols() {
  },
  subscribeBars() {
  },
  unsubscribeBars() {
  }
});
function formatResolution(res) {
  return RevResolutionFormats[res];
}
const getAllSymbols = (mkts) => {
  var _a2;
  return (_a2 = mkts == null ? void 0 : mkts.map((c) => {
    var _a3, _b;
    return {
      symbol: `${(_a3 = c.baseCoinInfo) == null ? void 0 : _a3.symbol}/${(_b = c.quoteCoinInfo) == null ? void 0 : _b.symbol}`,
      full_name: `${c.name}`,
      exchange: "AUX",
      type: "crypto",
      has_intraday: true,
      description: c.name,
      ticker: c.name
    };
  })) != null ? _a2 : [];
};
const DataFeedProvider = ({
  children
}) => {
  const marketsDif = useQuery(TradingViewMarketsDocument, {
    fetchPolicy: "network-only"
  });
  const [markets, setMarkets] = react.exports.useState([]);
  react.exports.useEffect(() => {
    if (marketsDif.data)
      setMarkets(marketsDif.data.markets);
  }, [marketsDif.data]);
  function onReady(callback) {
    setTimeout(() => callback(configurationData));
  }
  const searchSymbols = function searchSymbols2(userInput, exchange, symbolType, onResultReadyCallback) {
    const symbols = getAllSymbols(markets);
    const newSymbols = symbols.filter((symbol) => {
      const isExchangeValid = exchange === "" || symbol.exchange === exchange;
      const isFullSymbolContainsInput = symbol.full_name.toLowerCase().includes(userInput.toLowerCase());
      return isExchangeValid && isFullSymbolContainsInput;
    });
    onResultReadyCallback(newSymbols);
  };
  const resolveSymbol = react.exports.useCallback(async function resolveSymbol2(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    var _a2;
    const symbols = getAllSymbols(markets);
    const symbolItem = symbols.find(({
      full_name
    }) => full_name === symbolName);
    let retryCount = 3;
    if (!symbolItem) {
      const errorCallbackFactory = (retries) => {
        if (!retries)
          return onResolveErrorCallback;
        return () => {
        };
      };
      while (retryCount) {
        await new Promise((res) => setTimeout(() => res({}), 500));
        retryCount--;
        dataFeed.resolveSymbol(symbolName, onSymbolResolvedCallback, errorCallbackFactory(retryCount));
      }
      onResolveErrorCallback("Cannot resolve symbol. If this symbol is valid please try to again in a moment.");
      return;
    }
    const symbolInfo = {
      ticker: symbolItem.full_name,
      name: symbolItem.full_name,
      full_name: symbolItem.full_name,
      listed_exchange: "AUX",
      description: symbolItem.symbol,
      type: symbolItem.type,
      session: "24x7",
      timezone: "Etc/UTC",
      exchange: symbolItem.exchange,
      minmov: 0.01,
      pricescale: 1e3,
      fractional: false,
      has_seconds: true,
      has_daily: true,
      has_intraday: true,
      has_no_volume: false,
      has_empty_bars: true,
      has_weekly_and_monthly: false,
      supported_resolutions: (_a2 = configurationData.supported_resolutions) != null ? _a2 : [],
      volume_precision: 2,
      data_status: "streaming",
      format: "price"
    };
    onSymbolResolvedCallback(symbolInfo);
  }, [markets, configurationData]);
  const getBars = async function getBars2(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {
    var _a2, _b, _c, _d;
    const {
      from,
      to: to2,
      firstDataRequest,
      countBack
    } = periodParams;
    const market = markets == null ? void 0 : markets.find((m) => m.name === symbolInfo.ticker);
    const data = market && await client.query({
      query: TradingViewQueryDocument,
      variables: {
        resolution: (_a2 = formatResolution(resolution)) != null ? _a2 : Resolution.Minutes_1,
        marketInputs: [{
          baseCoinType: (_b = market == null ? void 0 : market.baseCoinInfo.coinType) != null ? _b : "",
          quoteCoinType: (_c = market == null ? void 0 : market.quoteCoinInfo.coinType) != null ? _c : ""
        }],
        from,
        to: to2,
        firstDataRequest,
        countBack
      }
    });
    const noData = !(data == null ? void 0 : data.data.markets[0].bars.length);
    const queryBars = (_d = data == null ? void 0 : data.data.markets[0]) == null ? void 0 : _d.bars;
    const bars = [];
    queryBars == null ? void 0 : queryBars.forEach(({
      time,
      ohlcv
    }) => {
      if (ohlcv) {
        const {
          open,
          high,
          low,
          close,
          volume
        } = ohlcv;
        bars.push({
          open,
          high,
          low,
          close,
          volume,
          time: Number(time)
        });
      }
    });
    if (noData || !data || data.errors || !data.loading && !(queryBars == null ? void 0 : queryBars.length) || data.loading) {
      onHistoryCallback(bars, {
        noData: true
      });
      return;
    }
    onHistoryCallback(bars, {
      noData: false
    });
  };
  const dataSubRef = react.exports.useRef(null);
  const dataFeed = {
    onReady,
    searchSymbols,
    resolveSymbol,
    getBars,
    subscribeBars: function(symbolInfo, resolution, onTick) {
      var _a2, _b, _c;
      const market = markets == null ? void 0 : markets.find((m) => m.name === symbolInfo.ticker);
      const data$ = client.subscribe({
        query: TvBarsDocument,
        variables: {
          resolution: (_a2 = formatResolution(resolution)) != null ? _a2 : Resolution.Minutes_1,
          marketInputs: [{
            baseCoinType: (_b = market == null ? void 0 : market.baseCoinInfo.coinType) != null ? _b : "",
            quoteCoinType: (_c = market == null ? void 0 : market.quoteCoinInfo.coinType) != null ? _c : ""
          }]
        }
      });
      dataSubRef.current = data$.subscribe((x) => {
        var _a3, _b2;
        if (x.data) {
          const ohlcv = x.data.bar.ohlcv;
          if (ohlcv) {
            const res = {
              ...ohlcv,
              time: Number((_b2 = (_a3 = x.data) == null ? void 0 : _a3.bar.time) != null ? _b2 : "")
            };
            console.log(`[SUB:${symbolInfo.base_name}]`, {
              res
            });
            onTick(res);
          }
        }
      });
    },
    unsubscribeBars() {
      var _a2;
      console.log("[UNSUB]");
      (_a2 = dataSubRef.current) == null ? void 0 : _a2.unsubscribe();
    }
  };
  return /* @__PURE__ */ jsx(DataFeedCtx.Provider, {
    value: dataFeed,
    children
  });
};
function useDataFeed() {
  const [x, y] = react.exports.useState(0);
  react.exports.useEffect(() => {
    if (x)
      console.log("hi");
  }, []);
  return react.exports.useContext(DataFeedCtx);
}
function useCreateTradingView() {
  const datafeed = useDataFeed();
  const [symbol, setSymbol] = react.exports.useState();
  const colorPalette = window.tvColorPalette;
  const tv_overrides = {
    "paneProperties.backgroundType": "solid",
    "paneProperties.background": colorPalette.primary[900],
    toolbar_bg: colorPalette.primary[900],
    "mainSeriesProperties.candleStyle.upColor": colorPalette.green[500],
    "mainSeriesProperties.candleStyle.downColor": colorPalette.red[500],
    "mainSeriesProperties.candleStyle.borderColor": colorPalette.blue[500],
    "mainSeriesProperties.candleStyle.borderUpColor": colorPalette.green[500],
    "mainSeriesProperties.candleStyle.borderDownColor": colorPalette.red[500],
    "mainSeriesProperties.candleStyle.wickColor": colorPalette.blue[500],
    "mainSeriesProperties.candleStyle.wickUpColor": colorPalette.green[500],
    "mainSeriesProperties.candleStyle.wickDownColor": colorPalette.red[500],
    "mainSeriesProperties.hollowCandleStyle.upColor": colorPalette.green[500],
    "mainSeriesProperties.hollowCandleStyle.downColor": colorPalette.red[500],
    "mainSeriesProperties.hollowCandleStyle.borderColor": colorPalette.blue[500],
    "mainSeriesProperties.hollowCandleStyle.borderUpColor": colorPalette.green[500],
    "mainSeriesProperties.hollowCandleStyle.borderDownColor": colorPalette.red[500],
    "mainSeriesProperties.hollowCandleStyle.wickColor": colorPalette.blue[500],
    "mainSeriesProperties.hollowCandleStyle.wickUpColor": colorPalette.green[500],
    "mainSeriesProperties.hollowCandleStyle.wickDownColor": colorPalette.red[500],
    "mainSeriesProperties.haStyle.upColor": colorPalette.green[500],
    "mainSeriesProperties.haStyle.downColor": colorPalette.red[500],
    "mainSeriesProperties.haStyle.borderColor": colorPalette.blue[500],
    "mainSeriesProperties.haStyle.borderUpColor": colorPalette.green[500],
    "mainSeriesProperties.haStyle.borderDownColor": colorPalette.red[500],
    "mainSeriesProperties.haStyle.wickColor": colorPalette.blue[500],
    "mainSeriesProperties.haStyle.wickUpColor": colorPalette.green[500],
    "mainSeriesProperties.haStyle.wickDownColor": colorPalette.red[500],
    "mainSeriesProperties.barStyle.upColor": colorPalette.green[600],
    "mainSeriesProperties.barStyle.downColor": colorPalette.red[600],
    "mainSeriesProperties.lineStyle.color": colorPalette.blue[600],
    "mainSeriesProperties.areaStyle.color1": "rgba(59,130,246, 0.3)",
    "mainSeriesProperties.areaStyle.color2": colorPalette.blue[600],
    "mainSeriesProperties.areaStyle.linecolor": colorPalette.blue[600],
    "mainSeriesProperties.baselineStyle.topFillColor1": "rgba(34, 197, 94, 0.3)",
    "mainSeriesProperties.baselineStyle.topFillColor2": "rgba(34, 197, 94, 0.05)",
    "mainSeriesProperties.baselineStyle.bottomFillColor1": "rgba(239, 68, 68, 0.3)",
    "mainSeriesProperties.baselineStyle.bottomFillColor2": "rgba(239, 68, 68, 0.05)",
    "mainSeriesProperties.baselineStyle.topLineColor": colorPalette.green[500],
    "mainSeriesProperties.baselineStyle.bottomLineColor": colorPalette.red[500]
  };
  react.exports.useEffect(() => {
    localStorage.removeItem("tradingview.current_theme.name");
    if (symbol) {
      window.tvWidget = new s({
        symbol,
        interval: "1",
        locale: "en",
        autosize: true,
        custom_css_url: "/charts.css",
        fullscreen: false,
        container: "tv_chart_container",
        datafeed,
        theme: "Dark",
        library_path: "/charting_library/",
        disabled_features: ["left_toolbar", "time_frames"],
        timeframe: "1D",
        timezone: "America/New_York",
        loading_screen: {
          backgroundColor: colorPalette.primary[900],
          foregroundColor: colorPalette.primary[900]
        },
        time_frames: [],
        overrides: tv_overrides
      });
      window.tvWidget.applyOverrides(tv_overrides);
    }
  }, [symbol]);
  return ({
    symbol: symbol2,
    interval
  }) => {
    setSymbol(symbol2);
  };
}
function MarketSelector({
  onSelectMarket
}) {
  var _a2, _b, _c, _d, _e2;
  const createTradingView = useCreateTradingView();
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const marketsQuery = useMarkets();
  const marketQueryName = useQuery(GetMarketNameDocument, {
    variables: {
      marketInput: {
        baseCoinType: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        quoteCoinType: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }
    },
    skip: !firstCoin
  });
  const markets = (_c = marketsQuery.data) == null ? void 0 : _c.markets;
  const [searchQuery, setSearchQuery] = react.exports.useState("");
  const [selectedMarket, setSelectedMarket] = react.exports.useState(null);
  react.exports.useEffect(() => {
    var _a3, _b2, _c2;
    if (!selectedMarket && ((_a3 = marketQueryName.data) == null ? void 0 : _a3.market)) {
      setSelectedMarket((_b2 = marketQueryName.data.market) != null ? _b2 : null);
    } else if (!selectedMarket && ((_c2 = marketsQuery.data) == null ? void 0 : _c2.markets)) {
      const found = marketsQuery.data.markets.find((m) => {
        var _a4, _b3;
        return ((_a4 = m == null ? void 0 : m.baseCoinInfo) == null ? void 0 : _a4.coinType) === (firstCoin == null ? void 0 : firstCoin.coinType) && ((_b3 = m == null ? void 0 : m.quoteCoinInfo) == null ? void 0 : _b3.coinType) === (secondCoin == null ? void 0 : secondCoin.coinType);
      });
      setSelectedMarket(found != null ? found : marketsQuery.data.markets[0]);
    }
  }, [selectedMarket, marketQueryName.data, marketsQuery.data]);
  react.exports.useLayoutEffect(() => {
    if (selectedMarket) {
      createTradingView({
        symbol: selectedMarket.name,
        interval: "1"
      });
    }
  }, [selectedMarket]);
  react.exports.useEffect(() => {
    if (selectedMarket && onSelectMarket)
      setTimeout(() => onSelectMarket(selectedMarket), 100);
  }, [selectedMarket, onSelectMarket]);
  const filteredMarkets = markets == null ? void 0 : markets.filter((m) => searchQuery.length > 1 ? m.name.toLowerCase().match(searchQuery.toLowerCase()) : true);
  const popoverRef = react.exports.useRef(null);
  const onMarketClick = (m, close) => {
    setSelectedMarket(m);
    close();
  };
  const onSearchChange = (c) => setSearchQuery(c.currentTarget.value);
  const baseButtonClasses = "flex items-center w-full p-3 bg-primary-800 rounded-md outline-none drop-shadow-lg hover:bg-primary-700 hover:cursor-pointer hover:drop-shadow-xl";
  const selectedItemContent = (selectedMarket == null ? void 0 : selectedMarket.baseCoinInfo) && (selectedMarket == null ? void 0 : selectedMarket.quoteCoinInfo) ? `${(_d = selectedMarket == null ? void 0 : selectedMarket.baseCoinInfo) == null ? void 0 : _d.symbol}/${(_e2 = selectedMarket == null ? void 0 : selectedMarket.quoteCoinInfo) == null ? void 0 : _e2.symbol}` : null;
  return /* @__PURE__ */ jsx("div", {
    className: "w-full",
    children: /* @__PURE__ */ jsx(mt, {
      className: "relative",
      ref: popoverRef,
      children: ({
        open,
        close
      }) => {
        var _a3, _b2;
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsxs(mt.Button, {
            className: `${open ? "" : "hover:bg-primary-700"} ${baseButtonClasses}`,
            children: [selectedMarket ? /* @__PURE__ */ jsx(bl, {
              coins: [(_a3 = selectedMarket == null ? void 0 : selectedMarket.baseCoinInfo) == null ? void 0 : _a3.symbol, (_b2 = selectedMarket == null ? void 0 : selectedMarket.quoteCoinInfo) == null ? void 0 : _b2.symbol],
              size: 32
            }) : null, /* @__PURE__ */ jsx("div", {
              className: "text-xl ml-3 mr-3 text-left",
              children: selectedItemContent
            }), open ? /* @__PURE__ */ jsx(ChevronUpIcon, {
              className: "h-5 w-5 text-primary-400 ml-auto",
              "aria-hidden": "true"
            }) : /* @__PURE__ */ jsx(ChevronDownIcon, {
              className: "h-5 w-5 text-primary-400 ml-auto",
              "aria-hidden": "true"
            })]
          }), /* @__PURE__ */ jsx(We$1, {
            as: react.exports.Fragment,
            enter: "transition ease-out duration-200",
            enterFrom: "opacity-0 translate-y-1",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in duration-150",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-1",
            children: /* @__PURE__ */ jsx(mt.Panel, {
              className: "absolute left-0 z-10 mt-1 w-[500px] transform px-4 sm:px-0",
              children: /* @__PURE__ */ jsx("div", {
                className: "overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "relative grid bg-primary-800",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "px-4 pt-4 pb-4 border-b border-b-primary-700",
                    children: /* @__PURE__ */ jsx(wl, {
                      value: searchQuery,
                      name: "marketSearch",
                      placeholder: "Search Markets",
                      label: "",
                      autoFocus: true,
                      inputClass: "bg-primary-900 pl-10",
                      prefix: /* @__PURE__ */ jsx(MagnifyingGlassIcon, {
                        width: 20,
                        height: 20
                      }),
                      onChange: onSearchChange
                    })
                  }), /* @__PURE__ */ jsx("div", {
                    className: "overflow-y-auto max-h-[500px] shadow-inner bg-primary-900/40",
                    children: /* @__PURE__ */ jsx(MarketList, {
                      markets: filteredMarkets,
                      onMarketSelect: (m) => onMarketClick(m, close)
                    })
                  })]
                })
              })
            })
          })]
        });
      }
    })
  });
}
const PoolDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "Pool"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "poolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PoolInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "poolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "poolInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoX"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoY"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoLP"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountX"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountY"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountLP"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "feePercent"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "swaps"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfoIn"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinInfoOut"
                },
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "coinType"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "decimals"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "symbol"
                    }
                  }]
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountIn"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountOut"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "adds"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountAddedX"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountAddedY"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountMintedLP"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "removes"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountRemovedX"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountRemovedY"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountBurnedLP"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function PoolsEventTableView({
  tableProps,
  actionButtonProps
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col gap-4 items-center w-full mt-10",
    children: /* @__PURE__ */ jsxs(Aa, {
      className: "max-w-[1200px] w-full max-h-full overflow-auto px-0",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex justify-between mb-2 px-6",
        children: [/* @__PURE__ */ jsx(pl, {
          children: "Transactions"
        }), /* @__PURE__ */ jsx("div", {
          className: "flex gap-2 mb-4",
          children: actionButtonProps.map((props) => /* @__PURE__ */ jsx(cr, {
            className: props.className,
            onClick: props.onClick,
            size: "xs",
            variant: "basic",
            children: props.children
          }, props.children))
        })]
      }), /* @__PURE__ */ jsx(Rl, {
        ...tableProps
      })]
    })
  });
}
function PoolsEventTableContainer() {
  var _a2, _b, _c, _d, _e2, _f;
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const poolQuery = useQuery(PoolDocument, {
    variables: {
      poolInput: {
        coinTypeX: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        coinTypeY: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }
    },
    skip: !(firstCoin == null ? void 0 : firstCoin.coinType) || !(secondCoin == null ? void 0 : secondCoin.coinType)
  });
  const pool = (_c = poolQuery == null ? void 0 : poolQuery.data) == null ? void 0 : _c.pool;
  const [filterBy, setFilterBy] = react.exports.useState(3);
  const swapTableData = ((_d = pool == null ? void 0 : pool.swaps) != null ? _d : []).map(({
    amountIn,
    amountOut,
    coinInfoIn,
    coinInfoOut,
    time
  }) => {
    var _a3, _b2;
    return {
      lpCoinType: (_a3 = pool == null ? void 0 : pool.coinInfoLP.coinType) != null ? _a3 : "",
      amountIn,
      amountOut,
      totalValue: (_b2 = pool == null ? void 0 : pool.amountLP) != null ? _b2 : 0,
      symbolIn: coinInfoIn.symbol,
      symbolOut: coinInfoOut.symbol,
      type: `Swap ${coinInfoIn.symbol} / ${coinInfoOut.symbol}`,
      time
    };
  });
  const addLiquidityTableData = ((_e2 = pool == null ? void 0 : pool.adds) != null ? _e2 : []).map(({
    amountAddedX,
    amountAddedY,
    amountMintedLP,
    time
  }) => {
    var _a3, _b2, _c2, _d2, _e3;
    return {
      lpCoinType: (_a3 = pool == null ? void 0 : pool.coinInfoLP.coinType) != null ? _a3 : "",
      amountIn: amountAddedX,
      amountOut: amountAddedY,
      totalValue: amountMintedLP != null ? amountMintedLP : "-",
      symbolIn: (_b2 = pool == null ? void 0 : pool.coinInfoX.symbol) != null ? _b2 : "-",
      symbolOut: (_c2 = pool == null ? void 0 : pool.coinInfoY.symbol) != null ? _c2 : "-",
      type: `Add ${(_d2 = pool == null ? void 0 : pool.coinInfoX.symbol) != null ? _d2 : ""} / ${(_e3 = pool == null ? void 0 : pool.coinInfoY.symbol) != null ? _e3 : ""}`,
      time
    };
  });
  const removeLiquidityTableData = ((_f = pool == null ? void 0 : pool.removes) != null ? _f : []).map(({
    amountBurnedLP,
    amountRemovedX,
    amountRemovedY,
    time
  }) => {
    var _a3, _b2, _c2, _d2, _e3;
    return {
      lpCoinType: (_a3 = pool == null ? void 0 : pool.coinInfoLP.coinType) != null ? _a3 : "",
      amountIn: amountRemovedX,
      amountOut: amountRemovedY,
      totalValue: amountBurnedLP != null ? amountBurnedLP : "-",
      symbolIn: (_b2 = pool == null ? void 0 : pool.coinInfoX.symbol) != null ? _b2 : "-",
      symbolOut: (_c2 = pool == null ? void 0 : pool.coinInfoY.symbol) != null ? _c2 : "-",
      type: `Remove ${(_d2 = pool == null ? void 0 : pool.coinInfoX.symbol) != null ? _d2 : ""} / ${(_e3 = pool == null ? void 0 : pool.coinInfoY.symbol) != null ? _e3 : ""}`,
      time
    };
  });
  const tableData = react.exports.useMemo(() => {
    if (filterBy === 0)
      return swapTableData.sort((a2, b2) => a2.time < b2.time ? 1 : -1);
    if (filterBy === 2)
      return removeLiquidityTableData.sort((a2, b2) => a2.time < b2.time ? 1 : -1);
    if (filterBy === 1)
      return addLiquidityTableData.sort((a2, b2) => a2.time < b2.time ? 1 : -1);
    return [...swapTableData, ...addLiquidityTableData, ...removeLiquidityTableData].sort((a2, b2) => a2.time < b2.time ? 1 : -1);
  }, [swapTableData, addLiquidityTableData, removeLiquidityTableData, filterBy]);
  const columnHelper2 = createColumnHelper();
  const actionButtonProps = [{
    children: "All",
    className: filterBy === 3 ? "!border-accent-400" : "",
    onClick() {
      setFilterBy(3);
    }
  }, {
    children: "Swaps",
    className: filterBy === 0 ? "!border-accent-400" : "",
    onClick() {
      setFilterBy(0);
    }
  }, {
    children: "Adds",
    className: filterBy === 1 ? "!border-accent-400" : "",
    onClick() {
      setFilterBy(1);
    }
  }, {
    children: "Removes",
    className: filterBy === 2 ? "!border-accent-400" : "",
    onClick() {
      setFilterBy(2);
    }
  }];
  const totalValueColumn = react.exports.useMemo(() => {
    switch (filterBy) {
      case 1: {
        return columnHelper2.accessor("totalValue", {
          header: "LP Minted",
          cell(cell) {
            return `${cell.getValue()}`;
          }
        });
      }
      case 3: {
        return columnHelper2.accessor("totalValue", {
          header: "Liquidity Outcome",
          cell(cell) {
            const rowValues = cell.row.original;
            const rowType = rowValues.type;
            const isSwap = rowType.match("Swap");
            const isAdd = rowType.match("Add");
            const isRemove = rowType.match("Remove");
            const action = isSwap ? /* @__PURE__ */ jsxs(yl, {
              className: "text-center !bg-transparent  !text-accent-400",
              size: "xs",
              children: [cell.getValue(), " Total LP Unchanged"]
            }) : isAdd ? /* @__PURE__ */ jsxs(yl, {
              className: "text-center !bg-transparent !text-green-400",
              size: "xs",
              children: [cell.getValue(), " LP Minted"]
            }) : isRemove ? /* @__PURE__ */ jsxs(yl, {
              className: "text-center !bg-transparent  !text-red-400",
              size: "xs",
              children: [cell.getValue(), " LP Burned"]
            }) : void 0;
            return action;
          }
        });
      }
      case 0: {
        return columnHelper2.accessor("totalValue", {
          header: "Total LP",
          cell(cell) {
            return `${cell.getValue()}`;
          }
        });
      }
      case 2: {
        return columnHelper2.accessor("totalValue", {
          header: "LP Burned",
          cell(cell) {
            return `${cell.getValue()}`;
          }
        });
      }
      default: {
        return {
          accessorKey: "totalValue",
          header: "Total Value"
        };
      }
    }
  }, [filterBy]);
  const poolTableProps = {
    data: tableData,
    columns: [columnHelper2.accessor("type", {
      header: "Event Type",
      cell(cell) {
        const rowValues = cell.row.original;
        const rowType = cell.getValue();
        const isSwap = rowType.match("Swap");
        const isAdd = rowType.match("Add");
        const isRemove = rowType.match("Remove");
        const action = isSwap ? /* @__PURE__ */ jsxs(yl, {
          className: "whitespace-nowrap text-center !bg-transparent border border-accent-200  !text-accent-200",
          size: "xs",
          children: ["Swap ", rowValues.symbolIn, " for ", rowValues.symbolOut]
        }) : isAdd ? /* @__PURE__ */ jsxs(yl, {
          className: "whitespace-nowrap text-center !bg-transparent  border border-green-200 !text-green-200",
          size: "xs",
          children: ["Add ", rowValues.symbolIn, " and ", rowValues.symbolOut]
        }) : isRemove ? /* @__PURE__ */ jsxs(yl, {
          className: "whitespace-nowrap text-center !bg-transparent border border-red-200  !text-red-200",
          size: "xs",
          children: ["Remove ", rowValues.symbolIn, " and ", rowValues.symbolOut]
        }) : void 0;
        return /* @__PURE__ */ jsx("div", {
          children: action
        });
      }
    }), {
      accessorKey: "amountIn",
      header: `Coin X`,
      cell(c) {
        const value = c.getValue();
        const rowValues = c.row.original;
        return `${parseFloat(`${value}`).toLocaleString()} ${rowValues.symbolIn}`;
      }
    }, {
      accessorKey: "amountOut",
      header: "Coin Y",
      cell(c) {
        const value = c.getValue();
        const rowValues = c.row.original;
        return `${parseFloat(`${value}`).toLocaleString()} ${rowValues.symbolOut}`;
      }
    }, {
      accessorKey: "time",
      header: "Time",
      cell(cell) {
        var _a3;
        return (_a3 = DateTime.fromJSDate(new Date(Number(cell.getValue()))).toRelative()) != null ? _a3 : "No Time Available";
      }
    }, totalValueColumn]
  };
  return /* @__PURE__ */ jsx(PoolsEventTableView, {
    tableProps: poolTableProps,
    actionButtonProps
  });
}
function AddLiquidityView({
  coins,
  onFirstCoinSelect,
  onSecondCoinSelect,
  firstCoin,
  secondCoin,
  addLiquidity,
  handleChangeFirstCoinAu,
  handleChangeSecondCoinAu,
  firstCoinAu,
  secondCoinAu
}) {
  return /* @__PURE__ */ jsxs(Aa, {
    className: "w-[600px] mx-auto self-center border border-slate-700",
    children: [/* @__PURE__ */ jsx(pl, {
      className: "mb-4",
      children: "Add Liquidity"
    }), /* @__PURE__ */ jsx(nt, {
      className: "mb-4 mt-4",
      children: "Deposit Amounts"
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-10",
      children: [/* @__PURE__ */ jsx(DepositInput, {
        coin: firstCoin,
        coins,
        onCoinSelect: onFirstCoinSelect,
        onChange: handleChangeFirstCoinAu,
        value: firstCoinAu
      }), /* @__PURE__ */ jsx(DepositInput, {
        coin: secondCoin,
        coins,
        onCoinSelect: onSecondCoinSelect,
        onChange: handleChangeSecondCoinAu,
        value: secondCoinAu
      })]
    }), /* @__PURE__ */ jsx(cr, {
      className: "mt-12 w-full",
      onClick: addLiquidity,
      children: "Add Liquidity"
    })]
  });
}
function AddLiquidityContainer({}) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l;
  const [addLiquidity] = useMutation(AddLiquidityDocument);
  const wallet = dist.useWallet();
  const navigate = useNavigate();
  const [firstCoinAu, setFirstCoinAu] = react.exports.useState(0);
  const [secondCoinAu, setSecondCoinAu] = react.exports.useState(0);
  const {
    firstCoin,
    secondCoin,
    onFirstCoinSelect,
    onSecondCoinSelect,
    coins
  } = useCoinXYParamState();
  const poolQuery = useQuery(SimplePoolDocument, {
    variables: {
      poolInput: {
        coinTypeX: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        coinTypeY: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }
    },
    skip: !firstCoin
  });
  const poolNoAmount = !((_d = (_c = poolQuery.data) == null ? void 0 : _c.pool) == null ? void 0 : _d.amountX);
  const coinSpotPrice = usePoolSpotPrice({
    poolInput: {
      coinTypeX: (_e2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _e2 : "",
      coinTypeY: (_f = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _f : ""
    }
  }, !firstCoin);
  const conversionIn = firstCoinAu * ((_i2 = (_h = (_g = coinSpotPrice.data) == null ? void 0 : _g.pool) == null ? void 0 : _h.priceX) != null ? _i2 : 0);
  const conversionOut = secondCoinAu * ((_l = (_k = (_j = coinSpotPrice.data) == null ? void 0 : _j.pool) == null ? void 0 : _k.priceY) != null ? _l : 0);
  const notifications = Ha();
  async function addLiquidityHandler() {
    var _a3, _b2;
    return await addLiquidity({
      variables: {
        addLiquidityInput: {
          amountX: firstCoinAu,
          amountY: secondCoinAu,
          poolInput: {
            coinTypeX: (_a3 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a3 : "",
            coinTypeY: (_b2 = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b2 : ""
          }
        }
      }
    }).then(async (res) => {
      var _a4;
      await (wallet == null ? void 0 : wallet.signAndSubmitTransaction((_a4 = res.data) == null ? void 0 : _a4.addLiquidity).then(() => notifications.addSuccessNotification("Successfully added liquidity")).catch(() => notifications.addErrorNotification("Error adding liquidity")));
    }).catch(() => notifications.addErrorNotification("Error adding liquidity")).finally(() => navigate("/pools"));
  }
  const handleChangeSecondCoinAu = (e2) => {
    const v = Number(Number.parseFloat(e2.currentTarget.value));
    setSecondCoinAu(v);
    setTouched("second");
  };
  const [touched, setTouched] = react.exports.useState("first");
  react.exports.useEffect(() => {
    if (touched === "first" && !poolNoAmount)
      setSecondCoinAu(conversionIn != null ? conversionIn : 0);
  }, [conversionIn, firstCoinAu, touched]);
  react.exports.useEffect(() => {
    if (touched === "second" && !poolNoAmount)
      setFirstCoinAu(conversionOut != null ? conversionOut : 0);
  }, [conversionOut, secondCoinAu, touched]);
  const handleChangeFirstCoinAu = (e2) => {
    const v = Number(Number.parseFloat(e2.currentTarget.value));
    setFirstCoinAu(v);
    setTouched("first");
  };
  return /* @__PURE__ */ jsx(AddLiquidityView, {
    coins,
    onFirstCoinSelect,
    onSecondCoinSelect,
    firstCoin,
    secondCoin,
    addLiquidity: addLiquidityHandler,
    handleChangeFirstCoinAu,
    handleChangeSecondCoinAu,
    firstCoinAu,
    secondCoinAu
  });
}
const RemoveLiquidityDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "RemoveLiquidity"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "removeLiquidityInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "RemoveLiquidityInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "removeLiquidity"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "removeLiquidityInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "removeLiquidityInput"
            }
          }
        }]
      }]
    }
  }]
};
const RlPoolPositionDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "RLPoolPosition"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "poolInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "PoolInput"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "owner"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Address"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pool"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "poolInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "poolInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoX"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoY"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoLP"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "position"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "owner"
              },
              "value": {
                "kind": "Variable",
                "name": {
                  "kind": "Name",
                  "value": "owner"
                }
              }
            }],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountX"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountY"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "amountLP"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "share"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountX"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountY"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountLP"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "feePercent"
            }
          }]
        }
      }]
    }
  }]
};
const RemoveLiquidity = "";
function RemoveLiquidityView({
  firstCoin,
  firstCoinAmount,
  firstCoinRelativePrice,
  secondCoinAmount,
  secondCoinRelativePrice,
  goBackToPools,
  handleRemoveLiquidity,
  pctVal,
  secondCoin,
  setPctVal,
  notFoundMsg
}) {
  var _a2;
  return !firstCoin && !secondCoin ? /* @__PURE__ */ jsxs(Aa, {
    className: "flex flex-col gap-8 w-[600px] mx-auto self-center",
    children: [notFoundMsg, /* @__PURE__ */ jsx(cr, {
      onClick: goBackToPools,
      children: "Back to pools"
    })]
  }) : /* @__PURE__ */ jsxs(Aa, {
    className: "flex flex-col w-[600px] gap-8 mx-auto self-center border border-slate-700 ",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex justify-between items-center",
      children: [/* @__PURE__ */ jsx(pl, {
        children: "Remove Liquidity"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex text-xs text-slate-300",
        children: [/* @__PURE__ */ jsx("div", {
          className: "flex gap-4",
          children: firstCoinRelativePrice ? `1 ${firstCoin == null ? void 0 : firstCoin.symbol} = ${firstCoinRelativePrice.toFixed((_a2 = secondCoin == null ? void 0 : secondCoin.decimals) != null ? _a2 : 4)} ${secondCoin == null ? void 0 : secondCoin.symbol}` : `${firstCoin == null ? void 0 : firstCoin.symbol} Price Unavailable`
        }), /* @__PURE__ */ jsx("span", {
          className: "px-3",
          children: "/"
        }), /* @__PURE__ */ jsx("div", {
          className: "flex gap-4",
          children: secondCoinRelativePrice ? `1 ${secondCoin == null ? void 0 : secondCoin.symbol} = ${secondCoinRelativePrice.toFixed(firstCoin == null ? void 0 : firstCoin.decimals)} ${firstCoin == null ? void 0 : firstCoin.symbol}` : `${secondCoin == null ? void 0 : secondCoin.symbol} Price Unavailable`
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx(nt, {
        className: "mb-3 text-center",
        children: "Available For Withdrawal"
      }), /* @__PURE__ */ jsx("div", {
        className: "flex gap-6 w-full justify-center p-4",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row gap-6",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-2",
            children: [/* @__PURE__ */ jsx(ai, {
              coin: firstCoin == null ? void 0 : firstCoin.symbol
            }), firstCoinAmount]
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-2 w-full justify-center",
            children: [/* @__PURE__ */ jsx(ai, {
              coin: secondCoin == null ? void 0 : secondCoin.symbol
            }), secondCoinAmount]
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "w-full flex justify-center items-center",
      children: [/* @__PURE__ */ jsx("div", {
        className: "border-b border-b-slate-700 w-full"
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(ArrowDownIcon, {
          className: "w-4 text-slate-400 mx-6"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "border-b border-b-slate-700 w-full"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-4",
      children: [/* @__PURE__ */ jsx(nt, {
        children: "Amount To Withdraw"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-row justify-between",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-4xl text-white font-bold mr-auto",
          children: `${pctVal}%`
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-start items-center gap-2",
          children: [/* @__PURE__ */ jsx(cr, {
            variant: "basic",
            size: "xs",
            onClick: () => setPctVal(25),
            children: "25%"
          }), /* @__PURE__ */ jsx(cr, {
            variant: "basic",
            size: "xs",
            onClick: () => setPctVal(50),
            children: "50%"
          }), /* @__PURE__ */ jsx(cr, {
            variant: "basic",
            size: "xs",
            onClick: () => setPctVal(75),
            children: "75%"
          }), /* @__PURE__ */ jsx(cr, {
            variant: "basic",
            size: "xs",
            onClick: () => setPctVal(100),
            children: "Max"
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "px-2",
        children: /* @__PURE__ */ jsx(Nl, {
          value: pctVal,
          onChange: setPctVal,
          min: 0,
          max: 100
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "w-full flex justify-center items-center",
      children: [/* @__PURE__ */ jsx("div", {
        className: "border-b border-b-slate-700 w-full"
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(ArrowDownIcon, {
          className: "w-4 text-slate-400 mx-6"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "border-b border-b-slate-700 w-full"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-4 pb-6 items-center",
      children: [/* @__PURE__ */ jsx(nt, {
        children: "Amount To Receive"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-row gap-6",
        children: [/* @__PURE__ */ jsx("div", {
          className: "flex items-center gap-2",
          children: (firstCoin == null ? void 0 : firstCoin.symbol) ? /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx(ai, {
              coin: firstCoin == null ? void 0 : firstCoin.symbol
            }), " ", firstCoinAmount * (pctVal / 100)]
          }) : /* @__PURE__ */ jsx(Fragment, {
            children: "No Coin Selected"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "flex items-center gap-2",
          children: (secondCoin == null ? void 0 : secondCoin.symbol) ? /* @__PURE__ */ jsxs(Fragment, {
            children: [/* @__PURE__ */ jsx(ai, {
              coin: secondCoin == null ? void 0 : secondCoin.symbol
            }), " ", secondCoinAmount * (pctVal / 100)]
          }) : /* @__PURE__ */ jsx(Fragment, {
            children: "No Coin Selected"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx(cr, {
      onClick: handleRemoveLiquidity,
      children: "Remove Liquidity"
    })]
  });
}
function RemoveLiquidityContainer() {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p, _q, _r2, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
  const navigate = useNavigate();
  const [removeLiquidityMutation] = useMutation(RemoveLiquidityDocument);
  const wallet = dist.useWallet();
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const notFoundMsg = `Cannot find coins for types ${firstCoin == null ? void 0 : firstCoin.symbol} and ${secondCoin == null ? void 0 : secondCoin.symbol}`;
  const notifications = Ha();
  const poolQuery = useQuery(RlPoolPositionDocument, {
    variables: {
      poolInput: {
        coinTypeX: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        coinTypeY: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      },
      owner: (_c = wallet.account) == null ? void 0 : _c.address
    },
    skip: !firstCoin
  });
  const firstCoinRelativePriceQuery = usePoolPriceIn({
    amount: 1,
    coinTypeIn: (_f = (_e2 = (_d = poolQuery.data) == null ? void 0 : _d.pool) == null ? void 0 : _e2.coinInfoX.coinType) != null ? _f : "",
    poolInput: {
      coinTypeX: (_i2 = (_h = (_g = poolQuery.data) == null ? void 0 : _g.pool) == null ? void 0 : _h.coinInfoX.coinType) != null ? _i2 : "",
      coinTypeY: (_l = (_k = (_j = poolQuery.data) == null ? void 0 : _j.pool) == null ? void 0 : _k.coinInfoY.coinType) != null ? _l : ""
    }
  });
  const secondCoinRelativePriceQuery = usePoolPriceIn({
    amount: 1,
    coinTypeIn: (_o = (_n2 = (_m = poolQuery.data) == null ? void 0 : _m.pool) == null ? void 0 : _n2.coinInfoY.coinType) != null ? _o : "",
    poolInput: {
      coinTypeX: (_r2 = (_q = (_p = poolQuery.data) == null ? void 0 : _p.pool) == null ? void 0 : _q.coinInfoX.coinType) != null ? _r2 : "",
      coinTypeY: (_u = (_t2 = (_s2 = poolQuery.data) == null ? void 0 : _s2.pool) == null ? void 0 : _t2.coinInfoY.coinType) != null ? _u : ""
    }
  });
  const [pctVal, setPctVal] = react.exports.useState(0);
  const handleRemoveLiquidity = react.exports.useCallback(async function handleRemoveLiquidity2() {
    var _a3, _b2, _c2, _d2, _e3, _f2, _g2;
    const res = await removeLiquidityMutation({
      variables: {
        removeLiquidityInput: {
          amountLP: pctVal / 100 * ((_d2 = (_c2 = (_b2 = (_a3 = poolQuery.data) == null ? void 0 : _a3.pool) == null ? void 0 : _b2.position) == null ? void 0 : _c2.amountLP) != null ? _d2 : 0),
          poolInput: {
            coinTypeX: (_e3 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _e3 : "",
            coinTypeY: (_f2 = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _f2 : ""
          }
        }
      }
    });
    const tx = (_g2 = res.data) == null ? void 0 : _g2.removeLiquidity;
    await (wallet == null ? void 0 : wallet.signAndSubmitTransaction(tx).then(() => notifications.addSuccessNotification("Successfully removed liquidity.")).catch((e2) => notifications.addErrorNotification("Failed to remove liquidity.")));
    navigate("/pools");
  }, [firstCoin, secondCoin, pctVal, navigate, removeLiquidityMutation, wallet]);
  const firstCoinAmount = (_y = (_x = (_w = (_v = poolQuery.data) == null ? void 0 : _v.pool) == null ? void 0 : _w.position) == null ? void 0 : _x.amountX) != null ? _y : 0;
  const secondCoinAmount = (_C = (_B = (_A = (_z = poolQuery.data) == null ? void 0 : _z.pool) == null ? void 0 : _A.position) == null ? void 0 : _B.amountY) != null ? _C : 0;
  return /* @__PURE__ */ jsx(RemoveLiquidityView, {
    firstCoin,
    firstCoinAmount,
    firstCoinRelativePrice: (_F = (_E = (_D = firstCoinRelativePriceQuery.data) == null ? void 0 : _D.pool) == null ? void 0 : _E.quoteExactIn.expectedAmountOut) != null ? _F : 0,
    secondCoinRelativePrice: (_I = (_H = (_G = secondCoinRelativePriceQuery.data) == null ? void 0 : _G.pool) == null ? void 0 : _H.quoteExactIn.expectedAmountOut) != null ? _I : 0,
    secondCoinAmount,
    goBackToPools: () => navigate("/pools"),
    handleRemoveLiquidity,
    pctVal,
    setPctVal,
    secondCoin,
    notFoundMsg
  });
}
function trimStr(s2) {
  if (!s2)
    return;
  if (s2.length <= 10)
    return s2;
  let result = ``;
  result += s2.slice(0, 8);
  result += "...";
  return result;
}
function PoolView({
  pool
}) {
  var _a2, _b;
  const [isAddOpen, setAddOpen] = react.exports.useState(false);
  const [isRemoveOpen, setRemoveOpen] = react.exports.useState(false);
  const notifications = Ha();
  const copyX = () => {
    (pool == null ? void 0 : pool.coinInfoX.coinType) && navigator.clipboard.writeText(pool == null ? void 0 : pool.coinInfoX.coinType);
    notifications.addSuccessNotification(`Coin Address copied to clipboard: 
    ${trimStr(pool == null ? void 0 : pool.coinInfoX.coinType)}`);
  };
  const copyY = () => {
    (pool == null ? void 0 : pool.coinInfoY.coinType) && navigator.clipboard.writeText(pool == null ? void 0 : pool.coinInfoY.coinType);
    notifications.addSuccessNotification(`Coin Address copied to clipboard: 
    ${trimStr(pool == null ? void 0 : pool.coinInfoY.coinType)}`);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center w-[1200px] max-w-full mx-auto",
    children: [/* @__PURE__ */ jsxs(Link, {
      to: "/pools",
      className: "self-start inline-flex items-center my-4",
      children: [/* @__PURE__ */ jsx(ArrowLongLeftIcon, {
        className: "w-8 h-8 mr-3"
      }), " All Pools"]
    }), /* @__PURE__ */ jsx("div", {
      className: "flex my-6",
      children: /* @__PURE__ */ jsx("div", {
        className: "self-center ml-4 text-5xl",
        children: (pool == null ? void 0 : pool.coinInfoX) && (pool == null ? void 0 : pool.coinInfoY) ? /* @__PURE__ */ jsxs("div", {
          className: "flex items-center",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex gap-2 items-center",
            children: [/* @__PURE__ */ jsx(DocumentDuplicateIcon, {
              className: "opacity-30 hover:opacity-80 hover:cursor-pointer",
              width: 24,
              height: 24,
              onClick: copyX
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col text-center",
              children: [/* @__PURE__ */ jsx("div", {
                children: pool == null ? void 0 : pool.coinInfoX.symbol
              }), /* @__PURE__ */ jsx("div", {
                className: "text-sm pl-1 text-primary-500",
                children: pool == null ? void 0 : pool.coinInfoX.name
              })]
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "mx-12 translate-y-[-10px]",
            children: /* @__PURE__ */ jsx(bl, {
              coins: [pool == null ? void 0 : pool.coinInfoX.symbol, pool == null ? void 0 : pool.coinInfoY.symbol].filter(Boolean),
              size: 48
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex gap-2 items-center",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex flex-col text-center",
              children: [/* @__PURE__ */ jsx("div", {
                children: pool == null ? void 0 : pool.coinInfoY.symbol
              }), /* @__PURE__ */ jsx("div", {
                className: "text-sm pl-1 text-primary-500",
                children: pool == null ? void 0 : pool.coinInfoY.name
              })]
            }), /* @__PURE__ */ jsx(DocumentDuplicateIcon, {
              className: "opacity-30 hover:opacity-80 hover:cursor-pointer",
              width: 24,
              height: 24,
              onClick: copyY
            })]
          }), " "]
        }) : "Loading..."
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex ",
      children: [/* @__PURE__ */ jsx(vl, {
        className: "text-center",
        title: `${pool == null ? void 0 : pool.coinInfoX.name} Locked`,
        value: (_a2 = pool == null ? void 0 : pool.amountX.toLocaleString()) != null ? _a2 : "-"
      }), /* @__PURE__ */ jsx(vl, {
        className: "text-center",
        title: `${pool == null ? void 0 : pool.coinInfoY.name} Locked`,
        value: (_b = pool == null ? void 0 : pool.amountY.toLocaleString()) != null ? _b : "-"
      }), /* @__PURE__ */ jsx(vl, {
        className: "text-center",
        title: "Fee Percent",
        value: (pool == null ? void 0 : pool.feePercent) ? `${pool.feePercent}%` : "-"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex gap-4 mt-6",
      children: [/* @__PURE__ */ jsx(cr, {
        onClick: () => setAddOpen(true),
        variant: "buy",
        size: "sm",
        children: "Add"
      }), /* @__PURE__ */ jsx(cr, {
        onClick: () => setRemoveOpen(true),
        variant: "sell",
        size: "sm",
        children: "Remove"
      }), /* @__PURE__ */ jsx(SwapModalContainer, {})]
    }), /* @__PURE__ */ jsx(PoolsEventTableContainer, {}), /* @__PURE__ */ jsx(We$1, {
      appear: true,
      show: isAddOpen,
      as: react.exports.Fragment,
      children: /* @__PURE__ */ jsxs(gt, {
        as: "div",
        className: "relative z-10",
        onClose: () => setAddOpen(false),
        children: [/* @__PURE__ */ jsx(We$1.Child, {
          as: react.exports.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-25"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "fixed inset-0 overflow-y-auto",
          children: /* @__PURE__ */ jsx("div", {
            className: "flex min-h-full items-center justify-center p-4 text-center",
            children: /* @__PURE__ */ jsx(We$1.Child, {
              as: react.exports.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: /* @__PURE__ */ jsx(gt.Panel, {
                className: "m-w-[700px] bg-primary-900 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all",
                children: /* @__PURE__ */ jsx(AddLiquidityContainer, {})
              })
            })
          })
        })]
      })
    }), /* @__PURE__ */ jsx(We$1, {
      appear: true,
      show: isRemoveOpen,
      as: react.exports.Fragment,
      children: /* @__PURE__ */ jsxs(gt, {
        as: "div",
        className: "relative z-10",
        onClose: () => setRemoveOpen(false),
        children: [/* @__PURE__ */ jsx(We$1.Child, {
          as: react.exports.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-25"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "fixed inset-0 overflow-y-auto",
          children: /* @__PURE__ */ jsx("div", {
            className: "flex min-h-full items-center justify-center p-4 text-center",
            children: /* @__PURE__ */ jsx(We$1.Child, {
              as: react.exports.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 scale-95",
              enterTo: "opacity-100 scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 scale-100",
              leaveTo: "opacity-0 scale-95",
              children: /* @__PURE__ */ jsx(gt.Panel, {
                className: "m-w-[700px] bg-primary-800 transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all",
                children: /* @__PURE__ */ jsx(RemoveLiquidityContainer, {})
              })
            })
          })
        })]
      })
    })]
  });
}
function PoolContainer({}) {
  var _a2, _b;
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const poolQuery = useQuery(PoolDocument, {
    variables: {
      poolInput: {
        coinTypeX: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        coinTypeY: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }
    }
  });
  const pool = react.exports.useMemo(() => {
    var _a3, _b2;
    return (_b2 = (_a3 = poolQuery.data) == null ? void 0 : _a3.pool) != null ? _b2 : null;
  }, [poolQuery.data]);
  return /* @__PURE__ */ jsx(PoolView, {
    pool
  });
}
function PortfolioView({
  positions
}) {
  var _a2, _b, _c, _d;
  const {
    account
  } = dist.useWallet();
  const hasAccount = useHasAccount();
  const navigate = useNavigate();
  const appTitle = window.appTitle;
  (account == null ? void 0 : account.address) ? `${account.address.toString().slice(0, 6)}...${account.address.toString().slice(account.address.toString().length - 6, account.address.toString().length)}` : "-";
  return /* @__PURE__ */ jsx(Fragment, {
    children: !(account == null ? void 0 : account.address) ? /* @__PURE__ */ jsx(NoWalletUI$1, {}) : /* @__PURE__ */ jsxs("div", {
      className: " w-full grid sm:grid-cols-1 sm:grid-rows-5 md:grid-rows-[48px_260px_1fr] md:grid-cols-6 gap-2 p-4 mx-auto md:max-w-[1140px]",
      children: [/* @__PURE__ */ jsx("div", {
        className: " sm:col-span-1 md:col-span-6 h-full",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ jsx("div", {
            className: "text-3xl",
            children: "My Portfolio"
          }), ((_b = (_a2 = hasAccount.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.hasAuxAccount) ? /* @__PURE__ */ jsxs("div", {
            className: "items-end flex gap-3",
            children: [/* @__PURE__ */ jsx(DepositContainer, {}), /* @__PURE__ */ jsx(WithdrawalContainer, {}), /* @__PURE__ */ jsx(cr, {
              onClick: () => navigate("/account"),
              size: "sm",
              children: "Account Settings"
            })]
          }) : /* @__PURE__ */ jsx("div", {
            className: "items-end flex gap-3",
            children: /* @__PURE__ */ jsxs(cr, {
              onClick: () => navigate("/account"),
              size: "sm",
              className: "flex flex-row items-center",
              children: ["Create ", appTitle, " Account", /* @__PURE__ */ jsx(ArrowLongRightIcon, {
                className: "w-4 h-4 ml-2 group-hover:text-primary-900"
              })]
            })
          })]
        })
      }), /* @__PURE__ */ jsxs(Aa, {
        className: "sm:col-span-6",
        children: [/* @__PURE__ */ jsx(pl, {
          className: "inline-flex items-center gap-3",
          children: /* @__PURE__ */ jsx(yl, {
            variant: "dark",
            size: "sm",
            children: "Coming Soon"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-end justify-stretch py-6 shadow h-full space-x-4",
          children: [/* @__PURE__ */ jsx("div", {
            className: "w-full h-12 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-20 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-28 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-36 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-12 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-20 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-28 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-36 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-12 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-20 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-28 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-36 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-12 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-20 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-28 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-36 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-12 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-16 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-20 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-28 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-36 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"
          })]
        })]
      }), /* @__PURE__ */ jsx(Aa, {
        className: "sm:col-span-6",
        padding: 0,
        children: /* @__PURE__ */ jsxs(qe.Group, {
          children: [/* @__PURE__ */ jsx(Cl, {
            tabs: [
              {
                label: "Balances"
              },
              {
                label: "Pool Stakes"
              },
              {
                label: "Open Orders"
              },
              {
                label: "Order History"
              }
            ]
          }), /* @__PURE__ */ jsxs(qe.Panels, {
            children: [/* @__PURE__ */ jsxs(qe.Panel, {
              children: [!((_d = (_c = hasAccount.data) == null ? void 0 : _c.account) == null ? void 0 : _d.hasAuxAccount) ? /* @__PURE__ */ jsx(CreateAccountAd, {}) : /* @__PURE__ */ jsxs("div", {
                className: "pt-4",
                children: [/* @__PURE__ */ jsxs(pl, {
                  className: "flex items-center px-4",
                  children: [appTitle, " Account Balances", /* @__PURE__ */ jsx(Tooltip, {
                    content: /* @__PURE__ */ jsx("span", {
                      className: "opacity-100 font-bold",
                      children: "Coins deposited into this on-chain account can be used for trading on the Trade page."
                    }),
                    placement: "right",
                    animation: false,
                    children: /* @__PURE__ */ jsx("div", {
                      style: {
                        width: 24,
                        height: 24,
                        padding: 3,
                        maxWidth: 24,
                        pointerEvents: "none"
                      },
                      children: /* @__PURE__ */ jsx(InformationCircleIcon, {
                        fontSize: 32,
                        color: "white"
                      })
                    })
                  })]
                }), /* @__PURE__ */ jsx(BalancesTable, {})]
              }), /* @__PURE__ */ jsxs("div", {
                className: "pt-4",
                children: [/* @__PURE__ */ jsxs(pl, {
                  className: "flex items-center px-4",
                  children: ["Wallet Balances", /* @__PURE__ */ jsx(Tooltip, {
                    content: /* @__PURE__ */ jsx("span", {
                      className: "opacity-100 font-bold",
                      children: "Coins in your wallet can be used for swapping and adding liquidity to pools."
                    }),
                    placement: "right",
                    animation: false,
                    children: /* @__PURE__ */ jsx("div", {
                      style: {
                        width: 24,
                        height: 24,
                        padding: 3,
                        maxWidth: 24,
                        pointerEvents: "none"
                      },
                      children: /* @__PURE__ */ jsx(InformationCircleIcon, {
                        fontSize: 32,
                        color: "white"
                      })
                    })
                  })]
                }), /* @__PURE__ */ jsx(BalancesTable, {
                  variant: "wallet"
                })]
              })]
            }), /* @__PURE__ */ jsx(qe.Panel, {
              children: /* @__PURE__ */ jsx(PoolPositionsTable, {})
            }), /* @__PURE__ */ jsx(qe.Panel, {
              children: /* @__PURE__ */ jsx(OrdersTable, {
                variant: "open"
              })
            }), /* @__PURE__ */ jsx(qe.Panel, {
              children: /* @__PURE__ */ jsx(OrdersTable, {})
            })]
          })]
        })
      })]
    })
  });
}
const connectWalletTrigger$1 = /* @__PURE__ */ jsx(cr, {
  size: "sm",
  onClick: () => {
  },
  children: "Connect Wallet"
});
function NoWalletUI$1() {
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-xl",
        children: "Connect a wallet to view your portfolio."
      }), /* @__PURE__ */ jsx(ConnectWalletContainer, {
        trigger: connectWalletTrigger$1
      })]
    })
  });
}
function CreateAccountAd() {
  const navigate = useNavigate();
  const appTitle = window.appTitle;
  return /* @__PURE__ */ jsxs(Aa, {
    padding: 4,
    className: "flex items-center w-full font-medium justify-center mx-auto gap-3 border-b border-b-primary-700 bg-gradient-to-br from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-end text-sm text-center text-primary-100 rounded-none",
    children: ["Unleash the power to trade on the ", appTitle, " central limit order book.", /* @__PURE__ */ jsxs(cr, {
      variant: "basic",
      size: "xs",
      onClick: () => navigate("/account"),
      className: "flex flex-row items-center bg-none text-primary-100 border-blue-100 hover:bg-blue-100 hover:border-blue-100 hover:text-primary-900 group",
      children: ["Create ", appTitle, " Account", /* @__PURE__ */ jsx(ArrowLongRightIcon, {
        className: "w-4 h-4 ml-2 group-hover:text-primary-900"
      })]
    })]
  });
}
function PortfolioContainer({}) {
  var _a2, _b;
  const positions = usePositions();
  return /* @__PURE__ */ jsx(PortfolioView, {
    positions: (_b = (_a2 = positions.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.poolPositions
  });
}
const TradeControlCtx = react.exports.createContext({
  activeTab: 0,
  cxAmount: "",
  cyAmount: "",
  fok: false,
  ioc: false,
  onChangeCxAmount() {
  },
  onChangeCyAmount() {
  },
  onChangeFok() {
  },
  onChangeIOC() {
  },
  onChangeOrderType() {
  },
  onChangePassiveJoin() {
  },
  onChangePost() {
  },
  onChangePrice() {
  },
  orderType: OrderType.Limit,
  passiveJoin: false,
  post: false,
  price: "",
  set25() {
  },
  set50() {
  },
  set75() {
  },
  setActiveTab() {
  },
  setCxAmount() {
  },
  setMax() {
  },
  setPrice() {
  },
  step: 0,
  stepValid: true,
  submitTrade() {
  },
  tick: 0,
  tickValid: true
});
const TradeControlsProvider = function TradeControlProvider({
  children
}) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l;
  const balances = useBalances();
  const {
    firstCoin,
    secondCoin,
    lastTradePrice
  } = useCoinXYParamState();
  const quantX = (_d = (_c = (_b = (_a2 = balances.data) == null ? void 0 : _a2.account) == null ? void 0 : _b.balances) == null ? void 0 : _c.find((b2) => {
    var _a3;
    return ((_a3 = b2.coinInfo) == null ? void 0 : _a3.symbol) === (firstCoin == null ? void 0 : firstCoin.symbol);
  })) == null ? void 0 : _d.availableBalance;
  const [activeTab, setActiveTab] = react.exports.useState(0);
  const [price, setPrice] = react.exports.useState((_e2 = lastTradePrice == null ? void 0 : lastTradePrice.toString()) != null ? _e2 : "");
  const [cxAmount, setCxAmount] = react.exports.useState("");
  const [cyAmount, setCyAmount] = react.exports.useState("");
  const [post, setPost] = react.exports.useState(false);
  const [pj, setPj] = react.exports.useState(false);
  const [ioc, setIOC] = react.exports.useState(false);
  const [fok, setFok] = react.exports.useState(false);
  const [orderType, setOrderType] = react.exports.useState(OrderType.Limit);
  const market = useQuery(MarketSimpleDocument, {
    variables: {
      marketInput: {
        baseCoinType: (_f = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _f : "",
        quoteCoinType: (_g = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _g : ""
      }
    },
    skip: !firstCoin || !secondCoin
  });
  const pythRatingQuery = useQuery(PythRatingDocument, {
    variables: {
      marketInput: {
        baseCoinType: (_h = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _h : "",
        quoteCoinType: (_i2 = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _i2 : ""
      },
      price: (_j = parseFloat(price != null ? price : "")) != null ? _j : 0,
      side: !activeTab ? Side.Buy : Side.Sell
    },
    skip: !firstCoin || !secondCoin || !price
  });
  const pythRating = (_l = (_k = pythRatingQuery.data) == null ? void 0 : _k.market) == null ? void 0 : _l.pythRating;
  const step = react.exports.useMemo(() => {
    var _a3, _b2, _c2;
    return Number((_c2 = (_b2 = (_a3 = market == null ? void 0 : market.data) == null ? void 0 : _a3.market) == null ? void 0 : _b2.lotSizeDecimals) != null ? _c2 : 0);
  }, [market == null ? void 0 : market.data]);
  const tick = react.exports.useMemo(() => {
    var _a3, _b2, _c2;
    return Number((_c2 = (_b2 = (_a3 = market == null ? void 0 : market.data) == null ? void 0 : _a3.market) == null ? void 0 : _b2.tickSizeDecimals) != null ? _c2 : 0);
  }, [market == null ? void 0 : market.data]);
  const getDecCount = (n2) => {
    if (!n2)
      return 0;
    const nStr = n2.toString();
    const idx = nStr.indexOf(".");
    const nArr = nStr.split("");
    const sliced = nArr.slice(idx, nArr.length);
    const length = sliced.length;
    return length;
  };
  const tickValid = getDecCount(parseFloat(price != null ? price : "")) <= getDecCount(tick);
  const stepValid = getDecCount(parseFloat(cxAmount != null ? cxAmount : "")) <= getDecCount(step);
  const setPctFactory = (n2) => () => {
    if (quantX)
      setCxAmount((quantX * n2).toString());
  };
  const set25 = setPctFactory(0.25);
  const set50 = setPctFactory(0.5);
  const set75 = setPctFactory(0.75);
  const setMax = setPctFactory(1);
  const resetForm = () => {
    setActiveTab(0);
    setPrice("0");
    setCxAmount("0");
    setCyAmount("0");
    setPost(false);
    setIOC(false);
    setOrderType(OrderType.Limit);
  };
  const checkSetLimit = (switchVals) => {
    if (!switchVals.filter(Boolean).length)
      setOrderType(OrderType.Limit);
  };
  const onChangeIOC = (val) => {
    if (post && val)
      setPost(false);
    if (fok && val)
      setFok(false);
    if (pj && val)
      setPj(false);
    setIOC(val);
    setOrderType(OrderType.ImmediateOrCancel);
    checkSetLimit([pj, post, fok, val]);
  };
  const onChangePost = (val) => {
    if (ioc && val)
      setIOC(false);
    if (fok && val)
      setFok(false);
    if (pj && val)
      setPj(false);
    setPost(val);
    setOrderType(OrderType.PostOnly);
    checkSetLimit([pj, ioc, fok, val]);
  };
  const onChangeFok = (val) => {
    if (ioc && val)
      setIOC(false);
    if (post && val)
      setPost(false);
    if (pj && val)
      setPj(false);
    setFok(val);
    setOrderType(OrderType.FillOrKill);
    checkSetLimit([pj, post, ioc, val]);
  };
  const onChangePassiveJoin = (val) => {
    if (ioc && val)
      setIOC(false);
    if (post && val)
      setPost(false);
    if (fok && val)
      setFok(false);
    setPj(val);
    setOrderType(OrderType.PassiveJoin);
    checkSetLimit([post, ioc, fok, val]);
  };
  const onChangePrice = react.exports.useCallback((e2) => {
    setPrice(e2.currentTarget.value);
  }, []);
  const onChangeCxAmount = react.exports.useCallback((e2) => setCxAmount(e2.currentTarget.value), []);
  const onChangeCyAmount = react.exports.useCallback((e2) => setCyAmount(e2.currentTarget.value), []);
  const [placeOrderMutation] = useMutation(PlaceOrderDocument);
  const wallet = dist.useWallet();
  const placeOrder = async (placeOrderInput) => {
    var _a3;
    const tx = await placeOrderMutation({
      variables: {
        placeOrderInput
      }
    });
    if ((_a3 = tx.data) == null ? void 0 : _a3.placeOrder)
      await (wallet == null ? void 0 : wallet.signAndSubmitTransaction(tx.data.placeOrder));
  };
  const {
    addSuccessNotification,
    addErrorNotification
  } = Ha();
  const submitTrade = async () => {
    var _a3, _b2;
    if (firstCoin && secondCoin && wallet.account && cxAmount && price) {
      await placeOrder({
        auxToBurn: 0,
        clientOrderId: 0,
        orderType,
        limitPrice: (_a3 = price == null ? void 0 : price.toString()) != null ? _a3 : "",
        marketInput: {
          baseCoinType: firstCoin == null ? void 0 : firstCoin.coinType,
          quoteCoinType: secondCoin == null ? void 0 : secondCoin.coinType
        },
        quantity: cxAmount.toString(),
        sender: (_b2 = wallet.account) == null ? void 0 : _b2.address,
        side: activeTab === 0 ? Side.Buy : Side.Sell
      }).then(() => {
        resetForm();
        addSuccessNotification("Trade Submitted");
      }).catch(() => addErrorNotification("There was an issue processing your trade"));
    }
  };
  const tc = {
    cxAmount,
    onChangeCxAmount,
    price,
    onChangePrice,
    post,
    onChangePost,
    ioc,
    onChangeIOC,
    cyAmount,
    onChangeCyAmount,
    activeTab,
    submitTrade,
    onChangeOrderType: setOrderType,
    orderType,
    setActiveTab,
    fok,
    onChangeFok,
    set25,
    set50,
    set75,
    setMax,
    quantX,
    step,
    stepValid,
    pythRating,
    passiveJoin: pj,
    onChangePassiveJoin,
    tick,
    tickValid,
    setPrice,
    setCxAmount
  };
  return /* @__PURE__ */ jsx(TradeControlCtx.Provider, {
    value: tc,
    children
  });
};
function useTradeControls() {
  const ctx = react.exports.useContext(TradeControlCtx);
  return ctx;
}
const MarketTrades = "";
const MarketTradesDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "MarketTrades"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "MarketInput"
              }
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "trade"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "time"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quantity"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "price"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "value"
            }
          }]
        }
      }]
    }
  }]
};
const SimpleMarketQueryDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "SimpleMarketQuery"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInput"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "MarketInput"
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "market"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInput"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInput"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "tradeHistory"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "baseCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quoteCoinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "side"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "value"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "time"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function MarketTradesView() {
  var _a2, _b, _c, _d, _e2, _f;
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const marketTradesQuery = useQuery(SimpleMarketQueryDocument, {
    variables: {
      marketInput: {
        baseCoinType: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        quoteCoinType: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }
    },
    pollInterval: 5e3,
    skip: !firstCoin || !secondCoin
  });
  React.useEffect(() => {
    var _a3, _b2;
    const tradeHistory = (_b2 = (_a3 = marketTradesQuery.data) == null ? void 0 : _a3.market) == null ? void 0 : _b2.tradeHistory;
    setMarketTrades((prev) => {
      if (tradeHistory && tradeHistory.length > 1)
        return [...tradeHistory].sort((a2, b2) => a2.time < b2.time ? 1 : -1);
      return prev;
    });
  }, [marketTradesQuery.data]);
  const marketTradesSubscription = useSubscription(MarketTradesDocument, {
    variables: {
      marketInputs: [{
        baseCoinType: (_c = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _c : "",
        quoteCoinType: (_d = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _d : ""
      }]
    },
    skip: !firstCoin || !secondCoin
  });
  const [marketTrades, setMarketTrades] = react.exports.useState([]);
  React.useEffect(() => {
    var _a3;
    const item = (_a3 = marketTradesSubscription.data) == null ? void 0 : _a3.trade;
    if (item) {
      setMarketTrades((prev) => {
        const newState = prev.concat(item);
        if (newState.length > 1)
          return newState.sort((a2, b2) => a2.time < b2.time ? 1 : -1);
        return newState;
      });
    }
  }, [marketTradesSubscription.data]);
  const cellRendererFactory = (truncate, key) => (val) => {
    let value = `${val.getValue()}`;
    if (truncate && value.length > 10 && Number.isNaN(Number(value))) {
      const left = value.slice(0, 5);
      const right = value.slice(value.length - 5, value.length);
      value = `${left}...${right}`;
    }
    const row = val.row.original;
    const side = row.side;
    const v = Number(value).toLocaleString();
    const colorClass = key === "quantity" ? side === Side.Buy ? "text-green-400" : "text-red-400" : "";
    return /* @__PURE__ */ jsx("span", {
      className: `text-xs whitespace-nowrap max-h-[10px] ${colorClass} ${key === "time" ? "text-primary-400" : ""}`,
      children: key === "time" ? DateTime.fromJSDate(new Date(Number(value))).toRelative() : v
    });
  };
  const props = {
    loading: marketTradesQuery.loading,
    error: (_e2 = marketTradesQuery.error) == null ? void 0 : _e2.message,
    noData: /* @__PURE__ */ jsx(NoMarketTrades, {}),
    data: marketTrades,
    columns: [{
      accessorKey: "quantity",
      header: "QNTY",
      cell: cellRendererFactory(false, "quantity")
    }, {
      accessorKey: "price",
      header: "Price",
      cell: cellRendererFactory(false, "price")
    }, {
      accessorKey: "time",
      header: "Time",
      cell: cellRendererFactory(false, "time")
    }],
    virtualizeOptions: {
      count: (_f = marketTrades == null ? void 0 : marketTrades.length) != null ? _f : 100,
      estimateSize: () => {
        var _a3;
        return (_a3 = marketTrades == null ? void 0 : marketTrades.length) != null ? _a3 : 100;
      },
      getScrollElement: () => tableRef.current,
      overscan: 100
    }
  };
  const tableRef = react.exports.useRef(null);
  return /* @__PURE__ */ jsx("div", {
    className: "p-0  max-h-full overflow-auto",
    children: /* @__PURE__ */ jsx("div", {
      ref: tableRef,
      className: "overflow-auto h-full max-h-full",
      children: /* @__PURE__ */ jsx(Rl, {
        ...props
      })
    })
  });
}
function NoMarketTrades() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col gap-6 items-center w-full h-full p-4",
    children: /* @__PURE__ */ jsx("div", {
      className: "text-sm text-center",
      children: "No recent trades for this market."
    })
  });
}
function MarketTradesContainer({}) {
  return /* @__PURE__ */ jsx(MarketTradesView, {});
}
const OrderRow = react.exports.memo(function OrderRow2({
  order,
  scale,
  side,
  onClick
}) {
  var _a2, _b, _c;
  const controls = useAnimationControls();
  const bgColorTransforms = side === "ask" ? ["rgba(200,0,0,0)", "rgba(200,0,0,0.1)", "rgba(200,0,0,0)"] : ["rgba(0,200,0,0)", "rgba(0,200,0,0.1)", "rgba(0,200,0,0)"];
  react.exports.useEffect(() => {
    controls.start({
      backgroundColor: bgColorTransforms,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.2
      }
    });
  }, [order == null ? void 0 : order.quantity, controls]);
  const ref = react.exports.useRef(null);
  const clientRect = (_a2 = ref.current) == null ? void 0 : _a2.getBoundingClientRect();
  const width = (_b = clientRect == null ? void 0 : clientRect.width) != null ? _b : 0;
  const halfWidth = width / 2;
  const barWidth = scale((_c = order == null ? void 0 : order.quantity) != null ? _c : 0) * halfWidth;
  const barStyles = {
    position: "absolute",
    background: side === "ask" ? "rgba(200,0,0,0.2)" : "rgba(0,200,0,0.2)",
    height: clientRect == null ? void 0 : clientRect.height,
    width: barWidth,
    left: 0
  };
  const handleClick = react.exports.useCallback(() => onClick(order, side), [order, side]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(motion.tr, {
      onClick: handleClick,
      style: barStyles
    }), /* @__PURE__ */ jsx(motion.tr, {
      ref,
      className: "border-b border-primary-100 dark:border-primary-700 text-primary-500 dark:text-primary-400 hover:bg-primary-800 hover:cursor-pointer",
      onClick: handleClick,
      children: side === "bid" ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(motion.td, {
          animate: controls,
          className: "text-left pl-4",
          children: order == null ? void 0 : order.quantity
        }), /* @__PURE__ */ jsx(motion.td, {
          animate: controls,
          className: "text-left pl-4 text-green-500",
          children: order == null ? void 0 : order.price
        })]
      }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(motion.td, {
          animate: controls,
          className: "text-left pl-4",
          children: order == null ? void 0 : order.quantity
        }), /* @__PURE__ */ jsx(motion.td, {
          animate: controls,
          className: "text-left pl-4 text-red-500",
          children: order == null ? void 0 : order.price
        })]
      })
    })]
  });
});
function OrderTable({
  items,
  loading,
  error,
  onOrderClick
}) {
  var _a2, _b;
  const askTotals = items.map((i2) => {
    var _a3, _b2;
    return (_b2 = (_a3 = i2 == null ? void 0 : i2.ask) == null ? void 0 : _a3.quantity) != null ? _b2 : 0;
  });
  const bidTotals = items.map((i2) => {
    var _a3, _b2;
    return (_b2 = (_a3 = i2 == null ? void 0 : i2.bid) == null ? void 0 : _a3.quantity) != null ? _b2 : 0;
  });
  const scaleAsk = linear().domain([Math.min(...askTotals), Math.max(...askTotals)]).range([0, 1]);
  const scaleBid = linear().domain([Math.min(...bidTotals), Math.max(...bidTotals)]).range([0, 1]);
  const askTableRef = react.exports.useRef(null);
  const bidTableRef = react.exports.useRef(null);
  const asks = react.exports.useMemo(() => {
    var _a3, _b2;
    return (_b2 = ((_a3 = items.map(({
      ask
    }) => ask)) != null ? _a3 : []).filter(Boolean).sort((a2, b2) => {
      var _a4, _b3;
      return ((_a4 = a2 == null ? void 0 : a2.price) != null ? _a4 : 0) < ((_b3 = b2 == null ? void 0 : b2.price) != null ? _b3 : 0) ? 1 : -1;
    })) != null ? _b2 : [];
  }, [items]);
  const bids = react.exports.useMemo(() => {
    var _a3, _b2;
    return (_b2 = ((_a3 = items.map(({
      bid
    }) => bid)) != null ? _a3 : []).filter(Boolean).sort((a2, b2) => {
      var _a4, _b3;
      return ((_a4 = a2 == null ? void 0 : a2.price) != null ? _a4 : 0) < ((_b3 = b2 == null ? void 0 : b2.price) != null ? _b3 : 0) ? 1 : -1;
    })) != null ? _b2 : [];
  }, [items]);
  const renderAskRow = react.exports.useCallback((row) => {
    var _a3;
    return /* @__PURE__ */ jsx(OrderRow, {
      order: asks[row == null ? void 0 : row.index],
      scale: scaleAsk,
      side: "ask",
      onClick: onOrderClick
    }, (_a3 = asks[row == null ? void 0 : row.index]) == null ? void 0 : _a3.price);
  }, [scaleAsk, asks]);
  const askOrderTableProps = {
    loading,
    noData: /* @__PURE__ */ jsx(NoAsks, {}),
    error,
    data: asks,
    customRowRender: renderAskRow,
    columns: [{
      accessorKey: "ask.quantity",
      header: "Size"
    }, {
      accessorKey: "ask.price",
      header: "Price"
    }],
    virtualizeOptions: {
      count: (_a2 = items == null ? void 0 : items.length) != null ? _a2 : 300,
      estimateSize: () => {
        var _a3;
        return (_a3 = items == null ? void 0 : items.length) != null ? _a3 : 300;
      },
      getScrollElement: () => askTableRef.current,
      overscan: 300
    },
    initialScrollIdx: asks.length - 1
  };
  const renderBidRow = react.exports.useCallback((row) => {
    var _a3;
    return /* @__PURE__ */ jsx(OrderRow, {
      order: bids[row == null ? void 0 : row.index],
      scale: scaleBid,
      side: "bid",
      onClick: onOrderClick
    }, (_a3 = bids[row == null ? void 0 : row.index]) == null ? void 0 : _a3.price);
  }, [scaleBid, bids]);
  const bidOrderTableProps = {
    loading,
    noData: /* @__PURE__ */ jsx(NoBids, {}),
    error,
    data: bids,
    customRowRender: renderBidRow,
    columns: [{
      accessorKey: "bid.quantity",
      header: "Size",
      maxSize: 150
    }, {
      accessorKey: "bid.price",
      header: "Price",
      maxSize: 150
    }],
    virtualizeOptions: {
      count: (_b = items == null ? void 0 : items.length) != null ? _b : 300,
      estimateSize: () => {
        var _a3;
        return (_a3 = items == null ? void 0 : items.length) != null ? _a3 : 300;
      },
      getScrollElement: () => bidTableRef.current,
      overscan: 300,
      enableSmoothScroll: true
    }
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: loading ? /* @__PURE__ */ jsx(Or, {
      variant: "table"
    }) : error ? /* @__PURE__ */ jsx(Ir, {
      title: "Error",
      message: "Uh Oh. Please try again.",
      variant: "error",
      details: error
    }) : bids.length === 0 && asks.length === 0 ? /* @__PURE__ */ jsx(NoOrders, {}) : /* @__PURE__ */ jsxs("div", {
      className: "h-full flex flex-col justify-start",
      children: [/* @__PURE__ */ jsx("div", {
        ref: askTableRef,
        className: "relative overflow-y-auto max-h-full",
        children: /* @__PURE__ */ jsx(Rl, {
          ...askOrderTableProps
        })
      }), /* @__PURE__ */ jsx("div", {
        ref: bidTableRef,
        className: "relative overflow-y-auto max-h-full",
        children: /* @__PURE__ */ jsx(Rl, {
          ...bidOrderTableProps
        })
      })]
    })
  });
}
function NoOrders() {
  return /* @__PURE__ */ jsx("div", {
    className: "h-full flex flex-col justify-start",
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col gap-6 items-center w-full h-full py-8 px-4",
      children: /* @__PURE__ */ jsx("div", {
        className: "text-base text-center",
        children: "No open orders for this market."
      })
    })
  });
}
function NoBids() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col gap-6 items-center w-full h-full p-4 border-t-2 border-t-primary-700",
    children: /* @__PURE__ */ jsx("div", {
      className: "text-sm text-center",
      children: "No open bids for this market."
    })
  });
}
function NoAsks() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col gap-6 items-center w-full h-full p-4 border-b-2 border-b-primary-700",
    children: /* @__PURE__ */ jsx("div", {
      className: "text-sm text-center",
      children: "No open asks for this market."
    })
  });
}
const OrderBook = "";
const OrderbookDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "Orderbook"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "MarketInput"
              }
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "orderbook"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "bids"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "asks"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "price"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                }
              }]
            }
          }]
        }
      }]
    }
  }]
};
function OrderBookView(props) {
  var _a2, _b, _c;
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const orderbookSub = useSubscription(OrderbookDocument, {
    variables: {
      marketInputs: [{
        baseCoinType: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
        quoteCoinType: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
      }]
    }
  });
  const [orderItems, setOrderItems] = react.exports.useState([]);
  react.exports.useEffect(() => {
    setOrderItems([]);
  }, [firstCoin, secondCoin]);
  react.exports.useEffect(() => {
    var _a3, _b2, _c2;
    const obd = (_a3 = orderbookSub.data) == null ? void 0 : _a3.orderbook;
    const maxLen = Math.max((_b2 = obd == null ? void 0 : obd.asks.length) != null ? _b2 : 0, (_c2 = obd == null ? void 0 : obd.asks.length) != null ? _c2 : 0, 25);
    const items = [];
    for (let i2 = 0; i2 < maxLen; i2++) {
      const ask = obd == null ? void 0 : obd.asks[i2];
      const bid = obd == null ? void 0 : obd.bids[i2];
      items.push({
        ask,
        bid
      });
    }
    if (items.length)
      setOrderItems(items);
  }, [orderbookSub.data]);
  return /* @__PURE__ */ jsx(OrderTable, {
    loading: orderbookSub.loading,
    error: (_c = orderbookSub.error) == null ? void 0 : _c.message,
    items: orderItems,
    onOrderClick: props.onOrderClick
  });
}
function OrderBookContainer(props) {
  return /* @__PURE__ */ jsx(OrderBookView, {
    ...props
  });
}
const OrderTip = react.exports.memo(function OrderTip2({
  tip,
  children
}) {
  return /* @__PURE__ */ jsx("div", {
    style: {
      cursor: "pointer",
      zIndex: 9
    },
    children: /* @__PURE__ */ jsx(Tooltip, {
      id: tip,
      content: /* @__PURE__ */ jsx("span", {
        className: "opacity-100 font-bold",
        children: tip
      }),
      placement: "right",
      animation: false,
      children: /* @__PURE__ */ jsx("div", {
        style: {
          width: 24,
          height: 24,
          padding: 3,
          maxWidth: 24,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsx(InformationCircleIcon, {
          fontSize: 32,
          color: "white"
        })
      })
    }, tip)
  });
});
function TradingForm() {
  var _a2, _b, _c;
  const {
    ioc,
    onChangeIOC,
    post,
    onChangePost,
    onChangeCxAmount,
    cxAmount,
    price: priceInput,
    onChangePrice,
    setActiveTab,
    activeTab,
    submitTrade,
    fok,
    onChangeFok,
    set25,
    set50,
    set75,
    setMax,
    step,
    stepValid,
    pythRating,
    passiveJoin,
    onChangePassiveJoin,
    tick,
    tickValid
  } = useTradeControls();
  const wallet = dist.useWallet();
  const hasAccount = useHasAccount();
  const navigate = useNavigate();
  const {
    firstCoin,
    secondCoin
  } = useCoinXYParamState();
  const appTitle = window.appTitle;
  const connectWalletTrigger2 = /* @__PURE__ */ jsx(cr, {
    onClick: submitTrade,
    size: "sm",
    className: "self-stretch w-full",
    children: "Connect Wallet"
  });
  const tabs = [{
    label: "Buy",
    variant: "buy"
  }, {
    label: "Sell",
    variant: "sell"
  }];
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col w-full h-full gap-3 pb-3 overflow-y-auto",
    children: [/* @__PURE__ */ jsx(qe.Group, {
      onChange: setActiveTab,
      selectedIndex: activeTab,
      children: /* @__PURE__ */ jsx(Cl, {
        tabs
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-3 px-4",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(wl, {
          className: "w-full",
          value: priceInput,
          onChange: onChangePrice,
          name: "price",
          label: "Price",
          suffix: secondCoin == null ? void 0 : secondCoin.symbol,
          inputMode: "decimal",
          type: "number"
        }), !tickValid && /* @__PURE__ */ jsxs("span", {
          className: "text-red-400 text-xs",
          children: [secondCoin == null ? void 0 : secondCoin.symbol, " must be in increments of ", tick.toString()]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx(wl, {
          value: cxAmount,
          onChange: onChangeCxAmount,
          name: "coinx",
          label: "Amount",
          suffix: firstCoin == null ? void 0 : firstCoin.symbol,
          className: "w-full",
          inputMode: "decimal",
          type: "number",
          step
        }), !stepValid && /* @__PURE__ */ jsxs("span", {
          className: "text-red-400 text-xs",
          children: [firstCoin == null ? void 0 : firstCoin.symbol, " must be in increments of ", step.toString()]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex w-full gap-2 pt-2",
          children: [/* @__PURE__ */ jsx(cr, {
            size: "xs",
            variant: "basic",
            onClick: set25,
            children: "25%"
          }), /* @__PURE__ */ jsx(cr, {
            size: "xs",
            variant: "basic",
            onClick: set50,
            children: "50%"
          }), /* @__PURE__ */ jsx(cr, {
            size: "xs",
            variant: "basic",
            onClick: set75,
            children: "75%"
          }), /* @__PURE__ */ jsx(cr, {
            size: "xs",
            variant: "basic",
            onClick: setMax,
            children: "Max"
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "grid gap-6 my-2 grid-row-2 grid-col-2",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-start gap-2",
          children: [/* @__PURE__ */ jsx(kl, {
            enabled: ioc,
            onChange: onChangeIOC
          }), "Immediate Or Cancel", /* @__PURE__ */ jsx(OrderTip, {
            tip: `
            Place an aggressive order. The portion of the order that does not fill
            immediately is cancelled.
            `
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-start gap-2",
          children: [/* @__PURE__ */ jsx(kl, {
            enabled: post,
            onChange: onChangePost
          }), "Post", /* @__PURE__ */ jsx(OrderTip, {
            tip: `
                Place a passive order. If the order would be aggressive, optionally slide
                it to become passive. Otherwise, cancel the order.
            `
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-start gap-2",
          children: [/* @__PURE__ */ jsx(kl, {
            enabled: fok,
            onChange: onChangeFok
          }), "Fill or Kill", /* @__PURE__ */ jsx(OrderTip, {
            tip: `
            Place an aggressive order. If the entire order cannot fill immediately,
            cancel the entire order.
            `
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-start gap-2",
          children: [/* @__PURE__ */ jsx(kl, {
            enabled: passiveJoin,
            onChange: onChangePassiveJoin
          }), "Passive Join", /* @__PURE__ */ jsx(OrderTip, {
            tip: `
             Join the best bid or best ask level. Optionally place the order more or
             less aggressive than the best bid or ask up to the limit price.
            `
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col pt-3 border-t border-t-primary-700 gap-2",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex justify-between text-primary-400 text-sm",
          children: [/* @__PURE__ */ jsx("div", {
            className: "font-medium",
            children: "Price Protection by Pyth:"
          }), /* @__PURE__ */ jsx("div", {
            className: `font-medium ${(pythRating == null ? void 0 : pythRating.color) === "GREEN" ? "text-green-300" : (pythRating == null ? void 0 : pythRating.color) === "YELLOW" ? "text-yellow-300" : (pythRating == null ? void 0 : pythRating.color) === "RED" ? "text-red-300" : ""}`,
            children: (pythRating == null ? void 0 : pythRating.color) === "GREEN" ? "Good Price" : (pythRating == null ? void 0 : pythRating.color) === "YELLOW" ? "High Price" : (pythRating == null ? void 0 : pythRating.color) === "RED" ? "High Price" : ""
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between text-primary-400 text-sm",
          children: [/* @__PURE__ */ jsx("div", {
            className: "font-medium",
            children: "Subtotal"
          }), /* @__PURE__ */ jsx("div", {
            className: "font-semibold",
            children: (priceInput && cxAmount ? Number.isNaN(parseFloat(priceInput) * parseFloat(cxAmount)) ? 0 : parseFloat(priceInput) * parseFloat(cxAmount) : 0).toLocaleString()
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between text-primary-400 text-sm",
          children: [/* @__PURE__ */ jsx("div", {
            className: "font-medium",
            children: "Fee"
          }), /* @__PURE__ */ jsx("div", {
            className: "font-semibold",
            children: "Zero! \u{1F60D}"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex justify-between text-lg border-t border-t-primary-700 pt-3",
          children: [/* @__PURE__ */ jsx("div", {
            className: "font-medium",
            children: "Total"
          }), /* @__PURE__ */ jsx("div", {
            className: "font-bold",
            children: priceInput && cxAmount ? (Number.isNaN(parseFloat(priceInput) * parseFloat(cxAmount)) ? 0 : parseFloat(priceInput) * parseFloat(cxAmount)).toLocaleString() : 0
          })]
        })]
      }), !((_a2 = wallet == null ? void 0 : wallet.account) == null ? void 0 : _a2.address) ? /* @__PURE__ */ jsx(ConnectWalletContainer, {
        trigger: connectWalletTrigger2
      }) : !((_c = (_b = hasAccount.data) == null ? void 0 : _b.account) == null ? void 0 : _c.hasAuxAccount) ? /* @__PURE__ */ jsxs(cr, {
        disabled: !stepValid,
        onClick: () => navigate("/account"),
        size: "sm",
        className: "flex items-center justify-center",
        children: ["Create ", appTitle, " Account", " ", /* @__PURE__ */ jsx(ArrowLongRightIcon, {
          className: "w-4 h-4 ml-2 text-primary-300 group-hover:text-primary-900"
        })]
      }) : /* @__PURE__ */ jsx(cr, {
        disabled: !stepValid,
        onClick: submitTrade,
        size: "sm",
        children: "Submit Trade"
      })]
    })]
  });
}
function usePositionsTable() {
  var _a2, _b, _c, _d, _e2, _f, _g;
  const positions = usePositions();
  const tableRef = react.exports.useRef(null);
  const tableProps = {
    loading: positions.loading,
    error: (_a2 = positions.error) == null ? void 0 : _a2.message,
    noData: "You have no open positions.",
    data: (_d = (_c = (_b = positions.data) == null ? void 0 : _b.account) == null ? void 0 : _c.poolPositions) != null ? _d : [],
    columns: [{
      accessorKey: "coinInfoX.symbol",
      header: "Coin X"
    }, {
      accessorKey: "coinInfoY.symbol",
      header: "Coin Y"
    }, {
      accessorKey: "amountLP",
      header: "Amount LP"
    }, {
      accessorKey: "amountX",
      header: "Amount X"
    }, {
      accessorKey: "amountY",
      header: "Amount Y"
    }, {
      accessorKey: "share",
      header: "Share"
    }],
    virtualizeOptions: {
      count: (_g = (_f = (_e2 = positions.data) == null ? void 0 : _e2.account) == null ? void 0 : _f.poolPositions.length) != null ? _g : 0,
      estimateSize: () => {
        var _a3, _b2, _c2;
        return (_c2 = (_b2 = (_a3 = positions.data) == null ? void 0 : _a3.account) == null ? void 0 : _b2.poolPositions.length) != null ? _c2 : 0;
      },
      getScrollElement: () => tableRef.current
    }
  };
  return [tableProps, tableRef];
}
const High24hDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "High24h"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MarketInput"
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "high24h"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "high"
            }
          }]
        }
      }]
    }
  }]
};
function useHigh24(input) {
  const high25Sub = useSubscription(High24hDocument, {
    variables: input
  });
  return high25Sub;
}
const Low24HDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "Low24H"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MarketInput"
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "low24h"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "low"
            }
          }]
        }
      }]
    }
  }]
};
function useLow24(input) {
  const Low25Sub = useSubscription(Low24HDocument, {
    variables: input
  });
  return Low25Sub;
}
const Volume24HDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "subscription",
    "name": {
      "kind": "Name",
      "value": "Volume24H"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "marketInputs"
        }
      },
      "type": {
        "kind": "ListType",
        "type": {
          "kind": "NonNullType",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MarketInput"
            }
          }
        }
      }
    }],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "volume24h"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "marketInputs"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "marketInputs"
            }
          }
        }],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "baseCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "quoteCoinType"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "volume"
            }
          }]
        }
      }]
    }
  }]
};
function useVolume24(input) {
  const Volume25Sub = useSubscription(Volume24HDocument, {
    variables: input
  });
  return Volume25Sub;
}
function TradeView({}) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p, _q, _r2, _s2, _t2, _u, _v, _w, _x;
  const {
    firstCoin,
    secondCoin,
    lastTradePrice,
    onSecondCoinSelect,
    onFirstCoinSelect
  } = useCoinXYParamState();
  const wallet = dist.useWallet();
  const hasAccount = useHasAccount();
  const [priceDirection, setPriceDirection] = react.exports.useState("up");
  const lastPriceRef = react.exports.useRef(lastTradePrice);
  const [priceDiff, setPriceDiff] = react.exports.useState(0);
  const [priceDiffPct, setPriceDiffPct] = react.exports.useState(0);
  react.exports.useEffect(() => {
    var _a3, _b2, _c2;
    const s2 = Math.sign((lastTradePrice != null ? lastTradePrice : 0) - ((_a3 = lastPriceRef.current) != null ? _a3 : 0));
    const _priceDiffPct = Math.abs(1 - (lastTradePrice != null ? lastTradePrice : 0) / ((_b2 = lastPriceRef.current) != null ? _b2 : 0));
    const _priceDiff = Math.abs((lastTradePrice != null ? lastTradePrice : 0) - ((_c2 = lastPriceRef.current) != null ? _c2 : 0));
    if (_priceDiff && !Number.isNaN(_priceDiff))
      setPriceDiff(_priceDiff);
    else
      setPriceDiff(0);
    if (_priceDiffPct && _priceDiffPct !== Infinity && !Number.isNaN(_priceDiffPct))
      setPriceDiffPct(Number(_priceDiffPct));
    else
      setPriceDiffPct(0);
    if (s2 < 0)
      setPriceDirection("down");
    if (s2 > 0)
      setPriceDirection("up");
    lastPriceRef.current = lastTradePrice;
  }, [lastTradePrice]);
  const high24 = useHigh24({
    marketInputs: [{
      baseCoinType: (_a2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _a2 : "",
      quoteCoinType: (_b = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _b : ""
    }]
  });
  const low24 = useLow24({
    marketInputs: [{
      baseCoinType: (_c = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _c : "",
      quoteCoinType: (_d = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _d : ""
    }]
  });
  const vol24 = useVolume24({
    marketInputs: [{
      baseCoinType: (_e2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _e2 : "",
      quoteCoinType: (_f = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _f : ""
    }]
  });
  const onSelectMarket = (m) => {
    setPriceDiff(0);
    setPriceDiffPct(0);
    onFirstCoinSelect(m.baseCoinInfo);
    onSecondCoinSelect(m.quoteCoinInfo);
    lastPriceRef.current = 0;
  };
  const orderTableTabs = [{
    label: "Open Orders"
  }, {
    label: "Order History"
  }, {
    label: "Trade History"
  }, {
    label: "Balances"
  }];
  const [orderTableTab, setOrderTableTab] = react.exports.useState(3);
  const marketEventTabs = [{
    label: "Order Book"
  }, {
    label: "Market Trades"
  }];
  const [marketEventTab, setMarketEventTab] = react.exports.useState(0);
  usePositionsTable();
  const [, openOrderTableRef] = useOpenOrdersTable();
  const [, orderHistoryTableRef] = useOrderHistoryTable();
  const [, tradeHistoryTableRef] = useTradeHistoryTable();
  const [, balanceTableRef] = useBalancesTable();
  function getTableRef(tab) {
    switch (tab) {
      case 0:
        return openOrderTableRef;
      case 1:
        return orderHistoryTableRef;
      case 2:
        return tradeHistoryTableRef;
      case 3:
        return balanceTableRef;
      default:
        return balanceTableRef;
    }
  }
  const {
    setActiveTab,
    setPrice,
    setCxAmount
  } = useTradeControls();
  return /* @__PURE__ */ jsxs("div", {
    className: " bg-primary-900 w-full grid sm:grid-cols-1 sm:grid-rows-5 md:grid-rows-[76px_minmax(0,1fr)_minmax(0,1fr)_300px] md:grid-cols-[275px_275px_1fr_1fr_1fr_1fr] overflow-hidden",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex items-center md:col-span-6",
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex px-4 py-2.5 w-[380px]",
        children: /* @__PURE__ */ jsx(MarketSelector, {
          onSelectMarket
        })
      }), /* @__PURE__ */ jsx(vl, {
        title: "Last Trade Price",
        value: lastTradePrice != null ? lastTradePrice : "-",
        className: "mx-1 ml-1"
      }), /* @__PURE__ */ jsx(vl, {
        title: "24hr High",
        value: (_j = (_i2 = (_h = (_g = high24.data) == null ? void 0 : _g.high24h) == null ? void 0 : _h.high) == null ? void 0 : _i2.toLocaleString()) != null ? _j : "-",
        className: "mx-1"
      }), /* @__PURE__ */ jsx(vl, {
        title: "24hr Low",
        value: (_n2 = (_m = (_l = (_k = low24.data) == null ? void 0 : _k.low24h) == null ? void 0 : _l.low) == null ? void 0 : _m.toLocaleString()) != null ? _n2 : "-",
        className: "mx-1"
      }), /* @__PURE__ */ jsx(vl, {
        title: "24hr Volume",
        value: (_r2 = (_q = (_p = (_o = vol24.data) == null ? void 0 : _o.volume24h) == null ? void 0 : _p.volume) == null ? void 0 : _q.toLocaleString()) != null ? _r2 : "-",
        className: "ml-1"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: " sm:col-span-1 md:col-span-1 sm:row-span-1 md:row-span-4 h-full md:border-t md:border-t-primary-700 md:border-r md:border-r-primary-700",
      children: /* @__PURE__ */ jsx(TradingForm, {})
    }), /* @__PURE__ */ jsxs("div", {
      className: " md:col-span-1 md:row-span-3 h-full md:border-r md:border-t md:border-t-primary-700 md:border-r-primary-700",
      children: [/* @__PURE__ */ jsx(qe.Group, {
        selectedIndex: marketEventTab,
        onChange: setMarketEventTab,
        children: /* @__PURE__ */ jsx(Cl, {
          tabs: marketEventTabs
        })
      }), marketEventTab === 0 ? /* @__PURE__ */ jsx(OrderBookContainer, {
        price: (_s2 = lastTradePrice == null ? void 0 : lastTradePrice.toString()) != null ? _s2 : "",
        priceDirection,
        symbol: "BTC-USD",
        baseCoinType: (_t2 = firstCoin == null ? void 0 : firstCoin.coinType) != null ? _t2 : "",
        quoteCoinType: (_u = secondCoin == null ? void 0 : secondCoin.coinType) != null ? _u : "",
        onOrderClick: (v, s2) => {
          if (s2 === "ask")
            setActiveTab(0);
          if (s2 === "bid")
            setActiveTab(1);
          setCxAmount(v.quantity.toString());
          setPrice(v.price.toString());
        }
      }) : null, marketEventTab === 1 ? /* @__PURE__ */ jsx(MarketTradesContainer, {}) : null]
    }), /* @__PURE__ */ jsx("div", {
      id: "tv_chart_container",
      style: {
        minHeight: 300
      },
      className: "bg-primary-900 min-h-full sm:col-span-1 md:col-span-4 sm:row-span-1 md:row-span-2 h-full min-w-full overflow-hidden md:border-y md:border-y-primary-700"
    }), !((_v = wallet.account) == null ? void 0 : _v.address) ? /* @__PURE__ */ jsx(NoWalletUI, {}) : !((_x = (_w = hasAccount.data) == null ? void 0 : _w.account) == null ? void 0 : _x.hasAuxAccount) ? /* @__PURE__ */ jsx(NoAccountUI, {}) : /* @__PURE__ */ jsxs("div", {
      className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
      children: [/* @__PURE__ */ jsx(qe.Group, {
        selectedIndex: orderTableTab,
        onChange: setOrderTableTab,
        children: /* @__PURE__ */ jsx(Cl, {
          tabs: orderTableTabs
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "max-w-full w-full h-full overflow-y-auto max-h-[250px]",
        ref: getTableRef(orderTableTab),
        children: [orderTableTab === 0 && /* @__PURE__ */ jsx(OrdersTable, {
          variant: "open"
        }), orderTableTab === 1 && /* @__PURE__ */ jsx(OrdersTable, {}), orderTableTab === 2 && /* @__PURE__ */ jsx(TradeTable, {}), orderTableTab === 3 && /* @__PURE__ */ jsx(BalancesTable, {})]
      })]
    })]
  });
}
const connectWalletTrigger = /* @__PURE__ */ jsx(cr, {
  size: "sm",
  onClick: () => {
  },
  children: "Connect Wallet"
});
function NoWalletUI() {
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-xl",
        children: "Connect your wallet to start trading."
      }), /* @__PURE__ */ jsx(ConnectWalletContainer, {
        trigger: connectWalletTrigger
      })]
    })
  });
}
function NoAccountUI() {
  const navigate = useNavigate();
  const appTitle = window.appTitle;
  return /* @__PURE__ */ jsx("div", {
    className: " sm:col-span-1 md:col-span-4 md:row-span-1 w-full max-h-full h-full bg-gradient-to-br from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-end  text-sm text-center text-primary-100 ",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-6 items-center justify-center w-full h-full p-8",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "text-xl",
        children: ["Create an ", appTitle, " Account to start trading."]
      }), /* @__PURE__ */ jsxs(cr, {
        variant: "basic",
        size: "sm",
        onClick: () => navigate("/account"),
        className: "flex items-center bg-none text-primary-100 border-blue-100 hover:bg-blue-100 hover:border-blue-100 hover:text-primary-900 group",
        children: ["Create ", appTitle, " Account", " ", /* @__PURE__ */ jsx(ArrowLongRightIcon$1, {
          className: "w-4 h-4 ml-2 text-primary-300 group-hover:text-primary-900"
        })]
      })]
    })
  });
}
function TradeContainer({}) {
  return /* @__PURE__ */ jsx(DataFeedProvider, {
    children: /* @__PURE__ */ jsx(TradeControlsProvider, {
      children: /* @__PURE__ */ jsx(TradeView, {})
    })
  });
}
const AllPoolsDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "AllPools"
    },
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pools"
        },
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "featuredStatus"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoX"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoY"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "coinInfoLP"
            },
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "coinType"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "decimals"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "name"
                }
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "symbol"
                }
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountX"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountY"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "amountLP"
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "feePercent"
            }
          }]
        }
      }]
    }
  }]
};
const Pools = "";
function PoolsView({}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = react.exports.useState("");
  const onSearchChange = (c) => setSearchQuery(c.currentTarget.value);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center gap-4 w-full max-w-[1280px] h-auto",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex w-full justify-between items-center  mt-8",
      children: [/* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("h2", {
          className: "text-4xl",
          children: "Pools"
        })
      }), /* @__PURE__ */ jsx(wl, {
        value: searchQuery,
        name: "marketSearch",
        placeholder: "Search Pools",
        className: "ml-auto mr-3",
        label: "",
        autoFocus: true,
        inputClass: "pl-[36px] rounded-full border border-primary-700 bg-primary-800",
        prefix: /* @__PURE__ */ jsx(MagnifyingGlassIcon, {
          width: 20,
          height: 20
        }),
        onChange: onSearchChange
      }), /* @__PURE__ */ jsx(cr, {
        size: "md",
        onClick: () => navigate("/create-pool"),
        className: "text-sm",
        children: "Create Pool"
      })]
    }), /* @__PURE__ */ jsx(Aa, {
      className: "max-w-full w-full rounded-xl border border-primary-700 overflow-auto",
      padding: 0,
      children: /* @__PURE__ */ jsx(PoolsTable, {
        globalFilter: searchQuery
      })
    })]
  });
}
function PoolsContainer() {
  var _a2, _b, _c;
  const navigate = useNavigate();
  const {
    onFirstCoinSelect,
    onSecondCoinSelect
  } = useCoinXYParamState();
  const poolsQuery = useQuery(AllPoolsDocument, {
    pollInterval: 2e3
  });
  return /* @__PURE__ */ jsx(PoolsView, {
    loading: poolsQuery.loading,
    pools: (_c = (_b = (_a2 = poolsQuery.data) == null ? void 0 : _a2.pools) == null ? void 0 : _b.filter(Boolean)) != null ? _c : null,
    goToAddLiquidity: (coinx, coiny) => {
      if (coinx && coiny) {
        onFirstCoinSelect(coinx);
        onSecondCoinSelect(coiny);
        navigate(`/add-liquidity`);
      } else
        navigate("/add-liquidity");
    },
    goToRemoveLiquidity: (coinx, coiny) => {
      if (coinx && coiny) {
        onFirstCoinSelect(coinx);
        onSecondCoinSelect(coiny);
        navigate(`/remove-liquidity`);
      } else
        navigate("/remove-liquidity");
    },
    goToPoolInfo: (coinx, coiny) => {
      onFirstCoinSelect(coinx);
      onSecondCoinSelect(coiny);
      navigate(`/pool`);
    }
  });
}
const Nav$1 = "";
function Nav({}) {
  var _a2;
  const navLinkClasses = "w-auto px-8 py-4 text-primary-300 align-middle border-b-4 border-transparent border-solid hover:border-primary-600 hover:text-primary-300 hover:bg-primary-800";
  const activeLinkClasses = " border-accent-500 border-brand text-white";
  const disabledClasses = " opacity-70 pointer-events-none cursor-default";
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-row w-auto max-w-[100vw] overflow-x-auto md:translate-x-10",
    children: (_a2 = window.topnav_links) == null ? void 0 : _a2.map(({
      to: to2,
      title,
      disabled
    }, idx) => /* @__PURE__ */ jsx(NavLink, {
      end: true,
      to: to2,
      className: (navData) => navLinkClasses + (navData.isActive ? activeLinkClasses : "") + (disabled ? disabledClasses : ""),
      children: title
    }, idx))
  });
}
const Header$1 = "";
function Header({}) {
  const connectWallet = () => {
  };
  const appTitle = window.appTitle;
  const connectEl = /* @__PURE__ */ jsx(cr, {
    className: "my-auto mx-3",
    size: "sm",
    onClick: connectWallet,
    children: "Connect Wallet"
  });
  return /* @__PURE__ */ jsxs("header", {
    className: "grow-0 shrink-0 basis-auto items-center w-full flex justify-between flex-row top-0 bg-primary-900 border-b border-b-primary-700 box-shadow-lg z-20",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex",
      children: [/* @__PURE__ */ jsx(Link, {
        to: "/",
        className: "p-3",
        children: /* @__PURE__ */ jsx("img", {
          src: "./logo.svg",
          alt: `${appTitle} DEX Logo`,
          className: "h-[32px] w-auto"
        })
      }), /* @__PURE__ */ jsx(Nav, {})]
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex items-center",
      children: [/* @__PURE__ */ jsx(ConnectWalletContainer, {
        trigger: connectEl
      }), /* @__PURE__ */ jsx(NetworkToggle, {})]
    })]
  });
}
const httpLink = new HttpLink({
  uri: window.rest_graphql_endpoint
});
const wsLink = new GraphQLWsLink(createClient({
  url: window.ws_graphql_endpoint,
  shouldRetry(err) {
    console.log("Disconnected from WS: ", err);
    return true;
  }
}));
const splitLink = split(({
  query
}) => {
  const definition = getMainDefinition(query);
  return definition.kind === "OperationDefinition" && definition.operation === "subscription";
}, wsLink, httpLink);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  credentials: "include"
});
const BLACK_LIST = ["IR", "KP", "BY", "MM", "CI", "CU", "CD", "IQ", "LR", "SY", "ZW", "UA", "BI", "CF", "LY", "ML", "NI", "VE", "YE", "RU"];
const wallets = [new dist.MartianWalletAdapter(), new dist.AptosWalletAdapter(), new dist.PontemWalletAdapter(), new dist.HippoWalletAdapter(), new dist.FewchaWalletAdapter(), new dist.HippoExtensionWalletAdapter(), new dist.SpikaWalletAdapter(), new dist.RiseWalletAdapter(), new dist.FletchWalletAdapter(), new dist.TokenPocketWalletAdapter(), new dist.ONTOWalletAdapter(), new dist.SafePalWalletAdapter()];
function App() {
  const location = useGeoLocation();
  const country = location.country;
  return /* @__PURE__ */ jsx("div", {
    className: "dark w-full h-full max-h-screen max-w-screen",
    children: /* @__PURE__ */ jsx(ApolloProvider, {
      client,
      children: /* @__PURE__ */ jsx(dist.WalletProvider, {
        wallets,
        autoConnect: true,
        children: /* @__PURE__ */ jsx(BrowserRouter, {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col h-full w-full",
            children: [/* @__PURE__ */ jsx(ml, {}), /* @__PURE__ */ jsx(Header, {}), BLACK_LIST.includes(country) ? /* @__PURE__ */ jsxs("div", {
              id: "bgcontainer",
              className: " bg-cover flex flex-auto p-relative overflow-auto z-10 bg-gradient-to-br from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-end max-w-[100vw] items-center justify-center text-white",
              children: ["Sorry we do not support ", country, " at this time."]
            }) : /* @__PURE__ */ jsx("div", {
              id: "bgcontainer",
              className: "bg-cover flex flex-auto p-relative overflow-auto z-10 bg-gradient-to-br from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-end max-w-[100vw] justify-center",
              children: /* @__PURE__ */ jsx(CoinXYParamCtxProvider, {
                children: /* @__PURE__ */ jsxs(Routes, {
                  children: [/* @__PURE__ */ jsx(Route, {
                    path: "/",
                    element: /* @__PURE__ */ jsx(SwapFormContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/add-liquidity",
                    element: /* @__PURE__ */ jsx(AddLiquidityContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/create-pool",
                    element: /* @__PURE__ */ jsx(CreatePoolContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/remove-liquidity",
                    element: /* @__PURE__ */ jsx(RemoveLiquidityContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/pools",
                    element: /* @__PURE__ */ jsx(PoolsContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/pool",
                    element: /* @__PURE__ */ jsx(PoolContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/trade",
                    element: /* @__PURE__ */ jsx(TradeContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/portfolio",
                    element: /* @__PURE__ */ jsx(PortfolioContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/stats",
                    element: /* @__PURE__ */ jsx(AppStatsContainer, {})
                  }), /* @__PURE__ */ jsx(Route, {
                    path: "/account",
                    element: /* @__PURE__ */ jsx(CreateAccountWizard, {})
                  })]
                })
              })
            })]
          })
        })
      })
    })
  });
}
const index = "";
client$1.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}));
