const faker = require('faker');
const User = require('../models/User');

const generateFakeUsers = async (count) => {
  for (let i = 0; i < count; i++) {
    const user = new User({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    await user.save();
  }

  console.log(`${count} fake users created.`);
};

module.exports = generateFakeUsers;
