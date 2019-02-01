export default {
  Mutation: {
    addMessage: async (parent, {
      text,
      threadId,
    }, {
      models: {
        Message,
      }
    }) => {
      const message = await Message.create({
        text,
        threadId,
      });
      return message;
    }
  }
};