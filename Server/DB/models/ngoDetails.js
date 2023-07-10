const mongoose = require('mongoose');

const NgoDetails = new mongoose.Schema({
    contactNGOEmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    organizationName: {
        type: String,
        unique: true,
        required: true
    },
    organizationWebsite: {
        type: String,
        required: true
    },
    missionStatement: {
        type: String,
        required: true,
    },
    contactPersonPhone: {
        type: Number,
        required: true
    },
    activitiesDescription: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
    },
    socialMediaLinks: {
        type: String,
        required: true
    },
    targetBeneficiaryGroups: {
        type: String,
        required: true
    },
    organizationType: {
        type: String,
        required: true
    },
    contactPersonName: {
        type: String,
        required: true
    },
    geographicFocus: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: 'NgoDetails' })

const model = mongoose.model('NgoDetails', NgoDetails);

module.exports = model;