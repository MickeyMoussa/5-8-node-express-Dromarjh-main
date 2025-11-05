import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

app.use(cors())

app.get("/api/quote", (req, res) => {
      res.json(getRandomQuote());
    });

app.get("/", (req, res) => {
      res.send("Welcome to the Quote Generator API");
    });

app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });





