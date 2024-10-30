const { body } = require("express-validator");
const db = require("../database/models/");

const register = [
  body("dni")
    .notEmpty()
    .withMessage("Tienes que tener un DNI de usuario")
    .isLength({ min: 8, max: 8 })
    .withMessage("Debe de ser de 8 caracteres")
    .custom(async (value) => {
        const user = await db.Persona.findOne({where: {persona_id: value}});
        if (user) {
          throw new Error('El Dni ya se encuentra registrado');
        }
      })
    .bail(),
  body("nombre")
    .notEmpty()
    .withMessage("Debe ingresar un nombre")
    .bail(),
  body("correo")
    .notEmpty()
    .withMessage("Nesecitas un correo")
    .isEmail()
    .withMessage("El email no es valido")
    .custom(async (correo) => {
      const user = await db.Persona.findOne({where: {correo: correo}});
      if (user) {
        throw new Error('El correo ya pertenece a un usuario');
      }
    })
    .bail(),
      body("correo")
    .notEmpty()
    .withMessage("Nesecitas un correo")
    .isEmail()
    .withMessage("El email no es valido")
    .custom(async (correo) => {
      const user = await db.Persona.findOne({where: {correo: correo}});
      if (user) {
        throw new Error('El correo ya pertenece a un usuario');
      }
    })
    .bail(),
  body("")
];
module.exports = register;