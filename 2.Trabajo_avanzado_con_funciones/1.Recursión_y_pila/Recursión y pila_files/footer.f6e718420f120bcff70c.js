var footer = function(e) {
var t = {};
function o(n) {
if (t[n]) return t[n].exports;
var i = t[n] = {
i: n,
l: !1,
exports: {}
};
return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
}
return o.m = e, o.c = t, o.d = function(e, t, n) {
o.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: n
});
}, o.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, o.t = function(e, t) {
if (1 & t && (e = o(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var n = Object.create(null);
if (o.r(n), Object.defineProperty(n, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) o.d(n, i, function(t) {
return e[t];
}.bind(null, i));
return n;
}, o.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return o.d(t, "a", t), t;
}, o.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, o.p = "/pack/", o(o.s = 1);
}([ function(e, t) {
e.exports = {
lang: "es",
localCurrency: "EUR",
shopCurrency: "EUR",
env: "production",
rateShopTo: void 0,
countryCode,
ordersMail: "orders@javascript.info",
providers: [ {
name: "Github",
id: "github"
}, {
name: "Discord",
id: "discord"
}, {
name: "Facebook",
id: "facebook"
}, {
name: "Google",
id: "google"
} ],
stripeKey: "pk_live_51HXm0nFjeNqw1p5a3mjFxSeNHh8OL94IyGcp3PHbZVoNuYUYjlM57YtZMIAM1zrEd1F6WIKfFs67KbTemRdNIySo00KfWS1yhr",
paypalClientId: "Ac86EanyVr7jcO5a_EwTK2vg1MGguuNX27jI4oC120g8xLMuAKmayooEcpc-mODQd4Gsmm7yqA1C7NM-",
lookatCodeUrlBase: "https://lookatcode.com"
};
}, function(e, t, o) {
let n = o(2), i = o(4), r = o(5), {shopCurrency: l, localCurrency: c} = (o(0).lang, 
o(0));
o(6);
n(), window.devicePixelRatio > 1 && i(), window.addEventListener("scroll", r, {
passive: !0
}), window.addEventListener("resize", r, {
passive: !0
}), r();
}, function(e, t, o) {
let n = o(3);
e.exports = function() {
let e = null, t = 8, o = 10;
function i(n) {
let i = n.clientX + t;
i + e.offsetWidth > document.documentElement.clientWidth && (i = Math.max(0, n.clientX - t - e.offsetWidth)), 
e.style.left = i + "px";
let r = n.clientY + o;
r + e.offsetHeight > document.documentElement.clientHeight && (r = Math.max(0, n.clientY - o - e.offsetHeight)), 
e.style.top = r + "px";
}
n("a,[data-tooltip]", (function(t) {
t.closest && ("A" == t.tagName && t.closest(".toolbar") || t.classList.contains("button") || (e = document.createElement("span"), 
e.className = "link__type", t.getAttribute("data-tooltip") ? (e.innerHTML = t.getAttribute("data-tooltip"), 
e.setAttribute("data-tooltip", "1")) : e.setAttribute("data-url", t.getAttribute("href")), 
document.body.append(e), i(event), document.addEventListener("mousemove", i)));
}), (function() {
e && (document.removeEventListener("mousemove", i), e.remove(), e = null);
}));
};
}, function(e, t) {
let o, n, i = 1 / 0, r = 1 / 0, l = Date.now(), c = .2, s = {};
document.addEventListener("mousemove", (function(e) {
if (n) return;
if (Math.sqrt(Math.pow(e.pageX - i, 2) + Math.pow(e.pageY - r, 2)) / (Date.now() - l) < c) {
let t = document.elementFromPoint(e.clientX, e.clientY);
if (!t) return;
if (t !== o) {
for (let e in s) {
let o = t.closest(e);
o && (n = {
elem: o,
out: s[e].out
}, s[e].over(o));
}
o = t;
}
}
i = e.pageX, r = e.pageY, l = Date.now();
})), document.addEventListener("mouseout", (function(e) {
if (!n) return;
let t = e.relatedTarget;
for (;t && (!t.hasAttribute("data-tooltip") || t === n.elem); ) {
if (t === n.elem) return;
t = t.parentElement;
}
let {elem: o, out: i} = n;
n = null, i(o);
})), e.exports = function(e, t, o) {
s[e] = {
over: t,
out: o
};
};
}, function(e, t) {
e.exports = function() {
let e = document.querySelectorAll('figure img[src$=".png"]');
for (let t = 0; t < e.length; t++) {
let o = e[t];
o.onload = function() {
if (this.onload = null, this.src.match(/@2x.png$/)) return;
let e = new Image;
e.onload = function() {
this.width && this.height && (o.src = this.src);
}, e.src = this.src.replace(".png", "@2x.png");
}, o.complete && o.onload();
}
};
}, function(e, t) {
function o(e) {
let t = document.createElement("div"), o = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = o.marginLeft, 
t.style.marginRight = o.marginRight, t.style.position = o.position, t.style.height = e.offsetHeight + "px", 
t.style.marginBottom = o.marginBottom, t.style.marginTop = o.marginTop, t;
}
e.exports = function() {
let e = document.querySelectorAll("[data-sticky]");
for (let t = 0; t < e.length; t++) {
let n = e[t], i = n.dataset.sticky ? JSON.parse(n.dataset.sticky) : {}, r = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, l = i.container ? document.querySelector(i.container) : document.body, c = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (n.placeholder) (n.placeholder.getBoundingClientRect().top > 0 || !c) && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null); else if (n.placeholder && r) r.getBoundingClientRect().top <= n.offsetHeight ? ("fixed" == n.style.position && (n.style.top = window.pageYOffset + "px"), 
n.style.position = "absolute") : (n.style.position = "fixed", n.style.top = 0); else if (n.getBoundingClientRect().top < 0 && c) {
if (n.style.cssText) return;
let e, t;
i.saveRight ? t = document.documentElement.clientWidth - n.getBoundingClientRect().right : e = n.getBoundingClientRect().left;
let r = i.noPlaceholder ? document.createElement("div") : o(n), c = n.offsetWidth;
n.after(r), l.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, i.saveRight ? n.style.right = t + "px" : n.style.left = e + "px", 
n.style.zIndex = 101, n.style.background = "white", n.style.margin = 0, n.style.width = c + "px", 
n.placeholder = r;
}
}
};
}, function(e, t, o) {
const n = o(7);
e.exports = function(e) {
if ("string" != typeof e) return;
const t = e.toUpperCase();
return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : void 0;
}, e.exports.currencySymbolMap = n;
}, function(e, t) {
e.exports = {
AED: "د.إ",
AFN: "؋",
ALL: "L",
AMD: "֏",
ANG: "ƒ",
AOA: "Kz",
ARS: "$",
AUD: "$",
AWG: "ƒ",
AZN: "₼",
BAM: "KM",
BBD: "$",
BDT: "৳",
BGN: "лв",
BHD: ".د.ب",
BIF: "FBu",
BMD: "$",
BND: "$",
BOB: "$b",
BOV: "BOV",
BRL: "R$",
BSD: "$",
BTC: "₿",
BTN: "Nu.",
BWP: "P",
BYN: "Br",
BYR: "Br",
BZD: "BZ$",
CAD: "$",
CDF: "FC",
CHE: "CHE",
CHF: "CHF",
CHW: "CHW",
CLF: "CLF",
CLP: "$",
CNY: "元",
COP: "$",
COU: "COU",
CRC: "₡",
CUC: "$",
CUP: "₱",
CVE: "$",
CZK: "Kč",
DJF: "Fdj",
DKK: "kr",
DOP: "RD$",
DZD: "دج",
EEK: "kr",
EGP: "£",
ERN: "Nfk",
ETB: "Br",
ETH: "Ξ",
EUR: "€",
FJD: "$",
FKP: "£",
GBP: "£",
GEL: "₾",
GGP: "£",
GHC: "₵",
GHS: "GH₵",
GIP: "£",
GMD: "D",
GNF: "FG",
GTQ: "Q",
GYD: "$",
HKD: "$",
HNL: "L",
HRK: "kn",
HTG: "G",
HUF: "Ft",
IDR: "Rp",
ILS: "₪",
IMP: "£",
INR: "₹",
IQD: "ع.د",
IRR: "﷼",
ISK: "kr",
JEP: "£",
JMD: "J$",
JOD: "JD",
JPY: "¥",
KES: "KSh",
KGS: "лв",
KHR: "៛",
KMF: "CF",
KPW: "₩",
KRW: "₩",
KWD: "KD",
KYD: "$",
KZT: "₸",
LAK: "₭",
LBP: "£",
LKR: "₨",
LRD: "$",
LSL: "M",
LTC: "Ł",
LTL: "Lt",
LVL: "Ls",
LYD: "LD",
MAD: "MAD",
MDL: "lei",
MGA: "Ar",
MKD: "ден",
MMK: "K",
MNT: "₮",
MOP: "MOP$",
MRO: "UM",
MRU: "UM",
MUR: "₨",
MVR: "Rf",
MWK: "MK",
MXN: "$",
MXV: "MXV",
MYR: "RM",
MZN: "MT",
NAD: "$",
NGN: "₦",
NIO: "C$",
NOK: "kr",
NPR: "₨",
NZD: "$",
OMR: "﷼",
PAB: "B/.",
PEN: "S/.",
PGK: "K",
PHP: "₱",
PKR: "₨",
PLN: "zł",
PYG: "Gs",
QAR: "﷼",
RMB: "元",
RON: "lei",
RSD: "Дин.",
RUB: "₽",
RWF: "R₣",
SAR: "﷼",
SBD: "$",
SCR: "₨",
SDG: "ج.س.",
SEK: "kr",
SGD: "S$",
SHP: "£",
SLL: "Le",
SOS: "S",
SRD: "$",
SSP: "£",
STD: "Db",
STN: "Db",
SVC: "$",
SYP: "£",
SZL: "E",
THB: "฿",
TJS: "SM",
TMT: "T",
TND: "د.ت",
TOP: "T$",
TRL: "₤",
TRY: "₺",
TTD: "TT$",
TVD: "$",
TWD: "NT$",
TZS: "TSh",
UAH: "₴",
UGX: "USh",
USD: "$",
UYI: "UYI",
UYU: "$U",
UYW: "UYW",
UZS: "лв",
VEF: "Bs",
VES: "Bs.S",
VND: "₫",
VUV: "VT",
WST: "WS$",
XAF: "FCFA",
XBT: "Ƀ",
XCD: "$",
XOF: "CFA",
XPF: "₣",
XSU: "Sucre",
XUA: "XUA",
YER: "﷼",
ZAR: "R",
ZMW: "ZK",
ZWD: "Z$",
ZWL: "$"
};
} ]);
//# sourceMappingURL=footer.f6e718420f120bcff70c.js.map