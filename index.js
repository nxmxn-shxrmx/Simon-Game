// var buttonColors = ["red", "blue", "yellow", "green"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level = 0;
// var started = false;

// $(document).keydown(function () {
//     level = 0;
//     if (!started) {
//         gamePattern = [];
//         nextSequence();
//         started = true;
//     }
// });

// $(".btn").click(function () {
//     var h = $(this).attr("id");
//     userClickedPattern.push(h);
//     playSound(h);
//     //setTimeout(nextSequence(),1000);
//     animatePress(h);
//     check(userClickedPattern.length - 1);

// })

// function check(currentPosition) {
//     var correct = true;
//     if (userClickedPattern[currentPosition] != gamePattern[currentPosition])
//         correct = false;

//     if (userClickedPattern.length == gamePattern.length && correct) {
//         setTimeout(function () {
//             nextSequence();
//         }, 1000);

//     }
//     if (!correct) {
//         playSound("wrong");
//         $("body").addClass("game-over");
//         $("h1").text("WRONG ANSWER!!");
//         setTimeout(function () {
//             $("body").removeClass("game-over");
//             $("h1").text("Game Over, Press Any Key to Restart");
//         }, 500);
//         started = false;
//     }
// }

// function nextSequence() {
//     $("h1").text("Level " + level);
//     level++;


//     var r = (Math.random()) * 4;
//     var randomChosenColour = Math.floor(r);
//     gamePattern.push(buttonColors[randomChosenColour]);
//     $("#" + buttonColors[randomChosenColour]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     // var audio = new Audio("sounds/"+buttonColors[randomChosenColour]+".mp3");
//     // audio.play();
//     userClickedPattern = [];
//     playSound(buttonColors[randomChosenColour]);

// }

// function playSound(name) {
//     // $(document).mouseover(
//     //     function()
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();

//     // ); 
// }

// function animatePress(currentColor) {
//     $("." + currentColor).addClass("pressed");
//     setTimeout(function () {
//         $("." + currentColor).removeClass("pressed");
//     }, 100);
// }
// $(document).keydown(function () {
//     level = 0;
//     if (!started) {
//         gamePattern = [];
//         nextSequence();
//         started = true;
//     }
// });




// // var buttonColours = ["red", "blue", "green", "yellow"];

// // var gamePattern = [];
// // var userClickedPattern = [];

// // $(".btn").click(function() {

// //   var userChosenColour = $(this).attr("id");
// //   userClickedPattern.push(userChosenColour);

// //   //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
// //   playSound(userChosenColour);

// // });

// // function nextSequence() {

// //   var randomNumber = Math.floor(Math.random() * 4);
// //   var randomChosenColour = buttonColours[randomNumber];
// //   gamePattern.push(randomChosenColour);

// //   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// //   //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
// //   playSound(randomChosenColour);
// // }

// // //2. Create a new function called playSound() that takes a single input parameter called name.
// // function playSound(name) {

// //   //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
// //   var audio = new Audio("sounds/" + name + ".mp3");
// //   audio.play();
// // }


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}