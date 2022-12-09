"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[562],{690:(A,u,a)=>{a.d(u,{v:()=>g});var S=a(2340),s=a(7716),e=a(2290),b=a(7460),f=a(8583),c=a(1841);let g=(()=>{class h{constructor(l,p,_,C){this.toaster=l,this.translateService=p,this.datePipe=_,this.http=C}dateMapping(l,p){return this.datePipe.transform(l,p)}handleSuccessMessage(l,p){this.toaster.success(l,p)}handleErrorMessage(l){this.toaster.error(l,this.translateService.instant("general.error"))}uploadImg(l){return this.http.post(`${S.N.endPointUrl}user/hosting/upload-images`,l)}}return h.\u0275fac=function(l){return new(l||h)(s.LFG(e._W),s.LFG(b.sK),s.LFG(f.uU),s.LFG(c.eN))},h.\u0275prov=s.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},8562:(A,u,a)=>{a.r(u),a.d(u,{HeaderSliderModule:()=>Y});var S=a(8583),s=a(2340),e=a(7716),b=a(1841);let f=(()=>{class n{constructor(t){this.http=t}fetchHeaderSliderList(){return this.http.get(`${s.N.endPointUrl}admin/header-slider-list`)}addHeaderSlider(t){return this.http.post(`${s.N.endPointUrl}admin/add-header-slider`,t)}editHeaderSlider(t,i){return this.http.put(`${s.N.endPointUrl}admin/update-header-slider/${i}`,t)}deleteHeaderSlider(t){return this.http.delete(`${s.N.endPointUrl}admin/delete-header-slider/${t}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=a(3679),g=a(8966),h=a(690),v=a(5319),l=a(7460),p=a(7093),_=a(7423),C=a(5245),Z=a(7322);function O(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p",12),e.NdJ("click",function(){return e.CHM(t),e.oxw(),e.MAs(15).click()}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"general.uploadImg")))}function H(n,o){1&n&&(e.TgZ(0,"span",13),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"general.uploading")))}function P(n,o){if(1&n&&e._UZ(0,"img",14),2&n){const t=e.oxw();e.Q6J("src",t.imgLink,e.LSH)}}function T(n,o){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"validations.required")," "))}function w(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"mat-dialog-actions"),e.TgZ(1,"div",15),e.TgZ(2,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().onAdd()}),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("disabled",t.headerSliderForm.invalid),e.xp6(2),e.Oqu(e.lcZ(5,2,"headerSlider.add"))}}function D(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"mat-dialog-actions"),e.TgZ(1,"div",17),e.TgZ(2,"button",18),e.NdJ("click",function(){return e.CHM(t),e.oxw().onSave()}),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.qZA(),e._UZ(6,"span",19),e.TgZ(7,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().onCancel()}),e.TgZ(8,"span"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("disabled",t.headerSliderForm.invalid),e.xp6(2),e.Oqu(e.lcZ(5,3,"headerSlider.save")),e.xp6(5),e.Oqu(e.lcZ(10,5,"headerSlider.cancel"))}}let x=(()=>{class n{constructor(t,i,r,d,m,N){this.data=t,this.dialogRef=i,this.fb=r,this.translateService=d,this.commonService=m,this.headerSliderMangeService=N,this.loading=!1,this.formData=new FormData,this.uploadLoading=!1,this.subscriptions=new v.w}ngOnInit(){this.initHeaderSliderForm(),this.handleEditMode()}initHeaderSliderForm(){this.headerSliderForm=this.fb.group({url:[null,[c.kI.required]]})}getControl(t){return this.headerSliderForm.get(t)}handleEditMode(){var t;"EDIT"===(null===(t=this.data)||void 0===t?void 0:t.mode)&&(this.imgFile=this.data.headerSliderData)}uploadImg(t){this.uploadLoading=!0;const i=new FormData;i.append("images",t.target.files[0]),this.subscriptions.add(this.commonService.uploadImg(i).subscribe({next:r=>{var d;null===(d=this.getControl("url"))||void 0===d||d.patchValue(r.data[0].image_url),this.imgLink=r.data[0].image_url,this.uploadLoading=!1},error:r=>{this.uploadLoading=!1,this.commonService.handleErrorMessage(r.message)}}))}onAdd(){this.headerSliderForm.valid&&(this.loading=!0,this.subscriptions.add(this.headerSliderMangeService.addHeaderSlider(this.headerSliderForm.value).subscribe({next:t=>{this.loading=!1,this.dialogRef.close({added:!0,addedItem:null==t?void 0:t.headerSlider}),this.commonService.handleSuccessMessage(this.translateService.instant("headerSlider.addSuccess"),this.translateService.instant("general.success"))},error:t=>{this.loading=!1,this.commonService.handleErrorMessage(t.message)}})))}onSave(){this.headerSliderForm.valid&&(this.loading=!0,this.subscriptions.add(this.headerSliderMangeService.editHeaderSlider(this.headerSliderForm.value,this.data.headerSliderData.id).subscribe({next:t=>{this.loading=!1,this.dialogRef.close({updated:!0}),this.commonService.handleSuccessMessage(this.translateService.instant("headerSlider.updateSuccess"),this.translateService.instant("general.success"))},error:t=>{this.loading=!1,this.commonService.handleErrorMessage(t.message)}})))}onCancel(){this.dialogRef.close()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.WI),e.Y36(g.so),e.Y36(c.qu),e.Y36(l.sK),e.Y36(h.v),e.Y36(f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-header-slider"]],decls:20,vars:10,consts:[[1,"popup-container"],["mat-dialog-title","",1,"d-flex","align-items-center","head"],["fxFlex",""],["mat-icon-button","","matDialogClose","",1,"mat-close-modal"],[1,"content-wrapper"],[3,"formGroup"],["class","label file-input",3,"click",4,"ngIf"],["class","text-muted py-3 ps-2 mb-5",4,"ngIf"],["type","file",1,"d-none",3,"change"],["inputFile",""],["class","slider-img","alt","",3,"src",4,"ngIf"],[4,"ngIf"],[1,"label","file-input",3,"click"],[1,"text-muted","py-3","ps-2","mb-5"],["alt","",1,"slider-img",3,"src"],[1,"d-flex","justify-content-center","w-100","mb-4","confirmation-btns"],["mat-stroked-button","",1,"btn","confirm-btn",3,"disabled","click"],[1,"d-flex","justify-content-center","w-100","mb-4","edit-btns"],["mat-stroked-button","",1,"btn","save-btn",3,"disabled","click"],[1,"mx-2"],["mat-flat-button","",1,"btn","cancel-btn",3,"click"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"span",2),e.TgZ(3,"h5"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e._UZ(6,"span",2),e.TgZ(7,"button",3),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"mat-dialog-content",4),e.TgZ(11,"form",5),e.YNc(12,O,3,3,"p",6),e.YNc(13,H,3,3,"span",7),e.TgZ(14,"input",8,9),e.NdJ("change",function(d){return i.uploadImg(d)}),e.qZA(),e.YNc(16,P,1,1,"img",10),e.YNc(17,T,3,3,"mat-error",11),e.qZA(),e.qZA(),e.YNc(18,w,6,4,"mat-dialog-actions",11),e.YNc(19,D,11,7,"mat-dialog-actions",11),e.qZA()),2&t){let r;e.xp6(4),e.hij(" ",e.lcZ(5,8,"ADD"===i.data.mode?"headerSlider.addHeaderSlider":"headerSlider.editHeaderSlider")," "),e.xp6(7),e.Q6J("formGroup",i.headerSliderForm),e.xp6(1),e.Q6J("ngIf",!i.uploadLoading),e.xp6(1),e.Q6J("ngIf",i.uploadLoading),e.xp6(3),e.Q6J("ngIf","EDIT"===i.data.mode||"ADD"===i.data.mode&&(null==i.imgLink?null:i.imgLink.length)),e.xp6(1),e.Q6J("ngIf",null==(r=i.getControl("image_url"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf","ADD"===(null==i.data?null:i.data.mode)),e.xp6(1),e.Q6J("ngIf","EDIT"===(null==i.data?null:i.data.mode))}},directives:[g.uh,p.yH,_.lW,g.ZT,C.Hw,g.xY,c._Y,c.JL,c.sg,S.O5,Z.TO,g.H8],pipes:[l.X$],styles:[".head[_ngcontent-%COMP%]{justify-content:center!important}.head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.mat-close-modal[_ngcontent-%COMP%]{line-height:1em!important}.content-wrapper[_ngcontent-%COMP%]{min-height:10em}.content-wrapper[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%]{background-color:var(--text-primary);color:var(--white-color);padding:10px 18px;display:inline-block;cursor:pointer;border-radius:5px}.content-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:1em}.confirm-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color)!important;width:100%}.edit-btns[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color);width:40%}.edit-btns[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{width:40%}.slider-img[_ngcontent-%COMP%]{margin-top:.5em;margin-bottom:1em;display:block;height:15em;border:1px solid #ddd;width:100%;object-fit:cover}"]}),n})();var L=a(1393),y=a(1576);function E(n,o){if(1&n&&e._UZ(0,"img",9),2&n){const t=o.$implicit;e.Q6J("src",null==t?null:t.url,e.LSH)}}const I=function(){return[5,10,50,100]},F=function(n){return{url:n}};let U=(()=>{class n{constructor(t,i,r,d){this.translateService=t,this.dialog=i,this.commonService=r,this.headerSliderMangeService=d,this.subscriptions=new v.w,this.loading=!1,this.headerSliderData=[],this.columns=[{header:this.translateService.instant("headerSlider.id"),field:"id",width:"20%"},{header:this.translateService.instant("headerSlider.imageUrl"),field:"url",width:"20%"},{header:this.translateService.instant("headerSlider.actions"),field:"operation",width:"20%",type:"button",buttons:[{color:"info",type:"icon",icon:"edit",tooltip:this.translateService.instant("headerSlider.edit"),click:m=>this.onEditHeaderSlider(m)},{color:"warn",type:"icon",icon:"delete",tooltip:this.translateService.instant("headerSlider.delete"),click:m=>this.onDeleteHeaderSlider(m)}]}]}ngOnInit(){this.fetchHeaderSliderList()}fetchHeaderSliderList(){this.loading=!0,this.subscriptions.add(this.headerSliderMangeService.fetchHeaderSliderList().subscribe({next:t=>{t.successful&&(this.loading=!1,this.headerSliderData=t.headerSlider)},error:t=>{this.loading=!1,this.commonService.handleErrorMessage(t.message)}}))}onAddHeaderSlider(){const i=this.dialog.open(x,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{headerSliderData:{},mode:"ADD"}}).afterClosed().subscribe(r=>{i.unsubscribe(),(null==r?void 0:r.added)&&this.fetchHeaderSliderList()})}onEditHeaderSlider(t){const r=this.dialog.open(x,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{headerSliderData:t,mode:"EDIT"}}).afterClosed().subscribe(d=>{r.unsubscribe(),(null==d?void 0:d.updated)&&this.fetchHeaderSliderList()})}onDeleteHeaderSlider(t){const i=this.dialog.open(L.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("headerSlider.deleteConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),r=i.componentInstance.confirmationEmitter.subscribe(d=>{d?this.deleteHeaderSlider(t,i):i.close(),r.unsubscribe()})}deleteHeaderSlider(t,i){this.subscriptions.add(this.headerSliderMangeService.deleteHeaderSlider(t.id).subscribe({next:()=>{i.close(),this.commonService.handleSuccessMessage(this.translateService.instant("headerSlider.deleteSuccess"),this.translateService.instant("general.success"))},error:r=>{this.commonService.handleErrorMessage(r.message)},complete:()=>{this.fetchHeaderSliderList()}}))}onPageChanged(t){console.log(null==t?void 0:t.pageIndex)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.sK),e.Y36(g.uw),e.Y36(h.v),e.Y36(f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-header-slider"]],decls:14,vars:25,consts:[[1,"container-fluid","pt-3","pb-4"],[1,"row","pb-4"],[1,"col-lg-6","col-md-6","col-sm-12","title-row"],[1,"title"],[1,"col-lg-6","col-md-6","col-sm-12","button-container"],["mat-raised-button","",1,"btn",3,"click"],[1,"row","table-row"],[3,"data","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","cellTemplate","page"],["url",""],[1,"cover-photo",3,"src"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h3",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"button",5),e.NdJ("click",function(){return i.onAddHeaderSlider()}),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",6),e.TgZ(11,"mtx-grid",7),e.NdJ("page",function(d){return i.onPageChanged(d)}),e.qZA(),e.YNc(12,E,1,1,"ng-template",null,8,e.W1O),e.qZA(),e.qZA()),2&t){const r=e.MAs(13);e.xp6(4),e.Oqu(e.lcZ(5,18,"menu.headerSlider")),e.xp6(4),e.Oqu(e.lcZ(9,20,"headerSlider.addHeaderSlider")),e.xp6(3),e.Q6J("data",i.headerSliderData)("columns",i.columns)("loading",i.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!0)("showPaginator",!0)("pageSizeOptions",e.DdM(22,I))("pageIndex",0)("pageSize",5)("cellTemplate",e.VKq(23,F,r))}},directives:[_.lW,y.CM],pipes:[l.X$],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary);padding-inline-start:4px}.button-container[_ngcontent-%COMP%]{justify-content:end;text-align:end;padding-inline-end:5%}.button-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:var(--text-primary);color:var(--white-color)}.search-container[_ngcontent-%COMP%]{align-self:center}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:10px 20px;border-radius:30px;border:1px solid #CDCDCD;width:70%;overflow:hidden}@media (max-width: 1024px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:90%}}@media (max-width: 576px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:100%;padding:8px 10px}}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:14px;box-shadow:none;width:90%}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.filter-container[_ngcontent-%COMP%]{justify-content:end;text-align:end}@media (max-width: 768px){.filter-container[_ngcontent-%COMP%]{margin-top:1em;justify-content:start;text-align:start}}.filter-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:50%;display:inline-block;padding-right:1em;padding-left:1em}.cover-photo[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:5px;object-fit:cover}"]}),n})();var M=a(3423);const k=[{path:"",component:U}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[M.Bz.forChild(k)],M.Bz]}),n})();var R=a(4284);let Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[S.ez,J,R.m8,c.u5,c.UX]]}),n})()}}]);