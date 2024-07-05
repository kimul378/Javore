const handlers = require('./handlers');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: handlers.addBook
    },
    {
        method: 'GET',
        path: '/books',
        handler: handlers.getBooks
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: handlers.deleteBook
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: handlers.updateBook
    }
];

module.exports = routes;
