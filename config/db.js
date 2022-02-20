//File for connecting to mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
    //Mongoose.connect returns a promise
   const conn = mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       //ueseCreateIndex: true,
       //useFindAndModify: false
   });

   //display connected
   //console.log(`MongoDB connected: ${conn.connection.host}`);
   console.log("Mango connected!".green.underline.bold);
};

module.exports = connectDB