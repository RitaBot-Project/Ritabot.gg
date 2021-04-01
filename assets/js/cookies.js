if (typeof(COOKIE) == 'undefined'){
    COOKIE = {};
}

/** config_values */
COOKIE_CSSHOST = null; //script will load a css file called "embed.css" from this folder

/** Credit to Google Material Design Icon */

/** Icon set use SVG to display icon */

COOKIE.Browser = null;
COOKIE.QueryParams = {};
COOKIE.Initialized = false;
COOKIE.Init = function(){
    if(COOKIE.QueryParams.mode != undefined && COOKIE.QueryParams.mode =="demo"){
        COOKIE.getReady();
    } else {
        if (!COOKIE.Utils.getCookie("cookie_law")) {
            COOKIE.getReady();
        }
    }
}
COOKIE.getReady = function(){
    if (COOKIE.Initialized == false) {
        COOKIE.Initialized = true;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i];
            if (script.src.indexOf('cookie.js') != -1) {
                COOKIE.Utils.getQueryParams(script.src, COOKIE.QueryParams);
                COOKIE_CSSHOST = script.src.replace(".js", ".css");
            }
        }
        COOKIE.CSS.add();
        COOKIE.Law.build();
    }
}
COOKIE.CSS = {
    added : false,
    add : function(){
        // import css
        if (typeof(COOKIE_HAS_CSS) == "undefined" && COOKIE.CSS.added == false){
            COOKIE.CSS.added = true;
            var css = document.createElement("link");
            css.setAttribute("rel", "stylesheet");
            css.setAttribute("type", "text/css");
            css.setAttribute("charset", "utf-8");
            css.setAttribute("href", COOKIE_CSSHOST);
            document.body.appendChild(css);
        }
    }
}
COOKIE.Law = {
    build : function(){
        //Build player with pure javascript
        var embedBottomPlayer = document.getElementById("cookie_law_notification");
        if (embedBottomPlayer == null){
            // create body
            var bottomPlayer = document.createElement("div");
            bottomPlayer.setAttribute("id", "cookie_law_notification");
            bottomPlayer.style.visibility = "hidden";
            bottomPlayer.className = COOKIE.QueryParams.skin ? COOKIE.QueryParams.skin : "cookielaw1";
            if (COOKIE.QueryParams.position != undefined){
                COOKIE.Utils.addClass(bottomPlayer, "cookie_" + COOKIE.QueryParams.position)
            }
            if (COOKIE.QueryParams.bg_color != undefined){
                bottomPlayer.style.background = "#"+COOKIE.QueryParams.bg_color;
            }
            var messageBox = document.createElement("div");
            messageBox.setAttribute("id", "cookie_message");
            messageBox.innerHTML = COOKIE.QueryParams.msg ? bbcodeParser.bbcodeToHtml(decodeURIComponent(COOKIE.QueryParams.msg)) : bbcodeParser.bbcodeToHtml("We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and advertising. To learn more, [url=https://yoursite.com/learnmore]click here[/url]. By continuing to use our site, you accept our use of cookies, revised [url=https://yoursite.com/privacy]Privacy Policy[/url] and [url=https://yoursite.com/tos]Terms of Use[/url]. Still confused? send us an [mail=youremail@gmail.com]email[/mail].");
            var learnmore_text = COOKIE.QueryParams.learnmore ? bbcodeParser.bbcodeToHtml(decodeURIComponent(COOKIE.QueryParams.learnmore)) : bbcodeParser.bbcodeToHtml("")
            var morelink = "https://ritabot.gg/cookie-policy";
            COOKIE.QueryParams.morelink != undefined ? morelink = COOKIE.QueryParams.morelink : morelink = "https://ritabot.gg/cookie-policy/"
            messageBox.innerHTML += " <a id=\"cookie_learnmore_link\" target=\"_blank\" class=\"cookie_link\" href=\"" + decodeURIComponent(morelink) + "\">" + learnmore_text + "</a>";
            if (COOKIE.QueryParams.msg_color != undefined){
                messageBox.style.color = "#"+COOKIE.QueryParams.msg_color;
            }
            bottomPlayer.appendChild(messageBox);
            var acceptButton = document.createElement("div");
            acceptButton.setAttribute("id", "cookie_accept_button");
            var accept_text = "";
            COOKIE.QueryParams.accept_text != undefined ? accept_text = COOKIE.QueryParams.accept_text : accept_text = "I Accept"
            acceptButton.setAttribute("title", accept_text);
            acceptButton.innerHTML = accept_text;
            acceptButton.onclick = COOKIE.Law.hide;
            if (COOKIE.QueryParams.accept_background != undefined){
                acceptButton.style.background = "#" + COOKIE.QueryParams.accept_background;
            }
            if (COOKIE.QueryParams.accept_color != undefined){
                acceptButton.style.color = "#" + COOKIE.QueryParams.accept_color;
            }
            if (COOKIE.QueryParams.accept_text != undefined){
                acceptButton.style.innerHTML = "#" + COOKIE.QueryParams.accept_text;
            }
            if (COOKIE.QueryParams.accept_radius != undefined){
                acceptButton.style.borderRadius = COOKIE.QueryParams.accept_radius;
            }
            bottomPlayer.appendChild(acceptButton);
            var closeButton = document.createElement("div");
            closeButton.setAttribute("id", "cookie_close_button");
            closeButton.setAttribute("title", "Close");
            bottomPlayer.appendChild(closeButton);
            document.body.appendChild(bottomPlayer);
            if (COOKIE.QueryParams.link_color != undefined){
                var Links = COOKIE.Utils.getByClass('cookie_link');
                for (var i = 0; i < Links.length; i++){
                    var link = Links[i];
                    link.style.color = "#" + COOKIE.QueryParams.link_color;
                }
            }
            if (COOKIE.QueryParams.animation != undefined && COOKIE.QueryParams.delay){
                setTimeout(function () {
                    COOKIE.Utils.addClass(bottomPlayer, COOKIE.QueryParams.animation)
                }, COOKIE.QueryParams.delay * 1000)
            }

        }
    },
    hide : function(){
        var fadeTarget = document.getElementById("cookie_law_notification");
        fadeTarget.style.opacity = '0';
        setTimeout(function(){fadeTarget.parentNode.removeChild(fadeTarget);}, 1000);
        var d = new Date();
        //Cookie law will show only one time each 365 days
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "cookie_law=1; " + expires;
    }
}
// JS function to convert BBCode and HTML code - http;//coursesweb.net/javascript/
var BBCodeHTML = function() {
    var me = this;            // stores the object instance
    var token_match = /{[A-Z_]+[0-9]*}/ig;

    // regular expressions for the different bbcode tokens
    var tokens = {
        'URL' : '((?:(?:[a-z][a-z\\d+\\-.]*:\\/{2}(?:(?:[a-z0-9\\-._~\\!$&\'*+,;=:@|]+|%[\\dA-F]{2})+|[0-9.]+|\\[[a-z0-9.]+:[a-z0-9.]+:[a-z0-9.:]+\\])(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~\\!$&\'*+,;=:@|]+|%[\\dA-F]{2})*)*(?:\\?(?:[a-z0-9\\-._~\\!$&\'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?(?:#(?:[a-z0-9\\-._~\\!$&\'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?)|(?:www\\.(?:[a-z0-9\\-._~\\!$&\'*+,;=:@|]+|%[\\dA-F]{2})+(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~\\!$&\'*+,;=:@|]+|%[\\dA-F]{2})*)*(?:\\?(?:[a-z0-9\\-._~\\!$&\'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?(?:#(?:[a-z0-9\\-._~\\!$&\'*+,;=:@\\/?|]+|%[\\dA-F]{2})*)?)))',
        'LINK' : '([a-z0-9\-\./]+[^"\' ]*)',
        'EMAIL' : '((?:[\\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*(?:[\\w\!\#$\%\'\*\+\-\/\=\?\^\`{\|\}\~]|&)+@(?:(?:(?:(?:(?:[a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(?:\\d{1,3}\.){3}\\d{1,3}(?:\:\\d{1,5})?))',
        'TEXT' : '(.*?)',
        'SIMPLETEXT' : '([a-zA-Z0-9-+.,_ ]+)',
        'INTTEXT' : '([a-zA-Z0-9-+,_. ]+)',
        'IDENTIFIER' : '([a-zA-Z0-9-_]+)',
        'COLOR' : '([a-z]+|#[0-9abcdef]+)',
        'NUMBER'  : '([0-9]+)'
    };

    var bbcode_matches = [];        // matches for bbcode to html

    var html_tpls = [];             // html templates for html to bbcode

    var html_matches = [];          // matches for html to bbcode

    var bbcode_tpls = [];           // bbcode templates for bbcode to html

    /**
     * Turns a bbcode into a regular rexpression by changing the tokens into
     * their regex form
     */
    var _getRegEx = function(str) {
        var matches = str.match(token_match);
        var nrmatches = matches.length;
        var i = 0;
        var replacement = '';

        if (nrmatches <= 0) {
            return new RegExp(preg_quote(str), 'g');        // no tokens so return the escaped string
        }

        for(; i < nrmatches; i += 1) {
            // Remove {, } and numbers from the token so it can match the
            // keys in tokens
            var token = matches[i].replace(/[{}0-9]/g, '');

            if (tokens[token]) {
                // Escape everything before the token
                replacement += preg_quote(str.substr(0, str.indexOf(matches[i]))) + tokens[token];

                // Remove everything before the end of the token so it can be used
                // with the next token. Doing this so that parts can be escaped
                str = str.substr(str.indexOf(matches[i]) + matches[i].length);
            }
        }

        replacement += preg_quote(str);      // add whatever is left to the string

        return new RegExp(replacement, 'gi');
    };

    /**
     * Turns a bbcode template into the replacement form used in regular expressions
     * by turning the tokens in $1, $2, etc.
     */
    var _getTpls = function(str) {
        var matches = str.match(token_match);
        var nrmatches = matches.length;
        var i = 0;
        var replacement = '';
        var positions = {};
        var next_position = 0;

        if (nrmatches <= 0) {
            return str;       // no tokens so return the string
        }

        for(; i < nrmatches; i += 1) {
            // Remove {, } and numbers from the token so it can match the
            // keys in tokens
            var token = matches[i].replace(/[{}0-9]/g, '');
            var position;

            // figure out what $# to use ($1, $2)
            if (positions[matches[i]]) {
                position = positions[matches[i]];         // if the token already has a position then use that
            } else {
                // token doesn't have a position so increment the next position
                // and record this token's position
                next_position += 1;
                position = next_position;
                positions[matches[i]] = position;
            }

            if (tokens[token]) {
                replacement += str.substr(0, str.indexOf(matches[i])) + '$' + position;
                str = str.substr(str.indexOf(matches[i]) + matches[i].length);
            }
        }

        replacement += str;

        return replacement;
    };

    /**
     * Adds a bbcode to the list
     */
    me.addBBCode = function(bbcode_match, bbcode_tpl) {
        // add the regular expressions and templates for bbcode to html
        bbcode_matches.push(_getRegEx(bbcode_match));
        html_tpls.push(_getTpls(bbcode_tpl));

        // add the regular expressions and templates for html to bbcode
        html_matches.push(_getRegEx(bbcode_tpl));
        bbcode_tpls.push(_getTpls(bbcode_match));
    };

    /**
     * Turns all of the added bbcodes into html
     */
    me.bbcodeToHtml = function(str) {
        var nrbbcmatches = bbcode_matches.length;
        var i = 0;

        for(; i < nrbbcmatches; i += 1) {
            str = str.replace(bbcode_matches[i], html_tpls[i]);
        }

        return str;
    };

    /**
     * Turns html into bbcode
     */
    me.htmlToBBCode = function(str) {
        var nrhtmlmatches = html_matches.length;
        var i = 0;

        for(; i < nrhtmlmatches; i += 1) {
            str = str.replace(html_matches[i], bbcode_tpls[i]);
        }

        return str;
    }

    /**
     * Quote regular expression characters plus an optional character
     * taken from phpjs.org
     */
    function preg_quote (str, delimiter) {
        return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
    }

    // adds BBCodes and their HTML
    me.addBBCode('[b]{TEXT}[/b]', '<strong>{TEXT}</strong>');
    me.addBBCode('[i]{TEXT}[/i]', '<em>{TEXT}</em>');
    me.addBBCode('[u]{TEXT}[/u]', '<span style="text-decoration:underline;">{TEXT}</span>');
    me.addBBCode('[s]{TEXT}[/s]', '<span style="text-decoration:line-through;">{TEXT}</span>');
    me.addBBCode('[mail={EMAIL}]{TEXT}[/mail]', '<a href="mailto:{URL}" class="cookie_link" title="Send email to {URL}">{TEXT}</a>');
    me.addBBCode('[url={URL}]{TEXT}[/url]', '<a href="{URL}" class="cookie_link" title="link" target="_blank">{TEXT}</a>');
    me.addBBCode('[url]{URL}[/url]', '<a href="{URL}" class="cookie_link" title="link" target="_blank">{URL}</a>');
    me.addBBCode('[url={LINK}]{TEXT}[/url]', '<a href="{LINK}" class="cookie_link" title="link" target="_blank">{TEXT}</a>');
    me.addBBCode('[url]{LINK}[/url]', '<a href="{LINK}" class="cookie_link" title="link" target="_blank">{LINK}</a>');
    me.addBBCode('[img={URL} width={NUMBER1} height={NUMBER2}]{TEXT}[/img]', '<img src="{URL}" width="{NUMBER1}" height="{NUMBER2}" alt="{TEXT}" />');
    me.addBBCode('[img]{URL}[/img]', '<img src="{URL}" alt="{URL}" />');
    me.addBBCode('[img={LINK} width={NUMBER1} height={NUMBER2}]{TEXT}[/img]', '<img src="{LINK}" width="{NUMBER1}" height="{NUMBER2}" alt="{TEXT}" />');
    me.addBBCode('[img]{LINK}[/img]', '<img src="{LINK}" alt="{LINK}" />');
    me.addBBCode('[color=COLOR]{TEXT}[/color]', '<span style="{COLOR}">{TEXT}</span>');
    me.addBBCode('[highlight={COLOR}]{TEXT}[/highlight]', '<span style="background-color:{COLOR}">{TEXT}</span>');
    me.addBBCode('[quote="{TEXT1}"]{TEXT2}[/quote]', '<div class="quote"><cite>{TEXT1}</cite><p>{TEXT2}</p></div>');
    me.addBBCode('[quote]{TEXT}[/quote]', '<cite>{TEXT}</cite>');
    me.addBBCode('[blockquote]{TEXT}[/blockquote]', '<blockquote>{TEXT}</blockquote>');
};
var bbcodeParser = new BBCodeHTML();       // creates object instance of BBCodeHTML()

COOKIE.Utils = {
    getByClass : function(className, element){
        try {
            if (element != null){
                return document.querySelectorAll(element+' > .'+className);
            } else {
                return document.querySelectorAll('.'+className);
            }
        } catch(e){
            if (element != null){
                var node = element;
            } else {
                var node = document.getElementsByTagName('body')[0];
            }
            var a = [], re = new RegExp('\\b' + className + '\\b'); els = node.getElementsByTagName('*');
            for (var i = 0, j = els.length; i < j; i++) { if ( re.test(els[i].className) ) { a.push(els[i]); } } return a;
        }
    },
    hasClass : function (element, clas) {
        try {
            return element.classList.contains(clas);
        } catch(e){
            try {
                var m = element.className.match(new RegExp('(\\s|^)'+clas+'(\\s|$)'));
                if (m == null){
                    return false;
                } else {
                    return true;
                }
            } catch(e){}
        }
    },
    addClass : function(elements, clas) {
        try {
            if (elements.length != undefined){
                for (var i = 0; i < elements.length; i++){
                    var element = elements[i];
                    element.classList.add(clas);
                }
            } else {
                elements.classList.add(clas);
            }
        } catch(e){
            try {
                if (elements.length != undefined){
                    for (var i = 0; i < elements.length; i++){
                        var element = elements[i];
                        if (!COOKIE.Utils.hasClass(element, clas)) {
                            var c = COOKIE.Utils.trimString(element.className += " "+clas);
                            element.className = c;
                        }
                    }
                } else {
                    if (!COOKIE.Utils.hasClass(elements, clas)) {
                        var c = COOKIE.Utils.trimString(elements.className += " "+clas);
                        elements.className = c;
                    }
                }
            } catch(e){}
        }
    },
    removeClass : function(elements, clas){
        try {
            if (elements.length != undefined){
                for (var i = 0; i < elements.length; i++){
                    var element = elements[i];
                    element.classList.remove(clas);
                }
            } else {
                elements.classList.remove(clas);
            }
        } catch(e){
            try {
                if (elements.length != undefined){
                    for (var i = 0; i < elements.length; i++){
                        var element = elements[i];
                        if (COOKIE.Utils.hasClass(element, clas)) {
                            var reg = new RegExp('(\\s|^)'+clas+'(\\s|$)');
                            element.className = element.className.replace(reg,' ');
                        }
                    }
                } else {
                    if (COOKIE.Utils.hasClass(elements, clas)) {
                        var reg = new RegExp('(\\s|^)'+clas+'(\\s|$)');
                        elements.className = elements.className.replace(reg,' ');
                    }
                }
            } catch(e){}
        }
    },
    trimString : function(str){
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    getQueryParams : function(str, obj){
        try {
            var splits = str.split("?");
            var paramString = splits[1];
            var params = paramString.split("&");
            for (var i = 0; i < params.length; i++){
                var param = params[i];
                var keyValue = param.split("=");
                obj[keyValue[0]] = keyValue[1];
            }
        } catch(e){}
    },
    // from underscore.js
    debounce : function(func, wait) {
        return COOKIE.Utils.limit(func, wait, true);
    },
    // from underscore.js
    limit : function(func, wait, debounce) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var throttler = function() {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    },
    on : function (elSelector, eventName, selector, fn) {
        var element = document.querySelector(elSelector);
        element.addEventListener(eventName, function(event) {
            var possibleTargets = element.querySelectorAll(selector);
            var target = event.target;
            for (var i = 0, l = possibleTargets.length; i < l; i++) {
                var el = target;
                var p = possibleTargets[i];

                while(el && el !== element) {
                    if (el === p) {
                        return fn.call(p, event);
                    }

                    el = el.parentNode;
                }
            }
        });
    },
    getCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }
}

/* DOM Functions */
if (window.opera) {
    COOKIE.Browser = "Opera";
} else {
    if (window.ActiveXObject) {
        COOKIE.Browser = "IE"
    } else {
        if (!navigator.taintEnabled) {
            COOKIE.Browser = "Webkit"
        } else {
            if (navigator.product == "Gecko"){
                COOKIE.Browser = "Mozilla";
            }
        }
    }
}

(function(){
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++){
        var script = scripts[i];
        if (script.src.indexOf('cookie.js') != -1){
            COOKIE.Utils.getQueryParams(script.src, COOKIE.QueryParams);
        }
    }
})();

(function(){
    try{
        var domready = function(){
            COOKIE.Init();
        };
        switch (COOKIE.Browser){
            case 'IE':
                var temp = document.createElement('div');
                (function(){
                    try {
                        (function(){
                            temp.innerHTML = 'temp';
                            document.body.appendChild(temp);
                            document.body.removeChild(temp);
                            domready();
                        })();
                    } catch (e){
                        setTimeout(arguments.callee, 50);
                    }
                })();
                break;
            case 'Webkit': (function(){
                if (document.readyState == 'loaded' || document.readyState == 'complete'){
                    domready();
                } else {
                    setTimeout(arguments.callee, 50);
                }
            })();
                break;
            default:
                try {
                    window.addEventListener('load', domready, false);
                    document.addEventListener('DOMContentLoaded', domready, false);
                } catch(e){}
        }
    } catch(e){}
})();
