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

//3. add print() method that prints the current state of the field
    print() {
        console.log(this._field.map(row => row.join('')).join('\n'));
    }
}

//This variable was provided by Codecademy
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

//2. TEST Field class constructor
//console.log(myField._field);
//3. TEST print() method
myField.print();

//4. create move() method that takes user input and moves the pathCharacter accordingly
myField.move(prompt('Which way? Please type for direction: up, down, left or right. '));

myField.move('up');
myField.move('down');
myField.move('left');
myField.move('right');

//5. TEST move() method
myField.move(prompt('Which way? '));