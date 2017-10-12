
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let count = 0
function guess(){
  let para = ""
  let input = document.getElementById('user-guess').value;

  if (answer.value == "" || attempt.value == ""){
    setHiddenFields();
  }

  if((validateInput(input)) == true){
    console.log('fuck you');
    attempt.value ++;
  }

  if (count !== 4 && attempt.value >= 10){
    setMessage("You Lose! :(");

  }else if(count !== 4){
    setMessage("Incorrect, try again.");

  }else{
    setMessage("You Win! :)");
  }
  console.log(count);
  getResults(input);
//implement new functions here
function setHiddenFields(){
  attempt.value = 0

  let val = ""
  for(i=0; i<4;i++){
    val += Math.floor(Math.random()*10);
  	val.toString();
  }
  answer.value = val;
}

function validateInput(input){
  if(input.length !== 4){
    setMessage("Guesses must be exactly 4 characters long");
    return false;
  }else
    setMessage("");
    return true;
  };



function setMessage(para){
  let message = document.getElementById('message');
  message.innerHTML = para;
}


}
function getResults(input){

  let result = document.getElementById('results');

  let html = '<div class="row"><span class="col-md-6">' + input + '</span><span class="col-md-6"</span>';

  for(i=0;i < input.length;i++){

    if (input.charAt(i) == answer.value.charAt(i)){
      html += '<span class="glyphicon glyphicon-ok"></span>';
      count ++;

    }else{
      for (n=0; n < input.length; n++){
        if (input.charAt(i) == answer.value.charAt(n)){
          html += '<span class="glyphicon glyphicon-transfer"></span>';
        }else{
          html += '<span class="glyphicon glyphicon-remove">';
        }
      }
    }
  html += ''

  }
  result.innerHTML += html;
}
