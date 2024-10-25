const paginationMiddleware = async (req, res, next) => {
  try {
    const db = require("../database/models");
    const usuariosPorPagina = 10;
    const paginaActual = parseInt(req.query.page) || 1; // Obtener la página desde la query
    const offset = (paginaActual - 1) * usuariosPorPagina;

    const { count, rows } = await db.Persona.findAndCountAll({
      limit: usuariosPorPagina,
      offset: offset,
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

    res.locals.usuarios = rows; // Almacenar los usuarios en res.locals
    res.locals.totalPaginas = Math.ceil(count / usuariosPorPagina); // Calcular el total de páginas
    res.locals.paginaActual = paginaActual; // Almacenar la página actual

    next(); // Pasar al siguiente middleware o controlador
  } catch (error) {
    next(error); // Manejar errores
  }
};

module.exports = paginationMiddleware;