import * as CryptoJS from 'crypto-js'
import { Injectable } from '@angular/core';

const SECURE_STORAGE_IMPORT = require('secure-web-storage');

@Injectable({
    providedIn: "root"
})

export class Crypter {

    private static SECRET_KEY = CryptoJS.lib.WordArray.create(Crypter.RandomKey());
    private static IV = CryptoJS.lib.WordArray.create(Crypter.RandomKey());

    public static SECURE_STORAGE = new SECURE_STORAGE_IMPORT( sessionStorage ,
                                                    {   hash: function hash(key) { key = CryptoJS.SHA256(key, Crypter.SECRET_KEY);return key.toString(); },
                                                        encrypt: function ENCRYPT (DATA:any) { return (CryptoJS.AES.encrypt(DATA,Crypter.SECRET_KEY,{iv:Crypter.IV})).toString();}, 
                                                        decrypt: function DECRYPT (DATA:any) { return (CryptoJS.AES.decrypt(DATA,Crypter.SECRET_KEY,{iv:Crypter.IV})).toString(CryptoJS.enc.Utf8);}
                                                    });
                                                    
    public static setItem(KEY:string,DATA:any){
        this.SECURE_STORAGE.setItem(KEY,DATA)
    }

    public static ENCRYPT (DATA:any) { 
        return (CryptoJS.AES.encrypt(DATA,Crypter.SECRET_KEY,{iv:Crypter.IV})).toString();
    }

    public static DECRYPT (DATA:any) { 
        return (CryptoJS.AES.decrypt(DATA,Crypter.SECRET_KEY,{iv:Crypter.IV})).toString(CryptoJS.enc.Utf8);
    }

    public static getItem(KEY:string){
        return (this.SECURE_STORAGE.getItem(KEY)  != undefined ? this.SECURE_STORAGE.getItem(KEY) : null );
    }

    public static saveKey(){
        sessionStorage.setItem("TMP_CRYPTO_KEY", JSON.stringify(Crypter.SECRET_KEY));
        sessionStorage.setItem("TMP_CRYPTO_IV", JSON.stringify(Crypter.IV));
    }

    public static loadKey(){
        if (sessionStorage.getItem("TMP_CRYPTO_KEY") != undefined && sessionStorage.getItem("TMP_CRYPTO_IV") != undefined ){
            Crypter.SECRET_KEY = JSON.parse(sessionStorage.getItem("TMP_CRYPTO_KEY"))
            Crypter.IV = JSON.parse(sessionStorage.getItem("TMP_CRYPTO_IV"))
            sessionStorage.removeItem("TMP_CRYPTO_KEY");
            sessionStorage.removeItem("TMP_CRYPTO_IV");
        }
    }

    public static RandomKey(lenght = 63) { 
        let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!$%&/()=?¿*_<>_.";
        let result = new String();
        for(let i = 0;i<lenght;i++){
            let index = Math.floor(Math.random() * alphabet.length);
            result += alphabet[index];
        }
        return result;
    }
}