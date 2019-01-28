export default {
  Query: {
    threads: async (parent, args, {
      models: {
        Thread,
        Message
      }
    }) => {
      const threads = await Thread.findAll();
      const result = await Promise.all(threads.map(async (thread) => {
        const messages = await Message.findAll({
          where: {
            threadId: thread.id
          }
        });
        return {
          id: thread.id,
          text: thread.text,
          messages
        }
      }));
      return result;
    },
  },
  Mutation: {
    addThread: async (parent, {
      text
    }, {
      models: {
        Thread
      }
    }) => {
      const thread = await Thread.create({
        text
      });
      return thread;
    }
  }
};