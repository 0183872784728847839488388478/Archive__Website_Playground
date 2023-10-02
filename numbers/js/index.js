let numberlist = [];
let dhfgkjsdhfgk = [];


function display_create(nyan, number) {
	if (number > 9) {
		let number = 10
	}
    console.log(document.getElementById("slot_" + nyan))
	document.getElementById("slot_" + nyan).setAttribute("value", number);
	numberlist[nyan] = number;
};

function display_set(nyan, number) {
	if (number > 9) {
		let number = 10
	}
	document.getElementById("slot_" + nyan).setAttribute("value", number);
};

function display_hide(nyan) {
	document.getElementById("slot_" + nyan).setAttribute("value", 10);
};

function display_delete(nyan) {
	document.getElementById("slot_" + nyan).setAttribute("value", 10);
	numberlist[nyan] = 10;
};


function game_shuffle() {
	for (var i = 0; i < 10; i++) {
		let number = Math.floor((Math.random() * 10));
		display_create(i, number)
		display_hide(i)
		dhfgkjsdhfgk[i] = number;
	}
	hsdkfhakjdfh = dhfgkjsdhfgk.join("");

	addUrlParameter("number", hsdkfhakjdfh);
};

function game_show(number) {
	display_set(number, numberlist[number])
}

function game_hide(number) {
	display_hide(i)

}

function game_show_all() {
	for (var i = 0; i < 10; i++) {
		display_set(i, numberlist[i])
	}
}

function game_hide_all() {
	for (var i = 0; i < 10; i++) {
		display_hide(i)
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}




function startTimer_random(duration) {

	if (timer = timer) {
		timer = null
	}

	clearInterval(endinterval)
	var timer = duration,
		minutes, seconds;
	document.getElementById('progress_time').setAttribute("max", duration);
	var endinterval = setInterval(
		function() {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			game_show_random()

			if (--timer < 0) {
				document.getElementById('time_seconds_tens').setAttribute("value", 10);
				document.getElementById('time_seconds_ones').setAttribute("value", 10);
				game_hide_all()
				clearInterval(endinterval)
			}

			tpoqoieow = minutes + "" + seconds;
			uiotret = tpoqoieow.split("");
			document.getElementById('progress_time').setAttribute("value", seconds);
			document.getElementById('time_seconds_tens').setAttribute("value", uiotret[2]);
			document.getElementById('time_seconds_ones').setAttribute("value", uiotret[3]);
		}, 1000);
}

function startTimer(duration) {

	if (timer = timer) {
		timer = null
	}

	clearInterval(endinterval)
	var timer = duration,
		minutes, seconds;
	document.getElementById('progress_time').setAttribute("max", duration);
	var endinterval = setInterval(
		function() {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			if (--timer < 0) {
				document.getElementById('time_seconds_tens').setAttribute("value", 10);
				document.getElementById('time_seconds_ones').setAttribute("value", 10);
				game_hide_all()
				clearInterval(endinterval)
			}

			tpoqoieow = minutes + "" + seconds;
			uiotret = tpoqoieow.split("");
			document.getElementById('progress_time').setAttribute("value", seconds);
			document.getElementById('time_seconds_tens').setAttribute("value", uiotret[2]);
			document.getElementById('time_seconds_ones').setAttribute("value", uiotret[3]);
		}, 1000);
}

function game_show_random() {
	game_hide_all()
	let gshdkldfs = Math.floor((Math.random() * 10));
	display_set(gshdkldfs, numberlist[gshdkldfs])
}

function refreshPage() {
	window.location.reload();
}

function GetURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function START_LINE() {
    let numbering = GetURLParameter('number');

    if (typeof numbering !== 'undefined') {
        let hdfgjkhkgf = numbering.length;
        if (hdfgjkhkgf <= 10) {
            orieatyu = numbering.split("");
            for (var i = 0; i < hdfgjkhkgf; i++) {
                console.log("SETTING: " + i + " " + orieatyu[i]);
                display_create(i, orieatyu[i]);
                display_hide(i)
            }
        }
    }
}



function addUrlParameter(name, value) {
	var searchParams = new URLSearchParams(window.location.search)
	searchParams.set(name, value)
	window.location.search = searchParams.toString()
  }
