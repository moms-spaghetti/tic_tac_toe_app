class Board {
    constructor() {
        this.squareGrid = []
        this.xPieces = []
        this.oPieces = []

        this.populateGrid()
        this.populatePicees()
    }

    populateGrid() {
        for (let i = 0; i < 9; i++) {
            this.squareGrid.push(new Square(i))
        }
    }

    populatePicees() {
        for (let i = 0; i < 5; i++) {
            this.xPieces.push(new Piece('x'))
            this.oPieces.push(new Piece('o'))
        }
    }

    setPiece(x, y, pieceType, xoffset, yoffset) {

        let index

        switch(true && true){
            case (x <= 200 + xoffset && y >= 420 + yoffset):
                index = 0
                break
            case ((x >= 210 + xoffset && x <= 410 + xoffset) && y >= 420 + yoffset):
                index = 1
                break
            case (x >= 420 + xoffset && y >= 420 + yoffset):
                index = 2
                break
            case (x <= 200 + xoffset && (y >= 210 + yoffset && y <= 410 + yoffset)):
                index = 3
                break
            case ((x >= 210 + xoffset && x <= 410 + xoffset) && (y >= 210 + yoffset && y <= 410 + yoffset)):
                index = 4
                break
            case (x >= 420 + xoffset && (y >= 210 + yoffset && y <= 410 + yoffset)):
                index = 5
                break
            case (x <= 200 + xoffset && y <= 200 + yoffset):
                index = 6
                break
            case ((x >= 210 + xoffset && x <= 410 + xoffset) && y <= 200 + yoffset):
                index = 7
                break
            case (x >= 420 + xoffset && y <= 200 + yoffset):
                index = 8
                break
            default:
                return
        }

        game.canvas.renderPiece(index, pieceType, xoffset, yoffset)

        if(pieceType === 'x') {
            let piece = this.xPieces.pop()
            this.squareGrid[index].setContents(piece) 
            this.squareGrid[index].setPopulated()
            this.squareGrid[index].setContentType()
        }

        if(pieceType === 'o') {
            let piece = this.oPieces.pop()
            this.squareGrid[index].setContents(piece) 
            this.squareGrid[index].setPopulated()
            this.squareGrid[index].setContentType()
        }
    }
}