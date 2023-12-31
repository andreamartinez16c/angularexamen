import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/Cubo';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public cubos !: Array<Cubo>
  public marca !: string

  constructor(
    private _activateRoute: ActivatedRoute,
    private _serviceCubos: ServiceCubos
  ){}
    ngOnInit(): void {
        this._serviceCubos.getCubos().subscribe(response => {
          this.marca= response
        })

      this._serviceCubos.getCubos().subscribe(response=> {
        this.cubos= response
      })
    }


}
