const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
// db.role = require("./role.model");
const Role = require('./role.model'); // or './role.model.js' based on the file extension


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;