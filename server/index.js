const express = require("express");
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const axios = require('axios')
const DISCOGS_TOKEN = require('../client/secrets.js')
const UserCollection = require('../db/index.js')
const db = require('../db');

const PORT = process.env.PORT || 3001;

app.use('/', express.static(path.join(__dirname, '../dist/')))
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded())





app.get("/test", (req, res) => {
  res.json({ message: "Hello from server!!" });
});

// Get Full Collection in Chunks ////////////////////////////////////////////////////
app.get('/collection', (req, res) => {
  let username = req.query.username;
  let fullCollection = [];

    axios.get(`https://api.discogs.com/users/${username}/collection/folders/0/releases`, {headers: {'Authorization': DISCOGS_TOKEN}})
    // Get page Numbers /////////////////////////////////////////////////////////////
    .then((collection) => {
      let pages = collection.data.pagination.pages;
      return pages;
    })
    .then((pages) => {
    // Get Rest of Collection By Pages ///////////////////////////////////////////////
      for (let i = 1; i <= pages; i++) {
        axios.get(`https://api.discogs.com/users/${username}/collection/folders/0/releases?page=${i}`)
        .then((collection) => {
          let releases = collection.data.releases;

          for (let i = 0; i < releases.length; i++) {
            fullCollection.push(releases[i])
          }
          console.log(fullCollection[0].basic_information.formats)
          db.insertCollection()
        })
      }
      res.json(fullCollection.length)
    })
})






app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});