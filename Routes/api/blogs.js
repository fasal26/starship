const router = require('express').Router(); 
const BlogController = require("../../Controllers/BlogController")

// individual products routes
router.post('/', BlogController.getBlogs)

module.exports = router;