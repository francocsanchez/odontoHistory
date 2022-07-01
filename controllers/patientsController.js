const { patientModel } = require('../models');

// TODO: Listar pacientes
const getItems = async (req, res) => {
    const patients = await patientModel.find({}).populate('workSocial');

    res.render('./patients/list', { patients });
}

// TODO: Listar paciente
const getPatient = async (req, res) => {
    const patient = await patientModel.findOne({ "_id": req.params.id }).populate('workSocial');

    res.render('./patients/show', { patient });
}

// TODO: Formulario crear paciente
const getFormPatient = async (req, res) => {
    const patient = await patientModel.findOne({ "_id": req.params.id }).populate('workSocial');

    res.render('./patients/create');
}

// TODO: Crear paciente
const postCreatePatient = async (req, res) => {
    const { body } = req;

    const patient = await patientModel.create(body)

    res.send({ patient });
}

module.exports = {
    getItems,
    getPatient,
    getFormPatient,
    postCreatePatient
}