document.getElementById("header-container").style.backgroundColor = "green";
var colorPink = document.getElementsByClassName("emergency-tasks");
colorPink[0].style.backgroundColor = "pink"; 
var textColorPink = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < textColorPink.length; i += 1) {
  textColorPink[i].style.backgroundColor = "#cc0066";
}
