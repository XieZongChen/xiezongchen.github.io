import{f as B,a5 as x,u as P,a2 as h,v as S,k as w,ao as A,M as E,l as R,o,h as c,a as m,t as k,j as l,F as C,i as V,ap as K,c as $,w as y,m as q,d as p,a9 as N,D as U,aq as D,a4 as F,ak as T,al as M,ai as W}from"./app-t0WzKcrM.js";import{_ as H}from"./YunCard.vue_vue_type_script_setup_true_lang-CgAMBqk4.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-m7BAz3tq.js";import{_ as G}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQr6kV1W.js";const J={class:"category-list-item inline-flex items-center cursor-pointer"},Q={key:0,"i-ri-folder-add-line":""},X={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},Z={key:0},I=m("div",{"i-ri-file-text-line":""},null,-1),ee={m:"l-1",font:"serif black"},te=B({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup(b){const u=b,_=x(),n=P(),d=h(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),t=S(u.collapsable),{t:r}=w(),{locale:f}=w();function Y(e){const i=f.value==="zh-CN"?"zh":f.value;return e[`title_${i}`]?e[`title_${i}`]:e.title}const g=S(),{show:s}=A(g);function v(e){_.push({query:{category:e}}),s()}return E(()=>{const e=document.querySelector(".post-collapse-container");e&&(g.value=e)}),(e,i)=>{const z=R("YunCategory",!0),L=R("RouterLink");return o(),c(C,null,[m("li",J,[m("span",{class:"folder-action inline-flex",onClick:i[0]||(i[0]=a=>t.value=!t.value)},[t.value?(o(),c("div",Q)):(o(),c("div",X))]),m("span",{class:"category-name",m:"l-1",onClick:i[1]||(i[1]=a=>v(e.parentKey))},k(e.category.name==="Uncategorized"?l(r)("category.uncategorized"):e.category.name)+" ["+k(e.category.total)+"] ",1)]),t.value?q("v-if",!0):(o(),c("ul",Z,[(o(!0),c(C,null,V(e.category.children,(a,j)=>(o(),c("li",{key:j,class:"post-list-item",m:"l-4"},[l(K)(a)?(o(),$(z,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!d.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(o(),c(C,{key:1},[a.title?(o(),$(L,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:y(()=>[I,m("span",ee,k(Y(a)),1)]),_:2},1032,["to"])):q("v-if",!0)],64))]))),128))]))],64)}}}),oe=B({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup(b){const u=P(),_=h(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,d)=>{const t=te;return o(!0),c(C,null,V(n.categories,r=>(o(),c("ul",{key:r.name,class:"category-list",m:"l-4"},[p(t,{"parent-key":r.name,category:r,level:n.level+1,collapsable:!_.value.includes(r.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}}),ne={text:"center",class:"yun-text-light",p:"2"},ie=B({__name:"categories",setup(b){const{t:u}=w(),_=N(),n=U(),d=P(),t=h(()=>d.query.category||""),r=D(),f=h(()=>_.postList.filter(s=>s.categories&&t.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===t.value:s.categories.join("/").startsWith(t.value)&&s.categories[0]===t.value.split("/")[0]:!s.categories&&t.value==="Uncategorized"?s.categories===void 0:!1)),Y=F(n);return T([M({"@type":"CollectionPage"})]),(g,s)=>{const v=G,e=oe,i=R("RouterView"),z=O,L=H,a=W;return o(),$(a,null,{"main-header":y(()=>[p(v,{title:l(Y)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":y(()=>[m("div",ne,k(l(u)("counter.categories",l(r).children.length)),1),p(e,{categories:l(r).children},null,8,["categories"]),p(i)]),"main-nav-before":y(()=>[t.value?(o(),$(L,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:y(()=>[p(v,{title:t.value==="Uncategorized"?l(u)("category.uncategorized"):t.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),p(z,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:f.value},null,8,["posts"])]),_:1})):q("v-if",!0)]),_:1})}}});export{ie as default};