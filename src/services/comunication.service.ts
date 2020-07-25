import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
    providedIn: "root"
})

export class ComunicationService{

    loadWorkSpace = new Event<string>();

}
