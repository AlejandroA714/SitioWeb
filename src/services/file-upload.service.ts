import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
    providedIn:'root'
})

export class FileUploadService {


  ImageToByteArray(file: File) {
    return new Promise( (resolve,reject) =>{ 
        let reader = new FileReader();
        if(file){
            reader.onloadend = function(e) {
                resolve(reader.result.toString().split(',')[1]);   
            }
            try{
                reader.readAsDataURL(file);
            }catch(e){
                reject(e)
            }
        }else{reject(new Error("No files has been selected"))}
    }); 
}

    FileToJsonArray(file){
        return new Promise ( resolve => {
            let reader = new FileReader();
            if(file && file[0]){
                reader.onloadend = function(e){
                    resolve(JSON.parse(reader.result.toString()));
                }
                reader.readAsText(file[0]);
            }    
        });
    }
}



/*   PrevisualizarImagen(file,dest){
    let reader =  new FileReader();

    if(file && file[0]){
        reader.onload = function (e) {
            $(dest).attr('src', e.target.result);
        }
        reader.readAsDataURL(file[0]);
    }
} 
}*/