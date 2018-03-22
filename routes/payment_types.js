const { Router } = require('express');
const payTypeRouter = Router();
const { getAllPaymentTypes, getOnePaymentType, postOnePaymentType } = require('../controllers/paymentTypeCtrl.js'); 

payTypeRouter.get('/payment_types', getAllPaymentTypes);
payTypeRouter.get('/payment_types/:id', getOnePaymentType);
payTypeRouter.post('/payment_types', postOnePaymentType);

module.exports = payTypeRouter;