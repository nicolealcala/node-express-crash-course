const express = require('express');
const path = require('path');

const blogs = require('../lib/data/blogs')

const PORT = 3000;

const projectRoot = path.resolve(__dirname, "../")

// Express app
const app = express();

//Register EJS View Engine in our app
app.set('view engine', 'ejs')
app.set('views', path.join(projectRoot, 'views/dynamic'))

//Routing
app.get('/', (req, res) => {
    res.render('index', { title: "Home", blogs })
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About Us" })
})

app.get('/about-us', (req, res) => {
    res.redirect('/about') // --> Redirecting
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create Blog" });
})

app.use((req, res) => { // --> Catch-all request handler, should always be the last for 404 response
    res.status(404).render('404', { title: "Not Found" })
})

app.listen(PORT, () => { console.log("Listening to port ", PORT) });