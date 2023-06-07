import express from 'express'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


// fs is een nodemodule die ervoor zorgt dat je bij je locale bestanden kunt
const fs = require('fs');
const jsonData = fs.readFileSync('beau-ter-ham.json');
const data = JSON.parse(jsonData);

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))


// Maak een route voor de index


app.get('/', (request, response) => {

    // Read the JSON file
    console.log("bliep")
    console.log(data);
    response.render('index', { data: data });
})





// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 7000)
app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => error)
}