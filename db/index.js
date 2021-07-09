const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/record_shuffle', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
  console.log('connected to mongoose on 27017')
})


const Schema = mongoose.Schema;

// SCHEMA /////////////////////////////////////////////
///////////////////////////////////////////////////////
var userCollectionSchema = new Schema({
  username: String,
  user_id: Number,
  releases: [
    {
      id: Number,
      instance_id: Number,
      date_added: Date,
      rating: Number,
      basic_information: {
        id: Number,
        master_id: Number,
        master_url: String,
        resource_url: String,
        thumb: String,
        cover_image: String,
        title: String,
        year: Number,
        formats: [
          {
            name: String,
            qty: Number,
            text: String,
            description: [String]
          }
        ],
        labels: [
          {
            name: String,
            catno: String,
            id: Number
          }
        ],
        artists: [
        {
          name: String,
          id: Number
        }
        ],
        genres: [String],
        Styles: [String]
      }
    }
  ]
})

// MODELS ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const UserCollection = mongoose.model('UserCollection', userCollectionSchema)


// DATABASE QUERIES //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const insertCollection = (username, releases, callback) => {
  UserCollection.create({
    username: username,
    releases: releases
  }, (err, response) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, response)
    }
  })
}

const getCollection = (username, callback) => {
  UserCollection.find({username: username}, (err, collection) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, collection)
    }
  })
}

// const checkExistence = (username, callback) => {
//   UserCollection.findOne({username}, (err, ))
// }



module.exports = {
  insertCollection,
  getCollection
}









// module.exports = db;