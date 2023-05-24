const {Router} = require("express");
const authRouter = Router();
const {getAuthHandler} = require("../Handlers/authHandler");

authRouter.get("/",getAuthHandler)

module.exports = authRouter;