const thread = (sequelize, DataTypes) => {
  const Thread = sequelize.define('thread', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
  });

  return Thread;
};

export default thread;