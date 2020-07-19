import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoginService } from 'src/services/login.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    
    PERFORMING_TRANSACTION = false; // if an action is being perfomed
    ERROR:Boolean = false; // indicate if error ocurred
    ERROR_MESSAGE:String = "Excepción no controlada";
    YEAR = new Date().getFullYear();
    FORM_LOGIN = new FormGroup({
        USER_NAME : new FormControl('',Validators.required),
        USER_PASSWORD : new FormControl('',Validators.required)

    });

    constructor(private SERVICE_LOGIN: LoginService, private CHANGE_DETECTOR: ChangeDetectorRef){}

    submitEvent ($evt){
        this.ERROR = false;
        if (!this.FORM_LOGIN.valid) {
            this.ERROR = true;
            this.ERROR_MESSAGE = "Datos no validos";
            return;
        }
        $evt.preventDefault()
        this.PERFORMING_TRANSACTION = true;
        this.SERVICE_LOGIN.iniciarSesion(this.FORM_LOGIN.value).subscribe(this.SUCCESS_CALLBACK,this.ERROR_CALLBACK).add(this.FINISHED_CALLBACK)
    }

    SUCCESS_CALLBACK = (response) => {
        if (response.Id == null){
            this.ERROR = true;
            this.ERROR_MESSAGE = "Ha ocurrido un error";
            return;
        }
        if (response.Id == ""){
            this.ERROR = true;
            this.ERROR_MESSAGE = "Usuario y/o contraseña incorrecto";
            return;
        }
        if ((response.Id != "" && response.Id != null) && response.Enabled == false){
            this.ERROR = true;
            this.ERROR_MESSAGE = "Usuario no tiene permitido iniciar sesión";
            return;
        }
        this.ERROR = true;
        this.ERROR_MESSAGE = "Session Iniciada"; 
          
    }

    ERROR_CALLBACK = (error) => {
        this.ERROR = true;
        this.ERROR_MESSAGE = "Fallo al contactar al servicio SCADA"
    }

    FINISHED_CALLBACK = () => {
        this.PERFORMING_TRANSACTION = false;
        this.CHANGE_DETECTOR.detectChanges()
    }
}

