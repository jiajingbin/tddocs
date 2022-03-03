"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[4598],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3,sidebar_label:"\u547d\u4ee4\u884c\u7a0b\u5e8f taos"},s="\u4f7f\u7528 TDengine",u={unversionedId:"getting-started/start-use",id:"version-2.4/getting-started/start-use",title:"\u4f7f\u7528 TDengine",description:"\u8fdb\u5165\u547d\u4ee4\u884c",source:"@site/versioned_docs/version-2.4/getting-started/start-use.md",sourceDirName:"getting-started",slug:"/getting-started/start-use",permalink:"/tddocs/docs/getting-started/start-use",editUrl:"https://github.com/dingbo8128/tddocs/edit/main/versioned_docs/version-2.4/getting-started/start-use.md",tags:[],version:"2.4",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u547d\u4ee4\u884c\u7a0b\u5e8f taos"},sidebar:"tutorialSidebar",previous:{title:"\u8f7b\u677e\u542f\u52a8",permalink:"/tddocs/docs/getting-started/start-tdengine"},next:{title:"\u6781\u901f\u4f53\u9a8c",permalink:"/tddocs/docs/getting-started/quick-exprience"}},c={},p=[{value:"\u8fdb\u5165\u547d\u4ee4\u884c",id:"\u8fdb\u5165\u547d\u4ee4\u884c",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"\u8fd0\u884c SQL \u547d\u4ee4\u811a\u672c",id:"\u8fd0\u884c-sql-\u547d\u4ee4\u811a\u672c",level:2},{value:"taos shell \u5c0f\u6280\u5de7",id:"taos-shell-\u5c0f\u6280\u5de7",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f7f\u7528-tdengine"},"\u4f7f\u7528 TDengine"),(0,l.kt)("h2",{id:"\u8fdb\u5165\u547d\u4ee4\u884c"},"\u8fdb\u5165\u547d\u4ee4\u884c"),(0,l.kt)("p",null,"\u6267\u884c TDengine \u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u60a8\u53ea\u8981\u5728 Linux \u7ec8\u7aef\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"taos")," \u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"taos\n")),(0,l.kt)("p",null,"\u5982\u679c\u8fde\u63a5\u670d\u52a1\u6210\u529f\uff0c\u5c06\u4f1a\u6253\u5370\u51fa\u6b22\u8fce\u6d88\u606f\u548c\u7248\u672c\u4fe1\u606f\u3002\u5982\u679c\u5931\u8d25\uff0c\u5219\u4f1a\u6253\u5370\u9519\u8bef\u6d88\u606f\u51fa\u6765\uff08\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://www.taosdata.com/cn/documentation/faq/"},"FAQ")," \u6765\u89e3\u51b3\u7ec8\u7aef\u8fde\u63a5\u670d\u52a1\u7aef\u5931\u8d25\u7684\u95ee\u9898\uff09\u3002\u5ba2\u6237\u7aef\u7684\u63d0\u793a\u7b26\u53f7\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"taos>\n")),(0,l.kt)("p",null,"\u5728 TDengine \u5ba2\u6237\u7aef\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SQL \u547d\u4ee4\u6765\u521b\u5efa/\u5220\u9664\u6570\u636e\u5e93\u3001\u8868\u7b49\uff0c\u5e76\u8fdb\u884c\u63d2\u5165\u67e5\u8be2\u64cd\u4f5c\u3002\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u7684 SQL \u8bed\u53e5\u9700\u8981\u4ee5\u5206\u53f7\u7ed3\u675f\u6765\u8fd0\u884c\u3002\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"create database demo;\nuse demo;\ncreate table t (ts timestamp, speed int);\ninsert into t values ('2019-07-15 00:00:00', 10);\ninsert into t values ('2019-07-15 01:00:00', 20);\nselect * from t;\n           ts            |    speed    |\n========================================\n 2019-07-15 00:00:00.000 |          10 |\n 2019-07-15 01:00:00.000 |          20 |\nQuery OK, 2 row(s) in set (0.003128s)\n")),(0,l.kt)("p",null,"\u9664\u6267\u884c SQL \u8bed\u53e5\u5916\uff0c\u7cfb\u7edf\u7ba1\u7406\u5458\u8fd8\u53ef\u4ee5\u4ece TDengine \u5ba2\u6237\u7aef\u8fdb\u884c\u68c0\u67e5\u7cfb\u7edf\u8fd0\u884c\u72b6\u6001\u3001\u6dfb\u52a0\u5220\u9664\u7528\u6237\u8d26\u53f7\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,l.kt)("p",null,"\u60a8\u53ef\u901a\u8fc7\u914d\u7f6e\u547d\u4ee4\u884c\u53c2\u6570\u6765\u6539\u53d8 TDengine \u5ba2\u6237\u7aef\u7684\u884c\u4e3a\u3002\u4ee5\u4e0b\u4e3a\u5e38\u7528\u7684\u51e0\u4e2a\u547d\u4ee4\u884c\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"-c, --config-dir: \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/taos")),(0,l.kt)("li",{parentName:"ul"},"-h, --host: \u6307\u5b9a\u670d\u52a1\u7684 FQDN \u5730\u5740\u6216 IP \u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\u8fde\u63a5\u672c\u5730\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"-s, --commands: \u5728\u4e0d\u8fdb\u5165\u7ec8\u7aef\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c TDengine \u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"-u, --user: \u8fde\u63a5 TDengine \u670d\u52a1\u7aef\u7684\u7528\u6237\u540d\uff0c\u7f3a\u7701\u4e3a root"),(0,l.kt)("li",{parentName:"ul"},"-p, --password: \u8fde\u63a5 TDengine \u670d\u52a1\u7aef\u7684\u5bc6\u7801\uff0c\u7f3a\u7701\u4e3a taosdata"),(0,l.kt)("li",{parentName:"ul"},"-?, --help: \u6253\u5370\u51fa\u6240\u6709\u547d\u4ee4\u884c\u53c2\u6570")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'taos -h h1.taos.com -s "use db; show tables;"\n')),(0,l.kt)("h2",{id:"\u8fd0\u884c-sql-\u547d\u4ee4\u811a\u672c"},"\u8fd0\u884c SQL \u547d\u4ee4\u811a\u672c"),(0,l.kt)("p",null,"TDengine \u7ec8\u7aef\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," \u547d\u4ee4\u6765\u8fd0\u884c SQL \u547d\u4ee4\u811a\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"taos> source <filename>;\n")),(0,l.kt)("h2",{id:"taos-shell-\u5c0f\u6280\u5de7"},"taos shell \u5c0f\u6280\u5de7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u5149\u6807\u952e\u67e5\u770b\u5386\u53f2\u8f93\u5165\u7684\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u7528\u6237\u5bc6\u7801\uff1a\u5728 shell \u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"alter user")," \u547d\u4ee4\uff0c\u7f3a\u7701\u5bc6\u7801\u4e3a taosdata"),(0,l.kt)("li",{parentName:"ul"},"ctrl+c \u4e2d\u6b62\u6b63\u5728\u8fdb\u884c\u4e2d\u7684\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"RESET QUERY CACHE")," \u53ef\u6e05\u9664\u672c\u5730\u7f13\u5b58\u7684\u8868 schema"),(0,l.kt)("li",{parentName:"ul"},"\u6279\u91cf\u6267\u884c SQL \u8bed\u53e5\u3002\u53ef\u4ee5\u5c06\u4e00\u7cfb\u5217\u7684 shell \u547d\u4ee4\uff08\u4ee5\u82f1\u6587 ; \u7ed3\u5c3e\uff0c\u6bcf\u4e2a SQL \u8bed\u53e5\u4e3a\u4e00\u884c\uff09\u6309\u884c\u5b58\u653e\u5728\u6587\u4ef6\u91cc\uff0c\u5728 shell \u91cc\u6267\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"source <file-name>")," \u81ea\u52a8\u6267\u884c\u8be5\u6587\u4ef6\u91cc\u6240\u6709\u7684 SQL \u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165 q \u56de\u8f66\uff0c\u9000\u51fa taos shell")),(0,l.kt)("p",null,"\u8bf7\u8df3\u8f6c\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://www.taosdata.com/cn/documentation/connector"},"\u8fde\u63a5\u5668")," \u67e5\u770b\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\u3002"),(0,l.kt)("script",{src:"/wp-includes/js/quick-start.js?v=1"}))}m.isMDXComponent=!0}}]);