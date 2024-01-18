import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
