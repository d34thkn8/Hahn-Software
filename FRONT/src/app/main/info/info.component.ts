import { ProjectModel } from './../home/model/project.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Output() onCancel:EventEmitter<void>=new EventEmitter();
  @Output() onSave:EventEmitter<ProjectModel>=new EventEmitter();
  @Input() project!:ProjectModel;
  cancel(){
    this.onCancel.emit();
  }
  save(){
    this.onSave.emit(this.project!);
  }
}
