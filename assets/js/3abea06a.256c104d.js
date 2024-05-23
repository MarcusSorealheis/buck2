"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1623],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,d({},t,{components:a}))}},c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,u=m["".concat(o,".").concat(p)]||m[p]||g[p]||d;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<d;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const d={id:"cmd_args"},o="cmd_args type",i={unversionedId:"api/bxl/cmd_args",id:"api/bxl/cmd_args",title:"cmd_args type",description:"The cmdargs type is created by cmdargs() and is consumed by ctx.actions.run. The type is a mutable collection of strings and artifact values. In general, command lines, artifacts, strings, RunInfo and lists thereof can be added to or used to construct a cmd_args value. All these methods operate mutably on cmd and return that value too.",source:"@site/../docs/api/bxl/cmd_args.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/cmd_args",permalink:"/docs/api/bxl/cmd_args",draft:!1,tags:[],version:"current",frontMatter:{id:"cmd_args"},sidebar:"manualSidebar",previous:{title:"bxl_output_stream type",permalink:"/docs/api/bxl/bxl_output_stream"},next:{title:"coerced_attr type",permalink:"/docs/api/bxl/coerced_attr"}},l={},s=[{value:"cmd_args.add",id:"cmd_argsadd",level:2},{value:"cmd_args.copy",id:"cmd_argscopy",level:2},{value:"cmd_args.hidden",id:"cmd_argshidden",level:2},{value:"cmd_args.inputs",id:"cmd_argsinputs",level:2},{value:"cmd_args.outputs",id:"cmd_argsoutputs",level:2},{value:"cmd_args.parent",id:"cmd_argsparent",level:2},{value:"cmd_args.relative_to",id:"cmd_argsrelative_to",level:2}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cmd_args-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"cmd_args")," type"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," type is created by ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args()")," and is consumed by ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run"),". The type is a mutable collection of strings and ",(0,r.mdx)("inlineCode",{parentName:"p"},"artifact")," values. In general, command lines, artifacts, strings, ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," and lists thereof can be added to or used to construct a ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," value. All these methods operate mutably on ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd")," and return that value too."),(0,r.mdx)("h2",{id:"cmd_argsadd"},"cmd","_","args.add"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def cmd_args.add(*args) -> cmd_args\n")),(0,r.mdx)("p",null,"A list of arguments to be added to the command line, which may including ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),", artifacts, strings, ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," or lists thereof. Note that this operation mutates the input ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argscopy"},"cmd","_","args.copy"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def cmd_args.copy() -> cmd_args\n")),(0,r.mdx)("p",null,"Returns a copy of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," such that any modifications to the original or the returned value will not impact each other. Note that this is a shallow copy, so any inner ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args")," can still be modified."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argshidden"},"cmd","_","args.hidden"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def cmd_args.hidden(*args) -> cmd_args\n")),(0,r.mdx)("p",null,"Things to add to the command line which do not show up but are added as dependencies. The values can be anything normally permissible to pass to ",(0,r.mdx)("inlineCode",{parentName:"p"},"add"),"."),(0,r.mdx)("p",null,"Typically used if the command you are running implicitly depends on files that are not\npassed on the command line, e.g. headers in the case of a C compilation."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsinputs"},"cmd","_","args.inputs"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"cmd_args.inputs: command_line_inputs\n")),(0,r.mdx)("p",null,"Collect all the inputs (including hidden) referenced by this command line. The output can be compared for equality and have its ",(0,r.mdx)("inlineCode",{parentName:"p"},"len")," requested to see whether there are any inputs, but is otherwise mostly opaque."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsoutputs"},"cmd","_","args.outputs"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"cmd_args.outputs: list[output_artifact]\n")),(0,r.mdx)("p",null,"Collect all the outputs (including hidden) referenced by this command line."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsparent"},"cmd","_","args.parent"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def cmd_args.parent(count: int = _, /) -> cmd_args\n")),(0,r.mdx)("p",null,"For all the artifacts listed in this ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),", use their parent directory."),(0,r.mdx)("p",null,"Typically used when the file name is passed one way, and the directory another,\ne.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},'cmd_args(artifact, format="-L{}").parent()'),"."),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"cmd_argsrelative_to"},"cmd","_","args.relative","_","to"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def cmd_args.relative_to(\n    directory: artifact | cell_root | project_root,\n    /,\n    *,\n    parent: int = _\n) -> cmd_args\n")),(0,r.mdx)("p",null,"Make all artifact paths relative to a given location. Typically used when the command you are running changes directory."),(0,r.mdx)("p",null,"By default, the paths are relative to the artifacts themselves (equivalent to\n",(0,r.mdx)("inlineCode",{parentName:"p"},"parent = 0"),"). Use ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent")," to make the paths relative to an ancestor directory.\nFor example ",(0,r.mdx)("inlineCode",{parentName:"p"},"parent = 1")," would make all paths relative to the containing dirs\nof any artifacts in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cmd_args"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'dir = symlinked_dir(...)\nscript = [\n    cmd_args(cmd_args(dir, format = "cd {}"),\n    original_script.relative_to(dir)\n]\n')))}c.isMDXComponent=!0}}]);