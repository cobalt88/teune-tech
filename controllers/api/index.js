const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');
const adminRoutes = require('./adminRoutes');
const guestRoutes = require('./guestRoutes');
const userRoutes = require('./userRoutes');


router.use('/admin', adminRoutes);
router.use('/guest', guestRoutes);
router.use('/user', userRoutes);
router.use('comments', commentRoutes);

module.exports = router;