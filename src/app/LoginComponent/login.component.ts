import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ERROR } from 'src/models/error';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  PERFORMING_TRANSACTION = false; // if an action is being perfomed
  ERROR:ERROR =  new ERROR();
  YEAR = new Date().getFullYear();
  FORM_LOGIN = new FormGroup({
          USER_NAME : new FormControl('', [Validators.required, Validators.minLength(6)]),
      USER_PASSWORD : new FormControl('', [Validators.required,Validators.minLength(6)])

  });

  constructor(private AUTH_SERVICE: AuthService, private CHANGE_DETECTOR: ChangeDetectorRef, private ROUTER: Router){}

  ngOnInit(){
    
    this.AUTH_SERVICE.setItem("SESSION",{
          Nombre:"ALejandro",
          Apellido: "Alejo"
      })
      console.log(this.AUTH_SERVICE.getItem("SESSION"))   
  }

  submitEvent ($evt){
      this.ERROR.OCURRED = false;
      if (!this.FORM_LOGIN.valid) {
          this.ERROR.OCURRED = true;
          this.ERROR.MESSAGE = "Datos no validos";
          return;
      }
      $evt.preventDefault()
      this.PERFORMING_TRANSACTION = true;
      this.AUTH_SERVICE.iniciarSesion(this.FORM_LOGIN.value).subscribe(this.SUCCESS_CALLBACK,this.ERROR_CALLBACK).add(this.FINISHED_CALLBACK)
  }

  SUCCESS_CALLBACK = (response) => {
      if (response.Id == null){
          this.ERROR.OCURRED = true;
          this.ERROR.MESSAGE = "Ha ocurrido un error";
          return;
      }
      if (response.Id == ""){
          this.ERROR.OCURRED = true;
          this.ERROR.MESSAGE = "Usuario y/o contraseña incorrecto";
          this.ERROR.TYPE = "INFO"
          return;
      }
      if ((response.Id != "" && response.Id != null) && response.Enabled == false){
          this.ERROR.OCURRED = true;
          this.ERROR.MESSAGE = "Usuario no tiene permitido iniciar sesión";
          this.ERROR.TYPE = "WARNING"
          return;
      }
      this.AUTH_SERVICE.setSession(response)
      this.ROUTER.navigate(['app']);
  }

  ERROR_CALLBACK = (error) => {
      this.ERROR.OCURRED = true;
      this.ERROR.MESSAGE = "Fallo al contactar al servicio SCADA"
      this.ERROR.TYPE = "DANGER";
  }

  FINISHED_CALLBACK = () => {
      this.PERFORMING_TRANSACTION = false;
      this.CHANGE_DETECTOR.detectChanges()
  }
}

