const express = require('express');
const router = express.Router();

const { getIndex } = require('../controllers/mainController');

// TODO: Rutas principales
router.get('/', getIndex);

module.exports = router;