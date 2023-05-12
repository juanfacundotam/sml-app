const mongoose = require('mongoose');
const validator = require('validator');

const CorredorSchema = new mongoose.Schema(
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
		Classifications: {
			type: String,
		},
		Average_delay: {
			type: String,
		},
		Incidences: {
			type: String,
		},
		Hired_leads: {
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

CorredorSchema.pre('find', function () {
	this.where({ deleted: false });
});

const Corredor = new mongoose.model('corredor', CorredorSchema);

module.exports = Corredor;
