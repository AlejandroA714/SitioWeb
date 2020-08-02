import { Subject } from 'rxjs';
import { isNullOrUndefined } from 'util';

export class Event<T>{

    private SUBJECT =  new Subject<T>();
    public EVENT$ = this.SUBJECT.asObservable(); //observable to use async pipe

    public suscribe(callback?: (param:any) => void ) {
        if(!isNullOrUndefined(callback)){
            this.SUBJECT.subscribe(callback);
        }else{console.log("[INFO] Subscription without callback, so nothing happens")}
    }

    perfom(data:T):void;
    perfom(data:T[]):void;
    perfom(data:void):void;
    perfom(data:any) : void{
        this.SUBJECT.next(data)
    }
}
