const {Router} = require("express");
const authRouter = Router();
const {postAuthHandler} = require("../Handlers/authHandler");
const {getAuthHandler} = require("../Handlers/authHandler");
const {veryfyToken}= require("../middleware/veryfyToken")

authRouter.post("/user/login", postAuthHandler);
authRouter.get("/user/:id/ventas",veryfyToken, getAuthHandler)

module.exports = authRouter;