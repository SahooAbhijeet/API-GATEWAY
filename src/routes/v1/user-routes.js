const express = require('express');
const { UserController } = require('../../controllers');

const router = express.Router();

// /api/v1/signUp POST
router.post('/', 
                UserController.signUp);

module.exports = router;