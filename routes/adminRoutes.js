const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/dashboard', adminController.getAdminDashboard);


router.get('/add-food', (req, res) => {
    res.render('admin/addFood');
});
router.post('/addFood', adminController.postaddFood);


router.get('/foodList', adminController.getAllFood);


router.get('/editFood/:id', adminController.getEditFood);
router.post('/editFood/:id', adminController.postEditFood);
router.post('/deleteFood/:id', adminController.deleteFood);




module.exports = router;