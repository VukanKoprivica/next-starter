(()=>{var t={};t.id=968,t.ids=[968,888,660],t.modules={3363:(t,e,r)=>{"use strict";r.a(t,async(t,s)=>{try{r.r(e),r.d(e,{config:()=>x,default:()=>p,getServerSideProps:()=>f,getStaticPaths:()=>S,getStaticProps:()=>g,reportWebVitals:()=>h,routeModule:()=>_,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>P});var a=r(7480),i=r(2826),n=r(3629),l=r(5097),u=r(7971),c=r(7801),o=t([c]);c=(o.then?(await o)():o)[0];let d=a.PagesRouteModule,p=(0,n.l)(c,"default"),g=(0,n.l)(c,"getStaticProps"),S=(0,n.l)(c,"getStaticPaths"),f=(0,n.l)(c,"getServerSideProps"),x=(0,n.l)(c,"config"),h=(0,n.l)(c,"reportWebVitals"),P=(0,n.l)(c,"unstable_getStaticProps"),m=(0,n.l)(c,"unstable_getStaticPaths"),v=(0,n.l)(c,"unstable_getStaticParams"),b=(0,n.l)(c,"unstable_getServerProps"),j=(0,n.l)(c,"unstable_getServerSideProps"),_=new d({definition:{kind:i.x.PAGES,page:"/ssr",pathname:"/ssr",bundlePath:"",filename:""},components:{App:u.default,Document:l.default},userland:c});s()}catch(t){s(t)}})},7971:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>a});var s=r(997);function a({Component:t,pageProps:e}){return s.jsx(t,{...e})}r(4764)},5097:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var s=r(997),a=r(6853);function i(){return(0,s.jsxs)(a.Html,{lang:"en",children:[s.jsx(a.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},7801:(t,e,r)=>{"use strict";r.a(t,async(t,s)=>{try{r.r(e),r.d(e,{default:()=>c,getServerSideProps:()=>o});var a=r(997);r(6689);var i=r(9648),n=r(6675),l=r.n(n),u=t([i]);function c(t){return a.jsx("div",{className:"flex flex-col",children:t.ids.map(t=>(0,a.jsxs)(l(),{href:`https://coruscating-hotteok-f9463e.netlify.app/ssr/${t.id}`,children:[t.id," SSR"]},t.id))})}async function o(){let t=await i.default.get("https://coruscating-hotteok-f9463e.netlify.app/api/all").then(t=>t.data.result.map(t=>({id:t.id})));return{props:{ids:t}}}i=(u.then?(await u)():u)[0],s()}catch(t){s(t)}})},4764:()=>{},2785:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:t=>{"use strict";t.exports=require("react")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},9648:t=>{"use strict";t.exports=import("axios")},1017:t=>{"use strict";t.exports=require("path")}};var e=require("../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),s=e.X(0,[853,939,620,989,675],()=>r(3363));module.exports=s})();