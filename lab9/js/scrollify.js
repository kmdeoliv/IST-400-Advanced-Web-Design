/*!
 * jQuery Scrollify
 * Version 0.1.14
 *
 * Requires:
 * - jQuery 1.6 or higher
 *
 * https://github.com/lukehaas/Scrollify
 *
 * Copyright 2016, Luke Haas
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(n,e,e.document)}):"object"==typeof module&&module.exports?module.exports=function(n,o){return void 0===o&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(n)),t(o,e,e.document),o}:t(jQuery,e,e.document)}("undefined"!=typeof window?window:this,function(e,t,n,o){"use strict";function s(n,o,s){if(M===!0)return!0;if(f[n]){if(b=!1,s&&D.before(n,p),y=1,D.sectionName&&(H!==!0||0!==n))if(history.pushState)try{history.replaceState(null,null,f[n])}catch(i){t.console&&console.warn("Scrollify warning: This needs to be hosted on a server to manipulate the hash value.")}else t.location.hash=f[n];o?(e(D.target).stop().scrollTop(d[n]),s&&D.after(n,p)):(S=!0,e(D.target).stop().animate({scrollTop:d[n]},D.scrollSpeed,D.easing),t.location.hash.length&&e(t.location.hash).length&&t.console&&console.warn("Scrollify warning: There are IDs on the page that match the hash value - this will cause the page to anchor."),e(D.target).promise().done(function(){S=!1,H=!1,s&&D.after(n,p)}))}}function i(e){if(4>e)return!1;var t,n=20,o=0,s=e.length-1;for(e.length<2*n&&(n=Math.floor(e.length/2)),t=e.length-n;s>=t;s--)o+=e[s];var i=o/n;for(o=0,s=e.length-n-1,t=e.length-2*n;s>=t;s--)o+=e[s];var c=o/n;return i>=c?!0:!1}function c(e,t){for(var n=f.length;n>=0;n--)"string"==typeof e?f[n]===e&&(m=n,s(n,t,!0)):n===e&&(m=n,s(n,t,!0))}var r,a,u,h,l,d=[],f=[],p=[],g=[],m=0,y=1,v=!1,w=e(t).scrollTop(),b=!1,S=!1,E=!1,M=!1,T=[],x=(new Date).getTime(),H=!0,D={section:"section",sectionName:"section-name",easing:"easeOutExpo",scrollSpeed:1100,offset:0,scrollbars:!0,axis:"y",target:"html,body",standardScrollElements:!1,setHeights:!0,before:function(){},after:function(){},afterResize:function(){},afterRender:function(){}};e.scrollify=function(o){function c(t){e(D.target).stop().animate({scrollTop:t},D.scrollSpeed,D.easing)}function H(){e(D.section).each(function(n){D.setHeights?e(this).css("height","auto").outerHeight()<e(t).height()?(e(this).css({height:e(t).height()}),g[n]=!1):(e(this).css({height:e(this).height()}),g[n]=!0):e(this).outerHeight()<e(t).height()?g[n]=!1:g[n]=!0})}function z(n){e(D.section).each(function(n){n>0?d[n]=parseInt(e(this).offset().top)+D.offset:d[n]=parseInt(e(this).offset().top),D.sectionName&&e(this).data(D.sectionName)?f[n]="#"+e(this).data(D.sectionName).replace(/ /g,"-"):f[n]="#"+(n+1),p[n]=e(this),e(f[n]).length&&t.console&&console.warn("Scrollify warning: Section names can't match IDs on the page - this will cause the browser to anchor."),t.location.hash===f[n]&&(m=n,v=!0)}),!0===n?s(m,!1,!1):D.afterRender()}function I(){return w=e(t).scrollTop(),w>parseInt(d[m])?!1:!0}function L(){return w=e(t).scrollTop(),w<parseInt(d[m])+(p[m].height()-e(t).height())?!1:!0}e.easing.easeOutExpo=function(e,t,n,o,s){return t==s?n+o:o*(-Math.pow(2,-10*t/s)+1)+n},u={handleMousedown:function(){return M===!0?!0:(b=!1,void(E=!1))},handleMouseup:function(){return M===!0?!0:(b=!0,void(E&&u.calculateNearest()))},handleScroll:function(){return M===!0?!0:(r&&clearTimeout(r),void(r=setTimeout(function(){return E=!0,b===!1?!1:(b=!1,void u.calculateNearest())},200)))},calculateNearest:function(){w=e(t).scrollTop();for(var n,o=1,i=d.length,c=0,r=Math.abs(d[0]-w);i>o;o++)n=Math.abs(d[o]-w),r>n&&(r=n,c=o);(L()||I())&&(m=c,s(c,!1,!0))},wheelHandler:function(t,n){if(M===!0)return!0;if(D.standardScrollElements&&(e(t.target).is(D.standardScrollElements)||e(t.target).closest(D.standardScrollElements).length))return!0;g[m]||t.preventDefault();var o=(new Date).getTime();if(n=n||-t.originalEvent.detail/3||t.originalEvent.wheelDelta/120,o-x>1300&&(T=[]),x=o,T.length>=35&&T.shift(),T.push(Math.abs(10*n)),S)return!1;if(0>n){if(m<d.length-1&&L()){if(!i(T))return!1;t.preventDefault(),m++,S=!0,s(m,!1,!0)}}else if(n>0&&m>0&&I()){if(!i(T))return!1;t.preventDefault(),m--,S=!0,s(m,!1,!0)}},keyHandler:function(e){return M===!0?!0:void(38==e.keyCode?m>0&&I()&&(m--,s(m,!1,!0)):40==e.keyCode&&m<d.length-1&&L()&&(m++,s(m,!1,!0)))},init:function(){D.scrollbars?(e(t).bind("mousedown",u.handleMousedown),e(t).bind("mouseup",u.handleMouseup),e(t).bind("scroll",u.handleScroll)):e("body").css({overflow:"hidden"}),e(n).bind("DOMMouseScroll mousewheel",u.wheelHandler),e(n).bind("keydown",u.keyHandler)}},h={touches:{touchstart:{y:-1,x:-1},touchmove:{y:-1,x:-1},touchend:!1,direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(t){if(M===!0)return!0;if(D.standardScrollElements&&(e(t.target).is(D.standardScrollElements)||e(t.target).closest(D.standardScrollElements).length))return!0;var n;if("undefined"!=typeof t&&"undefined"!=typeof t.touches)switch(n=t.touches[0],t.type){case"touchstart":h.touches.touchstart.y=n.pageY,h.touches.touchmove.y=-1,h.touches.touchstart.x=n.pageX,h.touches.touchmove.x=-1,h.options.timeStamp=(new Date).getTime(),h.touches.touchend=!1;case"touchmove":h.touches.touchmove.y=n.pageY,h.touches.touchmove.x=n.pageX,h.touches.touchstart.y!==h.touches.touchmove.y&&Math.abs(h.touches.touchstart.y-h.touches.touchmove.y)>Math.abs(h.touches.touchstart.x-h.touches.touchmove.x)&&(t.preventDefault(),h.touches.direction="y",h.options.timeStamp+h.options.timeGap<(new Date).getTime()&&0==h.touches.touchend&&(h.touches.touchend=!0,h.touches.touchstart.y>-1&&Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down())));break;case"touchend":h.touches[t.type]===!1&&(h.touches[t.type]=!0,h.touches.touchstart.y>-1&&h.touches.touchmove.y>-1&&"y"===h.touches.direction&&(Math.abs(h.touches.touchmove.y-h.touches.touchstart.y)>h.options.distance&&(h.touches.touchstart.y<h.touches.touchmove.y?h.up():h.down()),h.touches.touchstart.y=-1,h.touches.touchstart.x=-1,h.touches.direction="undetermined"))}},down:function(){m<=d.length-1&&(L()&&m<d.length-1?(m++,s(m,!1,!0)):Math.floor(p[m].height()/e(t).height())>y?(c(parseInt(d[m])+e(t).height()*y),y+=1):c(parseInt(d[m])+(p[m].height()-e(t).height())))},up:function(){m>=0&&(I()&&m>0?(m--,s(m,!1,!0)):y>2?(y-=1,c(parseInt(d[m])+e(t).height()*y)):(y=1,c(parseInt(d[m]))))},init:function(){n.addEventListener&&(n.addEventListener("touchstart",h.touchHandler,!1),n.addEventListener("touchmove",h.touchHandler,!1),n.addEventListener("touchend",h.touchHandler,!1))}},l={handleResize:function(){clearTimeout(a),a=setTimeout(function(){H(),z(!0),D.afterResize()},400)}},D=e.extend(D,o),H(),z(!1),!0===v?s(m,!1,!0):s(0,!0,!0),u.init(),h.init(),e(t).bind("resize",l.handleResize),n.addEventListener&&t.addEventListener("orientationchange",l.handleResize,!1)},e.scrollify.move=function(e){return e===o?!1:void c(e,!1)},e.scrollify.instantMove=function(e){return e===o?!1:void c(e,!0)},e.scrollify.next=function(){m<f.length&&(m+=1,s(m,!1,!0))},e.scrollify.previous=function(){m>0&&(m-=1,s(m,!1,!0))},e.scrollify.instantNext=function(){m<f.length&&(m+=1,s(m,!0,!0))},e.scrollify.instantPrevious=function(){m>0&&(m-=1,s(m,!0,!0))},e.scrollify.destroy=function(){e(D.section).each(function(){e(this).css("height","auto")}),e(t).unbind("resize",l.handleResize),D.scrollbars&&(e(t).unbind("mousedown",u.handleMousedown),e(t).unbind("mouseup",u.handleMouseup),e(t).unbind("scroll",u.handleScroll)),e(n).unbind("DOMMouseScroll mousewheel",u.wheelHandler),e(n).unbind("keydown",u.keyHandler),n.addEventListener&&(n.removeEventListener("touchstart",h.touchHandler,!1),n.removeEventListener("touchmove",h.touchHandler,!1),n.removeEventListener("touchend",h.touchHandler,!1)),d=[],f=[],p=[],g=[]},e.scrollify.update=function(){l.handleResize()},e.scrollify.current=function(){return p[m]},e.scrollify.disable=function(){M=!0},e.scrollify.enable=function(){M=!1},e.scrollify.isDisabled=function(){return M},e.scrollify.setOptions=function(n){"object"==typeof n?(D=e.extend(D,n),l.handleResize()):t.console&&console.warn("Scrollify warning: Options need to be in an object.")}});