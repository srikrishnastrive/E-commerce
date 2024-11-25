// apiRouter.js
const express = require('express');
const apiRouter = express.Router();
const v1Router = require('./v1/index');
const v2Router = require('./v2/index');

apiRouter.use('/v1', v1Router);
apiRouter.use('/v2',v2Router);



module.exports = apiRouter;
