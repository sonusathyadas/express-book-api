# Books REST API

This is a simple REST API application built with Express.js and Node.js that performs CRUD operations on a Book entity. The application uses an in-memory collection of books for demonstration purposes.

## Project Structure

```
books-rest-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── bookRoutes.js     # Routes for book-related operations
│   ├── controllers
│   │   └── bookController.js  # Business logic for handling books
│   ├── models
│   │   └── book.js           # Book model definition
│   └── data
│       └── books.js          # In-memory book collection
├── package.json               # NPM configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd books-rest-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## API Endpoints

### Create a Book
- **Endpoint:** `POST /books`
- **Request Body:** 
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "year": 2021
  }
  ```

### Get All Books
- **Endpoint:** `GET /books`

### Get a Book by ID
- **Endpoint:** `GET /books/:id`

### Update a Book
- **Endpoint:** `PUT /books/:id`
- **Request Body:** 
  ```json
  {
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "year": 2022
  }
  ```

### Delete a Book
- **Endpoint:** `DELETE /books/:id`

## Usage Examples

- To create a new book, send a POST request to `/books` with the book details in the request body.
- To retrieve all books, send a GET request to `/books`.
- To update a book, send a PUT request to `/books/:id` with the updated details.
- To delete a book, send a DELETE request to `/books/:id`.

## License

This project is licensed under the MIT License.