const getAllCorredores = require("../controllers/Corredor/getAllCorredores");
const getCorredorById = require("../controllers/Corredor/getCorredorById");
const getCorredorByName = require("../controllers/Corredor/getCorredorByName");
const postCorredor = require("../controllers/Corredor/postCorredor");
const updateCorredorById = require("../controllers/Corredor/updateCorredorById");
const updateLeadsCorredorByEmail = require("../controllers/Corredor/updateLeadsCorredor");

const getAllCorredoresHandler = async (req, res) => {
  try {
    const corredores = await getAllCorredores();
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postCorredorHandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const corredores = await postCorredor(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateCorredorHandler = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  try {
    const corredores = await updateCorredorById(id, updatedData);
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCorredorByNameHandler = async (req, res) => {
  const { Name } = req.query;

  try {
    const corredores = await getCorredorByName(Name);
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCorredorByIdHandler = async (req, res) => {
  const id = req.params.id;

  try {
    const corredores = await getCorredorById(id);
    res.status(200).json(corredores);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateCorredorByEmailHandler = async (req, res) => {
  const email = req.query.email;
  const newLeads = req.body;

  try {
    const updatedCorredor = await updateLeadsCorredorByEmail(email, newLeads);
    return res.json(updatedCorredor);
  } catch (error) {
    console.error("Error al actualizar el corredor:", error);
    return res.status(500).json({ error: "Error al actualizar el corredor" });
  }
};

module.exports = {
  getAllCorredoresHandler,
  postCorredorHandler,
  updateCorredorHandler,
  getCorredorByIdHandler,
  getCorredorByNameHandler,
  updateCorredorByEmailHandler,
};
