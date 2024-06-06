const express = require('express');
const router = express.Router();
const { handleUserRegister } = require('../../controller/user/UserRegister');
const { handleUserLogin } = require('../../controller/user/UserLogin');

router.post('/register', handleUserRegister);
router.post('/login', handleUserLogin);

module.exports = router;
