!function (e, t) { if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else { var n = t(); for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o] } }(window, (function () { return function (e) { var t = {}; function n(o) { if (t[o]) return t[o].exports; var i = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports } return n.m = e, n.c = t, n.d = function (e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) { return e[t] }.bind(null, i)); return o }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0) }([function (e, t, n) { "use strict"; n.r(t); var o, i = "fslightbox-", r = "".concat(i, "styles"), s = "".concat(i, "cursor-grabbing"), a = "".concat(i, "full-dimension"), c = "".concat(i, "flex-centered"), l = "".concat(i, "open"), u = "".concat(i, "transform-transition"), d = "".concat(i, "absoluted"), p = "".concat(i, "slide-btn"), f = "".concat(p, "-container"), h = "".concat(i, "fade-in"), m = "".concat(i, "fade-out"), g = h + "-strong", v = m + "-strong", b = "".concat(i, "opacity-"), x = "".concat(b, "1"), y = "".concat(i, "source"); function S(e) { return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o)); function w(e) { var t, n = e.props, o = 0, i = {}; this.getSourceTypeFromLocalStorageByUrl = function (e) { return t[e] ? t[e] : r(e) }, this.handleReceivedSourceTypeForUrl = function (e, n) { !1 === i[n] && (o--, "invalid" !== e ? i[n] = e : delete i[n], 0 === o && (!function (e, t) { for (var n in t) e[n] = t[n] }(t, i), localStorage.setItem("fslightbox-types", JSON.stringify(t)))) }; var r = function (e) { o++, i[e] = !1 }; n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () { }, this.handleReceivedSourceTypeForUrl = function () { }) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = r) } function L(e, t, n, o) { var i = e.data, r = e.elements.sources, s = n / o, a = 0; this.adjustSize = function () { if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c(); a = o > i.maxSourceHeight ? i.maxSourceHeight : o, c() }; var c = function () { r[t].style.width = a * s + "px", r[t].style.height = a + "px" } } function C(e, t) { var n = this, o = e.collections.sourceSizers, i = e.elements, r = i.sourceAnimationWrappers, s = i.sourceMainWrappers, a = i.sources, c = e.resolve; function l(e, n) { o[t] = c(L, [t, e, n]), o[t].adjustSize() } this.runActions = function (e, o) { a[t].classList.add(x), r[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n.runActions = l } } function F(e, t) { var n, o = this, i = e.elements.sources, r = e.props, s = (0, e.resolve)(C, [t]); this.handleImageLoad = function (e) { var t = e.target, n = t.naturalWidth, o = t.naturalHeight; s.runActions(n, o) }, this.handleVideoLoad = function (e) { var t = e.target, o = t.videoWidth, i = t.videoHeight; n = !0, s.runActions(o, i) }, this.handleNotMetaDatedVideoLoad = function () { n || o.handleYoutubeLoad() }, this.handleYoutubeLoad = function () { var e = 1920, t = 1080; r.maxYoutubeDimensions && (e = r.maxYoutubeDimensions.width, t = r.maxYoutubeDimensions.height), s.runActions(e, t) }, this.handleCustomLoad = function () { setTimeout((function () { var e = i[t]; s.runActions(e.offsetWidth, e.offsetHeight) })) } } function A(e, t, n) { var o = e.elements.sources, i = e.props.customClasses, r = i[t] ? i[t] : ""; o[t].className = n + " " + r } function E(e, t) { var n = e.elements.sources, o = e.props.customAttributes; for (var i in o[t]) n[t].setAttribute(i, o[t][i]) } function I(e, t) { var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, r = o.sourceAnimationWrappers, s = e.props.sources; i[t] = document.createElement("img"), A(e, t, y), i[t].src = s[t], i[t].onload = n[t].handleImageLoad, E(e, t), r[t].appendChild(i[t]) } function T(e, t) { var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, r = o.sourceAnimationWrappers, s = e.props, a = s.sources, c = s.videosPosters; i[t] = document.createElement("video"), A(e, t, y), i[t].src = a[t], i[t].onloadedmetadata = function (e) { n[t].handleVideoLoad(e) }, i[t].controls = !0, E(e, t), c[t] && (i[t].poster = c[t]); var l = document.createElement("source"); l.src = a[t], i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t]) } function W(e, t) { var n = e.collections.sourceLoadHandlers, o = e.elements, r = o.sources, s = o.sourceAnimationWrappers, a = e.props.sources; r[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(i, "youtube-iframe")), r[t].src = "https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]), r[t].allowFullscreen = !0, E(e, t), s[t].appendChild(r[t]), n[t].handleYoutubeLoad() } function N(e, t) { var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, r = o.sourceAnimationWrappers, s = e.props.sources; i[t] = s[t], A(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), n[t].handleCustomLoad() } function z(e, t) { var n = e.elements, o = n.sources, r = n.sourceAnimationWrappers, s = n.sourceMainWrappers; e.props.sources; o[t] = document.createElement("div"), o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c), o[t].innerHTML = "Invalid source", r[t].classList.add(g), r[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild) } function M(e) { var t = e.collections, n = t.sourceLoadHandlers, o = t.sourcesRenderFunctions, i = e.core.sourceDisplayFacade, r = e.resolve; this.runActionsForSourceTypeAndIndex = function (t, s) { var a; switch ("invalid" !== t && (n[s] = r(F, [s])), t) { case "image": a = I; break; case "video": a = T; break; case "youtube": a = W; break; case "custom": a = N; break; default: a = z }o[s] = function () { return a(e, s) }, i.displaySourcesWhichShouldBeDisplayed() } } function H() { var e, t, n, o = { isUrlYoutubeOne: function (e) { var t = document.createElement("a"); return t.href = e, "www.youtube.com" === t.hostname }, getTypeFromResponseContentType: function (e) { return e.slice(0, e.indexOf("/")) } }; function i() { if (4 !== n.readyState) { if (2 === n.readyState) { var e; switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) { case "image": e = "image"; break; case "video": e = "video"; break; default: e = "invalid" }n.onreadystatechange = null, n.abort(), t(e) } } else t("invalid") } this.setUrlToCheck = function (t) { e = t }, this.getSourceType = function (r) { if (o.isUrlYoutubeOne(e)) return r("youtube"); t = r, (n = new XMLHttpRequest).onreadystatechange = i, n.open("GET", e, !0), n.send() } } function k(e, t, n) { var o = e.props, i = o.types, r = o.type, s = o.sources, a = e.resolve; this.getTypeSetByClientForIndex = function (e) { var t; return i && i[e] ? t = i[e] : r && (t = r), t }, this.retrieveTypeWithXhrForIndex = function (e) { var o = a(H); o.setUrlToCheck(s[e]), o.getSourceType((function (o) { t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e) })) } } function O(e, t) { var n = e.componentsServices.hideSourceLoaderIfNotYetCollection, o = e.elements, i = o.sourceWrappersContainer, r = o.sourceMainWrappers; r[t] = document.createElement("div"), r[t].className = "".concat(d, " ").concat(a, " ").concat(c), r[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>'; var s = r[t].firstChild; n[t] = function () { r[t].contains(s) && r[t].removeChild(s) }, i.appendChild(r[t]), function (e, t) { var n = e.elements, o = n.sourceMainWrappers, i = n.sourceAnimationWrappers; i[t] = document.createElement("div"), o[t].appendChild(i[t]) }(e, t) } function R(e, t, n, o) { var r = document.createElementNS("http://www.w3.org/2000/svg", "svg"); r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n); var s = document.createElementNS("http://www.w3.org/2000/svg", "path"); return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r } function D(e, t) { var n = document.createElement("div"); return n.className = "".concat(i, "toolbar-button ").concat(c), n.title = t, e.appendChild(n), n } function j(e, t) { var n = document.createElement("div"); n.className = "".concat(i, "toolbar"), t.appendChild(n), function (e, t) { var n = e.componentsServices, o = e.core.fullscreenToggler, i = e.data, r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", s = D(t); s.title = "Enter fullscreen"; var a = R(s, "20px", "0 0 18 18", r); n.enterFullscreen = function () { i.isFullscreenOpen = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z") }, n.exitFullscreen = function () { i.isFullscreenOpen = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", r) }, s.onclick = function () { i.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen() } }(e, n), function (e, t) { var n = D(t, "Close"); n.onclick = e.core.lightboxCloser.closeLightbox, R(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z") }(e, n) } function P(e) { var t = e.props.sources, n = e.elements.container, o = document.createElement("div"); o.className = "".concat(i, "nav"), n.appendChild(o), j(e, o), t.length > 1 && function (e, t) { var n = e.componentsServices, o = e.props.sources, r = (e.stageIndexes, document.createElement("div")); r.className = "".concat(i, "slide-number-container"); var s = document.createElement("div"); s.className = c; var a = document.createElement("span"); n.setSlideNumber = function (e) { return a.innerHTML = e }; var l = document.createElement("span"); l.className = "".concat(i, "slash"); var u = document.createElement("div"); u.innerHTML = o.length, r.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(u), t.appendChild(r), setTimeout((function () { s.offsetWidth > 55 && (r.style.justifyContent = "flex-start") })) }(e, o) } function X(e, t) { var n = this, o = e.elements.sourceMainWrappers, i = e.props, r = 0; this.byValue = function (e) { return r = e, n }, this.negative = function () { s(-a()) }, this.zero = function () { s(0) }, this.positive = function () { s(a()) }; var s = function (e) { o[t].style.transform = "translateX(".concat(e + r, "px)"), r = 0 }, a = function () { return (1 + i.slideDistance) * innerWidth } } function B(e, t, n, o) { var i = e.elements.container, r = n.charAt(0).toUpperCase() + n.slice(1), s = document.createElement("div"); s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(r, " slide"), s.onclick = t, function (e, t) { var n = document.createElement("div"); n.className = "".concat(p, " ").concat(c), R(n, "20px", "0 0 20 20", t), e.appendChild(n) }(s, o), i.appendChild(s) } function U(e, t) { var n = e.classList; n.contains(t) && n.remove(t) } function V(e) { var t = this, n = e.core, o = n.eventsDispatcher, i = n.fullscreenToggler, r = n.globalEventsController, s = n.scrollbarRecompensor, a = e.data, c = e.elements, u = e.props, d = e.slideSwipingProps; this.isLightboxFadingOut = !1, this.runActions = function () { t.isLightboxFadingOut = !0, c.container.classList.add(v), r.removeListeners(), u.exitFullscreenOnClose && a.isFullscreenOpen && i.exitFullscreen(), setTimeout((function () { t.isLightboxFadingOut = !1, d.isSwiping = !1, c.container.classList.remove(v), document.documentElement.classList.remove(l), s.removeRecompense(), document.body.removeChild(c.container), o.dispatch("onClose") }), 220) } } function Y(e) { var t, n, o, i = e.collections.sourceMainWrappersTransformers, r = e.componentsServices, s = e.core, a = s.classFacade, c = s.slideIndexChanger, l = s.sourceDisplayFacade, d = s.stageManager, p = e.elements.sourceAnimationWrappers, f = e.stageIndexes, v = (t = function () { a.removeFromEachElementClassIfContains("sourceAnimationWrappers", m) }, n = 250, o = [], function () { o.push(!0), setTimeout((function () { o.pop(), o.length || t() }), n) }); c.changeTo = function (e) { f.current = e, d.updateStageIndexes(), r.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed() }, c.jumpTo = function (e) { var t = f.current; c.changeTo(e), a.removeFromEachElementClassIfContains("sourceMainWrappers", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), i[e].zero(), setTimeout((function () { t !== f.current && i[t].negative() }), 220) } } function q(e) { return e.touches ? e.touches[0].clientX : e.clientX } function _(e) { var t = e.core, n = t.lightboxCloser, o = t.fullscreenToggler, i = t.slideChangeFacade; this.listener = function (e) { switch (e.key) { case "Escape": n.closeLightbox(); break; case "ArrowLeft": i.changeToPrevious(); break; case "ArrowRight": i.changeToNext(); break; case "F11": e.preventDefault(), o.enterFullscreen() } } } function J(e) { var t = e.collections.sourceMainWrappersTransformers, n = e.elements, o = e.slideSwipingProps, i = e.stageIndexes; this.runActionsForEvent = function (e) { var t, a, c; n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, a = s, (c = t.classList).contains(a) || c.add(a), o.swipedX = q(e) - o.downClientX, r(i.current, "zero"), void 0 !== i.previous && o.swipedX > 0 ? r(i.previous, "negative") : void 0 !== i.next && o.swipedX < 0 && r(i.next, "positive") }; var r = function (e, n) { t[e].byValue(o.swipedX)[n]() } } function G(e) { var t, n = e.props.sources, o = e.resolve, i = e.slideSwipingProps, r = o(J), s = (t = !1, function () { return !t && (t = !0, requestAnimationFrame((function () { t = !1 })), !0) }); 1 === n.length ? this.listener = function () { i.swipedX = 1 } : this.listener = function (e) { i.isSwiping && s() && r.runActionsForEvent(e) } } function $(e) { var t = e.collections.sourceMainWrappersTransformers, n = e.core.slideIndexChanger, o = e.elements.sourceMainWrappers, i = e.stageIndexes; this.runPositiveSwipedXActions = function () { void 0 === i.previous || (r("positive"), n.changeTo(i.previous)), r("zero") }, this.runNegativeSwipedXActions = function () { void 0 === i.next || (r("negative"), n.changeTo(i.next)), r("zero") }; var r = function (e) { o[i.current].classList.add(u), t[i.current][e]() } } function K(e, t) { e.contains(t) && e.removeChild(t) } function Q(e) { var t = e.core.lightboxCloser, n = e.elements, o = e.resolve, i = e.slideSwipingProps, r = o($); this.runNoSwipeActions = function () { K(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isSwiping = !1 }, this.runActions = function () { i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), K(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), i.isSwiping = !1 } } function Z(e) { var t = e.resolve, n = e.slideSwipingProps, o = t(Q); this.listener = function () { n.isSwiping && (n.swipedX ? o.runActions() : o.runNoSwipeActions()) } } function ee(e) { var t, n, o; n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) { for (var n = 0; n < o[e].length; n++)U(o[e][n], t) }, function (e) { var t = e.core.eventsDispatcher, n = e.props; t.dispatch = function (e) { n[e] && n[e]() } }(e), function (e) { var t = e.componentsServices, n = e.core.fullscreenToggler; n.enterFullscreen = function () { t.enterFullscreen(); var e = document.documentElement; e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen() }, n.exitFullscreen = function () { t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() } }(e), function (e) { var t = e.core, n = t.globalEventsController, o = t.windowResizeActioner, i = e.resolve, r = i(_), s = i(G), a = i(Z); n.attachListeners = function () { document.addEventListener("mousemove", s.listener), document.addEventListener("touchmove", s.listener, { passive: !0 }), document.addEventListener("mouseup", a.listener), document.addEventListener("touchend", a.listener, { passive: !0 }), addEventListener("resize", o.runActions), document.addEventListener("keydown", r.listener) }, n.removeListeners = function () { document.removeEventListener("mousemove", s.listener), document.removeEventListener("touchmove", s.listener), document.removeEventListener("mouseup", a.listener), document.removeEventListener("touchend", a.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", r.listener) } }(e), function (e) { var t = e.core.lightboxCloser, n = (0, e.resolve)(V); t.closeLightbox = function () { n.isLightboxFadingOut || n.runActions() } }(e), ne(e), function (e) { var t = e.data, n = e.core.scrollbarRecompensor; n.addRecompense = function () { "complete" === document.readyState ? o() : addEventListener("load", (function () { o(), n.addRecompense = o })) }; var o = function () { document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px") }; n.removeRecompense = function () { document.body.style.removeProperty("margin-right") } }(e), function (e) { var t = e.core, n = t.slideChangeFacade, o = t.slideIndexChanger, i = t.stageManager; e.props.sources.length > 1 ? (n.changeToPrevious = function () { o.jumpTo(i.getPreviousSlideIndex()) }, n.changeToNext = function () { o.jumpTo(i.getNextSlideIndex()) }) : (n.changeToPrevious = function () { }, n.changeToNext = function () { }) }(e), Y(e), function (e) { var t = e.core, n = t.classFacade, o = t.slideSwipingDown, i = e.elements.sources, r = e.slideSwipingProps, s = e.stageIndexes; o.listener = function (e) { r.isSwiping = !0, r.downClientX = q(e), r.swipedX = 0, "VIDEO" === e.target.tagName || e.touches || e.preventDefault(); var t = i[s.current]; t && t.contains(e.target) ? r.isSourceDownEventTarget = !0 : r.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u) } }(e), function (e) { var t = e.collections.sourcesRenderFunctions, n = e.core.sourceDisplayFacade, o = e.props, i = e.stageIndexes; function r(e) { t[e] && (t[e](), delete t[e]) } n.displaySourcesWhichShouldBeDisplayed = function () { if (o.loadOnlyCurrentSource) r(i.current); else for (var e in i) r(i[e]) } }(e), function (e) { var t = e.stageIndexes, n = e.core.stageManager, o = e.props.sources.length - 1; n.getPreviousSlideIndex = function () { return 0 === t.current ? o : t.current - 1 }, n.getNextSlideIndex = function () { return t.current === o ? 0 : t.current + 1 }, n.updateStageIndexes = 0 === o ? function () { } : 1 === o ? function () { 0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next) } : function () { t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex() }, n.isSourceInStage = o <= 2 ? function () { return !0 } : function (e) { var n = t.current; if (0 === n && e === o || n === o && 0 === e) return !0; var i = n - e; return -1 === i || 0 === i || 1 === i } }(e), function (e) { var t = e.collections, n = t.sourceMainWrappersTransformers, o = t.sourceSizers, i = e.core.windowResizeActioner, r = e.data, s = e.elements.sourceMainWrappers, a = e.props, c = e.stageIndexes; i.runActions = function () { innerWidth < 992 ? r.maxSourceWidth = innerWidth : r.maxSourceWidth = .9 * innerWidth, r.maxSourceHeight = .9 * innerHeight; for (var e = 0; e < a.sources.length; e++)U(s[e], u), e !== c.current && n[e].negative(), o[e] && o[e].adjustSize() } }(e) } function te(e) { var t = e.core.eventsDispatcher, n = e.data, o = e.elements, r = e.props.sources; n.isInitialized = !0, function (e) { for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, i = 0; i < n.length; i++)t[i] = o(X, [i]) }(e), ee(e), o.container = document.createElement("div"), o.container.className = "".concat(i, "container ").concat(a, " ").concat(g), function (e) { var t = e.elements; t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d) }(e), P(e), function (e) { var t = e.core.slideSwipingDown, n = e.elements, o = e.props.sources; n.sourceWrappersContainer = document.createElement("div"), n.sourceWrappersContainer.className = "".concat(d, " ").concat(a), n.container.appendChild(n.sourceWrappersContainer), n.sourceWrappersContainer.addEventListener("mousedown", t.listener), n.sourceWrappersContainer.addEventListener("touchstart", t.listener, { passive: !0 }); for (var i = 0; i < o.length; i++)O(e, i) }(e), r.length > 1 && function (e) { var t = e.core.slideChangeFacade; B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z") }(e), function (e) { for (var t = e.props.sources, n = e.resolve, o = n(w), i = n(M), r = n(k, [o, i]), s = 0; s < t.length; s++)if ("string" == typeof t[s]) { var a = r.getTypeSetByClientForIndex(s); if (a) i.runActionsForSourceTypeAndIndex(a, s); else { var c = o.getSourceTypeFromLocalStorageByUrl(t[s]); c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s) } } else i.runActionsForSourceTypeAndIndex("custom", s) }(e), t.dispatch("onInit") } function ne(e) { var t = e.collections.sourceMainWrappersTransformers, n = e.componentsServices, o = e.core, i = o.eventsDispatcher, r = o.lightboxOpener, s = o.globalEventsController, a = o.scrollbarRecompensor, c = o.sourceDisplayFacade, u = o.stageManager, d = o.windowResizeActioner, p = e.data, f = e.elements, h = e.stageIndexes; r.open = function () { var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; h.current = o, p.isInitialized ? i.dispatch("onShow") : te(e), u.updateStageIndexes(), c.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), a.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), i.dispatch("onOpen") } } function oe() { var e = localStorage.getItem("fslightbox-scrollbar-width"); if (e) return e; var t = function () { var e = document.createElement("div"), t = e.style; return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e }(), n = function () { var e = document.createElement("div"); return e.style.width = "100%", e }(); document.body.appendChild(t); var o = t.offsetWidth; t.appendChild(n); var i = n.offsetWidth; document.body.removeChild(t); var r = o - i; return localStorage.setItem("fslightbox-scrollbar-width", r.toString()), r } function ie(e, t, n) { return (ie = re() ? Reflect.construct : function (e, t, n) { var o = [null]; o.push.apply(o, t); var i = new (Function.bind.apply(e, o)); return n && se(i, n.prototype), i }).apply(null, arguments) } function re() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0 } catch (e) { return !1 } } function se(e, t) { return (se = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function ae(e) { return function (e) { if (Array.isArray(e)) return ce(e) }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function (e, t) { if (!e) return; if ("string" == typeof e) return ce(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t) }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function ce(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, o = new Array(t); n < t; n++)o[n] = e[n]; return o } function le() { for (var e = document.getElementsByTagName("a"), t = function (t) { if (!e[t].hasAttribute("data-fslightbox")) return "continue"; var n = e[t].getAttribute("data-fslightbox"), o = e[t].getAttribute("href"); fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox); var i = null; i = "#" === o.charAt(0) ? document.getElementById(o.substring(1)) : o, fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[t]); var r = fsLightboxInstances[n].props.sources.length - 1; e[t].onclick = function (e) { e.preventDefault(), fsLightboxInstances[n].open(r) }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class"); for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[t].attributes, c = fsLightboxInstances[n].props.customAttributes, l = 0; l < a.length; l++)if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) { c[r] || (c[r] = {}); var u = a[l].name.substr(5); c[r][u] = a[l].value } function d(o, i) { e[t].hasAttribute(i) && (fsLightboxInstances[n].props[o][r] = e[t].getAttribute(i)) } }, n = 0; n < e.length; n++)t(n); var o = Object.keys(fsLightboxInstances); window.fsLightbox = fsLightboxInstances[o[o.length - 1]] } window.FsLightbox = function () { var e = this; this.props = { sources: [], customAttributes: [], customClasses: [], types: [], videosPosters: [], slideDistance: .3 }, this.data = { isInitialized: !1, maxSourceWidth: 0, maxSourceHeight: 0, scrollbarWidth: oe(), isFullscreenOpen: !1 }, this.slideSwipingProps = { isSwiping: !1, downClientX: null, isSourceDownEventTarget: !1, swipedX: 0 }, this.stageIndexes = {}, this.elements = { a: [], container: null, slideSwipingHoverer: null, sourceWrappersContainer: null, sources: [], sourceMainWrappers: [], sourceAnimationWrappers: [] }, this.componentsServices = { enterFullscreen: null, exitFullscreen: null, hideSourceLoaderIfNotYetCollection: [], setSlideNumber: function () { } }, this.resolve = function (t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; return n.unshift(e), ie(t, ae(n)) }, this.collections = { sourceMainWrappersTransformers: [], sourceLoadHandlers: [], sourcesRenderFunctions: [], sourceSizers: [] }, this.core = { classFacade: {}, eventsDispatcher: {}, fullscreenToggler: {}, globalEventsController: {}, lightboxCloser: {}, lightboxOpener: {}, lightboxUpdater: {}, scrollbarRecompensor: {}, slideChangeFacade: {}, slideIndexChanger: {}, slideSwipingDown: {}, sourceDisplayFacade: {}, stageManager: {}, windowResizeActioner: {} }, ne(this), this.open = function (t) { return e.core.lightboxOpener.open(t) }, this.close = function () { return e.core.lightboxCloser.closeLightbox() } }, window.fsLightboxInstances = {}, le(), window.refreshFsLightbox = function () { for (var e in fsLightboxInstances) { var t = fsLightboxInstances[e].props; fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = [] } le() } }]) }));
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('jquery-bridget/jquery-bridget', ['jquery'], function (jQuery) {
      return factory(window, jQuery);
    });
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}(window, function factory(window, jQuery) {
  'use strict';

  // ----- utils ----- //

  var arraySlice = Array.prototype.slice;

  // helper function for logging errors
  // $.error breaks jQuery chaining
  var console = window.console;
  var logError = typeof console == 'undefined' ? function () { } :
    function (message) {
      console.error(message);
    };

  // ----- jQueryBridget ----- //

  function jQueryBridget(namespace, PluginClass, $) {
    $ = $ || jQuery || window.jQuery;
    if (!$) {
      return;
    }

    // add option method -> $().plugin('option', {...})
    if (!PluginClass.prototype.option) {
      // option setter
      PluginClass.prototype.option = function (opts) {
        // bail out if not an object
        if (!$.isPlainObject(opts)) {
          return;
        }
        this.options = $.extend(true, this.options, opts);
      };
    }

    // make jQuery plugin
    $.fn[namespace] = function (arg0 /*, arg1 */) {
      if (typeof arg0 == 'string') {
        // method call $().plugin( 'methodName', { options } )
        // shift arguments by 1
        var args = arraySlice.call(arguments, 1);
        return methodCall(this, arg0, args);
      }
      // just $().plugin({ options })
      plainCall(this, arg0);
      return this;
    };

    // $().plugin('methodName')
    function methodCall($elems, methodName, args) {
      var returnValue;
      var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

      $elems.each(function (i, elem) {
        // get instance
        var instance = $.data(elem, namespace);
        if (!instance) {
          logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
            pluginMethodStr);
          return;
        }

        var method = instance[methodName];
        if (!method || methodName.charAt(0) == '_') {
          logError(pluginMethodStr + ' is not a valid method');
          return;
        }

        // apply method, get return value
        var value = method.apply(instance, args);
        // set return value if value is returned, use only first value
        returnValue = returnValue === undefined ? value : returnValue;
      });

      return returnValue !== undefined ? returnValue : $elems;
    }

    function plainCall($elems, options) {
      $elems.each(function (i, elem) {
        var instance = $.data(elem, namespace);
        if (instance) {
          // set options & init
          instance.option(options);
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass(elem, options);
          $.data(elem, namespace, instance);
        }
      });
    }

    updateJQuery($);

  }

  // ----- updateJQuery ----- //

  // set $.bridget for v1 backwards compatibility
  function updateJQuery($) {
    if (!$ || ($ && $.bridget)) {
      return;
    }
    $.bridget = jQueryBridget;
  }

  updateJQuery(jQuery || window.jQuery);

  // -----  ----- //

  return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define('ev-emitter/ev-emitter', factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}(typeof window != 'undefined' ? window : this, function () {



  function EvEmitter() { }

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

(function (window, factory) {
  /* jshint strict: false */ /* globals define, module */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('get-size/get-size', factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})(window, function factory() {
  'use strict';

  // -------------------------- helpers -------------------------- //

  // get a number from a string, not a percentage
  function getStyleSize(value) {
    var num = parseFloat(value);
    // not a percent like '100%', and a number
    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() { }

  var logError = typeof console == 'undefined' ? noop :
    function (message) {
      console.error(message);
    };

  // -------------------------- measurements -------------------------- //

  var measurements = [
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth'
  ];

  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */
  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError('Style returned ' + style +
        '. Are you running this code in a hidden iframe on Firefox? ' +
        'See https://bit.ly/getsizebug1');
    }
    return style;
  }

  // -------------------------- setup -------------------------- //

  var isSetup = false;

  var isBoxSizeOuter;

  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */
  function setup() {
    // setup once
    if (isSetup) {
      return;
    }
    isSetup = true;

    // -------------------------- box sizing -------------------------- //

    /**
     * Chrome & Safari measure the outer-width on style.width on border-box elems
     * IE11 & Firefox<29 measures the inner-width
     */
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    // round value for browser zoom. desandro/masonry#928
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;

    body.removeChild(div);
  }

  // -------------------------- getSize -------------------------- //

  function getSize(elem) {
    setup();

    // use querySeletor if elem is string
    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    }

    // do not proceed on non-objects
    if (!elem || typeof elem != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem);

    // if hidden, everything is 0
    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;

    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

    // get all measurements
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      // any 'auto', 'medium' value will be 0
      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;

    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

    // overwrite width and height if we can get it from style
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth +
        // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight +
        // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);

    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;

    return size;
  }

  return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('desandro-matches-selector/matches-selector', factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}(window, function factory() {
  'use strict';

  var matchesMethod = (function () {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if (ElemProto.matches) {
      return 'matches';
    }
    // check un-prefixed
    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if (ElemProto[method]) {
        return method;
      }
    }
  })();

  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if (typeof define == 'function' && define.amd) {
    // AMD
    define('fizzy-ui-utils/utils', [
      'desandro-matches-selector/matches-selector'
    ], function (matchesSelector) {
      return factory(window, matchesSelector);
    });
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}(window, function factory(window, matchesSelector) {



  var utils = {};

  // ----- extend ----- //

  // extends objects
  utils.extend = function (a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };

  // ----- modulo ----- //

  utils.modulo = function (num, div) {
    return ((num % div) + div) % div;
  };

  // ----- makeArray ----- //

  var arraySlice = Array.prototype.slice;

  // turn element or nodeList into an array
  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    }
    // return empty array if undefined or null. #6
    if (obj === null || obj === undefined) {
      return [];
    }

    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    }

    // array of single index
    return [obj];
  };

  // ----- removeFrom ----- //

  utils.removeFrom = function (ary, obj) {
    var index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };

  // ----- getParent ----- //

  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };

  // ----- getQueryElement ----- //

  // use element as selector string
  utils.getQueryElement = function (elem) {
    if (typeof elem == 'string') {
      return document.querySelector(elem);
    }
    return elem;
  };

  // ----- handleEvent ----- //

  // enable .ontype to trigger from .addEventListener( elem, 'type' )
  utils.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  // ----- filterFindElements ----- //

  utils.filterFindElements = function (elems, selector) {
    // make array of elems
    elems = utils.makeArray(elems);
    var ffElems = [];

    elems.forEach(function (elem) {
      // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      // add elem if no selector
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      // filter & find items if we have a selector
      // filter
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      // find children
      var childElems = elem.querySelectorAll(selector);
      // concat childElems to filterFound array
      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });

    return ffElems;
  };

  // ----- debounceMethod ----- //

  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100;
    // original method
    var method = _class.prototype[methodName];
    var timeoutName = methodName + 'Timeout';

    _class.prototype[methodName] = function () {
      var timeout = this[timeoutName];
      clearTimeout(timeout);

      var args = arguments;
      var _this = this;
      this[timeoutName] = setTimeout(function () {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  };

  // ----- docReady ----- //

  utils.docReady = function (callback) {
    var readyState = document.readyState;
    if (readyState == 'complete' || readyState == 'interactive') {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };

  // ----- htmlInit ----- //

  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };

  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */
  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(function () {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems)
        .concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;

      elems.forEach(function (elem) {
        var attr = elem.getAttribute(dataAttr) ||
          elem.getAttribute(dataOptionsAttr);
        var options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          // log error, do not initialize
          if (console) {
            console.error('Error parsing ' + dataAttr + ' on ' + elem.className +
              ': ' + error);
          }
          return;
        }
        // initialize
        var instance = new WidgetClass(elem, options);
        // make available via $().data('namespace')
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });

    });
  };

  // -----  ----- //

  return utils;

}));

/**
 * Outlayer Item
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define('outlayer/item', [
      'ev-emitter/ev-emitter',
      'get-size/get-size'
    ],
      factory
    );
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}(window, function factory(EvEmitter, getSize) {
  'use strict';

  // ----- helpers ----- //

  function isEmptyObj(obj) {
    for (var prop in obj) {
      return false;
    }
    prop = null;
    return true;
  }

  // -------------------------- CSS3 support -------------------------- //


  var docElemStyle = document.documentElement.style;

  var transitionProperty = typeof docElemStyle.transition == 'string' ?
    'transition' : 'WebkitTransition';
  var transformProperty = typeof docElemStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

  var transitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    transition: 'transitionend'
  }[transitionProperty];

  // cache all vendor properties that could have vendor prefix
  var vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: transitionProperty + 'Duration',
    transitionProperty: transitionProperty + 'Property',
    transitionDelay: transitionProperty + 'Delay'
  };

  // -------------------------- Item -------------------------- //

  function Item(element, layout) {
    if (!element) {
      return;
    }

    this.element = element;
    // parent layout class, i.e. Masonry, Isotope, or Packery
    this.layout = layout;
    this.position = {
      x: 0,
      y: 0
    };

    this._create();
  }

  // inherit EvEmitter
  var proto = Item.prototype = Object.create(EvEmitter.prototype);
  proto.constructor = Item;

  proto._create = function () {
    // transition objects
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    };

    this.css({
      position: 'absolute'
    });
  };

  // trigger specified handler for event type
  proto.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  /**
   * apply CSS styles to element
   * @param {Object} style
   */
  proto.css = function (style) {
    var elemStyle = this.element.style;

    for (var prop in style) {
      // use vendor property if available
      var supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = style[prop];
    }
  };

  // measure position, and sets it
  proto.getPosition = function () {
    var style = getComputedStyle(this.element);
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    var xValue = style[isOriginLeft ? 'left' : 'right'];
    var yValue = style[isOriginTop ? 'top' : 'bottom'];
    var x = parseFloat(xValue);
    var y = parseFloat(yValue);
    // convert percent to pixels
    var layoutSize = this.layout.size;
    if (xValue.indexOf('%') != -1) {
      x = (x / 100) * layoutSize.width;
    }
    if (yValue.indexOf('%') != -1) {
      y = (y / 100) * layoutSize.height;
    }
    // clean up 'auto' or other non-integer values
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    // remove padding from measurement
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

    this.position.x = x;
    this.position.y = y;
  };

  // set settled position, apply padding
  proto.layoutPosition = function () {
    var layoutSize = this.layout.size;
    var style = {};
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');

    // x
    var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
    var xProperty = isOriginLeft ? 'left' : 'right';
    var xResetProperty = isOriginLeft ? 'right' : 'left';

    var x = this.position.x + layoutSize[xPadding];
    // set in percentage or pixels
    style[xProperty] = this.getXValue(x);
    // reset other property
    style[xResetProperty] = '';

    // y
    var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
    var yProperty = isOriginTop ? 'top' : 'bottom';
    var yResetProperty = isOriginTop ? 'bottom' : 'top';

    var y = this.position.y + layoutSize[yPadding];
    // set in percentage or pixels
    style[yProperty] = this.getYValue(y);
    // reset other property
    style[yResetProperty] = '';

    this.css(style);
    this.emitEvent('layout', [this]);
  };

  proto.getXValue = function (x) {
    var isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && !isHorizontal ?
      ((x / this.layout.size.width) * 100) + '%' : x + 'px';
  };

  proto.getYValue = function (y) {
    var isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && isHorizontal ?
      ((y / this.layout.size.height) * 100) + '%' : y + 'px';
  };

  proto._transitionTo = function (x, y) {
    this.getPosition();
    // get current x & y from top/left
    var curX = this.position.x;
    var curY = this.position.y;

    var didNotMove = x == this.position.x && y == this.position.y;

    // save end position
    this.setPosition(x, y);

    // if did not move and not transitioning, just go to layout
    if (didNotMove && !this.isTransitioning) {
      this.layoutPosition();
      return;
    }

    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate(transX, transY);

    this.transition({
      to: transitionStyle,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: true
    });
  };

  proto.getTranslate = function (x, y) {
    // flip cooridinates if origin on right or bottom
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  };

  // non transition + transform support
  proto.goTo = function (x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };

  proto.moveTo = proto._transitionTo;

  proto.setPosition = function (x, y) {
    this.position.x = parseFloat(x);
    this.position.y = parseFloat(y);
  };

  // ----- transition ----- //

  /**
   * @param {Object} style - CSS
   * @param {Function} onTransitionEnd
   */

  // non transition, just trigger callback
  proto._nonTransition = function (args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    for (var prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };

  /**
   * proper transition
   * @param {Object} args - arguments
   *   @param {Object} to - style to transition to
   *   @param {Object} from - style to start transition from
   *   @param {Boolean} isCleaning - removes transition styles after transition
   *   @param {Function} onTransitionEnd - callback
   */
  proto.transition = function (args) {
    // redirect to nonTransition if no transition duration
    if (!parseFloat(this.layout.options.transitionDuration)) {
      this._nonTransition(args);
      return;
    }

    var _transition = this._transn;
    // keep track of onTransitionEnd callback by css property
    for (var prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    // keep track of properties that are transitioning
    for (prop in args.to) {
      _transition.ingProperties[prop] = true;
      // keep track of properties to clean up when transition is done
      if (args.isCleaning) {
        _transition.clean[prop] = true;
      }
    }

    // set from styles
    if (args.from) {
      this.css(args.from);
      // force redraw. http://blog.alexmaccaw.com/css-transitions
      var h = this.element.offsetHeight;
      // hack for JSHint to hush about unused var
      h = null;
    }
    // enable transition
    this.enableTransition(args.to);
    // set styles that are transitioning
    this.css(args.to);

    this.isTransitioning = true;

  };

  // dash before all cap letters, including first for
  // WebkitTransform => -webkit-transform
  function toDashedAll(str) {
    return str.replace(/([A-Z])/g, function ($1) {
      return '-' + $1.toLowerCase();
    });
  }

  var transitionProps = 'opacity,' + toDashedAll(transformProperty);

  proto.enableTransition = function (/* style */) {
    // HACK changing transitionProperty during a transition
    // will cause transition to jump
    if (this.isTransitioning) {
      return;
    }

    // make `transition: foo, bar, baz` from style object
    // HACK un-comment this when enableTransition can work
    // while a transition is happening
    // var transitionValues = [];
    // for ( var prop in style ) {
    //   // dash-ify camelCased properties like WebkitTransition
    //   prop = vendorProperties[ prop ] || prop;
    //   transitionValues.push( toDashedAll( prop ) );
    // }
    // munge number to millisecond, to match stagger
    var duration = this.layout.options.transitionDuration;
    duration = typeof duration == 'number' ? duration + 'ms' : duration;
    // enable transition styles
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0
    });
    // listen for transition end event
    this.element.addEventListener(transitionEndEvent, this, false);
  };

  // ----- events ----- //

  proto.onwebkitTransitionEnd = function (event) {
    this.ontransitionend(event);
  };

  proto.onotransitionend = function (event) {
    this.ontransitionend(event);
  };

  // properties that I munge to make my life easier
  var dashedVendorProperties = {
    '-webkit-transform': 'transform'
  };

  proto.ontransitionend = function (event) {
    // disregard bubbled events from children
    if (event.target !== this.element) {
      return;
    }
    var _transition = this._transn;
    // get property name of transitioned property, convert to prefix-free
    var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

    // remove property that has completed transitioning
    delete _transition.ingProperties[propertyName];
    // check if any properties are still transitioning
    if (isEmptyObj(_transition.ingProperties)) {
      // all properties have completed transitioning
      this.disableTransition();
    }
    // clean style
    if (propertyName in _transition.clean) {
      // clean up style
      this.element.style[event.propertyName] = '';
      delete _transition.clean[propertyName];
    }
    // trigger onTransitionEnd callback
    if (propertyName in _transition.onEnd) {
      var onTransitionEnd = _transition.onEnd[propertyName];
      onTransitionEnd.call(this);
      delete _transition.onEnd[propertyName];
    }

    this.emitEvent('transitionEnd', [this]);
  };

  proto.disableTransition = function () {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    this.isTransitioning = false;
  };

  /**
   * removes style property from element
   * @param {Object} style
  **/
  proto._removeStyles = function (style) {
    // clean up transition styles
    var cleanStyle = {};
    for (var prop in style) {
      cleanStyle[prop] = '';
    }
    this.css(cleanStyle);
  };

  var cleanTransitionStyle = {
    transitionProperty: '',
    transitionDuration: '',
    transitionDelay: ''
  };

  proto.removeTransitionStyles = function () {
    // remove transition
    this.css(cleanTransitionStyle);
  };

  // ----- stagger ----- //

  proto.stagger = function (delay) {
    delay = isNaN(delay) ? 0 : delay;
    this.staggerDelay = delay + 'ms';
  };

  // ----- show/hide/remove ----- //

  // remove element from DOM
  proto.removeElem = function () {
    this.element.parentNode.removeChild(this.element);
    // remove display: none
    this.css({ display: '' });
    this.emitEvent('remove', [this]);
  };

  proto.remove = function () {
    // just remove element if no transition support or no transition
    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
      this.removeElem();
      return;
    }

    // start transition
    this.once('transitionEnd', function () {
      this.removeElem();
    });
    this.hide();
  };

  proto.reveal = function () {
    delete this.isHidden;
    // remove display: none
    this.css({ display: '' });

    var options = this.layout.options;

    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

    this.transition({
      from: options.hiddenStyle,
      to: options.visibleStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd
    });
  };

  proto.onRevealTransitionEnd = function () {
    // check if still visible
    // during transition, item may have been hidden
    if (!this.isHidden) {
      this.emitEvent('reveal');
    }
  };

  /**
   * get style property use for hide/reveal transition end
   * @param {String} styleProperty - hiddenStyle/visibleStyle
   * @returns {String}
   */
  proto.getHideRevealTransitionEndProperty = function (styleProperty) {
    var optionStyle = this.layout.options[styleProperty];
    // use opacity
    if (optionStyle.opacity) {
      return 'opacity';
    }
    // get first property
    for (var prop in optionStyle) {
      return prop;
    }
  };

  proto.hide = function () {
    // set flag
    this.isHidden = true;
    // remove display: none
    this.css({ display: '' });

    var options = this.layout.options;

    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

    this.transition({
      from: options.visibleStyle,
      to: options.hiddenStyle,
      // keep hidden stuff hidden
      isCleaning: true,
      onTransitionEnd: onTransitionEnd
    });
  };

  proto.onHideTransitionEnd = function () {
    // check if still hidden
    // during transition, item may have been un-hidden
    if (this.isHidden) {
      this.css({ display: 'none' });
      this.emitEvent('hide');
    }
  };

  proto.destroy = function () {
    this.css({
      position: '',
      left: '',
      right: '',
      top: '',
      bottom: '',
      transition: '',
      transform: ''
    });
  };

  return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

(function (window, factory) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD - RequireJS
    define('outlayer/outlayer', [
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './item'
    ],
      function (EvEmitter, getSize, utils, Item) {
        return factory(window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}(window, function factory(window, EvEmitter, getSize, utils, Item) {
  'use strict';

  // ----- vars ----- //

  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function () { };

  // -------------------------- Outlayer -------------------------- //

  // globally unique identifiers
  var GUID = 0;
  // internal store of all Outlayer intances
  var instances = {};


  /**
   * @param {Element, String} element
   * @param {Object} options
   * @constructor
   */
  function Outlayer(element, options) {
    var queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error('Bad element for ' + this.constructor.namespace +
          ': ' + (queryElement || element));
      }
      return;
    }
    this.element = queryElement;
    // add jQuery
    if (jQuery) {
      this.$element = jQuery(this.element);
    }

    // options
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);

    // add id for Outlayer.getFromElement
    var id = ++GUID;
    this.element.outlayerGUID = id; // expando
    instances[id] = this; // associate via id

    // kick it off
    this._create();

    var isInitLayout = this._getOption('initLayout');
    if (isInitLayout) {
      this.layout();
    }
  }

  // settings are for internal use only
  Outlayer.namespace = 'outlayer';
  Outlayer.Item = Item;

  // default options
  Outlayer.defaults = {
    containerStyle: {
      position: 'relative'
    },
    initLayout: true,
    originLeft: true,
    originTop: true,
    resize: true,
    resizeContainer: true,
    // item options
    transitionDuration: '0.4s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)'
    }
  };

  var proto = Outlayer.prototype;
  // inherit EvEmitter
  utils.extend(proto, EvEmitter.prototype);

  /**
   * set options
   * @param {Object} opts
   */
  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };

  /**
   * get backwards compatible option value, check old name
   */
  proto._getOption = function (option) {
    var oldOption = this.constructor.compatOptions[option];
    return oldOption && this.options[oldOption] !== undefined ?
      this.options[oldOption] : this.options[option];
  };

  Outlayer.compatOptions = {
    // currentName: oldName
    initLayout: 'isInitLayout',
    horizontal: 'isHorizontal',
    layoutInstant: 'isLayoutInstant',
    originLeft: 'isOriginLeft',
    originTop: 'isOriginTop',
    resize: 'isResizeBound',
    resizeContainer: 'isResizingContainer'
  };

  proto._create = function () {
    // get items from children
    this.reloadItems();
    // elements that affect layout, but are not laid out
    this.stamps = [];
    this.stamp(this.options.stamp);
    // set container style
    utils.extend(this.element.style, this.options.containerStyle);

    // bind resize method
    var canBindResize = this._getOption('resize');
    if (canBindResize) {
      this.bindResize();
    }
  };

  // goes through all children again and gets bricks in proper order
  proto.reloadItems = function () {
    // collection of item elements
    this.items = this._itemize(this.element.children);
  };


  /**
   * turn elements into Outlayer.Items to be used in layout
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - collection of new Outlayer Items
   */
  proto._itemize = function (elems) {

    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;

    // create new Outlayer Items for collection
    var items = [];
    for (var i = 0; i < itemElems.length; i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }

    return items;
  };

  /**
   * get item elements to be used in layout
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - item elements
   */
  proto._filterFindItemElements = function (elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  };

  /**
   * getter method for getting item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getItemElements = function () {
    return this.items.map(function (item) {
      return item.element;
    });
  };

  // ----- init & layout ----- //

  /**
   * lays out all items
   */
  proto.layout = function () {
    this._resetLayout();
    this._manageStamps();

    // don't animate first layout
    var layoutInstant = this._getOption('layoutInstant');
    var isInstant = layoutInstant !== undefined ?
      layoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);

    // flag for initalized
    this._isLayoutInited = true;
  };

  // _init is alias for layout
  proto._init = proto.layout;

  /**
   * logic before any new layout
   */
  proto._resetLayout = function () {
    this.getSize();
  };


  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  /**
   * get measurement from option, for columnWidth, rowHeight, gutter
   * if option is String -> get element from selector string, & get size of element
   * if option is Element -> get size of element
   * else use option as a number
   *
   * @param {String} measurement
   * @param {String} size - width or height
   * @private
   */
  proto._getMeasurement = function (measurement, size) {
    var option = this.options[measurement];
    var elem;
    if (!option) {
      // default to 0
      this[measurement] = 0;
    } else {
      // use option as an element
      if (typeof option == 'string') {
        elem = this.element.querySelector(option);
      } else if (option instanceof HTMLElement) {
        elem = option;
      }
      // use size of element, if element
      this[measurement] = elem ? getSize(elem)[size] : option;
    }
  };

  /**
   * layout a collection of item elements
   * @api public
   */
  proto.layoutItems = function (items, isInstant) {
    items = this._getItemsForLayout(items);

    this._layoutItems(items, isInstant);

    this._postLayout();
  };

  /**
   * get the items to be laid out
   * you may want to skip over some items
   * @param {Array} items
   * @returns {Array} items
   */
  proto._getItemsForLayout = function (items) {
    return items.filter(function (item) {
      return !item.isIgnored;
    });
  };

  /**
   * layout items
   * @param {Array} items
   * @param {Boolean} isInstant
   */
  proto._layoutItems = function (items, isInstant) {
    this._emitCompleteOnItems('layout', items);

    if (!items || !items.length) {
      // no items, emit event with empty array
      return;
    }

    var queue = [];

    items.forEach(function (item) {
      // get x/y object from method
      var position = this._getItemLayoutPosition(item);
      // enqueue
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(position);
    }, this);

    this._processLayoutQueue(queue);
  };

  /**
   * get item layout position
   * @param {Outlayer.Item} item
   * @returns {Object} x and y position
   */
  proto._getItemLayoutPosition = function ( /* item */) {
    return {
      x: 0,
      y: 0
    };
  };

  /**
   * iterate over array and position each item
   * Reason being - separating this logic prevents 'layout invalidation'
   * thx @paul_irish
   * @param {Array} queue
   */
  proto._processLayoutQueue = function (queue) {
    this.updateStagger();
    queue.forEach(function (obj, i) {
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
    }, this);
  };

  // set stagger from option in milliseconds number
  proto.updateStagger = function () {
    var stagger = this.options.stagger;
    if (stagger === null || stagger === undefined) {
      this.stagger = 0;
      return;
    }
    this.stagger = getMilliseconds(stagger);
    return this.stagger;
  };

  /**
   * Sets position of item in DOM
   * @param {Outlayer.Item} item
   * @param {Number} x - horizontal position
   * @param {Number} y - vertical position
   * @param {Boolean} isInstant - disables transitions
   */
  proto._positionItem = function (item, x, y, isInstant, i) {
    if (isInstant) {
      // if not transition, just set CSS
      item.goTo(x, y);
    } else {
      item.stagger(i * this.stagger);
      item.moveTo(x, y);
    }
  };

  /**
   * Any logic you want to do after each layout,
   * i.e. size the container
   */
  proto._postLayout = function () {
    this.resizeContainer();
  };

  proto.resizeContainer = function () {
    var isResizingContainer = this._getOption('resizeContainer');
    if (!isResizingContainer) {
      return;
    }
    var size = this._getContainerSize();
    if (size) {
      this._setContainerMeasure(size.width, true);
      this._setContainerMeasure(size.height, false);
    }
  };

  /**
   * Sets width or height of container if returned
   * @returns {Object} size
   *   @param {Number} width
   *   @param {Number} height
   */
  proto._getContainerSize = noop;

  /**
   * @param {Number} measure - size of width or height
   * @param {Boolean} isWidth
   */
  proto._setContainerMeasure = function (measure, isWidth) {
    if (measure === undefined) {
      return;
    }

    var elemSize = this.size;
    // add padding and border width if border box
    if (elemSize.isBorderBox) {
      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
        elemSize.borderLeftWidth + elemSize.borderRightWidth :
        elemSize.paddingBottom + elemSize.paddingTop +
        elemSize.borderTopWidth + elemSize.borderBottomWidth;
    }

    measure = Math.max(measure, 0);
    this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
  };

  /**
   * emit eventComplete on a collection of items events
   * @param {String} eventName
   * @param {Array} items - Outlayer.Items
   */
  proto._emitCompleteOnItems = function (eventName, items) {
    var _this = this;
    function onComplete() {
      _this.dispatchEvent(eventName + 'Complete', null, [items]);
    }

    var count = items.length;
    if (!items || !count) {
      onComplete();
      return;
    }

    var doneCount = 0;
    function tick() {
      doneCount++;
      if (doneCount == count) {
        onComplete();
      }
    }

    // bind callback
    items.forEach(function (item) {
      item.once(eventName, tick);
    });
  };

  /**
   * emits events via EvEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */
  proto.dispatchEvent = function (type, event, args) {
    // add original event to arguments
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);

    if (jQuery) {
      // set this.$element
      this.$element = this.$element || jQuery(this.element);
      if (event) {
        // create jQuery event
        var $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args);
      } else {
        // just trigger with type if no event available
        this.$element.trigger(type, args);
      }
    }
  };

  // -------------------------- ignore & stamps -------------------------- //


  /**
   * keep item in collection, but do not lay it out
   * ignored items do not get skipped in layout
   * @param {Element} elem
   */
  proto.ignore = function (elem) {
    var item = this.getItem(elem);
    if (item) {
      item.isIgnored = true;
    }
  };

  /**
   * return item to layout collection
   * @param {Element} elem
   */
  proto.unignore = function (elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  };

  /**
   * adds elements to stamps
   * @param {NodeList, Array, Element, or String} elems
   */
  proto.stamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }

    this.stamps = this.stamps.concat(elems);
    // ignore
    elems.forEach(this.ignore, this);
  };

  /**
   * removes elements to stamps
   * @param {NodeList, Array, or Element} elems
   */
  proto.unstamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }

    elems.forEach(function (elem) {
      // filter out removed stamp elements
      utils.removeFrom(this.stamps, elem);
      this.unignore(elem);
    }, this);
  };

  /**
   * finds child elements
   * @param {NodeList, Array, Element, or String} elems
   * @returns {Array} elems
   */
  proto._find = function (elems) {
    if (!elems) {
      return;
    }
    // if string, use argument as selector string
    if (typeof elems == 'string') {
      elems = this.element.querySelectorAll(elems);
    }
    elems = utils.makeArray(elems);
    return elems;
  };

  proto._manageStamps = function () {
    if (!this.stamps || !this.stamps.length) {
      return;
    }

    this._getBoundingRect();

    this.stamps.forEach(this._manageStamp, this);
  };

  // update boundingLeft / Top
  proto._getBoundingRect = function () {
    // get bounding rect for container element
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
    };
  };

  /**
   * @param {Element} stamp
  **/
  proto._manageStamp = noop;

  /**
   * get x/y position of element relative to container element
   * @param {Element} elem
   * @returns {Object} offset - has left, top, right, bottom
   */
  proto._getElementOffset = function (elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    return offset;
  };

  // -------------------------- resize -------------------------- //

  // enable event handlers for listeners
  // i.e. resize -> onresize
  proto.handleEvent = utils.handleEvent;

  /**
   * Bind layout to window resizing
   */
  proto.bindResize = function () {
    window.addEventListener('resize', this);
    this.isResizeBound = true;
  };

  /**
   * Unbind layout to window resizing
   */
  proto.unbindResize = function () {
    window.removeEventListener('resize', this);
    this.isResizeBound = false;
  };

  proto.onresize = function () {
    this.resize();
  };

  utils.debounceMethod(Outlayer, 'onresize', 100);

  proto.resize = function () {
    // don't trigger if size did not change
    // or if resize was unbound. See #9
    if (!this.isResizeBound || !this.needsResizeLayout()) {
      return;
    }

    this.layout();
  };

  /**
   * check if layout is needed post layout
   * @returns Boolean
   */
  proto.needsResizeLayout = function () {
    var size = getSize(this.element);
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };

  // -------------------------- methods -------------------------- //

  /**
   * add items to Outlayer instance
   * @param {Array or NodeList or Element} elems
   * @returns {Array} items - Outlayer.Items
  **/
  proto.addItems = function (elems) {
    var items = this._itemize(elems);
    // add items to collection
    if (items.length) {
      this.items = this.items.concat(items);
    }
    return items;
  };

  /**
   * Layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.appended = function (elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    // layout and reveal just the new items
    this.layoutItems(items, true);
    this.reveal(items);
  };

  /**
   * Layout prepended elements
   * @param {Array or NodeList or Element} elems
   */
  proto.prepended = function (elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    // add items to beginning of collection
    var previousItems = this.items.slice(0);
    this.items = items.concat(previousItems);
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // layout new stuff without transition
    this.layoutItems(items, true);
    this.reveal(items);
    // layout previous items
    this.layoutItems(previousItems);
  };

  /**
   * reveal a collection of items
   * @param {Array of Outlayer.Items} items
   */
  proto.reveal = function (items) {
    this._emitCompleteOnItems('reveal', items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function (item, i) {
      item.stagger(i * stagger);
      item.reveal();
    });
  };

  /**
   * hide a collection of items
   * @param {Array of Outlayer.Items} items
   */
  proto.hide = function (items) {
    this._emitCompleteOnItems('hide', items);
    if (!items || !items.length) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach(function (item, i) {
      item.stagger(i * stagger);
      item.hide();
    });
  };

  /**
   * reveal item elements
   * @param {Array}, {Element}, {NodeList} items
   */
  proto.revealItemElements = function (elems) {
    var items = this.getItems(elems);
    this.reveal(items);
  };

  /**
   * hide item elements
   * @param {Array}, {Element}, {NodeList} items
   */
  proto.hideItemElements = function (elems) {
    var items = this.getItems(elems);
    this.hide(items);
  };

  /**
   * get Outlayer.Item, given an Element
   * @param {Element} elem
   * @param {Function} callback
   * @returns {Outlayer.Item} item
   */
  proto.getItem = function (elem) {
    // loop through items to get the one that matches
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      if (item.element == elem) {
        // return item
        return item;
      }
    }
  };

  /**
   * get collection of Outlayer.Items, given Elements
   * @param {Array} elems
   * @returns {Array} items - Outlayer.Items
   */
  proto.getItems = function (elems) {
    elems = utils.makeArray(elems);
    var items = [];
    elems.forEach(function (elem) {
      var item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }, this);

    return items;
  };

  /**
   * remove element(s) from instance and DOM
   * @param {Array or NodeList or Element} elems
   */
  proto.remove = function (elems) {
    var removeItems = this.getItems(elems);

    this._emitCompleteOnItems('remove', removeItems);

    // bail if no items to remove
    if (!removeItems || !removeItems.length) {
      return;
    }

    removeItems.forEach(function (item) {
      item.remove();
      // remove item from collection
      utils.removeFrom(this.items, item);
    }, this);
  };

  // ----- destroy ----- //

  // remove and disable Outlayer instance
  proto.destroy = function () {
    // clean up dynamic styles
    var style = this.element.style;
    style.height = '';
    style.position = '';
    style.width = '';
    // destroy items
    this.items.forEach(function (item) {
      item.destroy();
    });

    this.unbindResize();

    var id = this.element.outlayerGUID;
    delete instances[id]; // remove reference to instance by id
    delete this.element.outlayerGUID;
    // remove data for jQuery
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }

  };

  // -------------------------- data -------------------------- //

  /**
   * get Outlayer instance from element
   * @param {Element} elem
   * @returns {Outlayer}
   */
  Outlayer.data = function (elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.outlayerGUID;
    return id && instances[id];
  };


  // -------------------------- create Outlayer class -------------------------- //

  /**
   * create a layout class
   * @param {String} namespace
   */
  Outlayer.create = function (namespace, options) {
    // sub-class Outlayer
    var Layout = subclass(Outlayer);
    // apply new options and compatOptions
    Layout.defaults = utils.extend({}, Outlayer.defaults);
    utils.extend(Layout.defaults, options);
    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

    Layout.namespace = namespace;

    Layout.data = Outlayer.data;

    // sub-class Item
    Layout.Item = subclass(Item);

    // -------------------------- declarative -------------------------- //

    utils.htmlInit(Layout, namespace);

    // -------------------------- jQuery bridge -------------------------- //

    // make into jQuery plugin
    if (jQuery && jQuery.bridget) {
      jQuery.bridget(namespace, Layout);
    }

    return Layout;
  };

  function subclass(Parent) {
    function SubClass() {
      Parent.apply(this, arguments);
    }

    SubClass.prototype = Object.create(Parent.prototype);
    SubClass.prototype.constructor = SubClass;

    return SubClass;
  }

  // ----- helpers ----- //

  // how many milliseconds are in each unit
  var msUnits = {
    ms: 1,
    s: 1000
  };

  // munge time-like parameter into millisecond number
  // '0.4s' -> 40
  function getMilliseconds(time) {
    if (typeof time == 'number') {
      return time;
    }
    var matches = time.match(/(^\d*\.?\d*)(\w*)/);
    var num = matches && matches[1];
    var unit = matches && matches[2];
    if (!num.length) {
      return 0;
    }
    num = parseFloat(num);
    var mult = msUnits[unit] || 1;
    return num * mult;
  }

  // ----- fin ----- //

  // back in global
  Outlayer.Item = Item;

  return Outlayer;

}));

/**
 * Isotope Item
**/

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/item', [
      'outlayer/outlayer'
    ],
      factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}(window, function factory(Outlayer) {
  'use strict';

  // -------------------------- Item -------------------------- //

  // sub-class Outlayer Item
  function Item() {
    Outlayer.Item.apply(this, arguments);
  }

  var proto = Item.prototype = Object.create(Outlayer.Item.prototype);

  var _create = proto._create;
  proto._create = function () {
    // assign id, used for original-order sorting
    this.id = this.layout.itemGUID++;
    _create.call(this);
    this.sortData = {};
  };

  proto.updateSortData = function () {
    if (this.isIgnored) {
      return;
    }
    // default sorters
    this.sortData.id = this.id;
    // for backward compatibility
    this.sortData['original-order'] = this.id;
    this.sortData.random = Math.random();
    // go thru getSortData obj and apply the sorters
    var getSortData = this.layout.options.getSortData;
    var sorters = this.layout._sorters;
    for (var key in getSortData) {
      var sorter = sorters[key];
      this.sortData[key] = sorter(this.element, this);
    }
  };

  var _destroy = proto.destroy;
  proto.destroy = function () {
    // call super
    _destroy.apply(this, arguments);
    // reset display, #741
    this.css({
      display: ''
    });
  };

  return Item;

}));

/**
 * Isotope LayoutMode
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-mode', [
      'get-size/get-size',
      'outlayer/outlayer'
    ],
      factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}(window, function factory(getSize, Outlayer) {
  'use strict';

  // layout mode class
  function LayoutMode(isotope) {
    this.isotope = isotope;
    // link properties
    if (isotope) {
      this.options = isotope.options[this.namespace];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach(function (methodName) {
    proto[methodName] = function () {
      return Outlayer.prototype[methodName].apply(this.isotope, arguments);
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function () {
    // don't trigger if size did not change
    var size = getSize(this.isotope.element);
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  };

  proto.getColumnWidth = function () {
    this.getSegmentSize('column', 'Width');
  };

  proto.getRowHeight = function () {
    this.getSegmentSize('row', 'Height');
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function (segment, size) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement(segmentName, outerSize);
    // got rowHeight or columnWidth, we can chill
    if (this[segmentName]) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[segmentName] = firstItemSize && firstItemSize[outerSize] ||
      // or size of container
      this.isotope.size['inner' + size];
  };

  proto.getFirstItemSize = function () {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize(firstItem.element);
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  };

  proto.getSize = function () {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function (namespace, options) {

    function Mode() {
      LayoutMode.apply(this, arguments);
    }

    Mode.prototype = Object.create(proto);
    Mode.prototype.constructor = Mode;

    // default options
    if (options) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[namespace] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('masonry-layout/masonry', [
      'outlayer/outlayer',
      'get-size/get-size'
    ],
      factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}(window, function factory(Outlayer, getSize) {



  // -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function () {
    this.getSize();
    this._getMeasurement('columnWidth', 'outerWidth');
    this._getMeasurement('gutter', 'outerWidth');
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for (var i = 0; i < this.cols; i++) {
      this.colYs.push(0);
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function () {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if (!this.columnWidth) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[mathMethod](cols);
    this.cols = Math.max(cols, 1);
  };

  proto.getContainerWidth = function () {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
    colSpan = Math.min(colSpan, this.cols);
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[colPosMethod](colSpan, item);
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for (var i = colPosition.col; i < setMax; i++) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function (colSpan) {
    var colGroup = this._getTopColGroup(colSpan);
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply(Math, colGroup);

    return {
      col: colGroup.indexOf(minimumY),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function (colSpan) {
    if (colSpan < 2) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for (var i = 0; i < groupCount; i++) {
      colGroup[i] = this._getColGroupY(i, colSpan);
    }
    return colGroup;
  };

  proto._getColGroupY = function (col, colSpan) {
    if (colSpan < 2) {
      return this.colYs[col];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice(col, col + colSpan);
    // and get the max value of the array
    return Math.max.apply(Math, groupColYs);
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function (colSpan, item) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY(col, colSpan),
    };
  };

  proto._manageStamp = function (stamp) {
    var stampSize = getSize(stamp);
    var offset = this._getElementOffset(stamp);
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor(firstX / this.columnWidth);
    firstCol = Math.max(0, firstCol);
    var lastCol = Math.floor(lastX / this.columnWidth);
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min(this.cols - 1, lastCol);
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
      stampSize.outerHeight;
    for (var i = firstCol; i <= lastCol; i++) {
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  };

  proto._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var size = {
      height: this.maxY
    };

    if (this._getOption('fitWidth')) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function () {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while (--i) {
      if (this.colYs[i] !== 0) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function () {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-modes/masonry', [
      '../layout-mode',
      'masonry-layout/masonry'
    ],
      factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}(window, function factory(LayoutMode, Masonry) {
  'use strict';

  // -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for (var method in Masonry.prototype) {
    // do not inherit mode methods
    if (!keepModeMethods[method]) {
      proto[method] = Masonry.prototype[method];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function () {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call(this);
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function (option) {
    if (option == 'fitWidth') {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply(this.isotope, arguments);
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-modes/fit-rows', [
      '../layout-mode'
    ],
      factory);
  } else if (typeof exports == 'object') {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}(window, function factory(LayoutMode) {
  'use strict';

  var FitRows = LayoutMode.create('fitRows');

  var proto = FitRows.prototype;

  proto._resetLayout = function () {
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement('gutter', 'outerWidth');
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();

    var itemWidth = item.size.outerWidth + this.gutter;
    // if this element cannot fit in the current row
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (this.x !== 0 && itemWidth + this.x > containerWidth) {
      this.x = 0;
      this.y = this.maxY;
    }

    var position = {
      x: this.x,
      y: this.y
    };

    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
    this.x += itemWidth;

    return position;
  };

  proto._getContainerSize = function () {
    return { height: this.maxY };
  };

  return FitRows;

}));

/**
 * vertical layout mode
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-modes/vertical', [
      '../layout-mode'
    ],
      factory);
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}(window, function factory(LayoutMode) {
  'use strict';

  var Vertical = LayoutMode.create('vertical', {
    horizontalAlignment: 0
  });

  var proto = Vertical.prototype;

  proto._resetLayout = function () {
    this.y = 0;
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    var x = (this.isotope.size.innerWidth - item.size.outerWidth) *
      this.options.horizontalAlignment;
    var y = this.y;
    this.y += item.size.outerHeight;
    return { x: x, y: y };
  };

  proto._getContainerSize = function () {
    return { height: this.y };
  };

  return Vertical;

}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (typeof define == 'function' && define.amd) {
    // AMD
    define([
      'outlayer/outlayer',
      'get-size/get-size',
      'desandro-matches-selector/matches-selector',
      'fizzy-ui-utils/utils',
      'isotope-layout/js/item',
      'isotope-layout/js/layout-mode',
      // include default layout modes
      'isotope-layout/js/layout-modes/masonry',
      'isotope-layout/js/layout-modes/fit-rows',
      'isotope-layout/js/layout-modes/vertical'
    ],
      function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
        return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
      });
  } else if (typeof module == 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope-layout/js/item'),
      require('isotope-layout/js/layout-mode'),
      // include default layout modes
      require('isotope-layout/js/layout-modes/masonry'),
      require('isotope-layout/js/layout-modes/fit-rows'),
      require('isotope-layout/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}(window, function factory(window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode) {



  // -------------------------- vars -------------------------- //

  var jQuery = window.jQuery;

  // -------------------------- helpers -------------------------- //

  var trim = String.prototype.trim ?
    function (str) {
      return str.trim();
    } :
    function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    };

  // -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create('isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function () {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call(this);

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = ['original-order'];
    // create from registered layout modes
    for (var name in LayoutMode.modes) {
      this._initLayoutMode(name);
    }
  };

  proto.reloadItems = function () {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call(this);
  };

  proto._itemize = function () {
    var items = Outlayer.prototype._itemize.apply(this, arguments);
    // assign ID for original-order
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData(items);
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function (name) {
    var Mode = LayoutMode.modes[name];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[name] || {};
    this.options[name] = Mode.options ?
      utils.extend(Mode.options, initialOpts) : initialOpts;
    // init layout mode instance
    this.modes[name] = new Mode(this);
  };


  proto.layout = function () {
    // if first time doing layout, do all magic
    if (!this._isLayoutInited && this._getOption('initLayout')) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function () {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(this.filteredItems, isInstant);

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function (opts) {
    // set any options pass
    this.option(opts);
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter(this.items);
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if (this._isInstant) {
      this._noTransition(this._hideReveal, [filtered]);
    } else {
      this._hideReveal(filtered);
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function (filtered) {
    this.reveal(filtered.needReveal);
    this.hide(filtered.needHide);
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function () {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function () {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if (isLayoutComplete && isHideComplete && isRevealComplete) {
        _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
      }
    }
    this.once('layoutComplete', function () {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once('hideComplete', function () {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once('revealComplete', function () {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function (items) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest(filter);

    // test each item
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.isIgnored) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test(item);
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if (isMatched) {
        matches.push(item);
      }
      // add to additional group if item needs to be hidden or revealed
      if (isMatched && item.isHidden) {
        hiddenMatched.push(item);
      } else if (!isMatched && !item.isHidden) {
        visibleUnmatched.push(item);
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function (filter) {
    if (jQuery && this.options.isJQueryFiltering) {
      // use jQuery
      return function (item) {
        return jQuery(item.element).is(filter);
      };
    }
    if (typeof filter == 'function') {
      // use filter as function
      return function (item) {
        return filter(item.element);
      };
    }
    // default, use filter as selector string
    return function (item) {
      return matchesSelector(item.element, filter);
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function (elems) {
    // get items
    var items;
    if (elems) {
      elems = utils.makeArray(elems);
      items = this.getItems(elems);
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData(items);
  };

  proto._getSorters = function () {
    var getSortData = this.options.getSortData;
    for (var key in getSortData) {
      var sorter = getSortData[key];
      this._sorters[key] = mungeSorter(sorter);
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function (items) {
    // do not update if no items
    var len = items && items.length;

    for (var i = 0; len && i < len; i++) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = (function () {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter(sorter) {
      // if not a string, return function or whatever it is
      if (typeof sorter != 'string') {
        return sorter;
      }
      // parse the sorter string
      var args = trim(sorter).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match(/^\[(.+)\]$/);
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter(attr, query);
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[args[1]];
      // parse the value, if there was a parser
      sorter = parser ? function (elem) {
        return elem && parser(getValue(elem));
      } :
        // otherwise just return value
        function (elem) {
          return elem && getValue(elem);
        };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter(attr, query) {
      // if query looks like [foo-bar], get attribute
      if (attr) {
        return function getAttribute(elem) {
          return elem.getAttribute(attr);
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText(elem) {
        var child = elem.querySelector(query);
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function (val) {
      return parseInt(val, 10);
    },
    'parseFloat': function (val) {
      return parseFloat(val);
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function () {
    if (!this.options.sortBy) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray(this.options.sortBy);
    if (!this._getIsSameSortBy(sortBys)) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat(this.sortHistory);
    }
    // sort magic
    var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
    this.filteredItems.sort(itemSorter);
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function (sortBys) {
    for (var i = 0; i < sortBys.length; i++) {
      if (sortBys[i] != this.sortHistory[i]) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter(sortBys, sortAsc) {
    return function sorter(itemA, itemB) {
      // cycle through all sortKeys
      for (var i = 0; i < sortBys.length; i++) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[sortBy];
        var b = itemB.sortData[sortBy];
        if (a > b || a < b) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return (a > b ? 1 : -1) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function () {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[layoutMode];
    if (!mode) {
      // TODO console.error
      throw new Error('No layout mode: ' + layoutMode);
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[layoutMode];
    return mode;
  };

  proto._resetLayout = function () {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call(this);
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function (item) {
    return this._mode()._getItemLayoutPosition(item);
  };

  proto._manageStamp = function (stamp) {
    this._mode()._manageStamp(stamp);
  };

  proto._getContainerSize = function () {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function (elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded(items);
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat(filteredItems);
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function (elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded(items);
    // layout previous items
    this.layoutItems(this.filteredItems);
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat(this.filteredItems);
    this.items = items.concat(this.items);
  };

  proto._filterRevealAdded = function (items) {
    var filtered = this._filter(items);
    this.hide(filtered.needHide);
    // reveal all new items
    this.reveal(filtered.matches);
    // layout new items, no transition
    this.layoutItems(filtered.matches, true);
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function (elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for (i = 0; i < len; i++) {
      item = items[i];
      this.element.appendChild(item.element);
    }
    // filter new stuff
    var filteredInsertItems = this._filter(items).matches;
    // set flag
    for (i = 0; i < len; i++) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for (i = 0; i < len; i++) {
      delete items[i].isLayoutInstant;
    }
    this.reveal(filteredInsertItems);
  };

  var _remove = proto.remove;
  proto.remove = function (elems) {
    elems = utils.makeArray(elems);
    var removeItems = this.getItems(elems);
    // do regular thing
    _remove.call(this, elems);
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for (var i = 0; len && i < len; i++) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom(this.filteredItems, item);
    }
  };

  proto.shuffle = function () {
    // update random sortData
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function (fn, args) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply(this, args);
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function () {
    return this.filteredItems.map(function (item) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));


// JS-функция определения поддержки WebP

// function testWebP(callback) {
//    var webP = new Image(); webP.onload = webP.onerror = function () { callback(webP.height == 2); }; webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

// }

// testWebP(function (support) {
//    if (support == true) { document.querySelector('body').classList.add('webp'); } else { document.querySelector('body').classList.add('no-webp'); }

// });


function offScroll() {
  document.body.classList.add('noScroll');
}

function onScroll() {
  document.body.classList.remove('noScroll');
}
let showBtn = document.querySelector('.blog__btn_show-aside');
let blogAside = document.querySelector('.blog__aside');

console.log(showBtn);

showBtn.addEventListener('click', e => {
  console.log(e);
  if (blogAside.classList.contains('blog__aside_active')) {
    blogAside.classList.remove('blog__aside_active');
  } else {
    blogAside.classList.add('blog__aside_active');
  }
})
const elem = document.querySelector('.gallery__inner');
const iso = new Isotope(elem, {
  // options
  itemSelector: '.gallery__part',
  layoutMode: 'fitRows'
});

let galerryBtnList = document.querySelectorAll('.gallery__filter-btn');

galerryBtnList.forEach(el => {
  el.addEventListener('click', e => {
    let filter = e.currentTarget.dataset.filter;
    iso.arrange({ filter: `${filter}` });
    galerryBtnList.forEach(del => {
      del.classList.remove('gallery__filter-btn_active');
    })
    el.classList.add('gallery__filter-btn_active');
    console.log(e);
    console.log(el);
  })
})

window.onload = function () {
  galerryBtnList.item(0).click();
}
let headerMenu = document.querySelector('.header__menu');


function openMenu() {
  //  console.log(headerMenu);
  // headerMenu.classList.remove('header__menu_hidden');
  document.querySelector('.header__menu').classList.remove('header__menu_hidden');
  offScroll();
}

function closeMenu() {
  //  console.log(headerMenu);
  headerMenu.classList.add('header__menu_hidden');
  onScroll();
}
new Swiper('.main-slider__container', {
  pagination: {
    el: '.main-slider__dots',
    bulletClass: 'main-slider__dot',
    bulletActiveClass: 'main-slider__dot_active',
  },
});