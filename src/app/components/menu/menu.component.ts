import { Component } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public marcas !: Array<String>
  constructor(private _serviceCubos: ServiceCubos){}
  ngOnInit(): void {
    this._serviceCubos.getMarcas().subscribe(response => {
      this.marcas = response;
    })
  }
}
