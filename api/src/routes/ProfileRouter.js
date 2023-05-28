
const {Router} = require("express")
const {updateProfileHandler} = require("../Handlers/profileHandler")

const ProfileRouter = Router();

ProfileRouter.put("/profile", updateProfileHandler);

module.exports = ProfileRouter;
