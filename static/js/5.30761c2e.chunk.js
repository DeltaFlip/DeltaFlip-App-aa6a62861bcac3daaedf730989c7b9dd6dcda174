(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[5],{1681:function(t,e,r){"use strict";r.d(e,"a",(function(){return S}));var n=r(68),o=r(96),i=r(468),l=Number.isNaN||function(t){return"number"===typeof t&&t!==t};function s(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(n=t[r],o=e[r],!(n===o||l(n)&&l(o)))return!1;var n,o;return!0}var a=function(t,e){var r;void 0===e&&(e=s);var n,o=[],i=!1;return function(){for(var l=[],s=0;s<arguments.length;s++)l[s]=arguments[s];return i&&r===this&&e(l,o)||(n=t.apply(this,l),i=!0,r=this,o=l),n}},c=r(0),u=(r(92),"object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()});function f(t){cancelAnimationFrame(t.id)}function d(t,e){var r=u();var n={id:requestAnimationFrame((function o(){u()-r>=e?t.call(null):n.id=requestAnimationFrame(o)}))};return n}var h=null;function p(t){if(void 0===t&&(t=!1),null===h||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),o=n.style;return o.width="100px",o.height="100px",e.appendChild(n),document.body.appendChild(e),e.scrollLeft>0?h="positive-descending":(e.scrollLeft=1,h=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),h}return h}var m=function(t,e){return t};function g(t){var e,r,l=t.getItemOffset,s=t.getEstimatedTotalSize,u=t.getItemSize,h=t.getOffsetForIndexAndAlignment,g=t.getStartIndexForOffset,S=t.getStopIndexForStartIndex,I=t.initInstanceProps,_=t.shouldResetStyleCacheOnItemSizeChange,O=t.validateProps;return r=e=function(t){function e(e){var r;return(r=t.call(this,e)||this)._instanceProps=I(r.props,Object(i.a)(Object(i.a)(r))),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:Object(i.a)(Object(i.a)(r)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a((function(t,e,n,o){return r.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:n,visibleStopIndex:o})})),r._callOnScroll=void 0,r._callOnScroll=a((function(t,e,n){return r.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:n})})),r._getItemStyle=void 0,r._getItemStyle=function(t){var e,n=r.props,o=n.direction,i=n.itemSize,s=n.layout,a=r._getItemStyleCache(_&&i,_&&s,_&&o);if(a.hasOwnProperty(t))e=a[t];else{var c=l(r.props,t,r._instanceProps),f=u(r.props,t,r._instanceProps),d="horizontal"===o||"horizontal"===s,h="rtl"===o,p=d?c:0;a[t]=e={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:d?0:c,height:d?"100%":f,width:d?f:"100%"}}return e},r._getItemStyleCache=void 0,r._getItemStyleCache=a((function(t,e,r){return{}})),r._onScrollHorizontal=function(t){var e=t.currentTarget,n=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;r.setState((function(t){if(t.scrollOffset===o)return null;var e=r.props.direction,l=o;if("rtl"===e)switch(p()){case"negative":l=-o;break;case"positive-descending":l=i-n-o}return l=Math.max(0,Math.min(l,i-n)),{isScrolling:!0,scrollDirection:t.scrollOffset<o?"forward":"backward",scrollOffset:l,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(t){var e=t.currentTarget,n=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;r.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-n));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"===typeof e?e(t):null!=e&&"object"===typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&f(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=d(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}Object(o.a)(e,t),e.getDerivedStateFromProps=function(t,e){return v(t,e),O(t),null};var r=e.prototype;return r.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},r.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props.itemCount,n=this.state.scrollOffset;t=Math.max(0,Math.min(t,r-1)),this.scrollTo(h(this.props,t,e,n,this._instanceProps))},r.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,n=t.layout;if("number"===typeof r&&null!=this._outerRef){var o=this._outerRef;"horizontal"===e||"horizontal"===n?o.scrollLeft=r:o.scrollTop=r}this._callPropsCallbacks()},r.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,n=this.state,o=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(p()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var l=i.clientWidth,s=i.scrollWidth;i.scrollLeft=s-l-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks()},r.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&f(this._resetIsScrollingTimeoutId)},r.render=function(){var t=this.props,e=t.children,r=t.className,o=t.direction,i=t.height,l=t.innerRef,a=t.innerElementType,u=t.innerTagName,f=t.itemCount,d=t.itemData,h=t.itemKey,p=void 0===h?m:h,g=t.layout,v=t.outerElementType,S=t.outerTagName,I=t.style,_=t.useIsScrolling,O=t.width,y=this.state.isScrolling,b="horizontal"===o||"horizontal"===g,w=b?this._onScrollHorizontal:this._onScrollVertical,R=this._getRangeToRender(),x=R[0],z=R[1],C=[];if(f>0)for(var T=x;T<=z;T++)C.push(Object(c.createElement)(e,{data:d,key:p(T,d),index:T,isScrolling:_?y:void 0,style:this._getItemStyle(T)}));var M=s(this.props,this._instanceProps);return Object(c.createElement)(v||S||"div",{className:r,onScroll:w,ref:this._outerRefSetter,style:Object(n.a)({position:"relative",height:i,width:O,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},I)},Object(c.createElement)(a||u||"div",{children:C,ref:l,style:{height:b?"100%":M,pointerEvents:y?"none":void 0,width:b?M:"100%"}}))},r._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],n=t[2],o=t[3];this._callOnItemsRendered(e,r,n,o)}if("function"===typeof this.props.onScroll){var i=this.state,l=i.scrollDirection,s=i.scrollOffset,a=i.scrollUpdateWasRequested;this._callOnScroll(l,s,a)}},r._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,n=this.state,o=n.isScrolling,i=n.scrollDirection,l=n.scrollOffset;if(0===e)return[0,0,0,0];var s=g(this.props,l,this._instanceProps),a=S(this.props,s,l,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,r),u=o&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,s-c),Math.max(0,Math.min(e-1,a+u)),s,a]},e}(c.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},r}var v=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},S=g({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,n){var o=t.direction,i=t.height,l=t.itemCount,s=t.itemSize,a=t.layout,c=t.width,u="horizontal"===o||"horizontal"===a?c:i,f=Math.max(0,l*s-u),d=Math.min(f,e*s),h=Math.max(0,e*s-u+s);switch("smart"===r&&(r=n>=h-u&&n<=d+u?"auto":"center"),r){case"start":return d;case"end":return h;case"center":var p=Math.round(h+(d-h)/2);return p<Math.ceil(u/2)?0:p>f+Math.floor(u/2)?f:p;case"auto":default:return n>=h&&n<=d?n:n<h?h:d}},getStartIndexForOffset:function(t,e){var r=t.itemCount,n=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getStopIndexForStartIndex:function(t,e,r){var n=t.direction,o=t.height,i=t.itemCount,l=t.itemSize,s=t.layout,a=t.width,c=e*l,u="horizontal"===n||"horizontal"===s?a:o,f=Math.ceil((u+r-c)/l);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}})}}]);
//# sourceMappingURL=5.30761c2e.chunk.js.map