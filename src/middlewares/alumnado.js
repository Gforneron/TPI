function administrador(req, res, next) {
    if(req.session.usuarioLogueado.tipo_usuario_id != 2 && req.session.usuarioLogueado.tipo_usuario_id != 3){
        
        return res.redirect('/home')
    }
    next()
}

module.exports = administrador