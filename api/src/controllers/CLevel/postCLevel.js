const CLevel = require('../../models/CLevel');

const postCLevel = async ({
	Name,
	Email,
	Birthdate,
	Photo,
	Country,
	ContactNumber,
	Description,
	Deleted,
}) => {
	const cLevel = await CLevel.create({
		Name,
		Email,
		Birthdate,
		Photo,
		Country,
		ContactNumber,
		Description,
		Deleted,
	});
	return cLevel;
};

module.exports = postCLevel;
