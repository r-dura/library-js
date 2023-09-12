const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
}

function addBookToLibrary(book) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    // const statusMessage = book.status ? "Complete" : "Incomplete";
    const buttonMessage = book.status ? "Complete" : "Incomplete";
    newCard.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <div id = "h-divider"></div>
        <button class = "delete-button">Delete</button>
        <button class = "read-button">${buttonMessage}</button>
    `;
    const cards = document.getElementById('cards');
    cards.appendChild(newCard);
}

function findBook(name) {
    if (myLibrary.length === 0 || myLibrary === null) {
        return;
    }
    for (book of myLibrary) {
        if (book.title === name) {
            return myLibrary.indexOf(book);
        }
    }
}

document.querySelector('#cards').addEventListener('click', function(e) {
    const cards = document.getElementById('cards');
    const parentCard = e.target.parentNode;
    const bookTitle = parentCard.querySelector('h2').textContent;
    const bookIndex = findBook(bookTitle);
    if (e.target.classList.contains('delete-button')) {
        myLibrary.splice(bookIndex, 1);
        cards.removeChild(parentCard);
    } else if (e.target.classList.contains('read-button')) {
        let book = myLibrary[bookIndex];
        book.status = !book.status;
        if (book.status) {
            parentCard.querySelector('.read-button').textContent = "Read";
            // parentCard.querySelector('.status-message').textContent = "Complete";
        } else {
            parentCard.querySelector('.read-button').textContent = "Not Read";
            // parentCard.querySelector('.status-message').textContent = "Incomplete";
        }
        
    }
})

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('pages').value;
    const statusCheckbox = document.getElementById('read');

    const booleanValue = statusCheckbox.checked;

    const newBook = new Book(title, author, numPages, booleanValue);
  
    myLibrary.push(newBook);

    this.reset();

    addBookToLibrary(newBook);
});

const formDialog = document.getElementById("formDialog"); 

document.getElementById('formButton').addEventListener('click', function(event) {
    event.preventDefault();
    formDialog.showModal();
})

const closeButton = document.getElementById("closeButton"); 

closeButton.addEventListener('click', (event) => {
    formDialog.close();
});

