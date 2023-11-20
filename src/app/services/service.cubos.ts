import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable()
export class ServiceCubos {
    constructor(private _http: HttpClient){}
    getCubos(): Observable<any> {
        var request = "api/cubos";
        var url = environment.apiCubos + request
        return this._http.get(url)
    }

    getMarcas(): Observable<any> {
        var request = "api/cubos/marcas";
        var url = environment.apiCubos + request
        return this._http.get(url)
    }

    getCuboMarca(marca: string): Observable<any>{
        var request = "api/cubos/cubosmarca/" + marca;
        var url = environment.apiCubos + request
        return this._http.get(url)
    }

    getCuboId(idcubo: number): Observable<any>{
        var request = "api/cubos/" + idcubo;
        var url = environment.apiCubos + request
        return this._http.get(url)
    }

    getComentariosCubo(idcubo: number): Observable<any>{
        var request = "api/ComentariosCubo/GetComentariosCubo/" + idcubo;
        var url = environment.apiCubos + request
        return this._http.get(url)
    }
}