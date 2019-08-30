import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from './signup.service';
import { AsyncFormValidator } from './async-validator';

@Component({
    selector: 'app-root',
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [SignUpService]
})

export class AppComponent {

    signUpForm;

    constructor(private fb: FormBuilder, private spService: SignUpService) {
        this.signUpForm = this.fb.group({
            userName: ["", [Validators.required, AsyncFormValidator.cannotContainSpace],
                AsyncFormValidator.checkUserName(this.spService)
            ],
            email: ["",
                [Validators.required, Validators.email],
                AsyncFormValidator.checkEmailExists(this.spService)
            ],
            password: ["", [Validators.required, Validators.minLength(6)]]
        })
    }

    handleLogin() {
        console.log(this.signUpForm)
    }

    get email() {
        return this.signUpForm.get("email")
    }

    get password() {
        return this.signUpForm.get("password")
    }

    get userName() {
        return this.signUpForm.get("userName")
    }

}