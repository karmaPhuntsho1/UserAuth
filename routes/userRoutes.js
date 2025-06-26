const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');    

router.get('/dashboard', userController.getDashboard);
router.get('/food', userController.getAllFoods);

module.exports = router;