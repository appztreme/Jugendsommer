import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import loginCtrl from './controller/api/login';
import logoutCtrl from './controller/api/logout';
import eventsCtrl from './controller/api/events';

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'Sommer', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + './../client/dist/'));

app.use('/api/login', loginCtrl);
app.use('/api/logout', logoutCtrl);
app.use('/api/events', eventsCtrl);

import passportConfig from './passport.config';

export default app;
