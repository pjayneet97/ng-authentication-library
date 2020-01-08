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
export class AuthenticationService {
    /**
     * @param {?} afAuth
     */
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.authInfo = null;
        this.authType = null;
        this.windowRef = window;
        afAuth.authState.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.authInfo = res;
            if (this.authType == 'email') {
                if (res) {
                    if (res.emailVerified) {
                        this.mode = 'successful';
                    }
                    else {
                        this.mode = 'emailverify';
                    }
                }
            }
            else if (this.authType == 'phone') {
                this.mode = 'successful';
            }
        }));
    }
    /**
     * @return {?}
     */
    isAuthenticated() {
        if (this.authInfo) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    googleLogin() {
        this.authType = 'email';
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    loginWithEmail(email, password) {
        this.authType = 'email';
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    /**
     * @param {?} email
     * @param {?} password
     * @param {?} photoURL
     * @param {?} displayName
     * @return {?}
     */
    createUserWithEmail(email, password, photoURL, displayName) {
        this.authType = 'email';
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.updateProfile(displayName, photoURL);
            this.sendEmailVerification();
        }));
    }
    /**
     * @param {?} phoneNo
     * @return {?}
     */
    signInWithPhone(phoneNo) {
        this.authType = 'phone';
        /** @type {?} */
        const appVerifier = this.windowRef.recaptchaVerifier;
        return this.afAuth.auth.signInWithPhoneNumber(phoneNo, appVerifier);
    }
    /**
     * @param {?} phoneNo
     * @return {?}
     */
    resend(phoneNo) {
        this.authType = 'phone';
        /** @type {?} */
        const appVerifier = this.windowRef.recaptchaVerifier;
        return this.afAuth.auth.signInWithPhoneNumber(phoneNo, appVerifier);
    }
    /**
     * @param {?} otp
     * @return {?}
     */
    verifyOTP(otp) {
        this.authType = 'phone';
        return this.windowRef.confirmationResult.confirm(otp);
    }
    /**
     * @return {?}
     */
    logOut() {
        this.authInfo = null;
        return this.afAuth.auth.signOut();
    }
    /**
     * @return {?}
     */
    getauthDetails() {
        return this.authInfo;
    }
    /**
     * @return {?}
     */
    sendEmailVerification() {
        this.afAuth.auth.currentUser.sendEmailVerification();
    }
    /**
     * @param {?} displayName
     * @param {?} photoURL
     * @return {?}
     */
    updateProfile(displayName, photoURL) {
        return this.afAuth.auth.currentUser.updateProfile({ displayName, photoURL });
    }
    /**
     * @param {?} newPassword
     * @return {?}
     */
    updatePassword(newPassword) {
        return this.afAuth.auth.currentUser.updatePassword(newPassword);
    }
    /**
     * @return {?}
     */
    isEmailVerified() {
        return this.authInfo.emailVerified;
    }
}
AuthenticationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthenticationService.ctorParameters = () => [
    { type: AngularFireAuth }
];
/** @nocollapse */ AuthenticationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.AngularFireAuth)); }, token: AuthenticationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFPcEMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUtoQyxZQUFtQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUp6QyxhQUFRLEdBQUMsSUFBSSxDQUFDO1FBR2QsYUFBUSxHQUFDLElBQUksQ0FBQztRQUVaLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQSxFQUFFO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDO1lBQ2xCLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBRSxPQUFPLEVBQUM7Z0JBQ3hCLElBQUcsR0FBRyxFQUFDO29CQUNMLElBQUcsR0FBRyxDQUFDLGFBQWEsRUFBQzt3QkFDbkIsSUFBSSxDQUFDLElBQUksR0FBQyxZQUFZLENBQUE7cUJBQ3ZCO3lCQUNHO3dCQUNGLElBQUksQ0FBQyxJQUFJLEdBQUMsYUFBYSxDQUFBO3FCQUN4QjtpQkFDRjthQUNGO2lCQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBRSxPQUFPLEVBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUMsWUFBWSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSCxDQUFDOzs7O0lBRUYsZUFBZTtRQUNiLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNmLE9BQU8sSUFBSSxD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QUUsTUFBTTthQUNuQjs7OztZQVBRLGVBQWU7Ozs7O0lBU3RCLHlDQUFjOztJQUNkLDBDQUFjOztJQUNkLHFDQUFLOztJQUNMLHlDQUFjOztJQUNGLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJzsgXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgYXV0aEluZm89bnVsbDtcbiAgd2luZG93UmVmOmFueTtcbiAgbW9kZTtcbiAgYXV0aFR5cGU9bnVsbDtcbiAgY29uc3RydWN0b3IocHVibGljIGFmQXV0aDpBbmd1bGFyRmlyZUF1dGgpIHtcbiAgICB0aGlzLndpbmRvd1JlZiA9IHdpbmRvdztcbiAgICBhZkF1dGguYXV0aFN0YXRlLnN1YnNjcmliZShyZXM9PntcbiAgICAgIHRoaXMuYXV0aEluZm89cmVzO1xuICAgICAgaWYodGhpcy5hdXRoVHlwZT09J2VtYWlsJyl7XG4gICAgICAgIGlmKHJlcyl7XG4gICAgICAgICAgaWYocmVzLmVtYWlsVmVyaWZpZWQpe1xuICAgICAgICAgICAgdGhpcy5tb2RlPSdzdWNjZXNzZnVsJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5tb2RlPSdlbWFpbHZlcmlmeSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy5hdXRoVHlwZT09J3Bob25lJyl7XG4gICAgICAgIHRoaXMubW9kZT0nc3VjY2Vzc2Z1bCc7XG4gICAgICB9XG4gICAgfSlcbiAgIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKXtcbiAgICBpZih0aGlzLmF1dGhJbmZvKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBnb29nbGVMb2dpbigpIHtcbiAgICB0aGlzLmF1dGhUeXBlPSdlbWFpbCc7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBvcHVwKG5ldyBhdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpKVxuICB9XG4gIGxvZ2luV2l0aEVtYWlsKGVtYWlsOnN0cmluZyxwYXNzd29yZDpzdHJpbmcpe1xuICAgIHRoaXMuYXV0aFR5cGU9J2VtYWlsJztcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCxwYXNzd29yZCk7XG4gIH1cbiAgY3JlYXRlVXNlcldpdGhFbWFpbChlbWFpbCxwYXNzd29yZCxwaG90b1VSTCxkaXNwbGF5TmFtZSl7XG4gICAgdGhpcy5hdXRoVHlwZT0nZW1haWwnO1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCxwYXNzd29yZCkudGhlbihyZXM9PntcbiAgICAgIHRoaXMudXBkYXRlUHJvZmlsZShkaXNwbGF5TmFtZSxwaG90b1VSTCk7XG4gICAgICB0aGlzLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpXG4gICAgfSlcbiAgfVxuICBzaWduSW5XaXRoUGhvbmUocGhvbmVObykge1xuICAgIHRoaXMuYXV0aFR5cGU9J3Bob25lJztcbiAgICBjb25zdCBhcHBWZXJpZmllciA9IHRoaXMud2luZG93UmVmLnJlY2FwdGNoYVZlcmlmaWVyO1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25JbldpdGhQaG9uZU51bWJlcihwaG9uZU5vLGFwcFZlcmlmaWVyKVxuICB9XG5cbiAgcmVzZW5kKHBob25lTm8pe1xuICAgIHRoaXMuYXV0aFR5cGU9J3Bob25lJ1xuICAgIGNvbnN0IGFwcFZlcmlmaWVyID0gdGhpcy53aW5kb3dSZWYucmVjYXB0Y2hhVmVyaWZpZXI7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmF1dGguc2lnbkluV2l0aFBob25lTnVtYmVyKHBob25lTm8sYXBwVmVyaWZpZXIpXG4gIH1cblxuICB2ZXJpZnlPVFAob3RwKSB7XG4gICAgdGhpcy5hdXRoVHlwZT0ncGhvbmUnO1xuICAgIHJldHVybiB0aGlzLndpbmRvd1JlZi5jb25maXJtYXRpb25SZXN1bHQuY29uZmlybShvdHApXG4gIH1cblxuICBsb2dPdXQoKSB7XG4gICAgdGhpcy5hdXRoSW5mbz1udWxsO1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLnNpZ25PdXQoKTtcbiAgfVxuICBnZXRhdXRoRGV0YWlscygpe1xuICAgIHJldHVybiB0aGlzLmF1dGhJbmZvO1xuICB9XG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbigpe1xuICAgIHRoaXMuYWZBdXRoLmF1dGguY3VycmVudFVzZXIuc2VuZEVtYWlsVmVyaWZpY2F0aW9uKClcbiAgfVxuICB1cGRhdGVQcm9maWxlKGRpc3BsYXlOYW1lLHBob3RvVVJMKXtcbiAgICByZXR1cm4gdGhpcy5hZkF1dGguYXV0aC5jdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtkaXNwbGF5TmFtZSxwaG90b1VSTH0pXG4gIH1cbiAgdXBkYXRlUGFzc3dvcmQobmV3UGFzc3dvcmQpe1xuICAgIHJldHVybiB0aGlzLmFmQXV0aC5hdXRoLmN1cnJlbnRVc2VyLnVwZGF0ZVBhc3N3b3JkKG5ld1Bhc3N3b3JkKVxuICB9XG4gIGlzRW1haWxWZXJpZmllZCgpe1xuICAgIHJldHVybiB0aGlzLmF1dGhJbmZvLmVtYWlsVmVyaWZpZWRcbiAgfVxuXG5cblxuICBcbn1cbiJdfQ==