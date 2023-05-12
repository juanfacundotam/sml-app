const Corredor = require('../../models/Corredor');

const getAllCorredores = async () => {
	const corredor = await Corredor.findOne();
	return corredor;
};

module.exports = getAllCorredores;
