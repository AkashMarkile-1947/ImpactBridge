const mongoose = require('mongoose');

const NgoRequested = new mongoose.Schema({
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
    },
    isBlocked: {
        type: Boolean,
        required: true
    }
}, { collection: 'NgoRequested' })

const model = mongoose.model('NgoRequested', NgoRequested);

module.exports = model;