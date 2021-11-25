import { ObjectId } from 'mongodb'

export default {
  Query: {
    posts: async (parent, args, { db, user }) => {
      try {
        const result = await db
          .collection('posts')
          .find({ userId: user.userId })
          .sort({ createdAt: -1 })
          .toArray()
        return result
      } catch (e) {
        throw new Error(`get Posts ${e}`)
      }
    }
  },
  Mutation: {
    deletePost: async (_, { id }, { db, user }) => {
      if (!user) {
        throw new Error('Authentication is needed')
      }
      const res = await db.collection('posts').deleteOne({ _id: ObjectId(id) })
      return !!res
    },
    addPost: async (_, { text, title, tag }, { db, user }) => {
      if (!user) {
        throw new Error('Authentication is needed')
      }
      return db.collection('posts').insertOne({
        userId: user.userId,
        text,
        title,
        tag,
        createdAt: new Date()
      })
    },
    editPost: async (_, { _id, text, title, tag }, { db, user }) => {
      if (!user) {
        throw new Error('Authentication is needed')
      }

      try {
        const result = await db.collection('posts').updateOne(
          { _id: ObjectId(_id) },
          {
            $set: {
              text,
              title,
              tag,
              updatedAt: new Date()
            }
          }
        )

        return result
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
