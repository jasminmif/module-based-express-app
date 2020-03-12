// Used for common shared functionality of the User.
// for example: userService.authentication ...

const UserModel = require("./model");

class UserService {
    constructor(userObj) {
        // this.id = userObj.id;
        // this.token = userObj.tokenl;
    }

    static async getById(id) {
        var user = await UserModel.findOne({ _id: id }).exec();
    }

    static async authenticate(tokenString) {
        // get user in mode
        return true;
    }

    static async register(firstName, lastName, username, password) {
        /*
            {
                "username": "jasmin",
                "firstName": "Jasmin",
                "lastName": "Miftari",
                "password": "jasmin"
            }
        */
        let userExists = await UserModel.findOne({ username: username }).exec();

        if (userExists) {
            throw new Error("This user already exists!");
        }

        let user = await UserModel.create({
            firstName,
            lastName,
            username,
            password
        });

        return user;
    }

    static async getAllUsers() {
        let users = await UserModel.find({}, { password: 0 }).exec();

        return users;
    }
}

module.exports = UserService;
