import { NgxSpinnerModule } from 'ngx-spinner';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports:[ProgressSpinnerComponent],
})
export class ProgressSpinnerModule { }
