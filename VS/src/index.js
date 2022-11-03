import app from "./app.js";
import {sequelize} from "../database/database.js"

import '../models/People.js'
import '../models/Users.js'

async function main(){
    try{
        await sequelize.sync({force: false});
        console.log("Bien");
        app.listen(4000);
        console.log("server listening");
    }catch{
        console.log("Mal");
    }
}

main();