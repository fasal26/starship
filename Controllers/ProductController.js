const Products = require("../Models/ProductModel")

module.exports = {
    getProducts: async (req, res, next) => {
      console.log(req.body,"controller");
      const { gender } = req.body
      console.log(gender,'gender');
        try {
            const result = await Products.aggregate([
              {
                $match: {
                    category: {
                      $in: gender
                    },
                }
              },
              {
                $project: {
                  category: 1,
                  title: 1,
                  total_amount: { $subtract: ["$price", "$discount_price"] },
                },
              }
            ]);
            res.send(result)
        } catch (error) {
            console.log(error,'erron - getAllUsers');
        }
    },
}