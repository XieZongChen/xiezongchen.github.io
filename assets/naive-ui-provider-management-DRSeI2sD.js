import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CJwb-j0h.js";import{_ as E,u as y,c as d,w as e,p as m,o as v,a as s,b as l,d as p,r as o,e as u}from"./app-t0WzKcrM.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CJldLY-7.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CgAMBqk4.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQr6kV1W.js";import"./index-C7yU5XnD.js";const x=JSON.parse('{"title":"Naive-UI provider management（Naive-UI 统一管理 provider 封装）","description":"","frontmatter":{"title":"Naive-UI provider management（Naive-UI 统一管理 provider 封装）","date":"2021-07-11T00:00:00.000Z","categories":["Vue"],"tags":["Vue","Naive-UI"]},"headers":[{"level":2,"title":"Preface（前言）","slug":"preface-前言","link":"#preface-前言","children":[]},{"level":2,"title":"Encapsulation（封装）","slug":"encapsulation-封装","link":"#encapsulation-封装","children":[]},{"level":2,"title":"Use（使用）","slug":"use-使用","link":"#use-使用","children":[]}],"relativePath":"pages/posts/naive-ui-provider-management.md","path":"/home/runner/work/xzc-blog/xzc-blog/pages/posts/naive-ui-provider-management.md","lastUpdated":1709257929000}'),a=JSON.parse('{"title":"Naive-UI provider management（Naive-UI 统一管理 provider 封装）","description":"","frontmatter":{"title":"Naive-UI provider management（Naive-UI 统一管理 provider 封装）","date":"2021-07-11T00:00:00.000Z","categories":["Vue"],"tags":["Vue","Naive-UI"]},"headers":[{"level":2,"title":"Preface（前言）","slug":"preface-前言","link":"#preface-前言","children":[]},{"level":2,"title":"Encapsulation（封装）","slug":"encapsulation-封装","link":"#encapsulation-封装","children":[]},{"level":2,"title":"Use（使用）","slug":"use-使用","link":"#use-使用","children":[]}],"relativePath":"pages/posts/naive-ui-provider-management.md","path":"/home/runner/work/xzc-blog/xzc-blog/pages/posts/naive-ui-provider-management.md","lastUpdated":1709257929000}'),f={name:"pages/posts/naive-ui-provider-management.md",data(){return{data:a,frontmatter:a.frontmatter,$frontmatter:a.frontmatter}},setup(){const n=y();n.meta.frontmatter=Object.assign(n.meta.frontmatter,a.frontmatter),m("pageData",a)}},g={id:"preface-前言",tabindex:"-1"},h=s("p",null,"You can encapsulate a component to manage all NaiveUI providers in the project, which will make the code clear and easy to understand.",-1),A=s("p",null,"你可以在项目中封装一个统一管理所有 NaiveUI provider 的组件，这样会使代码清晰易懂。",-1),D={id:"encapsulation-封装",tabindex:"-1"},F=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"// in app-provider.vue")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"n-loading-bar-provider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"n-message-provider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"n-dialog-provider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"slot"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"slot"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"n-dialog-provider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"n-message-provider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"n-loading-bar-provider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { defineComponent } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"vue"'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  NMessageProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  NLoadingBarProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  NDialogProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"} "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"naive-ui"'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineComponent"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  name: "),s("span",{style:{color:"#9ECBFF"}},'"AppProvider"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    NMessageProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    NLoadingBarProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    NDialogProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"// in app-provider.vue")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"n-loading-bar-provider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"n-message-provider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"n-dialog-provider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"slot"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"slot"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"n-dialog-provider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"n-message-provider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"n-loading-bar-provider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { defineComponent } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"vue"'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  NMessageProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  NLoadingBarProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  NDialogProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"} "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"naive-ui"'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineComponent"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  name: "),s("span",{style:{color:"#032F62"}},'"AppProvider"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    NMessageProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    NLoadingBarProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    NDialogProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1),P={id:"use-使用",tabindex:"-1"},N=s("div",{class:"language-vue"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"// in App.vue")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AppProvider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"router-view"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"router-view"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AppProvider"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { defineComponent } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"vue"'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," AppProvider "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"@/components/app-provider.vue"'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"export"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"default"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineComponent"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  name: "),s("span",{style:{color:"#9ECBFF"}},'"App"'),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    AppProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"// in App.vue")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AppProvider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"router-view"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"router-view"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AppProvider"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { defineComponent } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"vue"'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," AppProvider "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"@/components/app-provider.vue"'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"default"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineComponent"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  name: "),s("span",{style:{color:"#032F62"}},'"App"'),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  components: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    AppProvider,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])]),s("button",{class:"collapse"})],-1);function b(n,_,k,C,r,B){const t=u,c=i;return v(),d(c,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":e(()=>[s("h2",g,[l("Preface（前言） "),p(t,{class:"header-anchor",href:"#preface-前言","aria-label":'Permalink to "Preface（前言）"'},{default:e(()=>[l("​")]),_:1})]),h,A,s("h2",D,[l("Encapsulation（封装） "),p(t,{class:"header-anchor",href:"#encapsulation-封装","aria-label":'Permalink to "Encapsulation（封装）"'},{default:e(()=>[l("​")]),_:1})]),F,s("h2",P,[l("Use（使用） "),p(t,{class:"header-anchor",href:"#use-使用","aria-label":'Permalink to "Use（使用）"'},{default:e(()=>[l("​")]),_:1})]),N]),"main-header":e(()=>[o(n.$slots,"main-header")]),"main-header-after":e(()=>[o(n.$slots,"main-header-after")]),"main-nav":e(()=>[o(n.$slots,"main-nav")]),"main-content":e(()=>[o(n.$slots,"main-content")]),"main-content-after":e(()=>[o(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(n.$slots,"main-nav-after")]),comment:e(()=>[o(n.$slots,"comment")]),footer:e(()=>[o(n.$slots,"footer")]),aside:e(()=>[o(n.$slots,"aside")]),"aside-custom":e(()=>[o(n.$slots,"aside-custom")]),default:e(()=>[o(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const L=E(f,[["render",b]]);export{x as __pageData,L as default};
