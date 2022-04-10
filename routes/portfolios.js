const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios')

router.get('/', portfoliosCtrl.index)

router.get('/new', portfoliosCtrl.new);

// router.get('/:id', portfoliosCtrl.show);

router.post('/', portfoliosCtrl.create)

module.exports = router;
