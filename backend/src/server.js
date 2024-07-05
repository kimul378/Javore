const Hapi = require('@hapi/hapi');
const { MongoClient } = require('mongodb');
const routes = require('./routes');

const init = async () => {
    try {
        const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
        await client.connect();
        console.log('Connected successfully to MongoDB');
        const db = client.db('bookshelf');

        const server = Hapi.server({
            port: 3000,
            host: 'localhost'
        });

        // Make the MongoDB client available globally
        server.app.db = db;

        // Register routes
        server.route(routes);

        await server.start();
        console.log('Server running on %s', server.info.uri);
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1); // Exit the process if server fails to start
    }
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
