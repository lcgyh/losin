function ListHtml(e, t) {
    var i = $(e),
    n = $("<div></div>");
    n.html(e);
    var o = t ? n.find(t) : n.children(),
    a = o.length,
    r = {};
    try {
        this.$html = i,
        this.length = a,
        this.rows = o
    } catch(s) {}
    return r.$html = i,
    r.length = a,
    r.rows = o,
    r
}
function fomatFloat(e, t) {
    return t = t || 2,
    Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
}
function getDesignerBannerHeight() {
    var e = $(window).width(),
    t = $(window).height() - 200;
    return 1550 / 630 > e / t && (t = Math.floor(e / (1550 / 630))),
    t
}
function toUtf8(e) {
    var t, i, n, o;
    for (t = "", n = e.length, i = 0; n > i; i++) o = e.charCodeAt(i),
    o >= 1 && 127 >= o ? t += e.charAt(i) : o > 2047 ? (t += String.fromCharCode(224 | o >> 12 & 15), t += String.fromCharCode(128 | o >> 6 & 63), t += String.fromCharCode(128 | o >> 0 & 63)) : (t += String.fromCharCode(192 | o >> 6 & 31), t += String.fromCharCode(128 | o >> 0 & 63));
    return t
}
function isName(e) {
    var t = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
    return t.test(e)
}
function isEmail(e) {
    var t = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    return t.test(e)
}
function isPhone(e) {
    var t = /^1[2|3|4|5|6|7|8|9]\d{9}$/;
    return t.test(e)
}
function isPassword(e) {
    var t = /^[\d_a-zA-Z]{6,12}$/;
    return t.test(e)
}
function openWeixin() {
    closeOpenWeixin();
    var e = '<div class="weixin-sharepop" >                                <div class="weixin-sharecode"><div id="wxeq"></div></div>                                <p>微信扫码分享，谢谢你让更多人知道我们</p>                            </div>';
    $(".weixin-sharepop").length < 1 && $("body").append(e),
    weixin_pop = $.layer({
        type: 1,
        area: ["auto", "auto"],
        border: [0],
        title: "",
        shadeClose: !0,
        closeBtn: [0, !1],
        page: {
            dom: ".weixin-sharepop"
        }
    })
}
function closeOpenWeixin() {
    $(".weixin-sharepop").remove(),
    layer.close(weixin_pop)
}
function openWeibo(e, t, i) {
    var n = "http://service.weibo.com/share/share.php?url=&appkey=&title=" + e + "&pic=" + t + "&ralateUid=&language=zh_cn";
    i.attr("href", n)
}
function shareWeibo(e, t, i, n) {
    var o = function(i) {
        var o = i,
        a = e + o.url;
        a = encodeURIComponent(a),
        openWeibo(a, t, n)
    };
    genshorturl(i, 1, o)
}

function isEmptyObj(e) {
    return null == e || "undefined" == typeof e || 0 == e.length
}

function showErCodeUrl(e, t) {
    var i = toUtf8(t);
    $("#" + e).qrcode(document.createElement("canvas").getContext ? {
        width: 256,
        height: 256,
        text: i
    }: {
        render: "table",
        width: 256,
        height: 256,
        text: i
    })
}
function getQueryString(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
    i = window.location.search.substr(1).match(t);
    return null != i ? unescape(i[2]) : ""
}
function getCookie(e) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}
function setCookie(e, t, i) {
    var n = new Date;
    n.setDate(n.getDate() + i),
    document.cookie = e + "=" + escape(t) + (null == i ? "": ";expires=" + n.toGMTString())
}
Date.now || (Date.now = function() {
    return (new Date).valueOf()
}),
$.ajaxSetup({
    timeout: 3e4,
    cache: !1
});
var Escape = {
    escape: function(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    },
    unescape: function(e) {
        return String(e).replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    }
};
jQuery.fn.extend({
    autoHeight: function() {
        function e(e) {
            var t = jQuery(e);
            return t.css({
                height: t.attr("_initAdjustHeight"),
                "overflow-y": "hidden"
            }).height(e.scrollHeight)
        }
        return this.each(function() {
            var t = jQuery(this);
            t.attr("_initAdjustHeight") || t.attr("_initAdjustHeight", t.outerHeight()),
            e(this).on("paste cut keydown keyup focus blur",
            function() {
                e(this)
            })
        })
    }
});
var myInviteCode = "",
isLogin = !1,
width, height, goodsimgsHeight, findpsw_height, scroll_top, body_width, fastbarFn = function() {
    var e = $(".goods-imgs").height(),
    t = $(".fastbuy-btn.buybtn");
    $(".itembuy-container").length > 0 ? e = $(".itembuy-container").height() - 80 : $(".cosmo-wrapper").length > 0 && (e = $(".cosmo-wrapper").height() - 80),
    width >= 1100 ? scroll_top > e ? ($(".fastbar").show(), $(".addcart-success-box").hide(), $(".itemdetail-body").find("header").css("z-index", "-1")) : ($(".fastbar,#itembuy_pop_wrapper").fadeOut(200), t.removeClass("popshow"), $(".itemdetail-body").find("header").css("z-index", "5")) : (scroll_top > e ? ($(".fastbar").show(), $(".addcart-success-box").hide()) : ($(".fastbar,#itembuy_pop_wrapper").fadeOut(200), t.removeClass("popshow")), $(".itemdetail-body").find("header").css("z-index", "5"))
},
loadFunction = function() {
    width = $(window).width(),
    height = $(window).height(),
    body_width = getBodyWidth(),
    goodsimgsHeight = $(".goods-imgs").height(),
    $(".section").css({
        height: Number(height),
        "background-size": "cover"
    }),
    fastbarFn(),
    $(".team-members").css("height", width / 4),
    width > .67 * height ? height > width ? ($(".invite-wrapper").css("height", height), $(".invite-wrapper").css("background-size", "100% 100%")) : ($(".invite-wrapper").css("height", width), $(".invite-wrapper").css("background-size", "100% auto")) : ($(".invite-wrapper").css("height", height), $(".invite-wrapper").css("background-size", "auto 100%"));
    var e = $(".invite-content").height();
    $(".invite-footer,.invite-layer").css("height", e)
},
getBodyWidth = function() {
    return $("body").width()
},
middelFindPsw = function() {
    findpsw_height = parseInt($(".findpsw-wrapper").css("height")),
    $(".findpsw-wrapper").css("margin-top", -findpsw_height / 2 - 110),
    $(".success-wrapper").css("margin-top", -findpsw_height / 2 - 55)
},
preheatingBox = function() {
    var e = $(window).width() - 8;
    $(".preheating-box").css({
        width: e / 3,
        height: 4 * e / 15
    })
};
$(window).resize(function() {
    loadFunction(),
    middelFindPsw(),
    preheatingBox()
}),
$(window).load(function() {
    loadFunction(),
    middelFindPsw();
    var e = 0,
    t = 0;
    $("body").mousemove(function(i) {
        var n = i.pageX,
        o = i.pageY;
        0 == t && (t = n),
        0 == e && (e = o),
        ml = n - t,
        ml = Math.ceil(ml / 50),
        $(".part-shop").css("left", -.1 * width - ml),
        mt = o - e,
        mt = Math.ceil(mt / 100),
        $(".part-shop").css("top", -.05 * height - mt)
    })
}),
$(function() {
    setTimeout(function() {
        preheatingBox()
    },
    200);
    var e = ".server-online,.detail-contact-box,#btn_contactchat,.contact-btn,#btn_mechat,.icon-30-service,.icon-40-service,#lp_serverbtn,.lp-server,.lp-serverbtn,.server-fixed,.icon-50-service,.contact-service,#service_btn,.footer-server",
    t = "true",
    i = $("#userId").val(),
    n = $("#userEmail").val() || "",
    o = $("#userMobile").val() || "",
    a = $("#userName").val() || "",
    r = $("#item_id").val() || "",
    s = $("#item_detail_shareImg").val() || "",
    c = $("#item_name").val() || "",
    u = $("#itemOrignMinPrice").val() || "",
    h = +Date.now(),
    d = $(e);
    $.each(d,
    function(e, t) {
        $(t).attr("href", "javascript:void(0)"),
        $(t).attr("target", "")
    }),
    $(document).on("click", e,
    function() {
        if (!isPC()) {
            var e = "nonce=9ca6fff5a509fb887ac72cf5c92010e7&timestamp=" + h + "&web_token=" + i + "&e1b4172dff6a58a45a8eb6f51e7ab152";
            e = CryptoJS.SHA1(e).toString(),
            e = e.toUpperCase();
            var d = "//zaozuo.udesk.cn/im_client/?web_plugin_id=24136" + encodeURIComponent("&c_cf_mobile=" + o + "&c_name=" + a + "&c_email=" + n + "&c_phone=" + o + "&c_cf_email=" + n + "&c_cf_userId=" + i + "&c_cn_userId=" + i + "&c_cn_联系方式1" + o + "&product_title=" + c + "&product_url=" + window.location.href + "&product_image=" + s + "&product_商品ID=" + r + "&product_价格=" + u + "&nonce=9ca6fff5a509fb887ac72cf5c92010e7&signature=" + e + "&timestamp=" + h + "&web_token=" + i);
            "true" == t ? location.href = "https:" + d: "false" == t && (location.href = "https:" == document.location.protocol ? "https://static.meiqia.com/dist/standalone.html?eid=11197": "http://static.meiqia.com/dist/standalone.html?eid=11197")
        }
    }),
    width = $(window).width(),
    height = $(window).height(),
    $(".team-members").css("height", width / 4),
    $("input:text").not($(".noclear")).each(function() {
        var e = $(this).val();
        $(this).hasClass("placeholder") ? ($(this).focus(function() {
            $(this).hide(),
            $(this).parent().find("input:password").show().focus()
        }), $(this).parent().find("input:password").focus(function() {
            $(this).parent().hasClass("input-box-error") && ($(".error-tips").fadeOut(500), $(this).parent().removeClass("input-box-error")),
            $(this).parent().find("input:text").hide()
        }).blur(function() {
            "" == $(this).val() && $(this).hide().parent().find("input:text").show()
        })) : $(this).focus(function() {
            $(this).parent().hasClass("input-box-error") && ($(this).parent().removeClass("input-box-error"), $(".error-tips").fadeOut(500)),
            e === $(this).val() && $(this).val("")
        }).blur(function() {
            "" == $(this).val() && $(this).val(e)
        })
    }),
    $("textarea").keydown(function(e) {
        return "13" == e.keyCode ? !1 : void 0
    }),
    $("input:password").bind("copy cut paste",
    function() {
        return ! 1
    });
    var p = !1,
    l = !0,
    f = isPC();
    $(window).scroll(function() {
        if (f) {
            scroll_top = $(window).scrollTop(); {
                var e = $(".icon-70-top"),
                t = ($(".icon-70-service"), $(".icon-70-questionnaire"));
                $(".icon-70-wrapper")
            }
            scroll_top > 800 ? (e.show(), t.hide(), e.prev().removeClass("last")) : (e.hide(), t.show(), e.prev().addClass("last")),
            width = $(window).width(),
            height = $(window).height(),
            goodsimgsHeight = $(".goods-imgs").height(); {
                $(".banner-buybtn") && $(".banner-buybtn").length > 0 ? $(".banner-buybtn").offset().top + $(".banner-buybtn").height() - $(".fastbar").height() : goodsimgsHeight
            }
            if (fastbarFn(), height = $(window).height(), $(".anchor").length) {
                var i = $(".anchor").offset().top,
                n = $(".preheating-header-black"),
                o = parseInt(n.css("top"));
                if (40 > scroll_top && (n.removeClass("show-panel"), l && 0 > o && (n[0].style.position = "absolute", n.stop().animate({
                    top: 0
                },
                0), l = !1), 0 == scroll_top && (n[0].style.position = "fixed", n.stop().animate({
                    top: 0
                },
                0), l = !0)), scroll_top > i) {
                    if (p) return ! 1;
                    p = !0,
                    n.stop().animate({
                        top: "-36px"
                    },
                    200,
                    function() {
                        $(this).addClass("show-panel"),
                        $(this).stop().animate({
                            top: 0
                        },
                        200)
                    })
                } else {
                    if (!p) return ! 1;
                    p = !1,
                    0 != scroll_top && n.stop().animate({
                        top: "-54px"
                    },
                    200)
                }
            }
        }
    }),
    $(".back-top,.icon-70-top").click(function() {
        $("html,body").animate({
            scrollTop: "0px"
        },
        500)
    });
    var g, m = setInterval(function() {
        $(".share-tooltips").stop().animate({
            left: "35px"
        },
        {
            duration: 300,
            easing: "easeInOutSine"
        }).animate({
            left: "28px"
        },
        {
            duration: 300,
            easing: "easeOutBounce"
        })
    },
    2e3);
    $(".share-list").hover(function() {
        var e = $(this);
        g = setTimeout(function() {
            e.find(".republic-share").stop().animate({
                opacity: "0"
            },
            {
                duration: 200,
                easing: "easeInOutSine",
                complete: function() {
                    clearInterval(m),
                    e.find(".share-tooltips").remove(),
                    e.find(".icon-20-weixin").stop().animate({
                        left: "0px",
                        opacity: "1"
                    },
                    {
                        duration: 200,
                        easing: "easeInOutSine"
                    }),
                    e.find(".icon-20-weibo").stop().animate({
                        left: "40px",
                        opacity: "1"
                    },
                    {
                        duration: 200,
                        easing: "easeInOutSine"
                    })
                }
            })
        },
        100)
    },
    function() {
        clearTimeout(g),
        $(this).find(".icon-20-weixin").stop().animate({
            left: "20px",
            opacity: "0"
        },
        {
            duration: 200,
            easing: "easeInOutSine"
        }),
        $(this).find(".icon-20-weibo").stop().animate({
            left: "20px",
            opacity: "0"
        },
        {
            duration: 200,
            easing: "easeInOutSine",
            complete: function() {
                $(".republic-share").animate({
                    opacity: "1"
                },
                {
                    duration: 200,
                    easing: "easeInOutSine"
                })
            }
        })
    }),
    $(".icon-50-weixin-white,.nf-icon-wx").click(function() {
            var weixin_sharepop = '<div class="weixin-popup-wrapper">\
                                <img src="images/losin_ewm.png" />\
                                <div><p>扫码关注微信公众号</p></div>\
                            </div>';
            if ($('.weixin-popup-wrapper').length < 1) {
                $('body').append(weixin_sharepop);
            }else{
                  $('.weixin-popup-wrapper').remove()
                   $('body').append(weixin_sharepop);
            }
            weixin_pop = $.layer({
                type: 1,
                shadeClose: true,
                area: ['auto', 'auto'],
                border: [0],
                title: '',
                closeBtn : [0,false],
                page: {dom : '.weixin-popup-wrapper'}
            });
    }),
   
    $(document).on("click", ".xubox_shade",
    function() {
        closeOpenWeixin()
    });
    "undefined" != typeof $(".menu-bar li").menuSlide && $(".menu-bar li").menuSlide(".menu-barli", ".menu-bar-line", 0, 300)
});
