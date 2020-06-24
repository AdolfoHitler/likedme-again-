const express = require("express");
let app = express();
app.use(require("./productsRouter"));
app.use(require("./stripeRouter"));
app.use(require("./adminRouter"));

module.exports = app;
