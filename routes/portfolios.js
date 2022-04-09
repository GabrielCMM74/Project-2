const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios')

router.get('/', portfoliosCtrl.index)



module.exports = router;
