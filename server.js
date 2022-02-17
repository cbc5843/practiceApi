//Main entrypoint to application

const express = require('express');
const dotenv = require('dotenv')

//Load env vars
dotenv.config({path: './config/config.env'});

const app = express();

//What port are we running on
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

app.listen();