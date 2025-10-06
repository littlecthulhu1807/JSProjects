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
        return title + " by " + author + ", " + pages + " Pages, " + this.isRead();
    };
};

const book01 = new Book("Super Title", "John Doe", 10000000, false);

console.log(book01.info());
console.log(Object.getPrototypeOf(book01));