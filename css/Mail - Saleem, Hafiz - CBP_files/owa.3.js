self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.3.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[3],{229:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"a",(function(){return n}));var n,r={none:0,all:1,inputOnly:2};!function(t){t[t.vertical=0]="vertical",t[t.horizontal=1]="horizontal",t[t.bidirectional=2]="bidirectional",t[t.domOrder=3]="domOrder"}(n||(n={}))},426:function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o(347),r=o(353);function i(t,e){var o=Object(n.a)(t,(function(t){return e===t||t.hasAttribute(r.a)}));return null!==o&&o.hasAttribute(r.a)}},546:function(t,e,o){"use strict";function n(t){var e=function(t){var e;"function"==typeof Event?e=new Event(t):(e=document.createEvent("Event")).initEvent(t,!0,!0);return e}("MouseEvents");e.initEvent("click",!0,!0),t.dispatchEvent(e)}o.d(e,"a",(function(){return n}))},684:function(t,e,o){"use strict";o.d(e,"a",(function(){return C}));var n,r=o(0),i=o(1),s=o(229),a=o(82),u=o(230),c=o(78),l=o(236),h=o(277),f=o(268),_=o(104),p=o(106),d=o(282),m=o(252),b=o(546),v=o(318),g=o(426),E=o(163),F=o(335),y="data-no-vertical-wrap",O="data-no-horizontal-wrap",j=999999999,A=-999999999,w="ms-FocusZone";var I={},k=new Set,x=["text","number","password","email","tel","url","search"],D=!1,C=function(t){function e(e){var o=t.call(this,e)||this;return o._root=i.createRef(),o._onFocus=function(t){if(!o._portalContainsElement(t.target)){var e,n=o.props,r=n.onActiveElementChanged,i=n.doNotAllowFocusEventToPropagate,s=n.stopFocusPropagation,c=n.onFocusNotification,l=n.onFocus,h=n.shouldFocusInnerElementWhenReceivedFocus,f=n.defaultTabbableElement,_=o._isImmediateDescendantOfZone(t.target);if(l?l(t):c&&c(),_)e=t.target;else for(var p=t.target;p&&p!==o._root.current;){if(Object(a.n)(p)&&o._isImmediateDescendantOfZone(p)){e=p;break}p=Object(u.a)(p,D)}if(h&&t.target===o._root.current){var d=f&&"function"==typeof f&&f(o._root.current);d&&Object(a.n)(d)?(e=d,d.focus()):(o.focus(!0),o._activeElement&&(e=null))}var m=!o._activeElement;e&&e!==o._activeElement&&((_||m)&&o._setFocusAlignment(e,!0,!0),o._activeElement=e,m&&o._updateTabIndexes()),r&&r(o._activeElement,t),(s||i)&&t.stopPropagation()}},o._onBlur=function(){o._setParkedFocus(!1)},o._onKeyDownCapture=function(t){t.which===c.a.tab&&k.forEach((function(t){return t._updateTabIndexes()}))},o._onMouseDown=function(t){if(!o._portalContainsElement(t.target)&&!o.props.disabled){for(var e=t.target,n=[];e&&e!==o._root.current;)n.push(e),e=Object(u.a)(e,D);for(;n.length&&((e=n.pop())&&Object(a.n)(e)&&o._setActiveElement(e,!0),!Object(a.m)(e)););}},o._onKeyDown=function(t){if(!o._portalContainsElement(t.target)){var e=o.props,n=e.direction,r=e.disabled,i=e.isInnerZoneKeystroke,u=e.pagingSupportDisabled,h=e.shouldEnterInnerZone;if(!(r||(o.props.onKeyDown&&o.props.onKeyDown(t),t.isDefaultPrevented()||o._getDocument().activeElement===o._root.current&&o._isInnerZone))){if((h&&h(t)||i&&i(t))&&o._isImmediateDescendantOfZone(t.target)){var f=o._getFirstInnerZone();if(f){if(!f.focus(!0))return}else{if(!Object(a.l)(t.target))return;if(!o.focusElement(Object(a.j)(t.target,t.target.firstChild,!0)))return}}else{if(t.altKey)return;switch(t.which){case c.a.space:if(o._tryInvokeClickForFocusable(t.target))break;return;case c.a.left:if(n!==s.a.vertical&&(o._preventDefaultWhenHandled(t),o._moveFocusLeft()))break;return;case c.a.right:if(n!==s.a.vertical&&(o._preventDefaultWhenHandled(t),o._moveFocusRight()))break;return;case c.a.up:if(n!==s.a.horizontal&&(o._preventDefaultWhenHandled(t),o._moveFocusUp()))break;return;case c.a.down:if(n!==s.a.horizontal&&(o._preventDefaultWhenHandled(t),o._moveFocusDown()))break;return;case c.a.pageDown:if(!u&&o._moveFocusPaging(!0))break;return;case c.a.pageUp:if(!u&&o._moveFocusPaging(!1))break;return;case c.a.tab:if(o.props.allowTabKey||o.props.handleTabKey===s.b.all||o.props.handleTabKey===s.b.inputOnly&&o._isElementInput(t.target)){var _=!1;if(o._processingTabKey=!0,n!==s.a.vertical&&o._shouldWrapFocus(o._activeElement,O))_=(Object(l.a)()?!t.shiftKey:t.shiftKey)?o._moveFocusLeft():o._moveFocusRight();else _=t.shiftKey?o._moveFocusUp():o._moveFocusDown();if(o._processingTabKey=!1,_)break;o.props.shouldResetActiveElementWhenTabFromZone&&(o._activeElement=null)}return;case c.a.home:if(o._isContentEditableElement(t.target)||o._isElementInput(t.target)&&!o._shouldInputLoseFocus(t.target,!1))return!1;var p=o._root.current&&o._root.current.firstChild;if(o._root.current&&p&&o.focusElement(Object(a.j)(o._root.current,p,!0)))break;return;case c.a.end:if(o._isContentEditableElement(t.target)||o._isElementInput(t.target)&&!o._shouldInputLoseFocus(t.target,!0))return!1;var d=o._root.current&&o._root.current.lastChild;if(o._root.current&&o.focusElement(Object(a.k)(o._root.current,d,!0,!0,!0)))break;return;case c.a.enter:if(o._tryInvokeClickForFocusable(t.target))break;return;default:return}}t.preventDefault(),t.stopPropagation()}}},o._getHorizontalDistanceFromCenter=function(t,e,n){var r=o._focusAlignment.left||o._focusAlignment.x||0,i=Math.floor(n.top),s=Math.floor(e.bottom),a=Math.floor(n.bottom),u=Math.floor(e.top);return t&&i>s||!t&&a<u?r>=n.left&&r<=n.left+n.width?0:Math.abs(n.left+n.width/2-r):o._shouldWrapFocus(o._activeElement,y)?j:A},Object(h.a)(o),o._id=Object(f.a)("FocusZone"),o._focusAlignment={left:0,top:0},o._processingTabKey=!1,o}return Object(r.__extends)(e,t),e.getOuterZones=function(){return k.size},e.prototype.componentDidMount=function(){var t=this._root.current;if(I[this._id]=this,t){this._windowElement=Object(_.a)(t);for(var e=Object(u.a)(t,D);e&&e!==this._getDocument().body&&1===e.nodeType;){if(Object(a.m)(e)){this._isInnerZone=!0;break}e=Object(u.a)(e,D)}this._isInnerZone||(k.add(this),this._windowElement&&1===k.size&&this._windowElement.addEventListener("keydown",this._onKeyDownCapture,!0)),this._root.current&&this._root.current.addEventListener("blur",this._onBlur,!0),this._updateTabIndexes(),this.props.defaultTabbableElement&&"string"==typeof this.props.defaultTabbableElement?this._activeElement=this._getDocument().querySelector(this.props.defaultTabbableElement):this.props.defaultActiveElement&&(this._activeElement=this._getDocument().querySelector(this.props.defaultActiveElement)),this.props.shouldFocusOnMount&&this.focus()}},e.prototype.componentDidUpdate=function(){var t=this._root.current,e=this._getDocument();if(e&&this._lastIndexPath&&(e.activeElement===e.body||null===e.activeElement||!this.props.preventFocusRestoration&&e.activeElement===t)){var o=Object(a.g)(t,this._lastIndexPath);o?(this._setActiveElement(o,!0),o.focus(),this._setParkedFocus(!1)):this._setParkedFocus(!0)}},e.prototype.componentWillUnmount=function(){delete I[this._id],this._isInnerZone||(k.delete(this),this._windowElement&&0===k.size&&this._windowElement.removeEventListener("keydown",this._onKeyDownCapture,!0)),this._root.current&&this._root.current.removeEventListener("blur",this._onBlur,!0),this._activeElement=null,this._defaultFocusElement=null},e.prototype.render=function(){var t=this.props,e=t.as,o=t.elementType,s=t.rootProps,a=t.ariaDescribedBy,u=t.ariaLabelledBy,c=t.className,l=Object(p.j)(this.props,p.k),h=e||o||"div";return this._evaluateFocusBeforeRender(),i.createElement(h,Object(r.__assign)({"aria-labelledby":u,"aria-describedby":a},l,s,{className:Object(d.css)((n||(n=Object(F.b)({selectors:{":focus":{outline:"none"}}},w)),n),c),ref:this._root,"data-focuszone-id":this._id,onKeyDown:this._onKeyDown,onFocus:this._onFocus,onMouseDownCapture:this._onMouseDown}),this.props.children)},e.prototype.focus=function(t){if(void 0===t&&(t=!1),this._root.current){if(!t&&"true"===this._root.current.getAttribute("data-is-focusable")&&this._isInnerZone){var e=this._getOwnerZone(this._root.current);if(e!==this._root.current){var o=I[e.getAttribute("data-focuszone-id")];return!!o&&o.focusElement(this._root.current)}return!1}if(!t&&this._activeElement&&Object(m.a)(this._root.current,this._activeElement)&&Object(a.n)(this._activeElement))return this._activeElement.focus(),!0;var n=this._root.current.firstChild;return this.focusElement(Object(a.j)(this._root.current,n,!0))}return!1},e.prototype.focusLast=function(){if(this._root.current){var t=this._root.current&&this._root.current.lastChild;return this.focusElement(Object(a.k)(this._root.current,t,!0,!0,!0))}return!1},e.prototype.focusElement=function(t){var e=this.props,o=e.onBeforeFocus,n=e.shouldReceiveFocus;return!(n&&!n(t)||o&&!o(t))&&(!!t&&(this._setActiveElement(t),this._activeElement&&this._activeElement.focus(),!0))},e.prototype.setFocusAlignment=function(t){this._focusAlignment=t},e.prototype._evaluateFocusBeforeRender=function(){var t=this._root.current,e=this._getDocument();if(e){var o=e.activeElement;if(o!==t){var n=Object(m.a)(t,o,!1);this._lastIndexPath=n?Object(a.d)(t,o):void 0}}},e.prototype._setParkedFocus=function(t){var e=this._root.current;e&&this._isParked!==t&&(this._isParked=t,t?(this.props.allowFocusRoot||(this._parkedTabIndex=e.getAttribute("tabindex"),e.setAttribute("tabindex","-1")),e.focus()):this.props.allowFocusRoot||(this._parkedTabIndex?(e.setAttribute("tabindex",this._parkedTabIndex),this._parkedTabIndex=void 0):e.removeAttribute("tabindex")))},e.prototype._setActiveElement=function(t,e){var o=this._activeElement;this._activeElement=t,o&&(Object(a.m)(o)&&this._updateTabIndexes(o),o.tabIndex=-1),this._activeElement&&(this._focusAlignment&&!e||this._setFocusAlignment(t,!0,!0),this._activeElement.tabIndex=0)},e.prototype._preventDefaultWhenHandled=function(t){this.props.preventDefaultWhenHandled&&t.preventDefault()},e.prototype._tryInvokeClickForFocusable=function(t){if(t===this._root.current||!this.props.shouldRaiseClicks)return!1;do{if("BUTTON"===t.tagName||"A"===t.tagName||"INPUT"===t.tagName||"TEXTAREA"===t.tagName)return!1;if(this._isImmediateDescendantOfZone(t)&&"true"===t.getAttribute("data-is-focusable")&&"true"!==t.getAttribute("data-disable-click-on-enter"))return Object(b.a)(t),!0;t=Object(u.a)(t,D)}while(t!==this._root.current);return!1},e.prototype._getFirstInnerZone=function(t){if(!(t=t||this._activeElement||this._root.current))return null;if(Object(a.m)(t))return I[t.getAttribute("data-focuszone-id")];for(var e=t.firstElementChild;e;){if(Object(a.m)(e))return I[e.getAttribute("data-focuszone-id")];var o=this._getFirstInnerZone(e);if(o)return o;e=e.nextElementSibling}return null},e.prototype._moveFocus=function(t,e,o,n){void 0===n&&(n=!0);var r=this._activeElement,i=-1,u=void 0,c=!1,l=this.props.direction===s.a.bidirectional;if(!r||!this._root.current)return!1;if(this._isElementInput(r)&&!this._shouldInputLoseFocus(r,t))return!1;var h=l?r.getBoundingClientRect():null;do{if(r=t?Object(a.j)(this._root.current,r):Object(a.k)(this._root.current,r),!l){u=r;break}if(r){var f=e(h,r.getBoundingClientRect());if(-1===f&&-1===i){u=r;break}if(f>-1&&(-1===i||f<i)&&(i=f,u=r),i>=0&&f<0)break}}while(r);if(u&&u!==this._activeElement)c=!0,this.focusElement(u);else if(this.props.isCircularNavigation&&n)return t?this.focusElement(Object(a.j)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement(Object(a.k)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return c},e.prototype._moveFocusDown=function(){var t=this,e=-1,o=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!0,(function(n,r){var i=-1,s=Math.floor(r.top),a=Math.floor(n.bottom);return s<a?t._shouldWrapFocus(t._activeElement,y)?j:A:((-1===e&&s>=a||s===e)&&(e=s,i=o>=r.left&&o<=r.left+r.width?0:Math.abs(r.left+r.width/2-o)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)},e.prototype._moveFocusUp=function(){var t=this,e=-1,o=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!1,(function(n,r){var i=-1,s=Math.floor(r.bottom),a=Math.floor(r.top),u=Math.floor(n.top);return s>u?t._shouldWrapFocus(t._activeElement,y)?j:A:((-1===e&&s<=u||a===e)&&(e=a,i=o>=r.left&&o<=r.left+r.width?0:Math.abs(r.left+r.width/2-o)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)},e.prototype._moveFocusLeft=function(){var t=this,e=this._shouldWrapFocus(this._activeElement,O);return!!this._moveFocus(Object(l.a)(),(function(o,n){var r=-1;return(Object(l.a)()?parseFloat(n.top.toFixed(3))<parseFloat(o.bottom.toFixed(3)):parseFloat(n.bottom.toFixed(3))>parseFloat(o.top.toFixed(3)))&&n.right<=o.right&&t.props.direction!==s.a.vertical?r=o.right-n.right:e||(r=A),r}),void 0,e)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)},e.prototype._moveFocusRight=function(){var t=this,e=this._shouldWrapFocus(this._activeElement,O);return!!this._moveFocus(!Object(l.a)(),(function(o,n){var r=-1;return(Object(l.a)()?parseFloat(n.bottom.toFixed(3))>parseFloat(o.top.toFixed(3)):parseFloat(n.top.toFixed(3))<parseFloat(o.bottom.toFixed(3)))&&n.left>=o.left&&t.props.direction!==s.a.vertical?r=n.left-o.left:e||(r=A),r}),void 0,e)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)},e.prototype._moveFocusPaging=function(t,e){void 0===e&&(e=!0);var o=this._activeElement;if(!o||!this._root.current)return!1;if(this._isElementInput(o)&&!this._shouldInputLoseFocus(o,t))return!1;var n=Object(v.f)(o);if(!n)return!1;var r=-1,i=void 0,s=-1,u=-1,c=n.clientHeight,l=o.getBoundingClientRect();do{if(o=t?Object(a.j)(this._root.current,o):Object(a.k)(this._root.current,o)){var h=o.getBoundingClientRect(),f=Math.floor(h.top),_=Math.floor(l.bottom),p=Math.floor(h.bottom),d=Math.floor(l.top),m=this._getHorizontalDistanceFromCenter(t,l,h);if(t&&f>_+c||!t&&p<d-c)break;m>-1&&(t&&f>s?(s=f,r=m,i=o):!t&&p<u?(u=p,r=m,i=o):(-1===r||m<=r)&&(r=m,i=o))}}while(o);var b=!1;if(i&&i!==this._activeElement)b=!0,this.focusElement(i),this._setFocusAlignment(i,!1,!0);else if(this.props.isCircularNavigation&&e)return t?this.focusElement(Object(a.j)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement(Object(a.k)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return b},e.prototype._setFocusAlignment=function(t,e,o){if(this.props.direction===s.a.bidirectional&&(!this._focusAlignment||e||o)){var n=t.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2;this._focusAlignment||(this._focusAlignment={left:r,top:i}),e&&(this._focusAlignment.left=r),o&&(this._focusAlignment.top=i)}},e.prototype._isImmediateDescendantOfZone=function(t){return this._getOwnerZone(t)===this._root.current},e.prototype._getOwnerZone=function(t){for(var e=Object(u.a)(t,D);e&&e!==this._root.current&&e!==this._getDocument().body;){if(Object(a.m)(e))return e;e=Object(u.a)(e,D)}return e},e.prototype._updateTabIndexes=function(t){!this._activeElement&&this.props.defaultTabbableElement&&"function"==typeof this.props.defaultTabbableElement&&(this._activeElement=this.props.defaultTabbableElement(this._root.current)),!t&&this._root.current&&(this._defaultFocusElement=null,t=this._root.current,this._activeElement&&!Object(m.a)(t,this._activeElement)&&(this._activeElement=null)),this._activeElement&&!Object(a.n)(this._activeElement)&&(this._activeElement=null);for(var e=t&&t.children,o=0;e&&o<e.length;o++){var n=e[o];Object(a.m)(n)?"true"===n.getAttribute("data-is-focusable")&&(this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==n?"-1"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","-1"):(this._defaultFocusElement=n,"0"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","0"))):(n.getAttribute&&"false"===n.getAttribute("data-is-focusable")&&n.setAttribute("tabindex","-1"),Object(a.n)(n)?this.props.disabled?n.setAttribute("tabindex","-1"):this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==n?"-1"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","-1"):(this._defaultFocusElement=n,"0"!==n.getAttribute("tabindex")&&n.setAttribute("tabindex","0")):"svg"===n.tagName&&"false"!==n.getAttribute("focusable")&&n.setAttribute("focusable","false")),this._updateTabIndexes(n)}},e.prototype._isContentEditableElement=function(t){return t&&"true"===t.getAttribute("contenteditable")},e.prototype._isElementInput=function(t){return!(!t||!t.tagName||"input"!==t.tagName.toLowerCase()&&"textarea"!==t.tagName.toLowerCase())},e.prototype._shouldInputLoseFocus=function(t,e){if(!this._processingTabKey&&t&&t.type&&x.indexOf(t.type.toLowerCase())>-1){var o=t.selectionStart,n=o!==t.selectionEnd,r=t.value,i=t.readOnly;if(n||o>0&&!e&&!i||o!==r.length&&e&&!i||this.props.handleTabKey&&(!this.props.shouldInputLoseFocusOnArrowKey||!this.props.shouldInputLoseFocusOnArrowKey(t)))return!1}return!0},e.prototype._shouldWrapFocus=function(t,e){return!this.props.checkForNoWrap||Object(a.p)(t,e)},e.prototype._portalContainsElement=function(t){return t&&!!this._root.current&&Object(g.a)(t,this._root.current)},e.prototype._getDocument=function(){return Object(E.a)(this._root.current)},e.defaultProps={isCircularNavigation:!1,direction:s.a.bidirectional,shouldRaiseClicks:!0},e}(i.Component)}}]);
//# sourceMappingURL=owa.3.js.map
self.scriptsLoaded['owa.3.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.3.js'] = (new Date()).getTime();