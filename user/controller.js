const UserService = require('./userService');

const UserCtrl = {
    login: async (req, res) => {
        res.send('Login Complete');
    },

    register: async (req, res) => {
        res.send('Registration Complete');
    },

    list: async (req, res) => {
        res.send('All Users List');
    }
};

module.exports = UserCtrl;
