const express = require('express');
const path = require('path');
const http = require('http');

var app = express();
app.set('view engine', 'ejs'); // set up ejs for templating
app.use('/static', express.static(path.join(__dirname, '/public')));

app.use('/dist',express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/dist')));
app.use('/js',express.static(path.join(__dirname, '/node_modules')));

const indexRouter = require('./server/routes/app/appRoutes.js')

app.use('/', indexRouter);
/* Get port from environment and store in Express.
*/
const port = process.env.PORT || '3000';
app.set('port', port);

/**
* Create HTTP server.
*/
const server = http.createServer(app);



/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, () => console.log(`API running on localhost:${port}`));

