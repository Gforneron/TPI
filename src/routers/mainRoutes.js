const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Definir las rutas
router.get('/', mainController.index); // Página principal
router.get('/edit_perfil', mainController.edit_perfil); // Editar perfil
router.get('/gestion_curso', mainController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias', mainController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', mainController.gestion_usuarios); // Gestión de usuarios
router.get('/login', mainController.login); // Página de login
router.get('/notas', mainController.notas); // Página de notas
router.get('/perfil', mainController.perfil); // Página de perfil
router.get('/register', mainController.register); // Página de registro
router.get('/vista_materias', mainController.vista_materias); // Página de registro

module.exports = router;
