import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import mongoose from "mongoose";

dotenv.config();
const username = process.env.DB_USERNAME || "admin";
const passwd = process.env.DB_PASSWORD || "1234567890";
const PORT = process.env.PORT || 3001

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const CONNECTION_url = `mongodb+srv://${username}:${passwd}@cluster0.tfcjplj.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(CONNECTION_url)
    .then(() => console.log("connection is established and running"))
    .catch((err) => console.log(err.message));

app.listen(PORT, () =>
    console.log(`server started on port ${PORT}`)
);

