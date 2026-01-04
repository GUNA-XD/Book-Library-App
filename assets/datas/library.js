class Library{
    constructor(){
        this.books = []
    }

    addbook(book){

        console.log('Added Book:',book)
        this.books.push(book)
    }

    getBooks(){
        return this.books
    }

    bookcount(){
        return this.books.length
    }

    removeBook(index){
        if(index >= 0 && index < this.books.length){
            this.books.splice(index,1)
        }
    }
}