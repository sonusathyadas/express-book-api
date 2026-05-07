const request = require('supertest');
const app = require('../app');
const bookController = require('./bookController');

const seedBooks = [
    {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {
        id: 4,
        title: 'Moby Dick',
        author: 'Herman Melville',
        year: 1851
    },
    {
        id: 5,
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        year: 1869
    }
];

describe('Book REST API endpoints', () => {
    beforeEach(() => {
        bookController.books.splice(0, bookController.books.length, ...seedBooks.map((book) => ({ ...book })));
    });

    test('POST /api/books creates a new book', async () => {
        const payload = { id: 6, title: 'Dune', author: 'Frank Herbert', year: 1965 };

        const response = await request(app).post('/api/books').send(payload);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(payload);
        expect(bookController.books).toContainEqual(payload);
    });

    test('GET /api/books returns all books', async () => {
        const response = await request(app).get('/api/books');

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(seedBooks.length);
    });

    test('GET /api/books/:id returns a book by id', async () => {
        const response = await request(app).get('/api/books/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(seedBooks[0]);
    });

    test('GET /api/books/:id returns 404 for unknown id', async () => {
        const response = await request(app).get('/api/books/999');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Book not found' });
    });

    test('PUT /api/books/:id updates a book by id', async () => {
        const payload = { title: 'To Kill a Mockingbird (Updated)', year: 1961 };

        const response = await request(app).put('/api/books/1').send(payload);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ ...seedBooks[0], ...payload });
    });

    test('PUT /api/books/:id returns 404 for unknown id', async () => {
        const response = await request(app).put('/api/books/999').send({ title: 'No Book' });

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Book not found' });
    });

    test('DELETE /api/books/:id deletes a book', async () => {
        const response = await request(app).delete('/api/books/5');

        expect(response.status).toBe(204);
        expect(bookController.books.find((book) => book.id === 5)).toBeUndefined();
    });

    test('DELETE /api/books/:id returns 404 for unknown id', async () => {
        const response = await request(app).delete('/api/books/999');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'Book not found' });
    });
});
