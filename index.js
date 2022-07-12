const faker = require('faker');
const express = require('express');

const app = express();

const company = () => ({
  name: faker.company.companyName(),
  location: faker.address.country(),
  size: faker.datatype.number(90000),
  tagline: faker.company.catchPhrase(),
  product: faker.commerce.productName(),
  productDescriptoin: faker.commerce.productDescription(),
});
app.get('/', function (req, res) {
  let data = [];
  for (let i = faker.datatype.number({ min: 20, max: 150 }); i > 0; i--) {
    data.push(company());
  }
  res.json(data);
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('🚀 Server on port ' + port);
});
