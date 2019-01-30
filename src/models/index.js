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
  Thread: sequelize.import('./thread'),
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