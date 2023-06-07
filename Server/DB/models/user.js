const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean
    }
},{collection: 'IMPACT_USER'})

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;