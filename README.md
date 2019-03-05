# Pig Dice

#### This is a website where you can play the pig dice game.

#### By [TichiOigara](https://github.com/TichiOigara)

## Description

Pig Dice website allows a user to play the pig dice game. The game allows to users to play one after the other as their score is taken after each round of game play. The winner of the game is the player who scores 100 first. HTML has been used to structure the page, CSS and Bootstrap 4.3.1 has been used for styling. JavaScript has been used mainly for the business-logic of the game.

## Setup/Installation Requirements

In order to use this application:Bootstrap

-   Clone or Download the repository to your computer.
-   To clone repository, use:
        git clone https://github.com/TichiOigara/pig-dice.git
-   Open the quiz-board folder and locate the index.html file.
-   Run the index.html file in a browser of your choice such as Google Chrome.

## Technologies Used

Technologies used for this project are:

-   HTML.
-   CSS.
-   Bootstrap 4.3.1.
-   JavaScript.
    ## Demo
    The link to the live website is [here](https://tichioigara.github.io/pig-dice/).

## Support and Contact Details

The website has no known bugs. However, if you encounter a problem, you can open an issue [here](https://github.com/TichiOigara/pig-dice/issues/new).

## BDD

The behavior expected from the application is as shown below in the table:

| Behavior <br> The program should:                       |        Input Example:       | Output Example:                                                                               |
| :------------------------------------------------------ | :-------------------------: | :-------------------------------------------------------------------------------------------- |
| Allow the user to roll the dice                         |  Click the roll dice button | The number rolled is shown                                                                    |
| Display score for each roll of the dice                 |       The user rolls 5      | The scoreboard for the round updates to 5                                                     |
| Display the score when the user rolls a number of times |   The user rolls  5 then 8  | The scoreboard for the round shows 8                                                          |
| Alert user if they roll 1                               |         User rolls 1        | Alerts the user that a 1 is rolled and it's the next player's turn                            |
| Allow the user to hold and pass their turn              | User clicks the hold button | The turn is passed to the next player and the score for the round is added to the total score |
| Check if a player has scored 100                        |   Total Results shows 100   | The winner is displayed and the game reset                                                    |

## License

MIT License

Copyright (c)  2019 **Sheila Oigara**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
