import mongoose from "mongoose";
import crypto from "crypto";
const { MongoClient } = require("mongodb");
const MONGO_URL =
  "mongodb+srv://hnlong:long44227029@cluster0.ltragyj.mongodb.net/"; // DB URI
const dbName = "test";
const TokenAgoraSchema = new mongoose.Schema({
  token: String,
});

export const callAgora = mongoose.model("TokenAgora", TokenAgoraSchema);

export const getToken = async () => {
  const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
  await client.connect();
  const database = client.db(dbName);
  const collection = database.collection("tokenagoras");
  const randomString = crypto.randomBytes(16).toString("hex");
  const document = { token: randomString };
  const result = await collection.insertOne(document);

  console.log("Inserted document with ID:", result.insertedId);
};

export const getTokenById = async () => {
  const lastDocument: any = await callAgora.find().sort({ _id: -1 }).limit(1);
  return lastDocument;
  //   console.log("lastDocument", lastDocument?.id);
  //   //   console.log("lastDocument", lastDocument?.id);
  //   const token = await callAgora.findById(lastDocument?._id);
  //   console.log("test token", token);
  //   return token;
};
