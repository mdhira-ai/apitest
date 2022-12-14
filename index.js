const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const userinfo = require('./controller/userinfo.controller.js')
const cors = require("cors");
// const functions = require('firebase-functions')

const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

const PORT = process.env.PORT || 8080;


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ratemebro.com api." });
})

// Create a new Tutorial
app.post("/add", userinfo.create);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });





// exports.app = functions.https.onRequest(app);