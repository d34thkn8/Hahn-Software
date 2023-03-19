import { GenericResponse } from './../../../models/generic-response.interface';
import { ProgressSpinnerService } from './services/progress-spinner.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressSpinnerComponent implements OnInit, OnDestroy {
  
  private _unsubscribeAll: Subject<any>;

  constructor(private spinner: NgxSpinnerService,
    private ugProgressSpinnerService: ProgressSpinnerService
    ) {
    this._unsubscribeAll = new Subject();
  }
  etiqueta:GenericResponse={
    message:"Cargando",
    succeeded:false
  }
  ngOnInit(): void {
    this.ugProgressSpinnerService.visible
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((visible:GenericResponse) => {
      if (visible.succeeded){
        this.etiqueta=visible;
        this.spinner.show("spinnerLoading");
      }else {
        this.etiqueta=visible;
        this.spinner.hide("spinnerLoading");
      }
      
    });


  }

  ngOnDestroy(): void {
     this._unsubscribeAll.next(null);
     this._unsubscribeAll.complete();
  }

}

