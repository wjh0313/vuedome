const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    credentials: true,
    alloweHeaders:['Conten-Type', 'Authorization']
    }));
app.use(bodyParser.urlencoded({ extended : false}));
const router = require('./router.js');
app.use(router);
app.listen(3000,()=>{});