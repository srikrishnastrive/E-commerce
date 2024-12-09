const express = require('express');

const {PORT,DB_FORCE,DB_ALTER} = require('./config/serverConfig');
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const db = require('./config/db_config');
const cookieParser = require('cookie-parser');

const app = express();
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/api',apiRouter);

app.listen(PORT,async()=>{
    console.log(`sever for shopcart is up ${PORT}`);
    //await db.sync();
    if (DB_FORCE == true){
        await db.sync({force:true});
    }
    else if (DB_ALTER == true){
        await db.sync({alter:true});
    }
    else {
        await db.sync();
    }
    console.log('db connected');

    // const c = await Category.findByPk(6);
    // console.log(c);
    // const res = await c.getProducts();
    // console.log(res);
    // const cnt = await c.countProducts();
    // console.log(cnt);
})
