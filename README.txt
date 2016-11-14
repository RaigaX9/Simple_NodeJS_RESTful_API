# Simple_NodeJS_RESTful_API

## Introduction
This is a simple NodeJS application using Express, MongoDB and Mongoose
for doing RESTful Services.

## Technologies
- NodeJS
- Express
- BodyParser
- Mongoose
- MongoDB

## Instructions
1. Install NodeJS
2. Install MongoDB
3. After setting up MongoDB environment as well as setting up the data folder (e.g. C:/data/db),
open up the command prompt and run `mongod.exe` to start up the server for it.
4. Open another command prompt and type `mongo.exe` to open up MongoDB
5. For the database being used in `main.js`, it's using the name `simpleapi` so within the command prompt
that is running `mongo.exe`, type `use simpleapi` to create the database for it.
6. Download the project
7. Open another command prompt, navigate to the root folder, and type `npm install`
8. Run the application by doing `node main.js` in which it will be running on `localhost:8080`
9. Make sure it is running both the server and have it connected to MongoDB from what's being printed.
(`Running on http://127.0.0.1:8080/` and  `Connection established to mongodb://localhost:27017/simpleapi`)
10. Download Postman or any REST clients to perform the rest calls.
11. To do POST, copy `http://localhost:8080/api/address/add` into the url, change the setting to POST, and two addresses
will be added (based on the data from `main.js`.
12. To do GET, copy `http://localhost:8080/api/address/list` into the url, change the setting to GET, and you'll see the two
addresses that were inserted.