const express = require('express');
const router = express.Router();
const GamesRegisteredController = require('../app/controllers/GamesRegisteredController');

// router.get('/create', GamesRegisteredController.create);
// router.get('/:slug', GamesRegisteredController.deil);
router.get('/', GamesRegisteredController.index);

module.exports = router;
