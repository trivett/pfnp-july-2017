// paste your function that converts farenheit to celcius here:


function farenheitToCelsiusConverter(f){
  let celsius = (f - 32) * (5/9);
  return celsius;
}

function clearInputsAndWarnings() {
  $("#boiling-warning").hide();
  $("#freezing-warning").hide();
  $('#farenheit-input').val("");
}

function showAnswersAndWarnings(c){
  
  $("#answer").html(c);
  if (c >= 100){
    $("#boiling-warning").fadeIn();
  } else if (c <= 0){
    $("#freezing-warning").fadeIn();
  }
}

$("#temperature-conversion-form").on("submit", function(){
  let f = $('#farenheit-input').val();
  clearInputsAndWarnings();
  let c = farenheitToCelsiusConverter(f);
  showAnswersAndWarnings(c);
});