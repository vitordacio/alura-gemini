import connectToMongoDB from "../config/db.js";

const mongo = await connectToMongoDB();
const db = mongo.db("imersao-instabytes");
const collection = db.collection("posts");

export const findAllPosts = async () => {
  return collection.find().toArray();
};
