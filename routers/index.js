const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

module.exports = function () {
    // TODO: Rutas de home
    router.get('/', homeController.home);

    return router;
}