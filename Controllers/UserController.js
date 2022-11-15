const users = require("../Models/UserModel")

module.exports = {
    getUserBlogs: async (req, res, next) => { 
        try {
            const { id } = req.body.userData
            const result = await users.aggregate([
              {
                $match: {
                  _id: id,
                },
              },
              {
                $lookup: {
                  from: "blogs",
                  localField: "_id",
                  foreignField: "uid",
                  as: "blog_posts",
                },
              },
            ]);
            res.send(result)
        } catch (error) {
            console.log(error,'erron - getAllUsers');
        }
    },
    // getAllUsers: async (req, res, next) => {
    //     try {
    //         const userList = await users.find({})
    //         res.send(userList)
    //     } catch (error) {
    //         console.log(error,'erron - getAllUsers');
    //     }
    // },
}