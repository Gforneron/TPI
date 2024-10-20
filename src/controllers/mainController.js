const db = require("../database/models");

const mainController = {};

// Retorna la vista de pag principal
mainController.index = async (req, res) => {
  usuario = req.session.usuarioLogueado;  
  return res.render("index.ejs", {usuario});
};

mainController.notas = async (req, res) => {
  try {
    // Buscar el usuario logueado
    const usuario = await db.Persona.findOne({
      where: { persona_id: req.session.usuarioLogueado.persona_id },
      include: [{
        model: db.Curso,
        as: 'curso',
        attributes: ['nombre_curso'],
        include: [{
          model: db.Materia,
          as: 'materias',
          include: [{
            model: db.Nota,
            as: 'notas',
            where: { persona_id: req.session.usuarioLogueado.persona_id },
            attributes: ['nota', 'persona_id', 'cuatrimestre', 'informe'],
            required: false
          }]
        }]
      }]
    });

    // Renderizar la vista 'notas'
    return res.render("notas.ejs", { usuario });
  } catch (error) {
    console.error("Error al obtener el usuario con el curso:", error.message);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = mainController;
