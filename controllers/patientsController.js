const { patientModel } = require('../models');

// TODO: Listar pacientes
const getPatients = async (req, res) => {
    const data = await patientModel.find({});

    res.send({ data });
}

// TODO: Listar paciente
const getPatient = async (req, res) => {
    const patient = await patientModel.findOne({ "_id": req.params.id })

    res.send({ patient })
}

// TODO: Crear paciente
const postCreatePatient = async (req, res) => {
    const { body } = req;

    const patient = await patientModel.create(body)

    res.send({ patient });
}

module.exports = {
    getPatients,
    getPatient,
    postCreatePatient
}