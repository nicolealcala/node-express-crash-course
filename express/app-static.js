const express = require('express');
const path = require('path');
const PORT = 3000;

const projectRoot = path.resolve(__dirname, '../')

// Express app
const app = express();


//Routing
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: projectRoot })
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: projectRoot })
})

app.get('/about-us', (req, res) => {
    res.redirect('/about') // --> Redirecting
})

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', { root: projectRoot })
})

app.use((req, res) => { // --> Catch-all request handler, should always be the last for 404 response
    res.status(404).sendFile('./views/404.html', { root: projectRoot })
})


app.listen(PORT, () => { console.log("Listening to port ", PORT) });