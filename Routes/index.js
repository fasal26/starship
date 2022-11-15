const express = require('express');
const router = express.Router();
const createError = require('http-errors')

router.use((req, res, next) => {
    if(req.path != '/auth/generateToken'){
        const gnd = req.header(process.env.GENDER_HEADER_KEY)
        const { category } = req.body
        if(!gnd){
            next(createError(401, {
                message: 'gender is required'
            }));
        }
        switch (category || gnd) {
            case 'male':
                req.body.gender = ['0']
                break;
            case 'female':
                req.body.gender = ['1']
                break;
            case 'all':
                req.body.gender = ['0','1']
                break;
            default:
                next(createError(401, {
                    message: 'gender is not valid'
                }));
                break;
        }
        next()
    }else{
        next()
    }
})

//Get a users blogs by id
router.use('/userblog', require('./api/userBlog'));

//filter blog posts blogs by tag name
router.use('/blog', require("./api/blogs"));

// //get product details
router.use('/product', require("./api/products"));

// //get user token
router.use('/auth', require("./api/authorization"));


module.exports = router;
