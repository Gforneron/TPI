# Startech - Sistema de Cargado de Notas 

## Descripción del Proyecto

Este proyecto fue desarrollado por **Startech**, una empresa de desarrollo web enfocada en soluciones tecnológicas innovadoras. Como parte de nuestro **Trabajo Práctico Integrador (TPI)**, hemos creado un **sistema de cargado de notas** destinado a facilitar la gestión de las calificaciones académicas en instituciones educativas.

El sistema permite a los docentes cargar y gestionar las notas de sus estudiantes de manera sencilla y eficiente, brindando una plataforma intuitiva y segura para el manejo de esta información crítica.

---

## Instalación y Ejecución

1. **Clonar el Repositorio**:  
   ```bash
   git clone https://github.com/Gforneron/TPI.git
   cd TPI/

2. **Instalar dependencias**:  
   ```bash
   npm install

3 **Configurar el entorno**:  

 - Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde nodejs.org.
 - Importa el archivo SQL proporcionado en el repositorio en tu gestor de base de datos (por ejemplo, phpMyAdmin o desde la línea de comandos de MySQL).
 - Inicia el servidor de la base de datos antes de ejecutar la aplicación.

4. **Ejecutar el proyecto**:  
   ```bash
   node src/app.js

5. **Alternativa de ejecución del proyecto**:  
   ```bash
   npm start

---

## Usuarios de Prueba

Para probar el sistema, se han creado tres usuarios locales con diferentes roles de acceso:

- **Alumno**: 
  - Correo: alumno@gmail.com
  - Contraseña: 11111111

- **Administrador**: 
  - Correo: administrador@gmail.com
  - Contraseña: 22222222
  
- **Encargado de Carga de Notas**:
  - Correo: alumnado@gmail.com
  - Contraseña: 33333333

Cada uno de estos usuarios tiene permisos específicos que permiten evaluar las diferentes funcionalidades del sistema.

---

## Funcionalidades Principales

- **Cargar Notas**: Los docentes pueden ingresar las calificaciones de los estudiantes por cada asignatura.
- **Editar Notas**: Las notas cargadas pueden ser modificadas en cualquier momento en caso de error.
- **Visualización de Notas**: Los usuarios pueden visualizar las notas de los estudiantes en una tabla organizada por curso y materia.
- **Seguridad**: Autenticación y autorización de usuarios para garantizar que solo personas autorizadas accedan al sistema.

---

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express.
- **Base de Datos**: MySQL.
- **Control de Versiones**: Git, GitHub.  
