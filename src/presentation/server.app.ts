import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";

interface RunOption{
    base:number;
    limit:number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp{

    static run({base,limit,showTable,name,destination}:RunOption){
        console.log('Server ejecutando...')
        const table = new CreateTable().execute({base,limit})
        const wasCreate= new SaveFile().execute({
            fileContent:table,
            Filedestination: destination,
            filename: name
        })
        if(showTable){
            console.log(table);
        }

        (wasCreate)
        ? console.log('File Creado')
        : console.log('File no creado')
    }

}