const Leader = require('../../models/Leader');

const getAllLeaders = async () => {
	const leaders = await Leader.findOne();
	return leaders;
};

module.exports = getAllLeaders;
