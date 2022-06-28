const express = require('express');
const router = express.Router();

const { getPatients, getPatient, postCreatePatient } = require('../controllers/patientsController');

// TODO: Pacientes rutas
router.get('/', getPatients);
router.get('/:id', getPatient);
router.post('/', postCreatePatient);

module.exports = router;