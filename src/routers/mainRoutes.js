const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

const middleware = require("../middlewares/Session");

// Definir las rutas
router.get('/home', middleware, mainController.index); // Página principal
router.get('/notas', middleware, mainController.notas); // Página de notas

module.exports = router;
