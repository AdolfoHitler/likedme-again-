const express = require("express");
let app = express();
app.use(require("./productsRouter"));
app.use(require("./stripeRouter"));

module.exports = app;
