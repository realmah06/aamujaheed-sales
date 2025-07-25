const headList = document.getElementById("list-area");
const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");

showMenu.onclick = function(){
    headList.style.display = "block";
    showMenu.style.display = "none";
    hideMenu.style.display = "block";
}
hideMenu.onclick = function(){
    headList.style.display = "none";
    showMenu.style.display = "block";
    hideMenu.style.display = "none";
}