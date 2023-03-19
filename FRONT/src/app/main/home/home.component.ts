import { ProjectService } from './services/project.service';
import { SesionService } from 'src/app/core/services/sesion.services';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProgressSpinnerService } from 'src/app/core/components/progress-spinner/progress-spinner/services/progress-spinner.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectModel } from './model/project.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource:MatTableDataSource<ProjectModel>;
  columnsToDisplay:string[]=['description','edit','delete'];
  constructor(private projectService:ProjectService,
    private mensajes:ToastrService,
    private loading: ProgressSpinnerService){
      this.dataSource=new MatTableDataSource();
    }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.loading.show({
      message:'Projects',
      succeeded:true
    });
    this.projectService.list().subscribe({
      next:(data)=>{
        console.log(data);
        this.dataSource.data=data;
        this.mensajes.success("Data loaded successfully");
        this.loading.hide();
      },
      error:(err)=>{
        console.log(err);
        this.mensajes.error("Somethins happened");
        this.loading.hide();
      }
    })
  }
  edit(data:ProjectModel){

  }
  delete(data:ProjectModel){

  }
 
}
