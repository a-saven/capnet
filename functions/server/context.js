import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";
import { AuthenticationError } from "apollo-server-lambda";

export default async function Context({ event, context }) {
  let db;
  try {
    const token = event.headers.authorization || false;
    if (token) {
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
    }
    if (!db) {
      const client = await MongoClient.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
      });
      db = client.db("Caplog");
    }
    return { db, user: decoded };
  } catch (e) {
    throw new AuthenticationError(`Context creation ${e}`);
  }
}
