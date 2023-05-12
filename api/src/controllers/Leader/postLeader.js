const Leader = require('../../models/Leader');

const postLeader = async ({
	Name,
	Email,
	Birthdate,
	Photo,
	Country,
	ContactNumber,
	Description,
	Deleted,
}) => {
	const leader = await Leader.create({
		Name,
		Email,
		Birthdate,
		Photo,
		Country,
		ContactNumber,
		Description,
		Deleted,
	});
	return leader;
};

module.exports = postLeader;
