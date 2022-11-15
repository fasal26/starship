const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel')

module.exports = {
    generateToken: async (req, res, next) => {
        try {
            const { mobile, password } = req.body
            const jwtSecretKey = process.env.JWT_SECRET_KEY;
            const { _id } = await User.findOne({ phone: mobile });
            const request = {
                mobile,
                password,
                id: _id
            }
            const token = jwt.sign(request, jwtSecretKey, { expiresIn: "1d" });
            res.send(token);
        } catch (error) {
            
            console.log(error,'erron - token');
        }
    },
}