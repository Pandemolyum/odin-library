const library = [];

for (book of library) {
    addBookToTable(book);
}

addEventListener('submit', (e) => {
    e.preventDefault();

    const form = document.querySelector('form');
    const formData = new FormData(form);

    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    
    addBookToLibrary(title, author, pages);
    addBookToTable(library.at(-1));
});

addEventListener('click', (e) => {
    if (e.target.id === 'delete') {
        const uuid = e.target.getAttribute('uuid');
        const i = library.findIndex(item => item.uuid === uuid);
        library.splice(i, 1);
        e.target.parentElement.parentElement.remove();
    }
});

class Book {
    uuid = crypto.randomUUID();
    isRead = false;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toggleRead() {
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary(title, author, pages) {
    library.push(new Book(title, author, pages));
}

function addBookToTable(book) {
    const table = document.querySelector('table');
    const newRow = table.insertRow();
    const cellTitle = newRow.insertCell();
    const cellAuthor = newRow.insertCell();
    const cellPages = newRow.insertCell();
    const cellRead = newRow.insertCell();
    const cellButton = newRow.insertCell();

    const button = document.createElement('button')
    button.id = 'delete';
    button.textContent = '✖';
    button.setAttribute('uuid',book.uuid);

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.name = 'read';
    checkbox.setAttribute('uuid',book.uuid);

    checkbox.addEventListener('change', function() {
        const uuid = this.getAttribute('uuid');
        const i = library.findIndex(item => item.uuid === uuid);
        
        library[i].toggleRead();
            
    });
    
    cellTitle.textContent = book.title;
    cellAuthor.textContent = book.author;
    cellPages.textContent = book.pages;
    cellButton.appendChild(button);
    cellRead.appendChild(checkbox);
}