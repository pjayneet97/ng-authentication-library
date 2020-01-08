/**
 * @fileoverview added by tsickle
 * Generated from: lib/authentication.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export class AuthenticationModule {
}
AuthenticationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AuthenticationComponent],
                imports: [
                    AngularFireModule.initializeApp({
                        apiKey: "AIzaSyCG0rcc-R7bBSSgoJD4V7FsEW9S_rCvPgc",
                        authDomain: "chat-8a723.firebaseapp.com",
                        databaseURL: "https://chat-8a723.firebaseio.com",
                        projectId: "chat-8a723",
                        storageBucket: "chat-8a723.appspot.com",
                        messagingSenderId: "868038804017",
                        appId: "1:868038804017:web:e0f3f645ba1e06a2948b10",
                        measurementId: "G-RFY323LJ3K"
                    }),
                    AngularFireAuthModule,
                    CommonModule,
                    FormsModule
                ],
                exports: [AuthenticationComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBUSxnQkFBZ0IsQ0FBQztBQXNCL0MsTUFBTSxPQUFPLG9CQUFvQjs7O1lBbkJoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7d0JBQzlCLE1BQU0sRUFBRSx5Q0FBeUM7d0JBQ2pELFVBQVUsRUFBRSw0QkFBNEI7d0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7d0JBQ2hELFNBQVMsRUFBRSxZQUFZO3dCQUN2QixhQUFhLEVBQUUsd0JBQXdCO3dCQUN2QyxpQkFBaUIsRUFBRSxjQUFjO3dCQUNqQyxLQUFLLEVBQUUsMkNBQTJDO3dCQUNsRCxhQUFhLEVBQUUsY0FBYztxQkFDOUIsQ0FBQztvQkFDRixxQkFBcUI7b0JBQ3JCLFlBQVk7b0JBQ1osV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEFuZ3VsYXJGaXJlTW9kdWxlLmluaXRpYWxpemVBcHAoe1xuICAgICAgYXBpS2V5OiBcIkFJemFTeUNHMHJjYy1SN2JCU1Nnb0pENFY3RnNFVzlTX3JDdlBnY1wiLFxuICAgICAgYXV0aERvbWFpbjogXCJjaGF0LThhNzIzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jaGF0LThhNzIzLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICBwcm9qZWN0SWQ6IFwiY2hhdC04YTcyM1wiLFxuICAgICAgc3RvcmFnZUJ1Y2tldDogXCJjaGF0LThhNzIzLmFwcHNwb3QuY29tXCIsXG4gICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4NjgwMzg4MDQwMTdcIixcbiAgICAgIGFwcElkOiBcIjE6ODY4MDM4ODA0MDE3OndlYjplMGYzZjY0NWJhMWUwNmEyOTQ4YjEwXCIsXG4gICAgICBtZWFzdXJlbWVudElkOiBcIkctUkZZMzIzTEozS1wiXG4gICAgfSksXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQXV0aGVudGljYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlIHsgfVxuIl19