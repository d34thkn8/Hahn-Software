import { InfoModel } from './../../main/home/model/info.interface';
import { Validator } from 'fluentvalidation-ts';
export class InfoModelValidator extends Validator<InfoModel> {
    constructor() {
      super();
      this.ruleFor('valueX')
        .notEmpty()
        .withMessage('ValueX is required')
        .minLength(1)
        .withMessage('Min length is')
    }
  }