const { UserService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const {SuccessResponse, ErrorResponse} = require('../utils/common');

async function signUp(req, res) {
    try {
        const user = await UserService.createUser({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error); 
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    signUp
}