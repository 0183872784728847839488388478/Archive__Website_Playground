let numberlist = [];





function display_create(nyan,number) {
    if (number > 9) { let number = 10} 
    document.getElementById("slot_"+nyan).setAttribute("value", number);
    numberlist[nyan] = number;
};

function display_set(nyan,number) {
    if (number > 9) { let number = 10} 
    document.getElementById("slot_"+nyan).setAttribute("value", number);
};

function display_hide(nyan) {
    document.getElementById("slot_"+nyan).setAttribute("value");
};

function display_delete(nyan) {
    document.getElementById("slot_"+nyan).setAttribute("value");
    numberlist[nyan] = 10;
};


function game_shuffle() {
    for (var i = 0; i < 9; i++) {
        let number = Math.floor((Math.random() * 10));
        display_create(i,number)
        display_hide(i)
      }      
};

function game_show(number){
    display_set(number,numberlist[number])
}
function game_hide(number){
    display_hide(i)

}

function game_show_all(){
    for (var i = 0; i < 9; i++) {
        display_set(i,numberlist[i])
    }
}
function game_hide_all(){
    for (var i = 0; i < 9; i++) {
        display_hide(i)
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  



function startTimer(duration) {
    display = document.querySelector('#time');
    var timer = duration, minutes, seconds;
    document.getElementById('progress_time').setAttribute("max", duration);
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
        tpoqoieow = minutes + "" + seconds;
        uiotret = tpoqoieow.split("");
        document.getElementById('progress_time').setAttribute("value", seconds);
        document.getElementById('time_seconds_tens').setAttribute("value", uiotret[2]);
        document.getElementById('time_seconds_ones').setAttribute("value", uiotret[3]);
    }, 1000);
}


    game_show_all()
    game_hide_all();
    startTimer(30);
