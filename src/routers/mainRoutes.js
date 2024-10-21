const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

const middlewareSession = require("../middlewares/Session");

// Definir las rutas
router.get('/home', middlewareSession, mainController.index); // Página principal
router.get('/notas', middlewareSession, mainController.notas); // Página de notas

module.exports = router;
