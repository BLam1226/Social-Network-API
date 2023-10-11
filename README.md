# Social-Network-API

## Description 
Challenge for week 18 module for UPenn LPS Full Stack Coding Bootcamp. This is a RESTful API for a social network web app that allows users to share their thoughts, react to friends' thoughts, and manage their friends list. The API is built using Express.js for routing, MongoDB for NoSQL database, and Mongoose as the ODM library. 

## Table of Contents
* [Project-Title](#project-title)
* [Project-Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [API-Endpoints](#api-endpoints)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
1. Clone the repository to your local machine.
2. Install dependencies using package.json
3. node index.js

## Usage
You can test and interact with the API using open source desktop applications like Insomnia Dev Tool.

## API-Endpoints
- `GET /api/users`: Get a list of all users.
- `GET /api/users/:userId`: Get a specific user by their ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update an existing user.
- `DELETE /api/users/:userId`: Delete a user.

- `GET /api/thoughts`: Get a list of all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a specific thought by its ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update an existing thought.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought.

- `POST /api/reactions/:thoughtId`: Create a reaction to a thought.
- `DELETE /api/reactions/:thoughtId/:reactionId`: Delete a reaction to a thought.

- `POST /api/friends/:userId`: Add a user to the friend list of another user.
- `DELETE /api/friends/:userId/:friendId`: Remove a user from the friend list.

## Contributing
N/A

## Tests
N/A

## License
This project is licensed under the MIT License. Click the License Badge for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Questions
  GitHub: [BLam1226](https://github.com/BLam1226)
  Email: brendanlam0@gmail.com