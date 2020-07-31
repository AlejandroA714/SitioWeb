import { Nullable, GUID, ObjectId } from './types';

export interface WorkspaceParams{
    Id?: ObjectId;
    Nombre: string;
    Drivers?: Dispositivo[];
    DriversCount?:Number;
}

export class Workspace implements WorkspaceParams {

    constructor(prms?:WorkspaceParams){ 
        this.Id = prms.Id;
        this.Nombre = prms.Nombre;
        this.Drivers = prms.Drivers.map( (d:Dispositivo) => new Dispositivo(d));
        this.DriversCount = this.Drivers.length;
     }

    Id?:ObjectId = new ObjectId().toString();
    Nombre: string;
    Drivers?: Dispositivo[] = []; 
    DriversCount?: Number = this.Drivers.length;

    toJSON(){
        return {Id:this.Id.toString(), Nombre:this.Nombre,Drivers: this.Drivers.map(d => d.toJSON()) ,DriversCount:this.DriversCount}
    }

}

export interface DispositivoParams{

    UnicID?: GUID;
    Nombre: string;
    IsEmpty?: Boolean;
    Time?: Number;
    X?: Number;
    Y?: Number;
    ID: string;
    Token: string;
    Image?: Nullable<any>;
    Variables?: Variable[];
    LastUpdate?: string
}

export class Dispositivo implements DispositivoParams{

    constructor(prms?: DispositivoParams){
        this.UnicID = prms.UnicID
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

    UnicID?: GUID = new GUID();
    Nombre: string;
    IsEmpty?: Boolean = false;
    Time?: Number = 30;
    X?: Number = 0;
    Y?: Number = 0;
    ID: string;
    Token: string;
    Image?: Nullable<any> = null;
    Variables?: Variable[] = [];
    LastUpdate?: string = "Nunca";

    toJSON(){
        return {UnicID:this.UnicID.toString(),Nombre:this.Nombre,IsEmpty:this.IsEmpty,X:this.X,Y:this.Y,ID:this.ID,
                Token:this.Token,Image:this.Image,Variables:this.Variables.map(v => v.toJSON()),LastUpdate:this.LastUpdate }
    }

}

export interface VariableParams{
    UnicID?: GUID;
    Nombre: string;
    PIN: string;
    Valor?: Number;
    Analogic: Boolean;
    DisplayColor?: Nullable<string>;
    Expresion?: Nullable<string>;
    Notificar?: Nullable<string>;
    Nivel?: Nullable<string>
    IsOutput: Boolean
}

export class Variable implements VariableParams{

    constructor(prms?: VariableParams){
        this.UnicID = prms.UnicID;
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

    UnicID?: GUID = new GUID();
    Nombre: string;
    PIN: string;
    Valor?: Number = 0;
    Analogic: Boolean;
    DisplayColor?: Nullable<string> = null;
    Expresion?: Nullable<string> = null;
    Notificar?: Nullable<string> = null;
    Nivel?: Nullable<string> = null;
    IsOutput: Boolean;

    toJSON(){
        return { UnicID:this.UnicID.toString(),Nombre:this.Nombre,PIN:this.PIN,Valor:this.Valor,Analogic:this.Analogic,IsOutput:this.IsOutput,
                DisplayColor:this.DisplayColor,Expresion:this.Expresion,Notificar:this.Notificar,Nivel:this.Nivel }
    }
}



