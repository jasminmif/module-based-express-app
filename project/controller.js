const ProjectService = require("./projectService");
const response = require("../util/response");

const ProjectCtrl = {
    createProject: async (req, res) => {
        const { name, description } = req.body;

        const project = await ProjectService.createProject(
            name,
            description,
            req.user
        ).catch(err => {
            response.badRequest(res, err);
        });

        response.success(res, "Successfully created project!", project);
    }
};

module.exports = ProjectCtrl;
