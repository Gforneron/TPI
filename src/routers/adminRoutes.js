const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/vista_materias', adminController.vista_materias); // Vista de materias
router.get('/gestion_curso', adminController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias', adminController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', adminController.gestion_usuarios); // Gestión de usuarios

module.exports = router;
