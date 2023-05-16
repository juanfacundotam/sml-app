const { Router } = require("express");
const {
  postCorredorHandler,
  getAllCorredoresHandler,
  updateCorredorHandler,
  getCorredorByIdHandler,
  getCorredorByNameHandler,
} = require("../Handlers/CorredorHandlers");
const CorredorRouter = Router();

console.log("entro");
CorredorRouter.post("/", postCorredorHandler);
CorredorRouter.get("/", getAllCorredoresHandler);
CorredorRouter.get("/name", getCorredorByNameHandler);
CorredorRouter.get("/:id", getCorredorByIdHandler);
CorredorRouter.put("/:id", updateCorredorHandler);

module.exports = CorredorRouter;
