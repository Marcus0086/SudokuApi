import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/resolvers";
import { graphql } from "graphql";

export default async (req, res) => {
  let query = `{ newboard {grid { value, solution}, difficulty, message} }`;
  let resp = "";
  if (req.query.query || req.query.query !== undefined) {
    query = req.query.query;
  }
  try {
    resp = await graphql(typeDefs, query, resolvers).catch(err => alert(err));
  } catch (err) {
    alert(err);
  }
  const { newboard } = !resp.data ? { newboard: { message: 'Incorrect query!' } } : await resp.data;

  await res.status(200).json(JSON.stringify(newboard, null, 4));
  res.end();
};
