# Base de Datos para sistema de alumnado

Este proyecto consiste en una base de datos diseñada para gestionar la información de alumnos, cursos, materias, notas y usuarios dentro de un entorno académico.

## Modelos y Relaciones

### Alumno

- **ID (dni)**: Clave primaria que identifica de manera única a cada alumno (DNI).
- **nombre y apellido**: Nombre y apellido del alumno.
- **curso_id**: Clave foránea que referencia al curso en el que está inscrito el alumno.

**Relaciones**:
- Un alumno pertenece a un curso (relación muchos a uno con el modelo [Curso](#curso)).

### Materia

- **materia_id**: Clave primaria que identifica de manera única a cada materia.
- **nombre**: Nombre de la materia.

**Relaciones**:
- Una materia puede estar relacionada con varios cursos a través de la tabla intermedia [Curso_Materia](#curso_materia).

### Curso

- **curso_id**: Clave primaria que identifica de manera única a cada curso.
- **nombre_curso**: Nombre del curso.
- **orientacion**: Orientación del curso (por ejemplo, "técnica", "Bachiller").

**Relaciones**:
- Un curso puede estar relacionado con varias materias a través de la tabla intermedia [Curso_Materia](#curso_materia).
- Un curso puede tener varios alumnos (relación uno a muchos con el modelo [Alumno](#alumno)).

### Curso_Materia

- **curso_materia_id**: Clave primaria que identifica de manera única cada relación entre curso y materia.
- **curso_id**: Clave foránea que referencia al modelo [Curso](#curso).
- **materia_id**: Clave foránea que referencia al modelo [Materia](#materia).

**Relaciones**:
- Un curso puede estar relacionado con varias materias, y una materia puede estar asociada a varios cursos (relación muchos a muchos entre [Curso](#curso) y [Materia](#materia)).

### Nota

- **id_nota**: Clave primaria que identifica de manera única a cada registro de nota.
- **alumno_id**: Clave foránea que referencia al alumno que recibe la nota, relacionada con el modelo [Alumno](#alumno).
- **materia_id**: Clave foránea que referencia a la materia, relacionada con el modelo [Materia](#materia).
- **curso_id**: Clave foránea que referencia al curso, relacionada con el modelo [Curso](#curso).
- **nota**: Valor de la nota obtenida.

**Relaciones**:
- Una nota pertenece a un alumno, una materia y un curso específico (relación muchos a uno con los modelos [Alumno](#alumno), [Materia](#materia), y [Curso](#curso)).

### Usuario

- **usuario_id**: Clave primaria que identifica de manera única a cada usuario.
- **nombre**: Nombre del usuario.
- **correo**: Correo electrónico del usuario.
- **contraseña**: Contraseña del usuario.
- **tipo_usuario_id**: Clave foránea que referencia al tipo de usuario, relacionada con el modelo [Tipo_usuario](#tipo_usuario).

**Relaciones**:
- Un usuario tiene un tipo de usuario (relación muchos a uno con el modelo [Tipo_usuario](#tipo_usuario)).

### Tipo_usuario

- **tipo_usuario_id**: Clave primaria que identifica de manera única a cada tipo de usuario.
- **usuario**: Descripción del tipo de usuario (por ejemplo, "Administrador", "Estudiante").

**Relaciones**:
- Un tipo de usuario puede ser asignado a varios usuarios (relación uno a muchos con el modelo [Usuario](#usuario)).

## Resumen de Relaciones entre Tablas

- **Alumno**: Relación muchos a uno con [Curso](#curso).
- **Curso**: Relación uno a muchos con [Alumno](#alumno) y relación muchos a muchos con [Materia](#materia) a través de [Curso_Materia](#curso_materia).
- **Curso_Materia**: Relación muchos a muchos entre [Curso](#curso) y [Materia](#materia).
- **Nota**: Relaciones muchos a uno con [Alumno](#alumno), [Materia](#materia) y [Curso](#curso).
- **Usuario**: Relación muchos a uno con [Tipo_usuario](#tipo_usuario).

Esta estructura permite gestionar eficientemente la información académica, proporcionando flexibilidad y escalabilidad en la administración de alumnos, cursos, materias, notas y usuarios del sistema.
