import mongoose from 'mongoose';
export const database = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI) 
    
    console.log(" Connected to local MongoDB:", con.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};