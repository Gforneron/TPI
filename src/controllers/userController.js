// LLamado de modulos
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

// Llamado de los modelos
const db = require("../database/models");

const userController = {};

// Retorna la vista del editado de perfil
userController.edit_perfil = async (req, res) => {
  return res.render("edit_perfil.ejs");
};

// Retorna la vista de pag de login
userController.login = async (req, res) => {
  return res.render("login.ejs");
};

// Funcionalidad de incio de sesion
userController.loginUser = async (req, res) => {
  try {    
      const { correo, contrasena } = req.body;

      // Busca al usuario en la base de datos
      const user = await db.Persona.findOne({ where: { correo } });

      if (!user) {
          return res.render("login", { error: "Usuario no encontrado." });
      }

      // Verifica la contraseña
      const isMatch = bcryptjs.compareSync(contrasena, user.contrasena);
      if (!isMatch) {
          return res.render("login", { error: "Contraseña incorrecta." });
      }
      
      // Establece la sesión del usuario
      req.session.userId = user.persona_id; // Guarda el ID del usuario en la sesión
      req.session.nombre = user.nombre; // Puedes guardar más datos si lo deseas

      console.log(req.session);


      return res.redirect("/");
  } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).render("error", { message: "Error interno del servidor." });
  }  

  
};

// Retorna la vista del perfil
userController.perfil = async (req, res) => {
  return res.render("perfil.ejs");
};

// Retorna la vista del registro
userController.register = async (req, res) => {
  return res.render("register.ejs");
};

userController.newUser = async (req, res) => {
  try {
    console.log(req.body);

    let errores = validationResult(req);

    const { nombre, correo, password, confirmed } = req.body;

    // Verifica si las contraseñas coinciden
    if (password !== confirmed) {
      errores.errors.push({ msg: "Las contraseñas no coinciden." }); // Agrega el error a la lista
    }

    // Crea el objeto del usuario solo si no hay errores
    const dataUser = {
      nombre,
      correo,
      contrasena: bcryptjs.hashSync(password, 8), // Encriptar solo si las contraseñas coinciden
      tipo_usuario_id: 1,
    };

    // Solo guarda el usuario si no hay errores
    if (errores.isEmpty()) {
      await db.Persona.create(dataUser);
      return res.redirect("/login");
    } else {
      return res.render("register", { errors: errores.array(), old: req.body }); // Renderiza la vista de registro con errores
    }
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).render("error", { message: "Error interno del servidor." });
  }
};

module.exports = userController;
