const admincontroller = {};

const db = require("../database/models");

// Retorna la vista de gestion de cursos
admincontroller.gestion_curso = async (req, res) => {
  try {
    // Obtén todos los cursos de la base de datos
    const cursos = await db.Curso.findAll();
    usuario = req.session.usuarioLogueado;  


    // Renderiza la vista y pasa los cursos como datos
    res.render("gestion_curso", { cursos, usuario });
  } catch (error) {
    console.error("Error al obtener los cursos:", error);
    res.status(500).send("Error en el servidor");
  }
};

// Retorna la vista de gestion de materias
admincontroller.gestion_materias = async (req, res) => {
  try {
    usuario = req.session.usuarioLogueado;  
    // Obtener la ID del curso desde la URL
    const cursoId = req.params.id;

    // Buscar el curso y sus materias asociadas
    const curso = await db.Curso.findOne({
      where: { curso_id: cursoId },
      include: [
        {
          model: db.Materia,
          as: "materias",
          attributes: ["materia_id", "nombre_materia"],
        },
      ],
    });

    // Si no se encuentra el curso, mostrar un error
    if (!curso) {
      return res.status(404).send("Curso no encontrado");
    }

    // Renderizar la vista 'gestion_materias' pasando el curso y sus materias
    return res.render("gestion_materias.ejs", { curso, usuario });
  } catch (error) {
    console.error("Error al obtener el curso y sus materias:", error.message);
    res.status(500).send("Error en el servidor");
  }
};

admincontroller.gestion_usuarios = async (req, res) => {
  try {
    usuario = req.session.usuarioLogueado;  
    // Obtener todos los usuarios, incluyendo el curso y el tipo de usuario
    const usuarios = await db.Persona.findAll({
      include: [
        {
          model: db.TipoUsuario,
          as: "tipoUsuario",
          attributes: ["tipo_usuario_id", "rol"],
        },
        {
          model: db.Curso,
          as: "curso",
          attributes: ["curso_id", "nombre_curso", "orientacion"],
        },
      ],
    });

    // Renderizar la vista y pasarle los usuarios
    return res.render("gestion_usuarios.ejs", { usuarios, usuario });
  } catch (error) {
    console.error("Error al obtener los usuarios: ", error);
    res.status(500).send("Error en el servidor");
  }
};

admincontroller.vista_materias = async (req, res) => {
  try {
    usuario = req.session.usuarioLogueado;  
    const { cursoId, materiaId } = req.params;

    // Obtener el curso y sus materias, asegurándonos de que exista la materia específica
    const curso = await db.Curso.findOne({
      where: { curso_id: cursoId },
      include: [
        {
          model: db.Materia,
          as: 'materias',
          where: { materia_id: materiaId }, // Filtra por la materia seleccionada
        }
      ]
    });

    // Verificar si el curso o la materia existen
    if (!curso) {
      return res.status(404).send('Curso o materia no encontrados');
    }

    // Filtrar alumnos que estén inscritos en el curso específico
    const alumnos = await db.Persona.findAll({
      where: { curso_id: cursoId } // Filtra solo por el curso_id
    });

    // Renderizar la vista con los datos del curso, materia y la lista de alumnos
    res.render('vista_materias', { curso, materia: curso.materias[0], alumnos, usuario });
  } catch (error) {
    console.error('Error al obtener la materia y sus alumnos:', error.message);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = admincontroller;