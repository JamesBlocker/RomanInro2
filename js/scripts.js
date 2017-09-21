var romanize = function(input) {
  var total = parseInt(input);
  var outputString = [];
  alert(total);
  if (total >= 1000) {
    total -= 1000;
    outputString.push("M");
    outputString.join("");
  }else if (total >= 900 && total < 1000) {
    total -= 900;
    outputString.push("CM");
    outputString.join("");
  }
  alert(total);
  return outputString;
};


//Front end
$(document).ready(function(){
 $(".integer-input").submit(function(event){
   event.preventDefault();
   var userInput = $("input").val();
   var result = romanize(userInput);

   $(".output p").text(result);
   $(".output").show();

 });
});
