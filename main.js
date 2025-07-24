const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const mapDict = [hole, fieldCharacter]


class Field {
    _fieldArray = []

    generate(){
        let field = [];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 4; j++) {
             row.push(mapDict[Math.floor(Math.random() * mapDict.length)]);
                  }
        field.push(row);}
        this._fieldArray = field;
 
    }

   print() {
    console.log(this._fieldArray);
    for (let row of this._fieldArray) {
        console.log(row.join(''))
    }
}
}

field = new Field();
field.generate()
field.print()