



document.getElementById("jakartaButton").addEventListener("click", changeDisplay);

document.getElementById("samoborButton").addEventListener("click", changeDisplay2);


function changeDisplay () {
    document.getElementById("jakarta").style.display = "flex";
    document.getElementById("samobor").style.display = "none";
};
function changeDisplay2 () {
    document.getElementById("jakarta").style.display = "none";
    document.getElementById("samobor").style.display = "flex";
};