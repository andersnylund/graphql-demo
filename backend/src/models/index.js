import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  "postgres", // hard-coded for convenience
  "user",
  "password", {
    dialect: 'postgres',
    operatorsAliases: false,
  },
);

const models = {
  Post: sequelize.import('./post'),
  Comment: sequelize.import('./comment'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {
  sequelize
};

export default models;