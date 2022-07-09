# Tic-Tac-Toe

- Written in TypeScript
- Used to practice OOP and TS
  - Still quite new to both
- Win condition checking algorithm could definitely be improved upon
- Currently only played via CLI

## Install

- `git clone https://github.com/Tackx/tic-tac-toe-cli`
- `cd tic-tac-toe-cli`
- `npm install`
- `npx tsc` to compile the TypeScript source code to JavaScript in the `dist` folder

## Dev commands

- `npm run dev` to start TypeScript compiler in watch mode
- `npm run lint` to run ES Lint
- `npm run format` to format the source code with Prettier

## Run

- `node dist/index.js` to run the app


## Gameplay Principles

- At the moment, there is no graphical display of the playing board
  - Instead, after each player plays their coords, the console logs the current array of played coords for each team  
- Both coordinates X and Y start from `1` and can go up to `1000`
- Get 3 coordinates to match up in a linear, horizontal or vertical line to win!