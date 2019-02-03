const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { Query } = require("./resolvers");

const { SERVER_PORT, SERVER_GRAPHQL, SERVER_PLAYGROUND } = process.env;

console.log(process.env, SERVER_PORT);

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query
  },
  context: {
    db: prisma
  },
});

server.start({
  port: SERVER_PORT,
  playground: SERVER_PLAYGROUND,
  endpoint: SERVER_GRAPHQL
}).then(() => {
  console.log(
    `Running
      server --> localhost:${SERVER_PORT}${SERVER_GRAPHQL}
      playground --> localhost:${SERVER_PORT}${SERVER_PLAYGROUND}`
  );
});
