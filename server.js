const http = require('http');
const { readHTMLFile } = require('./utils/files');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    //Set response header content type
    res.setHeader('Content-Type', 'text/html');

    //Define the file's path (to be extended on switch)
    let path = "../views/";

    // Router
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me": //Redirect old page URL to new URL
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        case "/contact":
            path += "contact.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html"
            res.statusCode = 404;
            res.statusMessage = "Resource Not Found";
            break;
    }

    //Read corresponding HTML file for the requested URL
    try {
        const content = await readHTMLFile(path);
        res.end(content);
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.statusMessage = "Internal Server Error" + error
        res.end();
    }
})

server.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
})