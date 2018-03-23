const { Router } = require('express');
const router = Router();

// router.use(require('./<FILE NAME>));
router.use(require('./orders'));
router.use(require('./customerRoute'));

module.exports = router;