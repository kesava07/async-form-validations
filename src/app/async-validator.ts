import { SignUpService } from './signup.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';


export class AsyncFormValidator {
    static checkEmailExists(spService: SignUpService) {
        return (control: AbstractControl) => spService.checkEmail(control.value)
            .map(res => res ? null : { emailHas: true })

    }

    static checkUserName(spService: SignUpService) {
        return (control: AbstractControl) => spService.checkUserName(control.value)
            .map(res => res ? null : { hasUserName: true })

    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") !== -1)
            return { hasSpace: true }
        else return null;

    }

}