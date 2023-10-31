import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './_db.js';
// types
import { typeDefs } from './schema.js';

const resolvers = {
  Query: {
    people() {
      return db.people;
    },
    skills() {
      return db.skills;
    },
    person(_, args) {
      return db.people.find((person) => person.id === args.id);
    },
  },
  Person: {
    skills(parent) {
      return db.skills.filter((skill) => skill.people_id.includes(parent.id));
    },
    jobs(parent) {
      return db.jobs.filter((job) => job.people_id === parent.id);
    },
  },
  Job: {
    projects(parent) {
      return db.projects.filter((project) =>
        parent.project_id.includes(project.id)
      );
    },
  },
  Project: {
    skills(parent) {
      return db.skills.filter((skill) => parent.skills_id.includes(skill.id));
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Server ready at port', url);
