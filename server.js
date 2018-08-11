const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/handlers');


app.engine('handlebars', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    partialsDir: path.join(__dirname, 'views/pieces')
}));

app.set('view engine', 'handlebars');


app.use('/', routes);



app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});