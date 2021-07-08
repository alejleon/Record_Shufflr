const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/record_shuffle', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
  console.log('connected to mongoose on 27017')
})

module.exports = db;