const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Definir las rutas
router.get('/home', mainController.index); // Página principal
router.get('/notas', mainController.notas); // Página de notas

module.exports = router;
