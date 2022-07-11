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

    await workSocialModel.create(body)

    res.redirect('/work-socials');
}

// TODO: Formulario edicion obra social
const updateFormWorkSocial = async (req, res) => {
    const workSocial = await workSocialModel.findOne({ "_id": req.params.id });

    //workSocial
    res.render('./workSocials/edit', { workSocial });
}

// TODO: Actualizacion de obra social
const putUpdateWorkSocial = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    await workSocialModel.findOneAndUpdate(id, body)

    res.redirect('/work-socials');
}

// TODO: Formulario de eliminacion de obra social
const getFormDelete = async (req, res) => {
    const workSocial = await workSocialModel.findOne({ "_id": req.params.id });
    res.render('./workSocials/delete', { workSocial })
}

// TODO: Eliminacion de obra social
const deleteItem = async (req, res) => {
    await workSocialModel.delete({ "_id": req.params.id });

    res.redirect('/work-socials');
}

module.exports = {
    getItems,
    getFormWorkSocial,
    postCreateWorkSocial,
    updateFormWorkSocial,
    putUpdateWorkSocial,
    getFormDelete,
    deleteItem
}