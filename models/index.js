const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.URL;
db.userinfo = require("./userinfo.model.js")(mongoose);

module.exports = db;