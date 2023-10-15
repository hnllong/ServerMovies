import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";


import router from "./router";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

const MONGO_URL =
  "mongodb+srv://hnlong:long44227029@cluster0.ltragyj.mongodb.net/"; // DB URI

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL, () => {
  console.log("Connected to MongoDB");
});

mongoose.Promise = Promise;
mongoose.connection.on("error", (error: Error) => console.log(error));

const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = 'AIzaSyBwO_eYWixDvqF0okD5HL8eho8aE3ZL4Dk'

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});



export default function handler(req:any, res:any) {
    let messages = [{ content: req.query.ques }];
  
client.generateMessage({
  // required, which model to use to generate the result
  model: MODEL_NAME,
  // optional, 0.0 always uses the highest-probability result
  temperature: 0.25,
  // optional, how many candidate results to generate
  candidateCount: 1,
  // optional, number of most probable tokens to consider for generation
  top_k: 40,
  // optional, for nucleus sampling decoding strategy
  top_p: 0.95,
  prompt: {
    messages: messages,
  },
}).then((result:any) => {
    console.log("Bot is running:", result[0].candidates[0]?.content);

    messages.push({ content: result[0].candidates[0]?.content });
   // console.log(JSON.stringify(result, null, 2));
    res.status(200).json({ resp: messages })
});
}

app.use("/", router());
app.use("/bot", handler)
