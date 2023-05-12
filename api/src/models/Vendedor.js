const mongoose = require('mongoose');
const validator = require('validator');

const VendedorSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			require: true,
		},
		Email: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		Birthdate: {
			type: Date,
			required: true,
		},
		Photo: {
			type: String,
		},
		Country: {
			type: String,
		},
		ContactNumber: {
			type: String,
		},
		Description: {
			type: String,
		},
		Leads_contacted: {
			type: String,
		},
		Hired_leads: {
			type: String,
		},
		Declined_leads: {
			type: String,
		},
		Unanswered_leads: {
			type: String,
		},
		Deleted: {
			type: Boolean,
			default: false,
			select: false,
		},
	},
	{ timestamps: true }
);

VendedorSchema.pre('find', function () {
	this.where({ deleted: false });
});

const Vendedor = new mongoose.model('vendedor', VendedorSchema);

module.exports = Vendedor;
