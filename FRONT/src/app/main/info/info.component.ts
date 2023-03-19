import { InfoModel } from './../home/model/info.interface';
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
  valorX:string="";
  input:string="";
  output:string="";
  valorY:string="";
  add(){
    this.project.infoList.push({
      valueX:this.valorX,
      valueY:this.valorY,
      id:0,
      projectId:this.project.id
    });
  }
  eliminar(item:InfoModel){
    var indice=this.project.infoList.indexOf(item);
    if(indice>=0){
      this.project.infoList.splice(indice,1);
    }
  }
  reemplazar() {
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
    this.onSave.emit(this.project!);
  }
}
