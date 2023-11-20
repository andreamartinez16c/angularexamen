import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/Cubo';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/Comentario';


@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css']
})
export class DetallescuboComponent implements OnInit{
  public cubo!: Cubo
  public comentarios!: Array<Comentario>
  
  constructor(
    private _activateRoute: ActivatedRoute,
    private _serviceCubos: ServiceCubos
  ){}

    ngOnInit(): void {
      this._activateRoute.params.subscribe((parametros: Params) => {
        let idcubo = parametros["idcubo"]
        this._serviceCubos.getCuboId(idcubo).subscribe(result => {
          this.cubo = result
        })
        this._serviceCubos.getComentariosCubo(idcubo).subscribe(result=> {
          this.comentarios = result
        })
      })
    }
}
