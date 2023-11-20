import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ServiceSeguridad } from 'src/app/services/service.seguridad';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("cajaEmail") cajaEmailRef!: ElementRef;
  @ViewChild("cajaPassword") cajaPasswordRef!: ElementRef;

  constructor(
    private _serviceSeguridad: ServiceSeguridad,
    private _router: Router
  ){}

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this._router.navigate(["/menuUsuario"]);
    }
  }

  loginUser(){
    this._serviceSeguridad.login(
      this.cajaEmailRef.nativeElement.value,
      this.cajaPasswordRef.nativeElement.value
    ).subscribe(result=>{
      localStorage.setItem("token", JSON.stringify(result.response));
      this._router.navigate(["/menuUsuario"]);

    })
  }

}
