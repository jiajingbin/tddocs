"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[8166],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7299:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:5},s="Node.js Connector",p={unversionedId:"connector/node",id:"connector/node",title:"Node.js Connector",description:"Node.js \u8fde\u63a5\u5668\u652f\u6301\u7684\u7cfb\u7edf\u6709\uff1a",source:"@site/docs/connector/node.mdx",sourceDirName:"connector",slug:"/connector/node",permalink:"/tddocs/docs/connector/node",editUrl:"https://github.com/dingbo8128/tddocs/edit/main/docs/connector/node.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Go Connector",permalink:"/tddocs/docs/connector/go"},next:{title:"CS Connector",permalink:"/tddocs/docs/connector/cshapr"}},d=[{value:"\u5b89\u88c5\u51c6\u5907",id:"\u5b89\u88c5\u51c6\u5907",children:[],level:3},{value:"\u5b89\u88c5 Node.js \u8fde\u63a5\u5668",id:"\u5b89\u88c5-nodejs-\u8fde\u63a5\u5668",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3},{value:"Windows",id:"windows",children:[{value:"\u5b89\u88c5\u65b9\u6cd5 1",id:"\u5b89\u88c5\u65b9\u6cd5-1",children:[],level:4},{value:"\u5b89\u88c5\u65b9\u6cd5 2",id:"\u5b89\u88c5\u65b9\u6cd5-2",children:[],level:4}],level:3},{value:"\u793a\u4f8b\u7a0b\u5e8f",id:"\u793a\u4f8b\u7a0b\u5e8f",children:[],level:3},{value:"\u5b89\u88c5\u9a8c\u8bc1",id:"\u5b89\u88c5\u9a8c\u8bc1",children:[],level:3},{value:"Node.js \u8fde\u63a5\u5668\u7684\u4f7f\u7528",id:"nodejs-\u8fde\u63a5\u5668\u7684\u4f7f\u7528",children:[{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",children:[],level:4},{value:"\u6267\u884c SQL \u548c\u63d2\u5165\u6570\u636e",id:"\u6267\u884c-sql-\u548c\u63d2\u5165\u6570\u636e",children:[],level:4},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",children:[],level:4},{value:"\u5173\u95ed\u8fde\u63a5",id:"\u5173\u95ed\u8fde\u63a5",children:[],level:4},{value:"\u5f02\u6b65\u51fd\u6570",id:"\u5f02\u6b65\u51fd\u6570",children:[],level:4}],level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodejs-connector"},"Node.js Connector"),(0,o.kt)("p",null,"Node.js \u8fde\u63a5\u5668\u652f\u6301\u7684\u7cfb\u7edf\u6709\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"CPU \u7c7b\u578b")),(0,o.kt)("th",{parentName:"tr",align:null},"x64\uff0864bit\uff09"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"aarch64"),(0,o.kt)("th",{parentName:"tr",align:null},"aarch32"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"OS \u7c7b\u578b")),(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},"Win64"),(0,o.kt)("td",{parentName:"tr",align:null},"Win32"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301\u4e0e\u5426")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301"))))),(0,o.kt)("p",null,"Node.js \u8fde\u63a5\u5668\u7684\u4f7f\u7528\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://www.taosdata.com/blog/2020/11/11/1957.html"},"\u89c6\u9891\u6559\u7a0b"),"\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u51c6\u5907"},"\u5b89\u88c5\u51c6\u5907"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u9a71\u52a8\u5b89\u88c5\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://www.taosdata.com/cn/documentation/connector#driver"},"\u5b89\u88c5\u8fde\u63a5\u5668\u9a71\u52a8\u6b65\u9aa4"),"\u3002")),(0,o.kt)("h3",{id:"\u5b89\u88c5-nodejs-\u8fde\u63a5\u5668"},"\u5b89\u88c5 Node.js \u8fde\u63a5\u5668"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"\u6765\u8fdb\u884c\u5b89\u88c5\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6e90\u4ee3\u7801",(0,o.kt)("em",{parentName:"p"},"src/connector/nodejs/")," \u6765\u8fdb\u884c\u5b89\u88c5\u3002\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"\u5b89\u88c5 node.js \u8fde\u63a5\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install td2.0-connector\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u7528\u6237\u4f7f\u7528 npm \u5b89\u88c5 node.js \u8fde\u63a5\u5668\u3002\u5982\u679c\u60a8\u6ca1\u6709\u5b89\u88c5 npm\uff0c\u53ef\u4ee5\u5c06",(0,o.kt)("em",{parentName:"p"},"src/connector/nodejs/"),"\u62f7\u8d1d\u5230\u60a8\u7684 nodejs \u9879\u76ee\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-gyp"},"node-gyp"),"\u548c TDengine \u670d\u52a1\u7aef\u8fdb\u884c\u4ea4\u4e92\u3002\u5b89\u88c5 node.js \u8fde\u63a5\u5668\u4e4b\u524d\uff0c\u8fd8\u9700\u8981\u6839\u636e\u5177\u4f53\u64cd\u4f5c\u7cfb\u7edf\u6765\u5b89\u88c5\u4e0b\u6587\u63d0\u5230\u7684\u4e00\u4e9b\u4f9d\u8d56\u5de5\u5177\u3002"),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"python")," (\u5efa\u8bae",(0,o.kt)("inlineCode",{parentName:"li"},"v2.7")," , ",(0,o.kt)("inlineCode",{parentName:"li"},"v3.x.x")," \u76ee\u524d\u8fd8\u4e0d\u652f\u6301)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node")," 2.0.6 \u652f\u6301 v12.x \u548c v10.x\uff0c2.0.5 \u53ca\u66f4\u65e9\u7248\u672c\u652f\u6301 v10.x \u7248\u672c\uff0c\u5176\u4ed6\u7248\u672c\u53ef\u80fd\u5b58\u5728\u5305\u517c\u5bb9\u6027\u7684\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make")),(0,o.kt)("li",{parentName:"ul"},"c \u8bed\u8a00\u7f16\u8bd1\u5668\u6bd4\u5982",(0,o.kt)("a",{parentName:"li",href:"https://gcc.gnu.org"},"GCC"))),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("h4",{id:"\u5b89\u88c5\u65b9\u6cd5-1"},"\u5b89\u88c5\u65b9\u6cd5 1"),(0,o.kt)("p",null,"\u4f7f\u7528\u5fae\u8f6f\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/felixrieseberg/windows-build-tools"},"windows-build-tools"),"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," \u547d\u4ee4\u884c\u754c\u9762\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --global --production windows-build-tools")," \u5373\u53ef\u5b89\u88c5\u6240\u6709\u7684\u5fc5\u5907\u5de5\u5177\u3002"),(0,o.kt)("h4",{id:"\u5b89\u88c5\u65b9\u6cd5-2"},"\u5b89\u88c5\u65b9\u6cd5 2"),(0,o.kt)("p",null,"\u624b\u52a8\u5b89\u88c5\u4ee5\u4e0b\u5de5\u5177\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 Visual Studio \u76f8\u5173\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools"},"Visual Studio Build \u5de5\u5177")," \u6216\u8005 ",(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/pl/thank-you-downloading-visual-studio/?sku=Community"},"Visual Studio 2017 Community")),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python")," 2.7(",(0,o.kt)("inlineCode",{parentName:"li"},"v3.x.x")," \u6682\u4e0d\u652f\u6301) \u5e76\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"npm config set python python2.7")),(0,o.kt)("li",{parentName:"ul"},"\u8fdb\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"cmd"),"\u547d\u4ee4\u884c\u754c\u9762\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"npm config set msvs_version 2017"))),(0,o.kt)("p",null,"\u5982\u679c\u4ee5\u4e0a\u6b65\u9aa4\u4e0d\u80fd\u6210\u529f\u6267\u884c\uff0c\u53ef\u4ee5\u53c2\u8003\u5fae\u8f6f\u7684 node.js \u7528\u6237\u624b\u518c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules"},"Microsoft's Node.js Guidelines for Windows"),"\u3002"),(0,o.kt)("p",null,'\u5982\u679c\u5728 Windows 10 ARM \u4e0a\u4f7f\u7528 ARM64 Node.js\uff0c\u8fd8\u9700\u6dfb\u52a0 "Visual C++ compilers and libraries for ARM64" \u548c "Visual C++ ATL for ARM64"\u3002'),(0,o.kt)("h3",{id:"\u793a\u4f8b\u7a0b\u5e8f"},"\u793a\u4f8b\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u793a\u4f8b\u7a0b\u5e8f\u6e90\u7801\u4f4d\u4e8e install_directory/examples/nodejs\uff0c\u6709\uff1a"),(0,o.kt)("p",null,"Node-example.js node.js \u793a\u4f8b\u6e90\u7a0b\u5e8f\nNode-example-raw.js"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u9a8c\u8bc1"},"\u5b89\u88c5\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u597d TDengine \u5ba2\u6237\u7aef\u540e\uff0c\u4f7f\u7528 nodejsChecker.js \u7a0b\u5e8f\u80fd\u591f\u9a8c\u8bc1\u5f53\u524d\u73af\u5883\u662f\u5426\u652f\u6301 nodejs \u65b9\u5f0f\u8bbf\u95ee Tdengine\u3002"),(0,o.kt)("p",null,"\u9a8c\u8bc1\u65b9\u6cd5\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65b0\u5efa\u5b89\u88c5\u9a8c\u8bc1\u76ee\u5f55\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"~/tdengine-test"),"\uff0c\u62f7\u8d1d github \u4e0a nodejsChecker.js \u6e90\u7a0b\u5e8f\u3002\u4e0b\u8f7d\u5730\u5740\uff1a\uff08",(0,o.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/tree/develop/examples/nodejs/nodejsChecker.js%EF%BC%89%E3%80%82"},"https://github.com/taosdata/TDengine/tree/develop/examples/nodejs/nodejsChecker.js\uff09\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install td2.0-connector\nnode nodejsChecker.js host=localhost\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0c\u5728\u547d\u4ee4\u884c\u4f1a\u8f93\u51fa nodejs \u8fde\u63a5 Tdengine \u5b9e\u4f8b\uff0c\u5e76\u6267\u884c\u7b80\u7b54\u63d2\u5165\u548c\u67e5\u8be2\u7684\u7ed3\u679c\u3002")),(0,o.kt)("h3",{id:"nodejs-\u8fde\u63a5\u5668\u7684\u4f7f\u7528"},"Node.js \u8fde\u63a5\u5668\u7684\u4f7f\u7528"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f Node.js \u8fde\u63a5\u5668\u7684\u4e00\u4e9b\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\uff0c\u8be6\u7ec6\u7684\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/tree/develop/src/connector/nodejs"},"TDengine Node.js connector"),"\u3002"),(0,o.kt)("h4",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,o.kt)("p",null,"\u4f7f\u7528 node.js \u8fde\u63a5\u5668\u65f6\uff0c\u5fc5\u987b\u5148",(0,o.kt)("inlineCode",{parentName:"p"},"require td2.0-connector"),"\uff0c\u7136\u540e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"taos.connect")," \u51fd\u6570\u5efa\u7acb\u5230\u670d\u52a1\u7aef\u7684\u8fde\u63a5\u3002\u4f8b\u5982\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const taos = require("td2.0-connector");\nvar conn = taos.connect({\n  host: "taosdemo.com",\n  user: "root",\n  password: "taosdata",\n  config: "/etc/taos",\n  port: 6030,\n});\nvar cursor = conn.cursor(); // Initializing a new cursor\n')),(0,o.kt)("p",null,"\u5efa\u7acb\u4e86\u4e00\u4e2a\u5230 hostname \u4e3a taosdemo.com\uff0c\u7aef\u53e3\u4e3a 6030\uff08Tdengine \u7684\u9ed8\u8ba4\u7aef\u53e3\u53f7\uff09\u7684\u8fde\u63a5\u3002\u8fde\u63a5\u6307\u5b9a\u4e86\u7528\u6237\u540d\uff08root\uff09\u548c\u5bc6\u7801\uff08taosdata\uff09\u3002taos.connect \u51fd\u6570\u5fc5\u987b\u63d0\u4f9b\u7684\u53c2\u6570\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"host"),"\uff0c\u5176\u5b83\u53c2\u6570\u5728\u6ca1\u6709\u63d0\u4f9b\u7684\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528\u5982\u4e0b\u7684\u9ed8\u8ba4\u503c\u3002taos.connect \u8fd4\u56de\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"cursor")," \u5bf9\u8c61\uff0c\u4f7f\u7528 cursor \u6765\u6267\u884c sql \u8bed\u53e5\u3002"),(0,o.kt)("h4",{id:"\u6267\u884c-sql-\u548c\u63d2\u5165\u6570\u636e"},"\u6267\u884c SQL \u548c\u63d2\u5165\u6570\u636e"),(0,o.kt)("p",null,"\u5bf9\u4e8e DDL \u8bed\u53e5\uff08\u4f8b\u5982 create database\u3001create table\u3001use \u7b49\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 cursor \u7684 execute \u65b9\u6cd5\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'cursor.execute("create database if not exists test;");\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u79f0\u4e3a test \u7684\u6570\u636e\u5e93\u3002\u5bf9\u4e8e DDL \u8bed\u53e5\uff0c\u4e00\u822c\u6ca1\u6709\u8fd4\u56de\u503c\uff0ccursor \u7684 execute \u8fd4\u56de\u503c\u4e3a 0\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e Insert \u8bed\u53e5\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var affectRows = cursor.execute(\n  "insert into test.weather values(now, 22.3, 34);"\n);\n')),(0,o.kt)("p",null,"execute \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e3a\u8be5\u8bed\u53e5\u5f71\u54cd\u7684\u884c\u6570\uff0c\u4e0a\u9762\u7684 sql \u5411 test \u5e93\u7684 weather \u8868\u4e2d\uff0c\u63d2\u5165\u4e86\u4e00\u6761\u6570\u636e\uff0c\u5219\u8fd4\u56de\u503c affectRows \u4e3a 1\u3002"),(0,o.kt)("p",null,"TDengine \u76ee\u524d\u8fd8\u4e0d\u652f\u6301 delete \u8bed\u53e5\u3002\u4f46\u4ece 2.0.8.0 \u7248\u672c\u5f00\u59cb\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," \u65f6\u6307\u5b9a\u7684 UPDATE \u53c2\u6570\u6765\u542f\u7528\u5bf9\u6570\u636e\u884c\u7684 update\u3002"),(0,o.kt)("h4",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,o.kt)("p",null,"\u53ef\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor.query")," \u51fd\u6570\u6765\u67e5\u8be2\u6570\u636e\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var query = cursor.query("show databases;");\n')),(0,o.kt)("p",null,"\u67e5\u8be2\u7684\u7ed3\u679c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"query.execute()")," \u51fd\u6570\u83b7\u53d6\u5e76\u6253\u5370\u51fa\u6765\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var promise = query.execute();\npromise.then(function (result) {\n  result.pretty();\n});\n")),(0,o.kt)("p",null,"\u683c\u5f0f\u5316\u67e5\u8be2\u8bed\u53e5\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"bind"),"\u65b9\u6cd5\u3002\u5982\u4e0b\u9762\u7684\u793a\u4f8b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"\u4f1a\u81ea\u52a8\u5c06\u63d0\u4f9b\u7684\u6570\u503c\u586b\u5165\u67e5\u8be2\u8bed\u53e5\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"?"),"\u91cc\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var query = cursor\n  .query("select * from meterinfo.meters where ts <= ? and areaid = ?;")\n  .bind(new Date(), 5);\nquery.execute().then(function (result) {\n  result.pretty();\n});\n')),(0,o.kt)("p",null,"\u5982\u679c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"\u8bed\u53e5\u91cc\u63d0\u4f9b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5e76\u8bbe\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u4e5f\u53ef\u4ee5\u7acb\u5373\u83b7\u53d6\u67e5\u8be2\u7ed3\u679c\u3002\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var promise = cursor.query(\n  "select * from meterinfo.meters where v1 = 30;",\n  true\n);\npromise.then(function (result) {\n  result.pretty();\n});\n')),(0,o.kt)("h4",{id:"\u5173\u95ed\u8fde\u63a5"},"\u5173\u95ed\u8fde\u63a5"),(0,o.kt)("p",null,"\u5728\u5b8c\u6210\u63d2\u5165\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u540e\uff0c\u8981\u5173\u95ed\u8fde\u63a5\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"conn.close();\n")),(0,o.kt)("h4",{id:"\u5f02\u6b65\u51fd\u6570"},"\u5f02\u6b65\u51fd\u6570"),(0,o.kt)("p",null,"\u5f02\u6b65\u67e5\u8be2\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u548c\u4e0a\u9762\u7c7b\u4f3c\uff0c\u53ea\u9700\u8981\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"cursor.execute"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TaosQuery.execute"),"\u7b49\u51fd\u6570\u540e\u9762\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"_a"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var promise1 = cursor\n  .query("select count(*), avg(v1), avg(v2) from meter1;")\n  .execute_a();\nvar promise2 = cursor\n  .query("select count(*), avg(v1), avg(v2) from meter2;")\n  .execute_a();\npromise1.then(function (result) {\n  result.pretty();\n});\npromise2.then(function (result) {\n  result.pretty();\n});\n')),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/taosdata/tests/tree/master/examples/nodejs/node-example.js"},"node-example.js"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4f7f\u7528 NodeJS \u8fde\u63a5\u5668\u5efa\u8868\uff0c\u63d2\u5165\u5929\u6c14\u6570\u636e\u5e76\u67e5\u8be2\u63d2\u5165\u7684\u6570\u636e\u7684\u4ee3\u7801\u793a\u4f8b\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/taosdata/tests/tree/master/examples/nodejs/node-example-raw.js"},"node-example-raw.js"),"\u540c\u6837\u662f\u4e00\u4e2a\u4f7f\u7528 NodeJS \u8fde\u63a5\u5668\u5efa\u8868\uff0c\u63d2\u5165\u5929\u6c14\u6570\u636e\u5e76\u67e5\u8be2\u63d2\u5165\u7684\u6570\u636e\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u4f46\u548c\u4e0a\u9762\u4e0d\u540c\u7684\u662f\uff0c\u8be5\u793a\u4f8b\u53ea\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"cursor"),"\u3002"))}c.isMDXComponent=!0}}]);