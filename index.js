const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');



const server = new ApolloServer({
    typeDefs,
    resolvers
});

//connect to db 
mongoose.Promise = global.Promise
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to MongoDB");
    // initialize the server
    return server.listen({ port: 5000 });
})
.then(res => {
    console.log(`Server running at ${res.url}`)
})
.catch(err => console.log(err))