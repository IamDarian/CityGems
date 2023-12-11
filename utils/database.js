import mongoose from "mongoose";

let isConnected = false;

async function connectDatabase(){
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, { 
            dbName: "favorite",
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        isConnected = true;
        console.log("MongoDB connected");
    } catch(error){
        console.log(error);
    } finally{
        await mongoose.close();    
    }
}
  
export { connectDatabase };

