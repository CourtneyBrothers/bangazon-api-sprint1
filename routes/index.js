const { Router } = require('express');
const router = Router();

// router.use(require('./<FILE NAME>));

router.use(require('./payment_types'));
router.use(require('./customerRoute'));
router.use(require('./training_programs'));

module.exports = router;