import { Router } from '@angular/router';
import { SesionService } from './../../services/sesion.services';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  
  @Output() abrirCerrar:EventEmitter<void>=new EventEmitter();
  nombre:string="Sergio";
  constructor(private sesion:SesionService,
    private router:Router){}
  ngOnInit(): void {
    var usuario=this.sesion.getUsuario();
    if(usuario!=undefined){
      if(usuario.nombre.includes('.')){
        var nombres=usuario.nombre.split('.');
        this.nombre=`${nombres[0]} ${nombres[1]}`
      }else{
        this.nombre=usuario.nombre;
      }
      
    }
  }
  logout(){
    this.sesion.cerrarSesion();
    this.router.navigate(['']);
  }
  toogle(){
    this.abrirCerrar.emit();
  }
}
