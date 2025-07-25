 
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const mapDict = [hole, fieldCharacter]



class Field {
    _fieldArray = []
    _goalX = 0
    _goalY = 0
    _startX = 0
    _startY = 0
    _playerX = 0
    _playerY = 0

    generate(n){
        let field = [];
        for (let i = 0; i < n; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
             row.push(mapDict[Math.floor(Math.random() * mapDict.length)]);
        }
        field.push(row);}
        this._fieldArray = field;
        this._goalX = Math.floor(Math.random() * this._fieldArray.length)
        this._goalY = Math.floor(Math.random() * this._fieldArray.length)
        this._startX = Math.floor(Math.random() * this._fieldArray.length)
        this._startY = Math.floor(Math.random() * this._fieldArray.length)
}

    print() {
        for (let row of this._fieldArray) {
            console.log(row.join(' '))
        }
    }

    initializeObjects() {
    //  console.log(this._fieldArray.length)
        this._fieldArray[this._goalX][this._goalY] = '^'
        this._fieldArray[this._startX][this._startY] = '*'
        }

    navigateField() {
        let playing = true;
        this._playerX = this._startX
        this._playerY = this._startY
        
    while (playing) {
        console.clear()
        this.print();
        const move = prompt('Which direction? (w/a/s/d): ').toLowerCase();

      // Erase current position
        ;

        switch (move) {
        case 'w':
            this._playerX--;

            break;
        case 's':
            this._playerX++;
            break;
        case 'a':
            this._playerY--;
            break;
        case 'd':
            this._playerY++;
            break;
        default:
            console.log('Invalid input. Use w/a/s/d.');
            continue
            }
            if (this._fieldArray[this._playerX][this._playerY] === 'O') {
                console.log('You fell in a hole! You dead');
                this._fieldArray[this._playerX][this._playerY] = 'X'
                playing = false
            }
            if (this._fieldArray[this._playerX][this._playerY] === '^') {
                console.log('Son of a gun, you found ye olde faithful! sombrero');
            }
            else {
                this._fieldArray[this._playerX][this._playerY] = '*'}
        }

    }


    play() {
        field.navigateField();

    }

}

field = new Field();
field.generate(10);
field.initializeObjects();
field.play()
