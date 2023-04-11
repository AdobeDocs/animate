"use strict";(self.webpackChunkanimate=self.webpackChunkanimate||[]).push([[602],{32074:function(e,t,i){i.d(t,{l:function(){return x}});var a=i(45987),n=i(15007),s=i(95223),l=i(158),r=i(247),d=i(75900),m=i.n(d),o=i(23973),c=i(71373);const p=["className","theme","imageStyle","swiperSpeed","delay","enableNavigation","varient","slideTheme","bulletActiveClass","bulletClass","navigationPre","navigationNext","isCenter"];c.ZP.use([c.pt,c.tl,c.W_]);const u=e=>{let{texts:t,index:i}=e;return t.slots.split(",").map((e=>e.trim())).filter((e=>e.startsWith("text"))).map((e=>t[""+e+i]))},g=e=>{let{textKeys:t,heading:i,image:a,imageStyle:n,buttons:d,props:o,backgroundColor:c,index:p,slideTheme:g,theme:h,centerAlignament:v,isCenter:x}=e;return(0,s.tZ)("div",{className:m()("spectrum--"+(g||h)),css:(0,s.iv)("display:flex;",c," margin-bottom:var(--spectrum-global-dimension-size-500);flex-direction:row;@media screen and (max-width: ",l.LU,"){flex-direction:column;max-width:calc(",(0,l.MY)(6),")!important;}@media screen and (max-width: ","767px","){max-width:calc(",(0,l.MY)(3.5),")!important;padding-left:var(--spectrum-global-dimension-size-200);}","")},a?(0,s.tZ)("div",{css:(0,s.iv)("flex:1;justify-content:center;@media screen and (max-width: ",l.Av,"){margin:auto;}@media screen and (max-width: ",l.q9,"){margin:0;max-width:calc(",(0,l.MY)(3.5),")!important;}@media screen and (max-width: ",l.LU,"){max-width:calc(",(0,l.MY)(6),")!important;margin:0;}","")},(0,s.tZ)("h2",null,(0,s.tZ)(r.ZG,{image:a,styles:n}))):null,t.length>0||i||d?(0,s.tZ)("div",{css:(0,s.iv)("text-align:left;flex:1;padding-bottom:var(--spectrum-global-dimension-size-200);@media only screen and (min-width: ","375px",") and(max-width:",l.q9,"){margin:0;background:red;text-align:center!important;max-width:calc(",(0,l.MY)(3.5),")!important;padding-left:var(--spectrum-global-dimension-size-100)!important;}",x&&v,";","")},i&&(0,s.tZ)("h3",{className:"spectrum-Heading--sizeL",css:(0,s.iv)("@media only screen and (max-width: ",l.q9,"){font-size:18px!important;}","")},i.props.children),t.length>0?(0,s.tZ)("div",{className:"textWrapper",css:(0,s.iv)("@media only screen and (max-width: ",l.q9,"){&>h3{font-size:var(--spectrum-alias-heading-xxs-text-size)!important;}}","")},(0,s.tZ)(u,{texts:o,index:p})):null,d?(0,s.tZ)("div",{css:(0,s.iv)("margin-top:var(--spectrum-global-dimension-size-200);@media only screen and (max-width: ",l.q9,"){div:first-child{justify-content:center!important;}}","")},(0,s.tZ)(r.F5,{buttons:d})):null):null)};var h={name:"1n796wp",styles:"background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0"},v={name:"1n796wp",styles:"background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0"};const x=e=>{let{className:t,theme:i="dark",imageStyle:r="",swiperSpeed:d=600,delay:c=2500,enableNavigation:u=!1,varient:x="default",slideTheme:b,bulletActiveClass:w="swiper-pagination-bullet-active",bulletClass:y="swiper-pagination-bullet",navigationPre:f="swiper-button-prev",navigationNext:Z="swiper-button-next",isCenter:k=!1}=e,N=(0,a.Z)(e,p);let C=Object.keys(N).filter((e=>e.startsWith("image")));C=C.map(((e,t)=>({image:N[e],heading:N["heading"+t],buttons:N["buttons"+t],bgimage:N["bgimage"+t]})));const q=N.slots.split(",").filter((e=>e.trim().startsWith("text"))),z="background-color: var(--spectrum-global-color-gray-"+("light"===b?"50":"")+");";if("default"===x)return(0,s.tZ)("section",{className:m()(t,"spectrum--"+i),css:v,role:"button",tabindex:0,onKeyDown:e=>{if("ArrowRight"===e.key){document.querySelector(".swiper").swiper.slideNext()}if("ArrowLeft"===e.key){document.querySelector(".swiper").swiper.slidePrev()}}},(0,s.tZ)("div",{css:(0,s.iv)("max-width:calc(",(0,l.MY)(12),");margin:auto;@media screen and (max-width: ",l.q9,"){max-width:calc(",(0,l.MY)(2.75),")!important;}@media screen and (min-width: ",l.q9,") and (max-width: ",l.LU,"){padding-bottom:0;margin-top:0;max-width:calc(",(0,l.MY)(6),")!important;}","")},(0,s.tZ)(o.tq,{speed:d,slidesPerView:"auto",autoplay:{delay:c},pagination:{bulletActiveClass:w,bulletClass:y,clickable:!0},navigation:{nextEl:"."+Z,prevEl:"."+f}},C.map(((e,t)=>(0,s.tZ)(o.o5,{key:t},(0,s.tZ)(g,{textKeys:q,heading:e.heading,image:e.image,imageStyle:r,buttons:e.buttons,props:N,backgroundColor:z,index:t,slideTheme:b,theme:i}),u?(0,s.tZ)(n.default.Fragment,null,(0,s.tZ)("div",{className:f}),(0,s.tZ)("div",{className:Z})):null))))));if("fullWidth"===x){let e="margin:auto";return(0,s.tZ)("section",{className:m()(t,"spectrum--"+i),css:h,role:"button",tabindex:0,onKeyDown:e=>{if("ArrowRight"===e.key){document.querySelector(".swiper").swiper.slideNext()}if("ArrowLeft"===e.key){document.querySelector(".swiper").swiper.slidePrev()}}},(0,s.tZ)(o.tq,{speed:d,slidesPerView:"auto",autoplay:{delay:c},pagination:{bulletActiveClass:w,bulletClass:y,clickable:!0},navigation:{nextEl:"."+Z,prevEl:"."+f}},C.map(((t,a)=>{var n;return(0,s.tZ)(o.o5,{key:a},(0,s.tZ)("div",{css:(0,s.iv)("width:100%;@media screen and (max-width: ",l.q9,"){width:100%!important;}",""),className:null===(n=t.bgimage.props)||void 0===n?void 0:n.children},(0,s.tZ)("div",{css:(0,s.iv)("max-width:calc(",(0,l.MY)(12),");margin:auto;@media screen and (min-width: ",l.q9,") and (max-width: ",l.LU,"){max-width:calc(",(0,l.MY)(6),");}","")},(0,s.tZ)(g,{textKeys:q,heading:t.heading,image:t.image,imageStyle:r,buttons:t.buttons,props:N,backgroundColor:z,index:a,slideTheme:b,theme:i,isCenter:k,centerAlignament:e}),u?(0,s.tZ)("div",null,(0,s.tZ)("div",{className:f}),(0,s.tZ)("div",{className:Z})):null)))}))))}}}}]);
//# sourceMappingURL=c9f1e04f-3e6fd330c9402aa8bb7c.js.map