import { Injectable } from '@angular/core';
import { openDB, DBSchema } from 'idb';
import { Workspace, Dispositivo } from '../models/workspace';
import { Crypter } from './crypter.service';
import { isNullOrUndefined } from 'util';

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
                    }
                });

    async createWorkspace(value:Workspace){
        return (await this.db).put("scada",Crypter.ENCRYPT(JSON.stringify(value.toJSON())),"workspace")
    }
    
    async getWorkspace(){
     return JSON.parse(Crypter.DECRYPT( await (await this.db).get("scada","workspace") )) ;
    }

    async actualizarDispositivo(d:Dispositivo){
        try{
            let workspace =  await this.getWorkspace();
            workspace["Drivers"].map( (dev) => 
            { 
                if(dev.UnicID.toString() == d.UnicID.toString() ){
                    Object.assign(dev,d.toJSON())
                }
            });
            await this.createWorkspace(new Workspace(workspace));
            return true;
        }catch(e){
            console.log("[Error] cannot update device " + e);
            return false;
        }
        
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

