class BookController {
    constructor() {
        this.books = require('../data/books'); // In-memory book collection
    }

    createBook(req, res) {
        const newBook = req.body;
        this.books.push(newBook);
        res.status(201).json(newBook);
    }

    getAllBooks(req, res) {
        res.status(200).json(this.books);
    }

    getBookById(req, res) {
        const bookId = parseInt(req.params.id);
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }

    updateBook(req, res) {
        const bookId = parseInt(req.params.id);
        const index = this.books.findIndex(b => b.id === bookId);
        if (index !== -1) {
            const updatedBook = { ...this.books[index], ...req.body };
            this.books[index] = updatedBook;
            res.status(200).json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }

    deleteBook(req, res) {
        const bookId = parseInt(req.params.id);
        const index = this.books.findIndex(b => b.id === bookId);
        if (index !== -1) {
            this.books.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    }
}

module.exports = new BookController();