const mongoose = require('mongoose');
const validator = require('validator');

const LeadSchema = new mongoose.Schema(
	{
		From: {
			type: String,
		},
		Name: {
			type: String,
		},
		Profession: {
			type: String,
		},
		Email: {
			type: String,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		Contact_number: {
			type: String,
		},
		Web: {
			type: String,
		},
		Instagram: {
			type: String,
		},
		Level: {
			type: String,
		},
		Status: {
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

LeadSchema.pre('find', function () {
	this.where({ deleted: false });
});

const Lead = new mongoose.model('lead', LeadSchema);

module.exports = Lead;
