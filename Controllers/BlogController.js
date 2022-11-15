const blogs = require("../Models/PostModel")

module.exports = {
    getBlogs: async (req, res, next) => {
        try {
            const { tags } = req.body
            const results = await blogs.find({ tags: { $in: tags }, }, { title: 1 });
            res.send(results)
        } catch (error) {
            console.log(error,'erron - getAllUsers');
        }
    },
}