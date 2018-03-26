'use strict';

const { Router } = require('express');
const computerRouter = Router();
const { getAllComputers, getOneComputer, postOneComputer, putOneComputer, deleteOneComputer } = require('../controllers/computerCtrl');

computerRouter.get('/computers', getAllComputers);
computerRouter.get('/computers/:id', getOneComputer);
computerRouter.post('/computers/', postOneComputer);
computerRouter.put('/computers/:id', putOneComputer);
computerRouter.delete('/computers/:id', deleteOneComputer);


module.exports = computerRouter;