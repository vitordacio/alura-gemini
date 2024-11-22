import express from "express";
import cors from "cors";
import {
  createNewPostController,
  findAllPostsController,
  updatePostController,
  uploadImageController,
} from "../controllers/posts.js";
import { upload } from "../config/multer.js";

const routes = (app) => {
  app.use(express.json());
  app.use(cors({ credentials: true, origin: "*", optionsSuccessStatus: 200 }));

  app.get("/posts", findAllPostsController);
  app.post("/posts", createNewPostController);
  app.post("/posts/upload", upload.single("file"), uploadImageController);
  app.put("/posts/:id", updatePostController);
};

export default routes;
