const request = require('../lib/request');
const parse = require('../lib/parse');

describe('parse function', () => {
  it('should parse the html document returned from the request function and return an array of books', async() => {
    const document = await request(1);
    const books = await parse(document);

    expect(books).toEqual(expect.arrayContaining([
      { title: 'Sharp Objects', coverImg: 'http://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg', rating: 'Four', price: '£47.82', inStock: true },
      { title: 'Tipping the Velvet', coverImg: 'http://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg', rating: 'One', price: '£53.74', inStock: true }
    ]));
  });
});

