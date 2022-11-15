const router = require('express').Router(); 
const userBlogController = require("../../Controllers/UserController")

// individual products routes
router.post('/', userBlogController.getUserBlogs)

module.exports = router;