import{b as pe,c as A,d as ue,e as he,f as G,g as be,h as xe}from"./chunk-PFRAKCBC.js";import{c as O,d as B,f as w,g as I}from"./chunk-434C3U3Q.js";import{a as de,b as ce,d as W,e as Z}from"./chunk-ZQ2GZM7J.js";import{a as $}from"./chunk-LP6S46GB.js";import{a as fe}from"./chunk-BUMC3QZ3.js";import{$a as C,Ba as j,Bb as se,Ga as m,Ia as K,Ja as ee,Jb as me,K as Q,Ka as te,M as X,Ma as ie,Na as ne,Nb as F,Qa as _,S as g,U as u,Va as y,X as Y,Xa as v,_a as f,aa as H,ab as S,ba as L,bb as E,ca as R,cb as T,db as o,eb as l,fb as s,gb as P,hb as b,ia as U,ib as x,lb as oe,mb as re,nb as ae,ob as d,pa as J,pb as M,qb as le,rb as z,sb as V,tb as N,vb as h}from"./chunk-D7QIMH2O.js";var He="@",Le=(()=>{let e=class e{constructor(i,n,a,c,p){this.doc=i,this.delegate=n,this.zone=a,this.animationType=c,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=g(ee,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ADEY7S4P.js").then(n=>n)).catch(n=>{throw new Q(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let c=new a(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(i,n){let a=this.delegate.createRenderer(i,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let c=new q(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let De=p.createRenderer(i,n);c.use(De),this.scheduler?.notify(9)}).catch(p=>{c.use(a)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){K()},e.\u0275prov=X({token:e,factory:e.\u0275fac});let t=e;return t})(),q=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,i,n){this.delegate.insertBefore(e,r,i,n)}removeChild(e,r,i){this.delegate.removeChild(e,r,i)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,i,n){this.delegate.setAttribute(e,r,i,n)}removeAttribute(e,r,i){this.delegate.removeAttribute(e,r,i)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,i,n){this.delegate.setStyle(e,r,i,n)}removeStyle(e,r,i){this.delegate.removeStyle(e,r,i)}setProperty(e,r,i){this.shouldReplay(r)&&this.replay.push(n=>n.setProperty(e,r,i)),this.delegate.setProperty(e,r,i)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,i){return this.shouldReplay(r)&&this.replay.push(n=>n.listen(e,r,i)),this.delegate.listen(e,r,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(He)}};function ge(t="animations"){return ie("NgAsyncAnimations"),Y([{provide:te,useFactory:(e,r,i)=>new Le(e,r,i,t),deps:[me,de,ne]},{provide:J,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ve=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-contact"]],standalone:!0,features:[h],decls:20,vars:0,consts:[["title","CONTACT"],[1,"card-body"],[1,"my-10","section-title"],[1,"title","text-[32px]","md:text-4xl","lg:text-5xl","font-extralight","text-black","dark:text-white","leading-1.27"],[1,"font-semibold","text-theme"],[1,"max-w-2xl","mt-4","md:mt-6","subtitle"],[1,"my-4","font-bold","text-black","dark:text-white"],["href","home/introduce",1,"text-center","text-sm","border","border-theme","inline-flex","items-center","justify-center","gap-2","text-black","dark:text-white","rounded-3xl","py-3.5","px-8","transition","duration-300","hover:bg-theme","hover:text-white"]],template:function(n,a){n&1&&(o(0,"app-card",0)(1,"div",1)(2,"div",2)(3,"h2",3),d(4," Contact "),o(5,"span",4),d(6,"Me"),l()(),o(7,"p",5),d(8," I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute "),l()(),o(9,"div")(10,"h1",6),d(11,"Thanks for Contacting Me"),l(),o(12,"p"),d(13,"I appreciate that you took the time to send the message. Your Message has been sent to the Admin Panel."),l(),s(14,"br"),o(15,"p"),d(16,"Iam getting back to you soon."),l(),s(17,"br"),o(18,"a",7),d(19,"Back to Home"),l()()()())},dependencies:[fe]});let t=e;return t})();var ye=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-BJO3LD3I.js").then(t=>t.routes)},{path:"blogs",loadChildren:()=>import("./chunk-EEJBZMXG.js").then(t=>t.routes)},{path:"poftfolio",loadChildren:()=>import("./chunk-6N34LM5T.js").then(t=>t.routes)},{path:"contact-form",component:ve}];var Ce={providers:[se({eventCoalescing:!0}),he(ye),ge()]};var D="dark";function we(t){return t==="dark"?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light"),D="dark"):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"),D="light"),localStorage.setItem("theme",D),{icon:D==="dark"?"bi bi-sun":"bi bi-moon-stars",themes:D}}var ke=(()=>{let e=class e{constructor(){this.active=!1,this.open=_(!1),this.theme=localStorage.getItem("theme")??"light",this.changeTheme()}changeTheme(i){we(i??this.theme),this.theme=localStorage.getItem("theme")??"light"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-theme"]],inputs:{open:[1,"open"]},outputs:{open:"openChange"},standalone:!0,features:[h],decls:11,vars:6,consts:[[1,"style-switcher","fixed","right-0","top-1/2","-translate-y-1/2","w-[15rem]","transition","z-999","active"],[1,"toggle-btn","absolute","-left-15","w-15","h-15","bg-white","dark:bg-nightBlack","text-black","dark:text-white","flex-center","cursor-pointer","rounded-[.5rem_0_0_.5rem]","select-none","shadow-sm","shadow-slate-400","flex","items-center","justify-center",3,"click"],[1,"bi","bi-gear","animate-spin-slow"],[1,"theme-select","shadow-sm","shadow-slate-400","px-6","py-4","bg-white","dark:bg-nightBlack","rounded-[0_0_0_.5rem]"],[1,"font-medium","mb-2","!text-black","dark:!text-white","text-lg"],[1,"flex","items-center","justify-between","gap-4"],["id","dark_theme","title","Active Dark Theme",1,"border","w-full","px-4","py-4","flex","flex-col","gap-1","justify-center","items-center","rounded-md","active",3,"click"],[1,"bi","bi-moon"],["id","light_theme","title","Active Light Theme",1,"border","w-full","px-4","py-4","flex","flex-col","gap-1","justify-center","items-center","dark:text-white","rounded-md",3,"click"],[1,"bi","bi-sun"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"div",1),b("click",function(){return a.active=!a.active,a.open.set(!1)}),s(2,"span",2),l(),o(3,"div",3)(4,"h5",4),d(5,"Theme Mode"),l(),o(6,"div",5)(7,"button",6),b("click",function(){return a.changeTheme("dark")}),s(8,"i",7),l(),o(9,"button",8),b("click",function(){return a.changeTheme("light")}),s(10,"i",9),l()()()()),n&2&&(f(a.active&&!a.open()?"translate-x-0":"translate-x-[15rem]"),m(7),f(a.theme==="dark"?"bg-flashWhite text-black":"bg-transparent"),m(2),f(a.theme==="light"?"bg-flashWhite text-black":"bg-transparent"))},dependencies:[F]});let t=e;return t})();var _e=O("scaleAnimation",[I(":enter",[w({width:"0",overflow:"hidden"}),B("500ms",w({width:"100%",overflow:"hidden"}))]),I(":leave",[w({width:"100%",overflow:"hidden"}),B("500ms",w({width:"0",overflow:"hidden"}))])]);function Re(t,e){if(t&1&&(o(0,"span",24),d(1),l()),t&2){let r=x().$index,i=x();v("@scaleAnimation",void 0),m(),M(i.profession[r])}}function je(t,e){if(t&1&&y(0,Re,2,2,"span",24),t&2){let r=e.$index,i=x();C(i.active===r?0:-1)}}function Pe(t,e){if(t&1&&(o(0,"li")(1,"span",25),d(2),l(),o(3,"span"),d(4),l()()),t&2){let r=e.$implicit;m(2),M(r.label),m(2),M(r.value)}}function ze(t,e){if(t&1&&(o(0,"div",14),s(1,"app-circular-progress-bar",26),o(2,"span",27),s(3,"app-incremental-number",28),d(4,"%"),l(),o(5,"p",29),d(6),l()()),t&2){let r=e.$implicit;m(),v("progress",r.value),m(2),v("endValue",r.value),m(3),M(r.name)}}var Se=(()=>{let e=class e{constructor(){this.profile=[{label:"Residence:",value:"Cuba"},{label:"City:",value:"Havana"},{label:"Age:",value:"27"}],this.profession=["Web Developer ","Photographers ","Web Designer "],this.language=[{name:"HTML",value:90},{name:"CSS",value:80},{name:"JS",value:80},{name:"PHP",value:90}],this.width=!1,this.active=0}ngOnInit(){this.interval=setInterval(()=>{let i=this.active;this.active=4,setTimeout(()=>{this.active=i,this.active>1?this.active=0:this.active+=1},500)},3e3)}ngOnDestroy(){clearInterval(this.interval)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-profile"]],standalone:!0,features:[h],decls:32,vars:0,consts:[[1,"w-full","mx-auto","minfo__sidebar__wrapper","xl:fixed","xl:top-1/2","xl:-translate-y-1/2","md:max-w-sidebar","xl:max-2xl:max-w-xs","z-999"],[1,"p-3","max-xl:mb-3","overflow-hidden","minfo__sidebar","bg-white","dark:bg-nightBlack","rounded-2xl"],[1,"mx-4","mt-12","text-center","user-info","lg:mx-6"],["href","index.html",1,"w-36","h-36","mb-2.5","block","mx-auto","border-6","border-platinum","dark:border-[#2f2f2f]","overflow-hidden","rounded-full","*:w-full","*:h-full","*:rounded-full"],["src","assets/img/user-sidebar-thumb.png","alt","Brown Reddick",1,"hidden","dark:block"],["src","assets/img/user-sidebar-thumb-light.png","alt","Brown Reddick",1,"dark:hidden"],[1,"mb-1","text-lg","font-semibold","text-black","dark:text-white","name"],[1,"leading-none","w-full","flex","justify-center"],[1,"text-sm","flex","justify-center","h-fit","text-theme","text-center"],[1,"pt-6","mx-4","border-t","lg:mx-6","user-meta-info","md:mx-7","my-7","border-platinum","dark:border-metalBlack"],[1,"space-y-3","*:flex","*:text-sm"],[1,"px-4","py-5","lg:py-6","lg:px-6","rounded-2xl","md:px-8","bg-flashWhite","dark:bg-metalBlack"],[1,"text-sm","font-medium","text-black","dark:text-white"],[1,"flex","items-center","justify-between","my-8","space-x-4","skills_circle","*:space-y-2","*:text-center"],[1,"flex","flex-col","relative","w-12","h-12","justify-center","items-center"],[1,"mt-6"],["href","#","download","",1,"text-center","text-sm","border","border-theme","bg-theme","flex","items-center","justify-center","gap-2","text-white","rounded-4xl","py-3.5","transition","duration-300","text-[15px]","font-semibold","hover:bg-themeHover","hover:border-themeHover"],[1,"animate-bounce"],["width","18","height","18","viewBox","0 0 15 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.0724 4.92378C12.0726 4.91034 12.0726 4.89691 12.0726 4.88368C12.0726 2.53968 10.1657 0.632812 7.82171 0.632812C5.47771 0.632812 3.57084 2.53968 3.57084 4.88368C3.57084 4.89691 3.57084 4.91055 3.57104 4.92378C1.95417 5.0992 0.691406 6.47267 0.691406 8.13554C0.691406 9.91704 2.14059 11.3662 3.92209 11.3662H4.33138C4.55606 11.3662 4.7384 11.1839 4.7384 10.9592C4.7384 10.7345 4.55606 10.5522 4.33138 10.5522H3.92209C2.58952 10.5522 1.50544 9.46811 1.50544 8.13554C1.50544 6.80297 2.58952 5.71888 3.92209 5.71888H4.00309C4.11868 5.71888 4.22898 5.66963 4.30611 5.58355C4.38345 5.49726 4.42028 5.38248 4.40766 5.2673C4.3924 5.12769 4.38487 5.00233 4.38487 4.88348C4.38487 2.98842 5.92665 1.44664 7.82171 1.44664C9.71678 1.44664 11.2586 2.98842 11.2586 4.88348C11.2586 5.00233 11.251 5.12769 11.2358 5.2673C11.2231 5.38228 11.26 5.49726 11.3373 5.58355C11.4144 5.66963 11.5247 5.71888 11.6403 5.71888H11.7217C13.0541 5.71888 14.138 6.80297 14.138 8.13554C14.138 9.46811 13.0541 10.5522 11.7217 10.5522H11.288C11.0634 10.5522 10.881 10.7345 10.881 10.9592C10.881 11.1839 11.0634 11.3662 11.288 11.3662H11.7217C13.5028 11.3662 14.952 9.91704 14.952 8.13554C14.952 6.47247 13.6892 5.099 12.0724 4.92378Z","fill","white"],["d","M6.26314 11.942C6.0877 12.1876 6.26327 12.5288 6.5651 12.5288H8.81272L7.3764 14.5396C7.25728 14.7064 7.29591 14.9382 7.46268 15.0573C7.62945 15.1764 7.86122 15.1378 7.98034 14.971L9.83579 12.3734C10.0112 12.1278 9.83566 11.7866 9.53382 11.7866H7.2862L8.72252 9.77578C8.84164 9.609 8.80302 9.37724 8.63624 9.25811C8.46947 9.13899 8.23771 9.17762 8.11858 9.34439L6.26314 11.942Z","fill","white"],[1,"absolute","w-0","h-0"],["id","my-clip-path","clipPathUnits","objectBoundingBox","stroke","white","stroke-width","2"],["d","M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"],[1,"px-1","border-r","border-theme","whitespace-nowrap"],[1,"flex-1","font-medium","text-black","dark:text-white"],[1,"w-11","h-11",3,"progress"],[1,"absolute","text-[13px]","-top-3","font-medium","label","flex"],[3,"endValue"],[1,"text-[13px]","font-normal","dark:font-light","text-black","dark:text-white/90"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),s(4,"img",4)(5,"img",5),l(),o(6,"h6",6),d(7,"Daniel Miller Gonz\xE1lez"),l(),o(8,"div",7)(9,"h6",8),E(10,je,1,1,null,null,S),l()()(),o(12,"div",9)(13,"ul",10),E(14,Pe,5,2,"li",null,S),l()(),o(16,"div",11)(17,"div",12),d(18,"Skills"),l(),o(19,"div",13),E(20,ze,7,3,"div",14,S),l(),o(22,"div",15)(23,"a",16),d(24," DOWNLOAD CV "),o(25,"span",17),R(),o(26,"svg",18),s(27,"path",19)(28,"path",20),l()()()()(),o(29,"svg",21)(30,"clipPath",22),s(31,"path",23),l()()()()),n&2&&(m(10),T(a.profession),m(4),T(a.profile),m(6),T(a.language))},dependencies:[F,xe,be],data:{animation:[_e]}});let t=e;return t})();var Ee=(()=>{let e=class e{constructor(){this.open=_(!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-header"]],inputs:{open:[1,"open"]},outputs:{open:"openChange"},standalone:!0,features:[h],decls:9,vars:0,consts:[[1,"fixed","top-0","left-0","right-0","z-50","flex","items-center","justify-between","p-2","px-3","bg-white/10","mobile-menu-bar","sm:px-6","backdrop-blur-md","xl:hidden"],[1,"text-lg","font-medium","name"],["href","index.html",1,"flex","items-center","gap-2","text-black","dark:text-white"],["src","assets/img/site-logo.svg","alt","Minfo"],["type","button","aria-label","Open Mobile Menu",1,"w-12","h-12","border","rounded-full","hamburger","menu_toggle","bg-white","dark:bg-nightBlack","border-platinum","dark:border-greyBlack","items-center","flex","justify-center",3,"click"],["viewBox","0 0 20 12","xmlns","http://www.w3.org/2000/svg",1,"w-6"],["fill-rule","evenodd","clip-rule","evenodd","d","M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z",1,"fill-theme","dark:fill-white"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),s(3,"img",3),o(4,"span"),d(5,"Minfo"),l()()(),o(6,"button",4),b("click",function(){return a.open.set(!0)}),R(),o(7,"svg",5),s(8,"path",6),l()()())}});let t=e;return t})();function Ve(t,e){if(t&1&&s(0,"div",14),t&2){let r=x().$implicit;v("innerHTML",r.icon,j)}}function Ne(t,e){if(t&1&&s(0,"i",17),t&2){let r=x().$implicit;f(r.icon)}}function We(t,e){if(t&1){let r=P();o(0,"a",13),b("click",function(){let n=H(r).$implicit,a=x();return L(a.navigate(n.route))}),y(1,Ve,1,1,"div",14)(2,Ne,1,2,"i",15),o(3,"span",16),d(4),l()()}if(t&2){let r=e.$implicit,i=x();f(i.activo()===r.route?"bg-white text-theme dark:bg-greyBlack":"text-black dark:text-white"),m(),C(r.label==="blog"?1:2),m(3),M(r.label)}}var Te=(()=>{let e=class e{constructor(){this._router=g(A),this._sanitized=g(W),this.menu=[{label:"home",route:"introduce",icon:"bi bi-house-door"},{label:"about",route:"about",icon:"bi bi-person"},{label:"service",route:"service",icon:"bi bi-briefcase"},{label:"skill",route:"skill",icon:"bi bi-mortarboard"},{label:"resume",route:"resume",icon:"bi bi-file-earmark-richtext"},{label:"poftfolio",route:"poftfolio",icon:"bi bi-list-task"},{label:"blog",route:"blog",icon:this._sanitized.bypassSecurityTrustHtml(Z)},{label:"testimonial",route:"testimonial",icon:"bi bi-chat-square-text"},{label:"contact",route:"contact",icon:"bi bi-envelope"}],this.activo=_("")}navigate(i){this._router.navigate(["home/"+i]),G(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-sidebar"]],inputs:{activo:[1,"activo"]},outputs:{activo:"activoChange"},standalone:!0,features:[h],decls:17,vars:0,consts:[[1,"card","bg-gray-100","dark:bg-power__black","rounded-full","border","border-platinum","dark:border-metalBlack","h-fit","w-fit","px-2","py-4","flex","flex-col","items-center","gap-1"],["routerLink","home/introduce",1,"group","w-16","h-16","rounded-full","hover:bg-white","dark:hover:bg-metalBlack","cursor-pointer","flex","justify-center","items-center","transition-color","duration-300","relative","mb-8","border","border-platinum","dark:border-metalBlack"],["src","assets/img/site-logo.svg","alt",""],[1,"group","w-10","h-10","rounded-full","hover:bg-white","dark:hover:bg-greyBlack","cursor-pointer","flex","justify-center","items-center","transition-color","duration-300","relative","text-black",3,"class"],[1,"group","w-10","h-10","rounded-full","hover:bg-white","dark:hover:bg-metalBlack","cursor-pointer","flex","justify-center","items-center","transition-color","duration-300","relative","mt-8","border","border-platinum","dark:border-metalBlack"],[1,"group-hover:text-theme","bi","bi-share"],[1,"group-hover:flex","hover:flex","transition-all","duration-300","hidden","absolute","rounded-full","bg-white","p-3","dark:bg-metalBlack","dark:text-white","right-[105%]","shadow-sm"],[1,"flex","gap-3"],[1,"hover:text-theme","text-colorSilver","transition-all","duration-300"],[1,"bi","bi-facebook"],[1,"bi","bi-twitter"],[1,"bi","bi-linkedin"],[1,"bi","bi-instagram"],[1,"group","w-10","h-10","rounded-full","hover:bg-white","dark:hover:bg-greyBlack","cursor-pointer","flex","justify-center","items-center","transition-color","duration-300","relative","text-black",3,"click"],[1,"w-4","h-4","flex","group-hover:text-theme",3,"innerHTML"],[1,"text-xl",3,"class"],[1,"group-hover:flex","text-theme","hidden","absolute","rounded-lg","shadow-sm","bg-white","dark:bg-greyBlack","dark:text-white","px-3","py-2","right-[120%]"],[1,"text-xl"]],template:function(n,a){n&1&&(o(0,"div",0)(1,"a",1),s(2,"img",2),l(),E(3,We,5,4,"a",3,S),o(5,"div",4),s(6,"i",5),o(7,"span",6)(8,"ul",7)(9,"li",8),s(10,"i",9),l(),o(11,"li",8),s(12,"i",10),l(),o(13,"li",8),s(14,"i",11),l(),o(15,"li",8),s(16,"i",12),l()()()()()),n&2&&(m(3),T(a.menu))},dependencies:[F,ue]});let t=e;return t})();var Me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-footer"]],standalone:!0,features:[h],decls:5,vars:0,consts:[[1,"w-full","text-center","text-colorGray","dark:text-metaBlack"],["href","#",1,"transition-colors"]],template:function(n,a){n&1&&(o(0,"footer",0)(1,"p"),d(2," Copyright by "),o(3,"a",1),d(4,"domain.com"),l()()())}});let t=e;return t})();function Oe(t,e){if(t&1&&s(0,"div",21),t&2){let r=x().$implicit,i=x();f(i._dataService.scroll()===r.route?"text-theme":"text-colorSilver"),v("innerHTML",r.icon,j)}}function Ge(t,e){if(t&1&&s(0,"i"),t&2){let r=x().$implicit,i=x();f((i._dataService.scroll()===r.route?"text-theme":"text-colorSilver")+" "+r.icon)}}function $e(t,e){if(t&1){let r=P();o(0,"li",6)(1,"a",16),b("click",function(){let n=H(r).$implicit,a=x();return L(a.navigate(n.route))}),o(2,"span",17),y(3,Oe,1,3,"div",18)(4,Ge,1,2,"i",19),l(),o(5,"span",20),d(6),l()()()}if(t&2){let r=e.$implicit,i=x();m(3),C(r.label==="blog"?3:4),m(2),f(i._dataService.scroll()===r.route?"text-theme dark:text-white":""),m(),le(" ",r.label," ")}}var Be=(()=>{let e=class e{constructor(){this._dataService=g($),this._sanitized=g(W),this._router=g(A),this.open=_(!1),this.menu=[{label:"home",route:"introduce",icon:"bi bi-house-door"},{label:"about",route:"about",icon:"bi bi-person"},{label:"service",route:"service",icon:"bi bi-briefcase"},{label:"skill",route:"skill",icon:"bi bi-mortarboard"},{label:"resume",route:"resume",icon:"bi bi-file-earmark-richtext"},{label:"poftfolio",route:"poftfolio",icon:"bi bi-list-task"},{label:"blog",route:"blog",icon:this._sanitized.bypassSecurityTrustHtml(Z)},{label:"testimonial",route:"testimonial",icon:"bi bi-chat-square-text"},{label:"contact",route:"contact",icon:"bi bi-envelope"}]}navigate(i){this._router.navigate(["home/"+i]),G(i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-sidebar-sm"]],inputs:{open:[1,"open"]},outputs:{open:"openChange"},standalone:!0,features:[h],decls:22,vars:4,consts:[[1,"fixed","w-full","h-full","bg-black/60","transition-all","duration-1000",3,"click"],[1,"absolute","overflow-y-auto","transition-all","duration-500","right-0","w-fit","h-full","bg-flashWhite","dark:bg-nightBlack","z-[800]","flex","flex-col","py-12","pl-8","pr-12"],[1,"mb-6","text-lg","font-medium","text-black","dark:text-white","menu-title"],["aria-label","Close Menu",1,"absolute","flex","items-center","justify-center","w-9","h-9","text-sm","text-white","rounded-full","close-menu","top-4","right-4","bg-colorGray","dark:bg-greyBlack","is-menu-open",3,"click"],[1,"font-bold","bi","bi-x-lg"],[1,"space-y-5","font-normal","main-menu"],["data-scroll-nav","0",1,"relative","group"],[1,"mb-4","font-medium","text-black","dark:text-white","menu-title","text-md"],[1,"flex","items-center","space-x-4","social-icons","*:flex","text-colorSilver"],["href","#","title","Share with Facebook"],[1,"bi","bi-facebook"],["href","#","title","Share with Linkedin"],[1,"bi","bi-linkedin"],["href","#","title","Share with X"],[1,"bi","bi-twitter"],[1,"bi","bi-instagram"],[1,"flex","items-center","space-x-2","group","cursor-pointer",3,"click"],[1,"w-5","text-black","dark:text-white","group-[&.active]:text-theme"],[1,"w-4","h-4","flex",3,"innerHTML","class"],[3,"class"],[1,"group-hover:text-theme","text-colorSilver","transition-colors"],[1,"w-4","h-4","flex",3,"innerHTML"]],template:function(n,a){n&1&&(o(0,"div",0),b("click",function(){return a.open.set(!1)}),l(),o(1,"div",1)(2,"div",2),d(3," Menu "),l(),o(4,"button",3),b("click",function(){return a.open.set(!1)}),s(5,"i",4),l(),o(6,"ul",5),E(7,$e,7,4,"li",6,S),l(),s(9,"br")(10,"br"),o(11,"div",7),d(12," Get in Touch "),l(),o(13,"div",8)(14,"a",9),s(15,"i",10),l(),o(16,"a",11),s(17,"i",12),l(),o(18,"a",13),s(19,"i",14),l(),o(20,"a",13),s(21,"i",15),l()()()),n&2&&(f(a.open()?"fixed":"hidden"),m(),f(a.open()===!1?"translate-x-96":"translate-x-0"),m(6),T(a.menu))}});let t=e;return t})();var Fe=O("loading",[I(":enter",[w({height:"0",opacity:"1"}),B("500ms",w({height:"50%",opacity:"1"})),B("2000ms",w({height:"50%",opacity:"1"})),B("500ms",w({height:"100%",opacity:"0"}))])]);function Ze(t,e){t&1&&(o(0,"div",2),s(1,"div",3),o(2,"a",4),s(3,"img",5),l()()),t&2&&(m(),v("@loading",void 0))}var Ae=(()=>{let e=class e{constructor(){this.show=!0,setTimeout(()=>{this.show=!1},3e3)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-loading"]],standalone:!0,features:[h],decls:4,vars:5,consts:[[1,"fixed","w-full","h-full","flex","overflow-x-hidden"],[1,"w-6/12","transition-all","duration-500","bg-flashWhite","dark:bg-nightBlack"],[1,"flex","items-center","justify-center","h-full","z-999"],[1,"absolute","w-[0.5px]","h-full","bg-nightBlack","dark:bg-colorGray"],["href","home/introduce",1,"absolute","w-20","h-20","rounded-full","bg-nightBlack","dark:bg-metalBlack","flex","items-center","justify-center"],["src","assets/img/site-logo.svg","alt",""]],template:function(n,a){n&1&&(o(0,"div",0),s(1,"div",1),y(2,Ze,4,1,"div",2),s(3,"div",1),l()),n&2&&(m(),f(a.show?"translate-x-0":"-translate-x-[100%]"),m(),C(a.show?2:-1),m(),f(a.show?"translate-x-0":"translate-x-[100%]"))},data:{animation:[Fe]}});let t=e;return t})();var qe=["scroll"];function Qe(t,e){t&1&&s(0,"app-loading",18)}var Ie=(()=>{let e=class e{constructor(){this.title="athendat-test",this._router=g(A),this._dataService=g($),this._el=g(U),this.open=!1,this.loading=!0,setTimeout(()=>this.loading=!1,4e3)}onScroll(){let i=document.querySelectorAll("app-card");for(let n=0;n<i.length;n++){let a=i[n].getBoundingClientRect();if(a.top<90&&a.top>0){this._dataService.scroll.set(i[n].id);break}}}scrollToTop(){document.getElementById("scroll")?.scrollTo({top:0,behavior:"smooth"})}ngOnInit(){this.circle=document.createElement("div"),this.circle.classList.add("w-6"),this.circle.classList.add("h-6"),this.circle.classList.add("bg-transparent"),this.circle.classList.add("border"),this.circle.classList.add("dark:border-platinum"),this.circle.classList.add("border-colorSilver"),this.circle.style.position="absolute",this.circle.style.zIndex="999999",this.circle.style.borderRadius="50%",this.circle.style.pointerEvents="none",this.circle2=document.createElement("div"),this.circle2.classList.add("w-1"),this.circle2.classList.add("h-1"),this.circle2.classList.add("bg-transparent"),this.circle2.classList.add("border"),this.circle2.classList.add("dark:border-platinum"),this.circle2.classList.add("border-colorSilver"),this.circle2.style.position="absolute",this.circle2.style.zIndex="999999",this.circle2.style.borderRadius="50%",this.circle2.style.pointerEvents="none",this._el.nativeElement.appendChild(this.circle),this._el.nativeElement.appendChild(this.circle2)}onMouseMove(i){this.circle.style.left=i.clientX-12+"px",this.circle.style.top=i.clientY-12+"px",this.circle2.style.left=i.clientX-3+"px",this.circle2.style.top=i.clientY-3+"px"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],viewQuery:function(n,a){if(n&1&&oe(qe,5),n&2){let c;re(c=ae())&&(a.scroll=c.first)}},standalone:!0,features:[h],decls:22,vars:5,consts:[[1,"fixed","w-full","h-full",3,"mousemove"],["id","scroll",1,"fixed","w-full","h-full","grid","grid-cols-12","gap-3","py-12","justify-items-center","overflow-y-auto",2,"padding-inline","3%",3,"scroll"],[1,"sticky","xl:top-0","2xl:top-0","col-span-12","2xl:col-span-3","xl:col-span-3","h-fit"],[1,"w-full","flex","justify-center"],[1,"col-span-12","2xl:col-span-8","xl:col-span-8","pl-2"],[1,"w-fit","h-fit","sticky","top-0","hidden","xl:flex","2xl:flex","xl:top-1/2","2xl:top-1/2","xl:-translate-y-[50%]","2xl:-translate-y-[50%]"],[3,"activo"],[1,"fixed","top-0","flex","lg:hidden","z-5"],[3,"openChange","open"],[1,"bg-lines","fixed","inset-0","-z-1","md:max-xl:max-w-[45rem]","xl:max-w-60rem","2xl:max-w-container","mx-auto","max-sm:px-8","sm:max-xl:px-12"],[1,"line-wrapper","max-w-[1130px]","w-full","h-full","ml-auto","2xl:-mr-24","relative","flex","justify-between",":w-px","*:h-full","*:border-r","*:border-dashed","*:border-slate-300","dark:*:border-metalBlack","*:relative","*:before:absolute","*:before:bg-theme","*:before:rotate-45","*:before:-left-1","*:before:w-2","*:before:h-2"],[1,"line1","before:animate-top_bottom"],[1,"line2","before:bottom-0","before:animate-bottom_top","before:animate-delay-3s"],[1,"line3","before:animate-top_bottom","before:animate-delay-3s"],[1,"line4","before:bottom-0","before:animate-bottom_top","before:animate-delay-2s"],[1,"fixed","bottom-16","border","dark:border-greyBlack200","border-colorSilver","right-10","w-12","h-12","rounded-full","bg-white","dark:bg-metalBlack","dark:text-colorGray","shadow-md",3,"click"],[1,"bi","bi-arrow-up"],[1,"flex","lg:hidden","xl:hidden","2xl:hidden",3,"openChange","open"],[1,"z-[9999]"]],template:function(n,a){n&1&&(o(0,"div",0),b("mousemove",function(p){return a.onMouseMove(p)}),o(1,"div",1),b("scroll",function(){return a.onScroll()}),o(2,"div",2),s(3,"app-profile",3),l(),o(4,"div",4),s(5,"router-outlet")(6,"app-footer"),l(),o(7,"div",5),s(8,"app-sidebar",6),l()(),o(9,"div",7)(10,"app-header",8),N("openChange",function(p){return V(a.open,p)||(a.open=p),p}),l()(),o(11,"div",9)(12,"div",10),s(13,"div",11)(14,"div",12)(15,"div",13)(16,"div",14),l()(),o(17,"app-theme",8),N("openChange",function(p){return V(a.open,p)||(a.open=p),p}),l(),o(18,"button",15),b("click",function(){return a.scrollToTop()}),s(19,"i",16),l(),o(20,"app-sidebar-sm",17),N("openChange",function(p){return V(a.open,p)||(a.open=p),p}),l(),y(21,Qe,1,0,"app-loading",18),l()),n&2&&(m(8),v("activo",a._dataService.scroll()),m(2),z("open",a.open),m(7),z("open",a.open),m(3),z("open",a.open),m(),C(a.loading?21:-1))},dependencies:[pe,ke,Se,Ee,Te,Me,Be,Ae]});let t=e;return t})();ce(Ie,Ce).catch(t=>console.error(t));
