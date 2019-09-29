const userUrls = require('../user/urls');

const routes = app => {
    app.use('/user', userUrls);
};

module.exports = routes;
