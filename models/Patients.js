const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        name: String,
        lastname: String,
        dni: {
            type: Number,
            unique: true
        },
        phone: { type: String },
        email: { type: String },
        number_affiliate: {
            type: String,
            unique: true
        },
        date_birth: { type: Date },
        workSocial: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'workSocial'
        },
        health_question: [
            {
                question: { type: String },
                status: { type: Boolean },
                description: { type: String }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('patients', patientSchema);