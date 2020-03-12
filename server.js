const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view-engine", "ejs");

const { PORT, serverStartupMessage, mongoUrl } = require("./settings/config");

mongoose.connect(mongoUrl, { useNewUrlParser: true }).catch(err => {
    console.log(err);
});

const urls = require("./settings/urls");
urls(app); // Set the URLS to node app

app.listen(PORT, () => console.log(serverStartupMessage));
