const post = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    text: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      },
    },
  });

  return Post;
};

export default post;