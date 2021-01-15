const postResolvers = require('./posts');
const usersResolvers = require('./users');

// process the query and return what the query returns
module.exports = {
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}