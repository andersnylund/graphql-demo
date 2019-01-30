export default {
  Query: {
    threads: async (parent, args, {
      models: {
        Thread
      }
    }) => {
      return Thread.findAll();
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