(this.webpackJsonpintern=this.webpackJsonpintern||[]).push([[0],{24:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(25),r=c.n(i),l=(c(35),c(54)),a=c(5),j=(c(36),c(7)),d=c.n(j),o=c(0);var b=function(){return Object(s.useEffect)((function(){d.a.AutoInit()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{class:"nav-wrapper",children:[Object(o.jsx)(l.a,{children:Object(o.jsx)(a.b,{to:"/",class:"brand-logo ",children:"Testing Blog"})}),Object(o.jsx)(a.b,{"data-target":"mobile-demo",className:"right sidenav-trigger",children:Object(o.jsx)("i",{class:"material-icons",children:"menu"})}),Object(o.jsxs)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/create",children:"Create Post"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/user",children:"Users"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/liked",children:"Liked Posts"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/disliked",children:"Disliked Posts"})})]})]})}),Object(o.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/create",children:"Create Post"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/user",children:"Users"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/liked",children:"Liked Posts"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/disliked",children:"Disliked Posts"})})]})]})},h=c(4),u=c(3);var x=function(e){var t=Object(s.useState)(0),c=Object(u.a)(t,2),n=(c[0],c[1],Object(s.useState)()),i=Object(u.a)(n,2),r=i[0],l=i[1];Object(s.useEffect)((function(){l(e)}),[]);var a=function(){console.log(r)};return Object(o.jsx)("div",{className:"container ",children:Object(o.jsx)("div",{class:"col s12 m12",children:Object(o.jsx)("div",{class:"card horizontal",children:Object(o.jsxs)("div",{class:"card-stacked",children:[Object(o.jsxs)("div",{class:"card-content",children:[Object(o.jsxs)("bold",{children:["  ",Object(o.jsx)("h4",{className:"card-title",children:e.title})]}),Object(o.jsx)("p",{children:e.body})]}),Object(o.jsxs)("div",{class:"card-action",children:[Object(o.jsx)("i",{className:"material-icons ",onClick:function(){return function(){console.log("like");var t=[];null!=localStorage.getItem("like")&&(t=JSON.parse(localStorage.getItem("like")));var c={title:e.title,body:e.body};console.log(t),t.push(c),localStorage.setItem("like",JSON.stringify(t))}()},style:{marginLeft:"7px",cursor:"pointer",onclick:"disable"},children:"thumb_up"}),Object(o.jsx)("i",{className:"material-icons",onClick:function(){return function(){console.log("dislike");var t=[];null!=localStorage.getItem("dislike")&&(t=JSON.parse(localStorage.getItem("dislike")));var c={title:e.title,body:e.body};console.log(t),t.push(c),localStorage.setItem("dislike",JSON.stringify(t))}()},style:{marginLeft:"7px",cursor:"pointer"},children:"thumb_down"}),Object(o.jsx)("button",{className:"btn waves-effect waves-light #1e88e5 blue darken-1 right modal-trigger",style:{marginLeft:"7px"},"data-target":"modal1",onClick:function(){return a()},children:"  Update"}),Object(o.jsx)("button",{className:"btn waves-effect waves-light #1e88e5 red darken-1 right",onClick:function(){return console.log(r),void fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE"}).then((function(e){return console.log("deleted")}))},children:"  Delete"}),Object(o.jsx)("div",{id:"modal1",class:"modal",children:Object(o.jsx)("div",{class:"modal-content",children:Object(o.jsxs)("div",{className:"container center-align",children:[Object(o.jsx)("h2",{className:"",children:"  update Post "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"in",type:"text",placeholder:"title of the post",value:e.title,style:{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"userId",value:e.id,style:{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"Body of the post",value:e.body,style:{width:"70%",height:"130px",border:"2px solid #CAD5E2",borderRadius:"00px",paddingLeft:"18px",paddingTop:"0"}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",class:"btn btn-outline-success",style:{borderRadius:"30px",width:"150px",height:"50px",fontSize:"25px"},onClick:function(){return a()},children:"Submit"})]})})})]})]})})})})};var O=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),r=Object(u.a)(i,2),l=r[0],a=r[1];return Object(s.useEffect)((function(){d.a.AutoInit(),l||fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){n(e)}))})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"center-align",children:" All Blogs "}),Object(o.jsxs)("div",{className:"center-align container row",style:{padding:"15px"},children:[Object(o.jsx)("h5",{children:" Search Post By User ID  "}),Object(o.jsx)("input",{value:l,placeholder:"user Id",onChange:function(e){return a(e.target.value)},style:{width:"200px",border:"1px solid #707070",borderRadius:"100px",paddingLeft:"8px",paddingRight:"8px",background:"#FFFFFF "}}),Object(o.jsx)("button",{className:"btn waves-effect waves-light #1e88e5 green darken-1 ",onClick:function(){fetch("https://jsonplaceholder.typicode.com/posts?userId="+l).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}))},style:{margin:"20px",width:"100px",border:"1px solid #707070",borderRadius:"100px"},children:"Search"})]}),Object(o.jsx)("div",{children:c?c.map((function(e){return Object(o.jsx)(x,{title:e.title,body:e.body,userId:e.userId})})):Object(o.jsx)("div",{className:"center-align",style:{marginTop:"30px"},children:Object(o.jsx)("div",{class:"preloader-wrapper big active",children:Object(o.jsxs)("div",{class:"spinner-layer spinner-blue-only",children:[Object(o.jsx)("div",{class:"circle-clipper left",children:Object(o.jsx)("div",{class:"circle"})}),Object(o.jsx)("div",{class:"gap-patch",children:Object(o.jsx)("div",{class:"circle"})}),Object(o.jsx)("div",{class:"circle-clipper right",children:Object(o.jsx)("div",{class:"circle"})})]})})})})]})};var p=function(e){return Object(s.useEffect)((function(){console.log(e.detail)})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container ",children:Object(o.jsx)("div",{class:"card ",children:Object(o.jsx)("div",{class:"card-stacked",children:Object(o.jsx)("div",{class:"card-content",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col s12 m6 ",children:[Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"Name :- "}),e.detail.name]}),Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"Username :-"})," ",e.detail.username]}),Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"E-mail :-"})," ",e.detail.email]}),Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"Phone No :-"})," ",e.detail.phone]})]}),Object(o.jsxs)("div",{className:"col s12 m6 ",children:[Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"Website :-"})," ",Object(o.jsxs)("a",{href:e.detail.website,children:[" ",e.detail.website," "]})]}),Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"Street :- "})," ",e.detail.address.street," "]}),Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"City :-"}),"  ",e.detail.website," "]}),Object(o.jsxs)("h6",{children:[Object(o.jsx)("b",{children:"Company :-"}),"  ",e.detail.website," "]})]})]})})})})})})};var g=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){d.a.AutoInit(),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){n(e)}))})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"center-align",children:" All Users "}),Object(o.jsx)("div",{children:c?c.map((function(e){return Object(o.jsx)(p,{detail:e})})):Object(o.jsx)("div",{className:"center-align",style:{marginTop:"30px"},children:Object(o.jsx)("div",{class:"preloader-wrapper big active",children:Object(o.jsxs)("div",{class:"spinner-layer spinner-blue-only",children:[Object(o.jsx)("div",{class:"circle-clipper left",children:Object(o.jsx)("div",{class:"circle"})}),Object(o.jsx)("div",{class:"gap-patch",children:Object(o.jsx)("div",{class:"circle"})}),Object(o.jsx)("div",{class:"circle-clipper right",children:Object(o.jsx)("div",{class:"circle"})})]})})})})]})};c(24);function f(){var e=Object(h.f)(),t=Object(s.useState)(),c=Object(u.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(),l=Object(u.a)(r,2),a=l[0],j=l[1],b=Object(s.useState)(),x=Object(u.a)(b,2),O=x[0],p=x[1];return f=function(){d.a.AutoInit(),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.push("/")}))},Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container center-align",children:[Object(o.jsx)("h2",{className:"",children:" Create a Post "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"in",type:"text",placeholder:"title of the post",value:n,onChange:function(e){return i(e.target.value)},style:{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"userId",value:O,onChange:function(e){return p(e.target.value)},style:{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"Body of the post",value:a,onChange:function(e){return j(e.target.value)},style:{width:"70%",height:"130px",border:"2px solid #CAD5E2",borderRadius:"00px",paddingLeft:"18px",paddingTop:"0"}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",class:"btn btn-outline-success",style:{borderRadius:"30px",width:"150px",height:"50px",fontSize:"25px"},onClick:function(){return f()},children:"Submit"})]})})}var m=f;function v(){var e=Object(h.f)(),t=Object(s.useState)(),c=Object(u.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(),l=Object(u.a)(r,2),a=l[0],j=l[1],b=Object(s.useState)(),x=Object(u.a)(b,2),O=x[0],p=x[1];return v=function(){d.a.AutoInit(),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:"foo",body:"bar",userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.push("/")}))},Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"center-align",children:" Update Post "}),Object(o.jsx)("input",{type:"text",placeholder:"title",value:n,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("input",{type:"text",placeholder:"userId",value:O,onChange:function(e){return p(e.target.value)}}),Object(o.jsx)("textarea",{id:"textarea1",class:"materialize-textarea",placeholder:"Body",value:a,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("button",{type:"button",class:"btn btn-outline-success",children:"  Update  "})]})})}var y=v;var S=function(e){var t=Object(s.useState)(0),c=Object(u.a)(t,2),n=(c[0],c[1],Object(s.useState)()),i=Object(u.a)(n,2),r=(i[0],i[1]);return Object(s.useEffect)((function(){r(e)}),[]),Object(o.jsx)("div",{className:"container ",children:Object(o.jsx)("div",{class:"col s12 m12",children:Object(o.jsx)("div",{class:"card horizontal",children:Object(o.jsx)("div",{class:"card-stacked",children:Object(o.jsxs)("div",{class:"card-content",children:[Object(o.jsxs)("bold",{children:["  ",Object(o.jsx)("h4",{className:"card-title",children:e.title})]}),Object(o.jsx)("p",{children:e.body})]})})})})})};var N=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),r=Object(u.a)(i,2);return r[0],r[1],Object(s.useEffect)((function(){d.a.AutoInit(),n(JSON.parse(localStorage.getItem("like"))),console.log(c)})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"center-align",children:" All Liked Posts "}),Object(o.jsx)("div",{children:c?c.map((function(e){return Object(o.jsx)(S,{title:e.title,body:e.body,userId:e.userId})})):Object(o.jsxs)("div",{className:"center-align",style:{marginTop:"130px"},children:[Object(o.jsx)("h3",{children:"No posts are available"}),Object(o.jsx)("img",{src:"https://img.icons8.com/cotton/64/000000/new-post.png"})]})})]})};var k=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(),r=Object(u.a)(i,2);return r[0],r[1],Object(s.useEffect)((function(){d.a.AutoInit(),n(JSON.parse(localStorage.getItem("dislike"))),console.log(c)})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"center-align",children:" All DisLiked Posts "}),Object(o.jsx)("div",{children:c?c.map((function(e){return Object(o.jsx)(S,{title:e.title,body:e.body,userId:e.userId})})):Object(o.jsxs)("div",{className:"center-align",style:{marginTop:"130px"},children:[Object(o.jsx)("h3",{children:"No posts are available"}),Object(o.jsx)("img",{src:"https://img.icons8.com/cotton/64/000000/new-post.png"})]})})]})},I=function(){var e=Object(h.f)();return Object(s.useEffect)((function(){JSON.parse(localStorage.getItem("user"))||e.location.pathname.startsWith("/reset")}),[]),Object(o.jsxs)(h.c,{children:[Object(o.jsxs)(h.a,{exact:!0,path:"/",children:[" ",Object(o.jsx)(O,{})," "]}),Object(o.jsxs)(h.a,{path:"/user",children:[" ",Object(o.jsx)(g,{})," "]}),Object(o.jsxs)(h.a,{path:"/create",children:[" ",Object(o.jsx)(m,{})," "]}),Object(o.jsxs)(h.a,{path:"/update",children:[" ",Object(o.jsx)(y,{})," "]}),Object(o.jsxs)(h.a,{path:"/liked",children:[" ",Object(o.jsx)(N,{})," "]}),Object(o.jsxs)(h.a,{path:"/disliked",children:[" ",Object(o.jsx)(k,{})," "]})]})};var w=function(){return Object(o.jsxs)(a.a,{children:[Object(o.jsx)(b,{}),Object(o.jsx)(I,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),C()}},[[42,1,2]]]);
//# sourceMappingURL=main.973d2031.chunk.js.map