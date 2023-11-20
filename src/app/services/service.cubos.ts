import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable()
export class ServiceCubos {
    constructor(private _http: HttpClient){}
    getMarcas(): Observable<any> {
        var request = "api/departamentos";
        var url = environment.apiCubos + request
        return this._http.get(url)
    }
}