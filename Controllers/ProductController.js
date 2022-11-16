const Products = require("../Models/ProductModel")
const client = require("../redisConnection.js")

module.exports = {
    getProducts: async (req, res, next) => {
      const { gender } = req.body
      let redis_key;
      let result;
      if(gender.includes('0') && gender.includes('1')){
        redis_key = 'common'
      }else if(gender.includes('0')){
        redis_key = 'male_prd'
      }else if(gender.includes('1')){
        redis_key = 'female_prd'
      }
        try {
          result = await client.json.get(redis_key)
          if(!result){
            result = await Products.aggregate([
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
          }
            res.send(result)
            client.json.set(redis_key,'.',result)
        } catch (error) {
            console.log(error,'erron - getAllUsers');
        }
    },
}