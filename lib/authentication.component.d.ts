import { OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
export declare class AuthenticationComponent implements OnInit {
    auth: AuthenticationService;
    phone: any;
    loading: boolean;
    constructor(auth: AuthenticationService);
    ngOnInit(): void;
    signInWithGoogle(): void;
    signInWithEmail(formData: any): void;
    logOut(): void;
    sendOTP(formData: any): void;
    varify(otp: any): void;
    resend(): void;
    signupwithemail(formData: any): void;
}
