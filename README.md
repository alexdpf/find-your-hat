# Find Your Hat - A Node.js Terminal Game

## Description

This project is a terminal-based game created using Node.js. The objective is to navigate through a field to find your hat, represented by the symbol `^`. Avoid falling into holes denoted by `O` and stay within the field boundary. The field is a two-dimensional grid where you control your path, represented by `*`. The project makes use of packages like Nodemon for live-reloading and Prompt-Sync for user input.

# Requirements

## Software and Packages

- **Node.js**
- **Nodemon**  
  - Install using npm:  
    ```bash
    npm install nodemon
    ```

- **Prompt-Sync**  
  - Install using npm:  
    ```bash
    npm install prompt-sync
    ```

## API

To include `prompt-sync` in your project, use the following `require` statement:

```javascript
require('prompt-sync')({sigint: true});
