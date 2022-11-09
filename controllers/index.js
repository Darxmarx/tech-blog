// set up router for modularity
const router = require('express').Router();
const sequelize = require('../config/connection');

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
