import { ProjectModel } from './../model/project.interface';
import { Observable } from 'rxjs';
import { HttpService } from './../../../core/services/http.service';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private route=environment.environment.project;
  constructor(private http:HttpService) { }
  
  list():Observable<ProjectModel[]>{
    return this.http.get(this.route);
  }
  add(data:ProjectModel):Observable<any>{
    return this.http.post(this.route,data);
  }
  getById(id:number):Observable<ProjectModel>{
    return this.http.get(`${this.route}/${id}`);
  }
  update(id:number,data:ProjectModel):Observable<any>{
    return this.http.put(`${this.route}/${id}`,data);
  }
  delete(id:number):Observable<ProjectModel>{
    return this.http.delete(`${this.route}/${id}`);
  }
}
