const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/usersController');

// TODO: Usuarios rutas
router.get('/', getUsers);

module.exports = router;