const db = require("../database/models");

const mainController = {};

// Retorna la vista de pag principal
mainController.index = async (req, res) => {
  console.log(req.session.usuarioLogueado);
  return res.render("index.ejs");
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

    // Depuración
    console.log("Usuario logueado:", JSON.stringify(usuario, null, 2));
    
    if (usuario && usuario.curso && usuario.curso.materias) {
      usuario.curso.materias.forEach(materia => {
        console.log(`Materia: ${materia.nombre_materia}`);
        console.log(`Notas: ${JSON.stringify(materia.notas, null, 2)}`);
      });
    } else {
      console.log("No se encontraron materias o notas para el usuario.");
    }

    // Renderizar la vista 'notas'
    return res.render("notas.ejs", { usuario });
  } catch (error) {
    console.error("Error al obtener el usuario con el curso:", error.message);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = mainController;
