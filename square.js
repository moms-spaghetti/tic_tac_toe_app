class Square {
    constructor(id){
        this.populated = false
        this.contents;
        this.contentType
        this.id = id
    }

    setPopulated() {
        this.populated = true
    }

    setContents(piece) {
        this.contents = piece
    }

    setContentType() {
        this.contentType = this.contents.type
    }
}