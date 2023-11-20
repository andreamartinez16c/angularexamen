import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { ServiceSeguridad } from 'src/app/services/service.seguridad';

@Component({
  selector: 'app-perfilseguridad',
  templateUrl: './perfilseguridad.component.html',
  styleUrls: ['./perfilseguridad.component.css']
})
export class PerfilseguridadComponent implements OnInit{
  compras!: Array<Compra>
  
  constructor(
    private _serviceSeguridad: ServiceSeguridad,
  ){}

  ngOnInit(): void {
    this._serviceSeguridad.getCompras().subscribe(result=> {
      this.compras=result
    })
  }
}
