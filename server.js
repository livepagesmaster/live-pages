const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/proxy/*', (req, res) => {
  const url = 'http://66.102.120.18:8000/' + req.params[0];
  req.pipe(request(url)).pipe(res);
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Listening on port ${port}`));
