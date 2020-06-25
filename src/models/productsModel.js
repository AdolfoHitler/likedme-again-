const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const products_registerSchema = new Schema({
	nameProduct: {
		type: String,
		required: [true, "nameProduct null"],
	},
	type: {
		type: String,
		required: [true, "type null"],
	},
	quantity: {
		type: Number,
		required: [true, "quantity null"],
	},
	price: {
		type: Number,
		required: [true, "price null"],
    },
    available:{
        type: Boolean,
		required: [true, "available null"],
    }
});
module.exports = mongoose.model("Products", products_registerSchema);
