const router = require('express').Router(); 
const ProductController = require("../../Controllers/ProductController")

// individual products routes
router.post('/', ProductController.getProducts)

module.exports = router;