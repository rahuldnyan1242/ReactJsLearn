const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/iNotebook'

const connectToMongo = () => {
    mongoose.connect(mongoURI);
}

module.exports = connectToMongo;