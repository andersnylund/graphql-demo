export default {
  Query: {
    messages: async (parent, {
      threadId
    }, {
      models: {
        Message,
      }
    }) => {
      const messages = await Message.findAll({
        where: {
          threadId
        }
      });
      console.log('messages:', messages)
      return messages;
    },
  },
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