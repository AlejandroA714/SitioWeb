import { Nullable, GUID, ObjectId } from './types';
import { isNullOrUndefined } from 'util';

export interface WorkspaceParams{
    Id?: ObjectId;
    Nombre: string;
    Drivers?: Dispositivo[];
    DriversCount?:number;
}

export class Workspace implements WorkspaceParams {

    Id?:ObjectId;
    Nombre: string = "";
    Drivers?: Dispositivo[] = []; 
    DriversCount?: number = this.Drivers.length;

    constructor(prms?:WorkspaceParams){ 
        if(!isNullOrUndefined(prms)){
            this.Id = new ObjectId(prms.Id.toString());
            this.Nombre = prms.Nombre;
            this.Drivers = prms.Drivers.map( (d:Dispositivo) => new Dispositivo(d));
            this.DriversCount = this.Drivers.length;
        }
     }

    toJSON(){
        return {Id:this.Id.toString(), Nombre:this.Nombre,Drivers: this.Drivers.map(d => d.toJSON()) ,DriversCount:this.DriversCount}
    }

}

export interface DispositivoParams{

    UnicID?: GUID;
    Nombre: string;
    IsEmpty?: Boolean;
    Time?: number;
    X?: number;
    Y?: number;
    ID: string;
    Token: string;
    Image?: Nullable<any>;
    Variables?: Variable[];
    LastUpdate?: string
}

export class Dispositivo implements DispositivoParams{

    UnicID?: GUID = new GUID();
    Nombre: string;
    IsEmpty?: Boolean = false;
    Time?: number = 30;
    X?: number = 0;
    Y?: number = 0;
    ID: string;
    Token: string;
    Image?: Nullable<any> = null;
    Variables?: Variable[] = [];
    LastUpdate?: string = "Nunca";

    constructor(prms?: DispositivoParams){
        if(!isNullOrUndefined(prms)){
            
            this.UnicID = new GUID(prms.UnicID.toString())
            this.Nombre = prms.Nombre
            this.Time = prms.Time
            this.X = prms.X
            this.Y = prms.Y
            this.ID = prms.ID
            this.Token = prms.Token
            this.Image = prms.Image
            this.Variables = prms.Variables.map( (v:Variable) => new Variable(v))
            this.LastUpdate = prms.LastUpdate
        }
    }

    toJSON(){
        return {UnicID:this.UnicID.toString(),Nombre:this.Nombre,IsEmpty:this.IsEmpty,X:this.X,Y:this.Y,ID:this.ID,Time:this.Time,
                Token:this.Token,Image:this.Image,Variables:this.Variables.map(v => v.toJSON()),LastUpdate:this.LastUpdate }
    }

}

export interface VariableParams{
    UnicID?: GUID;
    Nombre: string;
    PIN: string;
    Valor?: number;
    Analogic: Boolean;
    DisplayColor?: Nullable<string>;
    Expresion?: Nullable<string>;
    Notificar?: Nullable<string>;
    Nivel?: Nullable<string>
    IsOutput: Boolean
}

export class Variable implements VariableParams{

    UnicID?: GUID;
    Nombre: string;
    PIN: string;
    Valor?: number = 0;
    Analogic: Boolean;
    DisplayColor?: Nullable<string> = null;
    Expresion?: Nullable<string> = null;
    Notificar?: Nullable<string> = null;
    Nivel?: Nullable<string> = null;
    IsOutput: Boolean;

    constructor(prms?: VariableParams){
        if(!isNullOrUndefined(prms)){
            this.UnicID = new GUID(prms.UnicID);
            this.Nombre = prms.Nombre;
            this.PIN = prms.PIN;
            this.Valor = prms.Valor;
            this.Analogic = prms.Analogic;
            this.DisplayColor = prms.DisplayColor;
            this.Expresion = prms.Expresion;
            this.Notificar = prms.Notificar;
            this.Nivel = prms.Nivel;
            this.IsOutput = prms.IsOutput;
        }
    }

    toJSON(){
        return { UnicID:this.UnicID.toString(),Nombre:this.Nombre,PIN:this.PIN,Valor:this.Valor,Analogic:this.Analogic,IsOutput:this.IsOutput,
                DisplayColor:this.DisplayColor,Expresion:this.Expresion,Notificar:this.Notificar,Nivel:this.Nivel }
    }
}



