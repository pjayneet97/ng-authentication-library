/**
 * @fileoverview added by tsickle
 * Generated from: lib/authentication.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase';
export class AuthenticationComponent {
    /**
     * @param {?} auth
     */
    constructor(auth) {
        this.auth = auth;
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.auth.mode = 'emaillogin';
        this.auth.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
            size: 'invisible',
            /**
             * @param {?} response
             * @return {?}
             */
            callback(response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.auth.signInWithPhone();
            }
        });
        this.auth.windowRef.recaptchaVerifier.render();
    }
    /**
     * @return {?}
     */
    signInWithGoogle() {
        this.loading = true;
        this.auth.googleLogin().then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.loading = false;
            console.log(res);
        })).catch((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            alert("error");
            this.loading = false;
        }));
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    signInWithEmail(formData) {
        this.loading = true;
        this.auth.loginWithEmail(formData.email, formData.password).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            console.log(res);
            this.loading = false;
        }));
    }
    /**
     * @return {?}
     */
    logOut() {
        this.loading = true;
        this.auth.logOut().then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.auth.mode = 'emaillogin';
            this.loading = false;
        }));
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    sendOTP(formData) {
        if (formData.phone) {
            this.loading = true;
            this.phone = '+91' + formData.phone.toString();
            this.auth.signInWithPhone(this.phone).then((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                this.auth.windowRef.confirmationResult = result;
                this.auth.mode = 'verifyotp';
                this.loading = false;
                console.log("otp Sent");
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                console.log(error);
                alert("error occoured");
                this.loading = false;
            }));
        }
    }
    /**
     * @param {?} otp
     * @return {?}
     */
    varify(otp) {
        if (otp) {
            this.auth.verifyOTP(otp.toString());
        }
    }
    /**
     * @return {?}
     */
    resend() {
        this.auth.resend(this.phone);
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    signupwithemail(formData) {
        this.loading = true;
        this.auth.createUserWithEmail(formData.email, formData.password, "", formData.name).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.loading = false;
        }));
    }
}
AuthenticationComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-authentication',
                template: "<div id=\"recaptcha\"></div>\r\n<ng-container *ngIf=\"loading==false && !auth.isAuthenticated()\">\r\n<!-- <button (click)=\"auth.mode='emaillogin'\">Email Login</button>\r\n<button (click)=\"auth.mode='emailsignup'\">Email signup</button>\r\n<button (click)=\"auth.mode='phoneauth'\">phone Login</button> -->\r\n<form (ngSubmit)=\"signInWithEmail(siginform.value)\" #siginform=\"ngForm\" *ngIf=\"auth.mode=='emaillogin'\">\r\n<ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n    <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n    <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n    <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n</ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"email\" name=\"email\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Email</label>\r\n  </div>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"password\" name=\"password\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Password</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Sign In\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n  <br>\r\n  <h2 style=\"color: #D2D8D8;text-align: center;\">OR</h2>\r\n  <button (click)=\"signInWithGoogle()\" class=\"loginBtn loginBtn--google\">\r\n    Login with Google\r\n  </button>\r\n</form>\r\n\r\n<form (ngSubmit)=\"signupwithemail(signupform.value)\" #signupform=\"ngForm\" *ngIf=\"auth.mode=='emailsignup'\">\r\n    <ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n        <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n        <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n        <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n    </ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"email\" name=\"email\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Email</label>\r\n  </div>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"password\" name=\"password\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Password</label>\r\n  </div>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"text\" name=\"mane\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Name</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Create Account\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n  <br>\r\n  <h2 style=\"color: #D2D8D8;text-align: center;\">OR</h2>\r\n  <button (click)=\"signInWithGoogle()\" class=\"loginBtn loginBtn--google\">\r\n    SignUp with Google\r\n  </button>\r\n</form>\r\n\r\n<form (ngSubmit)=\"sendOTP(signform.value)\" #signform=\"ngForm\" *ngIf=\"auth.mode=='phoneauth'\">\r\n    <ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n        <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n        <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n        <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n    </ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"number\" name=\"phone\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Phone Number</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Send OTP\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n</form>\r\n<form (ngSubmit)=\"varify(otpform.value.otp)\" #otpform=\"ngForm\" *ngIf=\"auth.mode=='verifyotp'\">\r\n    <ul style=\"max-width: 380px;padding: 0px;margin-left: -2rem;margin-right: -2rem;margin-top: -2rem;margin-bottom: 4rem;\">\r\n        <li (click)=\"auth.mode='emaillogin'\" style=\"display: inline-block;width: 33%;text-align: center;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign In</li>\r\n        <li (click)=\"auth.mode='emailsignup'\" style=\"display: inline-block;width: 33%;text-align: center;border-left: #636363 solid 1px;background-color: #D2D8D8;color: #636363;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Sign Up</li>\r\n        <li (click)=\"auth.mode='phoneauth'\" style=\"display: inline-block;width: 33%;text-align: center;border-left:#636363 solid 1px;background-color: #4A89DC;color: white;font-size: large;padding-top: 12px;padding-bottom: 12px;\">Phone</li>\r\n    </ul>\r\n  <div class=\"group\">\r\n    <input ngModel type=\"number\" name=\"otp\"><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n    <label>Enter OTP</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"button buttonBlue\">Verify OTP\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n</form>\r\n\r\n<form *ngIf=\"auth.mode=='emailverify'\">\r\n  <div class=\"group\">\r\n    Please Verify your email using the verification link send to your email\r\n  </div>\r\n  <button (click)=\"auth.sendEmailVerification()\" type=\"button\" class=\"button buttonBlue\">Resend Verification Email\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n  <button (click)=\"logOut()\" type=\"button\" class=\"button buttonBlue\">LogOut\r\n    <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n  </button>\r\n</form>\r\n</ng-container>\r\n<ng-container *ngIf=\"loading==true\">\r\n    <form>\r\n        <div style=\"padding-left: 33%;\" class=\"group\">\r\n            <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n        </div>\r\n      </form>\r\n</ng-container>\r\n\r\n<form *ngIf=\"auth.isAuthenticated()\">\r\n  <div class=\"group\">\r\n    Logged In Successfully\r\n    <button (click)=\"logOut()\" type=\"button\" class=\"button buttonBlue\">LogOut\r\n      <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n",
                styles: ["*{box-sizing:border-box}h1,h3{font-weight:300}h1{color:#636363}h3{color:#4a89dc}form{min-height:520px;max-width:380px;padding:2em;background:#fafafa;border:1px solid #ebebeb;box-shadow:rgba(0,0,0,.14902) 0 1px 1px 0,rgba(0,0,0,.09804) 0 1px 2px 0}.group{position:relative;margin-bottom:45px}input{font-size:18px;padding:10px 10px 10px 5px;-webkit-appearance:none;display:block;background:#fafafa;color:#636363;width:100%;border:none;border-radius:0;border-bottom:1px solid #757575}input:focus{outline:0}label{color:#999;font-size:18px;font-weight:400;position:absolute;pointer-events:none;left:5px;top:10px;transition:.2s}input.used~label,input:focus~label{top:-20px;transform:scale(.75);left:-2px;color:#4a89dc}.bar{position:relative;display:block;width:100%}.bar:after,.bar:before{content:\"\";height:2px;width:0;bottom:1px;position:absolute;background:#4a89dc;transition:.2s}.bar:before{left:50%}.bar:after{right:50%}input:focus~.bar:after,input:focus~.bar:before{width:50%}.highlight{position:absolute;height:60%;width:100px;top:25%;left:0;pointer-events:none;opacity:.2}input:focus~.highlight{-webkit-animation:.3s inputHighlighter;animation:.3s inputHighlighter}@-webkit-keyframes inputHighlighter{from{background:#4a89dc}to{width:0;background:0 0}}@keyframes inputHighlighter{from{background:#4a89dc}to{width:0;background:0 0}}.button{position:relative;display:inline-block;padding:12px 24px;margin:.3em 0 1em;width:100%;vertical-align:middle;color:#fff;font-size:16px;line-height:20px;-webkit-font-smoothing:antialiased;text-align:center;letter-spacing:1px;background:0 0;border:0;border-bottom:2px solid #3160b6;cursor:pointer;transition:.15s}.button:focus{outline:0}.buttonBlue{background:#4a89dc;text-shadow:1px 1px 0 rgba(39,110,204,.5)}.buttonBlue:hover{background:#357bd8}.ripples{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:0 0}.ripplesCircle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25)}.ripples.is-active .ripplesCircle{-webkit-animation:.4s ease-in ripples;animation:.4s ease-in ripples}@-webkit-keyframes ripples{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}@keyframes ripples{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}footer{text-align:center}footer p{color:#888;font-size:13px;letter-spacing:.4px}footer a{color:#4a89dc;text-decoration:none;transition:.2s}footer a:hover{color:#666;text-decoration:underline}footer img{width:80px;transition:.2s}footer img:hover{opacity:.83}footer a:focus,footer img:focus{outline:0}.loginBtn{box-sizing:border-box;position:relative;margin:.2em;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:.2em;font-size:16px;color:#fff;width:100%}.loginBtn:before{content:\"\";box-sizing:border-box;position:absolute;top:0;left:0;width:34px;height:100%}.loginBtn:focus{outline:0}.loginBtn:active{box-shadow:inset 0 0 0 32px rgba(0,0,0,.1)}.loginBtn--facebook{background-color:#4c69ba;background-image:linear-gradient(#4c69ba,#3b55a0);text-shadow:0 -1px 0 #354c8c}.loginBtn--facebook:before{border-right:1px solid #364e92;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png) 6px 6px no-repeat}.loginBtn--facebook:focus,.loginBtn--facebook:hover{background-color:#5b7bd5;background-image:linear-gradient(#5b7bd5,#4864b1)}.loginBtn--google{background:#dd4b39}.loginBtn--google:before{border-right:1px solid #bb3f30;background:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png) 6px 6px no-repeat}.loginBtn--google:focus,.loginBtn--google:hover{background:#e74b37}.lds-ring{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #4a89dc;border-radius:50%;-webkit-animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;animation:1.2s cubic-bezier(.5,0,.5,1) infinite lds-ring;border-color:#4a89dc transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes lds-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"]
            }] }
];
/** @nocollapse */
AuthenticationComponent.ctorParameters = () => [
    { type: AuthenticationService }
];
if (false) {
    /** @type {?} */
    AuthenticationComponent.prototype.phone;
    /** @type {?} */
    AuthenticationComponent.prototype.loading;
    /** @type {?} */
    AuthenticationComponent.prototype.auth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQU1yQyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBR2xDLFlBQW1CLElBQTBCO1FBQTFCLFNBQUksR0FBSixJQUFJLENBQXNCO1FBRDdDLFlBQU8sR0FBQyxLQUFLLENBQUM7SUFDbUMsQ0FBQzs7OztJQUVsRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsWUFBWSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7WUFDdkYsSUFBSSxFQUFFLFdBQVc7Ozs7O1lBQ2pCLFFBQVEsQ0FBQyxRQUFRO2dCQUNmLGlEQUFpRDtnQkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM5QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSTs7OztRQUFDLEdBQUcsQ0FBQSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFBO1lB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Ozs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGtwUEFBOEM7O2FBRS9DOzs7O1lBTlEscUJBQXFCOzs7O0lBUTVCLHdDQUFLOztJQUNMLDBDQUFjOztJQUNGLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWF1dGhlbnRpY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBob25lXG4gIGxvYWRpbmc9ZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOkF1dGhlbnRpY2F0aW9uU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdXRoLm1vZGU9J2VtYWlsbG9naW4nO1xuICAgIHRoaXMuYXV0aC53aW5kb3dSZWYucmVjYXB0Y2hhVmVyaWZpZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5SZWNhcHRjaGFWZXJpZmllcigncmVjYXB0Y2hhJywge1xuICAgICAgc2l6ZTogJ2ludmlzaWJsZScsXG4gICAgICBjYWxsYmFjayhyZXNwb25zZSkge1xuICAgICAgICAvLyByZUNBUFRDSEEgc29sdmVkLCBhbGxvdyBzaWduSW5XaXRoUGhvbmVOdW1iZXIuXG4gICAgICAgIHRoaXMuYXV0aC5zaWduSW5XaXRoUGhvbmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmF1dGgud2luZG93UmVmLnJlY2FwdGNoYVZlcmlmaWVyLnJlbmRlcigpO1xuICB9XG4gIHNpZ25JbldpdGhHb29nbGUoKXtcbiAgICB0aGlzLmxvYWRpbmc9dHJ1ZTtcbiAgICB0aGlzLmF1dGguZ29vZ2xlTG9naW4oKS50aGVuKHJlcz0+e1xuICAgICAgdGhpcy5sb2FkaW5nPWZhbHNlXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICBhbGVydChcImVycm9yXCIpXG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2U7XG4gICAgfSlcbiAgfVxuICBzaWduSW5XaXRoRW1haWwoZm9ybURhdGEpe1xuICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgIHRoaXMuYXV0aC5sb2dpbldpdGhFbWFpbChmb3JtRGF0YS5lbWFpbCxmb3JtRGF0YS5wYXNzd29yZCkudGhlbihyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgbG9nT3V0KCl7XG4gICAgdGhpcy5sb2FkaW5nPXRydWU7XG4gICAgdGhpcy5hdXRoLmxvZ091dCgpLnRoZW4ocmVzPT57XG4gICAgICB0aGlzLmF1dGgubW9kZT0nZW1haWxsb2dpbic7XG4gICAgICB0aGlzLmxvYWRpbmc9ZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgc2VuZE9UUChmb3JtRGF0YSkge1xuICAgIGlmIChmb3JtRGF0YS5waG9uZSkgeyBcbiAgICAgIHRoaXMubG9hZGluZz10cnVlO1xuICAgICAgIHRoaXMucGhvbmUgPSAnKzkxJyArIGZvcm1EYXRhLnBob25lLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmF1dGguc2lnbkluV2l0aFBob25lKHRoaXMucGhvbmUpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMuYXV0aC53aW5kb3dSZWYuY29uZmlybWF0aW9uUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgdGhpcy5hdXRoLm1vZGU9J3ZlcmlmeW90cCdcbiAgICAgIHRoaXMubG9hZGluZz1mYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwib3RwIFNlbnRcIilcbiAgICB9KVxuICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgYWxlcnQoXCJlcnJvciBvY2NvdXJlZFwiKTtcbiAgICAgIHRoaXMubG9hZGluZz1mYWxzZVxuICAgIH0pOyB9XG4gIH1cblxuICB2YXJpZnkob3RwKSB7XG4gICAgaWYgKG90cCkge1xuICAgICAgdGhpcy5hdXRoLnZlcmlmeU9UUChvdHAudG9TdHJpbmcoKSk7XG4gICAgfVxuICB9XG4gIHJlc2VuZCgpe1xuICAgIHRoaXMuYXV0aC5yZXNlbmQodGhpcy5waG9uZSk7XG4gIH1cbiAgc2lnbnVwd2l0aGVtYWlsKGZvcm1EYXRhKXtcbiAgICB0aGlzLmxvYWRpbmc9dHJ1ZVxuICAgIHRoaXMuYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsKGZvcm1EYXRhLmVtYWlsLGZvcm1EYXRhLnBhc3N3b3JkLFwiXCIsZm9ybURhdGEubmFtZSkudGhlbihyZXM9PntcbiAgICAgIHRoaXMubG9hZGluZz1mYWxzZVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==