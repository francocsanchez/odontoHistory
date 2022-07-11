const express = require('express');
const router = express.Router();

const {
    getItems,
    getPatient,
    getFormPatient,
    postCreatePatient,
    updateFormPatient,
    updatePatient,
    getFormDeletePatient,
    deletePatient
} = require('../controllers/patientsController');

// TODO: Pacientes rutas
router.get('/', getItems);
router.get('/show/:id', getPatient);
router.get('/create', getFormPatient);
router.post('/create', postCreatePatient);
router.get('/:id/edit/', updateFormPatient);
router.put('/:id/edit', updatePatient);
router.get('/:id/delete', getFormDeletePatient);
router.delete('/:id/delete', deletePatient);

module.exports = router;