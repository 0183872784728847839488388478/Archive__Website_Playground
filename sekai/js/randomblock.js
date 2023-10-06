function blockspawn(a) {

        
        let spawn = Math.floor((Math.random() * 10));

        var div = document.createElement("div");
        div.id = a
        div.style.marginLeft = spawn*104
        div.style.width = "104px"
        div.style.height = "50px"
        div.style.background = "red"

        document.getElementById("area").appendChild(div);
    return div.id
}

function deletespawn(a) {
    const div = document.getElementById(a);
    div.remove();
}

function movespawn(a) {
    const div = document.getElementById(a)

    var i = 0;
    // This block will be executed 100 times.
    setInterval(function() {
        if (i == 700) {
            clearInterval(this)
            deletespawn(a)
        } else {
            div.style.marginTop = (i++)
    }
    }, 10);
    
    

}




const characters ='ABCDEF1234567890';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function start() {
    let card = generateString(16)
    blockspawn(card)
    movespawn(card)
    var delayInMilliseconds = 15000; //1 second

    setTimeout(function() {
        deletespawn(card)
    }, delayInMilliseconds);

}