// Middleware para solo alumnos (tipo_usuario_id = 1)
function soloAlumnos(req, res, next) {
    if (req.session.usuarioLogueado && req.session.usuarioLogueado.tipo_usuario_id === 1) {
      return next(); // Permitir el acceso a la ruta
    } else {
      return res.redirect('/home'); // Redirigir si no es alumno
    }
  }
  
  // Middleware para solo alumnado (tipo_usuario_id = 2)
  function soloAlumnado(req, res, next) {
    if (req.session.usuarioLogueado && req.session.usuarioLogueado.tipo_usuario_id === 2) {
      return next(); // Permitir el acceso a la ruta
    } else {
      return res.redirect('/home'); // Redirigir si no es alumnado
    }
  }
  
  // Middleware para solo administradores (tipo_usuario_id = 3)
  function soloAdministradores(req, res, next) {
    if (req.session.usuarioLogueado && req.session.usuarioLogueado.tipo_usuario_id === 3) {
      return next(); // Permitir el acceso a la ruta
    } else {
      return res.redirect('/home'); // Redirigir si no es administrador
    }
  }
  
  module.exports = { soloAlumnos, soloAlumnado, soloAdministradores };