const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const apiRouter = require('./routes/apiRouter');

// app.get('/api/v1/ping',(request,response)=>{
//     return response.json({message:'Alive'});
// })
// configPingRoutes(app);
// app.get('/api/v1/ping',pingController);

// app.use('/api/v1/ping',pingRoutes);
// app.use('/api/v2/ping',pingRoutesv2);

app.use('/api',apiRouter);
app.listen(PORT,()=>{
    console.log(`sever for shopcart is up ${PORT}`);
})
