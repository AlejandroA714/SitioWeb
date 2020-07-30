import { Nullable, GUID, ObjectId } from './types';

interface Dispositivo_{
    UnicID: GUID;
    Nombre: string;
    IsEmpty: Boolean;
    Time: Number;
    X: Number;
    Y: Number;
    ID: string;
    Token: string;
    Images: string;
    Variables: Variable_[];
    LastUpdate: Date
}

interface Variable_{
    UnicID: GUID;
    Nombre: string;
    PIN: string;
    Valor: Number;
    Analogic: Boolean;
    DisplayColor: Nullable<string>;
    Expresion: Nullable<string>;
    Notificar: Nullable<string>;
    Nivel: Nullable<string>
    IsOutput: Boolean
}

interface WorkSpace_{
    Id: ObjectId;
    Nombre: string;
    Drivers: Dispositivo_[];
    DriversCount:Number;
}


export class Dispositivo implements Dispositivo_{

    constructor(){}

    UnicID: GUID;
    Nombre: string;
    IsEmpty: Boolean;
    Time: Number;
    X: Number;
    Y: Number;
    ID: string;
    Token: string;
    Images: string;
    Variables: Variable[];
    LastUpdate: Date;

}

export class Variable implements Variable_{

    UnicID: GUID;
    Nombre: string;
    PIN: string;
    Valor: Number;
    Analogic: Boolean;
    DisplayColor: string;
    Expresion: string;
    Notificar: string;
    Nivel: string;
    IsOutput: Boolean;

}

export class Workspace implements WorkSpace_{

    Id: ObjectId;
    Nombre: string;
    Drivers: Dispositivo[];
    DriversCount: Number;

}
