import fs from "fs";
import { createPost, findAllPosts, updatePost } from "../models/posts.js";
import generateDescriptionWithGemini from "../services/gemini.js";

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

export const uploadImageController = async (req, res) => {
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

export const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { alt } = req.body;

  try {
    const image = fs.readFileSync(`uploads/${id}.png`);
    const description = await generateDescriptionWithGemini(image);

    const post = {
      img_url: `${process.env.SERVER_URL}/${id}.png`,
      description,
      alt,
    };

    const updatedPost = await updatePost(id, post);
    return res.status(201).json(updatedPost);
  } catch (error) {
    return res.status(500).json({ Error: "Erro interno do servidor" });
  }
};
