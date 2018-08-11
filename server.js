const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/handlers');


const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    partialsDir: path.join(__dirname, 'views/pieces'),

    // create custom helpers
    helpers: {
        calculation: function(value) {
            return value * 5;
        },

        list: function(value, options) {
            // value = people
            let out = "<ul>";

            for (let i = 0; i < value.length; i++) {
                out = out + "<li>" +  options.fn(value[i]) + "</li>";
            }

            return out + "</ul>";

        }
    }
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/', routes);



app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});