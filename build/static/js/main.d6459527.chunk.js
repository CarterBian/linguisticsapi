(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),r=n(3),a=n.n(r),u=(n(11),n(5)),o=n(4),j=n.n(o);n(12);var h=function(){var e=Object(i.useState)({}),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(i.useEffect)((function(){fetch("https://linguisticsapi.herokuapp.com/api/linguists").then((function(e){return e.json()})).then((function(e){s(e.linguists)}))}),[]),Object(c.jsxs)("div",{class:"ui raised very padded text container segment",children:[Object(c.jsx)("h2",{className:"ui header",children:"Linguists Bios"}),Object(c.jsx)("div",{className:"json",children:n.length>0?Object(c.jsx)(j.a,{src:n}):Object(c.jsx)("p",{children:"Hello"})})]})};n(13);var d=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Linguistics API"}),Object(c.jsx)(h,{})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};n(14);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.d6459527.chunk.js.map