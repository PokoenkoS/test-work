"use strict";(self.webpackChunktest_work=self.webpackChunktest_work||[]).push([[600],{600:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(165),a=n(433),c=n(861),o=n(439),s=n(243);s.Z.defaults.baseURL="https://6454b20cf803f345762eaf23.mockapi.io";var i=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/tweets?page=".concat(e,"&limit=3"));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/tweets");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l={fetchTweet:i,fetchAllTweet:u},f=n(791),p=n(103);var d=n.p+"static/media/logo.e917114d7945c04c85a8946a331d28b6.svg";var h=n.p+"static/media/picture.23dcbc3cc8ccc9682f24b4acffb5efb2.svg",x=n(184),v=function(t){var e=t.data,n=e.id,a=e.avatar,i=e.followers,u=e.tweets,l=(0,f.useState)(i),v=(0,o.Z)(l,2),w=v[0],j=v[1],g=(0,f.useState)(JSON.parse(localStorage.getItem("activeBtn".concat(n)))),Z=(0,o.Z)(g,2),b=Z[0],k=Z[1],S=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=b?w-1:w+1,t.prev=1,t.next=4,s.Z.put("https://6454b20cf803f345762eaf23.mockapi.io/tweets/".concat(n),{followers:e});case 4:j(e),localStorage.setItem("activeBtn".concat(n),JSON.stringify(!b)),k(!b),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return(0,x.jsx)(p.KK,{children:(0,x.jsx)(p.aV,{children:(0,x.jsxs)(p.ck,{children:[(0,x.jsx)(p.TR,{src:d,alt:"logo",width:76,height:22}),(0,x.jsx)(p.Q,{src:h,alt:"",width:308,height:168}),(0,x.jsxs)(p.qV,{children:[(0,x.jsx)(p.x1,{children:" "}),(0,x.jsx)(p.Ei,{src:a,alt:"avatar"}),(0,x.jsx)(p.x1,{children:" "})]}),(0,x.jsxs)(p.DM,{children:[(0,x.jsxs)(p.xv,{children:[u," TWEETS"]}),(0,x.jsxs)(p.xv,{children:[w.toLocaleString("en-US")," FOLLOWERS"]}),b?(0,x.jsx)(p.Jj,{type:"button",onClick:S,children:"FOLLOWING"}):(0,x.jsx)(p.zx,{type:"button",onClick:S,children:"FOLLOW"})]})]},n)})})},w=function(t){var e=t.data;return(0,x.jsx)(p.KK,{children:(0,x.jsx)(p.aV,{children:e.map((function(t){return(0,x.jsx)(v,{data:t})}))})})},j=n(689),g=function(t){var e=t.filter;return(0,x.jsx)("div",{children:(0,x.jsxs)("select",{onChange:e,children:[(0,x.jsx)("option",{value:"all",children:"All"}),(0,x.jsx)("option",{value:"follow",children:"Follow"}),(0,x.jsx)("option",{value:"following",children:"Following"})]})})},Z=function(){var t,e=(0,f.useState)([]),n=(0,o.Z)(e,2),s=n[0],i=n[1],u=(0,f.useState)(1),d=(0,o.Z)(u,2),h=d[0],v=d[1],Z=(0,f.useState)([]),b=(0,o.Z)(Z,2),k=b[0],S=b[1],m=(0,j.s0)(),O=(null===(t=(0,j.TH)().state)||void 0===t?void 0:t.from)||"/";(0,f.useEffect)((function(){var t=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.fetchTweet(h);case 3:e=t.sent,i((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e))})),S((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e))})),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[h]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(p.zx,{type:"button",onClick:function(){return m(O)},children:"Go back"}),(0,x.jsx)(g,{filter:function(t){var e=s.filter((function(t){return!JSON.parse(localStorage.getItem("activeBtn".concat(t.id)))})),n=s.filter((function(t){return JSON.parse(localStorage.getItem("activeBtn".concat(t.id)))}));switch(t.target.value){case"all":S(s);break;case"follow":S(e);break;case"following":S(n);break;default:return}}}),(0,x.jsx)(w,{data:k}),s.length<12&&(0,x.jsx)(p.zx,{type:"button",onClick:function(){v((function(t){return t+1}))},children:"Load More"})]})}}}]);
//# sourceMappingURL=600.63d2fb09.chunk.js.map