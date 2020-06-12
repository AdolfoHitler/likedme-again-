const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 4000; // environment
const app = express();

app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',expbhs({

    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));


app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {

    console.log('server on port', port);
   
});