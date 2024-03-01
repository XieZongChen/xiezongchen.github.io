import{_ as E}from"./ValaxyMain.vue_vue_type_style_index_0_lang-CJwb-j0h.js";import{_ as y,u as i,c as d,w as e,p as f,o as F,a as s,b as l,d as p,r as n,e as m}from"./app-t0WzKcrM.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-CJldLY-7.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CgAMBqk4.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CQr6kV1W.js";import"./index-C7yU5XnD.js";const w=JSON.parse('{"title":"剑指 offer 刷题总结","description":"","frontmatter":{"title":"剑指 offer 刷题总结","date":"2022-02-28T00:00:00.000Z","categories":["算法"],"tags":["算法","Leetcode"]},"headers":[{"level":3,"title":"重建二叉树","slug":"重建二叉树","link":"#重建二叉树","children":[]}],"relativePath":"pages/posts/getOffer.md","path":"/home/runner/work/xzc-blog/xzc-blog/pages/posts/getOffer.md","lastUpdated":1709257929000}'),a=JSON.parse('{"title":"剑指 offer 刷题总结","description":"","frontmatter":{"title":"剑指 offer 刷题总结","date":"2022-02-28T00:00:00.000Z","categories":["算法"],"tags":["算法","Leetcode"]},"headers":[{"level":3,"title":"重建二叉树","slug":"重建二叉树","link":"#重建二叉树","children":[]}],"relativePath":"pages/posts/getOffer.md","path":"/home/runner/work/xzc-blog/xzc-blog/pages/posts/getOffer.md","lastUpdated":1709257929000}'),A={name:"pages/posts/getOffer.md",data(){return{data:a,frontmatter:a.frontmatter,$frontmatter:a.frontmatter}},setup(){const o=i();o.meta.frontmatter=Object.assign(o.meta.frontmatter,a.frontmatter),f("pageData",a)}},D={id:"重建二叉树",tabindex:"-1"},g=s("div",{class:"language-javascript"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"buildTree"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"preorder"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"inorder"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// 使用 map 存放中序遍历，key 为每个值的下标")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," rootMap "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Map"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," i "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},"; i "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#E1E4E8"}}," inorder."),s("span",{style:{color:"#79B8FF"}},"length"),s("span",{style:{color:"#E1E4E8"}},"; i"),s("span",{style:{color:"#F97583"}},"++"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    rootMap."),s("span",{style:{color:"#B392F0"}},"set"),s("span",{style:{color:"#E1E4E8"}},"(inorder[i], i);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//递归函数的三个参数分别对应：先序中根节点位置，中序中的左边界，中序中的右边界")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"root"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"left"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"right"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 左右边界会逐渐向中间靠拢，所以当左边界超出右边界，说明已经完成")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (left "),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}}," right) "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 从先序中获取当前根节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," node "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"TreeNode"),s("span",{style:{color:"#E1E4E8"}},"(preorder[root]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 拿到当前根节点在中序遍历中的位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," site "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," rootMap."),s("span",{style:{color:"#B392F0"}},"get"),s("span",{style:{color:"#E1E4E8"}},"(preorder[root]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 递归左子树")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    node.left "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}},"(root "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", left, site "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 递归右子树，根节点位置：root + 左子树节点数量 + 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    node.right "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}},"(root "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," (site "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," left) "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", site "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", right);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 返回拼接好的树节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," node;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", inorder."),s("span",{style:{color:"#79B8FF"}},"length"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"};")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"buildTree"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"preorder"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"inorder"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// 使用 map 存放中序遍历，key 为每个值的下标")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," rootMap "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Map"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," i "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"; i "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}}," inorder."),s("span",{style:{color:"#005CC5"}},"length"),s("span",{style:{color:"#24292E"}},"; i"),s("span",{style:{color:"#D73A49"}},"++"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    rootMap."),s("span",{style:{color:"#6F42C1"}},"set"),s("span",{style:{color:"#24292E"}},"(inorder[i], i);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//递归函数的三个参数分别对应：先序中根节点位置，中序中的左边界，中序中的右边界")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"root"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"left"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"right"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 左右边界会逐渐向中间靠拢，所以当左边界超出右边界，说明已经完成")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (left "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," right) "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 从先序中获取当前根节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," node "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"TreeNode"),s("span",{style:{color:"#24292E"}},"(preorder[root]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 拿到当前根节点在中序遍历中的位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," site "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," rootMap."),s("span",{style:{color:"#6F42C1"}},"get"),s("span",{style:{color:"#24292E"}},"(preorder[root]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 递归左子树")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    node.left "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}},"(root "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", left, site "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 递归右子树，根节点位置：root + 左子树节点数量 + 1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    node.right "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}},"(root "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," (site "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," left) "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", site "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", right);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 返回拼接好的树节点")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," node;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", inorder."),s("span",{style:{color:"#005CC5"}},"length"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"};")])])]),s("button",{class:"collapse"})],-1);function h(o,u,C,B,t,b){const r=m,c=E;return F(),d(c,{frontmatter:t.frontmatter,data:t.data},{"main-content-md":e(()=>[s("h3",D,[l("重建二叉树 "),p(r,{class:"header-anchor",href:"#重建二叉树","aria-label":'Permalink to "重建二叉树"'},{default:e(()=>[l("​")]),_:1})]),s("p",null,[l("输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。"),p(r,{href:"https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/",target:"_blank",rel:"noreferrer"},{default:e(()=>[l("Leetcode 剑指 offer 07")]),_:1})]),g]),"main-header":e(()=>[n(o.$slots,"main-header")]),"main-header-after":e(()=>[n(o.$slots,"main-header-after")]),"main-nav":e(()=>[n(o.$slots,"main-nav")]),"main-content":e(()=>[n(o.$slots,"main-content")]),"main-content-after":e(()=>[n(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(o.$slots,"main-nav-after")]),comment:e(()=>[n(o.$slots,"comment")]),footer:e(()=>[n(o.$slots,"footer")]),aside:e(()=>[n(o.$slots,"aside")]),"aside-custom":e(()=>[n(o.$slots,"aside-custom")]),default:e(()=>[n(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const N=y(A,[["render",h]]);export{w as __pageData,N as default};
