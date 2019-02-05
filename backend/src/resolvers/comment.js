import pubsub from '../subscription';
import { withFilter } from 'apollo-server';

export default {
  Mutation: {
    addComment: async (parent, { text, postId }, { models: { Comment } }) => {
      const comment = await Comment.create({
        text,
        postId,
      });
      pubsub.publish('commentAdded', {
        commentAdded: {
          comment,
          postId,
        },
      });
      return comment;
    },
  },
  Subscription: {
    commentAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('commentAdded'),
        (payload, variables) => {
          return payload.commentAdded.postId === variables.postId;
        }
      ),
    },
  },
};
