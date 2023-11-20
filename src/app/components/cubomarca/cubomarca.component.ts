import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/Cubo';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cubomarca',
  templateUrl: './cubomarca.component.html',
  styleUrls: ['./cubomarca.component.css']
})
export class CubomarcaComponent implements OnInit{
  public cubos !: Array<Cubo>
  public marca !: string

  constructor(
    private _activateRoute: ActivatedRoute,
    private _serviceCubos: ServiceCubos
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((parametros: Params)=> {
      this.marca= parametros['marca']
      console.log(this.marca)
      this._serviceCubos.getCuboMarca(this.marca).subscribe(response => {
        this.cubos= response
      })
    })
  }
}
