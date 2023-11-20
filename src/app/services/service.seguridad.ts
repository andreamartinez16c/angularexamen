import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Usuario } from "../models/Usuario";

@Injectable()
export class ServiceSeguridad {
    constructor(private _http: HttpClient){}
    login(email: string, password: string): Observable<any> {
        let usuario={
            email: email,
            password: password
        }
        var request = "api/manage/login";
        var url = environment.apiCubos + request
        return this._http.post(url, usuario)
    }

    getPerfil():Observable<any>{
        var request = "/api/manage/perfilusuario";
        var url = environment.apiCubos + request
        let token= localStorage.getItem("token")
        if (token !== null){
            token = JSON.parse(token)
        }
        let headers = {headers: { Authorization: `Bearer ${token}` }}
        return this._http.get(url, headers)
    }

    getCompras():Observable<any>{
        var request = "/api/compra/comprasusuario";
        var url = environment.apiCubos + request
        let token= localStorage.getItem("token")
        if (token !== null){
            token = JSON.parse(token)
        }
        let header = {
            'Content-Type': 'application/json', Authorization: `Bearer ${token}`
        }
        return this._http.get(url, {headers: header})
    }

    insertCompra(idcubo: number):Observable<any>{
        var request = "/api/compra/insertarpedido/" + idcubo;
        var url = environment.apiCubos + request
        let token= localStorage.getItem("token")
        if (token !== null){
            token = JSON.parse(token)
        }
        let headers = {headers: { Authorization: `Bearer ${token}` }}
        return this._http.post(url, '', headers)
    }

    insertUsuario(usuario: Usuario):Observable<any>{
        var request = "/api/Manage/RegistroUsuario";
        var url = environment.apiCubos + request
        return this._http.post(url, usuario)
    }
}