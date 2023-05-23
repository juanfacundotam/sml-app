const Vendedor = require('../../models/Vendedor');

const getVendedorByEmail = async (email) => {

	// const regex = new RegExp(email, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const vendedor = await Vendedor.findOne({ email: email });
	return vendedor;
};

module.exports = getVendedorByEmail;
