const Lead = require('../../models/Lead');

const getAllLeads = async () => {
	const leads = await Lead.findOne();
	return leads;
};

module.exports = getAllLeads;
