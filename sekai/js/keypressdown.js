// Add event listener on keypress
var color_unpressed = "dimgray"
var color_pressed = "blue"
var color_instants = "red"
document.addEventListener('keypress', (event) => {
	var name = event.key;
	var code = event.code;
	

	console.log("Match Search: "+ name);

	if (name == "q") {
		document.getElementById("q").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("none")
	};
	if (name == "w") {
		document.getElementById("w").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "e") {
		document.getElementById("e").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "r") {
		document.getElementById("r").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "t") {
		document.getElementById("t").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "y") {
		document.getElementById("y").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "u") {
		document.getElementById("u").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "i") {
		document.getElementById("i").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "o") {
		document.getElementById("o").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
	if (name == "p") {
		document.getElementById("p").style.background = color_pressed;
		console.log("Match Found: "+ name);
		playsound("tap")
	};
}, false);

document.addEventListener('keydown', (event) => {
	var name = event.key;
	var code = event.code;
	

	console.log("Match Search: "+ name);

	if (name == "q") {
		document.getElementById("q").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "w") {
		document.getElementById("w").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "e") {
		document.getElementById("e").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "r") {
		document.getElementById("r").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "t") {
		document.getElementById("t").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "y") {
		document.getElementById("y").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "u") {
		document.getElementById("u").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "i") {
		document.getElementById("i").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "o") {
		document.getElementById("o").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "p") {
		document.getElementById("p").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
  }, false);

// Add event listener on keyup
document.addEventListener('keyup', (event) => {
	var name = event.key;
	var code = event.code;
	if (name == "q") {
		document.getElementById("q").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "w") {
		document.getElementById("w").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "e") {
		document.getElementById("e").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "r") {
		document.getElementById("r").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "t") {
		document.getElementById("t").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "y") {
		document.getElementById("y").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "u") {
		document.getElementById("u").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "i") {
		document.getElementById("i").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "o") {
		document.getElementById("o").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};
	if (name == "p") {
		document.getElementById("p").style.background = color_pressed;
		console.log("Match Found: "+ name);
		
	};

  }, false);

function playsound(a) {
	if (a === "tap") {
		var audio = new Audio('./sound/tap.mp3');
		audio.play();
	};
}
