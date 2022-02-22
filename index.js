const express = require('express')
const cors = require('cors');
const { db } = require('./firebase');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/create', (req, res) => {
  console.log(req.body);
})

app.listen(4000, () => {
  console.log('Example app listening on port 4000!')
});