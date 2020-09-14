const fs = require('fs');
const pool = require('../lib/utils/pool');
const store = require('../lib/store');

describe('store', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and puts them in the DB', async() => {
    const books = [
      { title: 'book1', coverImg: 'book1 img', rating: 'One', price: '1', inStock: true },
      { title: 'book2', coverImg: 'book2 img', rating: 'Two', price: '2', inStock: true },
      { title: 'book3', coverImg: 'book3 img', rating: 'Three', price: '3', inStock: true },
      { title: 'book4', coverImg: ' book4 img', rating: 'Four', price: '4', inStock: true },
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows.length).toEqual(4);
  });
});
