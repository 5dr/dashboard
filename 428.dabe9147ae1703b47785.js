"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[428],{690:(M,v,e)=>{e.d(v,{v:()=>C});var h=e(2340),l=e(7716),A=e(2290),d=e(7460),Z=e(8583),t=e(1841);let C=(()=>{class u{constructor(s,c,f,_){this.toaster=s,this.translateService=c,this.datePipe=f,this.http=_}dateMapping(s,c){return this.datePipe.transform(s,c)}handleSuccessMessage(s,c){this.toaster.success(s,c)}handleErrorMessage(s){this.toaster.error(s,this.translateService.instant("general.error"))}uploadImg(s){return this.http.post(`${h.N.endPointUrl}user/hosting/upload-images`,s)}}return u.\u0275fac=function(s){return new(s||u)(l.LFG(A._W),l.LFG(d.sK),l.LFG(Z.uU),l.LFG(t.eN))},u.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},9428:(M,v,e)=>{e.r(v),e.d(v,{AuthenticationModule:()=>D});var h=e(8583),l=e(3679),A=e(4284),d=e(3423),Z=e(2340),t=e(7716),C=e(1841);let u=(()=>{class o{constructor(n){this.http=n}login(n){return this.http.post(`${Z.N.endPointUrl}admin/login`,n)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var x=e(5319),s=e(690),c=e(5939),f=e(7460),_=e(7093),T=e(9224),L=e(7322),O=e(8833),I=e(7423);function E(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"login.emailRequired")," "))}function U(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const n=t.oxw(2);let r;t.xp6(1),t.hij(" ",null==(r=n.getControl("email"))||null==r.errors?null:r.errors.remote," ")}}function y(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,E,3,3,"span",6),t.YNc(2,U,2,1,"span",6),t.qZA()),2&o){const n=t.oxw();let r,i;t.xp6(1),t.Q6J("ngIf",null==(r=n.getControl("email"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(i=n.getControl("email"))||null==i.errors?null:i.errors.remote)}}function F(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"login.passwordRequired")," "))}function N(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const n=t.oxw(2);let r;t.xp6(1),t.hij(" ",null==(r=n.getControl("password"))||null==r.errors?null:r.errors.remote," ")}}function P(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,F,3,3,"span",6),t.YNc(2,N,2,1,"span",6),t.qZA()),2&o){const n=t.oxw();let r,i;t.xp6(1),t.Q6J("ngIf",null==(r=n.getControl("password"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(i=n.getControl("password"))||null==i.errors?null:i.errors.remote)}}const J=[{path:"",component:(()=>{class o{constructor(n,r,i,m,g,p){this.fb=n,this.router=r,this.authService=i,this.cookieService=m,this.commonService=g,this.translateService=p,this.loading=!1,this.subscriptions=new x.w}ngOnInit(){this.initLoginForm()}initLoginForm(){this.loginForm=this.fb.group({email:["",[l.kI.required]],password:["",[l.kI.required]]})}getControl(n){return this.loginForm.get(n)}onLogin(){this.loading=!0,this.subscriptions.add(this.authService.login(this.loginForm.value).subscribe(n=>{var r,i,m,g,p;this.loading=!1,this.cookieService.put("token",JSON.stringify(null===(i=null===(r=null==n?void 0:n.data)||void 0===r?void 0:r.accessToken)||void 0===i?void 0:i.token)),this.cookieService.put("admin-details",JSON.stringify(null===(m=null==n?void 0:n.data)||void 0===m?void 0:m.admin));let S=null===(p=null===(g=null==n?void 0:n.data)||void 0===g?void 0:g.role)||void 0===p?void 0:p.map(R=>R.role);this.cookieService.put("adminRoles",JSON.stringify(S)),this.commonService.handleSuccessMessage(this.translateService.instant("login.loggedInSuccess"),this.translateService.instant("general.success")),this.router.navigateByUrl("/"+S[0])},n=>{var r;this.loading=!1,this.commonService.handleErrorMessage(null===(r=null==n?void 0:n.error)||void 0===r?void 0:r.message)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l.qu),t.Y36(d.F0),t.Y36(u),t.Y36(c.N_),t.Y36(s.v),t.Y36(f.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:23,vars:22,consts:[["fxLayout","row wrap",1,"w-full","h-full"],[1,"mat-elevation-z4","m-auto",2,"max-width","380px"],[1,"text-center","m-b-24"],[1,"form-field-full",3,"formGroup"],["appearance","outline"],["matInput","","formControlName","email","required","",3,"placeholder"],[4,"ngIf"],["matInput","","type","password","formControlName","password","required","",3,"placeholder"],["mat-raised-button","",1,"w-full","login-btn",3,"disabled","click"]],template:function(n,r){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-title",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"form",3),t.TgZ(6,"mat-form-field",4),t.TgZ(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t._UZ(10,"input",5),t.ALo(11,"translate"),t.YNc(12,y,3,2,"mat-error",6),t.qZA(),t.TgZ(13,"mat-form-field",4),t.TgZ(14,"mat-label"),t._uU(15),t.ALo(16,"translate"),t.qZA(),t._UZ(17,"input",7),t.ALo(18,"translate"),t.YNc(19,P,3,2,"mat-error",6),t.qZA(),t.TgZ(20,"button",8),t.NdJ("click",function(){return r.onLogin()}),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){let i,m;t.xp6(3),t.Oqu(t.lcZ(4,10,"login.login")),t.xp6(2),t.Q6J("formGroup",r.loginForm),t.xp6(3),t.Oqu(t.lcZ(9,12,"login.email")),t.xp6(2),t.s9C("placeholder",t.lcZ(11,14,"login.email")),t.xp6(2),t.Q6J("ngIf",null==(i=r.getControl("email"))?null:i.invalid),t.xp6(3),t.Oqu(t.lcZ(16,16,"login.password")),t.xp6(2),t.s9C("placeholder",t.lcZ(18,18,"login.password")),t.xp6(2),t.Q6J("ngIf",null==(m=r.getControl("password"))?null:m.invalid),t.xp6(1),t.Q6J("disabled",r.loginForm.invalid||r.loading),t.xp6(1),t.hij("",t.lcZ(22,20,"login.login")," ")}},directives:[_.xw,T.a8,T.n5,l._Y,l.JL,l.sg,L.KE,L.hX,O.Nt,l.Fj,l.JJ,l.u,l.Q7,h.O5,I.lW,L.TO],pipes:[f.X$],styles:["mat-form-field[_ngcontent-%COMP%]{margin-bottom:.5em!important}.login-btn[_ngcontent-%COMP%]{background-color:var(--text-primary);color:#fff;height:3em}"]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(J)],d.Bz]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[],imports:[[h.ez,Y,l.u5,l.UX,A.m8]]}),o})()}}]);