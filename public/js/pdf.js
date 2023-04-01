/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], e) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = e() : t["pdfjs-dist/build/pdf"] = t.pdfjsDistBuildPdf = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e),
            i.l = !0,
            i.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.i = function(t) {
            return t
        }
        ,
        e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return e.d(n, "a", n),
            n
        }
        ,
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        e.p = "",
        e(e.s = 14)
    }([function(t, e, n) {
        "use strict";
        (function(t) {
            function r(t) {
                nt = t
            }
            function i() {
                return nt
            }
            function a(t) {
                nt >= $.infos && console.log("Info: " + t)
            }
            function s(t) {
                nt >= $.warnings && console.log("Warning: " + t)
            }
            function o(t) {
                console.log("Deprecated API usage: " + t)
            }
            function c(t) {
                throw nt >= $.errors && (console.log("Error: " + t),
                console.log(l())),
                new Error(t)
            }
            function l() {
                try {
                    throw new Error
                } catch (t) {
                    return t.stack ? t.stack.split("\n").slice(2).join("\n") : ""
                }
            }
            function h(t, e) {
                t || c(e)
            }
            function u(t, e) {
                try {
                    var n = new URL(t);
                    if (!n.origin || "null" === n.origin)
                        return !1
                } catch (t) {
                    return !1
                }
                var r = new URL(e,n);
                return n.origin === r.origin
            }
            function d(t) {
                if (!t)
                    return !1;
                switch (t.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "mailto:":
                case "tel:":
                    return !0;
                default:
                    return !1
                }
            }
            function f(t, e) {
                if (!t)
                    return null;
                try {
                    var n = e ? new URL(t,e) : new URL(t);
                    if (d(n))
                        return n
                } catch (t) {}
                return null
            }
            function p(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !1
                }),
                n
            }
            function g(t) {
                var e;
                return function() {
                    return t && (e = Object.create(null),
                    t(e),
                    t = null),
                    e
                }
            }
            function m(t) {
                return "string" != typeof t ? (s("The argument for removeNullCharacters must be a string."),
                t) : t.replace(ft, "")
            }
            function A(t) {
                h(null !== t && "object" == typeof t && void 0 !== t.length, "Invalid argument for bytesToString");
                var e = t.length
                  , n = 8192;
                if (e < n)
                    return String.fromCharCode.apply(null, t);
                for (var r = [], i = 0; i < e; i += n) {
                    var a = Math.min(i + n, e)
                      , s = t.subarray(i, a);
                    r.push(String.fromCharCode.apply(null, s))
                }
                return r.join("")
            }
            function v(t) {
                h("string" == typeof t, "Invalid argument for stringToBytes");
                for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; ++r)
                    n[r] = 255 & t.charCodeAt(r);
                return n
            }
            function b(t) {
                return void 0 !== t.length ? t.length : (h(void 0 !== t.byteLength),
                t.byteLength)
            }
            function y(t) {
                if (1 === t.length && t[0]instanceof Uint8Array)
                    return t[0];
                var e, n, r, i = 0, a = t.length;
                for (e = 0; e < a; e++)
                    i += r = b(n = t[e]);
                var s = 0
                  , o = new Uint8Array(i);
                for (e = 0; e < a; e++)
                    (n = t[e])instanceof Uint8Array || (n = "string" == typeof n ? v(n) : new Uint8Array(n)),
                    r = n.byteLength,
                    o.set(n, s),
                    s += r;
                return o
            }
            function x(t) {
                return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t)
            }
            function S(t) {
                for (var e = 1, n = 0; t > e; )
                    e <<= 1,
                    n++;
                return n
            }
            function w(t, e) {
                return t[e] << 24 >> 24
            }
            function k(t, e) {
                return t[e] << 8 | t[e + 1]
            }
            function C(t, e) {
                return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
            }
            function _() {
                var t = new Uint8Array(2);
                return t[0] = 1,
                1 === new Uint16Array(t.buffer)[0]
            }
            function T() {
                try {
                    return new Function(""),
                    !0
                } catch (t) {
                    return !1
                }
            }
            function P(t) {
                var e, n = t.length, r = [];
                if ("þ" === t[0] && "ÿ" === t[1])
                    for (e = 2; e < n; e += 2)
                        r.push(String.fromCharCode(t.charCodeAt(e) << 8 | t.charCodeAt(e + 1)));
                else
                    for (e = 0; e < n; ++e) {
                        var i = vt[t.charCodeAt(e)];
                        r.push(i ? String.fromCharCode(i) : t.charAt(e))
                    }
                return r.join("")
            }
            function L(t) {
                return decodeURIComponent(escape(t))
            }
            function E(t) {
                return unescape(encodeURIComponent(t))
            }
            function R(t) {
                for (var e in t)
                    return !1;
                return !0
            }
            function I(t) {
                return "boolean" == typeof t
            }
            function F(t) {
                return "number" == typeof t && (0 | t) === t
            }
            function N(t) {
                return "number" == typeof t
            }
            function M(t) {
                return "string" == typeof t
            }
            function D(t) {
                return t instanceof Array
            }
            function O(t) {
                return "object" == typeof t && null !== t && void 0 !== t.byteLength
            }
            function j(t) {
                return 32 === t || 9 === t || 13 === t || 10 === t
            }
            function U() {
                return "undefined" == typeof __pdfjsdev_webpack__ && ("object" == typeof process && process + "" == "[object process]")
            }
            function B() {
                var t = {};
                return t.promise = new Promise(function(e, n) {
                    t.resolve = e,
                    t.reject = n
                }
                ),
                t
            }
            function W(t, e, n) {
                this.sourceName = t,
                this.targetName = e,
                this.comObj = n,
                this.callbackIndex = 1,
                this.postMessageTransfers = !0;
                var r = this.callbacksCapabilities = Object.create(null)
                  , i = this.actionHandler = Object.create(null);
                this._onComObjOnMessage = function(t) {
                    var e = t.data;
                    if (e.targetName === this.sourceName)
                        if (e.isReply) {
                            var a = e.callbackId;
                            if (e.callbackId in r) {
                                var s = r[a];
                                delete r[a],
                                "error"in e ? s.reject(e.error) : s.resolve(e.data)
                            } else
                                c("Cannot resolve callback " + a)
                        } else if (e.action in i) {
                            var o = i[e.action];
                            if (e.callbackId) {
                                var l = this.sourceName
                                  , h = e.sourceName;
                                Promise.resolve().then(function() {
                                    return o[0].call(o[1], e.data)
                                }).then(function(t) {
                                    n.postMessage({
                                        sourceName: l,
                                        targetName: h,
                                        isReply: !0,
                                        callbackId: e.callbackId,
                                        data: t
                                    })
                                }, function(t) {
                                    t instanceof Error && (t += ""),
                                    n.postMessage({
                                        sourceName: l,
                                        targetName: h,
                                        isReply: !0,
                                        callbackId: e.callbackId,
                                        error: t
                                    })
                                })
                            } else
                                o[0].call(o[1], e.data)
                        } else
                            c("Unknown action from worker: " + e.action)
                }
                .bind(this),
                n.addEventListener("message", this._onComObjOnMessage)
            }
            function G(t, e, n) {
                var r = new Image;
                r.onload = function() {
                    n.resolve(t, r)
                }
                ,
                r.onerror = function() {
                    n.resolve(t, null),
                    s("Error during JPEG image loading")
                }
                ,
                r.src = e
            }
            n(13);
            var X = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : void 0
              , H = [.001, 0, 0, .001, 0, 0]
              , z = {
                FILL: 0,
                STROKE: 1,
                FILL_STROKE: 2,
                INVISIBLE: 3,
                FILL_ADD_TO_PATH: 4,
                STROKE_ADD_TO_PATH: 5,
                FILL_STROKE_ADD_TO_PATH: 6,
                ADD_TO_PATH: 7,
                FILL_STROKE_MASK: 3,
                ADD_TO_PATH_FLAG: 4
            }
              , Y = {
                GRAYSCALE_1BPP: 1,
                RGB_24BPP: 2,
                RGBA_32BPP: 3
            }
              , q = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                SOUND: 18,
                MOVIE: 19,
                WIDGET: 20,
                SCREEN: 21,
                PRINTERMARK: 22,
                TRAPNET: 23,
                WATERMARK: 24,
                THREED: 25,
                REDACT: 26
            }
              , V = {
                INVISIBLE: 1,
                HIDDEN: 2,
                PRINT: 4,
                NOZOOM: 8,
                NOROTATE: 16,
                NOVIEW: 32,
                READONLY: 64,
                LOCKED: 128,
                TOGGLENOVIEW: 256,
                LOCKEDCONTENTS: 512
            }
              , J = {
                READONLY: 1,
                REQUIRED: 2,
                NOEXPORT: 4,
                MULTILINE: 4096,
                PASSWORD: 8192,
                NOTOGGLETOOFF: 16384,
                RADIO: 32768,
                PUSHBUTTON: 65536,
                COMBO: 131072,
                EDIT: 262144,
                SORT: 524288,
                FILESELECT: 1048576,
                MULTISELECT: 2097152,
                DONOTSPELLCHECK: 4194304,
                DONOTSCROLL: 8388608,
                COMB: 16777216,
                RICHTEXT: 33554432,
                RADIOSINUNISON: 33554432,
                COMMITONSELCHANGE: 67108864
            }
              , Q = {
                SOLID: 1,
                DASHED: 2,
                BEVELED: 3,
                INSET: 4,
                UNDERLINE: 5
            }
              , K = {
                UNKNOWN: 0,
                FLATE: 1,
                LZW: 2,
                DCT: 3,
                JPX: 4,
                JBIG: 5,
                A85: 6,
                AHX: 7,
                CCF: 8,
                RL: 9
            }
              , Z = {
                UNKNOWN: 0,
                TYPE1: 1,
                TYPE1C: 2,
                CIDFONTTYPE0: 3,
                CIDFONTTYPE0C: 4,
                TRUETYPE: 5,
                CIDFONTTYPE2: 6,
                TYPE3: 7,
                OPENTYPE: 8,
                TYPE0: 9,
                MMTYPE1: 10
            }
              , $ = {
                errors: 0,
                warnings: 1,
                infos: 5
            }
              , tt = {
                NONE: 0,
                BINARY: 1,
                STREAM: 2
            }
              , et = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotations: 78,
                endAnnotations: 79,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintJpegXObject: 82,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
            }
              , nt = $.warnings
              , rt = {
                unknown: "unknown",
                forms: "forms",
                javaScript: "javaScript",
                smask: "smask",
                shadingPattern: "shadingPattern",
                font: "font"
            }
              , it = {
                NEED_PASSWORD: 1,
                INCORRECT_PASSWORD: 2
            }
              , at = function() {
                function t(t, e) {
                    this.name = "PasswordException",
                    this.message = t,
                    this.code = e
                }
                return t.prototype = new Error,
                t.constructor = t,
                t
            }()
              , st = function() {
                function t(t, e) {
                    this.name = "UnknownErrorException",
                    this.message = t,
                    this.details = e
                }
                return t.prototype = new Error,
                t.constructor = t,
                t
            }()
              , ot = function() {
                function t(t) {
                    this.name = "InvalidPDFException",
                    this.message = t
                }
                return t.prototype = new Error,
                t.constructor = t,
                t
            }()
              , ct = function() {
                function t(t) {
                    this.name = "MissingPDFException",
                    this.message = t
                }
                return t.prototype = new Error,
                t.constructor = t,
                t
            }()
              , lt = function() {
                function t(t, e) {
                    this.name = "UnexpectedResponseException",
                    this.message = t,
                    this.status = e
                }
                return t.prototype = new Error,
                t.constructor = t,
                t
            }()
              , ht = function() {
                function t(t) {
                    this.message = t
                }
                return t.prototype = new Error,
                t.prototype.name = "NotImplementedException",
                t.constructor = t,
                t
            }()
              , ut = function() {
                function t(t, e) {
                    this.begin = t,
                    this.end = e,
                    this.message = "Missing data [" + t + ", " + e + ")"
                }
                return t.prototype = new Error,
                t.prototype.name = "MissingDataException",
                t.constructor = t,
                t
            }()
              , dt = function() {
                function t(t) {
                    this.message = t
                }
                return t.prototype = new Error,
                t.prototype.name = "XRefParseException",
                t.constructor = t,
                t
            }()
              , ft = /\x00/g
              , pt = function() {
                function t(t, e) {
                    this.buffer = t,
                    this.byteLength = t.length,
                    this.length = void 0 === e ? this.byteLength >> 2 : e,
                    n(this.length)
                }
                function e(t) {
                    return {
                        get: function() {
                            var e = this.buffer
                              , n = t << 2;
                            return (e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24) >>> 0
                        },
                        set: function(e) {
                            var n = this.buffer
                              , r = t << 2;
                            n[r] = 255 & e,
                            n[r + 1] = e >> 8 & 255,
                            n[r + 2] = e >> 16 & 255,
                            n[r + 3] = e >>> 24 & 255
                        }
                    }
                }
                function n(n) {
                    for (; r < n; )
                        Object.defineProperty(t.prototype, r, e(r)),
                        r++
                }
                t.prototype = Object.create(null);
                var r = 0;
                return t
            }();
            e.Uint32ArrayView = pt;
            var gt = [1, 0, 0, 1, 0, 0]
              , mt = function() {
                function t() {}
                var e = ["rgb(", 0, ",", 0, ",", 0, ")"];
                t.makeCssRgb = function(t, n, r) {
                    return e[1] = t,
                    e[3] = n,
                    e[5] = r,
                    e.join("")
                }
                ,
                t.transform = function(t, e) {
                    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
                }
                ,
                t.applyTransform = function(t, e) {
                    return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]]
                }
                ,
                t.applyInverseTransform = function(t, e) {
                    var n = e[0] * e[3] - e[1] * e[2];
                    return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / n, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / n]
                }
                ,
                t.getAxialAlignedBoundingBox = function(e, n) {
                    var r = t.applyTransform(e, n)
                      , i = t.applyTransform(e.slice(2, 4), n)
                      , a = t.applyTransform([e[0], e[3]], n)
                      , s = t.applyTransform([e[2], e[1]], n);
                    return [Math.min(r[0], i[0], a[0], s[0]), Math.min(r[1], i[1], a[1], s[1]), Math.max(r[0], i[0], a[0], s[0]), Math.max(r[1], i[1], a[1], s[1])]
                }
                ,
                t.inverseTransform = function(t) {
                    var e = t[0] * t[3] - t[1] * t[2];
                    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e]
                }
                ,
                t.apply3dTransform = function(t, e) {
                    return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2], t[3] * e[0] + t[4] * e[1] + t[5] * e[2], t[6] * e[0] + t[7] * e[1] + t[8] * e[2]]
                }
                ,
                t.singularValueDecompose2dScale = function(t) {
                    var e = [t[0], t[2], t[1], t[3]]
                      , n = t[0] * e[0] + t[1] * e[2]
                      , r = t[0] * e[1] + t[1] * e[3]
                      , i = t[2] * e[0] + t[3] * e[2]
                      , a = t[2] * e[1] + t[3] * e[3]
                      , s = (n + a) / 2
                      , o = Math.sqrt((n + a) * (n + a) - 4 * (n * a - i * r)) / 2
                      , c = s + o || 1
                      , l = s - o || 1;
                    return [Math.sqrt(c), Math.sqrt(l)]
                }
                ,
                t.normalizeRect = function(t) {
                    var e = t.slice(0);
                    return t[0] > t[2] && (e[0] = t[2],
                    e[2] = t[0]),
                    t[1] > t[3] && (e[1] = t[3],
                    e[3] = t[1]),
                    e
                }
                ,
                t.intersect = function(e, n) {
                    function r(t, e) {
                        return t - e
                    }
                    var i = [e[0], e[2], n[0], n[2]].sort(r)
                      , a = [e[1], e[3], n[1], n[3]].sort(r)
                      , s = [];
                    return e = t.normalizeRect(e),
                    n = t.normalizeRect(n),
                    (i[0] === e[0] && i[1] === n[0] || i[0] === n[0] && i[1] === e[0]) && (s[0] = i[1],
                    s[2] = i[2],
                    (a[0] === e[1] && a[1] === n[1] || a[0] === n[1] && a[1] === e[1]) && (s[1] = a[1],
                    s[3] = a[2],
                    s))
                }
                ,
                t.sign = function(t) {
                    return t < 0 ? -1 : 1
                }
                ;
                var n = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                return t.toRoman = function(t, e) {
                    h(F(t) && t > 0, "The number should be a positive integer.");
                    for (var r, i = []; t >= 1e3; )
                        t -= 1e3,
                        i.push("M");
                    r = t / 100 | 0,
                    t %= 100,
                    i.push(n[r]),
                    r = t / 10 | 0,
                    t %= 10,
                    i.push(n[10 + r]),
                    i.push(n[20 + t]);
                    var a = i.join("");
                    return e ? a.toLowerCase() : a
                }
                ,
                t.appendToArray = function(t, e) {
                    Array.prototype.push.apply(t, e)
                }
                ,
                t.prependToArray = function(t, e) {
                    Array.prototype.unshift.apply(t, e)
                }
                ,
                t.extendObj = function(t, e) {
                    for (var n in e)
                        t[n] = e[n]
                }
                ,
                t.getInheritableProperty = function(t, e, n) {
                    for (; t && !t.has(e); )
                        t = t.get("Parent");
                    return t ? n ? t.getArray(e) : t.get(e) : null
                }
                ,
                t.inherit = function(t, e, n) {
                    t.prototype = Object.create(e.prototype),
                    t.prototype.constructor = t;
                    for (var r in n)
                        t.prototype[r] = n[r]
                }
                ,
                t.loadScript = function(t, e) {
                    var n = document.createElement("script")
                      , r = !1;
                    n.setAttribute("src", t),
                    e && (n.onload = function() {
                        r || e(),
                        r = !0
                    }
                    ),
                    document.getElementsByTagName("head")[0].appendChild(n)
                }
                ,
                t
            }()
              , At = function() {
                function t(t, e, n, r, i, a) {
                    this.viewBox = t,
                    this.scale = e,
                    this.rotation = n,
                    this.offsetX = r,
                    this.offsetY = i;
                    var s, o, c, l, h = (t[2] + t[0]) / 2, u = (t[3] + t[1]) / 2;
                    switch (n %= 360,
                    n = n < 0 ? n + 360 : n) {
                    case 180:
                        s = -1,
                        o = 0,
                        c = 0,
                        l = 1;
                        break;
                    case 90:
                        s = 0,
                        o = 1,
                        c = 1,
                        l = 0;
                        break;
                    case 270:
                        s = 0,
                        o = -1,
                        c = -1,
                        l = 0;
                        break;
                    default:
                        s = 1,
                        o = 0,
                        c = 0,
                        l = -1
                    }
                    a && (c = -c,
                    l = -l);
                    var d, f, p, g;
                    0 === s ? (d = Math.abs(u - t[1]) * e + r,
                    f = Math.abs(h - t[0]) * e + i,
                    p = Math.abs(t[3] - t[1]) * e,
                    g = Math.abs(t[2] - t[0]) * e) : (d = Math.abs(h - t[0]) * e + r,
                    f = Math.abs(u - t[1]) * e + i,
                    p = Math.abs(t[2] - t[0]) * e,
                    g = Math.abs(t[3] - t[1]) * e),
                    this.transform = [s * e, o * e, c * e, l * e, d - s * e * h - c * e * u, f - o * e * h - l * e * u],
                    this.width = p,
                    this.height = g,
                    this.fontScale = e
                }
                return t.prototype = {
                    clone: function(e) {
                        var n = "scale"in (e = e || {}) ? e.scale : this.scale
                          , r = "rotation"in e ? e.rotation : this.rotation;
                        return new t(this.viewBox.slice(),n,r,this.offsetX,this.offsetY,e.dontFlip)
                    },
                    convertToViewportPoint: function(t, e) {
                        return mt.applyTransform([t, e], this.transform)
                    },
                    convertToViewportRectangle: function(t) {
                        var e = mt.applyTransform([t[0], t[1]], this.transform)
                          , n = mt.applyTransform([t[2], t[3]], this.transform);
                        return [e[0], e[1], n[0], n[1]]
                    },
                    convertToPdfPoint: function(t, e) {
                        return mt.applyInverseTransform([t, e], this.transform)
                    }
                },
                t
            }()
              , vt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364]
              , bt = function() {
                function t(t, e, n) {
                    for (; t.length < n; )
                        t += e;
                    return t
                }
                function e() {
                    this.started = Object.create(null),
                    this.times = [],
                    this.enabled = !0
                }
                return e.prototype = {
                    time: function(t) {
                        this.enabled && (t in this.started && s("Timer is already running for " + t),
                        this.started[t] = Date.now())
                    },
                    timeEnd: function(t) {
                        this.enabled && (t in this.started || s("Timer has not been started for " + t),
                        this.times.push({
                            name: t,
                            start: this.started[t],
                            end: Date.now()
                        }),
                        delete this.started[t])
                    },
                    toString: function() {
                        var e, n, r = this.times, i = "", a = 0;
                        for (e = 0,
                        n = r.length; e < n; ++e) {
                            var s = r[e].name;
                            s.length > a && (a = s.length)
                        }
                        for (e = 0,
                        n = r.length; e < n; ++e) {
                            var o = r[e]
                              , c = o.end - o.start;
                            i += t(o.name, " ", a) + " " + c + "ms\n"
                        }
                        return i
                    }
                },
                e
            }()
              , yt = function(t, e) {
                if ("undefined" != typeof Blob)
                    return new Blob([t],{
                        type: e
                    });
                s('The "Blob" constructor is not supported.')
            }
              , xt = function() {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                return function(e, n, r) {
                    if (!r && "undefined" != typeof URL && URL.createObjectURL) {
                        var i = yt(e, n);
                        return URL.createObjectURL(i)
                    }
                    for (var a = "data:" + n + ";base64,", s = 0, o = e.length; s < o; s += 3) {
                        var c = 255 & e[s]
                          , l = 255 & e[s + 1]
                          , h = 255 & e[s + 2]
                          , u = c >> 2
                          , d = (3 & c) << 4 | l >> 4
                          , f = s + 1 < o ? (15 & l) << 2 | h >> 6 : 64
                          , p = s + 2 < o ? 63 & h : 64;
                        a += t[u] + t[d] + t[f] + t[p]
                    }
                    return a
                }
            }();
            W.prototype = {
                on: function(t, e, n) {
                    var r = this.actionHandler;
                    r[t] && c('There is already an actionName called "' + t + '"'),
                    r[t] = [e, n]
                },
                send: function(t, e, n) {
                    var r = {
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: t,
                        data: e
                    };
                    this.postMessage(r, n)
                },
                sendWithPromise: function(t, e, n) {
                    var r = this.callbackIndex++
                      , i = {
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: t,
                        data: e,
                        callbackId: r
                    }
                      , a = B();
                    this.callbacksCapabilities[r] = a;
                    try {
                        this.postMessage(i, n)
                    } catch (t) {
                        a.reject(t)
                    }
                    return a.promise
                },
                postMessage: function(t, e) {
                    e && this.postMessageTransfers ? this.comObj.postMessage(t, e) : this.comObj.postMessage(t)
                },
                destroy: function() {
                    this.comObj.removeEventListener("message", this._onComObjOnMessage)
                }
            },
            e.FONT_IDENTITY_MATRIX = H,
            e.IDENTITY_MATRIX = gt,
            e.OPS = et,
            e.VERBOSITY_LEVELS = $,
            e.UNSUPPORTED_FEATURES = rt,
            e.AnnotationBorderStyleType = Q,
            e.AnnotationFieldFlag = J,
            e.AnnotationFlag = V,
            e.AnnotationType = q,
            e.FontType = Z,
            e.ImageKind = Y,
            e.CMapCompressionType = tt,
            e.InvalidPDFException = ot,
            e.MessageHandler = W,
            e.MissingDataException = ut,
            e.MissingPDFException = ct,
            e.NotImplementedException = ht,
            e.PageViewport = At,
            e.PasswordException = at,
            e.PasswordResponses = it,
            e.StatTimer = bt,
            e.StreamType = K,
            e.TextRenderingMode = z,
            e.UnexpectedResponseException = lt,
            e.UnknownErrorException = st,
            e.Util = mt,
            e.XRefParseException = dt,
            e.arrayByteLength = b,
            e.arraysToBytes = y,
            e.assert = h,
            e.bytesToString = A,
            e.createBlob = yt,
            e.createPromiseCapability = B,
            e.createObjectURL = xt,
            e.deprecated = o,
            e.error = c,
            e.getLookupTableFactory = g,
            e.getVerbosityLevel = i,
            e.globalScope = X,
            e.info = a,
            e.isArray = D,
            e.isArrayBuffer = O,
            e.isBool = I,
            e.isEmptyObj = R,
            e.isInt = F,
            e.isNum = N,
            e.isString = M,
            e.isSpace = j,
            e.isNodeJS = U,
            e.isSameOrigin = u,
            e.createValidAbsoluteUrl = f,
            e.isLittleEndian = _,
            e.isEvalSupported = T,
            e.loadJpegStream = G,
            e.log2 = S,
            e.readInt8 = w,
            e.readUint16 = k,
            e.readUint32 = C,
            e.removeNullCharacters = m,
            e.setVerbosityLevel = r,
            e.shadow = p,
            e.string32 = x,
            e.stringToBytes = v,
            e.stringToPDFString = P,
            e.stringToUTF8String = L,
            e.utf8StringToString = E,
            e.warn = s
        }
        ).call(e, n(6))
    }
    , function(t, e, n) {
        "use strict";
        function r() {}
        function i(t, e) {
            var n = e && e.url;
            if (t.href = t.title = n ? u(n) : "",
            n) {
                var r = e.target;
                void 0 === r && (r = s("externalLinkTarget")),
                t.target = w[r];
                var i = e.rel;
                void 0 === i && (i = s("externalLinkRel")),
                t.rel = i
            }
        }
        function a(t) {
            var e = t.indexOf("#")
              , n = t.indexOf("?")
              , r = Math.min(e > 0 ? e : t.length, n > 0 ? n : t.length);
            return t.substring(t.lastIndexOf("/", r) + 1, r)
        }
        function s(t) {
            var e = l.globalScope.PDFJS;
            switch (t) {
            case "pdfBug":
                return !!e && e.pdfBug;
            case "disableAutoFetch":
                return !!e && e.disableAutoFetch;
            case "disableStream":
                return !!e && e.disableStream;
            case "disableRange":
                return !!e && e.disableRange;
            case "disableFontFace":
                return !!e && e.disableFontFace;
            case "disableCreateObjectURL":
                return !!e && e.disableCreateObjectURL;
            case "disableWebGL":
                return !e || e.disableWebGL;
            case "cMapUrl":
                return e ? e.cMapUrl : null;
            case "cMapPacked":
                return !!e && e.cMapPacked;
            case "postMessageTransfers":
                return !e || e.postMessageTransfers;
            case "workerPort":
                return e ? e.workerPort : null;
            case "workerSrc":
                return e ? e.workerSrc : null;
            case "disableWorker":
                return !!e && e.disableWorker;
            case "maxImageSize":
                return e ? e.maxImageSize : -1;
            case "imageResourcesPath":
                return e ? e.imageResourcesPath : "";
            case "isEvalSupported":
                return !e || e.isEvalSupported;
            case "externalLinkTarget":
                if (!e)
                    return S.NONE;
                switch (e.externalLinkTarget) {
                case S.NONE:
                case S.SELF:
                case S.BLANK:
                case S.PARENT:
                case S.TOP:
                    return e.externalLinkTarget
                }
                return d("PDFJS.externalLinkTarget is invalid: " + e.externalLinkTarget),
                e.externalLinkTarget = S.NONE,
                S.NONE;
            case "externalLinkRel":
                return e ? e.externalLinkRel : A;
            case "enableStats":
                return !(!e || !e.enableStats);
            case "pdfjsNext":
                return !(!e || !e.pdfjsNext);
            default:
                throw new Error("Unknown default setting: " + t)
            }
        }
        function o() {
            switch (s("externalLinkTarget")) {
            case S.NONE:
                return !1;
            case S.SELF:
            case S.BLANK:
            case S.PARENT:
            case S.TOP:
                return !0
            }
        }
        function c(t, e) {
            return f("isValidUrl(), please use createValidAbsoluteUrl() instead."),
            null !== p(t, e ? "http://example.com" : null)
        }
        var l = n(0)
          , h = l.assert
          , u = l.removeNullCharacters
          , d = l.warn
          , f = l.deprecated
          , p = l.createValidAbsoluteUrl
          , g = l.stringToBytes
          , m = l.CMapCompressionType
          , A = "noopener noreferrer nofollow";
        r.prototype = {
            create: function(t, e) {
                h(t > 0 && e > 0, "invalid canvas size");
                var n = document.createElement("canvas")
                  , r = n.getContext("2d");
                return n.width = t,
                n.height = e,
                {
                    canvas: n,
                    context: r
                }
            },
            reset: function(t, e, n) {
                h(t.canvas, "canvas is not specified"),
                h(e > 0 && n > 0, "invalid canvas size"),
                t.canvas.width = e,
                t.canvas.height = n
            },
            destroy: function(t) {
                h(t.canvas, "canvas is not specified"),
                t.canvas.width = 0,
                t.canvas.height = 0,
                t.canvas = null,
                t.context = null
            }
        };
        var v, b = function() {
            function t(t) {
                this.baseUrl = t.baseUrl || null,
                this.isCompressed = t.isCompressed || !1
            }
            return t.prototype = {
                fetch: function(t) {
                    var e = t.name;
                    return e ? new Promise(function(t, n) {
                        var r = this.baseUrl + e + (this.isCompressed ? ".bcmap" : "")
                          , i = new XMLHttpRequest;
                        i.open("GET", r, !0),
                        this.isCompressed && (i.responseType = "arraybuffer"),
                        i.onreadystatechange = function() {
                            if (i.readyState === XMLHttpRequest.DONE) {
                                if (200 === i.status || 0 === i.status) {
                                    var e;
                                    if (this.isCompressed && i.response ? e = new Uint8Array(i.response) : !this.isCompressed && i.responseText && (e = g(i.responseText)),
                                    e)
                                        return void t({
                                            cMapData: e,
                                            compressionType: this.isCompressed ? m.BINARY : m.NONE
                                        })
                                }
                                n(new Error("Unable to load " + (this.isCompressed ? "binary " : "") + "CMap at: " + r))
                            }
                        }
                        .bind(this),
                        i.send(null)
                    }
                    .bind(this)) : Promise.reject(new Error("CMap name must be specified."))
                }
            },
            t
        }(), y = function() {
            function t() {}
            var e = ["ms", "Moz", "Webkit", "O"]
              , n = Object.create(null);
            return t.getProp = function(t, r) {
                if (1 === arguments.length && "string" == typeof n[t])
                    return n[t];
                var i, a, s = (r = r || document.documentElement).style;
                if ("string" == typeof s[t])
                    return n[t] = t;
                a = t.charAt(0).toUpperCase() + t.slice(1);
                for (var o = 0, c = e.length; o < c; o++)
                    if (i = e[o] + a,
                    "string" == typeof s[i])
                        return n[t] = i;
                return n[t] = "undefined"
            }
            ,
            t.setProp = function(t, e, n) {
                var r = this.getProp(t);
                "undefined" !== r && (e.style[r] = n)
            }
            ,
            t
        }(), x = function() {
            function t(t, e) {
                this.message = t,
                this.type = e
            }
            return t.prototype = new Error,
            t.prototype.name = "RenderingCancelledException",
            t.constructor = t,
            t
        }();
        v = function() {
            var t = document.createElement("canvas");
            return t.width = t.height = 1,
            void 0 !== t.getContext("2d").createImageData(1, 1).data.buffer
        }
        ;
        var S = {
            NONE: 0,
            SELF: 1,
            BLANK: 2,
            PARENT: 3,
            TOP: 4
        }
          , w = ["", "_self", "_blank", "_parent", "_top"];
        e.CustomStyle = y,
        e.addLinkAttributes = i,
        e.isExternalLinkTargetSet = o,
        e.isValidUrl = c,
        e.getFilenameFromUrl = a,
        e.LinkTarget = S,
        e.RenderingCancelledException = x,
        e.hasCanvasTypedArrays = v,
        e.getDefaultSetting = s,
        e.DEFAULT_LINK_REL = A,
        e.DOMCanvasFactory = r,
        e.DOMCMapReaderFactory = b
    }
    , function(t, e, n) {
        "use strict";
        function r() {}
        var i = n(0)
          , a = n(1)
          , s = i.AnnotationBorderStyleType
          , o = i.AnnotationType
          , c = i.stringToPDFString
          , l = i.Util
          , h = a.addLinkAttributes
          , u = a.LinkTarget
          , d = a.getFilenameFromUrl
          , f = i.warn
          , p = a.CustomStyle
          , g = a.getDefaultSetting;
        r.prototype = {
            create: function(t) {
                switch (t.data.annotationType) {
                case o.LINK:
                    return new A(t);
                case o.TEXT:
                    return new v(t);
                case o.WIDGET:
                    switch (t.data.fieldType) {
                    case "Tx":
                        return new y(t);
                    case "Btn":
                        if (t.data.radioButton)
                            return new S(t);
                        if (t.data.checkBox)
                            return new x(t);
                        f("Unimplemented button widget annotation: pushbutton");
                        break;
                    case "Ch":
                        return new w(t)
                    }
                    return new b(t);
                case o.POPUP:
                    return new k(t);
                case o.LINE:
                    return new _(t);
                case o.HIGHLIGHT:
                    return new T(t);
                case o.UNDERLINE:
                    return new P(t);
                case o.SQUIGGLY:
                    return new L(t);
                case o.STRIKEOUT:
                    return new E(t);
                case o.FILEATTACHMENT:
                    return new R(t);
                default:
                    return new m(t)
                }
            }
        };
        var m = function() {
            function t(t, e, n) {
                this.isRenderable = e || !1,
                this.data = t.data,
                this.layer = t.layer,
                this.page = t.page,
                this.viewport = t.viewport,
                this.linkService = t.linkService,
                this.downloadManager = t.downloadManager,
                this.imageResourcesPath = t.imageResourcesPath,
                this.renderInteractiveForms = t.renderInteractiveForms,
                e && (this.container = this._createContainer(n))
            }
            return t.prototype = {
                _createContainer: function(t) {
                    var e = this.data
                      , n = this.page
                      , r = this.viewport
                      , i = document.createElement("section")
                      , a = e.rect[2] - e.rect[0]
                      , o = e.rect[3] - e.rect[1];
                    i.setAttribute("data-annotation-id", e.id);
                    var c = l.normalizeRect([e.rect[0], n.view[3] - e.rect[1] + n.view[1], e.rect[2], n.view[3] - e.rect[3] + n.view[1]]);
                    if (p.setProp("transform", i, "matrix(" + r.transform.join(",") + ")"),
                    p.setProp("transformOrigin", i, -c[0] + "px " + -c[1] + "px"),
                    !t && e.borderStyle.width > 0) {
                        i.style.borderWidth = e.borderStyle.width + "px",
                        e.borderStyle.style !== s.UNDERLINE && (a -= 2 * e.borderStyle.width,
                        o -= 2 * e.borderStyle.width);
                        var h = e.borderStyle.horizontalCornerRadius
                          , u = e.borderStyle.verticalCornerRadius;
                        if (h > 0 || u > 0) {
                            var d = h + "px / " + u + "px";
                            p.setProp("borderRadius", i, d)
                        }
                        switch (e.borderStyle.style) {
                        case s.SOLID:
                            i.style.borderStyle = "solid";
                            break;
                        case s.DASHED:
                            i.style.borderStyle = "dashed";
                            break;
                        case s.BEVELED:
                            f("Unimplemented border style: beveled");
                            break;
                        case s.INSET:
                            f("Unimplemented border style: inset");
                            break;
                        case s.UNDERLINE:
                            i.style.borderBottomStyle = "solid"
                        }
                        e.color ? i.style.borderColor = l.makeCssRgb(0 | e.color[0], 0 | e.color[1], 0 | e.color[2]) : i.style.borderWidth = 0
                    }
                    return i.style.left = c[0] + "px",
                    i.style.top = c[1] + "px",
                    i.style.width = a + "px",
                    i.style.height = o + "px",
                    i
                },
                _createPopup: function(t, e, n) {
                    e || ((e = document.createElement("div")).style.height = t.style.height,
                    e.style.width = t.style.width,
                    t.appendChild(e));
                    var r = new C({
                        container: t,
                        trigger: e,
                        color: n.color,
                        title: n.title,
                        contents: n.contents,
                        hideWrapper: !0
                    }).render();
                    r.style.left = t.style.width,
                    t.appendChild(r)
                },
                render: function() {
                    throw new Error("Abstract method AnnotationElement.render called")
                }
            },
            t
        }()
          , A = function() {
            function t(t) {
                m.call(this, t, !0)
            }
            return l.inherit(t, m, {
                render: function() {
                    this.container.className = "linkAnnotation";
                    var t = document.createElement("a");
                    return h(t, {
                        url: this.data.url,
                        target: this.data.newWindow ? u.BLANK : void 0
                    }),
                    this.data.url || (this.data.action ? this._bindNamedAction(t, this.data.action) : this._bindLink(t, this.data.dest)),
                    this.container.appendChild(t),
                    this.container
                },
                _bindLink: function(t, e) {
                    var n = this;
                    t.href = this.linkService.getDestinationHash(e),
                    t.onclick = function() {
                        return e && n.linkService.navigateTo(e),
                        !1
                    }
                    ,
                    e && (t.className = "internalLink")
                },
                _bindNamedAction: function(t, e) {
                    var n = this;
                    t.href = this.linkService.getAnchorUrl(""),
                    t.onclick = function() {
                        return n.linkService.executeNamedAction(e),
                        !1
                    }
                    ,
                    t.className = "internalLink"
                }
            }),
            t
        }()
          , v = function() {
            function t(t) {
                var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                m.call(this, t, e)
            }
            return l.inherit(t, m, {
                render: function() {
                    this.container.className = "textAnnotation";
                    var t = document.createElement("img");
                    return t.style.height = this.container.style.height,
                    t.style.width = this.container.style.width,
                    t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg",
                    t.alt = "[{{type}} Annotation]",
                    t.dataset.l10nId = "text_annotation_type",
                    t.dataset.l10nArgs = JSON.stringify({
                        type: this.data.name
                    }),
                    this.data.hasPopup || this._createPopup(this.container, t, this.data),
                    this.container.appendChild(t),
                    this.container
                }
            }),
            t
        }()
          , b = function() {
            function t(t, e) {
                m.call(this, t, e)
            }
            return l.inherit(t, m, {
                render: function() {
                    return this.container
                }
            }),
            t
        }()
          , y = function() {
            function t(t) {
                var e = t.renderInteractiveForms || !t.data.hasAppearance && !!t.data.fieldValue;
                b.call(this, t, e)
            }
            var e = ["left", "center", "right"];
            return l.inherit(t, b, {
                render: function() {
                    this.container.className = "textWidgetAnnotation";
                    var t = null;
                    if (this.renderInteractiveForms) {
                        if (this.data.multiLine ? (t = document.createElement("textarea")).textContent = this.data.fieldValue : ((t = document.createElement("input")).type = "text",
                        t.setAttribute("value", this.data.fieldValue)),
                        t.disabled = this.data.readOnly,
                        null !== this.data.maxLen && (t.maxLength = this.data.maxLen),
                        this.data.comb) {
                            var n = (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
                            t.classList.add("comb"),
                            t.style.letterSpacing = "calc(" + n + "px - 1ch)"
                        }
                    } else {
                        (t = document.createElement("div")).textContent = this.data.fieldValue,
                        t.style.verticalAlign = "middle",
                        t.style.display = "table-cell";
                        var r = null;
                        this.data.fontRefName && (r = this.page.commonObjs.getData(this.data.fontRefName)),
                        this._setTextStyle(t, r)
                    }
                    return null !== this.data.textAlignment && (t.style.textAlign = e[this.data.textAlignment]),
                    this.container.appendChild(t),
                    this.container
                },
                _setTextStyle: function(t, e) {
                    var n = t.style;
                    if (n.fontSize = this.data.fontSize + "px",
                    n.direction = this.data.fontDirection < 0 ? "rtl" : "ltr",
                    e) {
                        n.fontWeight = e.black ? e.bold ? "900" : "bold" : e.bold ? "bold" : "normal",
                        n.fontStyle = e.italic ? "italic" : "normal";
                        var r = e.loadedName ? '"' + e.loadedName + '", ' : ""
                          , i = e.fallbackName || "Helvetica, sans-serif";
                        n.fontFamily = r + i
                    }
                }
            }),
            t
        }()
          , x = function() {
            function t(t) {
                b.call(this, t, t.renderInteractiveForms)
            }
            return l.inherit(t, b, {
                render: function() {
                    this.container.className = "buttonWidgetAnnotation checkBox";
                    var t = document.createElement("input");
                    return t.disabled = this.data.readOnly,
                    t.type = "checkbox",
                    this.data.fieldValue && "Off" !== this.data.fieldValue && t.setAttribute("checked", !0),
                    this.container.appendChild(t),
                    this.container
                }
            }),
            t
        }()
          , S = function() {
            function t(t) {
                b.call(this, t, t.renderInteractiveForms)
            }
            return l.inherit(t, b, {
                render: function() {
                    this.container.className = "buttonWidgetAnnotation radioButton";
                    var t = document.createElement("input");
                    return t.disabled = this.data.readOnly,
                    t.type = "radio",
                    t.name = this.data.fieldName,
                    this.data.fieldValue === this.data.buttonValue && t.setAttribute("checked", !0),
                    this.container.appendChild(t),
                    this.container
                }
            }),
            t
        }()
          , w = function() {
            function t(t) {
                b.call(this, t, t.renderInteractiveForms)
            }
            return l.inherit(t, b, {
                render: function() {
                    this.container.className = "choiceWidgetAnnotation";
                    var t = document.createElement("select");
                    t.disabled = this.data.readOnly,
                    this.data.combo || (t.size = this.data.options.length,
                    this.data.multiSelect && (t.multiple = !0));
                    for (var e = 0, n = this.data.options.length; e < n; e++) {
                        var r = this.data.options[e]
                          , i = document.createElement("option");
                        i.textContent = r.displayValue,
                        i.value = r.exportValue,
                        this.data.fieldValue.indexOf(r.displayValue) >= 0 && i.setAttribute("selected", !0),
                        t.appendChild(i)
                    }
                    return this.container.appendChild(t),
                    this.container
                }
            }),
            t
        }()
          , k = function() {
            function t(t) {
                var e = !(!t.data.title && !t.data.contents);
                m.call(this, t, e)
            }
            var e = ["Line"];
            return l.inherit(t, m, {
                render: function() {
                    if (this.container.className = "popupAnnotation",
                    e.indexOf(this.data.parentType) >= 0)
                        return this.container;
                    var t = '[data-annotation-id="' + this.data.parentId + '"]'
                      , n = this.layer.querySelector(t);
                    if (!n)
                        return this.container;
                    var r = new C({
                        container: this.container,
                        trigger: n,
                        color: this.data.color,
                        title: this.data.title,
                        contents: this.data.contents
                    })
                      , i = parseFloat(n.style.left)
                      , a = parseFloat(n.style.width);
                    return p.setProp("transformOrigin", this.container, -(i + a) + "px -" + n.style.top),
                    this.container.style.left = i + a + "px",
                    this.container.appendChild(r.render()),
                    this.container
                }
            }),
            t
        }()
          , C = function() {
            function t(t) {
                this.container = t.container,
                this.trigger = t.trigger,
                this.color = t.color,
                this.title = t.title,
                this.contents = t.contents,
                this.hideWrapper = t.hideWrapper || !1,
                this.pinned = !1
            }
            var e = .7;
            return t.prototype = {
                render: function() {
                    var t = document.createElement("div");
                    t.className = "popupWrapper",
                    this.hideElement = this.hideWrapper ? t : this.container,
                    this.hideElement.setAttribute("hidden", !0);
                    var n = document.createElement("div");
                    n.className = "popup";
                    var r = this.color;
                    if (r) {
                        var i = e * (255 - r[0]) + r[0]
                          , a = e * (255 - r[1]) + r[1]
                          , s = e * (255 - r[2]) + r[2];
                        n.style.backgroundColor = l.makeCssRgb(0 | i, 0 | a, 0 | s)
                    }
                    var o = this._formatContents(this.contents)
                      , c = document.createElement("h1");
                    return c.textContent = this.title,
                    this.trigger.addEventListener("click", this._toggle.bind(this)),
                    this.trigger.addEventListener("mouseover", this._show.bind(this, !1)),
                    this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)),
                    n.addEventListener("click", this._hide.bind(this, !0)),
                    n.appendChild(c),
                    n.appendChild(o),
                    t.appendChild(n),
                    t
                },
                _formatContents: function(t) {
                    for (var e = document.createElement("p"), n = t.split(/(?:\r\n?|\n)/), r = 0, i = n.length; r < i; ++r) {
                        var a = n[r];
                        e.appendChild(document.createTextNode(a)),
                        r < i - 1 && e.appendChild(document.createElement("br"))
                    }
                    return e
                },
                _toggle: function() {
                    this.pinned ? this._hide(!0) : this._show(!0)
                },
                _show: function(t) {
                    t && (this.pinned = !0),
                    this.hideElement.hasAttribute("hidden") && (this.hideElement.removeAttribute("hidden"),
                    this.container.style.zIndex += 1)
                },
                _hide: function(t) {
                    t && (this.pinned = !1),
                    this.hideElement.hasAttribute("hidden") || this.pinned || (this.hideElement.setAttribute("hidden", !0),
                    this.container.style.zIndex -= 1)
                }
            },
            t
        }()
          , _ = function() {
            function t(t) {
                var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                m.call(this, t, e, !0)
            }
            var e = "http://www.w3.org/2000/svg";
            return l.inherit(t, m, {
                render: function() {
                    this.container.className = "lineAnnotation";
                    var t = this.data
                      , n = t.rect[2] - t.rect[0]
                      , r = t.rect[3] - t.rect[1]
                      , i = document.createElementNS(e, "svg:svg");
                    i.setAttributeNS(null, "version", "1.1"),
                    i.setAttributeNS(null, "width", n + "px"),
                    i.setAttributeNS(null, "height", r + "px"),
                    i.setAttributeNS(null, "preserveAspectRatio", "none"),
                    i.setAttributeNS(null, "viewBox", "0 0 " + n + " " + r);
                    var a = document.createElementNS(e, "svg:line");
                    return a.setAttributeNS(null, "x1", t.rect[2] - t.lineCoordinates[0]),
                    a.setAttributeNS(null, "y1", t.rect[3] - t.lineCoordinates[1]),
                    a.setAttributeNS(null, "x2", t.rect[2] - t.lineCoordinates[2]),
                    a.setAttributeNS(null, "y2", t.rect[3] - t.lineCoordinates[3]),
                    a.setAttributeNS(null, "stroke-width", t.borderStyle.width),
                    a.setAttributeNS(null, "stroke", "transparent"),
                    i.appendChild(a),
                    this.container.append(i),
                    this._createPopup(this.container, a, this.data),
                    this.container
                }
            }),
            t
        }()
          , T = function() {
            function t(t) {
                var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                m.call(this, t, e, !0)
            }
            return l.inherit(t, m, {
                render: function() {
                    return this.container.className = "highlightAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }),
            t
        }()
          , P = function() {
            function t(t) {
                var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                m.call(this, t, e, !0)
            }
            return l.inherit(t, m, {
                render: function() {
                    return this.container.className = "underlineAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }),
            t
        }()
          , L = function() {
            function t(t) {
                var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                m.call(this, t, e, !0)
            }
            return l.inherit(t, m, {
                render: function() {
                    return this.container.className = "squigglyAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }),
            t
        }()
          , E = function() {
            function t(t) {
                var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                m.call(this, t, e, !0)
            }
            return l.inherit(t, m, {
                render: function() {
                    return this.container.className = "strikeoutAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }),
            t
        }()
          , R = function() {
            function t(t) {
                m.call(this, t, !0);
                var e = this.data.file;
                this.filename = d(e.filename),
                this.content = e.content,
                this.linkService.onFileAttachmentAnnotation({
                    id: c(e.filename),
                    filename: e.filename,
                    content: e.content
                })
            }
            return l.inherit(t, m, {
                render: function() {
                    this.container.className = "fileAttachmentAnnotation";
                    var t = document.createElement("div");
                    return t.style.height = this.container.style.height,
                    t.style.width = this.container.style.width,
                    t.addEventListener("dblclick", this._download.bind(this)),
                    this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(this.container, t, this.data),
                    this.container.appendChild(t),
                    this.container
                },
                _download: function() {
                    this.downloadManager ? this.downloadManager.downloadData(this.content, this.filename, "") : f("Download cannot be started due to unavailable download manager")
                }
            }),
            t
        }()
          , I = {
            render: function(t) {
                for (var e = new r, n = 0, i = t.annotations.length; n < i; n++) {
                    var a = t.annotations[n];
                    if (a) {
                        var s = e.create({
                            data: a,
                            layer: t.div,
                            page: t.page,
                            viewport: t.viewport,
                            linkService: t.linkService,
                            downloadManager: t.downloadManager,
                            imageResourcesPath: t.imageResourcesPath || g("imageResourcesPath"),
                            renderInteractiveForms: t.renderInteractiveForms || !1
                        });
                        s.isRenderable && t.div.appendChild(s.render())
                    }
                }
            },
            update: function(t) {
                for (var e = 0, n = t.annotations.length; e < n; e++) {
                    var r = t.annotations[e]
                      , i = t.div.querySelector('[data-annotation-id="' + r.id + '"]');
                    i && p.setProp("transform", i, "matrix(" + t.viewport.transform.join(",") + ")")
                }
                t.div.removeAttribute("hidden")
            }
        };
        e.AnnotationLayer = I
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            var a = new V;
            arguments.length > 1 && S("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"),
            e && (e instanceof J || ((e = Object.create(e)).length = t.length,
            e.initialData = t.initialData,
            e.abort || (e.abort = function() {}
            )),
            (t = Object.create(t)).range = e),
            a.onPassword = n || null,
            a.onProgress = r || null;
            var s;
            "string" == typeof t ? s = {
                url: t
            } : T(t) ? s = {
                data: t
            } : t instanceof J ? s = {
                range: t
            } : ("object" != typeof t && x("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"),
            t.url || t.data || t.range || x("Invalid parameter object: need either .data, .range or .url"),
            s = t);
            var o = {}
              , c = null
              , l = null;
            for (var h in s)
                if ("url" !== h || "undefined" == typeof window)
                    if ("range" !== h)
                        if ("worker" !== h)
                            if ("data" !== h || s[h]instanceof Uint8Array)
                                o[h] = s[h];
                            else {
                                var u = s[h];
                                "string" == typeof u ? o[h] = E(u) : "object" != typeof u || null === u || isNaN(u.length) ? T(u) ? o[h] = new Uint8Array(u) : x("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.") : o[h] = new Uint8Array(u)
                            }
                        else
                            l = s[h];
                    else
                        c = s[h];
                else
                    o[h] = new URL(s[h],window.location).href;
            o.rangeChunkSize = o.rangeChunkSize || W,
            o.disableNativeImageDecoder = !0 === o.disableNativeImageDecoder;
            var f = o.CMapReaderFactory || B;
            if (!l) {
                var p = j("workerPort");
                l = p ? new Z(null,p) : new Z,
                a._worker = l
            }
            var g = a.docId;
            return l.promise.then(function() {
                if (a.destroyed)
                    throw new Error("Loading aborted");
                return i(l, o, c, g).then(function(t) {
                    if (a.destroyed)
                        throw new Error("Loading aborted");
                    var e = new d(g,t,l.port)
                      , n = new $(e,a,c,f);
                    a._transport = n,
                    e.send("Ready", null)
                })
            }).catch(a._capability.reject),
            a
        }
        function i(t, e, n, r) {
            return t.destroyed ? Promise.reject(new Error("Worker was destroyed")) : (e.disableAutoFetch = j("disableAutoFetch"),
            e.disableStream = j("disableStream"),
            e.chunkedViewerLoading = !!n,
            n && (e.length = n.length,
            e.initialData = n.initialData),
            t.messageHandler.sendWithPromise("GetDocRequest", {
                docId: r,
                source: e,
                disableRange: j("disableRange"),
                maxImageSize: j("maxImageSize"),
                disableFontFace: j("disableFontFace"),
                disableCreateObjectURL: j("disableCreateObjectURL"),
                postMessageTransfers: j("postMessageTransfers") && !X,
                docBaseUrl: e.docBaseUrl,
                disableNativeImageDecoder: e.disableNativeImageDecoder
            }).then(function(e) {
                if (t.destroyed)
                    throw new Error("Worker was destroyed");
                return e
            }))
        }
        var a, s = n(0), o = n(11), c = n(10), l = n(7), h = n(1), u = s.InvalidPDFException, d = s.MessageHandler, f = s.MissingPDFException, p = s.PageViewport, g = s.PasswordException, m = s.StatTimer, A = s.UnexpectedResponseException, v = s.UnknownErrorException, b = s.Util, y = s.createPromiseCapability, x = s.error, S = s.deprecated, w = s.getVerbosityLevel, k = s.info, C = s.isInt, _ = s.isArray, T = s.isArrayBuffer, P = s.isSameOrigin, L = s.loadJpegStream, E = s.stringToBytes, R = s.globalScope, I = s.warn, F = o.FontFaceObject, N = o.FontLoader, M = c.CanvasGraphics, D = l.Metadata, O = h.RenderingCancelledException, j = h.getDefaultSetting, U = h.DOMCanvasFactory, B = h.DOMCMapReaderFactory, W = 65536, G = !1, X = !1, H = "undefined" != typeof document && document.currentScript ? document.currentScript.src : null, z = null, Y = !1;
        if ("undefined" == typeof __pdfjsdev_webpack__) {
            "undefined" == typeof window ? (G = !0,
            void 0 === require.ensure && (require.ensure = require("node-ensure")),
            Y = !0) : "undefined" != typeof require && "function" == typeof require.ensure && (Y = !0),
            "undefined" != typeof requirejs && requirejs.toUrl && (a = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
            var q = "undefined" != typeof requirejs && requirejs.load;
            z = Y ? function(t) {
                require.ensure([], function() {
                    var e = require("./pdf.worker.js");
                    t(e.WorkerMessageHandler)
                })
            }
            : q ? function(t) {
                requirejs(["pdfjs-dist/build/pdf.worker"], function(e) {
                    t(e.WorkerMessageHandler)
                })
            }
            : null
        }
        var V = function() {
            function t() {
                this._capability = y(),
                this._transport = null,
                this._worker = null,
                this.docId = "d" + e++,
                this.destroyed = !1,
                this.onPassword = null,
                this.onProgress = null,
                this.onUnsupportedFeature = null
            }
            var e = 0;
            return t.prototype = {
                get promise() {
                    return this._capability.promise
                },
                destroy: function() {
                    return this.destroyed = !0,
                    (this._transport ? this._transport.destroy() : Promise.resolve()).then(function() {
                        this._transport = null,
                        this._worker && (this._worker.destroy(),
                        this._worker = null)
                    }
                    .bind(this))
                },
                then: function(t, e) {
                    return this.promise.then.apply(this.promise, arguments)
                }
            },
            t
        }()
          , J = function() {
            function t(t, e) {
                this.length = t,
                this.initialData = e,
                this._rangeListeners = [],
                this._progressListeners = [],
                this._progressiveReadListeners = [],
                this._readyCapability = y()
            }
            return t.prototype = {
                addRangeListener: function(t) {
                    this._rangeListeners.push(t)
                },
                addProgressListener: function(t) {
                    this._progressListeners.push(t)
                },
                addProgressiveReadListener: function(t) {
                    this._progressiveReadListeners.push(t)
                },
                onDataRange: function(t, e) {
                    for (var n = this._rangeListeners, r = 0, i = n.length; r < i; ++r)
                        n[r](t, e)
                },
                onDataProgress: function(t) {
                    this._readyCapability.promise.then(function() {
                        for (var e = this._progressListeners, n = 0, r = e.length; n < r; ++n)
                            e[n](t)
                    }
                    .bind(this))
                },
                onDataProgressiveRead: function(t) {
                    this._readyCapability.promise.then(function() {
                        for (var e = this._progressiveReadListeners, n = 0, r = e.length; n < r; ++n)
                            e[n](t)
                    }
                    .bind(this))
                },
                transportReady: function() {
                    this._readyCapability.resolve()
                },
                requestDataRange: function(t, e) {
                    throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")
                },
                abort: function() {}
            },
            t
        }()
          , Q = function() {
            function t(t, e, n) {
                this.pdfInfo = t,
                this.transport = e,
                this.loadingTask = n
            }
            return t.prototype = {
                get numPages() {
                    return this.pdfInfo.numPages
                },
                get fingerprint() {
                    return this.pdfInfo.fingerprint
                },
                getPage: function(t) {
                    return this.transport.getPage(t)
                },
                getPageIndex: function(t) {
                    return this.transport.getPageIndex(t)
                },
                getDestinations: function() {
                    return this.transport.getDestinations()
                },
                getDestination: function(t) {
                    return this.transport.getDestination(t)
                },
                getPageLabels: function() {
                    return this.transport.getPageLabels()
                },
                getAttachments: function() {
                    return this.transport.getAttachments()
                },
                getJavaScript: function() {
                    return this.transport.getJavaScript()
                },
                getOutline: function() {
                    return this.transport.getOutline()
                },
                getMetadata: function() {
                    return this.transport.getMetadata()
                },
                getData: function() {
                    return this.transport.getData()
                },
                getDownloadInfo: function() {
                    return this.transport.downloadInfoCapability.promise
                },
                getStats: function() {
                    return this.transport.getStats()
                },
                cleanup: function() {
                    this.transport.startCleanup()
                },
                destroy: function() {
                    return this.loadingTask.destroy()
                }
            },
            t
        }()
          , K = function() {
            function t(t, e, n) {
                this.pageIndex = t,
                this.pageInfo = e,
                this.transport = n,
                this.stats = new m,
                this.stats.enabled = j("enableStats"),
                this.commonObjs = n.commonObjs,
                this.objs = new tt,
                this.cleanupAfterRender = !1,
                this.pendingCleanup = !1,
                this.intentStates = Object.create(null),
                this.destroyed = !1
            }
            return t.prototype = {
                get pageNumber() {
                    return this.pageIndex + 1
                },
                get rotate() {
                    return this.pageInfo.rotate
                },
                get ref() {
                    return this.pageInfo.ref
                },
                get userUnit() {
                    return this.pageInfo.userUnit
                },
                get view() {
                    return this.pageInfo.view
                },
                getViewport: function(t, e) {
                    return arguments.length < 2 && (e = this.rotate),
                    new p(this.view,t,e,0,0)
                },
                getAnnotations: function(t) {
                    var e = t && t.intent || null;
                    return this.annotationsPromise && this.annotationsIntent === e || (this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, e),
                    this.annotationsIntent = e),
                    this.annotationsPromise
                },
                render: function(t) {
                    function e(t) {
                        var e = s.renderTasks.indexOf(o);
                        e >= 0 && s.renderTasks.splice(e, 1),
                        l.cleanupAfterRender && (l.pendingCleanup = !0),
                        l._tryCleanup(),
                        t ? o.capability.reject(t) : o.capability.resolve(),
                        n.timeEnd("Rendering"),
                        n.timeEnd("Overall")
                    }
                    var n = this.stats;
                    n.time("Overall"),
                    this.pendingCleanup = !1;
                    var r = "print" === t.intent ? "print" : "display"
                      , i = !0 === t.renderInteractiveForms
                      , a = t.canvasFactory || new U;
                    this.intentStates[r] || (this.intentStates[r] = Object.create(null));
                    var s = this.intentStates[r];
                    s.displayReadyCapability || (s.receivingOperatorList = !0,
                    s.displayReadyCapability = y(),
                    s.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1
                    },
                    this.stats.time("Page Request"),
                    this.transport.messageHandler.send("RenderPageRequest", {
                        pageIndex: this.pageNumber - 1,
                        intent: r,
                        renderInteractiveForms: i
                    }));
                    var o = new nt(e,t,this.objs,this.commonObjs,s.operatorList,this.pageNumber,a);
                    o.useRequestAnimationFrame = "print" !== r,
                    s.renderTasks || (s.renderTasks = []),
                    s.renderTasks.push(o);
                    var c = o.task;
                    t.continueCallback && (S("render is used with continueCallback parameter"),
                    c.onContinue = t.continueCallback);
                    var l = this;
                    return s.displayReadyCapability.promise.then(function(t) {
                        l.pendingCleanup ? e() : (n.time("Rendering"),
                        o.initializeGraphics(t),
                        o.operatorListChanged())
                    }, function(t) {
                        e(t)
                    }),
                    c
                },
                getOperatorList: function() {
                    function t() {
                        if (r.operatorList.lastChunk) {
                            r.opListReadCapability.resolve(r.operatorList);
                            var t = r.renderTasks.indexOf(n);
                            t >= 0 && r.renderTasks.splice(t, 1)
                        }
                    }
                    var e = "oplist";
                    this.intentStates[e] || (this.intentStates[e] = Object.create(null));
                    var n, r = this.intentStates[e];
                    return r.opListReadCapability || ((n = {}).operatorListChanged = t,
                    r.receivingOperatorList = !0,
                    r.opListReadCapability = y(),
                    r.renderTasks = [],
                    r.renderTasks.push(n),
                    r.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1
                    },
                    this.transport.messageHandler.send("RenderPageRequest", {
                        pageIndex: this.pageIndex,
                        intent: e
                    })),
                    r.opListReadCapability.promise
                },
                getTextContent: function(t) {
                    return this.transport.messageHandler.sendWithPromise("GetTextContent", {
                        pageIndex: this.pageNumber - 1,
                        normalizeWhitespace: !(!t || !0 !== t.normalizeWhitespace),
                        combineTextItems: !t || !0 !== t.disableCombineTextItems
                    })
                },
                _destroy: function() {
                    this.destroyed = !0,
                    this.transport.pageCache[this.pageIndex] = null;
                    var t = [];
                    return Object.keys(this.intentStates).forEach(function(e) {
                        "oplist" !== e && this.intentStates[e].renderTasks.forEach(function(e) {
                            var n = e.capability.promise.catch(function() {});
                            t.push(n),
                            e.cancel()
                        })
                    }, this),
                    this.objs.clear(),
                    this.annotationsPromise = null,
                    this.pendingCleanup = !1,
                    Promise.all(t)
                },
                destroy: function() {
                    S("page destroy method, use cleanup() instead"),
                    this.cleanup()
                },
                cleanup: function() {
                    this.pendingCleanup = !0,
                    this._tryCleanup()
                },
                _tryCleanup: function() {
                    this.pendingCleanup && !Object.keys(this.intentStates).some(function(t) {
                        var e = this.intentStates[t];
                        return 0 !== e.renderTasks.length || e.receivingOperatorList
                    }, this) && (Object.keys(this.intentStates).forEach(function(t) {
                        delete this.intentStates[t]
                    }, this),
                    this.objs.clear(),
                    this.annotationsPromise = null,
                    this.pendingCleanup = !1)
                },
                _startRenderPage: function(t, e) {
                    var n = this.intentStates[e];
                    n.displayReadyCapability && n.displayReadyCapability.resolve(t)
                },
                _renderPageChunk: function(t, e) {
                    var n, r, i = this.intentStates[e];
                    for (n = 0,
                    r = t.length; n < r; n++)
                        i.operatorList.fnArray.push(t.fnArray[n]),
                        i.operatorList.argsArray.push(t.argsArray[n]);
                    for (i.operatorList.lastChunk = t.lastChunk,
                    n = 0; n < i.renderTasks.length; n++)
                        i.renderTasks[n].operatorListChanged();
                    t.lastChunk && (i.receivingOperatorList = !1,
                    this._tryCleanup())
                }
            },
            t
        }()
          , Z = function() {
            function t() {
                return void 0 !== a ? a : j("workerSrc") ? j("workerSrc") : H ? H.replace(/(\.(?:min\.)?js)$/i, ".worker$1") : void x("No PDFJS.workerSrc specified")
            }
            function e() {
                return s ? s.promise : (s = y(),
                (z || function(e) {
                    b.loadScript(t(), function() {
                        e(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)
                    })
                }
                )(s.resolve),
                s.promise)
            }
            function n(t) {
                this._listeners = [],
                this._defer = t,
                this._deferred = Promise.resolve(void 0)
            }
            function r(t) {
                var e = "importScripts('" + t + "');";
                return URL.createObjectURL(new Blob([e]))
            }
            function i(t, e) {
                this.name = t,
                this.destroyed = !1,
                this._readyCapability = y(),
                this._port = null,
                this._webWorker = null,
                this._messageHandler = null,
                e ? this._initializeFromPort(e) : this._initialize()
            }
            var s, o = 0;
            return n.prototype = {
                postMessage: function(t, e) {
                    function n(t) {
                        if ("object" != typeof t || null === t)
                            return t;
                        if (r.has(t))
                            return r.get(t);
                        var i, a;
                        if ((a = t.buffer) && T(a)) {
                            var s = e && e.indexOf(a) >= 0;
                            return i = t === a ? t : s ? new t.constructor(a,t.byteOffset,t.byteLength) : new t.constructor(t),
                            r.set(t, i),
                            i
                        }
                        i = _(t) ? [] : {},
                        r.set(t, i);
                        for (var o in t) {
                            for (var c, l = t; !(c = Object.getOwnPropertyDescriptor(l, o)); )
                                l = Object.getPrototypeOf(l);
                            void 0 !== c.value && "function" != typeof c.value && (i[o] = n(c.value))
                        }
                        return i
                    }
                    if (this._defer) {
                        var r = new WeakMap
                          , i = {
                            data: n(t)
                        };
                        this._deferred.then(function() {
                            this._listeners.forEach(function(t) {
                                t.call(this, i)
                            }, this)
                        }
                        .bind(this))
                    } else
                        this._listeners.forEach(function(e) {
                            e.call(this, {
                                data: t
                            })
                        }, this)
                },
                addEventListener: function(t, e) {
                    this._listeners.push(e)
                },
                removeEventListener: function(t, e) {
                    var n = this._listeners.indexOf(e);
                    this._listeners.splice(n, 1)
                },
                terminate: function() {
                    this._listeners = []
                }
            },
            i.prototype = {
                get promise() {
                    return this._readyCapability.promise
                },
                get port() {
                    return this._port
                },
                get messageHandler() {
                    return this._messageHandler
                },
                _initializeFromPort: function(t) {
                    this._port = t,
                    this._messageHandler = new d("main","worker",t),
                    this._messageHandler.on("ready", function() {}),
                    this._readyCapability.resolve()
                },
                _initialize: function() {
                    if (!G && !j("disableWorker") && "undefined" != typeof Worker) {
                        var e = t();
                        try {
                            P(window.location.href, e) || (e = r(new URL(e,window.location).href));
                            var n = new Worker(e)
                              , i = new d("main","worker",n)
                              , a = function() {
                                n.removeEventListener("error", s),
                                i.destroy(),
                                n.terminate(),
                                this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                            }
                            .bind(this)
                              , s = function(t) {
                                this._webWorker || a()
                            }
                            .bind(this);
                            n.addEventListener("error", s),
                            i.on("test", function(t) {
                                n.removeEventListener("error", s),
                                this.destroyed ? a() : t && t.supportTypedArray ? (this._messageHandler = i,
                                this._port = n,
                                this._webWorker = n,
                                t.supportTransfers || (X = !0),
                                this._readyCapability.resolve(),
                                i.send("configure", {
                                    verbosity: w()
                                })) : (this._setupFakeWorker(),
                                i.destroy(),
                                n.terminate())
                            }
                            .bind(this)),
                            i.on("console_log", function(t) {
                                console.log.apply(console, t)
                            }),
                            i.on("console_error", function(t) {
                                console.error.apply(console, t)
                            }),
                            i.on("ready", function(t) {
                                if (n.removeEventListener("error", s),
                                this.destroyed)
                                    a();
                                else
                                    try {
                                        o()
                                    } catch (t) {
                                        this._setupFakeWorker()
                                    }
                            }
                            .bind(this));
                            var o = function() {
                                var t = j("postMessageTransfers") && !X
                                  , e = new Uint8Array([t ? 255 : 0]);
                                try {
                                    i.send("test", e, [e.buffer])
                                } catch (t) {
                                    k("Cannot use postMessage transfers"),
                                    e[0] = 0,
                                    i.send("test", e)
                                }
                            };
                            return void o()
                        } catch (t) {
                            k("The worker has been disabled.")
                        }
                    }
                    this._setupFakeWorker()
                },
                _setupFakeWorker: function() {
                    G || j("disableWorker") || (I("Setting up fake worker."),
                    G = !0),
                    e().then(function(t) {
                        if (this.destroyed)
                            this._readyCapability.reject(new Error("Worker was destroyed"));
                        else {
                            var e = new n(Uint8Array !== Float32Array);
                            this._port = e;
                            var r = "fake" + o++
                              , i = new d(r + "_worker",r,e);
                            t.setup(i, e);
                            var a = new d(r,r + "_worker",e);
                            this._messageHandler = a,
                            this._readyCapability.resolve()
                        }
                    }
                    .bind(this))
                },
                destroy: function() {
                    this.destroyed = !0,
                    this._webWorker && (this._webWorker.terminate(),
                    this._webWorker = null),
                    this._port = null,
                    this._messageHandler && (this._messageHandler.destroy(),
                    this._messageHandler = null)
                }
            },
            i
        }()
          , $ = function() {
            function t(t, e, n, r) {
                this.messageHandler = t,
                this.loadingTask = e,
                this.pdfDataRangeTransport = n,
                this.commonObjs = new tt,
                this.fontLoader = new N(e.docId),
                this.CMapReaderFactory = new r({
                    baseUrl: j("cMapUrl"),
                    isCompressed: j("cMapPacked")
                }),
                this.destroyed = !1,
                this.destroyCapability = null,
                this._passwordCapability = null,
                this.pageCache = [],
                this.pagePromises = [],
                this.downloadInfoCapability = y(),
                this.setupMessageHandler()
            }
            return t.prototype = {
                destroy: function() {
                    if (this.destroyCapability)
                        return this.destroyCapability.promise;
                    this.destroyed = !0,
                    this.destroyCapability = y(),
                    this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                    var t = [];
                    this.pageCache.forEach(function(e) {
                        e && t.push(e._destroy())
                    }),
                    this.pageCache = [],
                    this.pagePromises = [];
                    var e = this
                      , n = this.messageHandler.sendWithPromise("Terminate", null);
                    return t.push(n),
                    Promise.all(t).then(function() {
                        e.fontLoader.clear(),
                        e.pdfDataRangeTransport && (e.pdfDataRangeTransport.abort(),
                        e.pdfDataRangeTransport = null),
                        e.messageHandler && (e.messageHandler.destroy(),
                        e.messageHandler = null),
                        e.destroyCapability.resolve()
                    }, this.destroyCapability.reject),
                    this.destroyCapability.promise
                },
                setupMessageHandler: function() {
                    var t = this.messageHandler
                      , e = this.loadingTask
                      , n = this.pdfDataRangeTransport;
                    n && (n.addRangeListener(function(e, n) {
                        t.send("OnDataRange", {
                            begin: e,
                            chunk: n
                        })
                    }),
                    n.addProgressListener(function(e) {
                        t.send("OnDataProgress", {
                            loaded: e
                        })
                    }),
                    n.addProgressiveReadListener(function(e) {
                        t.send("OnDataRange", {
                            chunk: e
                        })
                    }),
                    t.on("RequestDataRange", function(t) {
                        n.requestDataRange(t.begin, t.end)
                    }, this)),
                    t.on("GetDoc", function(t) {
                        var e = t.pdfInfo;
                        this.numPages = t.pdfInfo.numPages;
                        var n = this.loadingTask
                          , r = new Q(e,this,n);
                        this.pdfDocument = r,
                        n._capability.resolve(r)
                    }, this),
                    t.on("PasswordRequest", function(t) {
                        if (this._passwordCapability = y(),
                        e.onPassword) {
                            var n = function(t) {
                                this._passwordCapability.resolve({
                                    password: t
                                })
                            }
                            .bind(this);
                            e.onPassword(n, t.code)
                        } else
                            this._passwordCapability.reject(new g(t.message,t.code));
                        return this._passwordCapability.promise
                    }, this),
                    t.on("PasswordException", function(t) {
                        e._capability.reject(new g(t.message,t.code))
                    }, this),
                    t.on("InvalidPDF", function(t) {
                        this.loadingTask._capability.reject(new u(t.message))
                    }, this),
                    t.on("MissingPDF", function(t) {
                        this.loadingTask._capability.reject(new f(t.message))
                    }, this),
                    t.on("UnexpectedResponse", function(t) {
                        this.loadingTask._capability.reject(new A(t.message,t.status))
                    }, this),
                    t.on("UnknownError", function(t) {
                        this.loadingTask._capability.reject(new v(t.message,t.details))
                    }, this),
                    t.on("DataLoaded", function(t) {
                        this.downloadInfoCapability.resolve(t)
                    }, this),
                    t.on("PDFManagerReady", function(t) {
                        this.pdfDataRangeTransport && this.pdfDataRangeTransport.transportReady()
                    }, this),
                    t.on("StartRenderPage", function(t) {
                        if (!this.destroyed) {
                            var e = this.pageCache[t.pageIndex];
                            e.stats.timeEnd("Page Request"),
                            e._startRenderPage(t.transparency, t.intent)
                        }
                    }, this),
                    t.on("RenderPageChunk", function(t) {
                        this.destroyed || this.pageCache[t.pageIndex]._renderPageChunk(t.operatorList, t.intent)
                    }, this),
                    t.on("commonobj", function(t) {
                        if (!this.destroyed) {
                            var e = t[0]
                              , n = t[1];
                            if (!this.commonObjs.hasData(e))
                                switch (n) {
                                case "Font":
                                    var r = t[2];
                                    if ("error"in r) {
                                        var i = r.error;
                                        I("Error during font loading: " + i),
                                        this.commonObjs.resolve(e, i);
                                        break
                                    }
                                    var a = null;
                                    j("pdfBug") && R.FontInspector && R.FontInspector.enabled && (a = {
                                        registerFont: function(t, e) {
                                            R.FontInspector.fontAdded(t, e)
                                        }
                                    });
                                    var s = new F(r,{
                                        isEvalSuported: j("isEvalSupported"),
                                        disableFontFace: j("disableFontFace"),
                                        fontRegistry: a
                                    });
                                    this.fontLoader.bind([s], function(t) {
                                        this.commonObjs.resolve(e, s)
                                    }
                                    .bind(this));
                                    break;
                                case "FontPath":
                                    this.commonObjs.resolve(e, t[2]);
                                    break;
                                default:
                                    x("Got unknown common object type " + n)
                                }
                        }
                    }, this),
                    t.on("obj", function(t) {
                        if (!this.destroyed) {
                            var e, n = t[0], r = t[1], i = t[2], a = this.pageCache[r];
                            if (!a.objs.hasData(n))
                                switch (i) {
                                case "JpegStream":
                                    e = t[3],
                                    L(n, e, a.objs);
                                    break;
                                case "Image":
                                    e = t[3],
                                    a.objs.resolve(n, e);
                                    var s = 8e6;
                                    e && "data"in e && e.data.length > s && (a.cleanupAfterRender = !0);
                                    break;
                                default:
                                    x("Got unknown object type " + i)
                                }
                        }
                    }, this),
                    t.on("DocProgress", function(t) {
                        if (!this.destroyed) {
                            var e = this.loadingTask;
                            e.onProgress && e.onProgress({
                                loaded: t.loaded,
                                total: t.total
                            })
                        }
                    }, this),
                    t.on("PageError", function(t) {
                        if (!this.destroyed) {
                            var e = this.pageCache[t.pageNum - 1].intentStates[t.intent];
                            if (e.displayReadyCapability ? e.displayReadyCapability.reject(t.error) : x(t.error),
                            e.operatorList) {
                                e.operatorList.lastChunk = !0;
                                for (var n = 0; n < e.renderTasks.length; n++)
                                    e.renderTasks[n].operatorListChanged()
                            }
                        }
                    }, this),
                    t.on("UnsupportedFeature", function(t) {
                        if (!this.destroyed) {
                            var e = t.featureId
                              , n = this.loadingTask;
                            n.onUnsupportedFeature && n.onUnsupportedFeature(e),
                            rt.notify(e)
                        }
                    }, this),
                    t.on("JpegDecode", function(t) {
                        if (this.destroyed)
                            return Promise.reject(new Error("Worker was destroyed"));
                        if ("undefined" == typeof document)
                            return Promise.reject(new Error('"document" is not defined.'));
                        var e = t[0]
                          , n = t[1];
                        return 3 !== n && 1 !== n ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(t, r) {
                            var i = new Image;
                            i.onload = function() {
                                var e = i.width
                                  , r = i.height
                                  , a = e * r
                                  , s = 4 * a
                                  , o = new Uint8Array(a * n)
                                  , c = document.createElement("canvas");
                                c.width = e,
                                c.height = r;
                                var l = c.getContext("2d");
                                l.drawImage(i, 0, 0);
                                var h, u, d = l.getImageData(0, 0, e, r).data;
                                if (3 === n)
                                    for (h = 0,
                                    u = 0; h < s; h += 4,
                                    u += 3)
                                        o[u] = d[h],
                                        o[u + 1] = d[h + 1],
                                        o[u + 2] = d[h + 2];
                                else if (1 === n)
                                    for (h = 0,
                                    u = 0; h < s; h += 4,
                                    u++)
                                        o[u] = d[h];
                                t({
                                    data: o,
                                    width: e,
                                    height: r
                                })
                            }
                            ,
                            i.onerror = function() {
                                r(new Error("JpegDecode failed to load image"))
                            }
                            ,
                            i.src = e
                        }
                        )
                    }, this),
                    t.on("FetchBuiltInCMap", function(t) {
                        return this.destroyed ? Promise.reject(new Error("Worker was destroyed")) : this.CMapReaderFactory.fetch({
                            name: t.name
                        })
                    }, this)
                },
                getData: function() {
                    return this.messageHandler.sendWithPromise("GetData", null)
                },
                getPage: function(t, e) {
                    if (!C(t) || t <= 0 || t > this.numPages)
                        return Promise.reject(new Error("Invalid page request"));
                    var n = t - 1;
                    if (n in this.pagePromises)
                        return this.pagePromises[n];
                    var r = this.messageHandler.sendWithPromise("GetPage", {
                        pageIndex: n
                    }).then(function(t) {
                        if (this.destroyed)
                            throw new Error("Transport destroyed");
                        var e = new K(n,t,this);
                        return this.pageCache[n] = e,
                        e
                    }
                    .bind(this));
                    return this.pagePromises[n] = r,
                    r
                },
                getPageIndex: function(t) {
                    return this.messageHandler.sendWithPromise("GetPageIndex", {
                        ref: t
                    }).catch(function(t) {
                        return Promise.reject(new Error(t))
                    })
                },
                getAnnotations: function(t, e) {
                    return this.messageHandler.sendWithPromise("GetAnnotations", {
                        pageIndex: t,
                        intent: e
                    })
                },
                getDestinations: function() {
                    return this.messageHandler.sendWithPromise("GetDestinations", null)
                },
                getDestination: function(t) {
                    return this.messageHandler.sendWithPromise("GetDestination", {
                        id: t
                    })
                },
                getPageLabels: function() {
                    return this.messageHandler.sendWithPromise("GetPageLabels", null)
                },
                getAttachments: function() {
                    return this.messageHandler.sendWithPromise("GetAttachments", null)
                },
                getJavaScript: function() {
                    return this.messageHandler.sendWithPromise("GetJavaScript", null)
                },
                getOutline: function() {
                    return this.messageHandler.sendWithPromise("GetOutline", null)
                },
                getMetadata: function() {
                    return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(t) {
                        return {
                            info: t[0],
                            metadata: t[1] ? new D(t[1]) : null
                        }
                    })
                },
                getStats: function() {
                    return this.messageHandler.sendWithPromise("GetStats", null)
                },
                startCleanup: function() {
                    this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
                        for (var t = 0, e = this.pageCache.length; t < e; t++) {
                            var n = this.pageCache[t];
                            n && n.cleanup()
                        }
                        this.commonObjs.clear(),
                        this.fontLoader.clear()
                    }
                    .bind(this))
                }
            },
            t
        }()
          , tt = function() {
            function t() {
                this.objs = Object.create(null)
            }
            return t.prototype = {
                ensureObj: function(t) {
                    if (this.objs[t])
                        return this.objs[t];
                    var e = {
                        capability: y(),
                        data: null,
                        resolved: !1
                    };
                    return this.objs[t] = e,
                    e
                },
                get: function(t, e) {
                    if (e)
                        return this.ensureObj(t).capability.promise.then(e),
                        null;
                    var n = this.objs[t];
                    return n && n.resolved || x("Requesting object that isn't resolved yet " + t),
                    n.data
                },
                resolve: function(t, e) {
                    var n = this.ensureObj(t);
                    n.resolved = !0,
                    n.data = e,
                    n.capability.resolve(e)
                },
                isResolved: function(t) {
                    var e = this.objs;
                    return !!e[t] && e[t].resolved
                },
                hasData: function(t) {
                    return this.isResolved(t)
                },
                getData: function(t) {
                    var e = this.objs;
                    return e[t] && e[t].resolved ? e[t].data : null
                },
                clear: function() {
                    this.objs = Object.create(null)
                }
            },
            t
        }()
          , et = function() {
            function t(t) {
                this._internalRenderTask = t,
                this.onContinue = null
            }
            return t.prototype = {
                get promise() {
                    return this._internalRenderTask.capability.promise
                },
                cancel: function() {
                    this._internalRenderTask.cancel()
                },
                then: function(t, e) {
                    return this.promise.then.apply(this.promise, arguments)
                }
            },
            t
        }()
          , nt = function() {
            function t(t, e, n, r, i, a, s) {
                this.callback = t,
                this.params = e,
                this.objs = n,
                this.commonObjs = r,
                this.operatorListIdx = null,
                this.operatorList = i,
                this.pageNumber = a,
                this.canvasFactory = s,
                this.running = !1,
                this.graphicsReadyCallback = null,
                this.graphicsReady = !1,
                this.useRequestAnimationFrame = !1,
                this.cancelled = !1,
                this.capability = y(),
                this.task = new et(this),
                this._continueBound = this._continue.bind(this),
                this._scheduleNextBound = this._scheduleNext.bind(this),
                this._nextBound = this._next.bind(this)
            }
            return t.prototype = {
                initializeGraphics: function(t) {
                    if (!this.cancelled) {
                        j("pdfBug") && R.StepperManager && R.StepperManager.enabled && (this.stepper = R.StepperManager.create(this.pageNumber - 1),
                        this.stepper.init(this.operatorList),
                        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                        var e = this.params;
                        this.gfx = new M(e.canvasContext,this.commonObjs,this.objs,this.canvasFactory,e.imageLayer),
                        this.gfx.beginDrawing(e.transform, e.viewport, t),
                        this.operatorListIdx = 0,
                        this.graphicsReady = !0,
                        this.graphicsReadyCallback && this.graphicsReadyCallback()
                    }
                },
                cancel: function() {
                    this.running = !1,
                    this.cancelled = !0,
                    j("pdfjsNext") ? this.callback(new O("Rendering cancelled, page " + this.pageNumber,"canvas")) : this.callback("cancelled")
                },
                operatorListChanged: function() {
                    this.graphicsReady ? (this.stepper && this.stepper.updateOperatorList(this.operatorList),
                    this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound)
                },
                _continue: function() {
                    this.running = !0,
                    this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                },
                _scheduleNext: function() {
                    this.useRequestAnimationFrame && "undefined" != typeof window ? window.requestAnimationFrame(this._nextBound) : Promise.resolve(void 0).then(this._nextBound)
                },
                _next: function() {
                    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper),
                    this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1,
                    this.operatorList.lastChunk && (this.gfx.endDrawing(),
                    this.callback())))
                }
            },
            t
        }()
          , rt = function() {
            var t = [];
            return {
                listen: function(e) {
                    S("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"),
                    t.push(e)
                },
                notify: function(e) {
                    for (var n = 0, r = t.length; n < r; n++)
                        t[n](e)
                }
            }
        }();
        e.version = "1.8.188",
        e.build = "ad1023ff",
        e.getDocument = r,
        e.PDFDataRangeTransport = J,
        e.PDFWorker = Z,
        e.PDFDocumentProxy = Q,
        e.PDFPageProxy = K,
        e._UnsupportedManager = rt
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = r.FONT_IDENTITY_MATRIX
          , a = r.IDENTITY_MATRIX
          , s = r.ImageKind
          , o = r.OPS
          , c = r.Util
          , l = r.isNum
          , h = r.isArray
          , u = r.warn
          , d = r.createObjectURL
          , f = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
        }
          , p = function() {
            function t(t, e, n) {
                for (var r = -1, i = e; i < n; i++) {
                    var a = 255 & (r ^ t[i]);
                    r = r >>> 8 ^ o[a]
                }
                return -1 ^ r
            }
            function e(e, n, r, i) {
                var a = i
                  , s = n.length;
                r[a] = s >> 24 & 255,
                r[a + 1] = s >> 16 & 255,
                r[a + 2] = s >> 8 & 255,
                r[a + 3] = 255 & s,
                r[a += 4] = 255 & e.charCodeAt(0),
                r[a + 1] = 255 & e.charCodeAt(1),
                r[a + 2] = 255 & e.charCodeAt(2),
                r[a + 3] = 255 & e.charCodeAt(3),
                a += 4,
                r.set(n, a);
                var o = t(r, i + 4, a += n.length);
                r[a] = o >> 24 & 255,
                r[a + 1] = o >> 16 & 255,
                r[a + 2] = o >> 8 & 255,
                r[a + 3] = 255 & o
            }
            function n(t, e, n) {
                for (var r = 1, i = 0, a = e; a < n; ++a)
                    i = (i + (r = (r + (255 & t[a])) % 65521)) % 65521;
                return i << 16 | r
            }
            function r(t, r, o) {
                var c, l, h, u = t.width, f = t.height, p = t.data;
                switch (r) {
                case s.GRAYSCALE_1BPP:
                    l = 0,
                    c = 1,
                    h = u + 7 >> 3;
                    break;
                case s.RGB_24BPP:
                    l = 2,
                    c = 8,
                    h = 3 * u;
                    break;
                case s.RGBA_32BPP:
                    l = 6,
                    c = 8,
                    h = 4 * u;
                    break;
                default:
                    throw new Error("invalid format")
                }
                var g, m, A = new Uint8Array((1 + h) * f), v = 0, b = 0;
                for (g = 0; g < f; ++g)
                    A[v++] = 0,
                    A.set(p.subarray(b, b + h), v),
                    b += h,
                    v += h;
                if (r === s.GRAYSCALE_1BPP)
                    for (v = 0,
                    g = 0; g < f; g++)
                        for (v++,
                        m = 0; m < h; m++)
                            A[v++] ^= 255;
                var y = new Uint8Array([u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f, c, l, 0, 0, 0])
                  , x = A.length
                  , S = 65535
                  , w = Math.ceil(x / S)
                  , k = new Uint8Array(2 + x + 5 * w + 4)
                  , C = 0;
                k[C++] = 120,
                k[C++] = 156;
                for (var _ = 0; x > S; )
                    k[C++] = 0,
                    k[C++] = 255,
                    k[C++] = 255,
                    k[C++] = 0,
                    k[C++] = 0,
                    k.set(A.subarray(_, _ + S), C),
                    C += S,
                    _ += S,
                    x -= S;
                k[C++] = 1,
                k[C++] = 255 & x,
                k[C++] = x >> 8 & 255,
                k[C++] = 255 & ~x,
                k[C++] = (65535 & ~x) >> 8 & 255,
                k.set(A.subarray(_), C),
                C += A.length - _;
                var T = n(A, 0, A.length);
                k[C++] = T >> 24 & 255,
                k[C++] = T >> 16 & 255,
                k[C++] = T >> 8 & 255,
                k[C++] = 255 & T;
                var P = i.length + 3 * a + y.length + k.length
                  , L = new Uint8Array(P)
                  , E = 0;
                return L.set(i, E),
                E += i.length,
                e("IHDR", y, L, E),
                E += a + y.length,
                e("IDATA", k, L, E),
                E += a + k.length,
                e("IEND", new Uint8Array(0), L, E),
                d(L, "image/png", o)
            }
            for (var i = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), a = 12, o = new Int32Array(256), c = 0; c < 256; c++) {
                for (var l = c, h = 0; h < 8; h++)
                    l = 1 & l ? 3988292384 ^ l >> 1 & 2147483647 : l >> 1 & 2147483647;
                o[c] = l
            }
            return function(t, e) {
                return r(t, void 0 === t.kind ? s.GRAYSCALE_1BPP : t.kind, e)
            }
        }()
          , g = function() {
            function t() {
                this.fontSizeScale = 1,
                this.fontWeight = f.fontWeight,
                this.fontSize = 0,
                this.textMatrix = a,
                this.fontMatrix = i,
                this.leading = 0,
                this.x = 0,
                this.y = 0,
                this.lineX = 0,
                this.lineY = 0,
                this.charSpacing = 0,
                this.wordSpacing = 0,
                this.textHScale = 1,
                this.textRise = 0,
                this.fillColor = f.fillColor,
                this.strokeColor = "#000000",
                this.fillAlpha = 1,
                this.strokeAlpha = 1,
                this.lineWidth = 1,
                this.lineJoin = "",
                this.lineCap = "",
                this.miterLimit = 0,
                this.dashArray = [],
                this.dashPhase = 0,
                this.dependencies = [],
                this.activeClipUrl = null,
                this.clipGroup = null,
                this.maskId = ""
            }
            return t.prototype = {
                clone: function() {
                    return Object.create(this)
                },
                setCurrentPoint: function(t, e) {
                    this.x = t,
                    this.y = e
                }
            },
            t
        }()
          , m = function() {
            function t(t) {
                for (var e = [], n = [], r = t.length, i = 0; i < r; i++)
                    "save" !== t[i].fn ? "restore" === t[i].fn ? e = n.pop() : e.push(t[i]) : (e.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                    }),
                    n.push(e),
                    e = e[e.length - 1].items);
                return e
            }
            function e(t) {
                if (t === (0 | t))
                    return t.toString();
                var e = t.toFixed(10)
                  , n = e.length - 1;
                if ("0" !== e[n])
                    return e;
                do {
                    n--
                } while ("0" === e[n]);
                return e.substr(0, "." === e[n] ? n : n + 1)
            }
            function n(t) {
                if (0 === t[4] && 0 === t[5]) {
                    if (0 === t[1] && 0 === t[2])
                        return 1 === t[0] && 1 === t[3] ? "" : "scale(" + e(t[0]) + " " + e(t[3]) + ")";
                    if (t[0] === t[3] && t[1] === -t[2])
                        return "rotate(" + e(180 * Math.acos(t[0]) / Math.PI) + ")"
                } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3])
                    return "translate(" + e(t[4]) + " " + e(t[5]) + ")";
                return "matrix(" + e(t[0]) + " " + e(t[1]) + " " + e(t[2]) + " " + e(t[3]) + " " + e(t[4]) + " " + e(t[5]) + ")"
            }
            function r(t, e, n) {
                this.current = new g,
                this.transformMatrix = a,
                this.transformStack = [],
                this.extraStack = [],
                this.commonObjs = t,
                this.objs = e,
                this.pendingEOFill = !1,
                this.embedFonts = !1,
                this.embeddedFonts = Object.create(null),
                this.cssStyle = null,
                this.forceDataSchema = !!n
            }
            var s = "http://www.w3.org/2000/svg"
              , m = "http://www.w3.org/XML/1998/namespace"
              , A = "http://www.w3.org/1999/xlink"
              , v = ["butt", "round", "square"]
              , b = ["miter", "round", "bevel"]
              , y = 0
              , x = 0;
            return r.prototype = {
                save: function() {
                    this.transformStack.push(this.transformMatrix);
                    var t = this.current;
                    this.extraStack.push(t),
                    this.current = t.clone()
                },
                restore: function() {
                    this.transformMatrix = this.transformStack.pop(),
                    this.current = this.extraStack.pop(),
                    this.tgrp = null
                },
                group: function(t) {
                    this.save(),
                    this.executeOpTree(t),
                    this.restore()
                },
                loadDependencies: function(t) {
                    for (var e = t.fnArray, n = e.length, r = t.argsArray, i = this, a = 0; a < n; a++)
                        if (o.dependency === e[a])
                            for (var s = r[a], c = 0, l = s.length; c < l; c++) {
                                var h, u = s[c];
                                h = "g_" === u.substring(0, 2) ? new Promise(function(t) {
                                    i.commonObjs.get(u, t)
                                }
                                ) : new Promise(function(t) {
                                    i.objs.get(u, t)
                                }
                                ),
                                this.current.dependencies.push(h)
                            }
                    return Promise.all(this.current.dependencies)
                },
                transform: function(t, e, n, r, i, a) {
                    var s = [t, e, n, r, i, a];
                    this.transformMatrix = c.transform(this.transformMatrix, s),
                    this.tgrp = null
                },
                getSVG: function(t, e) {
                    this.viewport = e;
                    var n = this._initialize(e);
                    return this.loadDependencies(t).then(function() {
                        this.transformMatrix = a;
                        var e = this.convertOpList(t);
                        return this.executeOpTree(e),
                        n
                    }
                    .bind(this))
                },
                convertOpList: function(e) {
                    var n = e.argsArray
                      , r = e.fnArray
                      , i = r.length
                      , a = []
                      , s = [];
                    for (var c in o)
                        a[o[c]] = c;
                    for (var l = 0; l < i; l++) {
                        var h = r[l];
                        s.push({
                            fnId: h,
                            fn: a[h],
                            args: n[l]
                        })
                    }
                    return t(s)
                },
                executeOpTree: function(t) {
                    for (var e = t.length, n = 0; n < e; n++) {
                        var r = t[n].fn
                          , i = t[n].fnId
                          , a = t[n].args;
                        switch (0 | i) {
                        case o.beginText:
                            this.beginText();
                            break;
                        case o.setLeading:
                            this.setLeading(a);
                            break;
                        case o.setLeadingMoveText:
                            this.setLeadingMoveText(a[0], a[1]);
                            break;
                        case o.setFont:
                            this.setFont(a);
                            break;
                        case o.showText:
                        case o.showSpacedText:
                            this.showText(a[0]);
                            break;
                        case o.endText:
                            this.endText();
                            break;
                        case o.moveText:
                            this.moveText(a[0], a[1]);
                            break;
                        case o.setCharSpacing:
                            this.setCharSpacing(a[0]);
                            break;
                        case o.setWordSpacing:
                            this.setWordSpacing(a[0]);
                            break;
                        case o.setHScale:
                            this.setHScale(a[0]);
                            break;
                        case o.setTextMatrix:
                            this.setTextMatrix(a[0], a[1], a[2], a[3], a[4], a[5]);
                            break;
                        case o.setLineWidth:
                            this.setLineWidth(a[0]);
                            break;
                        case o.setLineJoin:
                            this.setLineJoin(a[0]);
                            break;
                        case o.setLineCap:
                            this.setLineCap(a[0]);
                            break;
                        case o.setMiterLimit:
                            this.setMiterLimit(a[0]);
                            break;
                        case o.setFillRGBColor:
                            this.setFillRGBColor(a[0], a[1], a[2]);
                            break;
                        case o.setStrokeRGBColor:
                            this.setStrokeRGBColor(a[0], a[1], a[2]);
                            break;
                        case o.setDash:
                            this.setDash(a[0], a[1]);
                            break;
                        case o.setGState:
                            this.setGState(a[0]);
                            break;
                        case o.fill:
                            this.fill();
                            break;
                        case o.eoFill:
                            this.eoFill();
                            break;
                        case o.stroke:
                            this.stroke();
                            break;
                        case o.fillStroke:
                            this.fillStroke();
                            break;
                        case o.eoFillStroke:
                            this.eoFillStroke();
                            break;
                        case o.clip:
                            this.clip("nonzero");
                            break;
                        case o.eoClip:
                            this.clip("evenodd");
                            break;
                        case o.paintSolidColorImageMask:
                            this.paintSolidColorImageMask();
                            break;
                        case o.paintJpegXObject:
                            this.paintJpegXObject(a[0], a[1], a[2]);
                            break;
                        case o.paintImageXObject:
                            this.paintImageXObject(a[0]);
                            break;
                        case o.paintInlineImageXObject:
                            this.paintInlineImageXObject(a[0]);
                            break;
                        case o.paintImageMaskXObject:
                            this.paintImageMaskXObject(a[0]);
                            break;
                        case o.paintFormXObjectBegin:
                            this.paintFormXObjectBegin(a[0], a[1]);
                            break;
                        case o.paintFormXObjectEnd:
                            this.paintFormXObjectEnd();
                            break;
                        case o.closePath:
                            this.closePath();
                            break;
                        case o.closeStroke:
                            this.closeStroke();
                            break;
                        case o.closeFillStroke:
                            this.closeFillStroke();
                            break;
                        case o.nextLine:
                            this.nextLine();
                            break;
                        case o.transform:
                            this.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
                            break;
                        case o.constructPath:
                            this.constructPath(a[0], a[1]);
                            break;
                        case o.endPath:
                            this.endPath();
                            break;
                        case 92:
                            this.group(t[n].items);
                            break;
                        default:
                            u("Unimplemented operator " + r)
                        }
                    }
                },
                setWordSpacing: function(t) {
                    this.current.wordSpacing = t
                },
                setCharSpacing: function(t) {
                    this.current.charSpacing = t
                },
                nextLine: function() {
                    this.moveText(0, this.current.leading)
                },
                setTextMatrix: function(t, n, r, i, a, o) {
                    var c = this.current;
                    this.current.textMatrix = this.current.lineMatrix = [t, n, r, i, a, o],
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0,
                    c.xcoords = [],
                    c.tspan = document.createElementNS(s, "svg:tspan"),
                    c.tspan.setAttributeNS(null, "font-family", c.fontFamily),
                    c.tspan.setAttributeNS(null, "font-size", e(c.fontSize) + "px"),
                    c.tspan.setAttributeNS(null, "y", e(-c.y)),
                    c.txtElement = document.createElementNS(s, "svg:text"),
                    c.txtElement.appendChild(c.tspan)
                },
                beginText: function() {
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0,
                    this.current.textMatrix = a,
                    this.current.lineMatrix = a,
                    this.current.tspan = document.createElementNS(s, "svg:tspan"),
                    this.current.txtElement = document.createElementNS(s, "svg:text"),
                    this.current.txtgrp = document.createElementNS(s, "svg:g"),
                    this.current.xcoords = []
                },
                moveText: function(t, n) {
                    var r = this.current;
                    this.current.x = this.current.lineX += t,
                    this.current.y = this.current.lineY += n,
                    r.xcoords = [],
                    r.tspan = document.createElementNS(s, "svg:tspan"),
                    r.tspan.setAttributeNS(null, "font-family", r.fontFamily),
                    r.tspan.setAttributeNS(null, "font-size", e(r.fontSize) + "px"),
                    r.tspan.setAttributeNS(null, "y", e(-r.y))
                },
                showText: function(t) {
                    var r = this.current
                      , i = r.font
                      , a = r.fontSize;
                    if (0 !== a) {
                        var s, o = r.charSpacing, c = r.wordSpacing, h = r.fontDirection, u = r.textHScale * h, d = t.length, p = i.vertical, g = a * r.fontMatrix[0], A = 0;
                        for (s = 0; s < d; ++s) {
                            var v = t[s];
                            if (null !== v)
                                if (l(v))
                                    A += -v * a * .001;
                                else {
                                    r.xcoords.push(r.x + A * u);
                                    var b = v.width
                                      , y = v.fontChar;
                                    A += b * g + o * h,
                                    r.tspan.textContent += y
                                }
                            else
                                A += h * c
                        }
                        p ? r.y -= A * u : r.x += A * u,
                        r.tspan.setAttributeNS(null, "x", r.xcoords.map(e).join(" ")),
                        r.tspan.setAttributeNS(null, "y", e(-r.y)),
                        r.tspan.setAttributeNS(null, "font-family", r.fontFamily),
                        r.tspan.setAttributeNS(null, "font-size", e(r.fontSize) + "px"),
                        r.fontStyle !== f.fontStyle && r.tspan.setAttributeNS(null, "font-style", r.fontStyle),
                        r.fontWeight !== f.fontWeight && r.tspan.setAttributeNS(null, "font-weight", r.fontWeight),
                        r.fillColor !== f.fillColor && r.tspan.setAttributeNS(null, "fill", r.fillColor),
                        r.txtElement.setAttributeNS(null, "transform", n(r.textMatrix) + " scale(1, -1)"),
                        r.txtElement.setAttributeNS(m, "xml:space", "preserve"),
                        r.txtElement.appendChild(r.tspan),
                        r.txtgrp.appendChild(r.txtElement),
                        this._ensureTransformGroup().appendChild(r.txtElement)
                    }
                },
                setLeadingMoveText: function(t, e) {
                    this.setLeading(-e),
                    this.moveText(t, e)
                },
                addFontStyle: function(t) {
                    this.cssStyle || (this.cssStyle = document.createElementNS(s, "svg:style"),
                    this.cssStyle.setAttributeNS(null, "type", "text/css"),
                    this.defs.appendChild(this.cssStyle));
                    var e = d(t.data, t.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += '@font-face { font-family: "' + t.loadedName + '"; src: url(' + e + "); }\n"
                },
                setFont: function(t) {
                    var n = this.current
                      , r = this.commonObjs.get(t[0])
                      , a = t[1];
                    this.current.font = r,
                    this.embedFonts && r.data && !this.embeddedFonts[r.loadedName] && (this.addFontStyle(r),
                    this.embeddedFonts[r.loadedName] = r),
                    n.fontMatrix = r.fontMatrix ? r.fontMatrix : i;
                    var o = r.black ? r.bold ? "bolder" : "bold" : r.bold ? "bold" : "normal"
                      , c = r.italic ? "italic" : "normal";
                    a < 0 ? (a = -a,
                    n.fontDirection = -1) : n.fontDirection = 1,
                    n.fontSize = a,
                    n.fontFamily = r.loadedName,
                    n.fontWeight = o,
                    n.fontStyle = c,
                    n.tspan = document.createElementNS(s, "svg:tspan"),
                    n.tspan.setAttributeNS(null, "y", e(-n.y)),
                    n.xcoords = []
                },
                endText: function() {},
                setLineWidth: function(t) {
                    this.current.lineWidth = t
                },
                setLineCap: function(t) {
                    this.current.lineCap = v[t]
                },
                setLineJoin: function(t) {
                    this.current.lineJoin = b[t]
                },
                setMiterLimit: function(t) {
                    this.current.miterLimit = t
                },
                setStrokeRGBColor: function(t, e, n) {
                    var r = c.makeCssRgb(t, e, n);
                    this.current.strokeColor = r
                },
                setFillRGBColor: function(t, e, n) {
                    var r = c.makeCssRgb(t, e, n);
                    this.current.fillColor = r,
                    this.current.tspan = document.createElementNS(s, "svg:tspan"),
                    this.current.xcoords = []
                },
                setDash: function(t, e) {
                    this.current.dashArray = t,
                    this.current.dashPhase = e
                },
                constructPath: function(t, n) {
                    var r = this.current
                      , i = r.x
                      , a = r.y;
                    r.path = document.createElementNS(s, "svg:path");
                    for (var c = [], l = t.length, h = 0, u = 0; h < l; h++)
                        switch (0 | t[h]) {
                        case o.rectangle:
                            i = n[u++],
                            a = n[u++];
                            var d = i + n[u++]
                              , f = a + n[u++];
                            c.push("M", e(i), e(a), "L", e(d), e(a), "L", e(d), e(f), "L", e(i), e(f), "Z");
                            break;
                        case o.moveTo:
                            i = n[u++],
                            a = n[u++],
                            c.push("M", e(i), e(a));
                            break;
                        case o.lineTo:
                            i = n[u++],
                            a = n[u++],
                            c.push("L", e(i), e(a));
                            break;
                        case o.curveTo:
                            i = n[u + 4],
                            a = n[u + 5],
                            c.push("C", e(n[u]), e(n[u + 1]), e(n[u + 2]), e(n[u + 3]), e(i), e(a)),
                            u += 6;
                            break;
                        case o.curveTo2:
                            i = n[u + 2],
                            a = n[u + 3],
                            c.push("C", e(i), e(a), e(n[u]), e(n[u + 1]), e(n[u + 2]), e(n[u + 3])),
                            u += 4;
                            break;
                        case o.curveTo3:
                            i = n[u + 2],
                            a = n[u + 3],
                            c.push("C", e(n[u]), e(n[u + 1]), e(i), e(a), e(i), e(a)),
                            u += 4;
                            break;
                        case o.closePath:
                            c.push("Z")
                        }
                    r.path.setAttributeNS(null, "d", c.join(" ")),
                    r.path.setAttributeNS(null, "stroke-miterlimit", e(r.miterLimit)),
                    r.path.setAttributeNS(null, "stroke-linecap", r.lineCap),
                    r.path.setAttributeNS(null, "stroke-linejoin", r.lineJoin),
                    r.path.setAttributeNS(null, "stroke-width", e(r.lineWidth) + "px"),
                    r.path.setAttributeNS(null, "stroke-dasharray", r.dashArray.map(e).join(" ")),
                    r.path.setAttributeNS(null, "stroke-dashoffset", e(r.dashPhase) + "px"),
                    r.path.setAttributeNS(null, "fill", "none"),
                    this._ensureTransformGroup().appendChild(r.path),
                    r.element = r.path,
                    r.setCurrentPoint(i, a)
                },
                endPath: function() {},
                clip: function(t) {
                    var e = this.current
                      , r = "clippath" + y;
                    y++;
                    var i = document.createElementNS(s, "svg:clipPath");
                    i.setAttributeNS(null, "id", r),
                    i.setAttributeNS(null, "transform", n(this.transformMatrix));
                    var a = e.element.cloneNode();
                    "evenodd" === t ? a.setAttributeNS(null, "clip-rule", "evenodd") : a.setAttributeNS(null, "clip-rule", "nonzero"),
                    i.appendChild(a),
                    this.defs.appendChild(i),
                    e.activeClipUrl && (e.clipGroup = null,
                    this.extraStack.forEach(function(t) {
                        t.clipGroup = null
                    })),
                    e.activeClipUrl = "url(#" + r + ")",
                    this.tgrp = null
                },
                closePath: function() {
                    var t = this.current
                      , e = t.path.getAttributeNS(null, "d");
                    e += "Z",
                    t.path.setAttributeNS(null, "d", e)
                },
                setLeading: function(t) {
                    this.current.leading = -t
                },
                setTextRise: function(t) {
                    this.current.textRise = t
                },
                setHScale: function(t) {
                    this.current.textHScale = t / 100
                },
                setGState: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var r = t[e]
                          , i = r[0]
                          , a = r[1];
                        switch (i) {
                        case "LW":
                            this.setLineWidth(a);
                            break;
                        case "LC":
                            this.setLineCap(a);
                            break;
                        case "LJ":
                            this.setLineJoin(a);
                            break;
                        case "ML":
                            this.setMiterLimit(a);
                            break;
                        case "D":
                            this.setDash(a[0], a[1]);
                            break;
                        case "Font":
                            this.setFont(a);
                            break;
                        default:
                            u("Unimplemented graphic state " + i)
                        }
                    }
                },
                fill: function() {
                    var t = this.current;
                    t.element.setAttributeNS(null, "fill", t.fillColor)
                },
                stroke: function() {
                    var t = this.current;
                    t.element.setAttributeNS(null, "stroke", t.strokeColor),
                    t.element.setAttributeNS(null, "fill", "none")
                },
                eoFill: function() {
                    var t = this.current;
                    t.element.setAttributeNS(null, "fill", t.fillColor),
                    t.element.setAttributeNS(null, "fill-rule", "evenodd")
                },
                fillStroke: function() {
                    this.stroke(),
                    this.fill()
                },
                eoFillStroke: function() {
                    this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
                    this.fillStroke()
                },
                closeStroke: function() {
                    this.closePath(),
                    this.stroke()
                },
                closeFillStroke: function() {
                    this.closePath(),
                    this.fillStroke()
                },
                paintSolidColorImageMask: function() {
                    var t = this.current
                      , e = document.createElementNS(s, "svg:rect");
                    e.setAttributeNS(null, "x", "0"),
                    e.setAttributeNS(null, "y", "0"),
                    e.setAttributeNS(null, "width", "1px"),
                    e.setAttributeNS(null, "height", "1px"),
                    e.setAttributeNS(null, "fill", t.fillColor),
                    this._ensureTransformGroup().appendChild(e)
                },
                paintJpegXObject: function(t, n, r) {
                    var i = this.objs.get(t)
                      , a = document.createElementNS(s, "svg:image");
                    a.setAttributeNS(A, "xlink:href", i.src),
                    a.setAttributeNS(null, "width", i.width + "px"),
                    a.setAttributeNS(null, "height", i.height + "px"),
                    a.setAttributeNS(null, "x", "0"),
                    a.setAttributeNS(null, "y", e(-r)),
                    a.setAttributeNS(null, "transform", "scale(" + e(1 / n) + " " + e(-1 / r) + ")"),
                    this._ensureTransformGroup().appendChild(a)
                },
                paintImageXObject: function(t) {
                    var e = this.objs.get(t);
                    e ? this.paintInlineImageXObject(e) : u("Dependent image isn't ready yet")
                },
                paintInlineImageXObject: function(t, n) {
                    var r = t.width
                      , i = t.height
                      , a = p(t, this.forceDataSchema)
                      , o = document.createElementNS(s, "svg:rect");
                    o.setAttributeNS(null, "x", "0"),
                    o.setAttributeNS(null, "y", "0"),
                    o.setAttributeNS(null, "width", e(r)),
                    o.setAttributeNS(null, "height", e(i)),
                    this.current.element = o,
                    this.clip("nonzero");
                    var c = document.createElementNS(s, "svg:image");
                    c.setAttributeNS(A, "xlink:href", a),
                    c.setAttributeNS(null, "x", "0"),
                    c.setAttributeNS(null, "y", e(-i)),
                    c.setAttributeNS(null, "width", e(r) + "px"),
                    c.setAttributeNS(null, "height", e(i) + "px"),
                    c.setAttributeNS(null, "transform", "scale(" + e(1 / r) + " " + e(-1 / i) + ")"),
                    n ? n.appendChild(c) : this._ensureTransformGroup().appendChild(c)
                },
                paintImageMaskXObject: function(t) {
                    var n = this.current
                      , r = t.width
                      , i = t.height
                      , a = n.fillColor;
                    n.maskId = "mask" + x++;
                    var o = document.createElementNS(s, "svg:mask");
                    o.setAttributeNS(null, "id", n.maskId);
                    var c = document.createElementNS(s, "svg:rect");
                    c.setAttributeNS(null, "x", "0"),
                    c.setAttributeNS(null, "y", "0"),
                    c.setAttributeNS(null, "width", e(r)),
                    c.setAttributeNS(null, "height", e(i)),
                    c.setAttributeNS(null, "fill", a),
                    c.setAttributeNS(null, "mask", "url(#" + n.maskId + ")"),
                    this.defs.appendChild(o),
                    this._ensureTransformGroup().appendChild(c),
                    this.paintInlineImageXObject(t, o)
                },
                paintFormXObjectBegin: function(t, n) {
                    if (h(t) && 6 === t.length && this.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
                    h(n) && 4 === n.length) {
                        var r = n[2] - n[0]
                          , i = n[3] - n[1]
                          , a = document.createElementNS(s, "svg:rect");
                        a.setAttributeNS(null, "x", n[0]),
                        a.setAttributeNS(null, "y", n[1]),
                        a.setAttributeNS(null, "width", e(r)),
                        a.setAttributeNS(null, "height", e(i)),
                        this.current.element = a,
                        this.clip("nonzero"),
                        this.endPath()
                    }
                },
                paintFormXObjectEnd: function() {},
                _initialize: function(t) {
                    var e = document.createElementNS(s, "svg:svg");
                    e.setAttributeNS(null, "version", "1.1"),
                    e.setAttributeNS(null, "width", t.width + "px"),
                    e.setAttributeNS(null, "height", t.height + "px"),
                    e.setAttributeNS(null, "preserveAspectRatio", "none"),
                    e.setAttributeNS(null, "viewBox", "0 0 " + t.width + " " + t.height);
                    var r = document.createElementNS(s, "svg:defs");
                    e.appendChild(r),
                    this.defs = r;
                    var i = document.createElementNS(s, "svg:g");
                    return i.setAttributeNS(null, "transform", n(t.transform)),
                    e.appendChild(i),
                    this.svg = i,
                    e
                },
                _ensureClipGroup: function() {
                    if (!this.current.clipGroup) {
                        var t = document.createElementNS(s, "svg:g");
                        t.setAttributeNS(null, "clip-path", this.current.activeClipUrl),
                        this.svg.appendChild(t),
                        this.current.clipGroup = t
                    }
                    return this.current.clipGroup
                },
                _ensureTransformGroup: function() {
                    return this.tgrp || (this.tgrp = document.createElementNS(s, "svg:g"),
                    this.tgrp.setAttributeNS(null, "transform", n(this.transformMatrix)),
                    this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)),
                    this.tgrp
                }
            },
            r
        }();
        e.SVGGraphics = m
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(1)
          , a = r.Util
          , s = r.createPromiseCapability
          , o = i.CustomStyle
          , c = i.getDefaultSetting
          , l = function() {
            function t(t) {
                return !f.test(t)
            }
            function e(e, n, r) {
                var i = document.createElement("div")
                  , s = {
                    style: null,
                    angle: 0,
                    canvasWidth: 0,
                    isWhitespace: !1,
                    originalTransform: null,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    scale: 1
                };
                if (e._textDivs.push(i),
                t(n.str))
                    return s.isWhitespace = !0,
                    void e._textDivProperties.set(i, s);
                var o = a.transform(e._viewport.transform, n.transform)
                  , l = Math.atan2(o[1], o[0])
                  , h = r[n.fontName];
                h.vertical && (l += Math.PI / 2);
                var u = Math.sqrt(o[2] * o[2] + o[3] * o[3])
                  , d = u;
                h.ascent ? d = h.ascent * d : h.descent && (d = (1 + h.descent) * d);
                var f, g;
                if (0 === l ? (f = o[4],
                g = o[5] - d) : (f = o[4] + d * Math.sin(l),
                g = o[5] - d * Math.cos(l)),
                p[1] = f,
                p[3] = g,
                p[5] = u,
                p[7] = h.fontFamily,
                s.style = p.join(""),
                i.setAttribute("style", s.style),
                i.textContent = n.str,
                c("pdfBug") && (i.dataset.fontName = n.fontName),
                0 !== l && (s.angle = l * (180 / Math.PI)),
                n.str.length > 1 && (h.vertical ? s.canvasWidth = n.height * e._viewport.scale : s.canvasWidth = n.width * e._viewport.scale),
                e._textDivProperties.set(i, s),
                e._enhanceTextSelection) {
                    var m = 1
                      , A = 0;
                    0 !== l && (m = Math.cos(l),
                    A = Math.sin(l));
                    var v, b, y = (h.vertical ? n.height : n.width) * e._viewport.scale, x = u;
                    0 !== l ? (v = [m, A, -A, m, f, g],
                    b = a.getAxialAlignedBoundingBox([0, 0, y, x], v)) : b = [f, g, f + y, g + x],
                    e._bounds.push({
                        left: b[0],
                        top: b[1],
                        right: b[2],
                        bottom: b[3],
                        div: i,
                        size: [y, x],
                        m: v
                    })
                }
            }
            function n(t) {
                if (!t._canceled) {
                    var e = t._container
                      , n = t._textDivs
                      , r = t._capability
                      , i = n.length;
                    if (i > d)
                        return t._renderingDone = !0,
                        void r.resolve();
                    var a = document.createElement("canvas");
                    a.mozOpaque = !0;
                    for (var s, c, l = a.getContext("2d", {
                        alpha: !1
                    }), h = 0; h < i; h++) {
                        var u = n[h]
                          , f = t._textDivProperties.get(u);
                        if (!f.isWhitespace) {
                            var p = u.style.fontSize
                              , g = u.style.fontFamily;
                            p === s && g === c || (l.font = p + " " + g,
                            s = p,
                            c = g);
                            var m = l.measureText(u.textContent).width;
                            e.appendChild(u);
                            var A = "";
                            0 !== f.canvasWidth && m > 0 && (f.scale = f.canvasWidth / m,
                            A = "scaleX(" + f.scale + ")"),
                            0 !== f.angle && (A = "rotate(" + f.angle + "deg) " + A),
                            "" !== A && (f.originalTransform = A,
                            o.setProp("transform", u, A)),
                            t._textDivProperties.set(u, f)
                        }
                    }
                    t._renderingDone = !0,
                    r.resolve()
                }
            }
            function r(t) {
                for (var e = t._bounds, n = t._viewport, r = i(n.width, n.height, e), s = 0; s < r.length; s++) {
                    var o = e[s].div
                      , c = t._textDivProperties.get(o);
                    if (0 !== c.angle) {
                        var l = r[s]
                          , h = e[s]
                          , u = h.m
                          , d = u[0]
                          , f = u[1]
                          , p = [[0, 0], [0, h.size[1]], [h.size[0], 0], h.size]
                          , g = new Float64Array(64);
                        p.forEach(function(t, e) {
                            var n = a.applyTransform(t, u);
                            g[e + 0] = d && (l.left - n[0]) / d,
                            g[e + 4] = f && (l.top - n[1]) / f,
                            g[e + 8] = d && (l.right - n[0]) / d,
                            g[e + 12] = f && (l.bottom - n[1]) / f,
                            g[e + 16] = f && (l.left - n[0]) / -f,
                            g[e + 20] = d && (l.top - n[1]) / d,
                            g[e + 24] = f && (l.right - n[0]) / -f,
                            g[e + 28] = d && (l.bottom - n[1]) / d,
                            g[e + 32] = d && (l.left - n[0]) / -d,
                            g[e + 36] = f && (l.top - n[1]) / -f,
                            g[e + 40] = d && (l.right - n[0]) / -d,
                            g[e + 44] = f && (l.bottom - n[1]) / -f,
                            g[e + 48] = f && (l.left - n[0]) / f,
                            g[e + 52] = d && (l.top - n[1]) / -d,
                            g[e + 56] = f && (l.right - n[0]) / f,
                            g[e + 60] = d && (l.bottom - n[1]) / -d
                        });
                        var m = function(t, e, n) {
                            for (var r = 0, i = 0; i < n; i++) {
                                var a = t[e++];
                                a > 0 && (r = r ? Math.min(a, r) : a)
                            }
                            return r
                        }
                          , A = 1 + Math.min(Math.abs(d), Math.abs(f));
                        c.paddingLeft = m(g, 32, 16) / A,
                        c.paddingTop = m(g, 48, 16) / A,
                        c.paddingRight = m(g, 0, 16) / A,
                        c.paddingBottom = m(g, 16, 16) / A,
                        t._textDivProperties.set(o, c)
                    } else
                        c.paddingLeft = e[s].left - r[s].left,
                        c.paddingTop = e[s].top - r[s].top,
                        c.paddingRight = r[s].right - e[s].right,
                        c.paddingBottom = r[s].bottom - e[s].bottom,
                        t._textDivProperties.set(o, c)
                }
            }
            function i(t, e, n) {
                var r = n.map(function(t, e) {
                    return {
                        x1: t.left,
                        y1: t.top,
                        x2: t.right,
                        y2: t.bottom,
                        index: e,
                        x1New: void 0,
                        x2New: void 0
                    }
                });
                l(t, r);
                var i = new Array(n.length);
                return r.forEach(function(t) {
                    var e = t.index;
                    i[e] = {
                        left: t.x1New,
                        top: 0,
                        right: t.x2New,
                        bottom: 0
                    }
                }),
                n.map(function(e, n) {
                    var a = i[n]
                      , s = r[n];
                    s.x1 = e.top,
                    s.y1 = t - a.right,
                    s.x2 = e.bottom,
                    s.y2 = t - a.left,
                    s.index = n,
                    s.x1New = void 0,
                    s.x2New = void 0
                }),
                l(e, r),
                r.forEach(function(t) {
                    var e = t.index;
                    i[e].top = t.x1New,
                    i[e].bottom = t.x2New
                }),
                i
            }
            function l(t, e) {
                e.sort(function(t, e) {
                    return t.x1 - e.x1 || t.index - e.index
                });
                var n = [{
                    start: -1 / 0,
                    end: 1 / 0,
                    boundary: {
                        x1: -1 / 0,
                        y1: -1 / 0,
                        x2: 0,
                        y2: 1 / 0,
                        index: -1,
                        x1New: 0,
                        x2New: 0
                    }
                }];
                e.forEach(function(t) {
                    for (var e = 0; e < n.length && n[e].end <= t.y1; )
                        e++;
                    for (var r = n.length - 1; r >= 0 && n[r].start >= t.y2; )
                        r--;
                    var i, a, s, o, c = -1 / 0;
                    for (s = e; s <= r; s++) {
                        var l;
                        (l = (a = (i = n[s]).boundary).x2 > t.x1 ? a.index > t.index ? a.x1New : t.x1 : void 0 === a.x2New ? (a.x2 + t.x1) / 2 : a.x2New) > c && (c = l)
                    }
                    for (t.x1New = c,
                    s = e; s <= r; s++)
                        void 0 === (a = (i = n[s]).boundary).x2New ? a.x2 > t.x1 ? a.index > t.index && (a.x2New = a.x2) : a.x2New = c : a.x2New > c && (a.x2New = Math.max(c, a.x2));
                    var h = []
                      , u = null;
                    for (s = e; s <= r; s++) {
                        var d = (a = (i = n[s]).boundary).x2 > t.x2 ? a : t;
                        u === d ? h[h.length - 1].end = i.end : (h.push({
                            start: i.start,
                            end: i.end,
                            boundary: d
                        }),
                        u = d)
                    }
                    for (n[e].start < t.y1 && (h[0].start = t.y1,
                    h.unshift({
                        start: n[e].start,
                        end: t.y1,
                        boundary: n[e].boundary
                    })),
                    t.y2 < n[r].end && (h[h.length - 1].end = t.y2,
                    h.push({
                        start: t.y2,
                        end: n[r].end,
                        boundary: n[r].boundary
                    })),
                    s = e; s <= r; s++)
                        if (i = n[s],
                        void 0 === (a = i.boundary).x2New) {
                            var f = !1;
                            for (o = e - 1; !f && o >= 0 && n[o].start >= a.y1; o--)
                                f = n[o].boundary === a;
                            for (o = r + 1; !f && o < n.length && n[o].end <= a.y2; o++)
                                f = n[o].boundary === a;
                            for (o = 0; !f && o < h.length; o++)
                                f = h[o].boundary === a;
                            f || (a.x2New = c)
                        }
                    Array.prototype.splice.apply(n, [e, r - e + 1].concat(h))
                }),
                n.forEach(function(e) {
                    var n = e.boundary;
                    void 0 === n.x2New && (n.x2New = Math.max(t, n.x2))
                })
            }
            function h(t, e, n, r, i) {
                this._textContent = t,
                this._container = e,
                this._viewport = n,
                this._textDivs = r || [],
                this._textDivProperties = new WeakMap,
                this._renderingDone = !1,
                this._canceled = !1,
                this._capability = s(),
                this._renderTimer = null,
                this._bounds = [],
                this._enhanceTextSelection = !!i
            }
            function u(t) {
                var e = new h(t.textContent,t.container,t.viewport,t.textDivs,t.enhanceTextSelection);
                return e._render(t.timeout),
                e
            }
            var d = 1e5
              , f = /\S/
              , p = ["left: ", 0, "px; top: ", 0, "px; font-size: ", 0, "px; font-family: ", "", ";"];
            return h.prototype = {
                get promise() {
                    return this._capability.promise
                },
                cancel: function() {
                    this._canceled = !0,
                    null !== this._renderTimer && (clearTimeout(this._renderTimer),
                    this._renderTimer = null),
                    this._capability.reject("canceled")
                },
                _render: function(t) {
                    for (var r = this._textContent.items, i = this._textContent.styles, a = 0, s = r.length; a < s; a++)
                        e(this, r[a], i);
                    if (t) {
                        var o = this;
                        this._renderTimer = setTimeout(function() {
                            n(o),
                            o._renderTimer = null
                        }, t)
                    } else
                        n(this)
                },
                expandTextDivs: function(t) {
                    if (this._enhanceTextSelection && this._renderingDone) {
                        null !== this._bounds && (r(this),
                        this._bounds = null);
                        for (var e = 0, n = this._textDivs.length; e < n; e++) {
                            var i = this._textDivs[e]
                              , a = this._textDivProperties.get(i);
                            if (!a.isWhitespace)
                                if (t) {
                                    var s = ""
                                      , c = "";
                                    1 !== a.scale && (s = "scaleX(" + a.scale + ")"),
                                    0 !== a.angle && (s = "rotate(" + a.angle + "deg) " + s),
                                    0 !== a.paddingLeft && (c += " padding-left: " + a.paddingLeft / a.scale + "px;",
                                    s += " translateX(" + -a.paddingLeft / a.scale + "px)"),
                                    0 !== a.paddingTop && (c += " padding-top: " + a.paddingTop + "px;",
                                    s += " translateY(" + -a.paddingTop + "px)"),
                                    0 !== a.paddingRight && (c += " padding-right: " + a.paddingRight / a.scale + "px;"),
                                    0 !== a.paddingBottom && (c += " padding-bottom: " + a.paddingBottom + "px;"),
                                    "" !== c && i.setAttribute("style", a.style + c),
                                    "" !== s && o.setProp("transform", i, s)
                                } else
                                    i.style.padding = 0,
                                    o.setProp("transform", i, a.originalTransform || "")
                        }
                    }
                }
            },
            u
        }();
        e.renderTextLayer = l
    }
    , function(t, e, n) {
        "use strict";
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t.replace(/>\\376\\377([^<]+)/g, function(t, e) {
                for (var n = e.replace(/\\([0-3])([0-7])([0-7])/g, function(t, e, n, r) {
                    return String.fromCharCode(64 * e + 8 * n + 1 * r)
                }), r = "", i = 0; i < n.length; i += 2) {
                    var a = 256 * n.charCodeAt(i) + n.charCodeAt(i + 1);
                    r += a >= 32 && a < 127 && 60 !== a && 62 !== a && 38 !== a ? String.fromCharCode(a) : "&#x" + (65536 + a).toString(16).substring(1) + ";"
                }
                return ">" + r
            })
        }
        function i(t) {
            "string" == typeof t ? (t = r(t),
            t = (new DOMParser).parseFromString(t, "application/xml")) : t instanceof Document || a("Metadata: Invalid metadata object"),
            this.metaDocument = t,
            this.metadata = Object.create(null),
            this.parse()
        }
        var a = n(0).error;
        i.prototype = {
            parse: function() {
                var t = this.metaDocument.documentElement;
                if ("rdf:rdf" !== t.nodeName.toLowerCase())
                    for (t = t.firstChild; t && "rdf:rdf" !== t.nodeName.toLowerCase(); )
                        t = t.nextSibling;
                var e = t ? t.nodeName.toLowerCase() : null;
                if (t && "rdf:rdf" === e && t.hasChildNodes()) {
                    var n, r, i, a, s, o, c, l = t.childNodes;
                    for (a = 0,
                    o = l.length; a < o; a++)
                        if ("rdf:description" === (n = l[a]).nodeName.toLowerCase())
                            for (s = 0,
                            c = n.childNodes.length; s < c; s++)
                                "#text" !== n.childNodes[s].nodeName.toLowerCase() && (i = (r = n.childNodes[s]).nodeName.toLowerCase(),
                                this.metadata[i] = r.textContent.trim())
                }
            },
            get: function(t) {
                return this.metadata[t] || null
            },
            has: function(t) {
                return void 0 !== this.metadata[t]
            }
        },
        e.Metadata = i
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(1)
          , a = r.shadow
          , s = i.getDefaultSetting
          , o = function() {
            function t(t, e, n) {
                var r = t.createShader(n);
                if (t.shaderSource(r, e),
                t.compileShader(r),
                !t.getShaderParameter(r, t.COMPILE_STATUS)) {
                    var i = t.getShaderInfoLog(r);
                    throw new Error("Error during shader compilation: " + i)
                }
                return r
            }
            function e(e, n) {
                return t(e, n, e.VERTEX_SHADER)
            }
            function n(e, n) {
                return t(e, n, e.FRAGMENT_SHADER)
            }
            function r(t, e) {
                for (var n = t.createProgram(), r = 0, i = e.length; r < i; ++r)
                    t.attachShader(n, e[r]);
                if (t.linkProgram(n),
                !t.getProgramParameter(n, t.LINK_STATUS)) {
                    var a = t.getProgramInfoLog(n);
                    throw new Error("Error during program linking: " + a)
                }
                return n
            }
            function i(t, e, n) {
                t.activeTexture(n);
                var r = t.createTexture();
                return t.bindTexture(t.TEXTURE_2D, r),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
                r
            }
            function o() {
                f || (p = document.createElement("canvas"),
                f = p.getContext("webgl", {
                    premultipliedalpha: !1
                }))
            }
            function c() {
                var t, i;
                o(),
                t = p,
                p = null,
                i = f,
                f = null;
                var a = r(i, [e(i, g), n(i, m)]);
                i.useProgram(a);
                var s = {};
                s.gl = i,
                s.canvas = t,
                s.resolutionLocation = i.getUniformLocation(a, "u_resolution"),
                s.positionLocation = i.getAttribLocation(a, "a_position"),
                s.backdropLocation = i.getUniformLocation(a, "u_backdrop"),
                s.subtypeLocation = i.getUniformLocation(a, "u_subtype");
                var c = i.getAttribLocation(a, "a_texCoord")
                  , l = i.getUniformLocation(a, "u_image")
                  , h = i.getUniformLocation(a, "u_mask")
                  , u = i.createBuffer();
                i.bindBuffer(i.ARRAY_BUFFER, u),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), i.STATIC_DRAW),
                i.enableVertexAttribArray(c),
                i.vertexAttribPointer(c, 2, i.FLOAT, !1, 0, 0),
                i.uniform1i(l, 0),
                i.uniform1i(h, 1),
                A = s
            }
            function l(t, e, n) {
                var r = t.width
                  , a = t.height;
                A || c();
                var s = A
                  , o = s.canvas
                  , l = s.gl;
                o.width = r,
                o.height = a,
                l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight),
                l.uniform2f(s.resolutionLocation, r, a),
                n.backdrop ? l.uniform4f(s.resolutionLocation, n.backdrop[0], n.backdrop[1], n.backdrop[2], 1) : l.uniform4f(s.resolutionLocation, 0, 0, 0, 0),
                l.uniform1i(s.subtypeLocation, "Luminosity" === n.subtype ? 1 : 0);
                var h = i(l, t, l.TEXTURE0)
                  , u = i(l, e, l.TEXTURE1)
                  , d = l.createBuffer();
                return l.bindBuffer(l.ARRAY_BUFFER, d),
                l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, r, 0, 0, a, 0, a, r, 0, r, a]), l.STATIC_DRAW),
                l.enableVertexAttribArray(s.positionLocation),
                l.vertexAttribPointer(s.positionLocation, 2, l.FLOAT, !1, 0, 0),
                l.clearColor(0, 0, 0, 0),
                l.enable(l.BLEND),
                l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA),
                l.clear(l.COLOR_BUFFER_BIT),
                l.drawArrays(l.TRIANGLES, 0, 6),
                l.flush(),
                l.deleteTexture(h),
                l.deleteTexture(u),
                l.deleteBuffer(d),
                o
            }
            function h() {
                var t, i;
                o(),
                t = p,
                p = null,
                i = f,
                f = null;
                var a = r(i, [e(i, v), n(i, b)]);
                i.useProgram(a);
                var s = {};
                s.gl = i,
                s.canvas = t,
                s.resolutionLocation = i.getUniformLocation(a, "u_resolution"),
                s.scaleLocation = i.getUniformLocation(a, "u_scale"),
                s.offsetLocation = i.getUniformLocation(a, "u_offset"),
                s.positionLocation = i.getAttribLocation(a, "a_position"),
                s.colorLocation = i.getAttribLocation(a, "a_color"),
                y = s
            }
            function u(t, e, n, r, i) {
                y || h();
                var a = y
                  , s = a.canvas
                  , o = a.gl;
                s.width = t,
                s.height = e,
                o.viewport(0, 0, o.drawingBufferWidth, o.drawingBufferHeight),
                o.uniform2f(a.resolutionLocation, t, e);
                var c, l, u, d = 0;
                for (c = 0,
                l = r.length; c < l; c++)
                    switch (r[c].type) {
                    case "lattice":
                        d += ((u = r[c].coords.length / r[c].verticesPerRow | 0) - 1) * (r[c].verticesPerRow - 1) * 6;
                        break;
                    case "triangles":
                        d += r[c].coords.length
                    }
                var f = new Float32Array(2 * d)
                  , p = new Uint8Array(3 * d)
                  , g = i.coords
                  , m = i.colors
                  , A = 0
                  , v = 0;
                for (c = 0,
                l = r.length; c < l; c++) {
                    var b = r[c]
                      , x = b.coords
                      , S = b.colors;
                    switch (b.type) {
                    case "lattice":
                        var w = b.verticesPerRow;
                        u = x.length / w | 0;
                        for (var k = 1; k < u; k++)
                            for (var C = k * w + 1, _ = 1; _ < w; _++,
                            C++)
                                f[A] = g[x[C - w - 1]],
                                f[A + 1] = g[x[C - w - 1] + 1],
                                f[A + 2] = g[x[C - w]],
                                f[A + 3] = g[x[C - w] + 1],
                                f[A + 4] = g[x[C - 1]],
                                f[A + 5] = g[x[C - 1] + 1],
                                p[v] = m[S[C - w - 1]],
                                p[v + 1] = m[S[C - w - 1] + 1],
                                p[v + 2] = m[S[C - w - 1] + 2],
                                p[v + 3] = m[S[C - w]],
                                p[v + 4] = m[S[C - w] + 1],
                                p[v + 5] = m[S[C - w] + 2],
                                p[v + 6] = m[S[C - 1]],
                                p[v + 7] = m[S[C - 1] + 1],
                                p[v + 8] = m[S[C - 1] + 2],
                                f[A + 6] = f[A + 2],
                                f[A + 7] = f[A + 3],
                                f[A + 8] = f[A + 4],
                                f[A + 9] = f[A + 5],
                                f[A + 10] = g[x[C]],
                                f[A + 11] = g[x[C] + 1],
                                p[v + 9] = p[v + 3],
                                p[v + 10] = p[v + 4],
                                p[v + 11] = p[v + 5],
                                p[v + 12] = p[v + 6],
                                p[v + 13] = p[v + 7],
                                p[v + 14] = p[v + 8],
                                p[v + 15] = m[S[C]],
                                p[v + 16] = m[S[C] + 1],
                                p[v + 17] = m[S[C] + 2],
                                A += 12,
                                v += 18;
                        break;
                    case "triangles":
                        for (var T = 0, P = x.length; T < P; T++)
                            f[A] = g[x[T]],
                            f[A + 1] = g[x[T] + 1],
                            p[v] = m[S[T]],
                            p[v + 1] = m[S[T] + 1],
                            p[v + 2] = m[S[T] + 2],
                            A += 2,
                            v += 3
                    }
                }
                n ? o.clearColor(n[0] / 255, n[1] / 255, n[2] / 255, 1) : o.clearColor(0, 0, 0, 0),
                o.clear(o.COLOR_BUFFER_BIT);
                var L = o.createBuffer();
                o.bindBuffer(o.ARRAY_BUFFER, L),
                o.bufferData(o.ARRAY_BUFFER, f, o.STATIC_DRAW),
                o.enableVertexAttribArray(a.positionLocation),
                o.vertexAttribPointer(a.positionLocation, 2, o.FLOAT, !1, 0, 0);
                var E = o.createBuffer();
                return o.bindBuffer(o.ARRAY_BUFFER, E),
                o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW),
                o.enableVertexAttribArray(a.colorLocation),
                o.vertexAttribPointer(a.colorLocation, 3, o.UNSIGNED_BYTE, !1, 0, 0),
                o.uniform2f(a.scaleLocation, i.scaleX, i.scaleY),
                o.uniform2f(a.offsetLocation, i.offsetX, i.offsetY),
                o.drawArrays(o.TRIANGLES, 0, d),
                o.flush(),
                o.deleteBuffer(L),
                o.deleteBuffer(E),
                s
            }
            function d() {
                A && A.canvas && (A.canvas.width = 0,
                A.canvas.height = 0),
                y && y.canvas && (y.canvas.width = 0,
                y.canvas.height = 0),
                A = null,
                y = null
            }
            var f, p, g = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ", m = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ", A = null, v = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ", b = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ", y = null;
            return {
                get isEnabled() {
                    if (s("disableWebGL"))
                        return !1;
                    var t = !1;
                    try {
                        o(),
                        t = !!f
                    } catch (t) {}
                    return a(this, "isEnabled", t)
                },
                composeSMask: l,
                drawFigures: u,
                clear: d
            }
        }();
        e.WebGLUtils = o
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(1)
          , a = n(3)
          , s = n(2)
          , o = n(5)
          , c = n(7)
          , l = n(4)
          , h = r.globalScope
          , u = r.deprecated
          , d = r.warn
          , f = i.LinkTarget
          , p = i.DEFAULT_LINK_REL
          , g = "undefined" == typeof window;
        h.PDFJS || (h.PDFJS = {});
        var m = h.PDFJS;
        m.version = "1.8.188",
        m.build = "ad1023ff",
        m.pdfBug = !1,
        void 0 !== m.verbosity && r.setVerbosityLevel(m.verbosity),
        delete m.verbosity,
        Object.defineProperty(m, "verbosity", {
            get: function() {
                return r.getVerbosityLevel()
            },
            set: function(t) {
                r.setVerbosityLevel(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        m.VERBOSITY_LEVELS = r.VERBOSITY_LEVELS,
        m.OPS = r.OPS,
        m.UNSUPPORTED_FEATURES = r.UNSUPPORTED_FEATURES,
        m.isValidUrl = i.isValidUrl,
        m.shadow = r.shadow,
        m.createBlob = r.createBlob,
        m.createObjectURL = function(t, e) {
            return r.createObjectURL(t, e, m.disableCreateObjectURL)
        }
        ,
        Object.defineProperty(m, "isLittleEndian", {
            configurable: !0,
            get: function() {
                var t = r.isLittleEndian();
                return r.shadow(m, "isLittleEndian", t)
            }
        }),
        m.removeNullCharacters = r.removeNullCharacters,
        m.PasswordResponses = r.PasswordResponses,
        m.PasswordException = r.PasswordException,
        m.UnknownErrorException = r.UnknownErrorException,
        m.InvalidPDFException = r.InvalidPDFException,
        m.MissingPDFException = r.MissingPDFException,
        m.UnexpectedResponseException = r.UnexpectedResponseException,
        m.Util = r.Util,
        m.PageViewport = r.PageViewport,
        m.createPromiseCapability = r.createPromiseCapability,
        m.maxImageSize = void 0 === m.maxImageSize ? -1 : m.maxImageSize,
        m.cMapUrl = void 0 === m.cMapUrl ? null : m.cMapUrl,
        m.cMapPacked = void 0 !== m.cMapPacked && m.cMapPacked,
        m.disableFontFace = void 0 !== m.disableFontFace && m.disableFontFace,
        m.imageResourcesPath = void 0 === m.imageResourcesPath ? "" : m.imageResourcesPath,
        m.disableWorker = void 0 !== m.disableWorker && m.disableWorker,
        m.workerSrc = void 0 === m.workerSrc ? null : m.workerSrc,
        m.workerPort = void 0 === m.workerPort ? null : m.workerPort,
        m.disableRange = void 0 !== m.disableRange && m.disableRange,
        m.disableStream = void 0 !== m.disableStream && m.disableStream,
        m.disableAutoFetch = void 0 !== m.disableAutoFetch && m.disableAutoFetch,
        m.pdfBug = void 0 !== m.pdfBug && m.pdfBug,
        m.postMessageTransfers = void 0 === m.postMessageTransfers || m.postMessageTransfers,
        m.disableCreateObjectURL = void 0 !== m.disableCreateObjectURL && m.disableCreateObjectURL,
        m.disableWebGL = void 0 === m.disableWebGL || m.disableWebGL,
        m.externalLinkTarget = void 0 === m.externalLinkTarget ? f.NONE : m.externalLinkTarget,
        m.externalLinkRel = void 0 === m.externalLinkRel ? p : m.externalLinkRel,
        m.isEvalSupported = void 0 === m.isEvalSupported || m.isEvalSupported,
        m.pdfjsNext = void 0 !== m.pdfjsNext && m.pdfjsNext;
        var A = m.openExternalLinksInNewWindow;
        delete m.openExternalLinksInNewWindow,
        Object.defineProperty(m, "openExternalLinksInNewWindow", {
            get: function() {
                return m.externalLinkTarget === f.BLANK
            },
            set: function(t) {
                t && u('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'),
                m.externalLinkTarget === f.NONE ? m.externalLinkTarget = t ? f.BLANK : f.NONE : d("PDFJS.externalLinkTarget is already initialized")
            },
            enumerable: !0,
            configurable: !0
        }),
        A && (m.openExternalLinksInNewWindow = A),
        m.getDocument = a.getDocument,
        m.PDFDataRangeTransport = a.PDFDataRangeTransport,
        m.PDFWorker = a.PDFWorker,
        Object.defineProperty(m, "hasCanvasTypedArrays", {
            configurable: !0,
            get: function() {
                var t = i.hasCanvasTypedArrays();
                return r.shadow(m, "hasCanvasTypedArrays", t)
            }
        }),
        m.CustomStyle = i.CustomStyle,
        m.LinkTarget = f,
        m.addLinkAttributes = i.addLinkAttributes,
        m.getFilenameFromUrl = i.getFilenameFromUrl,
        m.isExternalLinkTargetSet = i.isExternalLinkTargetSet,
        m.AnnotationLayer = s.AnnotationLayer,
        m.renderTextLayer = o.renderTextLayer,
        m.Metadata = c.Metadata,
        m.SVGGraphics = l.SVGGraphics,
        m.UnsupportedManager = a._UnsupportedManager,
        e.globalScope = h,
        e.isWorker = g,
        e.PDFJS = h.PDFJS
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            t.mozCurrentTransform || (t._originalSave = t.save,
            t._originalRestore = t.restore,
            t._originalRotate = t.rotate,
            t._originalScale = t.scale,
            t._originalTranslate = t.translate,
            t._originalTransform = t.transform,
            t._originalSetTransform = t.setTransform,
            t._transformMatrix = t._transformMatrix || [1, 0, 0, 1, 0, 0],
            t._transformStack = [],
            Object.defineProperty(t, "mozCurrentTransform", {
                get: function() {
                    return this._transformMatrix
                }
            }),
            Object.defineProperty(t, "mozCurrentTransformInverse", {
                get: function() {
                    var t = this._transformMatrix
                      , e = t[0]
                      , n = t[1]
                      , r = t[2]
                      , i = t[3]
                      , a = t[4]
                      , s = t[5]
                      , o = e * i - n * r
                      , c = n * r - e * i;
                    return [i / o, n / c, r / c, e / o, (i * a - r * s) / c, (n * a - e * s) / o]
                }
            }),
            t.save = function() {
                var t = this._transformMatrix;
                this._transformStack.push(t),
                this._transformMatrix = t.slice(0, 6),
                this._originalSave()
            }
            ,
            t.restore = function() {
                var t = this._transformStack.pop();
                t && (this._transformMatrix = t,
                this._originalRestore())
            }
            ,
            t.translate = function(t, e) {
                var n = this._transformMatrix;
                n[4] = n[0] * t + n[2] * e + n[4],
                n[5] = n[1] * t + n[3] * e + n[5],
                this._originalTranslate(t, e)
            }
            ,
            t.scale = function(t, e) {
                var n = this._transformMatrix;
                n[0] = n[0] * t,
                n[1] = n[1] * t,
                n[2] = n[2] * e,
                n[3] = n[3] * e,
                this._originalScale(t, e)
            }
            ,
            t.transform = function(e, n, r, i, a, s) {
                var o = this._transformMatrix;
                this._transformMatrix = [o[0] * e + o[2] * n, o[1] * e + o[3] * n, o[0] * r + o[2] * i, o[1] * r + o[3] * i, o[0] * a + o[2] * s + o[4], o[1] * a + o[3] * s + o[5]],
                t._originalTransform(e, n, r, i, a, s)
            }
            ,
            t.setTransform = function(e, n, r, i, a, s) {
                this._transformMatrix = [e, n, r, i, a, s],
                t._originalSetTransform(e, n, r, i, a, s)
            }
            ,
            t.rotate = function(t) {
                var e = Math.cos(t)
                  , n = Math.sin(t)
                  , r = this._transformMatrix;
                this._transformMatrix = [r[0] * e + r[2] * n, r[1] * e + r[3] * n, r[0] * -n + r[2] * e, r[1] * -n + r[3] * e, r[4], r[5]],
                this._originalRotate(t)
            }
            )
        }
        function i(t) {
            var e, n, r, i, a = 1e3, s = t.width, o = t.height, c = s + 1, l = new Uint8Array(c * (o + 1)), h = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), u = s + 7 & -8, d = t.data, f = new Uint8Array(u * o), p = 0;
            for (e = 0,
            i = d.length; e < i; e++)
                for (var g = 128, m = d[e]; g > 0; )
                    f[p++] = m & g ? 0 : 255,
                    g >>= 1;
            var A = 0;
            for (0 !== f[p = 0] && (l[0] = 1,
            ++A),
            n = 1; n < s; n++)
                f[p] !== f[p + 1] && (l[n] = f[p] ? 2 : 1,
                ++A),
                p++;
            for (0 !== f[p] && (l[n] = 2,
            ++A),
            e = 1; e < o; e++) {
                r = e * c,
                f[(p = e * u) - u] !== f[p] && (l[r] = f[p] ? 1 : 8,
                ++A);
                var v = (f[p] ? 4 : 0) + (f[p - u] ? 8 : 0);
                for (n = 1; n < s; n++)
                    h[v = (v >> 2) + (f[p + 1] ? 4 : 0) + (f[p - u + 1] ? 8 : 0)] && (l[r + n] = h[v],
                    ++A),
                    p++;
                if (f[p - u] !== f[p] && (l[r + n] = f[p] ? 2 : 4,
                ++A),
                A > a)
                    return null
            }
            for (r = e * c,
            0 !== f[p = u * (o - 1)] && (l[r] = 8,
            ++A),
            n = 1; n < s; n++)
                f[p] !== f[p + 1] && (l[r + n] = f[p] ? 4 : 8,
                ++A),
                p++;
            if (0 !== f[p] && (l[r + n] = 4,
            ++A),
            A > a)
                return null;
            var b = new Int32Array([0, c, -1, 0, -c, 0, 0, 0, 1])
              , y = [];
            for (e = 0; A && e <= o; e++) {
                for (var x = e * c, S = x + s; x < S && !l[x]; )
                    x++;
                if (x !== S) {
                    var w, k = [x % c, e], C = l[x], _ = x;
                    do {
                        var T = b[C];
                        do {
                            x += T
                        } while (!l[x]);
                        5 !== (w = l[x]) && 10 !== w ? (C = w,
                        l[x] = 0) : (C = w & 51 * C >> 4,
                        l[x] &= C >> 2 | C << 2),
                        k.push(x % c),
                        k.push(x / c | 0),
                        --A
                    } while (_ !== x);
                    y.push(k),
                    --e
                }
            }
            return function(t) {
                t.save(),
                t.scale(1 / s, -1 / o),
                t.translate(0, -o),
                t.beginPath();
                for (var e = 0, n = y.length; e < n; e++) {
                    var r = y[e];
                    t.moveTo(r[0], r[1]);
                    for (var i = 2, a = r.length; i < a; i += 2)
                        t.lineTo(r[i], r[i + 1])
                }
                t.fill(),
                t.beginPath(),
                t.restore()
            }
        }
        var a = n(0)
          , s = n(1)
          , o = n(12)
          , c = n(8)
          , l = a.FONT_IDENTITY_MATRIX
          , h = a.IDENTITY_MATRIX
          , u = a.ImageKind
          , d = a.OPS
          , f = a.TextRenderingMode
          , p = a.Uint32ArrayView
          , g = a.Util
          , m = a.assert
          , A = a.info
          , v = a.isNum
          , b = a.isArray
          , y = a.isLittleEndian
          , x = a.error
          , S = a.shadow
          , w = a.warn
          , k = o.TilingPattern
          , C = o.getShadingPatternFromIR
          , _ = c.WebGLUtils
          , T = s.hasCanvasTypedArrays
          , P = 16
          , L = 100
          , E = 4096
          , R = .65
          , I = !0
          , F = 1e3
          , N = 16
          , M = {
            get value() {
                return S(M, "value", T())
            }
        }
          , D = {
            get value() {
                return S(D, "value", y())
            }
        }
          , O = function() {
            function t(t) {
                this.canvasFactory = t,
                this.cache = Object.create(null)
            }
            return t.prototype = {
                getCanvas: function(t, e, n, i) {
                    var a;
                    return void 0 !== this.cache[t] ? (a = this.cache[t],
                    this.canvasFactory.reset(a, e, n),
                    a.context.setTransform(1, 0, 0, 1, 0, 0)) : (a = this.canvasFactory.create(e, n),
                    this.cache[t] = a),
                    i && r(a.context),
                    a
                },
                clear: function() {
                    for (var t in this.cache) {
                        var e = this.cache[t];
                        this.canvasFactory.destroy(e),
                        delete this.cache[t]
                    }
                }
            },
            t
        }()
          , j = function() {
            function t(t) {
                this.alphaIsShape = !1,
                this.fontSize = 0,
                this.fontSizeScale = 1,
                this.textMatrix = h,
                this.textMatrixScale = 1,
                this.fontMatrix = l,
                this.leading = 0,
                this.x = 0,
                this.y = 0,
                this.lineX = 0,
                this.lineY = 0,
                this.charSpacing = 0,
                this.wordSpacing = 0,
                this.textHScale = 1,
                this.textRenderingMode = f.FILL,
                this.textRise = 0,
                this.fillColor = "#000000",
                this.strokeColor = "#000000",
                this.patternFill = !1,
                this.fillAlpha = 1,
                this.strokeAlpha = 1,
                this.lineWidth = 1,
                this.activeSMask = null,
                this.resumeSMaskCtx = null,
                this.old = t
            }
            return t.prototype = {
                clone: function() {
                    return Object.create(this)
                },
                setCurrentPoint: function(t, e) {
                    this.x = t,
                    this.y = e
                }
            },
            t
        }()
          , U = function() {
            function t(t, e, n, i, a) {
                this.ctx = t,
                this.current = new j,
                this.stateStack = [],
                this.pendingClip = null,
                this.pendingEOFill = !1,
                this.res = null,
                this.xobjs = null,
                this.commonObjs = e,
                this.objs = n,
                this.canvasFactory = i,
                this.imageLayer = a,
                this.groupStack = [],
                this.processingType3 = null,
                this.baseTransform = null,
                this.baseTransformStack = [],
                this.groupLevel = 0,
                this.smaskStack = [],
                this.smaskCounter = 0,
                this.tempSMask = null,
                this.cachedCanvases = new O(this.canvasFactory),
                t && r(t),
                this.cachedGetSinglePixelWidth = null
            }
            function e(t, e) {
                if ("undefined" != typeof ImageData && e instanceof ImageData)
                    t.putImageData(e, 0, 0);
                else {
                    var n, r, i, a, s, o = e.height, c = e.width, l = o % N, h = (o - l) / N, d = 0 === l ? h : h + 1, f = t.createImageData(c, N), g = 0, m = e.data, A = f.data;
                    if (e.kind === u.GRAYSCALE_1BPP) {
                        var v = m.byteLength
                          , b = M.value ? new Uint32Array(A.buffer) : new p(A)
                          , y = b.length
                          , S = c + 7 >> 3
                          , w = 4294967295
                          , k = D.value || !M.value ? 4278190080 : 255;
                        for (r = 0; r < d; r++) {
                            for (a = r < h ? N : l,
                            n = 0,
                            i = 0; i < a; i++) {
                                for (var C = v - g, _ = 0, T = C > S ? c : 8 * C - 7, P = -8 & T, L = 0, E = 0; _ < P; _ += 8)
                                    E = m[g++],
                                    b[n++] = 128 & E ? w : k,
                                    b[n++] = 64 & E ? w : k,
                                    b[n++] = 32 & E ? w : k,
                                    b[n++] = 16 & E ? w : k,
                                    b[n++] = 8 & E ? w : k,
                                    b[n++] = 4 & E ? w : k,
                                    b[n++] = 2 & E ? w : k,
                                    b[n++] = 1 & E ? w : k;
                                for (; _ < T; _++)
                                    0 === L && (E = m[g++],
                                    L = 128),
                                    b[n++] = E & L ? w : k,
                                    L >>= 1
                            }
                            for (; n < y; )
                                b[n++] = 0;
                            t.putImageData(f, 0, r * N)
                        }
                    } else if (e.kind === u.RGBA_32BPP) {
                        for (i = 0,
                        s = c * N * 4,
                        r = 0; r < h; r++)
                            A.set(m.subarray(g, g + s)),
                            g += s,
                            t.putImageData(f, 0, i),
                            i += N;
                        r < d && (s = c * l * 4,
                        A.set(m.subarray(g, g + s)),
                        t.putImageData(f, 0, i))
                    } else if (e.kind === u.RGB_24BPP)
                        for (s = c * (a = N),
                        r = 0; r < d; r++) {
                            for (r >= h && (s = c * (a = l)),
                            n = 0,
                            i = s; i--; )
                                A[n++] = m[g++],
                                A[n++] = m[g++],
                                A[n++] = m[g++],
                                A[n++] = 255;
                            t.putImageData(f, 0, r * N)
                        }
                    else
                        x("bad image kind: " + e.kind)
                }
            }
            function n(t, e) {
                for (var n = e.height, r = e.width, i = n % N, a = (n - i) / N, s = 0 === i ? a : a + 1, o = t.createImageData(r, N), c = 0, l = e.data, h = o.data, u = 0; u < s; u++) {
                    for (var d = u < a ? N : i, f = 3, p = 0; p < d; p++)
                        for (var g = 0, m = 0; m < r; m++) {
                            if (!g) {
                                var A = l[c++];
                                g = 128
                            }
                            h[f] = A & g ? 0 : 255,
                            f += 4,
                            g >>= 1
                        }
                    t.putImageData(o, 0, u * N)
                }
            }
            function a(t, e) {
                for (var n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], r = 0, i = n.length; r < i; r++) {
                    var a = n[r];
                    void 0 !== t[a] && (e[a] = t[a])
                }
                void 0 !== t.setLineDash && (e.setLineDash(t.getLineDash()),
                e.lineDashOffset = t.lineDashOffset)
            }
            function s(t, e, n, r) {
                for (var i = t.length, a = 3; a < i; a += 4) {
                    var s = t[a];
                    if (0 === s)
                        t[a - 3] = e,
                        t[a - 2] = n,
                        t[a - 1] = r;
                    else if (s < 255) {
                        var o = 255 - s;
                        t[a - 3] = t[a - 3] * s + e * o >> 8,
                        t[a - 2] = t[a - 2] * s + n * o >> 8,
                        t[a - 1] = t[a - 1] * s + r * o >> 8
                    }
                }
            }
            function o(t, e, n) {
                for (var r = t.length, i = 1 / 255, a = 3; a < r; a += 4) {
                    var s = n ? n[t[a]] : t[a];
                    e[a] = e[a] * s * i | 0
                }
            }
            function c(t, e, n) {
                for (var r = t.length, i = 3; i < r; i += 4) {
                    var a = 77 * t[i - 3] + 152 * t[i - 2] + 28 * t[i - 1];
                    e[i] = n ? e[i] * n[a >> 8] >> 8 : e[i] * a >> 16
                }
            }
            function y(t, e, n, r, i, a, l) {
                var h, u = !!a, d = u ? a[0] : 0, f = u ? a[1] : 0, p = u ? a[2] : 0;
                h = "Luminosity" === i ? c : o;
                for (var g = 1048576, m = Math.min(r, Math.ceil(g / n)), A = 0; A < r; A += m) {
                    var v = Math.min(m, r - A)
                      , b = t.getImageData(0, A, n, v)
                      , y = e.getImageData(0, A, n, v);
                    u && s(b.data, d, f, p),
                    h(b.data, y.data, l),
                    t.putImageData(y, 0, A)
                }
            }
            function T(t, e, n) {
                var r = e.canvas
                  , i = e.context;
                t.setTransform(e.scaleX, 0, 0, e.scaleY, e.offsetX, e.offsetY);
                var a = e.backdrop || null;
                if (!e.transferMap && _.isEnabled) {
                    var s = _.composeSMask(n.canvas, r, {
                        subtype: e.subtype,
                        backdrop: a
                    });
                    return t.setTransform(1, 0, 0, 1, 0, 0),
                    void t.drawImage(s, e.offsetX, e.offsetY)
                }
                y(i, n, r.width, r.height, e.subtype, a, e.transferMap),
                t.drawImage(r, 0, 0)
            }
            var U = 15
              , B = 10
              , W = ["butt", "round", "square"]
              , G = ["miter", "round", "bevel"]
              , X = {}
              , H = {};
            t.prototype = {
                beginDrawing: function(t, e, n) {
                    var r = this.ctx.canvas.width
                      , i = this.ctx.canvas.height;
                    if (this.ctx.save(),
                    this.ctx.fillStyle = "rgb(255, 255, 255)",
                    this.ctx.fillRect(0, 0, r, i),
                    this.ctx.restore(),
                    n) {
                        var a = this.cachedCanvases.getCanvas("transparent", r, i, !0);
                        this.compositeCtx = this.ctx,
                        this.transparentCanvas = a.canvas,
                        this.ctx = a.context,
                        this.ctx.save(),
                        this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
                    }
                    this.ctx.save(),
                    t && this.ctx.transform.apply(this.ctx, t),
                    this.ctx.transform.apply(this.ctx, e.transform),
                    this.baseTransform = this.ctx.mozCurrentTransform.slice(),
                    this.imageLayer && this.imageLayer.beginLayout()
                },
                executeOperatorList: function(t, e, n, r) {
                    var i = t.argsArray
                      , a = t.fnArray
                      , s = e || 0
                      , o = i.length;
                    if (o === s)
                        return s;
                    for (var c, l = o - s > B && "function" == typeof n, h = l ? Date.now() + U : 0, u = 0, f = this.commonObjs, p = this.objs; ; ) {
                        if (void 0 !== r && s === r.nextBreakPoint)
                            return r.breakIt(s, n),
                            s;
                        if ((c = a[s]) !== d.dependency)
                            this[c].apply(this, i[s]);
                        else
                            for (var g = i[s], m = 0, A = g.length; m < A; m++) {
                                var v = g[m]
                                  , b = "g" === v[0] && "_" === v[1] ? f : p;
                                if (!b.isResolved(v))
                                    return b.get(v, n),
                                    s
                            }
                        if (++s === o)
                            return s;
                        if (l && ++u > B) {
                            if (Date.now() > h)
                                return n(),
                                s;
                            u = 0
                        }
                    }
                },
                endDrawing: function() {
                    null !== this.current.activeSMask && this.endSMaskGroup(),
                    this.ctx.restore(),
                    this.transparentCanvas && (this.ctx = this.compositeCtx,
                    this.ctx.save(),
                    this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                    this.ctx.drawImage(this.transparentCanvas, 0, 0),
                    this.ctx.restore(),
                    this.transparentCanvas = null),
                    this.cachedCanvases.clear(),
                    _.clear(),
                    this.imageLayer && this.imageLayer.endLayout()
                },
                setLineWidth: function(t) {
                    this.current.lineWidth = t,
                    this.ctx.lineWidth = t
                },
                setLineCap: function(t) {
                    this.ctx.lineCap = W[t]
                },
                setLineJoin: function(t) {
                    this.ctx.lineJoin = G[t]
                },
                setMiterLimit: function(t) {
                    this.ctx.miterLimit = t
                },
                setDash: function(t, e) {
                    var n = this.ctx;
                    void 0 !== n.setLineDash && (n.setLineDash(t),
                    n.lineDashOffset = e)
                },
                setRenderingIntent: function(t) {},
                setFlatness: function(t) {},
                setGState: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var r = t[e]
                          , i = r[0]
                          , a = r[1];
                        switch (i) {
                        case "LW":
                            this.setLineWidth(a);
                            break;
                        case "LC":
                            this.setLineCap(a);
                            break;
                        case "LJ":
                            this.setLineJoin(a);
                            break;
                        case "ML":
                            this.setMiterLimit(a);
                            break;
                        case "D":
                            this.setDash(a[0], a[1]);
                            break;
                        case "RI":
                            this.setRenderingIntent(a);
                            break;
                        case "FL":
                            this.setFlatness(a);
                            break;
                        case "Font":
                            this.setFont(a[0], a[1]);
                            break;
                        case "CA":
                            this.current.strokeAlpha = r[1];
                            break;
                        case "ca":
                            this.current.fillAlpha = r[1],
                            this.ctx.globalAlpha = r[1];
                            break;
                        case "BM":
                            this.ctx.globalCompositeOperation = a;
                            break;
                        case "SMask":
                            this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup()),
                            this.current.activeSMask = a ? this.tempSMask : null,
                            this.current.activeSMask && this.beginSMaskGroup(),
                            this.tempSMask = null
                        }
                    }
                },
                beginSMaskGroup: function() {
                    var t = this.current.activeSMask
                      , e = t.canvas.width
                      , n = t.canvas.height
                      , r = "smaskGroupAt" + this.groupLevel
                      , i = this.cachedCanvases.getCanvas(r, e, n, !0)
                      , s = this.ctx
                      , o = s.mozCurrentTransform;
                    this.ctx.save();
                    var c = i.context;
                    c.scale(1 / t.scaleX, 1 / t.scaleY),
                    c.translate(-t.offsetX, -t.offsetY),
                    c.transform.apply(c, o),
                    t.startTransformInverse = c.mozCurrentTransformInverse,
                    a(s, c),
                    this.ctx = c,
                    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
                    this.groupStack.push(s),
                    this.groupLevel++
                },
                suspendSMaskGroup: function() {
                    var t = this.ctx;
                    this.groupLevel--,
                    this.ctx = this.groupStack.pop(),
                    T(this.ctx, this.current.activeSMask, t),
                    this.ctx.restore(),
                    this.ctx.save(),
                    a(t, this.ctx),
                    this.current.resumeSMaskCtx = t;
                    var e = g.transform(this.current.activeSMask.startTransformInverse, t.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, e),
                    t.save(),
                    t.setTransform(1, 0, 0, 1, 0, 0),
                    t.clearRect(0, 0, t.canvas.width, t.canvas.height),
                    t.restore()
                },
                resumeSMaskGroup: function() {
                    var t = this.current.resumeSMaskCtx
                      , e = this.ctx;
                    this.ctx = t,
                    this.groupStack.push(e),
                    this.groupLevel++
                },
                endSMaskGroup: function() {
                    var t = this.ctx;
                    this.groupLevel--,
                    this.ctx = this.groupStack.pop(),
                    T(this.ctx, this.current.activeSMask, t),
                    this.ctx.restore(),
                    a(t, this.ctx);
                    var e = g.transform(this.current.activeSMask.startTransformInverse, t.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, e)
                },
                save: function() {
                    this.ctx.save();
                    var t = this.current;
                    this.stateStack.push(t),
                    this.current = t.clone(),
                    this.current.resumeSMaskCtx = null
                },
                restore: function() {
                    this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
                    null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup(),
                    0 !== this.stateStack.length && (this.current = this.stateStack.pop(),
                    this.ctx.restore(),
                    this.pendingClip = null,
                    this.cachedGetSinglePixelWidth = null)
                },
                transform: function(t, e, n, r, i, a) {
                    this.ctx.transform(t, e, n, r, i, a),
                    this.cachedGetSinglePixelWidth = null
                },
                constructPath: function(t, e) {
                    for (var n = this.ctx, r = this.current, i = r.x, a = r.y, s = 0, o = 0, c = t.length; s < c; s++)
                        switch (0 | t[s]) {
                        case d.rectangle:
                            i = e[o++],
                            a = e[o++];
                            var l = e[o++]
                              , h = e[o++];
                            0 === l && (l = this.getSinglePixelWidth()),
                            0 === h && (h = this.getSinglePixelWidth());
                            var u = i + l
                              , f = a + h;
                            this.ctx.moveTo(i, a),
                            this.ctx.lineTo(u, a),
                            this.ctx.lineTo(u, f),
                            this.ctx.lineTo(i, f),
                            this.ctx.lineTo(i, a),
                            this.ctx.closePath();
                            break;
                        case d.moveTo:
                            i = e[o++],
                            a = e[o++],
                            n.moveTo(i, a);
                            break;
                        case d.lineTo:
                            i = e[o++],
                            a = e[o++],
                            n.lineTo(i, a);
                            break;
                        case d.curveTo:
                            i = e[o + 4],
                            a = e[o + 5],
                            n.bezierCurveTo(e[o], e[o + 1], e[o + 2], e[o + 3], i, a),
                            o += 6;
                            break;
                        case d.curveTo2:
                            n.bezierCurveTo(i, a, e[o], e[o + 1], e[o + 2], e[o + 3]),
                            i = e[o + 2],
                            a = e[o + 3],
                            o += 4;
                            break;
                        case d.curveTo3:
                            i = e[o + 2],
                            a = e[o + 3],
                            n.bezierCurveTo(e[o], e[o + 1], i, a, i, a),
                            o += 4;
                            break;
                        case d.closePath:
                            n.closePath()
                        }
                    r.setCurrentPoint(i, a)
                },
                closePath: function() {
                    this.ctx.closePath()
                },
                stroke: function(t) {
                    t = void 0 === t || t;
                    var e = this.ctx
                      , n = this.current.strokeColor;
                    e.lineWidth = Math.max(this.getSinglePixelWidth() * R, this.current.lineWidth),
                    e.globalAlpha = this.current.strokeAlpha,
                    n && n.hasOwnProperty("type") && "Pattern" === n.type ? (e.save(),
                    e.strokeStyle = n.getPattern(e, this),
                    e.stroke(),
                    e.restore()) : e.stroke(),
                    t && this.consumePath(),
                    e.globalAlpha = this.current.fillAlpha
                },
                closeStroke: function() {
                    this.closePath(),
                    this.stroke()
                },
                fill: function(t) {
                    t = void 0 === t || t;
                    var e = this.ctx
                      , n = this.current.fillColor
                      , r = !1;
                    this.current.patternFill && (e.save(),
                    this.baseTransform && e.setTransform.apply(e, this.baseTransform),
                    e.fillStyle = n.getPattern(e, this),
                    r = !0),
                    this.pendingEOFill ? (e.fill("evenodd"),
                    this.pendingEOFill = !1) : e.fill(),
                    r && e.restore(),
                    t && this.consumePath()
                },
                eoFill: function() {
                    this.pendingEOFill = !0,
                    this.fill()
                },
                fillStroke: function() {
                    this.fill(!1),
                    this.stroke(!1),
                    this.consumePath()
                },
                eoFillStroke: function() {
                    this.pendingEOFill = !0,
                    this.fillStroke()
                },
                closeFillStroke: function() {
                    this.closePath(),
                    this.fillStroke()
                },
                closeEOFillStroke: function() {
                    this.pendingEOFill = !0,
                    this.closePath(),
                    this.fillStroke()
                },
                endPath: function() {
                    this.consumePath()
                },
                clip: function() {
                    this.pendingClip = X
                },
                eoClip: function() {
                    this.pendingClip = H
                },
                beginText: function() {
                    this.current.textMatrix = h,
                    this.current.textMatrixScale = 1,
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0
                },
                endText: function() {
                    var t = this.pendingTextPaths
                      , e = this.ctx;
                    if (void 0 !== t) {
                        e.save(),
                        e.beginPath();
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            e.setTransform.apply(e, r.transform),
                            e.translate(r.x, r.y),
                            r.addToPath(e, r.fontSize)
                        }
                        e.restore(),
                        e.clip(),
                        e.beginPath(),
                        delete this.pendingTextPaths
                    } else
                        e.beginPath()
                },
                setCharSpacing: function(t) {
                    this.current.charSpacing = t
                },
                setWordSpacing: function(t) {
                    this.current.wordSpacing = t
                },
                setHScale: function(t) {
                    this.current.textHScale = t / 100
                },
                setLeading: function(t) {
                    this.current.leading = -t
                },
                setFont: function(t, e) {
                    var n = this.commonObjs.get(t)
                      , r = this.current;
                    if (n || x("Can't find font for " + t),
                    r.fontMatrix = n.fontMatrix ? n.fontMatrix : l,
                    0 !== r.fontMatrix[0] && 0 !== r.fontMatrix[3] || w("Invalid font matrix for font " + t),
                    e < 0 ? (e = -e,
                    r.fontDirection = -1) : r.fontDirection = 1,
                    this.current.font = n,
                    this.current.fontSize = e,
                    !n.isType3Font) {
                        var i = n.loadedName || "sans-serif"
                          , a = n.black ? "900" : n.bold ? "bold" : "normal"
                          , s = n.italic ? "italic" : "normal"
                          , o = '"' + i + '", ' + n.fallbackName
                          , c = e < P ? P : e > L ? L : e;
                        this.current.fontSizeScale = e / c;
                        var h = s + " " + a + " " + c + "px " + o;
                        this.ctx.font = h
                    }
                },
                setTextRenderingMode: function(t) {
                    this.current.textRenderingMode = t
                },
                setTextRise: function(t) {
                    this.current.textRise = t
                },
                moveText: function(t, e) {
                    this.current.x = this.current.lineX += t,
                    this.current.y = this.current.lineY += e
                },
                setLeadingMoveText: function(t, e) {
                    this.setLeading(-e),
                    this.moveText(t, e)
                },
                setTextMatrix: function(t, e, n, r, i, a) {
                    this.current.textMatrix = [t, e, n, r, i, a],
                    this.current.textMatrixScale = Math.sqrt(t * t + e * e),
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0
                },
                nextLine: function() {
                    this.moveText(0, this.current.leading)
                },
                paintChar: function(t, e, n) {
                    var r, i = this.ctx, a = this.current, s = a.font, o = a.textRenderingMode, c = a.fontSize / a.fontSizeScale, l = o & f.FILL_STROKE_MASK, h = !!(o & f.ADD_TO_PATH_FLAG);
                    (s.disableFontFace || h) && (r = s.getPathGenerator(this.commonObjs, t)),
                    s.disableFontFace ? (i.save(),
                    i.translate(e, n),
                    i.beginPath(),
                    r(i, c),
                    l !== f.FILL && l !== f.FILL_STROKE || i.fill(),
                    l !== f.STROKE && l !== f.FILL_STROKE || i.stroke(),
                    i.restore()) : (l !== f.FILL && l !== f.FILL_STROKE || i.fillText(t, e, n),
                    l !== f.STROKE && l !== f.FILL_STROKE || i.strokeText(t, e, n)),
                    h && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                        transform: i.mozCurrentTransform,
                        x: e,
                        y: n,
                        fontSize: c,
                        addToPath: r
                    })
                },
                get isFontSubpixelAAEnabled() {
                    var t = this.canvasFactory.create(10, 10).context;
                    t.scale(1.5, 1),
                    t.fillText("I", 0, 10);
                    for (var e = t.getImageData(0, 0, 10, 10).data, n = !1, r = 3; r < e.length; r += 4)
                        if (e[r] > 0 && e[r] < 255) {
                            n = !0;
                            break
                        }
                    return S(this, "isFontSubpixelAAEnabled", n)
                },
                showText: function(t) {
                    var e = this.current
                      , n = e.font;
                    if (n.isType3Font)
                        return this.showType3Text(t);
                    var r = e.fontSize;
                    if (0 !== r) {
                        var i = this.ctx
                          , a = e.fontSizeScale
                          , s = e.charSpacing
                          , o = e.wordSpacing
                          , c = e.fontDirection
                          , l = e.textHScale * c
                          , h = t.length
                          , u = n.vertical
                          , d = u ? 1 : -1
                          , p = n.defaultVMetrics
                          , g = r * e.fontMatrix[0]
                          , m = e.textRenderingMode === f.FILL && !n.disableFontFace;
                        i.save(),
                        i.transform.apply(i, e.textMatrix),
                        i.translate(e.x, e.y + e.textRise),
                        e.patternFill && (i.fillStyle = e.fillColor.getPattern(i, this)),
                        c > 0 ? i.scale(l, -1) : i.scale(l, 1);
                        var A = e.lineWidth
                          , b = e.textMatrixScale;
                        if (0 === b || 0 === A) {
                            var y = e.textRenderingMode & f.FILL_STROKE_MASK;
                            y !== f.STROKE && y !== f.FILL_STROKE || (this.cachedGetSinglePixelWidth = null,
                            A = this.getSinglePixelWidth() * R)
                        } else
                            A /= b;
                        1 !== a && (i.scale(a, a),
                        A /= a),
                        i.lineWidth = A;
                        var x, S = 0;
                        for (x = 0; x < h; ++x) {
                            var w = t[x];
                            if (v(w))
                                S += d * w * r / 1e3;
                            else {
                                var k, C, _, T, P = !1, L = (w.isSpace ? o : 0) + s, E = w.fontChar, I = w.accent, F = w.width;
                                if (u) {
                                    var N, M, D;
                                    N = w.vmetric || p,
                                    M = -(M = w.vmetric ? N[1] : .5 * F) * g,
                                    D = N[2] * g,
                                    F = N ? -N[0] : F,
                                    k = M / a,
                                    C = (S + D) / a
                                } else
                                    k = S / a,
                                    C = 0;
                                if (n.remeasure && F > 0) {
                                    var O = 1e3 * i.measureText(E).width / r * a;
                                    if (F < O && this.isFontSubpixelAAEnabled) {
                                        var j = F / O;
                                        P = !0,
                                        i.save(),
                                        i.scale(j, 1),
                                        k /= j
                                    } else
                                        F !== O && (k += (F - O) / 2e3 * r / a)
                                }
                                (w.isInFont || n.missingFile) && (m && !I ? i.fillText(E, k, C) : (this.paintChar(E, k, C),
                                I && (_ = k + I.offset.x / a,
                                T = C - I.offset.y / a,
                                this.paintChar(I.fontChar, _, T)))),
                                S += F * g + L * c,
                                P && i.restore()
                            }
                        }
                        u ? e.y -= S * l : e.x += S * l,
                        i.restore()
                    }
                },
                showType3Text: function(t) {
                    var e, n, r, i, a = this.ctx, s = this.current, o = s.font, c = s.fontSize, h = s.fontDirection, u = o.vertical ? 1 : -1, d = s.charSpacing, p = s.wordSpacing, m = s.textHScale * h, A = s.fontMatrix || l, b = t.length;
                    if (!(s.textRenderingMode === f.INVISIBLE) && 0 !== c) {
                        for (this.cachedGetSinglePixelWidth = null,
                        a.save(),
                        a.transform.apply(a, s.textMatrix),
                        a.translate(s.x, s.y),
                        a.scale(m, h),
                        e = 0; e < b; ++e)
                            if (n = t[e],
                            v(n))
                                i = u * n * c / 1e3,
                                this.ctx.translate(i, 0),
                                s.x += i * m;
                            else {
                                var y = (n.isSpace ? p : 0) + d
                                  , x = o.charProcOperatorList[n.operatorListId];
                                x ? (this.processingType3 = n,
                                this.save(),
                                a.scale(c, c),
                                a.transform.apply(a, A),
                                this.executeOperatorList(x),
                                this.restore(),
                                r = g.applyTransform([n.width, 0], A)[0] * c + y,
                                a.translate(r, 0),
                                s.x += r * m) : w('Type3 character "' + n.operatorListId + '" is not available')
                            }
                        a.restore(),
                        this.processingType3 = null
                    }
                },
                setCharWidth: function(t, e) {},
                setCharWidthAndBounds: function(t, e, n, r, i, a) {
                    this.ctx.rect(n, r, i - n, a - r),
                    this.clip(),
                    this.endPath()
                },
                getColorN_Pattern: function(e) {
                    var n;
                    if ("TilingPattern" === e[0]) {
                        var r = e[1]
                          , i = this.baseTransform || this.ctx.mozCurrentTransform.slice()
                          , a = this
                          , s = {
                            createCanvasGraphics: function(e) {
                                return new t(e,a.commonObjs,a.objs,a.canvasFactory)
                            }
                        };
                        n = new k(e,r,this.ctx,s,i)
                    } else
                        n = C(e);
                    return n
                },
                setStrokeColorN: function() {
                    this.current.strokeColor = this.getColorN_Pattern(arguments)
                },
                setFillColorN: function() {
                    this.current.fillColor = this.getColorN_Pattern(arguments),
                    this.current.patternFill = !0
                },
                setStrokeRGBColor: function(t, e, n) {
                    var r = g.makeCssRgb(t, e, n);
                    this.ctx.strokeStyle = r,
                    this.current.strokeColor = r
                },
                setFillRGBColor: function(t, e, n) {
                    var r = g.makeCssRgb(t, e, n);
                    this.ctx.fillStyle = r,
                    this.current.fillColor = r,
                    this.current.patternFill = !1
                },
                shadingFill: function(t) {
                    var e = this.ctx;
                    this.save();
                    var n = C(t);
                    e.fillStyle = n.getPattern(e, this, !0);
                    var r = e.mozCurrentTransformInverse;
                    if (r) {
                        var i = e.canvas
                          , a = i.width
                          , s = i.height
                          , o = g.applyTransform([0, 0], r)
                          , c = g.applyTransform([0, s], r)
                          , l = g.applyTransform([a, 0], r)
                          , h = g.applyTransform([a, s], r)
                          , u = Math.min(o[0], c[0], l[0], h[0])
                          , d = Math.min(o[1], c[1], l[1], h[1])
                          , f = Math.max(o[0], c[0], l[0], h[0])
                          , p = Math.max(o[1], c[1], l[1], h[1]);
                        this.ctx.fillRect(u, d, f - u, p - d)
                    } else
                        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                    this.restore()
                },
                beginInlineImage: function() {
                    x("Should not call beginInlineImage")
                },
                beginImageData: function() {
                    x("Should not call beginImageData")
                },
                paintFormXObjectBegin: function(t, e) {
                    if (this.save(),
                    this.baseTransformStack.push(this.baseTransform),
                    b(t) && 6 === t.length && this.transform.apply(this, t),
                    this.baseTransform = this.ctx.mozCurrentTransform,
                    b(e) && 4 === e.length) {
                        var n = e[2] - e[0]
                          , r = e[3] - e[1];
                        this.ctx.rect(e[0], e[1], n, r),
                        this.clip(),
                        this.endPath()
                    }
                },
                paintFormXObjectEnd: function() {
                    this.restore(),
                    this.baseTransform = this.baseTransformStack.pop()
                },
                beginGroup: function(t) {
                    this.save();
                    var e = this.ctx;
                    t.isolated || A("TODO: Support non-isolated groups."),
                    t.knockout && w("Knockout groups not supported.");
                    var n = e.mozCurrentTransform;
                    t.matrix && e.transform.apply(e, t.matrix),
                    m(t.bbox, "Bounding box is required.");
                    var r = g.getAxialAlignedBoundingBox(t.bbox, e.mozCurrentTransform)
                      , i = [0, 0, e.canvas.width, e.canvas.height];
                    r = g.intersect(r, i) || [0, 0, 0, 0];
                    var s = Math.floor(r[0])
                      , o = Math.floor(r[1])
                      , c = Math.max(Math.ceil(r[2]) - s, 1)
                      , l = Math.max(Math.ceil(r[3]) - o, 1)
                      , h = 1
                      , u = 1;
                    c > E && (h = c / E,
                    c = E),
                    l > E && (u = l / E,
                    l = E);
                    var d = "groupAt" + this.groupLevel;
                    t.smask && (d += "_smask_" + this.smaskCounter++ % 2);
                    var f = this.cachedCanvases.getCanvas(d, c, l, !0)
                      , p = f.context;
                    p.scale(1 / h, 1 / u),
                    p.translate(-s, -o),
                    p.transform.apply(p, n),
                    t.smask ? this.smaskStack.push({
                        canvas: f.canvas,
                        context: p,
                        offsetX: s,
                        offsetY: o,
                        scaleX: h,
                        scaleY: u,
                        subtype: t.smask.subtype,
                        backdrop: t.smask.backdrop,
                        transferMap: t.smask.transferMap || null,
                        startTransformInverse: null
                    }) : (e.setTransform(1, 0, 0, 1, 0, 0),
                    e.translate(s, o),
                    e.scale(h, u)),
                    a(e, p),
                    this.ctx = p,
                    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
                    this.groupStack.push(e),
                    this.groupLevel++,
                    this.current.activeSMask = null
                },
                endGroup: function(t) {
                    this.groupLevel--;
                    var e = this.ctx;
                    this.ctx = this.groupStack.pop(),
                    void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1,
                    t.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(e.canvas, 0, 0),
                    this.restore()
                },
                beginAnnotations: function() {
                    this.save(),
                    this.current = new j,
                    this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
                },
                endAnnotations: function() {
                    this.restore()
                },
                beginAnnotation: function(t, e, n) {
                    if (this.save(),
                    b(t) && 4 === t.length) {
                        var r = t[2] - t[0]
                          , i = t[3] - t[1];
                        this.ctx.rect(t[0], t[1], r, i),
                        this.clip(),
                        this.endPath()
                    }
                    this.transform.apply(this, e),
                    this.transform.apply(this, n)
                },
                endAnnotation: function() {
                    this.restore()
                },
                paintJpegXObject: function(t, e, n) {
                    var r = this.objs.get(t);
                    if (r) {
                        this.save();
                        var i = this.ctx;
                        if (i.scale(1 / e, -1 / n),
                        i.drawImage(r, 0, 0, r.width, r.height, 0, -n, e, n),
                        this.imageLayer) {
                            var a = i.mozCurrentTransformInverse
                              , s = this.getCanvasPosition(0, 0);
                            this.imageLayer.appendImage({
                                objId: t,
                                left: s[0],
                                top: s[1],
                                width: e / a[0],
                                height: n / a[3]
                            })
                        }
                        this.restore()
                    } else
                        w("Dependent image isn't ready yet")
                },
                paintImageMaskXObject: function(t) {
                    var e = this.ctx
                      , r = t.width
                      , a = t.height
                      , s = this.current.fillColor
                      , o = this.current.patternFill
                      , c = this.processingType3;
                    if (I && c && void 0 === c.compiled && (c.compiled = r <= F && a <= F ? i({
                        data: t.data,
                        width: r,
                        height: a
                    }) : null),
                    c && c.compiled)
                        c.compiled(e);
                    else {
                        var l = this.cachedCanvases.getCanvas("maskCanvas", r, a)
                          , h = l.context;
                        h.save(),
                        n(h, t),
                        h.globalCompositeOperation = "source-in",
                        h.fillStyle = o ? s.getPattern(h, this) : s,
                        h.fillRect(0, 0, r, a),
                        h.restore(),
                        this.paintInlineImageXObject(l.canvas)
                    }
                },
                paintImageMaskXObjectRepeat: function(t, e, r, i) {
                    var a = t.width
                      , s = t.height
                      , o = this.current.fillColor
                      , c = this.current.patternFill
                      , l = this.cachedCanvases.getCanvas("maskCanvas", a, s)
                      , h = l.context;
                    h.save(),
                    n(h, t),
                    h.globalCompositeOperation = "source-in",
                    h.fillStyle = c ? o.getPattern(h, this) : o,
                    h.fillRect(0, 0, a, s),
                    h.restore();
                    for (var u = this.ctx, d = 0, f = i.length; d < f; d += 2)
                        u.save(),
                        u.transform(e, 0, 0, r, i[d], i[d + 1]),
                        u.scale(1, -1),
                        u.drawImage(l.canvas, 0, 0, a, s, 0, -1, 1, 1),
                        u.restore()
                },
                paintImageMaskXObjectGroup: function(t) {
                    for (var e = this.ctx, r = this.current.fillColor, i = this.current.patternFill, a = 0, s = t.length; a < s; a++) {
                        var o = t[a]
                          , c = o.width
                          , l = o.height
                          , h = this.cachedCanvases.getCanvas("maskCanvas", c, l)
                          , u = h.context;
                        u.save(),
                        n(u, o),
                        u.globalCompositeOperation = "source-in",
                        u.fillStyle = i ? r.getPattern(u, this) : r,
                        u.fillRect(0, 0, c, l),
                        u.restore(),
                        e.save(),
                        e.transform.apply(e, o.transform),
                        e.scale(1, -1),
                        e.drawImage(h.canvas, 0, 0, c, l, 0, -1, 1, 1),
                        e.restore()
                    }
                },
                paintImageXObject: function(t) {
                    var e = this.objs.get(t);
                    e ? this.paintInlineImageXObject(e) : w("Dependent image isn't ready yet")
                },
                paintImageXObjectRepeat: function(t, e, n, r) {
                    var i = this.objs.get(t);
                    if (i) {
                        for (var a = i.width, s = i.height, o = [], c = 0, l = r.length; c < l; c += 2)
                            o.push({
                                transform: [e, 0, 0, n, r[c], r[c + 1]],
                                x: 0,
                                y: 0,
                                w: a,
                                h: s
                            });
                        this.paintInlineImageXObjectGroup(i, o)
                    } else
                        w("Dependent image isn't ready yet")
                },
                paintInlineImageXObject: function(t) {
                    var n = t.width
                      , r = t.height
                      , i = this.ctx;
                    this.save(),
                    i.scale(1 / n, -1 / r);
                    var a, s, o = i.mozCurrentTransformInverse, c = o[0], l = o[1], h = Math.max(Math.sqrt(c * c + l * l), 1), u = o[2], d = o[3], f = Math.max(Math.sqrt(u * u + d * d), 1);
                    if (t instanceof HTMLElement || !t.data)
                        a = t;
                    else {
                        var p = (s = this.cachedCanvases.getCanvas("inlineImage", n, r)).context;
                        e(p, t),
                        a = s.canvas
                    }
                    for (var g = n, m = r, A = "prescale1"; h > 2 && g > 1 || f > 2 && m > 1; ) {
                        var v = g
                          , b = m;
                        h > 2 && g > 1 && (h /= g / (v = Math.ceil(g / 2))),
                        f > 2 && m > 1 && (f /= m / (b = Math.ceil(m / 2))),
                        (p = (s = this.cachedCanvases.getCanvas(A, v, b)).context).clearRect(0, 0, v, b),
                        p.drawImage(a, 0, 0, g, m, 0, 0, v, b),
                        a = s.canvas,
                        g = v,
                        m = b,
                        A = "prescale1" === A ? "prescale2" : "prescale1"
                    }
                    if (i.drawImage(a, 0, 0, g, m, 0, -r, n, r),
                    this.imageLayer) {
                        var y = this.getCanvasPosition(0, -r);
                        this.imageLayer.appendImage({
                            imgData: t,
                            left: y[0],
                            top: y[1],
                            width: n / o[0],
                            height: r / o[3]
                        })
                    }
                    this.restore()
                },
                paintInlineImageXObjectGroup: function(t, n) {
                    var r = this.ctx
                      , i = t.width
                      , a = t.height
                      , s = this.cachedCanvases.getCanvas("inlineImage", i, a);
                    e(s.context, t);
                    for (var o = 0, c = n.length; o < c; o++) {
                        var l = n[o];
                        if (r.save(),
                        r.transform.apply(r, l.transform),
                        r.scale(1, -1),
                        r.drawImage(s.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1),
                        this.imageLayer) {
                            var h = this.getCanvasPosition(l.x, l.y);
                            this.imageLayer.appendImage({
                                imgData: t,
                                left: h[0],
                                top: h[1],
                                width: i,
                                height: a
                            })
                        }
                        r.restore()
                    }
                },
                paintSolidColorImageMask: function() {
                    this.ctx.fillRect(0, 0, 1, 1)
                },
                paintXObject: function() {
                    w("Unsupported 'paintXObject' command.")
                },
                markPoint: function(t) {},
                markPointProps: function(t, e) {},
                beginMarkedContent: function(t) {},
                beginMarkedContentProps: function(t, e) {},
                endMarkedContent: function() {},
                beginCompat: function() {},
                endCompat: function() {},
                consumePath: function() {
                    var t = this.ctx;
                    this.pendingClip && (this.pendingClip === H ? t.clip("evenodd") : t.clip(),
                    this.pendingClip = null),
                    t.beginPath()
                },
                getSinglePixelWidth: function(t) {
                    if (null === this.cachedGetSinglePixelWidth) {
                        this.ctx.save();
                        var e = this.ctx.mozCurrentTransformInverse;
                        this.ctx.restore(),
                        this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1], e[2] * e[2] + e[3] * e[3]))
                    }
                    return this.cachedGetSinglePixelWidth
                },
                getCanvasPosition: function(t, e) {
                    var n = this.ctx.mozCurrentTransform;
                    return [n[0] * t + n[2] * e + n[4], n[1] * t + n[3] * e + n[5]]
                }
            };
            for (var z in d)
                t.prototype[d[z]] = t.prototype[z];
            return t
        }();
        e.CanvasGraphics = U
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            this.docId = t,
            this.styleElement = null,
            this.nativeFontFaces = [],
            this.loadTestFontId = 0,
            this.loadingContext = {
                requests: [],
                nextRequestId: 0
            }
        }
        var i = n(0)
          , a = i.assert
          , s = i.bytesToString
          , o = i.string32
          , c = i.shadow
          , l = i.warn;
        r.prototype = {
            insertRule: function(t) {
                var e = this.styleElement;
                e || ((e = this.styleElement = document.createElement("style")).id = "PDFJS_FONT_STYLE_TAG_" + this.docId,
                document.documentElement.getElementsByTagName("head")[0].appendChild(e));
                var n = e.sheet;
                n.insertRule(t, n.cssRules.length)
            },
            clear: function() {
                this.styleElement && (this.styleElement.remove(),
                this.styleElement = null),
                this.nativeFontFaces.forEach(function(t) {
                    document.fonts.delete(t)
                }),
                this.nativeFontFaces.length = 0
            }
        };
        var h = function() {
            return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")
        };
        Object.defineProperty(r.prototype, "loadTestFont", {
            get: function() {
                return c(this, "loadTestFont", h())
            },
            configurable: !0
        }),
        r.prototype.addNativeFontFace = function(t) {
            this.nativeFontFaces.push(t),
            document.fonts.add(t)
        }
        ,
        r.prototype.bind = function(t, e) {
            for (var n = [], i = [], a = [], s = function(t) {
                return t.loaded.catch(function(e) {
                    l('Failed to load font "' + t.family + '": ' + e)
                })
            }, o = r.isFontLoadingAPISupported && !r.isSyncFontLoadingSupported, c = 0, h = t.length; c < h; c++) {
                var u = t[c];
                if (!u.attached && !1 !== u.loading)
                    if (u.attached = !0,
                    o) {
                        var d = u.createNativeFontFace();
                        d && (this.addNativeFontFace(d),
                        a.push(s(d)))
                    } else {
                        var f = u.createFontFaceRule();
                        f && (this.insertRule(f),
                        n.push(f),
                        i.push(u))
                    }
            }
            var p = this.queueLoadingCallback(e);
            o ? Promise.all(a).then(function() {
                p.complete()
            }) : n.length > 0 && !r.isSyncFontLoadingSupported ? this.prepareFontLoadEvent(n, i, p) : p.complete()
        }
        ,
        r.prototype.queueLoadingCallback = function(t) {
            function e() {
                for (a(!r.end, "completeRequest() cannot be called twice"),
                r.end = Date.now(); n.requests.length > 0 && n.requests[0].end; ) {
                    var t = n.requests.shift();
                    setTimeout(t.callback, 0)
                }
            }
            var n = this.loadingContext
              , r = {
                id: "pdfjs-font-loading-" + n.nextRequestId++,
                complete: e,
                callback: t,
                started: Date.now()
            };
            return n.requests.push(r),
            r
        }
        ,
        r.prototype.prepareFontLoadEvent = function(t, e, n) {
            function r(t, e) {
                return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3)
            }
            function i(t, e, n, r) {
                return t.substr(0, e) + r + t.substr(e + n)
            }
            function a(t, e) {
                if (++d > 30)
                    return l("Load test font never loaded."),
                    void e();
                u.font = "30px " + t,
                u.fillText(".", 0, 20),
                u.getImageData(0, 0, 1, 1).data[3] > 0 ? e() : setTimeout(a.bind(null, t, e))
            }
            var s, c, h = document.createElement("canvas");
            h.width = 1,
            h.height = 1;
            var u = h.getContext("2d")
              , d = 0
              , f = "lt" + Date.now() + this.loadTestFontId++
              , p = this.loadTestFont
              , g = 16
              , m = 1482184792
              , A = r(p = i(p, 976, f.length, f), g);
            for (s = 0,
            c = f.length - 3; s < c; s += 4)
                A = A - m + r(f, s) | 0;
            s < f.length && (A = A - m + r(f + "XXX", s) | 0),
            p = i(p, g, 4, o(A));
            var v = '@font-face { font-family:"' + f + '";src:' + ("url(data:font/opentype;base64," + btoa(p) + ");") + "}";
            this.insertRule(v);
            var b = [];
            for (s = 0,
            c = e.length; s < c; s++)
                b.push(e[s].loadedName);
            b.push(f);
            var y = document.createElement("div");
            for (y.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),
            s = 0,
            c = b.length; s < c; ++s) {
                var x = document.createElement("span");
                x.textContent = "Hi",
                x.style.fontFamily = b[s],
                y.appendChild(x)
            }
            document.body.appendChild(y),
            a(f, function() {
                document.body.removeChild(y),
                n.complete()
            })
        }
        ,
        r.isFontLoadingAPISupported = "undefined" != typeof document && !!document.fonts;
        var u = function() {
            if ("undefined" == typeof navigator)
                return !0;
            var t = !1
              , e = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
            return e && e[1] >= 14 && (t = !0),
            t
        };
        Object.defineProperty(r, "isSyncFontLoadingSupported", {
            get: function() {
                return c(r, "isSyncFontLoadingSupported", u())
            },
            enumerable: !0,
            configurable: !0
        });
        var d = {
            get value() {
                return c(this, "value", i.isEvalSupported())
            }
        }
          , f = function() {
            function t(t, e) {
                this.compiledGlyphs = Object.create(null);
                for (var n in t)
                    this[n] = t[n];
                this.options = e
            }
            return t.prototype = {
                createNativeFontFace: function() {
                    if (!this.data)
                        return null;
                    if (this.options.disableFontFace)
                        return this.disableFontFace = !0,
                        null;
                    var t = new FontFace(this.loadedName,this.data,{});
                    return this.options.fontRegistry && this.options.fontRegistry.registerFont(this),
                    t
                },
                createFontFaceRule: function() {
                    if (!this.data)
                        return null;
                    if (this.options.disableFontFace)
                        return this.disableFontFace = !0,
                        null;
                    var t = s(new Uint8Array(this.data))
                      , e = this.loadedName
                      , n = "url(data:" + this.mimetype + ";base64," + btoa(t) + ");"
                      , r = '@font-face { font-family:"' + e + '";src:' + n + "}";
                    return this.options.fontRegistry && this.options.fontRegistry.registerFont(this, n),
                    r
                },
                getPathGenerator: function(t, e) {
                    if (!(e in this.compiledGlyphs)) {
                        var n, r, i, a = t.get(this.loadedName + "_path_" + e);
                        if (this.options.isEvalSupported && d.value) {
                            var s, o = "";
                            for (r = 0,
                            i = a.length; r < i; r++)
                                s = void 0 !== (n = a[r]).args ? n.args.join(",") : "",
                                o += "c." + n.cmd + "(" + s + ");\n";
                            this.compiledGlyphs[e] = new Function("c","size",o)
                        } else
                            this.compiledGlyphs[e] = function(t, e) {
                                for (r = 0,
                                i = a.length; r < i; r++)
                                    "scale" === (n = a[r]).cmd && (n.args = [e, -e]),
                                    t[n.cmd].apply(t, n.args)
                            }
                    }
                    return this.compiledGlyphs[e]
                }
            },
            t
        }();
        e.FontFaceObject = f,
        e.FontLoader = r
    }
    , function(t, e, n) {
        "use strict";
        function r(t) {
            var e = u[t[0]];
            return e || l("Unknown IR type: " + t[0]),
            e.fromIR(t)
        }
        var i = n(0)
          , a = n(8)
          , s = i.Util
          , o = i.info
          , c = i.isArray
          , l = i.error
          , h = a.WebGLUtils
          , u = {};
        u.RadialAxial = {
            fromIR: function(t) {
                var e = t[1]
                  , n = t[2]
                  , r = t[3]
                  , i = t[4]
                  , a = t[5]
                  , s = t[6];
                return {
                    type: "Pattern",
                    getPattern: function(t) {
                        var o;
                        "axial" === e ? o = t.createLinearGradient(r[0], r[1], i[0], i[1]) : "radial" === e && (o = t.createRadialGradient(r[0], r[1], a, i[0], i[1], s));
                        for (var c = 0, l = n.length; c < l; ++c) {
                            var h = n[c];
                            o.addColorStop(h[0], h[1])
                        }
                        return o
                    }
                }
            }
        };
        var d = function() {
            function t(t, e, n, r, i, a, s, o) {
                var c, l = e.coords, h = e.colors, u = t.data, d = 4 * t.width;
                l[n + 1] > l[r + 1] && (c = n,
                n = r,
                r = c,
                c = a,
                a = s,
                s = c),
                l[r + 1] > l[i + 1] && (c = r,
                r = i,
                i = c,
                c = s,
                s = o,
                o = c),
                l[n + 1] > l[r + 1] && (c = n,
                n = r,
                r = c,
                c = a,
                a = s,
                s = c);
                var f = (l[n] + e.offsetX) * e.scaleX
                  , p = (l[n + 1] + e.offsetY) * e.scaleY
                  , g = (l[r] + e.offsetX) * e.scaleX
                  , m = (l[r + 1] + e.offsetY) * e.scaleY
                  , A = (l[i] + e.offsetX) * e.scaleX
                  , v = (l[i + 1] + e.offsetY) * e.scaleY;
                if (!(p >= v))
                    for (var b, y, x, S, w, k, C, _, T, P = h[a], L = h[a + 1], E = h[a + 2], R = h[s], I = h[s + 1], F = h[s + 2], N = h[o], M = h[o + 1], D = h[o + 2], O = Math.round(p), j = Math.round(v), U = O; U <= j; U++) {
                        U < m ? (b = f - (f - g) * (T = U < p ? 0 : p === m ? 1 : (p - U) / (p - m)),
                        y = P - (P - R) * T,
                        x = L - (L - I) * T,
                        S = E - (E - F) * T) : (b = g - (g - A) * (T = U > v ? 1 : m === v ? 0 : (m - U) / (m - v)),
                        y = R - (R - N) * T,
                        x = I - (I - M) * T,
                        S = F - (F - D) * T),
                        w = f - (f - A) * (T = U < p ? 0 : U > v ? 1 : (p - U) / (p - v)),
                        k = P - (P - N) * T,
                        C = L - (L - M) * T,
                        _ = E - (E - D) * T;
                        for (var B = Math.round(Math.min(b, w)), W = Math.round(Math.max(b, w)), G = d * U + 4 * B, X = B; X <= W; X++)
                            T = (T = (b - X) / (b - w)) < 0 ? 0 : T > 1 ? 1 : T,
                            u[G++] = y - (y - k) * T | 0,
                            u[G++] = x - (x - C) * T | 0,
                            u[G++] = S - (S - _) * T | 0,
                            u[G++] = 255
                    }
            }
            function e(e, n, r) {
                var i, a, s = n.coords, o = n.colors;
                switch (n.type) {
                case "lattice":
                    var c = n.verticesPerRow
                      , h = Math.floor(s.length / c) - 1
                      , u = c - 1;
                    for (i = 0; i < h; i++)
                        for (var d = i * c, f = 0; f < u; f++,
                        d++)
                            t(e, r, s[d], s[d + 1], s[d + c], o[d], o[d + 1], o[d + c]),
                            t(e, r, s[d + c + 1], s[d + 1], s[d + c], o[d + c + 1], o[d + 1], o[d + c]);
                    break;
                case "triangles":
                    for (i = 0,
                    a = s.length; i < a; i += 3)
                        t(e, r, s[i], s[i + 1], s[i + 2], o[i], o[i + 1], o[i + 2]);
                    break;
                default:
                    l("illigal figure")
                }
            }
            function n(t, n, r, i, a, s, o) {
                var c, l, u, d, f = 1.1, p = 3e3, g = 2, m = Math.floor(t[0]), A = Math.floor(t[1]), v = Math.ceil(t[2]) - m, b = Math.ceil(t[3]) - A, y = Math.min(Math.ceil(Math.abs(v * n[0] * f)), p), x = Math.min(Math.ceil(Math.abs(b * n[1] * f)), p), S = v / y, w = b / x, k = {
                    coords: r,
                    colors: i,
                    offsetX: -m,
                    offsetY: -A,
                    scaleX: 1 / S,
                    scaleY: 1 / w
                }, C = y + 2 * g, _ = x + 2 * g;
                if (h.isEnabled)
                    c = h.drawFigures(y, x, s, a, k),
                    (l = o.getCanvas("mesh", C, _, !1)).context.drawImage(c, g, g),
                    c = l.canvas;
                else {
                    var T = (l = o.getCanvas("mesh", C, _, !1)).context
                      , P = T.createImageData(y, x);
                    if (s) {
                        var L = P.data;
                        for (u = 0,
                        d = L.length; u < d; u += 4)
                            L[u] = s[0],
                            L[u + 1] = s[1],
                            L[u + 2] = s[2],
                            L[u + 3] = 255
                    }
                    for (u = 0; u < a.length; u++)
                        e(P, a[u], k);
                    T.putImageData(P, g, g),
                    c = l.canvas
                }
                return {
                    canvas: c,
                    offsetX: m - g * S,
                    offsetY: A - g * w,
                    scaleX: S,
                    scaleY: w
                }
            }
            return n
        }();
        u.Mesh = {
            fromIR: function(t) {
                var e = t[2]
                  , n = t[3]
                  , r = t[4]
                  , i = t[5]
                  , a = t[6]
                  , o = t[8];
                return {
                    type: "Pattern",
                    getPattern: function(t, c, l) {
                        var h;
                        if (l)
                            h = s.singularValueDecompose2dScale(t.mozCurrentTransform);
                        else if (h = s.singularValueDecompose2dScale(c.baseTransform),
                        a) {
                            var u = s.singularValueDecompose2dScale(a);
                            h = [h[0] * u[0], h[1] * u[1]]
                        }
                        var f = d(i, h, e, n, r, l ? null : o, c.cachedCanvases);
                        return l || (t.setTransform.apply(t, c.baseTransform),
                        a && t.transform.apply(t, a)),
                        t.translate(f.offsetX, f.offsetY),
                        t.scale(f.scaleX, f.scaleY),
                        t.createPattern(f.canvas, "no-repeat")
                    }
                }
            }
        },
        u.Dummy = {
            fromIR: function() {
                return {
                    type: "Pattern",
                    getPattern: function() {
                        return "hotpink"
                    }
                }
            }
        };
        var f = function() {
            function t(t, e, n, r, i) {
                this.operatorList = t[2],
                this.matrix = t[3] || [1, 0, 0, 1, 0, 0],
                this.bbox = s.normalizeRect(t[4]),
                this.xstep = t[5],
                this.ystep = t[6],
                this.paintType = t[7],
                this.tilingType = t[8],
                this.color = e,
                this.canvasGraphicsFactory = r,
                this.baseTransform = i,
                this.type = "Pattern",
                this.ctx = n
            }
            var e = {
                COLORED: 1,
                UNCOLORED: 2
            }
              , n = 3e3;
            return t.prototype = {
                createPatternCanvas: function(t) {
                    var e = this.operatorList
                      , r = this.bbox
                      , i = this.xstep
                      , a = this.ystep
                      , c = this.paintType
                      , l = this.tilingType
                      , h = this.color
                      , u = this.canvasGraphicsFactory;
                    o("TilingType: " + l);
                    var d = r[0]
                      , f = r[1]
                      , p = r[2]
                      , g = r[3]
                      , m = [d, f]
                      , A = [d + i, f + a]
                      , v = A[0] - m[0]
                      , b = A[1] - m[1]
                      , y = s.singularValueDecompose2dScale(this.matrix)
                      , x = s.singularValueDecompose2dScale(this.baseTransform)
                      , S = [y[0] * x[0], y[1] * x[1]];
                    v = Math.min(Math.ceil(Math.abs(v * S[0])), n),
                    b = Math.min(Math.ceil(Math.abs(b * S[1])), n);
                    var w = t.cachedCanvases.getCanvas("pattern", v, b, !0)
                      , k = w.context
                      , C = u.createCanvasGraphics(k);
                    C.groupLevel = t.groupLevel,
                    this.setFillAndStrokeStyleToContext(k, c, h),
                    this.setScale(v, b, i, a),
                    this.transformToScale(C);
                    var _ = [1, 0, 0, 1, -m[0], -m[1]];
                    return C.transform.apply(C, _),
                    this.clipBbox(C, r, d, f, p, g),
                    C.executeOperatorList(e),
                    w.canvas
                },
                setScale: function(t, e, n, r) {
                    this.scale = [t / n, e / r]
                },
                transformToScale: function(t) {
                    var e = this.scale
                      , n = [e[0], 0, 0, e[1], 0, 0];
                    t.transform.apply(t, n)
                },
                scaleToContext: function() {
                    var t = this.scale;
                    this.ctx.scale(1 / t[0], 1 / t[1])
                },
                clipBbox: function(t, e, n, r, i, a) {
                    if (c(e) && 4 === e.length) {
                        var s = i - n
                          , o = a - r;
                        t.ctx.rect(n, r, s, o),
                        t.clip(),
                        t.endPath()
                    }
                },
                setFillAndStrokeStyleToContext: function(t, n, r) {
                    switch (n) {
                    case e.COLORED:
                        var i = this.ctx;
                        t.fillStyle = i.fillStyle,
                        t.strokeStyle = i.strokeStyle;
                        break;
                    case e.UNCOLORED:
                        var a = s.makeCssRgb(r[0], r[1], r[2]);
                        t.fillStyle = a,
                        t.strokeStyle = a;
                        break;
                    default:
                        l("Unsupported paint type: " + n)
                    }
                },
                getPattern: function(t, e) {
                    var n = this.createPatternCanvas(e);
                    return (t = this.ctx).setTransform.apply(t, this.baseTransform),
                    t.transform.apply(t, this.matrix),
                    this.scaleToContext(),
                    t.createPattern(n, "repeat")
                }
            },
            t
        }();
        e.getShadingPatternFromIR = r,
        e.TilingPattern = f
    }
    , function(t, e, n) {
        "use strict";
        (function(t) {
            if ("undefined" == typeof PDFJS || !PDFJS.compatibilityChecked) {
                var e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : void 0
                  , n = "undefined" != typeof navigator && navigator.userAgent || ""
                  , r = /Android/.test(n)
                  , i = /Android\s[0-2][^\d]/.test(n)
                  , a = /Android\s[0-4][^\d]/.test(n)
                  , s = n.indexOf("Chrom") >= 0
                  , o = /Chrome\/(39|40)\./.test(n)
                  , c = n.indexOf("CriOS") >= 0
                  , l = n.indexOf("Trident") >= 0
                  , h = /\b(iPad|iPhone|iPod)(?=;)/.test(n)
                  , u = n.indexOf("Opera") >= 0
                  , d = /Safari\//.test(n) && !/(Chrome\/|Android\s)/.test(n)
                  , f = "object" == typeof window && "object" == typeof document;
                "undefined" == typeof PDFJS && (e.PDFJS = {}),
                PDFJS.compatibilityChecked = !0,
                function() {
                    function t(t, e) {
                        return new r(this.slice(t, e))
                    }
                    function n(t, e) {
                        arguments.length < 2 && (e = 0);
                        for (var n = 0, r = t.length; n < r; ++n,
                        ++e)
                            this[e] = 255 & t[n]
                    }
                    function r(e) {
                        var r, i, a;
                        if ("number" == typeof e)
                            for (r = [],
                            i = 0; i < e; ++i)
                                r[i] = 0;
                        else if ("slice"in e)
                            r = e.slice(0);
                        else
                            for (r = [],
                            i = 0,
                            a = e.length; i < a; ++i)
                                r[i] = e[i];
                        return r.subarray = t,
                        r.buffer = r,
                        r.byteLength = r.length,
                        r.set = n,
                        "object" == typeof e && e.buffer && (r.buffer = e.buffer),
                        r
                    }
                    if ("undefined" != typeof Uint8Array)
                        return void 0 === Uint8Array.prototype.subarray && (Uint8Array.prototype.subarray = function(t, e) {
                            return new Uint8Array(this.slice(t, e))
                        }
                        ,
                        Float32Array.prototype.subarray = function(t, e) {
                            return new Float32Array(this.slice(t, e))
                        }
                        ),
                        void ("undefined" == typeof Float64Array && (e.Float64Array = Float32Array));
                    e.Uint8Array = r,
                    e.Int8Array = r,
                    e.Uint32Array = r,
                    e.Int32Array = r,
                    e.Uint16Array = r,
                    e.Float32Array = r,
                    e.Float64Array = r
                }(),
                e.URL || (e.URL = e.webkitURL),
                function() {
                    if (void 0 !== Object.defineProperty) {
                        var t = !0;
                        try {
                            f && Object.defineProperty(new Image, "id", {
                                value: "test"
                            });
                            var e = function() {};
                            e.prototype = {
                                get id() {}
                            },
                            Object.defineProperty(new e, "id", {
                                value: "",
                                configurable: !0,
                                enumerable: !0,
                                writable: !1
                            })
                        } catch (e) {
                            t = !1
                        }
                        if (t)
                            return
                    }
                    Object.defineProperty = function(t, e, n) {
                        delete t[e],
                        "get"in n && t.__defineGetter__(e, n.get),
                        "set"in n && t.__defineSetter__(e, n.set),
                        "value"in n && (t.__defineSetter__(e, function(t) {
                            return this.__defineGetter__(e, function() {
                                return t
                            }),
                            t
                        }),
                        t[e] = n.value)
                    }
                }(),
                function() {
                    if ("undefined" != typeof XMLHttpRequest) {
                        var t = XMLHttpRequest.prototype
                          , e = new XMLHttpRequest;
                        "overrideMimeType"in e || Object.defineProperty(t, "overrideMimeType", {
                            value: function(t) {}
                        }),
                        "responseType"in e || (Object.defineProperty(t, "responseType", {
                            get: function() {
                                return this._responseType || "text"
                            },
                            set: function(t) {
                                "text" !== t && "arraybuffer" !== t || (this._responseType = t,
                                "arraybuffer" === t && "function" == typeof this.overrideMimeType && this.overrideMimeType("text/plain; charset=x-user-defined"))
                            }
                        }),
                        "undefined" == typeof VBArray ? Object.defineProperty(t, "response", {
                            get: function() {
                                if ("arraybuffer" !== this.responseType)
                                    return this.responseText;
                                var t, e = this.responseText, n = e.length, r = new Uint8Array(n);
                                for (t = 0; t < n; ++t)
                                    r[t] = 255 & e.charCodeAt(t);
                                return r.buffer
                            }
                        }) : Object.defineProperty(t, "response", {
                            get: function() {
                                return "arraybuffer" === this.responseType ? new Uint8Array(new VBArray(this.responseBody).toArray()) : this.responseText
                            }
                        }))
                    }
                }(),
                function() {
                    if (!("btoa"in e)) {
                        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        e.btoa = function(e) {
                            var n, r, i = "";
                            for (n = 0,
                            r = e.length; n < r; n += 3) {
                                var a = 255 & e.charCodeAt(n)
                                  , s = 255 & e.charCodeAt(n + 1)
                                  , o = 255 & e.charCodeAt(n + 2)
                                  , c = a >> 2
                                  , l = (3 & a) << 4 | s >> 4
                                  , h = n + 1 < r ? (15 & s) << 2 | o >> 6 : 64
                                  , u = n + 2 < r ? 63 & o : 64;
                                i += t.charAt(c) + t.charAt(l) + t.charAt(h) + t.charAt(u)
                            }
                            return i
                        }
                    }
                }(),
                function() {
                    if (!("atob"in e)) {
                        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        e.atob = function(e) {
                            if ((e = e.replace(/=+$/, "")).length % 4 == 1)
                                throw new Error("bad atob input");
                            for (var n, r, i = 0, a = 0, s = ""; r = e.charAt(a++); ~r && (n = i % 4 ? 64 * n + r : r,
                            i++ % 4) ? s += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0)
                                r = t.indexOf(r);
                            return s
                        }
                    }
                }(),
                void 0 === Function.prototype.bind && (Function.prototype.bind = function(t) {
                    var e = this
                      , n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var r = n.concat(Array.prototype.slice.call(arguments));
                        return e.apply(t, r)
                    }
                }
                ),
                f && ("dataset"in document.createElement("div") || Object.defineProperty(HTMLElement.prototype, "dataset", {
                    get: function() {
                        if (this._dataset)
                            return this._dataset;
                        for (var t = {}, e = 0, n = this.attributes.length; e < n; e++) {
                            var r = this.attributes[e];
                            "data-" === r.name.substring(0, 5) && (t[r.name.substring(5).replace(/\-([a-z])/g, function(t, e) {
                                return e.toUpperCase()
                            })] = r.value)
                        }
                        return Object.defineProperty(this, "_dataset", {
                            value: t,
                            writable: !1,
                            enumerable: !1
                        }),
                        t
                    },
                    enumerable: !0
                })),
                function() {
                    function t(t, e, n, r) {
                        var i = (t.className || "").split(/\s+/g);
                        "" === i[0] && i.shift();
                        var a = i.indexOf(e);
                        return a < 0 && n && i.push(e),
                        a >= 0 && r && i.splice(a, 1),
                        t.className = i.join(" "),
                        a >= 0
                    }
                    if (f && !("classList"in document.createElement("div"))) {
                        var e = {
                            add: function(e) {
                                t(this.element, e, !0, !1)
                            },
                            contains: function(e) {
                                return t(this.element, e, !1, !1)
                            },
                            remove: function(e) {
                                t(this.element, e, !1, !0)
                            },
                            toggle: function(e) {
                                t(this.element, e, !0, !0)
                            }
                        };
                        Object.defineProperty(HTMLElement.prototype, "classList", {
                            get: function() {
                                if (this._classList)
                                    return this._classList;
                                var t = Object.create(e, {
                                    element: {
                                        value: this,
                                        writable: !1,
                                        enumerable: !0
                                    }
                                });
                                return Object.defineProperty(this, "_classList", {
                                    value: t,
                                    writable: !1,
                                    enumerable: !1
                                }),
                                t
                            },
                            enumerable: !0
                        })
                    }
                }(),
                function() {
                    if (!("undefined" == typeof importScripts || "console"in e)) {
                        var t = {}
                          , n = {
                            log: function() {
                                var t = Array.prototype.slice.call(arguments);
                                e.postMessage({
                                    targetName: "main",
                                    action: "console_log",
                                    data: t
                                })
                            },
                            error: function() {
                                var t = Array.prototype.slice.call(arguments);
                                e.postMessage({
                                    targetName: "main",
                                    action: "console_error",
                                    data: t
                                })
                            },
                            time: function(e) {
                                t[e] = Date.now()
                            },
                            timeEnd: function(e) {
                                var n = t[e];
                                if (!n)
                                    throw new Error("Unknown timer name " + e);
                                this.log("Timer:", e, Date.now() - n)
                            }
                        };
                        e.console = n
                    }
                }(),
                function() {
                    if (f) {
                        if ("console"in window)
                            return "bind"in console.log ? void 0 : (console.log = function(t) {
                                return function(e) {
                                    return t(e)
                                }
                            }(console.log),
                            console.error = function(t) {
                                return function(e) {
                                    return t(e)
                                }
                            }(console.error),
                            void (console.warn = function(t) {
                                return function(e) {
                                    return t(e)
                                }
                            }(console.warn)));
                        window.console = {
                            log: function() {},
                            error: function() {},
                            warn: function() {}
                        }
                    }
                }(),
                function() {
                    function t(t) {
                        e(t.target) && t.stopPropagation()
                    }
                    function e(t) {
                        return t.disabled || t.parentNode && e(t.parentNode)
                    }
                    u && document.addEventListener("click", t, !0)
                }(),
                (l || c) && (PDFJS.disableCreateObjectURL = !0),
                "undefined" != typeof navigator && ("language"in navigator || (PDFJS.locale = navigator.userLanguage || "en-US")),
                (d || i || o || h) && (PDFJS.disableRange = !0,
                PDFJS.disableStream = !0),
                f && (history.pushState && !i || (PDFJS.disableHistory = !0)),
                function() {
                    if (f)
                        if (window.CanvasPixelArray)
                            "function" != typeof window.CanvasPixelArray.prototype.set && (window.CanvasPixelArray.prototype.set = function(t) {
                                for (var e = 0, n = this.length; e < n; e++)
                                    this[e] = t[e]
                            }
                            );
                        else {
                            var t, e = !1;
                            if (s ? e = (t = n.match(/Chrom(e|ium)\/([0-9]+)\./)) && parseInt(t[2]) < 21 : r ? e = a : d && (e = (t = n.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//)) && parseInt(t[1]) < 6),
                            e) {
                                var i = window.CanvasRenderingContext2D.prototype
                                  , o = i.createImageData;
                                i.createImageData = function(t, e) {
                                    var n = o.call(this, t, e);
                                    return n.data.set = function(t) {
                                        for (var e = 0, n = this.length; e < n; e++)
                                            this[e] = t[e]
                                    }
                                    ,
                                    n
                                }
                                ,
                                i = null
                            }
                        }
                }(),
                function() {
                    function t() {
                        window.requestAnimationFrame = function(t) {
                            return window.setTimeout(t, 20)
                        }
                        ,
                        window.cancelAnimationFrame = function(t) {
                            window.clearTimeout(t)
                        }
                    }
                    f && (h ? t() : "requestAnimationFrame"in window || (window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame,
                    window.requestAnimationFrame || t()))
                }(),
                (h || r) && (PDFJS.maxCanvasPixels = 5242880),
                f && l && window.parent !== window && (PDFJS.disableFullscreen = !0),
                f && ("currentScript"in document || Object.defineProperty(document, "currentScript", {
                    get: function() {
                        var t = document.getElementsByTagName("script");
                        return t[t.length - 1]
                    },
                    enumerable: !0,
                    configurable: !0
                })),
                function() {
                    if (f) {
                        var t = document.createElement("input");
                        try {
                            t.type = "number"
                        } catch (r) {
                            var e = t.constructor.prototype
                              , n = Object.getOwnPropertyDescriptor(e, "type");
                            Object.defineProperty(e, "type", {
                                get: function() {
                                    return n.get.call(this)
                                },
                                set: function(t) {
                                    n.set.call(this, "number" === t ? "text" : t)
                                },
                                enumerable: !0,
                                configurable: !0
                            })
                        }
                    }
                }(),
                function() {
                    if (f && document.attachEvent) {
                        var t = document.constructor.prototype
                          , e = Object.getOwnPropertyDescriptor(t, "readyState");
                        Object.defineProperty(t, "readyState", {
                            get: function() {
                                var t = e.get.call(this);
                                return "interactive" === t ? "loading" : t
                            },
                            set: function(t) {
                                e.set.call(this, t)
                            },
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                }(),
                f && void 0 === Element.prototype.remove && (Element.prototype.remove = function() {
                    this.parentNode && this.parentNode.removeChild(this)
                }
                ),
                function() {
                    if (e.Promise)
                        return "function" != typeof e.Promise.all && (e.Promise.all = function(t) {
                            var n, r, i = 0, a = [], s = new e.Promise(function(t, e) {
                                n = t,
                                r = e
                            }
                            );
                            return t.forEach(function(t, e) {
                                i++,
                                t.then(function(t) {
                                    a[e] = t,
                                    0 === --i && n(a)
                                }, r)
                            }),
                            0 === i && n(a),
                            s
                        }
                        ),
                        "function" != typeof e.Promise.resolve && (e.Promise.resolve = function(t) {
                            return new e.Promise(function(e) {
                                e(t)
                            }
                            )
                        }
                        ),
                        "function" != typeof e.Promise.reject && (e.Promise.reject = function(t) {
                            return new e.Promise(function(e, n) {
                                n(t)
                            }
                            )
                        }
                        ),
                        void ("function" != typeof e.Promise.prototype.catch && (e.Promise.prototype.catch = function(t) {
                            return e.Promise.prototype.then(void 0, t)
                        }
                        ));
                    var t = 0
                      , n = 1
                      , r = 2
                      , i = 500
                      , a = {
                        handlers: [],
                        running: !1,
                        unhandledRejections: [],
                        pendingRejectionCheck: !1,
                        scheduleHandlers: function(e) {
                            e._status !== t && (this.handlers = this.handlers.concat(e._handlers),
                            e._handlers = [],
                            this.running || (this.running = !0,
                            setTimeout(this.runHandlers.bind(this), 0)))
                        },
                        runHandlers: function() {
                            for (var t = 1, e = Date.now() + t; this.handlers.length > 0; ) {
                                var i = this.handlers.shift()
                                  , a = i.thisPromise._status
                                  , s = i.thisPromise._value;
                                try {
                                    a === n ? "function" == typeof i.onResolve && (s = i.onResolve(s)) : "function" == typeof i.onReject && (s = i.onReject(s),
                                    a = n,
                                    i.thisPromise._unhandledRejection && this.removeUnhandeledRejection(i.thisPromise))
                                } catch (t) {
                                    a = r,
                                    s = t
                                }
                                if (i.nextPromise._updateStatus(a, s),
                                Date.now() >= e)
                                    break
                            }
                            this.handlers.length > 0 ? setTimeout(this.runHandlers.bind(this), 0) : this.running = !1
                        },
                        addUnhandledRejection: function(t) {
                            this.unhandledRejections.push({
                                promise: t,
                                time: Date.now()
                            }),
                            this.scheduleRejectionCheck()
                        },
                        removeUnhandeledRejection: function(t) {
                            t._unhandledRejection = !1;
                            for (var e = 0; e < this.unhandledRejections.length; e++)
                                this.unhandledRejections[e].promise === t && (this.unhandledRejections.splice(e),
                                e--)
                        },
                        scheduleRejectionCheck: function() {
                            this.pendingRejectionCheck || (this.pendingRejectionCheck = !0,
                            setTimeout(function() {
                                this.pendingRejectionCheck = !1;
                                for (var t = Date.now(), e = 0; e < this.unhandledRejections.length; e++)
                                    if (t - this.unhandledRejections[e].time > i) {
                                        var n = this.unhandledRejections[e].promise._value
                                          , r = "Unhandled rejection: " + n;
                                        n.stack && (r += "\n" + n.stack);
                                        try {
                                            throw new Error(r)
                                        } catch (t) {
                                            console.warn(r)
                                        }
                                        this.unhandledRejections.splice(e),
                                        e--
                                    }
                                this.unhandledRejections.length && this.scheduleRejectionCheck()
                            }
                            .bind(this), i))
                        }
                    }
                      , s = function(e) {
                        this._status = t,
                        this._handlers = [];
                        try {
                            e.call(this, this._resolve.bind(this), this._reject.bind(this))
                        } catch (t) {
                            this._reject(t)
                        }
                    };
                    s.all = function(t) {
                        function e(t) {
                            a._status !== r && (c = [],
                            i(t))
                        }
                        var n, i, a = new s(function(t, e) {
                            n = t,
                            i = e
                        }
                        ), o = t.length, c = [];
                        if (0 === o)
                            return n(c),
                            a;
                        for (var l = 0, h = t.length; l < h; ++l) {
                            var u = t[l]
                              , d = function(t) {
                                return function(e) {
                                    a._status !== r && (c[t] = e,
                                    0 === --o && n(c))
                                }
                            }(l);
                            s.isPromise(u) ? u.then(d, e) : d(u)
                        }
                        return a
                    }
                    ,
                    s.isPromise = function(t) {
                        return t && "function" == typeof t.then
                    }
                    ,
                    s.resolve = function(t) {
                        return new s(function(e) {
                            e(t)
                        }
                        )
                    }
                    ,
                    s.reject = function(t) {
                        return new s(function(e, n) {
                            n(t)
                        }
                        )
                    }
                    ,
                    s.prototype = {
                        _status: null,
                        _value: null,
                        _handlers: null,
                        _unhandledRejection: null,
                        _updateStatus: function(t, e) {
                            this._status !== n && this._status !== r && (t === n && s.isPromise(e) ? e.then(this._updateStatus.bind(this, n), this._updateStatus.bind(this, r)) : (this._status = t,
                            this._value = e,
                            t === r && 0 === this._handlers.length && (this._unhandledRejection = !0,
                            a.addUnhandledRejection(this)),
                            a.scheduleHandlers(this)))
                        },
                        _resolve: function(t) {
                            this._updateStatus(n, t)
                        },
                        _reject: function(t) {
                            this._updateStatus(r, t)
                        },
                        then: function(t, e) {
                            var n = new s(function(t, e) {
                                this.resolve = t,
                                this.reject = e
                            }
                            );
                            return this._handlers.push({
                                thisPromise: this,
                                onResolve: t,
                                onReject: e,
                                nextPromise: n
                            }),
                            a.scheduleHandlers(this),
                            n
                        },
                        catch: function(t) {
                            return this.then(void 0, t)
                        }
                    },
                    e.Promise = s
                }(),
                function() {
                    function t() {
                        this.id = "$weakmap" + n++
                    }
                    if (!e.WeakMap) {
                        var n = 0;
                        t.prototype = {
                            has: function(t) {
                                return !!Object.getOwnPropertyDescriptor(t, this.id)
                            },
                            get: function(t, e) {
                                return this.has(t) ? t[this.id] : e
                            },
                            set: function(t, e) {
                                Object.defineProperty(t, this.id, {
                                    value: e,
                                    enumerable: !1,
                                    configurable: !0
                                })
                            },
                            delete: function(t) {
                                delete t[this.id]
                            }
                        },
                        e.WeakMap = t
                    }
                }(),
                function() {
                    function t(t) {
                        return void 0 !== u[t]
                    }
                    function n() {
                        o.call(this),
                        this._isInvalid = !0
                    }
                    function r(t) {
                        return "" === t && n.call(this),
                        t.toLowerCase()
                    }
                    function i(t) {
                        var e = t.charCodeAt(0);
                        return e > 32 && e < 127 && -1 === [34, 35, 60, 62, 63, 96].indexOf(e) ? t : encodeURIComponent(t)
                    }
                    function a(t) {
                        var e = t.charCodeAt(0);
                        return e > 32 && e < 127 && -1 === [34, 35, 60, 62, 96].indexOf(e) ? t : encodeURIComponent(t)
                    }
                    function s(e, s, o) {
                        function c(t) {
                            b.push(t)
                        }
                        var l = s || "scheme start"
                          , h = 0
                          , m = ""
                          , A = !1
                          , v = !1
                          , b = [];
                        t: for (; (e[h - 1] !== f || 0 === h) && !this._isInvalid; ) {
                            var y = e[h];
                            switch (l) {
                            case "scheme start":
                                if (!y || !p.test(y)) {
                                    if (s) {
                                        c("Invalid scheme.");
                                        break t
                                    }
                                    m = "",
                                    l = "no scheme";
                                    continue
                                }
                                m += y.toLowerCase(),
                                l = "scheme";
                                break;
                            case "scheme":
                                if (y && g.test(y))
                                    m += y.toLowerCase();
                                else {
                                    if (":" !== y) {
                                        if (s) {
                                            if (y === f)
                                                break t;
                                            c("Code point not allowed in scheme: " + y);
                                            break t
                                        }
                                        m = "",
                                        h = 0,
                                        l = "no scheme";
                                        continue
                                    }
                                    if (this._scheme = m,
                                    m = "",
                                    s)
                                        break t;
                                    t(this._scheme) && (this._isRelative = !0),
                                    l = "file" === this._scheme ? "relative" : this._isRelative && o && o._scheme === this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                                }
                                break;
                            case "scheme data":
                                "?" === y ? (this._query = "?",
                                l = "query") : "#" === y ? (this._fragment = "#",
                                l = "fragment") : y !== f && "\t" !== y && "\n" !== y && "\r" !== y && (this._schemeData += i(y));
                                break;
                            case "no scheme":
                                if (o && t(o._scheme)) {
                                    l = "relative";
                                    continue
                                }
                                c("Missing scheme."),
                                n.call(this);
                                break;
                            case "relative or authority":
                                if ("/" !== y || "/" !== e[h + 1]) {
                                    c("Expected /, got: " + y),
                                    l = "relative";
                                    continue
                                }
                                l = "authority ignore slashes";
                                break;
                            case "relative":
                                if (this._isRelative = !0,
                                "file" !== this._scheme && (this._scheme = o._scheme),
                                y === f) {
                                    this._host = o._host,
                                    this._port = o._port,
                                    this._path = o._path.slice(),
                                    this._query = o._query,
                                    this._username = o._username,
                                    this._password = o._password;
                                    break t
                                }
                                if ("/" === y || "\\" === y)
                                    "\\" === y && c("\\ is an invalid code point."),
                                    l = "relative slash";
                                else if ("?" === y)
                                    this._host = o._host,
                                    this._port = o._port,
                                    this._path = o._path.slice(),
                                    this._query = "?",
                                    this._username = o._username,
                                    this._password = o._password,
                                    l = "query";
                                else {
                                    if ("#" !== y) {
                                        var x = e[h + 1]
                                          , S = e[h + 2];
                                        ("file" !== this._scheme || !p.test(y) || ":" !== x && "|" !== x || S !== f && "/" !== S && "\\" !== S && "?" !== S && "#" !== S) && (this._host = o._host,
                                        this._port = o._port,
                                        this._username = o._username,
                                        this._password = o._password,
                                        this._path = o._path.slice(),
                                        this._path.pop()),
                                        l = "relative path";
                                        continue
                                    }
                                    this._host = o._host,
                                    this._port = o._port,
                                    this._path = o._path.slice(),
                                    this._query = o._query,
                                    this._fragment = "#",
                                    this._username = o._username,
                                    this._password = o._password,
                                    l = "fragment"
                                }
                                break;
                            case "relative slash":
                                if ("/" !== y && "\\" !== y) {
                                    "file" !== this._scheme && (this._host = o._host,
                                    this._port = o._port,
                                    this._username = o._username,
                                    this._password = o._password),
                                    l = "relative path";
                                    continue
                                }
                                "\\" === y && c("\\ is an invalid code point."),
                                l = "file" === this._scheme ? "file host" : "authority ignore slashes";
                                break;
                            case "authority first slash":
                                if ("/" !== y) {
                                    c("Expected '/', got: " + y),
                                    l = "authority ignore slashes";
                                    continue
                                }
                                l = "authority second slash";
                                break;
                            case "authority second slash":
                                if (l = "authority ignore slashes",
                                "/" !== y) {
                                    c("Expected '/', got: " + y);
                                    continue
                                }
                                break;
                            case "authority ignore slashes":
                                if ("/" !== y && "\\" !== y) {
                                    l = "authority";
                                    continue
                                }
                                c("Expected authority, got: " + y);
                                break;
                            case "authority":
                                if ("@" === y) {
                                    A && (c("@ already seen."),
                                    m += "%40"),
                                    A = !0;
                                    for (var w = 0; w < m.length; w++) {
                                        var k = m[w];
                                        if ("\t" !== k && "\n" !== k && "\r" !== k)
                                            if (":" !== k || null !== this._password) {
                                                var C = i(k);
                                                null !== this._password ? this._password += C : this._username += C
                                            } else
                                                this._password = "";
                                        else
                                            c("Invalid whitespace in authority.")
                                    }
                                    m = ""
                                } else {
                                    if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                        h -= m.length,
                                        m = "",
                                        l = "host";
                                        continue
                                    }
                                    m += y
                                }
                                break;
                            case "file host":
                                if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                    2 !== m.length || !p.test(m[0]) || ":" !== m[1] && "|" !== m[1] ? 0 === m.length ? l = "relative path start" : (this._host = r.call(this, m),
                                    m = "",
                                    l = "relative path start") : l = "relative path";
                                    continue
                                }
                                "\t" === y || "\n" === y || "\r" === y ? c("Invalid whitespace in file host.") : m += y;
                                break;
                            case "host":
                            case "hostname":
                                if (":" !== y || v) {
                                    if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                        if (this._host = r.call(this, m),
                                        m = "",
                                        l = "relative path start",
                                        s)
                                            break t;
                                        continue
                                    }
                                    "\t" !== y && "\n" !== y && "\r" !== y ? ("[" === y ? v = !0 : "]" === y && (v = !1),
                                    m += y) : c("Invalid code point in host/hostname: " + y)
                                } else if (this._host = r.call(this, m),
                                m = "",
                                l = "port",
                                "hostname" === s)
                                    break t;
                                break;
                            case "port":
                                if (/[0-9]/.test(y))
                                    m += y;
                                else {
                                    if (y === f || "/" === y || "\\" === y || "?" === y || "#" === y || s) {
                                        if ("" !== m) {
                                            var _ = parseInt(m, 10);
                                            _ !== u[this._scheme] && (this._port = _ + ""),
                                            m = ""
                                        }
                                        if (s)
                                            break t;
                                        l = "relative path start";
                                        continue
                                    }
                                    "\t" === y || "\n" === y || "\r" === y ? c("Invalid code point in port: " + y) : n.call(this)
                                }
                                break;
                            case "relative path start":
                                if ("\\" === y && c("'\\' not allowed in path."),
                                l = "relative path",
                                "/" !== y && "\\" !== y)
                                    continue;
                                break;
                            case "relative path":
                                if (y !== f && "/" !== y && "\\" !== y && (s || "?" !== y && "#" !== y))
                                    "\t" !== y && "\n" !== y && "\r" !== y && (m += i(y));
                                else {
                                    "\\" === y && c("\\ not allowed in relative path.");
                                    var T;
                                    (T = d[m.toLowerCase()]) && (m = T),
                                    ".." === m ? (this._path.pop(),
                                    "/" !== y && "\\" !== y && this._path.push("")) : "." === m && "/" !== y && "\\" !== y ? this._path.push("") : "." !== m && ("file" === this._scheme && 0 === this._path.length && 2 === m.length && p.test(m[0]) && "|" === m[1] && (m = m[0] + ":"),
                                    this._path.push(m)),
                                    m = "",
                                    "?" === y ? (this._query = "?",
                                    l = "query") : "#" === y && (this._fragment = "#",
                                    l = "fragment")
                                }
                                break;
                            case "query":
                                s || "#" !== y ? y !== f && "\t" !== y && "\n" !== y && "\r" !== y && (this._query += a(y)) : (this._fragment = "#",
                                l = "fragment");
                                break;
                            case "fragment":
                                y !== f && "\t" !== y && "\n" !== y && "\r" !== y && (this._fragment += y)
                            }
                            h++
                        }
                    }
                    function o() {
                        this._scheme = "",
                        this._schemeData = "",
                        this._username = "",
                        this._password = null,
                        this._host = "",
                        this._port = "",
                        this._path = [],
                        this._query = "",
                        this._fragment = "",
                        this._isInvalid = !1,
                        this._isRelative = !1
                    }
                    function c(t, e) {
                        void 0 === e || e instanceof c || (e = new c(String(e))),
                        this._url = t,
                        o.call(this);
                        var n = t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                        s.call(this, n, null, e)
                    }
                    var l = !1;
                    try {
                        if ("function" == typeof URL && "object" == typeof URL.prototype && "origin"in URL.prototype) {
                            var h = new URL("b","http://a");
                            h.pathname = "c%20d",
                            l = "http://a/c%20d" === h.href
                        }
                    } catch (t) {}
                    if (!l) {
                        var u = Object.create(null);
                        u.ftp = 21,
                        u.file = 0,
                        u.gopher = 70,
                        u.http = 80,
                        u.https = 443,
                        u.ws = 80,
                        u.wss = 443;
                        var d = Object.create(null);
                        d["%2e"] = ".",
                        d[".%2e"] = "..",
                        d["%2e."] = "..",
                        d["%2e%2e"] = "..";
                        var f, p = /[a-zA-Z]/, g = /[a-zA-Z0-9\+\-\.]/;
                        c.prototype = {
                            toString: function() {
                                return this.href
                            },
                            get href() {
                                if (this._isInvalid)
                                    return this._url;
                                var t = "";
                                return "" === this._username && null === this._password || (t = this._username + (null !== this._password ? ":" + this._password : "") + "@"),
                                this.protocol + (this._isRelative ? "//" + t + this.host : "") + this.pathname + this._query + this._fragment
                            },
                            set href(t) {
                                o.call(this),
                                s.call(this, t)
                            },
                            get protocol() {
                                return this._scheme + ":"
                            },
                            set protocol(t) {
                                this._isInvalid || s.call(this, t + ":", "scheme start")
                            },
                            get host() {
                                return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                            },
                            set host(t) {
                                !this._isInvalid && this._isRelative && s.call(this, t, "host")
                            },
                            get hostname() {
                                return this._host
                            },
                            set hostname(t) {
                                !this._isInvalid && this._isRelative && s.call(this, t, "hostname")
                            },
                            get port() {
                                return this._port
                            },
                            set port(t) {
                                !this._isInvalid && this._isRelative && s.call(this, t, "port")
                            },
                            get pathname() {
                                return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                            },
                            set pathname(t) {
                                !this._isInvalid && this._isRelative && (this._path = [],
                                s.call(this, t, "relative path start"))
                            },
                            get search() {
                                return this._isInvalid || !this._query || "?" === this._query ? "" : this._query
                            },
                            set search(t) {
                                !this._isInvalid && this._isRelative && (this._query = "?",
                                "?" === t[0] && (t = t.slice(1)),
                                s.call(this, t, "query"))
                            },
                            get hash() {
                                return this._isInvalid || !this._fragment || "#" === this._fragment ? "" : this._fragment
                            },
                            set hash(t) {
                                this._isInvalid || (this._fragment = "#",
                                "#" === t[0] && (t = t.slice(1)),
                                s.call(this, t, "fragment"))
                            },
                            get origin() {
                                var t;
                                if (this._isInvalid || !this._scheme)
                                    return "";
                                switch (this._scheme) {
                                case "data":
                                case "file":
                                case "javascript":
                                case "mailto":
                                    return "null"
                                }
                                return (t = this.host) ? this._scheme + "://" + t : ""
                            }
                        };
                        var m = e.URL;
                        m && (c.createObjectURL = function(t) {
                            return m.createObjectURL.apply(m, arguments)
                        }
                        ,
                        c.revokeObjectURL = function(t) {
                            m.revokeObjectURL(t)
                        }
                        ),
                        e.URL = c
                    }
                }()
            }
        }
        ).call(e, n(6))
    }
    , function(t, e, n) {
        "use strict";
        var r = n(0)
          , i = n(9)
          , a = n(3)
          , s = n(5)
          , o = n(2)
          , c = n(1)
          , l = n(4);
        e.PDFJS = i.PDFJS,
        e.build = a.build,
        e.version = a.version,
        e.getDocument = a.getDocument,
        e.PDFDataRangeTransport = a.PDFDataRangeTransport,
        e.PDFWorker = a.PDFWorker,
        e.renderTextLayer = s.renderTextLayer,
        e.AnnotationLayer = o.AnnotationLayer,
        e.CustomStyle = c.CustomStyle,
        e.createPromiseCapability = r.createPromiseCapability,
        e.PasswordResponses = r.PasswordResponses,
        e.InvalidPDFException = r.InvalidPDFException,
        e.MissingPDFException = r.MissingPDFException,
        e.SVGGraphics = l.SVGGraphics,
        e.UnexpectedResponseException = r.UnexpectedResponseException,
        e.OPS = r.OPS,
        e.UNSUPPORTED_FEATURES = r.UNSUPPORTED_FEATURES,
        e.isValidUrl = c.isValidUrl,
        e.createValidAbsoluteUrl = r.createValidAbsoluteUrl,
        e.createObjectURL = r.createObjectURL,
        e.removeNullCharacters = r.removeNullCharacters,
        e.shadow = r.shadow,
        e.createBlob = r.createBlob,
        e.RenderingCancelledException = c.RenderingCancelledException,
        e.getFilenameFromUrl = c.getFilenameFromUrl,
        e.addLinkAttributes = c.addLinkAttributes
    }
    ])
});
