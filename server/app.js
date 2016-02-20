import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import loginCtrl from './controller/api/login';
import logoutCtrl from './controller/api/logout';

const app = express();

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(__dirname + './../client/dist/'));

app.use('/api/login', loginCtrl);
app.use('/api/logout', logoutCtrl);

let port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Application is listening on port ${port} ...`);
});

export default app;
