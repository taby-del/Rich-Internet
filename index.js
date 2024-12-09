const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user.route');
const session = require('express-session');
const dashboardRouter = require('./routes/dashboard.route');
const app = express();

require('dotenv').config();
require('./lib/dbConnect');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: process.env.AUTH_SECRET,
        saveUninitialized: true,
        resave: false,
    })
);
app.use('/', userRouter);
app.use('/dashboard', dashboardRouter);

// Uncomment these routes if you want to use them
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

// Catch-all for 404 errors
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});