const mongoose = require("../connect");
//var mon = require(`mongoose`);
var homeSchema = {
  direccion :String,
  precio :Number,
  latitud :String,
  longitud :String
};
var home = mongoose.model("home", homeSchema);
module.exports = home;
