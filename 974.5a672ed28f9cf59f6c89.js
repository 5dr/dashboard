"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[974],{1974:($,v,r)=>{r.r(v),r.d(v,{OnlinePropertiesModule:()=>F});var C=r(8583),c=r(3679),S=r(4284),O=r(5693),g=r(3423),b=r(690),d=r(2340),f=r(1393),P=r(6738),M=r(5319),x=r(5435),T=r(4395),e=r(7716),Z=r(1841);let w=(()=>{class i{constructor(t){this.http=t}fetchOnlinePropertiesList(t){return this.http.get(`${d.N.endPointUrl}admin/property-list-online`,{params:t})}fetchPropertyTypes(){return this.http.get(`${d.N.endPointUrl}user/hosting/property-types`)}fetchPropertyDetails(t){return this.http.get(`${d.N.endPointUrl}admin/property-details/${t}`)}updatePropertyStatus(t,n){return this.http.put(`${d.N.endPointUrl}admin/update-status/${t}`,n)}deleteProperty(t){return this.http.delete(`${d.N.endPointUrl}admin/delete-property/${t}`)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Z.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var y=r(7460),A=r(8966),D=r(5245),m=r(7322),L=r(5870),u=r(386),U=r(8833),k=r(1576);function B(i,a){if(1&i&&e._UZ(0,"img",20),2&i){const t=a.$implicit;e.Q6J("src",null==t?null:t.cover_photo,e.LSH)("alt",null==t?null:t.name)}}function Y(i,a){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=a.$implicit,n=e.oxw();e.xp6(1),e.Oqu("ar"===n.lang?t.property_type.name_ar:t.property_type.name_en)}}const z=function(){return[10,20,30,50]},I=function(i,a){return{cover_photo:i,property_type:a}},J=[{path:"",component:(()=>{class i{constructor(t,n,s,o,l,h){this.translateService=t,this.dialog=n,this.commonService=s,this.onlinePropertiesService=o,this.router=l,this.cdr=h,this.langSelect="",this.lang=d.N.lang,this.propertiesCriteria={page:0,pageSize:10,property_type:0,search:"",publish_date:""},this.propertyTypes=[],this.propertiesData=[],this.columns=[{header:this.translateService.instant("propertiesManagement.propertyID"),field:"id"},{header:this.translateService.instant("propertiesManagement.propertyImg"),field:"cover_photo"},{header:this.translateService.instant("propertiesManagement.propertyName"),field:"name"},{header:this.translateService.instant("propertiesManagement.propertyType"),field:"type.property_type"},{header:this.translateService.instant("propertiesManagement.noOfBedrooms"),field:"no_of_bedrooms"},{header:this.translateService.instant("propertiesManagement.noOfBathrooms"),field:"no_of_bathrooms"},{header:this.translateService.instant("propertiesManagement.country"),field:"country"},{header:this.translateService.instant("propertiesManagement.city"),field:"city"},{header:this.translateService.instant("propertiesManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"visibility",tooltip:this.translateService.instant("propertiesManagement.viewDetails"),click:p=>this.onViewDetails(p)},{color:"warn",type:"icon",icon:"lock",tooltip:this.translateService.instant("propertiesManagement.block"),iif:p=>3===p.status,click:p=>this.onBlockProperty(p)},{color:"success",type:"icon",icon:"lock_open",iif:p=>5===p.status,tooltip:this.translateService.instant("propertiesManagement.unblock"),click:p=>this.onUnBlockProperty(p)}]}],this.loading=!1,this.totalItemsCount=0,this.propertiesSearchQuery=new c.NI,this.subscriptions=new M.w}ngOnInit(){this.chooesLangSelect(),this.fetchOnlinePropertiesList(),this.fetchPropertyTypes(),this.initPropertiesSearch()}chooesLangSelect(){this.langSelect="ar"==this.lang?"name_ar":"name_en"}fetchOnlinePropertiesList(){this.loading=!0,this.propertiesCriteria.status||delete this.propertiesCriteria.status,this.propertiesCriteria.property_type||delete this.propertiesCriteria.property_type,this.subscriptions.add(this.onlinePropertiesService.fetchOnlinePropertiesList(Object.assign(Object.assign({},this.propertiesCriteria),{page:this.propertiesCriteria.page+1})).subscribe(t=>{var n,s,o;this.propertiesData=null===(n=null==t?void 0:t.properties)||void 0===n?void 0:n.data,this.totalItemsCount=null===(o=null===(s=null==t?void 0:t.properties)||void 0===s?void 0:s.meta)||void 0===o?void 0:o.total,this.loading=!1,this.cdr.detectChanges()},t=>{var n;this.loading=!1,this.cdr.detectChanges(),this.commonService.handleErrorMessage(null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message)}))}initPropertiesSearch(){this.subscriptions.add(this.propertiesSearchQuery.valueChanges.pipe((0,x.h)(t=>{var n;return(null===(n=null==t?void 0:t.trim())||void 0===n?void 0:n.length)>3||""===(null==t?void 0:t.trim())}),(0,T.b)(700)).subscribe(t=>{this.propertiesCriteria.search=t,this.propertiesCriteria.page=0,this.fetchOnlinePropertiesList()}))}onSelectPropertyType(t){t?(this.propertiesCriteria.property_type=null==t?void 0:t.id,this.fetchOnlinePropertiesList()):(this.propertiesCriteria.property_type=void 0,this.fetchOnlinePropertiesList())}fetchPropertyTypes(){this.subscriptions.add(this.onlinePropertiesService.fetchPropertyTypes().subscribe(t=>{this.propertyTypes=null==t?void 0:t.data},t=>{var n;this.commonService.handleErrorMessage(null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message)}))}onViewDetails(t){this.router.navigate(["/properties-approval/property-details",t.uid])}onBlockProperty(t){const n=this.dialog.open(f.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("onlineProperties.blockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),s=n.componentInstance.confirmationEmitter.subscribe(o=>{o?this.blockUnblockProperty("block",t,n):n.close(),s.unsubscribe()})}onUnBlockProperty(t){const n=this.dialog.open(f.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("onlineProperties.unblockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),s=n.componentInstance.confirmationEmitter.subscribe(o=>{o?this.blockUnblockProperty("unblock",t,n):n.close(),s.unsubscribe()})}blockUnblockProperty(t,n,s){this.subscriptions.add(this.onlinePropertiesService.updatePropertyStatus(null==n?void 0:n.uid,{status:"block"===t?5:3}).subscribe(l=>{console.log(l),s.close(),this.commonService.handleSuccessMessage(this.translateService.instant("block"===t?"onlineProperties.propertyBlockSuccess":"onlineProperties.propertyUnblockSuccess"),this.translateService.instant("general.success")),this.fetchOnlinePropertiesList()},l=>{var h;this.commonService.handleErrorMessage(null===(h=null==l?void 0:l.error)||void 0===h?void 0:h.message)}))}onFilterByDate(t){console.log(P(t.value).format("YYYY-MM-DD")),(null==t?void 0:t.value)?(this.propertiesCriteria.publish_date=P(t.value).format("DD-MM-YYYY"),this.fetchOnlinePropertiesList()):(this.propertiesCriteria.publish_date=void 0,this.fetchOnlinePropertiesList())}onPageChanged(t){this.propertiesCriteria.page=null==t?void 0:t.pageIndex,this.propertiesCriteria.pageSize=t.pageSize,this.fetchOnlinePropertiesList()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(y.sK),e.Y36(A.uw),e.Y36(b.v),e.Y36(w),e.Y36(g.F0),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-online-properties"]],decls:30,vars:38,consts:[[1,"container-fluid","pt-3","pb-4"],[1,"row","title-row","pb-4"],[1,"title"],[1,"row","filter-row","pb-3"],[1,"col-lg-6","col-md-6","col-sm-12","search-container"],[1,"search-wrapper"],["matPrefix",""],["type","text",3,"formControl","placeholder"],[1,"col-lg-6","col-md-6","col-sm-12","filter-container"],["floatLabel","never",1,""],["bindValue","id",3,"placeholder","ngModel","bindLabel","items","ngModelChange","change"],["floatLabel","never"],["matSuffix","",3,"for"],["type","date"],["datePicker",""],["matInput","",3,"mtxDatetimepicker","dateChange"],[1,"row","table-row"],[3,"data","length","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","pageSizeOptions","pageIndex","pageSize","cellTemplate","page"],["cover_photo",""],["property_type",""],[1,"cover-photo",3,"src","alt"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h3",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"mat-icon",6),e._uU(9,"search"),e.qZA(),e._UZ(10,"input",7),e.ALo(11,"translate"),e.qZA(),e.qZA(),e.TgZ(12,"div",8),e.TgZ(13,"mat-form-field",9),e.TgZ(14,"mtx-select",10),e.NdJ("ngModelChange",function(o){return n.propertiesCriteria.property_type=o})("change",function(o){return n.onSelectPropertyType(o)}),e.ALo(15,"translate"),e.qZA(),e.qZA(),e.TgZ(16,"mat-form-field",11),e.TgZ(17,"mat-placeholder"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"mtx-datetimepicker-toggle",12),e._UZ(21,"mtx-datetimepicker",13,14),e.TgZ(23,"input",15),e.NdJ("dateChange",function(o){return n.onFilterByDate(o)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",16),e.TgZ(25,"mtx-grid",17),e.NdJ("page",function(o){return n.onPageChanged(o)}),e.qZA(),e.YNc(26,B,1,2,"ng-template",null,18,e.W1O),e.YNc(28,Y,2,1,"ng-template",null,19,e.W1O),e.qZA(),e.qZA()),2&t){const s=e.MAs(22),o=e.MAs(27),l=e.MAs(29);e.xp6(3),e.Oqu(e.lcZ(4,26,"menu.onlineProperties")),e.xp6(7),e.s9C("placeholder",e.lcZ(11,28,"onlineProperties.search")),e.Q6J("formControl",n.propertiesSearchQuery),e.xp6(4),e.s9C("placeholder",e.lcZ(15,30,"onlineProperties.propertyType")),e.Q6J("ngModel",n.propertiesCriteria.property_type)("bindLabel",n.langSelect)("items",n.propertyTypes),e.xp6(4),e.Oqu(e.lcZ(19,32,"bookingManagement.date")),e.xp6(2),e.Q6J("for",s),e.xp6(3),e.Q6J("mtxDatetimepicker",s),e.xp6(2),e.Q6J("data",n.propertiesData)("length",n.totalItemsCount)("columns",n.columns)("loading",n.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!1)("pageSizeOptions",e.DdM(34,z))("pageIndex",n.propertiesCriteria.page)("pageSize",n.propertiesCriteria.pageSize)("cellTemplate",e.WLB(35,I,o,l))}},directives:[D.Hw,m.qo,c.Fj,c.JJ,c.oH,m.KE,L.MS,c.On,m.UY,u.C7,m.R9,u.VQ,U.Nt,u.WA,k.CM],pipes:[y.X$],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}.search-container[_ngcontent-%COMP%]{align-self:center}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:10px 20px;border-radius:30px;border:1px solid #CDCDCD;width:70%;overflow:hidden}@media (max-width: 1024px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:90%}}@media (max-width: 576px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:100%;padding:8px 10px}}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:14px;box-shadow:none;width:90%}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.filter-container[_ngcontent-%COMP%]{justify-content:end;text-align:end}@media (max-width: 768px){.filter-container[_ngcontent-%COMP%]{margin-top:1em}}@media (max-width: 576px){.filter-container[_ngcontent-%COMP%]{justify-content:start;text-align:start}}.filter-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:50%;display:inline-block;padding-right:1em;padding-left:1em}  .mat-button.mat-success,   .mat-icon-button.mat-success,   .mat-stroked-button.mat-success{color:green}  .mat-button.mat-info,   .mat-icon-button.mat-info,   .mat-stroked-button.mat-info{color:#56aec3}.cover-photo[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:5px;object-fit:cover}"]}),i})()}];let N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild(J)],g.Bz]}),i})(),F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[],imports:[[C.ez,N,c.u5,c.UX,S.m8,O.X]]}),i})()}}]);