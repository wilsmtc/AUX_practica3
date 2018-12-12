var express = require('express');
var router = express.Router();

var Home = require("../../../database/collections/home");

//registrar una casa
router.post("/home", (req, res) => {
  //validacion
  if(req.body.direccion == "" && req.body.precio == ""){
    res.status(400).json({
      "msn" : "Error en el registro"
    });
    return;
  }
  var home = {
    direccion : req.body.direccion,
    precio    : req.body.precio,
    latitud   : req.body.latitud,
    longitud  : req.body.longitud
  };
  var homeData = new Home(home);

  homeData.save().then( () => {
    res.status(200).json({
    //  "id" : rr._id,
      "msn" : "Casa registrada con exito"
    });
  });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
