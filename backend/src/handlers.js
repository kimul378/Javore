const { ObjectId } = require('mongodb');

const addBook = async (request, h) => {
    try {
        const db = request.server.app.db;
        const book = request.payload;
        console.log('Adding book:', book);

        const result = await db.collection('books').insertOne(book);
        const addedBook = await db.collection('books').findOne({ _id: result.insertedId });
        console.log('Book added:', addedBook);
        return h.response(addedBook).code(201);
    } catch (err) {
        console.error('Failed to add book:', err);
        return h.response({ message: 'Internal Server Error' }).code(500);
    }
};

const getBooks = async (request, h) => {
    try {
        const db = request.server.app.db;
        console.log('Fetching books');

        const books = await db.collection('books').find().toArray();
        console.log('Books fetched:', books);
        return h.response(books).code(200);
    } catch (err) {
        console.error('Failed to fetch books:', err);
        return h.response({ message: 'Internal Server Error' }).code(500);
    }
};

const deleteBook = async (request, h) => {
    try {
        const db = request.server.app.db;
        const { id } = request.params;
        console.log('Deleting book with id:', id);

        const result = await db.collection('books').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 1) {
            console.log('Book deleted');
            return h.response().code(204);
        } else {
            console.log('Book not found');
            return h.response().code(404);
        }
    } catch (err) {
        console.error('Failed to delete book:', err);
        return h.response({ message: 'Internal Server Error' }).code(500);
    }
};

const updateBook = async (request, h) => {
    try {
        const db = request.server.app.db;
        const { id } = request.params;
        const book = request.payload;
        console.log('Updating book with id:', id, 'with data:', book);

        const result = await db.collection('books').updateOne(
            { _id: new ObjectId(id) },
            { $set: book }
        );

        if (result.matchedCount === 1) {
            const updatedBook = await db.collection('books').findOne({ _id: new ObjectId(id) });
            console.log('Book updated:', updatedBook);
            return h.response(updatedBook).code(200);
        } else {
            console.log('Book not found');
            return h.response({ message: 'Book not found' }).code(404);
        }
    } catch (err) {
        console.error('Failed to update book:', err);
        return h.response({ message: 'Internal Server Error' }).code(500);
    }
};

module.exports = {
    addBook,
    getBooks,
    deleteBook,
    updateBook
};
