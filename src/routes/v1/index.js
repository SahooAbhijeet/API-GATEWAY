const express = require('express');

const {InfoController} = require('../../controllers');
const {AuthRequestMiddleware} = require('../../middlewares');
const userRoutes = require('./user-routes');
const router = express.Router();

router.get('/info', AuthRequestMiddleware.checkAuth, InfoController.info)
router.use('/user', userRoutes);

module.exports = router;