const faker = require('faker');
const express = require('express');

const app = express();

const vehicle = () => ({
  name: faker.vehicle.vehicle(),
  model: faker.vehicle.model(),
  manufacturer: faker.vehicle.manufacturer(),
  type: faker.vehicle.type(),
  color: faker.vehicle.color(),
  fuel: faker.vehicle.fuel(),
});

app.get('/', function (req, res) {
  let data = [];
  for (let i = faker.datatype.number({ min: 20, max: 150 }); i > 0; i--) {
    data.push(vehicle());
  }
  res.json(data);
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('🚀 Server on port ' + port);
});
