"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[457],{821:function(e,t,r){r.d(t,{F:function(){return o},X:function(){return p}});var n=r(861),a=r(757),s=r.n(a),c=r(243),i="d03712107dcdd723f1173c5ee2c0d8c1";function o(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/".concat(t,"?api_key=").concat(i),e.next=3,c.Z.get(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t),e.next=3,c.Z.get(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},457:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(439),a=r(821),s=r(791),c=r(87),i=r(689),o="Movies_Form__CPcFL",u="Movies_Input__VkF2C",p="Movies_Btn__7pC3p",l="Movies_ListMovie__07TSA",h="Movies_ItemMovie__ZLrmN",f=r(184),m=function(){var e,t=(0,s.useState)([]),r=(0,n.Z)(t,2),m=r[0],d=r[1],v=(0,c.lr)(),_=(0,n.Z)(v,2),g=_[0],x=_[1];e=null!==g.get("searchQuery")&&void 0!==g.get("searchQuery")?g.get("searchQuery"):"";var y=(0,i.TH)();return(0,s.useEffect)((function(){null!==e?(0,a.X)(e).then((function(e){d(e.data.results)})).catch((function(e){return console.error(e)})):d([])}),[e,g]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.search.value;if(""===t.trim())return x({}),void alert("oppsss...");x({searchQuery:t})},children:[(0,f.jsx)("input",{type:"text",autoComplete:"off",name:"search",autoFocus:!0,placeholder:"Search Movies",className:u}),(0,f.jsx)("button",{className:p,type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{className:l,children:m.map((function(e){var t;return t=null!==e.poster_path?"https://image.tmdb.org/t/p/original/"+e.poster_path:"/goit-react-hw-05-movies/images/image.jpg",(0,f.jsx)("li",{className:h,children:(0,f.jsxs)(c.rU,{to:"".concat(e.id),state:{from:y},children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:t,alt:"poster",width:350})}),(0,f.jsx)("h3",{children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=457.72240307.chunk.js.map