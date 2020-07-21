import * as CryptoJS from 'crypto-js'
import { Injectable } from '@angular/core';

const SECRET_KEY = "Q@7;gAcTg''1o_A<&{4BMcAHf&P<_K(^fXO?D/x1M_<5w@h#}0z<v^3*.ltq0jS";
const SECURE_STORAGE_IMPORT = require('secure-web-storage');

@Injectable({
    providedIn: "root"
})

export class Crypter {

    constructor(){}

    public SECURE_STORAGE = new SECURE_STORAGE_IMPORT( sessionStorage ,
                                                    {   hash: function hash(key) { key = CryptoJS.SHA256(key, SECRET_KEY);return key.toString(); },
                                                        encrypt: function ENCRYPT (DATA:any) { return (CryptoJS.AES.encrypt(DATA,SECRET_KEY)).toString();}, 
                                                        decrypt: function DECRYPT (DATA:any) { return (CryptoJS.AES.decrypt(DATA,SECRET_KEY)).toString(CryptoJS.enc.Utf8);}
                                                    });
}