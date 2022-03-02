"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[2910],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2,sidebar_label:"\u8f7b\u677e\u542f\u52a8"},l="\u8f7b\u677e\u542f\u52a8",c={unversionedId:"getting-started/start-tdengine",id:"getting-started/start-tdengine",title:"\u8f7b\u677e\u542f\u52a8",description:"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u7528\u6237\u53ef\u4f7f\u7528 systemctl \u547d\u4ee4\u6765\u542f\u52a8 TDengine \u7684\u670d\u52a1\u8fdb\u7a0b\u3002",source:"@site/docs/getting-started/start-tdengine.mdx",sourceDirName:"getting-started",slug:"/getting-started/start-tdengine",permalink:"/tddocs/docs/getting-started/start-tdengine",editUrl:"https://github.com/dingbo8128/tddocs/edit/main/docs/getting-started/start-tdengine.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u8f7b\u677e\u542f\u52a8"},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u6377\u5b89\u88c5",permalink:"/tddocs/docs/getting-started/quick-install"},next:{title:"\u547d\u4ee4\u884c\u7a0b\u5e8f taos",permalink:"/tddocs/docs/getting-started/start-use"}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8f7b\u677e\u542f\u52a8"},"\u8f7b\u677e\u542f\u52a8"),(0,i.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\uff0c\u7528\u6237\u53ef\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl")," \u547d\u4ee4\u6765\u542f\u52a8 TDengine \u7684\u670d\u52a1\u8fdb\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start taosd\n")),(0,i.kt)("p",null,"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status taosd\n")),(0,i.kt)("p",null,"\u5982\u679c TDengine \u670d\u52a1\u6b63\u5e38\u5de5\u4f5c\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u901a\u8fc7 TDengine \u7684\u547d\u4ee4\u884c\u7a0b\u5e8f ",(0,i.kt)("inlineCode",{parentName:"p"},"taos")," \u6765\u8bbf\u95ee\u5e76\u4f53\u9a8c TDengine\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"systemctl \u547d\u4ee4\u9700\u8981 ",(0,i.kt)("em",{parentName:"li"},"root")," \u6743\u9650\u6765\u8fd0\u884c\uff0c\u5982\u679c\u60a8\u975e ",(0,i.kt)("em",{parentName:"li"},"root")," \u7528\u6237\uff0c\u8bf7\u5728\u547d\u4ee4\u524d\u6dfb\u52a0 sudo \u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u66f4\u597d\u7684\u83b7\u5f97\u4ea7\u54c1\u53cd\u9988\uff0c\u6539\u5584\u4ea7\u54c1\uff0cTDengine \u4f1a\u91c7\u96c6\u57fa\u672c\u7684\u4f7f\u7528\u4fe1\u606f\uff0c\u4f46\u60a8\u53ef\u4ee5\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6 taos.cfg \u91cc\u7684\u914d\u7f6e\u53c2\u6570 telemetryReporting\uff0c\u5c06\u5176\u8bbe\u4e3a 0\uff0c\u5c31\u53ef\u5c06\u5176\u5173\u95ed\u3002"),(0,i.kt)("li",{parentName:"ul"},"TDengine \u91c7\u7528 FQDN (\u4e00\u822c\u5c31\u662f hostname )\u4f5c\u4e3a\u8282\u70b9\u7684 ID\uff0c\u4e3a\u4fdd\u8bc1\u6b63\u5e38\u8fd0\u884c\uff0c\u9700\u8981\u7ed9\u8fd0\u884c taosd \u7684\u670d\u52a1\u5668\u914d\u7f6e\u597d hostname\uff0c\u5728\u5ba2\u6237\u7aef\u5e94\u7528\u8fd0\u884c\u7684\u673a\u5668\u914d\u7f6e\u597d DNS \u670d\u52a1\u6216 hosts \u6587\u4ef6\uff0c\u4fdd\u8bc1 FQDN \u80fd\u591f\u89e3\u6790\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"systemctl stop taosd")," \u6307\u4ee4\u5728\u6267\u884c\u540e\u5e76\u4e0d\u4f1a\u9a6c\u4e0a\u505c\u6b62 TDengine \u670d\u52a1\uff0c\u800c\u662f\u4f1a\u7b49\u5f85\u7cfb\u7edf\u4e2d\u5fc5\u8981\u7684\u843d\u76d8\u5de5\u4f5c\u6b63\u5e38\u5b8c\u6210\u3002\u5728\u6570\u636e\u91cf\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u53ef\u80fd\u4f1a\u6d88\u8017\u8f83\u957f\u65f6\u95f4\u3002")))),(0,i.kt)("p",null,"TDengine \u652f\u6301\u5728\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"},(0,i.kt)("inlineCode",{parentName:"a"},"systemd"))," \u505a\u8fdb\u7a0b\u670d\u52a1\u7ba1\u7406\u7684 Linux \u7cfb\u7edf\u4e0a\u5b89\u88c5\uff0c\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"which systemctl")," \u547d\u4ee4\u6765\u68c0\u6d4b\u7cfb\u7edf\u4e2d\u662f\u5426\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," \u5305:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"which systemctl\n")),(0,i.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u4e2d\u4e0d\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd"),"\uff0c\u4e5f\u53ef\u4ee5\u7528\u624b\u52a8\u8fd0\u884c /usr/local/taos/bin/taosd \u65b9\u5f0f\u542f\u52a8 TDengine \u670d\u52a1\u3002"))}u.isMDXComponent=!0}}]);