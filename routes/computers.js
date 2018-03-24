'use strict';

const { Router } = require('express');
const computerRouter = Router();
const { getAllComputers, getOneComputer, postOneLiveComputer, postOneDeadComputer } = require('../controllers/computerCtrl');

computerRouter.get('/computers', getAllComputers);
computerRouter.get('/computers/:id', getOneComputer);
computerRouter.post('/computers/', postOneLiveComputer);
computerRouter.post('/computers/', postOneDeadComputer)


module.exports = computerRouter;