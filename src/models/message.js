const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
  });

  Message.associate = ({
    Thread
  }) => {
    Message.belongsTo(Thread);
  };

  return Message;
};

export default message;