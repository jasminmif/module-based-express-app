const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    active: Boolean,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "UserModel" }]
});

const projectModel = mongoose.model("ProjectModel", projectSchema);

module.exports = projectModel;
