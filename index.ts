import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './src/graphql/resolvers';
import typeDefs from './src/graphql/typeDefs';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

startServer();
