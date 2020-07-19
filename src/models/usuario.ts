export type USER_TYPE = "Administrador" | "Usuario";

export interface USER {
    id:Number;
    Nombres:string;
    Usuario:string;
    Email:string;
    Password:string;
    Tipo:USER_TYPE;
    Enabled:Boolean;


}