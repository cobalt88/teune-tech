const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedTags = require('./tagSeeds');
const seedCategory = require('./categorySeeds');
const seedComments = require('./commentSeeds');
const seedPosts = require('./postSeeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();

  await seedCategory();

  await seedPosts();

  await seedTags();

  await seedComments();  



  process.exit(0);

}

seedAll();