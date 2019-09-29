const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { PORT, serverStartupMessage } = require('./settings/config');

const urls = require('./settings/urls');
urls(app); // Set the URLS to node app

app.listen(PORT, () => console.log(serverStartupMessage));
