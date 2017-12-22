const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(`mongodb://${config.host}:${config.port}/${config.db}`);

db.on('connecting', () => console.log(' connection to MongoDB....'));

db.on('error', error => {
    console.error('Error on MongoDB connection', error);
    mongoose.disconnect();
});

module.exports = mongoose;