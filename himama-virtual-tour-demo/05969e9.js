(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6],{225:function(e,n,t){e.exports=t.p+"img/dashboard-home.3260b4a.png"},226:function(e,n,t){var content=t(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("6e13b3a1",content,!0,{sourceMap:!1})},227:function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},229:function(e,n,t){"use strict";t(236),t(26),t(82),t(33),t(275);var r=t(279),c=t(228);n.a={components:{BaseInteractable:r.default,LeftNavigation:c.default},props:{stepCompletion:{type:Object,required:!0},currentStep:{type:Number,required:!0},sectionName:{type:String,required:!0},preloadImageList:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{preloaded:[]}},mounted:function(){var e=this;(this.preloadImageList[this.sectionName]||[]).forEach((function(path){return e._preloadImage(path)}))},computed:{pageTitle:function(){return"".concat(this.pageTitleBase," - Step ").concat(this.currentStep)},pagePath:function(){return"".concat(this.pagePathBase,"-step-").concat(this.currentStep)},completedCount:function(){return Object.values(this.stepCompletion[this.sectionName]||{}).filter((function(e){return e})).length}},watch:{currentStep:function(e,n){this.$emit("analytics",this.pagePath,this.pageTitle)}},methods:{_preloadImage:function(path){var i=new Image;i.src=t(276)("./".concat(path)),this.preloaded.push(i)}}}},230:function(e,n,t){e.exports=t.p+"img/tour-guide-large.931fcad.png"},231:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAANtJREFUGBljZICCr4/5PFmY2dKYmBjVQUL/GBhu/Pj9cza/7KftMDUM3x/wV/99Lf7h/1up/8gYJPb9CX8lSCEjyCQODs7lTEzM/HCdSIx///5+/Pr1mxcT0Lp0XIpA6kFy7BzspSxAN6l9//GP4dSZT0jmIJhmJnwMLEwMUkwIIfwsln///t/i5GDStLcRwKny10+G50w//v6a+e/vX+z2ArUCPfPp57efXUygcPr160cHNsUgRX9+/2jnU/l8jBFm35dnfB6sDGwZjIwMkiCx//8ZnoNMAikC8QE1KWYK4jjedgAAAABJRU5ErkJggg=="},232:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAApVJREFUSA29l79v00AUx+/cqnJxJYYqKayIf6EFJv4FpgzAkg6lSZ2gJqJ0AcSAAEV1Ue0E2qGREDBkYuRPIEr/hE4wELlsNDSqRI7vMzHxjzM4rZ1b7u7de+/znvN8fuEs5mjs7FxnnN8WjN3AnOGMZcgU+yMuxDcsOwPO3+u63o7jEvbRo9lsqj+Pj5c551VoXYnWHJ0gkEOFMUPVtGY+n++PTvwrKfhtrab9UNUCMqtC4ZLfJN4OAXRhW5vVtIYsAAQXHoA+QJa1s0LJ49B266TX2wgTnPORuNVqTR3Z9h6MlkfS86+Q/X4mm13J5XK/XG++jL/b9rOkoQQin+TbhQ5lf7Z109zE433uPZStC2trMjF7Xa9L5QHhelHXX5HMyZiqF4V0P6CU/FaIDcMwZv+CUQCrw2JIHub1yPlldWbmngMWQoDJKt7zVNdCrBNzamF+nm6k2ODFpSVpXAedjlQeEnJ+8aDd/qQwRbkVOkxbAOY0E4IyDqGiqjekOBRE6UurHUwF0DNdiVEBxJKDSa/T5MFg+m6uWNEmpETgbkK+xnHTVVBckweDOY3i+oxQbwbDlVYjlMaq3qBTdw+mwgaDj+5+YjOYSqFUauNxf5kYlLGvxFTwKRR43NsTBBvEdF6n/unpLrKmTjHVQX0YerA3BHHAlUrlBFk/TpUK57iYH7mNn++SbljWC5w/TCmAl+g+Nl3fPjAJAd/FtOIqJDILYRZLpbLXl/OovQJERR3CE6/sPGt89J8GoeQvlLELaZjmXfzuW9hnXdmYs42CrQL6TmYXCSZlagL7vV5+gNYIildlDoIyVO4hgNsX5ub23UIK6tD+n2CvgWVZ1xQh7kC2KNC0wTD0pw3AD8Vyma7g/47fBzTLDvqoINMAAAAASUVORK5CYII="},233:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAdxJREFUOBGdU01OQkEMboeX8PCHHwMbN0KMJrjw5wRyA96SnXgBlRN4BAQPIN7AnUdwY6K4kJiYqDFEY4xKEMQIU6dDZnyapyFOwmv7tf3otFOEH6d8chUXopdHIo8AcogYJ6IXBDwlxAMpw/ullczLjzRAP7B7duFJKcuIkPbjfl2TCixtLGZrftwSVc8aRSDY8zv/1AlqG8vZdRMjWOFKgkjCIQGpiAtjjmPivyRCsVo/3zKA4J7wdQzgl7PRSSjMpWEpmfDDVieC7fJJI82ACIV63l89sVkBCg9CCNJVCdU8LyBmdIgwz8EOEubM7Lgns7GoJZkej2g9GQnDwlTc4rftDrQ/PrRtboPVekM9l+FJuWEozGeM+as8vGnCZatt/QPpJhw1rZaqKMZopz+A44dHG5B0XUhHJ+Cu04Wm+pnz1Hs3qpb8QB1FcqqsVUa6/T4c3X8RLSRimqjZefuG62zzIbphVb0jOjDYfyQh6HwxkJGavt5/WFSOlLjDqUIvoICtIJ7b1y5wYy+eW0Fu9f9UKa1kr9lpd61Sb9SUsRaYEQCqUe9vLmWLxqV3jY0hSKVRrsmV+Ek431bEBh/eHX72SOAB4swQVV81HW4s98Rcx/pGUXipR4n7BIrQrEu67ImLAAAAAElFTkSuQmCC"},234:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAaNJREFUWAmt1zFKBEEQBdBFDAzE1HDvoYGRKJh6jEVD0wlNxDt4AUMPIHgGzTY1VlAQ0f8H/jLMzHZVd9VAWct0V/Wjp3dwF4vptY9bT4ij6VDozgrV954OBDwj/hAfiCwIAezJKEKGABVkQIYA9b0FZnLt4Y52QBOVI5A5gPp2QwUBPAManMstkBJAa2wgjwZABYQcIzzXFSapzsrXbHiK+HYWeXbEswOCrbHuEtFfWZBmQBYkDIhC0gCtkDsU6hlbeY25mzOgBbflmjNiLazx1xqAYJkQAg7VuDZnQEIAgSOQFEAEkgoQ5AEfdMis/Iu5FyrMyh0aWQuPxz2veLevBSBQCiQCSIFkAEKQGgAPoRYr5apHUwPg15DfAi5QAmjMBakF6FXM/8pTIK0ArN9fYUiHNtoyK5fehM2QLEC/HfhTDdlRpSO/Yc4J4t2Y+4LxM8SnMY/Du4gDzevwofQYSo9APcbZ2pEvFJyPi/jTbA7SAlDvbZBZgIr4Y3UIiQDUcwz5wcBkBzRZWZAMgHoKQsClblr5BhP0IrLmescJmQX8AxuCFLo4P00lAAAAAElFTkSuQmCC"},235:function(e,n,t){e.exports=t.p+"img/completed.80a93e7.png"},237:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAAAAXNSR0IArs4c6QAAAJdJREFUOBFjYKAuMAAadx+KFahpNMjg90D8H4odgDRVALrBF6hiKtAQbAYLUMPwUYPhoUhSUCgAteUDMTGRQJLBIOd8AGJQ2jwPxPgsINlgoHkMF4AYlvBxWUCWwSDDQa7FZwHZBoMMBwFcFlBsMMR47BYglxUg34EcQTZA9wEsLig2GOYidAuoZjCyBRuAnAVADLKMLAAA/DhSM9O5adUAAAAASUVORK5CYII="},238:function(e,n,t){e.exports=t.p+"img/tour-guide.eb6e619.png"},239:function(e,n,t){"use strict";t(226)},240:function(e,n,t){var r=t(58)(!1);r.push([e.i,".interactable-after[data-v-7a2df882],.interactable-before[data-v-7a2df882]{cursor:pointer!important;width:100%;height:100%}",""]),e.exports=r},241:function(e,n,t){e.exports=t.p+"img/screen2.c4d754b.png"},242:function(e,n,t){e.exports=t.p+"img/screen3.254536e.png"},243:function(e,n,t){e.exports=t.p+"img/screen4.29ee1d8.png"},244:function(e,n,t){e.exports=t.p+"img/screen5.8db1e2f.png"},245:function(e,n,t){e.exports=t.p+"img/screen6.3e6c37c.png"},246:function(e,n,t){e.exports=t.p+"img/screen7.9d5477d.png"},247:function(e,n,t){e.exports=t.p+"img/screen2.25cbdb9.png"},248:function(e,n,t){e.exports=t.p+"img/bluedot.f35c2ca.png"},249:function(e,n,t){e.exports=t.p+"img/screen2.424b02a.png"},250:function(e,n,t){e.exports=t.p+"img/screen3.a259eca.png"},251:function(e,n,t){e.exports=t.p+"img/dashboard-home-lightbox.228ab3e.png"},252:function(e,n,t){e.exports=t.p+"img/screen2.581ebe9.png"},253:function(e,n,t){e.exports=t.p+"img/screen3.28fc73a.png"},254:function(e,n,t){e.exports=t.p+"img/screen4.9589dc4.png"},255:function(e,n,t){e.exports=t.p+"img/screen5.31d4a04.png"},256:function(e,n,t){e.exports=t.p+"img/screen6.2889c00.png"},257:function(e,n,t){e.exports=t.p+"img/screen7.0caabfc.png"},258:function(e,n,t){e.exports=t.p+"img/screen8.a406232.png"},259:function(e,n,t){e.exports=t.p+"img/screen1.3c424f7.png"},260:function(e,n,t){e.exports=t.p+"img/screen2.4d24506.png"},261:function(e,n,t){e.exports=t.p+"img/screen2.4fddb61.png"},262:function(e,n,t){e.exports=t.p+"img/screen3.3f11f35.png"},263:function(e,n,t){e.exports=t.p+"img/screen4.d2f676f.png"},264:function(e,n,t){e.exports=t.p+"img/screen5.c7fa29d.png"},265:function(e,n,t){e.exports=t.p+"img/screen6.5679ccb.png"},266:function(e,n,t){e.exports=t.p+"img/screen7.bc0eb70.png"},267:function(e,n,t){e.exports=t.p+"img/screen8.66c690e.png"},268:function(e,n,t){e.exports=t.p+"img/screen9.f536f57.png"},269:function(e,n,t){e.exports=t.p+"img/screen2.718553c.png"},270:function(e,n,t){e.exports=t.p+"img/screen3.6eb7002.png"},271:function(e,n,t){e.exports=t.p+"img/screen4.e667f03.png"},272:function(e,n,t){e.exports=t.p+"img/screen5.ea5ccc8.png"},273:function(e,n,t){e.exports=t.p+"img/screen6.bbf1988.png"},274:function(e,n,t){e.exports=t.p+"img/screen7.923897b.png"},275:function(e,n,t){var r=t(2),c=t(164).values;r({target:"Object",stat:!0},{values:function(e){return c(e)}})},276:function(e,n,t){var map={"./attendance/screen2.png":241,"./attendance/screen3.png":242,"./attendance/screen4.png":243,"./attendance/screen5.png":244,"./attendance/screen6.png":245,"./attendance/screen7.png":246,"./begin-tour.png":277,"./billing/screen2.png":247,"./bluedot.png":248,"./calendars/screen2.png":249,"./calendars/screen3.png":250,"./check.png":237,"./common/dashboard-home-lightbox.png":251,"./common/dashboard-home.png":225,"./completed.png":235,"./daily-reports/screen2.png":252,"./daily-reports/screen3.png":253,"./daily-reports/screen4.png":254,"./daily-reports/screen5.png":255,"./daily-reports/screen6.png":256,"./daily-reports/screen7.png":257,"./daily-reports/screen8.png":258,"./development-reports/screen1.png":259,"./development-reports/screen2.png":260,"./grey-plus-icon.png":232,"./laptop.png":278,"./lesson-planning/screen2.png":261,"./lesson-planning/screen3.png":262,"./lesson-planning/screen4.png":263,"./lesson-planning/screen5.png":264,"./lesson-planning/screen6.png":265,"./lesson-planning/screen7.png":266,"./lesson-planning/screen8.png":267,"./lesson-planning/screen9.png":268,"./minimize.png":231,"./modal-close.png":234,"./parent-communication/screen2.png":269,"./parent-communication/screen3.png":270,"./parent-communication/screen4.png":271,"./parent-communication/screen5.png":272,"./parent-communication/screen6.png":273,"./parent-communication/screen7.png":274,"./plus-icon.png":233,"./styles/global.scss":165,"./support.png":282,"./tour-guide-large.png":230,"./tour-guide.png":238};function r(e){var n=c(e);return t(n)}function c(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=276},277:function(e,n,t){e.exports=t.p+"img/begin-tour.5dd7b73.png"},278:function(e,n,t){e.exports=t.p+"img/laptop.1d74e57.png"},279:function(e,n,t){"use strict";t.r(n);var r=t(14),c=(t(48),t(163),{props:{stepId:{type:String,required:!0},stepCompletion:{type:Object,required:!0},className:{type:String,default:""}},computed:{viewId:function(){return this.stepId.split("-")[0]},stepNumber:function(){return parseInt(this.stepId.split("-")[1].split("step")[1])},isAdvanced:function(){var e=this.stepId.split("-"),n=Object(r.a)(e,2),view=n[0],t=n[1];return this.stepCompletion[view]&&this.stepCompletion[view][t]},isFirstStep:function(){return 1===this.stepNumber},isUpNext:function(){if(this.isFirstStep)return!0;var e="step".concat(this.stepNumber-1);return this.stepCompletion[this.viewId]&&this.stepCompletion[this.viewId][e]}},methods:{advanceStep:function(){this.isUpNext&&this.$emit("advance")}}}),o=(t(239),t(37)),component=Object(o.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.isAdvanced?e._e():t("div",{staticClass:"interactable-before",class:e.className,on:{click:e.advanceStep}},[e._t("before")],2),e._v(" "),e.isAdvanced?t("div",{staticClass:"interactable-after"},[e._t("after")],2):e._e()])}),[],!1,null,"7a2df882",null);n.default=component.exports},303:function(e,n,t){var content=t(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("00c78918",content,!0,{sourceMap:!1})},329:function(e,n,t){"use strict";t(303)},330:function(e,n,t){var r=t(58),c=t(227),o=t(225),d=t(249),l=t(250),A=r(!1),f=c(o),m=c(d),h=c(l);A.push([e.i,"p[data-v-a3c48c82]{padding:20px}.step[data-v-a3c48c82]{margin:40px 0}.interactable-form[data-v-a3c48c82]{width:100%;height:100%;display:flex;align-items:center}.interactable-form .interactable-form-value[data-v-a3c48c82]{font-size:8px}.interactable-form .interactable-label-spacer[data-v-a3c48c82]{width:74px}.screen-1[data-v-a3c48c82]{background-image:url("+f+")}.screen-2[data-v-a3c48c82]{background-image:url("+m+")}.screen-2 #calendarsAndFoodMenus-step3[data-v-a3c48c82]{position:absolute;left:262px;top:116px}.screen-2 #calendarsAndFoodMenus-step3 .empty-button[data-v-a3c48c82]{width:115px;height:25px}.screen-3[data-v-a3c48c82]{background-image:url("+h+")}.screen-3 #calendarsAndFoodMenus-step4[data-v-a3c48c82]{position:absolute;left:386px;top:314px}.screen-3 #calendarsAndFoodMenus-step4 .plus-icon[data-v-a3c48c82]{width:23px;height:23px;display:flex;align-items:center;justify-content:center}.screen-3 #calendarsAndFoodMenus-step4 .plus-icon img[data-v-a3c48c82]{width:10px;height:10px}",""]),e.exports=A},352:function(e,n,t){"use strict";t.r(n);var r={mixins:[t(229).a],data:function(){return{pageTitleBase:"Calendars & Food Menus",pagePathBase:"calendars-and-food-menus"}},computed:{showScreen:function(){return this.completedCount<1?1:this.completedCount>=1&&this.completedCount<3?2:3}}},c=(t(329),t(37)),component=Object(c.a)(r,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"active-screen"},[r("div",{staticClass:"left-nav-container"},[r("LeftNavigation",{ref:"navigation",attrs:{"current-step":e.currentStep,"step-id":"calendarsAndFoodMenus-step1","has-hover":"calendars"},on:{advanceProgress:function(n){return e.$emit("advanceProgress")}}})],1),e._v(" "),r("div",{staticClass:"screens-container"},[1===e.showScreen?r("div",{staticClass:"screen screen-1"}):e._e(),e._v(" "),2===e.showScreen?r("div",{staticClass:"screen screen-2"},[r("div",{attrs:{id:"calendarsAndFoodMenus-step3"}},[r("BaseInteractable",{ref:"calendarsAndFoodMenus-step3",attrs:{"step-completion":e.stepCompletion,"step-id":"calendarsAndFoodMenus-step3"},on:{advance:function(n){return e.$emit("advanceProgress")}},scopedSlots:e._u([{key:"before",fn:function(){return[r("div",{staticClass:"empty-button"})]},proxy:!0},{key:"after",fn:function(){return[r("div",{staticClass:"empty-button"})]},proxy:!0}],null,!1,3684730260)})],1)]):e._e(),e._v(" "),3===e.showScreen?r("div",{staticClass:"screen screen-3"},[r("div",{attrs:{id:"calendarsAndFoodMenus-step4"}},[r("BaseInteractable",{ref:"calendarsAndFoodMenus-step4",attrs:{"step-completion":e.stepCompletion,"step-id":"calendarsAndFoodMenus-step4"},on:{advance:function(n){return e.$emit("advanceProgress")}},scopedSlots:e._u([{key:"before",fn:function(){return[r("div",{staticClass:"plus-icon"},[r("img",{attrs:{src:t(233),alt:"plus-icon"}})])]},proxy:!0},{key:"after",fn:function(){return[r("div",{staticClass:"plus-icon"},[r("img",{attrs:{src:t(233),alt:"plus-icon"}})])]},proxy:!0}],null,!1,41386836)})],1)]):e._e()])])}),[],!1,null,"a3c48c82",null);n.default=component.exports;installComponents(component,{LeftNavigation:t(228).default})}}]);