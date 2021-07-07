const express = require("express");
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

app.use('/', express.static(path.join(__dirname, '../dist/')))
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded())





app.get("/test", (req, res) => {
  res.json({ message: "Hello from server!!" });
});









app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});