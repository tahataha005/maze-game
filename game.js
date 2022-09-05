// function lose(b){
//     for(let i = 0; i < b.length ;i++){
//         b[i].style.backgroundColor="red";
//     }
// }

var start = false;
var inside = false;
var boundaries = 
window.onload = function () {
    var boundaries = document.getElementsByClassName("boundaries");
    var sbutton = document.getElementById("start")
    var status = document.getElementById("status")
    var ebutton = document.getElementById("end")
    var game = document.getElementById("game")
    /*start */
    sbutton.addEventListener("mouseover", function () {
        status.textContent = "";
        status.textContent = "Started...";
        start = true;
        inside = true;
        for (var i = 0; i < boundaries.length; i++) { 
            boundaries[i].className = "div.youlose"; 
        }

    })

    game.addEventListener("mouseleave", function () {
        inside = false;
    });

    
    
    for (var i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseenter", function (lose) {
            if (start) {
                lose.target.style.backgroundColor = "#FF0000";
                start = false;
                status.textContent = "Lost!";
            }
    })};

    ebutton.addEventListener("mouseover", function () {
        if (start) {
            if (inside) { 
                status.textContent = "Won!"; 
            }
            else {
                start = false;
                status.textContent = "cheated!";
            }
        }
        start = false;
    });

}
    
