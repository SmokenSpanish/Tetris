const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const game = {
    cellSize: 30,
    playField: [],
    rowCount: 20,
    colCount: 10,
    tetrominos: {
        'I' : [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],
        'O': [
            [1,1],
            [1,1]
        ],
        'S': [
            [1,1,0],
            [0,1,1],
            [0,0,0]
        ]   
     },
    startGame() {
        this.initPlayField()
    },
    initPlayField() {
        const { rowCount, colCount } = this;

        this.playField = []
        for (let row = 0; row < rowCount; row++) {
            const tmpRow = []
            for (let col = 0; col < colCount; col++) {
                tmpRow.push(0)
            }
            this.playField.push(tmpRow)
        }
    }
}

game.startGame()
console.log(game)