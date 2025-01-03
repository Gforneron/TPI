// LLamadas de Librerias
const express = require("express"); // framework para construir aplicaciones web
const path = require("path"); // manejo de rutas
const session = require("express-session"); // manejo de sesiones
const methodOverride = require("method-override");

// Crear la aplicación de Express
const app = express();

const port = process.env.port || 3030;

// Middlewares
app.use(express.urlencoded({ extended: true })); //para analizar datos de formularios (application/x-www-form-urlencoded)

// Middleware para analizar datos JSON (application/json)
app.use(express.json());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60, // Establece las cookies por una hora
    },
  })
);

// Permitir el uso de otros métodos HTTP en formularios
app.use(methodOverride("_method"));

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

// Configurar el motor de vistas a usar
app.set("view engine", "ejs"); // usar EJS como motor de vistas
app.set("views", path.resolve(__dirname, "views")); // establecer la carpeta de vistas en ./views

// Configurar Rutas de la aplicacion
app.use("/", require("./routers/mainRoutes.js")); // rutas para el inicio de la aplicación
app.use("/", require("./routers/userRoutes.js")); // rutas para los usuarios
app.use("/", require("./routers/adminRoutes.js")); // rutas para el inicio de la aplicación

// Manejar errores 404
app.use((req, res, next) => {
  res.status(404).render("404.ejs"); // renderizar la vista 404 cuando no se encuentra la ruta
});

// Levantar servidor
app.listen(port, () =>
  console.log("Corriendo servidor en: http://localhost:3030/")
);
