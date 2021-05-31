document.getElementById("samoborButton").classList.add("activateButton")   // adds the initial active style to the Samobor Button when the page loads




document.getElementById("jakartaButton").addEventListener("click", changeDisplay);   // On click call function x

document.getElementById("samoborButton").addEventListener("click", changeDisplay2);


function changeDisplay () {
    document.getElementById("jakarta").style.display = "grid";
    document.getElementById("samobor").style.display = "none";
    document.getElementById("jakartaButton").classList.add("activateButton")
    document.getElementById("samoborButton").classList.remove("activateButton")
};
function changeDisplay2 () {
    document.getElementById("jakarta").style.display = "none";
    document.getElementById("samobor").style.display = "grid";
    document.getElementById("jakartaButton").classList.remove("activateButton")
    document.getElementById("samoborButton").classList.add("activateButton")
};

