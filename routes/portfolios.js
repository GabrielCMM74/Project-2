const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios')
const isLoggedIn = require('../config/auth');

router.get('/', portfoliosCtrl.index)

router.get('/new', isLoggedIn,portfoliosCtrl.new);

// router.get('/:id', portfoliosCtrl.show);

router.post('/', portfoliosCtrl.create)

router.get('/:id', portfoliosCtrl.detailPortfolio)

router.put('/:id', portfoliosCtrl.editPortfolio)

router.delete('/:id', portfoliosCtrl.deletePortfolio);


module.exports = router;
