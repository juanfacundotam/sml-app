const mongoose = require("mongoose");
const validator = require("validator");

const VendedorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: "El correo electrónico debe tener un formato válido",
      },
    },
    birthdate: {
      type: Date,
      required: true,
    },
    photo: {
      type: String,
    },
    country: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    description: {
      type: String,
    },
    leads_contacted: {
      type: String,
    },
    hired_leads: {
      type: String,
    },
    declined_leads: {
      type: String,
    },
    unanswered_leads: {
      type: String,
    },
    deleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

VendedorSchema.pre("find", function () {
  this.where({ deleted: false });
});

const Vendedor = new mongoose.model("vendedor", VendedorSchema);

module.exports = Vendedor;
