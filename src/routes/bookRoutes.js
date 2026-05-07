const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Create a new book
router.post('/', bookController.createBook.bind(bookController));

// Get all books
router.get('/', bookController.getAllBooks.bind(bookController));

// Get a book by ID
router.get('/:id', bookController.getBookById.bind(bookController));

// Update a book by ID
router.put('/:id', bookController.updateBook.bind(bookController));

// Delete a book by ID
router.delete('/:id', bookController.deleteBook.bind(bookController));

module.exports = router;