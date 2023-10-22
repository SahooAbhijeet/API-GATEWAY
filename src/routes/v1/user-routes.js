const express = require('express');
const { UserController } = require('../../controllers');

const router = express.Router();

// /api/v1/signUp POST
router.post('/signUp', 
                UserController.signUp);

router.post('/signin', 
                UserController.signin);

module.exports = router;