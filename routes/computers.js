'use strict';

const { Router } = require('express');
const computerRouter = Router();
const { getAllComputers, getOneComputer } = require('../controllers/computerCtrl');

computerRouter.get('/computers', getAllComputers);
computerRouter.get('/computers/:id', getOneComputer);


module.exports = computerRouter;