import express from "express";
import {
  createNewPostController,
  findAllPostsController,
  uploadImage,
} from "../controllers/posts.js";
import { upload } from "../config/multer.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", findAllPostsController);
  app.post("/posts", createNewPostController);
  app.post("/posts/upload", upload.single("file"), uploadImage);
};

export default routes;
