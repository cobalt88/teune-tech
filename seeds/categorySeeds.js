const Sequelize = require('../config/connection');
const { Category } = require('../models');

const categoryData = [

  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category#',
    category_description: 'description of the category goes here',
  },
];

const categorySeeds = () => Category.bulkCreate(categoryData);
module.exports = categorySeeds;