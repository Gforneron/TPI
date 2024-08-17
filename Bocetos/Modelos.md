# Base de Datos de Gestión Académica

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
- Una materia puede estar relacionada con varios cursos (relación uno a muchos con el modelo [Curso](#curso)).

### Curso

- **curso_id**: Clave primaria que identifica de manera única a cada curso.
- **nombre_curso**: Nombre del curso.
- **materia_ID**: Clave foránea que referencia al modelo [Materia](#materia), indicando qué materia se imparte en este curso.
- **orientacion**: Orientación del curso (por ejemplo, "Ciencias", "Letras").

**Relaciones**:
- Un curso puede tener varias materias (relación uno a muchos con el modelo [Materia](#materia)).
- Un curso puede tener varios alumnos (relación uno a muchos con el modelo [Alumno](#alumno)).

### Nota

- **id_nota**: Clave primaria que identifica de manera única a cada registro de nota.
- **alumno_id**: Clave foránea que referencia al alumno que recibe la nota, relacionada con el modelo [Alumno](#alumno).
- **materia_id**: Clave foránea que referencia a la materia para la cual se asignó la nota, relacionada con el modelo [Materia](#materia).
- **nota**: Valor de la nota obtenida.

**Relaciones**:
- Una nota pertenece a un alumno y a una materia específica (relación muchos a uno con los modelos [Alumno](#alumno) y [Materia](#materia)).

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

### Planilla

- **planilla_id**: Clave primaria que identifica de manera única a cada planilla.
- **alumno_ID**: Clave foránea que referencia al alumno relacionado con la planilla, vinculada con el modelo [Alumno](#alumno).
- **Materia_ID**: Clave foránea que referencia a la materia incluida en la planilla, vinculada con el modelo [Materia](#materia).
- **Nota_ID**: Clave foránea que referencia a la nota incluida en la planilla, vinculada con el modelo [Nota](#nota).

**Relaciones**:
- Una planilla registra la información de un alumno, una materia y la nota correspondiente (relación muchos a uno con los modelos [Alumno](#alumno), [Materia](#materia) y [Nota](#nota)).

## Resumen de Relaciones entre Tablas

- **Alumno**: Relación muchos a uno con [Curso](#curso).
- **Curso**: Relación uno a muchos con [Materia](#materia) y muchos a uno con [Alumno](#alumno).
- **Nota**: Relaciones muchos a uno con [Alumno](#alumno) y [Materia](#materia).
- **Usuario**: Relación muchos a uno con [Tipo_usuario](#tipo_usuario).
- **Planilla**: Relaciones muchos a uno con [Alumno](#alumno), [Materia](#materia) y [Nota](#nota).

Con esta estructura, se puede gestionar eficientemente la información académica, permitiendo un seguimiento detallado de alumnos, cursos, materias, notas, y usuarios del sistema.
