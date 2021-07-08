const express = require('express');
const mongoose = require('mongoose');
const db = require('./index.js');

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
const insertCollection = (params, callback) => {
  UserCollection.create({
    username: params.username,
    releases: params.releases
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



module.exports = {
  insertCollection,
  getCollection
}