import mongoose from 'mongoose'
const dbConnect =async()=>{
    let isConnected = false;
    try{
        if(isConnected){
            return;
        }
    await mongoose.connect(process.env.DB_URL as string).then(()=>{
    console.log('Database connected Sucessfully')
    isConnected=true;
     })
    }catch(err){
    console.log(err);
    process.exit(1);
    }
}
export default dbConnect;