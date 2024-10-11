const mainController = {};

// Retorna la vista de gestion de cursos
mainController.gestion_curso = async (req, res) => {
  return res.render("gestion_curso.ejs");
};

// Retorna la vista de gestion de materias
mainController.gestion_materias = async (req, res) => {
  return res.render("gestion_materias.ejs");
};

// Retorna la vista de gestion de usuarios
mainController.gestion_usuarios = async (req, res) => {
  return res.render("gestion_usuarios.ejs");
};

// Retorna la vista de pag principal 
mainController.index = async (req, res) => {
  return res.render("index.ejs");
};

// Retorna la vista de notas para el alumno 
mainController.notas = async (req, res) => {
  return res.render("notas.ejs");
};


// Retorna la vista de vista de las materias
mainController.vista_materias = async (req, res) => {
  return res.render("vista_materias.ejs");
};


module.exports = mainController;