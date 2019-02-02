const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { Query } = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query
  },
  context: {
    db: prisma
  }
});

server.start(() => console.log("Running on localhost:4000"));
