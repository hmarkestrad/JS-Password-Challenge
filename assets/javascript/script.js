// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("FeatureSelection");
var CloseModal = document.getElementsByClassName("close")[0];
var next = document.getElementById("mybutton");
var step_02 = document.getElementById("step_02");
var step_03 = document.getElementById("step_03");
var step_04 = document.getElementById("step_04");
var step_05 = document.getElementById("step_05");
var step_06 = document.getElementById("step_06");
var next = document.getElementById("next");
var FeatureSelection = document.getElementById("FeatureSelection");
var SelectionReset = document.getElementById("SelectionReset");
//var password = document.getElementById('password');
var submit = document.getElementById("submit");
let step = 0;

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks close the modal
CloseModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

next.onclick = function(event) {
  step = step + 1;
  if (step >= 1) { 
    step_02.style.display = "block";
  }
  if (step >= 2) { 
    step_03.style.display = "block";
  }
  if (step >= 3) { 
    step_04.style.display = "block";
  }
  if (step >= 4) { 
    step_05.style.display = "block";
  }
  if (step >= 5) { 
    step_06.style.display = "block";
    submit.style.display = "block";
    next.style.display = "none";
  }
}

submit.onclick = function(event) {

  var numbers = document.getElementById("numbers").checked;
  document.getElementById("demo").innerHTML = x;
  console.log(numbers);



  modal.style.display = "none";
  FeatureSelection.style.display = "none";
  SelectionReset.style.display = "inline";
  document.getElementById('password').removeAttribute('placeholder');
  function password_generator( len ) {
    var length = (len)?(len):(128);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
  }

  document.getElementById("password").innerHTML = password_generator();

}

