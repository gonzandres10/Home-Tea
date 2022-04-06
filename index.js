// function toggleMobileMenu(menu){
//     menu.classList.toggle('open');
// }
function on() {
    document.getElementById("menucontenedor").style.display = "block";
    document.getElementById("hamburguesaonclick").style.display = "block";
    document.getElementById("hamburguesa").style.display = "none";
    // document.getElementById("logomobile").style.display = "none";
}

function off() {
    document.getElementById("menucontenedor").style.display = "none";
    document.getElementById("hamburguesa").style.display = "block";
    document.getElementById("logomobile").style.display = "block";
    document.getElementById("hamburguesaonclick").style.display = "none";
}
