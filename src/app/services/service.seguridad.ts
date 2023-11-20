import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from "src/environments/environment";

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


}