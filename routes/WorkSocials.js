const express = require('express');
const router = express.Router();

const { getWorkSocials, postCreateWorkSocial } = require('../controllers/workSocialController');

// TODO: Obras sociales rutas
router.get('/', getWorkSocials);
router.post('/', postCreateWorkSocial);

module.exports = router;