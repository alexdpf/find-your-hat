//IMPORTANT: prompt and other const already created. 
//I had to install Nodemon globally for restating Node every time a change is made in the project, and prompt-sync to use it in Node
const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//2. create Field class
class Field {
    constructor(field) {
        this._field = field;
    }
}
//This variable was provided by Codecademy
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

//2. TEST Field class constructor
console.log(myField._field);