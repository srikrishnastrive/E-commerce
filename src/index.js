const express = require('express');

const {PORT} = require('./config/serverConfig');
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const db = require('./config/db_config');


const app = express();
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.listen(PORT,async()=>{
    console.log(`sever for shopcart is up ${PORT}`);
    await db.sync();
    console.log('db connected');
})
