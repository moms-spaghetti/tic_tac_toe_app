game = new Game(`player1`, `player2`, `x`, `o`)

game.start()

function addControls() {
    document.querySelector('h1').textContent = 'Tic Tac Toe'
    const resetButton = document.createElement('button')
    resetButton.textContent = `reset`
    resetButton.setAttribute('id', 'reset-button')
    resetButton.addEventListener('click', _ => {
        location.reload();
    })
    const canvas = document.querySelector('#canvasBoard')
    canvas.insertAdjacentElement('afterend', resetButton)
}

addControls()