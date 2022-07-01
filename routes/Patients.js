const express = require('express');
const router = express.Router();

const { getItems, getPatient, getFormPatient, postCreatePatient } = require('../controllers/patientsController');

// TODO: Pacientes rutas
router.get('/', getItems);
router.get('/:id', getPatient);
router.get('/create', getFormPatient);
router.post('/create', postCreatePatient);

module.exports = router;