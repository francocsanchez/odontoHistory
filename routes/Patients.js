const express = require('express');
const router = express.Router();

const {
    getItems,
    getPatient,
    getFormPatient,
    postCreatePatient,
    updateFormPatient
} = require('../controllers/patientsController');

// TODO: Pacientes rutas
router.get('/', getItems);
router.get('/show/:id', getPatient);
router.get('/create', getFormPatient);
router.post('/create', postCreatePatient);
router.get('/edit/:id', updateFormPatient);

module.exports = router;