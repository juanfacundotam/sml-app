const Vendedor = require('../../models/Vendedor');

const postVendedor = async ({
	Name,
	Email,
	Birthdate,
	Photo,
	Country,
	ContactNumber,
	Description,
	Leads_contacted,
	Hired_leads,
	Declined_leads,
	Unanswered_leads,
	Deleted,
}) => {
	const vendedor = await Vendedor.create({
		Name,
		Email,
		Birthdate,
		Photo,
		Country,
		ContactNumber,
		Description,
		Leads_contacted,
		Hired_leads,
		Declined_leads,
		Unanswered_leads,
		Deleted,
	});
	return vendedor;
};

module.exports = postVendedor;
