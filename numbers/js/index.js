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
    document.getElementById("slot_"+nyan).setAttribute("value",10);
};

function display_delete(nyan) {
    document.getElementById("slot_"+nyan).setAttribute("value",10);
    numberlist[nyan] = 10;
};


function game_shuffle() {
    for (var i = 0; i < 10; i++) {
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
    for (var i = 0; i < 10; i++) {
        display_set(i,numberlist[i])
    }
}
function game_hide_all(){
    for (var i = 0; i < 10; i++) {
        display_hide(i)
    }
}

function game_show_random() {
    game_hide_all()
    let gshdkldfs = Math.floor((Math.random() * 10));
    display_set(gshdkldfs,numberlist[gshdkldfs])
}
