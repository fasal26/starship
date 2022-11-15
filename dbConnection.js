const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb+srv://fasalmongor7:kanmanni26@cluster0.vzj0ju3.mongodb.net/startship-db?retryWrites=true&w=majority').then(() => {
        console.log('mongo-db connected');
    })
    .catch((err) => {
        console.log(err,'err');
    })
}