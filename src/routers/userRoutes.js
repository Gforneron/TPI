    // llamada de librerias
const express = require('express');
const router = express.Router();

    // Llamada de controller
const userController = require('../controllers/userController');

router.get('/edit_perfil', userController.edit_perfil); // Editar perfil
router.get('/perfil', userController.perfil); // Página de perfil


router.post('/login', userController.loginUser); // Página de perfil
router.get('/login', userController.login); // Página de login



   //retorno del formulario register
router.get('/register', userController.register); 
    // funcionalidad del formulario register
router.post('/register', userController.newUser); 

module.exports = router;

