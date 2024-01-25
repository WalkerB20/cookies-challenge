const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/login', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.cookie('name', name, { httpOnly: true });
        res.send(`Logged in as ${name}`);
    } else {
        res.send('Name is required');
    }
});

app.get('/hello', (req, res) => {
    if (req.cookies.name) {
        res.send(`Welcome ${req.cookies.name}!`);
    } else {
        res.send('Please login first');
    }
});

const PORT = 5080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
