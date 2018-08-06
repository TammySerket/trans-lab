const assert = require("assert");
const test = require("./test");

describe("test", ()=>{
    it("Debería ingresar un correo eletronico válido", ()=>{
assert.equal(test("mailreal@nofake.true"));
    });
    it("Debería tener una contraseña con un minimo de 8 caracteres", ()=>{
        assert.equal(test("password1"))
    });
} )



module.exports = test;