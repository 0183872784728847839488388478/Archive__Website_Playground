// Add event listener on keypress
var color_unpressed = "dimgray"
var color_pressed = "#00CDBA"
var color_instants = "red"
document.addEventListener('keypress', (event) => {
	var name = event.key;
	var code = event.code;
	

	console.log("Match Search: "+ name);

	if (name == "q") {
		document.getElementById("q").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio0_0.play();
	};
	if (name == "w") {
		document.getElementById("w").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio1_0.play();
	};
	if (name == "e") {
		document.getElementById("e").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio2_0.play();
	};
	if (name == "r") {
		document.getElementById("r").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio3_0.play();
	};
	if (name == "t") {
		document.getElementById("t").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio4_0.play();
	};
	if (name == "y") {
		document.getElementById("y").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio5_0.play();
	};
	if (name == "u") {
		document.getElementById("u").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio6_0.play();
	};
	if (name == "i") {
		document.getElementById("i").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio7_0.play();
	};
	if (name == "o") {
		document.getElementById("o").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio8_0.play();
	};
	if (name == "p") {
		document.getElementById("p").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio9_0.play();
	};
}, false);

document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	

	console.log("Match Search: "+ name);

	if (name == "q") {
		document.getElementById("q").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio0_1.play();
	};
	if (name == "w") {
		document.getElementById("w").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio1_1.play();
	};
	if (name == "e") {
		document.getElementById("e").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio2_1.play();
	};
	if (name == "r") {
		document.getElementById("r").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio3_1.play();
	};
	if (name == "t") {
		document.getElementById("t").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio4_1.play();
	};
	if (name == "y") {
		document.getElementById("y").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio5_1.play();
	};
	if (name == "u") {
		document.getElementById("u").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio6_1.play();
	};
	if (name == "i") {
		document.getElementById("i").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio7_1.play();
	};
	if (name == "o") {
		document.getElementById("o").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio8_1.play();
	};
	if (name == "p") {
		document.getElementById("p").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio9_1.play();
	};
  }, false);

// Add event listener on keyup
document.addEventListener('keyup', (event) => {
	var name = event.key;
	var code = event.code;
	if (name == "q") {
		document.getElementById("q").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio0_2.play();
	};
	if (name == "w") {
		document.getElementById("w").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio1_2.play();
	};
	if (name == "e") {
		document.getElementById("e").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio2_2.play();
	};
	if (name == "r") {
		document.getElementById("r").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio3_2.play();
	};
	if (name == "t") {
		document.getElementById("t").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio4_2.play();
	};
	if (name == "y") {
		document.getElementById("y").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio5_2.play();
	};
	if (name == "u") {
		document.getElementById("u").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio6_2.play();
	};
	if (name == "i") {
		document.getElementById("i").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio7_2.play();
	};
	if (name == "o") {
		document.getElementById("o").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio8_2.play();
	};
	if (name == "p") {
		document.getElementById("p").style.background = color_pressed;
		console.log("Match Found: "+ name);
		audio9_2.play();
	};

  }, false);

var audio0_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio1_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio2_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio3_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio4_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio5_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio6_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio7_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio8_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');
var audio9_0 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_tap.mp3');

var audio0_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio1_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio2_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio3_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio4_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio5_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio6_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio7_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio8_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');
var audio9_1 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_long.mp3');

var audio0_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio1_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio2_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio3_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio4_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio5_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio6_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio7_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio8_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');
var audio9_2 = new Audio('https://storage.sekai.best/sekai-assets/live/tap_se/default_rip/se_live_flick.mp3');