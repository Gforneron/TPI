// LLamadas de Librerias
const express = require("express");
const path = require("path");

// Crear la aplicación de Express
const app = express();

const port = process.env.port || 8080;

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

// Configurar el motor de vistas a usar
app.set("view engine", "ejs"); // usar EJS como motor de vistas
app.set("views", path.resolve(__dirname, "views")); // establecer la carpeta de vistas en ./views

// rutas para el inicio de la aplicación
app.use("/", require("./routers/mainRoutes.js")); 

// Manejar errores 404
app.use((req, res, next) => {
    res.status(404).render("404.ejs"); // renderizar la vista 404 cuando no se encuentra la ruta
  });

// Levantar servidor
app.listen(port, () => console.log("Corriendo servidor en: http://localhost:8080/login"));