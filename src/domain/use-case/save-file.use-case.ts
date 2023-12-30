import fs from 'fs'

export interface SaveFileCase{
    execute:(options:Options)=>boolean;
}

export interface Options{
    fileContent: string;
    Filedestination?: string;
    filename?: string;
}


export class SaveFile implements SaveFileCase{
    constructor(

    ){}
    
    execute({ fileContent, Filedestination = `outputs`,filename ='table'}: Options): boolean{
        try {
            fs.mkdirSync(Filedestination, { recursive: true });//inidcamos q se cree el directorio
            fs.writeFileSync(`${Filedestination}/${filename}.txt`, fileContent);//creamos el archivo
            return true
        } catch (error) {
            console.log(error)
            return false;
            
        }
        


    }
}