const {Router} = require("express");
const authRouter = Router();
const {postAuthHandler} = require("../Handlers/authHandler");
const {getAuthHandler} = require("../Handlers/authHandler");

//authRouter.post("/user/login", postAuthHandler);
authRouter.get("/",getAuthHandler)

module.exports = authRouter;