var player = null;
var first = null;
var second = null;

window.onload = function () {
    player = document.getElementById("player");
    first = document.getElementById ("first");
    second = document.getElementById ("second");
    
    player.addEventListener('ended', playNext);
    player.src = first.src;
    player.play ();
}

function playNext () {
    if (player.src == first.src) {
        player.src = second.src;
    }
    
    player.play ();
}

