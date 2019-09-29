const UserService = require('./userService');

const UserCtrl = {
    login: async (req, res) => {
        res.send('Login Complete');
    },

    register: async (req, res) => {
        res.send('Registration Complete');
    },

    list: async (req, res) => {
        const user = new UserService();
        res.send(user.list());
    }
};

module.exports = UserCtrl;
