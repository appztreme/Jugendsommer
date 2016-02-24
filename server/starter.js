var express = require('express');
import app from './app.js';

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Application is listening on port ${port} ...`);
});
