const mongoose =   require('mongoose');

const GatewaySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cardNo: {
        type: Number,
        required: true,
    },
    expiryDate: {
        type: String,
        required: true,
    },
    cardHolder: {
        type: String,
        required: true,
    },
    modeOfTransaction: {
        type: String,
        required: true,
    },
    Mission: {
        type: String,
        required: true,
    },
    ammount: {
        type: String,
        required: true,
    }
    ,timestamp: {
        type: String,
        required: true,
    }
}, {collection: "NgoTransactions"});

const model = mongoose.model('GatewaySchema', GatewaySchema);

module.exports = model;