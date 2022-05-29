const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedTags = require('./tagSeeds');
const seedCategory = require('./categorySeeds');
const seedComments = require('./commentSeeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();

  await seedTags();

  await seedCategory();

  await seedComments();

  process.exit(0);

}

seedAll();