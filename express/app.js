const express = require('express');
const path = require('path');

const PORT = 3000;

const projectRoot = path.resolve(__dirname, "../")

// Express app
const app = express();

//Register EJS View Engine in our app
app.set('view engine', 'ejs')
app.set('views', path.join(projectRoot, 'views/dynamic'))

//Routing
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/about-us', (req, res) => {
    res.redirect('/about') // --> Redirecting
})

app.get('/blogs/create', (req, res) => {
    res.render('create');
})

app.use((req, res) => { // --> Catch-all request handler, should always be the last for 404 response
    res.status(404).render('404')
})

app.listen(PORT, () => { console.log("Listening to port ", PORT) });