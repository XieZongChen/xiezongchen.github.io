import{f as g,l as x,o as a,c as p,v as m,L as C,h as v,a as s,z as P,N as V,q as $,O as D,d as f,a5 as G,k as A,D as E,a4 as O,ak as R,al as S,a2 as B,J as N,ar as T,w,j as o,t as Y,ai as j,as as z}from"./app-t0WzKcrM.js";import{_ as I}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQr6kV1W.js";const L=g({__name:"YunGallery",props:{photos:{}},setup(d){return(r,n)=>{const e=x("VAGallery");return a(),p(e,{photos:r.photos},null,8,["photos"])}}}),J={key:0,"w-full":"","pt-14":"","pb-10":""},K={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},M={key:1},q=g({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(d){const r=d,n=m(""),e=m(""),l=m(!1),{decrypt:c}=C();async function _(){const i=r.encryptedPhotos;if(i)try{const t=await c(n.value,i);e.value=t||""}catch{l.value=!0}}function y(){e.value="",n.value=""}return(i,t)=>{const h=L;return a(),v("div",null,[e.value?(a(),v("div",M,[f(h,{photos:JSON.parse(e.value)},null,8,["photos"]),s("div",{"w-full":"","text-center":"","mt-8":""},[s("button",{"m-auto":"",class:"btn","font-bold":"",onClick:y}," Encrypt Again ")])])):(a(),v("div",J,[s("div",K,[P(s("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:$(l.value&&"border-red"),onInput:t[1]||(t[1]=u=>l.value=!1),onKeyup:D(_,["enter"])},null,34),[[V,n.value]]),s("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:_})])]))])}}}),F={text:"center",class:"yun-text-light",p:"2"},H={class:"page-action",text:"center"},U=["title"],W=s("div",{"i-ri-arrow-go-back-line":""},null,-1),Q=[W],X=g({__name:"gallery",setup(d){const r=G(),{t:n}=A(),e=E(),l=O(e);R([S({"@type":"CollectionPage"})]);const c=B(()=>e.value.photos||[]),y=N().value.addons["valaxy-addon-lightgallery"]?T(()=>z(()=>import("./YunGallery-h0GBZsj4.js"),__vite__mapDeps([0,1,2,3]))):()=>null;return(i,t)=>{const h=I,u=q,b=x("RouterView"),k=j;return a(),p(k,null,{"main-header":w(()=>[f(h,{title:o(l)||o(n)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color},null,8,["title","icon","color"])]),"main-content":w(()=>[s("div",F,Y(o(n)("counter.photos",c.value.length)),1),s("div",H,[s("a",{class:"yun-icon-btn",title:o(n)("accessibility.back"),onClick:t[0]||(t[0]=()=>o(r).back())},Q,8,U)]),o(e).encryptedPhotos?(a(),p(u,{key:0,"encrypted-photos":o(e).encryptedPhotos},null,8,["encrypted-photos"])):(a(),p(o(y),{key:1,photos:c.value},null,8,["photos"])),f(b)]),_:1})}}}),te=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{L as _,te as g};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/YunGallery-h0GBZsj4.js","assets/app-t0WzKcrM.js","assets/app-PzGzMWP7.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang-CQr6kV1W.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}