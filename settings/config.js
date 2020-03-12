const PORT = 3000;
const serverStartupMessage = `Server is listening on port ${PORT}`;

const mongoUser = "jasmin";
const mongoPass = "Jaci1234";
const mongoDbName = "ds341605.mlab.com:41605/access-the-project";
const mongoUrl = `mongodb://${mongoUser}:${mongoPass}@${mongoDbName}`;

module.exports = {
    PORT,
    serverStartupMessage,
    mongoUrl
};
