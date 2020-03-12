const ProjectModel = require("./model");

class ProjectService {
    constructor(projectObj) {}

    static async getUserProjectByName(user, name) {
        let project = await ProjectModel.findOne({
            name: name
        }).exec();

        return project;
    }

    static async createProject(name, description, user) {
        let projectExists = await this.getUserProjectByName(user, name);

        if (projectExists) {
            // this needs to be fixed, when throwing errors on async, it fails to catch them on the main func.
            throw new Error(`Project with ${name} already exists!`);
        }

        let project = await ProjectModel.create({
            name,
            description,
            user,
            active: true
        });

        return project;
    }
}

module.exports = ProjectService;
