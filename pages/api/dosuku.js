import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/resolvers";
import { graphql } from "graphql";

export default async (req, res) => {
  let query = `{ newboard(limit:${1}) {grids { value, solution, difficulty}, results, message} }`;
  let resp = "";
  if (req.query.query || req.query.query !== undefined) {
    query = req.query.query;
  }
  try {
    resp = await graphql(typeDefs, query, resolvers).catch(err => alert(err));
  } catch (err) {
    alert(err);
  }
  const data = await resp?.data;
  await res.status(200).json(JSON.stringify(data, null, 4));
  res.end();
};
