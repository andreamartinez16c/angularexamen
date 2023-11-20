import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceSeguridad } from 'src/app/services/service.seguridad';

@Component({
  selector: 'app-perfilseguridad',
  templateUrl: './perfilseguridad.component.html',
  styleUrls: ['./perfilseguridad.component.css']
})
export class PerfilseguridadComponent implements OnInit{
  usuario!: Usuario
  
  constructor(
    private _serviceSeguridad: ServiceSeguridad,
  ){}

  ngOnInit(): void {
    this._serviceSeguridad.getPerfil().subscribe(result=> {
      this.usuario=result
    })
  }
}
