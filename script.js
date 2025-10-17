const library = [];

addBookToLibrary("Gospel of Biff", "Chris", 420);
addBookToLibrary("Gospel of John", "Boring Dude", 200);
addBookToLibrary("Gospel of Mark", "Markyboy", 69);

displayLibrary(library);

function Book(title, author, pages) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    library.push(new Book(title, author, pages));
}

function displayLibrary(lib) {
    for (book of lib) {
        const newDiv = document.createElement("div");
        const title = document.createElement("h1");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        
        title.textContent = book.title;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Number of pages: ${book.pages}`;

        newDiv.appendChild(title);
        newDiv.appendChild(author);
        newDiv.appendChild(pages);
        document.body.appendChild(newDiv);
    }
}