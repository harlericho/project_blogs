const express = require("express");
const router = express.Router();
const apiBlog = require("../src/routes/blog.routes");

// todo: routers for blog
router.use("/blogs", apiBlog);

// todo: export module
module.exports = router;
