import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: "root"
})

export class DevicesService{

    //private URL:string = "http://127.0.0.1:8080/Controles/{0}";
    private URL:string = "https://apiscada.herokuapp.com/Controles/{0}";

    constructor(private HTTP_CLIENT: HttpClient,private AUTH_SERVICE: AuthService){}


    public obtenerProyectos(): Observable<any>{
        return this.HTTP_CLIENT.get(this.URL.format("MostrarTodos"));
    }



}