(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(21),s=c.n(a),i=(c(28),c(2)),u=c(11),j=c(0),l=function(){return Object(j.jsx)("div",{className:"header"})},o=c(3),d=c(5),b=c.n(d),O=c(8),f=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),s=Object(i.a)(a,2),u=s[0],j=s[1];return{loading:c,request:Object(n.useCallback)(function(){var e=Object(O.a)(b.a.mark((function e(t){var c,n,a,s,i,u=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),a["Content-Type"]="application/json"),e.next=8,fetch(t,{method:c,body:n,headers:a});case 8:return s=e.sent,e.next=11,s.json();case 11:if(i=e.sent,s.ok){e.next=14;break}throw new Error(i.message||"Something wrong!");case 14:return r(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),j(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(n.useCallback)((function(){j(null)}),[])}},p=function(e){var t=e.text,c=e.onClick;return Object(j.jsx)("div",{className:"button",onClick:c,children:t})},h=c(23),x=r.a.createContext(),m=c(14),v=function(e){var t=e.userId,c=e.id,r=e.price,a=Object(n.useState)({}),s=Object(i.a)(a,2),u=s[0],l=s[1],o=Object(n.useState)({}),d=Object(i.a)(o,2),b=d[0],O=d[1],f=Object(n.useContext)(x),p=Object(i.a)(f,2),h=p[0],v=p[1],g=Object(n.useState)(" select"),N=Object(i.a)(g,2),C=N[0],I=N[1],k=Object(n.useState)(0),S=Object(i.a)(k,2),w=S[0],E=S[1],F=Object(n.useState)(0),P=Object(i.a)(F,2),L=P[0],T=P[1],y=Object(n.useCallback)((function(){1===b[c]?T(0):u[c]?T(w+10):T("up to "+q(b[c]))}),[c,b,w,u]);Object(n.useEffect)((function(){var e={},t={};h.map((function(c){return e[c.productId]?e[c.productId]+=1:e[c.productId]=1,c.select&&(t[c.productId]?t[c.productId]+=1:t[c.productId]=1),c})),l(t),O(e)}),[h]);var q=function(e){switch(e){case 1:return 0;case 2:return 10;case 3:return 20;case 4:return 30;case 5:default:return 40}},G=Object(n.useCallback)((function(){u[c]&&E(q(u[c]))}),[u,c]);Object(n.useEffect)((function(){G(),y()}),[u,G,y]),Object(n.useEffect)((function(){v((function(e){return e.map((function(e){return e.userId===t&&e.productId===c?Object(m.a)(Object(m.a)({},e),{},{reducedPrice:Math.round((100-w)*r)/100}):e}))}))}),[w]);var M=function(e){v((function(n){return n.map((function(n){return n.userId===t&&n.productId===c?Object(m.a)(Object(m.a)({},n),{},{select:e}):n}))}))};return Object(j.jsxs)("div",{className:"itemPrice"+C,onClick:function(){C?(I(""),M(!1)):(I(" select"),M(!0))},children:[Object(j.jsxs)("div",{className:"alignCenter",children:[!C&&0!==L&&Object(j.jsx)("div",{className:"priceSpan alignCenter",children:"Get extra"}),C&&0!==w&&Object(j.jsx)("div",{className:"priceSpan alignCenter",children:"Save"})]}),Object(j.jsxs)("div",{className:"alignCenter",children:[!C&&Object(j.jsx)("div",{children:r}),C&&Object(j.jsx)("div",{children:Math.round((100-w)*r)/100})]}),Object(j.jsxs)("div",{className:"alignCenter",children:[!C&&0!==L&&Object(j.jsx)("div",{className:"priceSpan alignCenter",children:L+"%"}),C&&0!==w&&Object(j.jsx)("div",{className:"priceSpan alignCenter",children:w+"%"})]})]})},g=function(e){var t=e.id,c=e.cart,r=e.userName,a=f().request,s=Object(n.useState)(),u=Object(i.a)(s,2),l=u[0],o=u[1],d=Object(n.useContext)(x),p=Object(i.a)(d,2),m=(p[0],p[1]),g=Object(n.useCallback)(Object(O.a)(b.a.mark((function e(){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("/api/cart/product/".concat(t),"GET",null);case 3:n=e.sent,o(n),s={cartId:c.cartId,userId:c.userId,userName:r,price:n.price,productId:t,select:!0,reducedPrice:n.price,productName:n.title},m((function(e){return[].concat(Object(h.a)(e),[s])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[a,t,m,r,c]);return Object(n.useEffect)((function(){g()}),[g]),Object(j.jsx)(j.Fragment,{children:l&&Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"itemTitle",children:l.title}),Object(j.jsx)(v,{userId:c.userId,id:t,price:l.price})]})})},N=function(e){var t=e.cart,c=e.userName,r=f().request,a=Object(n.useState)(),s=Object(i.a)(a,2),u=s[0],l=s[1],o=Object(n.useContext)(x),d=Object(i.a)(o,2),p=d[0],h=(d[1],Object(n.useState)(0)),m=Object(i.a)(h,2),v=m[0],N=m[1],C=Object(n.useCallback)(Object(O.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/api/cart/postcart","POST",{userId:t.userId,date:Date.now(),products:t.products});case 3:c=e.sent,l(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[r,t]);return Object(n.useEffect)((function(){C()}),[C]),Object(n.useEffect)((function(){var e=0;p.map((function(c){return c.userId===t.userId&&!0===c.select&&(e+=c.reducedPrice),c})),N(e)}),[p,t.userId]),Object(j.jsxs)(j.Fragment,{children:[!u&&Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("i",{className:"fas fa-gift"})}),u&&Object(j.jsx)("div",{className:"list",children:u.products.map((function(e,n){return Object(j.jsx)(g,{id:e.productId,cart:t,userName:c},n)}))}),0!==v&&Object(j.jsx)("div",{className:"font600",children:"Total "+Math.round(100*v)/100+" euro"}),0===v&&Object(j.jsx)("div",{className:"font600",children:"Select any wishes!"})]})},C=function(e){var t=e.cart,c=e.checkOpenWishList,r=f().request,a=Object(n.useState)(),s=Object(i.a)(a,2),u=s[0],l=s[1],o=Object(n.useState)(!1),d=Object(i.a)(o,2),h=d[0],x=d[1],m=function(e){return e[0].toUpperCase()+e.slice(1)},v=Object(n.useCallback)(Object(O.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("/api/user/".concat(t.userId),"GET",null);case 2:c=e.sent,l(m(c.name.firstname)+" "+m(c.name.lastname));case 4:case"end":return e.stop()}}),e)}))),[r,t.userId]);Object(n.useEffect)((function(){v()}),[v]);return Object(j.jsxs)("div",{className:"wishList",children:[u&&!h&&Object(j.jsx)(p,{text:"Get "+u+" list",onClick:function(){x(!0),c()}}),h&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:u}),Object(j.jsx)(N,{cart:t,userName:u})]})]})},I=function(e){var t=e.buttonClick;return Object(j.jsxs)("div",{className:"alignCenter",children:[Object(j.jsx)("div",{className:"intro",children:"Hi! Here we are, under christmas tree! We hope, that place will be fulled with gifts!"}),Object(j.jsx)(p,{text:"Let's see all wishlists you have!",onClick:t})]})},k=function(){var e=Object(n.useContext)(x),t=Object(i.a)(e,2),c=t[0],r=(t[1],f().request);return Object(j.jsx)("div",{className:"alertConfirmWrap",children:Object(j.jsxs)("div",{className:"alertConfirm alignCenter",children:[Object(j.jsx)("div",{className:"alertMessage",children:"Confirm to proceed all selected wishes to order!"}),Object(j.jsx)(u.b,{className:"button",to:"/confirm",onClick:function(){var e=[];c.map((function(t){return e.includes(t.cartId)||e.push(t.cartId),t})),e.map(function(){var e=Object(O.a)(b.a.mark((function e(t){var n,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],a=null,c.map((function(e){if(e.cartId===t&&e.select){var c={productId:e.productId,quantity:1};n.push(c),a=e.userId}return e})),e.prev=3,e.next=6,r("/api/cart/update/".concat(t),"PUT",{userId:a,date:Date.now(),products:n});case 6:s=e.sent,console.log(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}())},children:"Confirm!"})]})})},S=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[c&&Object(j.jsx)(k,{}),!c&&Object(j.jsx)("div",{className:"alignCenter",children:Object(j.jsx)(p,{onClick:function(){r(!0)},text:"Confirm all selected items!"})})]})},w=function(){var e=f().request,t=Object(n.useState)(),c=Object(i.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(0),u=Object(i.a)(s,2),l=u[0],o=u[1],d=function(){var t=Object(O.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e("/api/cart/getcarts","GET",null);case 3:c=t.sent,a(c),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){o((function(e){return e+1}))};return Object(j.jsxs)(j.Fragment,{children:[!r&&Object(j.jsx)(I,{buttonClick:d}),r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"wrapper",children:r.map((function(e,t){return Object(j.jsx)(C,{cart:e,checkOpenWishList:p},t)}))}),Object(j.jsx)("div",{children:l===r.length&&Object(j.jsx)(S,{})})]})]})},E=function(e){var t=e.cartId,c=e.data,r=Object(n.useState)(0),a=Object(i.a)(r,2),s=a[0],u=a[1];return Object(n.useEffect)((function(){var e=0;c[t].map((function(t){return e+=t.finalPrice,t})),u(e)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"finalListFor",children:[Object(j.jsx)("div",{className:"finalListHeader",children:"Confirmed gifts for "+c[t][0].userName}),Object(j.jsx)("div",{children:c[t].map((function(e,t){return Object(j.jsxs)("div",{className:"finalListItem",children:[Object(j.jsx)("div",{children:e.productName}),Object(j.jsx)("div",{children:e.finalPrice})]},t)}))})]}),Object(j.jsxs)("div",{className:"finalListItem",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:"subTotal",children:Math.round(100*s)/100})]})]})},F=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(),s=Object(i.a)(a,2),u=s[0],l=s[1],o=Object(n.useContext)(x),d=Object(i.a)(o,2),b=d[0];d[1];return Object(n.useEffect)((function(){var e=[];b.map((function(t){return e.includes(t.cartId)||e.push(t.cartId),t})),l(e);var t={};e.map((function(e){var c=[];return b.map((function(t){if(t.cartId===e&&t.select){var n={userName:t.userName,finalPrice:t.reducedPrice,productName:t.productName};c.push(n)}return t})),t[e]=c,e})),r(t)}),[]),Object(j.jsx)("div",{className:"confirmListWrap",children:Object(j.jsxs)("div",{className:"confirmListContent",children:[Object(j.jsx)("h2",{children:"Congratulations, your order is done!"}),c&&Object(j.jsx)(j.Fragment,{children:u.map((function(e,t){if(c[e].length)return Object(j.jsx)(E,{cartId:e,data:c},t)}))})]})})},P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",exact:!0,children:Object(j.jsx)(w,{})}),Object(j.jsx)(o.b,{path:"/confirm",exact:!0,children:Object(j.jsx)(F,{})}),Object(j.jsx)(o.a,{to:"/"})]});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(x.Provider,{value:[c,r],children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{children:a})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.f7ea945c.chunk.js.map