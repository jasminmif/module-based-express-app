const express = require("express");
var router = express.Router();

const UserCtrl = require("./controller");
const BaseAuthentication = require("../middleware/baseAuthentication");

router.post("/login", UserCtrl.login);
router.post("/register", UserCtrl.register);
router.get("/get-all-users", UserCtrl.getAllUsers);

module.exports = router;
