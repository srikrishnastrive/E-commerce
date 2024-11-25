const express = require('express');

const {PORT} = require('./config/serverConfig');
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser');
const responseTime = require('response-time')

// app.get('/api/v1/ping',(request,response)=>{
//     return response.json({message:'Alive'});
// })
// configPingRoutes(app);
// app.get('/api/v1/ping',pingController);

// app.use('/api/v1/ping',pingRoutes);
// app.use('/api/v2/ping',pingRoutesv2);


const app = express();
// app.use(responseTime(function f(req,res,time){
//     console.log("Time elapse =",time);
//     res.setHeader('X-Response-Time',time);
// }));
app.use(responseTime());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log(`sever for shopcart is up ${PORT}`);
})
