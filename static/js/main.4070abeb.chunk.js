(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{36:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r,i,c,a,s,o,d,l,b,j=t(1),p=t(24),u=t.n(p),h=t(10),x=(t(36),t(4)),m=t(2),f=t(6),O=t.p+"static/media/IMAGE_NOT_FOUND.7e781cd8.jfif",g=t(3),v=t(25),w=t.n(v),y=Object(m.b)(w.a)(r||(r=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),k=m.b.div(i||(i=Object(g.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),S=m.b.div(c||(c=Object(g.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  //background-color: #ffc806;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?"#ffc806":"#ddd"})),C=Object(m.b)(k)(a||(a=Object(g.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),N=t(0),E=function(n){var e=n.image,t=n.name,r=n.gender,i=n.country,c=n.birthday,a=n.deathday;return Object(N.jsxs)(C,{children:[Object(N.jsx)("div",{children:Object(N.jsx)("img",{className:"img-wrapper",src:e,alt:"actor"})}),Object(N.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(N.jsx)("p",{children:i?"Comes from ".concat(i):"No country known"}),c?Object(N.jsxs)("p",{children:["Born ",c]}):null,Object(N.jsx)("p",{className:"deathday",children:a?"Died ".concat(a):"Alive"})]})},I=function(n){var e=n.data;return Object(N.jsx)(y,{children:e.map((function(n){var e=n.person;return Object(N.jsx)(E,{name:e.name,gender:e.gender,image:e.image?e.image.medium:O,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday},e.id)}))})},D=t(12),_=t(31),A=["label"],F=m.b.label(s||(s=Object(g.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),L=function(n){var e=n.label,t=Object(_.a)(n,A);return Object(N.jsx)("div",{children:Object(N.jsxs)(F,{htmlFor:t.id,children:[e,Object(N.jsx)("input",Object(D.a)(Object(D.a)({},t),{},{type:"radio"})),Object(N.jsx)("span",{})]})})},T=m.b.ul(o||(o=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),z=Object(m.b)(h.b)(d||(d=Object(g.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),H=[{to:"/",text:"Home"},{to:"/starred",text:"Go to starred"}],J=function(){var n=Object(x.f)();return Object(N.jsx)("div",{children:Object(N.jsx)(T,{children:H.map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(z,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},R=m.b.div(l||(l=Object(g.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),B=function(n){var e=n.title,t=n.subtitle;return Object(N.jsxs)(R,{children:[Object(N.jsx)("h1",{children:e}),Object(N.jsx)("p",{children:t})]})},M=function(n){var e=n.children;return Object(N.jsxs)("div",{children:[Object(N.jsx)(B,{title:"Box Office",subtitle:"Are you looking for a movie or a celebrity?"}),Object(N.jsx)(J,{}),e]})},U=Object(m.b)(k)(b||(b=Object(g.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),V=function(n){var e=n.id,t=n.image,r=n.name,i=n.summary,c=n.onStarClick,a=n.isStarred,s=i?"".concat(i.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(N.jsxs)(U,{children:[Object(N.jsx)("div",{className:"img-wrapper",children:Object(N.jsx)("img",{src:t,alt:"show"})}),Object(N.jsx)("h1",{children:r}),Object(N.jsx)("p",{children:s}),Object(N.jsxs)("div",{className:"btns",children:[Object(N.jsx)(h.b,{to:"/show/".concat(e),children:"Read more"}),Object(N.jsx)("button",{type:"button",onClick:c,children:Object(N.jsx)(S,{active:a})})]})]})},G=t(30),P=t(22),W=t.n(P),q=t(29),K="https://api.tvmaze.com";function Q(n){return $.apply(this,arguments)}function $(){return($=Object(q.a)(W.a.mark((function n(e){var t;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(K).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function X(n,e){switch(e.type){case"ADD":return[].concat(Object(G.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function Y(n,e,t){var r=Object(j.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),i=Object(f.a)(r,2),c=i[0],a=i[1];return Object(j.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[c,t]),[c,a]}function Z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return Y(X,[],n)}var nn=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(D.a)(Object(D.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var en,tn,rn,cn,an,sn,on,dn,ln,bn,jn,pn,un=function(n){var e=n.data,t=Z(),r=Object(f.a)(t,2),i=r[0],c=r[1];return Object(N.jsx)(y,{children:e.map((function(n){var e=n.show,t=i.includes(e.id);return Object(N.jsx)(V,{id:e.id,name:e.name,image:e.image?e.image.medium:O,summary:e.summary,onStarClick:function(){c(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})},isStarred:t},e.id)}))})},hn=m.b.input(en||(en=Object(g.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),xn=m.b.div(tn||(tn=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),mn=m.b.div(rn||(rn=Object(g.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),fn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(j.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(f.a)(e,2),r=t[0],i=t[1];return[r,function(e){i(e),sessionStorage.setItem(n,JSON.stringify(e))}]}(),e=Object(f.a)(n,2),t=e[0],r=e[1],i=Object(j.useState)(null),c=Object(f.a)(i,2),a=c[0],s=c[1],o=Object(j.useState)("shows"),d=Object(f.a)(o,2),l=d[0],b=d[1],p="shows"===l,u=function(){Q("/search/".concat(l,"?q=").concat(t)).then((function(n){s(n)}))},h=function(n){b(n.target.value)};return Object(N.jsxs)(M,{children:[Object(N.jsx)(hn,{type:"text",placeholder:"Search something",onChange:function(n){r(n.target.value)},onKeyDown:function(n){13===n.keyCode&&u()},value:t}),Object(N.jsxs)(xn,{children:[Object(N.jsx)("div",{children:Object(N.jsx)(L,{label:"Shows",id:"show-search",value:"shows",checked:p,onChange:h})}),Object(N.jsx)("div",{children:Object(N.jsx)(L,{label:"Celebrities",id:"peple-search",value:"people",checked:!p,onChange:h})})]}),Object(N.jsx)(mn,{children:Object(N.jsx)("button",{type:"button",onClick:u,children:"Search"})}),a&&0===a.length?Object(N.jsx)("div",{children:"No result"}):a&&a.length>0?a[0].show?Object(N.jsx)(un,{data:a}):Object(N.jsx)(I,{data:a}):null]})},On=m.b.div(cn||(cn=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),gn=function(n){var e=n.cast;return Object(N.jsx)(On,{children:e.map((function(n,e){var t=n.person,r=n.character,i=n.voice;return Object(N.jsxs)("div",{className:"cast-item",children:[Object(N.jsx)("div",{className:"pic-wrapper",children:Object(N.jsx)("img",{src:t.image?t.image.medium:O,alt:"cast-person"})}),Object(N.jsx)("div",{className:"actor",children:Object(N.jsxs)("span",{children:[Object(N.jsx)("span",{className:"bold",children:t.name})," | ",r.name," ",i?"| Voice":""]})})]},e)}))})},vn=m.b.div(an||(an=Object(g.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),wn=function(n){var e=n.status,t=n.premiered,r=n.network;return Object(N.jsxs)(vn,{children:[Object(N.jsxs)("p",{children:["Status: ",Object(N.jsx)("span",{children:e})]}),Object(N.jsxs)("p",{children:["Premiered ",t," ",r?"on ".concat(r.name):null]})]})},yn=m.b.div(sn||(sn=Object(g.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),kn=m.b.div(on||(on=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),Sn=function(n){var e=n.seasons;return Object(N.jsxs)(yn,{children:[Object(N.jsxs)("p",{children:["Seasons in total: ",Object(N.jsx)("span",{children:e.length})]}),Object(N.jsxs)("p",{children:["Episodes in total:"," ",Object(N.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(N.jsx)(kn,{children:e.map((function(n){return Object(N.jsxs)("div",{className:"season-item",children:[Object(N.jsxs)("div",{className:"left",children:[Object(N.jsxs)("p",{children:["Season ",n.number]}),Object(N.jsxs)("p",{children:["Episodes: ",Object(N.jsx)("span",{children:n.episodeOrder})]})]}),Object(N.jsxs)("div",{className:"right",children:["Aired:"," ",Object(N.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},Cn=m.b.div(dn||(dn=Object(g.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),Nn=m.b.div(ln||(ln=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),En=m.b.div(bn||(bn=Object(g.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),In=function(n){var e=n.name,t=n.rating,r=n.summary,i=n.tags,c=n.image;return Object(N.jsxs)(Cn,{children:[Object(N.jsx)("img",{src:c?c.original:O,alt:"show-cover"}),Object(N.jsxs)("div",{className:"text-side",children:[Object(N.jsxs)(Nn,{children:[Object(N.jsx)("h1",{children:e}),Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{active:!0}),Object(N.jsx)("span",{children:t.average||"N/A"})]})]}),Object(N.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(N.jsxs)("div",{children:["Tags:"," ",Object(N.jsx)(En,{children:i.map((function(n,e){return Object(N.jsx)("span",{children:n},e)}))})]})]})]})},Dn=m.b.div(jn||(jn=Object(g.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),_n=m.b.div(pn||(pn=Object(g.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]))),An=function(){var n=function(n){var e=Object(j.useReducer)(nn,{show:null,isLoading:!0,error:null}),t=Object(f.a)(e,2),r=t[0],i=t[1];return Object(j.useEffect)((function(){var e=!0;return Q("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){setTimeout((function(){e&&i({type:"FETCH_SUCCESS",show:n})}),2e3)})).catch((function(n){e&&i({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),r}(Object(x.g)().id),e=n.show,t=n.isLoading,r=n.error;return t?Object(N.jsx)("div",{children:"Loading......"}):r?Object(N.jsxs)("div",{children:["Error occured:",r]}):Object(N.jsxs)(Dn,{children:[Object(N.jsx)(In,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(N.jsxs)(_n,{children:[Object(N.jsx)("h2",{children:"Details "}),Object(N.jsx)(wn,{status:e.status,network:e.network,premiered:e.premiered})]}),Object(N.jsxs)(_n,{children:[Object(N.jsx)("h2",{children:"Seasons "}),Object(N.jsx)(Sn,{seasons:e._embedded.seasons})]}),Object(N.jsxs)(_n,{children:[Object(N.jsx)("h2",{children:"Cast "}),Object(N.jsx)(gn,{cast:e._embedded.cast})]})]})},Fn=function(){var n=Z(),e=Object(f.a)(n,1)[0],t=Object(j.useState)(null),r=Object(f.a)(t,2),i=r[0],c=r[1],a=Object(j.useState)(!0),s=Object(f.a)(a,2),o=s[0],d=s[1],l=Object(j.useState)(null),b=Object(f.a)(l,2),p=b[0],u=b[1];return Object(j.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return Q("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){c(n),d(!1)})).catch((function(n){u(n.message),d(!1)}))}else d(!1)}),[e]),Object(N.jsxs)(M,{children:[o&&Object(N.jsx)("div",{children:"Shows are still loading"}),p&&Object(N.jsxs)("div",{children:["Error occured: ",p]}),!o&&!i&&Object(N.jsx)("div",{children:"No shows were added"}),!o&&!p&&i&&Object(N.jsx)(un,{data:i})]})},Ln={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Tn=function(){return Object(N.jsx)(m.a,{theme:Ln,children:Object(N.jsxs)(x.c,{children:[Object(N.jsx)(x.a,{exact:!0,path:"/",children:Object(N.jsx)(fn,{})}),Object(N.jsx)(x.a,{exact:!0,path:"/starred",children:Object(N.jsx)(Fn,{})}),Object(N.jsx)(x.a,{exact:!0,path:"/show/:id",children:Object(N.jsx)(An,{})}),Object(N.jsx)(x.a,{children:Object(N.jsx)("div",{children:"Not Found"})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(N.jsx)(h.a,{children:Object(N.jsx)(Tn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.4070abeb.chunk.js.map