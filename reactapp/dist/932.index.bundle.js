"use strict";(self.webpackChunkreactapp=self.webpackChunkreactapp||[]).push([[932,909],{6909:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(5466),l=n(7043),o=n(1070),a=n(1983);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const u=function(e){var t,n,o=e.product,u=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,c=[],u=!0,i=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,l=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw l}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=u[0],s=u[1],m=(0,l.I0)();return r.createElement("ul",{className:"product"},r.createElement("li",{className:"product",onClick:function(){return s(!i)}},o.name,i?r.createElement("ul",null,r.createElement("li",null,o.price),r.createElement("li",null,o.desc),r.createElement("li",null,o.rating),r.createElement("button",{onClick:function(){!function(e){m((0,a.dm)(e))}(o)}},"Add To Cart")):" "))},i=function(){var e=(0,l.v9)((function(e){return e.productReducer.products})),t=(0,l.I0)();return(0,r.useEffect)((function(){t((0,o.t2)())}),[]),console.log("productList ",e),r.createElement(r.Fragment,null,r.createElement("h2",null,"Below are products we can add to cart!!"),r.createElement("div",null,e&&e.length>0?e.map((function(e){return r.createElement(u,{product:e,key:e._id})})):"No Product Found!!"))}},1932:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(5466),l=n(7043),o=n(1070),a=n(6909);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,c=[],u=!0,i=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,l=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const i=function(e){var t=(0,l.v9)((function(e){return e.productReducer.defaultProduct})),n=c((0,r.useState)(t.name),2),u=n[0],i=n[1],s=c((0,r.useState)(t.price),2),m=s[0],d=s[1],f=c((0,r.useState)(t.desc),2),p=f[0],h=f[1],v=c((0,r.useState)(t.rating),2),g=v[0],y=v[1],b=(0,l.I0)();return r.createElement(r.Fragment,null,r.createElement("h1",null,"Product component"),r.createElement("section",{className:"componentClass"},r.createElement("div",{className:"form col-md-8"},r.createElement("div",{className:"col-md-12"},r.createElement("b",null,"Product Name"),r.createElement("input",{type:"text",className:"form-control col-md-6 name",value:u,maxLength:25,onChange:function(e){e.target.classList.contains("name")&&i(e.target.value),e.preventDefault()}})),r.createElement("div",{className:"col-md-12"},r.createElement("b",null,"Price "),r.createElement("input",{type:"number",className:"form-control col-md-6",value:m,placeholder:"Product Price",onChange:function(e){return d(e.target.value)}})),r.createElement("div",{className:"col-md-12"},r.createElement("b",null,"Description "),r.createElement("input",{type:"text",className:"form-control col-md-6",value:p,placeholder:"Please Describe the product",onChange:function(e){return h(e.target.value)}})),r.createElement("div",{className:"col-md-12"},r.createElement("b",null,"Ratings "),r.createElement("input",{type:"text",className:"form-control col-md-6",value:g,placeholder:"Ratings",onChange:function(e){return y(e.target.value)}})),r.createElement("input",{type:"button",className:"form-control btn btn-primary col-md-3",value:"Save Product",onClick:function(e){var t={name:u,price:m,desc:p,rating:g};alert("Save Product will be implemented here!! "+JSON.stringify(t)),b((0,o.gg)(t)),e.preventDefault()}}))),r.createElement("hr",null),r.createElement(a.default,null))}},1070:(e,t,n)=>{n.d(t,{gg:()=>l,t2:()=>o});var r=n(5562),l=function(e){return console.log("Product ",e),function(t){window.fetch("http://localhost:9000/product/api/saveProduct",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("product save response ",e),t(o())})).catch((function(e){console.log("Error While Saving Product",e)}))}},o=function(){return console.log("Product "),function(e){window.fetch("http://localhost:9000/product/api/getproducts",{method:"GET"}).then((function(e){return e.json()})).then((function(t){var n;console.log("get products response ",t),e((n=t,{type:r.L2,payload:{products:n}}))})).catch((function(e){console.log("Error While Saving Product",e)}))}}}}]);