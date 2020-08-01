import { Injectable } from '@angular/core'
import { Event } from '../models/event';

@Injectable({
    providedIn: "root"
})

export class ComunicationService{

    workspace_updated = new Event<string>();
    toogle_sidebar = new Event<boolean>();

}
