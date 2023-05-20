const Corredor = require('../../models/Corredor');

const getCorredorByName = async (name) => {
	const regex = new RegExp(name, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const corredor = await Corredor.find({ name: { $regex: regex } });
	return corredor;
};

module.exports = getCorredorByName;
