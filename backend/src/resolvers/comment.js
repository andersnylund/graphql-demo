export default {
  Mutation: {
    addComment: async (parent, {
      text,
      postId,
    }, {
      models: {
        Comment,
      }
    }) => {
      const comment = await Comment.create({
        text,
        postId,
      });
      return comment;
    }
  }
};