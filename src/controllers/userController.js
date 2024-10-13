// LLamado de modulos
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

// Llamado de los modelos
const db = require("../database/models");

const userController = {};

// Retorna la vista del editado de perfil
userController.edit_perfil = async (req, res) => {
  usuario = req.session.usuarioLogueado;  
  return res.render("edit_perfil.ejs");
};

// Procesar el formulario de editar perfil
userController.updatePerfil = async (req, res) => {
  try {
    console.log("este es el req.body",  req.body);
    
      const { nombre, correo, phone, address } = req.body;  // Extrae los campos del formulario

      console.log("req.session", req.session);
      
      // Encuentra al usuario logueado
      const usuarioId = req.session.usuarioLogueado;
      console.log("usuarioID", usuarioId);
      
      const usuario = await db.Persona.findByPk(usuarioId);
      console.log("usuario buscado por bd", usuario);

      if (usuario) {
          // Actualiza los datos del usuario
          usuario.nombre = nombre;
          usuario.correo = correo;
          usuario.telefono = phone || usuario.telefono;  // Si no se llena, conserva el valor actual
          usuario.direccion = address || usuario.direccion;

          await usuario.save();  // Guarda los cambios en la base de datos

          // Actualiza la sesión con la nueva información
          req.session.usuarioLogueado = usuario;

          return res.redirect("/perfil");  // Redirige a la página del perfil después de actualizar
      } else {
          res.status(404).render("error", { message: "Usuario no encontrado." });
      }
  } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      res.status(500).render("error", { message: "Error interno del servidor." });
  }
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
      const usuario = await db.Persona.findOne({ where: { correo } });

      if (!usuario) {
          return res.render("login", { error: "Usuario no encontrado." });
      }

      // Verifica la contraseña
      const isMatch = bcryptjs.compareSync(contrasena, usuario.contrasena);

      if (isMatch) {
          req.session.usuarioLogueado = usuario;
          console.log(req.session.usuarioLogueado);
          
          return res.redirect("/home");
      }else{
        return res.send("Contraseña incorrecta");
      }

  } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).render("error", { message: "Error interno del servidor." });
  }  

  
};

// Retorna la vista del perfil
userController.perfil = async (req, res) => {
  usuario = req.session.usuarioLogueado;
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
      return res.redirect("/");
    } else {
      return res.render("register", { errors: errores.array(), old: req.body }); // Renderiza la vista de registro con errores
    }
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).render("error", { message: "Error interno del servidor." });
  }
};

// Cerrar sesión
userController.cerrar = (req, res) => {
  req.session.destroy(err => {
      if (err) {
          console.error("Error al cerrar sesión:", err);
          return res.status(500).render("error", { message: "Error al cerrar sesión." });
      }
      return res.redirect("/"); // Redirige a la página principal
  });
};
module.exports = userController;
