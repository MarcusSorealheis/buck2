"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7459],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>s});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){return function(n){var t=d(n.components);return i.createElement(e,r({},n,{components:t}))}},d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,c=s["".concat(l,".").concat(u)]||s[u]||f[u]||r;return t?i.createElement(c,o(o({ref:n},p),{},{components:t})):i.createElement(c,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"optimization",title:"Observability and Optimization"},l=void 0,o={unversionedId:"rule_authors/optimization",id:"rule_authors/optimization",title:"Observability and Optimization",description:"Optimization involves the use of techniques for determining and improving the",source:"@site/../docs/rule_authors/optimization.md",sourceDirName:"rule_authors",slug:"/rule_authors/optimization",permalink:"/docs/rule_authors/optimization",draft:!1,tags:[],version:"current",frontMatter:{id:"optimization",title:"Observability and Optimization"},sidebar:"manualSidebar",previous:{title:"Test Execution",permalink:"/docs/rule_authors/test_execution"},next:{title:"Incremental Actions",permalink:"/docs/rule_authors/incremental_actions"}},m={},p=[{value:"Starlark profiling",id:"starlark-profiling",level:2},{value:"Summary profiling",id:"summary-profiling",level:3},{value:"Statement profiling",id:"statement-profiling",level:3},{value:"Flame profiling",id:"flame-profiling",level:3},{value:"Native profiling",id:"native-profiling",level:2},{value:"Benchmarking",id:"benchmarking",level:2}],s=(d="FbInternalOnly",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)});var d;const u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Optimization involves the use of techniques for determining and improving the\nperformance of Buck2 and specific actions performed by Buck2. This page covers\nthe internals for developers of Buck2 and provides details of Starlark that are\nlikely to be relevant to end users."),(0,a.mdx)("h2",{id:"starlark-profiling"},"Starlark profiling"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"buck2")," supports profiling of the evaluation of specific ",(0,a.mdx)("inlineCode",{parentName:"p"},"BUCK")," files and\nprofiling of the analysis of specific targets."),(0,a.mdx)("p",null,"There are three ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2")," profiling commands:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 profile loading")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 profile analysis")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 profile bxl"))),(0,a.mdx)("p",null,"For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"buck2 profile loading --mode=heap-summary-allocated -o heap-summary.csv //some/package:\nbuck2 profile analysis --mode=heap-summary-allocated -o heap-summary.csv //some/package:target\n")),(0,a.mdx)("p",null,"Possible values for profiling modes are as follows:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#summary-profiling"},"heap-summary-allocated"),": The heap profile mode provides\ninformation about the time spent in each function and allocations performed by\neach function. Enabling this mode has the side effect of disabling\ngarbage-collection. This profiling mode is the recommended one."),(0,a.mdx)("li",{parentName:"ul"},"heap-summary-retained: Like heap summary, but information about retained\nmemory after module is frozen."),(0,a.mdx)("li",{parentName:"ul"},"time-flame: Provide output compatible with\n",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/brendangregg/FlameGraph/blob/master/flamegraph.pl"},"flamegraph.pl"),"."),(0,a.mdx)("li",{parentName:"ul"},"heap-flame-allocated: Like heap profile, but writes output comparible with\n",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/brendangregg/FlameGraph/blob/master/flamegraph.pl"},"flamegraph.pl"),"."),(0,a.mdx)("li",{parentName:"ul"},"heap-flame-retained: Like heap flame, but information about retained memory\nafter module is frozen."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"#statement-profiling"},"statement"),": The statement profile mode provides\ninformation about time spent in each statement."),(0,a.mdx)("li",{parentName:"ul"},"bytecode: The bytecode profile mode provides information about bytecode\ninstruction pairs."),(0,a.mdx)("li",{parentName:"ul"},"bytecode-pairs: The bytecode profile mode provides information about bytecode\ninstruction pairs."),(0,a.mdx)("li",{parentName:"ul"},"typecheck: Profile runtime typechecking.")),(0,a.mdx)("h3",{id:"summary-profiling"},"Summary profiling"),(0,a.mdx)("p",null,"The first profiling mode (",(0,a.mdx)("inlineCode",{parentName:"p"},"heap-summary-allocated"),") provides the time spent\nwithin a function and the allocations that are performed."),(0,a.mdx)("p",null,"As an example, running over a folly BUCK file, produces a CSV file whose\ntop-left corner is:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"Function         Time(s)  TimeRec(s)    Calls   Allocs\nTOTALS            10.455      10.455  9712799  3477203\nfbchain_configs    1.163       2.514    11328    33984\nis_string          0.726       1.028  1514985        0\napple_library      0.725       0.725     1887        0\ntype               0.435       0.435  2053296        0\n...\n")),(0,a.mdx)("p",null,"This reveals the following:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Total execution was 10.455s, which will be a bit slower than normal, because\nprofiling is on."),(0,a.mdx)("li",{parentName:"ul"},"1.163s was spent in ",(0,a.mdx)("inlineCode",{parentName:"li"},"fbchain_configs")," itself and 2.514s in that function and\nthe things it calls."),(0,a.mdx)("li",{parentName:"ul"},"A disturbing 1.5M calls and 1.028s is spent testing if things are strings,\nwhich is almost certainly responsible for half the type calls."),(0,a.mdx)("li",{parentName:"ul"},"Happily, ",(0,a.mdx)("inlineCode",{parentName:"li"},"is_string")," doesn't allocate, but ",(0,a.mdx)("inlineCode",{parentName:"li"},"fbchain_configs")," does. Scrolling\nto the right, on the full CSV file (not shown), reveals it allocates 1 tuple\nand 2 dict per call. It can also be seen that ",(0,a.mdx)("inlineCode",{parentName:"li"},"fbchain_configs")," is mostly\ncalled by ",(0,a.mdx)("inlineCode",{parentName:"li"},"_add_code_coverage_configs"),".")),(0,a.mdx)("p",null,"This profiling mode is implemented by turning off garbage collection, so the\nheap retains everything, and pushing function entry/exit entries on to the heap\nwith the time they happen. After execution, the heap can be scanned in order to\nreconstruct the call tree and allocation patterns. As a result, this profile\nmode may consume significantly more memory."),(0,a.mdx)("h3",{id:"statement-profiling"},"Statement profiling"),(0,a.mdx)("p",null,"The second profiling mode tells us which statements spent most time executing.\nRunning it over a structured-logger ",(0,a.mdx)("inlineCode",{parentName:"p"},"BUCK")," file gives us a CSV file starting\nwith:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"File                            Span  Duration(s)    Count\nTOTAL                                        4.03  7187761\nfbcode_allowed_list.bzl  420:9-423:1         0.27   455884\ncell_defs.bzl             13:5-13:60         0.17   117736\nread_configs.bzl          46:5-46:55         0.08    65042\nprelude.bzl               28:9-29:20         0.07     1004\n...\n")),(0,a.mdx)("p",null,"This profile shows how much time is spent in each statement. Looking at the\nrelevant portion of ",(0,a.mdx)("inlineCode",{parentName:"p"},"fbode_allowed_list.bzl"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'for _package in _recursive_allowlist:\n    if base_path == _package or base_path.startswith(_package + "/"):\n        return True\n')),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"if")," statement is at location 420:9-423:1 and takes 0.27s. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"if"),"\nstatement runs approximately 456K times. While looking at the outer statement in\nthe profile (not shown), it can be seen that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"for")," loop is only called 3188\ntimes, implying an average of 143 iterations per call. It's possible that this\nloop could be rewritten as some clever dictionary lookup, perhaps iterating over\nthe path components of ",(0,a.mdx)("inlineCode",{parentName:"p"},"_package"),"."),(0,a.mdx)("p",null,"Line profiling builds on top of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"before_stmt")," hook that is used for\ndebugging. It records the time each statement is entered then blames that\nstatement for all time until the next statement. That means that sometimes, due\nto statements making function calls, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"return")," of the function call may be\n'blamed' until the next statement executes. As a result, treat the results with\nslight caution."),(0,a.mdx)("h3",{id:"flame-profiling"},"Flame profiling"),(0,a.mdx)("p",null,"The flame profiling modes produces a ",(0,a.mdx)("inlineCode",{parentName:"p"},".svg")," flamegraph showing either time spent\nor allocations. You can open it in Google chrome and inspect the resulting flame\ngraph."),(0,a.mdx)(s,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"The flame profile provides a list of how time is used based on call stacks (you\ncan download an example ",(0,a.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/px/p/1Mz2W"},"here"),").")),(0,a.mdx)("h2",{id:"native-profiling"},"Native profiling"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Profiling on Linux can be done with\n",(0,a.mdx)("inlineCode",{parentName:"li"},"perf record -g --call-graph=dwarf,20000 ...")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"perf report --call-graph"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Don't profile the ",(0,a.mdx)("inlineCode",{parentName:"li"},"buck2")," process directly unless you are interested in\nprofiling the CLI; you likely want to profile the ",(0,a.mdx)("inlineCode",{parentName:"li"},"buck2")," daemon process.\nYou can find the pid with ",(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 status")," and attach ",(0,a.mdx)("inlineCode",{parentName:"li"},"perf")," to that PID."))),(0,a.mdx)("li",{parentName:"ul"},"Profiling on Mac can be done with ",(0,a.mdx)("inlineCode",{parentName:"li"},"Instruments"),(0,a.mdx)(s,{mdxType:"FbInternalOnly"}," (for details,\nsee the Wiki article\n",(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/GraphQL/Build_Infra/Running_and_Testing_Builds/#profiling-the-rust-code"},"Running and Testing Builds"),")"),".")),(0,a.mdx)("h2",{id:"benchmarking"},"Benchmarking"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"If you want to do proper statistically relevant A/B testing, use\n",(0,a.mdx)("inlineCode",{parentName:"li"},"absh -a testa -b testb")," (see ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/stepancheg/absh"},"absh")," in\nthe GitHub repository)."),(0,a.mdx)("li",{parentName:"ul"},"To measure the number of instructions:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"On Linux, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"perf stat foo")),(0,a.mdx)("li",{parentName:"ul"},"On Mac, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"/usr/bin/time -lp foo")))),(0,a.mdx)("li",{parentName:"ul"},"On Mac, to run something with the time profiler on the command line, use\n",(0,a.mdx)("inlineCode",{parentName:"li"},"xcrun xctrace record --template 'Time Profiler' --launch -- foo"),", then\n",(0,a.mdx)("inlineCode",{parentName:"li"},"open Foo.trace")," for the name of the trace file it spits out (or pass\n",(0,a.mdx)("inlineCode",{parentName:"li"},"--output")," to control the output filename).")))}c.isMDXComponent=!0}}]);