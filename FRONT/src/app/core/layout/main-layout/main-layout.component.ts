import { BaseRutas } from './../models/base-rutas.interface';
import { MyRoute } from './../models/my-route.interface';
import { SideMenuComponent } from './../../components/side-menu/side-menu.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  @ViewChild(SideMenuComponent) menuLateral!:SideMenuComponent;
  get routes():MyRoute[]{
    return BaseRutas.rutas;
  }
}
