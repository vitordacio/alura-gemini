import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
