import { FormControl } from '@angular/forms';

export class PercentageValidator {

    public static isValid(control: FormControl): any {

        if (isNaN(control.value)) {
            return { 'not a number': true };
        }

        if (control.value > 100) {
            return { 'greater than 100% interest': true };
        }

        if (control.value < 0) {
            return { 'cannot be less than zero': true };
        }

        return null;
    }
}