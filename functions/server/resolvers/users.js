import isEmail from "isemail";
import argon2 from "argon2";
import randomBytes from "randombytes";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

export default {
  Query: {
    user: async (parent, args, { db, user }) => {
      console.log("user", user);

      try {
        const record = await db.collection("users").findOne({ _id: ObjectId(user.userId) });
        return record;
      } catch (e) {
        throw new Error(`findOne user ${e}`);
      }
    },
  },
  Mutation: {
    signUp: async (_, { name, email, password }, { db }) => {
      //return await dataSources.Users.signUp(name, email, password);
      const salt = randomBytes(32);
      const passwordHashed = await argon2.hash(password, { salt });

      isEmail.validate(email);

      const existingUser = await db.collection("users").findOne({ email: email });

      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      const user = db.collection("users").insertOne({
        password: passwordHashed,
        email,
        emailVerified: false,
        salt: salt.toString("hex"),
        name,
      });

      const userId = user.insertedId;

      const signature = process.env.JWT_SECRET;
      const expiration = "6h";

      const token = jwt.sign({ name, userId }, signature, { expiresIn: expiration });

      return token;
    },
    signIn: async (_, { email, password }, { db }) => {
      try {
        const userArray = await db.collection("users").find({ email }).toArray();

        const user = userArray[0];

        if (!user) {
          throw new Error("User not found");
        } else {
          const correctPassword = await argon2.verify(user.password, password);

          if (!correctPassword) {
            throw new Error("Incorrect Password");
          }
        }

        const signature = process.env.JWT_SECRET;
        const expiration = "6h";

        const token = jwt.sign({ name: user.name, userId: user._id }, signature, { expiresIn: expiration });
        return { token };
      } catch (e) {
        throw new Error(`signIn ${e}`);
      }
    },
  },
};
