import express from "express";
import { findAllPostsController } from "../../controllers/posts.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", findAllPostsController);
};

export default routes;
