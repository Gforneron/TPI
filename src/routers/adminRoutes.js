const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const middleware = require("../middlewares/Session");

router.get('/curso/:cursoId/materia/:materiaId', middleware, adminController.vista_materias);
router.post('/guardar-notas/:cursoId/:materiaId', adminController.guardarNotas);

router.get('/gestion_curso', middleware, adminController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias/:id', middleware, adminController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', middleware, adminController.gestion_usuarios); // Gestión de usuarios

module.exports = router;
