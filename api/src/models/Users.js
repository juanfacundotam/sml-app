const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  sub: { // id que auth0 le añade al usuario
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    // allowNull: false,
  },
  email: {
    type: String,
    // allowNull: false,
    unique: true,
  },
  rol: {
    type: String,
    enum: ['c-level', 'lider', 'corredor','vendedor'],
    
    required: true,
  },
  banned: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  requestSeller: {
    type: Boolean,
    default: false,
  },
}, { timestamps: false });

const User = mongoose.model('User', userSchema);

module.exports = User;
