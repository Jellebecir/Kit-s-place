import { Request, Response } from "express";
import pool from "../db/pool";

// GET /api/blog
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Database error", err });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log("Fetching post with ID:", id);
  try {
    const result = await pool.query("SELECT * FROM blog_posts WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching post:", err);
    res.status(500).json({ error: "Database error" });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, slug, content } = req.body;

  if (!title || !slug || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await pool.query(
      `INSERT INTO blog_posts (title, slug, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, slug, content]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating blog post:", err);
    res.status(500).json({ error: "Database error" });
  }
};

// PUT /api/blog/:id
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, slug, content } = req.body;

  try {
    const result = await pool.query(
      `UPDATE blog_posts
       SET title = $1,
           slug = $2,
           content = $3,
           updated_at = NOW()
       WHERE id = $4
       RETURNING *`,
      [title, slug, content, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ error: "Database error" });
  }
};

// DELETE /api/blog/:id
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM blog_posts WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ error: "Database error" });
  }
};