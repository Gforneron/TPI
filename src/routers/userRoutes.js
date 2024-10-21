// llamada de librerias
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Llamada de middleware
const middleware = require("../middlewares/Session");

// Llamada de controller
const userController = require("../controllers/userController");

// Implentacion de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/usuarios");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});
const upload = multer({ storage: storage });

//editado de perfil
router.get("/edit_perfil", middleware, userController.edit_perfil); // Retorno de vista
router.post("/edit_perfil/:id", upload.single("foto_perfil"), userController.updatePerfil); // Editar perfil

router.get("/perfil", middleware, userController.perfil); // retorno de Página de perfils

// Login
router.get("/", userController.login); // Retorno de pagina login
router.post("/", userController.loginUser); // Funcionalidad del login

// Register
router.get("/register", middleware, userController.register); //retorno del formulario register
router.post("/register",upload.single("user_predeterminado"), userController.newUser); // funcionalidad del formulario register

// cerrado de sesion
router.get("/cerrar", userController.cerrar);

module.exports = router;
