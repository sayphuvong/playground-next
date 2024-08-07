"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{7269:function(t,r,e){e.d(r,{A:function(){return w}});var o=e(1527);e(959);var a=e(8131),n=e(2859),i=e(8122),s=e(8135),c=e(8396),l=e(6570),d=e(533),m=e(8260),p=e(6288),u=e(9570),f=e(5416),y={root:"m_8d3f4000",icon:"m_8d3afb97",loader:"m_302b9fb1",group:"m_1a0f1b21"};let g={orientation:"horizontal"},v=(0,n.Z)((t,{borderWidth:r})=>({group:{"--ai-border-width":(0,u.h)(r)}})),h=(0,f.d)((t,r)=>{let e=(0,i.w)("ActionIconGroup",g,t),{className:a,style:n,classNames:l,styles:d,unstyled:m,orientation:p,vars:u,borderWidth:f,variant:h,mod:b,...x}=(0,i.w)("ActionIconGroup",g,t),w=(0,s.y)({name:"ActionIconGroup",props:e,classes:y,className:a,style:n,classNames:l,styles:d,unstyled:m,vars:u,varsResolver:v,rootSelector:"group"});return(0,o.jsx)(c.x,{...w("group"),ref:r,variant:h,mod:[{"data-orientation":p},b],role:"group",...x})});h.classes=y,h.displayName="@mantine/core/ActionIconGroup";let b={},x=(0,n.Z)((t,{size:r,radius:e,variant:o,gradient:n,color:i,autoContrast:s})=>{let c=t.variantColorResolver({color:i||t.primaryColor,theme:t,gradient:n,variant:o||"filled",autoContrast:s});return{root:{"--ai-size":(0,a.ap)(r,"ai-size"),"--ai-radius":void 0===e?void 0:(0,a.H5)(e),"--ai-bg":i||o?c.background:void 0,"--ai-hover":i||o?c.hover:void 0,"--ai-hover-color":i||o?c.hoverColor:void 0,"--ai-color":c.color,"--ai-bd":i||o?c.border:void 0}}}),w=(0,l.b)((t,r)=>{let e=(0,i.w)("ActionIcon",b,t),{className:a,unstyled:n,variant:l,classNames:u,styles:f,style:g,loading:v,loaderProps:h,size:w,color:C,radius:j,__staticSelector:k,gradient:_,vars:Z,children:N,disabled:P,"data-disabled":A,autoContrast:G,mod:M,...Y}=e,R=(0,s.y)({name:["ActionIcon",k],props:e,className:a,style:g,classes:y,classNames:u,styles:f,unstyled:n,vars:Z,varsResolver:x});return(0,o.jsxs)(p.k,{...R("root",{active:!P&&!v&&!A}),...Y,unstyled:n,variant:l,size:w,disabled:P||v,ref:r,mod:[{loading:v,disabled:P||A},M],children:[(0,o.jsx)(m.u,{mounted:!!v,transition:"slide-down",duration:150,children:t=>(0,o.jsx)(c.x,{component:"span",...R("loader",{style:t}),"aria-hidden":!0,children:(0,o.jsx)(d.a,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...h})})}),(0,o.jsx)(c.x,{component:"span",mod:{loading:v},...R("icon"),children:N})]})});w.classes=y,w.displayName="@mantine/core/ActionIcon",w.Group=h},8375:function(t,r,e){e.d(r,{q:function(){return j}});var o=e(1527),a=e(959),n=e(8131),i=e(2859),s=e(8122),c=e(8135),l=e(8396),d=e(6570),m=e(5416);let p=(0,a.createContext)(null),u=p.Provider;var f={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let y={},g=(0,i.Z)((t,{spacing:r})=>({group:{"--ag-spacing":(0,n.bG)(r)}})),v=(0,m.d)((t,r)=>{let e=(0,s.w)("AvatarGroup",y,t),{classNames:a,className:n,style:i,styles:d,unstyled:m,vars:p,spacing:v,...h}=e,b=(0,c.y)({name:"AvatarGroup",classes:f,props:e,className:n,style:i,classNames:a,styles:d,unstyled:m,vars:p,varsResolver:g,rootSelector:"group"});return(0,o.jsx)(u,{value:!0,children:(0,o.jsx)(l.x,{ref:r,...b("group"),...h})})});function h(t){return(0,o.jsx)("svg",{...t,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function b(t,r=2){let e=t.split(" ");return 1===e.length?t.slice(0,r).toUpperCase():e.map(t=>t[0]).slice(0,r).join("").toUpperCase()}v.classes=f,v.displayName="@mantine/core/AvatarGroup";let x=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],w={},C=(0,i.Z)((t,{size:r,radius:e,variant:o,gradient:a,color:i,autoContrast:s,name:c,allowedInitialsColors:l})=>{let d="initials"===i&&"string"==typeof c?function(t,r=x){let e=function(t){let r=0;for(let e=0;e<t.length;e+=1){let o=t.charCodeAt(e);r=(r<<5)-r+o|0}return r}(b(t)),o=Math.abs(e)%r.length;return r[o]}(c,l):i,m=t.variantColorResolver({color:d||"gray",theme:t,gradient:a,variant:o||"light",autoContrast:s});return{root:{"--avatar-size":(0,n.ap)(r,"avatar-size"),"--avatar-radius":void 0===e?void 0:(0,n.H5)(e),"--avatar-bg":d||o?m.background:void 0,"--avatar-color":d||o?m.color:void 0,"--avatar-bd":d||o?m.border:void 0}}}),j=(0,d.b)((t,r)=>{let e=(0,s.w)("Avatar",w,t),{classNames:n,className:i,style:d,styles:m,unstyled:u,vars:y,src:g,alt:v,radius:x,color:j,gradient:k,imageProps:_,children:Z,autoContrast:N,mod:P,name:A,allowedInitialsColors:G,...M}=e,Y=function(){let t=(0,a.useContext)(p);return{withinGroup:!!t}}(),[R,E]=(0,a.useState)(!g),O=(0,c.y)({name:"Avatar",props:e,classes:f,className:i,style:d,classNames:n,styles:m,unstyled:u,vars:y,varsResolver:C});return(0,a.useEffect)(()=>E(!g),[g]),(0,o.jsx)(l.x,{...O("root"),mod:[{"within-group":Y.withinGroup},P],ref:r,...M,children:R?(0,o.jsx)("span",{...O("placeholder"),title:v,children:Z||"string"==typeof A&&b(A)||(0,o.jsx)(h,{})}):(0,o.jsx)("img",{..._,...O("image"),src:g,alt:v,onError:t=>{E(!0),_?.onError?.(t)}})})});j.classes=f,j.displayName="@mantine/core/Avatar",j.Group=v},6730:function(t,r,e){e.d(r,{C:function(){return f}});var o=e(1527);e(959);var a=e(8131),n=e(2859),i=e(6121),s=e(8122),c=e(8135),l=e(8396),d=e(6570),m={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let p={},u=(0,n.Z)((t,{radius:r,color:e,gradient:o,variant:n,size:s,autoContrast:c})=>{let l=t.variantColorResolver({color:e||t.primaryColor,theme:t,gradient:o,variant:n||"filled",autoContrast:c});return{root:{"--badge-height":(0,a.ap)(s,"badge-height"),"--badge-padding-x":(0,a.ap)(s,"badge-padding-x"),"--badge-fz":(0,a.ap)(s,"badge-fz"),"--badge-radius":void 0===r?void 0:(0,a.H5)(r),"--badge-bg":e||n?l.background:void 0,"--badge-color":e||n?l.color:void 0,"--badge-bd":e||n?l.border:void 0,"--badge-dot-color":"dot"===n?(0,i.p)(e,t):void 0}}}),f=(0,d.b)((t,r)=>{let e=(0,s.w)("Badge",p,t),{classNames:a,className:n,style:i,styles:d,unstyled:f,vars:y,radius:g,color:v,gradient:h,leftSection:b,rightSection:x,children:w,variant:C,fullWidth:j,autoContrast:k,circle:_,mod:Z,...N}=e,P=(0,c.y)({name:"Badge",props:e,classes:m,className:n,style:i,classNames:a,styles:d,unstyled:f,vars:y,varsResolver:u});return(0,o.jsxs)(l.x,{variant:C,mod:[{block:j,circle:_},Z],...P("root",{variant:C}),ref:r,...N,children:[b&&(0,o.jsx)("span",{...P("section"),"data-position":"left",children:b}),(0,o.jsx)("span",{...P("label"),children:w}),x&&(0,o.jsx)("span",{...P("section"),"data-position":"right",children:x})]})});f.classes=m,f.displayName="@mantine/core/Badge"},8463:function(t,r,e){e.d(r,{Z:function(){return C}});var o=e(1527),a=e(959),n=e(8131),i=e(2859),s=e(8122),c=e(8135),l=e(6570),d=e(8396),m={root:"m_1b7284a3"};let p={},u=(0,i.Z)((t,{radius:r,shadow:e})=>({root:{"--paper-radius":void 0===r?void 0:(0,n.H5)(r),"--paper-shadow":(0,n.Xj)(e)}})),f=(0,l.b)((t,r)=>{let e=(0,s.w)("Paper",p,t),{classNames:a,className:n,style:i,styles:l,unstyled:f,withBorder:y,vars:g,radius:v,shadow:h,variant:b,mod:x,...w}=e,C=(0,c.y)({name:"Paper",props:e,classes:m,className:n,style:i,classNames:a,styles:l,unstyled:f,vars:g,varsResolver:u});return(0,o.jsx)(d.x,{ref:r,mod:[{"data-with-border":y},x],...C("root"),variant:b,...w})});f.classes=m,f.displayName="@mantine/core/Paper";let[y,g]=function(t){let r=(0,a.createContext)(null),e=()=>{let e=(0,a.useContext)(r);if(null===e)throw Error(t);return e},n=({children:t,value:e})=>(0,o.jsx)(r.Provider,{value:e,children:t});return[n,e]}("Card component was not found in tree");var v={root:"m_e615b15f",section:"m_599a2148"};let h={},b=(0,l.b)((t,r)=>{let e=(0,s.w)("CardSection",h,t),{classNames:a,className:n,style:i,styles:c,vars:l,withBorder:m,inheritPadding:p,mod:u,...f}=e,y=g();return(0,o.jsx)(d.x,{ref:r,mod:[{"with-border":m,"inherit-padding":p},u],...y.getStyles("section",{className:n,style:i,styles:c,classNames:a}),...f})});b.classes=v,b.displayName="@mantine/core/CardSection";let x={},w=(0,i.Z)((t,{padding:r})=>({root:{"--card-padding":(0,n.bG)(r)}})),C=(0,l.b)((t,r)=>{let e=(0,s.w)("Card",x,t),{classNames:n,className:i,style:l,styles:d,unstyled:m,vars:p,children:u,padding:g,...h}=e,C=(0,c.y)({name:"Card",props:e,classes:v,className:i,style:l,classNames:n,styles:d,unstyled:m,vars:p,varsResolver:w}),j=a.Children.toArray(u),k=j.map((t,r)=>"object"==typeof t&&t&&"type"in t&&t.type===b?(0,a.cloneElement)(t,{"data-first-section":0===r||void 0,"data-last-section":r===j.length-1||void 0}):t);return(0,o.jsx)(y,{value:{getStyles:C},children:(0,o.jsx)(f,{ref:r,unstyled:m,...C("root"),...h,children:k})})});C.classes=v,C.displayName="@mantine/core/Card",C.Section=b},2617:function(t,r,e){e.d(r,{M:function(){return d}});var o=e(1527);e(959);var a=e(8122),n=e(8135),i=e(8396),s=e(6570),c={root:"m_4451eb3a"};let l={},d=(0,s.b)((t,r)=>{let e=(0,a.w)("Center",l,t),{classNames:s,className:d,style:m,styles:p,unstyled:u,vars:f,inline:y,mod:g,...v}=e,h=(0,n.y)({name:"Center",props:e,classes:c,className:d,style:m,classNames:s,styles:p,unstyled:u,vars:f});return(0,o.jsx)(i.x,{ref:r,mod:[{inline:y},g],...h("root"),...v})});d.classes=c,d.displayName="@mantine/core/Center"},7008:function(t,r,e){e.d(r,{Z:function(){return f}});var o=e(1527),a=e(959),n=e(8131),i=e(2859),s=e(8122),c=e(8135),l=e(8396),d=e(5416),m={root:"m_4081bf90"};let p={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},u=(0,i.Z)((t,{grow:r,preventGrowOverflow:e,gap:o,align:a,justify:i,wrap:s},{childWidth:c})=>({root:{"--group-child-width":r&&e?c:void 0,"--group-gap":(0,n.bG)(o),"--group-align":a,"--group-justify":i,"--group-wrap":s}})),f=(0,d.d)((t,r)=>{let e=(0,s.w)("Group",p,t),{classNames:i,className:d,style:f,styles:y,unstyled:g,children:v,gap:h,align:b,justify:x,wrap:w,grow:C,preventGrowOverflow:j,vars:k,variant:_,__size:Z,mod:N,...P}=e,A=a.Children.toArray(v).filter(Boolean),G=A.length,M=(0,n.bG)(h??"md"),Y=`calc(${100/G}% - (${M} - ${M} / ${G}))`,R=(0,c.y)({name:"Group",props:e,stylesCtx:{childWidth:Y},className:d,style:f,classes:m,classNames:i,styles:y,unstyled:g,vars:k,varsResolver:u});return(0,o.jsx)(l.x,{...R("root"),ref:r,variant:_,mod:[{grow:C},N],size:Z,...P,children:A})});f.classes=m,f.displayName="@mantine/core/Group"},533:function(t,r,e){e.d(r,{a:function(){return x}});var o=e(1527),a=e(959),n=e(8131),i=e(2859),s=e(6121),c=e(8122),l=e(8135),d=e(8396),m=e(5416),p=e(4814),u={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};let f=(0,a.forwardRef)(({className:t,...r},e)=>(0,o.jsxs)(d.x,{component:"span",className:(0,p.Z)(u.barsLoader,t),...r,ref:e,children:[(0,o.jsx)("span",{className:u.bar}),(0,o.jsx)("span",{className:u.bar}),(0,o.jsx)("span",{className:u.bar})]})),y=(0,a.forwardRef)(({className:t,...r},e)=>(0,o.jsxs)(d.x,{component:"span",className:(0,p.Z)(u.dotsLoader,t),...r,ref:e,children:[(0,o.jsx)("span",{className:u.dot}),(0,o.jsx)("span",{className:u.dot}),(0,o.jsx)("span",{className:u.dot})]})),g=(0,a.forwardRef)(({className:t,...r},e)=>(0,o.jsx)(d.x,{component:"span",className:(0,p.Z)(u.ovalLoader,t),...r,ref:e})),v={bars:f,oval:g,dots:y},h={loaders:v,type:"oval"},b=(0,i.Z)((t,{size:r,color:e})=>({root:{"--loader-size":(0,n.ap)(r,"loader-size"),"--loader-color":e?(0,s.p)(e,t):void 0}})),x=(0,m.d)((t,r)=>{let e=(0,c.w)("Loader",h,t),{size:a,color:n,type:i,vars:s,className:m,style:p,classNames:f,styles:y,unstyled:g,loaders:v,variant:x,children:w,...C}=e,j=(0,l.y)({name:"Loader",props:e,classes:u,className:m,style:p,classNames:f,styles:y,unstyled:g,vars:s,varsResolver:b});return w?(0,o.jsx)(d.x,{...j("root"),ref:r,...C,children:w}):(0,o.jsx)(d.x,{...j("root"),ref:r,component:v[i],variant:x,size:a,...C})});x.defaultLoaders=v,x.classes=u,x.displayName="@mantine/core/Loader"},3561:function(t,r,e){e.d(r,{x:function(){return y}});var o=e(1527);e(959);var a=e(8131),n=e(2859),i=e(6121),s=e(7706),c=e(8122),l=e(8135),d=e(8396),m=e(6570),p={root:"m_b6d8b162"};let u={inherit:!1},f=(0,n.Z)((t,{variant:r,lineClamp:e,gradient:o,size:n,color:c})=>({root:{"--text-fz":(0,a.yv)(n),"--text-lh":(0,a.Dp)(n),"--text-gradient":"gradient"===r?(0,s.u)(o,t):void 0,"--text-line-clamp":"number"==typeof e?e.toString():void 0,"--text-color":c?(0,i.p)(c,t):void 0}})),y=(0,m.b)((t,r)=>{let e=(0,c.w)("Text",u,t),{lineClamp:a,truncate:n,inline:i,inherit:s,gradient:m,span:y,__staticSelector:g,vars:v,className:h,style:b,classNames:x,styles:w,unstyled:C,variant:j,mod:k,size:_,...Z}=e,N=(0,l.y)({name:["Text",g],props:e,classes:p,className:h,style:b,classNames:x,styles:w,unstyled:C,vars:v,varsResolver:f});return(0,o.jsx)(d.x,{...N("root",{focusable:!0}),ref:r,component:y?"span":"p",variant:j,mod:[{"data-truncate":"start"===n?"start":"end"===n||n?"end":void 0,"data-line-clamp":"number"==typeof a,"data-inline":i,"data-inherit":s},k],size:_,...Z})});y.classes=p,y.displayName="@mantine/core/Text"},8260:function(t,r,e){e.d(r,{u:function(){return m}});var o=e(1527),a=e(9570),n=e(959);let i=t=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${(0,a.h)("bottom"===t?10:-10)})`},transitionProperty:"transform, opacity"}),s={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:`translateY(${(0,a.h)(30)}`},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:`translateY(${(0,a.h)(-30)}`},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:`translateX(${(0,a.h)(30)}`},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:`translateX(${(0,a.h)(-30)}`},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,a.h)(-20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:`translateY(${(0,a.h)(20)}) skew(-10deg, -5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,a.h)(20)}) rotate(-5deg)`},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:`translateY(${(0,a.h)(20)}) rotate(5deg)`},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...i("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...i("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...i("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...i("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...i("top"),common:{transformOrigin:"top right"}}},c={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};var l=e(422),d=e(7328);function m({keepMounted:t,transition:r="fade",duration:e=250,exitDuration:a=e,mounted:i,children:m,timingFunction:p="ease",onExit:u,onEntered:f,onEnter:y,onExited:g,enterDelay:v,exitDelay:h}){let{transitionDuration:b,transitionStatus:x,transitionTimingFunction:w}=function({duration:t,exitDuration:r,timingFunction:e,mounted:o,onEnter:a,onExit:i,onEntered:s,onExited:c,enterDelay:m,exitDelay:p}){let u=(0,d.rZ)(),f=function(t,r,{getInitialValueInEffect:e}={getInitialValueInEffect:!0}){var o;let[a,i]=(0,n.useState)(e?r:"boolean"==typeof o?o:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(t).matches),s=(0,n.useRef)();return(0,n.useEffect)(()=>{if("matchMedia"in window)return s.current=window.matchMedia(t),i(s.current.matches),function(t,r){try{return t.addEventListener("change",r),()=>t.removeEventListener("change",r)}catch(e){return t.addListener(r),()=>t.removeListener(r)}}(s.current,t=>i(t.matches))},[t]),a}("(prefers-reduced-motion: reduce)",void 0,void 0),y=!!u.respectReducedMotion&&f,[g,v]=(0,n.useState)(y?0:t),[h,b]=(0,n.useState)(o?"entered":"exited"),x=(0,n.useRef)(-1),w=(0,n.useRef)(-1),C=(0,n.useRef)(-1),j=e=>{let o=e?a:i,n=e?s:c;window.clearTimeout(x.current);let d=y?0:e?t:r;v(d),0===d?("function"==typeof o&&o(),"function"==typeof n&&n(),b(e?"entered":"exited")):C.current=requestAnimationFrame(()=>{l.flushSync(()=>{b(e?"pre-entering":"pre-exiting")}),C.current=requestAnimationFrame(()=>{"function"==typeof o&&o(),b(e?"entering":"exiting"),x.current=window.setTimeout(()=>{"function"==typeof n&&n(),b(e?"entered":"exited")},d)})})},k=t=>{if(window.clearTimeout(w.current),"number"!=typeof(t?m:p)){j(t);return}w.current=window.setTimeout(()=>{j(t)},t?m:p)};return!function(t,r){let e=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{e.current=!1},[]),(0,n.useEffect)(()=>{if(e.current)return t();e.current=!0},r)}(()=>{k(o)},[o]),(0,n.useEffect)(()=>()=>{window.clearTimeout(x.current),cancelAnimationFrame(C.current)},[]),{transitionDuration:g,transitionStatus:h,transitionTimingFunction:e||"ease"}}({mounted:i,exitDuration:a,duration:e,timingFunction:p,onExit:u,onEntered:f,onEnter:y,onExited:g,enterDelay:v,exitDelay:h});return 0===b?i?(0,o.jsx)(o.Fragment,{children:m({})}):t?m({display:"none"}):null:"exited"===x?t?m({display:"none"}):null:(0,o.jsx)(o.Fragment,{children:m(function({transition:t,state:r,duration:e,timingFunction:o}){let a={transitionDuration:`${e}ms`,transitionTimingFunction:o};return"string"==typeof t?t in s?{transitionProperty:s[t].transitionProperty,...a,...s[t].common,...s[t][c[r]]}:{}:{transitionProperty:t.transitionProperty,...a,...t.common,...t[c[r]]}}({transition:r,duration:b,state:x,timingFunction:w}))})}m.displayName="@mantine/core/Transition"},6288:function(t,r,e){e.d(r,{k:function(){return d}});var o=e(1527);e(959);var a=e(8122),n=e(8135),i=e(8396),s=e(6570),c={root:"m_87cf2631"};let l={__staticSelector:"UnstyledButton"},d=(0,s.b)((t,r)=>{let e=(0,a.w)("UnstyledButton",l,t),{className:s,component:d="button",__staticSelector:m,unstyled:p,classNames:u,styles:f,style:y,...g}=e,v=(0,n.y)({name:m,props:e,classes:c,className:s,style:y,classNames:u,styles:f,unstyled:p});return(0,o.jsx)(i.x,{...v("root",{focusable:!0}),component:d,ref:r,type:"button"===d?"button":void 0,...g})});d.classes=c,d.displayName="@mantine/core/UnstyledButton"},1360:function(t,r,e){e.d(r,{Z:function(){return n}});var o=e(959),a={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(t,r,e,n)=>{let i=(0,o.forwardRef)(({color:e="currentColor",size:i=24,stroke:s=2,title:c,className:l,children:d,...m},p)=>(0,o.createElement)("svg",{ref:p,...a[t],width:i,height:i,className:["tabler-icon",`tabler-icon-${r}`,l].join(" "),..."filled"===t?{fill:e}:{strokeWidth:s,stroke:e},...m},[c&&(0,o.createElement)("title",{key:"svg-title"},c),...n.map(([t,r])=>(0,o.createElement)(t,r)),...Array.isArray(d)?d:[d]]));return i.displayName=`${e}`,i}},5638:function(t,r,e){e.d(r,{Z:function(){return o}});/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var o=(0,e(1360).Z)("outline","bookmark","IconBookmark",[["path",{d:"M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z",key:"svg-0"}]])},6672:function(t,r,e){e.d(r,{Z:function(){return o}});/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var o=(0,e(1360).Z)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},8858:function(t,r,e){e.d(r,{Z:function(){return o}});/**
 * @license @tabler/icons-react v3.11.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var o=(0,e(1360).Z)("outline","share","IconShare",[["path",{d:"M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-1"}],["path",{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-2"}],["path",{d:"M8.7 10.7l6.6 -3.4",key:"svg-3"}],["path",{d:"M8.7 13.3l6.6 3.4",key:"svg-4"}]])}}]);