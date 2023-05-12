const mongoose = require('mongoose');
const validator = require('validator');

const CLevelSchema = new mongoose.Schema(
	{
		Name: {
			type: String,
			required: true,
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
		Deleted: {
			type: Boolean,
			default: false,
			select: false,
		},
	},
	{ timestamps: true }
);

CLevelSchema.pre('find', function () {
	this.where({ deleted: false });
});

const CLevel = new mongoose.model('clevel', CLevelSchema);

module.exports = CLevel;
