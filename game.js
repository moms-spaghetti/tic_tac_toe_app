class Game {
    constructor(name1, name2, p1Piece, p2Piece) {
        this.player1 = new Player(name1, p1Piece)
        this.player2 = new Player(name2, p2Piece)
        this.board = new Board
        this.canvas = new Canvas
        this.activePlayer = this.player1
        this.gameActive = true
        this.testEntries = false
        this.finalWinningLine = []

    }

    switchActivePlayer() {
        this.activePlayer === this.player1 ? this.activePlayer = this.player2 : this.activePlayer = this.player1
    }

    getActivePlayerPiece() {
        return this.activePlayer.allocatedPiece
    }

    checkWin() {
        const pieces = ['x', 'o']
        const winScenarios = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let entriesToTest = []
        pieces.forEach((pieceValue) => {
            winScenarios.forEach((winningSet) => {
                entriesToTest = []
                this.board.squareGrid.forEach((sqaureValue, index) => {
                    if ((index === winningSet[0] || index === winningSet[1] || index === winningSet[2])) {
                        entriesToTest.push(sqaureValue)
                    }
                })

                if (this.testEntries === false) {
                    this.finalWinningLine = []
                    entriesToTest.forEach((value) => {
                        this.finalWinningLine.push(value.id)
                    })
                    this.testEntries = entriesToTest.every((testSquareValue) => testSquareValue.contentType === pieceValue)
                }
            })
        })
    }

    start() {
        const canvasBoard = document.querySelector('#canvasBoard')
        canvasBoard.addEventListener('click', (e) => {
            let xoffset = canvasBoard.getBoundingClientRect().left
            let yoffset = canvasBoard.getBoundingClientRect().top

            if (e.clientX === xoffset) {
                xoffset = 0
            }

            if (e.clientY === yoffset) {
                xoffset = 0
            }

            if (this.gameActive) {
                const activePlayerPiece = this.getActivePlayerPiece()
                this.board.setPiece(e.clientX, e.clientY, activePlayerPiece, xoffset, yoffset)
                this.checkWin()
                if (this.testEntries) {
                    this.changeTitleTextOnWin()
                    this.highlightWinningLine(this.finalWinningLine)
                    this.gameActive = false
                } else {
                    this.switchActivePlayer()
                }
            }
        })
    }

    highlightWinningLine(winningSet) {
        let tileColour = Math.floor(Math.random() * 16777216).toString(16)
        while (tileColour.length < 6) {
            console.log('was smaller than 6')
            tileColour += Math.floor(Math.random() * 16).toString(16)
        }
        winningSet.forEach((value) => {
            document.querySelector(`.piece-${value}`).style.backgroundColor = `#${tileColour}`
        })
    }

    changeTitleTextOnWin() {
        const h1 = document.querySelector('h1')
        h1.textContent = `Game over ${this.activePlayer.getName()} wins!`
        h1.style.fontSize = '70px'
        h1.style.top = '150px'
    }
}