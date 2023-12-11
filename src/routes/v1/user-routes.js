const express = require('express');
const { UserController } = require('../../controllers');
const {AuthRequestMiddleware} = require('../../middlewares')
const router = express.Router();

// /api/v1/signUp POST
router.post('/signUp', AuthRequestMiddleware.validateAuthRequest, UserController.signUp);
router.post('/signin', AuthRequestMiddleware.validateAuthRequest, UserController.signin);
router.post('/role', AuthRequestMiddleware.checkAuth, AuthRequestMiddleware.isAdmin, UserController.addRoleToUser);
module.exports = router;