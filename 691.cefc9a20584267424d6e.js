"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[691],{6691:(P,M,a)=>{a.d(M,{C:()=>k});var r=a(3679),c=a(8966),Z=a(690),u=a(6738),f=a(5319),l=a(322),t=a(7716),x=a(7460),E=a(7093),D=a(7423),U=a(5245),A=a(7322),b=a(8833),I=a(8583),O=a(386),T=a(9814);function q(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function L(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function F(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function y(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function Y(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function S(e,s){1&e&&(t.TgZ(0,"span",21),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validations.required")," "))}function R(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"mat-dialog-actions"),t.TgZ(1,"div",22),t.TgZ(2,"button",23),t.NdJ("click",function(){return t.CHM(o),t.oxw().onAdd()}),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(2),t.Q6J("disabled",o.couponForm.invalid),t.xp6(2),t.Oqu(t.lcZ(5,2,"couponsManagement.add"))}}function N(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"mat-dialog-actions"),t.TgZ(1,"div",24),t.TgZ(2,"button",25),t.NdJ("click",function(){return t.CHM(o),t.oxw().onSave()}),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t._UZ(6,"span",26),t.TgZ(7,"button",27),t.NdJ("click",function(){return t.CHM(o),t.oxw().onCancel()}),t.TgZ(8,"span"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=t.oxw();t.xp6(2),t.Q6J("disabled",o.couponForm.invalid),t.xp6(2),t.Oqu(t.lcZ(5,3,"couponsManagement.save")),t.xp6(5),t.Oqu(t.lcZ(10,5,"couponsManagement.cancel"))}}let k=(()=>{class e{constructor(o,n,i,g,p,_){this.data=o,this.dialogRef=n,this.fb=i,this.translateService=g,this.commonService=p,this.couponsManagementService=_,this.loading=!1,this.subscriptions=new f.w}ngOnInit(){this.initCouponForm(),console.log(this.data),this.handleEditMode()}initCouponForm(){this.couponForm=this.fb.group({code:["",[r.kI.required]],percentage:["",[]],description:["",[r.kI.required]],start_date:["",[r.kI.required]],expiry_date:["",[r.kI.required]],status:["",[r.kI.required]]})}handleEditMode(){var o,n;"EDIT"===(null===(o=this.data)||void 0===o?void 0:o.mode)&&this.couponForm.patchValue(null===(n=this.data)||void 0===n?void 0:n.couponData)}getControl(o){return this.couponForm.get(o)}onSelectType(o){this.discountType=o.value,"amount"===this.discountType?(this.couponForm.controls.amount.setValidators(r.kI.required),this.couponForm.controls.percentage.setValidators([]),this.couponForm.controls.percentage.setValue(null)):(this.couponForm.controls.percentage.setValidators(r.kI.required),this.couponForm.controls.amount.setValidators([]),this.couponForm.controls.amount.setValue(null)),this.couponForm.controls.amount.updateValueAndValidity(),this.couponForm.controls.percentage.updateValueAndValidity()}onSelectStatus(){var o;return null===(o=this.getControl("status"))||void 0===o?void 0:o.value}onAdd(){const o={code:this.couponForm.value.code,percentage:String(this.couponForm.value.percentage),description:this.couponForm.value.description,start_date:u(this.couponForm.value.start_date).format("DD-MM-YYYY"),expiry_date:u(this.couponForm.value.expiry_date).format("DD-MM-YYYY"),status:this.couponForm.value.status};this.loading=!0,this.subscriptions.add(this.couponsManagementService.addCoupon(o).subscribe(n=>{this.loading=!1,this.dialogRef.close({added:!0,addedItem:null==n?void 0:n.data}),this.commonService.handleSuccessMessage(this.translateService.instant("couponsManagement.addSuccess"),this.translateService.instant("general.success"))},n=>{var i;this.loading=!1,this.commonService.handleErrorMessage(null===(i=null==n?void 0:n.error)||void 0===i?void 0:i.message)}))}onSave(){const o={code:this.couponForm.value.code,percentage:String(this.couponForm.value.percentage),description:this.couponForm.value.description,start_date:u(this.couponForm.value.start_date).format("DD-MM-YYYY"),expiry_date:u(this.couponForm.value.expiry_date).format("DD-MM-YYYY"),status:this.couponForm.value.status};this.loading=!0,this.subscriptions.add(this.couponsManagementService.editCoupon(o,this.data.couponData.id).subscribe(n=>{this.loading=!1,this.dialogRef.close({updated:!0,updatedItem:null==n?void 0:n.data}),this.commonService.handleSuccessMessage(this.translateService.instant("couponsManagement.updateSuccess"),this.translateService.instant("general.success"))},n=>{var i;this.loading=!1,this.commonService.handleErrorMessage(null===(i=null==n?void 0:n.error)||void 0===i?void 0:i.message)}))}onCancel(){this.dialogRef.close()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.WI),t.Y36(c.so),t.Y36(r.qu),t.Y36(x.sK),t.Y36(Z.v),t.Y36(l.Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-coupon"]],decls:62,vars:40,consts:[[1,"popup-container"],["mat-dialog-title","",1,"d-flex","align-items-center","head"],["fxFlex",""],["mat-icon-button","","matDialogClose","",1,"mat-close-modal"],[1,"content-wrapper"],[3,"formGroup"],[1,"label"],["matInput","","formControlName","code","type","text"],[4,"ngIf"],["matInput","","formControlName","percentage","type","number"],["matInput","","formControlName","description","name","","id","","cols","10","rows","5"],["matSuffix","",3,"for"],["type","date"],["start_date",""],["formControlName","start_date","matInput","",3,"mtxDatetimepicker"],["expiry_date",""],["formControlName","expiry_date","matInput","",3,"mtxDatetimepicker"],[1,"radio-wrapper"],["formControlName","status","name","status","aria-label","status"],["value","1"],["class","error",4,"ngIf"],[1,"error"],[1,"d-flex","justify-content-center","w-100","mb-4","confirmation-btns"],["mat-stroked-button","",1,"btn","confirm-btn",3,"disabled","click"],[1,"d-flex","justify-content-center","w-100","mb-4","edit-btns"],["mat-stroked-button","",1,"btn","save-btn",3,"disabled","click"],[1,"mx-2"],["mat-flat-button","",1,"btn","cancel-btn",3,"click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"span",2),t.TgZ(3,"h5"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"span",2),t.TgZ(7,"button",3),t.TgZ(8,"mat-icon"),t._uU(9,"close"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"mat-dialog-content",4),t.TgZ(11,"form",5),t.TgZ(12,"mat-form-field"),t.TgZ(13,"p",6),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",7),t.YNc(17,q,3,3,"mat-error",8),t.qZA(),t.TgZ(18,"mat-form-field"),t.TgZ(19,"p",6),t._uU(20),t.ALo(21,"translate"),t.qZA(),t._UZ(22,"input",9),t.YNc(23,L,3,3,"mat-error",8),t.qZA(),t.TgZ(24,"mat-form-field"),t.TgZ(25,"p",6),t._uU(26),t.ALo(27,"translate"),t.qZA(),t._UZ(28,"textarea",10),t.YNc(29,F,3,3,"mat-error",8),t.qZA(),t.TgZ(30,"mat-form-field"),t.TgZ(31,"p",6),t._uU(32),t.ALo(33,"translate"),t.qZA(),t._UZ(34,"mtx-datetimepicker-toggle",11),t._UZ(35,"mtx-datetimepicker",12,13),t._UZ(37,"input",14),t.YNc(38,y,3,3,"mat-error",8),t.qZA(),t.TgZ(39,"mat-form-field"),t.TgZ(40,"p",6),t._uU(41),t.ALo(42,"translate"),t.qZA(),t._UZ(43,"mtx-datetimepicker-toggle",11),t._UZ(44,"mtx-datetimepicker",12,15),t._UZ(46,"input",16),t.YNc(47,Y,3,3,"mat-error",8),t.qZA(),t.TgZ(48,"div",17),t.TgZ(49,"p",6),t._uU(50),t.ALo(51,"translate"),t.qZA(),t.TgZ(52,"mat-radio-group",18),t.TgZ(53,"mat-radio-button",19),t._uU(54),t.ALo(55,"translate"),t.qZA(),t.TgZ(56,"mat-radio-button"),t._uU(57),t.ALo(58,"translate"),t.qZA(),t.qZA(),t.YNc(59,S,3,3,"span",20),t.qZA(),t.qZA(),t.qZA(),t.YNc(60,R,6,4,"mat-dialog-actions",8),t.YNc(61,N,11,7,"mat-dialog-actions",8),t.qZA()),2&o){const i=t.MAs(36),g=t.MAs(45);let p,_,h,C,v,m;t.xp6(4),t.hij(" ",t.lcZ(5,22,"ADD"===n.data.mode?"couponsManagement.addCoupon":"couponsManagement.editCoupon")," "),t.xp6(7),t.Q6J("formGroup",n.couponForm),t.xp6(3),t.Oqu(t.lcZ(15,24,"couponsManagement.code")),t.xp6(3),t.Q6J("ngIf",(null==(p=n.getControl("code"))?null:p.touched)&&(null==(p=n.getControl("code"))?null:p.invalid)),t.xp6(3),t.Oqu(t.lcZ(21,26,"couponsManagement.percentage")),t.xp6(3),t.Q6J("ngIf",(null==(_=n.getControl("percentage"))?null:_.touched)&&(null==(_=n.getControl("percentage"))?null:_.invalid)),t.xp6(3),t.Oqu(t.lcZ(27,28,"couponsManagement.description")),t.xp6(3),t.Q6J("ngIf",(null==(h=n.getControl("description"))?null:h.touched)&&(null==(h=n.getControl("description"))?null:h.invalid)),t.xp6(3),t.Oqu(t.lcZ(33,30,"couponsManagement.startDate")),t.xp6(2),t.Q6J("for",i),t.xp6(3),t.Q6J("mtxDatetimepicker",i),t.xp6(1),t.Q6J("ngIf",(null==(C=n.getControl("start_date"))?null:C.touched)&&(null==(C=n.getControl("start_date"))?null:C.invalid)),t.xp6(3),t.Oqu(t.lcZ(42,32,"couponsManagement.expiryDate")),t.xp6(2),t.Q6J("for",g),t.xp6(3),t.Q6J("mtxDatetimepicker",g),t.xp6(1),t.Q6J("ngIf",(null==(v=n.getControl("expiry_date"))?null:v.touched)&&(null==(v=n.getControl("expiry_date"))?null:v.invalid)),t.xp6(3),t.Oqu(t.lcZ(51,34,"couponsManagement.status")),t.xp6(4),t.hij(" ",t.lcZ(55,36,"couponsManagement.active")," "),t.xp6(3),t.hij(" ",t.lcZ(58,38,"couponsManagement.notActive")," "),t.xp6(2),t.Q6J("ngIf",(null==(m=n.getControl("status"))?null:m.touched)&&(null==(m=n.getControl("status"))||null==m.errors?null:m.errors.required)),t.xp6(1),t.Q6J("ngIf","ADD"===(null==n.data?null:n.data.mode)),t.xp6(1),t.Q6J("ngIf","EDIT"===(null==n.data?null:n.data.mode))}},directives:[c.uh,E.yH,D.lW,c.ZT,U.Hw,c.xY,r._Y,r.JL,r.sg,A.KE,b.Nt,r.Fj,r.JJ,r.u,I.O5,r.wV,O.C7,A.R9,O.VQ,O.WA,T.VQ,T.U0,A.TO,c.H8],pipes:[x.X$],styles:[".head[_ngcontent-%COMP%]{justify-content:center!important}.head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.mat-close-modal[_ngcontent-%COMP%]{line-height:1em!important}.content-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:1em}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]{margin-bottom:1em}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:inline-block;width:-moz-fit-content;width:fit-content}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]{display:inline-block;margin-inline-start:1em}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin-inline-end:1em}textarea[_ngcontent-%COMP%]{resize:none}.confirm-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color);width:100%}.edit-btns[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color);width:40%}.edit-btns[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{width:40%}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{appearance:none;-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;-moz-appearance:textfield}"]}),e})()},322:(P,M,a)=>{a.d(M,{Z:()=>u});var r=a(2340),c=a(7716),Z=a(1841);let u=(()=>{class d{constructor(l){this.http=l}fetchCouponsList(){return this.http.get(`${r.N.endPointUrl}admin/coupon-list`)}addCoupon(l){return this.http.post(`${r.N.endPointUrl}admin/create-coupon`,l)}editCoupon(l,t){return this.http.put(`${r.N.endPointUrl}admin/update-coupon/${t}`,l)}activateCoupon(l){return this.http.put(`${r.N.endPointUrl}admin/coupon-toggle-status/${l}`,"")}deleteCoupon(l){return this.http.delete(`${r.N.endPointUrl}admin/delete-coupon/${l}`)}}return d.\u0275fac=function(l){return new(l||d)(c.LFG(Z.eN))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);