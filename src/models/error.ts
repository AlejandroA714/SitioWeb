export type ERROR_TYPE = "SUCCESS" | "INFO" | "WARNING" | "DANGER"

export interface ERROR_INTERFACE {
    OCURRED:boolean;
    MESSAGE:string;
    TYPE:ERROR_TYPE;
    TRIGERED:Date;
}

export class ERROR implements ERROR_INTERFACE {
    
    constructor(public OCURRED:boolean = false, public MESSAGE:string = "Excepción no controlada", public TYPE:ERROR_TYPE = "INFO", public TRIGERED:Date = new Date() ){}

}