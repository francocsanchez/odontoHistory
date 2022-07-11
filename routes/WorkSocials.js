const express = require('express');
const router = express.Router();

const {
    getItems,
    getFormWorkSocial,
    postCreateWorkSocial,
    updateFormWorkSocial,
    putUpdateWorkSocial,
    getFormDelete,
    deleteItem
} = require('../controllers/workSocialController');

// TODO: Obras sociales rutas
router.get('/', getItems);
router.get('/create', getFormWorkSocial);
router.post('/create', postCreateWorkSocial);
router.get('/:id/edit', updateFormWorkSocial);
router.put('/:id/edit', putUpdateWorkSocial);
router.get('/:id/delete', getFormDelete);
router.delete('/:id/delete', deleteItem);

module.exports = router;