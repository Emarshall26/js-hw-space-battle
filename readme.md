---
title: Space Battle JS
type: homework
competencies: JS basics
creator:
    cohort: WDI-Meeseeks
    adapted by: Christine Yi for WDIR
---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# SPACE BATTLE JS GAME

![star wars](http://vignette4.wikia.nocookie.net/starwars/images/6/65/Battle_of_Endor.png/revision/latest?cb=20121216165239)

Pew pew pew! This weekend you will be using your knowledge of loops, arrays, objects, and functions to build a rudimentary space battle game. The game will be programmed for, and played in the Chrome console.

## Exercise Objectives
* Tie together all your knowledge of JS loops, arrays, objects and functions to build an interactive game.
* Gain experience with Chrome's browser console.
* Introduce app design process: planning, defining core functionalities, data modeling, and control flow.

## Setup
* In `homework`, touch an `index.html` and `script.js` file. Link them both up.
* You will write your javascript in `script.js`.
* You will run your script in the browser.

## Instructions

- The instructions for this game are open-ended. Figuring out how to give a program structure, planning your program, and making it work is a challenge unto itself.
- You will need to use pop-up prompts to get user input and alert.  Check out MDN documentation for using [Prompts](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) and [Alerts](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).
- Once you've figured out the basics, it's up to you to make the game you want, but remember, START SIMPLE. Break the problem down as far as you can and don't move on until the smallest piece works.  Pseudocoding is important!
- :dart: You will need a minimum of 10 commits. Commit frequently, commit often! Commit at checkpoints where your code works.

## Game Prompt

- Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.
- Battle the aliens as you try to destroy them with your lasers.

  - Your ship begins the battle with 100 health.
  - If your ship's health go down to zero, the game is over.
  - If you destroy all the alien ships, the game is over.
  - Start out with six alien ships.
  - When the game is over, you can replay the game.

- The aliens' one weakness is that they are too logical and only attack one at a time.  Silly aliens.  

## Planning Requirements

- Careful planning **before** you start building your game is VERY important. You can do this in Atom, on pen and paper, on a whiteboard, etc.
- Plan out what kinds of control flow you will need to make the game run (a while loop? if/else statements?).
- What variables will you need?
- What kinds of data structures will you need for your alien ships? An object? An array of objects?
- What kind of data structure do you need for your ship?
- What messages will the user need to see to play the game?
- Can you break your game down into convenient functions?

## Reach Goals

Upgrade your game to have the following features:

- The aliens have gained emotions and now can attack more than one at a time.
- Scientists have developed lasers that will fire multiple times. They put them on your ship, and you can now hit any alien, not just in the order they are lined up
-  Scientists have developed a super targeting computer for your lasers.You now are asked which of the aliens you would like to hit with your lasers
-  Scientists have improved your ship's shields. They don't work that consistently, and only improve your health by a random number each time they are recharged. You must go back to base each time to recharge them. After every battle you are asked if you want to return to base and recharge your shields
-  Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage. You can say before each battle if you want to use one of your missles
-  Evil alien scientists have created an alien mega-ship. Each ship contains a number of "weapon pods" that each have their own individual health. These "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship, which also has it's own health

## Mega Reach Goal
- So far the entire game is just one battle, with many aliens. implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle. Keep track of points for the number of wins the player has.
-  Make the players and enemies stronger after each battle
-  Distribute medals and power ups to the player depending on points

## Submitting Your Work

  When you're ready, create an issue on the class repo with
  a title in the format "First and Last Name -- Week XX Day XX".
  The issue body should have:

  *   A link to your forked repo (ie. to your `homework` folder)
  *   A 'comfort' score on how you feel about your answers, from 1 (very
      uncomfortable) to 5 (very comfortable)
  *   A 'completeness' score, from 1 (didn't do it) to 5 (finished all of it)    
  *   A 'win'
  *   A 'struggle'
  *   A 'comment'
