// const { gql } = require('apollo-server-express');

// const typeDefs = gql`


 

//   type Mutation {
    
//   }
// `;

// module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
  _id: ID
  title: String
  author: String
  pages: Int
}

  type User {
 
    username: String
    email: String
    _id: ID
   
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    
      books: [Book]
      book(title: String!): Book
    
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    addBook(title: String!, author: String!, pages: Int!): Book
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
