const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  email: {
    type: String,
  },
  Age: {
    type: Number,
  },
  password: {
    type: String,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
});

const UserSchema = mongoose.model("Users", Schema);

module.exports = UserSchema;
