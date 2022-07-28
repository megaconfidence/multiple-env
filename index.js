const express = require('express')
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let activeEnv = 'user';

app.get('/', function (req, res) {
  res.json({activeEnv})
})

app.post('/', function (req, res) {
  activeEnv = req.body.env;
  res.json({activeEnv})
})

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('🚀 Server on port ' + port);
});
