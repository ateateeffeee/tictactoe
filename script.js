//Gameboard Module
const gameboard = (() => {

    const init = function() {
        this.displayBoard();
        //this.bindEvents();
    }

    const gameboard = ['', '', '','','','','','',''];

    const displayBoard = function() {
        console.log('Showing board');
        let table = document.createElement("table");
        let i = 0;
        for (let r = 0; r < 3; r++) {
            let row = table.insertRow(-1);
            
            for (let c = 0; c < 3; c++) {
                let cell = row.insertCell(-1);
                cell.appendChild(document.createTextNode(gameboard[i++]));
                cell.setAttribute("id","cell" + r + c);
                cell.setAttribute("class", "cells");
            }
        }

        document.body.appendChild(table);
    }
/*
//Move this to game module
    const bindEvents = function() {
        document.addEventListener("click", function(e){
            //How will it know who's turn it is?
                //Place marker on screen to show who is up
                //Get player info form getElementbyId's value
            let targetId = e.target.id;
            let currentValue = document.getElementById(targetId).innerHTML;
            console.log(currentValue);
            
            //Change this to do nothing if currentValue == O || X
            if (currentValue == "O" || currentValue == "X") {
                console.log("This box is claimed");
                console.log(player1Turn);
            } else {
                document.getElementById(targetId).innerHTML = "O";
            }
        });
    }
*/

    return {
        init,
        gameboard,
        displayBoard,
        //bindEvents(now "takeTurn"),
    };

})();

//Game module
const game = (() => {
    const init = function() {
        //this.displayBoard();
        console.log("GAME MODULE");
        this.getUserInfo();
        this.takeTurn();
        //this.scoreboard();
        
    }

    const checkForWinner = function () {
        //This function will check the board to see if there is
        //a winner
            //Run after every move
        let topLeft = document.getElementById('cell00');
        let topMid = document.getElementById('cell01');
        let topRight = document.getElementById('cell02');
    
        let midLeft = document.getElementById('cell10');
        let midMid = document.getElementById('cell11');
        let midRight = document.getElementById('cell12');
    
        let botLeft = document.getElementById('cell20');
        let botMid = document.getElementById('cell21');
        let botRight = document.getElementById('cell22');

        //Player 1 winning scenarios
        //Horizontal Scenarios
        if ((topLeft.innerHTML == player1.mark) && (topMid.innerHTML == player1.mark) &&
        (topRight.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        } else if ((midLeft.innerHTML == player1.mark) && (midMid.innerHTML == player1.mark) &&
        (midRight.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        } else if ((botLeft.innerHTML == player1.mark) && (botMid.innerHTML == player1.mark) &&
        (botRight.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        }
        //Vertical Scenarios
        else if ((topLeft.innerHTML == player1.mark) && (midLeft.innerHTML == player1.mark) &&
        (botLeft.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        } else if ((topMid.innerHTML == player1.mark) && (midMid.innerHTML == player1.mark) &&
        (botMid.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        } else if ((topRight.innerHTML == player1.mark) && (midRight.innerHTML == player1.mark) &&
        (botRight.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        }
        //Diagonal Scenarios
        else if ((topLeft.innerHTML == player1.mark) && (midMid.innerHTML == player1.mark) &&
        (botRight.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        } else if ((topRight.innerHTML == player1.mark) && (midMid.innerHTML == player1.mark) &&
        (botLeft.innerHTML == player1.mark)) {
            console.log(player1.name + " wins!");
            document.getElementById("p1").innerHTML = player1.name + " wins!";
            game.newGame();
            player1.score += 1;
            game.updatePlayer1Score();
        }
        //Player 2 winning scenarios
        //Horizontal Scenarios
          else if ((topLeft.innerHTML == player2.mark) && (topMid.innerHTML == player2.mark) &&
        (topRight.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        } else if ((midLeft.innerHTML == player2.mark) && (midMid.innerHTML == player2.mark) &&
        (midRight.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        } else if ((botLeft.innerHTML == player2.mark) && (botMid.innerHTML == player2.mark) &&
        (botRight.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        }
        //Vertical Scenarios
        else if ((topLeft.innerHTML == player2.mark) && (midLeft.innerHTML == player2.mark) &&
        (botLeft.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        } else if ((topMid.innerHTML == player2.mark) && (midMid.innerHTML == player2.mark) &&
        (botMid.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        } else if ((topRight.innerHTML == player2.mark) && (midRight.innerHTML == player2.mark) &&
        (botRight.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        }
        //Diagonal Scenarios
        else if ((topLeft.innerHTML == player2.mark) && (midMid.innerHTML == player2.mark) &&
        (botRight.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        } else if ((topRight.innerHTML == player2.mark) && (midMid.innerHTML == player2.mark) &&
        (botLeft.innerHTML == player2.mark)) {
            console.log(player2.name + " wins!");
            document.getElementById("p1").innerHTML = player2.name + " wins!";
            game.newGame();
            player2.score += 1;
            game.updatePlayer2Score();
        } else if (topLeft.innerHTML && topMid.innerHTML && topRight.innerHTML && midLeft.innerHTML && 
            midMid.innerHTML && midRight.innerHTML && botLeft.innerHTML && botMid.innerHTML && botRight.innerHTML) {
                console.log("It's a tie!");
                document.getElementById("p1").innerHTML = "It's a tie!";
                game.newGame();
                //This "else if" checks for a tie
            }
        else {
            console.log("This does nothing");
        }
        
    }

    const takeTurn = function() {
        //rename to "makeMove" or something
        document.addEventListener("click", function(e){
            let targetId = e.target.id;
            let currentValue = document.getElementById(targetId).innerHTML;
            console.log(currentValue);
            
            if (targetId.includes('cell')) {
                //Change this to do nothing if currentValue == O || X
                if (currentValue == "O" || currentValue == "X") {
                    console.log("This box is claimed");
                } else if (player1.turn) {
                    document.getElementById(targetId).innerHTML = player1.mark;
                    player1.turn = false;
                    //Update P element to indicate turn
                    document.getElementById("p1").innerHTML = "It is " +
                    player2.name + "'s turn";
                } else if (!(player1.turn)) {
                    document.getElementById(targetId).innerHTML = player2.mark;
                    player1.turn = true;
                    //Update P element
                    document.getElementById("p1").innerHTML = "It is " +
                    player1.name + "'s turn";
                }

                game.checkForWinner();
                //console.log(document.getElementById('cell00').innerHTML);

            } else {
                console.log("This is blank");
            }
            
        });
    }

    const clearBoard = function() {
        console.log("Clearing board");

        document.getElementById('cell00').innerHTML = '';
        document.getElementById('cell01').innerHTML = '';
        document.getElementById('cell02').innerHTML = '';
    
        document.getElementById('cell10').innerHTML = '';
        document.getElementById('cell11').innerHTML = '';
        document.getElementById('cell12').innerHTML = '';
    
        document.getElementById('cell20').innerHTML = '';
        document.getElementById('cell21').innerHTML = '';
        document.getElementById('cell22').innerHTML = '';

        //Remove "Play Again" button
        game.removePlayAgainButton();

    }

    const newGame = function() {
        //Create container div
        let div = document.createElement("DIV");
        div.setAttribute("id", "newGameBox");
        document.body.appendChild(div);
        //Create button
        let newGameBtn = document.createElement("BUTTON");
        newGameBtn.setAttribute("id", "newGameBtn");
        newGameBtn.setAttribute("class", "buttons");
        newGameBtn.innerHTML = "Play Again?";
        document.getElementById("newGameBox").appendChild(newGameBtn);
        //Add onclick event to button
        document.getElementById("newGameBtn").addEventListener("click", clearBoard);
        

    }
    const scoreboard = function() {
        console.log("scoreboard");
        //Create container div
        let div = document.createElement("DIV");
        div.setAttribute("id", "scoreboard");
        document.body.appendChild(div);

        let p1Name = document.createElement("DIV");
        p1Name.innerHTML = player1.name;
        p1Name.setAttribute("class", "playerName");
        document.getElementById("scoreboard").appendChild(p1Name);

        let p1Score = document.createElement("DIV");
        p1Score.innerHTML = player1.score;
        p1Score.setAttribute("class", "playerScore");
        p1Score.setAttribute("id", "p1Score");
        document.getElementById("scoreboard").appendChild(p1Score);

        let p2Name = document.createElement("DIV");
        p2Name.innerHTML = player2.name;
        p2Name.setAttribute("class", "playerName");
        document.getElementById("scoreboard").appendChild(p2Name);

        let p2Score = document.createElement("DIV");
        p2Score.innerHTML = player2.score;
        p2Score.setAttribute("class", "playerScore");
        p2Score.setAttribute("id", "p2Score");
        document.getElementById("scoreboard").appendChild(p2Score);
        
        


        //Different nodes for player1 name, player1 score, and
            //p2 name, p2 score
            //get fancy and have a streak detector (fire if you
            //win 3 in a row, etc)
    }
    const updatePlayer1Score = function() {
        document.getElementById("p1Score").innerHTML = player1.score;
    }

    const updatePlayer2Score = function() {
        document.getElementById("p2Score").innerHTML = player2.score;
    }

    const removePlayAgainButton = function() {
        let object = document.getElementById("newGameBox");
        object.remove();

        //Update who's turn it is

        if (player1.turn) {
            document.getElementById("p1").innerHTML = "It is " +
            player1.name + "'s turn";
        } else {
            document.getElementById("p1").innerHTML = "It is " +
            player2.name + "'s turn";
        }
    }

    const getUserInfo = function() {
        let div = document.createElement("DIV");
        div.setAttribute("id", "getUserInfo");
        document.body.appendChild(div);

        //Add other inputs
        let player1Name = document.createElement("INPUT");
        player1Name.setAttribute("id", "player1MenuName");
        player1Name.placeholder = "Player 1 Name";
        document.getElementById("getUserInfo").appendChild(player1Name);
        //Player1 Dropdown button
        let player1Mark = document.createElement("SELECT");
        player1Mark.setAttribute("id", "player1MenuMark");
        document.getElementById("getUserInfo").appendChild(player1Mark);
        let player1X = document.createElement("OPTION");
        player1X.setAttribute("value", "X");
        player1Mark.appendChild(player1X);
        let player1XText = document.createTextNode("X");
        player1X.appendChild(player1XText);
        //These say "player o" not "player zero"...
        let player1O = document.createElement("OPTION");
        player1O.setAttribute("value", "O");
        player1Mark.appendChild(player1O);
        let player1OText = document.createTextNode("O");
        player1O.appendChild(player1OText);

        //Do the same for player 2
        let player2Name = document.createElement("INPUT");
        player2Name.setAttribute("id", "player2MenuName");
        player2Name.placeholder = "Player 2 Name";
        document.getElementById("getUserInfo").appendChild(player2Name);
        //Player 2 Dropdown button
        let player2Mark = document.createElement("SELECT");
        player2Mark.setAttribute("id", "player2MenuMark");
        document.getElementById("getUserInfo").appendChild(player2Mark);
        let player2X = document.createElement("OPTION");
        player2X.setAttribute("value", "X");
        player2Mark.appendChild(player2X);
        let player2XText = document.createTextNode("X");
        player2X.appendChild(player2XText);
        //These say "player o" not "player zero"...
        let player2O = document.createElement("OPTION");
        player2O.setAttribute("value", "O");
        player2Mark.appendChild(player2O);
        let player2OText = document.createTextNode("O");
        player2O.selected = true;
        player2O.appendChild(player2OText);

        //This event listener forces the Player 1 mark to change
        //when changing the Player 2 mark.
        //There can only be one "X" and "O"
        document.getElementById("player2MenuMark").addEventListener
        ("click", forcePlayer1MarkChange);
        //This event listener forces the Player 2 mark to change
        document.getElementById("player1MenuMark").addEventListener
        ("click", forcePlayer2MarkChange);

        

        //Adds a linebreak before next element
        let br = document.createElement("BR");
        document.getElementById("getUserInfo").appendChild(br);

        //Adds a submit buttton that creates player objects
        let submitButton = document.createElement("BUTTON");
        submitButton.setAttribute("id", "submitButton");
        submitButton.innerHTML = "Submit";
        document.getElementById("getUserInfo").appendChild(submitButton);

        //Adds event listener to submit button
        document.getElementById("submitButton").addEventListener
        ("click", saveUserInfo);
    }

    const removeUserInfoDiv = function() {
        userInfoDiv = document.getElementById("getUserInfo");
        userInfoDiv.remove();
    }

    const saveUserInfo = function() {
        //Add inputs
        let player1Name = '';
        let player1Mark = '';
        let player2Name = '';
        let Player2Mark = '';

        //Get values from screen
        player1Name = document.getElementById("player1MenuName").value;
        player1Mark = document.getElementById("player1MenuMark").value;

        player2Name = document.getElementById("player2MenuName").value;
        player2Mark = document.getElementById("player2MenuMark").value;

        //Create player objects
        /*let player1 = createPlayer(player1Name, player1Mark, true, 0);

        let player2 = createPlayer(player2Name, player2Mark, false, 0);
        */
        //Edit existing player objects
        player1.name = player1Name;
        player1.mark = player1Mark;
        player2.name = player2Name;
        player2.mark = player2Mark;

        //Display gameboard, scoreboard and remove sign in
        gameboard.init();
        game.scoreboard();
        game.removeUserInfoDiv();
    
        //Decide first turn
        game.decideFirstTurn();

        //Change paragraph text
        if (player1.turn) {
            document.getElementById("p1").innerHTML = "It is " + 
            player1.name + "'s turn";
        } else {
            document.getElementById("p1").innerHTML = "It is " +
            player2.name + "'s turn";
        }
        

    }

    const forcePlayer1MarkChange = function() {
        player2Mark = document.getElementById("player2MenuMark");
        if (player2Mark.value === "X") {
            document.getElementById("player1MenuMark").value = "O";
        } else if (player2Mark.value === "O") {
            document.getElementById("player1MenuMark").value = "X";
        }
    }

    const forcePlayer2MarkChange = function() {
        player1Mark = document.getElementById("player1MenuMark");
        if (player1Mark.value === "X") {
            document.getElementById("player2MenuMark").value = "O";
        } else if (player1Mark.value === "O") {
            document.getElementById("player2MenuMark").value = "X";
        }
    }

    const decideFirstTurn = function() {
        console.log("FLIPPING COIN");
        console.log(Math.floor(Math.random()*(2 - 1 + 1) + 1));

        randomNumber = Math.floor(Math.random()*(2 - 1 + 1) + 1);

        if (randomNumber == 1) {
            player1.turn = true;
            player2.turn = false;
        } else {
            player1.turn = false;
            player2.turn = true;
        }

    }

    return {
        init,
        takeTurn,
        checkForWinner,
        clearBoard,
        newGame,
        scoreboard,
        updatePlayer1Score,
        updatePlayer2Score,
        removePlayAgainButton,
        getUserInfo,
        saveUserInfo,
        removeUserInfoDiv,
        forcePlayer1MarkChange,
        forcePlayer2MarkChange,
        decideFirstTurn,
    }


})();

//Player factory function
const createPlayer = (name, mark, turn, score) => {

    return {name, mark, turn , score};
};


const player1 = createPlayer('Player 1', 'X', true, 0);
const player2 = createPlayer('Player 2', 'O', false, 0);

game.init();


//NOTES
//BUGS:
//- "play again?" button generates every time you win
    // fix: kill dom element after clicking button
    //FIXED
//- can click board after game is over. Whole thing freaks out
    //disable board after game is won (put play again div over it)
    //FIXED
//-nothing happens if it's a tie
    //make p element say, "it's a tie!" and then show "play again"

