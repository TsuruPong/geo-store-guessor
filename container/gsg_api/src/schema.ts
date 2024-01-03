import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const typeDefinitions = `
  type Query {
    stores: [Store!]!
    random: Store!
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
    },
    random: async () => {
      const total = await prisma.store.count();
      const index = Math.floor(Math.random() * total);
      return await prisma.store.findFirst({
        skip: index
      });
    }
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})