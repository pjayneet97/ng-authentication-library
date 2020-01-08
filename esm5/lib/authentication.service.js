/**
 * @fileoverview added by tsickle
 * Generated from: lib/authentication.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/auth";
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.authInfo = null;
        this.authType = null;
        this.windowRef = window;
        afAuth.authState.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.authInfo = res;
            if (_this.authType == 'email') {
                if (res) {
                    if (res.emailVerified) {
                        _this.mode = 'successful';
                    }
                    else {
                        _this.mode = 'emailverify';
                    }
                }
            }
            else if (_this.authType == 'phone') {
                _this.mode = 'successful';
            }
        }));
    }
    /**
     * @return {?}
     */
    AuthenticationService.prototype.isAuthenticated = /**
     * @return {?}
     */
    function () {
        if (this.authInfo) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.googleLogin = /**
     * @return {?}
     */
    function () {
        this.authType = 'email';
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    };
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    AuthenticationService.prototype.loginWithEmail = /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    function (email, password) {
        this.authType = 'email';
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    /**
     * @param {?} email
     * @param {?} password
     * @param {?} photoURL
     * @param {?} displayName
     * @return {?}
     */
    AuthenticationService.prototype.createUserWithEmail = /**
     * @param {?} email
     * @param {?} password
     * @param {?} photoURL
     * @param {?} displayName
     * @return {?}
     */
    function (email, password, photoURL, displayName) {
        var _this = this;
        this.authType = 'email';
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.updateProfile(displayName, photoURL);
            _this.sendEmailVerification();
        }));
    };
    /**
     * @param {?} phoneNo
     * @return {?}
     */
    AuthenticationService.prototype.signInWithPhone = /**
     * @param {?} phoneNo
     * @return {?}
     */
    function (phoneNo) {
        this.authType = 'phone';
        /** @type {?} */
        var appVerifier = this.windowRef.recaptchaVerifier;
        return this.afAuth.auth.signInWithPhoneNumber(phoneNo, appVerifier);
    };
    /**
     * @param {?} phoneNo
     * @return {?}
     */
    AuthenticationService.prototype.resend = /**
     * @param {?} phoneNo
     * @return {?}
     */
    function (phoneNo) {
        this.authType = 'phone';
        /** @type {?} */
        var appVerifier = this.windowRef.recaptchaVerifier;
        return this.afAuth.auth.signInWithPhoneNumber(phoneNo, appVerifier);
    };
    /**
     * @param {?} otp
     * @return {?}
     */
    AuthenticationService.prototype.verifyOTP = /**
     * @param {?} otp
     * @return {?}
     */
    function (otp) {
        this.authType = 'phone';
        return this.windowRef.confirmationResult.confirm(otp);
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.logOut = /**
     * @return {?}
     */
    function () {
        this.authInfo = null;
        return this.afAuth.auth.signOut();
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.getauthDetails = /**
     * @return {?}
     */
    function () {
        return this.authInfo;
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.sendEmailVerification = /**
     * @return {?}
     */
    function () {
        this.afAuth.auth.currentUser.sendEmailVerification();
    };
    /**
     * @param {?} displayName
     * @param {?} photoURL
     * @return {?}
     */
    AuthenticationService.prototype.updateProfile = /**
     * @param {?} displayName
     * @param {?} photoURL
     * @return {?}
     */
    function (displayName, photoURL) {
        return this.afAuth.auth.currentUser.updateProfile({ displayName: displayName, photoURL: photoURL });
    };
    /**
     * @param {?} newPassword
     * @return {?}
     */
    AuthenticationService.prototype.updatePassword = /**
     * @param {?} newPassword
     * @return {?}
     */
    function (newPassword) {
        return this.afAuth.auth.currentUser.updatePassword(newPassword);
    };
    /**
     * @return {?}
     */
    AuthenticationService.prototype.isEmailVerified = /**
     * @return {?}
     */
    function () {
        return this.authInfo.emailVerified;
    };
    AuthenticationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthenticationService.ctorParameters = function () { return [
        { type: AngularFireAuth }
    ]; };
    /** @nocollapse */ AuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: AuthenticationService, providedIn: "root" });
    return AuthenticationService;
}());
export { AuthenticationService };
if (false) {
    /** @type {?} */
    AuthenticationService.prototype.authInfo;
    /** @type {?} */
    AuthenticationService.prototype.windowRef;
    /** @type {?} */
    AuthenticationService.prototype.mode;
    /** @type {?} */
    AuthenticationService.prototype.authType;
    /** @type {?} */
    AuthenticationService.prototype.afAuth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFJcEM7SUFRRSwrQkFBbUIsTUFBc0I7UUFBekMsaUJBa0JFO1FBbEJpQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUp6QyxhQUFRLEdBQUMsSUFBSSxDQUFDO1FBR2QsYUFBUSxHQUFDLElBQUksQ0FBQztRQUVaLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFHLEtBQUksQ0FBQyxRQUFRLElBQUUsT0FBTyxFQUFDO2dCQUN4QixJQUFHLEdBQUcsRUFBQztvQkFDTCxJQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUM7d0JBQ25CLEtBQUksQ0FBQyxJQUFJLEdBQUMsWUFBWSxDQUFBO3FCQUN2Qjt5QkFDRzt3QkFDRixLQUFJLENBQUMsSUFBSSxHQUFDLGFBQWEsQ0FBQTtxQkFDeEI7aUJBQ0Y7YUFDRjtpQkFDSSxJQUFHLEtBQUksQ0FBQyxRQUFRLElBQUUsT0FBTyxFQUFDO2dCQUM3QixLQUFJLENBQUMsSUFBSSxHQUFDLFlBQVksQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFBO0lBQ0gsQ0FBQzs7OztJQUVGLCtDQUFlOzs7SUFBZjtRQUNFLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNmLE9BQU8sSUFBSSxDQUFD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QUMsQ0FBQTtJQUNqRSxDQUFDOzs7O0lBQ0QsK0NBQWU7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQTtJQUNwQyxDQUFDOztnQkF0RkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxlQUFlOzs7Z0NBRHhCO0NBaUdDLEFBM0ZELElBMkZDO1NBeEZZLHFCQUFxQjs7O0lBQ2hDLHlDQUFjOztJQUNkLDBDQUFjOztJQUNkLHFDQUFLOztJQUNMLHlDQUFjOztJQUNGLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJzsgXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgYXV0aEluZm89bnVsbDtcbiAgd2luZG93UmVmOmFueTtcbiAgbW9kZTtcbiAgYXV0aFR5cGU9bnVsbDtcbiAgY29uc3RydWN0b3IocHVibGljIGFmQXV0aDpBbmd1bGFyRmlyZUF1dGgpIHtcbiAgICB0aGlzLndpbmRvd1JlZiA9IHdpbmRvdztcbiAgICBhZkF1dGguYXV0aFN0YXRlLnN1YnNjcmliZShyZXM9PntcbiAgICAgIHRoaXMuYXV0aEluZm89cmVzO1xuICAgICAgaWYodGhpcy5hdXRoVHlwZT09J2VtYWlsJyl7XG4gICAgICAgIGlmKHJlcyl7XG4gICAgICAgICAgaWYocmVzLmVtYWlsVmVyaWZpZWQpe1xuICAgICAgICAgICAgdGhpcy5tb2RlPSdzdWNjZXNzZnVsJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5tb2RlPSdlbWFpbHZlcmlmeSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5hdXRoVHlwZT09J3Bob25lJyl7XG4gICAgICAgIHRoaXMubW9kZT0nc3VjY2Vzc2Z1bCc7XG4gICAgICB9XG4gICAgfSlcbiAgIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKXtcbiAgICBpZih0aGlzLmF1dGhJbmZvKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBnb29nbGVMb2dpbigpIHtcbiAgICB0aGlzLmF1dGhUeXBlPSdlbWFpbCc7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBvcHVwKG5ldyBhdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpKVxuICB9XG4gIGxvZ2luV2l0aEVtYWlsKGVtYWlsOnN0cmluZyxwYXNzd29yZDpzdHJpbmcpe1xuICAgIHRoaXMuYXV0aFR5cGU9J2VtYWlsJztcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCxwYXNzd29yZCk7XG4gIH1cbiAgY3JlYXRlVXNlcldpdGhFbWFpbChlbWFpbCxwYXNzd29yZCxwaG90b1VSTCxkaXNwbGF5TmFtZSl7XG4gICAgdGhpcy5hdXRoVHlwZT0nZW1haWwnO1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCxwYXNzd29yZCkudGhlbihyZXM9PntcbiAgICAgIHRoaXMudXBkYXRlUHJvZmlsZShkaXNwbGF5TmFtZSxwaG90b1VSTCk7XG4gICAgICB0aGlzLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpXG4gICAgfSlcbiAgfVxuICBzaWduSW5XaXRoUGhvbmUocGhvbmVObykge1xuICAgIHRoaXMuYXV0aFR5cGU9J3Bob25lJztcbiAgICBjb25zdCBhcHBWZXJpZmllciA9IHRoaXMud2luZG93UmVmLnJlY2FwdGNoYVZlcmlmaWVyO1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhQaG9uZU51bWJlcihwaG9uZU5vLGFwcFZlcmlmaWVyKVxuICB9XG5cbiAgcmVzZW5kKHBob25lTm8pe1xuICAgIHRoaXMuYXV0aFR5cGU9J3Bob25lJ1xuICAgIGNvbnN0IGFwcFZlcmlmaWVyID0gdGhpcy53aW5kb3dSZWYucmVjYXB0Y2hhVmVyaWZpZXI7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBob25lTnVtYmVyKHBob25lTm8sYXBwVmVyaWZpZXIpXG4gIH1cblxuICB2ZXJpZnlPVFAob3RwKSB7XG4gICAgdGhpcy5hdXRoVHlwZT0ncGhvbmUnO1xuICAgIHJldHVybiB0aGlzLndpbmRvd1JlZi5jb25maXJtYXRpb25SZXN1bHQuY29uZmlybShvdHApXG4gIH1cblxuICBsb2dPdXQoKSB7XG4gICAgdGhpcy5hdXRoSW5mbz1udWxsO1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25PdXQoKTtcbiAgfVxuICBnZXRhdXRoRGV0YWlscygpe1xuICAgIHJldHVybiB0aGlzLmF1dGhJbmZvO1xuICB9XG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbigpe1xuICAgIHRoaXMuYWZBdXRoLmF1dGguY3VycmVudFVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcbiAgfVxuICB1cGRhdGVQcm9maWxlKGRpc3BsYXlOYW1lLHBob3RvVVJMKXtcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5jdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtkaXNwbGF5TmFtZSxwaG90b1VSTH0pXG4gIH1cbiAgdXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpe1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLmN1cnJlbnRVc2VyLnVwZGF0ZVBhc3N3b3JkKG5ld1Bhc3N3b3JkKVxuICB9XG4gIGlzRW1haWxWZXJpZmllZCgpe1xuICAgIHJldHVybiB0aGlzLmF1dGhJbmZvLmVtYWlsVmVyaWZpZWRcbiAgfVxuXG5cblxuICBcbn1cbiJdfQ==