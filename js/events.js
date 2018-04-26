//define functions here
function getIt(){
  $('p').on("click", function(e){
    alert("Hey!");
  });
}
function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty');
  });
}
function pressIt(){
  $('input').on("keydown", function(e){
    if(e.which == 71){
      alert("g was pressed");
    }
  });
}

function submitIt(){
  $("form").on("submit", function(e){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
  
});
