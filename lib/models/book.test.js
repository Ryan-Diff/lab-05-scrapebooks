const fs = require('fs');
const Book = require('./book');
const pool = require('../utils/pool');

describe('Book model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('adds a book to the books table', async() => {
    const book = await Book.insert(
      {  
        title: 'Sharp Objects',
        coverImg: 'http://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg', 
        rating: 'Four',
        price: '£47.82', 
        inStock: true 
      });

    const { rows } = await pool.query('SELECT * FROM books'
    );

    expect(rows[0]).not.toBeUndefined();
    expect(book).toEqual({
      id: expect.any(String),  
      title: 'Sharp Objects',
      coverImg: 'http://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg', 
      rating: 'Four',
      price: '£47.82', 
      inStock: true
    });
  });
});
