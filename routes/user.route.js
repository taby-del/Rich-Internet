const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('pages/index', { title: 'Finly' });
});
router.get('/login', (req, res) => {
    res.render('pages/login', {
        title: 'Sign in',
    });
});
router.get('/signup', (req, res) => {
    res.render('pages/signup', {
        title: 'Sign up',
    });
});
module.exports = router;

module.exports = router;