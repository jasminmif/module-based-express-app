const PORT = 3000;
const serverStartupMessage = `Server is listening on port ${PORT}`;

const mongoUser = 'test';
const mongoPass = 'test';
const mongoUrl = `mongodb://${mongoUser}:${mongoPass}@testDb`;

module.exports = {
    PORT,
    serverStartupMessage
    // mongoUrl
};
