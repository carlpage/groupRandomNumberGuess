//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var number = require('./random.js');
//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//listener
app.listen(3000, function(){
  console.log('up on channel 3000');
});

//globals
var level;

//base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/startGame', function( req,res ){
console.log('post hit to start game', req.body);

console.log('here is the responseObject: ', responseObject);
if(req.body.difficulty==='easyButton'){
  level = number( 1, 10 );
}
else if(req.body.difficulty==='medButton'){
  console.log('in medButton');
  level = number( 1, 100 );
  console.log(number(1, 100));
}
else if(req.body.difficulty==='hardButton'){
  level = number( 1, 1000 );
}

res.send('got it');
});// end post
