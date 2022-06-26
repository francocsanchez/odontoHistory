const { userModel } = require('../models');

// TODO: Listar usuarios
const getUsers = async (req, res) => {
    const data = await userModel.find({});
    
    res.send({ data });
}

module.exports = {
    getUsers
}