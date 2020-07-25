import { Subject } from 'rxjs';

export class Event<T>{

    private SUBJECT =  new Subject<T>();

    public suscribe(callback: (param:any) => void ) {
        this.SUBJECT.subscribe(callback);
    }

    perfom(data:T):void;
    perfom(data:T[]):void;
    perfom(data:void):void;
    perfom(data:any) : void{
        this.SUBJECT.next(data)
    }
}
