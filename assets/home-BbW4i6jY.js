import{_ as H}from"./YunFooter.vue_vue_type_script_setup_true_lang-CJldLY-7.js";import{f as k,o as n,h as a,a as i,r as S,s as C,v as f,M as N,t as y,m as h,_ as B,at as V,a2 as b,q as g,F as M,i as L,n as Y,j as _,c as $,d as w,au as j,E as z,av as A,u as E,l as F,aj as R}from"./app-t0WzKcrM.js";const D={class:"yun-notice m-auto"},P=["innerHTML"],q=k({__name:"YunNotice",props:{content:{}},setup(d){return(e,o)=>(n(),a("div",D,[i("span",{innerHTML:e.content},null,8,P),S(e.$slots,"default")]))}}),G={class:"say"},O={key:0,class:"say-content animate-fade-in animate-iteration-1"},W={key:1,class:"say-author"},I={key:2,class:"say-from"},J=k({__name:"YunSay",setup(d){const e=C(),o=f(""),r=f(""),u=f("");function v(){const s=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;s&&fetch(s).then(t=>{if(t.ok)t.json().then(c=>{if(e.value.say.hitokoto.enable)o.value=c.hitokoto,r.value=c.from_who,u.value=c.from;else{const l=c[Math.floor(Math.random()*c.length)];l.content?(o.value=l.content,r.value=l.author,u.value=l.from):o.value=l}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${t.status}`)}).catch(t=>{console.error(t.message)})}return N(()=>{v()}),(s,t)=>(n(),a("div",G,[o.value?(n(),a("span",O,y(o.value),1)):h("v-if",!0),r.value?(n(),a("span",W,y(r.value),1)):h("v-if",!0),u.value?(n(),a("span",I,y(u.value),1)):h("v-if",!0)]))}}),K={},Q={class:"go-down","aria-label":"go-down",href:"javascript:window.scrollTo(0, window.banner.clientHeight);"},U=i("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),X=[U];function Z(d,e){return n(),a("a",Q,X)}const ee=B(K,[["render",Z]]),ne={},te={class:"yun-cloud"},se=V('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),ae=[se];function oe(d,e){return n(),a("div",te,ae)}const re=B(ne,[["render",oe]]),ce={class:"banner-line-container"},le={class:"banner-char-container"},ie={class:"char"},ue={class:"banner-line-container bottom"},_e=k({__name:"YunBanner",setup(d){const e=C(),o=b(()=>{const s=[];for(let t=0;t<e.value.banner.title.length;t++){const c=j(1.5,3.5);s.push(c)}return s}),r=b(()=>o.value.reduce((s,t)=>s+t,0)/2),u=b(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${r.value}rem)`})),v=f(!0);return(s,t)=>{var m;const c=re,l=ee;return n(),a("div",{id:"yun-banner",style:Y(u.value)},[i("div",ce,[i("div",{class:g(["banner-line vertical-line-top",{active:v.value}])},null,2)]),i("div",le,[(n(!0),a(M,null,L(_(e).banner.title,(x,p)=>(n(),a("div",{key:p,class:"char-box"},[i("span",{class:g([p%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${o.value[p]}rem`})},[i("span",ie,y(x),1)],6)]))),128))]),i("div",ue,[i("div",{class:g(["banner-line vertical-line-bottom",{active:v.value}])},null,2)]),(m=_(e).banner.cloud)!=null&&m.enable?(n(),$(c,{key:0})):h("v-if",!0),w(l)],4)}}}),de=k({__name:"home",setup(d){const e=z(),o=A("home"),r=C(),u=E(),v=b(()=>u.path.startsWith("/page"));return(s,t)=>{const c=R,l=_e,m=J,x=q,p=F("RouterView"),T=H;return n(),a("main",{class:g(["yun-main flex-center",_(o)&&!_(e).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[w(c,{"show-hamburger":!0}),v.value?h("v-if",!0):(n(),a(M,{key:0},[_(r).banner.enable?(n(),$(l,{key:0})):h("v-if",!0),_(r).say.enable?(n(),$(m,{key:1,w:"full"})):h("v-if",!0)],64)),_(r).notice.enable?(n(),$(x,{key:1,content:_(r).notice.content,mt:"4"},null,8,["content"])):h("v-if",!0),S(s.$slots,"board"),S(s.$slots,"default",{},()=>[w(p)]),w(T)],2)}}});export{de as default};
