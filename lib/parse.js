const parse = document => {
  const books = [...document.querySelectorAll('.product_pod')];
 
  return books.flatMap(book => ({
    title:book.querySelector('h3 a').getAttribute('title'),
    coverImg: 'http://books.toscrape.com/' + book.querySelector('.image_container img').src,
    rating: book.querySelector('p').getAttribute('class').split(' ')[1],
    price: book.querySelector('.product_price .price_color').textContent,
    inStock: true

  }));
};

module.exports = parse;
