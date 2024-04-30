const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellercontroller');

router.post('/seller', sellerController.Sellers);

router.get('/viewsellers', sellerController.viewSellers);
module.exports = router;
