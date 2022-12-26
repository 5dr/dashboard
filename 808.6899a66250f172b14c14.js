"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[808],{690:(L,h,r)=>{r.d(h,{v:()=>A});var v=r(2340),d=r(7716),x=r(2290),f=r(7460),_=r(8583),p=r(1841);let A=(()=>{class g{constructor(c,n,O,M){this.toaster=c,this.translateService=n,this.datePipe=O,this.http=M}dateMapping(c,n){return this.datePipe.transform(c,n)}handleSuccessMessage(c,n){this.toaster.success(c,n)}handleErrorMessage(c){this.toaster.error(c,this.translateService.instant("general.error"))}uploadImg(c){return this.http.post(`${v.N.endPointUrl}user/hosting/upload-images`,c)}}return g.\u0275fac=function(c){return new(c||g)(d.LFG(x._W),d.LFG(f.sK),d.LFG(_.uU),d.LFG(p.eN))},g.\u0275prov=d.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},2808:(L,h,r)=>{r.r(h),r.d(h,{AdminManagementModule:()=>V});var v=r(8583),d=r(3679),x=r(4284),f=r(3423),_=r(690),p=r(1393),A=r(5319),g=r(8966),S=r(1792),c=r(2340),n=r(7716),O=r(1841);let M=(()=>{class a{constructor(t){this.http=t}fetchAdminsList(t){return this.http.get(`${c.N.endPointUrl}admin/admins`,{params:t})}addAdmin(t){return this.http.post(`${c.N.endPointUrl}admin/add-admin`,t)}editAdmin(t,e){return this.http.put(`${c.N.endPointUrl}admin/update-admin/${t}`,e)}toggleAdminStatus(t){return this.http.put(`${c.N.endPointUrl}admin/toggle-status/${t}`,{})}deleteAdmin(t){return this.http.delete(`${c.N.endPointUrl}admin/delete-user/${t}`)}}return a.\u0275fac=function(t){return new(t||a)(n.LFG(O.eN))},a.\u0275prov=n.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var C=r(7460),I=r(7093),T=r(7423),P=r(5245),b=r(7322),y=r(8833),w=r(9814),q=r(5870);function D(a,s){1&a&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function E(a,s){1&a&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function N(a,s){1&a&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function k(a,s){1&a&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function F(a,s){1&a&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function J(a,s){if(1&a&&(n.TgZ(0,"mat-form-field"),n.TgZ(1,"p",6),n._uU(2),n.ALo(3,"translate"),n.qZA(),n._UZ(4,"input",17),n.YNc(5,F,3,3,"mat-error",8),n.qZA()),2&a){const t=n.oxw();let e;n.xp6(2),n.Oqu(n.lcZ(3,2,"adminManagement.password")),n.xp6(3),n.Q6J("ngIf",(null==(e=t.getControl("password"))?null:e.touched)&&(null==(e=t.getControl("password"))?null:e.invalid))}}function Y(a,s){1&a&&(n.TgZ(0,"span",18),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function B(a,s){1&a&&(n.TgZ(0,"mat-error"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&a&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"validations.required")," "))}function j(a,s){if(1&a){const t=n.EpF();n.TgZ(0,"mat-dialog-actions"),n.TgZ(1,"div",19),n.TgZ(2,"button",20),n.NdJ("click",function(){return n.CHM(t),n.oxw().onAdd()}),n.TgZ(3,"span"),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&a){const t=n.oxw();n.xp6(2),n.Q6J("disabled",t.adminForm.touched&&t.adminForm.invalid||t.loading),n.xp6(2),n.Oqu(n.lcZ(5,2,"adminManagement.add"))}}function R(a,s){if(1&a){const t=n.EpF();n.TgZ(0,"mat-dialog-actions"),n.TgZ(1,"div",21),n.TgZ(2,"button",22),n.NdJ("click",function(){return n.CHM(t),n.oxw().onSave()}),n.TgZ(3,"span"),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.qZA(),n._UZ(6,"span",23),n.TgZ(7,"button",24),n.NdJ("click",function(){return n.CHM(t),n.oxw().onCancel()}),n.TgZ(8,"span"),n._uU(9),n.ALo(10,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&a){const t=n.oxw();n.xp6(2),n.Q6J("disabled",t.adminForm.touched&&t.adminForm.invalid||t.loading),n.xp6(2),n.Oqu(n.lcZ(5,3,"adminManagement.save")),n.xp6(5),n.Oqu(n.lcZ(10,5,"adminManagement.cancel"))}}let U=(()=>{class a{constructor(t,e,i,o,l,m,u){this.data=t,this.dialogRef=e,this.fb=i,this.translateService=o,this.commonService=l,this.adminManagementService=m,this.userService=u,this.loading=!1,this.imgLink="../../../../../assets/images/avatar.jpg",this.uploadLoading=!1,this.allPermissions=[{id:1,name:"dashboard"},{id:2,name:"user-management"},{id:3,name:"properties-approval"},{id:4,name:"booking-management"},{id:5,name:"payment-and-transactions"},{id:6,name:"push-management"},{id:7,name:"query-management"},{id:8,name:"ratings-and-reviews"},{id:9,name:"coupons-management"},{id:10,name:"change-password"},{id:11,name:"online-properties"},{id:12,name:"web-application"},{id:13,name:"admin-management"},{id:14,name:"profile"}],this.subscriptions=new A.w}ngOnInit(){this.initAdminForm(),this.handleEditMode()}initAdminForm(){this.adminForm=this.fb.group({first_name:["",[d.kI.required]],last_name:["",[d.kI.required]],email:["",[d.kI.required]],country_code:["+20",[]],phone_number:["",[d.kI.required]],is_active:["",[d.kI.required]],password:["",[d.kI.required]],roles:["",[d.kI.required]]})}handleEditMode(){var t,e,i,o,l;this.adminCloneData=Object.assign({},null===(t=this.data)||void 0===t?void 0:t.adminData),"EDIT"===(null===(e=this.data)||void 0===e?void 0:e.mode)&&(this.imgLink=this.adminCloneData.avatar,this.adminForm.removeControl("password"),this.data.adminData.roles=null===(o=null===(i=this.data)||void 0===i?void 0:i.adminData)||void 0===o?void 0:o.roles.map(m=>null==m?void 0:m.role),this.adminForm.patchValue(null===(l=this.data)||void 0===l?void 0:l.adminData))}getControl(t){return this.adminForm.get(t)}onAdd(){var t;this.loading=!0,this.subscriptions.add(this.adminManagementService.addAdmin(null===(t=this.adminForm)||void 0===t?void 0:t.value).subscribe(e=>{this.loading=!1,this.dialogRef.close({added:!0,addedItem:null==e?void 0:e.data}),this.commonService.handleSuccessMessage(this.translateService.instant("adminManagement.addSuccess"),this.translateService.instant("general.success"))},e=>{var i;this.loading=!1,this.commonService.handleErrorMessage(null===(i=null==e?void 0:e.error)||void 0===i?void 0:i.message)}))}onSave(){var t,e,i;this.loading=!0,this.subscriptions.add(this.adminManagementService.editAdmin(null===(e=null===(t=this.data)||void 0===t?void 0:t.adminData)||void 0===e?void 0:e.uid,null===(i=this.adminForm)||void 0===i?void 0:i.value).subscribe(o=>{var l;this.loading=!1,this.dialogRef.close({updated:!0,updatedItem:null===(l=null==o?void 0:o.data)||void 0===l?void 0:l.user}),this.commonService.handleSuccessMessage(this.translateService.instant("adminManagement.updateSuccess"),this.translateService.instant("general.success"))},o=>{var l;this.loading=!1,this.commonService.handleErrorMessage(null===(l=null==o?void 0:o.error)||void 0===l?void 0:l.message)}))}onCancel(){this.dialogRef.close()}uploadImg(t){this.uploadLoading=!0;const e=new FormData;e.append("photo",t.target.files[0]),this.subscriptions.add(this.userService.updateProfilePhoto(this.data.adminData.id,e).subscribe({next:i=>{this.imgLink=i.data[0].avatar,this.uploadLoading=!1},error:i=>{this.uploadLoading=!1,this.commonService.handleErrorMessage(i.message)}}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(g.WI),n.Y36(g.so),n.Y36(d.qu),n.Y36(C.sK),n.Y36(_.v),n.Y36(M),n.Y36(S.K))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-add-admin"]],decls:57,vars:42,consts:[[1,"popup-container"],["mat-dialog-title","",1,"d-flex","align-items-center","head"],["fxFlex",""],["mat-icon-button","","matDialogClose","",1,"mat-close-modal"],[1,"content-wrapper"],[3,"formGroup"],[1,"label"],["matInput","","formControlName","first_name","type","text"],[4,"ngIf"],["matInput","","formControlName","last_name","type","text"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","phone_number","type","tel"],[1,"radio-wrapper"],["formControlName","is_active","name","status","aria-label","status"],[3,"value"],["class","error",4,"ngIf"],["required","","formControlName","roles","bindLabel","name","bindValue","name",3,"closeOnSelect","multiple","items"],["matInput","","formControlName","password","type","password"],[1,"error"],[1,"d-flex","justify-content-center","w-100","mb-4","confirmation-btns"],["mat-stroked-button","",1,"btn","confirm-btn",3,"disabled","click"],[1,"d-flex","justify-content-center","w-100","mb-4","edit-btns"],["mat-stroked-button","",1,"btn","save-btn",3,"disabled","click"],[1,"mx-2"],["mat-flat-button","",1,"btn","cancel-btn",3,"click"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._UZ(2,"span",2),n.TgZ(3,"h5"),n._uU(4),n.ALo(5,"translate"),n.qZA(),n._UZ(6,"span",2),n.TgZ(7,"button",3),n.TgZ(8,"mat-icon"),n._uU(9,"close"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"mat-dialog-content",4),n.TgZ(11,"form",5),n.TgZ(12,"mat-form-field"),n.TgZ(13,"p",6),n._uU(14),n.ALo(15,"translate"),n.qZA(),n._UZ(16,"input",7),n.YNc(17,D,3,3,"mat-error",8),n.qZA(),n.TgZ(18,"mat-form-field"),n.TgZ(19,"p",6),n._uU(20),n.ALo(21,"translate"),n.qZA(),n._UZ(22,"input",9),n.YNc(23,E,3,3,"mat-error",8),n.qZA(),n.TgZ(24,"mat-form-field"),n.TgZ(25,"p",6),n._uU(26),n.ALo(27,"translate"),n.qZA(),n._UZ(28,"input",10),n.YNc(29,N,3,3,"mat-error",8),n.qZA(),n.TgZ(30,"mat-form-field"),n.TgZ(31,"p",6),n._uU(32),n.ALo(33,"translate"),n.qZA(),n._UZ(34,"input",11),n.YNc(35,k,3,3,"mat-error",8),n.qZA(),n.YNc(36,J,6,4,"mat-form-field",8),n.TgZ(37,"div",12),n.TgZ(38,"p",6),n._uU(39),n.ALo(40,"translate"),n.qZA(),n.TgZ(41,"mat-radio-group",13),n.TgZ(42,"mat-radio-button",14),n._uU(43),n.ALo(44,"translate"),n.qZA(),n.TgZ(45,"mat-radio-button",14),n._uU(46),n.ALo(47,"translate"),n.qZA(),n.qZA(),n.YNc(48,Y,3,3,"span",15),n.qZA(),n.TgZ(49,"mat-form-field"),n.TgZ(50,"p",6),n._uU(51),n.ALo(52,"translate"),n.qZA(),n._UZ(53,"mtx-select",16),n.YNc(54,B,3,3,"mat-error",8),n.qZA(),n.qZA(),n.qZA(),n.YNc(55,j,6,4,"mat-dialog-actions",8),n.YNc(56,R,11,7,"mat-dialog-actions",8),n.qZA()),2&t){let i,o,l,m,u,Z;n.xp6(4),n.hij(" ",n.lcZ(5,24,"ADD"===e.data.mode?"adminManagement.addAdmin":"adminManagement.editAdmin")," "),n.xp6(7),n.Q6J("formGroup",e.adminForm),n.xp6(3),n.Oqu(n.lcZ(15,26,"adminManagement.firstName")),n.xp6(3),n.Q6J("ngIf",(null==(i=e.getControl("first_name"))?null:i.touched)&&(null==(i=e.getControl("first_name"))?null:i.invalid)),n.xp6(3),n.Oqu(n.lcZ(21,28,"adminManagement.lastName")),n.xp6(3),n.Q6J("ngIf",(null==(o=e.getControl("last_name"))?null:o.touched)&&(null==(o=e.getControl("last_name"))?null:o.invalid)),n.xp6(3),n.Oqu(n.lcZ(27,30,"adminManagement.email")),n.xp6(3),n.Q6J("ngIf",(null==(l=e.getControl("email"))?null:l.touched)&&(null==(l=e.getControl("email"))?null:l.invalid)),n.xp6(3),n.Oqu(n.lcZ(33,32,"adminManagement.userPhone")),n.xp6(3),n.Q6J("ngIf",(null==(m=e.getControl("phone_number"))?null:m.touched)&&(null==(m=e.getControl("phone_number"))?null:m.invalid)),n.xp6(1),n.Q6J("ngIf","ADD"===e.data.mode),n.xp6(3),n.Oqu(n.lcZ(40,34,"adminManagement.status")),n.xp6(3),n.Q6J("value",1),n.xp6(1),n.hij("",n.lcZ(44,36,"adminManagement.active")," "),n.xp6(2),n.Q6J("value",0),n.xp6(1),n.hij("",n.lcZ(47,38,"adminManagement.notActive")," "),n.xp6(2),n.Q6J("ngIf",(null==(u=e.getControl("is_active"))?null:u.touched)&&(null==(u=e.getControl("is_active"))||null==u.errors?null:u.errors.required)),n.xp6(3),n.Oqu(n.lcZ(52,40,"adminManagement.permissions")),n.xp6(2),n.Q6J("closeOnSelect",!1)("multiple",!0)("items",e.allPermissions),n.xp6(1),n.Q6J("ngIf",(null==(Z=e.getControl("roles"))?null:Z.touched)&&(null==(Z=e.getControl("roles"))?null:Z.invalid)),n.xp6(1),n.Q6J("ngIf","ADD"===(null==e.data?null:e.data.mode)),n.xp6(1),n.Q6J("ngIf","EDIT"===(null==e.data?null:e.data.mode))}},directives:[g.uh,I.yH,T.lW,g.ZT,P.Hw,g.xY,d._Y,d.JL,d.sg,b.KE,y.Nt,d.Fj,d.JJ,d.u,v.O5,w.VQ,w.U0,q.MS,d.Q7,b.TO,g.H8],pipes:[C.X$],styles:[".head[_ngcontent-%COMP%]{justify-content:center!important}.head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.change-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:4px solid #ee5076}.change-img[_ngcontent-%COMP%]   .download-img[_ngcontent-%COMP%]{background-color:#fafafa;padding:5px;border-radius:50%;bottom:0;left:82px;cursor:pointer}.change-img[_ngcontent-%COMP%]   .download-img[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{filter:var(--filter-brand)}.change-img[_ngcontent-%COMP%]   #input-img[_ngcontent-%COMP%]{display:none}.change-img[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.mat-close-modal[_ngcontent-%COMP%]{line-height:1em!important}.content-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:1em}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]{margin-bottom:1em}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{display:inline-block;width:-moz-fit-content;width:fit-content}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]{display:inline-block;margin-inline-start:1em}.content-wrapper[_ngcontent-%COMP%]   .radio-wrapper[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{margin-inline-end:1em}.confirm-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color);width:100%}.edit-btns[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color);width:40%}.edit-btns[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{width:40%}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{appearance:none;-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;-moz-appearance:textfield}"]}),a})();var Q=r(1576);function z(a,s){if(1&a&&n._uU(0),2&a){const t=s.$implicit;n.AsE(" ",t.first_name," ",null==t?null:t.last_name," ")}}function W(a,s){if(1&a&&n._uU(0),2&a){const t=s.$implicit;n.hij(" ",null!=t&&t.is_active?"Active":"Not Active"," ")}}function $(a,s){if(1&a&&n._UZ(0,"img",19),2&a){const t=s.$implicit;n.Q6J("src",null==t?null:t.avatar,n.LSH)}}const H=function(){return[10,20,30,50]},K=function(a,s,t){return{first_name:a,is_active:s,avatar:t}},G=[{path:"",component:(()=>{class a{constructor(t,e,i,o,l){this.translateService=t,this.dialog=e,this.commonService=i,this.adminManagementService=o,this.cdr=l,this.adminsCriteria={page:0,pageSize:5,is_active:""},this.adminsStatus=[{id:1,name:"Active"},{id:0,name:"Not Active"}],this.adminsData=[],this.columns=[{header:this.translateService.instant("adminManagement.id"),field:"id"},{header:this.translateService.instant("adminManagement.avatar"),field:"avatar"},{header:this.translateService.instant("adminManagement.userName"),field:"first_name"},{header:this.translateService.instant("adminManagement.email"),field:"email"},{header:this.translateService.instant("adminManagement.userPhone"),field:"phone_number"},{header:this.translateService.instant("adminManagement.permissionsCount"),field:"permissions_count"},{header:this.translateService.instant("adminManagement.status"),field:"is_active"},{header:this.translateService.instant("adminManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"edit",tooltip:this.translateService.instant("adminManagement.edit"),click:m=>this.onEditAdmin(m)},{color:"warn",type:"icon",icon:"lock",tooltip:this.translateService.instant("adminManagement.block"),iif:m=>!0===Boolean(m.is_active),click:m=>this.onBlockAdmin(m)},{color:"success",type:"icon",icon:"lock_open",tooltip:this.translateService.instant("adminManagement.unblock"),iif:m=>!1===Boolean(m.is_active),click:m=>this.onUnblockAdmin(m)},{color:"warn",type:"icon",icon:"delete",tooltip:this.translateService.instant("adminManagement.delete"),click:m=>this.onDeleteAdmin(m)}]}],this.loading=!1,this.totalItemsCount=0,this.subscriptions=new A.w}ngOnInit(){this.fetchAdminsList()}fetchAdminsList(){this.loading=!0,this.subscriptions.add(this.adminManagementService.fetchAdminsList(Object.assign(Object.assign({},this.adminsCriteria),{page:this.adminsCriteria.page+1})).subscribe(t=>{var e,i,o;(null==t?void 0:t.successful)&&(this.adminsData=null===(e=null==t?void 0:t.users)||void 0===e?void 0:e.data,this.totalItemsCount=null===(o=null===(i=null==t?void 0:t.users)||void 0===i?void 0:i.meta)||void 0===o?void 0:o.total),this.loading=!1,this.cdr.detectChanges()},t=>{var e;this.loading=!1,this.cdr.detectChanges(),this.commonService.handleErrorMessage(null===(e=null==t?void 0:t.error)||void 0===e?void 0:e.message)}))}onAddAdmin(){const e=this.dialog.open(U,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{adminData:{},mode:"ADD"}}).afterClosed().subscribe(i=>{(null==i?void 0:i.added)&&this.fetchAdminsList(),e.unsubscribe()})}onEditAdmin(t){console.log(t);const i=this.dialog.open(U,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{adminData:t,mode:"EDIT"}}).afterClosed().subscribe(o=>{(null==o?void 0:o.updated)&&this.fetchAdminsList(),i.unsubscribe()})}onBlockAdmin(t){const e=this.dialog.open(p.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("adminManagement.blockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),i=e.componentInstance.confirmationEmitter.subscribe(o=>{o?this.changeAdminStatus(t,e):e.close(),i.unsubscribe()})}changeAdminStatus(t,e){this.subscriptions.add(this.adminManagementService.toggleAdminStatus(null==t?void 0:t.uid).subscribe(i=>{(null==i?void 0:i.successful)&&(this.fetchAdminsList(),e.close(),this.commonService.handleSuccessMessage(this.translateService.instant("adminManagement.blockSuccess"),this.translateService.instant("general.success")))},i=>{var o;this.commonService.handleErrorMessage(null===(o=null==i?void 0:i.error)||void 0===o?void 0:o.message)}))}onUnblockAdmin(t){const e=this.dialog.open(p.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("adminManagement.unblockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),i=e.componentInstance.confirmationEmitter.subscribe(o=>{o?this.changeAdminStatus(t,e):e.close(),i.unsubscribe()})}onDeleteAdmin(t){const e=this.dialog.open(p.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("adminManagement.deleteConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),i=e.componentInstance.confirmationEmitter.subscribe(o=>{o?this.deleteAdmin(t,e):e.close(),i.unsubscribe()})}deleteAdmin(t,e){console.log(this.adminsData.indexOf(t));const i=this.adminsData.indexOf(t);console.log(i),this.subscriptions.add(this.adminManagementService.deleteAdmin(null==t?void 0:t.uid).subscribe(o=>{e.close(),this.fetchAdminsList(),this.commonService.handleSuccessMessage(this.translateService.instant("adminManagement.deleteSuccess"),this.translateService.instant("general.success"))},o=>{var l;this.commonService.handleErrorMessage(null===(l=null==o?void 0:o.error)||void 0===l?void 0:l.message)}))}onPageChanged(t){this.adminsCriteria.page=null==t?void 0:t.pageIndex,this.adminsCriteria.pageSize=null==t?void 0:t.pageSize,this.fetchAdminsList()}onFilterByStatus(t){this.adminsCriteria.is_active=null==t?void 0:t.id,this.fetchAdminsList()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return a.\u0275fac=function(t){return new(t||a)(n.Y36(C.sK),n.Y36(g.uw),n.Y36(_.v),n.Y36(M),n.Y36(n.sBO))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-admin-management"]],decls:29,vars:35,consts:[[1,"container-fluid","pt-3","pb-4"],[1,"row","pb-4"],[1,"col-lg-6","col-md-6","col-sm-12","title-row"],[1,"title"],[1,"col-lg-6","col-md-6","col-sm-12","button-container"],["mat-raised-button","",1,"btn",3,"click"],[1,"row","filter-row","pb-3"],[1,"col-lg-6","col-md-6","col-sm-12","search-container"],[1,"search-wrapper"],["matPrefix",""],["type","text",3,"placeholder"],[1,"col-lg-6","col-md-6","col-sm-12","filter-container"],["floatLabel","never",1,""],["bindLabel","name","bindValue","id",3,"placeholder","items","ngModel","change","ngModelChange"],[1,"row","table-row"],[3,"data","columns","length","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","pageSizeOptions","pageIndex","pageSize","cellTemplate","page"],["first_name",""],["is_active",""],["avatar",""],[1,"cover-photo",3,"src"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h3",3),n._uU(4),n.ALo(5,"translate"),n.qZA(),n.qZA(),n.TgZ(6,"div",4),n.TgZ(7,"button",5),n.NdJ("click",function(){return e.onAddAdmin()}),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(10,"div",6),n.TgZ(11,"div",7),n.TgZ(12,"div",8),n.TgZ(13,"mat-icon",9),n._uU(14,"search"),n.qZA(),n._UZ(15,"input",10),n.ALo(16,"translate"),n.qZA(),n.qZA(),n.TgZ(17,"div",11),n.TgZ(18,"mat-form-field",12),n.TgZ(19,"mtx-select",13),n.NdJ("change",function(o){return e.onFilterByStatus(o)})("ngModelChange",function(o){return e.adminsCriteria.is_active=o}),n.ALo(20,"translate"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(21,"div",14),n.TgZ(22,"mtx-grid",15),n.NdJ("page",function(o){return e.onPageChanged(o)}),n.qZA(),n.YNc(23,z,1,2,"ng-template",null,16,n.W1O),n.YNc(25,W,1,1,"ng-template",null,17,n.W1O),n.YNc(27,$,1,1,"ng-template",null,18,n.W1O),n.qZA(),n.qZA()),2&t){const i=n.MAs(24),o=n.MAs(26),l=n.MAs(28);n.xp6(4),n.Oqu(n.lcZ(5,22,"menu.adminManagement")),n.xp6(4),n.Oqu(n.lcZ(9,24,"adminManagement.addAdmin")),n.xp6(7),n.s9C("placeholder",n.lcZ(16,26,"adminManagement.search")),n.xp6(4),n.s9C("placeholder",n.lcZ(20,28,"adminManagement.adminsStatus")),n.Q6J("items",e.adminsStatus)("ngModel",e.adminsCriteria.is_active),n.xp6(3),n.Q6J("data",e.adminsData)("columns",e.columns)("length",e.totalItemsCount)("loading",e.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!1)("pageSizeOptions",n.DdM(30,H))("pageIndex",e.adminsCriteria.page)("pageSize",e.adminsCriteria.pageSize)("cellTemplate",n.kEZ(31,K,i,o,l))}},directives:[T.lW,P.Hw,b.qo,b.KE,q.MS,d.JJ,d.On,Q.CM],pipes:[C.X$],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary);padding-inline-start:4px}.button-container[_ngcontent-%COMP%]{justify-content:end;text-align:end;padding-inline-end:5%}.button-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:var(--text-primary);color:var(--white-color)}.search-container[_ngcontent-%COMP%]{align-self:center}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:10px 20px;border-radius:30px;border:1px solid #CDCDCD;width:70%;overflow:hidden}@media (max-width: 1024px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:90%}}@media (max-width: 576px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:100%;padding:8px 10px}}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:14px;box-shadow:none;width:90%}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.filter-container[_ngcontent-%COMP%]{justify-content:end;text-align:end}@media (max-width: 768px){.filter-container[_ngcontent-%COMP%]{margin-top:1em;justify-content:start;text-align:start}}.filter-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:50%;display:inline-block;padding-right:1em;padding-left:1em}.cover-photo[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:5px;object-fit:cover}"]}),a})()}];let X=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[f.Bz.forChild(G)],f.Bz]}),a})(),V=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({providers:[],imports:[[v.ez,X,d.u5,d.UX,x.m8]]}),a})()}}]);