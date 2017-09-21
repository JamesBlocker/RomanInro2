var romanize = function(input) {
  var total = parseInt(input);
  var outputArray = [];
  alert(total);
  while (total > 0) {
    if (total >= 1000 && total <= 3999) {
      total -= 1000;
      outputArray.push("M");
      alert(total);
    } else if (total >= 900 && total < 1000) {
      total -= 900;
      outputArray.push("CM");
      alert(total);
    } else if (total >= 500) {
      total -= 500;
      outputArray.push("D");
      alert(total);
    }
  }
  var joinedArray = outputArray.join('');
  alert(total);
  return joinedArray;
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
