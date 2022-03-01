"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[752],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||c;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3091:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],i={sidebar_position:7},l="CS Connector",u={unversionedId:"reference/connector/cshapr",id:"reference/connector/cshapr",title:"CS Connector",description:"\u5b89\u88c5",source:"@site/docs/reference/connector/cshapr.mdx",sourceDirName:"reference/connector",slug:"/reference/connector/cshapr",permalink:"/tddocs/docs/reference/connector/cshapr",editUrl:"https://github.com/dingbo8128/tddocs/edit/main/docs/reference/connector/cshapr.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Node.js Connector",permalink:"/tddocs/docs/reference/connector/node"},next:{title:"RESTful Connector",permalink:"/tddocs/docs/reference/connector/restful"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u7b2c\u4e09\u65b9\u9a71\u52a8",id:"\u7b2c\u4e09\u65b9\u9a71\u52a8",children:[],level:2}],s={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cs-connector"},"CS Connector"),(0,c.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,c.kt)("p",null,"\u5728 Windows \u7cfb\u7edf\u4e0a\uff0cC#\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528 TDengine \u7684 C#\u8fde\u63a5\u5668\u63a5\u53e3\u6765\u6267\u884c\u6240\u6709\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u3002\u4f7f\u7528\u7684\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a"),(0,c.kt)("p",null,"\u9700\u8981 .NET SDK"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a c# project.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cmd"},"mkdir test\ncd test\ndotnet new console\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Nuget \u5f15\u7528 TDengineDriver \u5305")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cmd"},"dotnet add package TDengine.Connector\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u4e2d\u9700\u8981\u7528\u5230 TDengineConnector \u7684\u5730\u65b9\u5f15\u7528 TDengineDriver namespace\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-c#"},"using TDengineDriver;\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u53c2\u8003",(0,c.kt)("a",{parentName:"li",href:"https://github.com/taosdata/TDengine/tree/develop/examples/C%2523/TDengineTest"},"TDengineTest.cs"),"\u6765\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\uff0c\u4ee5\u53ca\u5982\u4f55\u6267\u884c\u6570\u636e\u63d2\u5165\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u3002")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"TDengine V2.0.3.0 \u4e4b\u540e\u540c\u65f6\u652f\u6301 32 \u4f4d\u548c 64 \u4f4d Windows \u7cfb\u7edf\uff0c\u6240\u4ee5 C#\u9879\u76ee\u5728\u751f\u6210.exe \u6587\u4ef6\u65f6\uff0c\u201c\u89e3\u51b3\u65b9\u6848\u201d/\u201c\u9879\u76ee\u201d\u7684\u201c\u5e73\u53f0\u201d\u8bf7\u9009\u62e9\u5bf9\u5e94\u7684\u201cX86\u201d \u6216\u201cx64\u201d\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u6b64\u63a5\u53e3\u76ee\u524d\u5df2\u7ecf\u5728 Visual Studio 2015/2017 \u4e2d\u9a8c\u8bc1\u8fc7\uff0c\u5176\u5b83 VS \u7248\u672c\u5c1a\u5f85\u9a8c\u8bc1\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u6b64\u8fde\u63a5\u5668\u9700\u8981\u7528\u5230 taos.dll \u6587\u4ef6\uff0c\u6240\u4ee5\u5728\u672a\u5b89\u88c5\u5ba2\u6237\u7aef\u65f6\u9700\u8981\u5728\u6267\u884c\u5e94\u7528\u7a0b\u5e8f\u524d\uff0c\u62f7\u8d1d Windows{client_install_directory}/driver \u76ee\u5f55\u4e2d\u7684 taos.dll \u6587\u4ef6\u5230\u9879\u76ee\u6700\u540e\u751f\u6210.exe \u53ef\u6267\u884c\u6587\u4ef6\u6240\u5728\u7684\u6587\u4ef6\u5939\u3002\u4e4b\u540e\u8fd0\u884c exe \u6587\u4ef6\uff0c\u5373\u53ef\u8bbf\u95ee TDengine \u6570\u636e\u5e93\u5e76\u505a\u63d2\u5165\u3001\u67e5\u8be2\u7b49\u64cd\u4f5c\u3002")),(0,c.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u9a71\u52a8"},"\u7b2c\u4e09\u65b9\u9a71\u52a8"),(0,c.kt)("p",null,"Maikebing.Data.Taos \u662f\u4e00\u4e2a TDengine \u7684 ADO.Net \u63d0\u4f9b\u5668\uff0c\u652f\u6301 linux\uff0cwindows\u3002\u8be5\u5f00\u53d1\u5305\u7531\u70ed\u5fc3\u8d21\u732e\u8005",(0,c.kt)("inlineCode",{parentName:"p"},"\u9ea6\u58f3\u997c@@maikebing"),"\u63d0\u4f9b\uff0c\u5177\u4f53\u8bf7\u53c2\u8003"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"//\u63a5\u53e3\u4e0b\u8f7d\nhttps://github.com/maikebing/Maikebing.EntityFrameworkCore.Taos\n//\u7528\u6cd5\u8bf4\u660e\nhttps://www.taosdata.com/blog/2020/11/02/1901.html\n")))}d.isMDXComponent=!0}}]);