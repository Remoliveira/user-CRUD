import mongoose from 'mongoose'

class Database{

     async run(){
        await mongoose.connect('mongodb://localhost:27017/hvex?authSource=admin',  () =>{
            console.log("Database connected")
        });

                
        
    }
}


export { Database }
