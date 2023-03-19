import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { GenericResponse } from 'src/app/core/models/generic-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgressSpinnerService {

  private _visible: BehaviorSubject<GenericResponse>;
  private ruta:string=environment.environment.seguridad;


  constructor(private router: Router) {
    this._visible = new  BehaviorSubject<GenericResponse>({succeeded:false,message:"Cargando"});
    this.init();
  }

  private init(): void {
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationStart))
    //   .subscribe(() => {
    //     this.show();
    //   });

    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel))
    //   .subscribe(() => {
    //     this.hide();
    //   });
  }

  get visible(): Observable<any> {
    return this._visible.asObservable();
  }

  show(data:GenericResponse={succeeded:true, message:"Cargando"}): void {
    this._visible.next(data);
  }

  hide(): void {
    this._visible.next({succeeded:false, message:"Cargando"});
  }


}