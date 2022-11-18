"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[426],{4426:(_,m,r)=>{r.r(m),r.d(m,{PushManagementModule:()=>w});var u=r(8583),i=r(3679),h=r(4284),g=r(3423),M=r(5319),s=r(5002),f=r(690),v=r(2340),t=r(7716),b=r(1841);let C=(()=>{class n{constructor(e){this.http=e}postAnnouncement(e){return this.http.post(`${v.N.endPointUrl}admin/send-email`,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=r(7460),P=r(9224),p=r(7322),Z=r(5870),x=r(7423);function A(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"pushManagement.targetRequired")," "))}function O(n,a){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,A,3,3,"span",7),t.qZA()),2&n){const e=t.oxw();let o;t.xp6(1),t.Q6J("ngIf",(null==(o=e.getControl("send_to"))?null:o.touched)&&(null==(o=e.getControl("send_to"))||null==o.errors?null:o.errors.required))}}function y(n,a){1&n&&(t.TgZ(0,"span",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"pushManagement.bodyRequired")," "))}const T=[{path:"",component:(()=>{class n{constructor(e,o,d,l){this.fb=e,this.translateService=o,this.commonService=d,this.pushManagementService=l,this.targetAudience=[{id:1,name:this.translateService.instant("pushManagement.traveller"),value:"traveller"},{id:2,name:this.translateService.instant("pushManagement.host"),value:"host"},{id:3,name:this.translateService.instant("pushManagement.both"),value:"both"}],this.toolbar=[["bold","italic"],["underline","strike"],["blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.loading=!1,this.subscriptions=new M.w}ngOnInit(){this.initEditor(),this.initAnnouncementForm()}initAnnouncementForm(){this.announcementForm=this.fb.group({send_to:["",[s.kI.required]],email_body:["",[s.kI.required]]})}getControl(e){return this.announcementForm.get(e)}initEditor(){this.editor=new s.ML}onSend(){console.log(this.announcementForm),this.loading=!0,this.subscriptions.add(this.pushManagementService.postAnnouncement(this.announcementForm.value).subscribe(e=>{this.loading=!1,console.log(e),this.commonService.handleSuccessMessage(this.translateService.instant("pushManagement.sentSuccess"),this.translateService.instant("general.success"))},e=>{var o;this.loading=!1,this.commonService.handleErrorMessage(null===(o=null==e?void 0:e.error)||void 0===o?void 0:o.message)}))}ngOnDestroy(){this.editor.destroy(),this.subscriptions.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(c.sK),t.Y36(f.v),t.Y36(C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-push-management"]],decls:26,vars:23,consts:[[1,"container-fluid","pt-3","pb-4"],[1,"row","title-row","pb-4"],[1,"title"],[1,"row","form-row"],[3,"formGroup"],["floatLabel","never",1,"target-wrapper"],["required","","formControlName","send_to","bindLabel","name","bindValue","value",3,"items"],[4,"ngIf"],[1,"editor-container"],[1,"editor-wrapper"],[3,"toolbar","editor"],["outputFormat","html","required","","formControlName","email_body",3,"editor","placeholder"],["class","error",4,"ngIf"],["mat-raised-button","",3,"disabled","click"],[1,"error"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-card"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"h3",2),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t.TgZ(7,"form",4),t.TgZ(8,"mat-form-field",5),t.TgZ(9,"p"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"mtx-select",6),t.YNc(13,O,2,1,"mat-error",7),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"p"),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"div",9),t._UZ(19,"ngx-editor-menu",10),t._UZ(20,"ngx-editor",11),t.ALo(21,"translate"),t.qZA(),t.YNc(22,y,3,3,"span",12),t.qZA(),t.TgZ(23,"button",13),t.NdJ("click",function(){return o.onSend()}),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){let d,l;t.xp6(4),t.Oqu(t.lcZ(5,13,"pushManagement.postAnnouncement")),t.xp6(3),t.Q6J("formGroup",o.announcementForm),t.xp6(3),t.Oqu(t.lcZ(11,15,"pushManagement.sendTo")),t.xp6(2),t.Q6J("items",o.targetAudience),t.xp6(1),t.Q6J("ngIf",null==(d=o.getControl("send_to"))?null:d.invalid),t.xp6(3),t.Oqu(t.lcZ(17,17,"pushManagement.announcementBody")),t.xp6(3),t.Q6J("toolbar",o.toolbar)("editor",o.editor),t.xp6(1),t.s9C("placeholder",t.lcZ(21,19,"pushManagement.typeHere")),t.Q6J("editor",o.editor),t.xp6(2),t.Q6J("ngIf",(null==(l=o.getControl("email_body"))?null:l.touched)&&(null==(l=o.getControl("email_body"))||null==l.errors?null:l.errors.required)),t.xp6(1),t.Q6J("disabled",o.announcementForm.invalid||o.loading),t.xp6(1),t.Oqu(t.lcZ(25,21,"pushManagement.send"))}},directives:[P.a8,i._Y,i.JL,i.sg,p.KE,Z.MS,i.Q7,i.JJ,i.u,u.O5,s.Mn,s.tP,x.lW,p.TO],pipes:[c.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}.target-wrapper[_ngcontent-%COMP%]{width:100%;text-align:start}.target-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;margin-inline-end:1em;font-weight:bold}.target-wrapper[_ngcontent-%COMP%]   mtx-select[_ngcontent-%COMP%]{display:inline-block;width:50%}.radio-wrapper[_ngcontent-%COMP%]{width:100%;text-align:start;margin-top:2em;margin-bottom:2em}.radio-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;margin-inline-end:1em;font-weight:bold}.radio-wrapper[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]{display:inline-block;width:50%}@media (max-width: 576px){.radio-wrapper[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-bottom:1em}}.mat-raised-button[_ngcontent-%COMP%]{background-color:var(--text-primary);color:var(--white-color);margin-top:3em;padding-right:24px;padding-left:24px}.editor-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block;width:100%;font-weight:bold}.editor-container[_ngcontent-%COMP%]   .editor-wrapper[_ngcontent-%COMP%]{margin-top:1em;background:#f4f4f4}.form-row[_ngcontent-%COMP%]{position:relative}.form-row[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:#f44336;font-size:12px;text-align:start;position:absolute;bottom:10%;inset-inline-start:12px}  .NgxEditor{height:10em;background:transparent!important;border:none!important;border-top:1px solid rgba(0,0,0,.2)!important}  .NgxEditor__MenuBar{background-color:transparent!important;padding:10px!important}"]}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(T)],g.Bz]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[u.ez,S,i.u5,i.UX,h.m8,s.FP.forRoot({locals:{bold:"Bold",italic:"Italic",code:"Code",underline:"Underline",strike:"Strike",blockquote:"Blockquote",bullet_list:"Bullet List",ordered_list:"Ordered List",heading:"Heading",h1:"Header 1",h2:"Header 2",h3:"Header 3",h4:"Header 4",h5:"Header 5",h6:"Header 6",align_left:"Left Align",align_center:"Center Align",align_right:"Right Align",align_justify:"Justify",text_color:"Text Color",background_color:"Background Color",url:"URL",text:"Text",openInNewTab:"Open in new tab",insert:"Insert",altText:"Alt Text",title:"Title",remove:"Remove"}})]]}),n})()}}]);