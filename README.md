# API with Typescript

In this sproject, I built the back-end for a Tic Tac Toe game.

## Getting Started 🚀

* Clone this repo
* Run `yarn` to install the dependencies
* Run `yarn compile` or `tsc -w` to compile from Typescript to Javascript, in a seperate window.
* Run `yarn start` or `node .` or `nodemon .` to create the tables in your running Postgres database. 
* Send a http request from your terminal to test it out!

### Endpoints:

* `GET /games`: list all games
* `GET /games/:id`: select game by id
* `POST /games`: add new game
* `PUT /games/:id`: update an existing game (game moves)
