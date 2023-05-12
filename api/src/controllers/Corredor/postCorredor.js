const Corredor = require('../../models/Corredor');

const postCorredor = async ({
	Name,
	Email,
	Birthdate,
	Photo,
	Country,
	ContactNumber,
	Description,
	Classifications,
	Average_delay,
	Incidences,
	Hired_leads,
	Deleted,
}) => {
	const corredor = await Corredor.create({
		Name,
		Email,
		Birthdate,
		Photo,
		Country,
		ContactNumber,
		Description,
		Classifications,
		Average_delay,
		Incidences,
		Hired_leads,
		Deleted,
	});
	return corredor;
};

module.exports = postCorredor;
