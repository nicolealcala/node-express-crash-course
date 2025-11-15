const fs = require('fs/promises');

async function readHTMLFile(path) {
    return await fs.readFile(path)
}

module.exports = { readHTMLFile }