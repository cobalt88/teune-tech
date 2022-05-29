const sequelize = require('sequelize');
const seedUsers = require('./userSeeds');

const seedAll = async() => {
  await sequelize.sync({ force: true });

  await seedUsers();

  process.exit(0);

}

seedAll();