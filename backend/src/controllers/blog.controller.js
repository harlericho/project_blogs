const pool = require("../../config/database");

// todo: get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const sql = "SELECT * FROM blogs";
    const result = await pool.query(sql);
    if (result.rows.length > 0) {
      return res.status(200).json({
        message: "Success",
        data: result.rows,
      });
    } else {
      return res.status(404).json({
        message: "Not Found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "false",
      data: error.message,
    });
  }
};

// todo: get a blog by id
const getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = "SELECT * FROM blogs WHERE id = $1";
    const result = await pool.query(sql, [id]);
    if (result.rows.length > 0) {
      return res.status(200).json({
        message: "Success",
        data: result.rows,
      });
    } else {
      return res.status(404).json({
        message: "Not Found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "false",
      data: error.message,
    });
  }
};

// todo: create a blog
const createBlog = async (req, res) => {
  try {
    const { title, autor, content } = req.body;
    const sql = "INSERT INTO blogs (title, autor, content) VALUES ($1, $2, $3)";
    await pool.query(sql, [title, autor, content]);
    return res.status(201).json({
      message: "Success",
      data: "Blog created",
    });
  } catch (error) {
    return res.status(500).json({
      message: "false",
      data: error.message,
    });
  }
};

// todo: update a blog
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, autor, content } = req.body;
    const sql =
      "UPDATE blogs SET title = $1, autor = $2, content = $3 WHERE id = $4";
    await pool.query(sql, [title, autor, content, id]);
    return res.status(200).json({
      message: "Success",
      data: "Blog updated",
    });
  } catch (error) {
    return res.status(500).json({
      message: "false",
      data: error.message,
    });
  }
};

// todo: delete a blog
const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = "DELETE FROM blogs WHERE id = $1";
    const result = await pool.query(sql, [id]);
    if (result.rowCount > 0) {
      return res.status(200).json({
        message: "Success",
        data: "Blog deleted",
      });
    } else {
      return res.status(404).json({
        message: "Not Found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "false",
      data: error.message,
    });
  }
};

// todo: export all the functions
module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
