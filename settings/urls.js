/*
 * This file includes all of the app URLs,
 * which makes it easier to use on the app.js
 * and have a cleaner server startup script.
 */

const userUrls = require("../user/urls");
const githubUrls = require("../githubApp/urls");
const projectUrls = require("../project/urls");

const routes = app => {
    // app.use('/admin', adminUrls);
    app.use("/user", userUrls);
    app.use("/github", githubUrls);
    app.use("/project", projectUrls);
};

module.exports = routes;
