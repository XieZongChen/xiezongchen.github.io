import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CJwb-j0h.js";import{_ as r,u as E,c as y,w as a,p as i,o as m,r as n,a as s,b as l}from"./app-t0WzKcrM.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CJldLY-7.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CgAMBqk4.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQr6kV1W.js";import"./index-C7yU5XnD.js";const U=JSON.parse('{"title":"LRU 缓存","description":"","frontmatter":{"title":"LRU 缓存","date":"2022-09-12T00:00:00.000Z","categories":["编程"]},"headers":[],"relativePath":"pages/posts/LRUCache.md","path":"/home/runner/work/xzc-blog/xzc-blog/pages/posts/LRUCache.md","lastUpdated":1709257929000}'),e=JSON.parse('{"title":"LRU 缓存","description":"","frontmatter":{"title":"LRU 缓存","date":"2022-09-12T00:00:00.000Z","categories":["编程"]},"headers":[],"relativePath":"pages/posts/LRUCache.md","path":"/home/runner/work/xzc-blog/xzc-blog/pages/posts/LRUCache.md","lastUpdated":1709257929000}'),F={name:"pages/posts/LRUCache.md",data(){return{data:e,frontmatter:e.frontmatter,$frontmatter:e.frontmatter}},setup(){const o=E();o.meta.frontmatter=Object.assign(o.meta.frontmatter,e.frontmatter),i("pageData",e)}},h=s("div",{class:"language-javascript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"LRUCache"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"constructor"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"capacity"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Map"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".capacity "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," capacity;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"get"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"key"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"has"),s("span",{style:{color:"#E1E4E8"}},"(key)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"get"),s("span",{style:{color:"#E1E4E8"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 重新set，相当于更新到 map最后")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"delete"),s("span",{style:{color:"#E1E4E8"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"set"),s("span",{style:{color:"#E1E4E8"}},"(key, value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"set"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"key"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 如果有，就删了再赋值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"has"),s("span",{style:{color:"#E1E4E8"}},"(key)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"delete"),s("span",{style:{color:"#E1E4E8"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"set"),s("span",{style:{color:"#E1E4E8"}},"(key, value);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 判断是不是容量超了，淘汰机制")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map.size "),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".capacity) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"delete"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".map."),s("span",{style:{color:"#B392F0"}},"keys"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"next"),s("span",{style:{color:"#E1E4E8"}},"().value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"LRUCache"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"constructor"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"capacity"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Map"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".capacity "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," capacity;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"get"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"key"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"has"),s("span",{style:{color:"#24292E"}},"(key)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"get"),s("span",{style:{color:"#24292E"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 重新set，相当于更新到 map最后")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"delete"),s("span",{style:{color:"#24292E"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"set"),s("span",{style:{color:"#24292E"}},"(key, value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"set"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"key"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 如果有，就删了再赋值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"has"),s("span",{style:{color:"#24292E"}},"(key)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"delete"),s("span",{style:{color:"#24292E"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"set"),s("span",{style:{color:"#24292E"}},"(key, value);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 判断是不是容量超了，淘汰机制")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map.size "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".capacity) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"delete"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".map."),s("span",{style:{color:"#6F42C1"}},"keys"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"next"),s("span",{style:{color:"#24292E"}},"().value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])]),s("button",{class:"collapse"})],-1);function C(o,d,u,f,t,B){const p=c;return m(),y(p,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":a(()=>[h]),"main-header":a(()=>[n(o.$slots,"main-header")]),"main-header-after":a(()=>[n(o.$slots,"main-header-after")]),"main-nav":a(()=>[n(o.$slots,"main-nav")]),"main-content":a(()=>[n(o.$slots,"main-content")]),"main-content-after":a(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":a(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":a(()=>[n(o.$slots,"main-nav-after")]),comment:a(()=>[n(o.$slots,"comment")]),footer:a(()=>[n(o.$slots,"footer")]),aside:a(()=>[n(o.$slots,"aside")]),"aside-custom":a(()=>[n(o.$slots,"aside-custom")]),default:a(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const R=r(F,[["render",C]]);export{U as __pageData,R as default};
