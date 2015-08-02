if ("undefined" == typeof console) var console = {
    log: function() {},
    time: function() {},
    timeEnd: function() {}
};
! function(a) {
    "undefined" == typeof a.prototype.trim && (a.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    })
}(String), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function(a) {
        var b = this.__proto__ || this.constructor.prototype;
        return a in this && (!(a in b) || b[a] !== this[a])
    }), "function" != typeof Object.getOwnPropertyNames && (Object.getOwnPropertyNames = function(a) {
        var b = [];
        if ("object" == typeof a && null !== a)
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    }),
    function() {
        function a() {
            if (!d.isReady) {
                try {
                    document.documentElement.doScroll("left")
                } catch (b) {
                    return void setTimeout(a, 1)
                }
                d.ready()
            }
        }
        var b, c, d = function() {},
            e = (window.an_jQuery, window.$an, !1),
            f = [];
        d.fn = {
            ready: function(a) {
                return d.bindReady(), d.isReady ? a.call(document, d) : f && f.push(a), this
            }
        }, d.isReady = !1, d.ready = function() {
            if (!d.isReady) {
                if (!document.body) return setTimeout(d.ready, 13);
                if (d.isReady = !0, f) {
                    for (var a, b = 0; a = f[b++];) a.call(document, d);
                    f = null
                }
                d.fn.triggerHandler && d(document).triggerHandler("ready")
            }
        }, d.bindReady = function() {
            if (!e) {
                if (e = !0, "complete" === document.readyState) return d.ready();
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", d.ready, !1);
                else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", c), window.attachEvent("onload", d.ready);
                    var b = !1;
                    try {
                        b = null == window.frameElement
                    } catch (f) {}
                    document.documentElement.doScroll && b && a()
                }
            }
        }, b = d(document), document.addEventListener ? c = function() {
            document.removeEventListener("DOMContentLoaded", c, !1), d.ready()
        } : document.attachEvent && (c = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", c), d.ready())
        }), window.an_jQuery = window.$an = d
    }(),
    function() {
        var a = new function() {
                "use strict";
                var a = "",
                    b = null;
                this.activeWindow = function() {
                    var a = window;
                    try {
                        this.isPreview() || window.top == window.self || (a = window.top)
                    } catch (b) {
                        a = window
                    }
                    return a
                }, this.activeWindowDocument = function() {
                    var a, b = this.activeWindow();
                    try {
                        a = b.document
                    } catch (c) {
                        a = window.document
                    }
                    return a
                }, this.isPreviewGenerator = function() {
                    if (this.isPreview()) {
                        document.domain = "adsnative.com";
                        try {
                            if (window.top != window.self && -1 != window.top.document.location.href.indexOf("adsnative.com/preview/")) return !0
                        } catch (a) {
                            return !1
                        }
                    }
                    return !1
                }, this.isPreview = function() {
                    var a = this.getPageHostName();
                    return -1 != a.indexOf("adsnative.com") ? !0 : !1
                }, this.getPageHostName = function() {
                    if (a) return a;
                    try {
                        a = window.top.document.location.host
                    } catch (b) {
                        a = window.document.location.host
                    }
                    return a
                }, this.isPreviewMode = function() {
                    var a = this.getURLParams();
                    return this.isPreview() || a.hasOwnProperty("adsnative_preview") ? !0 : !1
                }, this.isProfilingMode = function() {
                    var a = this.getURLParams();
                    return this.isPreviewMode() && a.hasOwnProperty("profile") && a.profile ? !0 : !1
                }, this.urlPrefix = function() {
                    return "https:" == location.protocol ? "https:" : "http:"
                }, this.getPreviewModeHost = function() {
                    if (this.isPreview() && this.isPreviewGenerator()) {
                        var a = this.getPageHostName();
                        if ("dev-www.adsnative.com" == a) return "http://dev-api.adsnative.com";
                        if ("stage.adsnative.com" == a) return this.urlPrefix() + "//stage-api.adsnative.com";
                        if ("demo2.adsnative.com" == a) return this.urlPrefix() + "//demo-api2.adsnative.com";
                        if ("demo.adsnative.com" == a) return this.urlPrefix() + "//demo-api.adsnative.com";
                        if ("console.adsnative.com" == a || "adsnative.com" == a) return this.urlPrefix() + "//api.adsnative.com"
                    } else {
                        var b = this.getURLParams();
                        if (b.hasOwnProperty("server")) {
                            if ("prod" == b.server) return this.urlPrefix() + "//api.adsnative.com";
                            if ("stage" == b.server) return this.urlPrefix() + "//stage-api.adsnative.com";
                            if ("demo" == b.server) return this.urlPrefix() + "//demo-api.adsnative.com";
                            if ("local" == b.server) return "http://dev-api.adsnative.com"
                        }
                    }
                    return null
                }, this.getURLParams = function() {
                    if (b) return b;
                    var a, c, d = /\+/g,
                        e = /([^&=]+)=?([^&]*)/g,
                        f = function(a) {
                            return decodeURIComponent(a.replace(d, " "))
                        };
                    try {
                        c = this.activeWindow().location.search.substring(1)
                    } catch (g) {
                        c = window.location.search.substring(1)
                    }
                    for (b = {}; a = e.exec(c);) b[f(a[1])] = f(a[2]);
                    return b
                }, this.encodeQueryData = function(a) {
                    var b = [];
                    for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
                    return b.join("&")
                }, this.get_document_keywords = function(a) {
                    if (!arguments.length) var a = 100;
                    var b = "",
                        c = document.getElementsByTagName("meta");
                    if (c)
                        for (var d = 0, e = c.length; e > d; d++) "keywords" == c[d].name.toLowerCase() && (b += c[d].content);
                    var f = [],
                        g = "";
                    if ("" != b) {
                        g = "[", f = b.split(",");
                        for (var h = 0; h < f.length && a > h; h++) g += '"' + f[h].trim() + '"', h != f.length - 1 && h != a - 1 && (g += ", ");
                        g += "]"
                    }
                    return g
                }, this.extend = function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }, this.isEmpty = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                }, this.removeClickEvents = function(a) {
                    for (var b = a.getElementsByTagName("a"), c = 0; c < b.length; c++) - 1 === b[c].className.indexOf("adsnative-share-button") && -1 === b[c].className.indexOf("adsnative-cta-button") && (b[c].onclick = function() {
                        return !1
                    })
                }, this.anyClickTags = function(a) {
                    for (var b = a.getElementsByTagName("a"), c = !1, d = 0; d < b.length; d++)
                        if (-1 === b[d].className.search("adsnative") && null != b[d].getAttribute("href")) {
                            c = !0;
                            break
                        }
                    return c
                }, this.isScriptInBody = function() {
                    for (var a = document.getElementsByTagName("script"), b = a[a.length - 1], c = b; c; c = c.parentNode) {
                        if ("BODY" == c.tagName) return !0;
                        if ("HEAD" == c.tagName) return !1
                    }
                    return !1
                }, this.checkCSSPath = function(a) {
                    for (var b = this.activeWindowDocument(), c = {
                            status: !1
                        }, d = b, e = a.trim().split(">"), f = 0, g = "before", h = 0; h < e.length; h++) {
                        var i = e[h].trim(),
                            j = !1;
                        if ("#" == i[0]) {
                            var k = i.split(":");
                            if (d = b.getElementById(k[0].slice(1)), k.length > 1 && (g = k[1]), !d) return !1
                        } else {
                            var k = i.split(":");
                            if (!(k.length > 1)) return !1;
                            var l = /eq\((\d+)\)/g.exec(k[1].trim());
                            l && l.length > 1 && (f = parseInt(l[1])), k.length > 2 && (g = k[2]), k = k[0].split(".");
                            var m = k[0],
                                n = null,
                                o = 0,
                                p = d.childNodes;
                            k.length > 1 && (n = k[1]), m && (p = d.getElementsByTagName(m)), n && "getElementsByClassName" in document && (p = d.getElementsByClassName(n));
                            for (var q = 0; q < p.length; q++)
                                if (1 == p[q].nodeType && (!n || (" " + p[q].className + " ").indexOf(" " + n + " ") > -1)) {
                                    if (o == f) {
                                        d = p[q], j = !0;
                                        break
                                    }
                                    o++
                                }
                            if (0 == j) return !1
                        }
                    }
                    return c.status = !0, c.currentElement = d, c.position = g, c
                }, this.dropTags = function(a, b, c, d) {
                    function e(a) {
                        for (var b = 0; b < a.childNodes.length; b++)
                            if ("SCRIPT" == a.childNodes[b].tagName) {
                                var d = a.childNodes[b];
                                a.removeChild(a.childNodes[b]), f(a, d, c)
                            } else a.childNodes[b].childNodes.length && e(a.childNodes[b])
                    }

                    function f(a, b) {
                        var e = !1,
                            f = document.createElement("script");
                        if (f.type = b.type, b.src && (f.src = b.src), f.async = "true", b.innerHTML && (f.innerHTML = b.innerHTML), "undefined" != typeof d && d)
                            for (var g in d) d.hasOwnProperty(g) && f.setAttribute(g, d[g]);
                        "undefined" != typeof c && (b.innerHTML && !b.src ? c() : f.onload = f.onreadystatechange = function() {
                            try {
                                e || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e = !0, c(), f.onload = f.onreadystatechange = null)
                            } catch (a) {
                                console.log(a)
                            }
                        });
                        for (var h = 0; h < b.attributes.length; h++) !b.attributes[h].value || b.attributes[h].value in {
                            "null": "",
                            "false": "",
                            0: ""
                        } || "src" == b.attributes[h].name || f.setAttribute(b.attributes[h].name, b.attributes[h].value);
                        a.appendChild(f)
                    }
                    var g = document.createElement("div");
                    g.innerHTML = b;
                    for (var h = g.childNodes, i = 0, j = 0; h.length && j < h.length && !(i > 6); i++) {
                        var k = h[j];
                        "IMG" == k.tagName ? (k.style.cssText = "margin:0;padding:0;height:1px;width:1px;border:none;float:left;display:block;", a.appendChild(k)) : "SCRIPT" == k.tagName ? (f(a, k), j++) : "IFRAME" == k.tagName ? (arguments.length > 2 && (k.onload = c), a.appendChild(k)) : (a.appendChild(k), e(k))
                    }
                }, this.indexOf = function(a) {
                    var b;
                    return b = "function" == typeof Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
                        var b = -1,
                            c = -1;
                        for (b = 0; b < this.length; b++)
                            if (this[b] === a) {
                                c = b;
                                break
                            }
                        return c
                    }, b.call(this, a)
                }, this.getWindowSize = function(a) {
                    var b, c = a.toLowerCase(),
                        d = this.activeWindow(),
                        e = d.document,
                        f = e.documentElement;
                    if (void 0 === d["inner" + a]) b = f["client" + a];
                    else if (d["inner" + a] != f["client" + a]) {
                        var g = e.createElement("body");
                        g.id = "vpw-test-b", g.style.cssText = "overflow:scroll";
                        var h = e.createElement("div");
                        h.id = "vpw-test-d", h.style.cssText = "position:absolute;top:-1000px", h.innerHTML = "<style>@media(" + c + ":" + f["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>", g.appendChild(h), f.insertBefore(g, e.head), b = 7 == h["offset" + a] ? f["client" + a] : d["inner" + a], f.removeChild(g)
                    } else b = d["inner" + a];
                    return b
                }, this.bindEvent = function(a, b, c) {
                    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
                }
            },
            b = (new function() {
                function a(a, b, f, g, h) {
                    d = document.createElement("iframe"), d.width = b, d.height = f, d.setAttribute("src", a.embedUrl), d.style.margin = "20px auto 10px", d.style.border = "none", d.className = "adsnative-video-embed", e = document.createElement("div"), e.innerHTML = a.summary, "story" == a.type && (e.innerHTML = e.innerHTML + '&#32;<a href="' + a.url + '" class="adsnative-read-more" ' + ("_blank" == a.target ? 'target="_blank"' : "") + ">Read more</a>"), e.className = "adsnative-video-summary", e.style.cssText = "line-height:120%; font-size:14px; margin:10px auto 20px;", "video" == a.type && g.appendChild(d), g.appendChild(e), c = h + d.offsetHeight + e.offsetHeight, e.style.display = "none", d.style.display = "none"
                }

                function b() {
                    f ? (d.style.display = "none", e.style.display = "none") : (d.style.display = "block", e.style.display = "block")
                }
                var c, d, e, f = !1;
                this.expandStoryElement = function(d, e, g) {
                    c || a(d, e.clientWidth, 180, e, g), f && b();
                    var h = c,
                        i = g,
                        j = 300,
                        k = (new Date).getTime(),
                        l = parseInt(e.clientHeight),
                        m = f ? i : h,
                        n = m - l;
                    e.style.height = m;
                    var o = setInterval(function() {
                        var a = (new Date).getTime() - k;
                        if (j >= a) {
                            var c = l + Math.floor(n * a / j);
                            e.style.height = c + "px"
                        } else clearInterval(o), e.style.height = m + "px", f || b(), f = !f
                    }, 1)
                }
            }, new function() {
                function b() {
                    if (this.overlay) this.overlay.style.display = "block";
                    else {
                        var b = a.activeWindow();
                        this.overlay = b.document.createElement("div"), this.overlay.style.cssText = "position:fixed;z-index:999;width:100%;height:100%;text-align:center;top:0;left:0;background:rgba(0,0,0,0.7);", this.overlay.id = "an-lightbox-overlay";
                        this.overlay.onclick = function() {
                            return this.style.display = "none", e(), !1
                        }, b.document.getElementsByTagName("body")[0].appendChild(this.overlay)
                    }
                }

                function c() {
                    this.overlay.style.display = "none"
                }

                function d(d) {
                    if (b(), this.lightbox_elem) this.lightbox_elem.innerHTML = d, this.lightbox_elem.style.display = "block";
                    else {
                        var f, g, j = a.activeWindow();
                        i > h ? (f = Math.floor(.8 * h), g = Math.floor(3 * f / 4)) : (g = Math.floor(.8 * i), f = Math.floor(4 * g / 3)), this.close_button = j.document.createElement("div"), this.close_button.style.cssText = "width:32px;height:32px;cursor:pointer;position:absolute;z-index:999999;background:url(http://static.adsnative.com/static/img/nativead/close3.png) 0px 0px no-repeat;display: inline-block;", this.close_button.style.left = Math.floor((h - f) / 2) - 16 + f + "px", this.close_button.style.top = Math.floor((i - g) / 2) - 16 + "px", this.close_button.onclick = function() {
                            c(), e()
                        }, this.overlay.appendChild(this.close_button), this.lightbox_elem = j.document.createElement("div"), this.lightbox_elem.style.cssText = "background-color:#FFF;position:absolute;box-shadow:0px 0px 30px rgba(0,0,0,0.8);", this.lightbox_elem.style.width = f + "px", this.lightbox_elem.style.height = g + "px", this.lightbox_elem.style.left = Math.floor((h - f) / 2) + "px", this.lightbox_elem.style.top = Math.floor((i - g) / 2) + "px", this.lightbox_elem.id = "an-lightbox", this.lightbox_elem.innerHTML = d, this.overlay.appendChild(this.lightbox_elem)
                    }
                }

                function e() {
                    this.lightbox_elem.style.display = "none", this.lightbox_elem.innerHTML = ""
                }
                this.overlay = null, this.lightbox_elem = null;
                var f = a.activeWindow(),
                    g = f.document,
                    h = (g.documentElement, g.getElementsByTagName("body")[0], a.getWindowSize("Width")),
                    i = a.getWindowSize("Height");
                this.open = function(a, b) {
                    b = Boolean(b), d('<iframe id="an-lightbox-player-iframe" src="' + a.embedUrl + "&auto_play=" + b + '" style="width:100%;height:100%;overflow:hide;" frameborder="0" allowfullscreen="true" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe')
                }, this.close = function() {
                    c(), e()
                }
            }),
            c = new function() {
                this.postRequest = function(a, b, c, d) {
                    var e;
                    e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.onreadystatechange = function() {
                        4 == e.readyState && (200 == e.status ? arguments.length > 2 && c(e.responseText) : arguments.length > 3 && d())
                    }, e.open("POST", a, !0), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(b)
                }, this.getJSONP = function(a, b, c) {
                    var d;
                    d = arguments.length > 2 ? c : Math.floor(1e9 * Math.random() + 1e4), window["an_callback_" + d] = function(a) {
                        b(a)
                    };
                    var e = document.createElement("script");
                    e.src = a + "&callback=an_callback_" + d, document.getElementsByTagName("head")[0].appendChild(e)
                }
            },
            d = new function() {
                this.dropCookieMatchingPixel = function() {
                    var b = document.createElement("img");
                    b.src = a.urlPrefix() + "//rudy.adsnative.com/cm.gif", b.style.cssText = "height:1px;width:1px;border:none;display:block;", document.getElementsByTagName("body").length ? document.getElementsByTagName("body")[0].appendChild(b) : $an.fn.ready(function() {
                        document.getElementsByTagName("body")[0].appendChild(b)
                    })
                }
            },
            e = function(d) {
                "use strict";

                function e() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || m.forceMobile
                }

                function f(b) {
                    this.status = !1, this.apiKey = null, this.current_network_index = 0, this.addVideoDetectiveListner = function(a) {
                        var b = function(b) {
                            var c = b.message || b.data;
                            if (c.hasOwnProperty("video_detective") && b.origin == m.apiUrl) try {
                                a.getElementsByTagName("vd_title")[0].outerHTML = c.title, a.getElementsByTagName("vd_summary")[0].outerHTML = c.description
                            } catch (d) {}
                        };
                        window.addEventListener ? window.addEventListener("message", b, !1) : window.attachEvent && window.attachEvent("onmessage", b)
                    };
                    ! function(c) {
                        c.content = b, o.log("console", c.content), c.content.hasOwnProperty("zid") ? c.apiKey = c.content.zid : m.apiKey && (c.apiKey = m.apiKey), "OK" == c.content.status && (c.status = !0), c.win = a.activeWindow(), c.win_doc = a.activeWindowDocument()
                    }(this)
                }

                function g() {
                    var a = document.getElementsByTagName("script"),
                        b = a[a.length - 1],
                        c = document.createElement("div"),
                        d = "adsnative-dummy-" + m.apiKey;
                    return c.id = d, b.parentNode.insertBefore(c, b.nextSibling), d
                }

                function h(b) {
                    var d = m.domainLookupUrl + m.domainLookupEndpoint + a.getPageHostName() + "/?";
                    c.getJSONP(d, b, "lookup")
                }

                function i(b, c, d, e) {
                    var f;
                    f = arguments.length > 3 ? function(a) {
                        p.end("Get_Ad");
                        try {
                            e(a)
                        } catch (b) {
                            o.log("error", "name: " + b.name + " message: " + b.message, b)
                        }
                    } : function(a) {
                        p.end("Get_Ad");
                        try {
                            k(a)
                        } catch (b) {
                            o.log("error", "name: " + b.name + " message: " + b.message, b)
                        }
                    }, b || !a.getPageHostName() ? j("zid=" + b, c, d, f) : (o.log("console", "Domain lookup check started"), p.start("Domain_Lookup_Check"), h(function(b) {
                        p.end("Domain_Lookup_Check"), o.log("console", "Domain lookup check ended"), b && b.length || o.log("console", "No valid placements found for this domain");
                        var e = [],
                            g = "";
                        if (o.log("console", "Configured placements for this domain: "), o.log("console", b), n.isScriptInBody) {
                            for (var h = 0; h < b.length; h++) a.checkCSSPath(b[h].cssPath) && (e.push(b[h].zid), g += "zid=" + b[h].zid + "&");
                            o.log("console", "CSS Path found for following placements on this page: "), o.log("console", e), e.length ? j(g, c, d, f) : o.log("console", "No valid placements found for this domain")
                        } else p.start("Wait_To_Render"), $an.fn.ready(function() {
                            p.end("Wait_To_Render");
                            for (var h = 0; h < b.length; h++) a.checkCSSPath(b[h].cssPath) && (e.push(b[h].zid), g += "zid=" + b[h].zid + "&");
                            o.log("console", "CSS Path found for following placements on this page: "), o.log("console", e), e.length ? j(g, c, d, f) : o.log("console", "No valid placements found for this domain")
                        })
                    }))
                }

                function j(b, d, e, f) {
                    var g = {
                        force_mobile: m.forceMobile ? 1 : 0
                    };
                    e && (g.kw = e), d > 0 && (g.num_ads = d);
                    try {
                        window.top != window.self && "undefined" != typeof window.top.location.href && window.top.location.href ? (g.url = window.top.location.href, g.ref = window.top.document.referrer) : (g.url = window.location.href, g.ref = document.referrer)
                    } catch (h) {
                        g.url = window.location.href, g.ref = document.referrer
                    }
                    n.isPreviewMode && (n.forceCampaignID && (g.preview = 1, g.cid = n.forceCampaignID), n.forceCreativeID && (g.crid = n.forceCreativeID));
                    var i = m.apiUrl + m.apiEndpoint + "?" + b + "&" + a.encodeQueryData(g);
                    p.start("Get_Ad"), c.getJSONP(i, f)
                }

                function k(a) {
                    n.apiData = a, l(a)
                }

                function l(a) {
                    if (p.start("Render"), a instanceof Array)
                        for (var b = 0; b < a.length; b++) {
                            var c = new f(a[b]);
                            c.processAd()
                        } else {
                            var c = new f(a);
                            c.processAd()
                        }
                    p.end("Render"), p.end("Total_Self"), p.timeSincePageStart("Total_Overall")
                }
                var m = {
                        apiUrl: a.urlPrefix() + "//api.adsnative.com",
                        apiEndpoint: "/v1/ad-template.json",
                        domainLookupUrl: a.urlPrefix() + "//d2b3uqm49lqeua.cloudfront.net",
                        domainLookupEndpoint: "/v1/host/",
                        apiKey: "",
                        apiData: null,
                        staticUrl: a.urlPrefix() + "//static.adsnative.com/static/",
                        version: "1.0",
                        subversion: "1.372",
                        onready: null,
                        userCallbackOnAdLoad: null,
                        processNativeAdElement: null,
                        numAds: 0,
                        forceMobile: !1,
                        callbackOnNoAds: null,
                        blockAdLoad: !1,
                        blockAdDisplay: !1,
                        nativeAdElementId: null,
                        keywords: null,
                        autoPosition: !1,
                        preview: !1
                    },
                    n = {
                        isScriptInBody: !1,
                        isPreviewMode: !1,
                        isProfilingMode: !1,
                        forceCampaignID: null,
                        forceCreativeID: null,
                        apiData: null,
                        adUnits: {}
                    },
                    o = new function() {
                        function b(a, b, d) {
                            var e = m.apiUrl + "/v1/log/error/?",
                                f = "level=" + d + "&message_type=" + encodeURIComponent(a) + "&data=" + encodeURIComponent(b);
                            c.postRequest(e, f)
                        }
                        this.log = function(c, d, e) {
                            if (n.isPreviewMode && (console.log(d), arguments.length > 2 && console.log(e)), "error" == c) {
                                var f = (m.apiKey ? m.apiKey : a.getPageHostName(), {
                                    settings: m,
                                    session: n,
                                    pageURL: a.activeWindow().location.href,
                                    userAgent: navigator.userAgent
                                });
                                if (arguments.length > 2 && (f.error = e), "name: TypeError message: null is not an object (evaluating 'this.referenceElement.parentNode')" == d || "name: TypeError message: 'null' is not an object (evaluating 'this.referenceElement.parentNode')" == d || "name: TypeError message: Cannot read property 'parentNode' of null" == d) return;
                                b(d, JSON.stringify(f), c)
                            }
                        }
                    },
                    p = new function() {
                        this.timeSincePageStart = function(b) {
                            if (n.isProfilingMode) try {
                                console.debug("AN_" + b + ": " + (Date.now() - a.activeWindow().performance.timing.navigationStart) + "ms")
                            } catch (c) {}
                        }, this.start = function(a) {
                            n.isProfilingMode && console.time("AN_" + a)
                        }, this.end = function(a) {
                            n.isProfilingMode && console.timeEnd("AN_" + a)
                        }
                    },
                    q = new function() {
                        function b(a) {
                            var b = a.getBoundingClientRect(),
                                c = b.height * b.width,
                                d = Math.min(b.height, b.bottom, (window.innerHeight || document.documentElement.clientHeight) - b.top),
                                e = Math.min(b.width, b.right, (window.innerWidth || document.documentElement.clientWidth) - b.left),
                                f = d * e;
                            return f / c >= .5
                        }

                        function c(a, b, f, g, h, i, j) {
                            var k = a.parentNode,
                                l = 2;
                            return e(a) ? "BODY" === k.tagName ? !0 : "0" === d(a, "opacity") || "none" === d(a, "display") || "hidden" === d(a, "visibility") ? !1 : (("undefined" == typeof b || "undefined" == typeof f || "undefined" == typeof g || "undefined" == typeof h || "undefined" == typeof i || "undefined" == typeof j) && (b = a.offsetTop, h = a.offsetLeft, g = b + a.offsetHeight, f = h + a.offsetWidth, i = a.offsetWidth, j = a.offsetHeight), k ? "hidden" !== d(k, "overflow") && "scroll" !== d(k, "overflow") || !(h + l > k.offsetWidth + k.scrollLeft || h + i - l < k.scrollLeft || b + l > k.offsetHeight + k.scrollTop || b + j - l < k.scrollTop) ? (a.offsetParent === k && (h += k.offsetLeft, b += k.offsetTop), c(k, b, f, g, h, i, j)) : !1 : !0) : !1
                        }

                        function d(a, b) {
                            return window.getComputedStyle ? document.defaultView.getComputedStyle(a, null)[b] : a.currentStyle ? a.currentStyle[b] : void 0
                        }

                        function e(a) {
                            for (; a = a.parentNode;)
                                if (a == document) return !0;
                            return !1
                        }
                        this.inViewCheck = function(d, e) {
                            var f = 0,
                                g = setInterval(function() {
                                    b(d) && c(d) ? f++ : f = 0, f >= 9 && (a.dropTags(d, e), clearInterval(g), o.log("console", "view logged!"))
                                }, 100)
                        }
                    };
                f.prototype.applyCommonStyle = function(a) {
                    var b = document.createElement("style");
                    b.setAttribute("type", "text/css");
                    var c = 'div.adsnative-labels { } div.adsnative-powered-by { margin-right:5px !important; font-size: 11px; color: #777; float: right; text-align: right; margin-right: 0px; }div.adsnative-powered-by a { text-decoration: none; color: #333; font-size:14px;  font-family: "BenchNine", sans-serif; }div.adsnative-powered-by a:hover { color: #cc0033; }.adsnative-sponsored-label { font-size:12px; color: #999; margin-bottom:5px; }.adsnative-share-buttons { float: left; margin-left:8px; margin-bottom:5px; }.adsnative-share-button { text-decoration:none; display:block; height:24px; float:left; margin-right:10px; padding-left:25px; line-height:21px; font-size:14px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;  }.adsnative-fb-share { background:url(' + m.staticUrl + "img/facebook.png) no-repeat; color:#3a5899; }.adsnative-tw-share { background:url(" + m.staticUrl + "img/twitter.png) no-repeat; color:#40aceb; }.adsnative-cta-button { display:block; float:left; width:100%; margin:8px 0px auto; border-radius: 0px; background:-webkit-gradient( linear, left top, left bottom, color-stop(5%, #ededed), color-stop(100%, #dfdfdf) ); border:1px solid #DDD; padding:8px 0; font-size:14px; font-family:Helvetica, Arial, sans-serif; text-decoration:none; text-align:center; text-shadow:none; color:#004276; text-shadow:0 1px 0 rgba(255,255,255, 1); }div.adsnative-reset { clear: both; }";
                    if (c += '[class^="adsnative-icon-"], [class*=" adsnative-icon-"] { display:none; }', document.getElementsByTagName("head")[0].appendChild(b), Object.prototype.hasOwnProperty.call(b, "styleSheet")) b.styleSheet.cssText = c + a;
                    else try {
                        b.innerHTML = c + a
                    } catch (d) {
                        try {
                            b.textContent = c + a
                        } catch (d) {
                            b.innerText = c + a
                        }
                    }
                }, f.prototype.outputAd = function(b) {
                    var c = document.createElement("div");
                    c.innerHTML = b.html === ""? "Test" : b.html;
                    var d;
                    c.childNodes.length > 1 ? 
                    (d = c, b.backgroundColor && (d.style.backgroundColor = b.backgroundColor), this.referenceElement.parentNode.insertBefore(d, this.referenceElement)) 
                    : (d = c.firstchild, b.backgroundColor && (d.style.backgroundColor = b.backgroundColor), 
                    this.referenceElement.parentNode.insertBefore(d, this.referenceElement)), b.hasOwnProperty("trackingTags") && a.dropTags(d, b.trackingTags), m.processNativeAdElement && m.processNativeAdElement(d), this.ctaButton = document.createElement("div"), this.ctaButton.innerHTML = '<a href="' + b.ctaUrl + '" class="adsnative-cta-button" target="_blank">' + b.ctaTitle + "</a>", this.shareButtons = document.createElement("div"), this.shareButtons.innerHTML = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(b.url) + '" class="adsnative-fb-share adsnative-share-button" target="_blank">Share</a><a href="https://twitter.com/intent/tweet/?text=' + encodeURIComponent(b.title) + "&url=" + b.url + '" class="adsnative-tw-share adsnative-share-button" target="_blank">Tweet</a><div class="adsnative-reset"></div>', this.shareButtons.style.cssText = "display:block;margin-top:10px;", this.shareButtons.className = "adsnative-share-buttons";
                    var e = document.createElement("div");
                    e.className = "adsnative-reset";
                    var f = document.createElement("div");
                    f.style.cssText = "", b.ctaUrl && b.ctaTitle && "" != b.ctaTitle ? d.appendChild(this.ctaButton) : f.appendChild(this.shareButtons), f.appendChild(e), f.className = "adsnative-labels";
                    try {
                        this.origClientHeight = window.getComputedStyle(d).getPropertyValue("height") ? parseInt(window.getComputedStyle(d).getPropertyValue("height").slice(0, -2)) : this.nativeAdElement.clientHeight
                    } catch (g) {
                        origClientHeight = d.getBoundingClientRect().bottom - d.getBoundingClientRect().top
                    }
                    this.setupClick(b, d), b.hasOwnProperty("viewableTags") && q.inViewCheck(d, b.viewableTags), this.addVideoDetectiveListner(d)
                }, f.prototype.setupClick = function(b, c) {
                    var d = this.origClientHeight,
                        e = this;
                    c.onclick = function(a) {
                        return -1 === a.target.className.indexOf("adsnative-share-button") && -1 === a.target.className.indexOf("adsnative-cta-button") && -1 === a.target.className.indexOf("adsnative-read-more") ? e.onUserClick(b, c, d) : void 0
                    }, a.anyClickTags(c) || !b.url && ("video" != b.type || b.inlineVideo) || (c.style.cursor = "pointer")
                }, f.prototype.onUserClick = function(c, d) {
                    if ("video" == c.type && n.apiData && n.adUnits.hasOwnProperty(n.apiData.zid) && n.adUnits[n.apiData.zid].hasOwnProperty("onclick")) return n.adUnits[n.apiData.zid].onclick({
                        type: c.type,
                        url: c.url,
                        embedUrl: c.embedUrl,
                        title: c.title,
                        summary: c.summary,
                        brand_name: c.promotedBy,
                        image: c.imageSrc
                    }), !1;
                    if ("video" != c.type || c.inlineVideo) {
                        if (!(!e() && a.anyClickTags(d) || c.inlineVideo) && c.url) {
                            if ("undefined" != typeof c.clickCallback) {
                                var f = c.clickCallback["function"],
                                    g = c.clickCallback.args;
                                "function" == typeof window[f] && window[f].apply(this, g)
                            }
                            var h = a.activeWindow();
                            if ("_blank" == c.target) {
                                var i = h.open(c.url, "_blank");
                                i.focus()
                            } else h.location.href = c.url;
                            return !1
                        }
                        if (!c.url) return !1
                    } else if ("autoplay_lightbox" == c.videoExperience) return b.open(c, !0), !1;
                    return !0
                }, f.prototype.outputHTML = function(a) {
                    var b = document.createElement("div");
                    b.innerHTML = a;
                    for (var c = 0; c < b.childNodes.length; c++) {
                        var d = b.childNodes[c];
                        this.referenceElement.parentNode.insertBefore(d, this.referenceElement)
                    }
                }, f.prototype.renderNativeAd = function() {
                    if (this.content.hasOwnProperty("ads") && !a.isEmpty(this.content.ads)) {
                        this.applyCommonStyle(this.content.ads[0].ad.style), this.outputHTML(this.content.htmlWrapperTop);
                        for (var b = 0; b < this.content.ads.length; b++) this.outputAd(this.content.ads[b].ad);
                        this.outputHTML(this.content.htmlWrapperBottom)
                    } else this.content.hasOwnProperty("ad") && Object.getOwnPropertyNames(this.content.ad).length && (this.applyCommonStyle(this.content.ad.style), this.outputAd(this.content.ad))
                }, f.prototype.renderNetworkAd = function(b) {
                    var c = this,
                        d = !1,
                        e = !1,
                        f = !1,
                        g = !1,
                        h = !1,
                        i = ["ntent_feed", "inmobi_feed", "aol_feed", "ebay_feed", "gravity_feed", "kixer_feed", "admarketplace_feed"];
                    this.thirdPartyElement = document.createElement("div"), this.referenceElement.parentNode.insertBefore(this.thirdPartyElement, this.referenceElement), this.nativeAdElement = this.thirdPartyElement;
                    var j = ["ntent_feed", "aol_feed", "ebay_feed", "gravity_feed", "inmobi_feed", "kixer_feed", "triple_lift", "federated_media", "kixer", "saymedia", "contentad", "connatix", "outbrain", "sharethrough", "taboola", "nativo", "other", "admarketplace_feed"];
                    if (a.indexOf.call(j, b.providerName) > -1) {
                        var k = a.urlPrefix() + "//bevo.adsnative.com/ca.gif?sid=" + b.sid + "&action_name=req_" + b.providerName.substring(0, 2) + "&action_value=1";
                        a.dropTags(this.thirdPartyElement, '<img src="' + k + '" height="1" width="1" style="margin:0;padding:0;height:1px;width:1px;border:none;display:block;"/>')
                    }
                    var l = null;
                    if ("connatix" == b.providerName && (b.headerTags && (b.html = b.headerTags, b.headerTags = ""), a.bindEvent(window, "connatix_no_content", function() {
                            o.log("console", "fallback: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), c.fallbackNetwork()
                        }), a.bindEvent(window, "connatix_content_fill", function() {
                            o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish()
                        }), l = {
                            "data-connatix-event": "connatix_content_fill"
                        }), i.indexOf(b.providerName) > -1) {
                        var m = {};
                        b.hasOwnProperty("customFields") && !a.isEmpty(b.customFields) && (m = b.customFields), this.fetchNetworkCreative(b.sid, b.providerName, m)
                    } else a.dropTags(this.thirdPartyElement, b.html, function() {
                        if ("kixer" == b.providerName) "function" == typeof __kx_ad_start && (__kx_ad_start(), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags));
                        else if ("triple_lift" == b.providerName)
                            if (document.getElementById("tlif_" + String(window._tl.getTlSN()))) {
                                var f = document.getElementById("tlif_1").contentWindow || document.getElementById("tlif_1"),
                                    h = f.serveDefault;
                                f.serveDefault = function() {
                                    o.log("console", "fallback: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), c.fallbackNetwork(), d = !0, h.apply(this, arguments)
                                };
                                var i = f.generic_get_unit,
                                    j = !1;
                                f.generic_get_unit = function() {
                                    d || (o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), j = !0, b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish(), i.apply(this, arguments))
                                };
                                var k = f.tl_advertiser_json;
                                f.tl_advertiser_json = function() {
                                    j || d || (o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish()), k.apply(this, arguments)
                                }
                            } else o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish();
                        else "federated_media" == b.providerName ? setTimeout(function() {
                            e || (o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags))
                        }, 2e3) : "saymedia" == b.providerName ? setTimeout(function() {
                            g || (o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish())
                        }, 2e3) : "contentad" == b.providerName && (b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish())
                    }, l);
                    if ("saymedia" == b.providerName && (window._an_noSayMediaAdFill = function() {
                            o.log("console", "fallback: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), c.fallbackNetwork(), g = !0
                        }), "federated_media" == b.providerName && (window._an_noFMAdFill = function() {
                            o.log("console", "fallback: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), c.fallbackNetwork(), e = !0
                        }), "other" == b.providerName && (b.hasOwnProperty("trackingTags") && a.dropTags(this.thirdPartyElement, b.trackingTags), this.finish()), "sharethrough" == b.providerName) {
                        var n = function(d) {
                            var e = d.message || d.data;
                            if ("http://btlr.sharethrough.com" == d.origin && e) {
                                var g = window.JSON && window.JSON.parse ? window.JSON.parse(e.trim()) : new Function("return " + e.trim())();
                                g.response.creatives.length ? (o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish(), f = !0) : (o.log("console", "fallback: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), c.fallbackNetwork())
                            }
                        };
                        window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent && window.attachEvent("onmessage", n)
                    }
                    b.hasOwnProperty("headerTags") && b.headerTags && a.dropTags(document.getElementsByTagName("head")[0], b.headerTags, function() {
                        if ("outbrain" == b.providerName || "taboola" == b.providerName) o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish();
                        else if ("nativo" == b.providerName) {
                            var d = _pr.prototype.Render_TemplateAd,
                                e = !1;
                            _pr.prototype.Render_TemplateAd = function(f) {
                                h || (e = !0, o.log("console", "filled and done: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), b.hasOwnProperty("trackingTags") && a.dropTags(c.thirdPartyElement, b.trackingTags), c.finish(), d(f))
                            }, setTimeout(function() {
                                e || (h = !0, o.log("console", "fallback: " + c.current_network_index + " - " + b.providerName + " (zid: " + c.apiKey + ")"), c.fallbackNetwork())
                            }, 250)
                        }
                    }, l), b.hasOwnProperty("footerTags") && b.footerTags && a.dropTags(document.getElementsByTagName("body")[0], b.footerTags)
                }, f.prototype.fallbackNetwork = function() {
                    if (this.content.networks) {
                        var b = this.content.networks[this.current_network_index],
                            c = a.urlPrefix() + "//bevo.adsnative.com/ca.gif?sid=" + b.sid + "&action_name=no_" + b.providerName.substring(0, 2) + "&action_value=1";
                        a.dropTags(this.thirdPartyElement, '<img src="' + c + '" height="1" width="1" style="margin:0;padding:0;height:1px;width:1px;border:none;display:block;"/>')
                    }
                    this.content.networks && this.content.networks.length > this.current_network_index + 1 ? (this.cleanupNetwork(), this.current_network_index++, this.renderNetworkAd(this.content.networks[this.current_network_index])) : !a.isEmpty(this.content.ad) && this.content.ad.hasOwnProperty("html") ? (this.cleanupNetwork(), this.renderNativeAd(), this.finish()) : this.finish()
                }, f.prototype.fetchNetworkCreative = function(b, d, e) {
                    var f = this,
                        g = function(a) {
                            o.log("console", a), a && "OK" == a.status && a.ads && a.ads.length > 0 ? (f.applyCommonStyle(a.ads[0].style), f.outputAd(a.ads[0]), f.finish()) : f.fallbackNetwork()
                        };
                    if ("admarketplace_feed" == d) {
                        var h = a.get_document_keywords(4);
                        if ("" == h) return void this.fallbackNetwork();
                        e.kw = h
                    }
                    var i = {
                        sid: b,
                        kw: e.hasOwnProperty("kw") ? e.kw : "",
                        pub_id: e.hasOwnProperty("pub_id") ? e.pub_id : "",
                        placement_id: e.hasOwnProperty("placement_id") ? e.placement_id : "",
                        platform: e.hasOwnProperty("platform") ? e.platform : "",
                        device: e.hasOwnProperty("device") ? e.device : "",
                        num_ads: e.hasOwnProperty("num_ads") ? e.num_ads : 1,
                        ip: n.urlParams.hasOwnProperty("ip") ? n.urlParams.ip : ""
                    };
                    c.getJSONP(m.apiUrl + "/v1/proxy/" + d + "/?" + a.encodeQueryData(i), g)
                }, f.prototype.cleanupNetwork = function() {
                    this.thirdPartyElement && this.thirdPartyElement.parentNode && this.thirdPartyElement.parentNode.removeChild(this.thirdPartyElement)
                }, f.prototype.finish = function() {
                    this && this.referenceElement && this.referenceElement.parentNode && this.referenceElement.parentNode.removeChild(this.referenceElement)
                }, f.prototype.processAd = function() {
                    if (m.userCallbackOnAdLoad && m.userCallbackOnAdLoad(this.status), this.content.hasOwnProperty("zid") && n.adUnits.hasOwnProperty(this.content.zid)) {
                        var a = {};
                        this.status && (a = {
                            type: this.content.ad.type,
                            url: this.content.ad.url,
                            embedUrl: this.content.ad.embedUrl,
                            title: this.content.ad.title,
                            summary: this.content.ad.summary,
                            brand_name: this.content.ad.promotedBy,
                            image: this.content.ad.imageSrc
                        }), n.adUnits[this.content.zid].content = this.content, n.adUnits[this.content.zid].hasOwnProperty("callback") && n.adUnits[this.content.zid].callback("OK" == this.content.status, this.apiKey, a)
                    }
                    if (!m.blockAdDisplay) {
                        if (!this.status) return m.callbackOnNoAds && m.callbackOnNoAds(), void(this.content.hasOwnProperty("message") ? "no active campaigns found" != this.content.message && "ad-unit is not active" != this.content.message && o.log("warning", this.content.message) : o.log("warning", "An unknown error occurred."));
                        if (m.nativeAdElementId) {
                            if (this.referenceElement = document.getElementById(m.nativeAdElementId), !this.referenceElement) return void o.log("warning", "Given nativeAdElementId not found.")
                        } else {
                            if (m.autoPosition) {
                                var b;
                                if (!this.content.hasOwnProperty("cssPath") || !this.content.cssPath) return void o.log("warning", "No CSS path configured for this page.");
                                if (b = this.content.cssPath, n.isScriptInBody) {
                                    var c = this.insertReferenceElement(b);
                                    c ? this.startRender() : this.waitPositionAdAndRender(b)
                                } else this.waitPositionAdAndRender(b);
                                return
                            }
                            if (n.adUnits.hasOwnProperty(this.apiKey) && n.adUnits[this.apiKey].hasOwnProperty("nativeAdElementId")) {
                                if (this.referenceElement = document.getElementById(n.adUnits[this.apiKey].nativeAdElementId), !this.referenceElement) return void o.log("warning", "Given nativeAdElementId not found for apiKey")
                            } else this.referenceElement = document.getElementById("adsnative-dummy-" + this.apiKey)
                        }
                        this.startRender()
                    }
                }, f.prototype.waitPositionAdAndRender = function(a) {
                    var b = this;
                    p.start("Wait_To_Render"), $an.fn.ready(function() {
                        p.end("Wait_To_Render"), b.positionAdAndRender(a)
                    })
                }, f.prototype.positionAdAndRender = function(a) {
                    var b = this.insertReferenceElement(a);
                    return b ? void this.startRender() : void o.log("warning", "Configured CSS path not found on this page.")
                }, f.prototype.startRender = function() {
                    if (this.content.hasOwnProperty("networks") && this.content.networks.length) this.renderNetworkAd(this.content.networks[0]);
                    else if (this.content.hasOwnProperty("ad") && this.content.ad.hasOwnProperty("customFields") && this.content.ad.customFields.hasOwnProperty("network_feed")) {
                        var b = {};
                        this.content.ad.hasOwnProperty("customFields") && !a.isEmpty(this.content.ad.customFields) && (b = this.content.ad.customFields), this.fetchNetworkCreative(this.content.sid, this.content.ad.customFields.network_feed, b)
                    } else this.renderNativeAd(), this.finish()
                }, f.prototype.insertReferenceElement = function(b) {
                    p.start("CSSPath_Search");
                    var c = this.win_doc.createElement("div"),
                        d = a.checkCSSPath(b);
                    return d ? ("after" == d.position ? d.currentElement.parentNode.insertBefore(c, d.currentElement.nextSibling) : "append" == d.position ? d.currentElement.appendChild(c) : d.currentElement.parentNode.insertBefore(c, d.currentElement), this.referenceElement = c, p.end("CSSPath_Search"), !0) : !1
                };
                ! function() {
                    m = a.extend(m, d), n.isScriptInBody = a.isScriptInBody(), n.isPreviewMode = a.isPreviewMode() || m.preview, n.isProfilingMode = a.isProfilingMode(), n.previewModeHost = a.getPreviewModeHost(), n.urlParams = a.getURLParams(), p.timeSincePageStart("Start"), p.start("Total_Self"), n.isPreviewMode && (n.previewModeHost ? (m.apiUrl = n.previewModeHost, m.domainLookupUrl = n.previewModeHost) : n.previewModeHost = m.apiUrl, n.urlParams.hasOwnProperty("zid") && (m.apiKey = n.urlParams.zid), n.urlParams.hasOwnProperty("force_mobile") && (m.forceMobile = Boolean(n.urlParams.force_mobile)), n.urlParams.hasOwnProperty("cid") && (n.forceCampaignID = n.urlParams.cid), n.urlParams.hasOwnProperty("crid") && (n.forceCreativeID = n.urlParams.crid))
                }();
                window.AdsNative = function(a, b) {
                    ! function(c) {
                        c.apiKey = a, c.keywords = "undefined" !== b ? b : "", c.status = !1, c.adRendered = !1
                    }(this)
                }, window.AdsNative.prototype.fetchAd = function(a) {
                    var b = this;
                    i(this.apiKey, 1, m.keywords ? m.keywords : this.keywords, function(c) {
                        b.callbackData = c
                        b.placementProcessor = new f(b.callbackData)
                        c.hasOwnProperty("status") && "OK" == c.status && (b.status = !0), a(b.status)
                    })
                }, window.AdsNative.prototype.displayAd = function(a) {
                    return this.status ? this.adRendered ? (o.log("console", "Placement " + this.apiKey + " : This ad unit already rendered. A placement can be rendered only once."), !1) : (this.elementId = document.getElementById(a), this.elementId ? (this.placementProcessor.referenceElement = this.elementId, this.placementProcessor.startRender(), this.adRendered = !0, !0) : (o.log("console", "Placement " + this.apiKey + " : Element not found"), !1)) : (o.log("console", "Placement " + this.apiKey + " : No valid campaign returned"), !1)
                }, window.AdsNative.prototype.refresh = function() {
                    var a, b = this;
                    if (this.status && this.adRendered) a = this.placementProcessor.nativeAdElement;
                    else {
                        if (!this.elementId) return o.log("console", "Placement " + this.apiKey + " : The placement was never fetched so cannot be refreshed."), !1;
                        a = this.elementId
                    }
                    return this.fetchAd(function() {
                        b.placementProcessor.referenceElement = a, b.placementProcessor.startRender()
                    }), !0
                }, this.load = function() {
                    if (o.log("console", "RenderJS Loaded!"), m.onready && m.onready(), !m.blockAdLoad)
                        if (m.hasOwnProperty("adUnits"))
                            for (var a in m.adUnits) {
                                var b = m.adUnits[a];
                                if (b.hasOwnProperty("apiKey")) {
                                    var c = 1;
                                    b.hasOwnProperty("numAds") && (c = b.numAds);
                                    var d = "";
                                    b.hasOwnProperty("keywords") && b.keywords && (d = b.keywords.join()), b.hasOwnProperty("nativeAdElementId") && document.getElementById(b.nativeAdElementId) && (n.adUnits.hasOwnProperty(b.apiKey) || (n.adUnits[b.apiKey] = {}), n.adUnits[b.apiKey].nativeAdElementId = b.nativeAdElementId), i(b.apiKey, c, d)
                                }
                            } else m.nativeAdElementId || !m.apiKey || m.autoPosition || g(), i(m.apiKey, m.numAds, m.keywords)
                }, this.fetchAds = function(a, b, c) {
                    m.blockAdDisplay = !0;
                    for (var d = 0; d < a.length; d++) n.adUnits.hasOwnProperty(a[d]) || (n.adUnits[a[d]] = {}), n.adUnits[a[d]].callback = c, i(a[d], 1, m.keywords ? m.keywords : b)
                }, this.displayAd = function(a, b) {
                    if (n.adUnits.hasOwnProperty(a) && n.adUnits[a].hasOwnProperty("content")) {
                        var c = n.adUnits[a].content,
                            d = document.getElementById(b),
                            e = new f(c);
                        e.referenceElement = d, e.startRender()
                    }
                }, this.renderAd = function(a, b, c, d) {
                    var e = this;
                    this.fetchAds([d], b, function(b, d) {
                        b && e.displayAd(d, a), c(b)
                    })
                }, this.onClickHandler = function(a, b) {
                    n.adUnits.hasOwnProperty(a) || (n.adUnits[a] = {}), n.adUnits[a].onclick = b
                }, this.getVersion = function() {
                    return m.version
                }
            };
        if ("undefined" == typeof f) var f = [],
            g = [];
        "undefined" == typeof window._AdsNativeOpts ? window._AdsNativeOpts = {
            autoPosition: !0
        } : window._AdsNativeOpts.hasOwnProperty("apiKey") || window._AdsNativeOpts.hasOwnProperty("adUnits") || window._AdsNativeOpts.hasOwnProperty("blockAdLoad") || (window._AdsNativeOpts.autoPosition = !0), g.push(window._AdsNativeOpts), f.push(new e(g[g.length - 1])), f[f.length - 1].load(), "undefined" == typeof window._AdsNative && (window._AdsNative = new e({
            blockAdLoad: !0
        }), window._AdsNative.load()), d.dropCookieMatchingPixel()
    }();
