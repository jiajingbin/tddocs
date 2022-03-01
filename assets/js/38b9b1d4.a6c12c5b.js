"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[4349],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(c,".").concat(m)]||d[m]||i[m]||l;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7651:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],u={sidebar_position:7},c="RESTful Connector",p={unversionedId:"reference/connector/restful",id:"reference/connector/restful",title:"RESTful Connector",description:"\u4e3a\u652f\u6301\u5404\u79cd\u4e0d\u540c\u7c7b\u578b\u5e73\u53f0\u7684\u5f00\u53d1\uff0cTDengine \u63d0\u4f9b\u7b26\u5408 REST \u8bbe\u8ba1\u6807\u51c6\u7684 API\uff0c\u5373 RESTful API\u3002\u4e3a\u6700\u5927\u7a0b\u5ea6\u964d\u4f4e\u5b66\u4e60\u6210\u672c\uff0c\u4e0d\u540c\u4e8e\u5176\u4ed6\u6570\u636e\u5e93 RESTful API \u7684\u8bbe\u8ba1\u65b9\u6cd5\uff0cTDengine \u76f4\u63a5\u901a\u8fc7 HTTP POST \u8bf7\u6c42 BODY \u4e2d\u5305\u542b\u7684 SQL \u8bed\u53e5\u6765\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u4ec5\u9700\u8981\u4e00\u4e2a URL\u3002RESTful \u8fde\u63a5\u5668\u7684\u4f7f\u7528\u53c2\u89c1\u89c6\u9891\u6559\u7a0b\u3002",source:"@site/docs/reference/connector/restful.mdx",sourceDirName:"reference/connector",slug:"/reference/connector/restful",permalink:"/tddocs/docs/reference/connector/restful",editUrl:"https://github.com/dingbo8128/tddocs/edit/main/docs/reference/connector/restful.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"CS Connector",permalink:"/tddocs/docs/reference/connector/cshapr"},next:{title:"Rust Connector",permalink:"/tddocs/docs/reference/connector/rust"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:3},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[],level:3},{value:"RESTful \u8fde\u63a5\u5668\u7684\u4f7f\u7528",id:"restful-\u8fde\u63a5\u5668\u7684\u4f7f\u7528",children:[{value:"HTTP \u8bf7\u6c42\u683c\u5f0f",id:"http-\u8bf7\u6c42\u683c\u5f0f",children:[],level:4}],level:3},{value:"HTTP \u8fd4\u56de\u683c\u5f0f",id:"http-\u8fd4\u56de\u683c\u5f0f",children:[],level:3},{value:"\u81ea\u5b9a\u4e49\u6388\u6743\u7801",id:"\u81ea\u5b9a\u4e49\u6388\u6743\u7801",children:[],level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[],level:3},{value:"\u5176\u4ed6\u7528\u6cd5",id:"\u5176\u4ed6\u7528\u6cd5",children:[{value:"\u7ed3\u679c\u96c6\u91c7\u7528 Unix \u65f6\u95f4\u6233",id:"\u7ed3\u679c\u96c6\u91c7\u7528-unix-\u65f6\u95f4\u6233",children:[],level:4},{value:"\u7ed3\u679c\u96c6\u91c7\u7528 UTC \u65f6\u95f4\u5b57\u7b26\u4e32",id:"\u7ed3\u679c\u96c6\u91c7\u7528-utc-\u65f6\u95f4\u5b57\u7b26\u4e32",children:[],level:4}],level:3},{value:"\u91cd\u8981\u914d\u7f6e\u9879",id:"\u91cd\u8981\u914d\u7f6e\u9879",children:[],level:3},{value:'<a class="anchor" id="csharp"></a>CSharp Connector',id:"csharp-connector",children:[{value:"\u5b89\u88c5\u51c6\u5907",id:"\u5b89\u88c5\u51c6\u5907",children:[],level:3},{value:"\u793a\u4f8b\u7a0b\u5e8f",id:"\u793a\u4f8b\u7a0b\u5e8f",children:[],level:3},{value:"\u5b89\u88c5\u9a8c\u8bc1",id:"\u5b89\u88c5\u9a8c\u8bc1",children:[],level:3}],level:2}],i={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"restful-connector"},"RESTful Connector"),(0,l.kt)("p",null,"\u4e3a\u652f\u6301\u5404\u79cd\u4e0d\u540c\u7c7b\u578b\u5e73\u53f0\u7684\u5f00\u53d1\uff0cTDengine \u63d0\u4f9b\u7b26\u5408 REST \u8bbe\u8ba1\u6807\u51c6\u7684 API\uff0c\u5373 RESTful API\u3002\u4e3a\u6700\u5927\u7a0b\u5ea6\u964d\u4f4e\u5b66\u4e60\u6210\u672c\uff0c\u4e0d\u540c\u4e8e\u5176\u4ed6\u6570\u636e\u5e93 RESTful API \u7684\u8bbe\u8ba1\u65b9\u6cd5\uff0cTDengine \u76f4\u63a5\u901a\u8fc7 HTTP POST \u8bf7\u6c42 BODY \u4e2d\u5305\u542b\u7684 SQL \u8bed\u53e5\u6765\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u4ec5\u9700\u8981\u4e00\u4e2a URL\u3002RESTful \u8fde\u63a5\u5668\u7684\u4f7f\u7528\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://www.taosdata.com/blog/2020/11/11/1965.html"},"\u89c6\u9891\u6559\u7a0b"),"\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u4e0e\u539f\u751f\u8fde\u63a5\u5668\u7684\u4e00\u4e2a\u533a\u522b\u662f\uff0cRESTful \u63a5\u53e3\u662f\u65e0\u72b6\u6001\u7684\uff0c\u56e0\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"USE db_name")," \u6307\u4ee4\u6ca1\u6709\u6548\u679c\uff0c\u6240\u6709\u5bf9\u8868\u540d\u3001\u8d85\u7ea7\u8868\u540d\u7684\u5f15\u7528\u90fd\u9700\u8981\u6307\u5b9a\u6570\u636e\u5e93\u540d\u524d\u7f00\u3002\uff08\u4ece 2.2.0.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5728 RESTful url \u4e2d\u6307\u5b9a db_name\uff0c\u8fd9\u65f6\u5982\u679c SQL \u8bed\u53e5\u4e2d\u6ca1\u6709\u6307\u5b9a\u6570\u636e\u5e93\u540d\u524d\u7f00\u7684\u8bdd\uff0c\u4f1a\u4f7f\u7528 url \u4e2d\u6307\u5b9a\u7684\u8fd9\u4e2a db_name\u3002\u4ece 2.4.0.0 \u7248\u672c\u5f00\u59cb\uff0cRESTful \u9ed8\u8ba4\u6709 taosAdapter \u63d0\u4f9b\uff0c\u8981\u6c42\u5fc5\u987b\u5728 url \u4e2d\u6307\u5b9a db_name\u3002\uff09"),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"RESTful \u63a5\u53e3\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55 TDengine \u7684\u5e93\uff0c\u56e0\u6b64\u5ba2\u6237\u7aef\u4e0d\u9700\u8981\u5b89\u88c5\u4efb\u4f55 TDengine \u7684\u5e93\uff0c\u53ea\u8981\u5ba2\u6237\u7aef\u7684\u5f00\u53d1\u8bed\u8a00\u652f\u6301 HTTP \u534f\u8bae\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u5728\u5df2\u7ecf\u5b89\u88c5 TDengine \u670d\u52a1\u5668\u7aef\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ee5 Ubuntu \u73af\u5883\u4e2d\u4f7f\u7528 curl \u5de5\u5177\uff08\u786e\u8ba4\u5df2\u7ecf\u5b89\u88c5\uff09\u6765\u9a8c\u8bc1 RESTful \u63a5\u53e3\u7684\u6b63\u5e38\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u793a\u4f8b\u662f\u5217\u51fa\u6240\u6709\u7684\u6570\u636e\u5e93\uff0c\u8bf7\u628a h1.taosdata.com \u548c 6041\uff08\u7f3a\u7701\u503c\uff09\u66ff\u6362\u4e3a\u5b9e\u9645\u8fd0\u884c\u7684 TDengine \u670d\u52a1 fqdn \u548c\u7aef\u53e3\u53f7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"curl -H 'Authorization: Basic cm9vdDp0YW9zZGF0YQ==' -d 'show databases;'\nh1.taosdata.com:6041/rest/sql\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\u7ed3\u679c\u5982\u4e0b\u8868\u793a\u9a8c\u8bc1\u901a\u8fc7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "head": [\n    "name",\n    "created_time",\n    "ntables",\n    "vgroups",\n    "replica",\n    "quorum",\n    "days",\n    "keep1,keep2,keep(D)",\n    "cache(MB)",\n    "blocks",\n    "minrows",\n    "maxrows",\n    "wallevel",\n    "fsync",\n    "comp",\n    "precision",\n    "status"\n  ],\n  "data": [\n    [\n      "log",\n      "2020-09-02 17:23:00.039",\n      4,\n      1,\n      1,\n      1,\n      10,\n      "30,30,30",\n      1,\n      3,\n      100,\n      4096,\n      1,\n      3000,\n      2,\n      "us",\n      "ready"\n    ]\n  ],\n  "rows": 1\n}\n')),(0,l.kt)("h3",{id:"restful-\u8fde\u63a5\u5668\u7684\u4f7f\u7528"},"RESTful \u8fde\u63a5\u5668\u7684\u4f7f\u7528"),(0,l.kt)("h4",{id:"http-\u8bf7\u6c42\u683c\u5f0f"},"HTTP \u8bf7\u6c42\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://<fqdn>:<port>/rest/sql/[db_name]\n")),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fqnd: \u96c6\u7fa4\u4e2d\u7684\u4efb\u4e00\u53f0\u4e3b\u673a FQDN \u6216 IP \u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"port: \u914d\u7f6e\u6587\u4ef6\u4e2d httpPort \u914d\u7f6e\u9879\uff0c\u7f3a\u7701\u4e3a 6041"),(0,l.kt)("li",{parentName:"ul"},"db_name: \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a\u672c\u6b21\u6240\u6267\u884c\u7684 SQL \u8bed\u53e5\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u5e93\u540d\u3002\uff08\u4ece 2.2.0.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff09")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://h1.taos.com:6041/rest/sql/test"},"http://h1.taos.com:6041/rest/sql/test")," \u662f\u6307\u5411\u5730\u5740\u4e3a h1.taos.com:6041 \u7684 url\uff0c\u5e76\u5c06\u9ed8\u8ba4\u4f7f\u7528\u7684\u6570\u636e\u5e93\u5e93\u540d\u8bbe\u7f6e\u4e3a test\u3002"),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42\u7684 Header \u91cc\u9700\u5e26\u6709\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\uff0cTDengine \u652f\u6301 Basic \u8ba4\u8bc1\u4e0e\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u4e24\u79cd\u673a\u5236\uff0c\u540e\u7eed\u7248\u672c\u5c06\u63d0\u4f9b\u6807\u51c6\u5b89\u5168\u7684\u6570\u5b57\u7b7e\u540d\u673a\u5236\u6765\u505a\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\u5982\u4e0b\u6240\u793a\uff08token \u7a0d\u540e\u4ecb\u7ecd\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Authorization: Taosd <TOKEN>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Basic \u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f\u5982\u4e0b\u6240\u793a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Authorization: Basic <TOKEN>\n")),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42\u7684 BODY \u91cc\u5c31\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 SQL \u8bed\u53e5\uff0cSQL \u8bed\u53e5\u4e2d\u7684\u6570\u636e\u8868\u5e94\u63d0\u4f9b\u6570\u636e\u5e93\u524d\u7f00\uff0c\u4f8b\u5982 \\<db_name>.\\<tb_name>\u3002\u5982\u679c\u8868\u540d\u4e0d\u5e26\u6570\u636e\u5e93\u524d\u7f00\uff0c\u53c8\u6ca1\u6709\u5728 url \u4e2d\u6307\u5b9a\u6570\u636e\u5e93\u540d\u7684\u8bdd\uff0c\u7cfb\u7edf\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\u56e0\u4e3a HTTP \u6a21\u5757\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8f6c\u53d1\uff0c\u6ca1\u6709\u5f53\u524d DB \u7684\u6982\u5ff5\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 curl \u901a\u8fc7\u81ea\u5b9a\u4e49\u8eab\u4efd\u8ba4\u8bc1\u65b9\u5f0f\u6765\u53d1\u8d77\u4e00\u4e2a HTTP Request\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: Basic <TOKEN>' -d '<SQL>' <ip>:<PORT>/rest/sql/[db_name]\n")),(0,l.kt)("p",null,"\u6216\u8005"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -u username:password -d '<SQL>' <ip>:<PORT>/rest/sql/[db_name]\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"TOKEN")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"{username}:{password}")," \u7ecf\u8fc7 Base64 \u7f16\u7801\u4e4b\u540e\u7684\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"root:taosdata")," \u7f16\u7801\u540e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"cm9vdDp0YW9zZGF0YQ==")),(0,l.kt)("h3",{id:"http-\u8fd4\u56de\u683c\u5f0f"},"HTTP \u8fd4\u56de\u683c\u5f0f"),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\u4e3a JSON \u683c\u5f0f\uff0c\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "succ",\n    "head": ["ts","current", \u2026],\n    "column_meta": [["ts",9,8],["current",6,4], \u2026],\n    "data": [\n        ["2018-10-03 14:38:05.000", 10.3, \u2026],\n        ["2018-10-03 14:38:15.000", 12.6, \u2026]\n    ],\n    "rows": 2\n}\n')),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"status: \u544a\u77e5\u64cd\u4f5c\u7ed3\u679c\u662f\u6210\u529f\u8fd8\u662f\u5931\u8d25\u3002"),(0,l.kt)("li",{parentName:"ul"},"head: \u8868\u7684\u5b9a\u4e49\uff0c\u5982\u679c\u4e0d\u8fd4\u56de\u7ed3\u679c\u96c6\uff0c\u5219\u4ec5\u6709\u4e00\u5217 \u201caffected_rows\u201d\u3002\uff08\u4ece 2.0.17.0 \u7248\u672c\u5f00\u59cb\uff0c\u5efa\u8bae\u4e0d\u8981\u4f9d\u8d56 head \u8fd4\u56de\u503c\u6765\u5224\u65ad\u6570\u636e\u5217\u7c7b\u578b\uff0c\u800c\u63a8\u8350\u4f7f\u7528 column_meta\u3002\u5728\u672a\u6765\u7248\u672c\u4e2d\uff0c\u6709\u53ef\u80fd\u4f1a\u4ece\u8fd4\u56de\u503c\u4e2d\u53bb\u6389 head \u8fd9\u4e00\u9879\u3002\uff09"),(0,l.kt)("li",{parentName:"ul"},"column_meta: \u4ece 2.0.17.0 \u7248\u672c\u5f00\u59cb\uff0c\u8fd4\u56de\u503c\u4e2d\u589e\u52a0\u8fd9\u4e00\u9879\u6765\u8bf4\u660e data \u91cc\u6bcf\u4e00\u5217\u7684\u6570\u636e\u7c7b\u578b\u3002\u5177\u4f53\u6bcf\u4e2a\u5217\u4f1a\u7528\u4e09\u4e2a\u503c\u6765\u8bf4\u660e\uff0c\u5206\u522b\u4e3a\uff1a\u5217\u540d\u3001\u5217\u7c7b\u578b\u3001\u7c7b\u578b\u957f\u5ea6\u3002\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},'["current",6,4]'),"\u8868\u793a\u5217\u540d\u4e3a\u201ccurrent\u201d\uff1b\u5217\u7c7b\u578b\u4e3a 6\uff0c\u4e5f\u5373 float \u7c7b\u578b\uff1b\u7c7b\u578b\u957f\u5ea6\u4e3a 4\uff0c\u4e5f\u5373\u5bf9\u5e94 4 \u4e2a\u5b57\u8282\u8868\u793a\u7684 float\u3002\u5982\u679c\u5217\u7c7b\u578b\u4e3a binary \u6216 nchar\uff0c\u5219\u7c7b\u578b\u957f\u5ea6\u8868\u793a\u8be5\u5217\u6700\u591a\u53ef\u4ee5\u4fdd\u5b58\u7684\u5185\u5bb9\u957f\u5ea6\uff0c\u800c\u4e0d\u662f\u672c\u6b21\u8fd4\u56de\u503c\u4e2d\u7684\u5177\u4f53\u6570\u636e\u957f\u5ea6\u3002\u5f53\u5217\u7c7b\u578b\u662f nchar \u7684\u65f6\u5019\uff0c\u5176\u7c7b\u578b\u957f\u5ea6\u8868\u793a\u53ef\u4ee5\u4fdd\u5b58\u7684 unicode \u5b57\u7b26\u6570\u91cf\uff0c\u800c\u4e0d\u662f bytes\u3002"),(0,l.kt)("li",{parentName:"ul"},"data: \u5177\u4f53\u8fd4\u56de\u7684\u6570\u636e\uff0c\u4e00\u884c\u4e00\u884c\u7684\u5448\u73b0\uff0c\u5982\u679c\u4e0d\u8fd4\u56de\u7ed3\u679c\u96c6\uff0c\u90a3\u4e48\u5c31\u4ec5\u6709 [","[affected_rows]","]\u3002data \u4e2d\u6bcf\u4e00\u884c\u7684\u6570\u636e\u5217\u987a\u5e8f\uff0c\u4e0e column_meta \u4e2d\u63cf\u8ff0\u6570\u636e\u5217\u7684\u987a\u5e8f\u5b8c\u5168\u4e00\u81f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"rows: \u8868\u660e\u603b\u5171\u591a\u5c11\u884c\u6570\u636e\u3002")),(0,l.kt)("a",{class:"anchor",id:"column_meta"}),"column_meta \u4e2d\u7684\u5217\u7c7b\u578b\u8bf4\u660e\uff1a * 1\uff1aBOOL * 2\uff1aTINYINT * 3\uff1aSMALLINT * 4\uff1aINT * 5\uff1aBIGINT * 6\uff1aFLOAT * 7\uff1aDOUBLE * 8\uff1aBINARY * 9\uff1aTIMESTAMP * 10\uff1aNCHAR",(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6388\u6743\u7801"},"\u81ea\u5b9a\u4e49\u6388\u6743\u7801"),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42\u4e2d\u9700\u8981\u5e26\u6709\u6388\u6743\u7801 ",(0,l.kt)("inlineCode",{parentName:"p"},"<TOKEN>"),"\uff0c\u7528\u4e8e\u8eab\u4efd\u8bc6\u522b\u3002\u6388\u6743\u7801\u901a\u5e38\u7531\u7ba1\u7406\u5458\u63d0\u4f9b\uff0c\u53ef\u7b80\u5355\u7684\u901a\u8fc7\u53d1\u9001 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP GET")," \u8bf7\u6c42\u6765\u83b7\u53d6\u6388\u6743\u7801\uff0c\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<fqnd>:<port>/rest/login/<username>/<password>\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"fqdn")," \u662f TDengine \u6570\u636e\u5e93\u7684 fqdn \u6216 ip \u5730\u5740\uff0cport \u662f TDengine \u670d\u52a1\u7684\u7aef\u53e3\u53f7\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"username")," \u4e3a\u6570\u636e\u5e93\u7528\u6237\u540d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"password")," \u4e3a\u6570\u636e\u5e93\u5bc6\u7801\uff0c\u8fd4\u56de\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," \u683c\u5f0f\uff0c\u5404\u5b57\u6bb5\u542b\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"status\uff1a\u8bf7\u6c42\u7ed3\u679c\u7684\u6807\u5fd7\u4f4d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"code\uff1a\u8fd4\u56de\u503c\u4ee3\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"desc\uff1a\u6388\u6743\u7801"))),(0,l.kt)("p",null,"\u83b7\u53d6\u6388\u6743\u7801\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://192.168.0.1:6041/rest/login/root/taosdata\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "code": 0,\n  "desc": "/KfeAzX/f9na8qdtNZmtONryp201ma04bEl8LcvLUd7a8qdtNZmtONryp201ma04"\n}\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 demo \u5e93\u91cc\u67e5\u8be2\u8868 d1001 \u7684\u6240\u6709\u8bb0\u5f55\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: Basic cm9vdDp0YW9zZGF0YQ==' -d 'select * from demo.d1001' 192.168.0.1:6041/rest/sql\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "head": ["ts", "current", "voltage", "phase"],\n  "column_meta": [\n    ["ts", 9, 8],\n    ["current", 6, 4],\n    ["voltage", 4, 4],\n    ["phase", 6, 4]\n  ],\n  "data": [\n    ["2018-10-03 14:38:05.000", 10.3, 219, 0.31],\n    ["2018-10-03 14:38:15.000", 12.6, 218, 0.33]\n  ],\n  "rows": 2\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5e93 demo\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: Basic cm9vdDp0YW9zZGF0YQ==' -d 'create database demo' 192.168.0.1:6041/rest/sql\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "head": ["affected_rows"],\n  "column_meta": [["affected_rows", 4, 4]],\n  "data": [[1]],\n  "rows": 1\n}\n')),(0,l.kt)("h3",{id:"\u5176\u4ed6\u7528\u6cd5"},"\u5176\u4ed6\u7528\u6cd5"),(0,l.kt)("h4",{id:"\u7ed3\u679c\u96c6\u91c7\u7528-unix-\u65f6\u95f4\u6233"},"\u7ed3\u679c\u96c6\u91c7\u7528 Unix \u65f6\u95f4\u6233"),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42 URL \u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlt")," \u65f6\uff0c\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u65f6\u95f4\u6233\u5c06\u91c7\u7528 Unix \u65f6\u95f4\u6233\u683c\u5f0f\u8868\u793a\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authorization: Basic cm9vdDp0YW9zZGF0YQ==' -d 'select * from demo.d1001' 192.168.0.1:6041/rest/sqlt\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "head": ["ts", "current", "voltage", "phase"],\n  "column_meta": [\n    ["ts", 9, 8],\n    ["current", 6, 4],\n    ["voltage", 4, 4],\n    ["phase", 6, 4]\n  ],\n  "data": [\n    [1538548685000, 10.3, 219, 0.31],\n    [1538548695000, 12.6, 218, 0.33]\n  ],\n  "rows": 2\n}\n')),(0,l.kt)("h4",{id:"\u7ed3\u679c\u96c6\u91c7\u7528-utc-\u65f6\u95f4\u5b57\u7b26\u4e32"},"\u7ed3\u679c\u96c6\u91c7\u7528 UTC \u65f6\u95f4\u5b57\u7b26\u4e32"),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42 URL \u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlutc")," \u65f6\uff0c\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u65f6\u95f4\u6233\u5c06\u91c7\u7528 UTC \u65f6\u95f4\u5b57\u7b26\u4e32\u8868\u793a\uff0c\u4f8b\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  curl -H 'Authorization: Basic cm9vdDp0YW9zZGF0YQ==' -d 'select * from demo.t1' 192.168.0.1:6041/rest/sqlutc\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "succ",\n  "head": ["ts", "current", "voltage", "phase"],\n  "column_meta": [\n    ["ts", 9, 8],\n    ["current", 6, 4],\n    ["voltage", 4, 4],\n    ["phase", 6, 4]\n  ],\n  "data": [\n    ["2018-10-03T14:38:05.000+0800", 10.3, 219, 0.31],\n    ["2018-10-03T14:38:15.000+0800", 12.6, 218, 0.33]\n  ],\n  "rows": 2\n}\n')),(0,l.kt)("h3",{id:"\u91cd\u8981\u914d\u7f6e\u9879"},"\u91cd\u8981\u914d\u7f6e\u9879"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ec5\u5217\u51fa\u4e00\u4e9b\u4e0e RESTful \u63a5\u53e3\u6709\u5173\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u5176\u4ed6\u7cfb\u7edf\u53c2\u6570\u8bf7\u770b\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u8bf4\u660e\u3002\uff08\u6ce8\u610f\uff1a\u914d\u7f6e\u4fee\u6539\u540e\uff0c\u9700\u8981\u91cd\u542f taosd \u670d\u52a1\u624d\u80fd\u751f\u6548\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5916\u63d0\u4f9b RESTful \u670d\u52a1\u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u7ed1\u5b9a\u5230 6041\uff08\u5b9e\u9645\u53d6\u503c\u662f serverPort + 11\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 serverPort \u53c2\u6570\u7684\u8bbe\u7f6e\u6765\u4fee\u6539\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"httpMaxThreads: \u542f\u52a8\u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a 2\uff082.0.17.0 \u7248\u672c\u5f00\u59cb\uff0c\u9ed8\u8ba4\u503c\u6539\u4e3a CPU \u6838\u6570\u7684\u4e00\u534a\u5411\u4e0b\u53d6\u6574\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"restfulRowLimit: \u8fd4\u56de\u7ed3\u679c\u96c6\uff08JSON \u683c\u5f0f\uff09\u7684\u6700\u5927\u6761\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3a 10240\u3002"),(0,l.kt)("li",{parentName:"ul"},"httpEnableCompress: \u662f\u5426\u652f\u6301\u538b\u7f29\uff0c\u9ed8\u8ba4\u4e0d\u652f\u6301\uff0c\u76ee\u524d TDengine \u4ec5\u652f\u6301 gzip \u538b\u7f29\u683c\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"httpDebugFlag: \u65e5\u5fd7\u5f00\u5173\uff0c\u9ed8\u8ba4 131\u3002131\uff1a\u4ec5\u9519\u8bef\u548c\u62a5\u8b66\u4fe1\u606f\uff0c135\uff1a\u8c03\u8bd5\u4fe1\u606f\uff0c143\uff1a\u975e\u5e38\u8be6\u7ec6\u7684\u8c03\u8bd5\u4fe1\u606f\uff0c\u9ed8\u8ba4 131\u3002"),(0,l.kt)("li",{parentName:"ul"},"httpDbNameMandatory: \u662f\u5426\u5fc5\u987b\u5728 RESTful url \u4e2d\u6307\u5b9a\u9ed8\u8ba4\u7684\u6570\u636e\u5e93\u540d\u3002\u9ed8\u8ba4\u4e3a 0\uff0c\u5373\u5173\u95ed\u6b64\u68c0\u67e5\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a 1\uff0c\u90a3\u4e48\u6bcf\u4e2a RESTful url \u4e2d\u90fd\u5fc5\u987b\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u6570\u636e\u5e93\u540d\uff0c\u5426\u5219\u65e0\u8bba\u6b64\u65f6\u6267\u884c\u7684 SQL \u8bed\u53e5\u662f\u5426\u9700\u8981\u6307\u5b9a\u6570\u636e\u5e93\uff0c\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6267\u884c\u9519\u8bef\uff0c\u62d2\u7edd\u6267\u884c\u6b64 SQL \u8bed\u53e5\u3002")),(0,l.kt)("h2",{id:"csharp-connector"},(0,l.kt)("a",{class:"anchor",id:"csharp"}),"CSharp Connector"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"C#\u8fde\u63a5\u5668\u652f\u6301\u7684\u7cfb\u7edf\u6709\uff1aLinux 64/Windows x64/Windows x86")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"C#\u8fde\u63a5\u5668\u73b0\u5728\u4e5f\u652f\u6301\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TDengine.Connector/"},"Nuget \u4e0b\u8f7d\u5f15\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 Windows \u7cfb\u7edf\u4e0a\uff0cC#\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528 TDengine \u7684\u539f\u751f C \u63a5\u53e3\u6765\u6267\u884c\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5c\uff0c\u540e\u7eed\u7248\u672c\u5c06\u63d0\u4f9b ORM\uff08Dapper\uff09\u6846\u67b6\u9a71\u52a8\u3002"))),(0,l.kt)("h3",{id:"\u5b89\u88c5\u51c6\u5907"},"\u5b89\u88c5\u51c6\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u9a71\u52a8\u5b89\u88c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://www.taosdata.com/cn/documentation/connector#driver"},"\u5b89\u88c5\u8fde\u63a5\u5668\u9a71\u52a8\u6b65\u9aa4"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u6587\u4ef6 TDengineDrivercs.cs \u548c\u53c2\u8003\u7a0b\u5e8f\u793a\u4f8b TDengineTest.cs \u5747\u4f4d\u4e8e Windows \u5ba2\u6237\u7aef install_directory/examples/C#\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,l.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download"},".NET SDK"))),(0,l.kt)("h3",{id:"\u793a\u4f8b\u7a0b\u5e8f"},"\u793a\u4f8b\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u793a\u4f8b\u7a0b\u5e8f\u6e90\u7801\u4f4d\u4e8e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{client_install_directory}/examples/C#"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/taosdata/TDengine/tree/develop/examples/C%2523"},"github C# example source code"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," TDengineTest.cs C#\u793a\u4f8b\u6e90\u7a0b\u5e8f,\u5305\u542b\u4e86\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\uff0c\u4ee5\u53ca\u5982\u4f55\u6267\u884c\u6570\u636e\u63d2\u5165\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u9a8c\u8bc1"},"\u5b89\u88c5\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u9700\u8981\u5148\u5b89\u88c5 .Net SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"cd {client_install_directory}/examples/C#/C#Checker\n//\u8fd0\u884c\u6d4b\u8bd5\ndotnet run -- -h <FQDN>. // \u6b64\u6b65\u9aa4\u4f1a\u5148build\uff0c\u7136\u540e\u518d\u8fd0\u884c\u3002\n")))}d.isMDXComponent=!0}}]);