class Player {
    constructor(name, allocatedPiece) {
        this.name = name
        this.allocatedPiece = allocatedPiece
    }

    getActivePiece() {
        return this.allocatedPiece
    }

    getName() {
        return this.name
    }

    placePiece() {

    }
}