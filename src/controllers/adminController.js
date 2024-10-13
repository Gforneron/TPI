const admincontroller = {}

// Retorna la vista de gestion de cursos
admincontroller.gestion_curso = async (req, res) => {
    return res.render("gestion_curso.ejs");
  };
  
  // Retorna la vista de gestion de materias
  admincontroller.gestion_materias = async (req, res) => {
    return res.render("gestion_materias.ejs");
  };
  
  // Retorna la vista de gestion de usuarios
  admincontroller.gestion_usuarios = async (req, res) => {
    return res.render("gestion_usuarios.ejs");
  };

  // Retorna la vista de vista de las materias
admincontroller.vista_materias = async (req, res) => {
    return res.render("vista_materias.ejs");
  };


module.exports = admincontroller;