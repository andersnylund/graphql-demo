export default {
  Query: {
    posts: async (parent, args, {
      models: {
        Post,
        Comment
      }
    }) => {
      const posts = await Post.findAll();
      const result = await Promise.all(posts.map(async (post) => {
        const comments = await Comment.findAll({
          where: {
            postId: post.id
          }
        });
        return {
          id: post.id,
          text: post.text,
          comments: comments
        }
      }));
      return result;
    },
  },
  Mutation: {
    addPost: async (parent, {
      text
    }, {
      models: {
        Post
      }
    }) => {
      const post = await Post.create({
        text
      });
      return post;
    }
  }
};