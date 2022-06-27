const { workSocialModel } = require('../models');

// TODO: Listar usuarios
const getWorkSocials = async (req, res) => {
    const data = await workSocialModel.find({});

    res.send({ data });
}

// TODO: Crear obra social
const postCreateWorkSocial = async (req, res) => {
    const { body } = req;

    const workSocial = await workSocialModel.create(body)

    res.send({ workSocial });
}

module.exports = {
    getWorkSocials,
    postCreateWorkSocial
}