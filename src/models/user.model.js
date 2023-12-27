const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: true,
    // Add min and max length constraints if needed
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  contactNumber: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
}, { timestamps: true });

// For getting fullName when retrieving data from the database
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
  async authenticate(password) {
    return bcrypt.compare(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);
