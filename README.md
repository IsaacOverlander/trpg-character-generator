## TRPG-Character Generator

This application is used to randomly generate Table Top Role-Playing Game characters, it was created to reduce the time required to create characters at the start of a new campaign (a process that can take up to 4 hours).
Currently the applications only supports Dungeons and Dragons characters, but in the future I plan to incorporate more TRPG's.

## Technologies and Languages

- React
- Redux
- Sagas
- Node.js
- postgreSQL
- Express.js
- Material-ui

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `trpg` and run the SQL queries in database.sql table:

If you would like to name your database something else, you will need to change `trpg` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

