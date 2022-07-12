const faker = require('faker');
const express = require('express');

const app = express();

const user = () => ({
  name: faker.name.firstName(),
  age: faker.datatype.number(120),
  phone: faker.phone.phoneNumber(),
  gender: faker.name.gender(),
  jobType: faker.name.jobType(),
  jobTitle: faker.name.jobTitle(),
});

app.get('/', function (req, res) {
  let data = [];
  for (let i = faker.datatype.number({ min: 20, max: 150 }); i > 0; i--) {
    data.push(user());
  }
  res.json(data);
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('🚀 Server on port ' + port);
});