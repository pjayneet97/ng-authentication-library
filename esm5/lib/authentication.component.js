/**
 * @fileoverview added by tsickle
 * Generated from: lib/authentication.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase';
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(auth) {
        this.auth = auth;
        this.loading = false;
    }
    /**
     * @return {?}
     */
    AuthenticationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.auth.mode = 'emaillogin';
        this.auth.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
            size: 'invisible',
            callback: /**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.auth.signInWithPhone();
            }
        });
        this.auth.windowRef.recaptchaVerifier.render();
    };
    /**
     * @return {?}
     */
    AuthenticationComponent.prototype.signInWithGoogle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.auth.googleLogin().then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.loading = false;
            console.log(res);
        })).catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            alert("error");
            _this.loading = false;
        }));
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    AuthenticationComponent.prototype.signInWithEmail = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var _this = this;
        this.loading = true;
        this.auth.loginWithEmail(formData.email, formData.password).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            console.log(res);
            _this.loading = false;
        }));
    };
    /**
     * @return {?}
     */
    AuthenticationComponent.prototype.logOut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.auth.logOut().then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.auth.mode = 'emaillogin';
            _this.loading = false;
        }));
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    AuthenticationComponent.prototype.sendOTP = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var _this = this;
        if (formData.phone) {
            this.loading = true;
            this.phone = '+91' + formData.phone.toString();
            this.auth.signInWithPhone(this.phone).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.auth.windowRef.confirmationResult = result;
                _this.auth.mode = 'verifyotp';
                _this.loading = false;
                console.log("otp Sent");
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.log(error);
                alert("error occoured");
                _this.loading = false;
            }));
        }
    };
    /**
     * @param {?} otp
     * @return {?}
     */
    AuthenticationComponent.prototype.varify = /**
     * @param {?} otp
     * @return {?}
     */
    function (otp) {
        if (otp) {
            this.auth.verifyOTP(otp.toString());
        }
    };
    /**
     * @return {?}
     */
    AuthenticationComponent.prototype.resend = /**
     * @return {?}
     */
    function () {
        this.auth.resend(this.phone);
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    AuthenticationComponent.prototype.signupwithemail = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var _this = this;
        this.loading = true;
        this.auth.createUserWithEmail(formData.email, formData.password, "", formData.name).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.loading = false;
        }));
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-authentication',
                    template: "<div id=\"recaptcha\"></div>\r\n<ng-container *ngIf=\"loading==false && !auth.isAuthenticated()\">\r\n<!-- <button (click)=\"auth.mode='emaillogin'\">Email Login</button>\r\n<button (click)=\"auth.mode='emailsignup'\">Email signup</button>\r\n<button (click)=\"auth.mode='phoneauth'\">phone Login</button> -->\r\n<form (ngSubmit)=\"signInWithEmail(siginform.value)\" #siginform=\"ngForm\" *ngIf=\"auth.mode=='emaillogin'\">\r\n<ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n    <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n    <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n    <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n</ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"email\" name=\"email\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Email</label>\r\n  </div>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"password\" name=\"password\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Password</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Sign In\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n  <br>\r\n  <h2 style=\"color: #D2D8D8;text-align: center;\">OR</h2>\r\n  <button (click)=\"signInWithGoogle()\" class=\"loginBtn loginBtn--google\">\r\n    Login with Google\r\n  </button>\r\n</form>\r\n\r\n<form (ngSubmit)=\"signupwithemail(signupform.value)\" #signupform=\"ngForm\" *ngIf=\"auth.mode=='emailsignup'\">\r\n    <ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n        <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n        <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n        <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n    </ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"email\" name=\"email\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Email</label>\r\n  </div>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"password\" name=\"password\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Password</label>\r\n  </div>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"text\" name=\"mane\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Name</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Create Account\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n  <br>\r\n  <h2 style=\"color: #D2D8D8;text-align: center;\">OR</h2>\r\n  <button (click)=\"signInWithGoogle()\" class=\"loginBtn loginBtn--google\">\r\n    SignUp with Google\r\n  </button>\r\n</form>\r\n\r\n<form (ngSubmit)=\"sendOTP(signform.value)\" #signform=\"ngForm\" *ngIf=\"auth.mode=='phoneauth'\">\r\n    <ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n        <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n        <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n        <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n    </ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"number\" name=\"phone\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Phone Number</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Send OTP\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n</form>\r\n<form (ngSubmit)=\"varify(otpform.value.otp)\" #otpform=\"ngForm\" *ngIf=\"auth.mode=='verifyotp'\">\r\n    <ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n        <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n        <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n        <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n    </ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"number\" name=\"otp\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Enter OTP</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Verify OTP\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n</form>\r\n\r\n<form *ngIf=\"auth.mode=='emailverify'\">\r\n  <div class=\"group\">\r\n    Please Verify your email using the verification link send to your email\r\n  </div>\r\n  <button (click)=\"auth.sendEmailVerification()\" type=\"button\" class=\"button buttonBlue\">Resend Verification Email\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n  <button (click)=\"logOut()\" type=\"button\" class=\"button buttonBlue\">LogOut\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n</form>\r\n</ng-container>\r\n<ng-container *ngIf=\"loading==true\">\r\n    <form>\r\n        <div style=\"padding-left: 33%;\" class=\"group\">\r\n            <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n        </div>\r\n      </form>\r\n</ng-container>\r\n\r\n<form *ngIf=\"auth.isAuthenticated()\">\r\n  <div class=\"group\">\r\n    Logged In Successfully\r\n    <button (click)=\"logOut()\" type=\"button\" class=\"button buttonBlue\">LogOut\r\n      <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n",
                    styles: ["*{box-sizing:border-box}h1,h3{font-weight:300}h1{color:#636363}h3{color:#4a89dc}form{min-height:520px;max-width:380px;padding:2em;background:#fafafa;border:1px solid #ebebeb;box-shadow:rgba(0,0,0,.14902) 0 1px 1px 0,rgba(0,0,0,.09804) 0 1px 2px 0}.group{position:relative;margin-bottom:45px}input{font-size:18px;padding:10px 10px 10px 5px;-webkit-appearance:none;display:block;background:#fafafa;color:#636363;width:100%;border:none;border-radius:0;border-bottom:1px solid #757575}input:focus{outline:0}label{color:#999;font-size:18px;font-weight:400;position:absolute;pointer-events:none;left:5px;top:10px;transition:.2s}input.used~label,input:focus~label{top:-20px;transform:scale(.75);left:-2px;color:#4a89dc}.bar{position:relative;display:block;width:100%}.bar:after,.bar:before{content:\"\";height:2px;width:0;bottom:1px;position:absolute;background:#4a89dc;transition:.2s}.bar:before{left:50%}.bar:after{right:50%}input:focus~.bar:after,input:focus~.bar:before{width:50%}.highlight{position:absolute;height:60%;width:100px;top:25%;left:0;pointer-events:none;opacity:.2}input:focus~.highlight{-webkit-animation:.3s inputHighlighter;animation:.3s inputHighlighter}@-webkit-keyframes inputHighlighter{from{background:#4a89dc}to{width:0;background:0 0}}@keyframes inputHighlighter{from{background:#4a89dc}to{width:0;background:0 0}}.button{position:relative;display:inline-block;padding:12px 24px;margin:.3em 0 1em;width:100%;vertical-align:middle;color:#fff;font-size:16px;line-height:20px;-webkit-font-smoothing:antialiased;text-align:center;letter-spacing:1px;background:0 0;border:0;border-bottom:2px solid #3160b6;cursor:pointer;transition:.15s}.button:focus{outline:0}.buttonBlue{background:#4a89dc;text-shadow:1px 1px 0 rgba(39,110,204,.5)}.buttonBlue:hover{background:#357bd8}.ripples{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:0 0}.ripplesCircle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25)}.ripples.is-active .ripplesCircle{-webkit-animation:.4s ease-in ripples;animation:.4s ease-in ripples}@-webkit-keyframes ripples{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}@keyframes ripples{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}footer{text-align:center}footer p{color:#888;font-size:13px;letter-spacing:.4px}footer a{color:#4a89dc;text-decoration:none;transition:.2s}footer a:hover{color:#666;text-decoration:underline}footer img{width:80px;transition:.2s}footer img:hover{opacity:.83}footer a:focus,footer img:focus{outline:0}.loginBtn{box-sizing:border-box;position:relative;margin:.2em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:.2em;font-size:16px;color:#fff;width:100%}.loginBtn:before{content:\"\";box-sizing:border-box;position:absolute;top:0;left:0;width:34px;height:100%}.loginBtn:focus{outline:0}.loginBtn:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,.1)}.loginBtn--facebook{background-color:#4c69ba;background-image:linear-gradient(#4c69ba,#3b55a0);text-shadow:0 -1px 0 #354c8c}.loginBtn--facebook:before{border-right:1px solid #364e92;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png) 6px 6px no-repeat}.loginBtn--facebook:focus,.loginBtn--facebook:hover{background-color:#5b7bd5;background-image:linear-gradient(#5b7bd5,#4864b1)}.loginBtn--google{background:#dd4b39}.loginBtn--google:before{border-right:1px solid #bb3f30;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png) 6px 6px no-repeat}.loginBtn--google:focus,.loginBtn--google:hover{background:#e74b37}.lds-ring{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #4a89dc;border-radius:50%;-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;border-color:#4a89dc transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
                }] }
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = function () { return [
        { type: AuthenticationService }
    ]; };
    return AuthenticationComponent;
}());
export { AuthenticationComponent };
if (false) {
    /** @type {?} */
    AuthenticationComponent.prototype.phone;
    /** @type {?} */
    AuthenticationComponent.prototype.loading;
    /** @type {?} */
    AuthenticationComponent.prototype.auth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNyQztJQVFFLGlDQUFtQixJQUEwQjtRQUExQixTQUFJLEdBQUosSUFBSSxDQUFzQjtRQUQ3QyxZQUFPLEdBQUMsS0FBSyxDQUFDO0lBQ21DLENBQUM7Ozs7SUFFbEQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsWUFBWSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7WUFDdkYsSUFBSSxFQUFFLFdBQVc7WUFDakIsUUFBUTs7OztzQkFBQyxRQUFRO2dCQUNmLGlEQUFpRDtnQkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM5QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELGtEQUFnQjs7O0lBQWhCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDOUIsS0FBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUE7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R0FBRztZQUN2RixLQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQTtRQUNwQixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsa3BQQUE4Qzs7aUJBRS9DOzs7O2dCQU5RLHFCQUFxQjs7SUFnRjlCLDhCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0F6RVksdUJBQXVCOzs7SUFDbEMsd0NBQUs7O0lBQ0wsMENBQWM7O0lBQ0YsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYXV0aGVudGljYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aGVudGljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGhvbmVcbiAgbG9hZGluZz1mYWxzZTtcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGg6QXV0aGVudGljYXRpb25TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF1dGgubW9kZT0nZW1haWxsb2dpbic7XG4gICAgdGhpcy5hdXRoLndpbmRvd1JlZi5yZWNhcHRjaGFWZXJpZmllciA9IG5ldyBmaXJlYmFzZS5hdXRoLlJlY2FwdGNoYVZlcmlmaWVyKCdyZWNhcHRjaGEnLCB7XG4gICAgICBzaXplOiAnaW52aXNpYmxlJyxcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIHJlQ0FQVENIQSBzb2x2ZWQsIGFsbG93IHNpZ25JbldpdGhQaG9uZU51bWJlci5cbiAgICAgICAgdGhpcy5hdXRoLnNpZ25JbldpdGhQaG9uZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYXV0aC53aW5kb3dSZWYucmVjYXB0Y2hhVmVyaWZpZXIucmVuZGVyKCk7XG4gIH1cbiAgc2lnbkluV2l0aEdvb2dsZSgpe1xuICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgIHRoaXMuYXV0aC5nb29nbGVMb2dpbigpLnRoZW4ocmVzPT57XG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2VcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgIGFsZXJ0KFwiZXJyb3JcIilcbiAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICB9KVxuICB9XG4gIHNpZ25JbldpdGhFbWFpbChmb3JtRGF0YSl7XG4gICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgdGhpcy5hdXRoLmxvZ2luV2l0aEVtYWlsKGZvcm1EYXRhLmVtYWlsLGZvcm1EYXRhLnBhc3N3b3JkKS50aGVuKHJlcz0+e1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBsb2dPdXQoKXtcbiAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICB0aGlzLmF1dGgubG9nT3V0KCkudGhlbihyZXM9PntcbiAgICAgIHRoaXMuYXV0aC5tb2RlPSdlbWFpbGxvZ2luJztcbiAgICAgIHRoaXMubG9hZGluZz1mYWxzZVxuICAgIH0pXG4gIH1cblxuICBzZW5kT1RQKGZvcm1EYXRhKSB7XG4gICAgaWYgKGZvcm1EYXRhLnBob25lKSB7IFxuICAgICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgICAgdGhpcy5waG9uZSA9ICcrOTEnICsgZm9ybURhdGEucGhvbmUudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuYXV0aC5zaWduSW5XaXRoUGhvbmUodGhpcy5waG9uZSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5hdXRoLndpbmRvd1JlZi5jb25maXJtYXRpb25SZXN1bHQgPSByZXN1bHQ7XG4gICAgICB0aGlzLmF1dGgubW9kZT0ndmVyaWZ5b3RwJ1xuICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJvdHAgU2VudFwiKVxuICAgIH0pXG4gICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBhbGVydChcImVycm9yIG9jY291cmVkXCIpO1xuICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlXG4gICAgfSk7IH1cbiAgfVxuXG4gIHZhcmlmeShvdHApIHtcbiAgICBpZiAob3RwKSB7XG4gICAgICB0aGlzLmF1dGgudmVyaWZ5T1RQKG90cC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cbiAgcmVzZW5kKCl7XG4gICAgdGhpcy5hdXRoLnJlc2VuZCh0aGlzLnBob25lKTtcbiAgfVxuICBzaWdudXB3aXRoZW1haWwoZm9ybURhdGEpe1xuICAgIHRoaXMubG9hZGluZz10cnVlXG4gICAgdGhpcy5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWwoZm9ybURhdGEuZW1haWwsZm9ybURhdGEucGFzc3dvcmQsXCJcIixmb3JtRGF0YS5uYW1lKS50aGVuKHJlcz0+e1xuICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlXG4gICAgfSlcbiAgfVxufVxuIl19