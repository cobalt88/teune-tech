const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;