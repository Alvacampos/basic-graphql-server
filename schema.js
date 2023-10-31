export const typeDefs = `#graphql
  type Person {
    id: ID!
    name: String!
    birth: String!
    sex: String
    careerStart: Int!
    skills: [Skill!]
    jobs: [Job!]
    projects: [Project!]
    linkedIn: String!
  }
  type Skill {
    id: ID!
    name: String!
  }
  type Project {
    id: ID!
    name: String!
    text: String!
    skills: [Skill!]
  }
  type Job {
    id: ID!
    name: String!
    text: String!
    date: [String!]!
    projects: [Project!]
    skills: [Skill!]
  }
  type Query {
    people: [Person]
    person(id: ID!): Person
    skills: [Skill]
  }
`;
