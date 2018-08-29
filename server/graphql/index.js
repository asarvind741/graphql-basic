const {
  buildSchema,
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLNonNull
 } = require('graphql');
const graphqlHTTP = require('express-graphql');

module.exports = (app) => {

//   const graphQLSchema = buildSchema(`
//   type Query {
//   quoteOfTheDay: String
//   random: Float!
//   rollDice(numDice: Int!, numSides: Int!): [Int] }

  
// `)

//   const root = {
//     quoteOfTheDay: () => {
//       return Math.random()<0.5 ? 'Take it easy': 'Salvation lies within'
//     },
//     random: () => {
//       return Math.random()
//     },
//     rollDice: function (args) {
//       var output = [];
//       for (var i = 0; i < args.numDice; i++) {
//         output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
//       }
//       return output;
//     }
//   };

var fakeDatabase = {
  'a': {
    id: 'a',
    name: 'alice',
  },
  'b': {
    id: 'b',
    name: 'bob',
  },
};

var userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

 var queryType = new GraphQLObjectType ({
   name: 'Query',
   fields: {
     user: { type: userType,
     args: { id : { type: new GraphQLNonNull(GraphQLString)}},
     resolve: function(_, {id}){ return fakeDatabase[id]}
     }
   }
 })

 var schema  = new GraphQLSchema({ query: queryType })

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  }));
  app.listen(4000);
  console.log('Running a GraphQL API server at localhost:4000/graphql');
}