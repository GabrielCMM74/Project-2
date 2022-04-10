const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios')

router.get('/', portfoliosCtrl.index)

router.get('/new', portfoliosCtrl.new);

// router.get('/:id', portfoliosCtrl.show);

router.post('/:id', portfoliosCtrl.create)

module.exports = router;
