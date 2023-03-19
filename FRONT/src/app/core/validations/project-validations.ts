import { AbstractControl } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export function RequiredLenght1(control: AbstractControl): { [key: string]: any } | null {
    return RxwebValidators.compose({
      validators: [
        RxwebValidators.required(),
        RxwebValidators.minLength({value: 1})
      ],
      conditionalExpression: () => {
        return true; // Agrega una expresión condicional si es necesario
      }
    })(control);
  }

