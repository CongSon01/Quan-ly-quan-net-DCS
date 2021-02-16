const express = require('express');
const router = express.Router();
const MessageController = require('../app/controllers/MessageController');
router.get('/', MessageController.index);

module.exports = router;