const Vendedor = require("../../models/Vendedor");

const getAllVendedores = async () => {
  try {
    const vendedors = await Vendedor.find();
    return vendedors;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudieron obtener los vendedores");
  }
};

module.exports = getAllVendedores;
