var assert    = require("chai").assert;
var calculator = require("../test");

before(function() {
    // Se ejecuta antes de todas las pruebas del bloque
  });
  after(function() {
    // Se ejecuta después de todas las pruebas del bloque
  });
  beforeEach(function() {
    // Se ejecuta antes de cada prueba del bloque
  });
  afterEach(function() {
    // Se ejecuta después de cada prueba del bloque
  });



exports.addTested = function(value) {
      var result = value + " tested";
      return result;
    };
    