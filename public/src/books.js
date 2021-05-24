function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function stupidHelperFunction(books, id) {
  return books.filter(bookId => bookId.id === id)[0];
}

function findBookById(books, id) {
  return stupidHelperFunction(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let notCheckedOut = [];

  books.forEach(book => {
    book.borrows.find(item => !item.returned) ? checkedOut.push(book) : notCheckedOut.push(book);
  });

  return [checkedOut, notCheckedOut];
}

function getBorrowersForBook(book, accounts) {
  let borrowsArray = [];

  book.borrows.forEach(book => {
    let matchingAccount = accounts.find(person => person.id === book.id);
    borrowsArray.push({...book, ...matchingAccount});
  });

  return borrowsArray.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
