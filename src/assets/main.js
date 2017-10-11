let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == "" || attempt == ""){
      setHiddenFields();
    };


    //add functionality to guess function here

}

//implement new functions here
function setHiddenFields(){
  attempt = 0
  let val = ""
  for(i=0; i<=4;1++){
    val += (Math.floor(Math.random()*10)).toString();
  answer.value = Number(val);
  };
}
