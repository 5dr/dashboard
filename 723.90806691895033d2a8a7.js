"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[723],{3723:(K,b,r)=>{r.r(b),r.d(b,{DashboardModule:()=>$});var C=r(8583),v=r(3679),f=r(3423),e=r(7716),M=r(4295),w=r(4350),p=r(5319),d=r(1393),x=r(4512),c=r(69),g=r(8966),m=r(690),h=r(9224),D=r(7322),T=r(3157),u=r(1655);const k=function(){return[1,3,10,50,100]};let Z=(()=>{class i{constructor(t,n,o,a){this.translateService=t,this.dialog=n,this.commonService=o,this.propertiesManagementService=a,this.PropertyStatus=[{id:1,name:"Approved"},{id:2,name:"Rejected"}],this.PropertyTypes=[],this.propertiesData=[],this.columns=[{header:this.translateService.instant("propertiesManagement.propertyType"),field:"type.property_type"},{header:this.translateService.instant("propertiesManagement.noOfGuests"),field:"no_of_guests"},{header:this.translateService.instant("propertiesManagement.noOfBedrooms"),field:"no_of_bedrooms"},{header:this.translateService.instant("propertiesManagement.noOfBathrooms"),field:"no_of_bathrooms"},{header:this.translateService.instant("propertiesManagement.country"),field:"country"},{header:this.translateService.instant("propertiesManagement.city"),field:"city"},{header:this.translateService.instant("propertiesManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"visibility",tooltip:this.translateService.instant("propertiesManagement.viewDetails"),click:s=>this.onViewDetails(s)},{color:"success",type:"icon",icon:"done",tooltip:this.translateService.instant("propertiesManagement.approve"),click:s=>this.onAcceptProperty(s)},{color:"warn",type:"icon",icon:"close",tooltip:this.translateService.instant("propertiesManagement.reject"),click:s=>this.onRejectProperty(s)},{color:"warn",type:"icon",icon:"lock",tooltip:this.translateService.instant("propertiesManagement.block"),click:s=>this.onBlockProperty(s)},{color:"success",type:"icon",icon:"lock_open",tooltip:this.translateService.instant("propertiesManagement.unblock"),click:s=>this.onUnBlockProperty(s)}]}],this.loading=!1,this.subscriptions=new p.w}ngOnInit(){this.fetchPropertiesList(),this.fetchPropertyTypes()}fetchPropertiesList(){this.loading=!0,this.subscriptions.add(this.propertiesManagementService.fetchPropertyList(1).subscribe(t=>{this.loading=!1},t=>{var n;this.commonService.handleErrorMessage(null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message)}))}fetchPropertyTypes(){this.subscriptions.add(this.propertiesManagementService.fetchPropertyTypes().subscribe(t=>{this.PropertyTypes=null==t?void 0:t.data},t=>{var n;this.commonService.handleErrorMessage(null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message)}))}onViewDetails(t){const o=this.dialog.open(w.E,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{propertyData:t}}).afterClosed().subscribe(a=>{"approve"===(null==a?void 0:a.action)?this.onAcceptProperty(t):"reject"===(null==a?void 0:a.action)&&this.onRejectProperty(t),o.unsubscribe()})}onAcceptProperty(t){}onRejectProperty(t){const o=this.dialog.open(x.H,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{propertyData:t}}).afterClosed().subscribe(a=>{o.unsubscribe()})}onBlockProperty(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("propertiesManagement.blockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.blockUnblockProperty(t,n):n.close(),o.unsubscribe()})}onUnBlockProperty(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("propertiesManagement.unblockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.blockUnblockProperty(t,n):n.close(),o.unsubscribe()})}blockUnblockProperty(t,n){}changeSort(t){}changeSelect(t){console.log(t)}onPageChanged(t){console.log(null==t?void 0:t.pageIndex)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.sK),e.Y36(g.uw),e.Y36(m.v),e.Y36(M.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-property-dashboard"]],decls:11,vars:23,consts:[[1,"row","justify-content-between","align-items-center","title-row","pb-4"],[1,"title","col-md-7"],[1,"col-md-5","filter-container"],["floatLabel","never",1,""],["bindLabel","property_type","bindValue","id",3,"placeholder","items"],[1,"row","table-row"],[3,"data","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","sortChange","page","selectionChange"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card"),e.TgZ(1,"div",0),e.TgZ(2,"h3",1),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"mat-form-field",3),e._UZ(7,"mtx-select",4),e.ALo(8,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",5),e.TgZ(10,"mtx-grid",6),e.NdJ("sortChange",function(a){return n.changeSort(a)})("page",function(a){return n.onPageChanged(a)})("selectionChange",function(a){return n.changeSelect(a)}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,18,"menu.propertiesApproval")),e.xp6(4),e.s9C("placeholder",e.lcZ(8,20,"propertiesManagement.propertyType")),e.Q6J("items",n.PropertyTypes),e.xp6(3),e.Q6J("data",n.propertiesData)("columns",n.columns)("loading",n.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!0)("showPaginator",!0)("pageSizeOptions",e.DdM(22,k))("pageIndex",0)("pageSize",10))},directives:[h.a8,D.KE,T.MS,u.CM],pipes:[c.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}mat-card[_ngcontent-%COMP%]{padding:20px 30px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:20px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:red;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b30000}"]}),i})();var A=r(7973),y=r(4957),P=r(6738);const O=function(){return[1,3,10,50,100]};let R=(()=>{class i{constructor(t,n,o,a){this.translateService=t,this.dialog=n,this.commonService=o,this.bookingManagementService=a,this.bookingStatus=[{id:1,name:"Pending"},{id:2,name:"Ongoing"},{id:3,name:"Finished"},{id:4,name:"canceled"}],this.bookingData=[],this.columns=[{header:this.translateService.instant("bookingManagement.propertyName"),field:"property_name"},{header:this.translateService.instant("bookingManagement.propertyType"),field:"property_type"},{header:this.translateService.instant("bookingManagement.noOfBedrooms"),field:"no_of_bedrooms"},{header:this.translateService.instant("bookingManagement.noOfBathrooms"),field:"no_of_bathrooms"},{header:this.translateService.instant("bookingManagement.bookedFrom"),field:"booked_from",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("bookingManagement.bookedTo"),field:"booked_to",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("bookingManagement.status"),field:"status",type:"boolean",typeParameter:{display:"boolean"},class:"status"},{header:this.translateService.instant("bookingManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"visibility",tooltip:this.translateService.instant("bookingManagement.viewDetails"),click:s=>this.onViewDetails(s)}]}],this.loading=!1,this.bookingDate=new v.NI,this.subscriptions=new p.w}ngOnInit(){this.fetchBookingList()}fetchBookingList(){this.bookingData=[{id:1,property_id:1,property_name:"Smart House 3 Star",property_type:"Apartment",area:2.2,no_of_beds:3,no_of_bathrooms:2,no_of_bedrooms:1,no_of_guests:2,latitude:20.134,longitude:10.24,location:"A-121, Sec-63 Noida, Utter Pradesh 201301",base_price:20,discount_percent:10,price_total:23,weekly_discount:0,monthly_discount:10,discount_total:12,cover_photo:"https://s3.me-south-1.amazonaws.com/roomz-files/property-files/08-Recognizing your email/08-Recognizing your email.png",booked_from:"2021-12-22T18:30:00.000Z",booked_to:"2021-12-24T18:30:00.000Z",no_of_nights:2,status:1,created_at:"2021-12-22T08:54:40.000+05:30",traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678"},{id:1,property_id:1,property_name:"Smart House 3 Star",property_type:"Apartment",area:2.2,no_of_beds:3,no_of_bathrooms:2,no_of_bedrooms:1,no_of_guests:2,latitude:20.134,longitude:10.24,location:"A-121, Sec-63 Noida, Utter Pradesh 201301",base_price:20,discount_percent:10,price_total:23,weekly_discount:0,monthly_discount:10,discount_total:12,cover_photo:"https://s3.me-south-1.amazonaws.com/roomz-files/property-files/08-Recognizing your email/08-Recognizing your email.png",booked_from:"2021-12-22T18:30:00.000Z",booked_to:"2021-12-24T18:30:00.000Z",no_of_nights:2,status:1,created_at:"2021-12-22T08:54:40.000+05:30",traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678"}]}onViewDetails(t){const o=this.dialog.open(y.j,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{bookingItemData:t}}).afterClosed().subscribe(a=>{o.unsubscribe()})}changeSort(t){}changeSelect(t){console.log(t)}onFilterByDate(t){console.log(P(t.value).format("YYYY-MM-DD"))}onPageChanged(t){console.log(null==t?void 0:t.pageIndex)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.sK),e.Y36(g.uw),e.Y36(m.v),e.Y36(A.q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-booking-dashboard"]],decls:7,vars:19,consts:[[1,"row","title-row","pb-4"],[1,"title"],[1,"row","table-row"],[3,"data","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","sortChange","page","selectionChange"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card"),e.TgZ(1,"div",0),e.TgZ(2,"h3",1),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"mtx-grid",3),e.NdJ("sortChange",function(a){return n.changeSort(a)})("page",function(a){return n.onPageChanged(a)})("selectionChange",function(a){return n.changeSelect(a)}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,16,"menu.bookingManagement")),e.xp6(3),e.Q6J("data",n.bookingData)("columns",n.columns)("loading",n.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!0)("showPaginator",!0)("pageSizeOptions",e.DdM(18,O))("pageIndex",0)("pageSize",5))},directives:[h.a8,u.CM],pipes:[c.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}mat-card[_ngcontent-%COMP%]{padding:20px 30px}"]}),i})();var U=r(322),S=r(6691),B=r(7423);const z=function(){return[5,10,50,100]};let I=(()=>{class i{constructor(t,n,o,a){this.translateService=t,this.dialog=n,this.commonService=o,this.couponsManagementService=a,this.couponStatus=[{id:1,name:"Active"},{id:2,name:"Not Active"}],this.couponsData=[],this.columns=[{header:this.translateService.instant("couponsManagement.id"),field:"id"},{header:this.translateService.instant("couponsManagement.code"),field:"code"},{header:this.translateService.instant("couponsManagement.discountType"),field:"type"},{header:this.translateService.instant("couponsManagement.amount"),field:"amount"},{header:this.translateService.instant("couponsManagement.percentage"),field:"percentage"},{header:this.translateService.instant("couponsManagement.startDate"),field:"startDate",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("couponsManagement.expiryDate"),field:"expiryDate",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("couponsManagement.status"),field:"status"},{header:this.translateService.instant("couponsManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"edit",tooltip:this.translateService.instant("couponsManagement.edit"),click:s=>this.onEditCoupon(s)},{color:"warn",type:"icon",icon:"lock",tooltip:this.translateService.instant("couponsManagement.deactivate"),iif:s=>"Active"===s.status,click:s=>this.onDeactivateCoupon(s)},{color:"success",type:"icon",icon:"lock_open",tooltip:this.translateService.instant("couponsManagement.activate"),iif:s=>"notActive"===s.status,click:s=>this.onActivateCoupon(s)},{color:"warn",type:"icon",icon:"delete",tooltip:this.translateService.instant("couponsManagement.delete"),click:s=>this.onDeleteCoupon(s)}]}],this.loading=!1,this.subscriptions=new p.w}ngOnInit(){this.fetchCouponsList()}fetchCouponsList(){this.couponsData=[{id:1,code:"EDD77",status:"Active",type:"amount",percentage:0,amount:5,description:"This is Test Coupon",startDate:"2021-12-22T08:54:40.000+05:30",expiryDate:"2021-12-22T08:54:40.000+05:30"},{id:1,code:"EDD77",status:"Active",type:"amount",percentage:0,amount:5,description:"This is Test Coupon",startDate:"2021-12-22T08:54:40.000+05:30",expiryDate:"2021-12-22T08:54:40.000+05:30"}]}onAddCoupon(){const n=this.dialog.open(S.C,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{couponData:{},mode:"ADD"}}).afterClosed().subscribe(o=>{n.unsubscribe()})}onEditCoupon(t){const o=this.dialog.open(S.C,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{couponData:t,mode:"EDIT"}}).afterClosed().subscribe(a=>{o.unsubscribe()})}onActivateCoupon(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("couponsManagement.activateConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.activateCoupon(t,n):n.close(),o.unsubscribe()})}activateCoupon(t,n){this.subscriptions.add(this.couponsManagementService.activateCoupon(null==t?void 0:t.id).subscribe(o=>{console.log(o),n.close(),this.commonService.handleSuccessMessage(this.translateService.instant("couponsManagement.activateSuccess"),this.translateService.instant("general.success"))},o=>{var a;this.commonService.handleErrorMessage(null===(a=null==o?void 0:o.error)||void 0===a?void 0:a.message)}))}onDeactivateCoupon(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("couponsManagement.deactivateConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.deactivateCoupon(t,n):n.close(),o.unsubscribe()})}deactivateCoupon(t,n){this.subscriptions.add(this.couponsManagementService.deactivateCoupon(null==t?void 0:t.id).subscribe(o=>{console.log(o),n.close(),this.commonService.handleSuccessMessage(this.translateService.instant("couponsManagement.deactivateSuccess"),this.translateService.instant("general.success"))},o=>{var a;this.commonService.handleErrorMessage(null===(a=null==o?void 0:o.error)||void 0===a?void 0:a.message)}))}onDeleteCoupon(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("couponsManagement.deleteConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.deleteCoupon(t,n):n.close(),o.unsubscribe()})}deleteCoupon(t,n){this.subscriptions.add(this.couponsManagementService.deleteCoupon(null==t?void 0:t.id).subscribe(o=>{console.log(o),n.close(),this.commonService.handleSuccessMessage(this.translateService.instant("couponsManagement.deleteSuccess"),this.translateService.instant("general.success"))},o=>{var a;this.commonService.handleErrorMessage(null===(a=null==o?void 0:o.error)||void 0===a?void 0:a.message)}))}onPageChanged(t){console.log(null==t?void 0:t.pageIndex)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.sK),e.Y36(g.uw),e.Y36(m.v),e.Y36(U.Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-coupons-dashboard"]],decls:12,vars:22,consts:[[1,"row","justify-content-between","align-items-center"],[1,"col-lg-8","col-md-8","col-sm-12","title-row"],[1,"title"],[1,"col-lg-4","col-md-4","col-sm-12","button-container"],["mat-raised-button","",1,"btn",3,"click"],[1,"row","table-row","mt-3"],[3,"data","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","page"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"h3",2),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onAddCoupon()}),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.qZA(),e.TgZ(10,"div",5),e.TgZ(11,"mtx-grid",6),e.NdJ("page",function(a){return n.onPageChanged(a)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Oqu(e.lcZ(5,17,"menu.couponsManagement")),e.xp6(4),e.Oqu(e.lcZ(9,19,"couponsManagement.addCoupon")),e.xp6(3),e.Q6J("data",n.couponsData)("columns",n.columns)("loading",n.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!0)("showPaginator",!0)("pageSizeOptions",e.DdM(21,z))("pageIndex",0)("pageSize",5))},directives:[h.a8,B.lW,u.CM],pipes:[c.X$],styles:['.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary);padding-inline-start:5px}.button-container[_ngcontent-%COMP%]{justify-content:end;text-align:end;padding-inline-end:5%}.button-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:var(--text-primary);color:var(--white-color)}mat-card[_ngcontent-%COMP%]{padding:20px}  tr.mat-header-row{background-color:#56aec3}  .mat-sort-header-disabled .mat-sort-header-container{font-family:"Ubuntu";font-style:normal;font-weight:500;font-size:12px;line-height:16px;letter-spacing:-.0743736px;text-transform:uppercase;color:#fff}']}),i})();var Y=r(8784);const J=function(){return[5,10,50,100]};let L=(()=>{class i{constructor(t,n,o,a){this.translateService=t,this.dialog=n,this.commonService=o,this.userManagementService=a,this.userStatus=[{id:1,name:"Active"},{id:2,name:"Not Active"}],this.usersData=[],this.columns=[{header:this.translateService.instant("userManagement.id"),field:"id"},{header:this.translateService.instant("userManagement.userName"),field:"user_name"},{header:this.translateService.instant("userManagement.email"),field:"email"},{header:this.translateService.instant("userManagement.userPhone"),field:"user_phone"},{header:this.translateService.instant("userManagement.permissionsCount"),field:"permissions_count"},{header:this.translateService.instant("userManagement.status"),field:"status"},{header:this.translateService.instant("userManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"warn",type:"icon",icon:"lock",tooltip:this.translateService.instant("userManagement.block"),iif:s=>"active"===s.status,click:s=>this.onBlockUser(s)},{color:"success",type:"icon",icon:"lock_open",tooltip:this.translateService.instant("userManagement.unblock"),iif:s=>"notActive"===s.status,click:s=>this.onUnblockUser(s)},{color:"warn",type:"icon",icon:"delete",tooltip:this.translateService.instant("userManagement.delete"),click:s=>this.onDeleteUser(s)}]}],this.loading=!1,this.subscriptions=new p.w}ngOnInit(){this.fetchUsersList()}fetchUsersList(){this.usersData=[{id:1,user_name:"Admin User",status:"active",email:"admin@email.com",user_phone:"010973458693",permissions_count:"3",password:"1222212122",permissions:[1,4,5,3]},{id:1,user_name:"Admin User",status:"active",email:"admin@email.com",user_phone:"010973458693",permissions_count:"3",password:"1222212122",permissions:[1,4,5,3]},{id:1,user_name:"Admin User",status:"active",email:"admin@email.com",user_phone:"010973458693",permissions_count:"3",password:"1222212122",permissions:[1,4,5,3]},{id:1,user_name:"Admin User",status:"active",email:"admin@email.com",user_phone:"010973458693",permissions_count:"3",password:"1222212122",permissions:[1,4,5,3]},{id:1,user_name:"Admin User",status:"active",email:"admin@email.com",user_phone:"010973458693",permissions_count:"3",password:"1222212122",permissions:[1,4,5,3]}]}onBlockUser(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("userManagement.blockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.blockUser(t,n):n.close(),o.unsubscribe()})}blockUser(t,n){}onUnblockUser(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("userManagement.unblockConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.unblockUser(t,n):n.close(),o.unsubscribe()})}unblockUser(t,n){}onDeleteUser(t){const n=this.dialog.open(d.S,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{popupHeading:this.translateService.instant("general.warning"),contentMsg:this.translateService.instant("userManagement.deleteConfirmation"),cancelBtnText:this.translateService.instant("general.cancel"),confirmBtnText:this.translateService.instant("general.confirm")}}),o=n.componentInstance.confirmationEmitter.subscribe(a=>{a?this.deleteUser(t,n):n.close(),o.unsubscribe()})}deleteUser(t,n){this.subscriptions.add(this.userManagementService.deleteUser(null==t?void 0:t.uid).subscribe(o=>{console.log(o),n.close(),this.commonService.handleSuccessMessage(this.translateService.instant("userManagement.deleteSuccess"),this.translateService.instant("general.success"))},o=>{var a;this.commonService.handleErrorMessage(null===(a=null==o?void 0:o.error)||void 0===a?void 0:a.message)}))}onPageChanged(t){console.log(null==t?void 0:t.pageIndex)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.sK),e.Y36(g.uw),e.Y36(m.v),e.Y36(Y.x))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-dashboard"]],decls:7,vars:19,consts:[[2,"height","480px"],[1,"title-row"],[1,"title"],[1,"row","table-row","mt-5"],[3,"data","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","page"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0),e.TgZ(1,"div",1),e.TgZ(2,"h3",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"mtx-grid",4),e.NdJ("page",function(a){return n.onPageChanged(a)}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,16,"menu.userManagement")),e.xp6(3),e.Q6J("data",n.usersData)("columns",n.columns)("loading",n.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!0)("showPaginator",!0)("pageSizeOptions",e.DdM(18,J))("pageIndex",0)("pageSize",5))},directives:[h.a8,u.CM],pipes:[c.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary);padding-inline-start:5px}mat-card[_ngcontent-%COMP%]{padding:20px 30px}"]}),i})();var F=r(5378),_=r(2115);const q=["chart"];let E=(()=>{class i{constructor(t,n){this.ratingsService=t,this.commonService=n,this.max=5,this.rate=4.08,this.isReadonly=!0,this.loading=!1,this.subscriptions=new p.w,this.chartOptions={series:[{name:"Rating",data:[10,41,35,51,49]}],chart:{height:350,type:"bar"},colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"],xaxis:{categories:["1","2","3","4","5"]}}}ngOnInit(){this.fetchRatingsData()}fetchRatingsData(){this.loading=!0,this.subscriptions.add(this.ratingsService.fetchRatingsData().subscribe(t=>{this.loading=!1},t=>{var n;this.loading=!1,this.commonService.handleErrorMessage(null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(F.w),e.Y36(m.v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-rating-dashboard"]],viewQuery:function(t,n){if(1&t&&e.Gf(q,5),2&t){let o;e.iGM(o=e.CRH())&&(n.chart=o.first)}},decls:8,vars:7,consts:[[2,"height","480px"],[1,"row","title-row","pb-5"],[1,"title"],[1,"chart-view"],["id","chart"],[3,"series","chart","xaxis","colors"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0),e.TgZ(1,"div",1),e.TgZ(2,"h3",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e._UZ(7,"apx-chart",5),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,5,"ratingsAndReviews.ratingsAndReviews")),e.xp6(4),e.Q6J("series",null==n.chartOptions?null:n.chartOptions.series)("chart",null==n.chartOptions?null:n.chartOptions.chart)("xaxis",null==n.chartOptions?null:n.chartOptions.xaxis)("colors",null==n.chartOptions?null:n.chartOptions.colors))},directives:[h.a8,_.x],pipes:[c.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}mat-card[_ngcontent-%COMP%]{padding:20px 30px}"]}),i})();var H=r(809);const j=function(){return[5,10,50,100]};let X=(()=>{class i{constructor(t,n,o,a){this.translateService=t,this.dialog=n,this.commonService=o,this.paymentAndTransactionsService=a,this.PaymentStatus=[{id:1,name:"Pending"},{id:2,name:"Verified"}],this.transactionsList=[{id:1,traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678",property_name:"Royal",booked_from:"2021-12-22T08:54:40.000+05:30",booked_to:"2021-12-22T08:54:40.000+05:30",country:"USA",city:"New York",address:"555 Lexington Avenue",date:"2021-12-22T08:54:40.000+05:30",transaction_type:"Apple Pay",status:"Verified",price_total:2400},{id:1,traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678",property_name:"Royal",booked_from:"2021-12-22T08:54:40.000+05:30",booked_to:"2021-12-22T08:54:40.000+05:30",country:"USA",city:"New York",address:"555 Lexington Avenue",date:"2021-12-22T08:54:40.000+05:30",transaction_type:"Apple Pay",status:"Verified",price_total:2400},{id:1,traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678",property_name:"Royal",booked_from:"2021-12-22T08:54:40.000+05:30",booked_to:"2021-12-22T08:54:40.000+05:30",country:"USA",city:"New York",address:"555 Lexington Avenue",date:"2021-12-22T08:54:40.000+05:30",transaction_type:"Apple Pay",status:"Verified",price_total:2400},{id:1,traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678",property_name:"Royal",booked_from:"2021-12-22T08:54:40.000+05:30",booked_to:"2021-12-22T08:54:40.000+05:30",country:"USA",city:"New York",address:"555 Lexington Avenue",date:"2021-12-22T08:54:40.000+05:30",transaction_type:"Apple Pay",status:"Verified",price_total:2400},{id:1,traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678",property_name:"Royal",booked_from:"2021-12-22T08:54:40.000+05:30",booked_to:"2021-12-22T08:54:40.000+05:30",country:"USA",city:"New York",address:"555 Lexington Avenue",date:"2021-12-22T08:54:40.000+05:30",transaction_type:"Apple Pay",status:"Verified",price_total:2400},{id:1,traveller_name:"John Doe",traveller_email:"John@doe.com",traveller_phone:"010-12345678",host_name:"Mark Doe",host_email:"mark@doe.com",host_phone:"010-12345678",property_name:"Royal",booked_from:"2021-12-22T08:54:40.000+05:30",booked_to:"2021-12-22T08:54:40.000+05:30",country:"USA",city:"New York",address:"555 Lexington Avenue",date:"2021-12-22T08:54:40.000+05:30",transaction_type:"Apple Pay",status:"Verified",price_total:2400}],this.columns=[{header:this.translateService.instant("paymentManagement.id"),field:"id"},{header:this.translateService.instant("paymentManagement.propertyName"),field:"property_name"},{header:this.translateService.instant("paymentManagement.travellerName"),field:"traveller_name"},{header:this.translateService.instant("paymentManagement.hostName"),field:"host_name"},{header:this.translateService.instant("paymentManagement.date"),field:"date",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("paymentManagement.status"),field:"status"},{header:this.translateService.instant("paymentManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"visibility",tooltip:this.translateService.instant("paymentManagement.viewDetails"),click:s=>this.onViewDetails(s)}]}],this.loading=!1,this.subscriptions=new p.w}ngOnInit(){}fetchTransactionsList(){this.loading=!0,this.subscriptions.add(this.paymentAndTransactionsService.fetchTransactionsList().subscribe(t=>{this.loading=!1},t=>{var n;this.loading=!1,this.commonService.handleErrorMessage(null===(n=null==t?void 0:t.error)||void 0===n?void 0:n.message)}))}onViewDetails(t){const o=this.dialog.open(y.j,{disableClose:!0,width:"600px",panelClass:["main-popup"],data:{transactionItemData:t}}).afterClosed().subscribe(a=>{o.unsubscribe()})}onPageChanged(t){console.log(null==t?void 0:t.pageIndex)}ngOnDestroy(){this.subscriptions.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.sK),e.Y36(g.uw),e.Y36(m.v),e.Y36(H.Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-payments-dashboard"]],decls:7,vars:19,consts:[[1,"row","title-row","pb-4"],[1,"title"],[1,"row","table-row"],[3,"data","columns","loading","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","page"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card"),e.TgZ(1,"div",0),e.TgZ(2,"h3",1),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"mtx-grid",3),e.NdJ("page",function(a){return n.onPageChanged(a)}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,16,"menu.paymentsAndTransactions")),e.xp6(3),e.Q6J("data",n.transactionsList)("columns",n.columns)("loading",n.loading)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!0)("showPaginator",!0)("pageSizeOptions",e.DdM(18,j))("pageIndex",0)("pageSize",5))},directives:[h.a8,u.CM],pipes:[c.X$],styles:[".title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}mat-card[_ngcontent-%COMP%]{padding:20px 30px}"]}),i})();const V=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-dashboard"]],decls:16,vars:0,consts:[[1,"container-fluid","pt-3","pb-4","dashboard-container"],[1,"row","justify-content-center","align-items-center"],[1,"col-lg-6","col-md-12"],[1,"col-lg-6","col-md-12","row","flex-column","justify-content-center"],[1,"col-md-12"],[1,"row","justify-content-center"]],template:function(t,n){1&t&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"app-property-dashboard"),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e._UZ(6,"app-booking-dashboard"),e.qZA(),e.TgZ(7,"div",4),e._UZ(8,"app-coupons-dashboard"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",5),e.TgZ(10,"div",2),e._UZ(11,"app-user-dashboard"),e.qZA(),e.TgZ(12,"div",2),e._UZ(13,"app-rating-dashboard"),e.qZA(),e.TgZ(14,"div",4),e._UZ(15,"app-payments-dashboard"),e.qZA(),e.qZA(),e.qZA())},directives:[Z,R,I,L,E,X],styles:[""]}),i})()}];let N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.Bz.forChild(V)],f.Bz]}),i})();var Q=r(4284);let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[],imports:[[C.ez,N,v.u5,v.UX,Q.m8,_.X]]}),i})()}}]);