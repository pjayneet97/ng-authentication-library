import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
export declare class AuthenticationService {
    afAuth: AngularFireAuth;
    authInfo: any;
    windowRef: any;
    mode: any;
    authType: any;
    constructor(afAuth: AngularFireAuth);
    isAuthenticated(): boolean;
    googleLogin(): Promise<auth.UserCredential>;
    loginWithEmail(email: string, password: string): Promise<auth.UserCredential>;
    createUserWithEmail(email: any, password: any, photoURL: any, displayName: any): Promise<void>;
    signInWithPhone(phoneNo: any): Promise<auth.ConfirmationResult>;
    resend(phoneNo: any): Promise<auth.ConfirmationResult>;
    verifyOTP(otp: any): any;
    logOut(): Promise<void>;
    getauthDetails(): any;
    sendEmailVerification(): void;
    updateProfile(displayName: any, photoURL: any): Promise<void>;
    updatePassword(newPassword: any): Promise<void>;
    isEmailVerified(): any;
}
