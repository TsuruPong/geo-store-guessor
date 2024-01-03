import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const typeDefinitions = `
  type Query {
    stores: [Store!]!
  }

  type Store {
    id: ID!
    name: String!
    address: String!
    lat: Float!
    lng: Float!
  }
`;
 
const resolvers = {
  Query: {
    stores: () => {
      return prisma.store.findMany();
    }
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})