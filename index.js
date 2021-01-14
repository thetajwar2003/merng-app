const { ApolloServer }  = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');

const typeDefs = gql`
    type Query{
        sayHi: String!

    }
`;

// process the query and return what the query returns
const resolvers = {
    Query: {
        sayHi: () => 'Hello World!!!' 
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

//connect to db 
mongoose.connect(MONGODB, { useNewUrlParser: true })
.then(() => {
    console.log("Connected to mongodb");
    // initialize the server
    return server.listen({ port: 5000 });
})
.then(res => {
    console.log(`Server running at ${res.url}`)
})