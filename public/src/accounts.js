function findAccountById(accounts, id) {
  for(let item in accounts) {
    if(accounts[item].id === id) {
      return accounts[item];
    }
  }
}

function sortAccountsByLastName(accounts) {
  const sorter = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return sorter;
}

function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  
  for(let i = 0; i < books.length; i++) {
    for(let j = 0; j < books[i].borrows.length; j++) {
      if(books[i].borrows[j].id === account.id) {
        numberOfBorrows++;
      }
    }
  }

  return numberOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];

  books.forEach(book => {
    if(book.borrows.find(item => item.id === account.id && !item.returned)) {
      book['author'] = authors.find(person => person.id === book.authorId);
      checkedOut.push(book);
  };
});
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
