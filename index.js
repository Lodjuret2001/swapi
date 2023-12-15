// npm that I need to require: express, Joi, axios
const express = require('express');
const app = express();
app.use(express.json());
const Joi = require('joi');
const { env } = require('process');
const axios = require('axios').default;
axios.defaults.baseURL = 'https://swapi.dev/api';

// ### 1. **Add Star Wars Characters:**

// - Implement an endpoint to add Star Wars characters to your API.
// - Validate the character name against the Swapi database.
// - If the character exists, add it to your API's data storage.






//GET requests
axios.get('/people/3')
    .then((response) => console.log((response.data.name)))
    .catch((error) => console.log((error.message)));

app.get('/', (req, res) => {
    res.send('Hello World');
});

//POST requests

app.post('/add-charater', (req, res) => {

})


//PUT requests
//DELETE requests

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}...`));