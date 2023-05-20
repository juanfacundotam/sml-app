const Leader = require('../../models/Leader');

const getLeaderByName = async (name) => {
	const regex = new RegExp(name, 'i'); // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
	const leader = await Leader.find({ name: { $regex: regex } });
	return leader;
};

module.exports = getLeaderByName;
