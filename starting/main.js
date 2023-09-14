//IMPORTANT: prompt and other const already created. The general logic was create by me, constantly asking GPT for improvement and debugging
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
        this._currentRow = 0;
        this._currentCol = 0;
    }

//3. add print() method that prints the current state of the field
    print() {
        console.log(this._field.map(row => row.join('')).join('\n'));
    }

//4. create move() method that takes user input and moves the pathCharacter accordingly
    move() {
        let userInput;
        let gameIsOn = true; // initialise game state
            do {
                this.print();
                userInput = prompt('Which way? Please type for direction: up, down, left or right. ');
            // update currentRow and currentCol based on userInput
                    if (userInput === 'up') {
                        this._currentRow--;
                    }
                    if (userInput === 'down') {
                        this._currentRow++;
                    }
                    if (userInput === 'left') {
                        this._currentCol--;
                    }
                    if (userInput === 'right') {
                        this._currentCol++;
                    }
            // check if the move is within boundary, if not, Game Over!
            //this snippet was done with help of GPT
                if (this._currentRow < 0 ||
                    this._currentRow > this._field.length - 1 ||
                    this._currentCol < 0 ||
                    this._currentCol > this._field[0].length - 1
                    ) {
                    console.log("Sorry, you can't move your character outside the field. Game Over!");
                    break; // End the game
                }

            //check for hole or hat, and update field
            //this snippet was corrected with GPT
            const currentSpace = this._field[this._currentRow][this._currentCol];
            if (currentSpace === 'O') {
                console.log('You fell into a hole. Game Over!');
                gameIsOn = false; // End the game
            } else if (currentSpace === '^') {
                console.log('Congratulations, you found your hat!');
                gameIsOn = false; // End the game
            } else {
            // Update the field
                this._field[this._currentRow][this._currentCol] = '*';
            }
            } while (gameIsOn); // use game state as loop condition
    }
//6. create generateField() static method to generate random field
// Snippet improved with GPT
    static generateField(height, width, percentage = 0.1) {
        if (typeof height !== 'number' || typeof width !== 'number' || height <= 0 || width <= 0) {
        throw new Error('Invalid dimensions for the field.');
        }

        // Generate field filled with fieldCharacter
        const field = Array.from({ length: height }, () => Array.from({ length: width }, () => fieldCharacter));

        // Place the hat
        let hatRow, hatCol;
        do {
        hatRow = Math.floor(Math.random() * height);
        hatCol = Math.floor(Math.random() * width);
        } while (hatRow === 0 && hatCol === 0); // Make sure hat is not at the starting point
        field[hatRow][hatCol] = hat;

        // Place holes based on percentage
        const totalCells = height * width;
        const totalHoles = Math.floor(totalCells * percentage);

        for (let i = 0; i < totalHoles; i++) {
            let holeRow, holeCol;
            do {
                holeRow = Math.floor(Math.random() * height);
                holeCol = Math.floor(Math.random() * width);
            } while (field[holeRow][holeCol] !== fieldCharacter); // Make sure hole doesn't replace hat or another hole
            field[holeRow][holeCol] = hole;
        }

        // Set the starting point
        field[0][0] = pathCharacter;

        return field;
    }
}

//This variable was provided by Codecademy
/*
let myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
*/

//2. TEST Field class constructor
//console.log(myField._field);

//7. TEST generateField() static method
let myField = new Field(Field.generateField(10,10,0.3));

//3. TEST print() method
//myField.print();

//5. TEST move() method
myField.move();