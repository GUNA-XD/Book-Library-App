class Book{
    constructor(title,author){
        this.title = title
        this.author = author
        this.read = false
    }

    gettitle(){
        return this.title
    }

    getauthor(){
        return this.author
    }

    isRead(){
        return this.read
    }

    markasRead(){
        this.read = true
    }
}
