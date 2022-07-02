const { patientModel, workSocialModel } = require('../models');

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
    const cantQ = 23;

    let health_question = [];

    // Creacion de array con variables dinamicas
    for (let index = 1; index <= cantQ; index++) {
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
        let k = "q"+index;
        delete body[k];
    }

    body.health_question = health_question;
        
    await patientModel.create(body)

    res.redirect('/patients');
}

module.exports = {
    getItems,
    getPatient,
    getFormPatient,
    postCreatePatient
}