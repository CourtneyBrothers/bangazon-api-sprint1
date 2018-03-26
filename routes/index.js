const { Router } = require('express');
const router = Router();

// router.use(require('./<FILE NAME>));
router.use(require('./product_types'));
router.use(require('./customerRoute'));
router.use(require('./employeeRoute'));
module.exports = router;