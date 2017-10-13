
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');


function setMessage(para){
  let message = document.getElementById('message');
  message.innerHTML = para;
}

function setHiddenFields(){
  attempt.value = 0;

  let val = ""
  for(i=0; i<4;i++){
    val += Math.floor(Math.random()*10);
  	val.toString();
  }
  answer.value = val;
}

function validateInput(input){
  if(input.length !== 4){
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }else
    setMessage("");
    return true;
}

function getResults(input){
  let correct = 0;
  let result = document.getElementById('results');

  let html = '<div class="row"><span class="col-md-6">' + input + '</span><span class="col-md-6"</span>';

  for(i=0;i < input.length;i++){

    if (input.charAt(i) == answer.value.charAt(i)){
      html += '<span class="glyphicon glyphicon-ok"></span>';
      correct ++;

    }else if (answer.value.indexOf(input.charAt(i)) > -1){
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    }else{
      html += '<span class="glyphicon glyphicon-remove">';
    }
  }
  html += ''
  result.innerHTML += html;
  if(correct == 4){
    setMessage("You Win! :)");
    showAnswer(true);
    showReplay();

  }
  else if (correct !== 4 && attempt.value > 10){
    setMessage("You Lose! :(");
    showAnswer(false);
    showReplay();

  }else if(correct !== 4){
    setMessage("Incorrect, try again.");
  }
  if (input == answer.value){
    return true;
  }else{
    return false;
  }

}

function guess(){

  let para = ""
  let input = document.getElementById('user-guess').value;
  if (answer.value == "" || attempt.value == ""){
    setHiddenFields();
  }

  if((validateInput(input)) == true){

    attempt.value ++;
  }else{
    return false;
  }
  getResults(input);

}

function showAnswer(success){
  if (success){
    code.className += " success";
  }else{
    code.className += " failure";
  }

  document.getElementById('code').innerHTML = answer.value;
}

function showReplay(){
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}
