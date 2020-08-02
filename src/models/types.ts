import { isNullOrUndefined } from 'util';

export type Nullable<T> = T | undefined | null;
export type ERROR_TYPE = "SUCCESS" | "INFO" | "WARNING" | "DANGER";

export class ObjectId{

    private Object_Id = null;
    private validator = require('mongoose').Types.ObjectId;
    
    constructor(ObjectId_str?: string | ObjectId){
        if (isNullOrUndefined(ObjectId_str)){
            this.Object_Id = ObjectId.GenerateObjectId();
            return;
        }
        if (!this.validator.isValid(ObjectId_str)){
            throw new Error("{0} is not a validr objectID".format(ObjectId_str))
        }else{
            this.Object_Id = ObjectId_str;
        }    
    }

    public static GenerateObjectId () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };

    public toString(){
        return this.Object_Id != null ? this.Object_Id : "";
    }

}

export class GUID{

    private pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    private GUID_ = null;
    
    constructor(GUID_str?: string|GUID){
        if (isNullOrUndefined(GUID_str)){
            this.GUID_ = GUID.GenerateGUID();
            return;
        }
        if (GUID_str instanceof GUID){
            this.GUID_ = GUID_str.toString()
        }else{
            this.GUID_ = GUID_str
        }
        if (!this.pattern.test(this.GUID_)){
            throw new Error("{0} is not a valid GUID".format(GUID_str))
        }    
    }

    public static GenerateGUID()
    {
        function hex (s, b)
        {
            return s +
            (b >>> 4   ).toString (16) +  // high nibble
            (b & 0b1111).toString (16);   // low nibble
        }

        let r = crypto.getRandomValues (new Uint8Array (16));

        r[6] = r[6] >>> 4 | 0b01000000; // Set type 4: 0100
        r[8] = r[8] >>> 3 | 0b10000000; // Set variant: 100

        return  r.slice ( 0,  4).reduce (hex, '' ) +
                r.slice ( 4,  6).reduce (hex, '-') +
                r.slice ( 6,  8).reduce (hex, '-') +
                r.slice ( 8, 10).reduce (hex, '-') +
                r.slice (10, 16).reduce (hex, '-');
        }

    public toString(){
        return this.GUID_ != null ? this.GUID_ : "";;
    }

    public clone(){
        return Object.assign( Object.create( Object.getPrototypeOf(GUID)), GUID)
    }

}