const userUrls = require('../user/urls');
const questionUrls = require('../question/urls');

const routes = app => {
    app.use('/user', userUrls);
    app.use('/question', questionUrls);
};

module.exports = routes;
