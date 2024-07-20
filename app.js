const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const servicesRouter = require('./app/api/v1/services/router');
const imagesRouter = require('./app/api/v1/images/router');
const partnerRouter = require('./app/api/v1/laundryPartner/router');
const authCMSRouter = require('./app/api/v1/auth/router');
const customerRouter = require('./app/api/v1/customers/router');
const paymentsRouter = require('./app/api/v1/payments/router');


const notFoundMiddleware = require('./app/middlewares/not-found');
const handdleErrorMiddleware = require('./app/middlewares/handle-error');

const v1 = '/api/v1';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to API cucisini.id',
    });
});

app.use(`${v1}/cms`, servicesRouter);
app.use(`${v1}/cms`, imagesRouter);
app.use(`${v1}/cms`, partnerRouter);
app.use(`${v1}/cms`, authCMSRouter);
app.use(`${v1}/cms`, customerRouter);
app.use(`${v1}/cms`, paymentsRouter);


// middleware
app.use(notFoundMiddleware);
app.use(handdleErrorMiddleware);

module.exports = app;
