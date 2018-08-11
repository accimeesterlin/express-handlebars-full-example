const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');


app.engine('handlebars', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout')
}));

app.set('view engine', 'handlebars');

// Routing 
app.get('/', (req, res) => {
    res.render('index');
});


app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});