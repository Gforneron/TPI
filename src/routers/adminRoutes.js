const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/curso/:cursoId/materia/:materiaId', adminController.vista_materias);
router.post('/guardar_notas', adminController.guardarNotas);

router.get('/gestion_curso', adminController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias/:id', adminController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', adminController.gestion_usuarios); // Gestión de usuarios

module.exports = router;
