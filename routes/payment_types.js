const { Router } = require('express');
const payTypeRouter = Router();
const { getAllPaymentTypes, getOnePaymentType } = require('../controllers/paymentTypeCtrl.js'); 

payTypeRouter.get('/payment_types', getAllPaymentTypes);
payTypeRouter.get('/payment_types/:id', getOnePaymentType);

module.exports = payTypeRouter;