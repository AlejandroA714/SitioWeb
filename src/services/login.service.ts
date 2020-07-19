import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: "root"
})

export class LoginService{

    private URL:string = "http://127.0.0.1:8080/Sesion/{0}"
    
    constructor (private http: HttpClient){}

    public iniciarSesion(USER:object): Observable<Object>{ //Returns an observable object
            return this.http.post(this.URL.format("IniciarSesion"),{
            Usuario: USER['USER_NAME'],
            Password: USER['USER_PASSWORD'] });
    }

}