const avgpages = (books) => {
  const totalPages = books
    .map((book) => book.pages)
    .reduce((acc, pages) => acc + pages, 0);
  return totalPages / books.length;
};

const books = [
  { title: "Book One", author: "Author A", pages: 320 },
  { title: "Book Two", author: "Author B", pages: 150 },
  { title: "Book Three", author: "Author C", pages: 450 },
];

console.log(avgpages(books));
