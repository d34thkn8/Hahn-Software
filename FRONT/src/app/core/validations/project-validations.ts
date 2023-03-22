import { ProjectModel } from './../../main/home/model/project.interface';
import { Validator } from 'fluentvalidation-ts';

 
  export class ProjectModelValidator extends Validator<ProjectModel> {
    constructor() {
      super();
      this.ruleFor('description')
        .notEmpty()
        .withMessage('Description is required')
        .minLength(1)
        .withMessage('Min length is')
    }
  }