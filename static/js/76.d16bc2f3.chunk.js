"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(689),c=n(791),u=n(646),s=n(784),i={castUl:"Cast_castUl__h5-wd",castCard:"Cast_castCard__m8Shz",text:"Cast_text__P2vgu"},o=n(184),p=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)([]),n=(0,r.Z)(e,2),p=n[0],f=n[1],l=(0,c.useState)(!1),d=(0,r.Z)(l,2),h=d[0],m=d[1];return(0,c.useEffect)((function(){m(!0),(0,u.wL)(t).then((function(t){f(t)})).catch((function(t){console.log(t)})).finally((function(){m(!1)}))}),[t]),(0,o.jsxs)("div",{className:i.castContainer,children:[h&&(0,o.jsx)(s.Z,{}),(0,o.jsx)("ul",{className:i.castUl,children:p.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,o.jsxs)("li",{className:i.castCard,children:[(0,o.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,o.jsx)("span",{className:i.text,children:a}),(0,o.jsxs)("span",{className:i.text,children:["Character: ",c]})]},e)}))})]})}},646:function(t,e,n){n.d(e,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return i},Y5:function(){return p},wL:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="1216de54fbd4029ce727364da882579b",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.d16bc2f3.chunk.js.map