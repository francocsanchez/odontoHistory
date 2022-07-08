const express = require('express');
const router = express.Router();

const {
    getItems,
    getFormWorkSocial,
    postCreateWorkSocial
} = require('../controllers/workSocialController');

// TODO: Obras sociales rutas
router.get('/', getItems);
router.get('/create', getFormWorkSocial);
router.post('/create', postCreateWorkSocial);
// router.get('/edit/:id', updateFormWorkSocial);
// router.put('/:id/edit', putUpdateWorkSocial);

module.exports = router;