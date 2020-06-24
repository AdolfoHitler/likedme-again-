/*
*
*      Dependencias node
*
*/
const express = require("express");
const expbhs = require("express-handlebars");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
/*
*
*      requiriendo configuracion de environment
*
*/
require("./config/config");
/*
*
*      requiriendo conexion mongodb
*
*/
require('./db/conexion')
/*
*
*      Inicializando y configurando dependencias
*
*/
const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/*
*
*      template engine
*
*/
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  expbhs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.get("/", (req, res) => res.render("index"));
/*
*
*      requiriendo rutas http
*
*/
app.use(require("./routes/index"));
/*
*
*      Archivos estaticos
*
*/
app.use(express.static(path.join(__dirname, "public")));
/*
*
*      Inicializando server
*
*/
app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor http://localhost:${process.env.PORT}`);
});
