import { ReplacementLib } from 'src/app/util/replacement-lib';
import { ProjectService } from './services/project.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProgressSpinnerService } from 'src/app/core/components/progress-spinner/progress-spinner/services/progress-spinner.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectModel } from './model/project.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource:MatTableDataSource<ProjectModel>;
  columnsToDisplay:string[]=['description','edit','use','delete'];
  showingInfo:boolean=false;
  editing:boolean=false;
  item!:ProjectModel;
  constructor(private projectService:ProjectService,
    private messages:ToastrService,
    private loading: ProgressSpinnerService){
      this.dataSource=new MatTableDataSource();
    }

  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadData() {
    this.loading.show({
      message:'Projects',
      succeeded:true
    });
    this.projectService.list().subscribe({
      next:(data)=>{
        
        this.dataSource.data=data;
        this.loading.hide();
      },
      error:(err)=>{
        
        this.loading.hide();
        var message=err != undefined && err.error !=undefined && err.error.errors!=undefined ? err.error.errors.Description:'';
        this.messages.error("Something happened: "+message);
      }
    })
  }
  saveEvent(data:ProjectModel){
    if(this.editing){
      this.updateApi(data);
    }else{
      this.saveApi(data);
    }
  }

  saveApi(data:ProjectModel){
    this.loading.show();
    this.projectService.add(data).subscribe({
      next:(data)=>{
        
        this.messages.success("Project added successfully");
        this.loading.hide();
        this.loadData();
        this.showingInfo=false;
      },
      error:(err)=>{
        
        this.loading.hide();
        var message=err != undefined && err.error !=undefined && err.error.errors!=undefined ? err.error.errors.Description:'';
        this.messages.error("Something happened: "+message);
      }
    })
  }
  updateApi(data:ProjectModel){
    this.loading.show();
    this.projectService.update(data.id,data).subscribe({
      next:(data)=>{
        
        this.messages.success("Project updated successfully");
        this.loading.hide();
        this.loadData();
        this.showingInfo=false;
      },
      error:(err)=>{
        
        this.loading.hide();
        var message=err != undefined && err.error !=undefined && err.error.errors!=undefined ? err.error.errors.Description:'';
        this.messages.error("Something happened: "+message);
      }
    })
  }
  edit(data:ProjectModel){
    var strData=JSON.stringify(data);
    this.item=JSON.parse(strData);
    this.showingInfo=true;
    this.editing=true;
  }
  delete(data:ProjectModel){
    this.loading.show();
    this.projectService.delete(data.id).subscribe({
      next:(data)=>{
        
        this.messages.success("Project deleted successfully");
        this.loading.hide();
        this.loadData();
      },
      error:(err)=>{
        
        this.loading.hide();
        var message=err != undefined && err.error !=undefined && err.error.errors!=undefined ? err.error.errors.Description:'';
        this.messages.error("Something happened: "+message);
      }
    })
  }
  async replace(data:ProjectModel){
    
      if(navigator.clipboard){
        this.loading.show();
        await ReplacementLib.replace(data).then((text)=>{
          this.messages.success(text);
          this.loading.hide();
        }).catch((err)=>{
          this.messages.error(err);
          this.loading.hide();
        })
      }else{
        this.messages.error("Browser not supported");
      }
  }
  add(){
    this.item={
      id:0,
      description:'',
      infoList:[]
    };
    this.showingInfo=true;
    this.editing=false;
  }

  cancel(){
    this.showingInfo=false;
    this.editing=false;
  }
 
}
