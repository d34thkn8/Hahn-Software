import { SesionService } from 'src/app/core/services/sesion.services';
import { MyRoute } from './../../layout/models/my-route.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(private sesion:SesionService){}

  @Input() rutas:MyRoute[]=[];
  @Output() onRouteClicked:EventEmitter<void>=new EventEmitter();
  rutasPrincipales():MyRoute[]{
    return this.rutas.filter(e=>!e.isChild && e.esLista).sort((v1,v2)=>{ return v1.label>v2.label? 1:-1});
  }
  rutasSecundarias():MyRoute[]{
    return this.rutas.filter(e=>!e.isChild && !e.esLista).sort((v1,v2)=>{ return v1.label>v2.label? 1:-1});
  }
  rutasHijas(idComun:number):MyRoute[]{
    return this.rutas.filter(e=>e.codigoGrupo1==idComun && e.mostrarDentroDeLista);
  }
  rutasNietas(idComun1:number, idComun2:number):MyRoute[]{
    return this.rutas.filter(e=>e.codigoGrupo1==idComun1 && e.codigoGrupo2==idComun2);
  }
  rutaSeleccionada(){
    this.onRouteClicked.emit();
  }
  get iniciales():string{
    var user=this.sesion.getUsuario();
    var nombre=user!=undefined ? user.nombre : "N.A"
    if(nombre.includes('.')){
      var nombres=nombre.split('.');
      var iniciales=`${nombres[0].charAt(0)} ${nombres[1].charAt(0)}`
      return iniciales.toUpperCase();
    }else{
      var nombres=nombre.split(' ');
      var iniciales=`${nombres[0].charAt(0)} ${nombres[1].charAt(0)}`
      return iniciales.toUpperCase();
    }
  }
}
