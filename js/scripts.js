function Player(tempScore, totalScore, rolledNumbers) {
  this.rolledNumbers = rolledNumbers
  this.tempScore = tempScore;
  this.totalScore = totalScore;
}
Player.prototype.addTempScore = function() {
  var totalTempScore = 0;
  for (var i = 0; i < this.rolledNumbers.length; i++) {
    totalTempScore += this.rolledNumbers[i];
  }
  this.tempScore = totalTempScore;
  return this.tempScore;
}
Player.prototype.addTotalScore = function() {
  return this.totalScore += this.tempScore;
}

function rollDice() {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  return randomNumber;
}

var rolledNumbers1 = [];
var rolledNumbers2 = [];
var player1 = new Player(0, 0, 0);
var player2 = new Player(0, 0, 0);
$(document).ready(function() {

  $("#rollBtn1").click(function(event) {
    event.preventDefault();
    //rolledNumbers = [0];
    var rolledNumber = rollDice();
    $("#diceNumber").text(rolledNumber);
    if (rolledNumber != 1) {
      rolledNumbers1.push(rolledNumber);
      player1.rolledNumbers = rolledNumbers1;
      player1.addTempScore();
      player1.addTotalScore();
      $("#roundResult1").text(player1.tempScore);
      if (player1.totalScore >= 100) {
        $("#totalResult1").text(player1.addTotalScore());
        alert("Player one has won");
      }
    } else {

      player1.rolledNumbers = 0;
      rolledNumbers1 = [0];
      $("#roundResult1").text(player1.addTempScore());
      $("#totalResult1").text(player1.addTotalScore());
      //alert(rolledNumbers1);
      $("#rollBtn1").hide();
      $("#holdBtn1").hide();
      alert("It is player 2 's turn'");
      $("#rollBtn2").show();
      $("#holdBtn2").show();

    }


  });
  $("#holdBtn1").click(function(event) {
    event.preventDefault();
    alert(player1.tempScore);
    $("#totalResult1").text(player1.totalScore);
    $("#roundResult1").text(0);
    rolledNumbers1 = [0];
    $("#rollBtn1").hide();
    $("#holdBtn1").hide();
    $("#rollBtn2").show();
    $("#holdBtn2").show();
  });

  $("#rollBtn2").click(function(event) {
    event.preventDefault();
    //alert(player2.tempScore);
    //rolledNumbers = [0];
    var rolledNumber = rollDice();
    $("#diceNumber").text(rolledNumber);
    if (rolledNumber != 1) {
      rolledNumbers2.push(rolledNumber);
      player2.rolledNumbers = rolledNumbers2;
      $("#roundResult2").text(player2.addTempScore());
      //   //alert(player1.addTotalScore());
    } else {

      player2.rolledNumbers = 0;
      $("#roundResult2").text(player2.addTempScore());
      $("#totalResult2").text(player2.addTotalScore());
      //alert(rolledNumbers2);
      $("#rollBtn2").hide();
      $("#holdBtn2").hide();
      alert("It is player 1 's turn'");
      $("#rollBtn1").show();
      $("#holdBtn1").show();
      rolledNumbers2 = [0];
    }


  });
  $("#holdBtn2").click(function(event) {
    $("#totalResult2").text(player2.addTotalScore());
    $("#roundResult2").text(0);
    rolledNumbers2 = [0];
    $("#rollBtn2").hide();
    $("#holdBtn2").hide();
    $("#rollBtn1").show();
    $("#holdBtn1").show();
  });
});
