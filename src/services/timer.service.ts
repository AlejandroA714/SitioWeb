import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TimerService {

    private SUBJECT =  new Subject<void>();

    public suscribe(callback: (param:any) => void ) {
        this.SUBJECT.subscribe(callback);
    }

    constructor(){
        setInterval(()=> { console.log("second elapsed"); this.SUBJECT.next()},1000);
    }
    
}