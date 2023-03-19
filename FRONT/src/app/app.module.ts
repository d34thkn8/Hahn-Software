import { CUSTOM_DATE_FORMATS } from './core/date-formats/custom-date-formats';
import { MainModule } from './main/main.module';
import { LayoutModule } from './core/layout/layout.module';
import { APP_INITIALIZER,CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppInitService } from './core/services/app-init.service';
import { AppComponent } from './app.component';
import { ProgressSpinnerModule } from './core/components/progress-spinner/progress-spinner.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { authInterceptorProviders } from './security/auth.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init(); 
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MainModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastrModule.forRoot({progressBar: true, enableHtml:true, timeOut: 3000 } ),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
  ],
  providers: [AppInitService,{
    provide:APP_INITIALIZER,
    useFactory:init_app,
    deps:[AppInitService],
    multi:true
  }, authInterceptorProviders,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  },
],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
