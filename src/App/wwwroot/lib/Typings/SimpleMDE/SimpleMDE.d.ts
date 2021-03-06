﻿/**
 * simplemde v1.11.2
 * Copyright Jeroen Akkerman
 * @link https://github.com/ionaru/simplemde-markdown-editor
 * @license MIT
 */
//! function(e) {
//	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
//	else if ("function" == typeof define && define.amd) define([], e);
//	else {
//		("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SimpleMDE = e()
//	}
//}(

declare interface SimpleMDEOptions {
	toolbar: any[],
        blockStyles: object,
        element: HTMLTextAreaElement,
        indentWithTabs: boolean,
        insertTexts: any,
        lineWrapping: boolean,
        minHeight: string,
        parsingConfig: any,
        placeholder: string,
        promptURLs: boolean,
        renderingConfig: any,
        shortcuts: any,
        spellChecker: boolean,
        status: string[],
        styleSelectedText: boolean,
        syncSideBySidePreviewScroll: boolean
}

declare class SimpleMDE {
	constructor ( options? : SimpleMDEOptions);
	value : (v : string) => void;
	//return function e(t, n, r) {
	//	function i(a, s) {
	//		if (!n[a]) {
	//			if (!t[a]) {
	//				var l = "function" == typeof require && require;
	//				if (!s && l) return l(a, !0);
	//				if (o) return o(a, !0);
	//				var c = new Error("Cannot find module '" + a + "'");
	//				throw c.code = "MODULE_NOT_FOUND", c
	//			}
	//			var u = n[a] = {
	//				exports: {}
	//			};
	//			t[a][0].call(u.exports, function(e) {
	//				var n = t[a][1][e];
	//				return i(n || e)
	//			}, u, u.exports, e, t, n, r)
	//		}
	//		return n[a].exports
	//	}
	//	for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
	//	return i
	//}({
	//	1: [function(e, t, n) {
	//		"use strict";

	//		function r(e) {
	//			var t = e.length;
	//			if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
	//			return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
	//		}

	//		function i(e) {
	//			return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e]
	//		}

	//		function o(e, t, n) {
	//			for (var r, o = [], a = t; a < n; a += 3) r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(i(r));
	//			return o.join("")
	//		}
	//		n.byteLength = function(e) {
	//			return 3 * e.length / 4 - r(e)
	//		}, n.toByteArray = function(e) {
	//			var t, n, i, o, a, c = e.length;
	//			o = r(e), a = new l(3 * c / 4 - o), n = o > 0 ? c - 4 : c;
	//			var u = 0;
	//			for (t = 0; t < n; t += 4) i = s[e.charCodeAt(t)] << 18 | s[e.charCodeAt(t + 1)] << 12 | s[e.charCodeAt(t + 2)] << 6 | s[e.charCodeAt(t + 3)], a[u++] = i >> 16 & 255, a[u++] = i >> 8 & 255, a[u++] = 255 & i;
	//			return 2 === o ? (i = s[e.charCodeAt(t)] << 2 | s[e.charCodeAt(t + 1)] >> 4, a[u++] = 255 & i) : 1 === o && (i = s[e.charCodeAt(t)] << 10 | s[e.charCodeAt(t + 1)] << 4 | s[e.charCodeAt(t + 2)] >> 2, a[u++] = i >> 8 & 255, a[u++] = 255 & i), a
	//		}, n.fromByteArray = function(e) {
	//			for (var t, n = e.length, r = n % 3, i = "", s = [], l = 0, c = n - r; l < c; l += 16383) s.push(o(e, l, l + 16383 > c ? c : l + 16383));
	//			return 1 === r ? (t = e[n - 1], i += a[t >> 2], i += a[t << 4 & 63], i += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i += a[t >> 10], i += a[t >> 4 & 63], i += a[t << 2 & 63], i += "="), s.push(i), s.join("")
	//		};
	//		for (var a = [], s = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, h = c.length; u < h; ++u) a[u] = c[u], s[c.charCodeAt(u)] = u;
	//		s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63
	//	}, {}],
	//	2: [function(e, t, n) {}, {}],
	//	3: [function(e, t, n) {
	//		"use strict";

	//		function r(e) {
	//			if (e > W) throw new RangeError("Invalid typed array length");
	//			var t = new Uint8Array(e);
	//			return t.__proto__ = i.prototype, t
	//		}

	//		function i(e, t, n) {
	//			if ("number" == typeof e) {
	//				if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
	//				return s(e)
	//			}
	//			return o(e, t, n)
	//		}

	//		function o(e, t, n) {
	//			if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
	//			return E(e) ? function(e, t, n) {
	//				if (t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");
	//				if (e.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
	//				var r;
	//				r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n);
	//				return r.__proto__ = i.prototype, r
	//			}(e, t, n) : "string" == typeof e ? function(e, t) {
	//				"string" == typeof t && "" !== t || (t = "utf8");
	//				if (!i.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');
	//				var n = 0 | u(e, t),
	//					o = r(n),
	//					a = o.write(e, t);
	//				a !== n && (o = o.slice(0, a));
	//				return o
	//			}(e, t) : function(e) {
	//				if (i.isBuffer(e)) {
	//					var t = 0 | c(e.length),
	//						n = r(t);
	//					return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
	//				}
	//				if (e) {
	//					if (O(e) || "length" in e) return "number" != typeof e.length || I(e.length) ? r(0) : l(e);
	//					if ("Buffer" === e.type && Array.isArray(e.data)) return l(e.data)
	//				}
	//				throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
	//			}(e)
	//		}

	//		function a(e) {
	//			if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
	//			if (e < 0) throw new RangeError('"size" argument must not be negative')
	//		}

	//		function s(e) {
	//			return a(e), r(e < 0 ? 0 : 0 | c(e))
	//		}

	//		function l(e) {
	//			for (var t = e.length < 0 ? 0 : 0 | c(e.length), n = r(t), i = 0; i < t; i += 1) n[i] = 255 & e[i];
	//			return n
	//		}

	//		function c(e) {
	//			if (e >= W) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + W.toString(16) + " bytes");
	//			return 0 | e
	//		}

	//		function u(e, t) {
	//			if (i.isBuffer(e)) return e.length;
	//			if (O(e) || E(e)) return e.byteLength;
	//			"string" != typeof e && (e = "" + e);
	//			var n = e.length;
	//			if (0 === n) return 0;
	//			for (var r = !1;;) switch (t) {
	//				case "ascii":
	//				case "latin1":
	//				case "binary":
	//					return n;
	//				case "utf8":
	//				case "utf-8":
	//				case void 0:
	//					return M(e).length;
	//				case "ucs2":
	//				case "ucs-2":
	//				case "utf16le":
	//				case "utf-16le":
	//					return 2 * n;
	//				case "hex":
	//					return n >>> 1;
	//				case "base64":
	//					return N(e).length;
	//				default:
	//					if (r) return M(e).length;
	//					t = ("" + t).toLowerCase(), r = !0
	//			}
	//		}

	//		function h(e, t, n) {
	//			var r = !1;
	//			if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
	//			if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
	//			if (n >>>= 0, t >>>= 0, n <= t) return "";
	//			for (e || (e = "utf8");;) switch (e) {
	//				case "hex":
	//					return function(e, t, n) {
	//						var r = e.length;
	//						(!t || t < 0) && (t = 0);
	//						(!n || n < 0 || n > r) && (n = r);
	//						for (var i = "", o = t; o < n; ++o) i += function(e) {
	//							return e < 16 ? "0" + e.toString(16) : e.toString(16)
	//						}(e[o]);
	//						return i
	//					}(this, t, n);
	//				case "utf8":
	//				case "utf-8":
	//					return w(this, t, n);
	//				case "ascii":
	//					return function(e, t, n) {
	//						var r = "";
	//						n = Math.min(e.length, n);
	//						for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
	//						return r
	//					}(this, t, n);
	//				case "latin1":
	//				case "binary":
	//					return function(e, t, n) {
	//						var r = "";
	//						n = Math.min(e.length, n);
	//						for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
	//						return r
	//					}(this, t, n);
	//				case "base64":
	//					return function(e, t, n) {
	//						return 0 === t && n === e.length ? D.fromByteArray(e) : D.fromByteArray(e.slice(t, n))
	//					}(this, t, n);
	//				case "ucs2":
	//				case "ucs-2":
	//				case "utf16le":
	//				case "utf-16le":
	//					return function(e, t, n) {
	//						for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
	//						return i
	//					}(this, t, n);
	//				default:
	//					if (r) throw new TypeError("Unknown encoding: " + e);
	//					e = (e + "").toLowerCase(), r = !0
	//			}
	//		}

	//		function f(e, t, n) {
	//			var r = e[t];
	//			e[t] = e[n], e[n] = r
	//		}

	//		function d(e, t, n, r, o) {
	//			if (0 === e.length) return -1;
	//			if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, I(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
	//				if (o) return -1;
	//				n = e.length - 1
	//			} else if (n < 0) {
	//				if (!o) return -1;
	//				n = 0
	//			}
	//			if ("string" == typeof t && (t = i.from(t, r)), i.isBuffer(t)) return 0 === t.length ? -1 : p(e, t, n, r, o);
	//			if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : p(e, [t], n, r, o);
	//			throw new TypeError("val must be string, number or Buffer")
	//		}

	//		function p(e, t, n, r, i) {
	//			function o(e, t) {
	//				return 1 === a ? e[t] : e.readUInt16BE(t * a)
	//			}
	//			var a = 1,
	//				s = e.length,
	//				l = t.length;
	//			if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
	//				if (e.length < 2 || t.length < 2) return -1;
	//				a = 2, s /= 2, l /= 2, n /= 2
	//			}
	//			var c;
	//			if (i) {
	//				var u = -1;
	//				for (c = n; c < s; c++)
	//					if (o(e, c) === o(t, -1 === u ? 0 : c - u)) {
	//						if (-1 === u && (u = c), c - u + 1 === l) return u * a
	//					} else -1 !== u && (c -= c - u), u = -1
	//			} else
	//				for (n + l > s && (n = s - l), c = n; c >= 0; c--) {
	//					for (var h = !0, f = 0; f < l; f++)
	//						if (o(e, c + f) !== o(t, f)) {
	//							h = !1;
	//							break
	//						}
	//					if (h) return c
	//				}
	//			return -1
	//		}

	//		function m(e, t, n, r) {
	//			n = Number(n) || 0;
	//			var i = e.length - n;
	//			r ? (r = Number(r)) > i && (r = i) : r = i;
	//			var o = t.length;
	//			if (o % 2 != 0) throw new TypeError("Invalid hex string");
	//			r > o / 2 && (r = o / 2);
	//			for (var a = 0; a < r; ++a) {
	//				var s = parseInt(t.substr(2 * a, 2), 16);
	//				if (I(s)) return a;
	//				e[n + a] = s
	//			}
	//			return a
	//		}

	//		function g(e, t, n, r) {
	//			return A(M(t, e.length - n), e, n, r)
	//		}

	//		function v(e, t, n, r) {
	//			return A(function(e) {
	//				for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
	//				return t
	//			}(t), e, n, r)
	//		}

	//		function y(e, t, n, r) {
	//			return v(e, t, n, r)
	//		}

	//		function x(e, t, n, r) {
	//			return A(N(t), e, n, r)
	//		}

	//		function b(e, t, n, r) {
	//			return A(function(e, t) {
	//				for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
	//				return o
	//			}(t, e.length - n), e, n, r)
	//		}

	//		function w(e, t, n) {
	//			n = Math.min(e.length, n);
	//			for (var r = [], i = t; i < n;) {
	//				var o = e[i],
	//					a = null,
	//					s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
	//				if (i + s <= n) {
	//					var l, c, u, h;
	//					switch (s) {
	//						case 1:
	//							o < 128 && (a = o);
	//							break;
	//						case 2:
	//							128 == (192 & (l = e[i + 1])) && (h = (31 & o) << 6 | 63 & l) > 127 && (a = h);
	//							break;
	//						case 3:
	//							l = e[i + 1], c = e[i + 2], 128 == (192 & l) && 128 == (192 & c) && (h = (15 & o) << 12 | (63 & l) << 6 | 63 & c) > 2047 && (h < 55296 || h > 57343) && (a = h);
	//							break;
	//						case 4:
	//							l = e[i + 1], c = e[i + 2], u = e[i + 3], 128 == (192 & l) && 128 == (192 & c) && 128 == (192 & u) && (h = (15 & o) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & u) > 65535 && h < 1114112 && (a = h)
	//					}
	//				}
	//				null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += s
	//			}
	//			return function(e) {
	//				var t = e.length;
	//				if (t <= B) return String.fromCharCode.apply(String, e);
	//				var n = "",
	//					r = 0;
	//				for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += B));
	//				return n
	//			}(r)
	//		}

	//		function k(e, t, n) {
	//			if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
	//			if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
	//		}

	//		function C(e, t, n, r, o, a) {
	//			if (!i.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
	//			if (t > o || t < a) throw new RangeError('"value" argument is out of bounds');
	//			if (n + r > e.length) throw new RangeError("Index out of range")
	//		}

	//		function S(e, t, n, r, i, o) {
	//			if (n + r > e.length) throw new RangeError("Index out of range");
	//			if (n < 0) throw new RangeError("Index out of range")
	//		}

	//		function L(e, t, n, r, i) {
	//			return t = +t, n >>>= 0, i || S(e, 0, n, 4), H.write(e, t, n, r, 23, 4), n + 4
	//		}

	//		function T(e, t, n, r, i) {
	//			return t = +t, n >>>= 0, i || S(e, 0, n, 8), H.write(e, t, n, r, 52, 8), n + 8
	//		}

	//		function M(e, t) {
	//			t = t || 1 / 0;
	//			for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
	//				if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
	//					if (!i) {
	//						if (n > 56319) {
	//							(t -= 3) > -1 && o.push(239, 191, 189);
	//							continue
	//						}
	//						if (a + 1 === r) {
	//							(t -= 3) > -1 && o.push(239, 191, 189);
	//							continue
	//						}
	//						i = n;
	//						continue
	//					}
	//					if (n < 56320) {
	//						(t -= 3) > -1 && o.push(239, 191, 189), i = n;
	//						continue
	//					}
	//					n = 65536 + (i - 55296 << 10 | n - 56320)
	//				} else i && (t -= 3) > -1 && o.push(239, 191, 189);
	//				if (i = null, n < 128) {
	//					if ((t -= 1) < 0) break;
	//					o.push(n)
	//				} else if (n < 2048) {
	//					if ((t -= 2) < 0) break;
	//					o.push(n >> 6 | 192, 63 & n | 128)
	//				} else if (n < 65536) {
	//					if ((t -= 3) < 0) break;
	//					o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
	//				} else {
	//					if (!(n < 1114112)) throw new Error("Invalid code point");
	//					if ((t -= 4) < 0) break;
	//					o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
	//				}
	//			}
	//			return o
	//		}

	//		function N(e) {
	//			return D.toByteArray(function(e) {
	//				if ((e = e.trim().replace(F, "")).length < 2) return "";
	//				for (; e.length % 4 != 0;) e += "=";
	//				return e
	//			}(e))
	//		}

	//		function A(e, t, n, r) {
	//			for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
	//			return i
	//		}

	//		function E(e) {
	//			return e instanceof ArrayBuffer || null != e && null != e.constructor && "ArrayBuffer" === e.constructor.name && "number" == typeof e.byteLength
	//		}

	//		function O(e) {
	//			return "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e)
	//		}

	//		function I(e) {
	//			return e != e
	//		}
	//		var D = e("base64-js"),
	//			H = e("ieee754");
	//		n.Buffer = i, n.SlowBuffer = function(e) {
	//			return +e != e && (e = 0), i.alloc(+e)
	//		}, n.INSPECT_MAX_BYTES = 50;
	//		var W = 2147483647;
	//		n.kMaxLength = W, (i.TYPED_ARRAY_SUPPORT = function() {
	//			try {
	//				var e = new Uint8Array(1);
	//				return e.__proto__ = {
	//					__proto__: Uint8Array.prototype,
	//					foo: function() {
	//						return 42
	//					}
	//				}, 42 === e.foo()
	//			} catch (e) {
	//				return !1
	//			}
	//		}()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
	//			value: null,
	//			configurable: !0,
	//			enumerable: !1,
	//			writable: !1
	//		}), i.poolSize = 8192, i.from = function(e, t, n) {
	//			return o(e, t, n)
	//		}, i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, i.alloc = function(e, t, n) {
	//			return function(e, t, n) {
	//				return a(e), e <= 0 ? r(e) : void 0 !== t ? "string" == typeof n ? r(e).fill(t, n) : r(e).fill(t) : r(e)
	//			}(e, t, n)
	//		}, i.allocUnsafe = function(e) {
	//			return s(e)
	//		}, i.allocUnsafeSlow = function(e) {
	//			return s(e)
	//		}, i.isBuffer = function(e) {
	//			return null != e && !0 === e._isBuffer
	//		}, i.compare = function(e, t) {
	//			if (!i.isBuffer(e) || !i.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
	//			if (e === t) return 0;
	//			for (var n = e.length, r = t.length, o = 0, a = Math.min(n, r); o < a; ++o)
	//				if (e[o] !== t[o]) {
	//					n = e[o], r = t[o];
	//					break
	//				}
	//			return n < r ? -1 : r < n ? 1 : 0
	//		}, i.isEncoding = function(e) {
	//			switch (String(e).toLowerCase()) {
	//				case "hex":
	//				case "utf8":
	//				case "utf-8":
	//				case "ascii":
	//				case "latin1":
	//				case "binary":
	//				case "base64":
	//				case "ucs2":
	//				case "ucs-2":
	//				case "utf16le":
	//				case "utf-16le":
	//					return !0;
	//				default:
	//					return !1
	//			}
	//		}, i.concat = function(e, t) {
	//			if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
	//			if (0 === e.length) return i.alloc(0);
	//			var n;
	//			if (void 0 === t)
	//				for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
	//			var r = i.allocUnsafe(t),
	//				o = 0;
	//			for (n = 0; n < e.length; ++n) {
	//				var a = e[n];
	//				if (!i.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
	//				a.copy(r, o), o += a.length
	//			}
	//			return r
	//		}, i.byteLength = u, i.prototype._isBuffer = !0, i.prototype.swap16 = function() {
	//			var e = this.length;
	//			if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
	//			for (var t = 0; t < e; t += 2) f(this, t, t + 1);
	//			return this
	//		}, i.prototype.swap32 = function() {
	//			var e = this.length;
	//			if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
	//			for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
	//			return this
	//		}, i.prototype.swap64 = function() {
	//			var e = this.length;
	//			if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
	//			for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
	//			return this
	//		}, i.prototype.toString = function() {
	//			var e = this.length;
	//			return 0 === e ? "" : 0 === arguments.length ? w(this, 0, e) : h.apply(this, arguments)
	//		}, i.prototype.equals = function(e) {
	//			if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
	//			return this === e || 0 === i.compare(this, e)
	//		}, i.prototype.inspect = function() {
	//			var e = "",
	//				t = n.INSPECT_MAX_BYTES;
	//			return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
	//		}, i.prototype.compare = function(e, t, n, r, o) {
	//			if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
	//			if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
	//			if (r >= o && t >= n) return 0;
	//			if (r >= o) return -1;
	//			if (t >= n) return 1;
	//			if (t >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === e) return 0;
	//			for (var a = o - r, s = n - t, l = Math.min(a, s), c = this.slice(r, o), u = e.slice(t, n), h = 0; h < l; ++h)
	//				if (c[h] !== u[h]) {
	//					a = c[h], s = u[h];
	//					break
	//				}
	//			return a < s ? -1 : s < a ? 1 : 0
	//		}, i.prototype.includes = function(e, t, n) {
	//			return -1 !== this.indexOf(e, t, n)
	//		}, i.prototype.indexOf = function(e, t, n) {
	//			return d(this, e, t, n, !0)
	//		}, i.prototype.lastIndexOf = function(e, t, n) {
	//			return d(this, e, t, n, !1)
	//		}, i.prototype.write = function(e, t, n, r) {
	//			if (void 0 === t) r = "utf8", n = this.length, t = 0;
	//			else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
	//			else {
	//				if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
	//				t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
	//			}
	//			var i = this.length - t;
	//			if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
	//			r || (r = "utf8");
	//			for (var o = !1;;) switch (r) {
	//				case "hex":
	//					return m(this, e, t, n);
	//				case "utf8":
	//				case "utf-8":
	//					return g(this, e, t, n);
	//				case "ascii":
	//					return v(this, e, t, n);
	//				case "latin1":
	//				case "binary":
	//					return y(this, e, t, n);
	//				case "base64":
	//					return x(this, e, t, n);
	//				case "ucs2":
	//				case "ucs-2":
	//				case "utf16le":
	//				case "utf-16le":
	//					return b(this, e, t, n);
	//				default:
	//					if (o) throw new TypeError("Unknown encoding: " + r);
	//					r = ("" + r).toLowerCase(), o = !0
	//			}
	//		}, i.prototype.toJSON = function() {
	//			return {
	//				type: "Buffer",
	//				data: Array.prototype.slice.call(this._arr || this, 0)
	//			}
	//		};
	//		var B = 4096;
	//		i.prototype.slice = function(e, t) {
	//			var n = this.length;
	//			e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
	//			var r = this.subarray(e, t);
	//			return r.__proto__ = i.prototype, r
	//		}, i.prototype.readUIntLE = function(e, t, n) {
	//			e >>>= 0, t >>>= 0, n || k(e, t, this.length);
	//			for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
	//			return r
	//		}, i.prototype.readUIntBE = function(e, t, n) {
	//			e >>>= 0, t >>>= 0, n || k(e, t, this.length);
	//			for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
	//			return r
	//		}, i.prototype.readUInt8 = function(e, t) {
	//			return e >>>= 0, t || k(e, 1, this.length), this[e]
	//		}, i.prototype.readUInt16LE = function(e, t) {
	//			return e >>>= 0, t || k(e, 2, this.length), this[e] | this[e + 1] << 8
	//		}, i.prototype.readUInt16BE = function(e, t) {
	//			return e >>>= 0, t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
	//		}, i.prototype.readUInt32LE = function(e, t) {
	//			return e >>>= 0, t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
	//		}, i.prototype.readUInt32BE = function(e, t) {
	//			return e >>>= 0, t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
	//		}, i.prototype.readIntLE = function(e, t, n) {
	//			e >>>= 0, t >>>= 0, n || k(e, t, this.length);
	//			for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
	//			return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
	//		}, i.prototype.readIntBE = function(e, t, n) {
	//			e >>>= 0, t >>>= 0, n || k(e, t, this.length);
	//			for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
	//			return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
	//		}, i.prototype.readInt8 = function(e, t) {
	//			return e >>>= 0, t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
	//		}, i.prototype.readInt16LE = function(e, t) {
	//			e >>>= 0, t || k(e, 2, this.length);
	//			var n = this[e] | this[e + 1] << 8;
	//			return 32768 & n ? 4294901760 | n : n
	//		}, i.prototype.readInt16BE = function(e, t) {
	//			e >>>= 0, t || k(e, 2, this.length);
	//			var n = this[e + 1] | this[e] << 8;
	//			return 32768 & n ? 4294901760 | n : n
	//		}, i.prototype.readInt32LE = function(e, t) {
	//			return e >>>= 0, t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
	//		}, i.prototype.readInt32BE = function(e, t) {
	//			return e >>>= 0, t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
	//		}, i.prototype.readFloatLE = function(e, t) {
	//			return e >>>= 0, t || k(e, 4, this.length), H.read(this, e, !0, 23, 4)
	//		}, i.prototype.readFloatBE = function(e, t) {
	//			return e >>>= 0, t || k(e, 4, this.length), H.read(this, e, !1, 23, 4)
	//		}, i.prototype.readDoubleLE = function(e, t) {
	//			return e >>>= 0, t || k(e, 8, this.length), H.read(this, e, !0, 52, 8)
	//		}, i.prototype.readDoubleBE = function(e, t) {
	//			return e >>>= 0, t || k(e, 8, this.length), H.read(this, e, !1, 52, 8)
	//		}, i.prototype.writeUIntLE = function(e, t, n, r) {
	//			if (e = +e, t >>>= 0, n >>>= 0, !r) {
	//				C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
	//			}
	//			var i = 1,
	//				o = 0;
	//			for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
	//			return t + n
	//		}, i.prototype.writeUIntBE = function(e, t, n, r) {
	//			if (e = +e, t >>>= 0, n >>>= 0, !r) {
	//				C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
	//			}
	//			var i = n - 1,
	//				o = 1;
	//			for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
	//			return t + n
	//		}, i.prototype.writeUInt8 = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
	//		}, i.prototype.writeUInt16LE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
	//		}, i.prototype.writeUInt16BE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
	//		}, i.prototype.writeUInt32LE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
	//		}, i.prototype.writeUInt32BE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
	//		}, i.prototype.writeIntLE = function(e, t, n, r) {
	//			if (e = +e, t >>>= 0, !r) {
	//				var i = Math.pow(2, 8 * n - 1);
	//				C(this, e, t, n, i - 1, -i)
	//			}
	//			var o = 0,
	//				a = 1,
	//				s = 0;
	//			for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
	//			return t + n
	//		}, i.prototype.writeIntBE = function(e, t, n, r) {
	//			if (e = +e, t >>>= 0, !r) {
	//				var i = Math.pow(2, 8 * n - 1);
	//				C(this, e, t, n, i - 1, -i)
	//			}
	//			var o = n - 1,
	//				a = 1,
	//				s = 0;
	//			for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
	//			return t + n
	//		}, i.prototype.writeInt8 = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
	//		}, i.prototype.writeInt16LE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
	//		}, i.prototype.writeInt16BE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
	//		}, i.prototype.writeInt32LE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
	//		}, i.prototype.writeInt32BE = function(e, t, n) {
	//			return e = +e, t >>>= 0, n || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
	//		}, i.prototype.writeFloatLE = function(e, t, n) {
	//			return L(this, e, t, !0, n)
	//		}, i.prototype.writeFloatBE = function(e, t, n) {
	//			return L(this, e, t, !1, n)
	//		}, i.prototype.writeDoubleLE = function(e, t, n) {
	//			return T(this, e, t, !0, n)
	//		}, i.prototype.writeDoubleBE = function(e, t, n) {
	//			return T(this, e, t, !1, n)
	//		}, i.prototype.copy = function(e, t, n, r) {
	//			if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
	//			if (0 === e.length || 0 === this.length) return 0;
	//			if (t < 0) throw new RangeError("targetStart out of bounds");
	//			if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
	//			if (r < 0) throw new RangeError("sourceEnd out of bounds");
	//			r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
	//			var i, o = r - n;
	//			if (this === e && n < t && t < r)
	//				for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
	//			else if (o < 1e3)
	//				for (i = 0; i < o; ++i) e[i + t] = this[i + n];
	//			else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
	//			return o
	//		}, i.prototype.fill = function(e, t, n, r) {
	//			if ("string" == typeof e) {
	//				if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
	//					var o = e.charCodeAt(0);
	//					o < 256 && (e = o)
	//				}
	//				if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
	//				if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
	//			} else "number" == typeof e && (e &= 255);
	//			if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
	//			if (n <= t) return this;
	//			t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
	//			var a;
	//			if ("number" == typeof e)
	//				for (a = t; a < n; ++a) this[a] = e;
	//			else {
	//				var s = i.isBuffer(e) ? e : new i(e, r),
	//					l = s.length;
	//				for (a = 0; a < n - t; ++a) this[a + t] = s[a % l]
	//			}
	//			return this
	//		};
	//		var F = /[^+/0-9A-Za-z-_]/g
	//	}, {
	//		"base64-js": 1,
	//		ieee754: 15
	//	}],
	//	4: [function(e, t, n) {
	//		"use strict";

	//		function r(e) {
	//			"function" == typeof(e = e || {}).codeMirrorInstance && "function" == typeof e.codeMirrorInstance.defineMode ? (String.prototype.includes || (String.prototype.includes = function() {
	//				return -1 !== String.prototype.indexOf.apply(this, arguments)
	//			}), e.codeMirrorInstance.defineMode("spell-checker", function(t) {
	//				if (!r.aff_loading) {
	//					r.aff_loading = !0;
	//					var n = new XMLHttpRequest;
	//					n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function() {
	//						4 === n.readyState && 200 === n.status && (r.aff_data = n.responseText, 2 == ++r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, {
	//							platform: "any"
	//						})))
	//					}, n.send(null)
	//				}
	//				if (!r.dic_loading) {
	//					r.dic_loading = !0;
	//					var o = new XMLHttpRequest;
	//					o.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), o.onload = function() {
	//						4 === o.readyState && 200 === o.status && (r.dic_data = o.responseText, 2 == ++r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, {
	//							platform: "any"
	//						})))
	//					}, o.send(null)
	//				}
	//				var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
	//					s = {
	//						token: function(e) {
	//							var t = e.peek(),
	//								n = "";
	//							if (a.includes(t)) return e.next(), null;
	//							for (; null != (t = e.peek()) && !a.includes(t);) n += t, e.next();
	//							return r.typo && !r.typo.check(n) ? "spell-error" : null
	//						}
	//					},
	//					l = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain");
	//				return e.codeMirrorInstance.overlayMode(l, s, !0)
	//			})) : console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`")
	//		}
	//		var i = e("typo-js");
	//		r.num_loaded = 0, r.aff_loading = !1, r.dic_loading = !1, r.aff_data = "", r.dic_data = "", t.exports = r
	//	}, {
	//		"typo-js": 17
	//	}],
	//	5: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			e.defineOption("fullScreen", !1, function(t, n, r) {
	//				r == e.Init && (r = !1), !r != !n && (n ? function(e) {
	//					var t = e.getWrapperElement();
	//					e.state.fullScreenRestore = {
	//						scrollTop: window.pageYOffset,
	//						scrollLeft: window.pageXOffset,
	//						width: t.style.width,
	//						height: t.style.height
	//					}, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh()
	//				}(t) : function(e) {
	//					var t = e.getWrapperElement();
	//					t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = "";
	//					var n = e.state.fullScreenRestore;
	//					t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh()
	//				}(t))
	//			})
	//		})
	//	}, {
	//		"../../lib/codemirror": 10
	//	}],
	//	6: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			function t(e) {
	//				e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null)
	//			}

	//			function n(e) {
	//				t(e);
	//				var n = e.state.placeholder = document.createElement("pre");
	//				n.style.cssText = "height: 0; overflow: visible", n.className = "CodeMirror-placeholder";
	//				var r = e.getOption("placeholder");
	//				"string" == typeof r && (r = document.createTextNode(r)), n.appendChild(r), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild)
	//			}

	//			function r(e) {
	//				o(e) && n(e)
	//			}

	//			function i(e) {
	//				var r = e.getWrapperElement(),
	//					i = o(e);
	//				r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""), i ? n(e) : t(e)
	//			}

	//			function o(e) {
	//				return 1 === e.lineCount() && "" === e.getLine(0)
	//			}
	//			e.defineOption("placeholder", "", function(n, o, a) {
	//				var s = a && a != e.Init;
	//				if (o && !s) n.on("blur", r), n.on("change", i), n.on("swapDoc", i), i(n);
	//				else if (!o && s) {
	//					n.off("blur", r), n.off("change", i), n.off("swapDoc", i), t(n);
	//					var l = n.getWrapperElement();
	//					l.className = l.className.replace(" CodeMirror-empty", "")
	//				}
	//				o && !n.hasFocus() && r(n)
	//			})
	//		})
	//	}, {
	//		"../../lib/codemirror": 10
	//	}],
	//	7: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
	//				n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
	//				r = /[*+-]\s/;
	//			e.commands.newlineAndIndentContinueMarkdownList = function(i) {
	//				if (i.getOption("disableInput")) return e.Pass;
	//				for (var o = i.listSelections(), a = [], s = 0; s < o.length; s++) {
	//					var l = o[s].head,
	//						c = i.getStateAfter(l.line),
	//						u = !1 !== c.list,
	//						h = 0 !== c.quote,
	//						f = i.getLine(l.line),
	//						d = t.exec(f),
	//						p = /^\s*$/.test(f.slice(0, l.ch));
	//					if (!o[s].empty() || !u && !h || !d || p) return void i.execCommand("newlineAndIndent");
	//					if (n.test(f)) />\s*$/.test(f) || i.replaceRange("", {
	//						line: l.line,
	//						ch: 0
	//					}, {
	//						line: l.line,
	//						ch: l.ch + 1
	//					}), a[s] = "\n";
	//					else {
	//						var m = d[1],
	//							g = d[5],
	//							v = r.test(d[2]) || d[2].indexOf(">") >= 0 ? d[2].replace("x", " ") : parseInt(d[3], 10) + 1 + d[4];
	//						a[s] = "\n" + m + v + g,
	//							function(e, n) {
	//								var r = n.line,
	//									i = 0,
	//									o = 0,
	//									a = t.exec(e.getLine(r)),
	//									s = a[1];
	//								do {
	//									var l = r + (i += 1),
	//										c = e.getLine(l),
	//										u = t.exec(c);
	//									if (u) {
	//										var h = u[1],
	//											f = parseInt(a[3], 10) + i - o,
	//											d = parseInt(u[3], 10),
	//											p = d;
	//										if (s === h) f === d && (p = d + 1), f > d && (p = f + 1), e.replaceRange(c.replace(t, h + p + u[4] + u[5]), {
	//											line: l,
	//											ch: 0
	//										}, {
	//											line: l,
	//											ch: c.length
	//										});
	//										else {
	//											if (s.length > h.length) return;
	//											if (s.length < h.length && 1 === i) return;
	//											o += 1
	//										}
	//									}
	//								} while (u)
	//							}(i, l)
	//					}
	//				}
	//				i.replaceSelections(a)
	//			}
	//		})
	//	}, {
	//		"../../lib/codemirror": 10
	//	}],
	//	8: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			e.overlayMode = function(t, n, r) {
	//				return {
	//					startState: function() {
	//						return {
	//							base: e.startState(t),
	//							overlay: e.startState(n),
	//							basePos: 0,
	//							baseCur: null,
	//							overlayPos: 0,
	//							overlayCur: null,
	//							streamSeen: null
	//						}
	//					},
	//					copyState: function(r) {
	//						return {
	//							base: e.copyState(t, r.base),
	//							overlay: e.copyState(n, r.overlay),
	//							basePos: r.basePos,
	//							baseCur: null,
	//							overlayPos: r.overlayPos,
	//							overlayCur: null
	//						}
	//					},
	//					token: function(e, i) {
	//						return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur
	//					},
	//					indent: t.indent && function(e, n) {
	//						return t.indent(e.base, n)
	//					},
	//					electricChars: t.electricChars,
	//					innerMode: function(e) {
	//						return {
	//							state: e.base,
	//							mode: t
	//						}
	//					},
	//					blankLine: function(e) {
	//						var i, o;
	//						return t.blankLine && (i = t.blankLine(e.base)), n.blankLine && (o = n.blankLine(e.overlay)), null == o ? i : r && null != i ? i + " " + o : o
	//					}
	//				}
	//			}
	//		})
	//	}, {
	//		"../../lib/codemirror": 10
	//	}],
	//	9: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			"use strict";

	//			function t(e) {
	//				e.state.markedSelection && e.operation(function() {
	//					! function(e) {
	//						if (!e.somethingSelected()) return i(e);
	//						if (e.listSelections().length > 1) return o(e);
	//						var t = e.getCursor("start"),
	//							n = e.getCursor("end"),
	//							s = e.state.markedSelection;
	//						if (!s.length) return r(e, t, n);
	//						var c = s[0].find(),
	//							u = s[s.length - 1].find();
	//						if (!c || !u || n.line - t.line <= a || l(t, u.to) >= 0 || l(n, c.from) <= 0) return o(e);
	//						for (; l(t, c.from) > 0;) s.shift().clear(), c = s[0].find();
	//						l(t, c.from) < 0 && (c.to.line - t.line < a ? (s.shift().clear(), r(e, t, c.to, 0)) : r(e, t, c.from, 0));
	//						for (; l(n, u.to) < 0;) s.pop().clear(), u = s[s.length - 1].find();
	//						l(n, u.to) > 0 && (n.line - u.from.line < a ? (s.pop().clear(), r(e, u.from, n)) : r(e, u.to, n))
	//					}(e)
	//				})
	//			}

	//			function n(e) {
	//				e.state.markedSelection && e.state.markedSelection.length && e.operation(function() {
	//					i(e)
	//				})
	//			}

	//			function r(e, t, n, r) {
	//				if (0 != l(t, n))
	//					for (var i = e.state.markedSelection, o = e.state.markedSelectionStyle, c = t.line;;) {
	//						var u = c == t.line ? t : s(c, 0),
	//							h = c + a,
	//							f = h >= n.line,
	//							d = f ? n : s(h, 0),
	//							p = e.markText(u, d, {
	//								className: o
	//							});
	//						if (null == r ? i.push(p) : i.splice(r++, 0, p), f) break;
	//						c = h
	//					}
	//			}

	//			function i(e) {
	//				for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) t[n].clear();
	//				t.length = 0
	//			}

	//			function o(e) {
	//				i(e);
	//				for (var t = e.listSelections(), n = 0; n < t.length; n++) r(e, t[n].from(), t[n].to())
	//			}
	//			e.defineOption("styleSelectedText", !1, function(r, a, s) {
	//				var l = s && s != e.Init;
	//				a && !l ? (r.state.markedSelection = [], r.state.markedSelectionStyle = "string" == typeof a ? a : "CodeMirror-selectedtext", o(r), r.on("cursorActivity", t), r.on("change", n)) : !a && l && (r.off("cursorActivity", t), r.off("change", n), i(r), r.state.markedSelection = r.state.markedSelectionStyle = null)
	//			});
	//			var a = 8,
	//				s = e.Pos,
	//				l = e.cmpPos
	//		})
	//	}, {
	//		"../../lib/codemirror": 10
	//	}],
	//	10: [function(e, t, n) {
	//		! function(e, r) {
	//			"object" == typeof n && void 0 !== t ? t.exports = r() : e.CodeMirror = r()
	//		}(this, function() {
	//			"use strict";

	//			function e(e) {
	//				return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
	//			}

	//			function t(e) {
	//				for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
	//				return e
	//			}

	//			function n(e, n) {
	//				return t(e).appendChild(n)
	//			}

	//			function r(e, t, n, r) {
	//				var i = document.createElement(e);
	//				if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));
	//				else if (t)
	//					for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
	//				return i
	//			}

	//			function i(e, t, n, i) {
	//				var o = r(e, t, n, i);
	//				return o.setAttribute("role", "presentation"), o
	//			}

	//			function o(e, t) {
	//				if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
	//				do {
	//					if (11 == t.nodeType && (t = t.host), t == e) return !0
	//				} while (t = t.parentNode)
	//			}

	//			function a() {
	//				var e;
	//				try {
	//					e = document.activeElement
	//				} catch (t) {
	//					e = document.body || null
	//				}
	//				for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
	//				return e
	//			}

	//			function s(t, n) {
	//				var r = t.className;
	//				e(n).test(r) || (t.className += (r ? " " : "") + n)
	//			}

	//			function l(t, n) {
	//				for (var r = t.split(" "), i = 0; i < r.length; i++) r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
	//				return n
	//			}

	//			function c(e) {
	//				var t = Array.prototype.slice.call(arguments, 1);
	//				return function() {
	//					return e.apply(null, t)
	//				}
	//			}

	//			function u(e, t, n) {
	//				t || (t = {});
	//				for (var r in e) !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
	//				return t
	//			}

	//			function h(e, t, n, r, i) {
	//				null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
	//				for (var o = r || 0, a = i || 0;;) {
	//					var s = e.indexOf("\t", o);
	//					if (s < 0 || s >= t) return a + (t - o);
	//					a += s - o, a += n - a % n, o = s + 1
	//				}
	//			}

	//			function f(e, t) {
	//				for (var n = 0; n < e.length; ++n)
	//					if (e[n] == t) return n;
	//				return -1
	//			}

	//			function d(e, t, n) {
	//				for (var r = 0, i = 0;;) {
	//					var o = e.indexOf("\t", r); - 1 == o && (o = e.length);
	//					var a = o - r;
	//					if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
	//					if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r
	//				}
	//			}

	//			function p(e) {
	//				for (; bo.length <= e;) bo.push(m(bo) + " ");
	//				return bo[e]
	//			}

	//			function m(e) {
	//				return e[e.length - 1]
	//			}

	//			function g(e, t) {
	//				for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
	//				return n
	//			}

	//			function v() {}

	//			function y(e, t) {
	//				var n;
	//				return Object.create ? n = Object.create(e) : (v.prototype = e, n = new v), t && u(t, n), n
	//			}

	//			function x(e) {
	//				return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || wo.test(e))
	//			}

	//			function b(e, t) {
	//				return t ? !!(t.source.indexOf("\\w") > -1 && x(e)) || t.test(e) : x(e)
	//			}

	//			function w(e) {
	//				for (var t in e)
	//					if (e.hasOwnProperty(t) && e[t]) return !1;
	//				return !0
	//			}

	//			function k(e) {
	//				return e.charCodeAt(0) >= 768 && ko.test(e)
	//			}

	//			function C(e, t, n) {
	//				for (;
	//					(n < 0 ? t > 0 : t < e.length) && k(e.charAt(t));) t += n;
	//				return t
	//			}

	//			function S(e, t, n) {
	//				for (var r = t > n ? -1 : 1;;) {
	//					if (t == n) return t;
	//					var i = (t + n) / 2,
	//						o = r < 0 ? Math.ceil(i) : Math.floor(i);
	//					if (o == t) return e(o) ? t : n;
	//					e(o) ? n = o : t = o + r
	//				}
	//			}

	//			function L(e, t) {
	//				if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
	//				for (var n = e; !n.lines;)
	//					for (var r = 0;; ++r) {
	//						var i = n.children[r],
	//							o = i.chunkSize();
	//						if (t < o) {
	//							n = i;
	//							break
	//						}
	//						t -= o
	//					}
	//				return n.lines[t]
	//			}

	//			function T(e, t, n) {
	//				var r = [],
	//					i = t.line;
	//				return e.iter(t.line, n.line + 1, function(e) {
	//					var o = e.text;
	//					i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
	//				}), r
	//			}

	//			function M(e, t, n) {
	//				var r = [];
	//				return e.iter(t, n, function(e) {
	//					r.push(e.text)
	//				}), r
	//			}

	//			function N(e, t) {
	//				var n = t - e.height;
	//				if (n)
	//					for (var r = e; r; r = r.parent) r.height += n
	//			}

	//			function A(e) {
	//				if (null == e.parent) return null;
	//				for (var t = e.parent, n = f(t.lines, e), r = t.parent; r; t = r, r = r.parent)
	//					for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
	//				return n + t.first
	//			}

	//			function E(e, t) {
	//				var n = e.first;
	//				e: do {
	//					for (var r = 0; r < e.children.length; ++r) {
	//						var i = e.children[r],
	//							o = i.height;
	//						if (t < o) {
	//							e = i;
	//							continue e
	//						}
	//						t -= o, n += i.chunkSize()
	//					}
	//					return n
	//				} while (!e.lines);
	//				for (var a = 0; a < e.lines.length; ++a) {
	//					var s = e.lines[a].height;
	//					if (t < s) break;
	//					t -= s
	//				}
	//				return n + a
	//			}

	//			function O(e, t) {
	//				return t >= e.first && t < e.first + e.size
	//			}

	//			function I(e, t) {
	//				return String(e.lineNumberFormatter(t + e.firstLineNumber))
	//			}

	//			function D(e, t, n) {
	//				if (void 0 === n && (n = null), !(this instanceof D)) return new D(e, t, n);
	//				this.line = e, this.ch = t, this.sticky = n
	//			}

	//			function H(e, t) {
	//				return e.line - t.line || e.ch - t.ch
	//			}

	//			function W(e, t) {
	//				return e.sticky == t.sticky && 0 == H(e, t)
	//			}

	//			function B(e) {
	//				return D(e.line, e.ch)
	//			}

	//			function F(e, t) {
	//				return H(e, t) < 0 ? t : e
	//			}

	//			function R(e, t) {
	//				return H(e, t) < 0 ? e : t
	//			}

	//			function P(e, t) {
	//				return Math.max(e.first, Math.min(t, e.first + e.size - 1))
	//			}

	//			function z(e, t) {
	//				if (t.line < e.first) return D(e.first, 0);
	//				var n = e.first + e.size - 1;
	//				return t.line > n ? D(n, L(e, n).text.length) : function(e, t) {
	//					var n = e.ch;
	//					return null == n || n > t ? D(e.line, t) : n < 0 ? D(e.line, 0) : e
	//				}(t, L(e, t.line).text.length)
	//			}

	//			function _(e, t) {
	//				for (var n = [], r = 0; r < t.length; r++) n[r] = z(e, t[r]);
	//				return n
	//			}

	//			function j(e, t, n) {
	//				this.marker = e, this.from = t, this.to = n
	//			}

	//			function q(e, t) {
	//				if (e)
	//					for (var n = 0; n < e.length; ++n) {
	//						var r = e[n];
	//						if (r.marker == t) return r
	//					}
	//			}

	//			function U(e, t) {
	//				for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
	//				return n
	//			}

	//			function G(e, t) {
	//				if (t.full) return null;
	//				var n = O(e, t.from.line) && L(e, t.from.line).markedSpans,
	//					r = O(e, t.to.line) && L(e, t.to.line).markedSpans;
	//				if (!n && !r) return null;
	//				var i = t.from.ch,
	//					o = t.to.ch,
	//					a = 0 == H(t.from, t.to),
	//					s = function(e, t, n) {
	//						var r;
	//						if (e)
	//							for (var i = 0; i < e.length; ++i) {
	//								var o = e[i],
	//									a = o.marker;
	//								if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
	//									var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
	//									(r || (r = [])).push(new j(a, o.from, s ? null : o.to))
	//								}
	//							}
	//						return r
	//					}(n, i, a),
	//					l = function(e, t, n) {
	//						var r;
	//						if (e)
	//							for (var i = 0; i < e.length; ++i) {
	//								var o = e[i],
	//									a = o.marker;
	//								if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
	//									var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
	//									(r || (r = [])).push(new j(a, s ? null : o.from - t, null == o.to ? null : o.to - t))
	//								}
	//							}
	//						return r
	//					}(r, o, a),
	//					c = 1 == t.text.length,
	//					u = m(t.text).length + (c ? i : 0);
	//				if (s)
	//					for (var h = 0; h < s.length; ++h) {
	//						var f = s[h];
	//						if (null == f.to) {
	//							var d = q(l, f.marker);
	//							d ? c && (f.to = null == d.to ? null : d.to + u) : f.to = i
	//						}
	//					}
	//				if (l)
	//					for (var p = 0; p < l.length; ++p) {
	//						var g = l[p];
	//						if (null != g.to && (g.to += u), null == g.from) {
	//							q(s, g.marker) || (g.from = u, c && (s || (s = [])).push(g))
	//						} else g.from += u, c && (s || (s = [])).push(g)
	//					}
	//				s && (s = $(s)), l && l != s && (l = $(l));
	//				var v = [s];
	//				if (!c) {
	//					var y, x = t.text.length - 2;
	//					if (x > 0 && s)
	//						for (var b = 0; b < s.length; ++b) null == s[b].to && (y || (y = [])).push(new j(s[b].marker, null, null));
	//					for (var w = 0; w < x; ++w) v.push(y);
	//					v.push(l)
	//				}
	//				return v
	//			}

	//			function $(e) {
	//				for (var t = 0; t < e.length; ++t) {
	//					var n = e[t];
	//					null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
	//				}
	//				return e.length ? e : null
	//			}

	//			function V(e) {
	//				var t = e.markedSpans;
	//				if (t) {
	//					for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
	//					e.markedSpans = null
	//				}
	//			}

	//			function X(e, t) {
	//				if (t) {
	//					for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
	//					e.markedSpans = t
	//				}
	//			}

	//			function K(e) {
	//				return e.inclusiveLeft ? -1 : 0
	//			}

	//			function Y(e) {
	//				return e.inclusiveRight ? 1 : 0
	//			}

	//			function Z(e, t) {
	//				var n = e.lines.length - t.lines.length;
	//				if (0 != n) return n;
	//				var r = e.find(),
	//					i = t.find(),
	//					o = H(r.from, i.from) || K(e) - K(t);
	//				if (o) return -o;
	//				var a = H(r.to, i.to) || Y(e) - Y(t);
	//				return a || t.id - e.id
	//			}

	//			function J(e, t) {
	//				var n, r = So && e.markedSpans;
	//				if (r)
	//					for (var i = void 0, o = 0; o < r.length; ++o)(i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Z(n, i.marker) < 0) && (n = i.marker);
	//				return n
	//			}

	//			function Q(e) {
	//				return J(e, !0)
	//			}

	//			function ee(e) {
	//				return J(e, !1)
	//			}

	//			function te(e, t, n, r, i) {
	//				var o = L(e, t),
	//					a = So && o.markedSpans;
	//				if (a)
	//					for (var s = 0; s < a.length; ++s) {
	//						var l = a[s];
	//						if (l.marker.collapsed) {
	//							var c = l.marker.find(0),
	//								u = H(c.from, n) || K(l.marker) - K(i),
	//								h = H(c.to, r) || Y(l.marker) - Y(i);
	//							if (!(u >= 0 && h <= 0 || u <= 0 && h >= 0) && (u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? H(c.to, n) >= 0 : H(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? H(c.from, r) <= 0 : H(c.from, r) < 0))) return !0
	//						}
	//					}
	//			}

	//			function ne(e) {
	//				for (var t; t = Q(e);) e = t.find(-1, !0).line;
	//				return e
	//			}

	//			function re(e, t) {
	//				var n = L(e, t),
	//					r = ne(n);
	//				return n == r ? t : A(r)
	//			}

	//			function ie(e, t) {
	//				if (t > e.lastLine()) return t;
	//				var n, r = L(e, t);
	//				if (!oe(e, r)) return t;
	//				for (; n = ee(r);) r = n.find(1, !0).line;
	//				return A(r) + 1
	//			}

	//			function oe(e, t) {
	//				var n = So && t.markedSpans;
	//				if (n)
	//					for (var r = void 0, i = 0; i < n.length; ++i)
	//						if ((r = n[i]).marker.collapsed) {
	//							if (null == r.from) return !0;
	//							if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && ae(e, t, r)) return !0
	//						}
	//			}

	//			function ae(e, t, n) {
	//				if (null == n.to) {
	//					var r = n.marker.find(1, !0);
	//					return ae(e, r.line, q(r.line.markedSpans, n.marker))
	//				}
	//				if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
	//				for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
	//					if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ae(e, t, i)) return !0
	//			}

	//			function se(e) {
	//				for (var t = 0, n = (e = ne(e)).parent, r = 0; r < n.lines.length; ++r) {
	//					var i = n.lines[r];
	//					if (i == e) break;
	//					t += i.height
	//				}
	//				for (var o = n.parent; o; n = o, o = n.parent)
	//					for (var a = 0; a < o.children.length; ++a) {
	//						var s = o.children[a];
	//						if (s == n) break;
	//						t += s.height
	//					}
	//				return t
	//			}

	//			function le(e) {
	//				if (0 == e.height) return 0;
	//				for (var t, n = e.text.length, r = e; t = Q(r);) {
	//					var i = t.find(0, !0);
	//					r = i.from.line, n += i.from.ch - i.to.ch
	//				}
	//				for (r = e; t = ee(r);) {
	//					var o = t.find(0, !0);
	//					n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch
	//				}
	//				return n
	//			}

	//			function ce(e) {
	//				var t = e.display,
	//					n = e.doc;
	//				t.maxLine = L(n, n.first), t.maxLineLength = le(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
	//					var n = le(e);
	//					n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
	//				})
	//			}

	//			function ue(e, t, n) {
	//				var r;
	//				Lo = null;
	//				for (var i = 0; i < e.length; ++i) {
	//					var o = e[i];
	//					if (o.from < t && o.to > t) return i;
	//					o.to == t && (o.from != o.to && "before" == n ? r = i : Lo = i), o.from == t && (o.from != o.to && "before" != n ? r = i : Lo = i)
	//				}
	//				return null != r ? r : Lo
	//			}

	//			function he(e, t) {
	//				var n = e.order;
	//				return null == n && (n = e.order = To(e.text, t)), n
	//			}

	//			function fe(e, t) {
	//				return e._handlers && e._handlers[t] || Mo
	//			}

	//			function de(e, t, n) {
	//				if (e.removeEventListener) e.removeEventListener(t, n, !1);
	//				else if (e.detachEvent) e.detachEvent("on" + t, n);
	//				else {
	//					var r = e._handlers,
	//						i = r && r[t];
	//					if (i) {
	//						var o = f(i, n);
	//						o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
	//					}
	//				}
	//			}

	//			function pe(e, t) {
	//				var n = fe(e, t);
	//				if (n.length)
	//					for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
	//			}

	//			function me(e, t, n) {
	//				return "string" == typeof t && (t = {
	//					type: t,
	//					preventDefault: function() {
	//						this.defaultPrevented = !0
	//					}
	//				}), pe(e, n || t.type, e, t), we(t) || t.codemirrorIgnore
	//			}

	//			function ge(e) {
	//				var t = e._handlers && e._handlers.cursorActivity;
	//				if (t)
	//					for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) - 1 == f(n, t[r]) && n.push(t[r])
	//			}

	//			function ve(e, t) {
	//				return fe(e, t).length > 0
	//			}

	//			function ye(e) {
	//				e.prototype.on = function(e, t) {
	//					No(this, e, t)
	//				}, e.prototype.off = function(e, t) {
	//					de(this, e, t)
	//				}
	//			}

	//			function xe(e) {
	//				e.preventDefault ? e.preventDefault() : e.returnValue = !1
	//			}

	//			function be(e) {
	//				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
	//			}

	//			function we(e) {
	//				return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
	//			}

	//			function ke(e) {
	//				xe(e), be(e)
	//			}

	//			function Ce(e) {
	//				return e.target || e.srcElement
	//			}

	//			function Se(e) {
	//				var t = e.which;
	//				return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), no && e.ctrlKey && 1 == t && (t = 3), t
	//			}

	//			function Le(e) {
	//				if (null == fo) {
	//					var t = r("span", "​");
	//					n(e, r("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (fo = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(Ui && Gi < 8))
	//				}
	//				var i = fo ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
	//				return i.setAttribute("cm-text", ""), i
	//			}

	//			function Te(e) {
	//				if (null != po) return po;
	//				var r = n(e, document.createTextNode("AخA")),
	//					i = ao(r, 0, 1).getBoundingClientRect(),
	//					o = ao(r, 1, 2).getBoundingClientRect();
	//				return t(e), !(!i || i.left == i.right) && (po = o.right - i.right < 3)
	//			}

	//			function Me(e) {
	//				if ("string" == typeof e && Wo.hasOwnProperty(e)) e = Wo[e];
	//				else if (e && "string" == typeof e.name && Wo.hasOwnProperty(e.name)) {
	//					var t = Wo[e.name];
	//					"string" == typeof t && (t = {
	//						name: t
	//					}), (e = y(t, e)).name = t.name
	//				} else {
	//					if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Me("application/xml");
	//					if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Me("application/json")
	//				}
	//				return "string" == typeof e ? {
	//					name: e
	//				} : e || {
	//					name: "null"
	//				}
	//			}

	//			function Ne(e, t) {
	//				t = Me(t);
	//				var n = Ho[t.name];
	//				if (!n) return Ne(e, "text/plain");
	//				var r = n(e, t);
	//				if (Bo.hasOwnProperty(t.name)) {
	//					var i = Bo[t.name];
	//					for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
	//				}
	//				if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
	//					for (var a in t.modeProps) r[a] = t.modeProps[a];
	//				return r
	//			}

	//			function Ae(e, t) {
	//				u(t, Bo.hasOwnProperty(e) ? Bo[e] : Bo[e] = {})
	//			}

	//			function Ee(e, t) {
	//				if (!0 === t) return t;
	//				if (e.copyState) return e.copyState(t);
	//				var n = {};
	//				for (var r in t) {
	//					var i = t[r];
	//					i instanceof Array && (i = i.concat([])), n[r] = i
	//				}
	//				return n
	//			}

	//			function Oe(e, t) {
	//				for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
	//				return n || {
	//					mode: e,
	//					state: t
	//				}
	//			}

	//			function Ie(e, t, n) {
	//				return !e.startState || e.startState(t, n)
	//			}

	//			function De(e, t, n, r) {
	//				var i = [e.state.modeGen],
	//					o = {};
	//				_e(e, t.text, e.doc.mode, n, function(e, t) {
	//					return i.push(e, t)
	//				}, o, r);
	//				for (var a = n.state, s = function(r) {
	//						n.baseTokens = i;
	//						var s = e.state.overlays[r],
	//							l = 1,
	//							c = 0;
	//						n.state = !0, _e(e, t.text, s.mode, n, function(e, t) {
	//							for (var n = l; c < e;) {
	//								var r = i[l];
	//								r > e && i.splice(l, 1, e, i[l + 1], r), l += 2, c = Math.min(e, r)
	//							}
	//							if (t)
	//								if (s.opaque) i.splice(n, l - n, e, "overlay " + t), l = n + 2;
	//								else
	//									for (; n < l; n += 2) {
	//										var o = i[n + 1];
	//										i[n + 1] = (o ? o + " " : "") + "overlay " + t
	//									}
	//						}, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1
	//					}, l = 0; l < e.state.overlays.length; ++l) s(l);
	//				return {
	//					styles: i,
	//					classes: o.bgClass || o.textClass ? o : null
	//				}
	//			}

	//			function He(e, t, n) {
	//				if (!t.styles || t.styles[0] != e.state.modeGen) {
	//					var r = We(e, A(t)),
	//						i = t.text.length > e.options.maxHighlightLength && Ee(e.doc.mode, r.state),
	//						o = De(e, t, r);
	//					i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
	//				}
	//				return t.styles
	//			}

	//			function We(e, t, n) {
	//				var r = e.doc,
	//					i = e.display;
	//				if (!r.mode.startState) return new Po(r, !0, t);
	//				var o = function(e, t, n) {
	//						for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > a; --s) {
	//							if (s <= o.first) return o.first;
	//							var l = L(o, s - 1),
	//								c = l.stateAfter;
	//							if (c && (!n || s + (c instanceof Ro ? c.lookAhead : 0) <= o.modeFrontier)) return s;
	//							var u = h(l.text, null, e.options.tabSize);
	//							(null == i || r > u) && (i = s - 1, r = u)
	//						}
	//						return i
	//					}(e, t, n),
	//					a = o > r.first && L(r, o - 1).stateAfter,
	//					s = a ? Po.fromSaved(r, a, o) : new Po(r, Ie(r.mode), o);
	//				return r.iter(o, t, function(n) {
	//					Be(e, n.text, s);
	//					var r = s.line;
	//					n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null, s.nextLine()
	//				}), n && (r.modeFrontier = s.line), s
	//			}

	//			function Be(e, t, n, r) {
	//				var i = e.doc.mode,
	//					o = new Fo(t, e.options.tabSize, n);
	//				for (o.start = o.pos = r || 0, "" == t && Fe(i, n.state); !o.eol();) Re(i, o, n.state), o.start = o.pos
	//			}

	//			function Fe(e, t) {
	//				if (e.blankLine) return e.blankLine(t);
	//				if (e.innerMode) {
	//					var n = Oe(e, t);
	//					return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
	//				}
	//			}

	//			function Re(e, t, n, r) {
	//				for (var i = 0; i < 10; i++) {
	//					r && (r[0] = Oe(e, n).mode);
	//					var o = e.token(t, n);
	//					if (t.pos > t.start) return o
	//				}
	//				throw new Error("Mode " + e.name + " failed to advance stream.")
	//			}

	//			function Pe(e, t, n, r) {
	//				var i, o, a = e.doc,
	//					s = a.mode,
	//					l = L(a, (t = z(a, t)).line),
	//					c = We(e, t.line, n),
	//					u = new Fo(l.text, e.options.tabSize, c);
	//				for (r && (o = []);
	//					(r || u.pos < t.ch) && !u.eol();) u.start = u.pos, i = Re(s, u, c.state), r && o.push(new zo(u, i, Ee(a.mode, c.state)));
	//				return r ? o : new zo(u, i, c.state)
	//			}

	//			function ze(e, t) {
	//				if (e)
	//					for (;;) {
	//						var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
	//						if (!n) break;
	//						e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
	//						var r = n[1] ? "bgClass" : "textClass";
	//						null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
	//					}
	//				return e
	//			}

	//			function _e(e, t, n, r, i, o, a) {
	//				var s = n.flattenSpans;
	//				null == s && (s = e.options.flattenSpans);
	//				var l, c = 0,
	//					u = null,
	//					h = new Fo(t, e.options.tabSize, r),
	//					f = e.options.addModeClass && [null];
	//				for ("" == t && ze(Fe(n, r.state), o); !h.eol();) {
	//					if (h.pos > e.options.maxHighlightLength ? (s = !1, a && Be(e, t, r, h.pos), h.pos = t.length, l = null) : l = ze(Re(n, h, r.state, f), o), f) {
	//						var d = f[0].name;
	//						d && (l = "m-" + (l ? d + " " + l : d))
	//					}
	//					if (!s || u != l) {
	//						for (; c < h.start;) i(c = Math.min(h.start, c + 5e3), u);
	//						u = l
	//					}
	//					h.start = h.pos
	//				}
	//				for (; c < h.pos;) {
	//					var p = Math.min(h.pos, c + 5e3);
	//					i(p, u), c = p
	//				}
	//			}

	//			function je(e) {
	//				e.parent = null, V(e)
	//			}

	//			function qe(e, t) {
	//				if (!e || /^\s*$/.test(e)) return null;
	//				var n = t.addModeClass ? Uo : qo;
	//				return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
	//			}

	//			function Ue(e, t) {
	//				var n = i("span", null, null, $i ? "padding-right: .1px" : null),
	//					r = {
	//						pre: i("pre", [n], "CodeMirror-line"),
	//						content: n,
	//						col: 0,
	//						pos: 0,
	//						cm: e,
	//						trailingSpace: !1,
	//						splitSpaces: (Ui || $i) && e.getOption("lineWrapping")
	//					};
	//				t.measure = {};
	//				for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
	//					var a = o ? t.rest[o - 1] : t.line,
	//						s = void 0;
	//					r.pos = 0, r.addToken = $e, Te(e.display.measure) && (s = he(a, e.doc.direction)) && (r.addToken = function(e, t) {
	//						return function(n, r, i, o, a, s, l) {
	//							i = i ? i + " cm-force-border" : "cm-force-border";
	//							for (var c = n.pos, u = c + r.length;;) {
	//								for (var h = void 0, f = 0; f < t.length && !((h = t[f]).to > c && h.from <= c); f++);
	//								if (h.to >= u) return e(n, r, i, o, a, s, l);
	//								e(n, r.slice(0, h.to - c), i, o, null, s, l), o = null, r = r.slice(h.to - c), c = h.to
	//							}
	//						}
	//					}(r.addToken, s)), r.map = [];
	//					! function(e, t, n) {
	//						var r = e.markedSpans,
	//							i = e.text,
	//							o = 0;
	//						if (!r) {
	//							for (var a = 1; a < n.length; a += 2) t.addToken(t, i.slice(o, o = n[a]), qe(n[a + 1], t.cm.options));
	//							return
	//						}
	//						for (var s, l, c, u, h, f, d, p = i.length, m = 0, g = 1, v = "", y = 0;;) {
	//							if (y == m) {
	//								c = u = h = f = l = "", d = null, y = 1 / 0;
	//								for (var x = [], b = void 0, w = 0; w < r.length; ++w) {
	//									var k = r[w],
	//										C = k.marker;
	//									"bookmark" == C.type && k.from == m && C.widgetNode ? x.push(C) : k.from <= m && (null == k.to || k.to > m || C.collapsed && k.to == m && k.from == m) ? (null != k.to && k.to != m && y > k.to && (y = k.to, u = ""), C.className && (c += " " + C.className), C.css && (l = (l ? l + ";" : "") + C.css), C.startStyle && k.from == m && (h += " " + C.startStyle), C.endStyle && k.to == y && (b || (b = [])).push(C.endStyle, k.to), C.title && !f && (f = C.title), C.collapsed && (!d || Z(d.marker, C) < 0) && (d = k)) : k.from > m && y > k.from && (y = k.from)
	//								}
	//								if (b)
	//									for (var S = 0; S < b.length; S += 2) b[S + 1] == y && (u += " " + b[S]);
	//								if (!d || d.from == m)
	//									for (var L = 0; L < x.length; ++L) Ve(t, 0, x[L]);
	//								if (d && (d.from || 0) == m) {
	//									if (Ve(t, (null == d.to ? p + 1 : d.to) - m, d.marker, null == d.from), null == d.to) return;
	//									d.to == m && (d = !1)
	//								}
	//							}
	//							if (m >= p) break;
	//							for (var T = Math.min(p, y);;) {
	//								if (v) {
	//									var M = m + v.length;
	//									if (!d) {
	//										var N = M > T ? v.slice(0, T - m) : v;
	//										t.addToken(t, N, s ? s + c : c, h, m + N.length == y ? u : "", f, l)
	//									}
	//									if (M >= T) {
	//										v = v.slice(T - m), m = T;
	//										break
	//									}
	//									m = M, h = ""
	//								}
	//								v = i.slice(o, o = n[g++]), s = qe(n[g++], t.cm.options)
	//							}
	//						}
	//					}(a, r, He(e, a, t != e.display.externalMeasured && A(a))), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = l(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = l(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Le(e.display.measure))), 0 == o ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
	//				}
	//				if ($i) {
	//					var c = r.content.lastChild;
	//					(/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
	//				}
	//				return pe(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = l(r.pre.className, r.textClass || "")), r
	//			}

	//			function Ge(e) {
	//				var t = r("span", "•", "cm-invalidchar");
	//				return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
	//			}

	//			function $e(e, t, n, i, o, a, s) {
	//				if (t) {
	//					var l, c = e.splitSpaces ? function(e, t) {
	//							if (e.length > 1 && !/  /.test(e)) return e;
	//							for (var n = t, r = "", i = 0; i < e.length; i++) {
	//								var o = e.charAt(i);
	//								" " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o
	//							}
	//							return r
	//						}(t, e.trailingSpace) : t,
	//						u = e.cm.state.specialChars,
	//						h = !1;
	//					if (u.test(t)) {
	//						l = document.createDocumentFragment();
	//						for (var f = 0;;) {
	//							u.lastIndex = f;
	//							var d = u.exec(t),
	//								m = d ? d.index - f : t.length - f;
	//							if (m) {
	//								var g = document.createTextNode(c.slice(f, f + m));
	//								Ui && Gi < 9 ? l.appendChild(r("span", [g])) : l.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m
	//							}
	//							if (!d) break;
	//							f += m + 1;
	//							var v = void 0;
	//							if ("\t" == d[0]) {
	//								var y = e.cm.options.tabSize,
	//									x = y - e.col % y;
	//								(v = l.appendChild(r("span", p(x), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += x
	//							} else "\r" == d[0] || "\n" == d[0] ? ((v = l.appendChild(r("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", d[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(d[0])).setAttribute("cm-text", d[0]), Ui && Gi < 9 ? l.appendChild(r("span", [v])) : l.appendChild(v), e.col += 1);
	//							e.map.push(e.pos, e.pos + 1, v), e.pos++
	//						}
	//					} else e.col += t.length, l = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, l), Ui && Gi < 9 && (h = !0), e.pos += t.length;
	//					if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || i || o || h || s) {
	//						var b = n || "";
	//						i && (b += i), o && (b += o);
	//						var w = r("span", [l], b, s);
	//						return a && (w.title = a), e.content.appendChild(w)
	//					}
	//					e.content.appendChild(l)
	//				}
	//			}

	//			function Ve(e, t, n, r) {
	//				var i = !r && n.widgetNode;
	//				i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
	//			}

	//			function Xe(e, t, n) {
	//				this.line = t, this.rest = function(e) {
	//					for (var t, n; t = ee(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
	//					return n
	//				}(t), this.size = this.rest ? A(m(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = oe(e, t)
	//			}

	//			function Ke(e, t, n) {
	//				for (var r, i = [], o = t; o < n; o = r) {
	//					var a = new Xe(e.doc, L(e.doc, o), o);
	//					r = o + a.size, i.push(a)
	//				}
	//				return i
	//			}

	//			function Ye(e, t) {
	//				var n = fe(e, t);
	//				if (n.length) {
	//					var r, i = Array.prototype.slice.call(arguments, 2);
	//					Go ? r = Go.delayedCallbacks : $o ? r = $o : (r = $o = [], setTimeout(Ze, 0));
	//					for (var o = function(e) {
	//							r.push(function() {
	//								return n[e].apply(null, i)
	//							})
	//						}, a = 0; a < n.length; ++a) o(a)
	//				}
	//			}

	//			function Ze() {
	//				var e = $o;
	//				$o = null;
	//				for (var t = 0; t < e.length; ++t) e[t]()
	//			}

	//			function Je(e, t, n, r) {
	//				for (var i = 0; i < t.changes.length; i++) {
	//					var o = t.changes[i];
	//					"text" == o ? function(e, t) {
	//						var n = t.text.className,
	//							r = et(e, t);
	//						t.text == t.node && (t.node = r.pre);
	//						t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, tt(e, t)) : n && (t.text.className = n)
	//					}(e, t) : "gutter" == o ? nt(e, t, n, r) : "class" == o ? tt(e, t) : "widget" == o && function(e, t, n) {
	//						t.alignable && (t.alignable = null);
	//						for (var r = t.node.firstChild, i = void 0; r; r = i) i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
	//						it(e, t, n)
	//					}(e, t, r)
	//				}
	//				t.changes = null
	//			}

	//			function Qe(e) {
	//				return e.node == e.text && (e.node = r("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), Ui && Gi < 8 && (e.node.style.zIndex = 2)), e.node
	//			}

	//			function et(e, t) {
	//				var n = e.display.externalMeasured;
	//				return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Ue(e, t)
	//			}

	//			function tt(e, t) {
	//				! function(e, t) {
	//					var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
	//					if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
	//					else if (n) {
	//						var i = Qe(t);
	//						t.background = i.insertBefore(r("div", null, n), i.firstChild), e.display.input.setUneditable(t.background)
	//					}
	//				}(e, t), t.line.wrapClass ? Qe(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
	//				var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
	//				t.text.className = n || ""
	//			}

	//			function nt(e, t, n, i) {
	//				if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
	//					var o = Qe(t);
	//					t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), o.insertBefore(t.gutterBackground, t.text)
	//				}
	//				var a = t.line.gutterMarkers;
	//				if (e.options.lineNumbers || a) {
	//					var s = Qe(t),
	//						l = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
	//					if (e.display.input.setUneditable(l), s.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(r("div", I(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), a)
	//						for (var c = 0; c < e.options.gutters.length; ++c) {
	//							var u = e.options.gutters[c],
	//								h = a.hasOwnProperty(u) && a[u];
	//							h && l.appendChild(r("div", [h], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[u] + "px; width: " + i.gutterWidth[u] + "px"))
	//						}
	//				}
	//			}

	//			function rt(e, t, n, r) {
	//				var i = et(e, t);
	//				return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), tt(e, t), nt(e, t, n, r), it(e, t, r), t.node
	//			}

	//			function it(e, t, n) {
	//				if (ot(e, t.line, t, n, !0), t.rest)
	//					for (var r = 0; r < t.rest.length; r++) ot(e, t.rest[r], t, n, !1)
	//			}

	//			function ot(e, t, n, i, o) {
	//				if (t.widgets)
	//					for (var a = Qe(n), s = 0, l = t.widgets; s < l.length; ++s) {
	//						var c = l[s],
	//							u = r("div", [c.node], "CodeMirror-linewidget");
	//						c.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
	//							function(e, t, n, r) {
	//								if (e.noHScroll) {
	//									(n.alignable || (n.alignable = [])).push(t);
	//									var i = r.wrapperWidth;
	//									t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
	//								}
	//								e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
	//							}(c, u, n, i), e.display.input.setUneditable(u), o && c.above ? a.insertBefore(u, n.gutter || n.text) : a.appendChild(u), Ye(c, "redraw")
	//					}
	//			}

	//			function at(e) {
	//				if (null != e.height) return e.height;
	//				var t = e.doc.cm;
	//				if (!t) return 0;
	//				if (!o(document.body, e.node)) {
	//					var i = "position: relative;";
	//					e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"), n(t.display.measure, r("div", [e.node], null, i))
	//				}
	//				return e.height = e.node.parentNode.offsetHeight
	//			}

	//			function st(e, t) {
	//				for (var n = Ce(t); n != e.wrapper; n = n.parentNode)
	//					if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
	//			}

	//			function lt(e) {
	//				return e.lineSpace.offsetTop
	//			}

	//			function ct(e) {
	//				return e.mover.offsetHeight - e.lineSpace.offsetHeight
	//			}

	//			function ut(e) {
	//				if (e.cachedPaddingH) return e.cachedPaddingH;
	//				var t = n(e.measure, r("pre", "x")),
	//					i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
	//					o = {
	//						left: parseInt(i.paddingLeft),
	//						right: parseInt(i.paddingRight)
	//					};
	//				return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o
	//			}

	//			function ht(e) {
	//				return mo - e.display.nativeBarWidth
	//			}

	//			function ft(e) {
	//				return e.display.scroller.clientWidth - ht(e) - e.display.barWidth
	//			}

	//			function dt(e) {
	//				return e.display.scroller.clientHeight - ht(e) - e.display.barHeight
	//			}

	//			function pt(e, t, n) {
	//				if (e.line == t) return {
	//					map: e.measure.map,
	//					cache: e.measure.cache
	//				};
	//				for (var r = 0; r < e.rest.length; r++)
	//					if (e.rest[r] == t) return {
	//						map: e.measure.maps[r],
	//						cache: e.measure.caches[r]
	//					};
	//				for (var i = 0; i < e.rest.length; i++)
	//					if (A(e.rest[i]) > n) return {
	//						map: e.measure.maps[i],
	//						cache: e.measure.caches[i],
	//						before: !0
	//					}
	//			}

	//			function mt(e, t, n, r) {
	//				return yt(e, vt(e, t), n, r)
	//			}

	//			function gt(e, t) {
	//				if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Ut(e, t)];
	//				var n = e.display.externalMeasured;
	//				return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
	//			}

	//			function vt(e, t) {
	//				var r = A(t),
	//					i = gt(e, r);
	//				i && !i.text ? i = null : i && i.changes && (Je(e, i, r, Pt(e)), e.curOp.forceUpdate = !0), i || (i = function(e, t) {
	//					var r = A(t = ne(t)),
	//						i = e.display.externalMeasured = new Xe(e.doc, t, r);
	//					i.lineN = r;
	//					var o = i.built = Ue(e, i);
	//					return i.text = o.pre, n(e.display.lineMeasure, o.pre), i
	//				}(e, t));
	//				var o = pt(i, t, r);
	//				return {
	//					line: t,
	//					view: i,
	//					rect: null,
	//					map: o.map,
	//					cache: o.cache,
	//					before: o.before,
	//					hasHeights: !1
	//				}
	//			}

	//			function yt(e, t, i, o, a) {
	//				t.before && (i = -1);
	//				var s, l = i + (o || "");
	//				return t.cache.hasOwnProperty(l) ? s = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (! function(e, t, n) {
	//					var r = e.options.lineWrapping,
	//						i = r && ft(e);
	//					if (!t.measure.heights || r && t.measure.width != i) {
	//						var o = t.measure.heights = [];
	//						if (r) {
	//							t.measure.width = i;
	//							for (var a = t.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
	//								var l = a[s],
	//									c = a[s + 1];
	//								Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top)
	//							}
	//						}
	//						o.push(n.bottom - n.top)
	//					}
	//				}(e, t.view, t.rect), t.hasHeights = !0), (s = function(e, t, i, o) {
	//					var a, s = xt(t.map, i, o),
	//						l = s.node,
	//						c = s.start,
	//						u = s.end,
	//						h = s.collapse;
	//					if (3 == l.nodeType) {
	//						for (var f = 0; f < 4; f++) {
	//							for (; c && k(t.line.text.charAt(s.coverStart + c));) --c;
	//							for (; s.coverStart + u < s.coverEnd && k(t.line.text.charAt(s.coverStart + u));) ++u;
	//							if ((a = Ui && Gi < 9 && 0 == c && u == s.coverEnd - s.coverStart ? l.parentNode.getBoundingClientRect() : bt(ao(l, c, u).getClientRects(), o)).left || a.right || 0 == c) break;
	//							u = c, c -= 1, h = "right"
	//						}
	//						Ui && Gi < 11 && (a = function(e, t) {
	//							if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || ! function(e) {
	//									if (null != Do) return Do;
	//									var t = n(e, r("span", "x")),
	//										i = t.getBoundingClientRect(),
	//										o = ao(t, 0, 1).getBoundingClientRect();
	//									return Do = Math.abs(i.left - o.left) > 1
	//								}(e)) return t;
	//							var i = screen.logicalXDPI / screen.deviceXDPI,
	//								o = screen.logicalYDPI / screen.deviceYDPI;
	//							return {
	//								left: t.left * i,
	//								right: t.right * i,
	//								top: t.top * o,
	//								bottom: t.bottom * o
	//							}
	//						}(e.display.measure, a))
	//					} else {
	//						c > 0 && (h = o = "right");
	//						var d;
	//						a = e.options.lineWrapping && (d = l.getClientRects()).length > 1 ? d["right" == o ? d.length - 1 : 0] : l.getBoundingClientRect()
	//					}
	//					if (Ui && Gi < 9 && !c && (!a || !a.left && !a.right)) {
	//						var p = l.parentNode.getClientRects()[0];
	//						a = p ? {
	//							left: p.left,
	//							right: p.left + Rt(e.display),
	//							top: p.top,
	//							bottom: p.bottom
	//						} : Vo
	//					}
	//					for (var m = a.top - t.rect.top, g = a.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, x = 0; x < y.length - 1 && !(v < y[x]); x++);
	//					var b = x ? y[x - 1] : 0,
	//						w = y[x],
	//						C = {
	//							left: ("right" == h ? a.right : a.left) - t.rect.left,
	//							right: ("left" == h ? a.left : a.right) - t.rect.left,
	//							top: b,
	//							bottom: w
	//						};
	//					a.left || a.right || (C.bogus = !0);
	//					e.options.singleCursorHeightPerLine || (C.rtop = m, C.rbottom = g);
	//					return C
	//				}(e, t, i, o)).bogus || (t.cache[l] = s)), {
	//					left: s.left,
	//					right: s.right,
	//					top: a ? s.rtop : s.top,
	//					bottom: a ? s.rbottom : s.bottom
	//				}
	//			}

	//			function xt(e, t, n) {
	//				for (var r, i, o, a, s, l, c = 0; c < e.length; c += 3)
	//					if (s = e[c], l = e[c + 1], t < s ? (i = 0, o = 1, a = "left") : t < l ? o = (i = t - s) + 1 : (c == e.length - 3 || t == l && e[c + 3] > t) && (i = (o = l - s) - 1, t >= l && (a = "right")), null != i) {
	//						if (r = e[c + 2], s == l && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i)
	//							for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) r = e[2 + (c -= 3)], a = "left";
	//						if ("right" == n && i == l - s)
	//							for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) r = e[(c += 3) + 2], a = "right";
	//						break
	//					}
	//				return {
	//					node: r,
	//					start: i,
	//					end: o,
	//					collapse: a,
	//					coverStart: s,
	//					coverEnd: l
	//				}
	//			}

	//			function bt(e, t) {
	//				var n = Vo;
	//				if ("left" == t)
	//					for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
	//				else
	//					for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
	//				return n
	//			}

	//			function wt(e) {
	//				if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
	//					for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
	//			}

	//			function kt(e) {
	//				e.display.externalMeasure = null, t(e.display.lineMeasure);
	//				for (var n = 0; n < e.display.view.length; n++) wt(e.display.view[n])
	//			}

	//			function Ct(e) {
	//				kt(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
	//			}

	//			function St() {
	//				return Xi && eo ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
	//			}

	//			function Lt() {
	//				return Xi && eo ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
	//			}

	//			function Tt(e) {
	//				var t = 0;
	//				if (e.widgets)
	//					for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += at(e.widgets[n]));
	//				return t
	//			}

	//			function Mt(e, t, n, r, i) {
	//				if (!i) {
	//					var o = Tt(t);
	//					n.top += o, n.bottom += o
	//				}
	//				if ("line" == r) return n;
	//				r || (r = "local");
	//				var a = se(t);
	//				if ("local" == r ? a += lt(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
	//					var s = e.display.lineSpace.getBoundingClientRect();
	//					a += s.top + ("window" == r ? 0 : Lt());
	//					var l = s.left + ("window" == r ? 0 : St());
	//					n.left += l, n.right += l
	//				}
	//				return n.top += a, n.bottom += a, n
	//			}

	//			function Nt(e, t, n) {
	//				if ("div" == n) return t;
	//				var r = t.left,
	//					i = t.top;
	//				if ("page" == n) r -= St(), i -= Lt();
	//				else if ("local" == n || !n) {
	//					var o = e.display.sizer.getBoundingClientRect();
	//					r += o.left, i += o.top
	//				}
	//				var a = e.display.lineSpace.getBoundingClientRect();
	//				return {
	//					left: r - a.left,
	//					top: i - a.top
	//				}
	//			}

	//			function At(e, t, n, r, i) {
	//				return r || (r = L(e.doc, t.line)), Mt(e, r, mt(e, r, t.ch, i), n)
	//			}

	//			function Et(e, t, n, r, i, o) {
	//				function a(t, a) {
	//					var s = yt(e, i, t, a ? "right" : "left", o);
	//					return a ? s.left = s.right : s.right = s.left, Mt(e, r, s, n)
	//				}

	//				function s(e, t, n) {
	//					var r = 1 == l[t].level;
	//					return a(n ? e - 1 : e, r != n)
	//				}
	//				r = r || L(e.doc, t.line), i || (i = vt(e, r));
	//				var l = he(r, e.doc.direction),
	//					c = t.ch,
	//					u = t.sticky;
	//				if (c >= r.text.length ? (c = r.text.length, u = "before") : c <= 0 && (c = 0, u = "after"), !l) return a("before" == u ? c - 1 : c, "before" == u);
	//				var h = ue(l, c, u),
	//					f = Lo,
	//					d = s(c, h, "before" == u);
	//				return null != f && (d.other = s(c, f, "before" != u)), d
	//			}

	//			function Ot(e, t) {
	//				var n = 0;
	//				t = z(e.doc, t), e.options.lineWrapping || (n = Rt(e.display) * t.ch);
	//				var r = L(e.doc, t.line),
	//					i = se(r) + lt(e.display);
	//				return {
	//					left: n,
	//					right: n,
	//					top: i,
	//					bottom: i + r.height
	//				}
	//			}

	//			function It(e, t, n, r, i) {
	//				var o = D(e, t, n);
	//				return o.xRel = i, r && (o.outside = !0), o
	//			}

	//			function Dt(e, t, n) {
	//				var r = e.doc;
	//				if ((n += e.display.viewOffset) < 0) return It(r.first, 0, null, !0, -1);
	//				var i = E(r, n),
	//					o = r.first + r.size - 1;
	//				if (i > o) return It(r.first + r.size - 1, L(r, o).text.length, null, !0, 1);
	//				t < 0 && (t = 0);
	//				for (var a = L(r, i);;) {
	//					var s = function(e, t, n, r, i) {
	//							i -= se(t);
	//							var o = vt(e, t),
	//								a = Tt(t),
	//								s = 0,
	//								l = t.text.length,
	//								c = !0,
	//								u = he(t, e.doc.direction);
	//							if (u) {
	//								var h = (e.options.lineWrapping ? function(e, t, n, r, i, o, a) {
	//									var s = Ht(e, t, r, a),
	//										l = s.begin,
	//										c = s.end;
	//									/\s/.test(t.text.charAt(c - 1)) && c--;
	//									for (var u = null, h = null, f = 0; f < i.length; f++) {
	//										var d = i[f];
	//										if (!(d.from >= c || d.to <= l)) {
	//											var p = 1 != d.level,
	//												m = yt(e, r, p ? Math.min(c, d.to) - 1 : Math.max(l, d.from)).right,
	//												g = m < o ? o - m + 1e9 : m - o;
	//											(!u || h > g) && (u = d, h = g)
	//										}
	//									}
	//									u || (u = i[i.length - 1]);
	//									u.from < l && (u = {
	//										from: l,
	//										to: u.to,
	//										level: u.level
	//									});
	//									u.to > c && (u = {
	//										from: u.from,
	//										to: c,
	//										level: u.level
	//									});
	//									return u
	//								} : function(e, t, n, r, i, o, a) {
	//									var s = S(function(s) {
	//											var l = i[s],
	//												c = 1 != l.level;
	//											return Bt(Et(e, D(n, c ? l.to : l.from, c ? "before" : "after"), "line", t, r), o, a, !0)
	//										}, 0, i.length - 1),
	//										l = i[s];
	//									if (s > 0) {
	//										var c = 1 != l.level,
	//											u = Et(e, D(n, c ? l.from : l.to, c ? "after" : "before"), "line", t, r);
	//										Bt(u, o, a, !0) && u.top > a && (l = i[s - 1])
	//									}
	//									return l
	//								})(e, t, n, o, u, r, i);
	//								c = 1 != h.level, s = c ? h.from : h.to - 1, l = c ? h.to : h.from - 1
	//							}
	//							var f, d, p = null,
	//								m = null,
	//								g = S(function(t) {
	//									var n = yt(e, o, t);
	//									return n.top += a, n.bottom += a, !!Bt(n, r, i, !1) && (n.top <= i && n.left <= r && (p = t, m = n), !0)
	//								}, s, l),
	//								v = !1;
	//							if (m) {
	//								var y = r - m.left < m.right - r,
	//									x = y == c;
	//								g = p + (x ? 0 : 1), d = x ? "after" : "before", f = y ? m.left : m.right
	//							} else {
	//								c || g != l && g != s || g++, d = 0 == g ? "after" : g == t.text.length ? "before" : yt(e, o, g - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
	//								var b = Et(e, D(n, g, d), "line", t, o);
	//								f = b.left, v = i < b.top || i >= b.bottom
	//							}
	//							return g = C(t.text, g, 1), It(n, g, d, v, r - f)
	//						}(e, a, i, t, n),
	//						l = ee(a),
	//						c = l && l.find(0, !0);
	//					if (!l || !(s.ch > c.from.ch || s.ch == c.from.ch && s.xRel > 0)) return s;
	//					i = A(a = c.to.line)
	//				}
	//			}

	//			function Ht(e, t, n, r) {
	//				r -= Tt(t);
	//				var i = t.text.length,
	//					o = S(function(t) {
	//						return yt(e, n, t - 1).bottom <= r
	//					}, i, 0);
	//				return i = S(function(t) {
	//					return yt(e, n, t).top > r
	//				}, o, i), {
	//					begin: o,
	//					end: i
	//				}
	//			}

	//			function Wt(e, t, n, r) {
	//				n || (n = vt(e, t));
	//				return Ht(e, t, n, Mt(e, t, yt(e, n, r), "line").top)
	//			}

	//			function Bt(e, t, n, r) {
	//				return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
	//			}

	//			function Ft(e) {
	//				if (null != e.cachedTextHeight) return e.cachedTextHeight;
	//				if (null == jo) {
	//					jo = r("pre");
	//					for (var i = 0; i < 49; ++i) jo.appendChild(document.createTextNode("x")), jo.appendChild(r("br"));
	//					jo.appendChild(document.createTextNode("x"))
	//				}
	//				n(e.measure, jo);
	//				var o = jo.offsetHeight / 50;
	//				return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1
	//			}

	//			function Rt(e) {
	//				if (null != e.cachedCharWidth) return e.cachedCharWidth;
	//				var t = r("span", "xxxxxxxxxx"),
	//					i = r("pre", [t]);
	//				n(e.measure, i);
	//				var o = t.getBoundingClientRect(),
	//					a = (o.right - o.left) / 10;
	//				return a > 2 && (e.cachedCharWidth = a), a || 10
	//			}

	//			function Pt(e) {
	//				for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
	//				return {
	//					fixedPos: zt(t),
	//					gutterTotalWidth: t.gutters.offsetWidth,
	//					gutterLeft: n,
	//					gutterWidth: r,
	//					wrapperWidth: t.wrapper.clientWidth
	//				}
	//			}

	//			function zt(e) {
	//				return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
	//			}

	//			function _t(e) {
	//				var t = Ft(e.display),
	//					n = e.options.lineWrapping,
	//					r = n && Math.max(5, e.display.scroller.clientWidth / Rt(e.display) - 3);
	//				return function(i) {
	//					if (oe(e.doc, i)) return 0;
	//					var o = 0;
	//					if (i.widgets)
	//						for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
	//					return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
	//				}
	//			}

	//			function jt(e) {
	//				var t = e.doc,
	//					n = _t(e);
	//				t.iter(function(e) {
	//					var t = n(e);
	//					t != e.height && N(e, t)
	//				})
	//			}

	//			function qt(e, t, n, r) {
	//				var i = e.display;
	//				if (!n && "true" == Ce(t).getAttribute("cm-not-content")) return null;
	//				var o, a, s = i.lineSpace.getBoundingClientRect();
	//				try {
	//					o = t.clientX - s.left, a = t.clientY - s.top
	//				} catch (t) {
	//					return null
	//				}
	//				var l, c = Dt(e, o, a);
	//				if (r && 1 == c.xRel && (l = L(e.doc, c.line).text).length == c.ch) {
	//					var u = h(l, l.length, e.options.tabSize) - l.length;
	//					c = D(c.line, Math.max(0, Math.round((o - ut(e.display).left) / Rt(e.display)) - u))
	//				}
	//				return c
	//			}

	//			function Ut(e, t) {
	//				if (t >= e.display.viewTo) return null;
	//				if ((t -= e.display.viewFrom) < 0) return null;
	//				for (var n = e.display.view, r = 0; r < n.length; r++)
	//					if ((t -= n[r].size) < 0) return r
	//			}

	//			function Gt(e) {
	//				e.display.input.showSelection(e.display.input.prepareSelection())
	//			}

	//			function $t(e, t) {
	//				void 0 === t && (t = !0);
	//				for (var n = e.doc, i = {}, o = i.cursors = document.createDocumentFragment(), a = i.selection = document.createDocumentFragment(), s = 0; s < n.sel.ranges.length; s++)
	//					if (t || s != n.sel.primIndex) {
	//						var l = n.sel.ranges[s];
	//						if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
	//							var c = l.empty();
	//							(c || e.options.showCursorWhenSelecting) && Vt(e, l.head, o), c || function(e, t, n) {
	//								function i(e, t, n, i) {
	//									t < 0 && (t = 0), t = Math.round(t), i = Math.round(i), l.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? h - e : n) + "px;\n                             height: " + (i - t) + "px"))
	//								}

	//								function o(t, n, r) {
	//									function o(n, r) {
	//										return At(e, D(t, n), "div", d, r)
	//									}

	//									function a(t, n, r) {
	//										var i = Wt(e, d, null, t),
	//											a = "ltr" == n == ("after" == r) ? "left" : "right",
	//											s = "after" == r ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1);
	//										return o(s, a)[a]
	//									}
	//									var l, c, d = L(s, t),
	//										p = d.text.length,
	//										m = he(d, s.direction);
	//									return function(e, t, n, r) {
	//										if (!e) return r(t, n, "ltr", 0);
	//										for (var i = !1, o = 0; o < e.length; ++o) {
	//											var a = e[o];
	//											(a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0)
	//										}
	//										i || r(t, n, "ltr")
	//									}(m, n || 0, null == r ? p : r, function(e, t, s, d) {
	//										var g = "ltr" == s,
	//											v = o(e, g ? "left" : "right"),
	//											y = o(t - 1, g ? "right" : "left"),
	//											x = null == n && 0 == e,
	//											b = null == r && t == p,
	//											w = 0 == d,
	//											k = !m || d == m.length - 1;
	//										if (y.top - v.top <= 3) {
	//											var C = (f ? x : b) && w,
	//												S = (f ? b : x) && k,
	//												L = C ? u : (g ? v : y).left,
	//												T = S ? h : (g ? y : v).right;
	//											i(L, v.top, T - L, v.bottom)
	//										} else {
	//											var M, N, A, E;
	//											g ? (M = f && x && w ? u : v.left, N = f ? h : a(e, s, "before"), A = f ? u : a(t, s, "after"), E = f && b && k ? h : y.right) : (M = f ? a(e, s, "before") : u, N = !f && x && w ? h : v.right, A = !f && b && k ? u : y.left, E = f ? a(t, s, "after") : h), i(M, v.top, N - M, v.bottom), v.bottom < y.top && i(u, v.bottom, null, y.top), i(A, y.top, E - A, y.bottom)
	//										}(!l || Xt(v, l) < 0) && (l = v), Xt(y, l) < 0 && (l = y), (!c || Xt(v, c) < 0) && (c = v), Xt(y, c) < 0 && (c = y)
	//									}), {
	//										start: l,
	//										end: c
	//									}
	//								}
	//								var a = e.display,
	//									s = e.doc,
	//									l = document.createDocumentFragment(),
	//									c = ut(e.display),
	//									u = c.left,
	//									h = Math.max(a.sizerWidth, ft(e) - a.sizer.offsetLeft) - c.right,
	//									f = "ltr" == s.direction;
	//								var d = t.from(),
	//									p = t.to();
	//								if (d.line == p.line) o(d.line, d.ch, p.ch);
	//								else {
	//									var m = L(s, d.line),
	//										g = L(s, p.line),
	//										v = ne(m) == ne(g),
	//										y = o(d.line, d.ch, v ? m.text.length + 1 : null).end,
	//										x = o(p.line, v ? 0 : null, p.ch).start;
	//									v && (y.top < x.top - 2 ? (i(y.right, y.top, null, y.bottom), i(u, x.top, x.left, x.bottom)) : i(y.right, y.top, x.left - y.right, y.bottom)), y.bottom < x.top && i(u, y.bottom, null, x.top)
	//								}
	//								n.appendChild(l)
	//							}(e, l, a)
	//						}
	//					}
	//				return i
	//			}

	//			function Vt(e, t, n) {
	//				var i = Et(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
	//					o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
	//				if (o.style.left = i.left + "px", o.style.top = i.top + "px", o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) {
	//					var a = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
	//					a.style.display = "", a.style.left = i.other.left + "px", a.style.top = i.other.top + "px", a.style.height = .85 * (i.other.bottom - i.other.top) + "px"
	//				}
	//			}

	//			function Xt(e, t) {
	//				return e.top - t.top || e.left - t.left
	//			}

	//			function Kt(e) {
	//				if (e.state.focused) {
	//					var t = e.display;
	//					clearInterval(t.blinker);
	//					var n = !0;
	//					t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
	//						return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
	//					}, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
	//				}
	//			}

	//			function Yt(e) {
	//				e.state.focused || (e.display.input.focus(), Jt(e))
	//			}

	//			function Zt(e) {
	//				e.state.delayingBlurEvent = !0, setTimeout(function() {
	//					e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, Qt(e))
	//				}, 100)
	//			}

	//			function Jt(e, t) {
	//				e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (pe(e, "focus", e, t), e.state.focused = !0, s(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), $i && setTimeout(function() {
	//					return e.display.input.reset(!0)
	//				}, 20)), e.display.input.receivedFocus()), Kt(e))
	//			}

	//			function Qt(e, t) {
	//				e.state.delayingBlurEvent || (e.state.focused && (pe(e, "blur", e, t), e.state.focused = !1, co(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
	//					e.state.focused || (e.display.shift = !1)
	//				}, 150))
	//			}

	//			function en(e) {
	//				for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
	//					var i = t.view[r],
	//						o = void 0;
	//					if (!i.hidden) {
	//						if (Ui && Gi < 8) {
	//							var a = i.node.offsetTop + i.node.offsetHeight;
	//							o = a - n, n = a
	//						} else {
	//							var s = i.node.getBoundingClientRect();
	//							o = s.bottom - s.top
	//						}
	//						var l = i.line.height - o;
	//						if (o < 2 && (o = Ft(t)), (l > .005 || l < -.005) && (N(i.line, o), tn(i.line), i.rest))
	//							for (var c = 0; c < i.rest.length; c++) tn(i.rest[c])
	//					}
	//				}
	//			}

	//			function tn(e) {
	//				if (e.widgets)
	//					for (var t = 0; t < e.widgets.length; ++t) {
	//						var n = e.widgets[t],
	//							r = n.node.parentNode;
	//						r && (n.height = r.offsetHeight)
	//					}
	//			}

	//			function nn(e, t, n) {
	//				var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
	//				r = Math.floor(r - lt(e));
	//				var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
	//					o = E(t, r),
	//					a = E(t, i);
	//				if (n && n.ensure) {
	//					var s = n.ensure.from.line,
	//						l = n.ensure.to.line;
	//					s < o ? (o = s, a = E(t, se(L(t, s)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= a && (o = E(t, se(L(t, l)) - e.wrapper.clientHeight), a = l)
	//				}
	//				return {
	//					from: o,
	//					to: Math.max(a, o + 1)
	//				}
	//			}

	//			function rn(e) {
	//				var t = e.display,
	//					n = t.view;
	//				if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
	//					for (var r = zt(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)
	//						if (!n[a].hidden) {
	//							e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
	//							var s = n[a].alignable;
	//							if (s)
	//								for (var l = 0; l < s.length; l++) s[l].style.left = o
	//						}
	//					e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
	//				}
	//			}

	//			function on(e) {
	//				if (!e.options.lineNumbers) return !1;
	//				var t = e.doc,
	//					n = I(e.options, t.first + t.size - 1),
	//					i = e.display;
	//				if (n.length != i.lineNumChars) {
	//					var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
	//						a = o.firstChild.offsetWidth,
	//						s = o.offsetWidth - a;
	//					return i.lineGutter.style.width = "", i.lineNumInnerWidth = Math.max(a, i.lineGutter.offsetWidth - s) + 1, i.lineNumWidth = i.lineNumInnerWidth + s, i.lineNumChars = i.lineNumInnerWidth ? n.length : -1, i.lineGutter.style.width = i.lineNumWidth + "px", Wn(e), !0
	//				}
	//				return !1
	//			}

	//			function an(e, t) {
	//				var n = e.display,
	//					r = Ft(e.display);
	//				t.top < 0 && (t.top = 0);
	//				var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
	//					o = dt(e),
	//					a = {};
	//				t.bottom - t.top > o && (t.bottom = t.top + o);
	//				var s = e.doc.height + ct(n),
	//					l = t.top < r,
	//					c = t.bottom > s - r;
	//				if (t.top < i) a.scrollTop = l ? 0 : t.top;
	//				else if (t.bottom > i + o) {
	//					var u = Math.min(t.top, (c ? s : t.bottom) - o);
	//					u != i && (a.scrollTop = u)
	//				}
	//				var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
	//					f = ft(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
	//					d = t.right - t.left > f;
	//				return d && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < h ? a.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)) : t.right > f + h - 3 && (a.scrollLeft = t.right + (d ? 0 : 10) - f), a
	//			}

	//			function sn(e, t) {
	//				null != t && (un(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
	//			}

	//			function ln(e) {
	//				un(e);
	//				var t = e.getCursor();
	//				e.curOp.scrollToPos = {
	//					from: t,
	//					to: t,
	//					margin: e.options.cursorScrollMargin
	//				}
	//			}

	//			function cn(e, t, n) {
	//				null == t && null == n || un(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n)
	//			}

	//			function un(e) {
	//				var t = e.curOp.scrollToPos;
	//				if (t) {
	//					e.curOp.scrollToPos = null;
	//					hn(e, Ot(e, t.from), Ot(e, t.to), t.margin)
	//				}
	//			}

	//			function hn(e, t, n, r) {
	//				var i = an(e, {
	//					left: Math.min(t.left, n.left),
	//					top: Math.min(t.top, n.top) - r,
	//					right: Math.max(t.right, n.right),
	//					bottom: Math.max(t.bottom, n.bottom) + r
	//				});
	//				cn(e, i.scrollLeft, i.scrollTop)
	//			}

	//			function fn(e, t) {
	//				Math.abs(e.doc.scrollTop - t) < 2 || (zi || Hn(e, {
	//					top: t
	//				}), dn(e, t, !0), zi && Hn(e), En(e, 100))
	//			}

	//			function dn(e, t, n) {
	//				t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
	//			}

	//			function pn(e, t, n, r) {
	//				t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, rn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
	//			}

	//			function mn(e) {
	//				var t = e.display,
	//					n = t.gutters.offsetWidth,
	//					r = Math.round(e.doc.height + ct(e.display));
	//				return {
	//					clientHeight: t.scroller.clientHeight,
	//					viewHeight: t.wrapper.clientHeight,
	//					scrollWidth: t.scroller.scrollWidth,
	//					clientWidth: t.scroller.clientWidth,
	//					viewWidth: t.wrapper.clientWidth,
	//					barLeft: e.options.fixedGutter ? n : 0,
	//					docHeight: r,
	//					scrollHeight: r + ht(e) + t.barHeight,
	//					nativeBarWidth: t.nativeBarWidth,
	//					gutterWidth: n
	//				}
	//			}

	//			function gn(e, t) {
	//				t || (t = mn(e));
	//				var n = e.display.barWidth,
	//					r = e.display.barHeight;
	//				vn(e, t);
	//				for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && en(e), vn(e, mn(e)), n = e.display.barWidth, r = e.display.barHeight
	//			}

	//			function vn(e, t) {
	//				var n = e.display,
	//					r = n.scrollbars.update(t);
	//				n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
	//			}

	//			function yn(e) {
	//				e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && co(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Yo[e.options.scrollbarStyle](function(t) {
	//					e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), No(t, "mousedown", function() {
	//						e.state.focused && setTimeout(function() {
	//							return e.display.input.focus()
	//						}, 0)
	//					}), t.setAttribute("cm-not-content", "true")
	//				}, function(t, n) {
	//					"horizontal" == n ? pn(e, t) : fn(e, t)
	//				}, e), e.display.scrollbars.addClass && s(e.display.wrapper, e.display.scrollbars.addClass)
	//			}

	//			function xn(e) {
	//				e.curOp = {
	//						cm: e,
	//						viewChanged: !1,
	//						startHeight: e.doc.height,
	//						forceUpdate: !1,
	//						updateInput: null,
	//						typing: !1,
	//						changeObjs: null,
	//						cursorActivityHandlers: null,
	//						cursorActivityCalled: 0,
	//						selectionChanged: !1,
	//						updateMaxLine: !1,
	//						scrollLeft: null,
	//						scrollTop: null,
	//						scrollToPos: null,
	//						focus: !1,
	//						id: ++Zo
	//					},
	//					function(e) {
	//						Go ? Go.ops.push(e) : e.ownsGroup = Go = {
	//							ops: [e],
	//							delayedCallbacks: []
	//						}
	//					}(e.curOp)
	//			}

	//			function bn(e) {
	//				! function(e, t) {
	//					var n = e.ownsGroup;
	//					if (n) try {
	//						! function(e) {
	//							var t = e.delayedCallbacks,
	//								n = 0;
	//							do {
	//								for (; n < t.length; n++) t[n].call(null);
	//								for (var r = 0; r < e.ops.length; r++) {
	//									var i = e.ops[r];
	//									if (i.cursorActivityHandlers)
	//										for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
	//								}
	//							} while (n < t.length)
	//						}(n)
	//					} finally {
	//						Go = null, t(n)
	//					}
	//				}(e.curOp, function(e) {
	//					for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
	//					! function(e) {
	//						for (var t = e.ops, n = 0; n < t.length; n++) ! function(e) {
	//							var t = e.cm,
	//								n = t.display;
	//							(function(e) {
	//								var t = e.display;
	//								!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = ht(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = ht(e) + "px", t.scrollbarsClipped = !0)
	//							})(t), e.updateMaxLine && ce(t);
	//							e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new Jo(t, e.mustUpdate && {
	//								top: e.scrollTop,
	//								ensure: e.scrollToPos
	//							}, e.forceUpdate)
	//						}(t[n]);
	//						for (var i = 0; i < t.length; i++) ! function(e) {
	//							e.updatedDisplay = e.mustUpdate && In(e.cm, e.update)
	//						}(t[i]);
	//						for (var o = 0; o < t.length; o++) ! function(e) {
	//							var t = e.cm,
	//								n = t.display;
	//							e.updatedDisplay && en(t);
	//							e.barMeasure = mn(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = mt(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + ht(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - ft(t)));
	//							(e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
	//						}(t[o]);
	//						for (var s = 0; s < t.length; s++) ! function(e) {
	//							var t = e.cm;
	//							null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && pn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
	//							var n = e.focus && e.focus == a();
	//							e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n);
	//							(e.updatedDisplay || e.startHeight != t.doc.height) && gn(t, e.barMeasure);
	//							e.updatedDisplay && Bn(t, e.barMeasure);
	//							e.selectionChanged && Kt(t);
	//							t.state.focused && e.updateInput && t.display.input.reset(e.typing);
	//							n && Yt(e.cm)
	//						}(t[s]);
	//						for (var l = 0; l < t.length; l++) ! function(e) {
	//							var t = e.cm,
	//								n = t.display,
	//								i = t.doc;
	//							e.updatedDisplay && Dn(t, e.update);
	//							null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null);
	//							null != e.scrollTop && dn(t, e.scrollTop, e.forceScroll);
	//							null != e.scrollLeft && pn(t, e.scrollLeft, !0, !0);
	//							if (e.scrollToPos) {
	//								var o = function(e, t, n, r) {
	//									null == r && (r = 0);
	//									var i;
	//									e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? D(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? D(t.line, t.ch + 1, "before") : t);
	//									for (var o = 0; o < 5; o++) {
	//										var a = !1,
	//											s = Et(e, t),
	//											l = n && n != t ? Et(e, n) : s,
	//											c = an(e, i = {
	//												left: Math.min(s.left, l.left),
	//												top: Math.min(s.top, l.top) - r,
	//												right: Math.max(s.left, l.left),
	//												bottom: Math.max(s.bottom, l.bottom) + r
	//											}),
	//											u = e.doc.scrollTop,
	//											h = e.doc.scrollLeft;
	//										if (null != c.scrollTop && (fn(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != c.scrollLeft && (pn(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (a = !0)), !a) break
	//									}
	//									return i
	//								}(t, z(i, e.scrollToPos.from), z(i, e.scrollToPos.to), e.scrollToPos.margin);
	//								! function(e, t) {
	//									if (!me(e, "scrollCursorIntoView")) {
	//										var n = e.display,
	//											i = n.sizer.getBoundingClientRect(),
	//											o = null;
	//										if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !Ji) {
	//											var a = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - lt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + ht(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
	//											e.display.lineSpace.appendChild(a), a.scrollIntoView(o), e.display.lineSpace.removeChild(a)
	//										}
	//									}
	//								}(t, o)
	//							}
	//							var a = e.maybeHiddenMarkers,
	//								s = e.maybeUnhiddenMarkers;
	//							if (a)
	//								for (var l = 0; l < a.length; ++l) a[l].lines.length || pe(a[l], "hide");
	//							if (s)
	//								for (var c = 0; c < s.length; ++c) s[c].lines.length && pe(s[c], "unhide");
	//							n.wrapper.offsetHeight && (i.scrollTop = t.display.scroller.scrollTop);
	//							e.changeObjs && pe(t, "changes", t, e.changeObjs);
	//							e.update && e.update.finish()
	//						}(t[l])
	//					}(e)
	//				})
	//			}

	//			function wn(e, t) {
	//				if (e.curOp) return t();
	//				xn(e);
	//				try {
	//					return t()
	//				} finally {
	//					bn(e)
	//				}
	//			}

	//			function kn(e, t) {
	//				return function() {
	//					if (e.curOp) return t.apply(e, arguments);
	//					xn(e);
	//					try {
	//						return t.apply(e, arguments)
	//					} finally {
	//						bn(e)
	//					}
	//				}
	//			}

	//			function Cn(e) {
	//				return function() {
	//					if (this.curOp) return e.apply(this, arguments);
	//					xn(this);
	//					try {
	//						return e.apply(this, arguments)
	//					} finally {
	//						bn(this)
	//					}
	//				}
	//			}

	//			function Sn(e) {
	//				return function() {
	//					var t = this.cm;
	//					if (!t || t.curOp) return e.apply(this, arguments);
	//					xn(t);
	//					try {
	//						return e.apply(this, arguments)
	//					} finally {
	//						bn(t)
	//					}
	//				}
	//			}

	//			function Ln(e, t, n, r) {
	//				null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
	//				var i = e.display;
	//				if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) So && re(e.doc, t) < i.viewTo && Mn(e);
	//				else if (n <= i.viewFrom) So && ie(e.doc, n + r) > i.viewFrom ? Mn(e) : (i.viewFrom += r, i.viewTo += r);
	//				else if (t <= i.viewFrom && n >= i.viewTo) Mn(e);
	//				else if (t <= i.viewFrom) {
	//					var o = Nn(e, n, n + r, 1);
	//					o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : Mn(e)
	//				} else if (n >= i.viewTo) {
	//					var a = Nn(e, t, t, -1);
	//					a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : Mn(e)
	//				} else {
	//					var s = Nn(e, t, t, -1),
	//						l = Nn(e, n, n + r, 1);
	//					s && l ? (i.view = i.view.slice(0, s.index).concat(Ke(e, s.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : Mn(e)
	//				}
	//				var c = i.externalMeasured;
	//				c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (i.externalMeasured = null))
	//			}

	//			function Tn(e, t, n) {
	//				e.curOp.viewChanged = !0;
	//				var r = e.display,
	//					i = e.display.externalMeasured;
	//				if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
	//					var o = r.view[Ut(e, t)];
	//					if (null != o.node) {
	//						var a = o.changes || (o.changes = []); - 1 == f(a, n) && a.push(n)
	//					}
	//				}
	//			}

	//			function Mn(e) {
	//				e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
	//			}

	//			function Nn(e, t, n, r) {
	//				var i, o = Ut(e, t),
	//					a = e.display.view;
	//				if (!So || n == e.doc.first + e.doc.size) return {
	//					index: o,
	//					lineN: n
	//				};
	//				for (var s = e.display.viewFrom, l = 0; l < o; l++) s += a[l].size;
	//				if (s != t) {
	//					if (r > 0) {
	//						if (o == a.length - 1) return null;
	//						i = s + a[o].size - t, o++
	//					} else i = s - t;
	//					t += i, n += i
	//				}
	//				for (; re(e.doc, n) != n;) {
	//					if (o == (r < 0 ? 0 : a.length - 1)) return null;
	//					n += r * a[o - (r < 0 ? 1 : 0)].size, o += r
	//				}
	//				return {
	//					index: o,
	//					lineN: n
	//				}
	//			}

	//			function An(e) {
	//				for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
	//					var i = t[r];
	//					i.hidden || i.node && !i.changes || ++n
	//				}
	//				return n
	//			}

	//			function En(e, t) {
	//				e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, c(On, e))
	//			}

	//			function On(e) {
	//				var t = e.doc;
	//				if (!(t.highlightFrontier >= e.display.viewTo)) {
	//					var n = +new Date + e.options.workTime,
	//						r = We(e, t.highlightFrontier),
	//						i = [];
	//					t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
	//						if (r.line >= e.display.viewFrom) {
	//							var a = o.styles,
	//								s = o.text.length > e.options.maxHighlightLength ? Ee(t.mode, r.state) : null,
	//								l = De(e, o, r, !0);
	//							s && (r.state = s), o.styles = l.styles;
	//							var c = o.styleClasses,
	//								u = l.classes;
	//							u ? o.styleClasses = u : c && (o.styleClasses = null);
	//							for (var h = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !h && f < a.length; ++f) h = a[f] != o.styles[f];
	//							h && i.push(r.line), o.stateAfter = r.save(), r.nextLine()
	//						} else o.text.length <= e.options.maxHighlightLength && Be(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
	//						if (+new Date > n) return En(e, e.options.workDelay), !0
	//					}), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && wn(e, function() {
	//						for (var t = 0; t < i.length; t++) Tn(e, i[t], "text")
	//					})
	//				}
	//			}

	//			function In(e, n) {
	//				var r = e.display,
	//					i = e.doc;
	//				if (n.editorIsHidden) return Mn(e), !1;
	//				if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == An(e)) return !1;
	//				on(e) && (Mn(e), n.dims = Pt(e));
	//				var s = i.first + i.size,
	//					l = Math.max(n.visible.from - e.options.viewportMargin, i.first),
	//					c = Math.min(s, n.visible.to + e.options.viewportMargin);
	//				r.viewFrom < l && l - r.viewFrom < 20 && (l = Math.max(i.first, r.viewFrom)), r.viewTo > c && r.viewTo - c < 20 && (c = Math.min(s, r.viewTo)), So && (l = re(e.doc, l), c = ie(e.doc, c));
	//				var u = l != r.viewFrom || c != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
	//				! function(e, t, n) {
	//					var r = e.display;
	//					0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = Ke(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = Ke(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Ut(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(Ke(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Ut(e, n)))), r.viewTo = n
	//				}(e, l, c), r.viewOffset = se(L(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
	//				var h = An(e);
	//				if (!u && 0 == h && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
	//				var d = function(e) {
	//					if (e.hasFocus()) return null;
	//					var t = a();
	//					if (!t || !o(e.display.lineDiv, t)) return null;
	//					var n = {
	//						activeElt: t
	//					};
	//					if (window.getSelection) {
	//						var r = window.getSelection();
	//						r.anchorNode && r.extend && o(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset)
	//					}
	//					return n
	//				}(e);
	//				return h > 4 && (r.lineDiv.style.display = "none"),
	//					function(e, n, r) {
	//						function i(t) {
	//							var n = t.nextSibling;
	//							return $i && no && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
	//						}
	//						var o = e.display,
	//							a = e.options.lineNumbers,
	//							s = o.lineDiv,
	//							l = s.firstChild;
	//						for (var c = o.view, u = o.viewFrom, h = 0; h < c.length; h++) {
	//							var d = c[h];
	//							if (d.hidden);
	//							else if (d.node && d.node.parentNode == s) {
	//								for (; l != d.node;) l = i(l);
	//								var p = a && null != n && n <= u && d.lineNumber;
	//								d.changes && (f(d.changes, "gutter") > -1 && (p = !1), Je(e, d, u, r)), p && (t(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(I(e.options, u)))), l = d.node.nextSibling
	//							} else {
	//								var m = rt(e, d, u, r);
	//								s.insertBefore(m, l)
	//							}
	//							u += d.size
	//						}
	//						for (; l;) l = i(l)
	//					}(e, r.updateLineNumbers, n.dims), h > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view,
	//					function(e) {
	//						if (e && e.activeElt && e.activeElt != a() && (e.activeElt.focus(), e.anchorNode && o(document.body, e.anchorNode) && o(document.body, e.focusNode))) {
	//							var t = window.getSelection(),
	//								n = document.createRange();
	//							n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
	//						}
	//					}(d), t(r.cursorDiv), t(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, u && (r.lastWrapHeight = n.wrapperHeight, r.lastWrapWidth = n.wrapperWidth, En(e, 400)), r.updateLineNumbers = null, !0
	//			}

	//			function Dn(e, t) {
	//				for (var n = t.viewport, r = !0;
	//					(r && e.options.lineWrapping && t.oldDisplayWidth != ft(e) || (n && null != n.top && (n = {
	//						top: Math.min(e.doc.height + ct(e.display) - dt(e), n.top)
	//					}), t.visible = nn(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && In(e, t); r = !1) {
	//					en(e);
	//					var i = mn(e);
	//					Gt(e), gn(e, i), Bn(e, i), t.force = !1
	//				}
	//				t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
	//			}

	//			function Hn(e, t) {
	//				var n = new Jo(e, t);
	//				if (In(e, n)) {
	//					en(e), Dn(e, n);
	//					var r = mn(e);
	//					Gt(e), gn(e, r), Bn(e, r), n.finish()
	//				}
	//			}

	//			function Wn(e) {
	//				var t = e.display.gutters.offsetWidth;
	//				e.display.sizer.style.marginLeft = t + "px"
	//			}

	//			function Bn(e, t) {
	//				e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + ht(e) + "px"
	//			}

	//			function Fn(e) {
	//				var n = e.display.gutters,
	//					i = e.options.gutters;
	//				t(n);
	//				for (var o = 0; o < i.length; ++o) {
	//					var a = i[o],
	//						s = n.appendChild(r("div", null, "CodeMirror-gutter " + a));
	//					"CodeMirror-linenumbers" == a && (e.display.lineGutter = s, s.style.width = (e.display.lineNumWidth || 1) + "px")
	//				}
	//				n.style.display = o ? "" : "none", Wn(e)
	//			}

	//			function Rn(e) {
	//				var t = f(e.gutters, "CodeMirror-linenumbers"); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
	//			}

	//			function Pn(e) {
	//				var t = e.wheelDeltaX,
	//					n = e.wheelDeltaY;
	//				return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
	//					x: t,
	//					y: n
	//				}
	//			}

	//			function zn(e) {
	//				var t = Pn(e);
	//				return t.x *= ea, t.y *= ea, t
	//			}

	//			function _n(e, t) {
	//				var n = Pn(t),
	//					r = n.x,
	//					i = n.y,
	//					o = e.display,
	//					a = o.scroller,
	//					s = a.scrollWidth > a.clientWidth,
	//					l = a.scrollHeight > a.clientHeight;
	//				if (r && s || i && l) {
	//					if (i && no && $i) e: for (var c = t.target, u = o.view; c != a; c = c.parentNode)
	//						for (var h = 0; h < u.length; h++)
	//							if (u[h].node == c) {
	//								e.display.currentWheelTarget = c;
	//								break e
	//							}
	//					if (r && !zi && !Ki && null != ea) return i && l && fn(e, Math.max(0, a.scrollTop + i * ea)), pn(e, Math.max(0, a.scrollLeft + r * ea)), (!i || i && l) && xe(t), void(o.wheelStartX = null);
	//					if (i && null != ea) {
	//						var f = i * ea,
	//							d = e.doc.scrollTop,
	//							p = d + o.wrapper.clientHeight;
	//						f < 0 ? d = Math.max(0, d + f - 50) : p = Math.min(e.doc.height, p + f + 50), Hn(e, {
	//							top: d,
	//							bottom: p
	//						})
	//					}
	//					Qo < 20 && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() {
	//						if (null != o.wheelStartX) {
	//							var e = a.scrollLeft - o.wheelStartX,
	//								t = a.scrollTop - o.wheelStartY,
	//								n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
	//							o.wheelStartX = o.wheelStartY = null, n && (ea = (ea * Qo + n) / (Qo + 1), ++Qo)
	//						}
	//					}, 200)) : (o.wheelDX += r, o.wheelDY += i))
	//				}
	//			}

	//			function jn(e, t) {
	//				var n = e[t];
	//				e.sort(function(e, t) {
	//					return H(e.from(), t.from())
	//				}), t = f(e, n);
	//				for (var r = 1; r < e.length; r++) {
	//					var i = e[r],
	//						o = e[r - 1];
	//					if (H(o.to(), i.from()) >= 0) {
	//						var a = R(o.from(), i.from()),
	//							s = F(o.to(), i.to()),
	//							l = o.empty() ? i.from() == i.head : o.from() == o.head;
	//						r <= t && --t, e.splice(--r, 2, new na(l ? s : a, l ? a : s))
	//					}
	//				}
	//				return new ta(e, t)
	//			}

	//			function qn(e, t) {
	//				return new ta([new na(e, t || e)], 0)
	//			}

	//			function Un(e) {
	//				return e.text ? D(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
	//			}

	//			function Gn(e, t) {
	//				if (H(e, t.from) < 0) return e;
	//				if (H(e, t.to) <= 0) return Un(t);
	//				var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
	//					r = e.ch;
	//				return e.line == t.to.line && (r += Un(t).ch - t.to.ch), D(n, r)
	//			}

	//			function $n(e, t) {
	//				for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
	//					var i = e.sel.ranges[r];
	//					n.push(new na(Gn(i.anchor, t), Gn(i.head, t)))
	//				}
	//				return jn(n, e.sel.primIndex)
	//			}

	//			function Vn(e, t, n) {
	//				return e.line == t.line ? D(n.line, e.ch - t.ch + n.ch) : D(n.line + (e.line - t.line), e.ch)
	//			}

	//			function Xn(e) {
	//				e.doc.mode = Ne(e.options, e.doc.modeOption), Kn(e)
	//			}

	//			function Kn(e) {
	//				e.doc.iter(function(e) {
	//					e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
	//				}), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, En(e, 100), e.state.modeGen++, e.curOp && Ln(e)
	//			}

	//			function Yn(e, t) {
	//				return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
	//			}

	//			function Zn(e, t, n, r) {
	//				function i(e) {
	//					return n ? n[e] : null
	//				}

	//				function o(e, n, i) {
	//					! function(e, t, n, r) {
	//						e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), V(e), X(e, n);
	//						var i = r ? r(e) : 1;
	//						i != e.height && N(e, i)
	//					}(e, n, i, r), Ye(e, "change", e, t)
	//				}

	//				function a(e, t) {
	//					for (var n = [], o = e; o < t; ++o) n.push(new _o(c[o], i(o), r));
	//					return n
	//				}
	//				var s = t.from,
	//					l = t.to,
	//					c = t.text,
	//					u = L(e, s.line),
	//					h = L(e, l.line),
	//					f = m(c),
	//					d = i(c.length - 1),
	//					p = l.line - s.line;
	//				if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);
	//				else if (Yn(e, t)) {
	//					var g = a(0, c.length - 1);
	//					o(h, h.text, d), p && e.remove(s.line, p), g.length && e.insert(s.line, g)
	//				} else if (u == h)
	//					if (1 == c.length) o(u, u.text.slice(0, s.ch) + f + u.text.slice(l.ch), d);
	//					else {
	//						var v = a(1, c.length - 1);
	//						v.push(new _o(f + u.text.slice(l.ch), d, r)), o(u, u.text.slice(0, s.ch) + c[0], i(0)), e.insert(s.line + 1, v)
	//					}
	//				else if (1 == c.length) o(u, u.text.slice(0, s.ch) + c[0] + h.text.slice(l.ch), i(0)), e.remove(s.line + 1, p);
	//				else {
	//					o(u, u.text.slice(0, s.ch) + c[0], i(0)), o(h, f + h.text.slice(l.ch), d);
	//					var y = a(1, c.length - 1);
	//					p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, y)
	//				}
	//				Ye(e, "change", e, t)
	//			}

	//			function Jn(e, t, n) {
	//				function r(e, i, o) {
	//					if (e.linked)
	//						for (var a = 0; a < e.linked.length; ++a) {
	//							var s = e.linked[a];
	//							if (s.doc != i) {
	//								var l = o && s.sharedHist;
	//								n && !l || (t(s.doc, l), r(s.doc, e, l))
	//							}
	//						}
	//				}
	//				r(e, null, !0)
	//			}

	//			function Qn(e, t) {
	//				if (t.cm) throw new Error("This document is already in use.");
	//				e.doc = t, t.cm = e, jt(e), Xn(e), er(e), e.options.lineWrapping || ce(e), e.options.mode = t.modeOption, Ln(e)
	//			}

	//			function er(e) {
	//				("rtl" == e.doc.direction ? s : co)(e.display.lineDiv, "CodeMirror-rtl")
	//			}

	//			function tr(e) {
	//				this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
	//			}

	//			function nr(e, t) {
	//				var n = {
	//					from: B(t.from),
	//					to: Un(t),
	//					text: T(e, t.from, t.to)
	//				};
	//				return sr(e, n, t.from.line, t.to.line + 1), Jn(e, function(e) {
	//					return sr(e, n, t.from.line, t.to.line + 1)
	//				}, !0), n
	//			}

	//			function rr(e) {
	//				for (; e.length;) {
	//					if (!m(e).ranges) break;
	//					e.pop()
	//				}
	//			}

	//			function ir(e, t, n, r) {
	//				var i = e.history;
	//				i.undone.length = 0;
	//				var o, a, s = +new Date;
	//				if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > s - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = function(e, t) {
	//						return t ? (rr(e.done), m(e.done)) : e.done.length && !m(e.done).ranges ? m(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), m(e.done)) : void 0
	//					}(i, i.lastOp == r))) a = m(o.changes), 0 == H(t.from, t.to) && 0 == H(t.from, a.to) ? a.to = Un(t) : o.changes.push(nr(e, t));
	//				else {
	//					var l = m(i.done);
	//					for (l && l.ranges || ar(e.sel, i.done), o = {
	//							changes: [nr(e, t)],
	//							generation: i.generation
	//						}, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
	//				}
	//				i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || pe(e, "historyAdded")
	//			}

	//			function or(e, t, n, r) {
	//				var i = e.history,
	//					o = r && r.origin;
	//				n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function(e, t, n, r) {
	//					var i = t.charAt(0);
	//					return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
	//				}(e, o, m(i.done), t)) ? i.done[i.done.length - 1] = t : ar(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && rr(i.undone)
	//			}

	//			function ar(e, t) {
	//				var n = m(t);
	//				n && n.ranges && n.equals(e) || t.push(e)
	//			}

	//			function sr(e, t, n, r) {
	//				var i = t["spans_" + e.id],
	//					o = 0;
	//				e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
	//					n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
	//				})
	//			}

	//			function lr(e) {
	//				if (!e) return null;
	//				for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
	//				return t ? t.length ? t : null : e
	//			}

	//			function cr(e, t) {
	//				var n = function(e, t) {
	//						var n = t["spans_" + e.id];
	//						if (!n) return null;
	//						for (var r = [], i = 0; i < t.text.length; ++i) r.push(lr(n[i]));
	//						return r
	//					}(e, t),
	//					r = G(e, t);
	//				if (!n) return r;
	//				if (!r) return n;
	//				for (var i = 0; i < n.length; ++i) {
	//					var o = n[i],
	//						a = r[i];
	//					if (o && a) e: for (var s = 0; s < a.length; ++s) {
	//						for (var l = a[s], c = 0; c < o.length; ++c)
	//							if (o[c].marker == l.marker) continue e;
	//						o.push(l)
	//					} else a && (n[i] = a)
	//				}
	//				return n
	//			}

	//			function ur(e, t, n) {
	//				for (var r = [], i = 0; i < e.length; ++i) {
	//					var o = e[i];
	//					if (o.ranges) r.push(n ? ta.prototype.deepCopy.call(o) : o);
	//					else {
	//						var a = o.changes,
	//							s = [];
	//						r.push({
	//							changes: s
	//						});
	//						for (var l = 0; l < a.length; ++l) {
	//							var c = a[l],
	//								u = void 0;
	//							if (s.push({
	//									from: c.from,
	//									to: c.to,
	//									text: c.text
	//								}), t)
	//								for (var h in c)(u = h.match(/^spans_(\d+)$/)) && f(t, Number(u[1])) > -1 && (m(s)[h] = c[h], delete c[h])
	//						}
	//					}
	//				}
	//				return r
	//			}

	//			function hr(e, t, n, r) {
	//				if (r) {
	//					var i = e.anchor;
	//					if (n) {
	//						var o = H(t, i) < 0;
	//						o != H(n, i) < 0 ? (i = t, t = n) : o != H(t, n) < 0 && (t = n)
	//					}
	//					return new na(i, t)
	//				}
	//				return new na(n || t, t)
	//			}

	//			function fr(e, t, n, r, i) {
	//				null == i && (i = e.cm && (e.cm.display.shift || e.extend)), vr(e, new ta([hr(e.sel.primary(), t, n, i)], 0), r)
	//			}

	//			function dr(e, t, n) {
	//				for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = hr(e.sel.ranges[o], t[o], null, i);
	//				vr(e, jn(r, e.sel.primIndex), n)
	//			}

	//			function pr(e, t, n, r) {
	//				var i = e.sel.ranges.slice(0);
	//				i[t] = n, vr(e, jn(i, e.sel.primIndex), r)
	//			}

	//			function mr(e, t, n, r) {
	//				vr(e, qn(t, n), r)
	//			}

	//			function gr(e, t, n) {
	//				var r = e.history.done,
	//					i = m(r);
	//				i && i.ranges ? (r[r.length - 1] = t, yr(e, t, n)) : vr(e, t, n)
	//			}

	//			function vr(e, t, n) {
	//				yr(e, t, n), or(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
	//			}

	//			function yr(e, t, n) {
	//				(ve(e, "beforeSelectionChange") || e.cm && ve(e.cm, "beforeSelectionChange")) && (t = function(e, t, n) {
	//					var r = {
	//						ranges: t.ranges,
	//						update: function(t) {
	//							this.ranges = [];
	//							for (var n = 0; n < t.length; n++) this.ranges[n] = new na(z(e, t[n].anchor), z(e, t[n].head))
	//						},
	//						origin: n && n.origin
	//					};
	//					return pe(e, "beforeSelectionChange", e, r), e.cm && pe(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? jn(r.ranges, r.ranges.length - 1) : t
	//				}(e, t, n));
	//				xr(e, wr(e, t, n && n.bias || (H(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), n && !1 === n.scroll || !e.cm || ln(e.cm)
	//			}

	//			function xr(e, t) {
	//				t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, ge(e.cm)), Ye(e, "cursorActivity", e))
	//			}

	//			function br(e) {
	//				xr(e, wr(e, e.sel, null, !1))
	//			}

	//			function wr(e, t, n, r) {
	//				for (var i, o = 0; o < t.ranges.length; o++) {
	//					var a = t.ranges[o],
	//						s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
	//						l = Cr(e, a.anchor, s && s.anchor, n, r),
	//						c = Cr(e, a.head, s && s.head, n, r);
	//					(i || l != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new na(l, c))
	//				}
	//				return i ? jn(i, t.primIndex) : t
	//			}

	//			function kr(e, t, n, r, i) {
	//				var o = L(e, t.line);
	//				if (o.markedSpans)
	//					for (var a = 0; a < o.markedSpans.length; ++a) {
	//						var s = o.markedSpans[a],
	//							l = s.marker;
	//						if ((null == s.from || (l.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (l.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
	//							if (i && (pe(l, "beforeCursorEnter"), l.explicitlyCleared)) {
	//								if (o.markedSpans) {
	//									--a;
	//									continue
	//								}
	//								break
	//							}
	//							if (!l.atomic) continue;
	//							if (n) {
	//								var c = l.find(r < 0 ? 1 : -1),
	//									u = void 0;
	//								if ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = Sr(e, c, -r, c && c.line == t.line ? o : null)), c && c.line == t.line && (u = H(c, n)) && (r < 0 ? u < 0 : u > 0)) return kr(e, c, t, r, i)
	//							}
	//							var h = l.find(r < 0 ? -1 : 1);
	//							return (r < 0 ? l.inclusiveLeft : l.inclusiveRight) && (h = Sr(e, h, r, h.line == t.line ? o : null)), h ? kr(e, h, t, r, i) : null
	//						}
	//					}
	//				return t
	//			}

	//			function Cr(e, t, n, r, i) {
	//				var o = r || 1,
	//					a = kr(e, t, n, o, i) || !i && kr(e, t, n, o, !0) || kr(e, t, n, -o, i) || !i && kr(e, t, n, -o, !0);
	//				return a || (e.cantEdit = !0, D(e.first, 0))
	//			}

	//			function Sr(e, t, n, r) {
	//				return n < 0 && 0 == t.ch ? t.line > e.first ? z(e, D(t.line - 1)) : null : n > 0 && t.ch == (r || L(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? D(t.line + 1, 0) : null : new D(t.line, t.ch + n)
	//			}

	//			function Lr(e) {
	//				e.setSelection(D(e.firstLine(), 0), D(e.lastLine()), vo)
	//			}

	//			function Tr(e, t, n) {
	//				var r = {
	//					canceled: !1,
	//					from: t.from,
	//					to: t.to,
	//					text: t.text,
	//					origin: t.origin,
	//					cancel: function() {
	//						return r.canceled = !0
	//					}
	//				};
	//				return n && (r.update = function(t, n, i, o) {
	//					t && (r.from = z(e, t)), n && (r.to = z(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o)
	//				}), pe(e, "beforeChange", e, r), e.cm && pe(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
	//					from: r.from,
	//					to: r.to,
	//					text: r.text,
	//					origin: r.origin
	//				}
	//			}

	//			function Mr(e, t, n) {
	//				if (e.cm) {
	//					if (!e.cm.curOp) return kn(e.cm, Mr)(e, t, n);
	//					if (e.cm.state.suppressEdits) return
	//				}
	//				if (!(ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange")) || (t = Tr(e, t, !0))) {
	//					var r = Co && !n && function(e, t, n) {
	//						var r = null;
	//						if (e.iter(t.line, n.line + 1, function(e) {
	//								if (e.markedSpans)
	//									for (var t = 0; t < e.markedSpans.length; ++t) {
	//										var n = e.markedSpans[t].marker;
	//										!n.readOnly || r && -1 != f(r, n) || (r || (r = [])).push(n)
	//									}
	//							}), !r) return null;
	//						for (var i = [{
	//								from: t,
	//								to: n
	//							}], o = 0; o < r.length; ++o)
	//							for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
	//								var c = i[l];
	//								if (!(H(c.to, s.from) < 0 || H(c.from, s.to) > 0)) {
	//									var u = [l, 1],
	//										h = H(c.from, s.from),
	//										d = H(c.to, s.to);
	//									(h < 0 || !a.inclusiveLeft && !h) && u.push({
	//										from: c.from,
	//										to: s.from
	//									}), (d > 0 || !a.inclusiveRight && !d) && u.push({
	//										from: s.to,
	//										to: c.to
	//									}), i.splice.apply(i, u), l += u.length - 3
	//								}
	//							}
	//						return i
	//					}(e, t.from, t.to);
	//					if (r)
	//						for (var i = r.length - 1; i >= 0; --i) Nr(e, {
	//							from: r[i].from,
	//							to: r[i].to,
	//							text: i ? [""] : t.text,
	//							origin: t.origin
	//						});
	//					else Nr(e, t)
	//				}
	//			}

	//			function Nr(e, t) {
	//				if (1 != t.text.length || "" != t.text[0] || 0 != H(t.from, t.to)) {
	//					var n = $n(e, t);
	//					ir(e, t, n, e.cm ? e.cm.curOp.id : NaN), Or(e, t, n, G(e, t));
	//					var r = [];
	//					Jn(e, function(e, n) {
	//						n || -1 != f(r, e.history) || (Wr(e.history, t), r.push(e.history)), Or(e, t, null, G(e, t))
	//					})
	//				}
	//			}

	//			function Ar(e, t, n) {
	//				if (!e.cm || !e.cm.state.suppressEdits || n) {
	//					for (var r, i = e.history, o = e.sel, a = "undo" == t ? i.done : i.undone, s = "undo" == t ? i.undone : i.done, l = 0; l < a.length && (r = a[l], n ? !r.ranges || r.equals(e.sel) : r.ranges); l++);
	//					if (l != a.length) {
	//						for (i.lastOrigin = i.lastSelOrigin = null;
	//							(r = a.pop()).ranges;) {
	//							if (ar(r, s), n && !r.equals(e.sel)) return void vr(e, r, {
	//								clearRedo: !1
	//							});
	//							o = r
	//						}
	//						var c = [];
	//						ar(o, s), s.push({
	//							changes: c,
	//							generation: i.generation
	//						}), i.generation = r.generation || ++i.maxGeneration;
	//						for (var u = ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange"), h = function(n) {
	//								var i = r.changes[n];
	//								if (i.origin = t, u && !Tr(e, i, !1)) return a.length = 0, {};
	//								c.push(nr(e, i));
	//								var o = n ? $n(e, i) : m(a);
	//								Or(e, i, o, cr(e, i)), !n && e.cm && e.cm.scrollIntoView({
	//									from: i.from,
	//									to: Un(i)
	//								});
	//								var s = [];
	//								Jn(e, function(e, t) {
	//									t || -1 != f(s, e.history) || (Wr(e.history, i), s.push(e.history)), Or(e, i, null, cr(e, i))
	//								})
	//							}, d = r.changes.length - 1; d >= 0; --d) {
	//							var p = h(d);
	//							if (p) return p.v
	//						}
	//					}
	//				}
	//			}

	//			function Er(e, t) {
	//				if (0 != t && (e.first += t, e.sel = new ta(g(e.sel.ranges, function(e) {
	//						return new na(D(e.anchor.line + t, e.anchor.ch), D(e.head.line + t, e.head.ch))
	//					}), e.sel.primIndex), e.cm)) {
	//					Ln(e.cm, e.first, e.first - t, t);
	//					for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) Tn(e.cm, r, "gutter")
	//				}
	//			}

	//			function Or(e, t, n, r) {
	//				if (e.cm && !e.cm.curOp) return kn(e.cm, Or)(e, t, n, r);
	//				if (t.to.line < e.first) Er(e, t.text.length - 1 - (t.to.line - t.from.line));
	//				else if (!(t.from.line > e.lastLine())) {
	//					if (t.from.line < e.first) {
	//						var i = t.text.length - 1 - (e.first - t.from.line);
	//						Er(e, i), t = {
	//							from: D(e.first, 0),
	//							to: D(t.to.line + i, t.to.ch),
	//							text: [m(t.text)],
	//							origin: t.origin
	//						}
	//					}
	//					var o = e.lastLine();
	//					t.to.line > o && (t = {
	//						from: t.from,
	//						to: D(o, L(e, o).text.length),
	//						text: [t.text[0]],
	//						origin: t.origin
	//					}), t.removed = T(e, t.from, t.to), n || (n = $n(e, t)), e.cm ? function(e, t, n) {
	//						var r = e.doc,
	//							i = e.display,
	//							o = t.from,
	//							a = t.to,
	//							s = !1,
	//							l = o.line;
	//						e.options.lineWrapping || (l = A(ne(L(r, o.line))), r.iter(l, a.line + 1, function(e) {
	//							if (e == i.maxLine) return s = !0, !0
	//						}));
	//						r.sel.contains(t.from, t.to) > -1 && ge(e);
	//						Zn(r, t, n, _t(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function(e) {
	//							var t = le(e);
	//							t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
	//						}), s && (e.curOp.updateMaxLine = !0));
	//						(function(e, t) {
	//							if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
	//								for (var n = e.first, r = t - 1; r > n; r--) {
	//									var i = L(e, r).stateAfter;
	//									if (i && (!(i instanceof Ro) || r + i.lookAhead < t)) {
	//										n = r + 1;
	//										break
	//									}
	//								}
	//								e.highlightFrontier = Math.min(e.highlightFrontier, n)
	//							}
	//						})(r, o.line), En(e, 400);
	//						var c = t.text.length - (a.line - o.line) - 1;
	//						t.full ? Ln(e) : o.line != a.line || 1 != t.text.length || Yn(e.doc, t) ? Ln(e, o.line, a.line + 1, c) : Tn(e, o.line, "text");
	//						var u = ve(e, "changes"),
	//							h = ve(e, "change");
	//						if (h || u) {
	//							var f = {
	//								from: o,
	//								to: a,
	//								text: t.text,
	//								removed: t.removed,
	//								origin: t.origin
	//							};
	//							h && Ye(e, "change", e, f), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
	//						}
	//						e.display.selForContextMenu = null
	//					}(e.cm, t, r) : Zn(e, t, r), yr(e, n, vo)
	//				}
	//			}

	//			function Ir(e, t, n, r, i) {
	//				if (r || (r = n), H(r, n) < 0) {
	//					var o;
	//					n = (o = [r, n])[0], r = o[1]
	//				}
	//				"string" == typeof t && (t = e.splitLines(t)), Mr(e, {
	//					from: n,
	//					to: r,
	//					text: t,
	//					origin: i
	//				})
	//			}

	//			function Dr(e, t, n, r) {
	//				n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
	//			}

	//			function Hr(e, t, n, r) {
	//				for (var i = 0; i < e.length; ++i) {
	//					var o = e[i],
	//						a = !0;
	//					if (o.ranges) {
	//						o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
	//						for (var s = 0; s < o.ranges.length; s++) Dr(o.ranges[s].anchor, t, n, r), Dr(o.ranges[s].head, t, n, r)
	//					} else {
	//						for (var l = 0; l < o.changes.length; ++l) {
	//							var c = o.changes[l];
	//							if (n < c.from.line) c.from = D(c.from.line + r, c.from.ch), c.to = D(c.to.line + r, c.to.ch);
	//							else if (t <= c.to.line) {
	//								a = !1;
	//								break
	//							}
	//						}
	//						a || (e.splice(0, i + 1), i = 0)
	//					}
	//				}
	//			}

	//			function Wr(e, t) {
	//				var n = t.from.line,
	//					r = t.to.line,
	//					i = t.text.length - (r - n) - 1;
	//				Hr(e.done, n, r, i), Hr(e.undone, n, r, i)
	//			}

	//			function Br(e, t, n, r) {
	//				var i = t,
	//					o = t;
	//				return "number" == typeof t ? o = L(e, P(e, t)) : i = A(t), null == i ? null : (r(o, i) && e.cm && Tn(e.cm, i, n), o)
	//			}

	//			function Fr(e) {
	//				this.lines = e, this.parent = null;
	//				for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
	//				this.height = t
	//			}

	//			function Rr(e) {
	//				this.children = e;
	//				for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
	//					var i = e[r];
	//					t += i.chunkSize(), n += i.height, i.parent = this
	//				}
	//				this.size = t, this.height = n, this.parent = null
	//			}

	//			function Pr(e, t, n) {
	//				se(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && sn(e, n)
	//			}

	//			function zr(e, t, n, r, o) {
	//				if (r && r.shared) return function(e, t, n, r, i) {
	//					(r = u(r)).shared = !1;
	//					var o = [zr(e, t, n, r, i)],
	//						a = o[0],
	//						s = r.widgetNode;
	//					return Jn(e, function(e) {
	//						s && (r.widgetNode = s.cloneNode(!0)), o.push(zr(e, z(e, t), z(e, n), r, i));
	//						for (var l = 0; l < e.linked.length; ++l)
	//							if (e.linked[l].isParent) return;
	//						a = m(o)
	//					}), new aa(o, a)
	//				}(e, t, n, r, o);
	//				if (e.cm && !e.cm.curOp) return kn(e.cm, zr)(e, t, n, r, o);
	//				var a = new oa(e, o),
	//					s = H(t, n);
	//				if (r && u(r, a, !1), s > 0 || 0 == s && !1 !== a.clearWhenEmpty) return a;
	//				if (a.replacedWith && (a.collapsed = !0, a.widgetNode = i("span", [a.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) {
	//					if (te(e, t.line, t, n, a) || t.line != n.line && te(e, n.line, t, n, a)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
	//					So = !0
	//				}
	//				a.addToHistory && ir(e, {
	//					from: t,
	//					to: n,
	//					origin: "markText"
	//				}, e.sel, NaN);
	//				var l, c = t.line,
	//					h = e.cm;
	//				if (e.iter(c, n.line + 1, function(e) {
	//						h && a.collapsed && !h.options.lineWrapping && ne(e) == h.display.maxLine && (l = !0), a.collapsed && c != t.line && N(e, 0),
	//							function(e, t) {
	//								e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
	//							}(e, new j(a, c == t.line ? t.ch : null, c == n.line ? n.ch : null)), ++c
	//					}), a.collapsed && e.iter(t.line, n.line + 1, function(t) {
	//						oe(e, t) && N(t, 0)
	//					}), a.clearOnEnter && No(a, "beforeCursorEnter", function() {
	//						return a.clear()
	//					}), a.readOnly && (Co = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++ia, a.atomic = !0), h) {
	//					if (l && (h.curOp.updateMaxLine = !0), a.collapsed) Ln(h, t.line, n.line + 1);
	//					else if (a.className || a.title || a.startStyle || a.endStyle || a.css)
	//						for (var f = t.line; f <= n.line; f++) Tn(h, f, "text");
	//					a.atomic && br(h.doc), Ye(h, "markerAdded", h, a)
	//				}
	//				return a
	//			}

	//			function _r(e) {
	//				return e.findMarks(D(e.first, 0), e.clipPos(D(e.lastLine())), function(e) {
	//					return e.parent
	//				})
	//			}

	//			function jr(e) {
	//				for (var t = function(t) {
	//						var n = e[t],
	//							r = [n.primary.doc];
	//						Jn(n.primary.doc, function(e) {
	//							return r.push(e)
	//						});
	//						for (var i = 0; i < n.markers.length; i++) {
	//							var o = n.markers[i]; - 1 == f(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
	//						}
	//					}, n = 0; n < e.length; n++) t(n)
	//			}

	//			function qr(e) {
	//				var t = this;
	//				if (Ur(t), !me(t, e) && !st(t.display, e)) {
	//					xe(e), Ui && (ca = +new Date);
	//					var n = qt(t, e, !0),
	//						r = e.dataTransfer.files;
	//					if (n && !t.isReadOnly())
	//						if (r && r.length && window.FileReader && window.File)
	//							for (var i = r.length, o = Array(i), a = 0, s = function(e, r) {
	//									if (!t.options.allowDropFileTypes || -1 != f(t.options.allowDropFileTypes, e.type)) {
	//										var s = new FileReader;
	//										s.onload = kn(t, function() {
	//											var e = s.result;
	//											if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) {
	//												var l = {
	//													from: n = z(t.doc, n),
	//													to: n,
	//													text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
	//													origin: "paste"
	//												};
	//												Mr(t.doc, l), gr(t.doc, qn(n, Un(l)))
	//											}
	//										}), s.readAsText(e)
	//									}
	//								}, l = 0; l < i; ++l) s(r[l], l);
	//						else {
	//							if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function() {
	//								return t.display.input.focus()
	//							}, 20);
	//							try {
	//								var c = e.dataTransfer.getData("Text");
	//								if (c) {
	//									var u;
	//									if (t.state.draggingText && !t.state.draggingText.copy && (u = t.listSelections()), yr(t.doc, qn(n, n)), u)
	//										for (var h = 0; h < u.length; ++h) Ir(t.doc, "", u[h].anchor, u[h].head, "drag");
	//									t.replaceSelection(c, "around", "paste"), t.display.input.focus()
	//								}
	//							} catch (e) {}
	//						}
	//				}
	//			}

	//			function Ur(e) {
	//				e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
	//			}

	//			function Gr(e) {
	//				if (document.getElementsByClassName)
	//					for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
	//						var r = t[n].CodeMirror;
	//						r && e(r)
	//					}
	//			}

	//			function $r() {
	//				ua || (! function() {
	//					var e;
	//					No(window, "resize", function() {
	//						null == e && (e = setTimeout(function() {
	//							e = null, Gr(Vr)
	//						}, 100))
	//					}), No(window, "blur", function() {
	//						return Gr(Qt)
	//					})
	//				}(), ua = !0)
	//			}

	//			function Vr(e) {
	//				var t = e.display;
	//				t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize())
	//			}

	//			function Xr(e) {
	//				var t = e.split(/-(?!$)/);
	//				e = t[t.length - 1];
	//				for (var n, r, i, o, a = 0; a < t.length - 1; a++) {
	//					var s = t[a];
	//					if (/^(cmd|meta|m)$/i.test(s)) o = !0;
	//					else if (/^a(lt)?$/i.test(s)) n = !0;
	//					else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
	//					else {
	//						if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
	//						i = !0
	//					}
	//				}
	//				return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), i && (e = "Shift-" + e), e
	//			}

	//			function Kr(e) {
	//				var t = {};
	//				for (var n in e)
	//					if (e.hasOwnProperty(n)) {
	//						var r = e[n];
	//						if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
	//						if ("..." == r) {
	//							delete e[n];
	//							continue
	//						}
	//						for (var i = g(n.split(" "), Xr), o = 0; o < i.length; o++) {
	//							var a = void 0,
	//								s = void 0;
	//							o == i.length - 1 ? (s = i.join(" "), a = r) : (s = i.slice(0, o + 1).join(" "), a = "...");
	//							var l = t[s];
	//							if (l) {
	//								if (l != a) throw new Error("Inconsistent bindings for " + s)
	//							} else t[s] = a
	//						}
	//						delete e[n]
	//					}
	//				for (var c in t) e[c] = t[c];
	//				return e
	//			}

	//			function Yr(e, t, n, r) {
	//				var i = (t = ei(t)).call ? t.call(e, r) : t[e];
	//				if (!1 === i) return "nothing";
	//				if ("..." === i) return "multi";
	//				if (null != i && n(i)) return "handled";
	//				if (t.fallthrough) {
	//					if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Yr(e, t.fallthrough, n, r);
	//					for (var o = 0; o < t.fallthrough.length; o++) {
	//						var a = Yr(e, t.fallthrough[o], n, r);
	//						if (a) return a
	//					}
	//				}
	//			}

	//			function Zr(e) {
	//				var t = "string" == typeof e ? e : ha[e.keyCode];
	//				return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
	//			}

	//			function Jr(e, t, n) {
	//				var r = e;
	//				return t.altKey && "Alt" != r && (e = "Alt-" + e), (so ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (so ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e
	//			}

	//			function Qr(e, t) {
	//				if (Ki && 34 == e.keyCode && e.char) return !1;
	//				var n = ha[e.keyCode];
	//				return null != n && !e.altGraphKey && Jr(n, e, t)
	//			}

	//			function ei(e) {
	//				return "string" == typeof e ? ma[e] : e
	//			}

	//			function ti(e, t) {
	//				for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
	//					for (var o = t(n[i]); r.length && H(o.from, m(r).to) <= 0;) {
	//						var a = r.pop();
	//						if (H(a.from, o.from) < 0) {
	//							o.from = a.from;
	//							break
	//						}
	//					}
	//					r.push(o)
	//				}
	//				wn(e, function() {
	//					for (var t = r.length - 1; t >= 0; t--) Ir(e.doc, "", r[t].from, r[t].to, "+delete");
	//					ln(e)
	//				})
	//			}

	//			function ni(e, t, n) {
	//				var r = C(e.text, t + n, n);
	//				return r < 0 || r > e.text.length ? null : r
	//			}

	//			function ri(e, t, n) {
	//				var r = ni(e, t.ch, n);
	//				return null == r ? null : new D(t.line, r, n < 0 ? "after" : "before")
	//			}

	//			function ii(e, t, n, r, i) {
	//				if (e) {
	//					var o = he(n, t.doc.direction);
	//					if (o) {
	//						var a, s = i < 0 ? m(o) : o[0],
	//							l = i < 0 == (1 == s.level) ? "after" : "before";
	//						if (s.level > 0 || "rtl" == t.doc.direction) {
	//							var c = vt(t, n);
	//							a = i < 0 ? n.text.length - 1 : 0;
	//							var u = yt(t, c, a).top;
	//							a = S(function(e) {
	//								return yt(t, c, e).top == u
	//							}, i < 0 == (1 == s.level) ? s.from : s.to - 1, a), "before" == l && (a = ni(n, a, 1))
	//						} else a = i < 0 ? s.to : s.from;
	//						return new D(r, a, l)
	//					}
	//				}
	//				return new D(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
	//			}

	//			function oi(e, t) {
	//				var n = L(e.doc, t),
	//					r = ne(n);
	//				return r != n && (t = A(r)), ii(!0, e, r, t, 1)
	//			}

	//			function ai(e, t) {
	//				var n = L(e.doc, t),
	//					r = function(e) {
	//						for (var t; t = ee(e);) e = t.find(1, !0).line;
	//						return e
	//					}(n);
	//				return r != n && (t = A(r)), ii(!0, e, n, t, -1)
	//			}

	//			function si(e, t) {
	//				var n = oi(e, t.line),
	//					r = L(e.doc, n.line),
	//					i = he(r, e.doc.direction);
	//				if (!i || 0 == i[0].level) {
	//					var o = Math.max(0, r.text.search(/\S/)),
	//						a = t.line == n.line && t.ch <= o && t.ch;
	//					return D(n.line, a ? 0 : o, n.sticky)
	//				}
	//				return n
	//			}

	//			function li(e, t, n) {
	//				if ("string" == typeof t && !(t = ga[t])) return !1;
	//				e.display.input.ensurePolled();
	//				var r = e.display.shift,
	//					i = !1;
	//				try {
	//					e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != go
	//				} finally {
	//					e.display.shift = r, e.state.suppressEdits = !1
	//				}
	//				return i
	//			}

	//			function ci(e, t, n, r) {
	//				var i = e.state.keySeq;
	//				if (i) {
	//					if (Zr(t)) return "handled";
	//					if (/\'$/.test(t) ? e.state.keySeq = null : va.set(50, function() {
	//							e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
	//						}), ui(e, i + " " + t, n, r)) return !0
	//				}
	//				return ui(e, t, n, r)
	//			}

	//			function ui(e, t, n, r) {
	//				var i = function(e, t, n) {
	//					for (var r = 0; r < e.state.keyMaps.length; r++) {
	//						var i = Yr(t, e.state.keyMaps[r], n, e);
	//						if (i) return i
	//					}
	//					return e.options.extraKeys && Yr(t, e.options.extraKeys, n, e) || Yr(t, e.options.keyMap, n, e)
	//				}(e, t, r);
	//				return "multi" == i && (e.state.keySeq = t), "handled" == i && Ye(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (xe(n), Kt(e)), !!i
	//			}

	//			function hi(e, t) {
	//				var n = Qr(t, !0);
	//				return !!n && (t.shiftKey && !e.state.keySeq ? ci(e, "Shift-" + n, t, function(t) {
	//					return li(e, t, !0)
	//				}) || ci(e, n, t, function(t) {
	//					if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return li(e, t)
	//				}) : ci(e, n, t, function(t) {
	//					return li(e, t)
	//				}))
	//			}

	//			function fi(e) {
	//				if (this.curOp.focus = a(), !me(this, e)) {
	//					Ui && Gi < 11 && 27 == e.keyCode && (e.returnValue = !1);
	//					var t = e.keyCode;
	//					this.display.shift = 16 == t || e.shiftKey;
	//					var n = hi(this, e);
	//					Ki && (ya = n ? t : null, !n && 88 == t && !Io && (no ? e.metaKey : e.ctrlKey) && this.replaceSelection("", null, "cut")), 18 != t || /\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className) || function(e) {
	//						function t(e) {
	//							18 != e.keyCode && e.altKey || (co(n, "CodeMirror-crosshair"), de(document, "keyup", t), de(document, "mouseover", t))
	//						}
	//						var n = e.display.lineDiv;
	//						s(n, "CodeMirror-crosshair");
	//						No(document, "keyup", t), No(document, "mouseover", t)
	//					}(this)
	//				}
	//			}

	//			function di(e) {
	//				16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e)
	//			}

	//			function pi(e) {
	//				if (!(st(this.display, e) || me(this, e) || e.ctrlKey && !e.altKey || no && e.metaKey)) {
	//					var t = e.keyCode,
	//						n = e.charCode;
	//					if (Ki && t == ya) return ya = null, void xe(e);
	//					if (!Ki || e.which && !(e.which < 10) || !hi(this, e)) {
	//						var r = String.fromCharCode(null == n ? t : n);
	//						"\b" != r && (function(e, t, n) {
	//							return ci(e, "'" + n + "'", t, function(t) {
	//								return li(e, t, !0)
	//							})
	//						}(this, e, r) || this.display.input.onKeyPress(e))
	//					}
	//				}
	//			}

	//			function mi(e) {
	//				var t = this.display;
	//				if (!(me(this, e) || t.activeTouch && t.input.supportsTouch()))
	//					if (t.input.ensurePolled(), t.shift = e.shiftKey, st(t, e)) $i || (t.scroller.draggable = !1, setTimeout(function() {
	//						return t.scroller.draggable = !0
	//					}, 100));
	//					else if (!yi(this, e)) {
	//					var n = qt(this, e),
	//						r = Se(e),
	//						i = n ? function(e, t) {
	//							var n = +new Date;
	//							return wa && wa.compare(n, e, t) ? (ba = wa = null, "triple") : ba && ba.compare(n, e, t) ? (wa = new xa(n, e, t), ba = null, "double") : (ba = new xa(n, e, t), wa = null, "single")
	//						}(n, r) : "single";
	//					window.focus(), 1 == r && this.state.selectingText && this.state.selectingText(e), n && function(e, t, n, r, i) {
	//						var o = "Click";
	//						"double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o);
	//						return o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, ci(e, Jr(o, i), i, function(t) {
	//							if ("string" == typeof t && (t = ga[t]), !t) return !1;
	//							var r = !1;
	//							try {
	//								e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != go
	//							} finally {
	//								e.state.suppressEdits = !1
	//							}
	//							return r
	//						})
	//					}(this, r, n, i, e) || (1 == r ? n ? function(e, t, n, r) {
	//						Ui ? setTimeout(c(Yt, e), 0) : e.curOp.focus = a();
	//						var i, o = function(e, t, n) {
	//								var r = e.getOption("configureMouse"),
	//									i = r ? r(e, t, n) : {};
	//								if (null == i.unit) {
	//									var o = ro ? n.shiftKey && n.metaKey : n.altKey;
	//									i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
	//								}(null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey);
	//								null == i.addNew && (i.addNew = no ? n.metaKey : n.ctrlKey);
	//								null == i.moveOnDrag && (i.moveOnDrag = !(no ? n.altKey : n.ctrlKey));
	//								return i
	//							}(e, n, r),
	//							s = e.doc.sel;
	//						e.options.dragDrop && Ao && !e.isReadOnly() && "single" == n && (i = s.contains(t)) > -1 && (H((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) && (H(i.to(), t) > 0 || t.xRel < 0) ? function(e, t, n, r) {
	//							var i = e.display,
	//								o = !1,
	//								a = kn(e, function(t) {
	//									$i && (i.scroller.draggable = !1), e.state.draggingText = !1, de(document, "mouseup", a), de(document, "mousemove", s), de(i.scroller, "dragstart", l), de(i.scroller, "drop", a), o || (xe(t), r.addNew || fr(e.doc, n, null, null, r.extend), $i || Ui && 9 == Gi ? setTimeout(function() {
	//										document.body.focus(), i.input.focus()
	//									}, 20) : i.input.focus())
	//								}),
	//								s = function(e) {
	//									o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
	//								},
	//								l = function() {
	//									return o = !0
	//								};
	//							$i && (i.scroller.draggable = !0);
	//							e.state.draggingText = a, a.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop();
	//							No(document, "mouseup", a), No(document, "mousemove", s), No(i.scroller, "dragstart", l), No(i.scroller, "drop", a), Zt(e), setTimeout(function() {
	//								return i.input.focus()
	//							}, 20)
	//						}(e, r, t, o) : function(e, t, n, r) {
	//							function i(t) {
	//								if (0 != H(v, t))
	//									if (v = t, "rectangle" == r.unit) {
	//										for (var i = [], o = e.options.tabSize, a = h(L(c, n.line).text, n.ch, o), s = h(L(c, t.line).text, t.ch, o), l = Math.min(a, s), m = Math.max(a, s), g = Math.min(n.line, t.line), y = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= y; g++) {
	//											var x = L(c, g).text,
	//												b = d(x, l, o);
	//											l == m ? i.push(new na(D(g, b), D(g, b))) : x.length > b && i.push(new na(D(g, b), D(g, d(x, m, o))))
	//										}
	//										i.length || i.push(new na(n, n)), vr(c, jn(p.ranges.slice(0, f).concat(i), f), {
	//											origin: "*mouse",
	//											scroll: !1
	//										}), e.scrollIntoView(t)
	//									} else {
	//										var w, k = u,
	//											C = gi(e, t, r.unit),
	//											S = k.anchor;
	//										H(C.anchor, S) > 0 ? (w = C.head, S = R(k.from(), C.anchor)) : (w = C.anchor, S = F(k.to(), C.head));
	//										var T = p.ranges.slice(0);
	//										T[f] = function(e, t) {
	//											var n = t.anchor,
	//												r = t.head,
	//												i = L(e.doc, n.line);
	//											if (0 == H(n, r) && n.sticky == r.sticky) return t;
	//											var o = he(i);
	//											if (!o) return t;
	//											var a = ue(o, n.ch, n.sticky),
	//												s = o[a];
	//											if (s.from != n.ch && s.to != n.ch) return t;
	//											var l = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
	//											if (0 == l || l == o.length) return t;
	//											var c;
	//											if (r.line != n.line) c = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
	//											else {
	//												var u = ue(o, r.ch, r.sticky),
	//													h = u - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
	//												c = u == l - 1 || u == l ? h < 0 : h > 0
	//											}
	//											var f = o[l + (c ? -1 : 0)],
	//												d = c == (1 == f.level),
	//												p = d ? f.from : f.to,
	//												m = d ? "after" : "before";
	//											return n.ch == p && n.sticky == m ? t : new na(new D(n.line, p, m), r)
	//										}(e, new na(z(c, S), w)), vr(c, jn(T, f), yo)
	//									}
	//							}

	//							function o(t) {
	//								var n = ++x,
	//									s = qt(e, t, !0, "rectangle" == r.unit);
	//								if (s)
	//									if (0 != H(s, v)) {
	//										e.curOp.focus = a(), i(s);
	//										var u = nn(l, c);
	//										(s.line >= u.to || s.line < u.from) && setTimeout(kn(e, function() {
	//											x == n && o(t)
	//										}), 150)
	//									} else {
	//										var h = t.clientY < y.top ? -20 : t.clientY > y.bottom ? 20 : 0;
	//										h && setTimeout(kn(e, function() {
	//											x == n && (l.scroller.scrollTop += h, o(t))
	//										}), 50)
	//									}
	//							}

	//							function s(t) {
	//								e.state.selectingText = !1, x = 1 / 0, xe(t), l.input.focus(), de(document, "mousemove", b), de(document, "mouseup", w), c.history.lastSelOrigin = null
	//							}
	//							var l = e.display,
	//								c = e.doc;
	//							xe(t);
	//							var u, f, p = c.sel,
	//								m = p.ranges;
	//							r.addNew && !r.extend ? (f = c.sel.contains(n), u = f > -1 ? m[f] : new na(n, n)) : (u = c.sel.primary(), f = c.sel.primIndex);
	//							if ("rectangle" == r.unit) r.addNew || (u = new na(n, n)), n = qt(e, t, !0, !0), f = -1;
	//							else {
	//								var g = gi(e, n, r.unit);
	//								u = r.extend ? hr(u, g.anchor, g.head, r.extend) : g
	//							}
	//							r.addNew ? -1 == f ? (f = m.length, vr(c, jn(m.concat([u]), f), {
	//								scroll: !1,
	//								origin: "*mouse"
	//							})) : m.length > 1 && m[f].empty() && "char" == r.unit && !r.extend ? (vr(c, jn(m.slice(0, f).concat(m.slice(f + 1)), 0), {
	//								scroll: !1,
	//								origin: "*mouse"
	//							}), p = c.sel) : pr(c, f, u, yo) : (f = 0, vr(c, new ta([u], 0), yo), p = c.sel);
	//							var v = n;
	//							var y = l.wrapper.getBoundingClientRect(),
	//								x = 0;
	//							var b = kn(e, function(e) {
	//									Se(e) ? o(e) : s(e)
	//								}),
	//								w = kn(e, s);
	//							e.state.selectingText = w, No(document, "mousemove", b), No(document, "mouseup", w)
	//						}(e, r, t, o)
	//					}(this, n, i, e) : Ce(e) == t.scroller && xe(e) : 2 == r ? (n && fr(this.doc, n), setTimeout(function() {
	//						return t.input.focus()
	//					}, 20)) : 3 == r && (lo ? xi(this, e) : Zt(this)))
	//				}
	//			}

	//			function gi(e, t, n) {
	//				if ("char" == n) return new na(t, t);
	//				if ("word" == n) return e.findWordAt(t);
	//				if ("line" == n) return new na(D(t.line, 0), z(e.doc, D(t.line + 1, 0)));
	//				var r = n(e, t);
	//				return new na(r.from, r.to)
	//			}

	//			function vi(e, t, n, r) {
	//				var i, o;
	//				if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;
	//				else try {
	//					i = t.clientX, o = t.clientY
	//				} catch (t) {
	//					return !1
	//				}
	//				if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
	//				r && xe(t);
	//				var a = e.display,
	//					s = a.lineDiv.getBoundingClientRect();
	//				if (o > s.bottom || !ve(e, n)) return we(t);
	//				o -= s.top - a.viewOffset;
	//				for (var l = 0; l < e.options.gutters.length; ++l) {
	//					var c = a.gutters.childNodes[l];
	//					if (c && c.getBoundingClientRect().right >= i) {
	//						return pe(e, n, e, E(e.doc, o), e.options.gutters[l], t), we(t)
	//					}
	//				}
	//			}

	//			function yi(e, t) {
	//				return vi(e, t, "gutterClick", !0)
	//			}

	//			function xi(e, t) {
	//				st(e.display, t) || function(e, t) {
	//					if (!ve(e, "gutterContextMenu")) return !1;
	//					return vi(e, t, "gutterContextMenu", !1)
	//				}(e, t) || me(e, t, "contextmenu") || e.display.input.onContextMenu(t)
	//			}

	//			function bi(e) {
	//				e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Ct(e)
	//			}

	//			function wi(e) {
	//				Fn(e), Ln(e), rn(e)
	//			}

	//			function ki(e, t, n) {
	//				if (!t != !(n && n != ka)) {
	//					var r = e.display.dragFunctions,
	//						i = t ? No : de;
	//					i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop)
	//				}
	//			}

	//			function Ci(e) {
	//				e.options.lineWrapping ? (s(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (co(e.display.wrapper, "CodeMirror-wrap"), ce(e)), jt(e), Ln(e), Ct(e), setTimeout(function() {
	//					return gn(e)
	//				}, 100)
	//			}

	//			function Si(e, t) {
	//				var o = this;
	//				if (!(this instanceof Si)) return new Si(e, t);
	//				this.options = t = t ? u(t) : {}, u(Ca, t, !1), Rn(t);
	//				var a = t.value;
	//				"string" == typeof a && (a = new la(a, t.mode, null, t.lineSeparator, t.direction)), this.doc = a;
	//				var s = new Si.inputStyles[t.inputStyle](this),
	//					l = this.display = new function(e, t, n) {
	//						this.input = n, this.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"), this.scrollbarFiller.setAttribute("cm-not-content", "true"), this.gutterFiller = r("div", null, "CodeMirror-gutter-filler"), this.gutterFiller.setAttribute("cm-not-content", "true"), this.lineDiv = i("div", null, "CodeMirror-code"), this.selectionDiv = r("div", null, null, "position: relative; z-index: 1"), this.cursorDiv = r("div", null, "CodeMirror-cursors"), this.measure = r("div", null, "CodeMirror-measure"), this.lineMeasure = r("div", null, "CodeMirror-measure"), this.lineSpace = i("div", [this.measure, this.lineMeasure, this.selectionDiv, this.cursorDiv, this.lineDiv], null, "position: relative; outline: none");
	//						var o = i("div", [this.lineSpace], "CodeMirror-lines");
	//						this.mover = r("div", [o], null, "position: relative"), this.sizer = r("div", [this.mover], "CodeMirror-sizer"), this.sizerWidth = null, this.heightForcer = r("div", null, null, "position: absolute; height: " + mo + "px; width: 1px;"), this.gutters = r("div", null, "CodeMirror-gutters"), this.lineGutter = null, this.scroller = r("div", [this.sizer, this.heightForcer, this.gutters], "CodeMirror-scroll"), this.scroller.setAttribute("tabIndex", "-1"), this.wrapper = r("div", [this.scrollbarFiller, this.gutterFiller, this.scroller], "CodeMirror"), Ui && Gi < 8 && (this.gutters.style.zIndex = -1, this.scroller.style.paddingRight = 0), $i || zi && to || (this.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(this.wrapper) : e(this.wrapper)), this.viewFrom = this.viewTo = t.first, this.reportedViewFrom = this.reportedViewTo = t.first, this.view = [], this.renderedView = null, this.externalMeasured = null, this.viewOffset = 0, this.lastWrapHeight = this.lastWrapWidth = 0, this.updateLineNumbers = null, this.nativeBarWidth = this.barHeight = this.barWidth = 0, this.scrollbarsClipped = !1, this.lineNumWidth = this.lineNumInnerWidth = this.lineNumChars = null, this.alignWidgets = !1, this.cachedCharWidth = this.cachedTextHeight = this.cachedPaddingH = null, this.maxLine = null, this.maxLineLength = 0, this.maxLineChanged = !1, this.wheelDX = this.wheelDY = this.wheelStartX = this.wheelStartY = null, this.shift = !1, this.selForContextMenu = null, this.activeTouch = null, n.init(this)
	//					}(e, a, s);
	//				l.wrapper.CodeMirror = this, Fn(this), bi(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), yn(this), this.state = {
	//						keyMaps: [],
	//						overlays: [],
	//						modeGen: 0,
	//						overwrite: !1,
	//						delayingBlurEvent: !1,
	//						focused: !1,
	//						suppressEdits: !1,
	//						pasteIncoming: !1,
	//						cutIncoming: !1,
	//						selectingText: !1,
	//						draggingText: !1,
	//						highlight: new ho,
	//						keySeq: null,
	//						specialChars: null
	//					}, t.autofocus && !to && l.input.focus(), Ui && Gi < 11 && setTimeout(function() {
	//						return o.display.input.reset(!0)
	//					}, 20),
	//					function(e) {
	//						function t() {
	//							o.activeTouch && (a = setTimeout(function() {
	//								return o.activeTouch = null
	//							}, 1e3), (s = o.activeTouch).end = +new Date)
	//						}

	//						function i(e, t) {
	//							if (null == t.left) return !0;
	//							var n = t.left - e.left,
	//								r = t.top - e.top;
	//							return n * n + r * r > 400
	//						}
	//						var o = e.display;
	//						No(o.scroller, "mousedown", kn(e, mi)), Ui && Gi < 11 ? No(o.scroller, "dblclick", kn(e, function(t) {
	//							if (!me(e, t)) {
	//								var n = qt(e, t);
	//								if (n && !yi(e, t) && !st(e.display, t)) {
	//									xe(t);
	//									var r = e.findWordAt(n);
	//									fr(e.doc, r.anchor, r.head)
	//								}
	//							}
	//						})) : No(o.scroller, "dblclick", function(t) {
	//							return me(e, t) || xe(t)
	//						});
	//						lo || No(o.scroller, "contextmenu", function(t) {
	//							return xi(e, t)
	//						});
	//						var a, s = {
	//							end: 0
	//						};
	//						No(o.scroller, "touchstart", function(t) {
	//							if (!me(e, t) && ! function(e) {
	//									if (1 != e.touches.length) return !1;
	//									var t = e.touches[0];
	//									return t.radiusX <= 1 && t.radiusY <= 1
	//								}(t) && !yi(e, t)) {
	//								o.input.ensurePolled(), clearTimeout(a);
	//								var n = +new Date;
	//								o.activeTouch = {
	//									start: n,
	//									moved: !1,
	//									prev: n - s.end <= 300 ? s : null
	//								}, 1 == t.touches.length && (o.activeTouch.left = t.touches[0].pageX, o.activeTouch.top = t.touches[0].pageY)
	//							}
	//						}), No(o.scroller, "touchmove", function() {
	//							o.activeTouch && (o.activeTouch.moved = !0)
	//						}), No(o.scroller, "touchend", function(n) {
	//							var r = o.activeTouch;
	//							if (r && !st(o, n) && null != r.left && !r.moved && new Date - r.start < 300) {
	//								var a, s = e.coordsChar(o.activeTouch, "page");
	//								a = !r.prev || i(r, r.prev) ? new na(s, s) : !r.prev.prev || i(r, r.prev.prev) ? e.findWordAt(s) : new na(D(s.line, 0), z(e.doc, D(s.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), xe(n)
	//							}
	//							t()
	//						}), No(o.scroller, "touchcancel", t), No(o.scroller, "scroll", function() {
	//							o.scroller.clientHeight && (fn(e, o.scroller.scrollTop), pn(e, o.scroller.scrollLeft, !0), pe(e, "scroll", e))
	//						}), No(o.scroller, "mousewheel", function(t) {
	//							return _n(e, t)
	//						}), No(o.scroller, "DOMMouseScroll", function(t) {
	//							return _n(e, t)
	//						}), No(o.wrapper, "scroll", function() {
	//							return o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
	//						}), o.dragFunctions = {
	//							enter: function(t) {
	//								me(e, t) || ke(t)
	//							},
	//							over: function(t) {
	//								me(e, t) || (! function(e, t) {
	//									var i = qt(e, t);
	//									if (i) {
	//										var o = document.createDocumentFragment();
	//										Vt(e, i, o), e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), n(e.display.dragCursor, o)
	//									}
	//								}(e, t), ke(t))
	//							},
	//							start: function(t) {
	//								return function(e, t) {
	//									if (Ui && (!e.state.draggingText || +new Date - ca < 100)) ke(t);
	//									else if (!me(e, t) && !st(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !Yi)) {
	//										var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
	//										n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Ki && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), Ki && n.parentNode.removeChild(n)
	//									}
	//								}(e, t)
	//							},
	//							drop: kn(e, qr),
	//							leave: function(t) {
	//								me(e, t) || Ur(e)
	//							}
	//						};
	//						var l = o.input.getField();
	//						No(l, "keyup", function(t) {
	//							return di.call(e, t)
	//						}), No(l, "keydown", kn(e, fi)), No(l, "keypress", kn(e, pi)), No(l, "focus", function(t) {
	//							return Jt(e, t)
	//						}), No(l, "blur", function(t) {
	//							return Qt(e, t)
	//						})
	//					}(this), $r(), xn(this), this.curOp.forceUpdate = !0, Qn(this, a), t.autofocus && !to || this.hasFocus() ? setTimeout(c(Jt, this), 20) : Qt(this);
	//				for (var h in Sa) Sa.hasOwnProperty(h) && Sa[h](o, t[h], ka);
	//				on(this), t.finishInit && t.finishInit(this);
	//				for (var f = 0; f < La.length; ++f) La[f](o);
	//				bn(this), $i && t.lineWrapping && "optimizelegibility" == getComputedStyle(l.lineDiv).textRendering && (l.lineDiv.style.textRendering = "auto")
	//			}

	//			function Li(e, t, n, r) {
	//				var i, o = e.doc;
	//				null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = We(e, t).state : n = "prev");
	//				var a = e.options.tabSize,
	//					s = L(o, t),
	//					l = h(s.text, null, a);
	//				s.stateAfter && (s.stateAfter = null);
	//				var c, u = s.text.match(/^\s*/)[0];
	//				if (r || /\S/.test(s.text)) {
	//					if ("smart" == n && ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == go || c > 150)) {
	//						if (!r) return;
	//						n = "prev"
	//					}
	//				} else c = 0, n = "not";
	//				"prev" == n ? c = t > o.first ? h(L(o, t - 1).text, null, a) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
	//				var f = "",
	//					d = 0;
	//				if (e.options.indentWithTabs)
	//					for (var m = Math.floor(c / a); m; --m) d += a, f += "\t";
	//				if (d < c && (f += p(c - d)), f != u) return Ir(o, f, D(t, 0), D(t, u.length), "+input"), s.stateAfter = null, !0;
	//				for (var g = 0; g < o.sel.ranges.length; g++) {
	//					var v = o.sel.ranges[g];
	//					if (v.head.line == t && v.head.ch < u.length) {
	//						var y = D(t, u.length);
	//						pr(o, g, new na(y, y));
	//						break
	//					}
	//				}
	//			}

	//			function Ti(e) {
	//				Ta = e
	//			}

	//			function Mi(e, t, n, r, i) {
	//				var o = e.doc;
	//				e.display.shift = !1, r || (r = o.sel);
	//				var a = e.state.pasteIncoming || "paste" == i,
	//					s = Eo(t),
	//					l = null;
	//				if (a && r.ranges.length > 1)
	//					if (Ta && Ta.text.join("\n") == t) {
	//						if (r.ranges.length % Ta.text.length == 0) {
	//							l = [];
	//							for (var c = 0; c < Ta.text.length; c++) l.push(o.splitLines(Ta.text[c]))
	//						}
	//					} else s.length == r.ranges.length && e.options.pasteLinesPerSelection && (l = g(s, function(e) {
	//						return [e]
	//					}));
	//				for (var u, h = r.ranges.length - 1; h >= 0; h--) {
	//					var f = r.ranges[h],
	//						d = f.from(),
	//						p = f.to();
	//					f.empty() && (n && n > 0 ? d = D(d.line, d.ch - n) : e.state.overwrite && !a ? p = D(p.line, Math.min(L(o, p.line).text.length, p.ch + m(s).length)) : Ta && Ta.lineWise && Ta.text.join("\n") == t && (d = p = D(d.line, 0))), u = e.curOp.updateInput;
	//					var v = {
	//						from: d,
	//						to: p,
	//						text: l ? l[h % l.length] : s,
	//						origin: i || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input")
	//					};
	//					Mr(e.doc, v), Ye(e, "inputRead", e, v)
	//				}
	//				t && !a && Ai(e, t), ln(e), e.curOp.updateInput = u, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
	//			}

	//			function Ni(e, t) {
	//				var n = e.clipboardData && e.clipboardData.getData("Text");
	//				if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || wn(t, function() {
	//					return Mi(t, n, 0, null, "paste")
	//				}), !0
	//			}

	//			function Ai(e, t) {
	//				if (e.options.electricChars && e.options.smartIndent)
	//					for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
	//						var i = n.ranges[r];
	//						if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
	//							var o = e.getModeAt(i.head),
	//								a = !1;
	//							if (o.electricChars) {
	//								for (var s = 0; s < o.electricChars.length; s++)
	//									if (t.indexOf(o.electricChars.charAt(s)) > -1) {
	//										a = Li(e, i.head.line, "smart");
	//										break
	//									}
	//							} else o.electricInput && o.electricInput.test(L(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Li(e, i.head.line, "smart"));
	//							a && Ye(e, "electricInput", e, i.head.line)
	//						}
	//					}
	//			}

	//			function Ei(e) {
	//				for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
	//					var i = e.doc.sel.ranges[r].head.line,
	//						o = {
	//							anchor: D(i, 0),
	//							head: D(i + 1, 0)
	//						};
	//					n.push(o), t.push(e.getRange(o.anchor, o.head))
	//				}
	//				return {
	//					text: t,
	//					ranges: n
	//				}
	//			}

	//			function Oi(e, t) {
	//				e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
	//			}

	//			function Ii() {
	//				var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
	//					t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
	//				return $i ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), Qi && (e.style.border = "1px solid black"), Oi(e), t
	//			}

	//			function Di(e, t, n, r, i) {
	//				function o(r) {
	//					var o;
	//					if (null == (o = i ? function(e, t, n, r) {
	//							var i = he(t, e.doc.direction);
	//							if (!i) return ri(t, n, r);
	//							n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
	//							var o = ue(i, n.ch, n.sticky),
	//								a = i[o];
	//							if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return ri(t, n, r);
	//							var s, l = function(e, n) {
	//									return ni(t, e instanceof D ? e.ch : e, n)
	//								},
	//								c = function(n) {
	//									return e.options.lineWrapping ? (s = s || vt(e, t), Wt(e, t, s, n)) : {
	//										begin: 0,
	//										end: t.text.length
	//									}
	//								},
	//								u = c("before" == n.sticky ? l(n, -1) : n.ch);
	//							if ("rtl" == e.doc.direction || 1 == a.level) {
	//								var h = 1 == a.level == r < 0,
	//									f = l(n, h ? 1 : -1);
	//								if (null != f && (h ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
	//									var d = h ? "before" : "after";
	//									return new D(n.line, f, d)
	//								}
	//							}
	//							var p = function(e, t, r) {
	//									for (var o = function(e, t) {
	//											return t ? new D(n.line, l(e, 1), "before") : new D(n.line, e, "after")
	//										}; e >= 0 && e < i.length; e += t) {
	//										var a = i[e],
	//											s = t > 0 == (1 != a.level),
	//											c = s ? r.begin : l(r.end, -1);
	//										if (a.from <= c && c < a.to) return o(c, s);
	//										if (c = s ? a.from : l(a.to, -1), r.begin <= c && c < r.end) return o(c, s)
	//									}
	//								},
	//								m = p(o + r, r, u);
	//							if (m) return m;
	//							var g = r > 0 ? u.end : l(u.begin, -1);
	//							return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, c(g))) ? null : m
	//						}(e.cm, l, t, n) : ri(l, t, n))) {
	//						if (r || ! function() {
	//								var r = t.line + n;
	//								return !(r < e.first || r >= e.first + e.size) && (t = new D(r, t.ch, t.sticky), l = L(e, r))
	//							}()) return !1;
	//						t = ii(i, e.cm, l, t.line, n)
	//					} else t = o;
	//					return !0
	//				}
	//				var a = t,
	//					s = n,
	//					l = L(e, t.line);
	//				if ("char" == r) o();
	//				else if ("column" == r) o(!0);
	//				else if ("word" == r || "group" == r)
	//					for (var c = null, u = "group" == r, h = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(n < 0) || o(!f); f = !1) {
	//						var d = l.text.charAt(t.ch) || "\n",
	//							p = b(d, h) ? "w" : u && "\n" == d ? "n" : !u || /\s/.test(d) ? null : "p";
	//						if (!u || f || p || (p = "s"), c && c != p) {
	//							n < 0 && (n = 1, o(), t.sticky = "after");
	//							break
	//						}
	//						if (p && (c = p), n > 0 && !o(!f)) break
	//					}
	//				var m = Cr(e, t, a, s, !0);
	//				return W(a, m) && (m.hitSide = !0), m
	//			}

	//			function Hi(e, t, n, r) {
	//				var i, o = e.doc,
	//					a = t.left;
	//				if ("page" == r) {
	//					var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
	//						l = Math.max(s - .5 * Ft(e.display), 3);
	//					i = (n > 0 ? t.bottom : t.top) + n * l
	//				} else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
	//				for (var c;
	//					(c = Dt(e, a, i)).outside;) {
	//					if (n < 0 ? i <= 0 : i >= o.height) {
	//						c.hitSide = !0;
	//						break
	//					}
	//					i += 5 * n
	//				}
	//				return c
	//			}

	//			function Wi(e, t) {
	//				var n = gt(e, t.line);
	//				if (!n || n.hidden) return null;
	//				var r = L(e.doc, t.line),
	//					i = pt(n, r, t.line),
	//					o = he(r, e.doc.direction),
	//					a = "left";
	//				if (o) {
	//					a = ue(o, t.ch) % 2 ? "right" : "left"
	//				}
	//				var s = xt(i.map, t.ch, a);
	//				return s.offset = "right" == s.collapse ? s.end : s.start, s
	//			}

	//			function Bi(e, t) {
	//				return t && (e.bad = !0), e
	//			}

	//			function Fi(e, t, n) {
	//				var r;
	//				if (t == e.display.lineDiv) {
	//					if (!(r = e.display.lineDiv.childNodes[n])) return Bi(e.clipPos(D(e.display.viewTo - 1)), !0);
	//					t = null, n = 0
	//				} else
	//					for (r = t;; r = r.parentNode) {
	//						if (!r || r == e.display.lineDiv) return null;
	//						if (r.parentNode && r.parentNode == e.display.lineDiv) break
	//					}
	//				for (var i = 0; i < e.display.view.length; i++) {
	//					var a = e.display.view[i];
	//					if (a.node == r) return function(e, t, n) {
	//						function r(t, n, r) {
	//							for (var i = -1; i < (h ? h.length : 0); i++)
	//								for (var o = i < 0 ? u.map : h[i], a = 0; a < o.length; a += 3) {
	//									var s = o[a + 2];
	//									if (s == t || s == n) {
	//										var l = A(i < 0 ? e.line : e.rest[i]),
	//											c = o[a] + r;
	//										return (r < 0 || s != t) && (c = o[a + (r ? 1 : 0)]), D(l, c)
	//									}
	//								}
	//						}
	//						var i = e.text.firstChild,
	//							a = !1;
	//						if (!t || !o(i, t)) return Bi(D(A(e.line), 0), !0);
	//						if (t == i && (a = !0, t = i.childNodes[n], n = 0, !t)) {
	//							var s = e.rest ? m(e.rest) : e.line;
	//							return Bi(D(A(s), s.text.length), a)
	//						}
	//						var l = 3 == t.nodeType ? t : null,
	//							c = t;
	//						l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, n && (n = l.nodeValue.length));
	//						for (; c.parentNode != i;) c = c.parentNode;
	//						var u = e.measure,
	//							h = u.maps;
	//						var f = r(l, c, n);
	//						if (f) return Bi(f, a);
	//						for (var d = c.nextSibling, p = l ? l.nodeValue.length - n : 0; d; d = d.nextSibling) {
	//							if (f = r(d, d.firstChild, 0)) return Bi(D(f.line, f.ch - p), a);
	//							p += d.textContent.length
	//						}
	//						for (var g = c.previousSibling, v = n; g; g = g.previousSibling) {
	//							if (f = r(g, g.firstChild, -1)) return Bi(D(f.line, f.ch + v), a);
	//							v += g.textContent.length
	//						}
	//					}(a, t, n)
	//				}
	//			}
	//			var Ri = navigator.userAgent,
	//				Pi = navigator.platform,
	//				zi = /gecko\/\d/i.test(Ri),
	//				_i = /MSIE \d/.test(Ri),
	//				ji = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ri),
	//				qi = /Edge\/(\d+)/.exec(Ri),
	//				Ui = _i || ji || qi,
	//				Gi = Ui && (_i ? document.documentMode || 6 : +(qi || ji)[1]),
	//				$i = !qi && /WebKit\//.test(Ri),
	//				Vi = $i && /Qt\/\d+\.\d+/.test(Ri),
	//				Xi = !qi && /Chrome\//.test(Ri),
	//				Ki = /Opera\//.test(Ri),
	//				Yi = /Apple Computer/.test(navigator.vendor),
	//				Zi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Ri),
	//				Ji = /PhantomJS/.test(Ri),
	//				Qi = !qi && /AppleWebKit/.test(Ri) && /Mobile\/\w+/.test(Ri),
	//				eo = /Android/.test(Ri),
	//				to = Qi || eo || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Ri),
	//				no = Qi || /Mac/.test(Pi),
	//				ro = /\bCrOS\b/.test(Ri),
	//				io = /win/i.test(Pi),
	//				oo = Ki && Ri.match(/Version\/(\d*\.\d*)/);
	//			oo && (oo = Number(oo[1])), oo && oo >= 15 && (Ki = !1, $i = !0);
	//			var ao, so = no && (Vi || Ki && (null == oo || oo < 12.11)),
	//				lo = zi || Ui && Gi >= 9,
	//				co = function(t, n) {
	//					var r = t.className,
	//						i = e(n).exec(r);
	//					if (i) {
	//						var o = r.slice(i.index + i[0].length);
	//						t.className = r.slice(0, i.index) + (o ? i[1] + o : "")
	//					}
	//				};
	//			ao = document.createRange ? function(e, t, n, r) {
	//				var i = document.createRange();
	//				return i.setEnd(r || e, n), i.setStart(e, t), i
	//			} : function(e, t, n) {
	//				var r = document.body.createTextRange();
	//				try {
	//					r.moveToElementText(e.parentNode)
	//				} catch (e) {
	//					return r
	//				}
	//				return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
	//			};
	//			var uo = function(e) {
	//				e.select()
	//			};
	//			Qi ? uo = function(e) {
	//				e.selectionStart = 0, e.selectionEnd = e.value.length
	//			} : Ui && (uo = function(e) {
	//				try {
	//					e.select()
	//				} catch (e) {}
	//			});
	//			var ho = function() {
	//				this.id = null
	//			};
	//			ho.prototype.set = function(e, t) {
	//				clearTimeout(this.id), this.id = setTimeout(t, e)
	//			};
	//			var fo, po, mo = 30,
	//				go = {
	//					toString: function() {
	//						return "CodeMirror.Pass"
	//					}
	//				},
	//				vo = {
	//					scroll: !1
	//				},
	//				yo = {
	//					origin: "*mouse"
	//				},
	//				xo = {
	//					origin: "+move"
	//				},
	//				bo = [""],
	//				wo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
	//				ko = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
	//				Co = !1,
	//				So = !1,
	//				Lo = null,
	//				To = function() {
	//					function e(e) {
	//						return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
	//					}

	//					function t(e, t, n) {
	//						this.level = e, this.from = t, this.to = n
	//					}
	//					var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
	//						r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
	//						i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
	//						o = /[stwN]/,
	//						a = /[LRr]/,
	//						s = /[Lb1n]/,
	//						l = /[1n]/;
	//					return function(n, r) {
	//						var c = "ltr" == r ? "L" : "R";
	//						if (0 == n.length || "ltr" == r && !i.test(n)) return !1;
	//						for (var u = n.length, h = [], f = 0; f < u; ++f) h.push(e(n.charCodeAt(f)));
	//						for (var d = 0, p = c; d < u; ++d) {
	//							var g = h[d];
	//							"m" == g ? h[d] = p : p = g
	//						}
	//						for (var v = 0, y = c; v < u; ++v) {
	//							var x = h[v];
	//							"1" == x && "r" == y ? h[v] = "n" : a.test(x) && (y = x, "r" == x && (h[v] = "R"))
	//						}
	//						for (var b = 1, w = h[0]; b < u - 1; ++b) {
	//							var k = h[b];
	//							"+" == k && "1" == w && "1" == h[b + 1] ? h[b] = "1" : "," != k || w != h[b + 1] || "1" != w && "n" != w || (h[b] = w), w = k
	//						}
	//						for (var C = 0; C < u; ++C) {
	//							var S = h[C];
	//							if ("," == S) h[C] = "N";
	//							else if ("%" == S) {
	//								var L = void 0;
	//								for (L = C + 1; L < u && "%" == h[L]; ++L);
	//								for (var T = C && "!" == h[C - 1] || L < u && "1" == h[L] ? "1" : "N", M = C; M < L; ++M) h[M] = T;
	//								C = L - 1
	//							}
	//						}
	//						for (var N = 0, A = c; N < u; ++N) {
	//							var E = h[N];
	//							"L" == A && "1" == E ? h[N] = "L" : a.test(E) && (A = E)
	//						}
	//						for (var O = 0; O < u; ++O)
	//							if (o.test(h[O])) {
	//								var I = void 0;
	//								for (I = O + 1; I < u && o.test(h[I]); ++I);
	//								for (var D = "L" == (O ? h[O - 1] : c), H = D == ("L" == (I < u ? h[I] : c)) ? D ? "L" : "R" : c, W = O; W < I; ++W) h[W] = H;
	//								O = I - 1
	//							}
	//						for (var B, F = [], R = 0; R < u;)
	//							if (s.test(h[R])) {
	//								var P = R;
	//								for (++R; R < u && s.test(h[R]); ++R);
	//								F.push(new t(0, P, R))
	//							} else {
	//								var z = R,
	//									_ = F.length;
	//								for (++R; R < u && "L" != h[R]; ++R);
	//								for (var j = z; j < R;)
	//									if (l.test(h[j])) {
	//										z < j && F.splice(_, 0, new t(1, z, j));
	//										var q = j;
	//										for (++j; j < R && l.test(h[j]); ++j);
	//										F.splice(_, 0, new t(2, q, j)), z = j
	//									} else ++j;
	//								z < R && F.splice(_, 0, new t(1, z, R))
	//							}
	//						return "ltr" == r && (1 == F[0].level && (B = n.match(/^\s+/)) && (F[0].from = B[0].length, F.unshift(new t(0, 0, B[0].length))), 1 == m(F).level && (B = n.match(/\s+$/)) && (m(F).to -= B[0].length, F.push(new t(0, u - B[0].length, u)))), "rtl" == r ? F.reverse() : F
	//					}
	//				}(),
	//				Mo = [],
	//				No = function(e, t, n) {
	//					if (e.addEventListener) e.addEventListener(t, n, !1);
	//					else if (e.attachEvent) e.attachEvent("on" + t, n);
	//					else {
	//						var r = e._handlers || (e._handlers = {});
	//						r[t] = (r[t] || Mo).concat(n)
	//					}
	//				},
	//				Ao = function() {
	//					if (Ui && Gi < 9) return !1;
	//					var e = r("div");
	//					return "draggable" in e || "dragDrop" in e
	//				}(),
	//				Eo = 3 != "\n\nb".split(/\n/).length ? function(e) {
	//					for (var t = 0, n = [], r = e.length; t <= r;) {
	//						var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
	//						var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
	//							a = o.indexOf("\r"); - 1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
	//					}
	//					return n
	//				} : function(e) {
	//					return e.split(/\r\n?|\n/)
	//				},
	//				Oo = window.getSelection ? function(e) {
	//					try {
	//						return e.selectionStart != e.selectionEnd
	//					} catch (e) {
	//						return !1
	//					}
	//				} : function(e) {
	//					var t;
	//					try {
	//						t = e.ownerDocument.selection.createRange()
	//					} catch (e) {}
	//					return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
	//				},
	//				Io = function() {
	//					var e = r("div");
	//					return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
	//				}(),
	//				Do = null,
	//				Ho = {},
	//				Wo = {},
	//				Bo = {},
	//				Fo = function(e, t, n) {
	//					this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
	//				};
	//			Fo.prototype.eol = function() {
	//				return this.pos >= this.string.length
	//			}, Fo.prototype.sol = function() {
	//				return this.pos == this.lineStart
	//			}, Fo.prototype.peek = function() {
	//				return this.string.charAt(this.pos) || void 0
	//			}, Fo.prototype.next = function() {
	//				if (this.pos < this.string.length) return this.string.charAt(this.pos++)
	//			}, Fo.prototype.eat = function(e) {
	//				var t = this.string.charAt(this.pos);
	//				if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
	//			}, Fo.prototype.eatWhile = function(e) {
	//				for (var t = this.pos; this.eat(e););
	//				return this.pos > t
	//			}, Fo.prototype.eatSpace = function() {
	//				for (var e = this.pos;
	//					/[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
	//				return this.pos > e
	//			}, Fo.prototype.skipToEnd = function() {
	//				this.pos = this.string.length
	//			}, Fo.prototype.skipTo = function(e) {
	//				var t = this.string.indexOf(e, this.pos);
	//				if (t > -1) return this.pos = t, !0
	//			}, Fo.prototype.backUp = function(e) {
	//				this.pos -= e
	//			}, Fo.prototype.column = function() {
	//				return this.lastColumnPos < this.start && (this.lastColumnValue = h(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
	//			}, Fo.prototype.indentation = function() {
	//				return h(this.string, null, this.tabSize) - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
	//			}, Fo.prototype.match = function(e, t, n) {
	//				if ("string" != typeof e) {
	//					var r = this.string.slice(this.pos).match(e);
	//					return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r)
	//				}
	//				var i = function(e) {
	//					return n ? e.toLowerCase() : e
	//				};
	//				if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
	//			}, Fo.prototype.current = function() {
	//				return this.string.slice(this.start, this.pos)
	//			}, Fo.prototype.hideFirstChars = function(e, t) {
	//				this.lineStart += e;
	//				try {
	//					return t()
	//				} finally {
	//					this.lineStart -= e
	//				}
	//			}, Fo.prototype.lookAhead = function(e) {
	//				var t = this.lineOracle;
	//				return t && t.lookAhead(e)
	//			}, Fo.prototype.baseToken = function() {
	//				var e = this.lineOracle;
	//				return e && e.baseToken(this.pos)
	//			};
	//			var Ro = function(e, t) {
	//					this.state = e, this.lookAhead = t
	//				},
	//				Po = function(e, t, n, r) {
	//					this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
	//				};
	//			Po.prototype.lookAhead = function(e) {
	//				var t = this.doc.getLine(this.line + e);
	//				return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
	//			}, Po.prototype.baseToken = function(e) {
	//				if (!this.baseTokens) return null;
	//				for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
	//				var t = this.baseTokens[this.baseTokenPos + 1];
	//				return {
	//					type: t && t.replace(/( |^)overlay .*/, ""),
	//					size: this.baseTokens[this.baseTokenPos] - e
	//				}
	//			}, Po.prototype.nextLine = function() {
	//				this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
	//			}, Po.fromSaved = function(e, t, n) {
	//				return t instanceof Ro ? new Po(e, Ee(e.mode, t.state), n, t.lookAhead) : new Po(e, Ee(e.mode, t), n)
	//			}, Po.prototype.save = function(e) {
	//				var t = !1 !== e ? Ee(this.doc.mode, this.state) : this.state;
	//				return this.maxLookAhead > 0 ? new Ro(t, this.maxLookAhead) : t
	//			};
	//			var zo = function(e, t, n) {
	//					this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
	//				},
	//				_o = function(e, t, n) {
	//					this.text = e, X(this, t), this.height = n ? n(this) : 1
	//				};
	//			_o.prototype.lineNo = function() {
	//				return A(this)
	//			}, ye(_o);
	//			var jo, qo = {},
	//				Uo = {},
	//				Go = null,
	//				$o = null,
	//				Vo = {
	//					left: 0,
	//					right: 0,
	//					top: 0,
	//					bottom: 0
	//				},
	//				Xo = function(e, t, n) {
	//					this.cm = n;
	//					var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
	//						o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
	//					e(i), e(o), No(i, "scroll", function() {
	//						i.clientHeight && t(i.scrollTop, "vertical")
	//					}), No(o, "scroll", function() {
	//						o.clientWidth && t(o.scrollLeft, "horizontal")
	//					}), this.checkedZeroWidth = !1, Ui && Gi < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
	//				};
	//			Xo.prototype.update = function(e) {
	//				var t = e.scrollWidth > e.clientWidth + 1,
	//					n = e.scrollHeight > e.clientHeight + 1,
	//					r = e.nativeBarWidth;
	//				if (n) {
	//					this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
	//					var i = e.viewHeight - (t ? r : 0);
	//					this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
	//				} else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
	//				if (t) {
	//					this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
	//					var o = e.viewWidth - e.barLeft - (n ? r : 0);
	//					this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
	//				} else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
	//				return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
	//					right: n ? r : 0,
	//					bottom: t ? r : 0
	//				}
	//			}, Xo.prototype.setScrollLeft = function(e) {
	//				this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
	//			}, Xo.prototype.setScrollTop = function(e) {
	//				this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
	//			}, Xo.prototype.zeroWidthHack = function() {
	//				var e = no && !Zi ? "12px" : "18px";
	//				this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new ho, this.disableVert = new ho
	//			}, Xo.prototype.enableZeroWidthBar = function(e, t, n) {
	//				function r() {
	//					var i = e.getBoundingClientRect();
	//					("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
	//				}
	//				e.style.pointerEvents = "auto", t.set(1e3, r)
	//			}, Xo.prototype.clear = function() {
	//				var e = this.horiz.parentNode;
	//				e.removeChild(this.horiz), e.removeChild(this.vert)
	//			};
	//			var Ko = function() {};
	//			Ko.prototype.update = function() {
	//				return {
	//					bottom: 0,
	//					right: 0
	//				}
	//			}, Ko.prototype.setScrollLeft = function() {}, Ko.prototype.setScrollTop = function() {}, Ko.prototype.clear = function() {};
	//			var Yo = {
	//					native: Xo,
	//					null: Ko
	//				},
	//				Zo = 0,
	//				Jo = function(e, t, n) {
	//					var r = e.display;
	//					this.viewport = t, this.visible = nn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = ft(e), this.force = n, this.dims = Pt(e), this.events = []
	//				};
	//			Jo.prototype.signal = function(e, t) {
	//				ve(e, t) && this.events.push(arguments)
	//			}, Jo.prototype.finish = function() {
	//				for (var e = 0; e < this.events.length; e++) pe.apply(null, this.events[e])
	//			};
	//			var Qo = 0,
	//				ea = null;
	//			Ui ? ea = -.53 : zi ? ea = 15 : Xi ? ea = -.7 : Yi && (ea = -1 / 3);
	//			var ta = function(e, t) {
	//				this.ranges = e, this.primIndex = t
	//			};
	//			ta.prototype.primary = function() {
	//				return this.ranges[this.primIndex]
	//			}, ta.prototype.equals = function(e) {
	//				if (e == this) return !0;
	//				if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
	//				for (var t = 0; t < this.ranges.length; t++) {
	//					var n = this.ranges[t],
	//						r = e.ranges[t];
	//					if (!W(n.anchor, r.anchor) || !W(n.head, r.head)) return !1
	//				}
	//				return !0
	//			}, ta.prototype.deepCopy = function() {
	//				for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new na(B(this.ranges[t].anchor), B(this.ranges[t].head));
	//				return new ta(e, this.primIndex)
	//			}, ta.prototype.somethingSelected = function() {
	//				for (var e = 0; e < this.ranges.length; e++)
	//					if (!this.ranges[e].empty()) return !0;
	//				return !1
	//			}, ta.prototype.contains = function(e, t) {
	//				t || (t = e);
	//				for (var n = 0; n < this.ranges.length; n++) {
	//					var r = this.ranges[n];
	//					if (H(t, r.from()) >= 0 && H(e, r.to()) <= 0) return n
	//				}
	//				return -1
	//			};
	//			var na = function(e, t) {
	//				this.anchor = e, this.head = t
	//			};
	//			na.prototype.from = function() {
	//				return R(this.anchor, this.head)
	//			}, na.prototype.to = function() {
	//				return F(this.anchor, this.head)
	//			}, na.prototype.empty = function() {
	//				return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
	//			}, Fr.prototype = {
	//				chunkSize: function() {
	//					return this.lines.length
	//				},
	//				removeInner: function(e, t) {
	//					for (var n = e, r = e + t; n < r; ++n) {
	//						var i = this.lines[n];
	//						this.height -= i.height, je(i), Ye(i, "delete")
	//					}
	//					this.lines.splice(e, t)
	//				},
	//				collapse: function(e) {
	//					e.push.apply(e, this.lines)
	//				},
	//				insertInner: function(e, t, n) {
	//					this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
	//					for (var r = 0; r < t.length; ++r) t[r].parent = this
	//				},
	//				iterN: function(e, t, n) {
	//					for (var r = e + t; e < r; ++e)
	//						if (n(this.lines[e])) return !0
	//				}
	//			}, Rr.prototype = {
	//				chunkSize: function() {
	//					return this.size
	//				},
	//				removeInner: function(e, t) {
	//					this.size -= t;
	//					for (var n = 0; n < this.children.length; ++n) {
	//						var r = this.children[n],
	//							i = r.chunkSize();
	//						if (e < i) {
	//							var o = Math.min(t, i - e),
	//								a = r.height;
	//							if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
	//							e = 0
	//						} else e -= i
	//					}
	//					if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Fr))) {
	//						var s = [];
	//						this.collapse(s), this.children = [new Fr(s)], this.children[0].parent = this
	//					}
	//				},
	//				collapse: function(e) {
	//					for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
	//				},
	//				insertInner: function(e, t, n) {
	//					this.size += t.length, this.height += n;
	//					for (var r = 0; r < this.children.length; ++r) {
	//						var i = this.children[r],
	//							o = i.chunkSize();
	//						if (e <= o) {
	//							if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
	//								for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length;) {
	//									var l = new Fr(i.lines.slice(s, s += 25));
	//									i.height -= l.height, this.children.splice(++r, 0, l), l.parent = this
	//								}
	//								i.lines = i.lines.slice(0, a), this.maybeSpill()
	//							}
	//							break
	//						}
	//						e -= o
	//					}
	//				},
	//				maybeSpill: function() {
	//					if (!(this.children.length <= 10)) {
	//						var e = this;
	//						do {
	//							var t = new Rr(e.children.splice(e.children.length - 5, 5));
	//							if (e.parent) {
	//								e.size -= t.size, e.height -= t.height;
	//								var n = f(e.parent.children, e);
	//								e.parent.children.splice(n + 1, 0, t)
	//							} else {
	//								var r = new Rr(e.children);
	//								r.parent = e, e.children = [r, t], e = r
	//							}
	//							t.parent = e.parent
	//						} while (e.children.length > 10);
	//						e.parent.maybeSpill()
	//					}
	//				},
	//				iterN: function(e, t, n) {
	//					for (var r = 0; r < this.children.length; ++r) {
	//						var i = this.children[r],
	//							o = i.chunkSize();
	//						if (e < o) {
	//							var a = Math.min(t, o - e);
	//							if (i.iterN(e, a, n)) return !0;
	//							if (0 == (t -= a)) break;
	//							e = 0
	//						} else e -= o
	//					}
	//				}
	//			};
	//			var ra = function(e, t, n) {
	//				if (n)
	//					for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
	//				this.doc = e, this.node = t
	//			};
	//			ra.prototype.clear = function() {
	//				var e = this.doc.cm,
	//					t = this.line.widgets,
	//					n = this.line,
	//					r = A(n);
	//				if (null != r && t) {
	//					for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
	//					t.length || (n.widgets = null);
	//					var o = at(this);
	//					N(n, Math.max(0, n.height - o)), e && (wn(e, function() {
	//						Pr(e, n, -o), Tn(e, r, "widget")
	//					}), Ye(e, "lineWidgetCleared", e, this, r))
	//				}
	//			}, ra.prototype.changed = function() {
	//				var e = this,
	//					t = this.height,
	//					n = this.doc.cm,
	//					r = this.line;
	//				this.height = null;
	//				var i = at(this) - t;
	//				i && (N(r, r.height + i), n && wn(n, function() {
	//					n.curOp.forceUpdate = !0, Pr(n, r, i), Ye(n, "lineWidgetChanged", n, e, A(r))
	//				}))
	//			}, ye(ra);
	//			var ia = 0,
	//				oa = function(e, t) {
	//					this.lines = [], this.type = t, this.doc = e, this.id = ++ia
	//				};
	//			oa.prototype.clear = function() {
	//				if (!this.explicitlyCleared) {
	//					var e = this.doc.cm,
	//						t = e && !e.curOp;
	//					if (t && xn(e), ve(this, "clear")) {
	//						var n = this.find();
	//						n && Ye(this, "clear", n.from, n.to)
	//					}
	//					for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
	//						var a = this.lines[o],
	//							s = q(a.markedSpans, this);
	//						e && !this.collapsed ? Tn(e, A(a), "text") : e && (null != s.to && (i = A(a)), null != s.from && (r = A(a))), a.markedSpans = U(a.markedSpans, s), null == s.from && this.collapsed && !oe(this.doc, a) && e && N(a, Ft(e.display))
	//					}
	//					if (e && this.collapsed && !e.options.lineWrapping)
	//						for (var l = 0; l < this.lines.length; ++l) {
	//							var c = ne(this.lines[l]),
	//								u = le(c);
	//							u > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = u, e.display.maxLineChanged = !0)
	//						}
	//					null != r && e && this.collapsed && Ln(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && br(e.doc)), e && Ye(e, "markerCleared", e, this, r, i), t && bn(e), this.parent && this.parent.clear()
	//				}
	//			}, oa.prototype.find = function(e, t) {
	//				null == e && "bookmark" == this.type && (e = 1);
	//				for (var n, r, i = 0; i < this.lines.length; ++i) {
	//					var o = this.lines[i],
	//						a = q(o.markedSpans, this);
	//					if (null != a.from && (n = D(t ? o : A(o), a.from), -1 == e)) return n;
	//					if (null != a.to && (r = D(t ? o : A(o), a.to), 1 == e)) return r
	//				}
	//				return n && {
	//					from: n,
	//					to: r
	//				}
	//			}, oa.prototype.changed = function() {
	//				var e = this,
	//					t = this.find(-1, !0),
	//					n = this,
	//					r = this.doc.cm;
	//				t && r && wn(r, function() {
	//					var i = t.line,
	//						o = A(t.line),
	//						a = gt(r, o);
	//					if (a && (wt(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !oe(n.doc, i) && null != n.height) {
	//						var s = n.height;
	//						n.height = null;
	//						var l = at(n) - s;
	//						l && N(i, i.height + l)
	//					}
	//					Ye(r, "markerChanged", r, e)
	//				})
	//			}, oa.prototype.attachLine = function(e) {
	//				if (!this.lines.length && this.doc.cm) {
	//					var t = this.doc.cm.curOp;
	//					t.maybeHiddenMarkers && -1 != f(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
	//				}
	//				this.lines.push(e)
	//			}, oa.prototype.detachLine = function(e) {
	//				if (this.lines.splice(f(this.lines, e), 1), !this.lines.length && this.doc.cm) {
	//					var t = this.doc.cm.curOp;
	//					(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
	//				}
	//			}, ye(oa);
	//			var aa = function(e, t) {
	//				this.markers = e, this.primary = t;
	//				for (var n = 0; n < e.length; ++n) e[n].parent = this
	//			};
	//			aa.prototype.clear = function() {
	//				if (!this.explicitlyCleared) {
	//					this.explicitlyCleared = !0;
	//					for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
	//					Ye(this, "clear")
	//				}
	//			}, aa.prototype.find = function(e, t) {
	//				return this.primary.find(e, t)
	//			}, ye(aa);
	//			var sa = 0,
	//				la = function(e, t, n, r, i) {
	//					if (!(this instanceof la)) return new la(e, t, n, r, i);
	//					null == n && (n = 0), Rr.call(this, [new Fr([new _o("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
	//					var o = D(n, 0);
	//					this.sel = qn(o), this.history = new tr(null), this.id = ++sa, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Zn(this, {
	//						from: o,
	//						to: o,
	//						text: e
	//					}), vr(this, qn(o), vo)
	//				};
	//			la.prototype = y(Rr.prototype, {
	//				constructor: la,
	//				iter: function(e, t, n) {
	//					n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
	//				},
	//				insert: function(e, t) {
	//					for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
	//					this.insertInner(e - this.first, t, n)
	//				},
	//				remove: function(e, t) {
	//					this.removeInner(e - this.first, t)
	//				},
	//				getValue: function(e) {
	//					var t = M(this, this.first, this.first + this.size);
	//					return !1 === e ? t : t.join(e || this.lineSeparator())
	//				},
	//				setValue: Sn(function(e) {
	//					var t = D(this.first, 0),
	//						n = this.first + this.size - 1;
	//					Mr(this, {
	//						from: t,
	//						to: D(n, L(this, n).text.length),
	//						text: this.splitLines(e),
	//						origin: "setValue",
	//						full: !0
	//					}, !0), this.cm && cn(this.cm, 0, 0), vr(this, qn(t), vo)
	//				}),
	//				replaceRange: function(e, t, n, r) {
	//					Ir(this, e, t = z(this, t), n = n ? z(this, n) : t, r)
	//				},
	//				getRange: function(e, t, n) {
	//					var r = T(this, z(this, e), z(this, t));
	//					return !1 === n ? r : r.join(n || this.lineSeparator())
	//				},
	//				getLine: function(e) {
	//					var t = this.getLineHandle(e);
	//					return t && t.text
	//				},
	//				getLineHandle: function(e) {
	//					if (O(this, e)) return L(this, e)
	//				},
	//				getLineNumber: function(e) {
	//					return A(e)
	//				},
	//				getLineHandleVisualStart: function(e) {
	//					return "number" == typeof e && (e = L(this, e)), ne(e)
	//				},
	//				lineCount: function() {
	//					return this.size
	//				},
	//				firstLine: function() {
	//					return this.first
	//				},
	//				lastLine: function() {
	//					return this.first + this.size - 1
	//				},
	//				clipPos: function(e) {
	//					return z(this, e)
	//				},
	//				getCursor: function(e) {
	//					var t = this.sel.primary();
	//					return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
	//				},
	//				listSelections: function() {
	//					return this.sel.ranges
	//				},
	//				somethingSelected: function() {
	//					return this.sel.somethingSelected()
	//				},
	//				setCursor: Sn(function(e, t, n) {
	//					mr(this, z(this, "number" == typeof e ? D(e, t || 0) : e), null, n)
	//				}),
	//				setSelection: Sn(function(e, t, n) {
	//					mr(this, z(this, e), z(this, t || e), n)
	//				}),
	//				extendSelection: Sn(function(e, t, n) {
	//					fr(this, z(this, e), t && z(this, t), n)
	//				}),
	//				extendSelections: Sn(function(e, t) {
	//					dr(this, _(this, e), t)
	//				}),
	//				extendSelectionsBy: Sn(function(e, t) {
	//					dr(this, _(this, g(this.sel.ranges, e)), t)
	//				}),
	//				setSelections: Sn(function(e, t, n) {
	//					if (e.length) {
	//						for (var r = [], i = 0; i < e.length; i++) r[i] = new na(z(this, e[i].anchor), z(this, e[i].head));
	//						null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), vr(this, jn(r, t), n)
	//					}
	//				}),
	//				addSelection: Sn(function(e, t, n) {
	//					var r = this.sel.ranges.slice(0);
	//					r.push(new na(z(this, e), z(this, t || e))), vr(this, jn(r, r.length - 1), n)
	//				}),
	//				getSelection: function(e) {
	//					for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
	//						var i = T(this, n[r].from(), n[r].to());
	//						t = t ? t.concat(i) : i
	//					}
	//					return !1 === e ? t : t.join(e || this.lineSeparator())
	//				},
	//				getSelections: function(e) {
	//					for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
	//						var i = T(this, n[r].from(), n[r].to());
	//						!1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i
	//					}
	//					return t
	//				},
	//				replaceSelection: function(e, t, n) {
	//					for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
	//					this.replaceSelections(r, t, n || "+input")
	//				},
	//				replaceSelections: Sn(function(e, t, n) {
	//					for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
	//						var a = i.ranges[o];
	//						r[o] = {
	//							from: a.from(),
	//							to: a.to(),
	//							text: this.splitLines(e[o]),
	//							origin: n
	//						}
	//					}
	//					for (var s = t && "end" != t && function(e, t, n) {
	//							for (var r = [], i = D(e.first, 0), o = i, a = 0; a < t.length; a++) {
	//								var s = t[a],
	//									l = Vn(s.from, i, o),
	//									c = Vn(Un(s), i, o);
	//								if (i = s.to, o = c, "around" == n) {
	//									var u = e.sel.ranges[a],
	//										h = H(u.head, u.anchor) < 0;
	//									r[a] = new na(h ? c : l, h ? l : c)
	//								} else r[a] = new na(l, l)
	//							}
	//							return new ta(r, e.sel.primIndex)
	//						}(this, r, t), l = r.length - 1; l >= 0; l--) Mr(this, r[l]);
	//					s ? gr(this, s) : this.cm && ln(this.cm)
	//				}),
	//				undo: Sn(function() {
	//					Ar(this, "undo")
	//				}),
	//				redo: Sn(function() {
	//					Ar(this, "redo")
	//				}),
	//				undoSelection: Sn(function() {
	//					Ar(this, "undo", !0)
	//				}),
	//				redoSelection: Sn(function() {
	//					Ar(this, "redo", !0)
	//				}),
	//				setExtending: function(e) {
	//					this.extend = e
	//				},
	//				getExtending: function() {
	//					return this.extend
	//				},
	//				historySize: function() {
	//					for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
	//					for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
	//					return {
	//						undo: t,
	//						redo: n
	//					}
	//				},
	//				clearHistory: function() {
	//					this.history = new tr(this.history.maxGeneration)
	//				},
	//				markClean: function() {
	//					this.cleanGeneration = this.changeGeneration(!0)
	//				},
	//				changeGeneration: function(e) {
	//					return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
	//				},
	//				isClean: function(e) {
	//					return this.history.generation == (e || this.cleanGeneration)
	//				},
	//				getHistory: function() {
	//					return {
	//						done: ur(this.history.done),
	//						undone: ur(this.history.undone)
	//					}
	//				},
	//				setHistory: function(e) {
	//					var t = this.history = new tr(this.history.maxGeneration);
	//					t.done = ur(e.done.slice(0), null, !0), t.undone = ur(e.undone.slice(0), null, !0)
	//				},
	//				setGutterMarker: Sn(function(e, t, n) {
	//					return Br(this, e, "gutter", function(e) {
	//						var r = e.gutterMarkers || (e.gutterMarkers = {});
	//						return r[t] = n, !n && w(r) && (e.gutterMarkers = null), !0
	//					})
	//				}),
	//				clearGutter: Sn(function(e) {
	//					var t = this;
	//					this.iter(function(n) {
	//						n.gutterMarkers && n.gutterMarkers[e] && Br(t, n, "gutter", function() {
	//							return n.gutterMarkers[e] = null, w(n.gutterMarkers) && (n.gutterMarkers = null), !0
	//						})
	//					})
	//				}),
	//				lineInfo: function(e) {
	//					var t;
	//					if ("number" == typeof e) {
	//						if (!O(this, e)) return null;
	//						if (t = e, !(e = L(this, e))) return null
	//					} else if (null == (t = A(e))) return null;
	//					return {
	//						line: t,
	//						handle: e,
	//						text: e.text,
	//						gutterMarkers: e.gutterMarkers,
	//						textClass: e.textClass,
	//						bgClass: e.bgClass,
	//						wrapClass: e.wrapClass,
	//						widgets: e.widgets
	//					}
	//				},
	//				addLineClass: Sn(function(t, n, r) {
	//					return Br(this, t, "gutter" == n ? "gutter" : "class", function(t) {
	//						var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
	//						if (t[i]) {
	//							if (e(r).test(t[i])) return !1;
	//							t[i] += " " + r
	//						} else t[i] = r;
	//						return !0
	//					})
	//				}),
	//				removeLineClass: Sn(function(t, n, r) {
	//					return Br(this, t, "gutter" == n ? "gutter" : "class", function(t) {
	//						var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
	//							o = t[i];
	//						if (!o) return !1;
	//						if (null == r) t[i] = null;
	//						else {
	//							var a = o.match(e(r));
	//							if (!a) return !1;
	//							var s = a.index + a[0].length;
	//							t[i] = o.slice(0, a.index) + (a.index && s != o.length ? " " : "") + o.slice(s) || null
	//						}
	//						return !0
	//					})
	//				}),
	//				addLineWidget: Sn(function(e, t, n) {
	//					return function(e, t, n, r) {
	//						var i = new ra(e, n, r),
	//							o = e.cm;
	//						return o && i.noHScroll && (o.display.alignWidgets = !0), Br(e, t, "widget", function(t) {
	//							var n = t.widgets || (t.widgets = []);
	//							if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !oe(e, t)) {
	//								var r = se(t) < e.scrollTop;
	//								N(t, t.height + at(i)), r && sn(o, i.height), o.curOp.forceUpdate = !0
	//							}
	//							return !0
	//						}), Ye(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : A(t)), i
	//					}(this, e, t, n)
	//				}),
	//				removeLineWidget: function(e) {
	//					e.clear()
	//				},
	//				markText: function(e, t, n) {
	//					return zr(this, z(this, e), z(this, t), n, n && n.type || "range")
	//				},
	//				setBookmark: function(e, t) {
	//					var n = {
	//						replacedWith: t && (null == t.nodeType ? t.widget : t),
	//						insertLeft: t && t.insertLeft,
	//						clearWhenEmpty: !1,
	//						shared: t && t.shared,
	//						handleMouseEvents: t && t.handleMouseEvents
	//					};
	//					return e = z(this, e), zr(this, e, e, n, "bookmark")
	//				},
	//				findMarksAt: function(e) {
	//					var t = [],
	//						n = L(this, (e = z(this, e)).line).markedSpans;
	//					if (n)
	//						for (var r = 0; r < n.length; ++r) {
	//							var i = n[r];
	//							(null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
	//						}
	//					return t
	//				},
	//				findMarks: function(e, t, n) {
	//					e = z(this, e), t = z(this, t);
	//					var r = [],
	//						i = e.line;
	//					return this.iter(e.line, t.line + 1, function(o) {
	//						var a = o.markedSpans;
	//						if (a)
	//							for (var s = 0; s < a.length; s++) {
	//								var l = a[s];
	//								null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
	//							}++i
	//					}), r
	//				},
	//				getAllMarks: function() {
	//					var e = [];
	//					return this.iter(function(t) {
	//						var n = t.markedSpans;
	//						if (n)
	//							for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
	//					}), e
	//				},
	//				posFromIndex: function(e) {
	//					var t, n = this.first,
	//						r = this.lineSeparator().length;
	//					return this.iter(function(i) {
	//						var o = i.text.length + r;
	//						if (o > e) return t = e, !0;
	//						e -= o, ++n
	//					}), z(this, D(n, t))
	//				},
	//				indexFromPos: function(e) {
	//					var t = (e = z(this, e)).ch;
	//					if (e.line < this.first || e.ch < 0) return 0;
	//					var n = this.lineSeparator().length;
	//					return this.iter(this.first, e.line, function(e) {
	//						t += e.text.length + n
	//					}), t
	//				},
	//				copy: function(e) {
	//					var t = new la(M(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
	//					return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
	//				},
	//				linkedDoc: function(e) {
	//					e || (e = {});
	//					var t = this.first,
	//						n = this.first + this.size;
	//					null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
	//					var r = new la(M(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
	//					return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
	//							doc: r,
	//							sharedHist: e.sharedHist
	//						}), r.linked = [{
	//							doc: this,
	//							isParent: !0,
	//							sharedHist: e.sharedHist
	//						}],
	//						function(e, t) {
	//							for (var n = 0; n < t.length; n++) {
	//								var r = t[n],
	//									i = r.find(),
	//									o = e.clipPos(i.from),
	//									a = e.clipPos(i.to);
	//								if (H(o, a)) {
	//									var s = zr(e, o, a, r.primary, r.primary.type);
	//									r.markers.push(s), s.parent = r
	//								}
	//							}
	//						}(r, _r(this)), r
	//				},
	//				unlinkDoc: function(e) {
	//					if (e instanceof Si && (e = e.doc), this.linked)
	//						for (var t = 0; t < this.linked.length; ++t) {
	//							if (this.linked[t].doc == e) {
	//								this.linked.splice(t, 1), e.unlinkDoc(this), jr(_r(this));
	//								break
	//							}
	//						}
	//					if (e.history == this.history) {
	//						var n = [e.id];
	//						Jn(e, function(e) {
	//							return n.push(e.id)
	//						}, !0), e.history = new tr(null), e.history.done = ur(this.history.done, n), e.history.undone = ur(this.history.undone, n)
	//					}
	//				},
	//				iterLinkedDocs: function(e) {
	//					Jn(this, e)
	//				},
	//				getMode: function() {
	//					return this.mode
	//				},
	//				getEditor: function() {
	//					return this.cm
	//				},
	//				splitLines: function(e) {
	//					return this.lineSep ? e.split(this.lineSep) : Eo(e)
	//				},
	//				lineSeparator: function() {
	//					return this.lineSep || "\n"
	//				},
	//				setDirection: Sn(function(e) {
	//					"rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(e) {
	//						return e.order = null
	//					}), this.cm && function(e) {
	//						wn(e, function() {
	//							er(e), Ln(e)
	//						})
	//					}(this.cm))
	//				})
	//			}), la.prototype.eachLine = la.prototype.iter;
	//			for (var ca = 0, ua = !1, ha = {
	//					3: "Enter",
	//					8: "Backspace",
	//					9: "Tab",
	//					13: "Enter",
	//					16: "Shift",
	//					17: "Ctrl",
	//					18: "Alt",
	//					19: "Pause",
	//					20: "CapsLock",
	//					27: "Esc",
	//					32: "Space",
	//					33: "PageUp",
	//					34: "PageDown",
	//					35: "End",
	//					36: "Home",
	//					37: "Left",
	//					38: "Up",
	//					39: "Right",
	//					40: "Down",
	//					44: "PrintScrn",
	//					45: "Insert",
	//					46: "Delete",
	//					59: ";",
	//					61: "=",
	//					91: "Mod",
	//					92: "Mod",
	//					93: "Mod",
	//					106: "*",
	//					107: "=",
	//					109: "-",
	//					110: ".",
	//					111: "/",
	//					127: "Delete",
	//					173: "-",
	//					186: ";",
	//					187: "=",
	//					188: ",",
	//					189: "-",
	//					190: ".",
	//					191: "/",
	//					192: "`",
	//					219: "[",
	//					220: "\\",
	//					221: "]",
	//					222: "'",
	//					63232: "Up",
	//					63233: "Down",
	//					63234: "Left",
	//					63235: "Right",
	//					63272: "Delete",
	//					63273: "Home",
	//					63275: "End",
	//					63276: "PageUp",
	//					63277: "PageDown",
	//					63302: "Insert"
	//				}, fa = 0; fa < 10; fa++) ha[fa + 48] = ha[fa + 96] = String(fa);
	//			for (var da = 65; da <= 90; da++) ha[da] = String.fromCharCode(da);
	//			for (var pa = 1; pa <= 12; pa++) ha[pa + 111] = ha[pa + 63235] = "F" + pa;
	//			var ma = {};
	//			ma.basic = {
	//				Left: "goCharLeft",
	//				Right: "goCharRight",
	//				Up: "goLineUp",
	//				Down: "goLineDown",
	//				End: "goLineEnd",
	//				Home: "goLineStartSmart",
	//				PageUp: "goPageUp",
	//				PageDown: "goPageDown",
	//				Delete: "delCharAfter",
	//				Backspace: "delCharBefore",
	//				"Shift-Backspace": "delCharBefore",
	//				Tab: "defaultTab",
	//				"Shift-Tab": "indentAuto",
	//				Enter: "newlineAndIndent",
	//				Insert: "toggleOverwrite",
	//				Esc: "singleSelection"
	//			}, ma.pcDefault = {
	//				"Ctrl-A": "selectAll",
	//				"Ctrl-D": "deleteLine",
	//				"Ctrl-Z": "undo",
	//				"Shift-Ctrl-Z": "redo",
	//				"Ctrl-Y": "redo",
	//				"Ctrl-Home": "goDocStart",
	//				"Ctrl-End": "goDocEnd",
	//				"Ctrl-Up": "goLineUp",
	//				"Ctrl-Down": "goLineDown",
	//				"Ctrl-Left": "goGroupLeft",
	//				"Ctrl-Right": "goGroupRight",
	//				"Alt-Left": "goLineStart",
	//				"Alt-Right": "goLineEnd",
	//				"Ctrl-Backspace": "delGroupBefore",
	//				"Ctrl-Delete": "delGroupAfter",
	//				"Ctrl-S": "save",
	//				"Ctrl-F": "find",
	//				"Ctrl-G": "findNext",
	//				"Shift-Ctrl-G": "findPrev",
	//				"Shift-Ctrl-F": "replace",
	//				"Shift-Ctrl-R": "replaceAll",
	//				"Ctrl-[": "indentLess",
	//				"Ctrl-]": "indentMore",
	//				"Ctrl-U": "undoSelection",
	//				"Shift-Ctrl-U": "redoSelection",
	//				"Alt-U": "redoSelection",
	//				fallthrough: "basic"
	//			}, ma.emacsy = {
	//				"Ctrl-F": "goCharRight",
	//				"Ctrl-B": "goCharLeft",
	//				"Ctrl-P": "goLineUp",
	//				"Ctrl-N": "goLineDown",
	//				"Alt-F": "goWordRight",
	//				"Alt-B": "goWordLeft",
	//				"Ctrl-A": "goLineStart",
	//				"Ctrl-E": "goLineEnd",
	//				"Ctrl-V": "goPageDown",
	//				"Shift-Ctrl-V": "goPageUp",
	//				"Ctrl-D": "delCharAfter",
	//				"Ctrl-H": "delCharBefore",
	//				"Alt-D": "delWordAfter",
	//				"Alt-Backspace": "delWordBefore",
	//				"Ctrl-K": "killLine",
	//				"Ctrl-T": "transposeChars",
	//				"Ctrl-O": "openLine"
	//			}, ma.macDefault = {
	//				"Cmd-A": "selectAll",
	//				"Cmd-D": "deleteLine",
	//				"Cmd-Z": "undo",
	//				"Shift-Cmd-Z": "redo",
	//				"Cmd-Y": "redo",
	//				"Cmd-Home": "goDocStart",
	//				"Cmd-Up": "goDocStart",
	//				"Cmd-End": "goDocEnd",
	//				"Cmd-Down": "goDocEnd",
	//				"Alt-Left": "goGroupLeft",
	//				"Alt-Right": "goGroupRight",
	//				"Cmd-Left": "goLineLeft",
	//				"Cmd-Right": "goLineRight",
	//				"Alt-Backspace": "delGroupBefore",
	//				"Ctrl-Alt-Backspace": "delGroupAfter",
	//				"Alt-Delete": "delGroupAfter",
	//				"Cmd-S": "save",
	//				"Cmd-F": "find",
	//				"Cmd-G": "findNext",
	//				"Shift-Cmd-G": "findPrev",
	//				"Cmd-Alt-F": "replace",
	//				"Shift-Cmd-Alt-F": "replaceAll",
	//				"Cmd-[": "indentLess",
	//				"Cmd-]": "indentMore",
	//				"Cmd-Backspace": "delWrappedLineLeft",
	//				"Cmd-Delete": "delWrappedLineRight",
	//				"Cmd-U": "undoSelection",
	//				"Shift-Cmd-U": "redoSelection",
	//				"Ctrl-Up": "goDocStart",
	//				"Ctrl-Down": "goDocEnd",
	//				fallthrough: ["basic", "emacsy"]
	//			}, ma.default = no ? ma.macDefault : ma.pcDefault;
	//			var ga = {
	//					selectAll: Lr,
	//					singleSelection: function(e) {
	//						return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), vo)
	//					},
	//					killLine: function(e) {
	//						return ti(e, function(t) {
	//							if (t.empty()) {
	//								var n = L(e.doc, t.head.line).text.length;
	//								return t.head.ch == n && t.head.line < e.lastLine() ? {
	//									from: t.head,
	//									to: D(t.head.line + 1, 0)
	//								} : {
	//									from: t.head,
	//									to: D(t.head.line, n)
	//								}
	//							}
	//							return {
	//								from: t.from(),
	//								to: t.to()
	//							}
	//						})
	//					},
	//					deleteLine: function(e) {
	//						return ti(e, function(t) {
	//							return {
	//								from: D(t.from().line, 0),
	//								to: z(e.doc, D(t.to().line + 1, 0))
	//							}
	//						})
	//					},
	//					delLineLeft: function(e) {
	//						return ti(e, function(e) {
	//							return {
	//								from: D(e.from().line, 0),
	//								to: e.from()
	//							}
	//						})
	//					},
	//					delWrappedLineLeft: function(e) {
	//						return ti(e, function(t) {
	//							var n = e.charCoords(t.head, "div").top + 5;
	//							return {
	//								from: e.coordsChar({
	//									left: 0,
	//									top: n
	//								}, "div"),
	//								to: t.from()
	//							}
	//						})
	//					},
	//					delWrappedLineRight: function(e) {
	//						return ti(e, function(t) {
	//							var n = e.charCoords(t.head, "div").top + 5,
	//								r = e.coordsChar({
	//									left: e.display.lineDiv.offsetWidth + 100,
	//									top: n
	//								}, "div");
	//							return {
	//								from: t.from(),
	//								to: r
	//							}
	//						})
	//					},
	//					undo: function(e) {
	//						return e.undo()
	//					},
	//					redo: function(e) {
	//						return e.redo()
	//					},
	//					undoSelection: function(e) {
	//						return e.undoSelection()
	//					},
	//					redoSelection: function(e) {
	//						return e.redoSelection()
	//					},
	//					goDocStart: function(e) {
	//						return e.extendSelection(D(e.firstLine(), 0))
	//					},
	//					goDocEnd: function(e) {
	//						return e.extendSelection(D(e.lastLine()))
	//					},
	//					goLineStart: function(e) {
	//						return e.extendSelectionsBy(function(t) {
	//							return oi(e, t.head.line)
	//						}, {
	//							origin: "+move",
	//							bias: 1
	//						})
	//					},
	//					goLineStartSmart: function(e) {
	//						return e.extendSelectionsBy(function(t) {
	//							return si(e, t.head)
	//						}, {
	//							origin: "+move",
	//							bias: 1
	//						})
	//					},
	//					goLineEnd: function(e) {
	//						return e.extendSelectionsBy(function(t) {
	//							return ai(e, t.head.line)
	//						}, {
	//							origin: "+move",
	//							bias: -1
	//						})
	//					},
	//					goLineRight: function(e) {
	//						return e.extendSelectionsBy(function(t) {
	//							var n = e.cursorCoords(t.head, "div").top + 5;
	//							return e.coordsChar({
	//								left: e.display.lineDiv.offsetWidth + 100,
	//								top: n
	//							}, "div")
	//						}, xo)
	//					},
	//					goLineLeft: function(e) {
	//						return e.extendSelectionsBy(function(t) {
	//							var n = e.cursorCoords(t.head, "div").top + 5;
	//							return e.coordsChar({
	//								left: 0,
	//								top: n
	//							}, "div")
	//						}, xo)
	//					},
	//					goLineLeftSmart: function(e) {
	//						return e.extendSelectionsBy(function(t) {
	//							var n = e.cursorCoords(t.head, "div").top + 5,
	//								r = e.coordsChar({
	//									left: 0,
	//									top: n
	//								}, "div");
	//							return r.ch < e.getLine(r.line).search(/\S/) ? si(e, t.head) : r
	//						}, xo)
	//					},
	//					goLineUp: function(e) {
	//						return e.moveV(-1, "line")
	//					},
	//					goLineDown: function(e) {
	//						return e.moveV(1, "line")
	//					},
	//					goPageUp: function(e) {
	//						return e.moveV(-1, "page")
	//					},
	//					goPageDown: function(e) {
	//						return e.moveV(1, "page")
	//					},
	//					goCharLeft: function(e) {
	//						return e.moveH(-1, "char")
	//					},
	//					goCharRight: function(e) {
	//						return e.moveH(1, "char")
	//					},
	//					goColumnLeft: function(e) {
	//						return e.moveH(-1, "column")
	//					},
	//					goColumnRight: function(e) {
	//						return e.moveH(1, "column")
	//					},
	//					goWordLeft: function(e) {
	//						return e.moveH(-1, "word")
	//					},
	//					goGroupRight: function(e) {
	//						return e.moveH(1, "group")
	//					},
	//					goGroupLeft: function(e) {
	//						return e.moveH(-1, "group")
	//					},
	//					goWordRight: function(e) {
	//						return e.moveH(1, "word")
	//					},
	//					delCharBefore: function(e) {
	//						return e.deleteH(-1, "char")
	//					},
	//					delCharAfter: function(e) {
	//						return e.deleteH(1, "char")
	//					},
	//					delWordBefore: function(e) {
	//						return e.deleteH(-1, "word")
	//					},
	//					delWordAfter: function(e) {
	//						return e.deleteH(1, "word")
	//					},
	//					delGroupBefore: function(e) {
	//						return e.deleteH(-1, "group")
	//					},
	//					delGroupAfter: function(e) {
	//						return e.deleteH(1, "group")
	//					},
	//					indentAuto: function(e) {
	//						return e.indentSelection("smart")
	//					},
	//					indentMore: function(e) {
	//						return e.indentSelection("add")
	//					},
	//					indentLess: function(e) {
	//						return e.indentSelection("subtract")
	//					},
	//					insertTab: function(e) {
	//						return e.replaceSelection("\t")
	//					},
	//					insertSoftTab: function(e) {
	//						for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
	//							var o = n[i].from(),
	//								a = h(e.getLine(o.line), o.ch, r);
	//							t.push(p(r - a % r))
	//						}
	//						e.replaceSelections(t)
	//					},
	//					defaultTab: function(e) {
	//						e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
	//					},
	//					transposeChars: function(e) {
	//						return wn(e, function() {
	//							for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
	//								if (t[r].empty()) {
	//									var i = t[r].head,
	//										o = L(e.doc, i.line).text;
	//									if (o)
	//										if (i.ch == o.length && (i = new D(i.line, i.ch - 1)), i.ch > 0) i = new D(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), D(i.line, i.ch - 2), i, "+transpose");
	//										else if (i.line > e.doc.first) {
	//										var a = L(e.doc, i.line - 1).text;
	//										a && (i = new D(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), D(i.line - 1, a.length - 1), i, "+transpose"))
	//									}
	//									n.push(new na(i, i))
	//								}
	//							e.setSelections(n)
	//						})
	//					},
	//					newlineAndIndent: function(e) {
	//						return wn(e, function() {
	//							for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
	//							t = e.listSelections();
	//							for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
	//							ln(e)
	//						})
	//					},
	//					openLine: function(e) {
	//						return e.replaceSelection("\n", "start")
	//					},
	//					toggleOverwrite: function(e) {
	//						return e.toggleOverwrite()
	//					}
	//				},
	//				va = new ho,
	//				ya = null,
	//				xa = function(e, t, n) {
	//					this.time = e, this.pos = t, this.button = n
	//				};
	//			xa.prototype.compare = function(e, t, n) {
	//				return this.time + 400 > e && 0 == H(t, this.pos) && n == this.button
	//			};
	//			var ba, wa, ka = {
	//					toString: function() {
	//						return "CodeMirror.Init"
	//					}
	//				},
	//				Ca = {},
	//				Sa = {};
	//			Si.defaults = Ca, Si.optionHandlers = Sa;
	//			var La = [];
	//			Si.defineInitHook = function(e) {
	//				return La.push(e)
	//			};
	//			var Ta = null,
	//				Ma = function(e) {
	//					this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new ho, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
	//				};
	//			Ma.prototype.init = function(e) {
	//				function t(e) {
	//					if (!me(i, e)) {
	//						if (i.somethingSelected()) Ti({
	//							lineWise: !1,
	//							text: i.getSelections()
	//						}), "cut" == e.type && i.replaceSelection("", null, "cut");
	//						else {
	//							if (!i.options.lineWiseCopyCut) return;
	//							var t = Ei(i);
	//							Ti({
	//								lineWise: !0,
	//								text: t.text
	//							}), "cut" == e.type && i.operation(function() {
	//								i.setSelections(t.ranges, 0, vo), i.replaceSelection("", null, "cut")
	//							})
	//						}
	//						if (e.clipboardData) {
	//							e.clipboardData.clearData();
	//							var n = Ta.text.join("\n");
	//							if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault()
	//						}
	//						var a = Ii(),
	//							s = a.firstChild;
	//						i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild), s.value = Ta.text.join("\n");
	//						var l = document.activeElement;
	//						uo(s), setTimeout(function() {
	//							i.display.lineSpace.removeChild(a), l.focus(), l == o && r.showPrimarySelection()
	//						}, 50)
	//					}
	//				}
	//				var n = this,
	//					r = this,
	//					i = r.cm,
	//					o = r.div = e.lineDiv;
	//				Oi(o, i.options.spellcheck), No(o, "paste", function(e) {
	//					me(i, e) || Ni(e, i) || Gi <= 11 && setTimeout(kn(i, function() {
	//						return n.updateFromDOM()
	//					}), 20)
	//				}), No(o, "compositionstart", function(e) {
	//					n.composing = {
	//						data: e.data,
	//						done: !1
	//					}
	//				}), No(o, "compositionupdate", function(e) {
	//					n.composing || (n.composing = {
	//						data: e.data,
	//						done: !1
	//					})
	//				}), No(o, "compositionend", function(e) {
	//					n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0)
	//				}), No(o, "touchstart", function() {
	//					return r.forceCompositionEnd()
	//				}), No(o, "input", function() {
	//					n.composing || n.readFromDOMSoon()
	//				}), No(o, "copy", t), No(o, "cut", t)
	//			}, Ma.prototype.prepareSelection = function() {
	//				var e = $t(this.cm, !1);
	//				return e.focus = this.cm.state.focused, e
	//			}, Ma.prototype.showSelection = function(e, t) {
	//				e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
	//			}, Ma.prototype.showPrimarySelection = function() {
	//				var e = window.getSelection(),
	//					t = this.cm,
	//					n = t.doc.sel.primary(),
	//					r = n.from(),
	//					i = n.to();
	//				if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) e.removeAllRanges();
	//				else {
	//					var o = Fi(t, e.anchorNode, e.anchorOffset),
	//						a = Fi(t, e.focusNode, e.focusOffset);
	//					if (!o || o.bad || !a || a.bad || 0 != H(R(o, a), r) || 0 != H(F(o, a), i)) {
	//						var s = t.display.view,
	//							l = r.line >= t.display.viewFrom && Wi(t, r) || {
	//								node: s[0].measure.map[2],
	//								offset: 0
	//							},
	//							c = i.line < t.display.viewTo && Wi(t, i);
	//						if (!c) {
	//							var u = s[s.length - 1].measure,
	//								h = u.maps ? u.maps[u.maps.length - 1] : u.map;
	//							c = {
	//								node: h[h.length - 1],
	//								offset: h[h.length - 2] - h[h.length - 3]
	//							}
	//						}
	//						if (l && c) {
	//							var f, d = e.rangeCount && e.getRangeAt(0);
	//							try {
	//								f = ao(l.node, l.offset, c.offset, c.node)
	//							} catch (e) {}
	//							f && (!zi && t.state.focused ? (e.collapse(l.node, l.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), d && null == e.anchorNode ? e.addRange(d) : zi && this.startGracePeriod()), this.rememberSelection()
	//						} else e.removeAllRanges()
	//					}
	//				}
	//			}, Ma.prototype.startGracePeriod = function() {
	//				var e = this;
	//				clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
	//					e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
	//						return e.cm.curOp.selectionChanged = !0
	//					})
	//				}, 20)
	//			}, Ma.prototype.showMultipleSelections = function(e) {
	//				n(this.cm.display.cursorDiv, e.cursors), n(this.cm.display.selectionDiv, e.selection)
	//			}, Ma.prototype.rememberSelection = function() {
	//				var e = window.getSelection();
	//				this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
	//			}, Ma.prototype.selectionInEditor = function() {
	//				var e = window.getSelection();
	//				if (!e.rangeCount) return !1;
	//				var t = e.getRangeAt(0).commonAncestorContainer;
	//				return o(this.div, t)
	//			}, Ma.prototype.focus = function() {
	//				"nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
	//			}, Ma.prototype.blur = function() {
	//				this.div.blur()
	//			}, Ma.prototype.getField = function() {
	//				return this.div
	//			}, Ma.prototype.supportsTouch = function() {
	//				return !0
	//			}, Ma.prototype.receivedFocus = function() {
	//				function e() {
	//					t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e))
	//				}
	//				var t = this;
	//				this.selectionInEditor() ? this.pollSelection() : wn(this.cm, function() {
	//					return t.cm.curOp.selectionChanged = !0
	//				}), this.polling.set(this.cm.options.pollInterval, e)
	//			}, Ma.prototype.selectionChanged = function() {
	//				var e = window.getSelection();
	//				return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
	//			}, Ma.prototype.pollSelection = function() {
	//				if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
	//					var e = window.getSelection(),
	//						t = this.cm;
	//					if (eo && Xi && this.cm.options.gutters.length && function(e) {
	//							for (var t = e; t; t = t.parentNode)
	//								if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
	//							return !1
	//						}(e.anchorNode)) return this.cm.triggerOnKeyDown({
	//						type: "keydown",
	//						keyCode: 8,
	//						preventDefault: Math.abs
	//					}), this.blur(), void this.focus();
	//					if (!this.composing) {
	//						this.rememberSelection();
	//						var n = Fi(t, e.anchorNode, e.anchorOffset),
	//							r = Fi(t, e.focusNode, e.focusOffset);
	//						n && r && wn(t, function() {
	//							vr(t.doc, qn(n, r), vo), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
	//						})
	//					}
	//				}
	//			}, Ma.prototype.pollContent = function() {
	//				null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
	//				var e = this.cm,
	//					t = e.display,
	//					n = e.doc.sel.primary(),
	//					r = n.from(),
	//					i = n.to();
	//				if (0 == r.ch && r.line > e.firstLine() && (r = D(r.line - 1, L(e.doc, r.line - 1).length)), i.ch == L(e.doc, i.line).text.length && i.line < e.lastLine() && (i = D(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;
	//				var o, a, s;
	//				r.line == t.viewFrom || 0 == (o = Ut(e, r.line)) ? (a = A(t.view[0].line), s = t.view[0].node) : (a = A(t.view[o].line), s = t.view[o - 1].node.nextSibling);
	//				var l, c, u = Ut(e, i.line);
	//				if (u == t.view.length - 1 ? (l = t.viewTo - 1, c = t.lineDiv.lastChild) : (l = A(t.view[u + 1].line) - 1, c = t.view[u + 1].node.previousSibling), !s) return !1;
	//				for (var h = e.doc.splitLines(function(e, t, n, r, i) {
	//						function o() {
	//							c && (l += u, c = !1)
	//						}

	//						function a(e) {
	//							e && (o(), l += e)
	//						}

	//						function s(t) {
	//							if (1 == t.nodeType) {
	//								var n = t.getAttribute("cm-text");
	//								if (null != n) return void a(n || t.textContent.replace(/\u200b/g, ""));
	//								var l, h = t.getAttribute("cm-marker");
	//								if (h) {
	//									var f = e.findMarks(D(r, 0), D(i + 1, 0), function(e) {
	//										return function(t) {
	//											return t.id == e
	//										}
	//									}(+h));
	//									return void(f.length && (l = f[0].find(0)) && a(T(e.doc, l.from, l.to).join(u)))
	//								}
	//								if ("false" == t.getAttribute("contenteditable")) return;
	//								var d = /^(pre|div|p)$/i.test(t.nodeName);
	//								d && o();
	//								for (var p = 0; p < t.childNodes.length; p++) s(t.childNodes[p]);
	//								d && (c = !0)
	//							} else 3 == t.nodeType && a(t.nodeValue)
	//						}
	//						for (var l = "", c = !1, u = e.doc.lineSeparator(); s(t), t != n;) t = t.nextSibling;
	//						return l
	//					}(e, s, c, a, l)), f = T(e.doc, D(a, 0), D(l, L(e.doc, l).text.length)); h.length > 1 && f.length > 1;)
	//					if (m(h) == m(f)) h.pop(), f.pop(), l--;
	//					else {
	//						if (h[0] != f[0]) break;
	//						h.shift(), f.shift(), a++
	//					}
	//				for (var d = 0, p = 0, g = h[0], v = f[0], y = Math.min(g.length, v.length); d < y && g.charCodeAt(d) == v.charCodeAt(d);) ++d;
	//				for (var x = m(h), b = m(f), w = Math.min(x.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0)); p < w && x.charCodeAt(x.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p;
	//				if (1 == h.length && 1 == f.length && a == r.line)
	//					for (; d && d > r.ch && x.charCodeAt(x.length - p - 1) == b.charCodeAt(b.length - p - 1);) d--, p++;
	//				h[h.length - 1] = x.slice(0, x.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");
	//				var k = D(a, d),
	//					C = D(l, f.length ? m(f).length - p : 0);
	//				return h.length > 1 || h[0] || H(k, C) ? (Ir(e.doc, h, k, C, "+input"), !0) : void 0
	//			}, Ma.prototype.ensurePolled = function() {
	//				this.forceCompositionEnd()
	//			}, Ma.prototype.reset = function() {
	//				this.forceCompositionEnd()
	//			}, Ma.prototype.forceCompositionEnd = function() {
	//				this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
	//			}, Ma.prototype.readFromDOMSoon = function() {
	//				var e = this;
	//				null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
	//					if (e.readDOMTimeout = null, e.composing) {
	//						if (!e.composing.done) return;
	//						e.composing = null
	//					}
	//					e.updateFromDOM()
	//				}, 80))
	//			}, Ma.prototype.updateFromDOM = function() {
	//				var e = this;
	//				!this.cm.isReadOnly() && this.pollContent() || wn(this.cm, function() {
	//					return Ln(e.cm)
	//				})
	//			}, Ma.prototype.setUneditable = function(e) {
	//				e.contentEditable = "false"
	//			}, Ma.prototype.onKeyPress = function(e) {
	//				0 != e.charCode && (e.preventDefault(), this.cm.isReadOnly() || kn(this.cm, Mi)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
	//			}, Ma.prototype.readOnlyChanged = function(e) {
	//				this.div.contentEditable = String("nocursor" != e)
	//			}, Ma.prototype.onContextMenu = function() {}, Ma.prototype.resetPosition = function() {}, Ma.prototype.needsContentAttribute = !0;
	//			var Na = function(e) {
	//				this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new ho, this.hasSelection = !1, this.composing = null
	//			};
	//			Na.prototype.init = function(e) {
	//					function t(e) {
	//						if (!me(i, e)) {
	//							if (i.somethingSelected()) Ti({
	//								lineWise: !1,
	//								text: i.getSelections()
	//							});
	//							else {
	//								if (!i.options.lineWiseCopyCut) return;
	//								var t = Ei(i);
	//								Ti({
	//									lineWise: !0,
	//									text: t.text
	//								}), "cut" == e.type ? i.setSelections(t.ranges, null, vo) : (r.prevInput = "", a.value = t.text.join("\n"), uo(a))
	//							}
	//							"cut" == e.type && (i.state.cutIncoming = !0)
	//						}
	//					}
	//					var n = this,
	//						r = this,
	//						i = this.cm,
	//						o = this.wrapper = Ii(),
	//						a = this.textarea = o.firstChild;
	//					e.wrapper.insertBefore(o, e.wrapper.firstChild), Qi && (a.style.width = "0px"), No(a, "input", function() {
	//						Ui && Gi >= 9 && n.hasSelection && (n.hasSelection = null), r.poll()
	//					}), No(a, "paste", function(e) {
	//						me(i, e) || Ni(e, i) || (i.state.pasteIncoming = !0, r.fastPoll())
	//					}), No(a, "cut", t), No(a, "copy", t), No(e.scroller, "paste", function(t) {
	//						st(e, t) || me(i, t) || (i.state.pasteIncoming = !0, r.focus())
	//					}), No(e.lineSpace, "selectstart", function(t) {
	//						st(e, t) || xe(t)
	//					}), No(a, "compositionstart", function() {
	//						var e = i.getCursor("from");
	//						r.composing && r.composing.range.clear(), r.composing = {
	//							start: e,
	//							range: i.markText(e, i.getCursor("to"), {
	//								className: "CodeMirror-composing"
	//							})
	//						}
	//					}), No(a, "compositionend", function() {
	//						r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
	//					})
	//				}, Na.prototype.prepareSelection = function() {
	//					var e = this.cm,
	//						t = e.display,
	//						n = e.doc,
	//						r = $t(e);
	//					if (e.options.moveInputWithCursor) {
	//						var i = Et(e, n.sel.primary().head, "div"),
	//							o = t.wrapper.getBoundingClientRect(),
	//							a = t.lineDiv.getBoundingClientRect();
	//						r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
	//					}
	//					return r
	//				}, Na.prototype.showSelection = function(e) {
	//					var t = this.cm.display;
	//					n(t.cursorDiv, e.cursors), n(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
	//				}, Na.prototype.reset = function(e) {
	//					if (!this.contextMenuPending && !this.composing) {
	//						var t = this.cm;
	//						if (t.somethingSelected()) {
	//							this.prevInput = "";
	//							var n = t.getSelection();
	//							this.textarea.value = n, t.state.focused && uo(this.textarea), Ui && Gi >= 9 && (this.hasSelection = n)
	//						} else e || (this.prevInput = this.textarea.value = "", Ui && Gi >= 9 && (this.hasSelection = null))
	//					}
	//				}, Na.prototype.getField = function() {
	//					return this.textarea
	//				}, Na.prototype.supportsTouch = function() {
	//					return !1
	//				}, Na.prototype.focus = function() {
	//					if ("nocursor" != this.cm.options.readOnly && (!to || a() != this.textarea)) try {
	//						this.textarea.focus()
	//					} catch (e) {}
	//				}, Na.prototype.blur = function() {
	//					this.textarea.blur()
	//				}, Na.prototype.resetPosition = function() {
	//					this.wrapper.style.top = this.wrapper.style.left = 0
	//				}, Na.prototype.receivedFocus = function() {
	//					this.slowPoll()
	//				}, Na.prototype.slowPoll = function() {
	//					var e = this;
	//					this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
	//						e.poll(), e.cm.state.focused && e.slowPoll()
	//					})
	//				}, Na.prototype.fastPoll = function() {
	//					function e() {
	//						n.poll() || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e))
	//					}
	//					var t = !1,
	//						n = this;
	//					n.pollingFast = !0, n.polling.set(20, e)
	//				}, Na.prototype.poll = function() {
	//					var e = this,
	//						t = this.cm,
	//						n = this.textarea,
	//						r = this.prevInput;
	//					if (this.contextMenuPending || !t.state.focused || Oo(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
	//					var i = n.value;
	//					if (i == r && !t.somethingSelected()) return !1;
	//					if (Ui && Gi >= 9 && this.hasSelection === i || no && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
	//					if (t.doc.sel == t.display.selForContextMenu) {
	//						var o = i.charCodeAt(0);
	//						if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
	//					}
	//					for (var a = 0, s = Math.min(r.length, i.length); a < s && r.charCodeAt(a) == i.charCodeAt(a);) ++a;
	//					return wn(t, function() {
	//						Mi(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
	//							className: "CodeMirror-composing"
	//						}))
	//					}), !0
	//				}, Na.prototype.ensurePolled = function() {
	//					this.pollingFast && this.poll() && (this.pollingFast = !1)
	//				}, Na.prototype.onKeyPress = function() {
	//					Ui && Gi >= 9 && (this.hasSelection = null), this.fastPoll()
	//				}, Na.prototype.onContextMenu = function(e) {
	//					function t() {
	//						if (null != a.selectionStart) {
	//							var e = i.somethingSelected(),
	//								t = "​" + (e ? a.value : "");
	//							a.value = "⇚", a.value = t, r.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, o.selForContextMenu = i.doc.sel
	//						}
	//					}

	//					function n() {
	//						if (r.contextMenuPending = !1, r.wrapper.style.cssText = u, a.style.cssText = c, Ui && Gi < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = l), null != a.selectionStart) {
	//							(!Ui || Ui && Gi < 9) && t();
	//							var e = 0,
	//								n = function() {
	//									o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? kn(i, Lr)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : (o.selForContextMenu = null, o.input.reset())
	//								};
	//							o.detectingSelectAll = setTimeout(n, 200)
	//						}
	//					}
	//					var r = this,
	//						i = r.cm,
	//						o = i.display,
	//						a = r.textarea,
	//						s = qt(i, e),
	//						l = o.scroller.scrollTop;
	//					if (s && !Ki) {
	//						i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(s) && kn(i, vr)(i.doc, qn(s), vo);
	//						var c = a.style.cssText,
	//							u = r.wrapper.style.cssText;
	//						r.wrapper.style.cssText = "position: absolute";
	//						var h = r.wrapper.getBoundingClientRect();
	//						a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (Ui ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
	//						var f;
	//						if ($i && (f = window.scrollY), o.input.focus(), $i && window.scrollTo(null, f), o.input.reset(), i.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), Ui && Gi >= 9 && t(), lo) {
	//							ke(e);
	//							var d = function() {
	//								de(window, "mouseup", d), setTimeout(n, 20)
	//							};
	//							No(window, "mouseup", d)
	//						} else setTimeout(n, 50)
	//					}
	//				}, Na.prototype.readOnlyChanged = function(e) {
	//					e || this.reset(), this.textarea.disabled = "nocursor" == e
	//				}, Na.prototype.setUneditable = function() {}, Na.prototype.needsContentAttribute = !1,
	//				function(e) {
	//					function t(t, r, i, o) {
	//						e.defaults[t] = r, i && (n[t] = o ? function(e, t, n) {
	//							n != ka && i(e, t, n)
	//						} : i)
	//					}
	//					var n = e.optionHandlers;
	//					e.defineOption = t, e.Init = ka, t("value", "", function(e, t) {
	//						return e.setValue(t)
	//					}, !0), t("mode", null, function(e, t) {
	//						e.doc.modeOption = t, Xn(e)
	//					}, !0), t("indentUnit", 2, Xn, !0), t("indentWithTabs", !1), t("smartIndent", !0), t("tabSize", 4, function(e) {
	//						Kn(e), Ct(e), Ln(e)
	//					}, !0), t("lineSeparator", null, function(e, t) {
	//						if (e.doc.lineSep = t, t) {
	//							var n = [],
	//								r = e.doc.first;
	//							e.doc.iter(function(e) {
	//								for (var i = 0;;) {
	//									var o = e.text.indexOf(t, i);
	//									if (-1 == o) break;
	//									i = o + t.length, n.push(D(r, o))
	//								}
	//								r++
	//							});
	//							for (var i = n.length - 1; i >= 0; i--) Ir(e.doc, t, n[i], D(n[i].line, n[i].ch + t.length))
	//						}
	//					}), t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) {
	//						e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != ka && e.refresh()
	//					}), t("specialCharPlaceholder", Ge, function(e) {
	//						return e.refresh()
	//					}, !0), t("electricChars", !0), t("inputStyle", to ? "contenteditable" : "textarea", function() {
	//						throw new Error("inputStyle can not (yet) be changed in a running editor")
	//					}, !0), t("spellcheck", !1, function(e, t) {
	//						return e.getInputField().spellcheck = t
	//					}, !0), t("rtlMoveVisually", !io), t("wholeLineUpdateBefore", !0), t("theme", "default", function(e) {
	//						bi(e), wi(e)
	//					}, !0), t("keyMap", "default", function(e, t, n) {
	//						var r = ei(t),
	//							i = n != ka && ei(n);
	//						i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null)
	//					}), t("extraKeys", null), t("configureMouse", null), t("lineWrapping", !1, Ci, !0), t("gutters", [], function(e) {
	//						Rn(e.options), wi(e)
	//					}, !0), t("fixedGutter", !0, function(e, t) {
	//						e.display.gutters.style.left = t ? zt(e.display) + "px" : "0", e.refresh()
	//					}, !0), t("coverGutterNextToScrollbar", !1, function(e) {
	//						return gn(e)
	//					}, !0), t("scrollbarStyle", "native", function(e) {
	//						yn(e), gn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
	//					}, !0), t("lineNumbers", !1, function(e) {
	//						Rn(e.options), wi(e)
	//					}, !0), t("firstLineNumber", 1, wi, !0), t("lineNumberFormatter", function(e) {
	//						return e
	//					}, wi, !0), t("showCursorWhenSelecting", !1, Gt, !0), t("resetSelectionOnContextMenu", !0), t("lineWiseCopyCut", !0), t("pasteLinesPerSelection", !0), t("readOnly", !1, function(e, t) {
	//						"nocursor" == t && (Qt(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
	//					}), t("disableInput", !1, function(e, t) {
	//						t || e.display.input.reset()
	//					}, !0), t("dragDrop", !0, ki), t("allowDropFileTypes", null), t("cursorBlinkRate", 530), t("cursorScrollMargin", 0), t("cursorHeight", 1, Gt, !0), t("singleCursorHeightPerLine", !0, Gt, !0), t("workTime", 100), t("workDelay", 100), t("flattenSpans", !0, Kn, !0), t("addModeClass", !1, Kn, !0), t("pollInterval", 100), t("undoDepth", 200, function(e, t) {
	//						return e.doc.history.undoDepth = t
	//					}), t("historyEventDelay", 1250), t("viewportMargin", 10, function(e) {
	//						return e.refresh()
	//					}, !0), t("maxHighlightLength", 1e4, Kn, !0), t("moveInputWithCursor", !0, function(e, t) {
	//						t || e.display.input.resetPosition()
	//					}), t("tabindex", null, function(e, t) {
	//						return e.display.input.getField().tabIndex = t || ""
	//					}), t("autofocus", null), t("direction", "ltr", function(e, t) {
	//						return e.doc.setDirection(t)
	//					}, !0)
	//				}(Si),
	//				function(e) {
	//					var t = e.optionHandlers,
	//						n = e.helpers = {};
	//					e.prototype = {
	//						constructor: e,
	//						focus: function() {
	//							window.focus(), this.display.input.focus()
	//						},
	//						setOption: function(e, n) {
	//							var r = this.options,
	//								i = r[e];
	//							r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && kn(this, t[e])(this, n, i), pe(this, "optionChange", this, e))
	//						},
	//						getOption: function(e) {
	//							return this.options[e]
	//						},
	//						getDoc: function() {
	//							return this.doc
	//						},
	//						addKeyMap: function(e, t) {
	//							this.state.keyMaps[t ? "push" : "unshift"](ei(e))
	//						},
	//						removeKeyMap: function(e) {
	//							for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
	//								if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
	//						},
	//						addOverlay: Cn(function(t, n) {
	//							var r = t.token ? t : e.getMode(this.options, t);
	//							if (r.startState) throw new Error("Overlays may not be stateful.");
	//							! function(e, t, n) {
	//								for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) r++;
	//								e.splice(r, 0, t)
	//							}(this.state.overlays, {
	//								mode: r,
	//								modeSpec: t,
	//								opaque: n && n.opaque,
	//								priority: n && n.priority || 0
	//							}, function(e) {
	//								return e.priority
	//							}), this.state.modeGen++, Ln(this)
	//						}),
	//						removeOverlay: Cn(function(e) {
	//							for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
	//								var r = t[n].modeSpec;
	//								if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Ln(this)
	//							}
	//						}),
	//						indentLine: Cn(function(e, t, n) {
	//							"string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), O(this.doc, e) && Li(this, e, t, n)
	//						}),
	//						indentSelection: Cn(function(e) {
	//							for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
	//								var i = t[r];
	//								if (i.empty()) i.head.line > n && (Li(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && ln(this));
	//								else {
	//									var o = i.from(),
	//										a = i.to(),
	//										s = Math.max(n, o.line);
	//									n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
	//									for (var l = s; l < n; ++l) Li(this, l, e);
	//									var c = this.doc.sel.ranges;
	//									0 == o.ch && t.length == c.length && c[r].from().ch > 0 && pr(this.doc, r, new na(o, c[r].to()), vo)
	//								}
	//							}
	//						}),
	//						getTokenAt: function(e, t) {
	//							return Pe(this, e, t)
	//						},
	//						getLineTokens: function(e, t) {
	//							return Pe(this, D(e), t, !0)
	//						},
	//						getTokenTypeAt: function(e) {
	//							e = z(this.doc, e);
	//							var t, n = He(this, L(this.doc, e.line)),
	//								r = 0,
	//								i = (n.length - 1) / 2,
	//								o = e.ch;
	//							if (0 == o) t = n[2];
	//							else
	//								for (;;) {
	//									var a = r + i >> 1;
	//									if ((a ? n[2 * a - 1] : 0) >= o) i = a;
	//									else {
	//										if (!(n[2 * a + 1] < o)) {
	//											t = n[2 * a + 2];
	//											break
	//										}
	//										r = a + 1
	//									}
	//								}
	//							var s = t ? t.indexOf("overlay ") : -1;
	//							return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
	//						},
	//						getModeAt: function(t) {
	//							var n = this.doc.mode;
	//							return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
	//						},
	//						getHelper: function(e, t) {
	//							return this.getHelpers(e, t)[0]
	//						},
	//						getHelpers: function(e, t) {
	//							var r = [];
	//							if (!n.hasOwnProperty(t)) return r;
	//							var i = n[t],
	//								o = this.getModeAt(e);
	//							if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
	//							else if (o[t])
	//								for (var a = 0; a < o[t].length; a++) {
	//									var s = i[o[t][a]];
	//									s && r.push(s)
	//								} else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
	//							for (var l = 0; l < i._global.length; l++) {
	//								var c = i._global[l];
	//								c.pred(o, this) && -1 == f(r, c.val) && r.push(c.val)
	//							}
	//							return r
	//						},
	//						getStateAfter: function(e, t) {
	//							var n = this.doc;
	//							return e = P(n, null == e ? n.first + n.size - 1 : e), We(this, e + 1, t).state
	//						},
	//						cursorCoords: function(e, t) {
	//							var n, r = this.doc.sel.primary();
	//							return n = null == e ? r.head : "object" == typeof e ? z(this.doc, e) : e ? r.from() : r.to(), Et(this, n, t || "page")
	//						},
	//						charCoords: function(e, t) {
	//							return At(this, z(this.doc, e), t || "page")
	//						},
	//						coordsChar: function(e, t) {
	//							return e = Nt(this, e, t || "page"), Dt(this, e.left, e.top)
	//						},
	//						lineAtHeight: function(e, t) {
	//							return e = Nt(this, {
	//								top: e,
	//								left: 0
	//							}, t || "page").top, E(this.doc, e + this.display.viewOffset)
	//						},
	//						heightAtLine: function(e, t, n) {
	//							var r, i = !1;
	//							if ("number" == typeof e) {
	//								var o = this.doc.first + this.doc.size - 1;
	//								e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = L(this.doc, e)
	//							} else r = e;
	//							return Mt(this, r, {
	//								top: 0,
	//								left: 0
	//							}, t || "page", n || i).top + (i ? this.doc.height - se(r) : 0)
	//						},
	//						defaultTextHeight: function() {
	//							return Ft(this.display)
	//						},
	//						defaultCharWidth: function() {
	//							return Rt(this.display)
	//						},
	//						getViewport: function() {
	//							return {
	//								from: this.display.viewFrom,
	//								to: this.display.viewTo
	//							}
	//						},
	//						addWidget: function(e, t, n, r, i) {
	//							var o = this.display,
	//								a = (e = Et(this, z(this.doc, e))).bottom,
	//								s = e.left;
	//							if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top;
	//							else if ("above" == r || "near" == r) {
	//								var l = Math.max(o.wrapper.clientHeight, this.doc.height),
	//									c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
	//								("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (a = e.bottom), s + t.offsetWidth > c && (s = c - t.offsetWidth)
	//							}
	//							t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), n && function(e, t) {
	//								var n = an(e, t);
	//								null != n.scrollTop && fn(e, n.scrollTop), null != n.scrollLeft && pn(e, n.scrollLeft)
	//							}(this, {
	//								left: s,
	//								top: a,
	//								right: s + t.offsetWidth,
	//								bottom: a + t.offsetHeight
	//							})
	//						},
	//						triggerOnKeyDown: Cn(fi),
	//						triggerOnKeyPress: Cn(pi),
	//						triggerOnKeyUp: di,
	//						triggerOnMouseDown: Cn(mi),
	//						execCommand: function(e) {
	//							if (ga.hasOwnProperty(e)) return ga[e].call(null, this)
	//						},
	//						triggerElectric: Cn(function(e) {
	//							Ai(this, e)
	//						}),
	//						findPosH: function(e, t, n, r) {
	//							var i = 1;
	//							t < 0 && (i = -1, t = -t);
	//							for (var o = z(this.doc, e), a = 0; a < t && !(o = Di(this.doc, o, i, n, r)).hitSide; ++a);
	//							return o
	//						},
	//						moveH: Cn(function(e, t) {
	//							var n = this;
	//							this.extendSelectionsBy(function(r) {
	//								return n.display.shift || n.doc.extend || r.empty() ? Di(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
	//							}, xo)
	//						}),
	//						deleteH: Cn(function(e, t) {
	//							var n = this.doc.sel,
	//								r = this.doc;
	//							n.somethingSelected() ? r.replaceSelection("", null, "+delete") : ti(this, function(n) {
	//								var i = Di(r, n.head, e, t, !1);
	//								return e < 0 ? {
	//									from: i,
	//									to: n.head
	//								} : {
	//									from: n.head,
	//									to: i
	//								}
	//							})
	//						}),
	//						findPosV: function(e, t, n, r) {
	//							var i = 1,
	//								o = r;
	//							t < 0 && (i = -1, t = -t);
	//							for (var a = z(this.doc, e), s = 0; s < t; ++s) {
	//								var l = Et(this, a, "div");
	//								if (null == o ? o = l.left : l.left = o, (a = Hi(this, l, i, n)).hitSide) break
	//							}
	//							return a
	//						},
	//						moveV: Cn(function(e, t) {
	//							var n = this,
	//								r = this.doc,
	//								i = [],
	//								o = !this.display.shift && !r.extend && r.sel.somethingSelected();
	//							if (r.extendSelectionsBy(function(a) {
	//									if (o) return e < 0 ? a.from() : a.to();
	//									var s = Et(n, a.head, "div");
	//									null != a.goalColumn && (s.left = a.goalColumn), i.push(s.left);
	//									var l = Hi(n, s, e, t);
	//									return "page" == t && a == r.sel.primary() && sn(n, At(n, l, "div").top - s.top), l
	//								}, xo), i.length)
	//								for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a]
	//						}),
	//						findWordAt: function(e) {
	//							var t = L(this.doc, e.line).text,
	//								n = e.ch,
	//								r = e.ch;
	//							if (t) {
	//								var i = this.getHelper(e, "wordChars");
	//								"before" != e.sticky && r != t.length || !n ? ++r : --n;
	//								for (var o = t.charAt(n), a = b(o, i) ? function(e) {
	//										return b(e, i)
	//									} : /\s/.test(o) ? function(e) {
	//										return /\s/.test(e)
	//									} : function(e) {
	//										return !/\s/.test(e) && !b(e)
	//									}; n > 0 && a(t.charAt(n - 1));) --n;
	//								for (; r < t.length && a(t.charAt(r));) ++r
	//							}
	//							return new na(D(e.line, n), D(e.line, r))
	//						},
	//						toggleOverwrite: function(e) {
	//							null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? s(this.display.cursorDiv, "CodeMirror-overwrite") : co(this.display.cursorDiv, "CodeMirror-overwrite"), pe(this, "overwriteToggle", this, this.state.overwrite))
	//						},
	//						hasFocus: function() {
	//							return this.display.input.getField() == a()
	//						},
	//						isReadOnly: function() {
	//							return !(!this.options.readOnly && !this.doc.cantEdit)
	//						},
	//						scrollTo: Cn(function(e, t) {
	//							cn(this, e, t)
	//						}),
	//						getScrollInfo: function() {
	//							var e = this.display.scroller;
	//							return {
	//								left: e.scrollLeft,
	//								top: e.scrollTop,
	//								height: e.scrollHeight - ht(this) - this.display.barHeight,
	//								width: e.scrollWidth - ht(this) - this.display.barWidth,
	//								clientHeight: dt(this),
	//								clientWidth: ft(this)
	//							}
	//						},
	//						scrollIntoView: Cn(function(e, t) {
	//							null == e ? (e = {
	//								from: this.doc.sel.primary().head,
	//								to: null
	//							}, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
	//								from: D(e, 0),
	//								to: null
	//							} : null == e.from && (e = {
	//								from: e,
	//								to: null
	//							}), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function(e, t) {
	//								un(e), e.curOp.scrollToPos = t
	//							}(this, e) : hn(this, e.from, e.to, e.margin)
	//						}),
	//						setSize: Cn(function(e, t) {
	//							var n = this,
	//								r = function(e) {
	//									return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
	//								};
	//							null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && kt(this);
	//							var i = this.display.viewFrom;
	//							this.doc.iter(i, this.display.viewTo, function(e) {
	//								if (e.widgets)
	//									for (var t = 0; t < e.widgets.length; t++)
	//										if (e.widgets[t].noHScroll) {
	//											Tn(n, i, "widget");
	//											break
	//										}++i
	//							}), this.curOp.forceUpdate = !0, pe(this, "refresh", this)
	//						}),
	//						operation: function(e) {
	//							return wn(this, e)
	//						},
	//						startOperation: function() {
	//							return xn(this)
	//						},
	//						endOperation: function() {
	//							return bn(this)
	//						},
	//						refresh: Cn(function() {
	//							var e = this.display.cachedTextHeight;
	//							Ln(this), this.curOp.forceUpdate = !0, Ct(this), cn(this, this.doc.scrollLeft, this.doc.scrollTop), Wn(this), (null == e || Math.abs(e - Ft(this.display)) > .5) && jt(this), pe(this, "refresh", this)
	//						}),
	//						swapDoc: Cn(function(e) {
	//							var t = this.doc;
	//							return t.cm = null, Qn(this, e), Ct(this), this.display.input.reset(), cn(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Ye(this, "swapDoc", this, t), t
	//						}),
	//						getInputField: function() {
	//							return this.display.input.getField()
	//						},
	//						getWrapperElement: function() {
	//							return this.display.wrapper
	//						},
	//						getScrollerElement: function() {
	//							return this.display.scroller
	//						},
	//						getGutterElement: function() {
	//							return this.display.gutters
	//						}
	//					}, ye(e), e.registerHelper = function(t, r, i) {
	//						n.hasOwnProperty(t) || (n[t] = e[t] = {
	//							_global: []
	//						}), n[t][r] = i
	//					}, e.registerGlobalHelper = function(t, r, i, o) {
	//						e.registerHelper(t, r, o), n[t]._global.push({
	//							pred: i,
	//							val: o
	//						})
	//					}
	//				}(Si);
	//			var Aa = "iter insert remove copy getEditor constructor".split(" ");
	//			for (var Ea in la.prototype) la.prototype.hasOwnProperty(Ea) && f(Aa, Ea) < 0 && (Si.prototype[Ea] = function(e) {
	//				return function() {
	//					return e.apply(this.doc, arguments)
	//				}
	//			}(la.prototype[Ea]));
	//			return ye(la), Si.inputStyles = {
	//					textarea: Na,
	//					contenteditable: Ma
	//				}, Si.defineMode = function(e) {
	//					Si.defaults.mode || "null" == e || (Si.defaults.mode = e),
	//						function(e, t) {
	//							arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ho[e] = t
	//						}.apply(this, arguments)
	//				}, Si.defineMIME = function(e, t) {
	//					Wo[e] = t
	//				}, Si.defineMode("null", function() {
	//					return {
	//						token: function(e) {
	//							return e.skipToEnd()
	//						}
	//					}
	//				}), Si.defineMIME("text/plain", "null"), Si.defineExtension = function(e, t) {
	//					Si.prototype[e] = t
	//				}, Si.defineDocExtension = function(e, t) {
	//					la.prototype[e] = t
	//				}, Si.fromTextArea = function(e, t) {
	//					function n() {
	//						e.value = l.getValue()
	//					}
	//					if (t = t ? u(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
	//						var r = a();
	//						t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
	//					}
	//					var i;
	//					if (e.form && (No(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
	//						var o = e.form;
	//						i = o.submit;
	//						try {
	//							var s = o.submit = function() {
	//								n(), o.submit = i, o.submit(), o.submit = s
	//							}
	//						} catch (e) {}
	//					}
	//					t.finishInit = function(t) {
	//						t.save = n, t.getTextArea = function() {
	//							return e
	//						}, t.toTextArea = function() {
	//							t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (de(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i))
	//						}
	//					}, e.style.display = "none";
	//					var l = Si(function(t) {
	//						return e.parentNode.insertBefore(t, e.nextSibling)
	//					}, t);
	//					return l
	//				},
	//				function(e) {
	//					e.off = de, e.on = No, e.wheelEventPixels = zn, e.Doc = la, e.splitLines = Eo, e.countColumn = h, e.findColumn = d, e.isWordChar = x, e.Pass = go, e.signal = pe, e.Line = _o, e.changeEnd = Un, e.scrollbarModel = Yo, e.Pos = D, e.cmpPos = H, e.modes = Ho, e.mimeModes = Wo, e.resolveMode = Me, e.getMode = Ne, e.modeExtensions = Bo, e.extendMode = Ae, e.copyState = Ee, e.startState = Ie, e.innerMode = Oe, e.commands = ga, e.keyMap = ma, e.keyName = Qr, e.isModifierKey = Zr, e.lookupKey = Yr, e.normalizeKeyMap = Kr, e.StringStream = Fo, e.SharedTextMarker = aa, e.TextMarker = oa, e.LineWidget = ra, e.e_preventDefault = xe, e.e_stopPropagation = be, e.e_stop = ke, e.addClass = s, e.contains = o, e.rmClass = co, e.keyNames = ha
	//				}(Si), Si.version = "5.32.0", Si
	//		})
	//	}, {}],
	//	11: [function(e, t, n) {
	//		! function(r) {
	//			"object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror"), e("../markdown/markdown"), e("../../addon/mode/overlay")) : r(CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
	//			e.defineMode("gfm", function(n, r) {
	//				var i = 0,
	//					o = {
	//						startState: function() {
	//							return {
	//								code: !1,
	//								codeBlock: !1,
	//								ateSpace: !1
	//							}
	//						},
	//						copyState: function(e) {
	//							return {
	//								code: e.code,
	//								codeBlock: e.codeBlock,
	//								ateSpace: e.ateSpace
	//							}
	//						},
	//						token: function(e, n) {
	//							if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null);
	//							if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null;
	//							if ("`" === e.peek()) {
	//								e.next();
	//								var o = e.pos;
	//								e.eatWhile("`");
	//								var a = 1 + e.pos - o;
	//								return n.code ? a === i && (n.code = !1) : (i = a, n.code = !0), null
	//							}
	//							if (n.code) return e.next(), null;
	//							if (e.eatSpace()) return n.ateSpace = !0, null;
	//							if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, !1 !== r.gitHubSpice)) {
	//								if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link";
	//								if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link"
	//							}
	//							return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null)
	//						},
	//						blankLine: function(e) {
	//							return e.code = !1, null
	//						}
	//					},
	//					a = {
	//						taskLists: !0,
	//						strikethrough: !0,
	//						emoji: !0
	//					};
	//				for (var s in r) a[s] = r[s];
	//				return a.name = "markdown", e.overlayMode(e.getMode(n, a), o)
	//			}, "markdown"), e.defineMIME("text/x-gfm", "gfm")
	//		})
	//	}, {
	//		"../../addon/mode/overlay": 8,
	//		"../../lib/codemirror": 10,
	//		"../markdown/markdown": 12
	//	}],
	//	12: [function(e, t, n) {
	//		! function(r) {
	//			"object" == typeof n && "object" == typeof t ? r(e("../../lib/codemirror"), e("../xml/xml"), e("../meta")) : r(CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			e.defineMode("markdown", function(t, n) {
	//				function r(e, t, n) {
	//					return t.f = t.inline = n, n(e, t)
	//				}

	//				function i(e, t, n) {
	//					return t.f = t.block = n, n(e, t)
	//				}

	//				function o(e) {
	//					return e.linkTitle = !1, e.em = !1, e.strong = !1, e.strikethrough = !1, e.quote = 0, e.indentedCode = !1, e.f == s && (e.f = h, e.block = a), e.trailingSpace = 0, e.trailingSpaceNewLine = !1, e.prevLine = e.thisLine, e.thisLine = {
	//						stream: null
	//					}, null
	//				}

	//				function a(i, o) {
	//					var a = i.column() === o.indentation,
	//						s = function(e) {
	//							return !e || !/\S/.test(e.string)
	//						}(o.prevLine.stream),
	//						u = o.indentedCode,
	//						h = o.prevLine.hr,
	//						f = !1 !== o.list,
	//						d = (o.listStack[o.listStack.length - 1] || 0) + 3;
	//					o.indentedCode = !1;
	//					var m = o.indentation;
	//					if (null === o.indentationDiff && (o.indentationDiff = o.indentation, f)) {
	//						for (o.list = null; m < o.listStack[o.listStack.length - 1];) o.listStack.pop(), o.listStack.length ? o.indentation = o.listStack[o.listStack.length - 1] : o.list = !1;
	//						!1 !== o.list && (o.indentationDiff = m - o.listStack[o.listStack.length - 1])
	//					}
	//					var g = !(s || h || o.prevLine.header || f && u || o.prevLine.fencedCodeEnd),
	//						v = (!1 === o.list || h || s) && o.indentation <= d && i.match(w),
	//						y = null;
	//					if (o.indentationDiff >= 4 && (u || o.prevLine.fencedCodeEnd || o.prevLine.header || s)) return i.skipToEnd(), o.indentedCode = !0, x.code;
	//					if (i.eatSpace()) return null;
	//					if (a && o.indentation <= d && (y = i.match(S)) && y[1].length <= 6) return o.quote = 0, o.header = y[1].length, o.thisLine.header = !0, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, c(o);
	//					if (o.indentation <= d && i.eat(">")) return o.quote = a ? 1 : o.quote + 1, n.highlightFormatting && (o.formatting = "quote"), i.eatSpace(), c(o);
	//					if (!v && !o.setext && a && o.indentation <= d && (y = i.match(k))) {
	//						var b = y[1] ? "ol" : "ul";
	//						return o.indentation = m + i.current().length, o.list = !0, o.quote = 0, o.listStack.push(o.indentation), n.taskLists && i.match(C, !1) && (o.taskList = !0), o.f = o.inline, n.highlightFormatting && (o.formatting = ["list", "list-" + b]), c(o)
	//					}
	//					return a && o.indentation <= d && (y = i.match(M, !0)) ? (o.quote = 0, o.fencedEndRE = new RegExp(y[1] + "+ *$"), o.localMode = n.fencedCodeBlockHighlighting && function(n) {
	//						if (e.findModeByName) {
	//							var r = e.findModeByName(n);
	//							r && (n = r.mime || r.mimes[0])
	//						}
	//						var i = e.getMode(t, n);
	//						return "null" == i.name ? null : i
	//					}(y[2]), o.localMode && (o.localState = e.startState(o.localMode)), o.f = o.block = l, n.highlightFormatting && (o.formatting = "code-block"), o.code = -1, c(o)) : o.setext || !(g && f || o.quote || !1 !== o.list || o.code || v || N.test(i.string)) && (y = i.lookAhead(1)) && (y = y.match(L)) ? (o.setext ? (o.header = o.setext, o.setext = 0, i.skipToEnd(), n.highlightFormatting && (o.formatting = "header")) : (o.header = "=" == y[0].charAt(0) ? 1 : 2, o.setext = o.header), o.thisLine.header = !0, o.f = o.inline, c(o)) : v ? (i.skipToEnd(), o.hr = !0, o.thisLine.hr = !0, x.hr) : "[" === i.peek() ? r(i, o, p) : r(i, o, o.inline)
	//				}

	//				function s(t, n) {
	//					var r = v.token(t, n.htmlState);
	//					if (!y) {
	//						var i = e.innerMode(v, n.htmlState);
	//						("xml" == i.mode.name && null === i.state.tagStart && !i.state.context && i.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = h, n.block = a, n.htmlState = null)
	//					}
	//					return r
	//				}

	//				function l(e, t) {
	//					var r = t.listStack[t.listStack.length - 1] || 0,
	//						o = t.indentation < r,
	//						s = r + 3;
	//					if (t.fencedEndRE && t.indentation <= s && (o || e.match(t.fencedEndRE))) {
	//						n.highlightFormatting && (t.formatting = "code-block");
	//						var l;
	//						return o || (l = c(t)), t.localMode = t.localState = null, t.block = a, t.f = h, t.fencedEndRE = null, t.code = 0, t.thisLine.fencedCodeEnd = !0, o ? i(e, t, t.block) : l
	//					}
	//					return t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), x.code)
	//				}

	//				function c(e) {
	//					var t = [];
	//					if (e.formatting) {
	//						t.push(x.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]);
	//						for (var r = 0; r < e.formatting.length; r++) t.push(x.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(x.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(x.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error"))
	//					}
	//					if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null;
	//					if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null;
	//					if (e.linkHref ? t.push(x.linkHref, "url") : (e.strong && t.push(x.strong), e.em && t.push(x.em), e.strikethrough && t.push(x.strikethrough), e.emoji && t.push(x.emoji), e.linkText && t.push(x.linkText), e.code && t.push(x.code), e.image && t.push(x.image), e.imageAltText && t.push(x.imageAltText, "link"), e.imageMarker && t.push(x.imageMarker)), e.header && t.push(x.header, x.header + "-" + e.header), e.quote && (t.push(x.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(x.quote + "-" + e.quote) : t.push(x.quote + "-" + n.maxBlockquoteDepth)), !1 !== e.list) {
	//						var i = (e.listStack.length - 1) % 3;
	//						i ? 1 === i ? t.push(x.list2) : t.push(x.list3) : t.push(x.list1)
	//					}
	//					return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null
	//				}

	//				function u(e, t) {
	//					if (e.match(T, !0)) return c(t)
	//				}

	//				function h(t, r) {
	//					var o = r.text(t, r);
	//					if (void 0 !== o) return o;
	//					if (r.list) return r.list = null, c(r);
	//					if (r.taskList) {
	//						return " " === t.match(C, !0)[1] ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, c(r)
	//					}
	//					if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), c(r);
	//					var a = t.next();
	//					if (r.linkTitle) {
	//						r.linkTitle = !1;
	//						var l = a;
	//						"(" === a && (l = ")");
	//						var u = "^\\s*(?:[^" + (l = (l + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) + "\\\\]+|\\\\\\\\|\\\\.)" + l;
	//						if (t.match(new RegExp(u), !0)) return x.linkHref
	//					}
	//					if ("`" === a) {
	//						var p = r.formatting;
	//						n.highlightFormatting && (r.formatting = "code"), t.eatWhile("`");
	//						var m = t.current().length;
	//						if (0 != r.code || r.quote && 1 != m) {
	//							if (m == r.code) {
	//								var g = c(r);
	//								return r.code = 0, g
	//							}
	//							return r.formatting = p, c(r)
	//						}
	//						return r.code = m, c(r)
	//					}
	//					if (r.code) return c(r);
	//					if ("\\" === a && (t.next(), n.highlightFormatting)) {
	//						var y = c(r),
	//							b = x.formatting + "-escape";
	//						return y ? y + " " + b : b
	//					}
	//					if ("!" === a && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return r.imageMarker = !0, r.image = !0, n.highlightFormatting && (r.formatting = "image"), c(r);
	//					if ("[" === a && r.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)) return r.imageMarker = !1, r.imageAltText = !0, n.highlightFormatting && (r.formatting = "image"), c(r);
	//					if ("]" === a && r.imageAltText) {
	//						n.highlightFormatting && (r.formatting = "image");
	//						y = c(r);
	//						return r.imageAltText = !1, r.image = !1, r.inline = r.f = d, y
	//					}
	//					if ("[" === a && !r.image) return r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), c(r);
	//					if ("]" === a && r.linkText) {
	//						n.highlightFormatting && (r.formatting = "link");
	//						y = c(r);
	//						return r.linkText = !1, r.inline = r.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? d : h, y
	//					}
	//					if ("<" === a && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
	//						r.f = r.inline = f, n.highlightFormatting && (r.formatting = "link");
	//						return (y = c(r)) ? y += " " : y = "", y + x.linkInline
	//					}
	//					if ("<" === a && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
	//						r.f = r.inline = f, n.highlightFormatting && (r.formatting = "link");
	//						return (y = c(r)) ? y += " " : y = "", y + x.linkEmail
	//					}
	//					if (n.xml && "<" === a && t.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i, !1)) {
	//						var w = t.string.indexOf(">", t.pos);
	//						if (-1 != w) {
	//							var k = t.string.substring(t.start, w);
	//							/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k) && (r.md_inside = !0)
	//						}
	//						return t.backUp(1), r.htmlState = e.startState(v), i(t, r, s)
	//					}
	//					if (n.xml && "<" === a && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag";
	//					if ("*" === a || "_" === a) {
	//						for (var S = 1, L = 1 == t.pos ? " " : t.string.charAt(t.pos - 2); S < 3 && t.eat(a);) S++;
	//						var T = t.peek() || " ",
	//							M = !/\s/.test(T) && (!A.test(T) || /\s/.test(L) || A.test(L)),
	//							N = !/\s/.test(L) && (!A.test(L) || /\s/.test(T) || A.test(T)),
	//							E = null,
	//							O = null;
	//						if (S % 2 && (r.em || !M || "*" !== a && N && !A.test(L) ? r.em != a || !N || "*" !== a && M && !A.test(T) || (E = !1) : E = !0), S > 1 && (r.strong || !M || "*" !== a && N && !A.test(L) ? r.strong != a || !N || "*" !== a && M && !A.test(T) || (O = !1) : O = !0), null != O || null != E) {
	//							n.highlightFormatting && (r.formatting = null == E ? "strong" : null == O ? "em" : "strong em"), !0 === E && (r.em = a), !0 === O && (r.strong = a);
	//							g = c(r);
	//							return !1 === E && (r.em = !1), !1 === O && (r.strong = !1), g
	//						}
	//					} else if (" " === a && (t.eat("*") || t.eat("_"))) {
	//						if (" " === t.peek()) return c(r);
	//						t.backUp(1)
	//					}
	//					if (n.strikethrough)
	//						if ("~" === a && t.eatWhile(a)) {
	//							if (r.strikethrough) {
	//								n.highlightFormatting && (r.formatting = "strikethrough");
	//								g = c(r);
	//								return r.strikethrough = !1, g
	//							}
	//							if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), c(r)
	//						} else if (" " === a && t.match(/^~~/, !0)) {
	//						if (" " === t.peek()) return c(r);
	//						t.backUp(2)
	//					}
	//					if (n.emoji && ":" === a && t.match(/^[a-z_\d+-]+:/)) {
	//						r.emoji = !0, n.highlightFormatting && (r.formatting = "emoji");
	//						var I = c(r);
	//						return r.emoji = !1, I
	//					}
	//					return " " === a && (t.match(/ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), c(r)
	//				}

	//				function f(e, t) {
	//					if (">" === e.next()) {
	//						t.f = t.inline = h, n.highlightFormatting && (t.formatting = "link");
	//						var r = c(t);
	//						return r ? r += " " : r = "", r + x.linkInline
	//					}
	//					return e.match(/^[^>]+/, !0), x.linkInline
	//				}

	//				function d(e, t) {
	//					if (e.eatSpace()) return null;
	//					var r = e.next();
	//					return "(" === r || "[" === r ? (t.f = t.inline = function(e) {
	//						return function(t, r) {
	//							var i = t.next();
	//							if (i === e) {
	//								r.f = r.inline = h, n.highlightFormatting && (r.formatting = "link-string");
	//								var o = c(r);
	//								return r.linkHref = !1, o
	//							}
	//							return t.match(E[e]), r.linkHref = !0, c(r)
	//						}
	//					}("(" === r ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, c(t)) : "error"
	//				}

	//				function p(e, t) {
	//					return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = m, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, c(t)) : r(e, t, h)
	//				}

	//				function m(e, t) {
	//					if (e.match(/^\]:/, !0)) {
	//						t.f = t.inline = g, n.highlightFormatting && (t.formatting = "link");
	//						var r = c(t);
	//						return t.linkText = !1, r
	//					}
	//					return e.match(/^([^\]\\]|\\.)+/, !0), x.linkText
	//				}

	//				function g(e, t) {
	//					return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = h, x.linkHref + " url")
	//				}
	//				var v = e.getMode(t, "text/html"),
	//					y = "null" == v.name;
	//				void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.emoji && (n.emoji = !1), void 0 === n.fencedCodeBlockHighlighting && (n.fencedCodeBlockHighlighting = !0), void 0 === n.xml && (n.xml = !0), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});
	//				var x = {
	//					header: "header",
	//					code: "comment",
	//					quote: "quote",
	//					list1: "variable-2",
	//					list2: "variable-3",
	//					list3: "keyword",
	//					hr: "hr",
	//					image: "image",
	//					imageAltText: "image-alt-text",
	//					imageMarker: "image-marker",
	//					formatting: "formatting",
	//					linkInline: "link",
	//					linkEmail: "link",
	//					linkText: "link",
	//					linkHref: "string",
	//					em: "em",
	//					strong: "strong",
	//					strikethrough: "strikethrough",
	//					emoji: "builtin"
	//				};
	//				for (var b in x) x.hasOwnProperty(b) && n.tokenTypeOverrides[b] && (x[b] = n.tokenTypeOverrides[b]);
	//				var w = /^([*\-_])(?:\s*\1){2,}\s*$/,
	//					k = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
	//					C = /^\[(x| )\](?=\s)/i,
	//					S = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
	//					L = /^ *(?:\={1,}|-{1,})\s*$/,
	//					T = /^[^#!\[\]*_\\<>` "'(~:]+/,
	//					M = /^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,
	//					N = /^\s*\[[^\]]+?\]:\s*\S+(\s*\S*\s*)?$/,
	//					A = /[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~—]/,
	//					E = {
	//						")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
	//						"]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
	//					},
	//					O = {
	//						startState: function() {
	//							return {
	//								f: a,
	//								prevLine: {
	//									stream: null
	//								},
	//								thisLine: {
	//									stream: null
	//								},
	//								block: a,
	//								htmlState: null,
	//								indentation: 0,
	//								inline: h,
	//								text: u,
	//								formatting: !1,
	//								linkText: !1,
	//								linkHref: !1,
	//								linkTitle: !1,
	//								code: 0,
	//								em: !1,
	//								strong: !1,
	//								header: 0,
	//								setext: 0,
	//								hr: !1,
	//								taskList: !1,
	//								list: !1,
	//								listStack: [],
	//								quote: 0,
	//								trailingSpace: 0,
	//								trailingSpaceNewLine: !1,
	//								strikethrough: !1,
	//								emoji: !1,
	//								fencedEndRE: null
	//							}
	//						},
	//						copyState: function(t) {
	//							return {
	//								f: t.f,
	//								prevLine: t.prevLine,
	//								thisLine: t.thisLine,
	//								block: t.block,
	//								htmlState: t.htmlState && e.copyState(v, t.htmlState),
	//								indentation: t.indentation,
	//								localMode: t.localMode,
	//								localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
	//								inline: t.inline,
	//								text: t.text,
	//								formatting: !1,
	//								linkText: t.linkText,
	//								linkTitle: t.linkTitle,
	//								code: t.code,
	//								em: t.em,
	//								strong: t.strong,
	//								strikethrough: t.strikethrough,
	//								emoji: t.emoji,
	//								header: t.header,
	//								setext: t.setext,
	//								hr: t.hr,
	//								taskList: t.taskList,
	//								list: t.list,
	//								listStack: t.listStack.slice(0),
	//								quote: t.quote,
	//								indentedCode: t.indentedCode,
	//								trailingSpace: t.trailingSpace,
	//								trailingSpaceNewLine: t.trailingSpaceNewLine,
	//								md_inside: t.md_inside,
	//								fencedEndRE: t.fencedEndRE
	//							}
	//						},
	//						token: function(e, t) {
	//							if (t.formatting = !1, e != t.thisLine.stream) {
	//								if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0)) return o(t), null;
	//								if (t.prevLine = t.thisLine, t.thisLine = {
	//										stream: e
	//									}, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, !t.localState && (t.f = t.block, t.f != s)) {
	//									var n = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length;
	//									if (t.indentation = n, t.indentationDiff = null, n > 0) return null
	//								}
	//							}
	//							return t.f(e, t)
	//						},
	//						innerMode: function(e) {
	//							return e.block == s ? {
	//								state: e.htmlState,
	//								mode: v
	//							} : e.localState ? {
	//								state: e.localState,
	//								mode: e.localMode
	//							} : {
	//								state: e,
	//								mode: O
	//							}
	//						},
	//						indent: function(t, n, r) {
	//							return t.block == s && v.indent ? v.indent(t.htmlState, n, r) : t.localState && t.localMode.indent ? t.localMode.indent(t.localState, n, r) : e.Pass
	//						},
	//						blankLine: o,
	//						getType: c,
	//						closeBrackets: "()[]{}''\"\"``",
	//						fold: "markdown"
	//					};
	//				return O
	//			}, "xml"), e.defineMIME("text/x-markdown", "markdown")
	//		})
	//	}, {
	//		"../../lib/codemirror": 10,
	//		"../meta": 13,
	//		"../xml/xml": 14
	//	}],
	//	13: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			e.modeInfo = [{
	//				name: "APL",
	//				mime: "text/apl",
	//				mode: "apl",
	//				ext: ["dyalog", "apl"]
	//			}, {
	//				name: "PGP",
	//				mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"],
	//				mode: "asciiarmor",
	//				ext: ["asc", "pgp", "sig"]
	//			}, {
	//				name: "ASN.1",
	//				mime: "text/x-ttcn-asn",
	//				mode: "asn.1",
	//				ext: ["asn", "asn1"]
	//			}, {
	//				name: "Asterisk",
	//				mime: "text/x-asterisk",
	//				mode: "asterisk",
	//				file: /^extensions\.conf$/i
	//			}, {
	//				name: "Brainfuck",
	//				mime: "text/x-brainfuck",
	//				mode: "brainfuck",
	//				ext: ["b", "bf"]
	//			}, {
	//				name: "C",
	//				mime: "text/x-csrc",
	//				mode: "clike",
	//				ext: ["c", "h"]
	//			}, {
	//				name: "C++",
	//				mime: "text/x-c++src",
	//				mode: "clike",
	//				ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
	//				alias: ["cpp"]
	//			}, {
	//				name: "Cobol",
	//				mime: "text/x-cobol",
	//				mode: "cobol",
	//				ext: ["cob", "cpy"]
	//			}, {
	//				name: "C#",
	//				mime: "text/x-csharp",
	//				mode: "clike",
	//				ext: ["cs"],
	//				alias: ["csharp"]
	//			}, {
	//				name: "Clojure",
	//				mime: "text/x-clojure",
	//				mode: "clojure",
	//				ext: ["clj", "cljc", "cljx"]
	//			}, {
	//				name: "ClojureScript",
	//				mime: "text/x-clojurescript",
	//				mode: "clojure",
	//				ext: ["cljs"]
	//			}, {
	//				name: "Closure Stylesheets (GSS)",
	//				mime: "text/x-gss",
	//				mode: "css",
	//				ext: ["gss"]
	//			}, {
	//				name: "CMake",
	//				mime: "text/x-cmake",
	//				mode: "cmake",
	//				ext: ["cmake", "cmake.in"],
	//				file: /^CMakeLists.txt$/
	//			}, {
	//				name: "CoffeeScript",
	//				mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"],
	//				mode: "coffeescript",
	//				ext: ["coffee"],
	//				alias: ["coffee", "coffee-script"]
	//			}, {
	//				name: "Common Lisp",
	//				mime: "text/x-common-lisp",
	//				mode: "commonlisp",
	//				ext: ["cl", "lisp", "el"],
	//				alias: ["lisp"]
	//			}, {
	//				name: "Cypher",
	//				mime: "application/x-cypher-query",
	//				mode: "cypher",
	//				ext: ["cyp", "cypher"]
	//			}, {
	//				name: "Cython",
	//				mime: "text/x-cython",
	//				mode: "python",
	//				ext: ["pyx", "pxd", "pxi"]
	//			}, {
	//				name: "Crystal",
	//				mime: "text/x-crystal",
	//				mode: "crystal",
	//				ext: ["cr"]
	//			}, {
	//				name: "CSS",
	//				mime: "text/css",
	//				mode: "css",
	//				ext: ["css"]
	//			}, {
	//				name: "CQL",
	//				mime: "text/x-cassandra",
	//				mode: "sql",
	//				ext: ["cql"]
	//			}, {
	//				name: "D",
	//				mime: "text/x-d",
	//				mode: "d",
	//				ext: ["d"]
	//			}, {
	//				name: "Dart",
	//				mimes: ["application/dart", "text/x-dart"],
	//				mode: "dart",
	//				ext: ["dart"]
	//			}, {
	//				name: "diff",
	//				mime: "text/x-diff",
	//				mode: "diff",
	//				ext: ["diff", "patch"]
	//			}, {
	//				name: "Django",
	//				mime: "text/x-django",
	//				mode: "django"
	//			}, {
	//				name: "Dockerfile",
	//				mime: "text/x-dockerfile",
	//				mode: "dockerfile",
	//				file: /^Dockerfile$/
	//			}, {
	//				name: "DTD",
	//				mime: "application/xml-dtd",
	//				mode: "dtd",
	//				ext: ["dtd"]
	//			}, {
	//				name: "Dylan",
	//				mime: "text/x-dylan",
	//				mode: "dylan",
	//				ext: ["dylan", "dyl", "intr"]
	//			}, {
	//				name: "EBNF",
	//				mime: "text/x-ebnf",
	//				mode: "ebnf"
	//			}, {
	//				name: "ECL",
	//				mime: "text/x-ecl",
	//				mode: "ecl",
	//				ext: ["ecl"]
	//			}, {
	//				name: "edn",
	//				mime: "application/edn",
	//				mode: "clojure",
	//				ext: ["edn"]
	//			}, {
	//				name: "Eiffel",
	//				mime: "text/x-eiffel",
	//				mode: "eiffel",
	//				ext: ["e"]
	//			}, {
	//				name: "Elm",
	//				mime: "text/x-elm",
	//				mode: "elm",
	//				ext: ["elm"]
	//			}, {
	//				name: "Embedded Javascript",
	//				mime: "application/x-ejs",
	//				mode: "htmlembedded",
	//				ext: ["ejs"]
	//			}, {
	//				name: "Embedded Ruby",
	//				mime: "application/x-erb",
	//				mode: "htmlembedded",
	//				ext: ["erb"]
	//			}, {
	//				name: "Erlang",
	//				mime: "text/x-erlang",
	//				mode: "erlang",
	//				ext: ["erl"]
	//			}, {
	//				name: "Esper",
	//				mime: "text/x-esper",
	//				mode: "sql"
	//			}, {
	//				name: "Factor",
	//				mime: "text/x-factor",
	//				mode: "factor",
	//				ext: ["factor"]
	//			}, {
	//				name: "FCL",
	//				mime: "text/x-fcl",
	//				mode: "fcl"
	//			}, {
	//				name: "Forth",
	//				mime: "text/x-forth",
	//				mode: "forth",
	//				ext: ["forth", "fth", "4th"]
	//			}, {
	//				name: "Fortran",
	//				mime: "text/x-fortran",
	//				mode: "fortran",
	//				ext: ["f", "for", "f77", "f90"]
	//			}, {
	//				name: "F#",
	//				mime: "text/x-fsharp",
	//				mode: "mllike",
	//				ext: ["fs"],
	//				alias: ["fsharp"]
	//			}, {
	//				name: "Gas",
	//				mime: "text/x-gas",
	//				mode: "gas",
	//				ext: ["s"]
	//			}, {
	//				name: "Gherkin",
	//				mime: "text/x-feature",
	//				mode: "gherkin",
	//				ext: ["feature"]
	//			}, {
	//				name: "GitHub Flavored Markdown",
	//				mime: "text/x-gfm",
	//				mode: "gfm",
	//				file: /^(readme|contributing|history).md$/i
	//			}, {
	//				name: "Go",
	//				mime: "text/x-go",
	//				mode: "go",
	//				ext: ["go"]
	//			}, {
	//				name: "Groovy",
	//				mime: "text/x-groovy",
	//				mode: "groovy",
	//				ext: ["groovy", "gradle"],
	//				file: /^Jenkinsfile$/
	//			}, {
	//				name: "HAML",
	//				mime: "text/x-haml",
	//				mode: "haml",
	//				ext: ["haml"]
	//			}, {
	//				name: "Haskell",
	//				mime: "text/x-haskell",
	//				mode: "haskell",
	//				ext: ["hs"]
	//			}, {
	//				name: "Haskell (Literate)",
	//				mime: "text/x-literate-haskell",
	//				mode: "haskell-literate",
	//				ext: ["lhs"]
	//			}, {
	//				name: "Haxe",
	//				mime: "text/x-haxe",
	//				mode: "haxe",
	//				ext: ["hx"]
	//			}, {
	//				name: "HXML",
	//				mime: "text/x-hxml",
	//				mode: "haxe",
	//				ext: ["hxml"]
	//			}, {
	//				name: "ASP.NET",
	//				mime: "application/x-aspx",
	//				mode: "htmlembedded",
	//				ext: ["aspx"],
	//				alias: ["asp", "aspx"]
	//			}, {
	//				name: "HTML",
	//				mime: "text/html",
	//				mode: "htmlmixed",
	//				ext: ["html", "htm"],
	//				alias: ["xhtml"]
	//			}, {
	//				name: "HTTP",
	//				mime: "message/http",
	//				mode: "http"
	//			}, {
	//				name: "IDL",
	//				mime: "text/x-idl",
	//				mode: "idl",
	//				ext: ["pro"]
	//			}, {
	//				name: "Pug",
	//				mime: "text/x-pug",
	//				mode: "pug",
	//				ext: ["jade", "pug"],
	//				alias: ["jade"]
	//			}, {
	//				name: "Java",
	//				mime: "text/x-java",
	//				mode: "clike",
	//				ext: ["java"]
	//			}, {
	//				name: "Java Server Pages",
	//				mime: "application/x-jsp",
	//				mode: "htmlembedded",
	//				ext: ["jsp"],
	//				alias: ["jsp"]
	//			}, {
	//				name: "JavaScript",
	//				mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
	//				mode: "javascript",
	//				ext: ["js"],
	//				alias: ["ecmascript", "js", "node"]
	//			}, {
	//				name: "JSON",
	//				mimes: ["application/json", "application/x-json"],
	//				mode: "javascript",
	//				ext: ["json", "map"],
	//				alias: ["json5"]
	//			}, {
	//				name: "JSON-LD",
	//				mime: "application/ld+json",
	//				mode: "javascript",
	//				ext: ["jsonld"],
	//				alias: ["jsonld"]
	//			}, {
	//				name: "JSX",
	//				mime: "text/jsx",
	//				mode: "jsx",
	//				ext: ["jsx"]
	//			}, {
	//				name: "Jinja2",
	//				mime: "null",
	//				mode: "jinja2"
	//			}, {
	//				name: "Julia",
	//				mime: "text/x-julia",
	//				mode: "julia",
	//				ext: ["jl"]
	//			}, {
	//				name: "Kotlin",
	//				mime: "text/x-kotlin",
	//				mode: "clike",
	//				ext: ["kt"]
	//			}, {
	//				name: "LESS",
	//				mime: "text/x-less",
	//				mode: "css",
	//				ext: ["less"]
	//			}, {
	//				name: "LiveScript",
	//				mime: "text/x-livescript",
	//				mode: "livescript",
	//				ext: ["ls"],
	//				alias: ["ls"]
	//			}, {
	//				name: "Lua",
	//				mime: "text/x-lua",
	//				mode: "lua",
	//				ext: ["lua"]
	//			}, {
	//				name: "Markdown",
	//				mime: "text/x-markdown",
	//				mode: "markdown",
	//				ext: ["markdown", "md", "mkd"]
	//			}, {
	//				name: "mIRC",
	//				mime: "text/mirc",
	//				mode: "mirc"
	//			}, {
	//				name: "MariaDB SQL",
	//				mime: "text/x-mariadb",
	//				mode: "sql"
	//			}, {
	//				name: "Mathematica",
	//				mime: "text/x-mathematica",
	//				mode: "mathematica",
	//				ext: ["m", "nb"]
	//			}, {
	//				name: "Modelica",
	//				mime: "text/x-modelica",
	//				mode: "modelica",
	//				ext: ["mo"]
	//			}, {
	//				name: "MUMPS",
	//				mime: "text/x-mumps",
	//				mode: "mumps",
	//				ext: ["mps"]
	//			}, {
	//				name: "MS SQL",
	//				mime: "text/x-mssql",
	//				mode: "sql"
	//			}, {
	//				name: "mbox",
	//				mime: "application/mbox",
	//				mode: "mbox",
	//				ext: ["mbox"]
	//			}, {
	//				name: "MySQL",
	//				mime: "text/x-mysql",
	//				mode: "sql"
	//			}, {
	//				name: "Nginx",
	//				mime: "text/x-nginx-conf",
	//				mode: "nginx",
	//				file: /nginx.*\.conf$/i
	//			}, {
	//				name: "NSIS",
	//				mime: "text/x-nsis",
	//				mode: "nsis",
	//				ext: ["nsh", "nsi"]
	//			}, {
	//				name: "NTriples",
	//				mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
	//				mode: "ntriples",
	//				ext: ["nt", "nq"]
	//			}, {
	//				name: "Objective C",
	//				mime: "text/x-objectivec",
	//				mode: "clike",
	//				ext: ["m", "mm"],
	//				alias: ["objective-c", "objc"]
	//			}, {
	//				name: "OCaml",
	//				mime: "text/x-ocaml",
	//				mode: "mllike",
	//				ext: ["ml", "mli", "mll", "mly"]
	//			}, {
	//				name: "Octave",
	//				mime: "text/x-octave",
	//				mode: "octave",
	//				ext: ["m"]
	//			}, {
	//				name: "Oz",
	//				mime: "text/x-oz",
	//				mode: "oz",
	//				ext: ["oz"]
	//			}, {
	//				name: "Pascal",
	//				mime: "text/x-pascal",
	//				mode: "pascal",
	//				ext: ["p", "pas"]
	//			}, {
	//				name: "PEG.js",
	//				mime: "null",
	//				mode: "pegjs",
	//				ext: ["jsonld"]
	//			}, {
	//				name: "Perl",
	//				mime: "text/x-perl",
	//				mode: "perl",
	//				ext: ["pl", "pm"]
	//			}, {
	//				name: "PHP",
	//				mime: ["application/x-httpd-php", "text/x-php"],
	//				mode: "php",
	//				ext: ["php", "php3", "php4", "php5", "php7", "phtml"]
	//			}, {
	//				name: "Pig",
	//				mime: "text/x-pig",
	//				mode: "pig",
	//				ext: ["pig"]
	//			}, {
	//				name: "Plain Text",
	//				mime: "text/plain",
	//				mode: "null",
	//				ext: ["txt", "text", "conf", "def", "list", "log"]
	//			}, {
	//				name: "PLSQL",
	//				mime: "text/x-plsql",
	//				mode: "sql",
	//				ext: ["pls"]
	//			}, {
	//				name: "PowerShell",
	//				mime: "application/x-powershell",
	//				mode: "powershell",
	//				ext: ["ps1", "psd1", "psm1"]
	//			}, {
	//				name: "Properties files",
	//				mime: "text/x-properties",
	//				mode: "properties",
	//				ext: ["properties", "ini", "in"],
	//				alias: ["ini", "properties"]
	//			}, {
	//				name: "ProtoBuf",
	//				mime: "text/x-protobuf",
	//				mode: "protobuf",
	//				ext: ["proto"]
	//			}, {
	//				name: "Python",
	//				mime: "text/x-python",
	//				mode: "python",
	//				ext: ["BUILD", "bzl", "py", "pyw"],
	//				file: /^(BUCK|BUILD)$/
	//			}, {
	//				name: "Puppet",
	//				mime: "text/x-puppet",
	//				mode: "puppet",
	//				ext: ["pp"]
	//			}, {
	//				name: "Q",
	//				mime: "text/x-q",
	//				mode: "q",
	//				ext: ["q"]
	//			}, {
	//				name: "R",
	//				mime: "text/x-rsrc",
	//				mode: "r",
	//				ext: ["r", "R"],
	//				alias: ["rscript"]
	//			}, {
	//				name: "reStructuredText",
	//				mime: "text/x-rst",
	//				mode: "rst",
	//				ext: ["rst"],
	//				alias: ["rst"]
	//			}, {
	//				name: "RPM Changes",
	//				mime: "text/x-rpm-changes",
	//				mode: "rpm"
	//			}, {
	//				name: "RPM Spec",
	//				mime: "text/x-rpm-spec",
	//				mode: "rpm",
	//				ext: ["spec"]
	//			}, {
	//				name: "Ruby",
	//				mime: "text/x-ruby",
	//				mode: "ruby",
	//				ext: ["rb"],
	//				alias: ["jruby", "macruby", "rake", "rb", "rbx"]
	//			}, {
	//				name: "Rust",
	//				mime: "text/x-rustsrc",
	//				mode: "rust",
	//				ext: ["rs"]
	//			}, {
	//				name: "SAS",
	//				mime: "text/x-sas",
	//				mode: "sas",
	//				ext: ["sas"]
	//			}, {
	//				name: "Sass",
	//				mime: "text/x-sass",
	//				mode: "sass",
	//				ext: ["sass"]
	//			}, {
	//				name: "Scala",
	//				mime: "text/x-scala",
	//				mode: "clike",
	//				ext: ["scala"]
	//			}, {
	//				name: "Scheme",
	//				mime: "text/x-scheme",
	//				mode: "scheme",
	//				ext: ["scm", "ss"]
	//			}, {
	//				name: "SCSS",
	//				mime: "text/x-scss",
	//				mode: "css",
	//				ext: ["scss"]
	//			}, {
	//				name: "Shell",
	//				mimes: ["text/x-sh", "application/x-sh"],
	//				mode: "shell",
	//				ext: ["sh", "ksh", "bash"],
	//				alias: ["bash", "sh", "zsh"],
	//				file: /^PKGBUILD$/
	//			}, {
	//				name: "Sieve",
	//				mime: "application/sieve",
	//				mode: "sieve",
	//				ext: ["siv", "sieve"]
	//			}, {
	//				name: "Slim",
	//				mimes: ["text/x-slim", "application/x-slim"],
	//				mode: "slim",
	//				ext: ["slim"]
	//			}, {
	//				name: "Smalltalk",
	//				mime: "text/x-stsrc",
	//				mode: "smalltalk",
	//				ext: ["st"]
	//			}, {
	//				name: "Smarty",
	//				mime: "text/x-smarty",
	//				mode: "smarty",
	//				ext: ["tpl"]
	//			}, {
	//				name: "Solr",
	//				mime: "text/x-solr",
	//				mode: "solr"
	//			}, {
	//				name: "Soy",
	//				mime: "text/x-soy",
	//				mode: "soy",
	//				ext: ["soy"],
	//				alias: ["closure template"]
	//			}, {
	//				name: "SPARQL",
	//				mime: "application/sparql-query",
	//				mode: "sparql",
	//				ext: ["rq", "sparql"],
	//				alias: ["sparul"]
	//			}, {
	//				name: "Spreadsheet",
	//				mime: "text/x-spreadsheet",
	//				mode: "spreadsheet",
	//				alias: ["excel", "formula"]
	//			}, {
	//				name: "SQL",
	//				mime: "text/x-sql",
	//				mode: "sql",
	//				ext: ["sql"]
	//			}, {
	//				name: "SQLite",
	//				mime: "text/x-sqlite",
	//				mode: "sql"
	//			}, {
	//				name: "Squirrel",
	//				mime: "text/x-squirrel",
	//				mode: "clike",
	//				ext: ["nut"]
	//			}, {
	//				name: "Stylus",
	//				mime: "text/x-styl",
	//				mode: "stylus",
	//				ext: ["styl"]
	//			}, {
	//				name: "Swift",
	//				mime: "text/x-swift",
	//				mode: "swift",
	//				ext: ["swift"]
	//			}, {
	//				name: "sTeX",
	//				mime: "text/x-stex",
	//				mode: "stex"
	//			}, {
	//				name: "LaTeX",
	//				mime: "text/x-latex",
	//				mode: "stex",
	//				ext: ["text", "ltx"],
	//				alias: ["tex"]
	//			}, {
	//				name: "SystemVerilog",
	//				mime: "text/x-systemverilog",
	//				mode: "verilog",
	//				ext: ["v", "sv", "svh"]
	//			}, {
	//				name: "Tcl",
	//				mime: "text/x-tcl",
	//				mode: "tcl",
	//				ext: ["tcl"]
	//			}, {
	//				name: "Textile",
	//				mime: "text/x-textile",
	//				mode: "textile",
	//				ext: ["textile"]
	//			}, {
	//				name: "TiddlyWiki ",
	//				mime: "text/x-tiddlywiki",
	//				mode: "tiddlywiki"
	//			}, {
	//				name: "Tiki wiki",
	//				mime: "text/tiki",
	//				mode: "tiki"
	//			}, {
	//				name: "TOML",
	//				mime: "text/x-toml",
	//				mode: "toml",
	//				ext: ["toml"]
	//			}, {
	//				name: "Tornado",
	//				mime: "text/x-tornado",
	//				mode: "tornado"
	//			}, {
	//				name: "troff",
	//				mime: "text/troff",
	//				mode: "troff",
	//				ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
	//			}, {
	//				name: "TTCN",
	//				mime: "text/x-ttcn",
	//				mode: "ttcn",
	//				ext: ["ttcn", "ttcn3", "ttcnpp"]
	//			}, {
	//				name: "TTCN_CFG",
	//				mime: "text/x-ttcn-cfg",
	//				mode: "ttcn-cfg",
	//				ext: ["cfg"]
	//			}, {
	//				name: "Turtle",
	//				mime: "text/turtle",
	//				mode: "turtle",
	//				ext: ["ttl"]
	//			}, {
	//				name: "TypeScript",
	//				mime: "application/typescript",
	//				mode: "javascript",
	//				ext: ["ts"],
	//				alias: ["ts"]
	//			}, {
	//				name: "TypeScript-JSX",
	//				mime: "text/typescript-jsx",
	//				mode: "jsx",
	//				ext: ["tsx"],
	//				alias: ["tsx"]
	//			}, {
	//				name: "Twig",
	//				mime: "text/x-twig",
	//				mode: "twig"
	//			}, {
	//				name: "Web IDL",
	//				mime: "text/x-webidl",
	//				mode: "webidl",
	//				ext: ["webidl"]
	//			}, {
	//				name: "VB.NET",
	//				mime: "text/x-vb",
	//				mode: "vb",
	//				ext: ["vb"]
	//			}, {
	//				name: "VBScript",
	//				mime: "text/vbscript",
	//				mode: "vbscript",
	//				ext: ["vbs"]
	//			}, {
	//				name: "Velocity",
	//				mime: "text/velocity",
	//				mode: "velocity",
	//				ext: ["vtl"]
	//			}, {
	//				name: "Verilog",
	//				mime: "text/x-verilog",
	//				mode: "verilog",
	//				ext: ["v"]
	//			}, {
	//				name: "VHDL",
	//				mime: "text/x-vhdl",
	//				mode: "vhdl",
	//				ext: ["vhd", "vhdl"]
	//			}, {
	//				name: "Vue.js Component",
	//				mimes: ["script/x-vue", "text/x-vue"],
	//				mode: "vue",
	//				ext: ["vue"]
	//			}, {
	//				name: "XML",
	//				mimes: ["application/xml", "text/xml"],
	//				mode: "xml",
	//				ext: ["xml", "xsl", "xsd", "svg"],
	//				alias: ["rss", "wsdl", "xsd"]
	//			}, {
	//				name: "XQuery",
	//				mime: "application/xquery",
	//				mode: "xquery",
	//				ext: ["xy", "xquery"]
	//			}, {
	//				name: "Yacas",
	//				mime: "text/x-yacas",
	//				mode: "yacas",
	//				ext: ["ys"]
	//			}, {
	//				name: "YAML",
	//				mimes: ["text/x-yaml", "text/yaml"],
	//				mode: "yaml",
	//				ext: ["yaml", "yml"],
	//				alias: ["yml"]
	//			}, {
	//				name: "Z80",
	//				mime: "text/x-z80",
	//				mode: "z80",
	//				ext: ["z80"]
	//			}, {
	//				name: "mscgen",
	//				mime: "text/x-mscgen",
	//				mode: "mscgen",
	//				ext: ["mscgen", "mscin", "msc"]
	//			}, {
	//				name: "xu",
	//				mime: "text/x-xu",
	//				mode: "mscgen",
	//				ext: ["xu"]
	//			}, {
	//				name: "msgenny",
	//				mime: "text/x-msgenny",
	//				mode: "mscgen",
	//				ext: ["msgenny"]
	//			}];
	//			for (var t = 0; t < e.modeInfo.length; t++) {
	//				var n = e.modeInfo[t];
	//				n.mimes && (n.mime = n.mimes[0])
	//			}
	//			e.findModeByMIME = function(t) {
	//				t = t.toLowerCase();
	//				for (var n = 0; n < e.modeInfo.length; n++) {
	//					var r = e.modeInfo[n];
	//					if (r.mime == t) return r;
	//					if (r.mimes)
	//						for (var i = 0; i < r.mimes.length; i++)
	//							if (r.mimes[i] == t) return r
	//				}
	//				return /\+xml$/.test(t) ? e.findModeByMIME("application/xml") : /\+json$/.test(t) ? e.findModeByMIME("application/json") : void 0
	//			}, e.findModeByExtension = function(t) {
	//				for (var n = 0; n < e.modeInfo.length; n++) {
	//					var r = e.modeInfo[n];
	//					if (r.ext)
	//						for (var i = 0; i < r.ext.length; i++)
	//							if (r.ext[i] == t) return r
	//				}
	//			}, e.findModeByFileName = function(t) {
	//				for (var n = 0; n < e.modeInfo.length; n++) {
	//					var r = e.modeInfo[n];
	//					if (r.file && r.file.test(t)) return r
	//				}
	//				var i = t.lastIndexOf("."),
	//					o = i > -1 && t.substring(i + 1, t.length);
	//				if (o) return e.findModeByExtension(o)
	//			}, e.findModeByName = function(t) {
	//				t = t.toLowerCase();
	//				for (var n = 0; n < e.modeInfo.length; n++) {
	//					var r = e.modeInfo[n];
	//					if (r.name.toLowerCase() == t) return r;
	//					if (r.alias)
	//						for (var i = 0; i < r.alias.length; i++)
	//							if (r.alias[i].toLowerCase() == t) return r
	//				}
	//			}
	//		})
	//	}, {
	//		"../lib/codemirror": 10
	//	}],
	//	14: [function(e, t, n) {
	//		! function(r) {
	//			r("object" == typeof n && "object" == typeof t ? e("../../lib/codemirror") : CodeMirror)
	//		}(function(e) {
	//			"use strict";
	//			var t = {
	//					autoSelfClosers: {
	//						area: !0,
	//						base: !0,
	//						br: !0,
	//						col: !0,
	//						command: !0,
	//						embed: !0,
	//						frame: !0,
	//						hr: !0,
	//						img: !0,
	//						input: !0,
	//						keygen: !0,
	//						link: !0,
	//						meta: !0,
	//						param: !0,
	//						source: !0,
	//						track: !0,
	//						wbr: !0,
	//						menuitem: !0
	//					},
	//					implicitlyClosed: {
	//						dd: !0,
	//						li: !0,
	//						optgroup: !0,
	//						option: !0,
	//						p: !0,
	//						rp: !0,
	//						rt: !0,
	//						tbody: !0,
	//						td: !0,
	//						tfoot: !0,
	//						th: !0,
	//						tr: !0
	//					},
	//					contextGrabbers: {
	//						dd: {
	//							dd: !0,
	//							dt: !0
	//						},
	//						dt: {
	//							dd: !0,
	//							dt: !0
	//						},
	//						li: {
	//							li: !0
	//						},
	//						option: {
	//							option: !0,
	//							optgroup: !0
	//						},
	//						optgroup: {
	//							optgroup: !0
	//						},
	//						p: {
	//							address: !0,
	//							article: !0,
	//							aside: !0,
	//							blockquote: !0,
	//							dir: !0,
	//							div: !0,
	//							dl: !0,
	//							fieldset: !0,
	//							footer: !0,
	//							form: !0,
	//							h1: !0,
	//							h2: !0,
	//							h3: !0,
	//							h4: !0,
	//							h5: !0,
	//							h6: !0,
	//							header: !0,
	//							hgroup: !0,
	//							hr: !0,
	//							menu: !0,
	//							nav: !0,
	//							ol: !0,
	//							p: !0,
	//							pre: !0,
	//							section: !0,
	//							table: !0,
	//							ul: !0
	//						},
	//						rp: {
	//							rp: !0,
	//							rt: !0
	//						},
	//						rt: {
	//							rp: !0,
	//							rt: !0
	//						},
	//						tbody: {
	//							tbody: !0,
	//							tfoot: !0
	//						},
	//						td: {
	//							td: !0,
	//							th: !0
	//						},
	//						tfoot: {
	//							tbody: !0
	//						},
	//						th: {
	//							td: !0,
	//							th: !0
	//						},
	//						thead: {
	//							tbody: !0,
	//							tfoot: !0
	//						},
	//						tr: {
	//							tr: !0
	//						}
	//					},
	//					doNotIndent: {
	//						pre: !0
	//					},
	//					allowUnquoted: !0,
	//					allowMissing: !0,
	//					caseFold: !0
	//				},
	//				n = {
	//					autoSelfClosers: {},
	//					implicitlyClosed: {},
	//					contextGrabbers: {},
	//					doNotIndent: {},
	//					allowUnquoted: !1,
	//					allowMissing: !1,
	//					caseFold: !1
	//				};
	//			e.defineMode("xml", function(r, i) {
	//				function o(e, t) {
	//					function n(n) {
	//						return t.tokenize = n, n(e, t)
	//					}
	//					var r = e.next();
	//					if ("<" == r) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(s("atom", "]]>")) : null : e.match("--") ? n(s("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(l(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = s("meta", "?>"), "meta") : (S = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket");
	//					if ("&" == r) {
	//						return (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error"
	//					}
	//					return e.eatWhile(/[^&<]/), null
	//				}

	//				function a(e, t) {
	//					var n = e.next();
	//					if (">" == n || "/" == n && e.eat(">")) return t.tokenize = o, S = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
	//					if ("=" == n) return S = "equals", null;
	//					if ("<" == n) {
	//						t.tokenize = o, t.state = h, t.tagName = t.tagStart = null;
	//						var r = t.tokenize(e, t);
	//						return r ? r + " tag error" : "tag error"
	//					}
	//					return /[\'\"]/.test(n) ? (t.tokenize = function(e) {
	//						var t = function(t, n) {
	//							for (; !t.eol();)
	//								if (t.next() == e) {
	//									n.tokenize = a;
	//									break
	//								}
	//							return "string"
	//						};
	//						return t.isInAttribute = !0, t
	//					}(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
	//				}

	//				function s(e, t) {
	//					return function(n, r) {
	//						for (; !n.eol();) {
	//							if (n.match(t)) {
	//								r.tokenize = o;
	//								break
	//							}
	//							n.next()
	//						}
	//						return e
	//					}
	//				}

	//				function l(e) {
	//					return function(t, n) {
	//						for (var r; null != (r = t.next());) {
	//							if ("<" == r) return n.tokenize = l(e + 1), n.tokenize(t, n);
	//							if (">" == r) {
	//								if (1 == e) {
	//									n.tokenize = o;
	//									break
	//								}
	//								return n.tokenize = l(e - 1), n.tokenize(t, n)
	//							}
	//						}
	//						return "meta"
	//					}
	//				}

	//				function c(e) {
	//					e.context && (e.context = e.context.prev)
	//				}

	//				function u(e, t) {
	//					for (var n;;) {
	//						if (!e.context) return;
	//						if (n = e.context.tagName, !w.contextGrabbers.hasOwnProperty(n) || !w.contextGrabbers[n].hasOwnProperty(t)) return;
	//						c(e)
	//					}
	//				}

	//				function h(e, t, n) {
	//					return "openTag" == e ? (n.tagStart = t.column(), f) : "closeTag" == e ? d : h
	//				}

	//				function f(e, t, n) {
	//					return "word" == e ? (n.tagName = t.current(), L = "tag", g) : (L = "error", f)
	//				}

	//				function d(e, t, n) {
	//					if ("word" == e) {
	//						var r = t.current();
	//						return n.context && n.context.tagName != r && w.implicitlyClosed.hasOwnProperty(n.context.tagName) && c(n), n.context && n.context.tagName == r || !1 === w.matchClosing ? (L = "tag", p) : (L = "tag error", m)
	//					}
	//					return L = "error", m
	//				}

	//				function p(e, t, n) {
	//					return "endTag" != e ? (L = "error", p) : (c(n), h)
	//				}

	//				function m(e, t, n) {
	//					return L = "error", p(e, 0, n)
	//				}

	//				function g(e, t, n) {
	//					if ("word" == e) return L = "attribute", v;
	//					if ("endTag" == e || "selfcloseTag" == e) {
	//						var r = n.tagName,
	//							i = n.tagStart;
	//						return n.tagName = n.tagStart = null, "selfcloseTag" == e || w.autoSelfClosers.hasOwnProperty(r) ? u(n, r) : (u(n, r), n.context = new function(e, t, n) {
	//							this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (w.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
	//						}(n, r, i == n.indented)), h
	//					}
	//					return L = "error", g
	//				}

	//				function v(e, t, n) {
	//					return "equals" == e ? y : (w.allowMissing || (L = "error"), g(e, 0, n))
	//				}

	//				function y(e, t, n) {
	//					return "string" == e ? x : "word" == e && w.allowUnquoted ? (L = "string", g) : (L = "error", g(e, 0, n))
	//				}

	//				function x(e, t, n) {
	//					return "string" == e ? x : g(e, 0, n)
	//				}
	//				var b = r.indentUnit,
	//					w = {},
	//					k = i.htmlMode ? t : n;
	//				for (var C in k) w[C] = k[C];
	//				for (var C in i) w[C] = i[C];
	//				var S, L;
	//				return o.isInText = !0, {
	//					startState: function(e) {
	//						var t = {
	//							tokenize: o,
	//							state: h,
	//							indented: e || 0,
	//							tagName: null,
	//							tagStart: null,
	//							context: null
	//						};
	//						return null != e && (t.baseIndent = e), t
	//					},
	//					token: function(e, t) {
	//						if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
	//						S = null;
	//						var n = t.tokenize(e, t);
	//						return (n || S) && "comment" != n && (L = null, t.state = t.state(S || n, e, t), L && (n = "error" == L ? n + " error" : L)), n
	//					},
	//					indent: function(t, n, r) {
	//						var i = t.context;
	//						if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + b;
	//						if (i && i.noIndent) return e.Pass;
	//						if (t.tokenize != a && t.tokenize != o) return r ? r.match(/^(\s*)/)[0].length : 0;
	//						if (t.tagName) return !1 !== w.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + b * (w.multilineTagIndentFactor || 1);
	//						if (w.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
	//						var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
	//						if (s && s[1])
	//							for (; i;) {
	//								if (i.tagName == s[2]) {
	//									i = i.prev;
	//									break
	//								}
	//								if (!w.implicitlyClosed.hasOwnProperty(i.tagName)) break;
	//								i = i.prev
	//							} else if (s)
	//								for (; i;) {
	//									var l = w.contextGrabbers[i.tagName];
	//									if (!l || !l.hasOwnProperty(s[2])) break;
	//									i = i.prev
	//								}
	//						for (; i && i.prev && !i.startOfLine;) i = i.prev;
	//						return i ? i.indent + b : t.baseIndent || 0
	//					},
	//					electricInput: /<\/[\s\w:]+>$/,
	//					blockCommentStart: "\x3c!--",
	//					blockCommentEnd: "--\x3e",
	//					configuration: w.htmlMode ? "html" : "xml",
	//					helperType: w.htmlMode ? "html" : "xml",
	//					skipAttribute: function(e) {
	//						e.state == y && (e.state = g)
	//					}
	//				}
	//			}), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
	//				name: "xml",
	//				htmlMode: !0
	//			})
	//		})
	//	}, {
	//		"../../lib/codemirror": 10
	//	}],
	//	15: [function(e, t, n) {
	//		n.read = function(e, t, n, r, i) {
	//			var o, a, s = 8 * i - r - 1,
	//				l = (1 << s) - 1,
	//				c = l >> 1,
	//				u = -7,
	//				h = n ? i - 1 : 0,
	//				f = n ? -1 : 1,
	//				d = e[t + h];
	//			for (h += f, o = d & (1 << -u) - 1, d >>= -u, u += s; u > 0; o = 256 * o + e[t + h], h += f, u -= 8);
	//			for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + e[t + h], h += f, u -= 8);
	//			if (0 === o) o = 1 - c;
	//			else {
	//				if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
	//				a += Math.pow(2, r), o -= c
	//			}
	//			return (d ? -1 : 1) * a * Math.pow(2, o - r)
	//		}, n.write = function(e, t, n, r, i, o) {
	//			var a, s, l, c = 8 * o - i - 1,
	//				u = (1 << c) - 1,
	//				h = u >> 1,
	//				f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
	//				d = r ? 0 : o - 1,
	//				p = r ? 1 : -1,
	//				m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
	//			for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + h >= 1 ? f / l : f * Math.pow(2, 1 - h)) * l >= 2 && (a++, l /= 2), a + h >= u ? (s = 0, a = u) : a + h >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & s, d += p, s /= 256, i -= 8);
	//			for (a = a << i | s, c += i; c > 0; e[n + d] = 255 & a, d += p, a /= 256, c -= 8);
	//			e[n + d - p] |= 128 * m
	//		}
	//	}, {}],
	//	16: [function(e, t, n) {
	//		(function(e) {
	//			(function() {
	//				function e(e) {
	//					this.tokens = [], this.tokens.links = {}, this.options = e || u.defaults, this.rules = h.normal, this.options.gfm && (this.options.tables ? this.rules = h.tables : this.rules = h.gfm)
	//				}

	//				function r(e, t) {
	//					if (this.options = t || u.defaults, this.links = e, this.rules = f.normal, this.renderer = this.options.renderer || new i, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
	//					this.options.gfm ? this.options.breaks ? this.rules = f.breaks : this.rules = f.gfm : this.options.pedantic && (this.rules = f.pedantic)
	//				}

	//				function i(e) {
	//					this.options = e || {}
	//				}

	//				function o(e) {
	//					this.tokens = [], this.token = null, this.options = e || u.defaults, this.options.renderer = this.options.renderer || new i, this.renderer = this.options.renderer, this.renderer.options = this.options
	//				}

	//				function a(e, t) {
	//					return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
	//				}

	//				function s(e, t) {
	//					return e = e.source, t = t || "",
	//						function n(r, i) {
	//							return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
	//						}
	//				}

	//				function l() {}

	//				function c(e) {
	//					for (var t, n, r = 1; r < arguments.length; r++) {
	//						t = arguments[r];
	//						for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
	//					}
	//					return e
	//				}

	//				function u(t, n, r) {
	//					if (r || "function" == typeof n) {
	//						r || (r = n, n = null);
	//						var i, s, l = (n = c({}, u.defaults, n || {})).highlight,
	//							h = 0;
	//						try {
	//							i = e.lex(t, n)
	//						} catch (e) {
	//							return r(e)
	//						}
	//						s = i.length;
	//						var f = function(e) {
	//							if (e) return n.highlight = l, r(e);
	//							var t;
	//							try {
	//								t = o.parse(i, n)
	//							} catch (t) {
	//								e = t
	//							}
	//							return n.highlight = l, e ? r(e) : r(null, t)
	//						};
	//						if (!l || l.length < 3) return f();
	//						if (delete n.highlight, !s) return f();
	//						for (; h < i.length; h++) ! function(e) {
	//							"code" !== e.type ? --s || f() : l(e.text, e.lang, function(t, n) {
	//								return t ? f(t) : null == n || n === e.text ? --s || f() : (e.text = n, e.escaped = !0, void(--s || f()))
	//							})
	//						}(i[h])
	//					} else try {
	//						return n && (n = c({}, u.defaults, n)), o.parse(e.lex(t, n), n)
	//					} catch (e) {
	//						if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (n || u.defaults).silent) return "<p>An error occured:</p><pre>" + a(e.message + "", !0) + "</pre>";
	//						throw e
	//					}
	//				}
	//				var h = {
	//					newline: /^\n+/,
	//					code: /^( {4}[^\n]+\n*)+/,
	//					fences: l,
	//					hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	//					heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	//					nptable: l,
	//					lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	//					blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	//					list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	//					html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	//					def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	//					table: l,
	//					paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	//					text: /^[^\n]+/
	//				};
	//				h.bullet = /(?:[*+-]|\d+\.)/, h.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, h.item = s(h.item, "gm")(/bull/g, h.bullet)(), h.list = s(h.list)(/bull/g, h.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + h.def.source + ")")(), h.blockquote = s(h.blockquote)("def", h.def)(), h._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", h.html = s(h.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, h._tag)(), h.paragraph = s(h.paragraph)("hr", h.hr)("heading", h.heading)("lheading", h.lheading)("blockquote", h.blockquote)("tag", "<" + h._tag)("def", h.def)(), h.normal = c({}, h), h.gfm = c({}, h.normal, {
	//					fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	//					paragraph: /^/,
	//					heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	//				}), h.gfm.paragraph = s(h.paragraph)("(?!", "(?!" + h.gfm.fences.source.replace("\\1", "\\2") + "|" + h.list.source.replace("\\1", "\\3") + "|")(), h.tables = c({}, h.gfm, {
	//					nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	//					table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	//				}), e.rules = h, e.lex = function(t, n) {
	//					return new e(n).lex(t)
	//				}, e.prototype.lex = function(e) {
	//					return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
	//				}, e.prototype.token = function(e, t, n) {
	//					var r, i, o, a, s, l, c, u, f;
	//					for (e = e.replace(/^ +$/gm, ""); e;)
	//						if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
	//								type: "space"
	//							})), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
	//							type: "code",
	//							text: this.options.pedantic ? o : o.replace(/\n+$/, "")
	//						});
	//						else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: "code",
	//						lang: o[2],
	//						text: o[3] || ""
	//					});
	//					else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: "heading",
	//						depth: o[1].length,
	//						text: o[2]
	//					});
	//					else if (t && (o = this.rules.nptable.exec(e))) {
	//						for (e = e.substring(o[0].length), l = {
	//								type: "table",
	//								header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
	//								align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
	//								cells: o[3].replace(/\n$/, "").split("\n")
	//							}, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
	//						for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].split(/ *\| */);
	//						this.tokens.push(l)
	//					} else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: "heading",
	//						depth: "=" === o[2] ? 1 : 2,
	//						text: o[1]
	//					});
	//					else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: "hr"
	//					});
	//					else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: "blockquote_start"
	//					}), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
	//						type: "blockquote_end"
	//					});
	//					else if (o = this.rules.list.exec(e)) {
	//						for (e = e.substring(o[0].length), a = o[2], this.tokens.push({
	//								type: "list_start",
	//								ordered: a.length > 1
	//							}), r = !1, f = (o = o[0].match(this.rules.item)).length, u = 0; u < f; u++) c = (l = o[u]).length, ~(l = l.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && u !== f - 1 && (a === (s = h.bullet.exec(o[u + 1])[0]) || a.length > 1 && s.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = f - 1)), i = r || /\n\n(?!\s*$)/.test(l), u !== f - 1 && (r = "\n" === l.charAt(l.length - 1), i || (i = r)), this.tokens.push({
	//							type: i ? "loose_item_start" : "list_item_start"
	//						}), this.token(l, !1, n), this.tokens.push({
	//							type: "list_item_end"
	//						});
	//						this.tokens.push({
	//							type: "list_end"
	//						})
	//					} else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: this.options.sanitize ? "paragraph" : "html",
	//						pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
	//						text: o[0]
	//					});
	//					else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
	//						href: o[2],
	//						title: o[3]
	//					};
	//					else if (t && (o = this.rules.table.exec(e))) {
	//						for (e = e.substring(o[0].length), l = {
	//								type: "table",
	//								header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
	//								align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
	//								cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
	//							}, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = "right" : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = "center" : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = "left" : l.align[u] = null;
	//						for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
	//						this.tokens.push(l)
	//					} else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
	//						type: "paragraph",
	//						text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
	//					});
	//					else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
	//						type: "text",
	//						text: o[0]
	//					});
	//					else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
	//					return this.tokens
	//				};
	//				var f = {
	//					escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	//					autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	//					url: l,
	//					tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	//					link: /^!?\[(inside)\]\(href\)/,
	//					reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	//					nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	//					strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	//					em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	//					code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	//					br: /^ {2,}\n(?!\s*$)/,
	//					del: l,
	//					text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	//				};
	//				f._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, f._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, f.link = s(f.link)("inside", f._inside)("href", f._href)(), f.reflink = s(f.reflink)("inside", f._inside)(), f.normal = c({}, f), f.pedantic = c({}, f.normal, {
	//					strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	//					em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	//				}), f.gfm = c({}, f.normal, {
	//					escape: s(f.escape)("])", "~|])")(),
	//					url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	//					del: /^~~(?=\S)([\s\S]*?\S)~~/,
	//					text: s(f.text)("]|", "~]|")("|", "|https?://|")()
	//				}), f.breaks = c({}, f.gfm, {
	//					br: s(f.br)("{2,}", "*")(),
	//					text: s(f.gfm.text)("{2,}", "*")()
	//				}), r.rules = f, r.output = function(e, t, n) {
	//					return new r(t, n).output(e)
	//				}, r.prototype.output = function(e) {
	//					for (var t, n, r, i, o = ""; e;)
	//						if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];
	//						else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : r = n = a(i[1]), o += this.renderer.link(r, null, n);
	//					else if (this.inLink || !(i = this.rules.url.exec(e))) {
	//						if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : a(i[0]) : i[0];
	//						else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, {
	//							href: i[2],
	//							title: i[3]
	//						}), this.inLink = !1;
	//						else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
	//							if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
	//								o += i[0].charAt(0), e = i[0].substring(1) + e;
	//								continue
	//							}
	//							this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1
	//						} else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1]));
	//						else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1]));
	//						else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(a(i[2], !0));
	//						else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();
	//						else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1]));
	//						else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(a(this.smartypants(i[0])));
	//						else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
	//					} else e = e.substring(i[0].length), r = n = a(i[1]), o += this.renderer.link(r, null, n);
	//					return o
	//				}, r.prototype.outputLink = function(e, t) {
	//					var n = a(t.href),
	//						r = t.title ? a(t.title) : null;
	//					return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, a(e[1]))
	//				}, r.prototype.smartypants = function(e) {
	//					return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
	//				}, r.prototype.mangle = function(e) {
	//					if (!this.options.mangle) return e;
	//					for (var t, n = "", r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
	//					return n
	//				}, i.prototype.code = function(e, t, n) {
	//					if (this.options.highlight) {
	//						var r = this.options.highlight(e, t);
	//						null != r && r !== e && (n = !0, e = r)
	//					}
	//					return t ? '<pre><code class="' + this.options.langPrefix + a(t, !0) + '">' + (n ? e : a(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : a(e, !0)) + "\n</code></pre>"
	//				}, i.prototype.blockquote = function(e) {
	//					return "<blockquote>\n" + e + "</blockquote>\n"
	//				}, i.prototype.html = function(e) {
	//					return e
	//				}, i.prototype.heading = function(e, t, n) {
	//					return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
	//				}, i.prototype.hr = function() {
	//					return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
	//				}, i.prototype.list = function(e, t) {
	//					var n = t ? "ol" : "ul";
	//					return "<" + n + ">\n" + e + "</" + n + ">\n"
	//				}, i.prototype.listitem = function(e) {
	//					return "<li>" + e + "</li>\n"
	//				}, i.prototype.paragraph = function(e) {
	//					return "<p>" + e + "</p>\n"
	//				}, i.prototype.table = function(e, t) {
	//					return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
	//				}, i.prototype.tablerow = function(e) {
	//					return "<tr>\n" + e + "</tr>\n"
	//				}, i.prototype.tablecell = function(e, t) {
	//					var n = t.header ? "th" : "td";
	//					return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
	//				}, i.prototype.strong = function(e) {
	//					return "<strong>" + e + "</strong>"
	//				}, i.prototype.em = function(e) {
	//					return "<em>" + e + "</em>"
	//				}, i.prototype.codespan = function(e) {
	//					return "<code>" + e + "</code>"
	//				}, i.prototype.br = function() {
	//					return this.options.xhtml ? "<br/>" : "<br>"
	//				}, i.prototype.del = function(e) {
	//					return "<del>" + e + "</del>"
	//				}, i.prototype.link = function(e, t, n) {
	//					if (this.options.sanitize) {
	//						try {
	//							var r = decodeURIComponent(function(e) {
	//								return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(e, t) {
	//									return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
	//								})
	//							}(e)).replace(/[^\w:]/g, "").toLowerCase()
	//						} catch (e) {
	//							return ""
	//						}
	//						if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return ""
	//					}
	//					var i = '<a href="' + e + '"';
	//					return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>"
	//				}, i.prototype.image = function(e, t, n) {
	//					var r = '<img src="' + e + '" alt="' + n + '"';
	//					return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
	//				}, i.prototype.text = function(e) {
	//					return e
	//				}, o.parse = function(e, t, n) {
	//					return new o(t, n).parse(e)
	//				}, o.prototype.parse = function(e) {
	//					this.inline = new r(e.links, this.options, this.renderer), this.tokens = e.reverse();
	//					for (var t = ""; this.next();) t += this.tok();
	//					return t
	//				}, o.prototype.next = function() {
	//					return this.token = this.tokens.pop()
	//				}, o.prototype.peek = function() {
	//					return this.tokens[this.tokens.length - 1] || 0
	//				}, o.prototype.parseText = function() {
	//					for (var e = this.token.text;
	//						"text" === this.peek().type;) e += "\n" + this.next().text;
	//					return this.inline.output(e)
	//				}, o.prototype.tok = function() {
	//					switch (this.token.type) {
	//						case "space":
	//							return "";
	//						case "hr":
	//							return this.renderer.hr();
	//						case "heading":
	//							return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
	//						case "code":
	//							return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
	//						case "table":
	//							var e, t, n, r, i = "",
	//								o = "";
	//							for (n = "", e = 0; e < this.token.header.length; e++)({
	//								header: !0,
	//								align: this.token.align[e]
	//							}), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
	//								header: !0,
	//								align: this.token.align[e]
	//							});
	//							for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
	//								for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
	//									header: !1,
	//									align: this.token.align[r]
	//								});
	//								o += this.renderer.tablerow(n)
	//							}
	//							return this.renderer.table(i, o);
	//						case "blockquote_start":
	//							for (o = "";
	//								"blockquote_end" !== this.next().type;) o += this.tok();
	//							return this.renderer.blockquote(o);
	//						case "list_start":
	//							o = "";
	//							for (var a = this.token.ordered;
	//								"list_end" !== this.next().type;) o += this.tok();
	//							return this.renderer.list(o, a);
	//						case "list_item_start":
	//							for (o = "";
	//								"list_item_end" !== this.next().type;) o += "text" === this.token.type ? this.parseText() : this.tok();
	//							return this.renderer.listitem(o);
	//						case "loose_item_start":
	//							for (o = "";
	//								"list_item_end" !== this.next().type;) o += this.tok();
	//							return this.renderer.listitem(o);
	//						case "html":
	//							var s = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
	//							return this.renderer.html(s);
	//						case "paragraph":
	//							return this.renderer.paragraph(this.inline.output(this.token.text));
	//						case "text":
	//							return this.renderer.paragraph(this.parseText())
	//					}
	//				}, l.exec = l, u.options = u.setOptions = function(e) {
	//					return c(u.defaults, e), u
	//				}, u.defaults = {
	//					gfm: !0,
	//					tables: !0,
	//					breaks: !1,
	//					pedantic: !1,
	//					sanitize: !1,
	//					sanitizer: null,
	//					mangle: !0,
	//					smartLists: !1,
	//					silent: !1,
	//					highlight: null,
	//					langPrefix: "lang-",
	//					smartypants: !1,
	//					headerPrefix: "",
	//					renderer: new i,
	//					xhtml: !1
	//				}, u.Parser = o, u.parser = o.parse, u.Renderer = i, u.Lexer = e, u.lexer = e.lex, u.InlineLexer = r, u.inlineLexer = r.output, u.parse = u, void 0 !== t && "object" == typeof n ? t.exports = u : this.marked = u
	//			}).call(function() {
	//				return this || ("undefined" != typeof window ? window : e)
	//			}())
	//		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	//	}, {}],
	//	17: [function(e, t, n) {
	//		(function(n, r) {
	//			var i;
	//			! function() {
	//				"use strict";
	//				(i = function(e, t, n, i) {
	//					function o(e, t) {
	//						var n = p._readFile(e, null, i.asyncLoad);
	//						i.asyncLoad ? n.then(function(e) {
	//							t(e)
	//						}) : t(n)
	//					}

	//					function a(e) {
	//						t = e, n && l()
	//					}

	//					function s(e) {
	//						n = e, t && l()
	//					}

	//					function l() {
	//						for (p.rules = p._parseAFF(t), p.compoundRuleCodes = {}, u = 0, f = p.compoundRules.length; u < f; u++) {
	//							var e = p.compoundRules[u];
	//							for (h = 0, d = e.length; h < d; h++) p.compoundRuleCodes[e[h]] = []
	//						}
	//						"ONLYINCOMPOUND" in p.flags && (p.compoundRuleCodes[p.flags.ONLYINCOMPOUND] = []), p.dictionaryTable = p._parseDIC(n);
	//						for (u in p.compoundRuleCodes) 0 === p.compoundRuleCodes[u].length && delete p.compoundRuleCodes[u];
	//						for (u = 0, f = p.compoundRules.length; u < f; u++) {
	//							var r = p.compoundRules[u],
	//								o = "";
	//							for (h = 0, d = r.length; h < d; h++) {
	//								var a = r[h];
	//								a in p.compoundRuleCodes ? o += "(" + p.compoundRuleCodes[a].join("|") + ")" : o += a
	//							}
	//							p.compoundRules[u] = new RegExp(o, "i")
	//						}
	//						p.loaded = !0, i.asyncLoad && i.loadedCallback && i.loadedCallback(p)
	//					}
	//					i = i || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = i.flags || {}, this.memoized = {}, this.loaded = !1;
	//					var c, u, h, f, d, p = this;
	//					return e && (p.dictionary = e, t && n ? l() : "undefined" != typeof window && "chrome" in window && "extension" in window.chrome && "getURL" in window.chrome.extension ? (c = i.dictionaryPath ? i.dictionaryPath : "typo/dictionaries", t || o(chrome.extension.getURL(c + "/" + e + "/" + e + ".aff"), a), n || o(chrome.extension.getURL(c + "/" + e + "/" + e + ".dic"), s)) : (c = i.dictionaryPath ? i.dictionaryPath : void 0 !== r ? r + "/dictionaries" : "./dictionaries", t || o(c + "/" + e + "/" + e + ".aff", a), n || o(c + "/" + e + "/" + e + ".dic", s))), this
	//				}).prototype = {
	//					load: function(e) {
	//						for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
	//						return this
	//					},
	//					_readFile: function(t, r, i) {
	//						if (r = r || "utf8", "undefined" != typeof XMLHttpRequest) {
	//							var o, a = new XMLHttpRequest;
	//							return a.open("GET", t, i), i && (o = new Promise(function(e, t) {
	//								a.onload = function() {
	//									200 === a.status ? e(a.responseText) : t(a.statusText)
	//								}, a.onerror = function() {
	//									t(a.statusText)
	//								}
	//							})), a.overrideMimeType && a.overrideMimeType("text/plain; charset=" + r), a.send(null), i ? o : a.responseText
	//						}
	//						if (void 0 !== e) {
	//							var s = e("fs");
	//							try {
	//								if (s.existsSync(t)) {
	//									var l = s.statSync(t),
	//										c = s.openSync(t, "r"),
	//										u = new n(l.size);
	//									return s.readSync(c, u, 0, u.length, null), u.toString(r, 0, u.length)
	//								}
	//								console.log("Path " + t + " does not exist.")
	//							} catch (e) {
	//								return console.log(e), ""
	//							}
	//						}
	//					},
	//					_parseAFF: function(e) {
	//						var t, n, r, i, o, a, s, l = {},
	//							c = (e = this._removeAffixComments(e)).split("\n");
	//						for (i = 0, a = c.length; i < a; i++) {
	//							var u = (t = c[i]).split(/\s+/),
	//								h = u[0];
	//							if ("PFX" == h || "SFX" == h) {
	//								var f = u[1],
	//									d = u[2],
	//									p = [];
	//								for (o = i + 1, s = i + 1 + (n = parseInt(u[3], 10)); o < s; o++) {
	//									var m = (r = c[o].split(/\s+/))[2],
	//										g = r[3].split("/"),
	//										v = g[0];
	//									"0" === v && (v = "");
	//									var y = this.parseRuleCodes(g[1]),
	//										x = r[4],
	//										b = {};
	//									b.add = v, y.length > 0 && (b.continuationClasses = y), "." !== x && (b.match = "SFX" === h ? new RegExp(x + "$") : new RegExp("^" + x)), "0" != m && (b.remove = "SFX" === h ? new RegExp(m + "$") : m), p.push(b)
	//								}
	//								l[f] = {
	//									type: h,
	//									combineable: "Y" == d,
	//									entries: p
	//								}, i += n
	//							} else if ("COMPOUNDRULE" === h) {
	//								for (o = i + 1, s = i + 1 + (n = parseInt(u[1], 10)); o < s; o++) r = (t = c[o]).split(/\s+/), this.compoundRules.push(r[1]);
	//								i += n
	//							} else "REP" === h ? 3 === (r = t.split(/\s+/)).length && this.replacementTable.push([r[1], r[2]]) : this.flags[h] = u[1]
	//						}
	//						return l
	//					},
	//					_removeAffixComments: function(e) {
	//						return e = e.replace(/^\s*#.*$/gm, ""), e = e.replace(/^\s\s*/m, "").replace(/\s\s*$/m, ""), e = e.replace(/\n{2,}/g, "\n"), e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
	//					},
	//					_parseDIC: function(e) {
	//						function t(e, t) {
	//							r.hasOwnProperty(e) || (r[e] = null), t.length > 0 && (null === r[e] && (r[e] = []), r[e].push(t))
	//						}
	//						for (var n = (e = this._removeDicComments(e)).split("\n"), r = {}, i = 1, o = n.length; i < o; i++) {
	//							var a = n[i].split("/", 2),
	//								s = a[0];
	//							if (a.length > 1) {
	//								var l = this.parseRuleCodes(a[1]);
	//								"NEEDAFFIX" in this.flags && -1 != l.indexOf(this.flags.NEEDAFFIX) || t(s, l);
	//								for (var c = 0, u = l.length; c < u; c++) {
	//									var h = l[c],
	//										f = this.rules[h];
	//									if (f)
	//										for (var d = this._applyRule(s, f), p = 0, m = d.length; p < m; p++) {
	//											var g = d[p];
	//											if (t(g, []), f.combineable)
	//												for (var v = c + 1; v < u; v++) {
	//													var y = l[v],
	//														x = this.rules[y];
	//													if (x && x.combineable && f.type != x.type)
	//														for (var b = this._applyRule(g, x), w = 0, k = b.length; w < k; w++) {
	//															t(b[w], [])
	//														}
	//												}
	//										}
	//									h in this.compoundRuleCodes && this.compoundRuleCodes[h].push(s)
	//								}
	//							} else t(s.trim(), [])
	//						}
	//						return r
	//					},
	//					_removeDicComments: function(e) {
	//						return e = e.replace(/^\t.*$/gm, "")
	//					},
	//					parseRuleCodes: function(e) {
	//						if (!e) return [];
	//						if (!("FLAG" in this.flags)) return e.split("");
	//						if ("long" === this.flags.FLAG) {
	//							for (var t = [], n = 0, r = e.length; n < r; n += 2) t.push(e.substr(n, 2));
	//							return t
	//						}
	//						return "num" === this.flags.FLAG ? e.split(",") : void 0
	//					},
	//					_applyRule: function(e, t) {
	//						for (var n = t.entries, r = [], i = 0, o = n.length; i < o; i++) {
	//							var a = n[i];
	//							if (!a.match || e.match(a.match)) {
	//								var s = e;
	//								if (a.remove && (s = s.replace(a.remove, "")), "SFX" === t.type ? s += a.add : s = a.add + s, r.push(s), "continuationClasses" in a)
	//									for (var l = 0, c = a.continuationClasses.length; l < c; l++) {
	//										var u = this.rules[a.continuationClasses[l]];
	//										u && (r = r.concat(this._applyRule(s, u)))
	//									}
	//							}
	//						}
	//						return r
	//					},
	//					check: function(e) {
	//						if (!this.loaded) throw "Dictionary not loaded.";
	//						var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
	//						if (this.checkExact(t)) return !0;
	//						if (t.toUpperCase() === t) {
	//							var n = t[0] + t.substring(1).toLowerCase();
	//							if (this.hasFlag(n, "KEEPCASE")) return !1;
	//							if (this.checkExact(n)) return !0
	//						}
	//						var r = t.toLowerCase();
	//						if (r !== t) {
	//							if (this.hasFlag(r, "KEEPCASE")) return !1;
	//							if (this.checkExact(r)) return !0
	//						}
	//						return !1
	//					},
	//					checkExact: function(e) {
	//						if (!this.loaded) throw "Dictionary not loaded.";
	//						var t, n, r = this.dictionaryTable[e];
	//						if (void 0 === r) {
	//							if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN)
	//								for (t = 0, n = this.compoundRules.length; t < n; t++)
	//									if (e.match(this.compoundRules[t])) return !0
	//						} else {
	//							if (null === r) return !0;
	//							if ("object" == typeof r)
	//								for (t = 0, n = r.length; t < n; t++)
	//									if (!this.hasFlag(e, "ONLYINCOMPOUND", r[t])) return !0
	//						}
	//						return !1
	//					},
	//					hasFlag: function(e, t, n) {
	//						if (!this.loaded) throw "Dictionary not loaded.";
	//						return !!(t in this.flags && (void 0 === n && (n = Array.prototype.concat.apply([], this.dictionaryTable[e])), n && -1 !== n.indexOf(this.flags[t])))
	//					},
	//					alphabet: "",
	//					suggest: function(e, t) {
	//						function n(e) {
	//							var t, n, r, i, o, a, s = [];
	//							for (t = 0, i = e.length; t < i; t++) {
	//								var c = e[t];
	//								for (n = 0, o = c.length + 1; n < o; n++) {
	//									var u = [c.substring(0, n), c.substring(n)];
	//									if (u[1] && s.push(u[0] + u[1].substring(1)), u[1].length > 1 && u[1][1] !== u[1][0] && s.push(u[0] + u[1][1] + u[1][0] + u[1].substring(2)), u[1])
	//										for (r = 0, a = l.alphabet.length; r < a; r++) l.alphabet[r] != u[1].substring(0, 1) && s.push(u[0] + l.alphabet[r] + u[1].substring(1));
	//									if (u[1])
	//										for (r = 0, a = l.alphabet.length; r < a; r++) s.push(u[0] + l.alphabet[r] + u[1])
	//								}
	//							}
	//							return s
	//						}
	//						if (!this.loaded) throw "Dictionary not loaded.";
	//						if (t = t || 5, this.memoized.hasOwnProperty(e)) {
	//							var r = this.memoized[e].limit;
	//							if (t <= r || this.memoized[e].suggestions.length < r) return this.memoized[e].suggestions.slice(0, t)
	//						}
	//						if (this.check(e)) return [];
	//						for (var i = 0, o = this.replacementTable.length; i < o; i++) {
	//							var a = this.replacementTable[i];
	//							if (-1 !== e.indexOf(a[0])) {
	//								var s = e.replace(a[0], a[1]);
	//								if (this.check(s)) return [s]
	//							}
	//						}
	//						var l = this;
	//						return l.alphabet = "abcdefghijklmnopqrstuvwxyz", this.memoized[e] = {
	//							suggestions: function(e) {
	//								var r, i, o = n([e]),
	//									a = n(o),
	//									s = function(e) {
	//										for (var t = [], n = 0, r = e.length; n < r; n++) l.check(e[n]) && t.push(e[n]);
	//										return t
	//									}(o.concat(a)),
	//									c = {};
	//								for (r = 0, i = s.length; r < i; r++) s[r] in c ? c[s[r]] += 1 : c[s[r]] = 1;
	//								var u = [];
	//								for (r in c) c.hasOwnProperty(r) && u.push([r, c[r]]);
	//								u.sort(function(e, t) {
	//									return e[1] < t[1] ? -1 : 1
	//								}).reverse();
	//								var h = [],
	//									f = "lowercase";
	//								for (e.toUpperCase() === e ? f = "uppercase" : e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase() === e && (f = "capitalized"), r = 0, i = Math.min(t, u.length); r < i; r++) "uppercase" === f ? u[r][0] = u[r][0].toUpperCase() : "capitalized" === f && (u[r][0] = u[r][0].substr(0, 1).toUpperCase() + u[r][0].substr(1)), l.hasFlag(u[r][0], "NOSUGGEST") || h.push(u[r][0]);
	//								return h
	//							}(e),
	//							limit: t
	//						}, this.memoized[e].suggestions
	//					}
	//				}
	//			}(), void 0 !== t && (t.exports = i)
	//		}).call(this, e("buffer").Buffer, "/node_modules\\typo-js")
	//	}, {
	//		buffer: 3,
	//		fs: 2
	//	}],
	//	18: [function(e, t, n) {
	//		var r = e("codemirror");
	//		r.commands.tabAndIndentMarkdownList = function(e) {
	//			var t = e.listSelections()[0].head;
	//			if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentMore");
	//			else if (e.options.indentWithTabs) e.execCommand("insertTab");
	//			else {
	//				var n = Array(e.options.tabSize + 1).join(" ");
	//				e.replaceSelection(n)
	//			}
	//		}, r.commands.shiftTabAndUnindentMarkdownList = function(e) {
	//			var t = e.listSelections()[0].head;
	//			if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentLess");
	//			else if (e.options.indentWithTabs) e.execCommand("insertTab");
	//			else {
	//				var n = Array(e.options.tabSize + 1).join(" ");
	//				e.replaceSelection(n)
	//			}
	//		}
	//	}, {
	//		codemirror: 10
	//	}],
	//	19: [function(e, t, n) {
	//		"use strict";

	//		function r(e) {
	//			return e = _ ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl")
	//		}

	//		function i(e, t, n) {
	//			e = e || {};
	//			var i = document.createElement("button");
	//			t = void 0 == t || t, e.title && t && (i.title = function(e, t, n) {
	//				var i, o = e;
	//				t && (i = U(t), n[i] && (o += " (" + r(n[i]) + ")"));
	//				return o
	//			}(e.title, e.action, n), _ && (i.title = i.title.replace("Ctrl", "⌘"), i.title = i.title.replace("Alt", "⌥"))), e.noDisable && i.classList.add("no-disable"), e.noMobile && i.classList.add("no-mobile"), i.tabIndex = -1;
	//			var o = document.createElement("i");
	//			return o.className = e.className, i.appendChild(o), i
	//		}

	//		function o() {
	//			var e = document.createElement("i");
	//			return e.className = "separator", e.innerHTML = "|", e
	//		}

	//		function a(e, t) {
	//			t = t || e.getCursor("start");
	//			var n = e.getTokenAt(t);
	//			if (!n.type) return {};
	//			for (var r, i, o = n.type.split(" "), a = {}, s = 0; s < o.length; s++) "strong" === (r = o[s]) ? a.bold = !0 : "variable-2" === r ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === r ? a.quote = !0 : "em" === r ? a.italic = !0 : "quote" === r ? a.quote = !0 : "strikethrough" === r ? a.strikethrough = !0 : "comment" === r ? a.code = !0 : "link" === r ? a.link = !0 : "tag" === r ? a.image = !0 : r.match(/^header(-[1-6])?$/) && (a[r.replace("header", "heading")] = !0);
	//			return a
	//		}

	//		function s(e) {
	//			var t = e.codemirror;
	//			t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? ($ = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = $;
	//			var n = t.getWrapperElement();
	//			if (/fullscreen/.test(n.previousSibling.className) ? n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, "") : n.previousSibling.className += " fullscreen", e.toolbarElements.fullscreen) {
	//				var r = e.toolbarElements.fullscreen;
	//				/active/.test(r.className) ? r.className = r.className.replace(/\s*active\s*/g, "") : r.className += " active"
	//			}
	//			var i = t.getWrapperElement().nextSibling;
	//			/editor-preview-active-side/.test(i.className) && M(e)
	//		}

	//		function l(e) {
	//			I(e, "bold", e.options.blockStyles.bold)
	//		}

	//		function c(e) {
	//			I(e, "italic", e.options.blockStyles.italic)
	//		}

	//		function u(e) {
	//			I(e, "strikethrough", "~~")
	//		}

	//		function h(e) {
	//			function t(e) {
	//				if ("object" != typeof e) throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + typeof e + ": " + e;
	//				return e.styles && e.styles[2] && -1 !== e.styles[2].indexOf("formatting-code-block")
	//			}

	//			function n(e) {
	//				return e.state.base.base || e.state.base
	//			}

	//			function r(e, r, i, o, a) {
	//				i = i || e.getLineHandle(r), o = o || e.getTokenAt({
	//					line: r,
	//					ch: 1
	//				}), a = a || !!i.text && e.getTokenAt({
	//					line: r,
	//					ch: i.text.length - 1
	//				});
	//				var s = o.type ? o.type.split(" ") : [];
	//				return a && n(a).indentedCode ? "indented" : -1 !== s.indexOf("comment") && (n(o).fencedChars || n(a).fencedChars || t(i) ? "fenced" : "single")
	//			}
	//			var i, o, a, s = e.options.blockStyles.code,
	//				l = e.codemirror,
	//				c = l.getCursor("start"),
	//				u = l.getCursor("end"),
	//				h = l.getTokenAt({
	//					line: c.line,
	//					ch: c.ch || 1
	//				}),
	//				f = l.getLineHandle(c.line),
	//				d = r(l, c.line, f, h);
	//			if ("single" === d) {
	//				var p = f.text.slice(0, c.ch).replace("`", ""),
	//					m = f.text.slice(c.ch).replace("`", "");
	//				l.replaceRange(p + m, {
	//					line: c.line,
	//					ch: 0
	//				}, {
	//					line: c.line,
	//					ch: 99999999999999
	//				}), c.ch--, c !== u && u.ch--, l.setSelection(c, u), l.focus()
	//			} else if ("fenced" === d)
	//				if (c.line !== u.line || c.ch !== u.ch) {
	//					for (i = c.line; i >= 0 && (f = l.getLineHandle(i), !t(f)); i--);
	//					var g, v, y, x, b = n(l.getTokenAt({
	//						line: i,
	//						ch: 1
	//					})).fencedChars;
	//					t(l.getLineHandle(c.line)) ? (g = "", v = c.line) : t(l.getLineHandle(c.line - 1)) ? (g = "", v = c.line - 1) : (g = b + "\n", v = c.line), t(l.getLineHandle(u.line)) ? (y = "", x = u.line, 0 === u.ch && (x += 1)) : 0 !== u.ch && t(l.getLineHandle(u.line + 1)) ? (y = "", x = u.line + 1) : (y = b + "\n", x = u.line + 1), 0 === u.ch && (x -= 1), l.operation(function() {
	//						l.replaceRange(y, {
	//							line: x,
	//							ch: 0
	//						}, {
	//							line: x + (y ? 0 : 1),
	//							ch: 0
	//						}), l.replaceRange(g, {
	//							line: v,
	//							ch: 0
	//						}, {
	//							line: v + (g ? 0 : 1),
	//							ch: 0
	//						})
	//					}), l.setSelection({
	//						line: v + (g ? 1 : 0),
	//						ch: 0
	//					}, {
	//						line: x + (g ? 1 : -1),
	//						ch: 0
	//					}), l.focus()
	//				} else {
	//					var w = c.line;
	//					if (t(l.getLineHandle(c.line)) && ("fenced" === r(l, c.line + 1) ? (i = c.line, w = c.line + 1) : (o = c.line, w = c.line - 1)), void 0 === i)
	//						for (i = w; i >= 0 && (f = l.getLineHandle(i), !t(f)); i--);
	//					if (void 0 === o)
	//						for (a = l.lineCount(), o = w; o < a && (f = l.getLineHandle(o), !t(f)); o++);
	//					l.operation(function() {
	//						l.replaceRange("", {
	//							line: i,
	//							ch: 0
	//						}, {
	//							line: i + 1,
	//							ch: 0
	//						}), l.replaceRange("", {
	//							line: o - 1,
	//							ch: 0
	//						}, {
	//							line: o,
	//							ch: 0
	//						})
	//					}), l.focus()
	//				}
	//			else if ("indented" === d) {
	//				if (c.line !== u.line || c.ch !== u.ch) i = c.line, o = u.line, 0 === u.ch && o--;
	//				else {
	//					for (i = c.line; i >= 0; i--)
	//						if (!(f = l.getLineHandle(i)).text.match(/^\s*$/) && "indented" !== r(l, i, f)) {
	//							i += 1;
	//							break
	//						}
	//					for (a = l.lineCount(), o = c.line; o < a; o++)
	//						if (!(f = l.getLineHandle(o)).text.match(/^\s*$/) && "indented" !== r(l, o, f)) {
	//							o -= 1;
	//							break
	//						}
	//				}
	//				var k = l.getLineHandle(o + 1),
	//					C = k && l.getTokenAt({
	//						line: o + 1,
	//						ch: k.text.length - 1
	//					});
	//				C && n(C).indentedCode && l.replaceRange("\n", {
	//					line: o + 1,
	//					ch: 0
	//				});
	//				for (var S = i; S <= o; S++) l.indentLine(S, "subtract");
	//				l.focus()
	//			} else {
	//				var L = c.line === u.line && c.ch === u.ch && 0 === c.ch,
	//					T = c.line !== u.line;
	//				L || T ? function(e, t, n, r) {
	//					var i = t.line + 1,
	//						o = n.line + 1,
	//						a = t.line !== n.line,
	//						s = r + "\n",
	//						l = "\n" + r;
	//					a && o++, a && 0 === n.ch && (l = r + "\n", o--), A(e, !1, [s, l]), e.setSelection({
	//						line: i,
	//						ch: 0
	//					}, {
	//						line: o,
	//						ch: 0
	//					})
	//				}(l, c, u, s) : A(l, !1, ["`", "`"])
	//			}
	//		}

	//		function f(e) {
	//			O(e.codemirror, "quote")
	//		}

	//		function d(e) {
	//			E(e.codemirror, "smaller")
	//		}

	//		function p(e) {
	//			E(e.codemirror, "bigger")
	//		}

	//		function m(e) {
	//			E(e.codemirror, void 0, 1)
	//		}

	//		function g(e) {
	//			E(e.codemirror, void 0, 2)
	//		}

	//		function v(e) {
	//			E(e.codemirror, void 0, 3)
	//		}

	//		function y(e) {
	//			O(e.codemirror, "unordered-list")
	//		}

	//		function x(e) {
	//			O(e.codemirror, "ordered-list")
	//		}

	//		function b(e) {
	//			! function(e) {
	//				if (/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) return;
	//				for (var t, n = e.getCursor("start"), r = e.getCursor("end"), i = n.line; i <= r.line; i++) t = (t = e.getLine(i)).replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), e.replaceRange(t, {
	//					line: i,
	//					ch: 0
	//				}, {
	//					line: i,
	//					ch: 99999999999999
	//				})
	//			}(e.codemirror)
	//		}

	//		function w(e) {
	//			var t = e.codemirror,
	//				n = a(t),
	//				r = e.options,
	//				i = "https://";
	//			if (r.promptURLs && !(i = prompt(r.promptTexts.link))) return !1;
	//			A(t, n.link, r.insertTexts.link, i)
	//		}

	//		function k(e) {
	//			var t = e.codemirror,
	//				n = a(t),
	//				r = e.options,
	//				i = "https://";
	//			if (r.promptURLs && !(i = prompt(r.promptTexts.image))) return !1;
	//			A(t, n.image, r.insertTexts.image, i)
	//		}

	//		function C(e) {
	//			var t = e.codemirror,
	//				n = a(t),
	//				r = e.options;
	//			A(t, n.table, r.insertTexts.table)
	//		}

	//		function S(e) {
	//			var t = e.codemirror,
	//				n = a(t),
	//				r = e.options;
	//			A(t, n.image, r.insertTexts.horizontalRule)
	//		}

	//		function L(e) {
	//			var t = e.codemirror;
	//			t.undo(), t.focus()
	//		}

	//		function T(e) {
	//			var t = e.codemirror;
	//			t.redo(), t.focus()
	//		}

	//		function M(e) {
	//			var t = e.codemirror,
	//				n = t.getWrapperElement(),
	//				r = n.nextSibling,
	//				i = e.toolbarElements["side-by-side"],
	//				o = !1;
	//			/editor-preview-active-side/.test(r.className) ? (r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, ""), i.className = i.className.replace(/\s*active\s*/g, ""), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout(function() {
	//				t.getOption("fullScreen") || s(e), r.className += " editor-preview-active-side"
	//			}, 1), i.className += " active", n.className += " CodeMirror-sided", o = !0);
	//			var a = n.lastChild;
	//			if (/editor-preview-active/.test(a.className)) {
	//				a.className = a.className.replace(/\s*editor-preview-active\s*/g, "");
	//				var l = e.toolbarElements.preview,
	//					c = n.previousSibling;
	//				l.className = l.className.replace(/\s*active\s*/g, ""), c.className = c.className.replace(/\s*disabled-for-preview*/g, "")
	//			}
	//			t.sideBySideRenderingFunction || (t.sideBySideRenderingFunction = function() {
	//				r.innerHTML = e.options.previewRender(e.value(), r)
	//			}), o ? (r.innerHTML = e.options.previewRender(e.value(), r), t.on("update", t.sideBySideRenderingFunction)) : t.off("update", t.sideBySideRenderingFunction), t.refresh()
	//		}

	//		function N(e) {
	//			var t = e.codemirror,
	//				n = t.getWrapperElement(),
	//				r = n.previousSibling,
	//				i = !!e.options.toolbar && e.toolbarElements.preview,
	//				o = n.lastChild;
	//			o && /editor-preview/.test(o.className) || ((o = document.createElement("div")).className = "editor-preview", n.appendChild(o)), /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), i && (i.className = i.className.replace(/\s*active\s*/g, ""), r.className = r.className.replace(/\s*disabled-for-preview*/g, ""))) : (setTimeout(function() {
	//				o.className += " editor-preview-active"
	//			}, 1), i && (i.className += " active", r.className += " disabled-for-preview")), o.innerHTML = e.options.previewRender(e.value(), o);
	//			var a = t.getWrapperElement().nextSibling;
	//			/editor-preview-active-side/.test(a.className) && M(e)
	//		}

	//		function A(e, t, n, r) {
	//			if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	//				var i, o = n[0],
	//					a = n[1],
	//					s = {},
	//					l = {};
	//				Object.assign(s, e.getCursor("start")), Object.assign(l, e.getCursor("end")), r && (a = a.replace("#url#", r)), t ? (o = (i = e.getLine(s.line)).slice(0, s.ch), a = i.slice(s.ch), e.replaceRange(o + a, {
	//					line: s.line,
	//					ch: 0
	//				})) : (i = e.getSelection(), e.replaceSelection(o + i + a), s.ch += o.length, s !== l && (l.ch += o.length)), e.setSelection(s, l), e.focus()
	//			}
	//		}

	//		function E(e, t, n) {
	//			if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	//				for (var r = e.getCursor("start"), i = e.getCursor("end"), o = r.line; o <= i.line; o++) ! function(r) {
	//					var i = e.getLine(r),
	//						o = i.search(/[^#]/);
	//					i = void 0 !== t ? o <= 0 ? "bigger" == t ? "###### " + i : "# " + i : 6 == o && "smaller" == t ? i.substr(7) : 1 == o && "bigger" == t ? i.substr(2) : "bigger" == t ? i.substr(1) : "#" + i : 1 == n ? o <= 0 ? "# " + i : o == n ? i.substr(o + 1) : "# " + i.substr(o + 1) : 2 == n ? o <= 0 ? "## " + i : o == n ? i.substr(o + 1) : "## " + i.substr(o + 1) : o <= 0 ? "### " + i : o == n ? i.substr(o + 1) : "### " + i.substr(o + 1), e.replaceRange(i, {
	//						line: r,
	//						ch: 0
	//					}, {
	//						line: r,
	//						ch: 99999999999999
	//					})
	//				}(o);
	//				e.focus()
	//			}
	//		}

	//		function O(e, t) {
	//			if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	//				for (var n = /^(\s*)(\*|-|\+|\d*\.)(\s+)/, r = /^\s*/, i = a(e), o = e.getCursor("start"), s = e.getCursor("end"), l = {
	//						quote: /^(\s*)>\s+/,
	//						"unordered-list": n,
	//						"ordered-list": n
	//					}, c = function(e, t) {
	//						return {
	//							quote: ">",
	//							"unordered-list": "*",
	//							"ordered-list": "%%i."
	//						}[e].replace("%%i", t)
	//					}, u = function(e, t) {
	//						var n = new RegExp({
	//							quote: ">",
	//							"unordered-list": "*",
	//							"ordered-list": "d+."
	//						}[e]);
	//						return t && n.test(t)
	//					}, h = 1, f = o.line; f <= s.line; f++) ! function(o) {
	//					var a = e.getLine(o);
	//					if (i[t]) a = a.replace(l[t], "$1");
	//					else {
	//						var s = n.exec(a),
	//							f = c(t, h);
	//						null !== s ? (u(t, s[2]) && (f = ""), a = s[1] + f + s[3] + a.replace(r, "").replace(l[t], "$1")) : a = f + " " + a, h += 1
	//					}
	//					e.replaceRange(a, {
	//						line: o,
	//						ch: 0
	//					}, {
	//						line: o,
	//						ch: 99999999999999
	//					})
	//				}(f);
	//				e.focus()
	//			}
	//		}

	//		function I(e, t, n, r) {
	//			if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) {
	//				r = void 0 === r ? n : r;
	//				var i, o = e.codemirror,
	//					s = a(o),
	//					l = n,
	//					c = r,
	//					u = o.getCursor("start"),
	//					h = o.getCursor("end");
	//				s[t] ? (l = (i = o.getLine(u.line)).slice(0, u.ch), c = i.slice(u.ch), "bold" == t ? (l = l.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), c = c.replace(/(\*\*|__)/, "")) : "italic" == t ? (l = l.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), c = c.replace(/(\*|_)/, "")) : "strikethrough" == t && (l = l.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), c = c.replace(/(\*\*|~~)/, "")), o.replaceRange(l + c, {
	//					line: u.line,
	//					ch: 0
	//				}, {
	//					line: u.line,
	//					ch: 99999999999999
	//				}), "bold" == t || "strikethrough" == t ? (u.ch -= 2, u !== h && (h.ch -= 2)) : "italic" == t && (u.ch -= 1, u !== h && (h.ch -= 1))) : (i = o.getSelection(), "bold" == t ? i = (i = i.split("**").join("")).split("__").join("") : "italic" == t ? i = (i = i.split("*").join("")).split("_").join("") : "strikethrough" == t && (i = i.split("~~").join("")), o.replaceSelection(l + i + c), u.ch += n.length, h.ch = u.ch + i.length), o.setSelection(u, h), o.focus()
	//			}
	//		}

	//		function D(e, t) {
	//			for (var n in t) t.hasOwnProperty(n) && (t[n] instanceof Array ? e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []) : null !== t[n] && "object" == typeof t[n] && t[n].constructor === Object ? e[n] = D(e[n] || {}, t[n]) : e[n] = t[n]);
	//			return e
	//		}

	//		function H(e) {
	//			for (var t = 1; t < arguments.length; t++) e = D(e, arguments[t]);
	//			return e
	//		}

	//		function W(e) {
	//			var t = e.match(/[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g),
	//				n = 0;
	//			if (null === t) return n;
	//			for (var r = 0; r < t.length; r++) t[r].charCodeAt(0) >= 19968 ? n += t[r].length : n += 1;
	//			return n
	//		}

	//		function B(e) {
	//			(e = e || {}).parent = this;
	//			var t = !0;
	//			if (!1 === e.autoDownloadFontAwesome && (t = !1), !0 !== e.autoDownloadFontAwesome)
	//				for (var n = document.styleSheets, r = 0; r < n.length; r++) n[r].href && n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1);
	//			if (t) {
	//				var i = document.createElement("link");
	//				i.rel = "stylesheet", i.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(i)
	//			}
	//			if (e.element) this.element = e.element;
	//			else if (null === e.element) return void console.log("SimpleMDE: Error. No element was found.");
	//			if (void 0 === e.toolbar) {
	//				e.toolbar = [];
	//				for (var o in V) V.hasOwnProperty(o) && (-1 != o.indexOf("separator-") && e.toolbar.push("|"), (!0 === V[o].default || e.showIcons && e.showIcons.constructor === Array && -1 != e.showIcons.indexOf(o)) && e.toolbar.push(o))
	//			}
	//			e.hasOwnProperty("status") || (e.status = ["autosave", "lines", "words", "cursor"]), e.previewRender || (e.previewRender = function(e) {
	//				return this.parent.markdown(e)
	//			}), e.parsingConfig = H({
	//				highlightFormatting: !0
	//			}, e.parsingConfig || {}), e.insertTexts = H({}, X, e.insertTexts || {}), e.promptTexts = H({}, K, e.promptTexts || {}), e.blockStyles = H({}, Y, e.blockStyles || {}), e.shortcuts = H({}, q, e.shortcuts || {}), e.minHeight = e.minHeight || "300px", void 0 != e.autosave && void 0 != e.autosave.unique_id && "" != e.autosave.unique_id && (e.autosave.uniqueId = e.autosave.unique_id), this.options = e, this.render(), !e.initialValue || this.options.autosave && !0 === this.options.autosave.foundSavedValue || this.value(e.initialValue)
	//		}

	//		function F() {
	//			if ("object" != typeof localStorage) return !1;
	//			try {
	//				localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage")
	//			} catch (e) {
	//				return !1
	//			}
	//			return !0
	//		}
	//		var R = e("codemirror");
	//		e("codemirror/addon/edit/continuelist.js"), e("./codemirror/tablist"), e("codemirror/addon/display/fullscreen.js"), e("codemirror/mode/markdown/markdown.js"), e("codemirror/addon/mode/overlay.js"), e("codemirror/addon/display/placeholder.js"), e("codemirror/addon/selection/mark-selection.js"), e("codemirror/mode/gfm/gfm.js"), e("codemirror/mode/xml/xml.js");
	//		var P = e("codemirror-spell-checker"),
	//			z = e("marked"),
	//			_ = /Mac/.test(navigator.platform),
	//			j = {
	//				toggleBold: l,
	//				toggleItalic: c,
	//				drawLink: w,
	//				toggleHeadingSmaller: d,
	//				toggleHeadingBigger: p,
	//				drawImage: k,
	//				toggleBlockquote: f,
	//				toggleOrderedList: x,
	//				toggleUnorderedList: y,
	//				toggleCodeBlock: h,
	//				togglePreview: N,
	//				toggleStrikethrough: u,
	//				toggleHeading1: m,
	//				toggleHeading2: g,
	//				toggleHeading3: v,
	//				cleanBlock: b,
	//				drawTable: C,
	//				drawHorizontalRule: S,
	//				undo: L,
	//				redo: T,
	//				toggleSideBySide: M,
	//				toggleFullScreen: s
	//			},
	//			q = {
	//				toggleBold: "Cmd-B",
	//				toggleItalic: "Cmd-I",
	//				drawLink: "Cmd-K",
	//				toggleHeadingSmaller: "Cmd-H",
	//				toggleHeadingBigger: "Shift-Cmd-H",
	//				cleanBlock: "Cmd-E",
	//				drawImage: "Cmd-Alt-I",
	//				toggleBlockquote: "Cmd-'",
	//				toggleOrderedList: "Cmd-Alt-L",
	//				toggleUnorderedList: "Cmd-L",
	//				toggleCodeBlock: "Cmd-Alt-C",
	//				togglePreview: "Cmd-P",
	//				toggleSideBySide: "F9",
	//				toggleFullScreen: "F11"
	//			},
	//			U = function(e) {
	//				for (var t in j)
	//					if (j[t] === e) return t;
	//				return null
	//			},
	//			G = function() {
	//				var e = !1;
	//				return function(t) {
	//					(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0, 4))) && (e = !0)
	//				}(navigator.userAgent || navigator.vendor || window.opera), e
	//			},
	//			$ = "",
	//			V = {
	//				bold: {
	//					name: "bold",
	//					action: l,
	//					className: "fa fa-bold",
	//					title: "Bold",
	//					default: !0
	//				},
	//				italic: {
	//					name: "italic",
	//					action: c,
	//					className: "fa fa-italic",
	//					title: "Italic",
	//					default: !0
	//				},
	//				strikethrough: {
	//					name: "strikethrough",
	//					action: u,
	//					className: "fa fa-strikethrough",
	//					title: "Strikethrough"
	//				},
	//				heading: {
	//					name: "heading",
	//					action: d,
	//					className: "fa fa-header fa-heading",
	//					title: "Heading",
	//					default: !0
	//				},
	//				"heading-smaller": {
	//					name: "heading-smaller",
	//					action: d,
	//					className: "fa fa-header fa-header-x fa-header-smaller",
	//					title: "Smaller Heading"
	//				},
	//				"heading-bigger": {
	//					name: "heading-bigger",
	//					action: p,
	//					className: "fa fa-header fa-header-x fa-header-bigger",
	//					title: "Bigger Heading"
	//				},
	//				"heading-1": {
	//					name: "heading-1",
	//					action: m,
	//					className: "fa fa-header fa-header-x fa-header-1",
	//					title: "Big Heading"
	//				},
	//				"heading-2": {
	//					name: "heading-2",
	//					action: g,
	//					className: "fa fa-header fa-header-x fa-header-2",
	//					title: "Medium Heading"
	//				},
	//				"heading-3": {
	//					name: "heading-3",
	//					action: v,
	//					className: "fa fa-header fa-header-x fa-header-3",
	//					title: "Small Heading"
	//				},
	//				"separator-1": {
	//					name: "separator-1"
	//				},
	//				code: {
	//					name: "code",
	//					action: h,
	//					className: "fa fa-code",
	//					title: "Code"
	//				},
	//				quote: {
	//					name: "quote",
	//					action: f,
	//					className: "fa fa-quote-left",
	//					title: "Quote",
	//					default: !0
	//				},
	//				"unordered-list": {
	//					name: "unordered-list",
	//					action: y,
	//					className: "fa fa-list-ul",
	//					title: "Generic List",
	//					default: !0
	//				},
	//				"ordered-list": {
	//					name: "ordered-list",
	//					action: x,
	//					className: "fa fa-list-ol",
	//					title: "Numbered List",
	//					default: !0
	//				},
	//				"clean-block": {
	//					name: "clean-block",
	//					action: b,
	//					className: "fa fa-eraser fa-clean-block",
	//					title: "Clean block"
	//				},
	//				"separator-2": {
	//					name: "separator-2"
	//				},
	//				link: {
	//					name: "link",
	//					action: w,
	//					className: "fa fa-link",
	//					title: "Create Link",
	//					default: !0
	//				},
	//				image: {
	//					name: "image",
	//					action: k,
	//					className: "fa fa-image",
	//					title: "Insert Image",
	//					default: !0
	//				},
	//				table: {
	//					name: "table",
	//					action: C,
	//					className: "fa fa-table",
	//					title: "Insert Table"
	//				},
	//				"horizontal-rule": {
	//					name: "horizontal-rule",
	//					action: S,
	//					className: "fa fa-minus",
	//					title: "Insert Horizontal Line"
	//				},
	//				"separator-3": {
	//					name: "separator-3"
	//				},
	//				preview: {
	//					name: "preview",
	//					action: N,
	//					className: "fa fa-eye",
	//					noDisable: !0,
	//					title: "Toggle Preview",
	//					default: !0
	//				},
	//				"side-by-side": {
	//					name: "side-by-side",
	//					action: M,
	//					className: "fa fa-columns",
	//					noDisable: !0,
	//					noMobile: !0,
	//					title: "Toggle Side by Side",
	//					default: !0
	//				},
	//				fullscreen: {
	//					name: "fullscreen",
	//					action: s,
	//					className: "fa fa-arrows-alt",
	//					noDisable: !0,
	//					noMobile: !0,
	//					title: "Toggle Fullscreen",
	//					default: !0
	//				},
	//				"separator-4": {
	//					name: "separator-4"
	//				},
	//				guide: {
	//					name: "guide",
	//					action: "https://simplemde.com/markdown-guide",
	//					className: "fa fa-question-circle",
	//					noDisable: !0,
	//					title: "Markdown Guide",
	//					default: !0
	//				},
	//				"separator-5": {
	//					name: "separator-5"
	//				},
	//				undo: {
	//					name: "undo",
	//					action: L,
	//					className: "fa fa-undo",
	//					noDisable: !0,
	//					title: "Undo"
	//				},
	//				redo: {
	//					name: "redo",
	//					action: T,
	//					className: "fa fa-repeat",
	//					noDisable: !0,
	//					title: "Redo"
	//				}
	//			},
	//			X = {
	//				link: ["[", "](#url#)"],
	//				image: ["![](", "#url#)"],
	//				table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"],
	//				horizontalRule: ["", "\n\n-----\n\n"]
	//			},
	//			K = {
	//				link: "URL for the link:",
	//				image: "URL of the image:"
	//			},
	//			Y = {
	//				bold: "**",
	//				code: "```",
	//				italic: "*"
	//			};
	//		B.prototype.markdown = function(e) {
	//			if (z) {
	//				var t;
	//				if (t = this.options && this.options.renderingConfig && this.options.renderingConfig.markedOptions ? this.options.renderingConfig.markedOptions : {}, this.options && this.options.renderingConfig && !1 === this.options.renderingConfig.singleLineBreaks ? t.breaks = !1 : t.breaks = !0, this.options && this.options.renderingConfig && !0 === this.options.renderingConfig.codeSyntaxHighlighting) {
	//					var n = this.options.renderingConfig.hljs || window.hljs;
	//					n && (t.highlight = function(e) {
	//						return n.highlightAuto(e).value
	//					})
	//				}
	//				return z.setOptions(t), z(e)
	//			}
	//		}, B.prototype.render = function(e) {
	//			if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
	//				this.element = e;
	//				var t = this.options,
	//					n = this,
	//					i = {};
	//				for (var o in t.shortcuts) null !== t.shortcuts[o] && null !== j[o] && function(e) {
	//					i[r(t.shortcuts[e])] = function() {
	//						j[e](n)
	//					}
	//				}(o);
	//				i.Enter = "newlineAndIndentContinueMarkdownList", i.Tab = "tabAndIndentMarkdownList", i["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", i.Esc = function(e) {
	//					e.getOption("fullScreen") && s(n)
	//				}, document.addEventListener("keydown", function(e) {
	//					27 == (e = e || window.event).keyCode && n.codemirror.getOption("fullScreen") && s(n)
	//				}, !1);
	//				var a, l;
	//				if (!1 !== t.spellChecker ? (a = "spell-checker", (l = t.parsingConfig).name = "gfm", l.gitHubSpice = !1, P({
	//						codeMirrorInstance: R
	//					})) : ((a = t.parsingConfig).name = "gfm", a.gitHubSpice = !1), this.codemirror = R.fromTextArea(e, {
	//						mode: a,
	//						backdrop: l,
	//						theme: "paper",
	//						tabSize: void 0 != t.tabSize ? t.tabSize : 2,
	//						indentUnit: void 0 != t.tabSize ? t.tabSize : 2,
	//						indentWithTabs: !1 !== t.indentWithTabs,
	//						lineNumbers: !1,
	//						autofocus: !0 === t.autofocus,
	//						extraKeys: i,
	//						lineWrapping: !1 !== t.lineWrapping,
	//						allowDropFileTypes: ["text/plain"],
	//						placeholder: t.placeholder || e.getAttribute("placeholder") || "",
	//						styleSelectedText: void 0 != t.styleSelectedText ? t.styleSelectedText : !G()
	//					}), this.codemirror.getScrollerElement().style.minHeight = t.minHeight, !0 === t.forceSync) {
	//					var c = this.codemirror;
	//					c.on("change", function() {
	//						c.save()
	//					})
	//				}
	//				this.gui = {}, !1 !== t.toolbar && (this.gui.toolbar = this.createToolbar()), !1 !== t.status && (this.gui.statusbar = this.createStatusbar()), void 0 != t.autosave && !0 === t.autosave.enabled && this.autosave(), this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element;
	//				var u = this.codemirror;
	//				setTimeout(function() {
	//					u.refresh()
	//				}.bind(u), 0)
	//			}
	//		}, B.prototype.autosave = function() {
	//			if (F()) {
	//				var e = this;
	//				if (void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to use the autosave feature");
	//				null != e.element.form && void 0 != e.element.form && e.element.form.addEventListener("submit", function() {
	//					localStorage.removeItem("smde_" + e.options.autosave.uniqueId)
	//				}), !0 !== this.options.autosave.loaded && ("string" == typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) && "" != localStorage.getItem("smde_" + this.options.autosave.uniqueId) && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0), localStorage.setItem("smde_" + this.options.autosave.uniqueId, e.value());
	//				var t = document.getElementById("autosaved");
	//				if (null != t && void 0 != t && "" != t) {
	//					var n = new Date,
	//						r = n.getHours(),
	//						i = n.getMinutes(),
	//						o = "am",
	//						a = r;
	//					a >= 12 && (a = r - 12, o = "pm"), 0 == a && (a = 12), i = i < 10 ? "0" + i : i, t.innerHTML = "Autosaved: " + a + ":" + i + " " + o
	//				}
	//				this.autosaveTimeoutId = setTimeout(function() {
	//					e.autosave()
	//				}, this.options.autosave.delay || 1e4)
	//			} else console.log("SimpleMDE: localStorage not available, cannot autosave")
	//		}, B.prototype.clearAutosavedValue = function() {
	//			if (F()) {
	//				if (void 0 == this.options.autosave || void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to clear the autosave value");
	//				localStorage.removeItem("smde_" + this.options.autosave.uniqueId)
	//			} else console.log("SimpleMDE: localStorage not available, cannot autosave")
	//		}, B.prototype.createSideBySide = function() {
	//			var e = this.codemirror,
	//				t = e.getWrapperElement(),
	//				n = t.nextSibling;
	//			if (n && /editor-preview-side/.test(n.className) || ((n = document.createElement("div")).className = "editor-preview-side", t.parentNode.insertBefore(n, t.nextSibling)), !1 === this.options.syncSideBySidePreviewScroll) return n;
	//			var r = !1,
	//				i = !1;
	//			return e.on("scroll", function(e) {
	//				if (r) r = !1;
	//				else {
	//					i = !0;
	//					var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
	//						o = parseFloat(e.getScrollInfo().top) / t,
	//						a = (n.scrollHeight - n.clientHeight) * o;
	//					n.scrollTop = a
	//				}
	//			}), n.onscroll = function() {
	//				if (i) i = !1;
	//				else {
	//					r = !0;
	//					var t = n.scrollHeight - n.clientHeight,
	//						o = parseFloat(n.scrollTop) / t,
	//						a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * o;
	//					e.scrollTo(0, a)
	//				}
	//			}, n
	//		}, B.prototype.createToolbar = function(e) {
	//			if ((e = e || this.options.toolbar) && 0 !== e.length) {
	//				var t;
	//				for (t = 0; t < e.length; t++) void 0 != V[e[t]] && (e[t] = V[e[t]]);
	//				var n = document.createElement("div");
	//				n.className = "editor-toolbar";
	//				var r = this,
	//					s = {};
	//				for (r.toolbar = e, t = 0; t < e.length; t++)
	//					if (("guide" != e[t].name || !1 !== r.options.toolbarGuideIcon) && !(r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[t].name) || ("fullscreen" == e[t].name || "side-by-side" == e[t].name) && G())) {
	//						if ("|" === e[t]) {
	//							for (var l = !1, c = t + 1; c < e.length; c++) "|" === e[c] || r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[c].name) || (l = !0);
	//							if (!l) continue
	//						}! function(e) {
	//							var t;
	//							t = "|" === e ? o() : i(e, r.options.toolbarTips, r.options.shortcuts), e.action && ("function" == typeof e.action ? t.onclick = function(t) {
	//								t.preventDefault(), e.action(r)
	//							} : "string" == typeof e.action && (t.onclick = function(t) {
	//								t.preventDefault(), window.open(e.action, "_blank")
	//							})), s[e.name || e] = t, n.appendChild(t)
	//						}(e[t])
	//					}
	//				r.toolbarElements = s;
	//				var u = this.codemirror;
	//				u.on("cursorActivity", function() {
	//					var e = a(u);
	//					for (var t in s) ! function(t) {
	//						var n = s[t];
	//						e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, ""))
	//					}(t)
	//				});
	//				var h = u.getWrapperElement();
	//				return h.parentNode.insertBefore(n, h), n
	//			}
	//		}, B.prototype.createStatusbar = function(e) {
	//			e = e || this.options.status;
	//			var t = this.options,
	//				n = this.codemirror;
	//			if (e && 0 !== e.length) {
	//				var r, i, o, a = [];
	//				for (r = 0; r < e.length; r++)
	//					if (i = void 0, o = void 0, "object" == typeof e[r]) a.push({
	//						className: e[r].className,
	//						defaultValue: e[r].defaultValue,
	//						onUpdate: e[r].onUpdate
	//					});
	//					else {
	//						var s = e[r];
	//						"words" === s ? (o = function(e) {
	//							e.innerHTML = W(n.getValue())
	//						}, i = function(e) {
	//							e.innerHTML = W(n.getValue())
	//						}) : "lines" === s ? (o = function(e) {
	//							e.innerHTML = n.lineCount()
	//						}, i = function(e) {
	//							e.innerHTML = n.lineCount()
	//						}) : "cursor" === s ? (o = function(e) {
	//							e.innerHTML = "0:0"
	//						}, i = function(e) {
	//							var t = n.getCursor();
	//							e.innerHTML = t.line + ":" + t.ch
	//						}) : "autosave" === s && (o = function(e) {
	//							void 0 != t.autosave && !0 === t.autosave.enabled && e.setAttribute("id", "autosaved")
	//						}), a.push({
	//							className: s,
	//							defaultValue: o,
	//							onUpdate: i
	//						})
	//					}
	//				var l = document.createElement("div");
	//				for (l.className = "editor-statusbar", r = 0; r < a.length; r++) {
	//					var c = a[r],
	//						u = document.createElement("span");
	//					u.className = c.className, "function" == typeof c.defaultValue && c.defaultValue(u), "function" == typeof c.onUpdate && this.codemirror.on("update", function(e, t) {
	//						return function() {
	//							t.onUpdate(e)
	//						}
	//					}(u, c)), l.appendChild(u)
	//				}
	//				var h = this.codemirror.getWrapperElement();
	//				return h.parentNode.insertBefore(l, h.nextSibling), l
	//			}
	//		}, B.prototype.value = function(e) {
	//			var t = this.codemirror;
	//			if (void 0 === e) return t.getValue();
	//			if (t.getDoc().setValue(e), this.isPreviewActive()) {
	//				var n = t.getWrapperElement().lastChild;
	//				n.innerHTML = this.options.previewRender(e, n)
	//			}
	//			return this
	//		}, B.toggleBold = l, B.toggleItalic = c, B.toggleStrikethrough = u, B.toggleBlockquote = f, B.toggleHeadingSmaller = d, B.toggleHeadingBigger = p, B.toggleHeading1 = m, B.toggleHeading2 = g, B.toggleHeading3 = v, B.toggleCodeBlock = h, B.toggleUnorderedList = y, B.toggleOrderedList = x, B.cleanBlock = b, B.drawLink = w, B.drawImage = k, B.drawTable = C, B.drawHorizontalRule = S, B.undo = L, B.redo = T, B.togglePreview = N, B.toggleSideBySide = M, B.toggleFullScreen = s, B.prototype.toggleBold = function() {
	//			l(this)
	//		}, B.prototype.toggleItalic = function() {
	//			c(this)
	//		}, B.prototype.toggleStrikethrough = function() {
	//			u(this)
	//		}, B.prototype.toggleBlockquote = function() {
	//			f(this)
	//		}, B.prototype.toggleHeadingSmaller = function() {
	//			d(this)
	//		}, B.prototype.toggleHeadingBigger = function() {
	//			p(this)
	//		}, B.prototype.toggleHeading1 = function() {
	//			m(this)
	//		}, B.prototype.toggleHeading2 = function() {
	//			g(this)
	//		}, B.prototype.toggleHeading3 = function() {
	//			v(this)
	//		}, B.prototype.toggleCodeBlock = function() {
	//			h(this)
	//		}, B.prototype.toggleUnorderedList = function() {
	//			y(this)
	//		}, B.prototype.toggleOrderedList = function() {
	//			x(this)
	//		}, B.prototype.cleanBlock = function() {
	//			b(this)
	//		}, B.prototype.drawLink = function() {
	//			w(this)
	//		}, B.prototype.drawImage = function() {
	//			k(this)
	//		}, B.prototype.drawTable = function() {
	//			C(this)
	//		}, B.prototype.drawHorizontalRule = function() {
	//			S(this)
	//		}, B.prototype.undo = function() {
	//			L(this)
	//		}, B.prototype.redo = function() {
	//			T(this)
	//		}, B.prototype.togglePreview = function() {
	//			N(this)
	//		}, B.prototype.toggleSideBySide = function() {
	//			M(this)
	//		}, B.prototype.toggleFullScreen = function() {
	//			s(this)
	//		}, B.prototype.isPreviewActive = function() {
	//			var e = this.codemirror.getWrapperElement().lastChild;
	//			return /editor-preview-active/.test(e.className)
	//		}, B.prototype.isSideBySideActive = function() {
	//			var e = this.codemirror.getWrapperElement().nextSibling;
	//			return /editor-preview-active-side/.test(e.className)
	//		}, B.prototype.isFullscreenActive = function() {
	//			return this.codemirror.getOption("fullScreen")
	//		}, B.prototype.getState = function() {
	//			return a(this.codemirror)
	//		}, B.prototype.toTextArea = function() {
	//			var e = this.codemirror,
	//				t = e.getWrapperElement();
	//			t.parentNode && (this.gui.toolbar && t.parentNode.removeChild(this.gui.toolbar), this.gui.statusbar && t.parentNode.removeChild(this.gui.statusbar), this.gui.sideBySide && t.parentNode.removeChild(this.gui.sideBySide)), e.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue())
	//		}, t.exports = B
	//	}, {
	//		"./codemirror/tablist": 18,
	//		codemirror: 10,
	//		"codemirror-spell-checker": 4,
	//		"codemirror/addon/display/fullscreen.js": 5,
	//		"codemirror/addon/display/placeholder.js": 6,
	//		"codemirror/addon/edit/continuelist.js": 7,
	//		"codemirror/addon/mode/overlay.js": 8,
	//		"codemirror/addon/selection/mark-selection.js": 9,
	//		"codemirror/mode/gfm/gfm.js": 11,
	//		"codemirror/mode/markdown/markdown.js": 12,
	//		"codemirror/mode/xml/xml.js": 14,
	//		marked: 16
	//	}]
	//}, {}, [19])(19)
}
//);
