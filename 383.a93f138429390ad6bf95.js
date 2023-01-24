"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[383],{690:(O,f,r)=>{r.d(f,{v:()=>h});var a=r(2340),s=r(7716),p=r(2290),t=r(7460),_=r(8583),M=r(1841);let h=(()=>{class c{constructor(i,m,v,C){this.toaster=i,this.translateService=m,this.datePipe=v,this.http=C}dateMapping(i,m){return this.datePipe.transform(i,m)}handleSuccessMessage(i,m){this.toaster.success(i,m)}handleErrorMessage(i){this.toaster.error(i,this.translateService.instant("general.error"))}uploadImg(i){return this.http.post(`${a.N.endPointUrl}user/hosting/upload-images`,i)}}return c.\u0275fac=function(i){return new(i||c)(s.LFG(p._W),s.LFG(t.sK),s.LFG(_.uU),s.LFG(M.eN))},c.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},383:(O,f,r)=>{r.r(f),r.d(f,{FooterManagementModule:()=>K});var a=r(3679),s=r(8583),p=r(2340),t=r(7716),_=r(1841);let M=(()=>{class e{constructor(o){this.http=o}fetchFooterData(){return this.http.get(`${p.N.endPointUrl}admin/footer-list`)}updateFooterData(o){return this.http.put(`${p.N.endPointUrl}admin/update-footer/1`,o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(_.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=r(5319),c=r(690),Z=r(7460),i=r(9224),m=r(7322),v=r(8833),C=r(3322),b=r(7423);function I(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){return t.CHM(o),t.oxw().onEditFooter()}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"footerManagement.editFooter")," "))}function U(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function q(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function L(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.URL")," "))}function P(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.URL")," "))}function N(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.URL")," "))}function E(e,l){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.URL")," "))}function J(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"div",18),t.TgZ(1,"button",19),t.NdJ("click",function(){return t.CHM(o),t.oxw().onSave()}),t.TgZ(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA(),t.TgZ(5,"button",20),t.NdJ("click",function(){return t.CHM(o),t.oxw().onCancel()}),t.TgZ(6,"span"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("disabled",o.footerForm.invalid||o.loading),t.xp6(2),t.Oqu(t.lcZ(4,4,"footerManagement.save")),t.xp6(2),t.Q6J("disabled",o.footerForm.invalid||o.loading),t.xp6(2),t.Oqu(t.lcZ(8,6,"footerManagement.cancel"))}}const d=function(e){return{readonlay:e}};let S=(()=>{class e{constructor(o,n,u,g){this.fb=o,this.footerService=n,this.commonService=u,this.translateService=g,this.editMode=!1,this.loading=!1,this.subscriptions=new h.w}ngOnInit(){this.fetchFooterData(),this.initFooterForm()}onEditFooter(){this.editMode=!0}fetchFooterData(){this.subscriptions.add(this.footerService.fetchFooterData().subscribe({next:o=>{1==o.successful&&this.footerForm.patchValue(o.footers[0])}}))}initFooterForm(){this.footerForm=this.fb.group({facebook_url:new a.NI(null,a.kI.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")),twitter_url:new a.NI(null,a.kI.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")),instagram_url:new a.NI(null,a.kI.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")),youtube_url:new a.NI(null,a.kI.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")),text_ar:new a.NI(null),text_en:new a.NI(null)})}getControl(o){return this.footerForm.get(o)}onCancel(){this.editMode=!1}onSave(){this.footerForm.valid&&(this.loading=!0,this.subscriptions.add(this.footerService.updateFooterData(this.footerForm.value).subscribe({next:o=>{o.successful&&(this.loading=!1,this.commonService.handleSuccessMessage(this.translateService.instant("footerManagement.footerSuccess"),this.translateService.instant("general.success")),this.fetchFooterData(),this.editMode=!1)},error:o=>{this.loading=!1,this.editMode=!1,this.commonService.handleErrorMessage(o.message)}})))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(M),t.Y36(c.v),t.Y36(Z.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer-management"]],decls:54,vars:54,consts:[[1,"container-fluid","pt-3","pb-4"],[1,"row","title-row"],[1,"col-lg-6","col-md-6","col-sm-12"],[1,"title"],[1,"col-lg-6","col-md-6","col-sm-12","button-container"],["mat-raised-button","","class","btn",3,"click",4,"ngIf"],[3,"formGroup"],[1,"row","align-items-center","mt-5"],[1,"col-md-6","mb-2"],["matInput","","formControlName","text_ar","type","text",3,"ngClass","readonly"],[4,"ngIf"],["matInput","","formControlName","text_en","type","text",3,"ngClass","readonly"],["matInput","","formControlName","facebook_url","type","text",3,"ngClass","readonly"],["matInput","","formControlName","twitter_url","type","text",3,"ngClass","readonly"],["matInput","","formControlName","youtube_url","type","text",3,"ngClass","readonly"],["matInput","","formControlName","instagram_url","type","text",3,"ngClass","readonly"],["class","mt-4 footer",4,"ngIf"],["mat-raised-button","",1,"btn",3,"click"],[1,"mt-4","footer"],["mat-stroked-button","",1,"btn",3,"disabled","click"],["mat-stroked-button","",1,"cancel",3,"disabled","click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"mat-card"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"h3",3),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,I,3,3,"button",5),t.qZA(),t.qZA(),t.TgZ(9,"form",6),t.TgZ(10,"div",7),t.TgZ(11,"div",8),t.TgZ(12,"mat-form-field"),t.TgZ(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"textarea",9),t.YNc(17,U,3,3,"mat-error",10),t.qZA(),t.qZA(),t.TgZ(18,"div",8),t.TgZ(19,"mat-form-field"),t.TgZ(20,"mat-label"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t._UZ(23,"textarea",11),t.YNc(24,q,3,3,"mat-error",10),t.qZA(),t.qZA(),t.TgZ(25,"div",8),t.TgZ(26,"mat-form-field"),t.TgZ(27,"mat-label"),t._uU(28),t.ALo(29,"translate"),t.qZA(),t._UZ(30,"input",12),t.YNc(31,L,3,3,"mat-error",10),t.qZA(),t.qZA(),t.TgZ(32,"div",8),t.TgZ(33,"mat-form-field"),t.TgZ(34,"mat-label"),t._uU(35),t.ALo(36,"translate"),t.qZA(),t._UZ(37,"input",13),t.YNc(38,P,3,3,"mat-error",10),t.qZA(),t.qZA(),t.TgZ(39,"div",8),t.TgZ(40,"mat-form-field"),t.TgZ(41,"mat-label"),t._uU(42),t.ALo(43,"translate"),t.qZA(),t._UZ(44,"input",14),t.YNc(45,N,3,3,"mat-error",10),t.qZA(),t.qZA(),t.TgZ(46,"div",8),t.TgZ(47,"mat-form-field"),t.TgZ(48,"mat-label"),t._uU(49),t.ALo(50,"translate"),t.qZA(),t._UZ(51,"input",15),t.YNc(52,E,3,3,"mat-error",10),t.qZA(),t.qZA(),t.qZA(),t.YNc(53,J,9,8,"div",16),t.qZA(),t.qZA(),t.qZA()),2&o){let u,g,x,A,F,T;t.xp6(5),t.Oqu(t.lcZ(6,28,"menu.footerManagement")),t.xp6(3),t.Q6J("ngIf",!n.editMode),t.xp6(1),t.Q6J("formGroup",n.footerForm),t.xp6(5),t.Oqu(t.lcZ(15,30,"footerManagement.textAr")),t.xp6(2),t.Q6J("ngClass",t.VKq(42,d,!n.editMode))("readonly",!n.editMode),t.xp6(1),t.Q6J("ngIf",(null==(u=n.getControl("text_ar"))?null:u.touched)&&(null==(u=n.getControl("text_ar"))?null:u.invalid)),t.xp6(4),t.Oqu(t.lcZ(22,32,"footerManagement.textEn")),t.xp6(2),t.Q6J("ngClass",t.VKq(44,d,!n.editMode))("readonly",!n.editMode),t.xp6(1),t.Q6J("ngIf",(null==(g=n.getControl("text_en"))?null:g.touched)&&(null==(g=n.getControl("text_en"))?null:g.invalid)),t.xp6(4),t.Oqu(t.lcZ(29,34,"footerManagement.faceBook")),t.xp6(2),t.Q6J("ngClass",t.VKq(46,d,!n.editMode))("readonly",!n.editMode),t.xp6(1),t.Q6J("ngIf",null==(x=n.getControl("facebook_url"))||null==x.errors?null:x.errors.pattern),t.xp6(4),t.Oqu(t.lcZ(36,36,"footerManagement.twitter")),t.xp6(2),t.Q6J("ngClass",t.VKq(48,d,!n.editMode))("readonly",!n.editMode),t.xp6(1),t.Q6J("ngIf",null==(A=n.getControl("twitter_url"))||null==A.errors?null:A.errors.pattern),t.xp6(4),t.Oqu(t.lcZ(43,38,"footerManagement.youtube")),t.xp6(2),t.Q6J("ngClass",t.VKq(50,d,!n.editMode))("readonly",!n.editMode),t.xp6(1),t.Q6J("ngIf",null==(F=n.getControl("youtube_url"))||null==F.errors?null:F.errors.pattern),t.xp6(4),t.Oqu(t.lcZ(50,40,"footerManagement.linkedin")),t.xp6(2),t.Q6J("ngClass",t.VKq(52,d,!n.editMode))("readonly",!n.editMode),t.xp6(1),t.Q6J("ngIf",null==(T=n.getControl("instagram_url"))||null==T.errors?null:T.errors.pattern),t.xp6(1),t.Q6J("ngIf",n.editMode)}},directives:[i.a8,s.O5,a._Y,a.JL,a.sg,m.KE,m.hX,v.Nt,a.Fj,a.JJ,a.u,s.mk,C.oO,b.lW,m.TO],pipes:[Z.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary);padding-inline-start:10px}.button-container[_ngcontent-%COMP%]{justify-content:end;text-align:end;padding-inline-end:5%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:1em}form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:8em;resize:none}form[_ngcontent-%COMP%]   input.readonlay[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea.readonlay[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5}form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:var(--main-txt-color);opacity:.5}.btn[_ngcontent-%COMP%]{background-color:var(--text-primary);color:var(--white-color)}.cancel[_ngcontent-%COMP%]{margin-inline-start:20px}"]}),e})();var y=r(3423);const D=[{path:"",component:S}];let Q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[y.Bz.forChild(D)],y.Bz]}),e})();var z=r(4284);let K=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,Q,z.m8,a.UX,a.u5]]}),e})()}}]);