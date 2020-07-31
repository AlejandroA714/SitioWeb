import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { Workspace } from '../models/workspace';
import { Crypter } from './crypter.service';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';

interface SCADA_DB extends DBSchema {
    'scada': {
      key: string;
      value:any;
    };
}

@Injectable({
    providedIn: 'root'
})

export class indexedDB {

    private db = openDB<SCADA_DB>('scada',1,{
                    upgrade(db){
                        db.createObjectStore("scada")
                        console.log("called update") // code to update code
                    }
                });

    async createWorkspace(value:Workspace){
        return (await this.db).put("scada",Crypter.ENCRYPT(JSON.stringify(value.toJSON())),"workspace")
    }
    
    async getWorkspace(){
     return (await this.db).get("scada","workspace")
     
    }

    async cleanWorkSpace(){
        return (await this.db).delete("scada","workspace")
    }

    async existsWorkSpace(){
        if(!isNullOrUndefined(await (await this.db).getKey("scada","workspace"))){
            return (await this.db).get("scada","workspace")
        }else{return null;}
    }

}

