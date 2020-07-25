import { Injectable } from '@angular/core'
import { Crypter } from './crypter.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: "root"
})

export class AuthService{

    private URL:string = "http://127.0.0.1:8080/Sesion/{0}";

    constructor(private CRYPTER: Crypter, private HTTP: HttpClient){}
    
    public iniciarSesion(USER:object): Observable<Object>{
            return this.HTTP.post(this.URL.format("IniciarSesion"),{
                                                                    Usuario: USER['USER_NAME'],
                                                                    Password: USER['USER_PASSWORD'] 
                                                                    });
    }

    public setSession(SESSION:any){
        this.CRYPTER.SECURE_STORAGE.setItem("SESSION",SESSION)
    }

    public getSession(){
        return this.CRYPTER.SECURE_STORAGE.getItem("SESSION")
    }

    public accessToken(){
        return this.CRYPTER.SECURE_STORAGE.getItem("SESSION")["access_token"];
    }

    public deleteSession(){
        this.CRYPTER.SECURE_STORAGE.clear()
    }

}