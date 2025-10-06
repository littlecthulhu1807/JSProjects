function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.isRead = function(){
        if(this.read){
            return "already read";
        }
        else{
            return("not read yet");
        }
    };

    this.info = function(){
        return `${title} by ${author} , pages ${pages}, ${this.isRead()}`;
    };
};

const myLibrary = [];
const libContainer = document.querySelector(".libContainer");

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(element){
    const div = document.createElement("div");
    div.classList.add("bookContainer");
    libContainer.appendChild(div);
    div.textContent = element.info();
}


addBookToLibrary("001", "001", 100, true);
addBookToLibrary("002", "002", 100, true);
addBookToLibrary("003", "003", 100, false);
addBookToLibrary("004", "004", 100, false);
myLibrary.forEach(displayBooks);