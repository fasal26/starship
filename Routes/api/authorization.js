const router = require('express').Router(); 
const Authorization = require("../../Controllers/TokenController")

// individual products routes
router.post('/generateToken', Authorization.generateToken)

module.exports = router;