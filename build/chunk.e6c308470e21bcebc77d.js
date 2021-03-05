(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{460:function(e,t,s){"use strict";(function(e){var o={name:"pckg-auth-full",mixins:[s(464).a],props:{email:{},step:{type:String,default:"login"},options:{default:function(){return{disable:{}}}}},data:function(){return{emailModel:this.email||"",password:"",passwordRepeat:"",code:"",myStep:this.step,error:"",loading:!1,existingUser:!1,disable:this.options.disable||{}}},mounted:function(){var e=document.URL.substring(document.URL.lastIndexOf("#")+1);if(0===e.indexOf("passwordSent")){var t=e.split("-");this.emailModel=t[1],this.code=t[2],this.executeAction()}},watch:{emailModel:function(){this.existingUser=!1},step:function(e){this.myStep=e,this.error=""}},methods:{executeAction:function(){this.error="","login"==this.myStep&&(this.loading=!0,http.post("/login",{email:this.emailModel,password:this.password},function(e){if(this.loading=!1,e.success){$dispatcher.$emit("auth:user:loggedIn");var t=new URL(window.location.href).searchParams.get("loginredirect");return t?void http.redirect(t):e.redirect&&-1===window.location.pathname.indexOf("/basket")?void http.redirect(e.redirect):(this.$emit("close"),void(this.visible=!1))}this.errors.clear(),"activateAccount"!==e.type?this.error=e.text||"Unknown error":this.setStep("activateAccount")}.bind(this),function(t){this.loading=!1,http.postError(t),this.errors.clear(),e.each(t.responseJSON.descriptions||[],function(e,t){this.errors.remove(e),this.errors.add({field:e,msg:t})}.bind(this))}.bind(this))),"signup"==this.myStep&&(this.loading=!0,http.post("/api/auth/signup",{email:this.emailModel,password:this.password,passwordRepeat:this.passwordRepeat},function(e){this.loading=!1,e.success&&this.setStep("accountCreated")}.bind(this),function(e){this.loading=!1,this.hydrateErrorResponse(e)}.bind(this))),"accountCreated"===this.myStep&&this.setStep("login"),["forgottenPassword","activateAccount"].indexOf(this.myStep)>=0&&(this.loading=!0,http.post("/forgot-password",{email:this.emailModel},function(e){this.loading=!1,e.success&&this.setStep("passwordSent")}.bind(this),function(e){this.loading=!1,this.hydrateErrorResponse(e)}.bind(this))),"passwordSent"==this.myStep&&(this.loading=!0,http.post("/password-code",{email:this.emailModel,code:this.code},function(e){this.loading=!1,e.success&&this.setStep("resetPassword")}.bind(this),function(e){this.loading=!1,this.hydrateErrorResponse(e)}.bind(this))),"resetPassword"==this.myStep&&(this.loading=!0,http.post("/reset-password",{code:this.code,email:this.emailModel,password:this.password,passwordRepeat:this.passwordRepeat},function(e){this.loading=!1,e.success&&($dispatcher.$emit("auth:user:loggedIn"),this.$emit("close"),this.visible=!1,window.location.pathname.indexOf("/basket")<0&&http.redirect())}.bind(this),function(e){this.loading=!1,this.hydrateErrorResponse(e)}.bind(this)))},setStep:function(e){this.myStep=e,this.$emit("steps",e)}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},stepBtnText:function(){return{login:"Login",forgottenPassword:"Send security code",passwordSent:"Confirm security code",resetPassword:"Set new password",activateAccount:"Send security code"}[this.myStep]||utils.ucfirst(this.myStep)}}};t.a=o}).call(this,s(83))},464:function(e,t,s){"use strict";(function(e){function o(e,t,s,o,r,i,n){try{var a=e[i](n),l=a.value}catch(e){return void s(e)}a.done?t(l):Promise.resolve(l).then(o,r)}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.d(t,"a",(function(){return i}));var i={methods:{patchForm:function(e,t,s,o){var r=this;http.patch(e,t,(function(e){r.clearErrorResponse(),s&&s(e)}),(function(e){r.hydrateErrorResponse(e),o&&o(e)}))},validateAndSubmit:function(t,s){this.$validator.validateAll().then(function(o){if(o)t();else{var i=e(this.$el).find(".htmlbuilder-validator-error").first();i&&("undefined"==typeof globalScrollTo?"undefined":r(globalScrollTo))==Function&&globalScrollTo(i),s&&s()}}.bind(this))},syncErrors:function(e){var t=this;return new Promise(function(){var t,s=(t=regeneratorRuntime.mark((function t(s,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s,t.next=4,e();case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),o(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,s=arguments;return new Promise((function(r,i){var n=t.apply(e,s);function a(e){o(n,r,i,a,l,"next",e)}function l(e){o(n,r,i,a,l,"throw",e)}a(void 0)}))});return function(e,t){return s.apply(this,arguments)}}()).then((function(e){return console.log("clearing because of success response",e),t.clearErrorResponse(),e})).catch((function(e){return console.log("hydrating error response",e),t.hydrateErrorResponse(e),e}))},clearErrorResponse:function(){this.errors.clear()},hydrateErrorResponse:function(t){this.clearErrorResponse(),t.responseJSON&&(e.each(t.responseJSON.descriptions||[],function(e,t){this.errors.remove(e),this.errors.add({field:e,msg:t})}.bind(this)),this.$nextTick(function(){var t=e(this.$el).find(".htmlbuilder-validator-error").first();t&&("undefined"==typeof globalScrollTo?"undefined":r(globalScrollTo))==Function&&globalScrollTo(t)}.bind(this)))}}}}).call(this,s(83))},469:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return void 0!==e.error?s("form",{staticClass:"pckg-auth-full"},[s("div",{staticClass:"display-block bold text-center margin-bottom-sm"},["login"===e.myStep?[e._v("Login")]:"forgottenPassword"===e.myStep?[e._v("Forgotten password")]:"passwordSent"===e.myStep?[e._v("Password sent")]:"resetPassword"===e.myStep?[e._v("Reset password")]:"signup"===e.myStep?[e._v("Signup")]:e._e()],2),["login","forgottenPassword","passwordSent","resetPassword","signup"].indexOf(e.myStep)>=0?s("div",{staticClass:"form-group"},[s("label",[e._v("Email")]),-1==["passwordSent","resetPassword"].indexOf(e.myStep)?s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.emailModel,expression:"emailModel"}],staticClass:"form-control",attrs:{type:"email",name:"email",autocomplete:"username",placeholder:"your@email.com"},domProps:{value:e.emailModel},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.executeAction(t)},input:function(t){t.target.composing||(e.emailModel=t.target.value)}}}),s("htmlbuilder-validator-error",{attrs:{bag:e.errors,name:"email"}})],1):s("div",[e._v(" "+e._s(e.emailModel)+" ")])]):e._e(),["passwordSent"].indexOf(e.myStep)>=0?s("div",{staticClass:"form-group"},[s("label",[e._v("Security code")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"form-control",attrs:{type:"text",name:"code",autocomplete:"off"},domProps:{value:e.code},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.executeAction(t)},input:function(t){t.target.composing||(e.code=t.target.value)}}}),s("htmlbuilder-validator-error",{attrs:{bag:e.errors,name:"code"}})],1)]):e._e(),["login"].indexOf(e.myStep)>=0?s("div",{staticClass:"form-group"},[s("label",[e._v("Password")]),"login"==e.myStep?s("a",{staticClass:"as-link font-size-xs pull-right __help-label-link",attrs:{href:"#",tabindex:"-1"},on:{click:function(t){return t.preventDefault(),e.setStep("forgottenPassword")}}},[e._v("Forgotten password?")]):e._e(),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",autocomplete:"current-password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.executeAction(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("htmlbuilder-validator-error",{attrs:{bag:e.errors,name:"password"}})],1)]):e._e(),["resetPassword","signup"].indexOf(e.myStep)>=0?s("div",{staticClass:"form-group"},[s("label",[e._v("New password")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",autocomplete:"new-password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.executeAction(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("htmlbuilder-validator-error",{attrs:{bag:e.errors,name:"password"}})],1)]):e._e(),["resetPassword","signup"].indexOf(e.myStep)>=0?s("div",{staticClass:"form-group"},[s("label",[e._v("Repeat password")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordRepeat,expression:"passwordRepeat"}],staticClass:"form-control",attrs:{type:"password",autocomplete:"new-password"},domProps:{value:e.passwordRepeat},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.executeAction(t)},input:function(t){t.target.composing||(e.passwordRepeat=t.target.value)}}}),s("htmlbuilder-validator-error",{attrs:{bag:e.errors,name:"passwordRepeat"}})],1)]):e._e(),e.error.length>0?s("div",{staticClass:"alert alert-danger clear-both"},[e._v(e._s(e.error))]):e._e(),s("button",{key:"btnAction",staticClass:"btn btn-block btn-primary",attrs:{disabled:e.loading},on:{click:function(t){return t.preventDefault(),e.executeAction(t)}}},[e.loading?[s("i",{staticClass:"fa fa-spinner fa-spin"})]:[e._v(e._s(e.stepBtnText))]],2),s("div",{staticClass:"text-center margin-top-md margin-bottom-sm"},[e.disable.signup||"login"!=e.myStep?e._e():s("a",{staticClass:"as-link font-size-xs",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setStep("signup")}}},[e._v("New user?")]),["forgottenPassword","signup"].indexOf(e.myStep)>=0?s("a",{staticClass:"as-link font-size-xs",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setStep("login")}}},[e._v("Existing user?")]):e._e()])]):e._e()};o._withStripped=!0;var r=s(460).a,i=s(34),n=Object(i.a)(r,o,[],!1,null,null,null);n.options.__file="vendor/pckg/auth/src/Pckg/Auth/View/basic.vue";t.default=n.exports}}]);