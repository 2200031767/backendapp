const express = require('express');
const recommendController = require('../controllers/recommendcontroller');

const router = express.Router();

// POST request to handle recommendation
router.post('/recommend', recommendController.recommend);

module.exports = router;
