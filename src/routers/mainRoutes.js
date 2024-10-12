const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Definir las rutas
router.get('/home', mainController.index); // Página principal
router.get('/gestion_curso', mainController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias', mainController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', mainController.gestion_usuarios); // Gestión de usuarios
router.get('/notas', mainController.notas); // Página de notas
router.get('/vista_materias', mainController.vista_materias); // Vista de materias

module.exports = router;
