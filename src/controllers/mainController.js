const mainController = {};

// Retorna la vista del editado de perfil 
mainController.edit_perfil = async (req, res) => {
  return res.render("edit_perfil.ejs");
};

// Retorna la vista de pag de gestion de cursos
mainController.gestion_curso = async (req, res) => {
  return res.render("gestion_curso.ejs");
};

// Retorna la vista de pag de gestion de materias
mainController.gestion_materias = async (req, res) => {
  return res.render("gestion_materias.ejs");
};

// Retorna la vista de pag de gestion de usuarios
mainController.gestion_usuarios = async (req, res) => {
  return res.render("gestion_usuarios.ejs");
};

// Retorna la vista de pag principal 
mainController.index = async (req, res) => {
  return res.render("index.ejs");
};

// Retorna la vista de pag de login
mainController.login = async (req, res) => {
  return res.render("login.ejs");
};

// Retorna la vista de pag de notas para el alumno 
mainController.notas = async (req, res) => {
  return res.render("notas.ejs");
};

// Retorna la vista de pag de notas para el perfil
mainController.perfil = async (req, res) => {
  return res.render("perfil.ejs");
};


// Retorna la vista de pag de registro
mainController.register = async (req, res) => {
  return res.render("register.ejs");
};

// Retorna la vista de pag de registro
mainController.vista_materias = async (req, res) => {
  return res.render("vista_materias.ejs");
};


module.exports = mainController;