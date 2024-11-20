import { findAllPosts } from "../models/posts.js";

export const findAllPostsController = async (req, res) => {
  const posts = await findAllPosts();

  return res.status(200).json(posts);
};
