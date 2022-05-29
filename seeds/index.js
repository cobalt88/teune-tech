const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();

  process.exit(0);

}

seedAll();