import { Resolvers } from "../../types/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    me: (root, args, context) => {
      return {
        id: "1",
      };
    },
  },
};

export default resolvers;
