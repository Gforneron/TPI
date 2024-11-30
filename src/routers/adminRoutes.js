const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

const middlewareSession = require("../middlewares/Session");
const division = require("../middlewares/division");
const { soloAlumnado, soloAdministradores} = require("../middlewares/Roles.js") 

router.get('/curso/:cursoId/materia/:materiaId', middlewareSession, soloAlumnado, adminController.vista_materias);
router.post('/curso/:cursoId/materia/:materiaId', adminController.guardarNotas);

router.get('/gestion_curso', middlewareSession, soloAlumnado, adminController.gestion_curso); // Gestión de cursos
router.get('/gestion_materias/:id', middlewareSession, soloAlumnado, adminController.gestion_materias); // Gestión de materias
router.get('/gestion_usuarios', middlewareSession, division, soloAdministradores ,adminController.gestion_usuarios); // Gestión de usuarios

module.exports = router;
