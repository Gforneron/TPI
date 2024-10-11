const userController = {};

// Retorna la vista del editado de perfil 
userController.edit_perfil = async (req, res) => {
    return res.render("edit_perfil.ejs");
  };

  // Retorna la vista de pag de login
userController.login = async (req, res) => {
    return res.render("login.ejs");
  };

  // Retorna la vista del perfil
userController.perfil = async (req, res) => {
    return res.render("perfil.ejs");
  };

  // Retorna la vista del registro
userController.register = async (req, res) => {
    return res.render("register.ejs");
  };

module.exports = userController;