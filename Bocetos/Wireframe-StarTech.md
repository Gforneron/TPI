# Descripción de Vistas del Sistema

## 1. Inicio de Sesión
**Propósito:**  
Permitir que los usuarios ingresen sus credenciales para acceder al sistema.

**Funcionamiento:**  
Los usuarios introducen su información de acceso (nombre de usuario y contraseña). Si las credenciales son correctas, son redirigidos a la vista correspondiente según su rol (alumno, encargado, administrador).

## 2. Registro
**Propósito:**  
Facilitar el proceso de creación de una cuenta nueva en el sistema.

**Funcionamiento:**  
Los nuevos usuarios completan un formulario con sus datos personales. Después de registrarse, pueden iniciar sesión en el sistema.

## 3. Vista de Inicio
**Propósito:**  
Servir como un dashboard principal, proporcionando acceso rápido a las funcionalidades clave según el rol del usuario.

**Funcionamiento:**  
Esta vista presenta enlaces o botones que dirigen a las vistas específicas según el tipo de usuario:
- **Alumnos:** Vista de Notas.
- **Encargados:** Gestión de Cursos, Subida de Notas.
- **Administradores:** Gestión de Usuarios, Gestión de Cursos.

## 4. Perfil
**Propósito:**  
Permitir a los usuarios ver y editar su información personal, como nombre, correo electrónico y contraseña.

**Funcionamiento:**  
Los usuarios pueden actualizar sus datos en esta vista y guardar los cambios para mantener su información actualizada.

## 5. Vista de Notas (Solo para Alumnos)
**Propósito:**  
Mostrar a los alumnos sus calificaciones en las materias en las que están inscritos.

**Funcionamiento:**  
Los alumnos pueden ver una tabla simple con sus materias y notas. Solo visualización.

## 6. Gestión de Curso (Solo para Encargados y Administradores)
**Propósito:**  
Permitir la administración de los cursos disponibles en el sistema.

**Funcionamiento:**  
Los encargados y administradores pueden agregar, editar y eliminar cursos.

## 7. Gestión de Materias (Solo para Encargados y Administradores)
**Propósito:**  
Permitir la visualización de las materias asociadas a cada curso.

**Funcionamiento:**  
En esta vista, los encargados y administradores pueden ver las materias de un curso seleccionado. Solo visualización.

## 8. Vista de Materias/Subida de Notas (Solo para Encargados)
**Propósito:**  
Proveer una interfaz para que los encargados seleccionen una materia y suban las notas manualmente para los alumnos.

**Funcionamiento:**  
Los encargados seleccionan un curso y una materia, luego ingresan las notas manualmente en un formulario, guardando los datos para cada alumno.

## 9. Gestión de Usuarios (Solo para Administradores)
**Propósito:**  
Administrar los usuarios del sistema, asignando roles y gestionando permisos.

**Funcionamiento:**  
Los administradores pueden agregar, editar y eliminar usuarios, además de asignarles roles específicos, asegurando que cada usuario tenga el acceso correcto a las funciones del sistema.
