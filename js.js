const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(book) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.read}</p>
    `;
    const cards = document.getElementById('cards');
    cards.appendChild(newCard);
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('pages').value;
    const status = document.getElementById('read').value;

    const newBook = new Book(title, author, numPages, status);
  
    myLibrary.push(newBook);

    this.reset();

    addBookToLibrary(newBook);
});

