"use strict";(self.webpackChunktddocs=self.webpackChunktddocs||[]).push([[9977],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:4},p="Go Connector",s={unversionedId:"reference/connector/go",id:"reference/connector/go",title:"Go Connector",description:"\u5b89\u88c5\u51c6\u5907",source:"@site/docs/reference/connector/go.mdx",sourceDirName:"reference/connector",slug:"/reference/connector/go",permalink:"/tddocs/docs/next/reference/connector/go",editUrl:"https://github.com/dingbo8128/tddocs/edit/main/docs/reference/connector/go.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python Connector",permalink:"/tddocs/docs/next/reference/connector/python"},next:{title:"Node.js Connector",permalink:"/tddocs/docs/next/reference/connector/node"}},u={},c=[{value:"\u5b89\u88c5\u51c6\u5907",id:"\u5b89\u88c5\u51c6\u5907",level:3},{value:"\u793a\u4f8b\u7a0b\u5e8f",id:"\u793a\u4f8b\u7a0b\u5e8f",level:3},{value:"Go \u8fde\u63a5\u5668\u7684\u4f7f\u7528",id:"go-\u8fde\u63a5\u5668\u7684\u4f7f\u7528",level:3},{value:"\u5e38\u7528 API",id:"\u5e38\u7528-api",level:3},{value:"\u5176\u4ed6\u4ee3\u7801\u793a\u4f8b",id:"\u5176\u4ed6\u4ee3\u7801\u793a\u4f8b",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-connector"},"Go Connector"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u51c6\u5907"},"\u5b89\u88c5\u51c6\u5907"),(0,o.kt)("p",null,"Go \u8fde\u63a5\u5668\u652f\u6301\u7684\u7cfb\u7edf\u6709\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"CPU \u7c7b\u578b")),(0,o.kt)("th",{parentName:"tr",align:null},"x64\uff0864bit\uff09"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"aarch64"),(0,o.kt)("th",{parentName:"tr",align:null},"aarch32"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"OS \u7c7b\u578b")),(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},"Win64"),(0,o.kt)("td",{parentName:"tr",align:null},"Win32"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},"Linux")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301\u4e0e\u5426")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u652f\u6301")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"\u5f00\u53d1\u4e2d"))))),(0,o.kt)("p",null,"\u5b89\u88c5\u524d\u51c6\u5907\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5\u597d TDengine \u5e94\u7528\u9a71\u52a8\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"https://www.taosdata.com/cn/documentation/connector#driver"},"\u5b89\u88c5\u8fde\u63a5\u5668\u9a71\u52a8\u6b65\u9aa4"),"\u3002")),(0,o.kt)("h3",{id:"\u793a\u4f8b\u7a0b\u5e8f"},"\u793a\u4f8b\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u4f7f\u7528 Go \u8fde\u63a5\u5668\u7684\u793a\u4f8b\u4ee3\u7801\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/taosdata/TDengine/tree/develop/examples/go"},"https://github.com/taosdata/TDengine/tree/develop/examples/go")," \u4ee5\u53ca",(0,o.kt)("a",{parentName:"p",href:"https://www.taosdata.com/blog/2020/11/11/1951.html"},"\u89c6\u9891\u6559\u7a0b"),"\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\u7a0b\u5e8f\u6e90\u7801\u4e5f\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 examples/go/taosdemo.go \u6587\u4ef6\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a\u5efa\u8bae Go \u7248\u672c\u662f 1.13 \u53ca\u4ee5\u4e0a\uff0c\u5e76\u5f00\u542f\u6a21\u5757\u652f\u6301\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go env -w GO111MODULE=on\ngo env -w GOPROXY=https://goproxy.io,direct\n")),(0,o.kt)("p",null,"\u5728 taosdemo.go \u6240\u5728\u76ee\u5f55\u4e0b\u8fdb\u884c\u7f16\u8bd1\u548c\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go mod init taosdemo\ngo get github.com/taosdata/driver-go/taosSql\n# use win branch in Windows platform.\n#go get github.com/taosdata/driver-go/taosSql@win\ngo build\n./taosdemo -h fqdn -p serverPort\n")),(0,o.kt)("h3",{id:"go-\u8fde\u63a5\u5668\u7684\u4f7f\u7528"},"Go \u8fde\u63a5\u5668\u7684\u4f7f\u7528"),(0,o.kt)("p",null,"TDengine \u63d0\u4f9b\u4e86 GO \u9a71\u52a8\u7a0b\u5e8f\u5305",(0,o.kt)("inlineCode",{parentName:"p"},"taosSql"),"\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"taosSql"),"\u5b9e\u73b0\u4e86 GO \u8bed\u8a00\u7684\u5185\u7f6e\u63a5\u53e3",(0,o.kt)("inlineCode",{parentName:"p"},"database/sql/driver"),"\u3002\u7528\u6237\u53ea\u9700\u6309\u5982\u4e0b\u65b9\u5f0f\u5f15\u5165\u5305\u5c31\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bbf\u95ee TDengine\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "database/sql"\n  _ "github.com/taosdata/driver-go/v2/taosSql"\n)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a"),"\uff1a\u4e0b\u5212\u7ebf\u4e0e\u53cc\u5f15\u53f7\u4e4b\u95f4\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7a\u683c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"taosSql")," \u7684 v2 \u7248\u672c\u8fdb\u884c\u4e86\u91cd\u6784\uff0c\u5206\u79bb\u51fa\u5185\u7f6e\u6570\u636e\u5e93\u64cd\u4f5c\u63a5\u53e3 ",(0,o.kt)("inlineCode",{parentName:"p"},"database/sql/driver")," \u5230\u76ee\u5f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"taosSql"),"\uff1b\u8ba2\u9605\u3001stmt \u7b49\u5176\u4ed6\u529f\u80fd\u653e\u5230\u76ee\u5f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"af"),"\u3002"),(0,o.kt)("h3",{id:"\u5e38\u7528-api"},"\u5e38\u7528 API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"sql.Open(DRIVER_NAME string, dataSourceName string) *DB")),(0,o.kt)("p",{parentName:"li"},"\u8be5 API \u7528\u6765\u6253\u5f00 DB\uff0c\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4e3a","*","DB \u7684\u5bf9\u8c61\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cDRIVER_NAME \u8bbe\u7f6e\u4e3a\u5b57\u7b26\u4e32",(0,o.kt)("inlineCode",{parentName:"p"},"taosSql"),"\uff0cdataSourceName \u8bbe\u7f6e\u4e3a\u5b57\u7b26\u4e32",(0,o.kt)("inlineCode",{parentName:"p"},"user:password@/tcp(host:port)/dbname"),"\uff0c\u5982\u679c\u5ba2\u6237\u60f3\u8981\u7528\u591a\u4e2a goroutine \u5e76\u53d1\u8bbf\u95ee TDengine, \u90a3\u4e48\u9700\u8981\u5728\u5404\u4e2a goroutine \u4e2d\u5206\u522b\u521b\u5efa\u4e00\u4e2a sql.Open \u5bf9\u8c61\u5e76\u7528\u4e4b\u8bbf\u95ee TDengine"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u8be5 API \u6210\u529f\u521b\u5efa\u7684\u65f6\u5019\uff0c\u5e76\u6ca1\u6709\u505a\u6743\u9650\u7b49\u68c0\u67e5\uff0c\u53ea\u6709\u5728\u771f\u6b63\u6267\u884c Query \u6216\u8005 Exec \u7684\u65f6\u5019\u624d\u80fd\u771f\u6b63\u7684\u53bb\u521b\u5efa\u8fde\u63a5\uff0c\u5e76\u540c\u65f6\u68c0\u67e5 user/password/host/port \u662f\u4e0d\u662f\u5408\u6cd5\u3002\u53e6\u5916\uff0c\u7531\u4e8e\u6574\u4e2a\u9a71\u52a8\u7a0b\u5e8f\u5927\u90e8\u5206\u5b9e\u73b0\u90fd\u4e0b\u6c89\u5230 taosSql \u6240\u4f9d\u8d56\u7684 libtaos \u52a8\u6001\u5e93\u4e2d\u3002\u6240\u4ee5\uff0csql.Open \u672c\u8eab\u7279\u522b\u8f7b\u91cf\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"func (db *DB) Exec(query string, args ...interface{}) (Result, error)")))),(0,o.kt)("p",null,"sql.Open \u5185\u7f6e\u7684\u65b9\u6cd5\uff0c\u7528\u6765\u6267\u884c\u975e\u67e5\u8be2\u76f8\u5173 SQL"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"func (db *DB) Query(query string, args ...interface{}) (*Rows, error)"))),(0,o.kt)("p",null,"sql.Open \u5185\u7f6e\u7684\u65b9\u6cd5\uff0c\u7528\u6765\u6267\u884c\u67e5\u8be2\u8bed\u53e5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"func (db *DB) Prepare(query string) (*Stmt, error)")),(0,o.kt)("p",{parentName:"li"},"sql.Open \u5185\u7f6e\u7684\u65b9\u6cd5\uff0cPrepare creates a prepared statement for later queries or executions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"func (s *Stmt) Exec(args ...interface{}) (Result, error)")),(0,o.kt)("p",{parentName:"li"},"sql.Open \u5185\u7f6e\u7684\u65b9\u6cd5\uff0cexecutes a prepared statement with the given arguments and returns a Result summarizing the effect of the statement.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"func (s *Stmt) Query(args ...interface{}) (*Rows, error)")),(0,o.kt)("p",{parentName:"li"},"sql.Open \u5185\u7f6e\u7684\u65b9\u6cd5\uff0cQuery executes a prepared query statement with the given arguments and returns the query results as a ","*","Rows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"func (s *Stmt) Close() error")),(0,o.kt)("p",{parentName:"li"},"sql.Open \u5185\u7f6e\u7684\u65b9\u6cd5\uff0cClose closes the statement."))),(0,o.kt)("h3",{id:"\u5176\u4ed6\u4ee3\u7801\u793a\u4f8b"},"\u5176\u4ed6\u4ee3\u7801\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/taosdata/go-demo-kafka"},"Consume Messages from Kafka")," \u662f\u4e00\u4e2a\u901a\u8fc7 Go \u8bed\u8a00\u5b9e\u73b0\u6d88\u8d39 Kafka \u961f\u5217\u5199\u5165 TDengine \u7684\u793a\u4f8b\u7a0b\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u901a\u8fc7 Go \u8fde\u63a5 TDengine \u7684\u5199\u6cd5\u53c2\u8003\u3002"))}d.isMDXComponent=!0}}]);