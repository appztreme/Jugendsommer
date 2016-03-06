import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import loginRouter from './routes/loginRouter';
import logoutRouter from './routes/logoutRouter';
import eventsRouter from './routes/eventsRouter';

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'Sommer', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + './../client/dist/'));

app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/events', eventsRouter);

import passportConfig from './passport.config';

export default app;
