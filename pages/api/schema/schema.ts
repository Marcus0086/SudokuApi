import { buildSchema } from "graphql";

export const typeDefs = buildSchema(`
    type Query {
        newboard(limit:Int!): puzzle!, 
    }

    type puzzle {
        grids: [data!]!,
        results: Int,
        message: String
    }

    type data {
        value:[[Int!]]!,
        solution:[[Int!]]!,
        difficulty: String
    }
`);
