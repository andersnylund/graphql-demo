const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      },
    },
  });

  Comment.associate = ({
    Post
  }) => {
    Comment.belongsTo(Post);
  };

  return Comment;
};

export default comment;