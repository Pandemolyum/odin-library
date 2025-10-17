const library = [];

addBookToLibrary("Gospel of Biff", "Christopher Moore", 420);
addBookToLibrary("Gospel of John", "Boring Dude", 200);
addBookToLibrary("Gospel of Mark", "Markyboy", 69);

displayLibrary(library);

function Book(title, author, pages) {
    this.uuid = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    library.push(new Book(title, author, pages));
}

function displayLibrary(lib) {
    for (book of lib) {
        const table = document.querySelector('table');
        const newRow = table.insertRow();
        const cellTitle = newRow.insertCell();
        const cellAuthor = newRow.insertCell();
        const cellPages = newRow.insertCell();
        const cellButton = newRow.insertCell();
        const button = document.createElement('button')
        button.id = 'delete';
        button.textContent = '✖';
        button.setAttribute('uuid',book.uuid);

        cellTitle.textContent = book.title;
        cellAuthor.textContent = book.author;
        cellPages.textContent = book.pages;
        cellButton.appendChild(button);
    }
}