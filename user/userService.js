// Used for common shared functionality of the User.
// for example: userService.authentication ...

// const UserModel = require('./model');

class UserService {
    constructor(userObj) {
        this.id = userObj.id;
        this.token = userObj.tokenl;
    }

    static async getById(id) {
        // var user = await UserModel.findOne({ _id: id }).exec();
        return new User({ id: 1, token: '123-456-789' });
    }

    static async authenticate(tokenString) {
        // get user in mode
        return true;
    }
}
