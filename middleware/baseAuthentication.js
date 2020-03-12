const BaseAuthentication = {
    authUser: async (req, res, next) => {
        const authToken = req.header("Authorization") || "";
        if (authToken) {
            req.user = "5e682df6a2cc0f409c5a654d";
            next();
        }

        res.send("Unauthorized");
    }
};

module.exports = BaseAuthentication;
