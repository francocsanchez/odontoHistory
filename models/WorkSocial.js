const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const workSocialSchema = new mongoose.Schema(
    {
        name: { type: String }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

workSocialSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('workSocial', workSocialSchema);