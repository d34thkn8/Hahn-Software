import { ToolBarComponent } from './../components/tool-bar/tool-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    SideMenuComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
