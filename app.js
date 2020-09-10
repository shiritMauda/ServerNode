

var cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');
const clientRoutes = require('./api/routes/client');

app.use(cors());
app.use(morgan('dev'));
// routes which should handle requests
app.use('/products', productRoutes);
app.use('/order', orderRoutes);
app.use('/client', clientRoutes);


app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            meseage: error.message
        }
    })
})


module.exports = app;