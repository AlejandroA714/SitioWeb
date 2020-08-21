import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Event } from 'src/models/event';

@Component({
  templateUrl: './devices-form.component.html',
  styleUrls: ['./devices-form.component.css']
})
export class DevicesFormComponent implements OnInit {

  isLinear:boolean = false;
  firstFormGroup= new FormGroup({

  })
  secondFormGroup = new FormGroup({

  })
  thirdFormGroup = new FormGroup({
    
  })


  constructor() {

  }
  back = new Event<null>();

  ngOnInit(): void {
  }

}


/* FORM_LOGIN = new FormGroup({
  USER_NAME : new FormControl('', [Validators.required, Validators.minLength(6)]),
USER_PASSWORD : new FormControl('', [Validators.required,Validators.minLength(6)])

}); */
