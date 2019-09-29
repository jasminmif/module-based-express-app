const express = require('express');
var router = express.Router();

const UserCtrl = require('./controller');
const BaseAuthentication = require('../middleware/baseAuthentication');

router.get('/', UserCtrl.list);
router.get('/register', BaseAuthentication.authUser, UserCtrl.register);
router.post('/login', UserCtrl.login);

module.exports = router;
