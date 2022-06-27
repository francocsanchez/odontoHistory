const express = require('express');
const router = express.Router();

const { getPatients, postCreatePatient } = require('../controllers/patientsController');

// TODO: Pacientes rutas
router.get('/', getPatients);
router.get('/:id', getPatients);
router.post('/', postCreatePatient);

module.exports = router;