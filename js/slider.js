var slider = document.getElementById("slider");
var output = document.getElementById("slider-output");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

