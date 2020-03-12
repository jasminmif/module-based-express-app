const UserService = require("./userService");
const response = require("../util/response");

const UserCtrl = {
    login: async (req, res) => {
        res.send("Login Complete");
    },

    register: async (req, res) => {
        const { firstName, lastName, username, password } = req.body;

        const user = await UserService.register(
            firstName,
            lastName,
            username,
            password
        ).catch(err => {
            response.badRequest(res, err.message);
        });

        response.success(res, "Successfully created new user");
    },

    getAllUsers: async (req, res) => {
        const userList = await UserService.getAllUsers();

        response.success(res, "", userList);
    }
};

module.exports = UserCtrl;
