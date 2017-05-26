$(document).ready(function(){
  $('.numberButton').on('click', numberOfPlayers);
  $('.diffButtons').on('click', diffLevel);
  $('#start').on('click', startGame);
  $('.game').on('click', '#submit', runGame);
  // $('.game').on('click', '#restart', restartGame);
  // $('.game').on('click', '#abandon', abandonGame);
}); // end of doc ready

var players = 0;
var level;

function numberOfPlayers(){
  players = $(this).attr('id');
  console.log(players);
}; // end of numberOfPlayers function

function diffLevel(){
  level = $(this).attr('id');
  console.log(level);
};

function startGame(){
  for (var i = 0; i < players; i++) {
    // var game += '<h3>player'+(i+1)+'</h3>'
    var game = '<input placeholder="guess" id="input' + (i+1) +'">'
    $('form').append(game);
  };
  var objectToSend = {
    difficulty: level
  };

  $.ajax ({
    type: 'POST',
    url: '/startGame',
    data: objectToSend,
    success: function(response){
      console.log('response from server', response);
    }
  })

  $('.game').append('<button id ="submit" >submit</button>');
  $('.game').append('<button id ="restart" >restart</button>');
  $('.game').append('<button id ="abandon" >abandon game</button>');

}; // end of startGame

function runGame() {
  var inputNumbers = [];
  console.log('in run Game Function');
  var $form = $('form').children();
  for (var i = 0; i < $form.length; i++) {
    inputNumbers.push($form[i]);
  }

  var objectToSend = {
    checkNumbers: inputNumbers
  }

  // $.ajax({
  //   type: 'POST',
  //   url: '/checkNumbers',
  //   data: objectToSend
  //   success: function(response){
  //     //
  //   }
  //
  // });// end ajax object
}; // end runGame
