const router = require('express').Router();
const controller = require('./user.controller');

router.get('/user/:id', controller.getUser);

module.exports = router;
