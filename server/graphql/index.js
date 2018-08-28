const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

module.exports = (app) => {

  const graphQLSchema = buildSchema(`
type Query {
  hello: String
}`)

  const root = {
    hello: () => {
      return 'Hello World';
    },
  };

  app.use('/graphql', graphqlHTTP({
    schema: graphQLSchema,
    rootValue: root,
    graphiql: true,
  }));
  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');
}