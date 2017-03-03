var first = null;
var second = null;

window.onload = function () {
    first = new Audio ();
    first.src = "song.mp3";
    second = new Audio ();
    second.src = "loop.mp3";
    
    first.addEventListener ("ended", playNext);
    second.addEventListener ("ended", loopSelf);

    first.play ();
}

function playNext () {
    second.play ();
}

function loopSelf () {
    second.play ();
}
