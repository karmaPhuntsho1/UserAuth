const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.get('/dashboard', adminController.getAdminDashboard);


router.get('/add-food', (req, res) => {
    res.render('admin/addFood');
});
router.post('/add-food', adminController.postaddFood);


router.get('/foodList', adminController.getAllFood);


router.get('/edit-food/:id', adminController.getEditFood);
router.post('/edit-food/:id', adminController.postEditFood);
router.post('/delete-food/:id', adminController.deleteFood);


router.get('/food', adminController.getAllFood);


module.exports = router;