const db = require('../config/db');

exports.getDashboard =  (req, res) => {
    res.render ('users/dashboard', { message: null })
}

exports.getAllFoods = async (req, res) => {
    try {
        const foods = await db.any('SELECT * FROM food_items ORDER BY id DESC');
        res.render('users/food', { foods });
    } catch (error) {
        console.error('Error fetching foods items:', error)
        res.status(500).send('Server Error')
    }
}

