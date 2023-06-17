const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const connection = require('./DB/conn');
const LoginR = require('./Routes/login');
const SignupR = require('./Routes/signup');
//const NGOAccReq = require('./Routes/NgoAccount');
const NGOAcc = require('./Routes/NgoAcc');
const app  = express();
require('dotenv').config();
app.use(express());
app.use(express.json());
app.use(cors());

port = process.env.PORT || 8080;

app.use('/', LoginR);
app.use('/', SignupR);
app.use('/', NGOAcc);
//app.use('/', NGOAccReq);

connection();

app.listen(8080, () => console.log(`server listening to ${port}`));