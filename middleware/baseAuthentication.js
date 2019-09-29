const BaseAuthentication = {
    authUser: async (req, res, next) => {
        console.log('Middleware for User Authentication');
        const authToken = req.header('Authorization') || '';
        if (authToken) {
            next();
        }

        res.send('Unauthorized');
    }
};

module.exports = BaseAuthentication;
