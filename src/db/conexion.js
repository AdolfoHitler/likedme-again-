const mongoose = require("mongoose");
require("../config/config");
/*
Usamos mongoose para conectarnos a nuestra db ---> 'data_base1'
corriendo en el puerto ---> mongodb://localhost:27017
*/
mongoose.connect(
	process.env.URLDB,
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	(err, res) => {
		if (err) throw err; //  <--------------Obteniendo el error
		console.log("MongoDB initiated");
	}
);

module.exports = mongoose;
