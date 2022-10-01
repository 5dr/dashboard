"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[708],{4512:(C,Z,a)=>{a.d(Z,{H:()=>y});var r=a(8966),t=a(5319),P=a(4295),e=a(7716),g=a(690),u=a(69),p=a(7093),f=a(7423),T=a(5245),M=a(7322),A=a(8833),O=a(3679);let y=(()=>{class m{constructor(_,s,l,d,x){this.data=_,this.dialogRef=s,this.propertiesManagementService=l,this.commonService=d,this.translateService=x,this.reason="",this.subscriptions=new t.w}ngOnInit(){}rejectProperty(){var _;const s={status:7,reason:this.reason};(null==s?void 0:s.reason)&&this.subscriptions.add(this.propertiesManagementService.updatePropertyStatus(null===(_=this.data.propertyData)||void 0===_?void 0:_.uid,s).subscribe(l=>{console.log(l),this.commonService.handleSuccessMessage(this.translateService.instant("propertiesManagement.propertyRejectSuccess"),this.translateService.instant("general.success")),this.dialogRef.close({isSent:!0})},l=>{var d;this.commonService.handleErrorMessage(null===(d=null==l?void 0:l.error)||void 0===d?void 0:d.message)}))}onSend(){this.rejectProperty()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return m.\u0275fac=function(_){return new(_||m)(e.Y36(r.WI),e.Y36(r.so),e.Y36(P.T),e.Y36(g.v),e.Y36(u.sK))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-reject-property"]],decls:28,vars:17,consts:[[1,"popup-container"],["mat-dialog-title","",1,"d-flex","align-items-center","head"],["fxFlex",""],["mat-icon-button","","matDialogClose","",1,"mat-close-modal"],[1,"content-wrapper"],[1,"example-full-width"],["matInput","",3,"ngModel","placeholder","ngModelChange"],[1,"d-flex","justify-content-center","w-100","mb-4","confirmation-btns"],["mat-stroked-button","","matDialogClose","",1,"btn","cancel-btn"],[1,"mx-2"],["mat-flat-button","",1,"btn","confirm-btn",3,"disabled","click"]],template:function(_,s){1&_&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"span",2),e.TgZ(3,"h5"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e._UZ(6,"span",2),e.TgZ(7,"button",3),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"mat-dialog-content",4),e.TgZ(11,"mat-form-field",5),e.TgZ(12,"mat-label"),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"textarea",6),e.NdJ("ngModelChange",function(d){return s.reason=d}),e.ALo(16,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"mat-dialog-actions"),e.TgZ(18,"div",7),e.TgZ(19,"button",8),e.TgZ(20,"span"),e._uU(21),e.ALo(22,"translate"),e.qZA(),e.qZA(),e._UZ(23,"span",9),e.TgZ(24,"button",10),e.NdJ("click",function(){return s.onSend()}),e.TgZ(25,"span"),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&_&&(e.xp6(4),e.Oqu(e.lcZ(5,7,"propertiesManagement.rejectProperty")),e.xp6(9),e.Oqu(e.lcZ(14,9,"propertiesManagement.rejectionReasons")),e.xp6(2),e.s9C("placeholder",e.lcZ(16,11,"propertiesManagement.enterReasons")),e.Q6J("ngModel",s.reason),e.xp6(6),e.Oqu(e.lcZ(22,13,"general.cancel")),e.xp6(3),e.Q6J("disabled",!s.reason),e.xp6(2),e.Oqu(e.lcZ(27,15,"general.send")))},directives:[r.uh,p.yH,f.lW,r.ZT,T.Hw,r.xY,M.KE,M.hX,A.Nt,O.Fj,O.JJ,O.On,r.H8],pipes:[u.X$],styles:[".head[_ngcontent-%COMP%]{justify-content:center!important}.head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.mat-close-modal[_ngcontent-%COMP%]{line-height:1em!important}.content-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.content-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;height:8em}.confirmation-btns[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em}.confirmation-btns[_ngcontent-%COMP%]   .confirm-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color)}"]}),m})()},4350:(C,Z,a)=>{a.d(Z,{E:()=>D});var r=a(8966),t=a(7716),P=a(7093),e=a(7423),g=a(5245),u=a(5693),p=a(8583),f=a(69);function T(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyName")),t.xp6(3),t.Oqu(o.data.propertyData.name)}}function M(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyType")),t.xp6(3),t.Oqu(o.data.propertyData.type.property_type)}}function A(n,c){if(1&n&&(t.TgZ(0,"div",17),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyDescription")),t.xp6(3),t.Oqu(o.data.propertyData.description)}}function O(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.noOfGuests")),t.xp6(3),t.Oqu(o.data.propertyData.no_of_guests)}}function y(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.noOfBedrooms")),t.xp6(3),t.Oqu(o.data.propertyData.no_of_bedrooms)}}function m(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.noOfBathrooms")),t.xp6(3),t.Oqu(o.data.propertyData.no_of_bathrooms)}}function v(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.country")),t.xp6(3),t.Oqu(o.data.propertyData.country)}}function _(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.city")),t.xp6(3),t.Oqu(o.data.propertyData.city)}}function s(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.street")),t.xp6(3),t.Oqu(o.data.propertyData.street)}}function l(n,c){if(1&n&&(t.TgZ(0,"div",17),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.location")),t.xp6(3),t.Oqu(o.data.propertyData.location)}}function d(n,c){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"p",15),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.zip_code")),t.xp6(3),t.Oqu(o.data.propertyData.zip_code)}}function x(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"mat-dialog-actions"),t.TgZ(1,"div",18),t.TgZ(2,"button",19),t.NdJ("click",function(){return t.CHM(o),t.oxw().onActionClicked("reject")}),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.qZA(),t._UZ(6,"span",20),t.TgZ(7,"button",21),t.NdJ("click",function(){return t.CHM(o),t.oxw().onActionClicked("approve")}),t.TgZ(8,"span"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&n&&(t.xp6(4),t.Oqu(t.lcZ(5,2,"propertiesManagement.reject")),t.xp6(5),t.Oqu(t.lcZ(10,4,"propertiesManagement.approve")))}let D=(()=>{class n{constructor(o,i){this.data=o,this.dialogRef=i,this.config={autoplay:!0,slidesPerView:1,loop:!0,spaceBetween:30}}ngOnInit(){console.log(this.data.propertyData)}onActionClicked(o){this.dialogRef.close({action:o})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.WI),t.Y36(r.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-property-details"]],decls:29,vars:18,consts:[[1,"popup-container"],["mat-dialog-title","",1,"d-flex","align-items-center","head"],["fxFlex",""],["mat-icon-button","","matDialogClose","",1,"mat-close-modal"],[1,"content-wrapper"],[1,"images-slider-wrapper"],[3,"config"],[1,"swiper-wrapper"],[1,"swiper-slide"],[3,"src","alt"],[1,"info-wrapper"],["class","info-section",4,"ngIf"],["class","info-section long",4,"ngIf"],[4,"ngIf"],[1,"info-section"],[1,"head"],[1,"data"],[1,"info-section","long"],[1,"d-flex","justify-content-center","w-100","mb-4","confirmation-btns"],["mat-stroked-button","",1,"btn","reject-btn",3,"click"],[1,"mx-2"],["mat-flat-button","",1,"btn","approve-btn",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"span",2),t.TgZ(3,"h5"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"span",2),t.TgZ(7,"button",3),t.TgZ(8,"mat-icon"),t._uU(9,"close"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"mat-dialog-content",4),t.TgZ(11,"div",5),t.TgZ(12,"swiper",6),t.TgZ(13,"div",7),t.TgZ(14,"div",8),t._UZ(15,"img",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",10),t.YNc(17,T,6,4,"div",11),t.YNc(18,M,6,4,"div",11),t.YNc(19,A,6,4,"div",12),t.YNc(20,O,6,4,"div",11),t.YNc(21,y,6,4,"div",11),t.YNc(22,m,6,4,"div",11),t.YNc(23,v,6,4,"div",11),t.YNc(24,_,6,4,"div",11),t.YNc(25,s,6,4,"div",11),t.YNc(26,l,6,4,"div",12),t.YNc(27,d,6,4,"div",11),t.qZA(),t.qZA(),t.YNc(28,x,11,6,"mat-dialog-actions",13),t.qZA()),2&o&&(t.xp6(4),t.Oqu(t.lcZ(5,16,"propertiesManagement.viewDetails")),t.xp6(8),t.Q6J("config",i.config),t.xp6(3),t.Q6J("src",i.data.propertyData.cover_photo,t.LSH)("alt",i.data.propertyData.name),t.xp6(2),t.Q6J("ngIf",i.data.propertyData.name),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.type.property_type),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.description),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.no_of_guests),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.no_of_bedrooms),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.no_of_bathrooms),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.country),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.city),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.street),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.location),t.xp6(1),t.Q6J("ngIf",i.data.propertyData.zip_code),t.xp6(1),t.Q6J("ngIf",2===i.data.propertyData.status))},directives:[r.uh,P.yH,e.lW,r.ZT,g.Hw,r.xY,u.n,p.O5,r.H8],pipes:[f.X$],styles:[".head[_ngcontent-%COMP%]{justify-content:center!important}.head[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0}.mat-close-modal[_ngcontent-%COMP%]{line-height:1em!important}.content-wrapper[_ngcontent-%COMP%]   .images-slider-wrapper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:15em}.content-wrapper[_ngcontent-%COMP%]   .images-slider-wrapper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:5px}.content-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{margin-top:1em}.content-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]{width:50%;display:inline-block;text-align:start;margin-bottom:1em;vertical-align:top}@media (max-width: 576px){.content-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]{width:100%;display:block}}.content-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{margin-bottom:.5em;color:var(--main-txt-color)}.content-wrapper[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{color:var(--grey-color)}.long[_ngcontent-%COMP%]{width:100%!important;display:block!important;margin-bottom:2em!important}.confirmation-btns[_ngcontent-%COMP%]   .reject-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em}.confirmation-btns[_ngcontent-%COMP%]   .approve-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color)}"]}),n})()},4295:(C,Z,a)=>{a.d(Z,{T:()=>e});var r=a(2340),t=a(7716),P=a(1841);let e=(()=>{class g{constructor(p){this.http=p}fetchPropertyList(p){return this.http.get(`${r.N.endPointUrl}admin/property-list`,{params:p})}fetchPropertyTypes(){return this.http.get(`${r.N.endPointUrl}user/hosting/property-types`)}updatePropertyStatus(p,f){return this.http.put(`${r.N.endPointUrl}admin/update-status/${p}`,f)}fetchPropertyDetails(p){return this.http.get(`${r.N.endPointUrl}admin/property-details/${p}`)}deleteProperty(p){return this.http.delete(`${r.N.endPointUrl}admin/delete-property/${p}`)}}return g.\u0275fac=function(p){return new(p||g)(t.LFG(P.eN))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);