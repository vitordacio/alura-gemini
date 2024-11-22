import "dotenv/config";
import express from "express";
import routes from "./routes/posts.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
