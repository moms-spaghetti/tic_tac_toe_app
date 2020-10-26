class Canvas {
    constructor() {
        this.renderBoard()
    }

    renderBoard() {
        const board = document.createElement('canvas')
        board.setAttribute('id', 'canvasBoard')

        const body = document.body
        
        body.appendChild(board)
        const c = board.getContext("2d")
        board.width = 620
        board.height = 620
        c.beginPath()
        c.lineWidth = 10
        c.moveTo(205, 0)
        c.lineTo(205, 620)

        c.moveTo(415, 0)
        c.lineTo(415, 620)

        c.moveTo(0, 205)
        c.lineTo(620, 205)

        c.moveTo(0, 415)
        c.lineTo(620, 415)

        c.closePath()

        c.stroke()
    }

    renderPiece(location, pieceType, xoffset, yoffset) {
        const position = [[420, 0], [420, 210], [420, 420], [210, 0], [210, 210], [210, 420], [0, 0], [0, 210], [0, 420]]

        const piece = document.createElement('canvas')
        const body = document.body
        piece.style.position = 'absolute'
        piece.style.zIndex = 1
        piece.style.top = `${position[location][0] + yoffset}px`
        piece.style.left = `${position[location][1] + xoffset}px`

        const c = piece.getContext('2d')
        
        piece.width = 200
        piece.height = 200
        body.appendChild(piece)

        if (pieceType === 'x') {
            piece.className = `x-piece piece-${location}`
            c.beginPath()
            c.lineWidth = 10
            c.moveTo(20, 20)
            c.lineTo(180, 180)
            c.moveTo(180, 20)
            c.lineTo(20, 180)
            c.closePath()
           
        } else {
            piece.className = `o-piece piece-${location}`
            c.beginPath()
            c.lineWidth = 10
            c.arc(100,100,80,0,Math.PI*2,false)
            c.closePath()
        }
        c.stroke()
    }
}