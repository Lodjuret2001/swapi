**Star Wars Character Collection API**

**About**

The Star Wars Character Collection API is a simple Node.js application that allows you to manage a collection of Star Wars characters. You can add, retrieve, update, and delete characters from your collection using HTTP requests.

**Prerequisites**

Before you get started, ensure you have the following dependencies installed:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **Express**: Install using npm (Node Package Manager) by running `npm install express`
- **Joi**: Install using npm by running `npm install joi`
- **Axios**: Install using npm by running `npm install axios`

**Installation**

1. **Clone the repository:**
git clone https://github.com/Lodjuret2001/swapi

2. **Navigate to the project directory:**
cd star-wars-character-collection-api

3. **Install project dependencies:**
npm install

The server should now be running on the specified port (default is 3000).

**Usage**

**Endpoints**

- **GET /**

- **Description:** Home page.
- **Example:** https://localhost:3000/

- **GET /collection**

- **Description:** Retrieve the list of Star Wars characters in the collection.
- **Example:** https://localhost:3000/collection

- **GET /collection/:id**

- **Description:** Retrieve a specific character from the collection by ID.
- **Example:** https://localhost:3000/collection/1

- **POST /add-character**

- **Description:** Add a character to the collection by specifying their name.
- **Example:** https://localhost:3000/add-character

**Request Body:**
{
"name": "Character Name"
}

- **POST /the-choosen-one**

- **Description:** Add the chosen one to the collection.
- **Example:** https://localhost:3000/the-choosen-one

**Request Body:**
{
"name": "The Chosen One"
}

- **PUT /swap-characters**

- **Description:** Swap the positions of two characters in the collection.
- **Example:** https://localhost:3000/swap-characters

**Request Body:**
{
"characters": [
{
"name": "Character Name 1"
},
{
"name": "Character Name 2"
}
]
}

- **DELETE /collection/:id**

- **Description:** Remove a character from the collection by ID.
- **Example:** https://localhost:3000/collection/1

**Contributing**

Feel free to contribute to this project by opening issues or pull requests. Your contributions are welcome!

**License**

This project is licensed under the MIT License.

**Acknowledgments**

Thanks to the Star Wars universe for providing awesome characters!
Mention any external libraries or tools used during development.
Give credit to contributors if applicable.


