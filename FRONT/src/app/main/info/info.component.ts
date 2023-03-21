import { InfoModel } from './../home/model/info.interface';
import { ProjectModel } from './../home/model/project.interface';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { RequiredLenght1 } from 'src/app/core/validations/project-validations';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Output() onCancel:EventEmitter<void>=new EventEmitter();
  @Output() onSave:EventEmitter<ProjectModel>=new EventEmitter();
  @Input() project!:ProjectModel;
  
  columnsToDisplay:string[]=['valueX','valueY','delete'];
  input:string="";
  output:string="";
  projectForm:FormGroup;
  infoForm :FormGroup;
  get description() {
    return this.projectForm.get('description');
  }
  get valueX() {
    return this.infoForm.get('valueX');
  }
  constructor(private fb: FormBuilder){
    this.projectForm=this.fb.group({
      description: ['', RequiredLenght1],
    });
    this.infoForm = this.fb.group({
      valueX: ['', RequiredLenght1],
      valueY: ['']
    });
  }
  ngOnInit(): void {
    this.projectForm.get('description')?.setValue(this.project.description);
  }
  add(){
    this.project.infoList.push({
      valueX:this.infoForm.get('valueX')?.value!,
      valueY:this.infoForm.get('valueY')?.value!,
      id:0,
      projectId:this.project.id
    });
    this.infoForm.get('valueX')?.setValue('');
    this.infoForm.get('valueY')?.setValue('');
  }
  delete(item:InfoModel){
    var indice=this.project.infoList.indexOf(item);
    if(indice>=0){
      this.project.infoList.splice(indice,1);
    }
  }
  replace() {
    let out = this.input;
    this.project.infoList.forEach(el => {
      const searchEscaped = el.valueX.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(searchEscaped, 'g');
      out = out.replace(regex, el.valueY);
    });
    this.output = out;
  }
  cancel(){
    this.onCancel.emit();
  }
  save(){
    this.project.description=this.projectForm.get('description')?.value!;
    this.onSave.emit(this.project!);
  }
}
