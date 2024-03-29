import { ProjectModelValidator } from './../../core/validations/project-validations';
import { ProgressSpinnerService } from 'src/app/core/components/progress-spinner/progress-spinner/services/progress-spinner.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { InfoModel } from './../home/model/info.interface';
import { ProjectModel } from './../home/model/project.interface';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InfoModelValidator } from 'src/app/core/validations/info-validations';
import { ReplacementLib } from 'src/app/util/replacement-lib';
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
  dataSource:MatTableDataSource<InfoModel>;
  valueX: string="";
  valueY: string="";
  constructor(private messages:ToastrService,
    private spinner:ProgressSpinnerService){
    this.dataSource=new MatTableDataSource();
  }
  ngOnInit(): void {
    this.dataSource.data=this.project.infoList;
  }
  add(){
    var validator=new InfoModelValidator();
    var data:InfoModel={
      valueX:this.valueX,
      valueY:this.valueY,
      id:0,
      projectId:this.project.id
    };
    var validationResult=validator.validate(data);
    if(validationResult.valueX!=undefined){
      this.messages.error(validationResult.valueX);
      return;
    }
    this.project.infoList.push(data);
    this.dataSource.data=this.project.infoList;
    this.valueX="";
    this.valueY="";
  }
  delete(item:InfoModel){
    var indice=this.project.infoList.indexOf(item);
    if(indice>=0){
      this.project.infoList.splice(indice,1);
      this.dataSource.data=this.project.infoList;
    }
  }

  replace() {
    let out = this.input;
    this.project.infoList.forEach(el => {
      out = ReplacementLib.replaceText(out,el.valueX, el.valueY);
    });
    this.output = out;
  }
  
  async replaceAuto(){
    if(navigator.clipboard){
      this.spinner.show();
      await ReplacementLib.replace(this.project).then((text)=>{
        this.messages.success(text);
        this.spinner.hide();
      }).catch((err)=>{
        this.messages.error(err);
        this.spinner.hide();
      })
    }else{
      this.messages.error("Browser not supported");
    }
  }
  cancel(){
    this.onCancel.emit();
  }
  save(){
    var validator=new ProjectModelValidator();
    var validationResult=validator.validate(this.project);
    if(validationResult.description!=undefined){
      this.messages.error(validationResult.description);
      return;
    }
    this.onSave.emit(this.project!);
  }
}
