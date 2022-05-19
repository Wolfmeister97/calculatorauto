// var km = document.getElementById("km");
// var medie = document.getElementById("media");
// var buton = document.getElementById("CalculateBtn");
// var cost = document.getElementById("cost");

// buton.addEventListener("click", function () {
//   if (km.value == "" || media.value == "" || cost.value == "") {
//     alert("Completeaza toate campurile inainte de calcul!");
//     return;
//   }

//   var result = km.value * (media.value / 100) * cost.value;
//   cost.innerHTML = result.toFixed(1);
//   console.log(result);
// });


var km = document.getElementById("km");
var medie = document.getElementById("media");
var buton = document.getElementById("CalculateBtn");
var cost = document.getElementById("cost");
var finalResult = document.getElementById("costFinal");

buton.addEventListener("click", function () {
  if (km.value == "" || media.value == " " || cost.value == "") {
    alert("Completeaza toate campurile inainte de calcul!");
    return;
  }

  var result = km.value * (media.value / 100) * cost.value;
  finalResult.innerHTML = result.toFixed(1);
//   console.log(result);
});
