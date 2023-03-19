

import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import { Cifrado } from 'src/app/util/cifrado';
import { Usuario } from 'src/app/security/models/usuario-response';


@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private static readonly KEY_USUARIO = "app.usuario";
  private static readonly KEY_ACCESOS = "app.accesos";

  constructor(
    private router: Router,
  ) { }

  private getStorage(): Storage {
    return sessionStorage;
  }

  public setAccesos(accesos: string): void {
    this.getStorage().setItem(SesionService.KEY_ACCESOS, Cifrado.encryptData(accesos));
  }
  public getAccesos(): string|undefined {
    let accesos = this.getStorage().getItem(SesionService.KEY_ACCESOS);
    return accesos ? Cifrado.decryptData(accesos) : undefined;
  }
  public setUsuario(usuario: Usuario): void {
    this.getStorage().setItem(SesionService.KEY_USUARIO, Cifrado.encryptData(JSON.stringify(usuario)));
  }

  public getUsuario(): Usuario {
    let usuario = this.getStorage().getItem(SesionService.KEY_USUARIO);
    return usuario ? JSON.parse(Cifrado.decryptData(usuario)) : undefined;
  }
  


  public cerrarSesion(): void {
    this.getStorage().clear();
    //this.router.navigateByUrl('');
  }


}
