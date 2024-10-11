    // llamada de librerias
const express = require('express');
const router = express.Router();

    // Llamada de controller
const userController = require('../controllers/userController');

router.get('/edit_perfil', userController.edit_perfil); // Editar perfil
router.get('/login', userController.login); // Página de login
router.get('/perfil', userController.perfil); // Página de perfil
router.get('/register', userController.register); // Página de registro

module.exports = router;

