const { patientModel, workSocialModel } = require('../models');

// Cantidad de preguntas en formulario de pacientes.
const cantQ = 22;

// TODO: Listar pacientes
const getItems = async (req, res) => {
    const patients = await patientModel.find({}).sort({ lastname: 1 }).populate('workSocial');

    res.render('./patients/list', { patients });
}

// TODO: Listar paciente
const getPatient = async (req, res) => {
    const patient = await patientModel.findOne({ "_id": req.params.id }).populate('workSocial');

    res.render('./patients/show', { patient });
}

// TODO: Formulario crear paciente
const getFormPatient = async (req, res) => {
    const workSocials = await workSocialModel.find({}).sort({ name: 1 });
    res.render('./patients/create', { workSocials });
}

// TODO: Crear paciente
const postCreatePatient = async (req, res) => {
    const { body } = req;

    let health_question = [];

    // Creacion de array con variables dinamicas
    for (let index = 0; index <= cantQ; index++) {
        let r = 'req.body.q';

        let status = eval(r + index + '[1]');

        if (status == "Si") { status = true } else { status = false }

        let question = {
            question: eval(r + index + '[0]'),
            status: status,
            description: eval(r + index + '[2]')
        };
        health_question.push(question);

        // Eliminando preguntas enviadas desde el formulario
        let k = "q" + index;
        delete body[k];
    }

    body.health_question = health_question;

    await patientModel.create(body)

    res.redirect('/patients');
}

// TODO: Formulario edicion paciente
const updateFormPatient = async (req, res) => {
    const workSocials = await workSocialModel.find({}).sort({ name: 1 });
    const patient = await patientModel.findOne({ "_id": req.params.id });

    //workSocial
    res.render('./patients/edit', { workSocials, patient });
}

//TODO: Actualizar paciente
const updatePatient = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    let health_question = [];

    // Creacion de array con variables dinamicas
    for (let index = 0; index <= cantQ; index++) {
        let r = 'req.body.q';

        let status = eval(r + index + '[1]');

        if (status == "Si") { status = true } else { status = false }

        let question = {
            question: eval(r + index + '[0]'),
            status: status,
            description: eval(r + index + '[2]')
        };
        health_question.push(question);

        // Eliminando preguntas enviadas desde el formulario
        let k = "q" + index;
        delete body[k];
    }

    body.health_question = health_question;

    await patientModel.findByIdAndUpdate(id, body);

    res.redirect('/patients');
}

//TODO: Formulario de eliminacion de paciente
const getFormDeletePatient = async (req, res) => {
    const patient = await patientModel.findOne({ "_id": req.params.id }).populate('workSocial');

    res.render('./patients/delete', { patient });
}

//TODO: Eliminar paciente
const deletePatient = async (req, res) => {
    await patientModel.delete({ "_id": req.params.id });

    res.redirect('/patients');
}

module.exports = {
    getItems,
    getPatient,
    getFormPatient,
    postCreatePatient,
    updateFormPatient,
    updatePatient,
    getFormDeletePatient,
    deletePatient
}