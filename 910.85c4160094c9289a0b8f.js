"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[910],{6910:(Ot,f,o)=>{o.r(f),o.d(f,{BookingManagementModule:()=>Tt});var g=o(8583),r=o(3679),b=o(4284),s=o(3423),_=o(2340),t=o(7716),k=o(1841);let Z=(()=>{class e{constructor(n){this.http=n}fetchBookingList(n){return this.http.get(`${_.N.endPointUrl}admin/booking-list`,{params:n})}fetchBookingDetails(n){return this.http.get(`${_.N.endPointUrl}admin/booking-details/${n}`)}fetchVatDetails(){return this.http.get(`${_.N.endPointUrl}user/hosting/fixed_proportions`)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(k.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=o(690),v=o(5319),p=o(7460),D=o(9224);function A(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(3);t.xp6(2),t.Oqu(t.lcZ(3,2,"bookingManagement.HostEmail")),t.xp6(3),t.Oqu(n.bookingData.host.email)}}function M(e,i){if(1&e&&(t.TgZ(0,"div",6),t.TgZ(1,"h5",7),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",8),t.TgZ(5,"p",9),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",10),t._uU(9),t.qZA(),t.qZA(),t.YNc(10,A,6,4,"div",11),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,4,"bookingManagement.HostDetails")),t.xp6(4),t.Oqu(t.lcZ(7,6,"bookingManagement.HostName")),t.xp6(3),t.Oqu(n.bookingData.host.first_name+" "+n.bookingData.host.last_name),t.xp6(1),t.Q6J("ngIf",n.bookingData.host.email)}}function w(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(3);t.xp6(2),t.Oqu(t.lcZ(3,2,"bookingManagement.TravellerEmail")),t.xp6(3),t.Oqu(n.bookingData.traveller.email)}}function T(e,i){if(1&e&&(t.TgZ(0,"div",6),t.TgZ(1,"h5",7),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",8),t.TgZ(5,"p",9),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"p",10),t._uU(9),t.qZA(),t.qZA(),t.YNc(10,w,6,4,"div",11),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,4,"bookingManagement.TravellerDetails")),t.xp6(4),t.Oqu(t.lcZ(7,6,"bookingManagement.TravellerName")),t.xp6(3),t.hij(" ",n.bookingData.traveller.first_name+" "+n.bookingData.traveller.last_name," "),t.xp6(1),t.Q6J("ngIf",n.bookingData.traveller.email)}}function C(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.booked")," "))}function O(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.paymentPending")," "))}function q(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.checkedIn")," "))}function y(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.checkedOut")," "))}function P(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.successFull")," "))}function U(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.cancelled")," "))}function I(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.notBooked")," "))}function L(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.pending")," "))}function N(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.rejected")," "))}function Y(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.pendingReview")," "))}function S(e,i){1&e&&(t.TgZ(0,"p",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.finished")," "))}function V(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.YNc(4,C,3,3,"p",14),t.YNc(5,O,3,3,"p",14),t.YNc(6,q,3,3,"p",14),t.YNc(7,y,3,3,"p",14),t.YNc(8,P,3,3,"p",14),t.YNc(9,U,3,3,"p",14),t.YNc(10,I,3,3,"p",14),t.YNc(11,L,3,3,"p",14),t.YNc(12,N,3,3,"p",14),t.YNc(13,Y,3,3,"p",14),t.YNc(14,S,3,3,"p",14),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,12,"bookingManagement.status")),t.xp6(2),t.Q6J("ngIf",1===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",2===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",3===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",4===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",5===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",6===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",7===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",8===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",9===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",10===(null==n.bookingData?null:n.bookingData.status)),t.xp6(1),t.Q6J("ngIf",11===(null==n.bookingData?null:n.bookingData.status))}}function J(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.ALo(6,"date"),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"bookingManagement.checkedIn")),t.xp6(3),t.Oqu(t.xi3(6,4,n.bookingData.booked_from,"dd/MM/yyyy"))}}function Q(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.ALo(6,"date"),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"bookingManagement.checkedOut")),t.xp6(3),t.Oqu(t.xi3(6,4,n.bookingData.booked_to,"dd/MM/yyyy"))}}function B(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"bookingManagement.NumberOfNights")),t.xp6(3),t.Oqu(n.bookingData.no_of_nights)}}function j(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyName")),t.xp6(3),t.Oqu(n.bookingData.property_name)}}function z(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyID")),t.xp6(3),t.Oqu(n.bookingData.id)}}function F(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,3,"propertiesManagement.Area")),t.xp6(3),t.AsE(" ",n.bookingData.area," ",t.lcZ(6,5,"propertiesManagement.SquareM")," ")}}function R(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyType")),t.xp6(3),t.hij(" ",n.bookingData.property_type," ")}}function E(e,i){if(1&e&&(t.TgZ(0,"div",15),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.propertyDescription")),t.xp6(3),t.Oqu(n.bookingData.description)}}function H(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.noOfBedrooms")),t.xp6(3),t.Oqu(n.bookingData.no_of_bedrooms)}}function $(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.NumberBathrooms")),t.xp6(3),t.Oqu(n.bookingData.no_of_bathrooms)}}function X(e,i){if(1&e&&(t.TgZ(0,"li",18),t._uU(1),t.qZA()),2&e){const n=i.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function K(e,i){if(1&e&&(t.TgZ(0,"div",15),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"ul",16),t.YNc(5,X,2,1,"li",17),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"bookingManagement.AmenitiesHead")),t.xp6(3),t.Q6J("ngForOf",null==n.bookingData?null:n.bookingData.amenities)}}function G(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.country")),t.xp6(3),t.Oqu(n.bookingData.country)}}function W(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.city")),t.xp6(3),t.Oqu(n.bookingData.city)}}function tt(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.street")),t.xp6(3),t.Oqu(n.bookingData.street)}}function nt(e,i){if(1&e&&(t.TgZ(0,"div",8),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.zip_code")),t.xp6(3),t.Oqu(n.bookingData.zip_code)}}function et(e,i){if(1&e&&(t.TgZ(0,"div",15),t.TgZ(1,"p",9),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"p",10),t._uU(5),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,2,"propertiesManagement.location")),t.xp6(3),t.Oqu(n.bookingData.location)}}function it(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.HOy(" ",null==n.priceDetails||null==n.priceDetails.normal_days?null:n.priceDetails.normal_days.base_price," ",t.lcZ(2,4,"bookingManagement.SAR")," x ",null==n.priceDetails||null==n.priceDetails.normal_days?null:n.priceDetails.normal_days.no_normal_days," ",t.lcZ(3,6,"bookingManagement.Night")," ")}}function at(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.HOy(" ",null==n.priceDetails||null==n.priceDetails.weekend_days?null:n.priceDetails.weekend_days.weekend_offer," ",t.lcZ(2,4,"bookingManagement.SAR")," x ",null==n.priceDetails||null==n.priceDetails.weekend_days?null:n.priceDetails.weekend_days.no_weekend_days," ",t.lcZ(3,6,"bookingManagement.Night")," ")}}function ot(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",t.lcZ(2,2,"bookingManagement.ServiceFees")," ",n.serviceFees," % ")}}function lt(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",t.lcZ(2,2,"bookingManagement.Vat")," ",n.vat," % ")}}function ct(e,i){1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"bookingManagement.Insurance")," "))}function rt(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",null==n.priceDetails||null==n.priceDetails.normal_days?null:n.priceDetails.normal_days.normal_days_price," ",t.lcZ(2,2,"bookingManagement.SAR")," ")}}function st(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",null==n.priceDetails||null==n.priceDetails.weekend_days?null:n.priceDetails.weekend_days.weekend_days_price," ",t.lcZ(2,2,"bookingManagement.SAR")," ")}}function gt(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",null==n.priceDetails?null:n.priceDetails.total_service_fee," ",t.lcZ(2,2,"bookingManagement.SAR")," ")}}function pt(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",null==n.priceDetails?null:n.priceDetails.total_vat," ",t.lcZ(2,2,"bookingManagement.SAR")," ")}}function dt(e,i){if(1&e&&(t.TgZ(0,"li",27),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=t.oxw(3);t.xp6(1),t.AsE(" ",null==n.priceDetails?null:n.priceDetails.insurance_price," ",t.lcZ(2,2,"bookingManagement.SAR")," ")}}function _t(e,i){if(1&e&&(t.TgZ(0,"div",19),t.TgZ(1,"div",20),t.TgZ(2,"ul",21),t.YNc(3,it,4,8,"li",22),t.YNc(4,at,4,8,"li",22),t.YNc(5,ot,3,4,"li",22),t.YNc(6,lt,3,4,"li",22),t.YNc(7,ct,3,3,"li",22),t.qZA(),t.TgZ(8,"ul",23),t.YNc(9,rt,3,4,"li",22),t.YNc(10,st,3,4,"li",22),t.YNc(11,gt,3,4,"li",22),t.YNc(12,pt,3,4,"li",22),t.YNc(13,dt,3,4,"li",22),t.qZA(),t.qZA(),t._UZ(14,"hr"),t.TgZ(15,"div",24),t.TgZ(16,"h3",25),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"h3",26),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("ngIf",(null==n.priceDetails||null==n.priceDetails.normal_days?null:n.priceDetails.normal_days.no_normal_days)>0),t.xp6(1),t.Q6J("ngIf",(null==n.priceDetails||null==n.priceDetails.weekend_days?null:n.priceDetails.weekend_days.no_weekend_days)>0),t.xp6(1),t.Q6J("ngIf",n.serviceFees&&(null==n.priceDetails?null:n.priceDetails.total_service_fee)>0),t.xp6(1),t.Q6J("ngIf",n.vat&&(null==n.priceDetails?null:n.priceDetails.total_vat)>0),t.xp6(1),t.Q6J("ngIf",null==n.priceDetails?null:n.priceDetails.insurance_price),t.xp6(2),t.Q6J("ngIf",(null==n.priceDetails||null==n.priceDetails.normal_days?null:n.priceDetails.normal_days.no_normal_days)>0),t.xp6(1),t.Q6J("ngIf",(null==n.priceDetails||null==n.priceDetails.weekend_days?null:n.priceDetails.weekend_days.no_weekend_days)>0),t.xp6(1),t.Q6J("ngIf",n.serviceFees&&(null==n.priceDetails?null:n.priceDetails.total_service_fee)>0),t.xp6(1),t.Q6J("ngIf",n.vat&&(null==n.priceDetails?null:n.priceDetails.total_vat)>0),t.xp6(1),t.Q6J("ngIf",null==n.priceDetails?null:n.priceDetails.insurance_price),t.xp6(4),t.Oqu(t.lcZ(18,13,"bookingManagement.TotalPrice")),t.xp6(3),t.AsE("",null==n.priceDetails?null:n.priceDetails.total_price," ",t.lcZ(21,15,"bookingManagement.SAR")," ")}}function mt(e,i){if(1&e&&(t.TgZ(0,"mat-card"),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h3",4),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.qZA(),t.qZA(),t.YNc(7,M,11,8,"div",5),t.YNc(8,T,11,8,"div",5),t.TgZ(9,"div",6),t.TgZ(10,"h5",7),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"div",8),t.TgZ(14,"p",9),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"p",10),t._uU(18),t.qZA(),t.qZA(),t.YNc(19,V,15,14,"div",11),t.YNc(20,J,7,7,"div",11),t.YNc(21,Q,7,7,"div",11),t.YNc(22,B,6,4,"div",11),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"h5",7),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.YNc(27,j,6,4,"div",11),t.YNc(28,z,6,4,"div",11),t.YNc(29,F,7,7,"div",11),t.YNc(30,R,6,4,"div",11),t.YNc(31,E,6,4,"div",12),t.YNc(32,H,6,4,"div",11),t.YNc(33,$,6,4,"div",11),t.YNc(34,K,6,4,"div",12),t.YNc(35,G,6,4,"div",11),t.YNc(36,W,6,4,"div",11),t.YNc(37,tt,6,4,"div",11),t.YNc(38,nt,6,4,"div",11),t.YNc(39,et,6,4,"div",12),t.qZA(),t.TgZ(40,"div",6),t.TgZ(41,"h5",7),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.YNc(44,_t,22,17,"div",13),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(5),t.Oqu(t.lcZ(6,26,"bookingManagement.BookingDetails")),t.xp6(2),t.Q6J("ngIf",n.bookingData.host),t.xp6(1),t.Q6J("ngIf",n.bookingData.traveller),t.xp6(3),t.Oqu(t.lcZ(12,28,"bookingManagement.BookingDetails")),t.xp6(4),t.Oqu(t.lcZ(16,30,"bookingManagement.id")),t.xp6(3),t.Oqu(n.bookingData.id),t.xp6(1),t.Q6J("ngIf",n.bookingData.status),t.xp6(1),t.Q6J("ngIf",n.bookingData.booked_from),t.xp6(1),t.Q6J("ngIf",n.bookingData.booked_to),t.xp6(1),t.Q6J("ngIf",n.bookingData.no_of_nights),t.xp6(3),t.Oqu(t.lcZ(26,32,"propertiesManagement.PropertyDetails")),t.xp6(2),t.Q6J("ngIf",n.bookingData.property_name),t.xp6(1),t.Q6J("ngIf",n.bookingData.id),t.xp6(1),t.Q6J("ngIf",n.bookingData.area),t.xp6(1),t.Q6J("ngIf",n.bookingData.property_type),t.xp6(1),t.Q6J("ngIf",n.bookingData.description),t.xp6(1),t.Q6J("ngIf",n.bookingData.no_of_bedrooms),t.xp6(1),t.Q6J("ngIf",n.bookingData.no_of_bathrooms),t.xp6(1),t.Q6J("ngIf",null==n.bookingData||null==n.bookingData.amenities?null:n.bookingData.amenities.length),t.xp6(1),t.Q6J("ngIf",n.bookingData.country),t.xp6(1),t.Q6J("ngIf",n.bookingData.city),t.xp6(1),t.Q6J("ngIf",n.bookingData.street),t.xp6(1),t.Q6J("ngIf",n.bookingData.zip_code),t.xp6(1),t.Q6J("ngIf",n.bookingData.location),t.xp6(3),t.Oqu(t.lcZ(43,34,"bookingManagement.PriceDetails")),t.xp6(2),t.Q6J("ngIf",n.priceDetails)}}let ut=(()=>{class e{constructor(n,a,l,c,u,x){this.router=n,this.route=a,this.translateService=l,this.commonService=c,this.injector=u,this.bookingManagementService=x,this.subscriptions=new v.w,this.config={autoplay:!0,slidesPerView:1,loop:!0,spaceBetween:30}}ngOnInit(){this.fetchVatDetails(),this.getBookingId()}fetchtBookingDataById(){this.subscriptions.add(this.bookingManagementService.fetchBookingDetails(this.bookingId).subscribe(n=>{var a;this.bookingData=null===(a=null==n?void 0:n.data)||void 0===a?void 0:a.booking,this.priceDetails=null==n?void 0:n.data.priceDetails,console.log(this.priceDetails)}))}fetchVatDetails(){this.subscriptions.add(this.bookingManagementService.fetchVatDetails().subscribe(n=>{var a,l;(null==n?void 0:n.successful)&&(this.serviceFees=null===(a=null==n?void 0:n.data)||void 0===a?void 0:a.service_fee,this.vat=null===(l=null==n?void 0:n.data)||void 0===l?void 0:l.vat,console.log(this.serviceFees,this.vat))}))}getBookingId(){this.sub=this.route.params.subscribe(n=>{this.bookingId=n.id,this.fetchtBookingDataById()})}handleTimePreview(n){return n/12==0?this.translateService.instant("12 AM"):n/12==1?this.translateService.instant("12 PM"):n/12==2?this.translateService.instant("12 AM (Next Day)"):n/12<1?n+this.translateService.instant(" AM"):n/12<2?n-12+this.translateService.instant(" PM"):n/12<3?n-24+this.translateService.instant(" AM (Next Day)"):""}ngOnDestroy(){this.sub.unsubscribe(),this.subscriptions.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.F0),t.Y36(s.gz),t.Y36(p.sK),t.Y36(h.v),t.Y36(t.zs3),t.Y36(Z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-view-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"container-fluid","pt-3","pb-4"],[1,"d-flex","justify-content-between","align-items-center","pb-4"],[1,"row","title-row"],[1,"title"],["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"wrapper-head"],[1,"info-section"],[1,"head"],[1,"data"],["class","info-section",4,"ngIf"],["class","info-section long",4,"ngIf"],["class","price-detail",4,"ngIf"],["class","data",4,"ngIf"],[1,"info-section","long"],[1,"d-flex","justify-content-start","align-items-center","flex-wrap"],["class","data w-25 mb-2",4,"ngFor","ngForOf"],[1,"data","w-25","mb-2"],[1,"price-detail"],[1,"d-flex","justify-content-between","align-items-center"],[1,"list-price","first-list","list-unstyled"],["class","item",4,"ngIf"],[1,"list-price","second-list","list-unstyled"],[1,"total","d-flex","justify-content-between","align-items-center"],[1,"my-0"],[1,"last","my-0"],[1,"item"]],template:function(n,a){1&n&&t.YNc(0,mt,45,36,"mat-card",0),2&n&&t.Q6J("ngIf",a.bookingData)},directives:[g.O5,D.a8,g.sg],pipes:[p.X$,g.uU],styles:[".title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}.status[_ngcontent-%COMP%]{color:var(--main-txt-color);padding:8px 13px;border:1px solid var(--grey-color);width:-moz-fit-content;width:fit-content;border-radius:10px}.content-wrapper[_ngcontent-%COMP%]   .images-slider-wrapper[_ngcontent-%COMP%]{margin-bottom:2em}.content-wrapper[_ngcontent-%COMP%]   .images-slider-wrapper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:20em}.content-wrapper[_ngcontent-%COMP%]   .images-slider-wrapper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;border-radius:5px}.wrapper[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:500;line-height:22px;margin-block-end:15px;text-align:start;color:var(--bs-dark)}.wrapper[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   h3.last[_ngcontent-%COMP%]{text-align:end;font-weight:600}.wrapper[_ngcontent-%COMP%]   .price-detail[_ngcontent-%COMP%]   .list-price[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{font-size:16px;font-weight:500;line-height:22px;margin-block-end:15px;text-align:start;color:var(--bs-dark)}.wrapper[_ngcontent-%COMP%]   .price-detail[_ngcontent-%COMP%]   .list-price.first-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{text-decoration:underline}.wrapper[_ngcontent-%COMP%]   .price-detail[_ngcontent-%COMP%]   .list-price.second-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{text-align:end;font-weight:600}.wrapper[_ngcontent-%COMP%]   .price-detail[_ngcontent-%COMP%]   .list-price.second-list[_ngcontent-%COMP%]   .item.discount[_ngcontent-%COMP%]{color:#3ba400}.wrapper[_ngcontent-%COMP%]   .wrapper-head[_ngcontent-%COMP%]{margin-bottom:1em;text-align:start;color:var(--text-primary);font-weight:600;font-size:18px}.wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]{display:inline-block;text-align:start;margin-bottom:1.5em;vertical-align:top;width:50%}@media (max-width: 576px){.wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]{width:100%;display:block}}.wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{line-height:20px;margin-bottom:.5em;color:var(--main-txt-color);font-size:16px}.wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding-inline-start:15px;color:red}.wrapper[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{opacity:.8;font-size:16px;margin-bottom:0}.wrapper[_ngcontent-%COMP%]   .long[_ngcontent-%COMP%]{width:100%!important;display:block!important}.avatar[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;border:1px solid #ddd}.confirmation-btns[_ngcontent-%COMP%]   .reject-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;margin-right:1rem;margin-left:1rem}.confirmation-btns[_ngcontent-%COMP%]   .approve-btn[_ngcontent-%COMP%]{padding:6px 18px;line-height:1.7em;background-color:var(--text-primary);color:var(--white-color);margin-right:1rem;margin-left:1rem}"]}),e})();var xt=o(6738),ft=o(5435),Zt=o(4395),ht=o(8966),vt=o(5245),d=o(7322),m=o(386),bt=o(8833),kt=o(1576);const Dt=function(){return[5,10,50,100]},At=[{path:"",component:(()=>{class e{constructor(n,a,l,c,u,x){this.translateService=n,this.dialog=a,this.commonService=l,this.bookingManagementService=c,this.router=u,this.cdr=x,this.bookingCriteria={page:0,pageSize:10,date:"",status:1,search:""},this.bookingData=[],this.columns=[{header:this.translateService.instant("bookingManagement.id"),field:"id"},{header:this.translateService.instant("bookingManagement.propertyName"),field:"property_name"},{header:this.translateService.instant("bookingManagement.propertyType"),field:"property_type"},{header:this.translateService.instant("bookingManagement.noOfNights"),field:"no_of_nights"},{header:this.translateService.instant("bookingManagement.bookedFrom"),field:"booked_from",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("bookingManagement.bookedTo"),field:"booked_to",type:"date",typeParameter:{format:"yyyy-MM-dd"}},{header:this.translateService.instant("bookingManagement.actions"),field:"operation",width:"300px",minWidth:300,type:"button",buttons:[{color:"info",type:"icon",icon:"visibility",tooltip:this.translateService.instant("bookingManagement.viewDetails"),click:Ct=>this.onViewDetails(Ct)}]}],this.loading=!1,this.bookingDate=new r.NI,this.totalItemsCount=0,this.bookingSearchQuery=new r.NI,this.subscriptions=new v.w}ngOnInit(){this.fetchBookingList(),this.initBookingSearch()}fetchBookingList(){this.loading=!0,this.subscriptions.add(this.bookingManagementService.fetchBookingList(Object.assign(Object.assign({},this.bookingCriteria),{page:this.bookingCriteria.page+1})).subscribe(n=>{var a,l,c;(null==n?void 0:n.successful)&&(this.bookingData=null===(a=null==n?void 0:n.bookings)||void 0===a?void 0:a.data,this.totalItemsCount=null===(c=null===(l=null==n?void 0:n.bookings)||void 0===l?void 0:l.meta)||void 0===c?void 0:c.total),this.loading=!1,this.cdr.detectChanges()},n=>{var a;this.loading=!1,this.cdr.detectChanges(),this.commonService.handleErrorMessage(null===(a=null==n?void 0:n.error)||void 0===a?void 0:a.message)}))}initBookingSearch(){this.subscriptions.add(this.bookingSearchQuery.valueChanges.pipe((0,ft.h)(n=>{var a;return(null===(a=null==n?void 0:n.trim())||void 0===a?void 0:a.length)>3||""===(null==n?void 0:n.trim())}),(0,Zt.b)(700)).subscribe(n=>{this.bookingCriteria.search=n,this.bookingCriteria.page=0,this.fetchBookingList()}))}onViewDetails(n){this.router.navigate(["/booking-management/booking-details",n.id])}onFilterByDate(n){n?(this.bookingCriteria.date=xt(n.value).format("DD-MM-YYYY"),this.fetchBookingList()):(this.bookingCriteria.date="",this.fetchBookingList())}onFilterByStatus(n){n?(this.bookingCriteria.status=n,this.fetchBookingList()):(this.bookingCriteria.status="",this.fetchBookingList())}onPageChanged(n){this.bookingCriteria.page=null==n?void 0:n.pageIndex,this.bookingCriteria.pageSize=n.pageSize,this.fetchBookingList()}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.sK),t.Y36(ht.uw),t.Y36(h.v),t.Y36(Z),t.Y36(s.F0),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-booking-management"]],decls:23,vars:29,consts:[[1,"container-fluid","pt-3","pb-4"],[1,"row","title-row","pb-4"],[1,"title"],[1,"row","filter-row","pb-3"],[1,"col-lg-6","col-md-6","col-sm-12","search-container"],[1,"search-wrapper"],["matPrefix",""],["type","text",3,"formControl","placeholder"],[1,"col-lg-6","col-md-6","col-sm-12","filter-container"],["floatLabel","never"],["matSuffix","",3,"for"],["type","date"],["datePicker",""],["matInput","",3,"mtxDatetimepicker","dateChange"],[1,"row","table-row"],[3,"data","columns","loading","length","columnResizable","rowSelectable","hideRowSelectionCheckbox","rowHover","rowStriped","columnMovable","expandable","pageOnFront","showPaginator","pageSizeOptions","pageIndex","pageSize","page"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h3",2),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"mat-icon",6),t._uU(9,"search"),t.qZA(),t._UZ(10,"input",7),t.ALo(11,"translate"),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"mat-form-field",9),t.TgZ(14,"mat-placeholder"),t._uU(15),t.ALo(16,"translate"),t.qZA(),t._UZ(17,"mtx-datetimepicker-toggle",10),t._UZ(18,"mtx-datetimepicker",11,12),t.TgZ(20,"input",13),t.NdJ("dateChange",function(c){return a.onFilterByDate(c)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",14),t.TgZ(22,"mtx-grid",15),t.NdJ("page",function(c){return a.onPageChanged(c)}),t.qZA(),t.qZA(),t.qZA()),2&n){const l=t.MAs(19);t.xp6(3),t.Oqu(t.lcZ(4,22,"menu.bookingManagement")),t.xp6(7),t.s9C("placeholder",t.lcZ(11,24,"bookingManagement.search")),t.Q6J("formControl",a.bookingSearchQuery),t.xp6(5),t.Oqu(t.lcZ(16,26,"bookingManagement.date")),t.xp6(2),t.Q6J("for",l),t.xp6(3),t.Q6J("mtxDatetimepicker",l),t.xp6(2),t.Q6J("data",a.bookingData)("columns",a.columns)("loading",a.loading)("length",a.totalItemsCount)("columnResizable",!1)("rowSelectable",!1)("hideRowSelectionCheckbox",!0)("rowHover",!0)("rowStriped",!0)("columnMovable",!1)("expandable",!1)("pageOnFront",!1)("showPaginator",!0)("pageSizeOptions",t.DdM(28,Dt))("pageIndex",a.bookingCriteria.page)("pageSize",a.bookingCriteria.pageSize)}},directives:[vt.Hw,d.qo,r.Fj,r.JJ,r.oH,d.KE,d.UY,m.C7,d.R9,m.VQ,bt.Nt,m.WA,kt.CM],pipes:[p.X$],styles:[".container-fluid[_ngcontent-%COMP%]{background-color:#f4f4f4}.title-row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-inline-start:6px solid var(--text-primary);color:var(--text-primary)}.search-container[_ngcontent-%COMP%]{align-self:center}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:10px 20px;border-radius:30px;border:1px solid #CDCDCD;width:70%;overflow:hidden}@media (max-width: 1024px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:90%}}@media (max-width: 576px){.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:100%;padding:8px 10px}}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:14px;box-shadow:none;width:90%}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}.search-container[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.filter-container[_ngcontent-%COMP%]{text-align:end}@media (max-width: 768px){.filter-container[_ngcontent-%COMP%]{margin-top:1em}}.filter-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:50%;display:inline-block;padding-right:1em;padding-left:1em}  .mat-button.mat-success,   .mat-icon-button.mat-success,   .mat-stroked-button.mat-success{color:green}  .mat-button.mat-info,   .mat-icon-button.mat-info,   .mat-stroked-button.mat-info{color:#56aec3}  .mtx-grid .mat-table:not(.mat-column-resize-table) .mat-header-cell:not(.mtx-grid-checkbox-cell){min-width:130px!important;width:130px!important}"]}),e})()},{path:"booking-details/:id",component:ut}];let Mt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(At)],s.Bz]}),e})();var wt=o(5693);let Tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[g.ez,Mt,r.u5,r.UX,b.m8,wt.X]]}),e})()}}]);