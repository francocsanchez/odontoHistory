const mongoose = require('mongoose');

const workSocialSchema = new mongoose.Schema(
    {
        name: { type: String }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('workSocial', workSocialSchema);