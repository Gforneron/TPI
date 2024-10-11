const Sequelize = require('sequelize');
const config = require('../config'); 

const sequelize = new Sequelize(
  'startech',
  'root',
  null,
  {
    host: config.host,
    dialect: 'mysql',
    logging: console.log   
 // Habilita el registro
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;   


// Importar los modelos
db.Persona = require('./Persona')(sequelize, Sequelize.DataTypes);
db.Curso = require('./Curso')(sequelize, Sequelize.DataTypes);
db.Materia = require('./Materia')(sequelize, Sequelize.DataTypes);
db.CursoMateria = require('./CursoMateria')(sequelize, Sequelize.DataTypes);
db.Nota = require('./Nota')(sequelize, Sequelize.DataTypes);
db.TipoUsuario = require('./TipoUsuarios')(sequelize, Sequelize.DataTypes);

// Asociaciones
db.Persona.belongsTo(db.Curso, { as: 'curso', foreignKey: 'curso_id' });
db.Curso.hasMany(db.Persona, { as: 'Personas', foreignKey: 'curso_id' });

db.CursoMateria.belongsTo(db.Curso, { as: 'curso', foreignKey: 'curso_id' });
db.CursoMateria.belongsTo(db.Materia, { as: 'materia', foreignKey: 'materia_id' });
db.Curso.belongsToMany(db.Materia, { through: db.CursoMateria, as: 'materias' });
db.Materia.belongsToMany(db.Curso, { through: db.CursoMateria, as: 'cursos' });

// ... Otras asociaciones (si las hay)

// Sincronizar los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch(error => {
    console.error('Error al sincronizar los modelos:', error);   

  });

module.exports = db;