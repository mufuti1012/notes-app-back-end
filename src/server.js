const hapi = require('@hapi/hapi');
const routes = require('./routes')

const ini = async () => {
    const server = hapi.server({
    port : 5000,
    host : process.env.NODE_ENV !== 'production' ? 'localhost' : '149.129.189.149',
        routes: {
        cors: {
            origin: ['*'],
        },
        },
});

    server.route(routes);

    await server.start();
    console.log(`Server sedang dijalankan di ${server.info.uri}`);
};

ini();