(self.webpackChunkreactapp=self.webpackChunkreactapp||[]).push([[929],{3433:(e,t,r)=>{"use strict";var n=r(6642);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,l,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return r.PropTypes=r,r}},3074:(e,t,r)=>{e.exports=r(3433)()},6642:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6929:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(5466),o=r(3074),l=r.n(o);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}r(7954);var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(m,e);var t,r,o,l,p=(o=m,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(o);if(l){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),f(u(t=p.call(this,e)),"incrementAge",(function(){t.setState({UserAge:t.state.UserAge+1})})),f(u(t),"incrementTimer",(function(){})),f(u(t),"updateNameHandler",(function(e){var r=e.target.value;console.log(r),t.setState({UserName:r}),e.preventDefault()})),f(u(t),"getChildData",(function(e){alert("child Info "+e),t.setState({ChildInfo:e})})),f(u(t),"formSubmit",(function(e){var r=t.UserAddress.current.value,n=t.SessionInfo.current.value;t.setState({Address:r,Session:n}),e.preventDefault()})),t.User=e.user,t.userName=e.userName,t.state={UserName:e.user.Name,UserAge:e.user.Age,Timer:1,ChildInfo:"Parent Is First Component!!",Address:"Somewhere on earth",Session:"Awsome React"},t.incrementTimer(),t.UserAddress=n.createRef(),t.SessionInfo=n.createRef(),t}return t=m,(r=[{key:"componentDidMount",value:function(){console.log("Component Did Mount is called")}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("getSnapshotBeforeUpdate"),console.log("prevState",e),console.log("prevProps",t),{prevState:e,prevProps:t}}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate"),console.log("prevState",e),console.log("prevProps",t)}},{key:"componentWillUnmount",value:function(){console.log("Component Will UnMount called!!"),clearInterval(this.interval)}},{key:"render",value:function(){return console.log("Home Component Is rendered"),n.createElement("div",{className:"loadimage form"},n.createElement("h1",null,this.state.title),n.createElement("b",{className:"feature"},"Product Feature's :"),n.createElement("ul",null,n.createElement("li",null,"Sign up new users"),n.createElement("li",null,"Login existing users."),n.createElement("li",null,"Allow user's to add to cart."),n.createElement("li",null,"Save the user's cart."),n.createElement("li",null,"Checkout and pay for items."),n.createElement("li",null,"Allow users to cancel the order."),n.createElement("li",null,"Allow users to reorder the cart."),n.createElement("li",null,"Add products/items to create product collection."),n.createElement("li",null,"Allow users to give ratings to each product."),n.createElement("li",null,"Have notifications on top right with logout.")))}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),m}(n.PureComponent);m.propTypes={userName:l().string.isRequired}}}]);