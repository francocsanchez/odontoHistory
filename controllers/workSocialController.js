const { workSocialModel } = require('../models');

// TODO: Listar obras sociales
const getItems = async (req, res) => {
    const workSocials = await workSocialModel.find({}).sort({ name: 1 });

    res.render('./workSocials/list', { workSocials });
}

// TODO: Formulario crear obra social
const getFormWorkSocial = async (req, res) => {
    res.render('./workSocials/create');
}

// TODO: Crear obra social
const postCreateWorkSocial = async (req, res) => {
    const { body } = req;

    return res.send(body);
    await workSocialModel.create(body)

    res.redirect('/work-socials');
}

// TODO: Formulario edicion paciente

const updateFormPatient = async (req, res) => {
    const workSocials = await workSocialModel.find({}).sort({ name: 1 });
    const patient = await patientModel.findOne({ "_id": req.params.id });

    //workSocial
    res.render('./patients/edit', { workSocials, patient });
}

const putUpdatePatient = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    return res.send(body);

    const cantQ = 22;

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

    await patientModel.findOneAndUpdate(id, body)

    res.redirect('/patients');
}

module.exports = {
    getItems,
    getFormWorkSocial,
    postCreateWorkSocial
}