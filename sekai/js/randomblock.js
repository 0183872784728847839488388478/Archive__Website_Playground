function blockspawn(a,loc) {
        if (loc) a
        
        let loc = Math.floor((Math.random() * 10));
        var div = document.createElement("div");
        div.id = a
        div.style.marginLeft = loc*104
        div.style.width = "104px"
        div.style.height = "50px"
        div.style.background = "red"
        div.style.zindex = Math.floor((Math.random() * 1024));

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
    var b = setInterval(function() {
            if (i > 700) {
                deletespawn(a);
                clearInterval(b);
                return;
            } else {
                div.style.marginTop = (i++)
        }
    }, 1);
    
    

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

function startess(argument) {
    start()
    start()
    start()
    start()
    start()
    start()
}