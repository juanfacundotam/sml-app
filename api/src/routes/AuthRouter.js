const {Router} = require("express");
const authRouter = Router();
const {postAuthHandler} = require("../Handlers/authHandler");
const {getAuthHandler} = require("../Handlers/authHandler");

authRouter.get("/",getAuthHandler)

module.exports = authRouter;