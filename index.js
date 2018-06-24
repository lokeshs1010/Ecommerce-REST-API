// importing expressjs into our application
const express = require('express');
const appConfig = require('./config/appconfig')
const http = require('http')
const mongoose = require('mongoose');
const fs = require('fs');

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// importing middlewares
const globalErrorMiddleware = require('./middlewares/appErrorHandler')
const routeLoggerMiddleware = require('./middlewares/routeLogger')

var helmet = require('helmet');
const logger = require('./libs/loggerLib')

// declaring an instance and creating an application instance
const app = express();


// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)

app.use(helmet())

// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        require(modelsPath + '/' + file)
    }
}) // end Bootstrap models

// Bootstrap route
let routespath = './routes';
fs.readdirSync(routespath).forEach(function(file){
    if(-file.indexOf('.js')) {
        console.log('Including the following file :');
        console.log(routespath+'/'+file);
        let route = require(routespath+'/'+file);
        route.setRouter(app);
    }
}) // end bootstrap route


// calling global 404 handler after route
app.use(globalErrorMiddleware.globalNotFoundHandler);


//listening the server-creating a local server.
/**
 * Create HTTP server.
 */

const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)

// end server listening code

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri)
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})


//handling mongoose connection error
mongoose.connection.on('error',function(err){
    console.log('Database connection error');
    console.log(err);

});//end handler

//handling mongoose success event
mongoose.connection.on('open',function(err){
   if(err){
       console.log("database  connection error");
       console.log(err);
   }
   else{
       console.log("Database connection successful!");
   }
});//end handler