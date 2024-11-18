// LLamado de modulos
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

// Llamado de los modelos
const db = require("../database/models");

const userController = {};

// Retorna la vista del editado de perfil
userController.edit_perfil = async (req, res) => {
  usuario = req.session.usuarioLogueado;
  return res.render("edit_perfil.ejs", { usuario });
};

// Procesar el formulario de editar perfil
userController.updatePerfil = async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    const usuarioId = req.params.id;

    const usuario = await db.Persona.findByPk(usuarioId);
    if (usuario) {
      usuario.nombre = nombre;
      usuario.correo = correo;

      // Si se carga una nueva foto de perfil, actualiza el campo correspondiente
      if (req.file) {
        usuario.foto_perfil = req.file.filename; // Asegúrate de que esto sea correcto
      }

      await usuario.save();
      req.session.usuarioLogueado = usuario;

      return res.redirect("/perfil");
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
  return res.render("login.ejs", { errors: {}, oldData: {} });
};

// Funcionalidad de incio de sesion
userController.loginUser = async (req, res) => {
  try {
    const errors = validationResult(req); // Obtiene los errores de validación

    if (!errors.isEmpty()) {
      // Si hay errores de validación, renderiza la vista de login con los errores
      return res.render("login", {
        errors: errors.mapped(),
        oldData: req.body, // Mantiene los datos ingresados
      });
    }

    const { correo, contrasena } = req.body;

    // Busca al usuario en la base de datos
    const usuario = await db.Persona.findOne({ where: { correo } });
    
    if (!usuario) {
      return res.render("login", {
        error: "Usuario no encontrado.",
        errors: {},
        oldData: req.body,
      });
    }

    // Verifica la contraseña
    const isMatch = bcryptjs.compareSync(contrasena, usuario.contrasena);

    if (isMatch) {
      req.session.usuarioLogueado = usuario;
      return res.redirect("/home");
    } else {
      return res.render("login", {
        error: "Contraseña incorrecta.",
        errors: {},
        oldData: req.body,
      });
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).render("error", { message: "Error interno del servidor." });
  }
};

// Retorna la vista del perfil
userController.perfil = async (req, res) => {
  const usuario = await db.Persona.findOne({
    where: { persona_id: req.session.usuarioLogueado.persona_id },
    include: [
      {
        model: db.Curso,
        as: "curso",
        attributes: ["nombre_curso"],
      },
    ],
  });
  return res.render("perfil.ejs", { usuario });
};

// Retorna la vista del registro
userController.register = async (req, res) => {
  const cursos = await db.Curso.findAll();
  return res.render("register", { errors: [], old: {}, cursos });
};

userController.newUser = async (req, res) => {
  try {
    let errores = validationResult(req);

    const cursos = await db.Curso.findAll();

    const { dni, nombre, correo, curso, usuario } = req.body;

    const dataUser = {
      persona_id: dni,
      nombre,
      correo,
      contrasena: bcryptjs.hashSync(dni, 8),
      tipo_usuario_id: usuario,
      curso_id: curso,
      foto_perfil: "user_predeterminado.jpg",
    };

    // Si no hay errores, guarda el usuario
    if (errores.isEmpty()) {
      await db.Persona.create(dataUser);
      return res.redirect("gestion_usuarios");
    } else {
      // Mapea los errores y renderiza la vista con los errores específicos
      return res.render("register", {
        cursos,
        errors: errores.mapped(), // Mapeo de errores
        old: req.body, // Mantén los datos ingresados
      });
    }
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).render("error", { message: "Error interno del servidor." });
  }
};

// Cerrar sesión
userController.cerrar = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
      return res
        .status(500)
        .render("error", { message: "Error al cerrar sesión." });
    }
    return res.redirect("/"); // Redirige a la página principal
  });
};

// Eliminado de usuarios
userController.deleteUser = async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const usuario = await db.Persona.findByPk(usuarioId);

    if (usuario) {
      await usuario.destroy();
      return res.redirect("/gestion_usuarios"); // Redirige a la gestión de usuarios
    } else {
      return res
        .status(404)
        .render("error", { message: "Usuario no encontrado." });
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).render("error", { message: "Error interno del servidor." });
  }
};

module.exports = userController;
