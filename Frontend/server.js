const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const randomize = require('./lib/randomizeProducts.js');
const data = require('./lib/objectProvider.json');

<<<<<<< HEAD
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static( __dirname + '/public'));

app.use('/', indexRouter);
=======
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static( __dirname + '/public'))

app.use('/', require('./routes/index'))
app.use('/menu', require('./routes/index'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000!');
});
>>>>>>> cd7674c87df7801a2a41ce4bc54d1b0774e3d967

app.get('/api/getdata', (req, res) => {
    let randomizedData = randomize(data);
    res.send(randomizedData);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on port 3000!');
});

