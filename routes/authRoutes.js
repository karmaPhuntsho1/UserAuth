const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Route route
router.get('/', (req, res) => {
    res.render('pages/landing');

})

// signup routes
router.get('/signup', authController.getSignupPage);
router.post('/signup', authController.postSignup);

//email verification route
router.get('/verify-email', authController.verifyEmail);

//Login routes
router.get('/login', authController.getLoginPage);  
router.post('/login', authController.postLogin);

// forgot password routes
router.get('/forgot_password', authController.getForgotPassword);
router.post('/forgot_password', authController.postForgotPassword);
router.get('/reset_password', authController.getResetPassword);
router.post('/reset_password', authController.resetPassword);

//logout route
router.get('/logout', authController.logoutUser);

module.exports = router;
