'use strict';
require('dotenv').config();
const { addJwtAuth } = require('./config/authenticate')
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');

const server = require('./config/server');
const baseRouter = require('./routes');

const init = async () => {

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    // await addJwtAuth(server);

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Hello World!';
    //     }
    // });
    // await server.register(baseRouter,{
    //     routes:{
    //         prefix:'/api'
    //     }
    // });

    server.events.on('response', function (request) {
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();