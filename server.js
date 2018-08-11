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
    res.render('index', {
        title: 'Home Page',
        name: 'Esterling Accime',
        age: 5,
        isDisplayName: true,
        isAgeEnabled: true
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, eligendi eius! Qui'
    });
});



app.get('/dashboard', (req, res) => {

    res.render('dashboard', {
        isListEnabled: true,
        author: {
            firstName: 'Peter',
            lastName: 'James',
            project: {
                name: 'Build Random Quote'
            }
        }
    });
});


app.get('/contact', (req, res) => {
    res.render('contact', {
        people: [
            "James",
            "Peter",
            "Sadrack",
            "Morissa"
        ], 
        user: {
            username: 'accimeesterlin',
            age: 20,
            phone: 4647644
        },

        lists: [
            {
                items: ['Mango', 'Banana', 'Pineapple']
            },

            {
                items: ['Potatoe', 'Manioc', 'Avocado']
            }
        ]
    });
});

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});