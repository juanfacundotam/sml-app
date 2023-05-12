const Lead = require('../../models/Lead');

const postLead = async ({
	From,
	Name,
	Profession,
	Email,
	Contact_number,
	Web,
	Instagram,
	Level,
	Status,
	Deleted,
}) => {
	const lead = await Lead.create({
		From,
		Name,
		Profession,
		Email,
		Contact_number,
		Web,
		Instagram,
		Level,
		Status,
		Deleted,
	});
	return lead;
};

module.exports = postLead;
