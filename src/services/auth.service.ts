import { Injectable } from '@angular/core'
import { Crypter } from './crypter.service';

@Injectable({
    providedIn: "root"
})

export class AuthService{

    constructor(private CRYPTER: Crypter){}

    public setItem(key:string,data:any){
        this.CRYPTER.SECURE_STORAGE.setItem(key,data)
    }

    public getItem(key){
        return this.CRYPTER.SECURE_STORAGE.getItem(key)
    }

    public clear(){
        this.CRYPTER.SECURE_STORAGE.clear()
    }
        
    /* private URL:string = "http://127.0.0.1:8080/Sesion/{0}"
    
    constructor (private http: HttpClient){}

    public iniciarSesion(USER:object): Observable<Object>{ //Returns an observable object
            return this.http.post(this.URL.format("IniciarSesion"),{
            Usuario: USER['USER_NAME'],
            Password: USER['USER_PASSWORD'] });
    } */



}