!function(e,n,o){var t=e();e.fn.dropdownHover=function(o){return"ontouchstart"in document?this:(t=t.add(this.parent()),this.each(function(){var r,s=e(this),d=s.parent(),i={delay:500,instantlyCloseOthers:!0},a={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},u="show.bs.dropdown",h="hide.bs.dropdown",l=e.extend(!0,{},i,o,a);d.hover(function(e){return d.hasClass("open")||s.is(e.target)?(t.find(":focus").blur(),l.instantlyCloseOthers===!0&&t.removeClass("open"),n.clearTimeout(r),d.addClass("open"),void s.trigger(u)):!0},function(){r=n.setTimeout(function(){d.removeClass("open"),s.trigger(h)},l.delay)}),s.hover(function(){t.find(":focus").blur(),l.instantlyCloseOthers===!0&&t.removeClass("open"),n.clearTimeout(r),d.addClass("open"),s.trigger(u)}),d.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},l.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,this);