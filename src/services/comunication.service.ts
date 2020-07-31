import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
    providedIn: "root"
})

export class ComunicationService{

    workspace_updated = new Event<string>();

}
