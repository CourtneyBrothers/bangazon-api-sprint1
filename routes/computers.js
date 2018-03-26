'use strict';

const { Router } = require('express');
const computerRouter = Router();
const { getAllComputers, getOneComputer, postOneLiveComputer, postOneDeadComputer, putOneComputer, deleteOneComputer } = require('../controllers/computerCtrl');

computerRouter.get('/computers', getAllComputers);
computerRouter.get('/computers/:id', getOneComputer);
computerRouter.post('/computers/', postOneLiveComputer);
computerRouter.post('/computers/', postOneDeadComputer);
computerRouter.put('/computers/:id', putOneComputer);
computerRouter.delete('/computers/:id', deleteOneComputer);


module.exports = computerRouter;