import fs from "fs";
import { createPost, findAllPosts } from "../models/posts.js";

export const findAllPostsController = async (req, res) => {
  const posts = await findAllPosts();

  return res.status(200).json(posts);
};

export const createNewPostController = async (req, res) => {
  try {
    const post = await createPost(req.body);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ Error: "Erro interno do servidor" });
  }
};

export const uploadImage = async (req, res) => {
  req.body.img_url = req.file.originalname;
  try {
    const post = await createPost(req.body);
    const updatedImg = `uploads/${post.insertedId}.png`;
    fs.renameSync(req.file.path, updatedImg);
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ Error: "Erro interno do servidor" });
  }
};
