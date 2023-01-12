import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
export const Connection=async(username,password)=>{
    const url=`mongodb://${username}:${password}@ac-r5izilz-shard-00-00.tqffrlw.mongodb.net:27017,ac-r5izilz-shard-00-01.tqffrlw.mongodb.net:27017,ac-r5izilz-shard-00-02.tqffrlw.mongodb.net:27017/?ssl=true&replicaSet=atlas-ggwsq9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("database connected")
    }
    catch(error){
        console.log("Error:",error.message)
    }
}
export default Connection