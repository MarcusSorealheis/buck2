"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2914],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>m,withMDXComponents:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){return function(n){var r=m(n.components);return t.createElement(e,o({},n,{components:r}))}},m=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,p=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?t.createElement(p,i(i({ref:n},l),{},{components:r})):t.createElement(p,i({ref:n},l))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},89219:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(87462),a=(r(67294),r(3905));const o={id:"in_memory_cache",title:"In Memory Cache"},c=void 0,i={unversionedId:"users/advanced/in_memory_cache",id:"users/advanced/in_memory_cache",title:"In Memory Cache",description:"Buck2 can maintain an in-memory cache of actions it executed. This allows",source:"@site/../docs/users/advanced/in_memory_cache.md",sourceDirName:"users/advanced",slug:"/users/advanced/in_memory_cache",permalink:"/docs/users/advanced/in_memory_cache",draft:!1,tags:[],version:"current",frontMatter:{id:"in_memory_cache",title:"In Memory Cache"},sidebar:"manualSidebar",previous:{title:"Restarter",permalink:"/docs/users/advanced/restarter"},next:{title:"External Cells",permalink:"/docs/users/advanced/external_cells"}},s={},l=[{value:"Enabling the in-memory cache",id:"enabling-the-in-memory-cache",level:2}],u={toc:l};function m(e){let{components:n,...r}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Buck2 can maintain an in-memory cache of actions it executed. This allows\nactions to skip re-running even when they are (transitively) affected by file\nchanges."),(0,a.mdx)("h2",{id:"enabling-the-in-memory-cache"},"Enabling the in-memory cache"),(0,a.mdx)("p",null,"This feature requires enabling\n",(0,a.mdx)("a",{parentName:"p",href:"/docs/users/advanced/deferred_materialization"},"Deferred Materialization")," first. This is necessary\nso that Buck2 knows what's on disk. This requirement might go away once we\ndecouple keeping track of what's on disk and deferred materialization."),(0,a.mdx)("p",null,"Once done, to enable, add this to your Buckconfig:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[buck2]\nhash_all_commands = true\n")))}m.isMDXComponent=!0}}]);