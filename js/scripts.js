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
    } else if (total >= 400 && total < 500) {
      total -= 400;
      outputArray.push("CD");
      alert(total);
    } else if (total >= 100) {
      total -= 100;
      outputArray.push("C");
      alert(total);
    } else if (total >= 90 && total < 100) {
      total -= 90;
      outputArray.push("XC");
      alert(total);
    } else if (total >= 50) {
      total -= 50;
      outputArray.push("L");
    } else if (total >= 40 && total < 50) {
      total -= 40;
      outputArray.push("XL");
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
