const express = require('express');
const path = require('path');
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT ||  7000, function () {
    console.log("app running on port.", process.env.PORT ||  7000);
});

module.exports = app;
