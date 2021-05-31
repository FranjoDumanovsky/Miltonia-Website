document.getElementById("samoborButton").classList.add("activateButton")



document.getElementById("jakartaButton").addEventListener("click", changeDisplay);

document.getElementById("samoborButton").addEventListener("click", changeDisplay2);


function changeDisplay () {
    document.getElementById("jakarta").style.display = "flex";
    document.getElementById("samobor").style.display = "none";
    document.getElementById("jakartaButton").classList.add("activateButton")
    document.getElementById("samoborButton").classList.remove("activateButton")
};
function changeDisplay2 () {
    document.getElementById("jakarta").style.display = "none";
    document.getElementById("samobor").style.display = "flex";
    document.getElementById("jakartaButton").classList.remove("activateButton")
    document.getElementById("samoborButton").classList.add("activateButton")
};