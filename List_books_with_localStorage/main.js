// Book Class: Respresets a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}


//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        
        const books = Store.getBooks();

        books.forEach((book)=> UI.addBookList(book))

    }

    static addBookList(book) {
    const list = document.querySelector("#book-list");
    const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='btn btn-danger btn-sm delete'>delete</a></td>
        `
        list.appendChild(tr);
    }
    static clearField() {
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#isbn").value = ''
    }

    static deleteBook(e) {
        if(e.classList.contains("delete")){
            e.parentElement.parentElement.remove();
        }
    }
    static showAlert(messege, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(messege));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        //Vanish in 3 second
        setTimeout(() => {document.querySelector(".alert").remove()}, 3000)
    }
}

class Store{
   static getBooks() {
    let books;

    if(localStorage.getItem("books") === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem("books"))
    }
    return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books))
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(books))
    }
}



//Store Class: Handles Storage

// Event: Display book
document.addEventListener("DOMContentLoaded", UI.displayBooks())


// Event: Add a Books
document.querySelector("#book-form").addEventListener("submit", (e) => {
    const  title = document.querySelector("#title").value;
    const  author = document.querySelector("#author").value;
    const  isbn = document.querySelector("#isbn").value;

    if(title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill in all field", "danger")
    } else {
        const book = new Book(title, author, isbn);
    UI.addBookList(book)

    // addd book to store
    Store.addBook(book)

    //remove book from store
    UI.showAlert("Book added", "success")
    // Clear field
    UI.clearField();
    }

})



//Event: Remove a  book
document.getElementById("book-list").addEventListener("click", (e) =>{
    UI.deleteBook(e.target);

    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    UI.showAlert("Book removed ", "success")

})




