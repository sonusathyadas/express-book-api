const swaggerJsdoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Books REST API',
            version: '1.0.0',
            description: 'A REST API for managing a collection of books using Express.js and Node.js.'
        },
        servers: [
            {
                url: `http://localhost:${PORT}/api`,
                description: 'Local server'
            }
        ],
        components: {
            schemas: {
                Book: {
                    type: 'object',
                    required: ['title', 'author', 'year'],
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'Auto-generated identifier of the book',
                            example: 1
                        },
                        title: {
                            type: 'string',
                            description: 'Title of the book',
                            example: 'To Kill a Mockingbird'
                        },
                        author: {
                            type: 'string',
                            description: 'Author of the book',
                            example: 'Harper Lee'
                        },
                        year: {
                            type: 'integer',
                            description: 'Year the book was published',
                            example: 1960
                        }
                    }
                },
                NewBook: {
                    type: 'object',
                    required: ['title', 'author', 'year'],
                    properties: {
                        title: {
                            type: 'string',
                            example: 'To Kill a Mockingbird'
                        },
                        author: {
                            type: 'string',
                            example: 'Harper Lee'
                        },
                        year: {
                            type: 'integer',
                            example: 1960
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'Book not found'
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
