const mongoose = require("mongoose");
const validator = require("validator");

const LeaderSchema = new mongoose.Schema(
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
    deleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

LeaderSchema.pre("find", function () {
  this.where({ deleted: false });
});

const Leader = new mongoose.model("leader", LeaderSchema);

module.exports = Leader;
