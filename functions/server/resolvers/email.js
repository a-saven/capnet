import sgMail from "@sendgrid/mail";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

export default {
  Query: {
    confirmEmail: async (_, { token }, { db }) => {
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      const record = await db.collection("users").updateOne(
        { _id: ObjectId(decoded.userId) },
        {
          $set: {
            emailVerified: true,
          },
        }
      );
      console.log("record", record);

      return true;
    },
  },
  Mutation: {
    sendEmail: async (_, { email }, { db, user }) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const reason = "verify";
      const signature = process.env.JWT_SECRET;
      const expiration = "6h";

      const token = jwt.sign({ name: user.name, userId: user.userId }, signature, { expiresIn: expiration });
      const link = `https://caplog.netlify.app/${reason}/${token}`;

      const mailOptions = {
        to: email,
        from: "smithdaagent@gmail.com",
        subject: `${reason} email`,
        text: `Please click this link to ${reason} email ${link}`,
        html: `<strong>Please click this link to ${reason} email ${link}</strong>`,
      };

      try {
        await sgMail.send(mailOptions);
        return token;
      } catch (e) {
        throw new Error(`send mail ${e}`);
      }
    },
  },
};
