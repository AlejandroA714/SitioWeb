interface response{
    Success:boolean;
    Message:string;
}

export class Response implements response {

    Success: boolean = false;
    Message: string = "¡Error! Excepción no controlada";

    constructor(prms?: any){
        this.Success = ("Success" in prms ? prms["Success"] : prms["success"]).toLowerCase() == 'true' ? true :false;
        this.Message = prms["Message"]  

    }
}