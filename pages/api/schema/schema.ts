import { buildSchema } from "graphql";

export const typeDefs = buildSchema(`
    type Query {
        newboard: puzzle!, 
    }

    type puzzle {
        grid: data!,
        difficulty: String,
        message: String
    }

    type data {
        value:[[Int!]]!,
        solution:[[Int!]]!
    }
`);
