function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowCount = 0;
  books.forEach(book => {
    if(book.borrows.find(item => !item.returned)) {
      borrowCount++;
    }
  });
  return borrowCount;
}

function getMostCommonGenres(books) {

  const results = books.map(book => book.genre).reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});

  let resultKeys = Object.keys(results);

  let resultValues = Object.values(results);

  let final = [];

  for(let i = 0; i < resultKeys.length; i++) {
    let newObject = {};

    newObject.name = resultKeys[i];
    newObject.count = resultValues[i];

    final.push(newObject);
  }
  return final.sort((a, b) => b.count - a.count).slice(0, 5)
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    let newObject = {name: book.title, count: book.borrows.length};
    return newObject;
  });
  
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  
  const bookMap = books.map(book => {
    let bookObject = {id: book.authorId, count: book.borrows.length};
    return bookObject;
  }).sort((a, b) => a.id - b.id).reduce((acc, value) => {
    acc[value.id] = (acc[value.id] || 0) + value.count;
    return acc;
  }, {});

  const authorMap = authors.map(person => {
    let authorObject = {id: person.id, name: `${person.name.first} ${person.name.last}`};
    return authorObject;
  }).map(item => {
    let finalObject = {name: item.name, count: bookMap[item.id]}
    return finalObject;
  });

  return authorMap.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
