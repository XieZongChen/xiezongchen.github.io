import{f as l,H as r,am as c,l as d,j as i,o as p,c as m,m as f,I as h}from"./app-t0WzKcrM.js";const g=l({__name:"YunAlgoliaSearch",props:{open:{type:Boolean}},setup(a){const o=a;if(r(h))throw new Error("Algolia addon is not installed");const{loaded:e,load:n,dispatchEvent:t}=(void 0)();return c(()=>o.open,()=>{o.open&&n(),e&&t()}),(u,_)=>{const s=d("AlgoliaSearchBox");return i(e)?(p(),m(s,{key:0,class:"hidden"})):f("v-if",!0)}}});export{g as default};