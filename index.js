// npm that I need to require: express, Joi, axios
const { log } = require('console');
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



const characters = [
    { id: 1, name: 'Pontus Norup' },
    { id: 2, name: 'Marvin Benno' },
    { id: 3, name: 'Noel Lundvist' },
];


//GET requests
app.get('/', (req, res) => {
    res.send('In a Galaxy Far, Far Away...');
});

app.get('/collection', (req, res) => {
    res.send(characters);
});

//POST requests

app.post('/add-character', async (req, res) => {
    try {
        const characterName = req.body.name;

        const swapiResponse = await axios.get(`https://swapi.dev/api/people/?search=${characterName}`);
        const swapiName = swapiResponse.data.results[0].name;

        if (characterName === swapiName) {
            const newCharacter = {
                id: characters.length + 1,
                name: characterName
            };

            characters.push(newCharacter);
            res.send(`${newCharacter.name} has been added to the collection.`);
        }

        else res.send(`Name input is wrong, maybe you meant ${swapiName}?`);
    }

    catch (error) {
        console.error('The character does not exist in the Swapi database.', error.message);
    }
});


//PUT requests
//DELETE requests

//validation functions


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}...`));