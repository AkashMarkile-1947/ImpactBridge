const mongoose = require('mongoose');

const NgoDocs = new mongoose.Schema({
    contactNGOEmail: {
        type: String,
        required: true,
        unique: true
    },
    orgName: {
        type: String,
        unique: true,
        required: true
    },

    regCert: {
        // name: String,
        file: Buffer
    },
    constiFile: {
        //  name: String,
        file: Buffer
    },
    financialStmt: {
        // name: String,
        file: Buffer
    },
    textExemption: {
        //  name: String,
        file: Buffer
    },
    bodFile: {
        // name: String,
        file: Buffer
    },
    projectReports: {
        //name: String,
        file: Buffer
    }
}, { collection: 'NgoDocs' })

const model = mongoose.model('NgoDocs', NgoDocs);

module.exports = model;