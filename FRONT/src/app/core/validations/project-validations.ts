import { AbstractControl } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export function ValidateDescription(control: AbstractControl) {
  return RxwebValidators.required()(control) &&
         RxwebValidators.minLength({value: 1})(control);
}

export function ValidateInfoValueX(control: AbstractControl) {
  return RxwebValidators.required()(control);
}
