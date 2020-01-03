const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const contrAgentSchema = new mongoose.Schema({
    company: {
        type: String,
    },
    full_name: {
        type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    status: {
        type: String,
    },
    INN: {
        type: String,
    },
    general_director: {
        type: String,
    },
    OGRN: {
        type: String,
    },
    email: {
        type: String,
    },
    agentGeo:{
        type:String,
        default:"none"
    },
    Date: {
        type: Date,
        default: Date.now
    },
    region:{//регион РФ
        type:String,
        default:"none"
    },
    specialications:{ //специализация
        type:String,
        default:"none"
    },
    tech:{ //техника 
        type:String,
        default:"none"
    },
    tags: [{
        type: Object
    }],
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    any: {
        type: String
    },
    legal_address: {
        type: String
    },
    actual_address: {
        type: String
    },
    payment_account: {
        type: String
    }
})
module.exports = mongoose.model("Agent", contrAgentSchema)
