// npm that I need to require: express, Joi, axios
const { log } = require('console');
const express = require('express');
const app = express();
app.use(express.json());
const { env } = require('process');
const axios = require('axios').default;
axios.defaults.baseURL = 'https://swapi.dev/api';

const characters = [
    { id: 1, name: 'Pontus Skywalker' },
    { id: 2, name: 'Emperor Benno' },
    { id: 3, name: 'Darth Skontan' },
    { id: 4, name: 'Stromtrooper Noel' },
];


//GET requests
app.get('/', (req, res) => {
    res.send('In a Galaxy Far, Far Away...');
});

app.get('/collection', (req, res) => {
    res.send(characters);
});

app.get('/collection/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (!character) res.status(404).send('Given character was not found');

    res.send(character);
});

//POST requests
app.post('/add-character', async (req, res) => {
    try {
        const characterName = req.body.name;

        //Searches the swapi database from the given characterName.
        const swapiResponse = await axios.get(`/people/?search=${characterName}`);
        //Gets the data.name from the response and store it inside swapiName.
        const swapiName = swapiResponse.data.results[0].name;


        if (characterName === swapiName) {
            const newCharacter = {
                id: characters.length + 1,
                name: characterName
            };

            characters.push(newCharacter);
            res.send(`${newCharacter.name} has been added to the collection.`);
        }

        //The req.body.name can be 'Obi' and the swapi database returs the fullname. There for this else notice.
        else res.send(`Name input is wrong, maybe you meant ${swapiName}?`);
    }

    catch (error) {
        //Diplays error if the req.body.name is not found in swapi database.
        res.send('The character does not exist in the Swapi database.', error.message);
    }
});


//PUT requests

app.put('/swap-characters', (req, res) => {
    try {
        //Validate if the req structure is correctly formatted
        if (!req.body.characters || !Array.isArray(req.body.characters) || req.body.characters.length !== 2) return res.status(400).send('Invalid Request Structure');

        //Validate if the 2 names is found in the "characters array" otherwise error
        const invalidCharacters = req.body.characters.filter((char) => {
            return !characters.some((c) => c.name === char.name);
        });
        if (invalidCharacters.length === 1) return res.status(404).send('One character is invalid');
        if (invalidCharacters.length === 2) return res.status(404).send('Both characters is invalid');

        // Extract character names from the request body
        const [characterName1, characterName2] = req.body.characters.map((c) => c.name);

        // Find the characters in the "characters" array
        const character1 = characters.find((char) => char.name === characterName1);
        const character2 = characters.find((char) => char.name === characterName2);

        // Swap the characters in the array
        const index1 = characters.indexOf(character1);
        const index2 = characters.indexOf(character2);

        characters[index1] = character2;
        characters[index2] = character1;

        res.send(`You have swapped places with ${character1.name} and ${character2.name} succesfully!`);
    }
    catch (error) {
        console.error(error.message);
    }
});

//DELETE requests
app.delete('/collection/:id', (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (!character) res.status(404).send('Given character was not found');

    const index = characters.indexOf(character);

    if (character) characters.splice(index, 1);
    res.send(`The Character ${character.name} was removed.`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}...`));
