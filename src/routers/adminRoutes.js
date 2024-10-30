const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const middlewareSession = require("../middlewares/Session");
const administrador = require("../middlewares/alumnado");
const alumnado = require("../middlewares/alumnado");
const division = require("../middlewares/division");



router.get('/curso/:cursoId/materia/:materiaId', middlewareSession, alumnado, adminController.vista_materias);
router.post('/curso/:cursoId/materia/:materiaId', adminController.guardarNotas);

router.get('/gestion_curso', middlewareSession, alumnado, adminController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias/:id', middlewareSession, alumnado, adminController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', middlewareSession, administrador, division, adminController.gestion_usuarios); // Gestión de usuarios

module.exports = router;
