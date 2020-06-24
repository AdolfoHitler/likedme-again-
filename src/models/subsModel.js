const mongoose = require('mongoose')
const Schema = mongoose.Schema
const  subs_registerSchema = new Schema({
    typeSubs: {
        type: String,
        required:[true,'type null'],
    },
    quantitySubs: {
        type: Number,
        required:[true,'description null'],
    },
    price:{
        type: Number,
        required:[true,'price null'],
    },
})
module.exports = mongoose.model('Subs', subs_registerSchema)
