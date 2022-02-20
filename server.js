//Main entrypoint to application
const express = require('express');
const dotenv = require('dotenv');
//This is third party middleware for logging http info, similar to logger function
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();


//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Body parser
app.use(express.json());

//Dev logging middleware
//Check to make sure this is only used in development
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)

//What port are we running on
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline.bold))

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`);
    //Close derver and exit process
    server.close(() => process.exit(1));
})

app.listen();